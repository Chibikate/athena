import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 m-40 bg-primary rounded-lg shadow-lg p-8 text-white text-xl">
        <p className="text-center">
        Congratulations! You have successfully created an Anatomic Facsimile Model from scratch! Give yourself a pat on the back before you move on to practicing on the rest of the DICOM files. 
        </p>
        <p className="text-center mt-4">
          Before you get your certificate, kindly answer the provided Quiz and don't forget to download and send your final output.
        </p>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame4">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/Quiz">Quiz</Link>
        </div>
        </div>
    </main>
  );
}