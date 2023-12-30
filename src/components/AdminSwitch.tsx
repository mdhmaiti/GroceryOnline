"use client"
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Switch } from './ui/switch';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';


interface AdminSwitchProps {
    isAdmin: Boolean; // Use Boolean with a capital "B"
    onToggle: (newStatus: boolean) => void;
  }
  
  const AdminSwitch: React.FC<AdminSwitchProps> = ({ isAdmin, onToggle }) => {
    const [checked, setChecked] = useState(Boolean(isAdmin)); // Convert to boolean
  
    const router = useRouter()
  const { isLoading, error, data,refetch  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/api/admin');
      return response.data;
      
  },
  
});

  const queryClient = useQueryClient();

  useEffect(() => {
    // Update the checked state when the data changes
    if (data) {
      setChecked(data.isAdmin);
    }
  }, [data])

  const mutation = useMutation({
    mutationFn:  async ({ status }: { status: boolean }) => {
      const response = await axios.put('http://localhost:3000/api/admin', { isAdmin: status });
      return response.data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["admin"] });
      window.location.reload();
      
    
    },
  });

    
    const handleToggle = async (newChecked: boolean) => {
      setChecked(newChecked);
      router.push('/')
  
      try {
        // Make a request to update the user's isAdmin status
        await mutation.mutateAsync({ status: newChecked });
        // Notify parent component about the toggle
        onToggle(newChecked);
        
        
        
        
        
        refetch();
      } catch (error) {
        console.error('Error updating admin status:', error);
        // Revert the switch state if there is an error
        setChecked(!newChecked);
      }
    };
  

  return (
    <Switch
    onCheckedChange
    ={handleToggle}
      checked={checked}
      
     
    />
  );
};

export default AdminSwitch;
