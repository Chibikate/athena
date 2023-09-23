import Image from "next/image";
import image9 from "./assets/image-9.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col space-y-4 items-center">
          <Image alt="something never " src={image9} width={1920} height={1080} />
          <p className="text-justify">
            Drag the bounding box to focus on the areas needed. For this exercise,
            focus must be on the midface and mandible cutting out the rest of the
            skull but making sure the temporomandibular joint is included. Once
            the region of interest is selected, click apply to apply the crop.
            Click the <span className="font-bold">&ldquo;eye&rdquo;</span> icon
            once again to remove the bounding box.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2-2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3">Next</Link>
        </div>
      </div>
    </main>
  );
}
