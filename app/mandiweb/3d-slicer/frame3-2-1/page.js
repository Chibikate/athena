"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image12 from "./assets/image-12.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={54.08} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame3-2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
          <div>
            <div className="flex flex-col pb-4 space-y-2 items-center">
              <p className="text-center mt-4 mr-16 ml-16">
                With a segment added,{" "}
                <span className="font-bold">double click</span> the{" "}
                <span className="font-bold">
                  &#34;color selection button&#34;
                </span>{" "}
                and it will bring up a menu that will allow the user to select
                and assign different colors for different structures if so
                desired. In this context, tissue is represented by the color
                <span className="text-green-400 font-bold"> green</span>,
                arteries by <span className="text-red-600 font-bold">red</span>{" "}
                , body fat by{" "}
                <span className="text-[#e0d53e] font-bold">yellow</span> , and
                bone by a{" "}
                <span className="text-[#eabd7b] font-bold">pale shade</span>.
                For this tutorial, select
                <span className="font-bold"> &ldquo;Bone&rdquo;</span>.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                alt="somethings never change"
                src={image12}
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame3-2" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame3-3">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
