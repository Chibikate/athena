import Image from "next/image";
import image10 from "./assets/image-10.png";
import image11 from "./assets/image-11.png";
import image12 from "./assets/image-12.png";
import image13 from "./assets/image-13.png";
import image14 from "./assets/image-14.png";
import image15 from "./assets/image-15.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4">
        <div className="flex flex-row space-x-4"></div>

        <div className="flex flex-row space-x-4">
          <div>
            <Image src={image10} width={1920} height={1080} />
            <p>
              Click on the module drop down menu and select the "
              <span className="font-bold">Volumes</span>" module.{" "}
            </p>
          </div>
          <div>
            <Image src={image11} width={1920} height={1080} />
            <p>
              Select "
              <span className="font-bold">No series description cropped</span>"
              then select CT bone window level as indicated above.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <div>
            <Image src={image12} width={1920} height={1080} />
            <p>
              Once again, click on the module drop down menu from the toolbar
              and select the "<span className="font-bold">Segment Editor</span>"
              module.
            </p>
          </div>
          <div>
            <Image src={image13} width={1920} height={1080} />
            <p>
              Once in the segment editor module, click on the "
              <span className="font-bold">Add</span>" button to add the segment
              we will be working with.
            </p>
          </div>
        </div>

        <div>
          <Image src={image14} width={1920} height={1080} />
          <p className="text-center">
            With a segment added, clicking the "
            <span className="font-bold">Color Selection Button</span>" will
            bring up a menu that will allow the user to select and assign
            different colors for different structures if so desired. For this
            activity, let us select bone.{" "}
          </p>
        </div>

        <div>
          <Image src={image15} width={1920} height={1080} />
          <p className="text-center">
            To perform threshold based segmentation, click on the "
            <span className="font-bold">Threshold</span>" effect.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}