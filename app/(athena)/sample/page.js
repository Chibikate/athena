import Image from "next/image";
import hero from "@/app/assets/hero.svg";
import page from "@/app/assets/page.png";
import bg from "@/app/assets/bg.png";

import Card from "@/components/card";

export default function Page() {
  return (
    <div>
      <div className="flex flex-row space-x-16 justify-end">
        <p>Home</p>
        <p>Contact Us</p>
        <p>Courses</p>
      </div>

      

      <div className="flex flex-row sm:flex-col items-center">
        <div className="text-center justify-between ">
          <p className="text-5xl font-bold text-primary pt-16 p-4">
            Develop Your Skills with Our Tutorial Website<br />{" "}
            <span className="text-[#FF5C00]">Your Journey Begins Now</span>
          </p>
        </div>
        <div className="text-center justify-between p-2">
          <p className="text-gray-400">Explore free courses to learn</p>
        </div>

        <Image className="absolute top-44" alt="Somethings never change" src={bg} width={1920} height={900} />
      </div>

      <div className="flex flex-col p-4">
        <p className="text-3xl font-bold text-primary pt-28 pb-4">Explore Courses</p>
        <div className="flex flex-row space-x-4">
          <VirtualSurgicalPlanning />
        </div>
      </div>

      <div flex items-center justify-center space-y-4 py-4>
        <div className="text-center pt-58 items-center">
          <p className="font-bold text-center">LEARNING EXPERIENCE</p>
        </div>
        <div className="flex flex-row space-x-16 text-center items-center justify-between">
          <div className="text-center">
            <p>Interactive</p>
          </div>
          <div className="text-center">
            <p>Self-direct</p>
          </div>
          <div className="text-center">
            <p>Realistic</p>
          </div>
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
