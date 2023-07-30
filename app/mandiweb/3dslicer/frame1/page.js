import Image from "next/image";
import image2 from "./assets/image-2.png";
import image3 from "./assets/image-3.png";
import image4 from "./assets/image-4.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-row space-x-4 items-center">
          <Image src={image2} width={1920} height={1080} />
          <div>
            <h3 className="text-2xl font-bold mb-4">Load DICOM to 3D Slicer</h3>
            <p>
              Load the data by clicking on the <span className="font-bold">"Load DICOM Data"</span> button shown in
              the picture.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Image src={image3} width={1920} height={1080} />
        <p className="text-center mt-4">
          After loading, your dataset should show in the list as shown above.
          Click the <span className="font-bold">"Patient Name" </span> then click <span className="font-bold">"Load"</span>
        </p>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Image src={image4} width={800} height={750} />
        <p className="text-justify mt-4">
          The CT scan files should show up once the DICOM files are done
          loading. To zoom in and out, hold "
          <span className="font-bold">Right Click</span>" and "
          <span className="font-bold">Drag</span>" until the desired view is
          acquired. To scroll through the CT scan, use the middle mouse
          scroll-wheel or dragging the slider above the boxes will both work
          equally well. <br /> The current view we are using is called "
          <span className="font-bold">Four Up</span>”. The empty window on the
          upper right is where the 3D image will be shown once activated.
          Clicking on the arrow on the toolbar as indicated above will activate
          a drop-down selection box which contains different views the user can
          utilize according to preference. For purposes of the activity, we will
          use the default four-up view.
        </p>
      </div>


        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8 cursor-pointer">
          Next
        </div>
    </main>
  );
}
