import prisma from "@/utils/db";
import { NextResponse } from "next/server";


// to update the order status after the payment 
export const PUT = async ({ params }: { params: { intentId: string } }) => {
  const { intentId } = params;

  try {
    const updatedOrder = await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });

    if (!updatedOrder) {
      return new NextResponse(JSON.stringify({ message: "Order not found!" }), {
        status: 404,
      });
    }

    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating order:", error);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
