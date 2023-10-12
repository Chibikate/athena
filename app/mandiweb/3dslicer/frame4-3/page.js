import Image from "next/image";
import image19 from "./assets/image-19.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 border-2 border-primary bg-[rgba(191,213,247,0.3)] p-4 rounded-lg shadow-md">
        <div className="text-center mb-4">
            <p className="mt-4 text-justify">
              Once we are satisfied with our 3D image, we may now save our file.
              We can choose to rename the file by clicking on the segmentation
              drop-down menu and select{" "}
              <span className="font-bold">
                &ldquo;Rename Current Segmentation&rdquo;.
              </span>{" "}
              For the purpose of the exercise, let us rename it to{" "}
              <span className="font-bold">&ldquo;Skull&rdquo;.</span> We can now
              save our file as{" "}
              <span className="font-bold">&ldquo;.STL&rdquo;</span> by clicking
              on the small down arrow on the right side of the segmentation
              button as indicated above to access the drop-down menu. Select
              export to files.
            </p>
          </div>
          <div className="flex items-center justify-center py-2">

          <Image
              alt="Somethings never change"
              src={image19}
              width={550}
              height={550}
              />
              </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-4">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}

