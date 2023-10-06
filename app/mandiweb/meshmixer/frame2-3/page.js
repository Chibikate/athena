import Image from "next/image";
import Image10 from "./assets/Image10.png";
import Link from "next/link";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y p-8">
        <div className="flex flex-row space-x-4 items-center"></div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">

            <Image
              alt="Somethings never change"
              src={Image10}
              width={1920}
            height={1080}
            />
            <p className="mt-4 text-justify">
              Once the mandible has been satisfactorily highlighted, we can now
              separate it from the rest of the skull. Still, under the select
              menu, click on &ldquo;<span className="font-bold">Edit</span>
              &rdquo; as shown above to bring out another selection menu and
              click &ldquo;<span className="font-bold">Separate</span>&rdquo;. A
              quicker way would be using the hotkey &ldquo;
              <span className="font-bold">Y</span>&rdquo; . WARNING, edit under
              the select menu is entirely different from the edit button seen in
              the left toolbar. Selecting the edit menu in the toolbar will
              cause all the selected areas to disappear.
            </p>
          </div>
          </div>
        <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2-2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame2-4">Next</Link>
        </div>
      </div>
    </main>
  );
}

        