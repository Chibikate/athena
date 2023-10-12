import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-24 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame4-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
      <div className="space-y-4 bg-primary rounded-lg shadow-lg p-8 text-white text-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 animate-bounce">🎉 Congratulations!</h2>
          <p>
            You're now a master of creating Anatomic Facsimile Models from scratch! 🌟 Give yourself a well-deserved pat on the back for your remarkable achievement.
          </p>
          <p>
            But hold on, the journey isn't complete yet! 🚀 Before you claim your certificate, test your knowledge and take our exciting Quiz. Don't forget to download and share your stunning final output!
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/Quiz">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
      
    </main>
  );
}
