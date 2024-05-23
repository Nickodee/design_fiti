import NavLayout from '@/app/components/NavLayout'
import React from 'react'
import Image from 'next/image'
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";


function About() {
  return (
    <NavLayout>
      <section className='w-full'>
        <div className='text-center mt-8'>
          <h1 className='text-[#2DABB1] text-3xl'>What you think about us ...</h1>
        </div>
      </section>
  <section className=" mt-5  w-full">
  <div className="flex flex-col lg:flex-row flex-wrap gap-5 mx-8">
    <div className="flex-1 lg:w-1/3 md:w-1/2 p-2 border hover:bg-purple-100 border-gray-300">
      <div className="flex  flex-col">
        <h1 className="font-bold text-center">Innovation</h1>
        <p>We stand out to make your company enjoy innovating posters, animations and fliers that beats competitors of the market.</p>
      </div>
    </div>
    <div className="flex-1 lg:w-1/3 md:w-1/2 p-2 border hover:bg-purple-100 border-gray-300">
      <div className="flex flex-col">
        <h1 className="font-bold text-center">Outstanding</h1>
        <p>Building a brand means standing out. Market your products and events with exceptional posters, animations, and fliers.</p>
      </div>
    </div>
    <div className="flex-1 lg:w-1/3 md:w-1/2 p-2 border hover:bg-purple-100 border-gray-300">
      <div className="flex flex-col">
        <h1 className="font-bold text-center">Collaboration</h1>
        <p>Good relationships form the base to work from. Our team loves to collaborate respectfully with each other and with you. To explore the limits of the good old saying “two heads are better than one.</p>
      </div>
    </div>
  </div>
</section>
<section className="mt-5 w-full"> 
  <div className="flex flex-col lg:flex-row mx-4 gap-4">
    <div className="w-full lg:w-1/2 p-2 mx-3 flex items-center ">
      <Image src='/innovation.png' alt='Innovation' className='w-full h-full object-cover rounded-tr-[30%] rounded-bl-[30%] rounded-br-none rounded-tl-none'  width={300} height={400}/>
    </div>
      <div className="w-full lg:w-1/2 p-2 mx-3">
      <h1 className="font-bold text-left hover:text-teal-500 first-line mt-20">Mission</h1>
      <p className='mt-3'>To empower businesses and organizations with cutting-edge software and graphic design solutions that revolutionize marketing and advertising, driving exceptional growth and market transformation.</p>

      <h1 className=" font-bold text-left hover:text-teal-500 mt-10">Vision</h1>
      <p className='mt-3'>To be the leading force in innovation, seamlessly integrating technology, creativity, and design to transform businesses, events, and organizations globally. We envision a world where our software and graphic design solutions set the standard for excellence,
       inspire creativity, and drive unparalleled success and growth.</p>
    </div>
  </div>
</section>
<section className="mt-3 w-full">
  <div className="text-center">
    <h1 className="text-[#2DABB1] text-3xl">Meet our team</h1>
  </div>
</section>
  <section className='mt-3 w-full '>
  <div className="flex flex-col lg:flex-row flex-wrap gap-5 mx-8">
    <div className="flex-1 lg:w-1/3 md:w-1/2 p-2 border border-gray-300">
      <div className="flex flex-col items-center ">
        <div className="bg-gray-200 h-36 w-36 rounded-full">
          <Image src="/Nick.png" alt="Innovation" className="w-full h-full object-cover rounded-full" width={300} height={400} />
        </div>
        <div className="mt-3 text-center">
          <h1 className="font-bold">Nicodemus Muholo</h1>
          <h3 className="text-sm text-blue-600">CEO</h3>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Link href="https://www.linkedin.com/in/nicodemus-muholo-b9731b210/"><FaLinkedin /></Link>
          <Link href="https://twitter.com/MuholoNicodemus"><FaXTwitter /></Link>
          <Link href="https://github.com/Nickodee"><FaGithubSquare /></Link>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/3 border p-2">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 h-36 w-36 rounded-full">
          <Image src="/Martin.png" alt="Innovation" className="w-full h-full object-cover rounded-full" width={300} height={400} />
        </div>
        <div className="mt-3 text-center">
          <h1 className="font-bold">Martine Kungu</h1>
          <h3 className="text-sm text-blue-600">Project Manager</h3>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Link href="http://www.linkedin.com/in/martine-kungu-438005210"><FaLinkedin /></Link>
          <Link href="https://twitter.com/KunguMartine"><FaXTwitter /></Link>
          <Link href="https://github.com/martine-K"><FaGithubSquare /></Link>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/3 border p-2">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 h-36 w-36 rounded-full">
          <Image src="/Zack.jpg" alt="Innovation" className="w-full h-full object-cover rounded-full" width={300} height={400} />
        </div>
        <div className="mt-3 text-center">
          <h1 className="font-bold">Zack Murithii</h1>
          <h3 className="text-sm text-blue-600">Software Developer</h3>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Link href="http://www.linkedin.com/in/martine-kungu-438005210"><FaLinkedin /></Link>
          <Link href="https://twitter.com/KunguMartine"><FaXTwitter /></Link>
          <Link href="https://github.com/martine-K"><FaGithubSquare /></Link>
        </div>
      </div>
    </div>
  </div>
</section>

<section className='mt-5 w-full '>
  <div className="flex flex-col lg:flex-row flex-wrap gap-5 mx-8">
    <div className="flex-1 lg:w-1/3 md:w-1/2 p-2 border border-gray-300">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 h-36 w-36 rounded-full">
          <Image src="/innovation.png" alt="Innovation" className="w-full h-full object-cover rounded-full" width={300} height={400} />
        </div>
        <div className="mt-3 text-center">
          <h1 className="font-bold">Victor Mbuvi</h1>
          <h3 className="text-sm text-blue-600">Graphic Designer</h3>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Link href="http://www.linkedin.com/in/martine-kungu-438005210"><FaLinkedin /></Link>
          <Link href="https://twitter.com/KunguMartine"><FaXTwitter /></Link>
          <Link href="https://github.com/martine-K"><FaGithubSquare /></Link>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/3 border p-5">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 h-36 w-36 rounded-full">
          <Image src="/Bethwel.png" alt="Innovation" className="w-full h-full object-cover rounded-full" width={300} height={400} />
        </div>
        <div className="mt-3 text-center">
          <h1 className="font-bold">Bethuel Govoga</h1>
          <h3 className="text-sm text-blue-600">Video Editor</h3>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Link href="http://www.linkedin.com/in/martine-kungu-438005210"><FaLinkedin /></Link>
          <Link href="https://twitter.com/KunguMartine"><FaXTwitter /></Link>
          <Link href="https://github.com/martine-K"><FaGithubSquare /></Link>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/3 border p-5">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 h-36 w-36 rounded-full">
          <Image src="/samo.png" alt="Innovation" className="w-full h-full object-cover rounded-full" width={300} height={400} />
        </div>
        <div className="mt-3 text-center">
          <h1 className="font-bold">Samuel Omwenga</h1>
          <h3 className="text-sm text-blue-600">Quality Assurance</h3>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Link href="http://www.linkedin.com/in/martine-kungu-438005210"><FaLinkedin /></Link>
          <Link href="https://twitter.com/KunguMartine"><FaXTwitter /></Link>
          <Link href="https://github.com/martine-K"><FaGithubSquare /></Link>
        </div>
      </div>
    </div>
  </div>
</section>

    </NavLayout>
  )
}     

export default About