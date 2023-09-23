import Image from "next/image";
import image18 from "./assets/image-18.png";

import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4 items-center">
            <Image
              alt="Somethings never change"
              src={image18}
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <p className="mt-4 text-justify">
              With the threshold effect applied, click on the show 3D button to
              render the 3D image. Depending on the computer used, a short lag
              period may happen. If the 3D image does not appear in the upper
              right corner, we can click on the{" "}
              <span className="font-bold">&ldquo;Center View&rdquo;</span>{" "}
              button on the upper left of the blue window. Clicking on the 3D
              image with the left mouse button will allow the user to move the
              3D image. To zoom in and out, click and hold the right mouse
              button and drag until desired view is achieved.
            </p>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-3">Next</Link>
        </div>
      </div>
    </main>
  );
}

