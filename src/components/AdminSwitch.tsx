"use client";
import { useEffect, useState } from "react";

import axios from "axios";
import { Switch } from "./ui/switch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { boolean } from "zod";
import { revalidatePath } from "next/cache";


// maintaining this single source of truth only works if i want to get things from both the server and client side it created wierd bugs
interface AdminSwitchProps {
  isAdmin: Boolean; // Use Boolean with a capital "B"
 
  
}

// ... (imports)


const AdminSwitch = ({ isAdmin,  }:AdminSwitchProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [ischecked,setChecked] = useState<boolean>(!!isAdmin)

  // Fetch initial admin status on component mount




const mutation = useMutation({
  mutationFn:  async ({ status }: { status: boolean }) => {
    const response = await axios.put('http://localhost:3000/api/admin', { isAdmin:status});
    return response.data;
  },
  onSuccess() {
    queryClient.invalidateQueries({ queryKey: ["admin"] });
    
    
    console.log('mutation works');
    
    
  
  },
});

  const updateAdminStatus = async () => {
    try {
      await mutation.mutateAsync({ status:!ischecked  });

      setChecked(!ischecked)
        // Invalidate the query to trigger a refetch
       
        console.log('Admin status updated successfully');
        window.location.reload();
    
    } catch (error) {
      console.error('Error updating admin status:', error);
    }
  };

 

  return <div>
   
   <Switch onCheckedChange={updateAdminStatus} checked={ischecked}  />
   </div>
};

export default AdminSwitch;

