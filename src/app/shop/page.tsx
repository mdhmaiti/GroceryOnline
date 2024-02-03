import CategoryListComp from '@/components/CategoryListComp'
import React, { Suspense } from 'react'

const CategoryList = () => {
  return (
    <div className=" ">
    
   
    <div className="flex flex-col h-full my-20 space-y-8">
     
    </div>
    <div className=" min-h-screen md:px-10 sm:px-5">
    <Suspense fallback={<p>Loading feed...</p>}>
      {/* <CategoryListComp/>  */}
      </Suspense>
    </div>
    
   
   </div>
  )
    
  
}

export default CategoryList