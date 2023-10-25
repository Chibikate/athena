'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image15 from "./assets/Image15.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Progress progress={68.4} size="md"/>
    <main className="flex flex-row items-center text-center justify-between p-14 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame3-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">
          <p className="mt-4 text-center mr-16 ml-16">
            For the exercise, we will make a plane cut in the middle of the
            mandible cutting out the diseased side.<br/>To change the side to keep,
            click the small arrow as shown above. Should there be a need to keep<br/>
            both halves, the cut type could be set to &ldquo;slice (Keep
            Both)&rdquo; in the drop-down menu as shown above.<br/> To finalize the
            cut, click <span className="font-bold">accept</span>.
          </p>
          <div className="flex items-center justify-center py-2">
            <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image15}
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame3-3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>  
    </main>
    </div>
  );
}
