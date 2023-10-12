import Image from "next/image";
import image6 from "./assets/image-6.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
<div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="space-y-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md text-center flex items-center">
        <div>
        <div className="flex flex-col space-y-2 items-center">
        <p className="text-center mt-4">
          Click on the{" "}
          <span className="font-bold">&ldquo;Magnifying Glass&rdquo;</span>icon
          on the toolbar, just left from the module drop-down box to bring up
          the search function and type in &ldquo;
          <span className="font-bold">Crop</span>&rdquo;. Select{" "}
          <span className="font-bold">Crop Volume</span> and click on{" "}
          <span className="font-bold">Switch to Module</span>.
        </p>
</div>
      <div className="flex items-center justify-center py-4">
      <Image alt="something never " src={image6} width={550} height={550} />
        </div>
</div>
</div>
<div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame2-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}