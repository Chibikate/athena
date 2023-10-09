import Image from "next/image";
import image18 from "./assets/image-18.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-1">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>



      <div className="flex flex-col space-x-4 bg-[#A9CAFB] p-4 rounded-lg shadow-md">
        <div className="text-center mb-4">
            <p className="mt-4 text-justify">
              With the threshold effect applied, click on the show 3D button to
              render the 3D image. Depending on the computer used, a short lag
              period may happen. If the 3D image does not appear in the upper
              right corner, we can click on the{" "}
              <span className="font-bold">&ldquo;Center View&rdquo;</span>{" "}
              button on the upper left of the blue window. Clicking on the 3D
              image with the left mouse button will allow the user to move the
              3D image. To zoom in and out, click and hold the right mouse
              button and drag until desired view is achieved.
            </p>
          </div>
          <div className="flex items-center justify-center py-2">

          <Image
              alt="Somethings never change"
              src={image18}
              width={550}
              height={550}
            />
          </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-3">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}

