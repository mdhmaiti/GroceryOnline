
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

// trial 1 -> building an api to fetch all the products created
// trial 2 -> some featured products are displayed in the home screen 
// trial 3 -> the all the products are displayed on a particular category on a different page.(slug concept)

// it will be determined by the url so we need a next url and the next request
export const GET = async (req:NextRequest) => {
    // to get the category from every url : every new url is stored in the search params (destructuring)
    const { searchParams } = new URL(req.url);
    // now extract the category slug
    const cat = searchParams.get("cat");

  try {
    
    // trial 3  -> makes a shallow copy , if the category is presend spread the catslog as  cat(shallow) if not make the is featured true(shallow)
    const products = await prisma.product.findMany({
        where: {
            ...(cat ? { catSlug: cat } : { isFeatured: true }),
          },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log("there is an error", error);
    return new NextResponse(JSON.stringify({ message: "error in the get" }), {
      status: 500,
    });
  }
};