import Image from "next/image";
import Image1 from "./assets/Image1.png";

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row space-x-4">
        <Image src={Image1} width={450} height={300} />
        <div>
          <div classs className="w-full h-2 bg-gray-400"></div>
          <h3>Conversion of DICOM to STL</h3>
          <div classs className="w-full h-2 bg-gray-400"></div>
          <ul className="list-disc">
            <li>
              Install 3D Slicer for Windows and MacOS:
              https://download.slicer.org
            </li>
            <li>
              Install Meshmixer for Windows:
              https://www.meshmixer.com/download.html
            </li>
            <li>
              Install Meshmixer for MacOS:
              https://macdownload.informer.com/meshmixer/{" "}
            </li>
            <li>
              Install Ultimaker Cura:
              https://ultimaker.com/software/ultimaker-cura{" "}
            </li>
            <li>Download these DICOM Files: https://bit.ly/3i7wsTb</li>
          </ul>
          <p>
            After you have downloaded the following software and files. You can
            now proceed to 3D Slicer.
          </p>
        </div>
      </div>
    </div>
  );
}
