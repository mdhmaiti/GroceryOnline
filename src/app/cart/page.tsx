"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Cart = () => {

  const { data: session, status } = useSession()
  const router = useRouter()
  
  if(status=="unauthenticated"){
    router.push('/sign-in')
    
  }
  return (
    <div>Cart</div>
  )
}

export default Cart