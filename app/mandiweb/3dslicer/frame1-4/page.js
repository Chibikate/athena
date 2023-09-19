import Image from "next/image";

import image5 from "./assets/image-5.png";


import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Image
          alt="somethings never change"
          src={image5}
          width={1920}
          height={1080}
        />
        <p className="text-center mt-4">
          After loading, your dataset should show in the list as shown above.
          Click the{" "}
          <span className="font-bold">&ldquo;Patient Name&rdquo; </span> then
          click <span className="font-bold">&ldquo;Load&rdquo;</span>
        </p>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-5">Next</Link>
        </div>
      </div>
    </main>
  );
}
