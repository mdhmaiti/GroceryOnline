// Import necessary modules and types
import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

// request to get admin
export const GET = async (req: NextRequest) => {
  try {
    // Check if the user is authenticated
    const session = await getAuthSession();
    
    if (session) {
      // Get the isAdmin value from the request body
      

      // Update the isAdmin status for the currently authenticated user
      const getUser = await prisma.user.findUnique({
        where: { email:session.user.email!},
        select: {
          isAdmin:true,
        }, // Assuming email is unique
        
      });

      if (getUser !== null) {
        // Return isAdmin directly as a boolean
        return new NextResponse(
          JSON.stringify(getUser.isAdmin),
          { status: 200 }
        );}
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Session is not found" }),
        { status: 403 }
      );
    }
  } catch (error) {
    console.error('Error updating admin status:', error);
    return new NextResponse(
      JSON.stringify("Internal Server Error"),
      { status: 500 }
    );
  }
};


// put request to update admin
export const PUT = async (req: NextRequest) => {
  try {
    // Check if the user is authenticated
    const session = await getAuthSession();
    
    if (session) {
      // Get the isAdmin value from the request body
      const { isAdmin } = await req.json();

      // Update the isAdmin status for the currently authenticated user
      const updatedUser = await prisma.user.update({
        where: { email:session.user.email!}, // Assuming email is unique
        data: { isAdmin },
      });

      return new NextResponse(
        JSON.stringify(updatedUser),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Session is not found" }),
        { status: 403 }
      );
    }
  } catch (error) {
    console.error('Error updating admin status:', error);
    return new NextResponse(
      JSON.stringify("Internal Server Error"),
      { status: 500 }
    );
  }
};
