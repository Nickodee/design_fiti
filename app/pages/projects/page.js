import NavLayout from '@/app/components/NavLayout'
import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <NavLayout>
    <section className='w-full px-4'>
        <div className='flex mt-10 flex-col items-center text-center'>
          <h1 className='text-4xl md:text-5xl font-bold'>Design Fiti Projects</h1>
    <p className='text-[18px]  mt-4'>
      We pride ourselves on delivering unparalleled services, exemplified by our portfolio of esteemed, successful projects. These shining examples stand testament to the exceptional quality and expertise we bring to every endeavor.
    </p>
  </div>
  <div className='flex flex-wrap justify-center gap-6 mt-10'>
    <div className='flex flex-col items-center'>
      <div className='h-[250px] w-[300px] border relative overflow-hidden'>
        <Image src="/Toto1.jpg" alt="TotoBot nurturing interactive AI" layout='fill' objectFit='cover' />
      </div>
      <h2 className='text-[18px]  mt-4'>TotoBot nurturing interactive AI</h2>
    </div>
    <div className='flex flex-col items-center'>
      <div className='h-[250px] w-[300px] border relative overflow-hidden'>
        <Image src="/Nexus1.jpg" alt="Nexus AP1 system" layout='fill' objectFit='cover' />
      </div>
      <h2 className='text-[18px] mt-4'>Nexus API system</h2>
    </div>
    <div className='flex flex-col items-center'>
      <div className='h-[250px] w-[300px] border relative overflow-hidden'>
        <Image src="/Apex.png" alt="ApeX Probability prediction algorithm" layout='fill' objectFit='cover' />
      </div>
      <h2 className='text-[18px] mt-4'>ApeX System</h2>
    </div>
    <div className='flex flex-col items-center'>
      <div className='h-[250px] w-[300px] border relative overflow-hidden'>
        <Image src="/Film.jpeg" alt="Nature Short Film" layout='fill' objectFit='cover' />
      </div>
      <h2 className='text-[18px] mt-4'>Short Film</h2>
    </div>
  </div>
</section>



<section className='w-full mt-8 px-2'>
        <div className='flex flex-col items-center text-center mx-0'>
          <h1 className='text-4xl md:text-5xl font-bold'>Included Services</h1>
      </div>
    <div className='border rounded-lg shadow-md p-4 mt-4'>
  <div className='flex flex-wrap justify-center gap-6 mt-10'>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4'>
      <h1 className='text-2xl sm:text-3xl'>Software Development</h1>
      <p className='text-lg sm:text-xl'>Innovative and Reliable Code Solutions</p>
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/project1.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
    
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/project2.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
     
    </div>
  </div>
</div>


<div className='border rounded-lg shadow-md p-4 mt-4'>
  <div className='flex flex-wrap justify-center gap-6 mt-10'>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4'>
      <h1 className='text-2xl sm:text-3xl'>Graphic Design</h1>
      <p className='text-lg sm:text-xl'>Visually Compelling Designs</p>
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/Graphic1.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
      
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/Graphic02.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
  
    </div>
  </div>
</div>




<div className='border rounded-lg shadow-md p-4 mt-4'>
  <div className='flex flex-wrap justify-center gap-6 mt-10'>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
      <h1 className='text-2xl sm:text-3xl'>Video Editing</h1>
      <p className='text-lg sm:text-xl'>Seamless, Impactful Video Production</p>
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/Video1.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
      
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/Video2.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
     
    </div>
  </div>
</div>


<div className='border rounded-lg shadow-md p-4 mt-4'>
  <div className='flex flex-wrap justify-center gap-6 mt-10'>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
      <h1 className='text-2xl sm:text-3xl'>Animations</h1>
      <p className='text-lg sm:text-xl'>Dynamic, Engaging Visual Storytelling!</p>
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/Animation2.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
      <h2></h2>
    </div>
    <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
      <div className='h-[250px] w-full border relative overflow-hidden'>
        <Image src="/Animation1.jpg" objectFit='cover' layout='fill' className='object-cover' />
      </div>
      
    </div>
  </div>
</div>





    </section>


      
    </NavLayout>
  )
}

export default Projects