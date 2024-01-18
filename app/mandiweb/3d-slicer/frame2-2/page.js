"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image7 from "./assets/image-7.jpg";
import image8 from "./assets/image-8.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={29.12} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame2-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
          <div>
            <div className="flex flex-col space-y-2 items-center">
              <p className="text-center mt-4">
              Once in the crop volume module, click on the input Region of Interest (ROI) drop down box 
and select <span className="font-bold">Create New ROI</span>.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                
                alt="something never"
                src={image7}
                width="100%"
            height="auto"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col space-y-2 items-center">
              <p className="text-center mt-4">
                Clicking on the &ldquo;
                <span className="font-bold">Eye</span>&rdquo; icon will reveal a
                bounding box that could be adjusted by clicking and dragging on
                the points to narrow the region of interest.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                
                alt="something never"
                src={image8}
                width="100%"
            height="auto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3d-slicer/frame2-1" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>

          <Link href="/mandiweb/3d-slicer/frame2-3" >
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
