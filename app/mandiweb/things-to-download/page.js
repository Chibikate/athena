import Image from "next/image";
import GIF from "@/public/mandiweb/teacher.gif";
import Link from "next/link";


const grayLink = {
  textDecoration: "underline",
  color: "gray",
};
export default function Page() {
  return (
    <div className="space-y-4 p-14 dark:text-white min-h-screen">
  
      <div className="flex flex-col sm:flex-row space-x-4 pt-5 animate_animated animate_rotateInDownLeft">
        <Image
          className=" hidden md:block"
          alt="Somethings never change"
          src={GIF}
          width={450}
          height={300}
        />
        <div className="space-y-4 py-4">
          <div classs className="w-full h-2 bg-gray-400"></div>
          <h3 span className="font-bold dark:text-white text-primary text-4xl py-2">
            Creating a 3D file from DICOM images
          </h3>
          <div classs className="w-full h-2 mt-4 bg-gray-400"></div>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">
                Download 3D slicer (Stable version 5.6.1):{" "}
              </span>
              <Link
                href=" https://download.slicer.org/"
                style={grayLink}
                target="_blank"
              >
                https://download.slicer.org/
              </Link>
              <p className="ml-6">Available in Windows, macOS and Linux </p>
            </li>
            <li>
              <span className="font-semibold">Download files: </span>
              <Link
                href="https://drive.google.com/drive/folders/1742qADzEkJDJ-FBMINb89dR9A7L0fbc6"
                style={grayLink}
                target="_blank"
              >
                https://drive.google.com/drive/folders/1742qADzEkJDJ-FBMINb89dR9A7L0fbc6
              </Link>
              <p className="ml-6">(in zipped folder contains dicom files)</p>
            </li>
          </ul>
          <p className="text-xl dark:text-white font-semibold text-primary">
            After you have downloaded the following software and files. You can
            now proceed to 3D Slicer.
          </p>
          <div className="flex justify-center md:flex md:justify-end">
            <div className="w-32 h-12 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center hover-border hover:border-white-400 hover:text-white  text-white font-bold rounded-full shadow-lg mt-8 cursor-pointer">
              <Link href="/mandiweb/3d-slicer">Let&lsquo;s start!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
