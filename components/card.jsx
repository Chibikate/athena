import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  desc,
  subtitle,
  logo,
  color,
  textColor,
  author,
  author2,
  authorName,
  authorName2,
}) {
  return (
    <div className="w-96 border-2 rounded-lg shadow-3xl space-y-2 text-sm dark:bg-white hover:border-white-400 hover:border-2">
      <Link href="/mandiweb">

      <div className={`${color} py-2 rounded-t-lg`}>
        <Image alt="Somethings never change" src={logo} />
      </div>
      </Link>

      <div className={`p-4 space-y-2 ${textColor}`}>
      <Link href="/mandiweb">
        <p className={`${textColor} font-bold text-xl`}>{title}</p>

</Link>
        <p>{subtitle}</p>
        <p className="text-justify">{desc}</p>


        <div className="flex flex-row space-x-4 items-center">
          <div className="flex flex-row items-center space-x-4">
            
            <p className="text-xs">{authorName}</p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            
            <p className="text-xs">{authorName2}</p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 items-center">
  <div className="flex flex-row items-center space-x-2">
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l3.25 1.625" />
    </svg>
    <p className="text-xs">2 hrs 30 mins activity</p>
  </div>
  </div>

        <div className="justify-end flex">
          <div className={`${color} p-2 cursor-pointer rounded-md hover:border-white-400 hover:border-2`}>
            <Link href="/mandiweb">
              <p className="text-white hover-border">Start now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
