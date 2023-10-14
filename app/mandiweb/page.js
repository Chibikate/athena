import Image from "next/image";
import hero from "./assets/hero.png";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";
import Image4 from "./assets/image4.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <div className="relative rounded-lg shadow-lg overflow-hidden">
        <Image 
          alt="Somethings never change"
          src={hero}
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <p className="text-2xl font-bold mb-4">
            Welcome to the Virtual Surgical Planning Tutorial!
          </p>
          <p className="text-xl font-semibold">
            Are you ready to embark on a transformative learning journey?
            Explore our interactive modules, immersive visuals, and cutting-edge
            virtual surgical planning techniques to master the art of mandibular
            fracture reconstruction.
          </p>
        </div>
      </div>

      <div className="py-12">
        <p className="text-center font-bold text-3xl text-primary">
          Enhancing Surgical Proficiency, One Fracture at a Time
        </p>
      </div>

      <div className="bg-primary space-y-4 p-12 text-white text-center">
        <p>
          At Web-based Tutorial System, our goal is to educate you and become
          knowledgeable on Virtual Surgical Planning for Reconstruction. We
          created guidelines and resources that will accompany you in your
          journey to creating a simple Mandibular Fractures.
        </p>

        <p>
          We believe that you are your best accessory. This is why we offer an
          experience that will help you foster the skills and capabilities that
          will be essential to our healthcare industry.
        </p>
      </div>

      <div className="flex items-center justify-center space-y-4 py-4">
  <Link href="mandiweb/thingstodownload">
    <div className="text-primary flex items-center cursor-pointer pr-4 transform transition duration-300 hover:scale-105">
      <p className="mr-2">Click here to start →</p>
    </div>
  </Link>
        <div className="flex flex-row space-x-16 items-center">
          <Link href="mandiweb/thingstodownload">
            <div className="aspect-square cursor-pointer transform transition duration-300 hover:scale-105">
              <Image
                alt="Somethings never change"
                src={Image2}
                width={200}
                height={150}
                className="rounded-md"
              />
              <p className="text-center font-bold text-primary hover:text-secondary">
                Things to download
              </p>
            </div>
          </Link>

          <Link href="mandiweb/3dslicer">
            <div className="aspect-square cursor-pointer transform transition duration-300 hover:scale-105">
              <Image
                alt="Somethings never change"
                src={Image4}
                width={200}
                height={150}
                className="rounded-md"
              />
              <p className="text-center font-bold text-primary hover:text-secondary">
                3D slicer
              </p>
            </div>
          </Link>

          <Link href="mandiweb/meshmixer">
            <div className="aspect-square cursor-pointer transform transition duration-300 hover:scale-105">
              <Image
                alt="Somethings never change"
                src={Image3}
                width={200}
                height={150}
                className="rounded-md"
              />
              <p className="text-center font-bold text-primary hover:text-secondary">
                Meshmixer
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}