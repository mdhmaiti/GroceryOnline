// if he is an admin he can update the order status

import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

// req the body and chnage the status of the data
export const PUT = async(req:NextRequest,{params}:{params:{id:string}})=>{

    const {id} = params;
    const session = await getAuthSession();

    if(session?.user.isAdmin){
        try {
            const body = await req.json();
            const order = await prisma.order.update({
                where:{
                    id:id,
                },
                data:{status:body},
            })
    
            return new NextResponse(JSON.stringify({
                message: "Order has been updated!",
                order: order,
              }),{status:200})
        } catch (error) 
        {
            console.log(error);
            return new NextResponse(JSON.stringify("order update failed"),{status:500});
            
        }



    }

    else{
        return new NextResponse(JSON.stringify("the user is not the admin"),{status:400});
    }

    

}