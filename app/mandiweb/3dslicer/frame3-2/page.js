import Image from "next/image";
import image13 from "./assets/image-13.png";
import image14 from "./assets/image-14.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame3-1">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row space-x-4 bg-[#A9CAFB] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
              Once in the segment editor module, click on the{" "}
              <span className="font-bold">Add</span> button<br/> to add the segment
              we will be working with.
            </p>
          </div>
          <div className="flex items-center justify-center py-6">
            <Image
              alt="somethings never change"
              src={image13}
              width={500}
              height={450}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
                With a segment added, clicking the{" "}
                <span className="font-bold">Color <br/>Selection Button</span> will
                bring up a menu that will <br/>allow the user to select and assign 
                different colors <br/> for different structures if so desired. For
                this activity,<br/> let us select{" "}
                <span className="font-bold">&ldquo;Bone&rdquo;</span>.
              </p>
            </div>
            <div className="flex items-center justify-center py-6">
              <Image
                alt="somethings never change"
                src={image14}
                width={500}
                height={450}
              />
            </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame3-3">
          <div className="w-16 h-16 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
