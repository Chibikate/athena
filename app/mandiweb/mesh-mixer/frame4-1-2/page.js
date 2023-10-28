'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image27 from "./assets/Image27.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
    <Progress progress={86.4} size="md"/>
    <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
      <div className="md:flex justify-between mt-8 space-x-4 hidden">
        <Link href="/mandiweb/mesh-mixer/frame4-1-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">
          <p className="mt-4 pb-4 text-center">
          If clicking the eye icon will make the <span className="font-bold">&#34;accept&#34;</span> button for mirror function disappear, click again the <span className="font-bold">&#34;edit&#34;</span>, and then the <span className="font-bold">&#34;mirror&#34;</span>. You can make some adjustments with your mandible. 
 
          </p>
          <div className="flex justify-center ">
            <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image27}
              width={550}
              height={550}
            />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/mesh-mixer/frame4-1-1" className="md:hidden flex">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/mandiweb/mesh-mixer/frame4-1-3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div> 
    </main>
    </div>
  );
}

