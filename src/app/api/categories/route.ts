
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


import { z } from 'zod';

const categorySchema = z.object({
  title: z.string(),
  desc: z.string(),
  color: z.string(),
  img: z.string(),
  slug: z.string(),
});



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

  try {
    // Get the category data from the request body
    const { title, desc, color, img, slug } = categorySchema.parse(req.body);

    // Create the category
    const category = await prisma.category.create({
      data: { title, desc, color, img, slug },
    });

    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error) {
    console.error('Error creating category:', error);
    return new NextResponse(JSON.stringify("category creation failed"), { status: 400 });
  }
}

