import Image from "next/image";
import Image15 from "./assets/Image15.png";
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
              src={Image15}
              width={570}
              height={600}
            />
            <p className="text-justify">
              For the exercise, we will make a plane cut in the middle of the
              mandible cutting out the diseased side. To change the side to
              keep, click the small arrow as shown above. Should there be a need
              to keep both halves, the cut type could be set to &ldquo;slice
              (Keep Both)&rdquo; in the drop-down menu as shown above. To
              finalize the cut, click accept.
            </p>
          </div>
        </div>
        
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3-1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3-3">Next</Link>
        </div>
      </div>
    </main>
  );
}
