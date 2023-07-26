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
    <div className="w-96 border rounded-lg shadow-2xl space-y-2">
      <div className={`${color} py-2 rounded-t-lg`}>
        <Image src={logo}/>
      </div>

      <div className={`p-4 space-y-4 ${textColor}`}>
        <p className={`${textColor} font-bold text-2xl`}>{title}</p>

        <p>{subtitle}</p>
        <p className="text-justify">{desc}</p>

        <div className="flex flex-row space-x-4 items-center">
          <div className="flex flex-row items-center space-x-4">
            <Image src={author} width={40} height={25} />
            <p>{authorName}</p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Image src={author2} width={40} height={25} />
            <p>{authorName2}</p>
          </div>
        </div>
 
        <div className="justify-end flex">
          <div className={`${color} p-2 cursor-pointer rounded-md `}>
            <Link href="/mandiweb">
            <p className="text-white">Practice now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
