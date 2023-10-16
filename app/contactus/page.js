import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between py-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <p className="text-center text-3xl text-primary py-2 font-bold">
          CONTACT US
        </p>
      </div>

      <div className="pt-4 border-2 text-center x-4 border-white shadow-sm">
        <p className="py-2 text-primary">
          If you have any questions, concerns, or feedback, please feel free to reach out to our dedicated team.<br/> We&apos;re here to assist you, and your input is valuable to us.
        </p>
      </div>

      <div className="space-y-4 border-2 p-2 rounded-lg shadow-lg items-center text-center py-4">
        <div className="hover:border-white-400 hover:border-2 border-2 shadow-md">
          <div className="flex flex-col hover:border-white-400 hover:border-2 bg-primary text-center py-4 border-2 border-primary">
            <p className="mr-4 ml-4 text-white font-bold">
              Contact Number
            </p>
          </div>
        </div>
        <div className="hover:border-white-400 hover-border-2">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5l9 4-9 4-9-4 9-4zm0 0v6"
              />
            </svg>
            0936-368-1622
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5l9 4-9 4-9-4 9-4zm0 0v6"
              />
            </svg>
            0967-584-5107
          </p>
        </div>
      </div>

      <div className="space-y-4  border-2 p-8 rounded-lg shadow-lg py-4 items-center text-center">
        <div className="border-2 shadow-md">
          <div className="flex flex-col bg-primary text-center py-4 border-2 border-primary">
            <p className="text-white font-bold">
              Email
            </p>
          </div>
        </div>
        <div className="text-center hover-border-white-400 hover-border-2">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5l9 4-9 4-9-4 9-4zm0 0v6"
              />
            </svg>
            queeniekate.cabanilla@g.msuiit.edu.ph
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5l9 4-9 4-9-4 9-4zm0 0v6"
              />
            </svg>
            kate.velarde@g.msuiit.edu.ph
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col hover-border-white-400 hover-border-2 text-center">
          <Link href="/">
            <p className="text-primary font-bold">Back</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
