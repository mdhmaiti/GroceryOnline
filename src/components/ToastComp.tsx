"use client"
import { useSession } from "next-auth/react";
import { useToast } from "./ui/use-toast";


const ToastComp = () => {
    const { data: session, status } = useSession();
    
  return (
    
    <div>  </div>
  )

  }
export default ToastComp