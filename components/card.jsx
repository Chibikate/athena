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
    <div className="w-96 border rounded-lg shadow-3xl space-y-2 hover:border-white-400 hover:border-2">
      <div className={`${color} py-2 rounded-t-lg`}>
        <Image alt="Somethings never change" src={logo} />
      </div>

      <div className={`p-4 space-y-2 ${textColor}`}>
        <p className={`${textColor} font-bold text-xl`}>{title}</p>

        <p>{subtitle}</p>
        <p className="text-justify">{desc}</p>

        <div className="flex flex-row space-x-4 items-center">
          <div className="flex flex-row items-center space-x-4">
            <Image
              alt="Somethings never change"
              src={author}
              width={20}
              height={20}
            />
            <p>{authorName}</p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Image
              alt="Somethings never change"
              src={author2}
              width={20}
              height={20}
            />
            <p>{authorName2}</p>
          </div>
        </div>

        <div className="justify-end flex">
          <div className={`${color} p-2 cursor-pointer rounded-md hover:border-white-400 hover:border-2`}>
            <Link href="/mandiweb">
              <p className="text-white hover-border">Practice now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
