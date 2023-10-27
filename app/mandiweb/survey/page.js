import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className="flex flex-col min-h-screen items-center">
        <p className="text-3xl font-bold text-primary py-4">Website Survey</p>
        <p className="text-primary p-2">
          Please fill in the website information
        </p>
      </div>

      <div className="p-4">
        <p>Thank you for taking the survey, kindly submit your final output and then get your <Link href="/mandiweb/fill-up">
        <span className="underline font-bold">certificate</span></Link></p>
      </div>
      <div className="p-4">
        <p className="bg-primary rounded-md p-2 text-white hover:bg-sky-600 cursor-pointer">Submission Bin</p>
      </div>
    </main>
  );
}
