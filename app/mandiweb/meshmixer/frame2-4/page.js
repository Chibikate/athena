import Image from "next/image";
import Image11 from "./assets/Image11.png";
import Image12 from "./assets/Image12.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y p-8">
        <div className="flex flex-row space-x-4 items-center">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <Image
              alt="Somethings never change"
              src={Image11}
              width={450}
              height={500}
            />
            <p className="mt-4 text-center">
              After separating the mandible from the skull, the object browser
              window will pop up. We can hide and unhide the structures by
              clicking on the &ldquo;
              <span className="font-bold">Eye</span>&rdquo; icon as shown above.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <Image
              alt="Somethings never change"
              src={Image12}
              width={450}
              height={500}
            />
            <p className="mt-4 text-center">
              We can also rename each part by double-clicking the name of the
              part. For the activity, we shall rename the part into mandible. We
              can also hide the rest of the parts we are not working with to
              make the program run smoother.
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2-3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3">Next</Link>
        </div>
      </div>
    </main>
  );
}
