"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image16 from "./assets/image-16.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={62.4} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame3-3">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
          <div>
            <div className="flex flex-col space-y-2 pb-4 items-center">
              <p className="text-center mt-4">
                Once the threshold effect has been activated, the user can
                proceed to <span className="font-bold">adjust the threshold range</span> that the user desires to
                focus on. The can either input a specific number or drag the
                slider from left to right until the desired threshold is
                achieved. For this tutorial, input{" "}
                <span className="font-bold">&#34;450&#34;</span> in the minimum threshold
                (left box) as indicated below.
              </p>
            </div>
            <div className="flex justify-center ">
              <Image
                alt="Somethings never change"
                src={image16}
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame3-3" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame4-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
