"use client"



import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddPdtForm from "@/components/forms/AddpdtForm";

const AddProduct = () => {
    const {data:session} =  useSession();
  const router = useRouter();

 // this is the correct way of dynamic navigation and the next auth session do not use the use router hook 
 if(!session?.user.isAdmin)  {
  router.push('/sign-in')
  return null
 }
  return (
    <div className="mx-auto my-20 w-1/3 h-full"><AddPdtForm/></div>
  )
}

export default AddProduct