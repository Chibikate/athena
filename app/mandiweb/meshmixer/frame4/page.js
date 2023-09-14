import Image from "next/image";
import Image18 from "./assets/Image18.png";
import Image19 from "./assets/Image19.png";
import Image20 from "./assets/Image20.png";
import Image21 from "./assets/Image21.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center"></div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-row space-x-4">
            <Image
              alt="Somethings never change"
              src={Image18}
              width={570}
              height={600}
            />
            <p className="text-justify">
              To recreate the diseased side in reference to the remaining
              anatomy, we can unhide the remaining part by clicking on “
              <span className="font-bold">View</span>” on the top toolbar and
              selecting “<span className="font-bold">Show Objects Browser</span>
              ”. Once satisfied with the position of the mirrored mandible,
              click accept.
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image
              alt="Somethings never change"
              src={Image19}
              width={1920}
              height={1080}
            />
            <p className="text-center">
              Since the mandible is still a mesh, we have to make the model into
              a solid that could be 3D printed. To do this, click on “Edit” on
              the left toolbar and click on &ldquo;Make Solid&rdquo;.
            </p>
          </div>
          <div>
            <Image
              alt="Somethings never change"
              src={Image20}
              width={1920}
              height={1080}
            />
            <p className="text-center">
              {" "}
              Apply the &ldquo;<span className="font-bold">Make Solid</span>
              &rdquo; function by clicking on &ldquo;
              <span className="font-bold">Accept</span>
              &rdquo;.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <Image
            alt="Somethings never change"
            src={Image21}
            width={1920}
            height={1080}
          />
          <p className="text-center">
            To save as &ldquo;<span className="font-bold">.STL</span>&rdquo;,
            click on &ldquo;<span className="font-bold">File</span>&rdquo; in
            the top toolbar and select &ldquo;
            <span className="font-bold">Export</span>&rdquo; or access it via
            its hotkey &ldquo;<span className="font-bold">Ctrl+E</span>
            &rdquo;.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          Next
        </div>
      </div>
    </main>
  );
}
