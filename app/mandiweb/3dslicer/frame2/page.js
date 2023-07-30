import Image from "next/image";
import image5 from "./assets/image-5.png";
import image6 from "./assets/image-6.png";
import image7 from "./assets/image-7.png";
import image8 from "./assets/image-8.png";
import image9 from "./assets/image-9.png";
import image10 from "./assets/image-10.png";
import image11 from "./assets/image-11.png";
import image12 from "./assets/image-12.png";
import image13 from "./assets/image-13.png";
import image14 from "./assets/image-14.png";
import image15 from "./assets/image-15.png";
import image16 from "./assets/image-16.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <Image src={image5} width={1920} height={1080} />
        <div>
          <h3 className="text-2xl font-bold mb-4">3D Slicer Module</h3>
          <p className="text-justify">
            Modules in 3D Slicer allow us to perform actions that affect the
            DICOM files in various ways. The drop-down menu can be accessed from
            the upper left of the toolbar as indicated above. For the purpose of
            the activity, we will only be using{" "}
            <span className="font-bold">Crop Volume</span>,{" "}
            <span className="font-bold">Segment Editor</span>, and{" "}
            <span className="font-bold">Volumes Module</span> in preparation of
            the 3D file.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Image src={image6} width={1920} height={1080} />
        <p className="text-center mt-4">
          Click on the <span className="font-bold">"Magnifying Glass"</span>icon on the toolbar, just left from
          the module drop-down box to bring up the search function and type in "
          <span className="font-bold">Crop</span>". Select{" "}
          <span className="font-bold">Crop Volume</span> and click on{" "}
          <span className="font-bold">Switch to Module</span>.
        </p>
      </div>

      <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div>
          <Image src={image7} width={1900} height={1050} />
          <p>
            Once in the Crop Volume module, click on the input{" "}
            <span className="font-bold">Region of Interest (ROI)</span> drop
            down box and select{" "}
            <span className="font-bold">Create New Annotation ROI</span>.
          </p>
        </div>
        <div>
          <Image src={image8} width={1920} height={1090} />
          <p>
            Clicking on the "<span className="font-bold">Eye</span>" icon will
            reveal a bounding box that could be adjusted by clicking and
            dragging on the points to narrow the region of interest.
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <Image src={image9} width={1920} height={1080} />
        <p className="text-justify">
          Drag the bounding box to focus on the areas needed. For this exercise,
          focus must be on the midface and mandible cutting out the rest of the
          skull but making sure the temporomandibular joint is included. Once
          the region of interest is selected, click apply to apply the crop.
          Click the <span className="font-bold">"eye"</span> icon once again to remove the bounding box.
        </p>
      </div>

      <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
        Next
      </div>
    </main>
  );
}
