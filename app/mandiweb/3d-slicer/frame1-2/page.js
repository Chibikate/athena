"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image3 from "./assets/image-3.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={12.48} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/3d-slicer/frame1-1-1">
            <div className="w-16 h-16 hover:border-white-400 hover:border-2 hover:text-white bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="space-y-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center flex items-center">
          <div>
            <div className="flex flex-col space-y-2 pb-4 items-center">
              <p className="text-center mb-4">
                Select the downloaded folder and click{" "}
                <span className="font-bold">&#34;Import&#34;</span>
              </p>
            </div>
<div className="flex justify-center">

            <Image
              src={image3}
              alt="something"
              width="100%"
            height="auto"
            />
          </div>
              </div>
        </div>

        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3d-slicer/frame1-1-1" className="md:hidden flex">
            <div className="w-16 h-16 hover:border-white-400 hover:border-2 hover:text-white bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>

          <Link href="/mandiweb/3d-slicer/frame1-3">
            <div className="w-16 h-16 bg-primary hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
