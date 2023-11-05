'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image16 from "./assets/Image16.jpg";
import Image17 from "./assets/Image17.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
    <Progress progress={72} size="md"/>
    <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
      <div className="md:flex justify-between mt-8 space-x-4  hidden">
        <Link href="/mandiweb/mesh-mixer/frame3-2">
          <div className="w-16 h-16  hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
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
              To mirror the remaining mandible, click on &ldquo;
              <span className="font-bold">Edit</span>&rdquo; in the left<br/> toolbar
              and select &ldquo;<span className="font-bold">Mirror</span>
              &rdquo;.
            </p>
            <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image16}
              width="100%"
              height="auto"
            />
          </div>
          <div className="flex flex-col items-center mx-2 y-2">
          <p className="text-center">
              {" "}
              A mirror image of the selected part will appear.<br/> To bring the
              mandible together, click and drag the <br/> arrow as shown above or
              click on the desired area.
            </p>
          <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image17}
              width="100%"
              height="auto"
            />
            
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/mesh-mixer/frame3-2" className="md:hidden flex">
          <div className="w-16 h-16  hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/mandiweb/mesh-mixer/frame4">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div> 
      
    </main>
    </div>
  );
}
