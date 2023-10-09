import Image from "next/image";
import image5 from "./assets/image-5.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
<div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1-4">
          <div className="w-16 h-16  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      
      <div className="space-y-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md text-center flex items-center">
        <div>
          <div className="flex flex-col space-y-2 items-center">
          <h3 className="text-2xl font-extrabold mb-4 text-primary">3D Slicer Module</h3>
          <p className="text-justify">
            Modules in 3D Slicer allow us to perform actions that affect the
            DICOM files in various ways.<br/> The drop-down menu can be accessed from
            the upper left of the toolbar as indicated<br/> above. For the purpose of
            the activity, we will only be using{" "}
            <span className="font-bold">Crop Volume</span>,{" "}
            <span className="font-bold">Segment Editor,<br/></span>and{" "}
            <span className="font-bold">Volumes Module</span> in preparation of
            the 3D file.
          </p>
</div>
<div className="flex items-center justify-center py-4">
        <Image alt="something never " src={image5} width={550} height={550} />
        </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame2-1">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
        </main>
  );
}
