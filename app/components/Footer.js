import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookSquare,FaYoutube, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";


function Footer() {
    return (
        <div className='mt-5'>
        <div className='bg-gray-800 w-full p-3 md:p-5 flex-col flex md:flex-row gap-12 md:gap-32'>
            <div className='flex gap-3 justify-between'>
            <div className='bg-white p-2 items-center justify-center flex'>
                <Image src='/logo.png' alt='logo' width={100} height={100} />
            </div>    
            <div>
                <h1 className='text-[#FE8900] text-[24px] font-bold'>Quick Links</h1>
                <div className='flex flex-col text-white'>
                    <Link href='/pages/services' className='hover:text-[#2dabb1]'>Services</Link>
                    <Link href='/pages/about' className='hover:text-[#2dabb1]'>About</Link>
                    <Link href='/pages/projects' className='hover:text-[#2dabb1]'>Projects</Link>
                </div>
            </div>
            </div>
            <div>
                <h1 className='text-[#FE8900] text-[24px] font-bold'>Contact Us</h1>
                <div className='flex gap-20 '>
                    <div className='flex flex-col text-white'>
                        <div className='flex gap-2 items-center'>
                            <FaFacebookSquare className='text-white' />
                            <Link href='/pages/services' className='hover:text-[#1791C8]'>design fiti</Link>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaTiktok className='text-white' />
                            <Link href='/pages/services' className='hover:text-[#1791C8]'>design fiti</Link>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaInstagram className='text-white' />
                            <Link href='/pages/services' className='hover:text-[#1791C8]'>design_fiti</Link>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaTwitter className='text-white' />
                            <Link href='/pages/services' className='hover:text-[#1791C8]'>design_fiti</Link>
                        </div>
                    </div>
                    <div className='flex flex-col text-white'>
                        <div className='flex gap-2 items-center'>
                            <FaYoutube className='text-white' />
                            <Link href='/pages/services' className='hover:text-[#1791C8]'>design_fiti</Link>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoMdCall className='text-white' />
                            <Link href='/pages/services' className='hover:text-[#1791C8]'>0748776293</Link>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdMailOutline className='text-white' />
                            <Link href='/pages/services' className='hover:text-[#1791C8]'>designfiti@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full p-2 bg-red-400 text-center text-white'>© 2024 | Design Fiti | Great Designs, Videos, Animations</div>
        </div>
    )
}

export default Footer