"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image5 from "./assets/image-5.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={24.96} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame1-4">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="space-y-4b bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center flex items-center">
          <div>
            <div className="flex flex-col space-y-2 items-center">
              <h3 className="text-2xl font-extrabold mb-4 text-primary">
                3D Slicer Module
              </h3>
              <p className="text-justify pb-2 ml-16 mr-16">
              Modules in 3D Slicer allow users to perform actions that affect DICOM files in various ways. 
The drop-down menu can be accessed from the upper left of the toolbar, as indicated below. 
For the purpose of the tutorial, the modules that users will be using are <span className="font-bold text-primary">Crop Volume</span>, 
<span className="font-bold text-primary"> Segment Editor, </span> and <span className="font-bold text-primary">Volumes Module</span>.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                className="ml-16 mr-16"
                alt="something never "
                src={image5}
                width="100%"
            height="auto"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3d-slicer/frame1-4" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame2-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
