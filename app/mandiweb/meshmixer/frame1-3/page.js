
import Image from "next/image";
import Image6 from "./assets/Image6.png";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="space-y p-8">
          <div className="flex flex-row space-x-4 items-center"></div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <Image
            alt="Somethings never change"
            src={Image6}
            width={1920}
            height={1080}
          />
          <p className="mt-4 text-justify">
            Meshmixer will automatically create face groups based on the angle
            input threshold value. You can either drag the slider or input a
            number (default is 10) until a satisfactory amount of the mandible
            is selected as a different face group (different color) from the
            rest of the structure. For a smoother experience, it&lsquo;s
            recommended to input a number instead of dragging the slider. Once
            the desired result is achieved, click accept. Depending on the
            hardware, a lag period is expected.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame1-2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2">Next</Link>
        </div>
      </div>
    </main>
  );
}