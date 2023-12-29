" use client"
// working
import { useForm } from 'react-hook-form';

import { getSession } from 'next-auth/react';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useQuery } from '@tanstack/react-query';

type category = {
  title: string;
  slug: string;
};

interface FormData {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
  isFeatured: boolean;
  userEmail: string;
}



const AddPdtsss = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

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
      } else {
        console.error('Product adding failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title:</label>
      <Input {...register('title', { required: 'Title is required' })} />
      {errors.title && <span>{errors.title.message}</span>}

      <label>Description:</label>
      <Input {...register('desc')} />

      <label>Price:</label>
      <Input {...register('price', { required: 'Price is required' })} type="number" />
      {errors.price && <span>{errors.price.message}</span>}

      <label>Category:</label>
      <select {...register('catSlug', { required: 'Category is required' })}>
        <option value="">Select Category</option>
        {categories?.map((category: category) => (
          <option key={category.slug} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>
      {errors.catSlug && <span>{errors.catSlug.message}</span>}

      <label>
        Is Featured:
        <input {...register('isFeatured')} type="checkbox" />
      </label>

      <input type="hidden" {...register('userEmail')} />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddPdtsss;
