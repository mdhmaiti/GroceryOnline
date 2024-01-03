

import { getAuthSession } from "@/utils/auth";
import { useSession } from "next-auth/react";

import { redirect, useRouter } from "next/navigation";


const Orders =  async() => {
  


  const session = await getAuthSession();

  // this is the correct way of dynamic navigation and the next auth session do not use the use router hook 
  if (!session) {
    redirect("/sign-in");
  }

  // Render the content only if the user is authenticated
  // react query kora data fetch korbo , tar por admin hola data update korbo 
  return <div></div>;
};

export default Orders;
