import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth/next"


const handler = NextAuth(authOptions); // you can directly write the auth options here but this way it makes the thing way too clean 

export { handler as GET, handler as POST }