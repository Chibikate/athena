'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image11 from "./assets/Image11.jpg";
import Image12 from "./assets/Image12.jpg";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
    <Progress progress={50.4} size="md"/>
    <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
      <div className="md:flex justify-between mt-8 space-x-4  hidden">
        <Link href="/mandiweb/mesh-mixer/frame2-3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col pb-4 items-center">
              <p className="text-center">After separating the mandible from the skull,<br/> the object browser
              window will pop up. We can hide<br/> and unhide the structures by
              clicking on the &ldquo;
              <span className="font-bold">Eye</span>&rdquo; icon <br/>as shown above.</p>
              <Image 
                alt="Somethings never change"
                src={Image11}
                width="100%"
              height="auto"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center"> We can also rename each part by double-clicking<br/> the name of the
              part. For the activity, we shall rename<br/> the part into &#34;mandible&#34;. We
              can also hide the rest of the<br/> parts we are not working with to make
              the program run smoother.</p>
              <Image 
                alt="Somethings never change"
                src={Image12}
               width="100%"
              height="auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/mesh-mixer/frame2-3" className="md:hidden flex">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/mandiweb/mesh-mixer/frame3-1-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}
