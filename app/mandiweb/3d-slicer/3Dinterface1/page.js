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
          <Link href="/mandiweb/3d-slicer/3Dinterface">
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
            <p className="text-left font-bold text-xl text-primary">Toolbar </p>
            <p className="text-left ml-4 pb-2">
              Toolbar provides quick access to commonly used functions.
              Individual toolbar panels can be shown/hidden using menu:
              View/Toolbars sections.
            </p>
            <p className="text-left pb-2">
              <span className="font-bold text-primary">Module Selection</span>{" "}
              toolbar is used for selecting the currently active &#34;module&#34;. The
              toolbar provides options for searching for module names (
              <span className="font-bold text-primary">ctrl +</span> f or click
              on magnify glass icon) or selecting from a menu.{" "}
              <span className="font-bold text-primary">
                Module history dropdown button
              </span>{" "}
              shows the list of recently used modules.{" "}
              <span className="font-bold text-primary">Arrow buttons</span> can
              be used for going back to/returning from previously used module
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
            <p className="text-left pb-2">
              <span className="font-bold text-primary">Favorite modules </span>{" "}
              toolbar contains a list of most frequently used modules. The list
              can be customized using menu: Edit / Applications settings /
              Modules / Favorite Modules. Drag-and drop modules from the Modules
              list to the Favorite Modules list to add a
            </p>
          </div>

          <p className="text-primary font-bold text-xl text-left">
            Module Panel
          </p>
          <p className="text-left pb-2">
            The module panel is located on the left side of the application&#39;s
            main window and shows all of the options and features the current
            module provides to the user. The current module can be selected
            using the{" "}
            <span className="font-bold text-primary">Module Selection</span>{" "}
            toolbar
          </p>
          <p className="text-primary font-bold text-xl text-left">Data Probe</p>
          <p className="text-left pb-2">
            Data probe is located at the bottom of the module panel. It displays
            information about view content at the position of the mouse pointer.
          </p>
          <p className="text-primary font-bold text-xl text-left">Views</p>
          <p className="text-left pb-2">
            Slicer displays data in various views. The user can choose between a
            number of predefined layouts, which may contain slice, 3D chart, and
            table views
          </p>
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
          <Link href="/mandiweb/3d-slicer/3Dinterface2">
            <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
