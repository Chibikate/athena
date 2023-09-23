import Image from "next/image";
import image17 from "./assets/image-17.png";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4 items-center">
            <Image
              alt="Somethings never change"
              src={image17}
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <p className="mt-4 text-justify">
              With our minimum threshold as 450, we can observe that only the
              bone has been selected. Click on apply to apply the threshold
              effect.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3-3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-2">Next</Link>
        </div>
      </div>
    </main>
  );
}
