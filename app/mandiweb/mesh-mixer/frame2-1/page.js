'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image8 from "./assets/Image8.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Progress progress={39.6} size="md"/>
    <main className="flex flex-row items-center text-center justify-between p-14 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/mesh-mixer/frame2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">   
            <p className="mt-4 text-center">
              A single left click will select the highlighted area. Holding
              down the left mouse button will <span className="font-bold">&#34;Paint&#34;</span> the area.
            </p>
          </div>
          <div className="flex items-center justify-center py-2">
          <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
          alt="Somethings never change"
          src={Image8}
          width={550}
          height={550}
        />
          </div>
          </div>
           <div className="flex justify-between mt-8 space-x-4">
           <Link href="/mandiweb/mesh-mixer/frame2-2">
             <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
               <ChevronRightIcon className="w-8 h-8" />
             </div>
           </Link>
         </div>
    </main>
    </div>
  );
}
