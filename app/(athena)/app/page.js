import Image from "next/image";
import hero from "@/app/assets/hero.svg";
import page from "@/app/assets/page.png";

import Card from "@/components/card";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row bg-white dark:bg-black text-black dark:text-white">
      <Sidebar />

      <div className="p-2">
        <p className="py-6 my-4 bg-[#a8cfff] rounded-sm text-center">
          Step into a world of boundless possibilities as you embark on a
          remarkable journey through our website, where knowledge meets
          innovation
        </p>

        <Image
          alt="Somethings never change"
          src={hero}
          width={1920}
          height={1000}
        />

        <div className="space-y-6 ">
          <p className="text-2xl font-bold text-[#130e2b]">Recently Accessed</p>
          <VirtualSurgicalPlanning />
        </div>

        <div className="space-y-8">
          <p className="text-2xl font-bold text-[#130e2b] mt-20">
            Topics Overview
          </p>

          <div className="flex flex-row space-x-4">
            <VirtualSurgicalPlanning />
          </div>
        </div>
      </div>
    </main>
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