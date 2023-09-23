import Image from "next/image";
import image20 from "./assets/image-20.png";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4 items-center">
        <Image
              alt="Somethings never change"
              src={image20}
              width={1920}
              height={1080}
            />
          </div>
          <div className="flex-1">
            <p className="mt-4 text-center">
              Selecting export to files will prompt a small window to appear
              where the user can then select the destination folder by clicking
              on the file path as indicated above. Once the desired file
              destination is set, click export to save the file.
            </p>
          </div>
        </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame5">Next</Link>
        </div>
      </div>
    </main>
  );
}
