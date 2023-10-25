import Image from "next/image";
import GIF from "@/public/assets/cartoon.gif";
import Image1 from "@/public/assets/image1.svg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden items-center justify-center bg-white ">
      <div className="flex flex-row border-2 space-between border-black rounded-lg shadow-xl h-[30rem] ">
        <div className="flex flex-col mr-4 w-96">
          <Image className="m-4" src={Image1} width={60} height={60} />
          <div className="flex flex-col flex-grow items-center space-y-4 justify-center">
            <p className="mr-10 text-sm text-center ml-8">
              <span className="font-bold text-3xl text-prmary">
                Web-based Tutorial
              </span>
              <br /> A journey of learning and exploring <br /> realistic
              Virtual Surgical Panning
            </p>
        <Link href="/app">
            <div className="bg-black p-1 text-white rounded-lg hover:border-white hover:border-2">
              <p className="m-2 text-sm">Click to Start</p>
            </div>
            </Link>
          </div>
        </div>
          <div className="flex flex-col bg-black items-center justify-center">
            <Image
              className="bg-black"
              alt="Somethings never change"
              src={GIF}
              width={400}
              height={550}
            />
          </div>
      </div>
    </div>
  );
}
