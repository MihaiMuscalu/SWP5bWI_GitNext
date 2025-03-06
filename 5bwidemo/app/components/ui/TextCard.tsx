import Link from 'next/link'
import React from 'react'

type Props = {header: string, text: string, href: string}

export default function TextCard({header, text, href}: Props) {
  return (
    <div className='flex justify-center'>
      <Link href={href} className='w-4/5'>
        <div className='w-full shadow-lg p-6 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer'>
            <h1 className="font-bold text-2xl text-white mb-3">{header}</h1>
            <p className="text-white leading-relaxed">{text}</p>
        </div>
      </Link>
    </div>
  )
}