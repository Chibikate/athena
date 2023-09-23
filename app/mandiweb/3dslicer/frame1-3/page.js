import Image from "next/image";
import image5 from "./assets/image-5.png";


import Link from "next/link";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-row space-x-4 items-center">
          </div>
        <Image
          alt="somethings never change"
          src={image5}
          width={1920}
          height={1080}
        />
        <p className="text-center mt-4">
          After loading, your dataset should show in the list as shown above.
          Click the <span className="font-bold">"Patient Name" </span> then click <span className="font-bold">"Load"</span>
          Click the{" "}
          <span className="font-bold">&ldquo;Patient Name&rdquo; </span> then
          click <span className="font-bold">&ldquo;Load&rdquo;</span>
        </p>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-4">Next</Link>
        </div>
      </div>
    </main>
  );
}