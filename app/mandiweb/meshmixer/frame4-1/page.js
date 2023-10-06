import Image from "next/image";
import Image19 from "./assets/Image19.png";
import Image20 from "./assets/Image20.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center"></div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-row space-x-4">
            <div className="flex-1">
              <Image
                alt="Somethings never change"
                src={Image19}
                width={750}
                height={600}
              />
              <p className="text-center">
                Since the mandible is still a mesh, we have to make the model
                into a solid that could be 3D printed. To do this, click on
                “Edit” on the left toolbar and click on &ldquo;Make Solid&rdquo;.
              </p>
            </div>
            <div className="flex-1">
              <Image
                alt="Somethings never change"
                src={Image20}
                width={750}
                height={600}
              />
              <p className="text-center">
                Apply the &ldquo;<span className="font-bold">Make Solid</span>
                &rdquo; function by clicking on &ldquo;
                <span className="font-bold">Accept</span>
                &rdquo;.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame4">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame4-2">Next</Link>
        </div>
      </div>
    </main>
  );
}