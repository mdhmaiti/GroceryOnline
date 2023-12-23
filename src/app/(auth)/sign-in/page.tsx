"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"



const Signin = () => {

  const handleSignIn = async () => {
     await signIn('google');
    // Handle the response if needed
  };

  return (
    <div><Button  onClick={handleSignIn}>Google</Button></div>
  )
}

export default Signin