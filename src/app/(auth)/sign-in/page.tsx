"use client"
import GoogleIcon from "@/components/ui/GoogleIcon"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signIn } from "next-auth/react"

const  Signin = () => {
return (
  <div className= " flex flex-col justify-center items-center min-h-screen ">
    <Card className="w-72 bg-transparent shadow-lg shadow-slate-200  relative ">
      <div className=" absolute inset-0 bg-gradient-to-b from-sky-800 to-transparent  opacity-60 blur-sm  rounded-lg -z-10"/>
  <CardHeader>
    <CardTitle className="mx-auto">Please sign in to continue.</CardTitle>
    
  </CardHeader>
  <CardContent>
  <Button className="flex flex-row items-center justify-center p-2 py-3 gap-4  h-fit w-full shadow-md bg-zinc-950  hover:bg-zinc-800   " variant={'ghost'}  onClick={async ()=> await signIn('google')}>
    <GoogleIcon Height={"40"} Width={"40"}/>
    <p className="font-bold font-2xl  text-zinc-100">Sign-in with Google</p>
  </Button>
  </CardContent>
  
  <CardFooter className="">
    <p className=" text-sm">By signing in, users agree to abide by the terms of service and privacy policy. </p>
  </CardFooter>
</Card>

  </div>
  
)
}

export default Signin