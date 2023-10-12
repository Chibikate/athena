import Image from "next/image";
import image17 from "./assets/image-17.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4">
          <div className="w-16 hover-border hover:border-white-400 hover:border-2 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 border-2 border-primary bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
        <div className="text-center mb-4">
          <p>
            With our minimum threshold as 450, we can observe that only the
            bone has been selected.<br/> Click on apply to apply the threshold effect.
          </p>
        </div>

        <div className="flex items-center justify-center py-2">
          <Image
            alt="Somethings never change"
            src={image17}
            width={550}
            height={550}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
