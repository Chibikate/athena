// CertificatePage.js
import React from "react";
import Image from "next/image";
import Image1 from "./assets/image1.svg";
import { EB_Garamond } from "next/font/google";

const inter = EB_Garamond({ subsets: ["latin"] });

const CertificateComponent = React.forwardRef(({ fullName, date }, ref) => {
  return (
    <div
      className="container mx-auto text-center flex flex-col items-center justify-center"
      ref={ref}
    >
      <div
        className={`w-[845px] mx-auto bg-[#DCE8F2] p-5 border-x-8 border-y-8 rounded-md shadow-md ${inter.className} border-primary flex flex-col items-center`}
      >
        <div className="rounded-full">
          <Image
            alt="somethings never change"
            src={Image1}
            width={50}
            height={40}
          />
        </div>
        <p className="py-6 text-primary font-semibold font-md">Mandiweb</p>
        <p className="py-4 px-44">
          Web-based Tutorial System in the Standardized Process of Virtual
          Surgical Planning for Mandibular Reconstruction
        </p>
        <h2 className="text-3xl font-semibold mb-4 py-4 font-3xl text-primary">
          CERTIFICATE OF COMPLETION
        </h2>
        <p className="pb-4">This certificate is presented to </p>
        <p className="font-semibold text-3xl py-5 text-primary">{fullName}</p>
        <p className="py-4 px-40">
          This program covered essential topics in the field of surgical
          planning for mandibular reconstruction, equipping the recipient with
          valuable knowledge and skills in this specialized area of healthcare.{" "}
        </p>
        <p className="font-bold">
          <br />
          {date}
        </p>
      </div>
    </div>
  );
});

export default CertificateComponent;
