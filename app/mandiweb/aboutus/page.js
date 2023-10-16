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
          alt="Virtual Surgical Planning Hero Image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Empowering Surgical Excellence
            </h1>
            <p className="text-xl text-white">
              Mastering Mandibular reconstructions
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row space-x-4 my-6">
        <div className="w-full">
          <Image className="mt-14"
            alt="Somethings never change"
            src={Image1}
            width={550}
            height={300}
          />
        </div>
        <div className="space-y-4">
          <p className="text-justify text-primary">
          <span className="font-bold">Virtual surgical planning (VSP)</span> is a new technology that uses computers to help surgeons plan and perform mandibular reconstructions with greater precision and accuracy. Mandibular reconstruction is a complex surgery that is often needed after trauma, cancer treatment, or congenital deformities. The goal is to restore both the function and appearance of the lower jaw.
VSP allows surgeons to create a digital model of the patient&apos;s jaw and plan the surgery in detail before it is performed. This helps to reduce the risk of complications and improve the outcome of the surgery.
This tutorial will teach students the basics of VSP for mandibular reconstruction. Students will learn how to use the VSP software - 3D slicer and Meshmixer to create a digital model of the patient&apos;s jaw.

          </p>
          <p className="text-justify text-primary">
          <span className="font-bold">Computed Tomography (CT)</span> scans and <span className="font-bold">Magnetic Resonance Imaging (MRI)</span> scans are medical imaging techniques that produce detailed images of the inside of the body. These images can be used to create a <span className="font-bold">three-dimensional (3D)</span> model of the patient&apos;s jaw.
<span className="font-bold">Digital Imaging and Communications in Medicine (DICOM)</span> is the international standard for storing, transmitting, and managing medical imaging information and data. 3D printing in medicine uses DICOM files to create custom anatomical parts, such as surgical planning guides.
          </p>
        </div>
      </div>

      <div className="space-y-5">
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
                  alt={`${member.name}'s Photo`}
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
