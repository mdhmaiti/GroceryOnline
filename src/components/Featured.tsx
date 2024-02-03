
import { productSchema } from "@/types/types";
import Image from "next/image";
import React, { Suspense } from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "./ui/card";
import axios from "axios";


const getData = async () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const apiURL = `${baseURL}/api/products`;
  
  // const res = await fetch(apiURL, {
  //   cache: "no-store",
  // });
  try {
    const response = await axios.get(apiURL, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    const data = await response.data;

    const validatedProducts = productArraySchema.parse(data);

    return validatedProducts;
  } catch (error) {
    throw new Error('Failed!');
  }
  

  // if (!res.ok) {
  //   throw new Error("Failed!");
  // }

  // const data = await res.json();

  // Validate the array of products
  // const validatedProducts = productArraySchema.parse(data);

  // return validatedProducts;
};

const productArraySchema = z.array(productSchema);
type ProductArrayType = z.infer<typeof productArraySchema>;

const Featured = async () => {


  
const featuredProducts: ProductArrayType = await getData();



  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto p-4 max-h-screen overflow-y-scroll">
      <Suspense fallback={<p>Loading feed...</p>}>
      {/* Card 1 */}
      {featuredProducts.map((item:any, index:any) => (
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
      </Suspense>
    </div>
  );
};

export default Featured;
