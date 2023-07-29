import Image from "next/image";
import Image7 from "./assets/Image7.png";
import Image8 from "./assets/Image8.png";
import Image9 from "./assets/Image9.png";
import Image10 from "./assets/Image10.png";
import Image11 from "./assets/Image11.png";
import Image12 from "./assets/Image12.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center">
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image src={Image7} width={1920} height={1080} />
              <p className="mt-4 text-center">
                Once the face groups have been assigned, we can now select the areas
                by face group. To do this, first, click on “Select” on the left
                toolbar. This will create a selection area (shadow) over your
                pointer. The size can be adjusted using the slider or by inputting a
                number on the size option as shown above.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image src={Image8} width={1920} height={1080} />
              <p className="mt-4 text-center">
                A single left click will select the highlighted area. Holding down
                the left mouse button will “Paint” the area.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
          <Image src={Image9} width={570} height={600} />
          <p className="mt-4 text-justify">
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

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-row space-x-4">
            <Image src={Image10} width={570} height={600} />
            <p className="mt-4 text-justify">
              Once the mandible has been satisfactorily highlighted, we can now
              separate it from the rest of the skull. Still, under the select
              menu, click on "<span className="font-bold">Edit</span>” as shown above to bring out another selection
              menu and click "<span className="font-bold">Separate</span>”. A quicker way would be using the hotkey "<span className="font-bold">Y</span>” . WARNING, edit under the select menu is entirely different from
              the edit button seen in the left toolbar. Selecting the edit menu in
              the toolbar will cause all the selected areas to disappear.
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image src={Image11} width={1920} height={1080} />
            <p className="mt-4 text-center">
              After separating the mandible from the skull, the object browser window will pop up. We can hide and unhide the structures by clicking on the "<span className="font-bold">Eye</span>” icon as shown above. 
            </p>
          </div>
          <div>
            <Image src={Image12} width={1920} height={1080} />
            <p className="mt-4 text-center">
              We can also rename each part by double clicking the name of the part. For the activity, we shall rename the part into mandible. We can also hide the rest of the parts we are not working with to make the program run smoother. 
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
