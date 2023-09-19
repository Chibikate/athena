import Image from "next/image";

export default function SlicerCard({ image, title, desc }) {
  console.log(desc);
  return (
    <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
      <div className="flex flex-row space-x-4 items-center">
        <Image
          alt="somethings never change"
          src={image}
          width={950}
          height={1080}
        />
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
      </div>
      {!!desc && <p className="text-justify">{desc}</p>}
    </div>
  );
}
