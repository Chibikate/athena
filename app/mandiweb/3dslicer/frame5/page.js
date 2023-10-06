import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 m-40 bg-primary rounded-lg shadow-lg p-8 text-white text-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Congratulations!</h2>
          <p>
            You've achieved a remarkable feat by converting a CT scan into a 3D model. 🚀
          </p>
          <p>
            But the journey doesn't end here! 🌟 Continue your adventure in the world of developing mandibular reconstruction by taking our 3D Quiz before proceeding to meshmixer.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame4-4">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/Quiz">Quiz</Link>
        </div>
      </div>
    </main>
  );
}
