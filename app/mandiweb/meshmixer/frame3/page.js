import Image from "next/image";
import Image13 from "./assets/Image13.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center"></div>

        <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image
              alt="Somethings never change"
              src={Image13}
              width={1920}
              height={1080}
            />
            <p className="text-center">
              Once the mandible has been separated, we can now &ldquo;
              <span className="font-bold">cut off</span>&rdquo; the diseased
              side by using the plane cut function. This can be accessed by
              clicking on &ldquo;<span className="font-bold">Edit</span>&rdquo;
              in the left toolbar and selecting &ldquo;
              <span className="font-bold">Plane Cut</span>&rdquo;.
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3-1">Next</Link>
        </div>
      </div>
    </main>
  );
}
