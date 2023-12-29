"use client"

import AddPdtss from "@/components/forms/AddPdtss";
import { AddPdt } from "@/components/forms/Addpdt";
import AddPdts from "@/components/forms/Addpdts";
import AddPdtsss from "@/components/forms/Addpdtsss";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const OOder = () => {
    const {data:session} =  useSession();
  const router = useRouter();

 // this is the correct way of dynamic navigation and the next auth session do not use the use router hook 
 if(!session?.user.isAdmin)  {
  router.push('/sign-in')
  return null
 }
  return (
    <div className="mx-auto my-20 w-1/3 h-full"><AddPdtsss/></div>
  )
}

export default OOder