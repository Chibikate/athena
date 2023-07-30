import Image from "next/image";
import Image1 from "./assets/Image1.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
      <div className="flex flex-row space-x-4 items-center">
        <Image src={Image1} width={450} height={300} />
        <div>
          <div className="w-full h-2 bg-gray-400"></div>
          <h3 className="text-2xl font-bold">Conversion of DICOM to STL</h3>
          <div className="w-full h-2 bg-gray-400"></div>
          <ul className="list-disc mx-2 space-y-2">
            <li>
              Discover how to navigate Meshmixer's user interface.
            </li>
            <li>
              Familiarize with navigating the 3D environment in Meshmixer.
            </li>
            <li>
              Learn how to use face groups and paint selection in separation of the mandible.
            </li>
            <li>
              Perform 3D file manipulation in Meshmixer.
            </li>
            <li>
              Utilize the plane cut function for editing.
            </li>
            <li>
              Apply the mirroring function in Meshmixer.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-24 h-12 bg-primary flex items-center justify-center text-white font-bold rounded-lg shadow-md cursor-pointer">
          <Link href="/mandiweb/meshmixer/frame1">Continue!</Link>
        </div>
      </div>
    </div>
  );
}
