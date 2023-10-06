import Image from "next/image";
import Image2 from "./assets/Image2.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y p-8">
        <div className="flex flex-row space-x-4 items-center"></div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <Image
            alt="Somethings never change"
            src={Image2}
            width={1920}
            height={1080}
          />
          <p className="mt-4 text-center">
            Click on the &ldquo;<span className="font-bold">Import</span>&rdquo;
            button and select the desired &ldquo;
            <span className="font-bold">.STL</span>&rdquo; file.
          </p>
        </div>
</div>
      

    
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame1-1">Next</Link>
        </div>
      </div>
    </main>
  );
}
