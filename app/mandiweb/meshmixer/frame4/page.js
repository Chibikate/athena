import Image from "next/image";
import Image18 from "./assets/Image18.png";
import Image19 from "./assets/Image19.png";
import Image20 from "./assets/Image20.png";
import Image21 from "./assets/Image21.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4">
        <div className="flex flex-row space-x-4"></div>

        <div>
          <div className="flex flex-row space-x-4">
            <Image src={Image18} width={570} height={600} />
            <p className="text-justify">
              To recreate the diseased side in reference to the remaining
              anatomy, we can unhide the remaining part by clicking on “
              <span className="font-bold">View</span>” on the top toolbar and
              selecting “<span className="font-bold">Show Objects Browser</span>
              ”. Once satisfied with the position of the mirrored mandible,
              click accept.
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <div>
            <Image src={Image19} width={1920} height={1080} />
            <p className="text-center">
              Since the mandible is still a mesh, we have to make the model into
              a solid that could be 3D printed. To do this, click on “Edit” on
              the left toolbar and click on “Make Solid”. .
            </p>
          </div>
          <div>
            <Image src={Image20} width={1920} height={1080} />
            <p className="text-center">
              {" "}
              Apply the “<span className="font-bold">Make Solid</span>” function
              by clicking on “<span className="font-bold">Accept</span>".
            </p>
          </div>
        </div>

        <div>
          <Image src={Image21} width={1920} height={1080} />
          <p className="text-center">
            To save as "<span className="font-bold">.STL</span>", click on “
            <span className="font-bold">File</span>” in the top toolbar and
            select “<span className="font-bold">Export</span>” or access it via
            its hotkey “<span className="font-bold">Ctrl+E</span>”.
          </p>
        </div>
      </div>
    </main>
  );
}
