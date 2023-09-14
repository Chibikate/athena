import Image from "next/image";
import hero from "./assets/hero.svg";
import logo from "./assets/logo.svg";
import kaye from "./assets/kaye.jpg";
import kate from "./assets/kate.jpg";
import page from "./assets/page.png";
import {
  HomeIcon,
  CalendarIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex flex-row">
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

      <div className="space-y-6 p-2">
        <p className="py-6 my-4 bg-[#B2E3FF]">
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
          <p className="text-3xl font-bold text-[#073148]">
            {" "}
            Recently Accessed
          </p>
          <Card
            title={"Virtual Surgical Planning"}
            subtitle={"For Reconstruction of Simple Manduibular Fractures"}
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
        </div>

        <div className="space-y-6">
          <p className="text-3xl font-bold text-[#073148]">Topics Overview</p>

          <div className="flex flex-row space-x-4">
            <Card
              title={"Virtual Surgical Planning"}
              subtitle={"For Reconstruction of Simple Manduibular Fractures"}
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
          </div>
        </div>
      </div>
    </main>
  );
}
