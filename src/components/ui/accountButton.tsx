"use client";

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

export function AccountButton() {
  const [position, setPosition] = React.useState("bottom");

  const user = false;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <UserRound />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {/* if there is already a user present show logout, if not show login */}
          {user ? (
            <DropdownMenuRadioItem className="text-sm font-semibold" value="top">
              Logout
            </DropdownMenuRadioItem>
          ) : (
            <>
              <DropdownMenuRadioItem className="text-sm font-semibold" value="top">
                Login
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="text-sm font-semibold" value="bottom">
                SignUp
              </DropdownMenuRadioItem>
            </>
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
