
import prisma from "@/utils/db";
import { NextResponse } from "next/server";


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
