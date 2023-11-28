import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// find the order by the order id
// cases : if there is order then only proceed 


export async function POST(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
    try {
      const { orderId } = params;
      const order = await prisma.order.findUnique({
          where: {
            id: orderId,
          },
        });
  
        if (order) {
          const paymentIntent = await stripe.paymentIntents.create({
            amount: order.price.toNumber()  * 100,
            currency: "inr",
            automatic_payment_methods: {
              enabled: true,
            },
            description: `Payment for order ${orderId}`,
          });
          await prisma.order.update({
            where: {
              id: orderId,
            },
            data: { intent_id: paymentIntent.id },
          });
          return new NextResponse(
            JSON.stringify({ clientSecret: paymentIntent.client_secret }),
            { status: 200 }
          );
      }
      return new NextResponse(
        JSON.stringify({ message:"Order not found!" }),
        { status: 404 }
      );
      
    } catch (error) {
      console.error("Error processing payment:", error);
      return new NextResponse(
        JSON.stringify({ message: "Error processing payment" }),
        { status: 500 }
      );
      
    }
   
    
}
