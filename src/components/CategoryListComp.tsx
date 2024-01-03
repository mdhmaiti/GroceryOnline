import { CategoryType, categorySchema } from "@/types/types";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if (!res.ok) {
    throw new Error("Failed!");
  }

  const data = await res.json();

  // Validate the array of products
  const validatedProducts = categoryArraySchema.parse(data);

  return validatedProducts;
};

const categoryArraySchema = z.array(categorySchema);
type CategoryArrayType = z.infer<typeof categoryArraySchema>;
const CategoryListComp = async () => {
const categories:CategoryArrayType = await getData()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto p-4 max-h-screen overflow-y-scroll">
      {/* Card 1 */}
      {categories.map((item:any, index:any) => (
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
          <p className=" text-md font-semibold"><span className="px-2">price:</span>{item.color}</p>

          <Button variant={"default"}>   <Link
          href={`/shop/${item.slug}`}
          
          
           
        > browse</Link></Button>
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

export default CategoryListComp;
