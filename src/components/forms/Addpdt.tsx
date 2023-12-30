// not working
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";

import axios, { AxiosResponse } from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {useQuery } from "@tanstack/react-query";
import {  productSchema } from "@/types/types";
import { getSession, useSession } from "next-auth/react";

import React from "react";

type FormData = z.infer<typeof productSchema>;
type category = {
  title: string;
  slug: string;
};
export function AddPdt() {
  const form = useForm({
    resolver: zodResolver(productSchema),
  });

  

  // React Query Mutation for adding a product

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
          form.setValue('userEmail', session.user.email);
        }
      });
    }
  }, [isLoading,form]);

  const onSubmit = async (data: FieldValues) => {
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
    form.reset();
  };
  const session = getSession();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input  type="text" placeholder="Product title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Product description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isFeatured"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Featured</FormLabel>
              <FormControl>
                <input type="checkbox"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="img"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                type="number"
                  placeholder="Price"
                  {...field}
                  // Ensure the value is a number
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="catSlug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <select {...field}>
                <option value="">Select Category</option>
        {categories?.map((category: category) => (
          <option key={category.slug} value={category.slug}>
            {category.title}
          </option>
        ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
