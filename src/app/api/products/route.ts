
import { getAuthSession } from "@/utils/auth";
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
    
    // trial 3  -> makes a shallow copy , if the category is present(cat) spread the catslog as  cat(shallow) if not make the is featured true(shallow)
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

// post the product to the db if he is an admin
export const POST = async(req:NextRequest)=>{
  //check if the user is authenticated and is an admin
  const session = await getAuthSession();
  if(session?.user.isAdmin){
    try {
      // get the body
      const body = await req.json();
      const product = await prisma.product.create({
        data:body,
      });
      return  new NextResponse(JSON.stringify(product), { status: 201 });
      
    } catch (error) {
      console.log(error);
      return new NextResponse(JSON.stringify("product adding failed "));
      
    }

  }
  else{
    return new NextResponse(JSON.stringify({message:" the user is not an admin"}))
  }
}