"use client";

import Image from "next/image";
import Image1 from "./assets/image1.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/3d-slicer/3Dinterface1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className=" space-y-4 items-center bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex-1 flex justify-center ">
              <p className="mb-4 padding text-center ">
                <span className="text-3xl font-bold text-primary">
                  INTRODUCTION TO 3D SLICER INTERFACE
                </span>
              </p>
            </div>
          </div>

          <div className="p-2">
            <div className="flex justify-center p-5">
              <Image
                className=" items-center"
                alt="somethings never change"
                src={Image1}
                width="100%"
                height="auto"
              />
            </div>

            <p className="text-primary font-bold text-xl text-left">
              View Data
            </p>
            <p className="text-left pb-2">
              Data module&#39;s Subject hierarchy tab shows all data sets in the
              scene. Click the “eye” icon to show/hide an item in all views.
            </p>
            <p className="text-left pb-2">
              The user can customize views (show orientation marker, ruler,
              change orientation, transparency) by clicking on the push pin in
              the top left corner of the viewer. In the slicer viewers, the
              horizontal bar can be used to scroll through slices or select a
              slice.
            </p>
            <p className="text-left pb-2">
              <span className="italic">Slices</span> are essentially 2D views or
              images that represent a particular plane through the 3D data.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link
            href="/mandiweb/3d-slicer/3Dinterface"
            className="md:hidden flex"
          >
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
