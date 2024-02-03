"use client"
import { signIn } from "next-auth/react";
import GoogleIcon from "./ui/GoogleIcon";
import { Button } from "./ui/button";

import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";



const HandleSignIn = () => {
    const { toast } = useToast();
   
  return (
    <Button
      className="flex flex-row items-center justify-center p-2 py-3 gap-4  h-fit w-full shadow-md bg-zinc-950  hover:bg-zinc-800   "
      variant={"ghost"}
      onClick={async () => {
        try {
            await signIn("google");
            toast({
                
                title: "Sign in initiated",
               
              });
               
              
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              });
        }
        
      }}
    >
      <GoogleIcon Height={"40"} Width={"40"} />
      <p className="font-bold font-2xl  text-zinc-100">Sign-in with Google</p>
    </Button>
  );
};

export default HandleSignIn;
