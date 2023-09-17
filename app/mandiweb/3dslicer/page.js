import React from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "./assets/image-1.png";

function ListItem({ text }) {
  return <li className="list-disc ml-6">{text}</li>;
}

export default function Page() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <div className="w-1/2">
          <Image src={Image1} width={800} height={300} alt="Image Description" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-2">Conversion of DICOM to STL</h2>
          <div className="h-1 bg-gray-300"></div>
          <ul className="mt-4 space-y-2">
            <ListItem text="Discover how to navigate the 3D slicer's user interface." />
            <ListItem text="Export DICOM file to .STL" />
            <ListItem text="Perform threshold-based segmentation to separate the bones" />
            <ListItem text="Apply cropping to narrow down the region of interest" />
          </ul>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <div className="w-32 h-12 bg-primary flex items-center justify-center text-white font-bold rounded-lg shadow-md cursor-pointer">
          <Link href="/mandiweb/3dslicer/frame1">Continue!</Link>
        </div>
      </div>
    </div>
  );
}
