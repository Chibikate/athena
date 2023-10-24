'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import image3 from "./assets/image-3.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Progress progress={12.48} size="md"/>
    <main className="flex flex-row items-center justify-between p-14 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/3dslicer/frame1-1">
          <div className="w-16 h-16 hover:border-white-400 hover:border-2 hover:text-white bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        </div>

        <div className="space-y-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center flex items-center">
          <div>
        <div className="flex flex-col space-y-2 items-center">
        <p className="text-2xl font-extrabold mb-2 text-primary">IMPORT FILES</p>
        <p className="text-center mb-4">Select the downloaded folder and click <span className="font-bold">&#34;Import&#34;</span></p>
          </div>

        <Image className="ml-16 mr-16 transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
        src={image3}
        alt="something" 
        width={550}
        height={550}
      />
        </div>
        </div>
      
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1-3">
          <div className="w-16 h-16 bg-primary hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}
        