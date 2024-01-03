import Featured from "@/components/Featured";
import ItemCard from "@/components/ItemCard";
import { ResizablePage } from "@/components/ResizablePage";
import { Button } from "@/components/ui/button";
import Image from 'next/image'

const Home =() =>{
  return(
  <div className=" ">
    
   
    <div className="flex flex-col h-full my-20 space-y-8">
      <div className="mx-5 rounded-md   h-96 relative">
     
      <ResizablePage/> 
    </div>
    <div className=" min-h-screen md:px-10 sm:px-5">
     {/* <Featured/>  */}

    </div>
    
   
   </div>
    
  </div>
  )
}
export default Home;