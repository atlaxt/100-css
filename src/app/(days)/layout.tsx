import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DaysLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className='absolute left-0 top-0 m-2 flex items-center gap-2 text-sm opacity-60 hover:opacity-100 duration-300'> <ArrowLeft className="w-4 h-4 text-white" /> Home </Link>
      <main>{children}</main>
    </div>
  )
}
