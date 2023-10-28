'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image25 from "./assets/Image25.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
    <Progress progress={57.6} size="md"/>
    <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
      <div className="md:flex justify-between mt-8 space-x-4  hidden">
        <Link href="/mandiweb/mesh-mixer/frame2-4">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8"/>
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">         
          <p className="mt-4 text-justify pb-4 ml-16 mr-16">
            Once the mandible has been separated, we can now &ldquo;
            <span className="font-bold">cut off</span>&rdquo; the diseased
            side by using the plane cut function. This can be accessed by
            clicking on &ldquo;<span className="font-bold">Edit</span>&rdquo;
            in the left toolbar and selecting &ldquo;
            <span className="font-bold">Plane Cut</span>&rdquo;.
          </p>
        </div>
        <div className="flex items-center justify-center py-2">
          <div className="flex justify-center">
            <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image25}
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/mesh-mixer/frame2-4" className="md:hidden flex">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8"/>
          </div>
        </Link>
        <Link href="/mandiweb/mesh-mixer/frame3-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}
