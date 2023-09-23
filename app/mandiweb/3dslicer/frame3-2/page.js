import Image from "next/image";
import image13 from "./assets/image-13.png";
import image14 from "./assets/image-14.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image
                alt="somethings never change"
                src={image13}
                width={500}
                height={450}
              />
            <p className="mt-4 text-center">
              Once in the segment editor module, click on the{" "}
              <span className="font-bold">Add</span> button to add the segment
              we will be working with.
            </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <Image
                  alt="somethings never change"
                  src={image14}
                  width={500}
                  height={450}
                />
                <p className="mt-4 text-center">
                  With a segment added, clicking the{" "}
                  <span className="font-bold">Color Selection Button</span> will
                  bring up a menu that will allow the user to select and assign
                  different colors for different structures if so desired. For this
                  activity, let us select{" "}
                  <span className="font-bold">&ldquo;Bone&rdquo;</span>.
                </p>
              </div>
            </div>
</div>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3-1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3-3">Next</Link>
        </div>
      </div>
    </main>
  );
}
