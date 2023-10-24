'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import image5 from "./assets/image-5.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Progress progress={16.64} size="md"/>
    <main className="flex flex-row items-center justify-between p-8 space-y-4">

<div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/3dslicer/frame1-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        </div>

      <div className="space-y-4 bg-[rgba(191,213,247,0.3)] p-14 rounded-lg shadow-md text-center flex items-center">
        <div>

        <div className="flex flex-col space-y-4 items-center">
        <p>
          After loading, your dataset should show in the list as shown above.
          Click the <span className="font-bold">&#34;Patient Name&#34; </span> then click <span className="font-bold">&#34;Load&#34;</span>
          Click the{" "}
          <span className="font-bold">&#34;Patient Name&#34; </span> then
          click <span className="font-bold">&#34;Load&#34;</span>
        </p>

        <Image className=" transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
          alt="somethings never change"
          src={image5}
          width={550}
          height={550}
          />
        </div>
          </div>
</div>
<div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1-4">
          <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}