import Image from "next/image";
import image19 from "./assets/image-19.png";
import Link from "next/link";



export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4 items-center">
          <Image
              alt="Somethings never change"
              src={image19}
              width={1920}
              height={1080}
            />
          </div>
          <div className="flex-1">
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
        </div>

        <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-4">Next</Link>
        </div>
        </div>
    </main>
  );
}

