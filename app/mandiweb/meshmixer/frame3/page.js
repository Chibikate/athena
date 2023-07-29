import Image from "next/image";
import Image13 from "./assets/Image13.png";
import Image14 from "./assets/Image14.png";
import Image15 from "./assets/Image15.png";
import Image16 from "./assets/Image16.png";
import Image17 from "./assets/Image17.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center"> 
        </div>
      
        <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image src={Image13} width={1920} height={1080} />
            <p className="text-center">
              Once the mandible has been separated, we can now "
              <span className="font-bold">cut off</span>” the diseased side by using the plane cut function. This can be accessed by clicking on "
              <span className="font-bold">Edit</span>” in the left toolbar and selecting "
              <span className="font-bold">Plane Cut</span>”.
            </p>
          </div>
          <div>
            <Image src={Image14} width={1920} height={1080} />
            <p className="text-center">
              Selecting a plane cut will bring up a plan that we can use to cut the selected area. Holding the left mouse button and dragging it will align the plane to the direction in the line was made. It is the author's preference to align the orientation of the model by first clicking on the view cube.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-row space-x-4">
            <Image src={Image15} width={570} height={600} />
            <p className="text-justify">
              For the exercise, we will make a plane cut in the middle of the mandible cutting out the diseased side. To change the side to keep, click the small arrow as shown above. Should there be a need to keep both halves, the cut type could be set to “slice (Keep Both)” in the drop-down menu as shown above. To finalize the cut, click accept.
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <Image src={Image16} width={1920} height={1080} />
            <p className="text-center">To mirror the remaining mandible, click on "
              <span className="font-bold">Edit</span>” in the left toolbar and select “
              <span className="font-bold">Mirror</span>”.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <Image src={Image17} width={1920} height={1080} />
            <p className="text-center"> A mirror image of the selected part will appear. To bring the mandible together, click and drag the arrow as shown above or click on the desired area.
            </p>
          </div>
        </div>
      </div>
      <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
        Next
      </div>
    </main>
  );
}