import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-10 py-8'>
        <div>
            <h1>Navbar</h1>
        </div>
        <ul className='flex gap-5 list-none'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/product'}>Product</Link></li>
        </ul>
    </nav>
  )
}
