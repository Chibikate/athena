import Image from "next/image";
import Image1 from "./assets/Image1.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row space-x-4 pt-5">
        <Image src={Image1} width={450} height={300} />
        <div className="space-y-4">
          <div classs className="w-full h-2 bg-gray-400"></div>
          <h3 span className="font-bold  text-primary text-5xl ">
            Conversion of DICOM to STL
          </h3>
          <div classs className="w-full h-2 bg-gray-400"></div>
          <ul className="list-disc list-inside space-y-2">
            <li>
            <span className="font-semibold">Install Meshmixer for Windows:  </span>
              <Link href="https://download.slicer.org">
                https://download.slicer.org
              </Link>
            </li>
            <li>
            <span className="font-semibold">Install Meshmixer for MacOS:  </span>
              <Link href="https://www.meshmixer.com/download.html">
                https://www.meshmixer.com/download.html
              </Link>
            </li>
            <li>
            <span className="font-semibold">Install Meshmixer for MacOS:  </span>
              <Link href="https://macdownload.informer.com/meshmixer/">
                https://macdownload.informer.com/meshmixer/
              </Link>
            </li>
            <li>
            <span className="font-semibold">Install Ultimaker Cura:  </span>
              <Link href=" https://ultimaker.com/software/ultimaker-cura">
                https://ultimaker.com/software/ultimaker-cura
              </Link>
            </li>
            <li>
            <span className="font-semibold">Download these DICOM Files:  </span>
              <Link href="https://bit.ly/3i7wsTb">
                 https://bit.ly/3i7wsTb</Link>
            </li>
          </ul>
          <p className="text-xl font-semibold text-primary">
            After you have downloaded the following software and files. You can
            now proceed to 3D Slicer.
          </p>
        </div>
      </div>
    </div>
  );
}
