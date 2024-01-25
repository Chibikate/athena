"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import Image2 from "./assets/Image2.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={3.6} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/mesh-mixer">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md">
          <div className="text-center pb-4 mb-4">
            <p className="mt-4 text-center">
              Once the user properly installed and opened the Meshmixer, an opening screen with some
              starting action buttons will be shown. The import button will bring into Meshmixer an external
              mesh file of their choice. All of the most common mesh formats are supported (STL, OBJ, PLY,
              AMF, 3MF, OFF, and MIX). 
            </p>
            <p >For this tutorial, an STL file downloaded earlier will be used</p>
            <p>Click on the <span className="font-bold dark:text-white text-primary">&#34;Import&#34;</span> button and select the desired .stl file.</p>
            <p>The user can simply drag-and-drop the mesh files into the edit space and either replace the
              current object or append to the model.</p>
          </div>
          <div className="flex  justify-center">
            <Image
              className="mr-16 ml-16"
              alt="Somethings never change"
              src={Image2}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/mesh-mixer" className="md:hidden flex">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/mesh-mixer/frame1-1" >
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
