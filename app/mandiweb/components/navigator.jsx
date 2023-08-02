"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

import Logo from "../assets/Logo.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Navigator() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-rows space-x-4 justify-between items-center bg-primary p-4">
      <div className="flex flex-rows items-center space-x-4">
        <Link href={"/mandiweb"}>
          <Image src={Logo} alt="mandiweb logo" />
        </Link>

        <div>
          <p className={`${anton.className} text-xl text-white`}>MandiWeb</p>
          <p className={`font-medium text-white`}>
            Web-based Tutorial on Virtual Surgical Planning for <br />
            Reconstruction of Simple Mandibular Fractures
          </p>
        </div>
      </div>

      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/mandiweb">
                <p className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>

              <Link href="/mandiweb/aboutus">
                <p className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About us
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
