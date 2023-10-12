import Image from "next/image";
import image1 from "./assets/image-1.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between py-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4 ">
        <Link href="/mandiweb/3dslicer">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hover:text-white  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
      
      <div className="space-y-4 bg-[rgba(191,213,247,0.3)] border-2 border-primary p-8 rounded-lg shadow-lg items-center text-center">
        <div className="flex flex-col items-center justify-betweenspace-y-4">
          <div>
            <p className="text-2xl font-extrabold mb-4 text-primary">LOAD DICOM TO 3D SLICER</p>
          </div>
          <p className="py-4">
            Load the data by clicking on the{" "}
            <span className="font-bold">&ldquo;Load DICOM Data&ldquo;</span>{" "}
            button shown in the picture.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            alt="somethings never change"
            src={image1}
            width={550}
            height={550}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1-1">
          <div className="w-16 h-16 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
