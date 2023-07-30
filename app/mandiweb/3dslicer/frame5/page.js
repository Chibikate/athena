import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 m-40 bg-primary rounded-lg shadow-lg p-8 text-white text-xl">
        <p className="text-center">
          Congratulations! You have successfully converted a CT scan of a patient
          into a 3D file. Further manipulation of this file is needed depending
          on the need. If no other modifications are required, feel free to
          print the file as is. Take note though, that the file may be too large
          or may contain errors depending on how well the segmentation was
          performed.
        </p>
        <p className="text-center mt-4">
          Before you can proceed to Meshmixer, you need to take and perfect the
          provided quiz for you to continue the activity for further
          manipulation of the model.
        </p>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame6">Next</Link>
        </div>
        </div>
    </main>
  );
}