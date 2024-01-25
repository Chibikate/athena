"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image6 from "./assets/image-6.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={20.8} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-8 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame1-3">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="space-y-4  bg-[rgba(191,213,247,0.3)] p-14 rounded-lg shadow-md text-center flex items-center">
          <div>
            <div className="flex flex-col space-y-4 p-2 text-justify items-center">
              <p>
                The CT scan files appear once the DICOM files have finished
                loading. To zoom in and out, users can hold the right mouse
                button and drag until the desired view is achieved. To scroll
                through the CT scan, either using the middle mouse scroll or
                dragging the slider above the boxes will work equally well.{" "}
                <br /> The current view is referred to as{" "}
                <span className="text-primary dark:text-white font-bold text-italic">
                  &#34;four up&#34;
                </span>
                . The empty window on the upper right is where the 3D image will
                be displayed once activated. Clicking on the arrow on the
                toolbar, as indicated above, will activate a drop-down selection
                box containing different views that users can utilize based on
                their preference. For this tutorial, the default four up view
                will be used.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                className="  ml-16 mr-16"
                alt="somethings never change"
                src={image6}
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame1-3" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
