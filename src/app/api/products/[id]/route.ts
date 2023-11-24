import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

// get a single product to display on a page

export const GET = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "failed to get the product" }),
      { status: 500 }
    );
  }
};

// delete the product if he is an admin
export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;
    const session = await getAuthSession();
  
    if (session?.user.isAdmin) {
      try {
        await prisma.product.delete({
          where: {
            id: id,
          },
        });
  
        return new NextResponse(JSON.stringify("Product  deleted!"), {
          status: 200,
        });
      } catch (err) {
        console.log(err);
        return new NextResponse(
          JSON.stringify({ message: "Something went wrong!" }),
          { status: 500 }
        );
      }
    }
    return new NextResponse(JSON.stringify({ message: "not an admin" }), {
      status: 403,
    });
  };
