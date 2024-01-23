"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image18 from "./assets/image-18.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={70.72} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame4-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md">
          <div className="text-left pb-4 mb-4">
            <p className="mt-4 text-left mr-16">
              With the threshold effect applied, click on the
              <span className="font-bold"> Show 3D</span> button to render the 3D
              image.
            </p>
            <p className="pt-4 text-left">Depending on the computer, a short lag period may happen. If the 3D image does not 
appear in the upper right corner, the user can click on the <span className="text-primary font-bold dark:text-white">&#34;centre view&#34;</span> button on the upper 
left of the blue window. Clicking on the 3D image with the left mouse button will allow the 
user to move the 3D image. To zoom in and out, click and hold the right mouse button and 
drag until desired view is achieved.</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="mr-16 ml-16"
              alt="Somethings never change"
              src={image18}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame4-1" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame4-3">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
