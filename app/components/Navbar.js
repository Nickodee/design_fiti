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

  const [openId, setOpenId] = useState(1);


  const handleToggle = (id) => {
    if (openId !== id) {
      setOpenId(id);
    }
  }

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
        <div className='flex gap-10 items-center'>
          <div className='flex items-center gap-2'>
            <Image src='/logo.png' alt='logo' width={50} height={50} />
            <Link href='/' className='text-[#1791C8] font-bold'>Design Fiti</Link>
          </div>
          <ul className='md:flex gap-4 items-center hidden md:block'>
            <li className='hover:text-[#1791C8]'><Link href='/'>Home</Link></li>
            <li className='hover:text-[#1791C8]'><Link href='/pages/about'>About</Link></li>
            <li className='hover:text-[#1791C8] items-center flex relative' onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}><Link href='/pages/services'>Services</Link> <RiArrowDropDownLine size={24} />
              {servicesOpen && (
                <div className="absolute top-full left-0 flex gap-3 bg-white shadow-lg p-3">
                  <div className='flex flex-col w-[280px] gap-3 p-3 border-r-2'>
                    <div className='p-3 w-full  hover:bg-slate-100 rounded flex gap-2 cursor-pointer' onClick={() => handleToggle(1)}>
                      <div className='relative h-10 w-10 flex items-center justify-center rounded-xl text-white'>
                        <Image src='/product.svg' alt='product' objectFit='contain' layout='fill' />
                      </div>
                      <div>
                        <h1 className='font-bold text-black'>Graphic Design</h1>
                        <p className='text-black font-[18px]'>High quality designs</p>
                      </div>
                    </div>
                    <div className='p-3 w-full hover:bg-slate-100 rounded flex gap-2  cursor-pointer' onClick={() => handleToggle(2)}>
                      <div className='relative h-10 w-10 flex items-center justify-center rounded-xl text-white'>
                        <Image src='/product.svg' alt='product' objectFit='contain' layout='fill' />
                      </div>
                      <div>
                        <h1 className='font-bold text-black'>Animations</h1>
                        <p className='text-black font-[18px]'>High quality designs</p>
                      </div>
                    </div>
                    <div className='p-3 w-full hover:bg-slate-100 rounded flex gap-2  cursor-pointer' onClick={() => handleToggle(3)}>
                      <div className='relative h-10 w-10 flex items-center justify-center rounded-xl text-white'>
                        <Image src='/product.svg' alt='product' objectFit='contain' layout='fill' />
                      </div>
                      <div>
                        <h1 className='font-bold text-black'>Software Development</h1>
                        <p className='text-black font-[18px]'>Highly user friendly softwares</p>
                      </div>
                    </div>
                    <div className='p-3 w-full hover:bg-slate-100 rounded flex gap-2 cursor-pointer' onClick={() => handleToggle(4)}>
                      <div className='relative h-10 w-10 flex items-center justify-center rounded-xl text-white'>
                        <Image src='/product.svg' alt='product' objectFit='contain' layout='fill' />
                      </div>
                      <div>
                        <h1 className='font-bold text-black'>Video Editing</h1>
                        <p className='text-black font-[18px]'>High quality designs</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-[200px]'>
                    {openId === 1 && (
                      <div>Graphic Design</div>
                    )}
                    {openId === 2 && (
                      <div>Animations</div>
                    )}
                    {openId === 3 && (
                      <div>Software Development</div>
                    )}
                    {openId === 4 && (
                      <div>Video Editing</div>
                    )}
                  </div>
                </div>
              )}
            </li>

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
