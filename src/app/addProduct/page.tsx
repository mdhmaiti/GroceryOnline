"use client"



import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddPdtForm from "@/components/forms/AddpdtForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const AddProduct = () => {
    const {data:session} =  useSession();
  const router = useRouter();

 // this is the correct way of dynamic navigation and the next auth session do not use the use router hook 
 // without the use effect it gives the location error
 useEffect(() => {
  if (!session) {
    router.push('/sign-in');
  }
}, [session, router]);

 if(!session?.user.isAdmin)  {
  
  return  <div className='flex flex-col h-screen items-center justify-center'><p className='text-3xl font-md'> Sorry you are not admin</p></div>
 }
 

  return (
    <div className=" flex flex-col justify-center items-center gap-4">
    <p className="text-4xl font-semibold text-slate-500  mt-32"> Add Product Page</p>
    <p className="text-sm font-semibold text-slate-500">cannot find your category?</p>
    <Button variant={"default"}> <Link href="/addCategory">add Category</Link> </Button>
    <div className="mx-auto my-20 w-1/3 h-full"><AddPdtForm/></div>
    </div>
  )
}

export default AddProduct