import Image from "next/image";
import image1 from "./assets/image-1.png";
import image2 from "./assets/image-2.png";
import image3 from "./assets/image-3.png";
import image4 from "./assets/image-4.png";
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
import image17 from "./assets/image-17.png";
import image18 from "./assets/image-18.png";
import image19 from "./assets/image-19.png";
import image20 from "./assets/image-20.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4">
        <div className="flex flex-row space-x-4">
          <Image src={image1} width={1000} height={600} />
          <div>
            <div classs className="w-full h-2 bg-gray-400"></div>
            <h3>Conversion of DICOM to STL</h3>
            <div classs className="w-full h-2 bg-gray-400"></div>
            <ul className="list-dics">
              <li>Discover how to navigate the 3D slicer's user interface</li>
              <li>Export DICOM file to .STL</li>
              <li>Threshold based segmentation to separate the bones</li>
              <li>Cropping to narrow down the region of interest</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Image src={image2} width={1920} height={1080} />
          <div>
            <div classs className="w-full h-2 bg-gray-400"></div>
            <h3>Load DICOM to 3D Slicer</h3>
            <div classs className="w-full h-2 bg-gray-400"></div>
            <p>
              Load the data by clicking on the "Load DICOM Data" button shown in
              the picture.
            </p>
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

        <div className="flex flex-row space-x-4">
          <Image src={image5} width={463.73} height={351.42} />
          <div>
            <div classs className="w-full h-2 bg-gray-400"></div>
            <h3>3D Slicer Module</h3>
            <div classs className="w-full h-2 bg-gray-400"></div>
            <p className="text-justify">
              Modules in 3D slicer allow us to perform actions that affect the
              DICOM files in various ways. The drop-down menu can be accessed
              from the upper left of the toolbar as indicated above. For the
              purpose of the activity, we will only be using{" "}
              <span className="font-bold">Crop Volume</span>" , "
              <span className="font-bold">Segment Editor</span>", and{" "}
              <span className="font-bold">Volumes Module</span>" in preparation
              of the 3D file.
            </p>
          </div>
        </div>

        <div>
          <Image src={image6} width={1920} height={1080} />
          <p className="text-center">
            Click on the "Magnifying Glass" icon on the toolbar, just left from
            the module drop down box to bring up the search function and type in
            "<span className="font-bold">Crop</span>". Select{" "}
            <span className="font-bold">Crop Volume</span>" and click on{" "}
            <spand className="font-bold">Switch to Module</spand>"{" "}
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <div>
            <Image src={image7} width={1900} height={1050} />
            <p>
              Once in crop volume module, click on the input{" "}
              <span className="font-bold">Region of Interest (ROI)</span>" drop
              down box and select{" "}
              <span className="font-bold">Create New Annotation ROI</span>".
            </p>
          </div>
          <div>
            <Image src={image8} width={1920} height={1090} />
            <p>
              Clicking on the "<span className="font-bold">Eye</span>” icon will
              reveal a bounding box that could be adjusted by clicking and
              dragging on the points to narrow the region of interest.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Image src={image9} width={1920} height={1080} />
          <p className="text-justify">
            Drag the bounding box to focus on the areas needed. For this
            exercise, focus must be on the midface and mandible cutting out the
            rest of the skull but making sure the temporomandibular joint is
            included. Once the region of interest is selected, click apply to
            apply the crop. Click the “eye” icon once again to remove the
            bounding box.
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <div>
            <Image src={image10} width={1920} height={1080} />
            <p>
              Click on the module drop down menu and select the "
              <spanc className="font-bold">Volumes</spanc>” module.{" "}
            </p>
          </div>
          <div>
            <Image src={image11} width={1920} height={1080} />
            <p>
              Select "
              <span className="font-bold">No series description croppped</span>"
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
              <span className="font-bold">Add</span>” button to add the segment
              we will be working with.
            </p>
          </div>
        </div>

        <div>
          <Image src={image14} width={1920} height={1080} />
          <p className="text-center">
            With a segment added, clicking the "
            <span className="font-bold">Color Selection Button</span>” will
            bring up a menu that will allow the user to select and assign
            different colors for different structures if so desired. For this
            activity, let us select bone.{" "}
          </p>
        </div>

        <div>
          <Image src={image15} width={1920} height={1080} />
          <p className="text-center">
            To perform threshold based segmentation, click on the "
            <span className="font-bold">Threshold</span>” effect.{" "}
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <Image src={image16} width={1920} height={1080} />
          <p className="text-justify">
            Once the threshold effect has been activated, we can adjust the
            threshold range we desire to focus on. We can either input a
            specific number or drag the slider from left to right until we
            achieve our desired threshold. For the purpose of this activity, we
            will input 450 in the minimum threshold (left box) as indicated
            above.{" "}
          </p>
        </div>

        <div>
          <Image src={image17} width={1920} height={1080} />
          <p className="text-center">className="flex flex-row space-x-4"</p>
        </div>

        <div className="flex flex-row space-x-4">
          <Image src={image18} width={1920} height={1080} />
          <p className="text-justify">
            With the threshold effect applied, click on the show 3D button to
            render the 3D image. Depending on the computer used, a short lag
            period may happen. If the 3D image does not appear in the upper
            right corner, we can click on the "
            <span className="font-bold">Center View</span> button on the upper
            left of the blue window. Clicking on the 3D image with the left
            mouse button will allow the user to move the 3D image. To zoom in
            and out, click and hold the right mouse button and drag until
            desired view is achieved.{" "}
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <Image src={image19} width={1920} height={1080} />
          <p className="text-justify">
            Once we are satisfied with our 3D image, we may now save our file.
            We can choose to rename the file by clicking on the segmentation
            drop-down menu and select "
            <span className="font-bold">Rename Current Segmentation</span>". For
            the purpose of the exercise, let us rename it to “
            <span className="font-bold">Skull</span>”. We can now save our file
            as "<span className="font-bold">STL</span>" by clicking on the small
            down arrow on the right side of the segmentation button as indicated
            above to access the drop-down menu. Select export to files.
          </p>
        </div>
        <div>
          <Image src={image20} width={1920} height={1080} />
          <p className="text-center">
            Selecting export to files will prompt a small window to appear where
            the user can then select the destination folder by clicking on the
            file path as indicated above. Once the desired file destination is
            set, click export to save the file.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
