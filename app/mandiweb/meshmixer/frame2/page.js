import Image from "next/image";
import Image7 from "./assets/Image7.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center text-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame1-3">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">
            <p className="mt-4 text-justify">
              Once the face groups have been assigned, we can now select the
              areas by face group. To do this, first, click on <span className="font-bold">&#34;select&#34;</span> on the
              left toolbar. This will create a selection area (shadow) over
              your pointer. The size can be adjusted using the slider or by
              inputting a number on the size option as shown above.
            </p>
          </div>
          <div className="flex items-center justify-center py-2">
          <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image7}
              width={550}
              height={550}
            />
            </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame2-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
