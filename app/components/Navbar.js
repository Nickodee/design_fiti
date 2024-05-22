'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleServicesMouseEnter = () => {
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesOpen(false);
  };

  return (
    <>
      <nav className='fixed z-50 top-0 left-0 right-0 flex items-center p-4 bg-white w-full justify-between'>
        <div className='flex gap-5 items-center'>
          <Image src='/logo.png' alt='logo' width={50} height={50} />
          <ul className='md:flex gap-4 items-center hidden md:block'>
            <li className='hover:text-[#1791C8]'><Link href='/'>Home</Link></li>
            <li className='hover:text-[#1791C8]'><Link href='/pages/about'>About</Link></li>
            <li className='hover:text-[#1791C8] items-center flex'><Link href='/pages/services'>Services</Link> <RiArrowDropDownLine size={24} /></li>
            <li className='hover:text-[#1791C8]'><Link href='/pages/projects'>Projects</Link></li>
            <li className='hover:text-[#1791C8]'><Link href='/pages/contacts'>Contacts</Link></li>
          </ul>
        </div>
        <button className='rounded hidden md:block text-white p-2 hover:bg-[#0D7AB6] bg-[#1791C8]'>Get Started</button>
        {menuOpen ? (
          <FaTimes size={24} className='cursor-pointer md:hidden' onClick={toggleMenu} />
        ) : (
          <FaBarsStaggered size={24} className='cursor-pointer md:hidden' onClick={toggleMenu} />
        )}
      </nav>

      {/* Sliding Menu */}
      <div className={`fixed border-t-2 top-20 shadow-md right-0 w-full h-screen bg-white transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-10`}>
        <ul className='flex flex-col items-center h-full mt-3 gap-7'>
          <li className='text-2xl hover:text-[#1791C8]'><Link href='/'>Home</Link></li>
          <li className='text-2xl hover:text-[#1791C8]'><Link href='/pages/about'>About</Link></li>
          <li className='text-2xl hover:text-[#1791C8]'><Link href='/pages/services'>Services</Link></li>
          <li className='text-2xl hover:text-[#1791C8]'><Link href='/pages/projects'>Projects</Link></li>
          <li className='text-2xl hover:text-[#1791C8]'><Link href='/pages/contacts'>Contacts</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
