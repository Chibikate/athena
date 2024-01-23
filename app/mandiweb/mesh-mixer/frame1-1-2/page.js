'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image4 from "./assets/Image4.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={14.4} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/mesh-mixer/frame1-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
          <div className="text-center pb-4 mb-4">
            <p className="mr-16 ml-16">
              Sometimes, the gridlines are shown in the 3D printer bed after importing the file. These gridlines
              can be removed from the view by navigating to the upper left corner and clicking <span className="font-bold dark:text-white text-primary">&#34;view&#34;</span>. </p>
          <p>Then uncheck <span className="font-bold dark:text-white text-primary">&#34;Show Grid&#34;</span> and <span className="font-bold dark:text-white text-primary">Show Printer Bed&#34;.</span>&#34;</p>
          </div>
          <div className="flex justify-center">
            <Image className="mr-16 ml-16"
              alt="Somethings never change"
              src={Image4}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/mesh-mixer/frame1-1" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/mesh-mixer/frame1-2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

      </main>
    </div>
  );
}