import Image from "next/image";
import image4 from "@/public/mandiweb/image4.png";
import GIF from "@/public/mandiweb/star.gif";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden items-center justify-center">
        <div className="p-2">
        <Image
              
              alt="Somethings never change"
              src={GIF}
              width={100}
              height={100}
            />
        </div>
      <Image
        alt="Somethings never change"
        src={image4}
        width={180}
        height={180}
      />
      <div className="text-center text-primary justify-between">
        <p className="text-3xl font-bold pt-2 pb-4 text-primary">Congratulations!</p>
        <p>
          You did a great job! You can now submit in the submission bin provided
          below your final output
        </p>
        <p>After submitting, we're encouraging you to <span className="underline cursor-pointer font-bold">take our survey</span></p>
      </div>
      <div className="pt-6  cursor-pointer">
        <p className="bg-primary text-sm p-2 hover:border-2 rounded-lg shadow-xl text-white">Submission Bin</p>
      </div>
      <Link href="/mandiweb ">
      <div className="pt-4  cursor-pointer ">
        <p className="bg-primary text-sm p-2 hover:border-2 rounded-lg shadow-xl text-white">Home Page</p>
      </div>
      </Link>
    </div>
  );
}
