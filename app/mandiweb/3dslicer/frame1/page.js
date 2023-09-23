import Image from "next/image";
import image1 from "./assets/image-1.png";


import Link from "next/link";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-row space-x-4 items-center">
          <Image
            alt="somethings never change"
            src={image1}
            width={1920}
            height={1080}
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">Load DICOM to 3D Slicer</h3>
            <p>
              Load the data by clicking on the{" "}
              <span className="font-bold">&ldquo;Load DICOM Data&ldquo;</span>{" "}
              button shown in the picture.
            </p>
          </div>
        </div>
      </div>


      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-1">Next</Link>
        </div>
      </div>
    </main>
  );
}
