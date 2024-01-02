"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ResizablePage() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-w-full h-fit rounded-md bg-transparent outline-none p-5 "
    >
      <ResizablePanel defaultSize={50} className="  rounded-md shadow-sm shadow-slate-500" >
        <div className="flex items-center justify-center h-full relative">
           
          <div className=" absolute  inset-0 -z-10 bg-gradient-to-b from-cyan-500 to-pink-500 blur-sm opacity-20 " />

          <Carousel className="w-full max-w-sm p-2">
            <CarouselContent>
              <CarouselItem>
                <div className="p-3">
                  <Card className="bg-transparent ">
                    <CardContent className="flex aspect-square items-center justify-center relative p-6">
                      <Image
                        src="/vegstorePS.jpg"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw"
                        alt="vegetable"
                        className="absolute inset-0 -z-10 rounded-md "
                      />
                      <p className="font-semibold lg:text-4xl sm:text-2xl text-slate-100">
                        vegetables
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="p-3">
                  <Card className="bg-transparent ">
                    <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                      <Image
                        src="/kitchenUtensilsPS.jpg"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw"
                        alt="store"
                        placeholder="blur"
                        blurDataURL="/vercel.svg"
                        className="absolute inset-0 -z-10 rounded-md "
                      />
                      <p className="font-semibold lg:text-4xl sm:text-2xl text-slate-100">
                        {" "}
                        kitchen utensils{" "}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-3">
                  <Card className="bg-transparent ">
                    <CardContent className="flex aspect-square items-center justify-center relative p-6">
                      <Image
                        src="/marketPS.jpg"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw"
                        alt="store"
                        placeholder="blur"
                        blurDataURL="/vercel.svg"
                        className="absolute inset-0 -z-10 rounded-md  opacity-80"
                      />
                      <p className="font-semibold lg:text-4xl sm:text-2xl text-slate-100">
                        {" "}
                        everything you need just in one place{" "}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ResizablePanel>
      <ResizableHandle className=" bg-transparent px-3" />
      <ResizablePanel defaultSize={50} className="  rounded-md">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25} className=" rounded-md">
            <div className="flex h-full items-center justify-center relative p-6">
              <div className=" absolute  inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-md " />

              <span className="font-bold text-3xl text-slate-50">
                Welcome to the online super market
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle  className=" bg-transparent py-3"/>
          <ResizablePanel defaultSize={75} className="  rounded-md">
          <div className="flex h-full items-center justify-center relative p-6">
              <div className=" absolute  inset-0 -z-10 bg-gradient-to-t from-cyan-500 to-pink-500 rounded-md opacity-10 " />

              <span className="font-bold text-3xl">
                the project is in development 
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
