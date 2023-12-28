import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";

// i want only the google provider and we will call  this in the auth folder of the api section
// we need a provider in the options (eg google for the sign in sign out)
// we also need an adapter which links o auth accounts to the user account (this does not let to create a mess in the db )
// in short adapters does not create un necessary other users.
// session strategy introduced in the v4 docs
// call back session from the docs nxt auth
// the deafault user type has only the name , image and email .. but i want the admin so i have to define the types for the user


//- give the interface whatever youlike
// declare module "next-auth" {
//   interface Session {
//     user:User & {
//       isAdmin:Boolean;
//     }
//   }
// }

// //- for the tokens is admin prop declaration
// declare module "next-auth/jwt" {
//   interface JWT {
    
//       isAdmin:Boolean;
    
//   }
// }

// moving the above file to the types folder 

export const authOptions : NextAuthOptions={
  adapter: PrismaAdapter(prisma),
  session:{
    strategy: "jwt"
  },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // ...add more providers here
      ],
      callbacks:{
        async session({token,session}){
          if(token){
            // is admin is configured in the prisma db it is not available inside the token yet,
            // and the token specifically comes from the jwt so we have to somehow link the jwt to the database.
            // for that next auth suggest an explicit jwt callback (docs)

            //if the token consist of the admin add it to the user field of the current session(note the is admin field of the token is still empty)
            session.user.isAdmin= token.isAdmin 
            session.user.email = token.email
          }
          return session
        },
        async jwt({token}){

          // configuration of the token

          // how to find who is admin ?
          // find the particular email from the db that is inside the token ( the token has a by default email prop which comes from jwt)
          // after you find that pass the boolean inside the token is admin

          // note if you don not do this u have to find the user again again from the db and check if he is admin or not ,, better to pass it inside the token
          const userInDb = await prisma.user.findUnique({
            where:{
              email:token.email!,
            }
          })
          token.isAdmin = userInDb?.isAdmin!;
          return token;
        },
        redirect() {
          return '/'
        },

      }
    
}
// now get the server session for each auth options 
export const getAuthSession = ()=> getServerSession(authOptions);