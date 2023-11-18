import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";

// i want only the google provider and we will call  this in the auth folder of the api section
// we need a provider in the options (eg google for the sign in sign out)
// we also need an adapter which links o auth accounts to the user account (this does not let to create a mess in the db )
// in short adapters does not create un necessary other users.
export const authOptions : NextAuthOptions={
  adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // ...add more providers here
      ],
    
}
// now get the server session for each auth options 
export const getAuthSession = ()=> getServerSession(authOptions);


