import Image from "next/image";
import Image1 from "./assets/image1.png";
import hero from "./assets/hero.png";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";

const TeamMembers = [
  {
    name: "Kaye",
    role: "Team Leader",
    image: Image2,
  },
  {
    name: "Kate",
    role: "Developer",
    image: Image3,
  },
];

export default function Page() {
  return (
    <div className="space-y-4">
      {/* Enhanced Full-width Hero Image */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
        <Image
          src={hero}
          layout="fill"
          objectFit="cover"
          alt="Virtual Surgical Planning"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Empowering Surgical Excellence
            </h1>
            <p className="text-xl text-white">
              Mastering Mandibular Fracture Reconstruction
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-4 my-6">
        <Image
          alt="Somethings never change"
          src={Image1}
          width={450}
          height={300}
        />
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
        <div className="bg-primary text-center font-bold text-3xl text-white p-10 space-y-4 rounded-lg shadow-md">
          <p className="uppercase">Meet the Team</p>
        </div>

        <div className="flex flex-row space-x-4 justify-center items-center mt-6">
          {TeamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <div className="bg-white p-2 rounded-lg">
                <Image
                  alt="Somethings never change"
                  src={member.image}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white"
                />
              </div>
              <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-[#F3F4F6] rounded-lg shadow-md p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[#0F1E53] font-bold">
                  {member.name}
                  <br />
                  <span className="text-sm text-gray-600">{member.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
