import Image from "next/image";
import Image1 from "./assets/Image1.png";
import Image2 from "./assets/Image2.png";
import Image3 from "./assets/Image3.png";
import Image4 from "./assets/Image4.png";
import Image5 from "./assets/Image5.png";
import Image6 from "./assets/Image6.png";
import Image7 from "./assets/Image7.png";
import Image8 from "./assets/Image8.png";
import Image9 from "./assets/Image9.png";
import Image10 from "./assets/Image10.png";
import Image11 from "./assets/Image11.png";
import Image12 from "./assets/Image12.png";
import Image13 from "./assets/Image13.png";
import Image14 from "./assets/Image14.png";
import Image15 from "./assets/Image15.png";
import Image16 from "./assets/Image16.png";
import Image17 from "./assets/Image17.png";
import Image18 from "./assets/Image18.png";
import Image19 from "./assets/Image19.png";
import Image20 from "./assets/Image20.png";
import Image21 from "./assets/Image21.png";



export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row space-x-4">
        <Image src={Image1} width={450} height={300} />
        <div>
          <div classs className="w-full h-2 bg-gray-400"></div>
          <h3>Conversion of DICOM to STL</h3>
          <div classs className="w-full h-2 bg-gray-400"></div>
          <ul className="list-disc">
            <li>Discover how to navigate Meshmixer's user interface</li>
            <li>Discover how to navigate Meshmixer's user interface</li>
            <li>Familiarize with navigating the 3D environment in Meshmixer</li>
            <li>
              Using face groups and paint selection in separation of the
              mandible
            </li>
            <li>Performing 3D file manipulation</li>
            <li>Plane cut function</li>
            <li>Mirroring function</li>
          </ul>
        </div>
      </div>

      <div>
        <Image src={Image2} width={1920} height={1080} />
        <p className="text-center">
          Click on the "<span className="font-bold">Import</span>” button and
          select the desired "<span className="font-bold">.STL</span>" file.
        </p>
      </div>

      <div>
        <div className="flex flex-row space-x-4">
          <Image src={Image3} width={570} height={600} />
          <p className="text-justify">
            {" "}
            After loading the file, take time to navigate the 3D space. Click,
            hold, and drag the right mouse button to turn the 3D image. To pan
            the 3D image, click and hold the middle mouse button and drag toward
            the desired direction. The mouse scroll is used to zoom in or out.
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
        <div>
          <Image src={Image4} width={1920} height={1080} />
          <p className="text-center">
            To move the view to the desired position, click on the desired
            position in the view cube (e.g. top, right, left, etc.){" "}
          </p>
        </div>
        <div>
          <Image src={Image5} width={1920} height={1080} />
          <p className="text-center">
            Separating the mandible begins with generating face groups. This
            will allow us to select most of the mandibles in the least amount of
            time. Click on the "Edit" button on the left toolbar to bring up the
            selection menu. Click on "
            <span className="font-bold">Generate Face Groups.</span>"{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-row space-x-4">
          <Image src={Image6} width={570} height={600} />
          <p className="text-justify">
            {" "}
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

      <div className="flex flex-row space-x-4">
        <div>
          <Image src={Image7} width={1920} height={1080} />
          <p className="text-center">
            Once the face groups have been assigned, we can now select the areas
            by face group. To do this, first, click on “Select” on the left
            toolbar. This will create a selection area (shadow) over your
            pointer. The size can be adjusted using the slider or by inputting a
            number on the size option as shown above.
          </p>
        </div>
        <div>
          <Image src={Image8} width={1920} height={1080} />
          <p className="text-center">
            A single left click will select the highlighted area. Holding down
            the left mouse button will “Paint” the area.
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
        <Image src={Image9} width={570} height={600} />
        <p className="text-justify">
          {" "}
          A "<span className="font-bold">Double Left Click</span>" will
          highlight an entire group. In the example above, most of the mandible
          was selected. This is because of the assigned face group. We can now
          work on selecting the remaining areas of the mandible by manual "
          <span className="font-bold">Painting</span>". Select brush size can be
          increased and decreased depending on the accuracy needed. If a mistake
          is made, holding the "Shift" and clicking the left mouse button will
          erase the selected area.
        </p>
      </div>

      <div>
        <div className="flex flex-row space-x-4">
          <Image src={Image10} width={570} height={600} />
          <p className="text-justify">
            {" "}
            Once the mandible has been satisfactorily highlighted, we can now
            separate it from the rest of the skull. Still, under the select
            menu, click on "<span className="font-bold">Edit</span>” as shown above to bring out another selection
            menu and click "<span className="font-bold">Separate</span>”. A quicker way would be using the hotkey "<span className="font-bold">Y</span>” . WARNING, edit under the select menu is entirely different from
            the edit button seen in the left toolbar. Selecting the edit menu in
            the toolbar will cause all the selected areas to disappear.
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
        <div>
          <Image src={Image11} width={1920} height={1080} />
          <p className="text-center">
          After separating the mandible from the skull, the object browser window will pop up. We can hide and unhide the structures by clicking on the "<span className="font-bold">Eye</span>” icon as shown above. 
          </p>
        </div>
        <div>
          <Image src={Image12} width={1920} height={1080} />
          <p className="text-center">
          We can also rename each part by double clicking the name of the part. For the activity, we shall rename the part into mandible. We can also hide the rest of the parts we are not working with to make the program run smoother. 
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
        <div>
          <Image src={Image13} width={1920} height={1080} />
          <p className="text-center">
          Once the mandible has been separated, we can now "<span className="font-bold">cut off</span>” the diseased side by using the plane cut function. This can be accessed by clicking on "<span className="font-bold">Edit</span>” in the left toolbar and selecting "<span className="font-bold">Plane Cut</span>”. 
          </p>
        </div>
        <div>
          <Image src={Image14} width={1920} height={1080} />
          <p className="text-center">
          Selecting a plane cut will bring up a plan that we can use to cut the selected area. Holding the left mouse button and dragging it will align the plane to the direction in the line was made. It is the author's preference to align the orientation of the model by first clicking on the view cube.  
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-row space-x-4">
          <Image src={Image15} width={570} height={600} />
          <p className="text-justify">
          For the exercise, we will make a plane cut in the middle of the mandible cutting out the diseased side. To change the side to keep, click the small arrow as shown above. Should there be a need to keep both halves, the cut type could be set to “slice (Keep Both)” in the drop-down menu as shown above. To finalize the cut, click accept. 
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
        <div>
          <Image src={Image16} width={1920} height={1080} />
          <p className="text-center">To mirror the remaining mandible, click on "<span  className="font-bold">Edit</span>” in the left toolbar and select “<span className="font-bold">Mirror</span>”. 
          </p>
        </div>
        <div>
          <Image src={Image17} width={1920} height={1080} />
          <p className="text-center"> A mirror image of the selected part will appear. To bring the mandible together, click and drag the arrow as shown above or click on the desired area. 
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-row space-x-4">
          <Image src={Image18} width={570} height={600} />
          <p className="text-justify">
          To recreate the diseased side in reference to the remaining anatomy, we can unhide the remaining part by clicking on “<span className="font-bold">View</span>” on the top toolbar and selecting “<span className="font-bold">Show Objects Browser</span>”. Once satisfied with the position of the mirrored mandible, click accept.  
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
        <div>
          <Image src={Image19} width={1920} height={1080} />
          <p className="text-center">Since the mandible is still a mesh, we have to make the model into a solid that could be 3D printed. To do this, click on “Edit” on the left toolbar and click on “Make Solid”. . 
          </p>
        </div>
        <div>
          <Image src={Image20} width={1920} height={1080} />
          <p className="text-center"> Apply the “<span className="font-bold">Make Solid</span>” function by clicking on “<span className="font-bold">Accept</span>".
          </p>
        </div>
      </div>
    
      <div>
          <Image src={Image21} width={1920} height={1080} />
          <p className="text-center">
          To save as "<span className="font-bold">.STL</span>", click on “<span className="font-bold">File</span>” in the top toolbar and select “<span className="font-bold">Export</span>” or access it via its hotkey “<span className="font-bold">Ctrl+E</span>”. 
          </p>
        </div>

    </div>
  );
}
