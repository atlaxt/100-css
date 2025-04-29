import Link from 'next/link'
export default function Home() {

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row gap-4">
        <Link
          className="opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out text-sm"
          href={'/cube'}
        >
          CUBE
        </Link>
      </div>
    </div>
  )
}
