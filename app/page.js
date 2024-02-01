"use client";

import Image from "next/image";
import page from "@/app/assets/page.png";
import bg from "@/app/assets/bg.png";
import two from "@/app/assets/two.svg";
import three from "@/app/assets/three.svg";
import athena from "@/app/assets/athena.svg";
import Link from "next/link";
import Footer from "@/components/footer";

import Card from "@/components/card";

export default function AthenaHome() {
  return (
    <div className="bg-primary">
      <div className="flex items-center bg-primary justify-between text-sm sm:text-xl">
        <Image
          className="justify-items-start"
          alt="Somethings never change"
          src={athena}
          width={80}
          height={40}
        />
        <div>
          <div className="flex flex-row items-center text-white bg-primary justify-end mt-2 mr-4 space-x-4">
      
            <Link href="/contactus">
              <p className="p-2 rounded-md cursor-pointer hover:ring-2 ring-[#FF5C00]">
                Contact Us
              </p>
            </Link>
            <Link href="./mandiweb">
            <p className="p-2 rounded-md hover:font-bold font-bold curso bg-[#0091AD] over:ring-offset-purple-950 hover-border ring-offset-blue-300 hover:text-emerald-900 ring-2 ring-offset-2">
              Courses
            </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="min-h-screen justify-center items-center overflow-hidden bg-primary text-sm sm:text-xl">
        <div className="flex- flex-col ">
          <div className="text-center items-center text-5xl font-bold text-white bg-primary space-y-4 pt-6">
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
          className="absolute top-48 dark:invert hidden md:block invert"
          alt="bg"
          src={bg}
          width={1800}
          height={900}
        />
      </div>

      <div className=" text-white pt-24 bg-primary ">
        <Image
          alt="Somethings never change"
          src={two}
          width={1920}
          height={25}
        />
        <div className="bg-[#253855]">
          <div className="flex items-center justify-center justfy-center ">
            <p className="flex-col justify-center font-extrabold text-[#FF5C00] pb-4 text-2xl text-center pt-4 dark:text-[#FFFFFF]">
              LEARNING EXPERIENCE
            </p>
          </div>
          <div className="flex flex-col sm:flex-row p-6 text-white justify-center text-center bg-[#253855]">
            <div className="flex flex-col md:justify-center items-center text-primary bg-[#253855] pb-8 dark:text-white justify-center  mt-2 mr-4">
              <p className="font-bold  rounded-full text-white text-md p-2 bg-primary">
                Interactive
              </p>
              <p className="pt-4 text-lg text-white">
                You can manipulate and visualize, providing a hands-on approach
                to learning.
              </p>
            </div>
            <div className="flex flex-col md:justify-center  items-center bg-[#253855] text-primary pb-8 dark:text-white justify-center  mt-2 mr-4">
              <p className="font-bold   rounded-full text-white text-md p-2 bg-primary">
                Self-direct
              </p>
              <p className="pt-4 text-lg text-white">
                You can set your own pace, choose
                <br /> the specific topics you want to explore, and
                <br /> navigate through the content independently, fostering
                self-directed learning.
              </p>
            </div>
            <div className="flex flex-col md:justify-center text-white bg-[#253855] items-center pb-8 dark:text-white justify-center  mt-2 mr-4">
              <p className="font-bold  rounded-full text-white text-md p-2 bg-primary">
                Realistc
              </p>
              <p className="pt-4 text-lg text-white">
                Engage with scenarios that closely mirror
                <br /> the real surgical environment, ensuring a true-to-life
                learning experience.
              </p>
            </div>
          </div>
        </div>
          <Image
            alt="Somethings never change"
            src={three}
            width={1920}
            height={25}
          />

        <div className="flex flex-col pt-8 shadow-lg pb-8 bg-primary">
          <p className="text-3xl font-bold text-white p-2 text-shadow-[0_4px_8px_#FFFFFF]">
            Explore Courses
          </p>
          <div className="flex flex-row pt-10 space-x-4 bg-primary">
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
      subtitle={"Difficult Level"}
      desc={"Learn how to use VSP software - 3D Slicer and Meshmixer"}
      logo={page}
      color={"bg-primary"}
      textColor={"text-white"}
    />
  );
}
