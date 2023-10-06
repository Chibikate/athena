import Image from "next/image";
import Image7 from "./assets/Image7.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <Image
              alt="Somethings never change"
              src={Image7}
              width={1920}
              height={1080}
            />
            <p className="mt-4 text-center">
              Once the face groups have been assigned, we can now select the
              areas by face group. To do this, first, click on “Select” on the
              left toolbar. This will create a selection area (shadow) over
              your pointer. The size can be adjusted using the slider or by
              inputting a number on the size option as shown above.
            </p>
          </div>
      </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2-1">Next</Link>
        </div>
      </div>
    </main>
  );
}
