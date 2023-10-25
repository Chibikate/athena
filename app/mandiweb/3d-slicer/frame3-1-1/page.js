"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image12 from "./assets/image-12.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Progress progress={45.76} size="md" />
      <main className="flex flex-row items-center justify-between p-14 space-y-4">
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame3-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
          <div>
            <div className="flex flex-col space-y-2 items-center">
              <p className="text-center mt-4">
                Once again, click on the module drop down menu from the toolbar
                and select the <span className="font-bold">segment editor</span>{" "}
                module.
              </p>
            </div>
            <div className="flex items-center justify-center py-4">
              <Image
                className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
                alt="somethings never change"
                src={image12}
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame3-2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}