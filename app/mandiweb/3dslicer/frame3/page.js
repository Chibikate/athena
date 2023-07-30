import Image from "next/image";
import image10 from "./assets/image-10.png";
import image11 from "./assets/image-11.png";
import image12 from "./assets/image-12.png";
import image13 from "./assets/image-13.png";
import image14 from "./assets/image-14.png";
import image15 from "./assets/image-15.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">

            <Image src={image10} width={1920} height={1080} />
            </div>
            <p className="mt-4">
              Click on the module drop-down menu and select the{" "}
              <span className="font-bold">Volumes</span> module.
            </p>
          </div>
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">

            <Image src={image11} width={1920} height={1080} />
            </div>
            <p className="mt-4">
              Select{" "}
              <span className="font-bold">No series description cropped</span>{" "}
              then choose <span className="font-bold">"CT bone window level"</span> as indicated above.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">

     <Image src={image12} width={1920} height={1080} />
            </ div>
            <p className="mt-4">
              Once again, click on the module drop-down menu from the toolbar
              and select the{" "}
              <span className="font-bold">Segment Editor</span> module.
            </p>
          </div>
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image src={image13} width={1920} height={1080} />
            </div>
            <p className="mt-4">
              Once in the segment editor module, click on the{" "}
              <span className="font-bold">Add</span> button to add the segment
              we will be working with.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <Image src={image14} width={1920} height={1080} />
            <p className="mt-4 text-center">
              With a segment added, clicking the{" "}
              <span className="font-bold">Color Selection Button</span> will
              bring up a menu that will allow the user to select and assign
              different colors for different structures if so desired. For this
              activity, let us select <span className="font-bold">"Bone"</span>.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <Image src={image15} width={1920} height={1080} />
            <p className="mt-4 text-center">
              To perform threshold-based segmentation, click on the{" "}
              <span className="font-bold">Threshold</span> effect.
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4">Next</Link>
        </div>
        </div>
    </main>
  );
}
