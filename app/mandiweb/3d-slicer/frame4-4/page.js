"use client";

import { Progress } from "flowbite-react";

import Image from "next/image";
import image20 from "./assets/image-20.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
      <Progress progress={100} size="md" />
      <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
        <div className="md:flex justify-between mt-8 space-x-4 hidden">
          <Link href="/mandiweb/3d-slicer/frame4-3">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md">
          <div className="text-left pb-4 mb-4">
            <p className="mt-4 text-left">
              Selecting{" "}
              <span className="text-primary font-bold dark:text-white">&#34;Export to Files&#34;</span>{" "}
              will prompt a small window to appear where the user can then
              adjust the size scale and coordinate system of the image. The user
              can choose the destination folder by clicking on the file path as
              indicated above.
            </p>
            <p className="pt-4">
              The scale factor is a numerical multiplier that adjusts the size
              of rendered images or models, ensuring accurate spatial
              representation and maintaining true dimensions in medical imaging
              data.{" "}
            </p>
            <p className="pt-4">
              The coordinate system establishes a consistent reference frame
              across different datasets, enabling accurate measurements and
              alignments. The coordinate system in 3D Slicer may use conventions
              like &#34;LPS,&#34; which stands for
              &#34;Left-Posterior-Superior.&#34; In this system, &#34;Left&#34;
              corresponds to the patient&#39;s left side, &#34;Posterior&#34; refers
              to the back side of the patient, and &#34;Superior&#34; indicates
              the upper part, often corresponding to the head
            </p>
            <p className="pt-4">
              The integration of the scale factor and virtual coordinate system
              is essential for precise spatial analysis and visualization in 3D
              Slicer, ensuring a standardized representation of structures
              across various datasets.
            </p>
            <p className="pt-4">
              Once the desired file destination, size scale, and coordinate
              system are set, click{" "}
              <span className="text-primary dark:text-white font-bold">&#34;Export&#34;</span> to save the
              file.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Somethings never change"
              src={image20}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/3d-slicer/frame4-3" className="md:hidden flex">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
          <Link href="/mandiweb/3d-slicer/frame5">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronRightIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
