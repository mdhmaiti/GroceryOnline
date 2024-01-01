
import { categorySchema } from "@/types/types";
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";







export const GET = async () => {
  try {
    // trial 1 -> building an api to fetch all the categories created
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log("there is an error", error);
    return new NextResponse(JSON.stringify({ message: "error in the get" }), {
      status: 500,
    });
  }
};








export const POST = async(req:NextRequest)=>{
  //check if the user is authenticated and is an admin
  const session = await getAuthSession();
  console.log("Session:", session);

  
  if(session?.user.isAdmin){
    try {
      // get the body and the connect is necessary ; 
      // note in the front end you must have a user email which will be auto filled by the session email
      // after auto filling the email the api is triggered 
      const body = await req.json();
      // zod validation backend
      const parseBody = categorySchema.safeParse(body);
      if(!parseBody.success){
        console.log(parseBody.error)
        return new NextResponse(JSON.stringify("invalid input" ),{status:400});
      }
      // const userEmail = session?.user.email;
      
      const category = await prisma.category.create({
        data: {
          ...parseBody.data,
          
      }});
      return  new NextResponse(JSON.stringify(category), { status: 201 });
      
    } catch (error) {
      console.log(error);
      return new NextResponse(JSON.stringify("category adding failed "),{status:500});
      
    }

  }
  else{
    return new NextResponse(JSON.stringify({message:" the user is not an admin or session is not found"}),{status:400})
  }
}

