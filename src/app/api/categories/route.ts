
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








export const POST = async (req:NextRequest)=> {
  // Check if the request is a POST request
  

  // Check if the user is authenticated and is an admin
  const session = await getAuthSession();
  if (!session || !session.user.isAdmin) {
    return new NextResponse(JSON.stringify("Unauthorized"), { status: 400 });
  }
  if(session?.user.isAdmin){

  try {
    // Get the category data from the request body
    const body = await req.json();

     // zod validation backend
     const parseBody = categorySchema.safeParse(body);
     if(!parseBody.success){
       console.log(parseBody.error)
       return new NextResponse(JSON.stringify("invalid input" ),{status:400});
     }

    // Create the category
    const category = await prisma.category.create({
      data: {
        ...parseBody.data,
        
    },
    });

    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error) {
    console.error('Error creating category:', error);
    return new NextResponse(JSON.stringify("category creation failed"), { status: 400 });
  }
}
else{
  return new NextResponse(JSON.stringify({message:" the user is not an admin or session is not found"}),{status:400})
}
}

