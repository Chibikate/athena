
import Image from "next/image";
import GIF from "@/public/mandiweb/teacher.gif";
import Link from "next/link";

const grayLink = {
  textDecoration: "underline",
  color: "gray",
};

export default function Page() {
  return (

    <div className="space-y-4 p-14 dark:text-white">
      <div className="flex flex-col sm:flex-row space-x-4 pt-5 animate_animated animate_rotateInDownLeft">
        <Image
          className="hidden md:block"
          alt="Somethings never change"
          src={GIF}
          width={500}
          height={300}
        />
        <div className="space-y-4 py-4">
          <div className="w-full h-2 bg-gray-400"></div>
          <h3 className="font-bold dark:text-white text-primary text-2xl py-2">
            3D file manipulation and separating the mandible in Meshmixer (Autodesk, San Rafael, California)
          </h3>
          <div className="w-full h-2 mt-4 bg-gray-400"></div>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Download Meshmixer (version 3.5):{" "}</span>
              <Link href="https://meshmixer.com/download.html" style={grayLink} target="_blank">
                https://meshmixer.com/download.html
              </Link>
            </li>
            <li>
              <span className="font-semibold">Download file to use for this activity:{" "}</span>
              <Link href="https://drive.google.com/drive/folders/1uHn8Ozf8MmxCrG45Wsuy-kLPiMcoC1gV?usp=sharing" style={grayLink} target="_blank">
                https://drive.google.com/drive/folders/1uHn8Ozf8MmxCrG45Wsuy-kLPiMcoC1gV?usp=sharing
              </Link>
            </li>
          </ul>
          <p className="text-xl dark:text-white font-semibold text-primary">
            After you have downloaded the following software and files, you can now proceed to Meshmixer.
          </p>
          <div className="flex justify-center md:flex md:justify-end">
            <div className="w-32 h-12 hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center hover-border hover:border-white-400 hover:text-white text-white font-bold rounded-full shadow-lg mt-8 cursor-pointer">
              <Link href="/mandiweb/mesh-mixer">Let&lsquo;s start!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
