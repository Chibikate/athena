import Image from "next/image";

export default function SlicerCard({ image, title, description }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-row space-x-4 items-center">
          <Image
            alt="somethings never change"
            src={image}
            width={1850}
            height={1080}
          />
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          {!!description & <p className="text-justify">{description}</p>}
        </div>
      </div>
    </main>
  );
}
