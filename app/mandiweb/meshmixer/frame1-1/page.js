import Image from "next/image";
import Image3 from "./assets/Image3.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y p-8">
        <div className="flex flex-row space-x-4 items-center"></div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image
              alt="Somethings never change"
              src={Image3}
              width={1920}
              height={1080}
            />
            <p className="mt-4 text-justify">
              After loading the file, take time to navigate the 3D space. Click,
              hold, and drag the right mouse button to turn the 3D image. To pan
              the 3D image, click and hold the middle mouse button and drag
              toward the desired direction. Use the mouse scroll to zoom in or
              out.
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame1-2">Next</Link>
        </div>
      </div>
    </main>
  );
}