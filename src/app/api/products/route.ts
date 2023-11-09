
import prisma from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    // trial 1 -> building an api to fetch all the products created
    const products = await prisma.product.findMany();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log("there is an error", error);
    return new NextResponse(JSON.stringify({ message: "error in the get" }), {
      status: 500,
    });
  }
};