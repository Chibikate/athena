import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  CalendarIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import logo from "../app/assets/logo.svg";

export default function Sidebar() {
  return (
    <div className=" p-4 w-64 bg-[#073148] text-white space-y-4 justify-center">
      <Image
        alt="Somethings never change"
        src={logo}
        width={1920}
        height={1080}
      />
      <div className="space-y-4">
        <p className="text-3xl">OVERVIEW</p>
        <div className="flex flex-row items-center space-x-2 justify-center">
          <div className="w-4">
            <HomeIcon />
          </div>
          <p>Home</p>
        </div>

        <div className="flex flex-row items-center space-x-2 justify-center">
          <div className="w-4">
            <ComputerDesktopIcon />
          </div>
          <p>Practice</p>
        </div>

        <div className="flex flex-row items-center space-x-2 justify-center">
          <div className="w-4">
            <CalendarIcon />
          </div>
          <p>Calendar</p>
        </div>

        <div className="flex flex-row items-center space-x-2 justify-center">
          <div className="w-4">
            <EnvelopeIcon />
          </div>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
