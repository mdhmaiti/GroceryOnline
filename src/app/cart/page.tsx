
import { getAuthSession } from '@/utils/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const Cart = async() => {

  const session = await getAuthSession();

  // this is the correct way of dynamic navigation and the next auth session do not use the use router hook 
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div>Cart</div>
  )
}

export default Cart