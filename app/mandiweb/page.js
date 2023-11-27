import Link from "next/link";
import Image from "next/image";
import hero from "@/public/mandiweb/hero.png";
import Image2 from "@/public/mandiweb/image2.png";
import Image3 from "@/public/mandiweb/Image3.png";
import Navigator from "@/components/navigator";

export default function Home() {
  return (
    <div>
      <Navigator />
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Somethings never change"
            src={hero}
            width={1920}
            height={350}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white pt-6">
            <p className=" text-sm sm:text-2xl font-bold mb-4 dark:text-black shadow-pink text-shadow-[0_4px_8px_#000000] dark:text-shadow-[0_4px_8px_#FFFFFF]">
              Welcome to the Virtual Surgical Planning Tutorial!
            </p>
            <p className=" text-sm sm:text-xl font-semibold dark:text-black text-shadow-[0_4px_8px_#000000] dark:text-shadow-[0_4px_8px_#FFFFFF]">
              Are you ready to embark on a transformative learning journey?
              Explore our interactive modules, immersive visuals, and
              cutting-edge virtual surgical planning techniques to master the
              art of mandibular fracture reconstruction.
            </p>
          </div>
        </div>

        <div className="py-12 ">
          <p className="text-center font-bold text-3xl text-primary dark:text-white">
            Enhancing Surgical Proficiency, One Fracture at a Time
          </p>
        </div>

        <div className="bg-primary space-y-4 p-12 text-white text-center">
          <p>
            At Web-based Tutorial System, our goal is to educate you and become
            knowledgeable on Virtual Surgical Planning for Mandibular
            Reconstruction. We created guidelines and resources that will
            accompany you in your journey to creating a Mandibular
            Reconstruction.
          </p>

          <p>
            We believe that you are your best accessory. This is why we offer an
            experience that will help you foster the skills and capabilities
            that will be essential to our healthcare industry.
          </p>
        </div>

        <div className="flex items-center justify-center space-y-4 py-4">
          <div className="flex flex-row space-x-16 items-center">
            <div className="aspect-square cursor-pointer transform transition duration-300 hover:scale-105">
              <Image
                alt="Somethings never change"
                src={Image2}
                width={200}
                height={150}
                className="rounded-md"
              />
            </div>

            <div className="aspect-square cursor-pointer transform transition duration-300 hover:scale-105">
              <Image
                alt="Somethings never change"
                src={Image3}
                width={200}
                height={180}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
