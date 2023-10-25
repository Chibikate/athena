"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image2 from "./assets/image-2.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Progress progress={8.32} size="md" />
      <main className="flex flex-row items-center justify-between p-14 space-y-4">
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="space-y-4  bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center">
          <div className="flex flex-col items-center space-y-4">
            <div>
              <p className="mb-4">
                Click{" "}
                <span className="font-bold">&#34; Add DICOM data &#34;</span>
              </p>
            </div>
          </div>

          <Image
            className="  ml-16 mr-16 transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
            alt="somethings never change"
            src={image2}
            width={550}
            height={550}
          />
        </div>

        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame1-2">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
