import Image from "next/image";
import image12 from "./assets/image-12.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
      <div className="flex flex-row space-x-4 items-center"></div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image
                alt="somethings never change"
                src={image12}
                width={1920}
                height={1080}
              />
            <p className="text-center">
              Select{" "}
              <span className="font-bold">No series description cropped</span>{" "}
              then choose{" "}
              <span className="font-bold">
                &ldquo;CT bone window level&rdquo;
              </span>{" "}
              as indicated above.
            </p>
          </div>
          </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3-2">Next</Link>
        </div>
      </div>
    </main>
  );
}
