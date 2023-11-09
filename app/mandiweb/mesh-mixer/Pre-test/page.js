import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <div className="flex flex-col min-h-screen items-center dark:text-white">
        <p className="text-3xl font-bold text-primary py-4">Website Pre-test</p>
        <p className="text-primary p-2">
          Please fill in the website information
        </p>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfdYJZgVaYVPHhohlt-Hy_WxZwphgVEnx2S-uVARjZfusY_-A/viewform?embedded=true"
          width="700"
          height="700"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

      <div className="p-4 dark:text-white">
        <p>
          Thank you for taking the pre-test, click here to proceed{" "}
          <Link href="/mandiweb/survey">
            <span className="underline font-bold">survey</span>
          </Link>
        </p>
      </div>
      
    </main>
  );
}
