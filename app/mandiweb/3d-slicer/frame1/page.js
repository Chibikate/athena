"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image1 from "./assets/image-1.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden dark:text-white">
      <Progress progress={4.1} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between py-8 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden  ">
          <Link href="/mandiweb/3d-slicer">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="space-y-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-lg items-center text-center">
          <div className="flex flex-col items-center justify-between space-y-4">
            <div>
              <p className="text-2xl font-extrabold mb-4 text-primary">
                LOAD DICOM TO 3D SLICER
              </p>
            </div>
            <p className="py-4 ml-16 mr-16">
              Load the data by clicking on the{" "}
              <span className="font-bold">&ldquo;Load DICOM Data&ldquo;</span>{" "}
              button shown in the picture.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="somethings never change"
              src={image1}
              width={550}
              height={550}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>

          <Link href="/mandiweb/3d-slicer/frame1-1">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
