import Image from "next/image";
import Image21 from "./assets/Image21.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center text-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame4-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">
        <p className="text-center">
            To save as &ldquo;<span className="font-bold">.STL</span>&rdquo;,
            click on &ldquo;<span className="font-bold">File</span>&rdquo; in
            the top toolbar and select &ldquo;
            <span className="font-bold">Export</span>&rdquo; or access it via
            its hotkey &ldquo;<span className="font-bold">Ctrl+E</span>
            &rdquo;.
          </p>
          <div className="flex items-center justify-center py-2">
          <Image
            alt="Somethings never change"
            src={Image21}
            width={550}
            height={550}
          />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame5">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div> 
    </main>
  );
}