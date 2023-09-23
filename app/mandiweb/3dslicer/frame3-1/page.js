import Image from "next/image";
import image11 from "./assets/image-11.png";
import image12 from "./assets/image-12.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image
                alt="somethings never change"
                src={image11}
                width={500}
                height={450}
              />
            </div>
            <p className="mt-4">
              Click on the module drop-down menu and select the{" "}
              <span className="font-bold">Volumes</span> module.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image
                alt="somethings never change"
                src={image12}
                width={500}
                height={450}
              />
            </div>
            <p className="mt-4">
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
