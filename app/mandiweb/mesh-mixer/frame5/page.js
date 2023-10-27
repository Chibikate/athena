import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24 space-y-4">
      <div className="flex flex-row items-center">
        <Link href="/mandiweb/3d-slicer/frame4-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      <div className="space-y-4 bg-primary rounded-lg shadow-lg p-8 text-white text-xl">
        <div className="text-justify">
          <h2 className="text-3xl font-bold mb-4 text-center animate-bounce">
            🎉 Congratulations!
          </h2>
          <p>
            You&apos;re now a master of creating Anatomic Facsimile Models from
            scratch! 🌟 Give yourself a well-deserved pat on the back for your
            remarkable achievement.
          </p>
          <p className="pt-2">
            But hold on, the journey isn&apos;t complete yet! 🚀 Before you
            claim your certificate, test your knowledge and take our exciting
            Quiz. Don&apos;t forget to download and share your stunning final
            output!
          </p>
        </div>
      </div>
      </div>

     <div className=" flex flex-row p-10 text-center justify-between space-x-4">      
        <Link href="/mandiweb/mesh-mixer/Quiz">
          <div className="p-4 px-6  bg-[#74a5ff] hover:text-white hover:bg-sky-600 text-primary font-bold rounded-md shadow-lg">
            <p className="text-sm ">Take the Quiz</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
