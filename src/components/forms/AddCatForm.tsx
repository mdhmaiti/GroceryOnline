import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { categorySchema } from '@/types/types';
import { Textarea } from '../ui/textarea';
import { useToast } from '../ui/use-toast';
import { useDropzone } from 'react-dropzone';
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';


type FormData = z.infer<typeof categorySchema>;

const AddCatForm = () => {
  const { register, handleSubmit,reset,setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(categorySchema),
  });
  const { toast } = useToast();

  //random string 
  const [generatedSlug, setGeneratedSlug] = useState<string | null>(null);

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
  
 // Generate a random string for the slug field
 const generateRandomSlug = () => {
  const randomSlug = uuidv4();
  setGeneratedSlug(randomSlug);
  setValue('slug', randomSlug);
};


 //submit form
  const onSubmit = async (data: FormData) => {
    console.log('Form submitted with data:');
    try {
      const url = await upload();
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
      const apiURL = `${baseURL}/api/categories`;
      
      const response = await fetch(apiURL, {
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
          title: "category added successfully",
        });
        const responseData = await response.json();

        console.log("Product added successfully:", responseData);

        reset();
        setPreview(null);
      } else {
        console.log("category adding failed:", response.statusText);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }

    
    
  };

  return (
    <div>
      {generatedSlug && <p className='mx-auto'>Generated Slug: {generatedSlug}</p>}
      <Button  className=" w-full my-10"variant={"outline"} onClick={generateRandomSlug}>Generate Random Slug</Button>

    
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-4">
     <label className="text-md font-semibold">Title:</label>
      <Input {...register("title", { required: "Title is required" })} />
      {errors.title && (
        <span className="text-sm text-red-500">{errors.title.message}</span>
      )}

      <label className="text-md font-semibold">Description:</label>
      <Textarea {...register("desc")} />
      {errors.desc && (
        <span className="text-sm text-red-500">{errors.desc.message}</span>
      )}
     
      
      <label className="text-md font-semibold">Slug: </label>
      <p className = " text-sm text-blue-400 opacity-60"> make it unique otherwise it will not add  </p>
       <Input {...register("slug", { required: "slug is required" })} />
      {errors.slug && (
        <span className="text-sm text-red-500">{errors.slug.message}</span>
      )}
     
      <label className="text-md font-semibold">color:</label>
       <Input {...register("color", { required: "color is required" })} />
      {errors.color && (
        <span className="text-sm text-red-500">{errors.color.message}</span>
      )}
      {errors.color && <span className="text-sm text-red-500"></span>}
      <br />
       {/* handling the image */}
       <label className="text-md font-semibold">Picture</label>
      <div {...getRootProps()}className="border-dotted border-2 border-sky-500 rounded-2xl p-4 opacity-70" >
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

      

      <Button type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default AddCatForm