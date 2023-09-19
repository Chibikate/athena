import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Image4 from "../assets/image-4.png";
import Image5 from "../assets/image-5.png";
import Image6 from "../assets/image-6.png";

export const mandiWebData = [
  {
    key: 1,
    image: Image1,
    description: (
      <p>
        Load the data by clicking on the &ldquo;Load DICOM Data&rdquo; button
        show in the picture.
      </p>
    ),
    title: "Load DICOM to 3D Slicer",
  },
  {
    key: 2,
    image: Image2,
    description: "",
    title: "Add Dicom data",
  },
  {
    key: 3,
    image: Image3,
    description: "",
    title: "Import Files",
  },
  {
    key: 4,
    image: Image4,
    description: "",
    title: "Select the downloaded folder and click import",
  },
  {
    key: 5,
    image: Image5,
    description: (
      <p>
        After loading, your dataset should show in the list as shown above.
        Click the <span className="font-bold">&ldquo;Patient Name&rdquo; </span>{" "}
        then click <span className="font-bold">&ldquo;Load&rdquo;</span>
      </p>
    ),
    title: "Select the downloaded folder and click import",
  },
  {
    key: 6,
    image: Image6,
    description: (
      <p>
        The CT scan files should show up once the DICOM files are done loading.
        To zoom in and out, hold &ldquo;
        <span className="font-bold">Right Click</span>&rdquo; and &ldquo;
        <span className="font-bold">Drag</span>&rdquo; until the desired view is
        acquired. To scroll through the CT scan, use the middle mouse
        scroll-wheel or dragging the slider above the boxes will both work
        equally well. <br /> The current view we are using is called &ldquo;
        <span className="font-bold">Four Up</span>&rdquo;. The empty window on
        the upper right is where the 3D image will be shown once activated.
        Clicking on the arrow on the toolbar as indicated above will activate a
        drop-down selection box which contains different views the user can
        utilize according to preference. For purposes of the activity, we will
        use the default four-up view.
      </p>
    ),
    title: "",
  },
];
