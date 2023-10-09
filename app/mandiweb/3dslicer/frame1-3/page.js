import Image from "next/image";
import image5 from "./assets/image-5.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";


export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">

<div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/3dslicer/frame1-2">
          <div className="w-16 h-16  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        </div>

      <div className="space-y-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md text-center flex items-center">
        <div>

        <div className="flex flex-col space-y-4 items-center">
        <p>
          After loading, your dataset should show in the list as shown above.
          Click the <span className="font-bold">"Patient Name" </span> then click <span className="font-bold">"Load"</span>
          Click the{" "}
          <span className="font-bold">&ldquo;Patient Name&rdquo; </span> then
          click <span className="font-bold">&ldquo;Load&rdquo;</span>
        </p>

        <Image
          alt="somethings never change"
          src={image5}
          width={550}
          height={550}
          />
        </div>
          </div>
</div>
<div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame1-4">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}