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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categorySchema, productSchema } from "@/types/types";
import { getSession, useSession } from "next-auth/react";
import { getAuthSession } from "@/utils/auth";

type FormData = z.infer<typeof productSchema>;

export function AddPdt() {
  const form = useForm({
    resolver: zodResolver(productSchema),
  });

  const queryClient = useQueryClient();

  // React Query Mutation for adding a product

  // React Query Query for fetching categories
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("/api/categories");
      return response.data;
    },
  });

  const onSubmit = async (formData:FieldValues) => {
    const session = await getSession();

    if (session?.user.isAdmin) {
      try {
        const userEmail = session?.user.email;

        // Assuming /api/products is your API endpoint for adding products
        const response = await axios.post("http://localhost:3000/api/products", {
          ...formData,

        });

        if (response.status === 201) {
          // Product added successfully
          console.log("Product added successfully:", response.data);

          // Reset the form
          form.reset();
        } else {
          console.log("Product adding failed:", response.data);
        }
      } catch (error) {
        console.log("Error adding product:", error);
      }
    } else {
      console.log("User is not an admin or session not found");
    }
  };
  const { data: session } = useSession();

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
                <Input placeholder="Product title" {...field} />
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
                  {categories?.map(
                    (category: { slug: string; title: string }) => (
                      <option key={category.slug}>{category.title}</option>
                    )
                  )}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Email</FormLabel>
              <FormControl>
                {/* Set the value to the current user's email */}
                <Input
                  placeholder="User Email"
                  {...field}
                  value={session?.user.email!}
                  readOnly
                />
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
