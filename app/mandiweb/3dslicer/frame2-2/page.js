import Image from "next/image";
import image7 from "./assets/image-7.png";
import image8 from "./assets/image-8.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame2-1">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row space-x-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
              Once in the Crop Volume module, click on the input{" "}
              <span className="font-bold">Region of Interest (ROI)</span> drop
              down box and select{" "}
              <span className="font-bold">Create New Annotation ROI</span>.
            </p>
          </div>
          <div className="flex items-center justify-center py-4">
            <Image
              alt="something never"
              src={image7}
              width={500}
              height={450}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
              Clicking on the &ldquo;
              <span className="font-bold">Eye</span>&rdquo; icon will reveal a
              bounding box that could be adjusted by clicking and dragging on
              the points to narrow the region of interest.
            </p>
          </div>
          <div className="flex items-center justify-center py-4">
            <Image
              alt="something never"
              src={image8}
              width={500}
              height={450}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame2-3">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
