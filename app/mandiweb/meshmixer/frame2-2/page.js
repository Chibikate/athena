import Image from "next/image";
import Image9 from "./assets/Image9.png";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="space-y p-8">
          <div className="flex flex-row space-x-4 items-center"></div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">

          <Image
            alt="Somethings never change"
            src={Image9}
            width={1920}
            height={1080}
          />
          <p className="mt-4 text-justify">
            A &ldquo;<span className="font-bold">Double Left Click</span>&rdquo;
            will highlight an entire group. In the example above, most of the
            mandible was selected. This is because of the assigned face group.
            We can now work on selecting the remaining areas of the mandible by
            manual &ldquo;<span className="font-bold">Painting</span>&rdquo;.
            Select brush size can be increased and decreased depending on the
            accuracy needed. If a mistake is made, holding the
            &ldquo;Shift&rdquo; and clicking the left mouse button will erase
            the selected area.
          </p>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2-1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2-3">Next</Link>
        </div>
      </div>
    </main>
  );
}
