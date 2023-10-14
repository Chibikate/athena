import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-24 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-4">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="space-y-4 bg-primary rounded-lg shadow-lg p-8 text-white text-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 animate-bounce">
            {" "}
            🎉 Congratulations!
          </h2>
          <p className="text-justify">
          You have successfully converted a CT scan of a patient into a 3D file. 🚀  Further manipulation of this file is needed depending on the need. If no other modifications are required, feel free to print the file as is. Take note though, that the file may be too large or may contain errors depending on how well the segmentation was performed.

          </p>
          <p className="text-justify">
            But the journey doesn't end here! 🌟 Continue your adventure in the
            world of developing mandibular reconstruction by taking our 3D Quiz
            before proceeding to meshmixer.
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/Quiz">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
