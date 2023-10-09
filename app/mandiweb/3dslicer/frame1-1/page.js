import Image from "next/image";
import image2 from "./assets/image-2.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="space-y-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md text-center">
        <div className="flex flex-col items-center space-y-4">
          <div>
          <p className="text-2xl font-extrabold mb-4 text-primary">ADD DICOM DATA</p>
          </div>
          </div>

          <Image
            alt="somethings never change"
            src={image2}
            width={550}
            height={550}
          />
        </div>
      
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1-2">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
