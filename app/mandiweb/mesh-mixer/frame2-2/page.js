'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image10 from "./assets/Image10.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={43.2} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4  hidden">
          <Link href="/mandiweb/mesh-mixer/frame2-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
          <div className="text-center pb-4 mb-4">
            <p className="mt-4 text-justify">
              A <span className="font-bold dark:text-white text-primary">double left click</span> will highlight an entire group. In the example below, most of the mandible was
              selected. This is because of the assigned face group. The user can now work on <span className="font-bold">selecting the
              remaining areas of the mandible</span> by manual <span className="font-bold dark:text-white text-primary">&#34;Painting&#34;</span>. Select brush size can be increased and
              decreased depending on the accuracy needed. If a <span className="font-bold">mistake</span> is made, <span className="font-bold">holding shift</span> and clicking the
              <span className="font-bold"> left mouse</span> button will erase the selected area
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Somethings never change"
              src={Image10}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/mesh-mixer/frame2-1" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/mesh-mixer/frame2-3">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
