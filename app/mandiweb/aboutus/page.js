import Image from "next/image";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";

import { Inter, Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row space-x-4 my-6">
        <Image src={Image1} width={450} height={300} />
        <div className="space-y-4 px-16">
          <p className="text-justify font-semibold text-primary">
            The Web-based Tutorial on Virtual Surgical Planning for
            Reconstruction of Simple Mandibular Fractures is an innovative
            platform designed to empower surgeons and medical professionals in
            mastering the art of mandibular fracture reconstruction. This
            comprehensive tutorial leverages cutting-edge virtual surgical
            planning techniques, providing step-by-step guidance and in-depth
            knowledge to ensure precise and successful procedures.
          </p>

          <p className="text-justify font-semibold text-primary">
            With interactive modules, immersive visuals, and interactive
            simulations, this tutorial equips learners with the necessary skills
            to navigate the complexities of simple mandibular fracture
            reconstruction. From pre-operative analysis to surgical execution,
            this web-based tutorial serves as a trusted resource, enabling
            surgeons to enhance their expertise and deliver optimal patient
            outcomes. Discover a transformative learning experience that
            revolutionizes mandibular fracture reconstruction and unlocks new
            dimensions of surgical proficiency.
          </p>
        </div>
      </div>

      <div className={`space-y-5`}>
        <div className="bg-primary text-center font-bold text-3xl text-white p-10 space-y-4">
          <div className="w-full h-1 bg-gray-400" />
          <p className="uppercase">The Team</p>
          <div className="w-full h-1 bg-gray-400" />
        </div>

        <div className="flex flex-row space-x-4 justify-center items-center">
          <Image src={Image2} width={150} height={60} />
          <p className="text-[#0F1E53] font-bold">
            Kaye<br />
            "Team Leader"
          </p>
          <Image src={Image3} width={150} height={60} />
          <p className="text-[#0F1E53] font-bold">
            Kate
            <br />
            "Developer"
          </p>
        </div>
      </div>
    </div>
  );
}
