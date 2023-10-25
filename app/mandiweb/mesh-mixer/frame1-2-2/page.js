'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image5 from "./assets/Image5.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Progress progress={28.8} size="md"/>
    <main className="flex flex-row items-center text-center justify-between p-14 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/mesh-mixer/frame1-2-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4 space-y-4">
          <p className="text-center justify-center items-center mt-4">
            Separating the mandible begins with generating face groups. This
            will allow us to select most of the mandible with the least amount
            of time. Click on the <span className="font-bold">edit</span> button on the left toolbar to bring up
            the selection menu. Click on &ldquo;
            <span className="font-bold">Generate Face Groups</span>&rdquo;.
          </p>
          <div className="flex items-center justify-center">
            <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image5}
              width={500}
              height={450}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/mesh-mixer/frame1-3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover.border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}
