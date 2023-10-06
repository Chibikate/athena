import Image from "next/image";
import Image4 from "./assets/Image4.png";
import Image5 from "./assets/Image5.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y p-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-row">
            <div className="w-1/2 pr-4">
              <Image
                alt="Somethings never change"
                src={Image4}
                width={450}
                height={500}
              />
              <p className="mt-4 text-center">
                To move the view to the desired position, click on the desired
                position in the view cube (e.g. top, right, left, etc.).
              </p>
            </div>
            <div className="w-1/2 pl-4">
              <Image
                alt="Somethings never change"
                src={Image5}
                width={450}
                height={500}
              />
              <p className="mt-4 text-center">
                To separate the mandible, start by generating face groups. This
                will allow you to select most of the mandibles in the least
                amount of time. Click on the &ldquo;Edit&rdquo; button on the
                left toolbar to bring up the selection menu. Click on &ldquo;
                <span className="font-bold">Generate Face Groups</span>&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame1-1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame1-3">Next</Link>
        </div>
      </div>
    </main>
  );
}
