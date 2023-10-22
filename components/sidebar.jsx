import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import logo from "../app/assets/logo.svg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className=" p-4 w-64 bg-primary text-white space-y-4 justify-center">
      <Image
        alt="Somethings never change"
        src={logo}
        width={1920}
        height={1080}
      />
      <div className="space-y-4">
  <p className="text-3xl py-4">OVERVIEW</p>

  <Link href="/">
    <div className="flex flex-row items-center space-x-2 justify-center">
      <div className="w-4">
        <HomeIcon />
      </div>
      <p>Home</p>
    </div>
  </Link>
</div>


        <div className="flex flex-row items-center space-x-2 justify-center">
  <Link href="/mandiweb">
    <div className="flex flex-row items-center space-x-2">
      <div className="w-4">
        <ComputerDesktopIcon />
      </div>
      <p>Practice</p>
    </div>
  </Link>
</div>

        <div className="flex flex-row items-center space-x-2 justify-center">
        <Link href="/contactus">
        <div className="flex flex-row items-center space-x-2">
          <div className="w-4">
            <EnvelopeIcon />
          </div>
          <p>Contact Us</p>
        </div>
        </Link>
      </div>

      <button id="dark-mode-toggle">Toggle Dark Mode</button>
      
    </div>
  );
}
