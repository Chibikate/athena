import React from "react";
import Image from "next/image";
import Image1 from "./assets/Image1.png";
import Link from "next/link";


function ListItem({ text }) {
  return <li className="list-disc ml-6">{text}</li>;
}

export default function Page() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <div className="w-1/2 py-4">
          <Image
            className="animate-spin-slow mx-20"
            src={Image1}
            width={400}
            height={300}
            alt="Image Description"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-2">
            Conversion of DICOM to STL
          </h2>
          <div className="h-1 bg-gray-300"></div>
          <ul className="mt-4 space-y-2">
            <ListItem text="Familiarize oneself with the user interface of Meshmixer." />
            <ListItem text="Navigate the 3D environment in meshmixer." />
            <ListItem text="Separate the mandible using face groups and paint selection." />
            <ListItem text="Perform 3D file manipulation." />
            <p className="pl-6">a. Plane cut function</p>
            <p className="pl-6">b. Mirroring function</p>
          </ul>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <div className="w-32 h-12 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center text-white font-bold rounded-lg shadow-md cursor-pointer">
          <Link href="/mandiweb/meshmixer/frame1">Continue!</Link>
        </div>
      </div>
    </div>
  );
}
