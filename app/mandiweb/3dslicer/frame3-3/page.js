import Image from "next/image";
import image15 from "./assets/image-15.png";


import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="space-y-4 p-8">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            </div>
            <div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <Image
              alt="somethings never change"
              src={image15}
              width={1920}
              height={1080}
            />
            <p className="mt-4 text-center">
              To perform threshold-based segmentation, click on the{" "}
              <span className="font-bold">Threshold</span> effect.
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4">Next</Link>
        </div>
      </div>
    </main>
  );
}