import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// i want only the google provider and we will call  this in the auth folder of the api section
export const authOptions : NextAuthOptions={
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // ...add more providers here
      ],
    
}


