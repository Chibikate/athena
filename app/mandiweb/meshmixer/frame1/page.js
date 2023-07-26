import Image from "next/image";
import Image2 from "./assets/Image2.png";
import Image3 from "./assets/Image3.png";
import Image4 from "./assets/Image4.png";
import Image5 from "./assets/Image5.png";
import Image6 from "./assets/Image6.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4">
        <div className="flex flex-row space-x-4"></div>
        <div>
          <Image src={Image2} width={1920} height={1080} />
          <p className="text-center">
            Click on the "<span className="font-bold">Import</span>" button and
            select the desired "<span className="font-bold">.STL</span>" file.
          </p>
        </div>

        <div>
          <div className="flex flex-row space-x-4">
            <Image src={Image3} width={570} height={600} />
            <p className="text-justify">
              After loading the file, take time to navigate the 3D space. Click,
              hold, and drag the right mouse button to turn the 3D image. To pan
              the 3D image, click and hold the middle mouse button and drag
              toward the desired direction. The mouse scroll is used to zoom in
              or out.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
        <div>
          <Image src={Image4} width={1920} height={1080} />
          <p className="text-center">
            To move the view to the desired position, click on the desired
            position in the view cube (e.g. top, right, left, etc.)
          </p>
        </div>
        <div>
          <Image src={Image5} width={1920} height={1080} />
          <p className="text-center">
            Separating the mandible begins with generating face groups. This
            will allow us to select most of the mandibles in the least amount of
            time. Click on the "Edit" button on the left toolbar to bring up the
            selection menu. Click on "
            <span className="font-bold">Generate Face Groups</span>".
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-row space-x-4">
          <Image src={Image6} width={570} height={600} />
          <p className="text-justify">
            Meshmixer will automatically create face groups based on the angle
            inputted threshold value. The user can either drag the slider or
            input a number (default is 10) until a satisfactory amount of the
            mandible is selected as a different face group (different color)
            from the rest of the structure. Due to the inherent laggy nature of
            Meshmixer when computing, the author suggests inputting a number
            instead of dragging the slider. Once the desired result is achieved,
            click accept. Depending on the hardware, a lag period is expected.
          </p>
        </div>
      </div>
    </main>
  );
}