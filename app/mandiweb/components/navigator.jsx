"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

import Logo from "../assets/Logo.svg";

const openSans = Open_Sans({ weight: "400", subsets: ["latin"] });

export default function Navigator() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-rows space-x-4 justify-between items-center bg-primary ">
      <div className="flex flex-rows items-center space-x-4">
        <Link href={"/mandiweb"}>
          <Image
            src={Logo}
            alt="mandiweb logo"
            className="transform transition duration-300 hover:scale-105"
          />
        </Link>

        <div>
        <p style={{ fontSize: '12px', color: 'white' }}>
        Web-based Tutorial System in the Standardized Process <br/>of Virtual
          Surgical Planning for Mandibular Reconstruction
          </p>
        </div>
      </div>

      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/mandiweb">
                <p className="text-white hover:bg-gray-700 hover-border hover:border-white-400 hover:border-2 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>

              <Link href="/mandiweb/aboutus">
                <p className="text-white hover:bg-gray-700 hover-border hover:border-white-400 hover:border-2 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About us
                </p>
              </Link>

              <Link href="/mandiweb/thingstodownload">
                <p className="text-white hover hover:text-white hover-border hover:border-white-400 hover:border-2 px-5 py-2 rounded-md text-sm font-medium bg-[#0091AD]">
                  Start
                </p>
              </Link>

              <div
                className="relative group"
                onClick={() => setIsHovered(!isHovered)}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
