import Link from 'next/link'
export default function Home() {

  return (
    <div className="min-h-screen w-full flex lg:items-center lg:mt-0 mt-24 lg:justify-center lg:ml-0 ml-12 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-2">
        <Link
          className="opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out text-sm"
          href={'/cube'}
        >
          1. cube
        </Link>

        <Link
          className="opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out text-sm"
          href={'/rain'}
        >
          2. rain
        </Link>

        <Link
          className="opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out text-sm"
          href={'/equalizer'}
        >
          3. equalizer
        </Link>
      </div>
    </div>
  )
}
