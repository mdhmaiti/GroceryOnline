import Featured from "@/components/Featured";

import { ResizablePage } from "@/components/ResizablePage";

import { Suspense } from "react";

const Home =() =>{
  return(
  <div className=" ">
    
   
    <div className="flex flex-col h-full my-20 space-y-8">
      <div className="mx-5 rounded-md   h-96 relative">
     
      <ResizablePage/> 
    </div>
    <div className=" min-h-screen md:px-10 sm:px-5">
    <Suspense fallback={<p>Loading feed...</p>}>
     <Featured/> 
     </Suspense> 

    </div>
    
   
   </div>
    
  </div>
  )
}
export default Home;