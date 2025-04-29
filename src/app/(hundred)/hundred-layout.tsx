import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function HundredLayout({
  children,
  header,
  footer,
}: {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-zinc-500 lg:w-xl w-full lgpx-0 px-4">
      <div className="w-full flex justify-between flex-row">
        <Link href="/" className='flex flex-row gap-1 items-center text-hover text-sm'> <ArrowLeft className='h-3 w-3'/> 100 </Link>
        {header}
      </div>
      <main className="border border-zinc-700 h-[500px]">{children}</main>
      <div className='flex flex-row items-center py-2'>
        {footer}
      </div>
    </div>
  )
}
