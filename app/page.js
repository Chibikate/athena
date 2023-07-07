import Image from "next/image";
import hero from "./assets/hero.png";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-4">
      <p className={`text-3xl font-bold mx-16 text-[#0F1E53]`}>Web-based Tutorial on Virtual Planning <br/>for Reconstruction of Simple Mandibular Fractures</p>
      <div className="items-center justify-between mx-16">
      <Image src={hero} width={1920} height={1080} />
      </div>
      </main>
)
}
      