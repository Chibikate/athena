"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image15 from "./assets/image-15.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={58.24} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame3-2-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
          <div>
            <div className="flex flex-col space-y-2 items-center">
              <p className="text-center">
                After selecting the bone, the user will perform threshold-based
                segmentation.
              </p>
              <p className="text-center">
                The purpose of threshold-based segmentation is to distinguish
                and outline specific structures within the medical imaging data,
                allowing the extraction and isolation of the region of interest
                from the rest of the image. In this tutorial, the focus is
                segmenting the bone.
              </p>
              <p className="text-center mt-4 pb-4 mr-16">
                Click on the
                <span className="font-bold"> &#34;Threshold&#34;</span> effect.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                className="mr-16 ml-16"
                alt="somethings never change"
                src={image15}
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link
            href="/mandiweb/3d-slicer/frame3-2-1"
            className="md:hidden flex"
          >
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame4">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
