import Image from "next/image";
import image2 from "./assets/image-2.png";
import image3 from "./assets/image-3.png";
import image4 from "./assets/image-4.png";

export default function Page() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4"> 
        <div className="flex flex-row space-x-4"></div>

        <div className="flex flex-row space-x-4">
          <Image src={image2} width={1920} height={1080} />
          <div>
            <div className="w-full h-2 bg-gray-400"></div>
            <h3>Load DICOM to 3D Slicer</h3>
            <div className="w-full h-2 bg-gray-400"></div>
            <p>
              Load the data by clicking on the "Load DICOM Data" button shown in
              the picture.
            </p>
          </div>
        </div>        
      </div>
      <div>
          <Image src={image3} width={1920} height={1080} />
          <p className="text-center">
            After loading, your dataset should show in the list as shown above.
            Click the "Patient Name" then click "Load"
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <Image src={image4} width={463.73} height={351.42} />
          <p className="text-justify">
            The CT scan files should show up once the DICOM files are done
            loading. To zoom in and out, hold "
            <span className="font-bold">Right Click</span>" and "
            <span className="font-bold">Drag</span>" until desired view is
            acquired. To scroll through the CT scan, using the middle mouse
            scroll-wheel or dragging the slider above the boxes will both work
            equally well. <br /> The current view we are using is called "
            <span className="font-bold">Four Up</span>”. The empty window on the
            upper right is where the 3D image will be shown once activated.
            Clicking on the arrow on the toolbar as indicated above will
            activate a drop down selection box which contains different views
            the user can utilize according to preference. For purposes of the
            activity, we will use the default four up view.{" "}
          </p>
        </div>
    </main>
  );
}