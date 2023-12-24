import { getAuthSession } from "@/utils/auth";

import { redirect } from "next/navigation";

const Orders = async () => {
  const session = await getAuthSession();

  // this is the correct way of dynamic navigation and the next auth session do not use the use router hook 
  if (!session) {
    redirect("/sign-in");
  }

  // Render the content only if the user is authenticated
  return <div>dfjgjdfklgdjklgjdklgjdklgjdkgj</div>;
};

export default Orders;
