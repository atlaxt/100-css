import Link from 'next/link'
export default function Home() {
  const days = Array.from({ length: 100 }, (_, i) => i + 1)

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] gap-4 max-w-4xl w-full px-4">
        {days.map((day) => (
          <Link
            key={day}
            className="opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out text-sm"
            href={`/day${day}`}
          >
            {day}
          </Link>
        ))}
      </div>
    </div>
  )
}
