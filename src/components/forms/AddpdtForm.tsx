" use client";
// working
import { useForm } from "react-hook-form";

import { getSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { productSchema } from "@/types/types";
import { useDropzone} from 'react-dropzone';
import Image from "next/image";

type category = {
  title: string;
  slug: string;
};

type TFormData = z.infer<typeof productSchema>;

const AddPdtForm = ({className}:{className:string}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,

    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(productSchema),
  });

  // to upload the image function
  
  // using dropzone 
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader;

    file.onload = function() {
      setPreview(file.result);
    }

    file.readAsDataURL(acceptedFiles[0])
  }, [])

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const upload = async () => {
    
    const APIKEY = process.env.NEXT_CLOUDINARY_API_KEY!
    if ( typeof acceptedFiles[0] === 'undefined' ) return;
      const data = new FormData();
      data.append("file", acceptedFiles[0]);
      data.append("upload_preset", "grocery_tf1dxrsc");
      data.append('api_key', APIKEY);
      
  
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dizkf7aba/image/upload",
        {
          method: "POST",
         
          body: data,
        }
      );// the data here comes from the new Form data
  
      const resData = await res.json();
      return resData.url;
     };



  // fetching the categories
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:3000/api/categories").then((res) => res.json()),
  });

  React.useEffect(() => {
    // Fetch user's email from session when categories data is available
    if (!isLoading) {
      getSession().then((session) => {
        if (session?.user?.email) {
          setValue("userEmail", session.user.email);
        }
      });
    }
  }, [isLoading, setValue]);

  const { toast } = useToast();

  const onSubmit = async (data: TFormData) => {
    try {
      const url = await upload();
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          

          ...data,
	  img: url,
        }),
      });

      if (response.ok) {
        toast({
          title: "product added successfully",
        });
        const responseData = await response.json();

        console.log("Product added successfully:", responseData);

        reset();
        setPreview(null);
      } else {
        console.error("Product adding failed:", response.statusText);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-4"
    >
      <label className="text-md font-semibold">Title:</label>
      <Input {...register("title", { required: "Title is required" })} />
      {errors.title && (
        <span className="text-sm text-red-500">{errors.title.message}</span>
      )}

      <label className="text-md font-semibold">Description:</label>
      <Input {...register("desc")} />

      <label className="text-md font-semibold">Price:</label>
      <Input
        {...register("price", { required: "Price is required" })}
        type="number"
      />
      {errors.price && (
        <span className="text-sm text-red-500">{errors.price.message}</span>
      )}

      <label className="text-md font-semibold">Category:</label>
      <select
        className="outline-none rounded-md text-md p-2 focus:bg-accent focus:text-accent-foreground"
        {...register("catSlug", { required: "Category is required" })}
      >
        <option value="">Select Category</option>
        {categories?.map((category: category) => (
          <option key={category.slug} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>
      {errors.catSlug && (
        <span className="text-sm text-red-500">{errors.catSlug.message}</span>
      )}

      <label className="flex flex-row items-center gap-2">
        <p className="text-md font-semibold "> Is Featured:</p>
        <input {...register("isFeatured")} type="checkbox" />
      </label>

      {/* handling the image */}
      <label className="text-md font-semibold">Picture</label>
      <div {...getRootProps({className:className})}className="border-dotted border-2 border-sky-500 rounded-2xl p-4 opacity-70" >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag and drop some files here, or click to select files</p>
              }
      </div>
      <div>
      {preview && (
            <p className="mb-5">
              <Image src={preview as string} height={400} width={400} alt="Upload preview" />
            </p>
          )}
      </div>

      <input type="hidden" {...register("userEmail")} />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddPdtForm;

// using use state 
 // const [file, setFile] = useState<File>();

  // const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement;
  //   const item = (target.files as FileList)[0];
  //   setFile(item);
  // };

  // const upload = async () => {
    
  //   const data = new FormData();
  //   data.append("file", file!);
  //   data.append("upload_preset", "grocery_tf1dxrsc");

  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/dizkf7aba/image/upload",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "multipart/form-data" },
  //       body: data,
  //     }
  //   );

  //   const resData = await res.json();
  //   return resData.url;
  // };
  
      // {/* handling the image */}
      // <label className="text-md font-semibold">Picture</label>
      // <Input id="picture" onChange={handleChangeImg} type="file" />

