'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import image19 from "./assets/image-19.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Progress progress={83.2} size="md"/>
    <main className="flex flex-row items-center justify-between p-14 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md">
        <div className="text-center mb-4">
            <p className="mt-4 text-center mr-16 ml-16">
              Once we are satisfied with our 3D image, we may now save our file.
              We can choose to <br/> rename the file by clicking on the segmentation
              drop-down menu and select{" "} <br/>
              <span className="font-bold">
                &ldquo;Rename current Segmentation&rdquo;.
              </span>{" "}
               </p>
          </div>
          <div className="flex items-center justify-center py-2">

          <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={image19}
              width={550}
              height={550}
              />
              </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-3-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}

