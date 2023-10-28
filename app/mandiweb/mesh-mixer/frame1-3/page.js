"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import Image6 from "./assets/Image6.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={32.4} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/mesh-mixer/frame1-2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-x-4b bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
          <div className="text-center pb-4 mb-4">
            <p className="mt-4 text-justify">
              Meshmixer will automatically create face groups based on the angle
              input threshold value. You can either drag the slider or input a
              number (default is 10) until a satisfactory amount of the mandible
              is selected as a different face group (different color) from the
              rest of the structure. For a smoother experience, it&lsquo;s
              recommended to input a number instead of dragging the slider. Once
              the desired result is achieved, click accept. Depending on the
              hardware, a lag period is expected.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image6}
              width={550}
              height={550}
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/mesh-mixer/frame1-2" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/mesh-mixer/frame2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
