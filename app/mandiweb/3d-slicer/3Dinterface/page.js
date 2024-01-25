"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import Image1 from "./assets/image1.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/3d-slicer">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white 
             bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className=" space-y-4 items-center bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex-1 flex justify-center ">
              <p className="mb-4 padding text-center ">
                <span className="text-3xl font-bold dark:text-white text-primary">
                  INTRODUCTION TO 3D SLICER INTERFACE
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              className=" items-center"
              alt="somethings never change"
              src={Image1}
              width="100%"
              height="auto"
            />
          </div>

          <div className="p-2">
            <p className="text-left font-bold text-xl dark:text-white">
              Application Menu{" "}
            </p>
            <ul class="list-disc pl-10 p-2">
              <li className="text-left">
                <span className="font-bold">File:</span> The file
                menu is for loading previously saved scene or individual
                datasets of various types, and downloading sample datasets from
                the internet. An option for saving scenes and data is also
                provided here.{" "}
              </li>
              <p className="text-left ml-20">
                <span className="font-bold">- Add Data</span>{" "}
                allows loading data from files.
              </p>
              <p className="text-left ml-20">
                <span className="font-bold">- DICOM</span> module
                is recommended to import data from DICOM files and loading of
                imported DICOM data.
              </p>
              <p className="text-left ml-20">
                <span className="font-bold">- Save</span> opens the
                &#34;Save Data&#34; window, which offers a variety of options for saving
                all data or selected datasets.
              </p>
              <li className="text-left">
                <span className="font-bold">Edit:</span> contains
                an option for showing Application Settings, which allows users
                to customize appearance and behavior of Slicer, such as modules
                displayed in the toolbar, application font size, temporary
                directory location, location of additional Slicer modules to
                include.{" "}
              </li>
              <li className="text-left">
                <span className="font-bold">View:</span> Functions
                for showing/hiding additional windows and widgets, such as:{" "}
              </li>
              <p className="text-left ml-20">
                <span className="font-bold">
                  - Extension Manager
                </span>{" "}
                for installing extensions form Slicer app store;
              </p>
              <p className="text-left ml-20">
                <span className="font-bold">- Error Log</span> for
                checking if the application encountered any potential errors;
              </p>
              <p className="text-left ml-20">
                <span className="font-bold">
                  - Show/hide toolbars,
                </span>{" "}
                or{" "}
              </p>
              <p className="text-left ml-20">
                <span className="font-bold">
                  - Switch view layout.
                </span>
              </p>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/3Dinterface1">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
