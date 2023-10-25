'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import image9 from "./assets/image-9.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Progress progress={33.28} size="md"/>
    <main className="flex flex-row items-center justify-between p-14 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3d-slicer/frame2-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
         
          <p className="text-center mt-4">
            Drag the bounding box to focus on the areas needed. For this exercise,
            focus must be on the midface and mandible cutting out the rest of the
            skull but making sure the temporomandibular joint is included. Once
            the region of interest is selected, click apply to apply the crop.
            Click the <span className="font-bold">&ldquo;eye&rdquo;</span> icon
            once again to remove the bounding box.
          </p>
          <p>You will know your crop is applied when the image is zoomed in.</p>
        </div>
        <div className="flex items-center justify-center py-4">
        <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
         alt="something never " src={image9} width={550} height={550} />
        </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3d-slicer/frame3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}
