"use client";

import Image from "next/image";
import page from "@/app/assets/page.png";
import bg from "@/app/assets/bg.png";
import athena from "@/app/assets/athena.svg";
import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

import Card from "@/components/card";

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-between">
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
            <Link href="/"><p className="p-2 rounded-md cursor-pointer hover:ring-2 ring-zinc-800">Home</p></Link>
            <Link href="/contactus"><p className="p-2 rounded-md cursor-pointer hover:ring-2 ring-zinc-800">Contact Us</p></Link>
            <p className="p-2 rounded-md cursor-pointer font-semibold hover:ring-2 ring-zinc-800 bg-[#FF5C00]">Courses</p>
            
          </div>
        </div>
      </div>

      <div className="min-h-screen justify-center items-center">
        <div className="flex- flex-col ">
          <div className="text-center items-center text-5xl font-bold text-primary space-y-4 pt-6">
            <p className="dark:text-white">
              Develop Your Skills with Our Tutorial Website
            </p>
            <p className="text-[#FF5C00] rounded-md">Your Journey Begins Now</p>
          </div>
          <div className="text-center justify-between p-2">
            <p className="text-gray-400">Explore free courses to learn</p>
          </div>
        </div>
        <Image
          className="absolute top-48 dark:invert"
          alt="Somethings never change"
          src={bg}
          width={1800}
          height={900}
        />
      </div>

      <div className="bg-[#FF5C00] dark:bg-zinc-600  text-white">
        <div className="text-center pb-10 items-center justfy-between  dark:text-white">
          <p className="font-bold  text-2xl text-center dark:text-[#FF5C00]">
            LEARNING EXPERIENCE
          </p>
        </div>
        <div className="flex flex-row space-x-28 dark:text-primary space-y-5 text-center items-center justify-center">
          <div className="text-center  dark:text-white">
            <p>
              <span className="p-2 rounded-full font-bold  ring-zinc-800 bg-[#000000]">Interactive</span>
            </p>
            <p className="pt-4">
              You can manipulate and visualize, providing a hands-on approach
              to learning.
            </p>
          </div>
          <div className="text-center  dark:text-white">
            <p><span className="p-2 rounded-full font-bold  ring-zinc-800 bg-[#000000]">Self-direct </span>
            </p>
            <p className="pt-5">
              You can set their own pace, choose the specific topics you want
              to explore, and navigate through the content independently,
              fostering self-directed learning.
            </p>
          </div>
          <div className="text-center  dark:text-white">
            <p><span className="p-2 rounded-full font-bold  ring-zinc-800 bg-[#000000]">Realistic</span>
            </p>
            <p className="pt-5">
              Engage with scenarios that closely mirror the real surgical
              environment, ensuring a true-to-life learning experience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-8 border-2 shadow-lg pb-8">
        <p className="text-3xl font-bold dark:text-white text-primary p-2 text-shadow-[0_4px_8px_#000000] dark:text-shadow-[0_4px_8px_#FFFFFF]">
          Explore Courses
        </p>
        <div className="flex flex-row pt-10 space-x-4">
          <VirtualSurgicalPlanning />
        </div>
      </div>
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
