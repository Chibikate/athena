import Image from "next/image";
import Image21 from "./assets/Image21.png";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="space-y-4 p-8">
          <div className="flex flex-row space-x-4 items-center"></div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="flex flex-row space-x-4">
                </div>

          <Image
            alt="Somethings never change"
            src={Image21}
            width={1920}
            height={1080}
          />
          <p className="text-center">
            To save as &ldquo;<span className="font-bold">.STL</span>&rdquo;,
            click on &ldquo;<span className="font-bold">File</span>&rdquo; in
            the top toolbar and select &ldquo;
            <span className="font-bold">Export</span>&rdquo; or access it via
            its hotkey &ldquo;<span className="font-bold">Ctrl+E</span>
            &rdquo;.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame4-1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame5">Next</Link>
        </div>
      </div>
    </main>
  );
}