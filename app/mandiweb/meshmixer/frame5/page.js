import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 m-40 bg-primary rounded-lg shadow-lg p-8 text-white text-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Congratulations!</h2>
          <p>
            You're now a master of creating Anatomic Facsimile Models from scratch! 🌟 Give yourself a well-deserved pat on the back for your remarkable achievement.
          </p>
          <p>
            But hold on, the journey isn't complete yet! 🚀 Before you claim your certificate, test your knowledge and take our exciting Quiz. Don't forget to download and share your stunning final output!
          </p>
        </div>
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
