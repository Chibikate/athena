import React from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "./assets/image-1.png";

function ListItem({ text }) {
  return <li className="list-disc ml-6">{text}</li>;
}

export default function Page() {
  return (
    <div className="dark:text-white min-h-screen rounded-lg shadow-md p-4 md:p-14">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 py-4">
          <Image 
            className="animate-bounce mx-auto md:mx-20 block md:hidden lg:block"
            src={Image1}
            width={300}
            height={200}
            alt="Image Description"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-3xl font-bold">Objectives:</h2>
          <p>by the end of the lesson, students will be able to:</p>
          <div className="h-1 bg-gray-300 mt-3"></div>

          <li className="mt-4 space-y-2">
          Familiarise oneself with the user interface of a{" "}
            <span className="font-bold text-primary dark:text-amber-400">3D editing app.</span>.
          </li>
          <li className="mt-4 space-y-2">
            Narrow down regions of interest by{" "}
            <span className="font-bold text-primary dark:text-amber-400">cropping</span>.
          </li>
          <li className="mt-4 space-y-2">
            Separate bone using{" "}
            <span className="font-bold text-primary dark:text-amber-400">threshold</span> based{" "}
            <span className="font-bold text-primary dark:text-amber-400">segmentation</span>.
          </li>
          <li className="mt-4 space-y-2">
            Export file as <span className="font-bold text-primary dark:text-amber-400">.STL.</span>
          </li>
        </div>
      </div>
      <div className="flex justify-center sm:flex sm:justify-end mt-4">
        <div className="w-32 h-12 hover-border hover:border-white-400 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center text-white font-bold rounded-lg shadow-md cursor-pointer">
          <Link href="/mandiweb/3d-slicer/3Dinterface">Continue!</Link>
        </div>
      </div>
    </div>
  );
}
