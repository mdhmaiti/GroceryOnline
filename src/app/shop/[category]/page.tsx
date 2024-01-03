import { ProductType } from "@/types/types";

import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { productSchema } from "@/types/types";
import Image from "next/image";
import React from "react";
import { z } from "zod";


const getData = async (category:string)=>{

  
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL! || 'http://localhost:3000';
  const apiURL = `${baseURL}/api/products?cat=${category}`;
  const res = await fetch(apiURL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  const data = await res.json();

  // Validate the array of products
  const validatedProducts = productArraySchema.parse(data);

  return validatedProducts;
};
type Props = {
  params:{category:string}
}
const productArraySchema = z.array(productSchema);
type ProductArrayType = z.infer<typeof productArraySchema>;
const AllProductList
= async ({params}:Props) => {
  const products:ProductArrayType = await getData(params.category)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto p-4 max-h-screen my-20 overflow-y-scroll">
      {/* Card 1 */}
      {products.map((item:any, index:any) => (
      <Card key={index} className="p-1 flex flex-col  space-y-1 bg-gradient-to-br from-emerald-500 ">
        <CardTitle className=" flex justify-center p-3" >
          <p>{item.title}</p>
        </CardTitle>

        <CardContent className=" relative h-40">
          <Image
            src={item.img}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw"
            alt="my pic"
            className="rounded-sm adbolute inset-0"
          />
          </CardContent>

<CardFooter className="flex flex-col items-center space-y-1 justify-center">
<p className="text-sm "> {item.desc}</p>
          <p className=" text-md font-semibold"><span className="px-2">price:</span>{item.price}</p>

          <Button variant={"default"}>Add to cart</Button>
        </CardFooter>
       
        
        
         
        
      </Card>
      ))}

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardTitle>
          <p>vghvghvgh</p>
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AllProductList
;
