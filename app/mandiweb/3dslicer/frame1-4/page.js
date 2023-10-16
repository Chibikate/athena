import Image from "next/image";
import image6 from "./assets/image-6.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1-3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="space-y-4  bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center flex items-center">
        <div>
          <div className="flex flex-col space-y-4 items-center">
            <p className="text-justify mb-4">
              The CT scan files should show up once the DICOM files are done
              loading. To zoom in and out, hold &#34;
              <span className="font-bold">Right Click</span>&#34; and &#34;
              <span className="font-bold">Drag</span>&#34;until the desired view is
              acquired. To scroll through the CT scan, use the middle
              mouse scroll-wheel or dragging the slider above the boxes will both work equally well. <br />{" "}
              The current view we are using is called &#34;
              <span className="font-bold">Four Up</span>&#34;. The empty window on{" "}
              the upper right is where the 3D image will be shown once
              activated. Clicking on the arrow on the toolbar as
              indicated above will activate a drop-down selection box which
              contains different views the user can utilize according to
              preference. For purposes of the activity, we will use the default four-up view.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image className="  ml-16 mr-16 transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="somethings never change"
              src={image6}
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
