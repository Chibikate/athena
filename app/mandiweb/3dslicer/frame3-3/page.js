import Image from "next/image";
import image15 from "./assets/image-15.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame3-2">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row space-x-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
              To perform threshold-based segmentation, click on the{" "}
              <span className="font-bold">Threshold</span> effect.
            </p>
          </div>
          <div className="flex items-center justify-center py-6">
          <Image
              alt="somethings never change"
              src={image15}
              width={550}
              height={550}
            />
        </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
      
    </main>
  );
}