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
        <div className="w-1/2">
          <Image src={Image1} width={450} height={300} alt="Image Description" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-2">Conversion of DICOM to STL</h2>
          <div className="h-1 bg-gray-300"></div>
          <ul className="mt-4 space-y-2">
            <ListItem text="Discover how to navigate Meshmixer's user interface." />
            <ListItem text="Familiarize with navigating the 3D environment in Meshmixer." />
            <ListItem text="Learn how to use face groups and paint selection in separation of the mandible." />
            <ListItem text="Perform 3D file manipulation in Meshmixer." />
            <ListItem text="Utilize the plane cut function for editing." />
            <ListItem text="Apply the mirroring function in Meshmixer." />
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
