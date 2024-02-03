"use client"

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { getAuthSession } from '@/utils/auth';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';
import Image from "next/image";


import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddPdtForm from "@/components/forms/AddpdtForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const CartItems = [
  {
    id: 1,
    title: "Item 1",
    img:"/giraffe.jpg",
    price:"2",

  },
  {
    id: 2,
    title: "item 2",
    img:"/giraffe.jpg",
    price:"548",


  },
  {
    id: 3,
    title: "Item3",
    img:"/giraffe.jpg",
    price:"848",


  },
  {
    id: 4,
    title: " Item 4",
    img:"/giraffe.jpg",
    price:"489",


  },
  {
    id: 5,
    title: " Item 5",
    img:"/giraffe.jpg",
    price:"659",


  },
  {
    id: 6,
    title: " Item 6",
    img:"/giraffe.jpg",
    price:"454",


  },
  {
    id: 7,
    title: " Item 7",
    img:"/giraffe.jpg",
    price:"55",


  },
  
];

const Cart = () => {
  const {data:session} =  useSession();
  const router = useRouter();



  // this is the correct way of dynamic navigation and the next auth session do not use the use router hook 
  useEffect(() => {
    if (!session) {
      router.push('/sign-in');
      
    }
    
  }, [session, router]);

  if(!session?.user)  {
  
    return  <div className='flex flex-col h-screen items-center justify-center'><p className='text-3xl font-md'> Sign in first</p></div>
   }
   
  return (
    <div className='mt-20'>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto p-4 max-h-screen overflow-y-scroll">
    <Suspense fallback={<p>Loading feed...</p>}>
      {CartItems.map((item: any, id: number) => (
         <Card key = {id} className="p-1 flex flex-col  space-y-1 bg-gradient-to-br from-emerald-500 " >
         <CardTitle className=" flex justify-center p-1 gap-2" >
          <p>{item.title}</p>
          <p> Rs : {item.price}</p>
        </CardTitle>
        
        

        <CardContent className=" relative h-40">
          <Image
            src={item.img}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw"
            alt="my pic"
            className="rounded-sm adbolute inset-0"
          />
          </CardContent>
         
         </Card>


      ))}
      </Suspense>
     
    </div>
    </div>
  )
}

export default Cart