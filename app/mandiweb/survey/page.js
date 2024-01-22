import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className="flex flex-col min-h-screen items-center dark:text-white">
        <p className="text-3xl font-bold text-primary py-4">Website Survey</p>
        <p className="text-primary p-2">
          Please fill in the website information
        </p>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfdYJZgVaYVPHhohlt-Hy_WxZwphgVEnx2S-uVARjZfusY_-A/viewform?embedded=true"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

      <div className="p-4 dark:text-white">
        <p>
          Thank you for taking the survey, kindly submit your final output and
          then get your{" "}
          <Link href="/mandiweb/fill-up">
            <span className="underline font-bold">certificate</span>
          </Link>
        </p>
      </div>
      <div className="p-4">
        <Link href="https://drive.google.com/drive/u/0/folders/1ZEBXGFmwzkjMSSq2ZuIimeO8OC8b8lEx?hl=en"> 
        <p className="bg-primary rounded-md p-2 text-white hover:bg-sky-600 cursor-pointer">
          Submission Bin
        </p>
        </Link>
      </div>
    </main>
  );
}
