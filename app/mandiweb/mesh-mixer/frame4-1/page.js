'use client';

import { Progress } from 'flowbite-react';


import Image from "next/image";
import Image22 from "./assets/Image22.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
    <Progress progress={93} size="md"/>
    <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
      <div className="md:flex justify-between mt-8 space-x-4  hidden">
        <Link href="/mandiweb/mesh-mixer/frame4-1-3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
          </div>
          <div className="flex flex-row items-center justify-center y-2">
            <div className="flex flex-col items-center">
            <p className="text-center">
            Given that the mandible remains a mesh, the user needs to convert the model into a solid form
suitable for 3D printing. This can be achieved by clicking on 
                <span className="font-bold dark:text-white text-primary"> “Edit”</span> in the left toolbar and
subsequently selecting <span className="font-bold dark:text-white text-primary">&#34;Make Solid&#34;</span>
              </p>
              <Image className="py-2 mr-16 ml-16"
                alt="Somethings never change"
                src={Image22}
                width="100%"
                height="auto"
              />   
            </div>
           </div>
        </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/mesh-mixer/frame4-1-3" className="md:hidden flex">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/mandiweb/mesh-mixer/frame4-1-4">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>     
    </main>
    </div>
  );
}