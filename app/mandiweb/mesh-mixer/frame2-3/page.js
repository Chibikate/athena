'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image11 from "./assets/Image11.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={46.8} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/mesh-mixer/frame2-2">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
          <div className="text-center pb-4 mb-4">
            <p className="mt-4 text-justify">
              Once the mandible has been satisfactorily highlighted, it can now be separated from the rest of
              the skull. Still, under the <span className="font-bold dark:text-white text-primary">Select</span> menu, hover the &ldquo;<span className="font-bold dark:text-white text-primary">edit</span> as shown below to bring out another
              selection menu and click <span className="font-bold dark:text-white text-primary">&#34;Separate&#34;</span>. A quicker way would be using the hotkey <span className="font-bold dark:text-white text-primary">&#34;Y&#34;</span>. WARNING,
              edit under the select menu is entirely different from the edit button seen in the left toolbar.
              Selecting the edit menu in the toolbar will cause all the selected areas to disappear.
            </p>
          </div>
          <div className="flex justify-center ">
            <Image
              alt="Somethings never change"
              src={Image11}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/mesh-mixer/frame2-2" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/mesh-mixer/frame2-4">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

