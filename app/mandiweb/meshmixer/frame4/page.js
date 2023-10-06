import Image from "next/image";
import Image18 from "./assets/Image18.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center"></div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-row space-x-4">
            <Image
              alt="Somethings never change"
              src={Image18}
              width={1920}
              height={1080}
            />
            <p className="text-justify">
              To recreate the diseased side in reference to the remaining
              anatomy, we can unhide the remaining part by clicking on “
              <span className="font-bold">View</span>” on the top toolbar and
              selecting “<span className="font-bold">Show Objects Browser</span>
              ”. Once satisfied with the position of the mirrored mandible,
              click accept.
            </p>
          </div>
        </div>
        </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3-3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame4-1">Next</Link>
        </div>
      </div>
    </main>
  );
}
