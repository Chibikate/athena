import SlicerCard from "@/components/slicer-card";
import Link from "next/link";
import { mandiWebData } from "./data"

export default function Page() {
  return (
    <main> 

    <SlicerCard title={mandiWebData[0].title} description={mandiWebData[0].description} image={mandiWebData[0].image} />
  
    <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-2">Next</Link>
        </div>
      </div>
    </main>
  );
}
