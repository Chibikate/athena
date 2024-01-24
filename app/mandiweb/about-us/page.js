import Image from "next/image";
import Image1 from "@/public/athena/about-us/Image1.gif";
import hero from "@/public/athena/about-us/hero.jpg";
import Image2 from "@/public/athena/about-us/image2.png";
import Image3 from "@/public/athena/about-us/image3.png";
import GIF from "@/public/athena/about-us/Image1.gif";
import Link from "next/link"; 

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

export default function AboutUs() {
  return (
    <div>
      <div className="space-y-4  dark:bg-[#204047]">
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
            <Image
              className="mt-14  dark:bg-[#204047]"
              alt="Somethings never change"
              src={GIF}
              width={550}
              height={300}
            />
          </div>
          <div className="space-y-4">
            <p className="text-justify text-primary">
              Welcome to our website dedicated to Virtual Surgical Planning
              (VSP) for mandibular reconstruction! Our platform offers a
              comprehensive tutorial on utilizing VSP techniques, focusing on
              the integration of CT scans for pre-surgical planning. Our
              step-by-step guide caters to both students and professionals in
              the medical field, showcasing the use of software like 3D Slicer
              and Meshmixer to create digital models of human anatomy.
              Highlighting the significance of Computed Tomography (CT) as the
              gold standard in medical imaging for bone assessment, our tutorial
              emphasizes the precision of CT scans in evaluating bone
              pathologies and defects. We also acknowledge the value of Magnetic
              Resonance Imaging (MRI) scans for detailed soft tissue
              visualization and their contribution to generating 3D models of
              human anatomy. Our emphasis on Digital Imaging and Communications
              in Medicine (DICOM) underscores its role as the international
              standard for storing and managing medical imaging data. Moreover,
              we explore the integration of 3D printing in medicine, utilizing
              DICOM files to create custom anatomical parts, including surgical
              planning guides. Please note that the software featured in our
              tutorial is not FDA approved and is intended solely for
              educational purposes. It should not be utilized for clinical use,
              diagnosis, treatment, or disease prevention. For guidance on
              FDA-approved medical software, users are advised to consult with
              qualified professionals. </p>
              <p className="mt-4">
              Explore our web-based tutorial system, a
              cornerstone of our thesis titled &#34;Web-Based Tutorial System for
              the Standardized Process of Virtual Surgical Planning in
              Mandibular Reconstruction.&#34; We invite you to delve into the
              innovative approach to medical education and surgical planning
              offered on our platform.
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
                    width={100}
                    height={150}
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
        <div className="text-center justify-between ">
          <Link href="/mandiweb">
            <p className="rounded-lg px-4 py-2 text-primary text-md underline text-md font-bold p-4 cursor-pointer">
              Back{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
