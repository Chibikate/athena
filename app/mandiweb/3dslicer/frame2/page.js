import Image from "next/image";
import image5 from "./assets/image-5.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <Image alt="something never " src={image5} width={1920} height={1080} />
        <div>
          <h3 className="text-2xl font-bold mb-4">3D Slicer Module</h3>
          <p className="text-justify">
            Modules in 3D Slicer allow us to perform actions that affect the
            DICOM files in various ways. The drop-down menu can be accessed from
            the upper left of the toolbar as indicated above. For the purpose of
            the activity, we will only be using{" "}
            <span className="font-bold">Crop Volume</span>,{" "}
            <span className="font-bold">Segment Editor</span>, and{" "}
            <span className="font-bold">Volumes Module</span> in preparation of
            the 3D file.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-4">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2-1">Next</Link>
        </div>
      </div>
    </main>
  );
}
