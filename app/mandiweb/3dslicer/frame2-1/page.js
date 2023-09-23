import Image from "next/image";
import image6 from "./assets/image-6.png";
import Link from "next/link";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
        <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            </div>
        <Image alt="something never " src={image6} width={1920} height={1080} />
        <p className="text-center mt-4">
          Click on the{" "}
          <span className="font-bold">&ldquo;Magnifying Glass&rdquo;</span>icon
          on the toolbar, just left from the module drop-down box to bring up
          the search function and type in &ldquo;
          <span className="font-bold">Crop</span>&rdquo;. Select{" "}
          <span className="font-bold">Crop Volume</span> and click on{" "}
          <span className="font-bold">Switch to Module</span>.
        </p>
      </div>
      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2-2">Next</Link>
        </div>
      </div>
    </main>
  );
}