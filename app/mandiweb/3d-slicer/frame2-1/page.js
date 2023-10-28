"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image6 from "./assets/image-6.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={27} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="space-y-4   bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center flex items-center">
          <div>
            <div className="flex flex-col space-y-2 items-center pb-2">
              <p className="text-center mt-4">
                Click on the{" "}
                <span className="font-bold">
                  &ldquo;Magnifying Glass&rdquo;
                </span>
                icon on the toolbar, just left from the module drop-down box to
                bring up the search function and type in &ldquo;
                <span className="font-bold">Crop</span>&rdquo;. Select{" "}
                <span className="font-bold">Crop Volume</span> and click on{" "}
                <span className="font-bold">Switch to Module</span>.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
                alt="something never "
                src={image6}
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3d-slicer/frame2" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>

          <Link href="/mandiweb/3d-slicer/frame2-2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
