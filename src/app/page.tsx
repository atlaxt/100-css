import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <Link
        href="/day1"
        className="px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-black transition"
      >
        Go to Day 1
      </Link>
    </div>
  )
}
