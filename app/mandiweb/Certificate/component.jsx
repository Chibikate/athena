// CertificatePage.js
import React from "react";
import Image from "next/image";
import Image1 from "./assets/Image1.svg";
import Image2 from "./assets/Image2.png";
import { EB_Garamond } from "next/font/google";

const inter = EB_Garamond({ subsets: ["latin"] });

const CertificateComponent = React.forwardRef(({ fullName, date }, ref) => {
  return (
    <div
      className="container mx-auto text-center flex flex-col items-center justify-center"
      ref={ref}
    >
      <div
  className={`w-[845px] mx-auto bg-[#c7dfff] p-5 border-x-2 border-y-2 rounded-md shadow-md ${inter.className} border-primary flex flex-col items-center`}
      >

        <div className="rounded-full">
          <Image
            alt="somethings never change"
            src={Image1}
            width={60}
            height={60}
          />
        </div>
        

        <h2 className="text-3xl font-semibold mb-4 py-4 font-3xl text-primary">
          CERTIFICATE OF COMPLETION
        </h2>
        <p className="pb-4 text-black">This certificate is presented to </p>
        <p className="font-semibold text-3xl py-5 underline italic text-primary">{fullName}</p>
        <p className="py-4 text-black">
          HAS SUCCESSFULLY COMPLETED THE VIRTUAL SURGICAL PLANNING FOR MANDIBULAR RECONSTRUCTION{" "}
        </p>
        <p className="font-bold">
          <br />
          {date}
        </p>

<div>
<Image className=" pt-4"
            alt="somethings never change"
            src={Image2}
            width={150}
            height={150}
          />
</div>


      </div>
    </div>
  );
});

CertificateComponent.displayName = 'CertificateComponent'; // Set the display name

export default CertificateComponent;
