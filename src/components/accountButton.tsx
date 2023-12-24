"use client";

// just render the sign in and sign out with the o auth ( bilkul jhamela nhi lene ka )
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRound } from "lucide-react";

import { signIn, signOut, useSession } from "next-auth/react";

import { useToast } from "./ui/use-toast";
import { useEffect } from "react";
import { ToastAction } from "./ui/toast";
import GoogleIcon from "./ui/GoogleIcon";

export function AccountButton() {
  const { data: session, status } = useSession();

  const { toast } = useToast();
  const [position, setPosition] = React.useState("bottom");

  const handleSignIn = async () => {
    await signIn("google");

    // Handle the response if needed
  };
  
  const handleSignOut = async () => {
    await signOut();
  };
  useEffect(() => {
    if (status === "authenticated") {
      try {
        toast({
          description: "Sign in successfull",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  }, [status, toast]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <UserRound className="glow" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {/* if there is already a user present show logout, if not show login */}
          {status === "authenticated" && session ? (
            <DropdownMenuRadioItem
            className="flex flex-row items-center justify-center p-2 gap-2"
              onClick={() => {
                try {
                  handleSignOut();
                  toast({
                    description: " sign-out successful",
                  });
                } catch (error) {
                  toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                  });
                }
              }}
              value="top"
            >
             <GoogleIcon Height={"30"} Width={"30"}/>
                <p className="text-md font-bold">Google Sign-out</p>
            </DropdownMenuRadioItem>
          ) : (
            <>
              <DropdownMenuRadioItem
                className="flex flex-row items-center justify-center p-2 gap-2"
                onClick={() => {
                  handleSignIn();
                }}
                value="top"
              > <GoogleIcon Height={"30"} Width={"30"}/>
                <p className="text-md font-bold ">Google Sign-in</p>
              </DropdownMenuRadioItem>
            </>
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
