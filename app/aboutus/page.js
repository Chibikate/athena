import Image from "next/image";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";

import { Inter, Anton } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row space-x-4">
        <Image src={Image1} width={450} height={300} />
        <p className="text-justify">
          Technology has been used in the medical field for standardization and
          predictability in results contributing to significant change in daily
          practice particularly in the surgical field. In surgery, advancements
          in technology are transforming how surgeons visualize, plan, make
          surgical implants and prototype models, and perform preoperative
          planning procedures. This is known as Virtual Surgical Planning (VSP)
          [7], [27]–[29] and is widely utilized in craniomaxillofacial (CMF)
          surgery among developing economies with the purpose of treating
          congenital and acquired conditions of the face and head. The surgical
          process comprises the perioperative period which consists of the
          preoperative, intraoperative, and postoperative periods [15], [27],
          [29]–[31]. VSP is a preoperative planning method that uses 3D imaging
          computer software to visualize a surgical procedure [15]–[19] and
          enables surgeons to predefine the steps in a surgical procedure.
          Performing craniomaxillofacial surgery is challenging and very
          demanding due to the complex anatomy in the facial region, having many
          vital organs and structures such as an intricate network of blood
          vessels and nerves, as well as the brain, eyes, nose and vital teeth
          [18], [32], [33]. Presently, several tools and techniques are being
          used with an intent to control the activities in surgery and to
          successfully achieve the expected results. [7], [34], [35].
        </p>
      </div>

      <div className={`space-y-5`}>
        <div>
          <div classs className="w-full h-2 bg-gray-400"></div>
          <h3 className={`${anton.className} text-center text-3xl text-[#0F1E53]`}>THE TEAM</h3>
          <div classs className="w-full h-2 bg-gray-400"></div>
        </div>
        <div className="flex flex-row space-x-4 justify-center items-center">
          <Image src={Image2} width={150} height={60} />
          <p className="text-[#0F1E53] font-bold">Kaye Velarde <br/>"Team Leader"</p>
          <Image src={Image3} width={150} height={60} />
          <p className="text-[#0F1E53] font-bold">Queenie Kate <br/>Cabanilla <br/>"Developer"</p>
      </div>
    </div>
    </div>
  );
}
