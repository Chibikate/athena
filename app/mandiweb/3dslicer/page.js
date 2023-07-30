import Image from "next/image";
import image1 from "./assets/image-1.png";
import Link from "next/link";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div
        className="bg-gray-100 rounded-lg shadow-md p-8 space-y-4"
        style={{ backgroundImage: "url('/path/to/your/background-image.jpg')", backgroundSize: 'cover' }}
      >
        <div className="space-y-4">
          <div className="flex flex-row space-x-4 items-center">
            <Image src={image1} width={1000} height={600} />
            <div>
              <div className="w-full h-2 bg-gray-400"></div>
              <h3 className="text-2xl font-bold">Conversion of DICOM to STL</h3>
              <div className="w-full h-2 bg-gray-400"></div>
              <ul className="list-disc pl-6">
                <li>Discover how to navigate the 3D slicer's user interface</li>
                <li>Export DICOM file to .STL</li>
                <li>Threshold based segmentation to separate the bones</li>
                <li>Cropping to narrow down the region of interest</li>
              </ul>
              
              <div className="w-full flex items-center justify-center mt-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg cursor-pointer">
                <Link href="/mandiweb/3dslicer/frame1">
             Next 
            </Link>
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
