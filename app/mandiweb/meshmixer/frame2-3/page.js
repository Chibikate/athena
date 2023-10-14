import Image from "next/image";
import Image10 from "./assets/Image10.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center text-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame2-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8"/>
          </div>
        </Link>
      </div>
      
      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md text-center">
        <div className="text-center mb-4">         
            <p className="mt-4 text-justify">
              Once the mandible has been satisfactorily highlighted, we can now
              separate it from the rest of the skull. Still, under the select
              menu, click on &ldquo;<span className="font-bold">Edit</span>
              &rdquo; as shown above to bring out another selection menu and
              click &ldquo;<span className="font-bold">Separate</span>&rdquo;. A
              quicker way would be using the hotkey &ldquo;
              <span className="font-bold">Y</span>&rdquo; . WARNING, edit under
              the select menu is entirely different from the edit button seen in
              the left toolbar. Selecting the edit menu in the toolbar will
              cause all the selected areas to disappear.
            </p>
          </div>
          <div className="flex items-center justify-center py-2">
          <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="Somethings never change"
              src={Image10}
              width={550}
            height={550}
            />
            </div>
          </div>
          <div className="flex justify-between mt-8 space-x-4">
           <Link href="/mandiweb/meshmixer/frame2-4">
             <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
               <ChevronRightIcon className="w-8 h-8" />
             </div>
           </Link>
         </div>
    </main>
  );
}

        