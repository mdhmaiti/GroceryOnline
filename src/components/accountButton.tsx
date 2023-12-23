"use client";

// just render the sign in and sign out with the o auth ( bilkul jhamela nhi lene ka )
import * as React from "react";

import { Button,  } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ghost, UserRound } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

export function AccountButton() {
  const [position, setPosition] = React.useState("bottom");

  const user = false;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/")
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <UserRound className='glow'/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {/* if there is already a user present show logout, if not show login */}
          {status === "authenticated" && session ? (
            <DropdownMenuRadioItem className="text-sm font-semibold" value="top">
              Signout
            </DropdownMenuRadioItem>
          ) : (
            <>
              <DropdownMenuRadioItem className="text-sm font-semibold" value="top">
                <Link href='/sign-in' className="
                  
               text-sm font-semibold">  SignIn </Link>
              </DropdownMenuRadioItem>
              
            </>
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
