import Image from "next/image";
import hero from "./assets/hero.svg";
import kaye from "./assets/kaye.jpg";
import kate from "./assets/kate.jpg";
import page from "./assets/page.png";

import Card from "@/components/card";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row ">
      <Sidebar />

      <div className="space-y-6 p-2">
        <p className="py-6 my-4 bg-[#B2E3FF] rounded-sm text-center">
          Step into a world of boundless possibilities as you embark on a
          remarkable journey through our website, where knowledge meets
          innovation.
        </p>

        <Image
          alt="Somethings never change"
          src={hero}
          width={1920}
          height={1080}
        />

        <div className="space-y-6 ">
          <p className="text-3xl font-bold text-[#073148]">Recently Accessed</p>
          <VirtualSurgicalPlanning />
        </div>

        <div className="space-y-6">
          <p className="text-3xl font-bold text-[#073148]">Topics Overview</p>

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
      title={"Virtual Surgical Planning"}
      subtitle={"For Reconstruction of Simple Mandibular Fractures"}
      desc={
        "Learn and discover the interactive learning activities, and practical insights into the reconstruction of simple mandibular fractures, ultimately enhancing knowledge acquisition and advancing healthcare practices."
      }
      logo={page}
      color={"bg-primary"}
      textColor={"text-primary"}
      author={kaye}
      author2={kate}
      authorName={"Kaye"}
      authorName2={"Kate"}
    />
  );
}
