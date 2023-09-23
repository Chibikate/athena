import Image from "next/image";
import image16 from "./assets/image-16.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image
                alt="Somethings never change"
                src={image16}
                width={1920}
                height={1080}
              />
              <div>
                <p className="mt-4 text-justify">
                  Once the threshold effect has been activated, we can adjust
                  the threshold range we desire to focus on. We can either input
                  a specific number or drag the slider from left to right until
                  we achieve our desired threshold. For the purpose of this
                  activity, we will input <span className="font-bold">450</span>{" "}
                  in the minimum threshold (left box) as indicated above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-1">Next</Link>
        </div>
      </div>
    </main>
  );
}
