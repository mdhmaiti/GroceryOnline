import ItemCard from "@/components/ItemCard";
import { Button } from "@/components/ui/button";

const Home =() =>{
  return(
  <div className="">
    Hello medhashis
    <div className="flex flex-col items-center justify-center h-full">
    <Button >Button</Button>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
   </div>
    
  </div>
  )
}
export default Home;