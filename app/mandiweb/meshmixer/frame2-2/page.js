import Image from "next/image";
import Image9 from "./assets/Image9.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default function Page() {
  return (
    <main className="flex flex-row items-center text-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame2-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">   
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
          <div className="flex items-center justify-center py-2">
          <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
          alt="Somethings never change"
          src={Image9}
          width={550}
          height={550}
        />
          </div>
        </div>
           <div className="flex justify-between mt-8 space-x-4">
           <Link href="/mandiweb/meshmixer/frame2-3">
             <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
               <ChevronRightIcon className="w-8 h-8" />
             </div>
           </Link>
         </div>
    </main>
  );
}
