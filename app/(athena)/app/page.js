"use client";

import Image from "next/image";
import page from "@/app/assets/page.png";
import bg from "@/app/assets/bg.png";
import two from "@/app/assets/two.svg";
import athena from "@/app/assets/athena.svg";
import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";
import Footer from "@/components/footer";

import Card from "@/components/card";

export default function AthenaHome() {
  return (
    <div>
      <div className="flex items-center justify-between text-sm sm:text-xl">
        <Image
          className="justify-items-start dark:invert"
          alt="Somethings never change"
          src={athena}
          width={80}
          height={40}
        />
        <div>
          <div className="flex flex-row items-center text-primary  dark:text-white justify-end mt-2 mr-4 space-x-4">
            <DarkThemeToggle />
            <Link href="/">
              <p className="p-2 rounded-md cursor-pointer hover:ring-2 ring-zinc-800">
                Home
              </p>
            </Link>
            <Link href="/contactus">
              <p className="p-2 rounded-md cursor-pointer hover:ring-2 ring-zinc-800">
                Contact Us
              </p>
            </Link>
            <p className="p-2 rounded-md cursor-pointer font-semibold hover:ring-2 ring-zinc-800 bg-[#FF5C00]">
              Courses
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen justify-center items-center overflow-hidden text-sm sm:text-xl">
        <div className="flex- flex-col ">
          <div className="text-center items-center text-5xl font-bold text-primary space-y-4 pt-6">
            <p className="dark:text-white text-sm sm:text-5xl">
              Develop Your Skills with Our Tutorial Website
            </p>
            <p className="text-[#FF5C00] rounded-md text-sm sm:text-5xl">
              Your Journey Begins Now
            </p>
          </div>
          <div className="text-center justify-between p-2">
            <p className="text-gray-400">Explore free courses to learn</p>
          </div>
        </div>
        <Image
          className="absolute top-48 dark:invert hidden md:block"
          alt="Somethings never change"
          src={bg}
          width={1800}
          height={900}
        />
      </div>

      <div className=" text-white ">
        <Image
          className="dark:invert"
          alt="Somethings never change"
          src={two}
          width= {1920}
          height={100}
        />
        <div className="flex items-center justify-center justfy-center dark:text-white ">
          <p className="flex-col justify-center font-bold pb-10 text-[#000000] text-2xl text-center dark:text-[#FFFFFF]">
            LEARNING EXPERIENCE
          </p>
        </div>
        <div className="flex flex-row md:justify-center md:space-x-96 items-center text-primary pb-8 dark:text-white justify-center space-x-16 mt-2 mr-4">
          <p className="font-bold  rounded-full text-white text-md p-2 dark:bg-sky-600 bg-[#000000]">
            Interactive
          </p>
          <p className="font-bold  rounded-full text-white text-md p-2 dark:bg-sky-600 bg-[#000000]">
            Self-direct
          </p>
          <p className="font-bold  rounded-full text-white text-md p-2 dark:bg-sky-600 bg-[#000000]">
            Realistc
          </p>
        </div>

        <div className="flex flex-row items-center p-4 text-primary pb-8 dark:text-white justify-center md:space-x-36 space-x-2 mt-2 mr-4">
          <p className="text-center  border p-2 border-primary shadow-md dark:bg-sky-600 rounded-md bg-[#FF8E4E]">
            You can manipulate and visualize,
            <br /> providing a hands-on approach to learning.
          </p>
          <p className="text-center  border p-2 border-primary dark:bg-sky-600 shadow-md rounded-md bg-[#FF8E4E]">
            You can set your own pace, choose
            <br /> the specific topics you want to explore,
            <br /> and navigate through the content
            <br /> independently, fostering self-directed learning.
          </p>
          <p className="text-center border dark:bg-sky-600 p-2 border-primary shadow-md rounded-md bg-[#FF8E4E]">
            Engage with scenarios that closely
            <br /> mirror the real surgical environment,
            <br /> ensuring a true-to-life learning experience.
          </p>
        </div>

        <div className="flex flex-col pt-8 shadow-lg pb-8">
          <p className="text-3xl font-bold dark:text-white text-primary p-2 text-shadow-[0_4px_8px_#000000] dark:text-shadow-[0_4px_8px_#FFFFFF]">
            Explore Courses
          </p>
          <div className="flex flex-row pt-10 space-x-4">
            <VirtualSurgicalPlanning />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function VirtualSurgicalPlanning() {
  return (
    <Card
      title={"Virtual Surgical Planning for Mandibular Reconstruction"}
      subtitle={""}
      desc={"Learn how to use VSP software - 3D Slicer and Meshmixer"}
      logo={page}
      color={"bg-primary"}
      textColor={"text-primary"}
    />
  );
}
