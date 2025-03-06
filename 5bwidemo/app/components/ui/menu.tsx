import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Menu({}: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 shadow-md">
      <div className="max-w-6xl mx-auto">
        <ul className='flex p-4'>
          <li className='px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300'>
            <Link href="/" className="text-white font-medium">← Home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}