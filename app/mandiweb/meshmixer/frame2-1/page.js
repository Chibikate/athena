import Image from "next/image";
import Image8 from "./assets/Image8.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col space-y-4 items-center">
          <Image
              alt="Somethings never change"
              src={Image8}
              width={1920}
              height={1080}
            />
            <p className="mt-4 text-center">
              A single left click will select the highlighted area. Holding
              down the left mouse button will “Paint” the area.
            </p>
          </div>
          </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2-2">Next</Link>
        </div>
      </div>
    </main>
  );
}
