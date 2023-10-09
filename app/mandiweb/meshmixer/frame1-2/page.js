import Image from "next/image";
import Image4 from "./assets/Image4.png";
import Image5 from "./assets/Image5.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center text-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame1-1">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row space-x-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
              To move the view to the desired position, <br />click on the desired
              position in the view cube (e.g. top, right, left, etc.).
            </p>
          </div>
          <div className="flex flex-row items-center justify-between py-2">
            <div className="flex items-center justify-center">
              <Image
                alt="Somethings never change"
                src={Image4}
                width={500}
                height={450}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Somethings never change"
                src={Image5}
                width={500}
                height={450}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-2 items-center">
              <p className="text-center mt-4">
                To separate the mandible, start by generating face groups.<br /> This will
                allow you to select most of the mandibles in the least <br />amount of
                time. Click on the &ldquo;Edit&rdquo; button on the left toolbar<br /> to
                bring up the selection menu. Click on &ldquo;
                <span className="font-bold">Generate Face Groups</span>&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame1-3">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
