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
            <p className="text-left font-bold text-xl text-primary">
              Load Data{" "}
            </p>
            <p className="text-left ml-4 pb-2">
              After opening 3D Slicer, the user will be directed to the Welcome
              panel, which can be used to load their own data or download sample
              data for exploration. Sample data is often useful for trying out
              the features of 3D Slicer, especially if the user does not have
              data of their own.
            </p>

            <div className="flex justify-center p-5">
              <Image
                className=" items-center"
                alt="somethings never change"
                src={Image1}
                width="100%"
                height="auto"
              />
            </div>
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
          <Link href="/mandiweb/3d-slicer/3Dinterface3">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
