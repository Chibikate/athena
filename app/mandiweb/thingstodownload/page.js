import Image from "next/image";
import Image1 from "./assets/image1.png";
import Link from "next/link";

const grayLink = {
  textDecoration: "underline",
  color: "gray",

};
export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row space-x-4 pt-5">
        <Image
          alt="Somethings never change"
          src={Image1}
          width={450}
          height={300}
        />
        <div className="space-y-4">
          <div classs className="w-full h-2 bg-gray-400"></div>
          <h3 span className="font-bold  text-primary text-5xl ">
            Conversion of DICOM to STL
          </h3>
          <div classs className="w-full h-2 bg-gray-400"></div>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">
                Install Meshmixer for Windows:{" "}
              </span>
              <Link href="https://download.slicer.org" style={grayLink} target="_blank">
                https://download.slicer.org
              </Link>
            </li>
            <li>
              <span className="font-semibold">
                Install Meshmixer for MacOS:{" "}
              </span>
              <Link href="https://www.meshmixer.com/download.html" style={grayLink} target="_blank">
                https://www.meshmixer.com/download.html
              </Link>
            </li>
            <li>
              <span className="font-semibold">
                Install Meshmixer for MacOS:{" "}
              </span>
              <Link href="https://macdownload.informer.com/meshmixer/" style={grayLink} target="_blank">
                https://macdownload.informer.com/meshmixer/
              </Link>
            </li>
            <li>
              <span className="font-semibold">
                Download these DICOM Files:{" "}
              </span>
              <Link href="https://bit.ly/3i7wsTb" style={grayLink} target="_blank">
                https://bit.ly/3i7wsTb
              </Link>
            </li>
          </ul>
          <p className="text-xl font-semibold text-primary">
            After you have downloaded the following software and files. You can
            now proceed to 3D Slicer.
          </p>
          <div className="flex justify-end">
            <div className="w-32 h-12 bg-primary flex items-center justify-center hover-border hover:border-white-400 hover:border-2 hover:text-white  text-white font-bold rounded-full shadow-lg mt-8 cursor-pointer">
              <Link href="/mandiweb/3dslicer">Let&lsquo;s start!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
