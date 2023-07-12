import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col space-y-4'>
      <div className='flex flex-row space-x-16 items-center justify-center'>
        <div className=''>
          <Link href='mandiweb'>
            <p className='text-center font-bold text-primary'>Mandibular Web</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
