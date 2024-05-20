import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='flex items-center p-4 bg-white w-full justify-between'>
        <div>
        <Image src='/logo.png' alt='logo' width={50} height={50} />
        </div>
        <ul className='flex gap-4 items-center'>
            <li className='hover:text-[#1791C8]'><Link href='#'>Home</Link></li>
            <li className='hover:text-[#1791C8]'><Link href='#'>About</Link></li>
            <li className='hover:text-[#1791C8]'><Link href='#'>Services</Link></li>
            <li className='hover:text-[#1791C8]'><Link href='#'>Projects</Link></li>
            <li className='hover:text-[#1791C8]'><Link href='#'>Contacts</Link></li>
        </ul>
        <div>
            <button className='rounded text-white p-2 hover:bg-[#0D7AB6] bg-[#1791C8]'>Get Started</button>
        </div>
    </nav>
  )
}

export default Navbar