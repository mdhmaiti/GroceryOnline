import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

// order for each persons varies for that we need the session for the user ->
// step 1 : we can implemt it by using the server session which i defined in the function getAuthSession in the auth .ts
// step 2 : if he is an admin he can manupulate some of the orders and if he is an user he cannot .
export const GET = async (req: NextRequest) => {
  const session =  await getAuthSession(); // we get it from the server side 

  // once we get the session then if session we do something or otherwise return an error
  if (session) {
    try {
    } catch (error) {}
  } else {
    return new NextResponse(JSON.stringify({ message: "not authenticated" }), {
        status: 500,
      });
  }
};
