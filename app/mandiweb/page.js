import Image from "next/image";
import hero from "./assets/hero.png";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";
import Image4 from "./assets/image4.png";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-4">
      <p className={`text-3xl font-bold mx-16 text-primary my-4`}>
        Web-based Tutorial on Virtual Surgical Planning <br />
        for Reconstruction of Simple Mandibular Fractures
      </p>

      <div className="items-center mx-16">
        <Image src={hero} width={1920} height={1080} />
      </div>

      <div className="bg-primary py-12">
        <p className="text-center font-bold text-3xl text-white">
          Ehancing Surgical Proficiency, One Fracture at a Time
        </p>
      </div>

      <div className="bg-primary space-y-4 p-12 text-white">
        <p>
          At Web-based Tutorial, our goal is to educate you and become
          knowledgeable on Virtual Surgical Planning for Reconstruction. We
          created guidelines and resources that will accompany you in your
          journey to creating a simple Mandibular Fractures.
        </p>

        <p>
          We believe that you are your best accessory. This is why we offer an
          experience, that will help you foster the skills and capabilities that
          will be essential to our healthcare industry.
        </p>
      </div>

      <div className="flex flex-row space-x-16 items-center justify-center">
        <div className="">
          <Link href="thingstodownload">
            <Image
              src={Image2}
              width={200}
              height={150}
              className="aspect-square "
            />
            <p className="text-center font-bold text-primary">Imaging Data</p>
          </Link>
        </div>

        <div className="">
          <Link href="3dslicer">
            <Image
              src={Image4}
              width={200}
              height={150}
              className="aspect-square "
            />
            <p className="text-center font-bold text-primary">
              Design Approach
            </p>
          </Link>
        </div>

        <div className="">
          <Link href="meshmixer">
            <Image
              src={Image3}
              width={200}
              height={150}
              className="aspect-square "
            />
            <p className="text-center font-bold text-primary">Slicing</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
