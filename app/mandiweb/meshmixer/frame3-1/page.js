import Image from "next/image";
import Image14 from "./assets/Image14.png";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="space-y-4 p-8">
          <div className="flex flex-row space-x-4 items-center"></div>
  
          <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
            <div>
                </div>
            <Image
              alt="Somethings never change"
              src={Image14}
              width={1920}
              height={1080}
            />
            <p className="text-center">
              Selecting a plane cut will bring up a plan that we can use to cut
              the selected area. Holding the left mouse button and dragging it
              will align the plane to the direction in the line was made. It is
              the author&lsquo;s preference to align the orientation of the
              model by first clicking on the view cube.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3-2">Next</Link>
        </div>
      </div>
    </main>
  );
}
