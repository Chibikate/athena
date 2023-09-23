import Image from "next/image";
import image7 from "./assets/image-7.png";
import image8 from "./assets/image-8.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div>
          <Image
            alt="something never "
            src={image7}
            width={500}
            height={450}
          />
          <p>
            Once in the Crop Volume module, click on the input{" "}
            <span className="font-bold">Region of Interest (ROI)</span> drop
            down box and select{" "}
            <span className="font-bold">Create New Annotation ROI</span>.
          </p>
        </div>
        <div>
          <Image
            alt="something never "
            src={image8}
            width={500}
            height={450}
          />
          <p>
            Clicking on the &ldquo;<span className="font-bold">Eye</span>&rdquo;
            icon will reveal a bounding box that could be adjusted by clicking
            and dragging on the points to narrow the region of interest.
          </p>
        </div>
      </div>



<div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2-1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2-3">Next</Link>
        </div>
      </div>
    </main>
  );
}