'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image3 from "./assets/Image3.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
    <Progress progress={7.2} size="md"/>
    <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
      <div className="md:flex justify-between mt-8 space-x-4  hidden">
        <Link href="/mandiweb/mesh-mixer/frame1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center pb-4 mb-4">
          <p className="font-bold text-xl text-primary text-center">Navigating the 3D space in Meshmixer</p>
          <p className="mt-2">After loading the file, take time to navigate the 3D space. </p>
        </div>
        <div className="flex justify-center">
          <div className=" flex items-center justify-center">
            <Image className="mr-16 ml-16 transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image3}
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/mesh-mixer/frame1" className="md:hidden flex">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/mandiweb/mesh-mixer/frame1-1-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}
