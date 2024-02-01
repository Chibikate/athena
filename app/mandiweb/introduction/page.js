"use client";

import Image from "next/image";
import Link from "next/link";
import Image6 from "@/public/mandiweb/Image6.png";
import { Delius } from "next/font/google";

const delius = Delius({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen flow-x-hidden items-center justify-center py-4 ml-16 mr-16 ">
      <div className="flex flex-col space-between rounded-lg shadow-xl p-4 dark:bg-white">
        <div className="items-center text-center justify-between ">
          <p className="p-4 font-bold text-3xl text-white bg-primary">
            INTRODUCTION
          </p>
        </div>
        <div className="text-justify space-y-4 mx-2 pt-4 flex flex-col">
          <p className="block">
            <spand className="font-bold">
              Virtual surgical planning (VSP){" "}
            </spand>
            is a planning technique that allows pre-surgical planning in a
            virtual environment. This technology provides the surgeon with tools
            to optimize the surgical plan in a risk-free environment. This plan
            can be transferred into an actual physical template using 3D
            printing. This module provides a step-by step process in the basic
            procedure of utilizing a CT scan for virtual surgical planning of a
            mandibular defect. <br />
            This tutorial on VSP for mandibular reconstruction will serve as a
            guide for individuals in the medical field, including both students
            and professionals. Users will learn how to utilize VSP software,
            such as 3D Slicer and Meshmixer, to create a digital model of human
            anatomy, with a specific focus on mandibular reconstruction. This
            tutorial also extends its applicability to individuals interested in
            the innovative approach to medical
          </p>
          <p className="pt-4">
            {" "}
            In medical imaging,
            <span className="font-bold "> Computed Tomography (CT)</span> is
            considered the gold standard for evaluating bone pathologies,
            lesions, defects, and other skeletal abnormalities due to its
            ability to produce detailed images of the inside of the body. CT
            scans are particularly effective in providing precise assessments of
            bone-related conditions. On the other hand,{" "}
            <span ClassName="font-bold">
              {" "}
              Magnetic Resonance Imaging (MRI){" "}
            </span>{" "}
            scans, while not ideal for visualizing bones, are valuable for
            generating detailed images of soft tissues and can contribute to
            creating a{" "}
            <span ClassName="font-bold">three-dimensional (3D) </span> model of
            the human anatomy.
          </p>
          <p className="pt-4">
            <span className="font-bold ">
              Digital Imaging and Communications in Medicine (DICOM)
            </span>{" "}
            is the international standard for storing, transmitting, and
            managing medical imaging information and data. 3D printing in
            medicine uses DICOM files to create custom anatomical parts, such as
            surgical planning guides.
          </p>
        </div>
        <div className="pt-4 ">
          <p className="text-justify italic">
            Disclaimer: The software used in this tutorial is not FDA approved
            and should only be utilized for educational purposes. It is not
            intended for clinical use, diagnosis, treatment, or prevention of
            any disease. Users should consult with qualified professionals for
            guidance on FDA-approved medical software
          </p>
        </div>
        <div className={`flex flex-col dark:text-primary ${delius.className}`}>
          <p className="font-bold text-4xl pt-10 text-center text-primary">
            THE TEAM
          </p>
          <div className="flex justify-center">
            <Image
              alt="somethings never change"
              src={Image6}
              width={200}
              height={100}
            />
   
            </div>
          <div className="flex flex-col sm:flex-row  justify-between p-4 text-center">
            <p className="pl-3">
              Lemuel Clark Velasco <br />{" "}
              <span className="font-bold text-sm">Project Leader</span>
            </p>

            <div>
              <p>
                Dr. Rentor Cafino <br /> MD, DPSO-HM
                <br />
                <span className="font-semibold text-sm"> Content Creator </span>
              </p>
            </div>
            <div>
              <p>
                Dr. Armando T. Isla <br /> MD, FPSO-HNS
                <br />
                <span className="font-semibold text-sm">
                  Content Validation
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <p>Dr. Karen Mae Ty</p>
              <p>Dr. Jay Pee Amable</p>
              <p>Dr. Isaac Cesar De Guzman</p>
              <p>Dr. Jehan Grace Maglaya</p>
              <p>Dr. Anna Carmina Zantua</p>
              <p className="font-bold pb-4 text-sm">Medical Advisers</p>
            </div>
            <p>
              Kaye Q. Velarde <br />{" "}
              <span className="font-bold pb-4 text-sm">Pedagogy Manager</span>
            </p>

            <p>
              Queenie Kate S. Cabanilla <br />{" "}
              <span className="font-bold pb-4 text-sm">Web Developer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-32 h-12 hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center hover-border hover:border-white-400 hover:text-white text-white font-bold rounded-full shadow-lg mt-8 cursor-pointer">
          <Link href="/mandiweb/things-to-download">Proceed</Link>
        </div>
      </div>
    </div>
  );
}
