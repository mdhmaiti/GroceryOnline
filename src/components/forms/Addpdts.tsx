"use client"
// working
import { useForm } from 'react-hook-form';
import { getSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type category = {
  title: string;
  slug: string;
};

interface FormData {
  title: string;
  desc: string;
  price: number;
  img:string;
  catSlug: string;
  isFeatured: boolean;
  userEmail: string;
}

const AddPdts = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [categories, setCategories] = useState<category[]>([]);
//use effect works fine 
  useEffect(() => {
    // Fetch categories from "localhost:3000/api/categories"
    fetch('http://localhost:3000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));

    // Fetch user's email from session
    getSession().then((session) => {
      if (session?.user?.email) {
        setValue('userEmail', session.user.email);
      }
    });
  }, [setValue]);

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

      <label>Image:</label>
      <Input {...register('img')} />

      <label>Price:</label>
      <Input {...register('price', { required: 'Price is required' })} type="number" />
      {errors.price && <span>{errors.price.message}</span>}

      <label>Category:</label>
      <select {...register('catSlug', { required: 'Category is required' })}>
        <option value="">Select Category</option>
        {categories.map((category) => (
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

export default AddPdts;
