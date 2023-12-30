" use client"
// working
import { useForm } from 'react-hook-form';

import { getSession } from 'next-auth/react';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


type category = {
  title: string;
  slug: string;
};

// interface FormData {
//   title: string;
//   desc: string;
//   price: number;
//   catSlug: string;
//   isFeatured: boolean;
//   userEmail: string;
// }
 const productSchema = z.object({
    
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  desc: z.string(),
  img: z.string().optional(),
  price: z.coerce.number().positive(),
  isFeatured: z.boolean().default(false),
  catSlug: z.string(),
  userEmail: z.string().email(),
  options: z.array(
      z.object({
        title: z.string(),
        additionalPrice: z.number(),
      })
    ).optional(),
  });
 
  type FormData = z.infer<typeof productSchema>;

const AddPdtForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    
    formState: { errors },
  } = useForm<FormData>({
    resolver:zodResolver(productSchema)
  });

  const { isLoading, error, data:categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:3000/api/categories").then((res) => res.json()),
  });

  React.useEffect(() => {
    // Fetch user's email from session when categories data is available
    if (!isLoading) {
      getSession().then((session) => {
        if (session?.user?.email) {
          setValue('userEmail', session.user.email);
        }
      });
    }
  }, [isLoading, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Product added successfully:', responseData);
        reset();
        
      } else {
        console.error('Product adding failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center gap-4'>
      <label className='text-md font-semibold'>Title:</label>
      <Input {...register('title', { required: 'Title is required' })} />
      {errors.title && <span className='text-sm text-red-500'>{errors.title.message}</span>}

      <label className='text-md font-semibold'>Description:</label>
      <Input {...register('desc')} />

      <label className='text-md font-semibold'>Price:</label>
      <Input {...register('price', { required: 'Price is required' })} type="number" />
      {errors.price && <span className='text-sm text-red-500'>{errors.price.message}</span>}

      <label className='text-md font-semibold'>Category:</label>
      <select className='outline-none rounded-md text-md p-2 focus:bg-accent focus:text-accent-foreground' {...register('catSlug', { required: 'Category is required' })}>
        <option value="">Select Category</option>
        {categories?.map((category: category) => (
          <option key={category.slug} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>
      {errors.catSlug && <span className='text-sm text-red-500'>{errors.catSlug.message}</span>}

      <label className='flex flex-row items-center gap-2'>
        <p className='text-md font-semibold '> Is Featured:</p>
        <input  {...register('isFeatured')} type="checkbox" />
        
      </label>

      <input type="hidden" {...register('userEmail')} />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddPdtForm;
