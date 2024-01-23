"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image2 from "./assets/image-2.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={4.16} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/3d-slicer/3Dinterface3">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className=" space-y-4 items-center bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex-1 flex justify-center ">
              
              <p className="mb-4 padding text-center ">
                <span className="text-2xl font-bold dark:text-white text-primary">Add DICOM to 3D Slicer</span> <br/>
                Click
                <span className="text-lg font-bold">&#34; Add DICOM data &#34;</span>
              </p>
            </div>
          </div>

<div className="flex justify-center">

          <Image
            className=" items-center"
            alt="somethings never change"
            src={image2}
            width="100%"
            height="auto"
            />
        </div>
            </div>

        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3d-slicer/3Dinterface3" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame1-1-1">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
