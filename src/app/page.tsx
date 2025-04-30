'use client'
import { LinkContext } from '@/contexts/LinkContext'
import Link from 'next/link'
import { useContext } from 'react'
export default function Home() {
  
  const links = useContext(LinkContext)

  return (
    <div className="min-h-screen w-full flex lg:items-center lg:mt-0 mt-24 lg:justify-center lg:ml-0 ml-12 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-2">
        {links.map((link, i) => (
          <Link href={`/${link}`} key={i} className="text-zinc-400 text-hover text-sm">
            {`${i + 1}. ${link}`}
          </Link>
        ))}
      </div>
    </div>
  )
}
