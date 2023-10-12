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
          <Image
            src={Image1}
            width={800}
            height={300}
            alt="Image Description"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-2">
            Conversion of DICOM to STL
          </h2>
          <div className="h-1 bg-gray-300"></div>
          <li className="mt-4 space-y-2">Familiarise oneself with the user interface of <span className="font-bold text-primary">3D slicer</span>.</li>
          <li className="mt-4 space-y-2">Narrow down regions of interest by <span className="font-bold text-primary">cropping</span>.</li>
          <li className="mt-4 space-y-2">Separate bone using <span className="font-bold text-primary">threshold</span> based <span className="font-bold text-primary">segmentation</span>.</li>
          <li className="mt-4 space-y-2">Export file as <span className="font-bold text-primary">.STL.</span></li>
</div>
</div>
      <div className="flex justify-end mt-4">
        <div className="w-32 h-12 hover-border hover:border-white-400 hover:border-2 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center text-white font-bold rounded-lg shadow-md cursor-pointer">
          <Link href="/mandiweb/3dslicer/frame1">Continue!</Link>
        </div>
      </div>
    </div>
  );
}
