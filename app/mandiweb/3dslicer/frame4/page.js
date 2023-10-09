import Image from "next/image";
import image16 from "./assets/image-16.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame3-3">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row space-x-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
                  Once the threshold effect has been activated, we can adjust
                  the threshold range we desire to focus on. We can either input
                  a specific number or drag the slider from left to right until
                  we achieve our desired threshold. For the purpose of this
                  activity, we will input <span className="font-bold">450</span>{" "}
                  in the minimum threshold (left box) as indicated above.
                </p>
              </div>
              <div className="flex items-center justify-center py-6">
              <Image
                alt="Somethings never change"
                src={image16}
                width={550}
                height={550}
              />
            </div>
            </div>
          </div>
          <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-1">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
