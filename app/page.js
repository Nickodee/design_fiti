'use client'
import NavLayout from "./components/NavLayout";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState(null);


  const handleToggle = (id) => {
    setOpenId(openId ===id? null : id);
  }
  return (
    <NavLayout>
      <section className="w-full">
        <div className="flex flex-col md:flex-row h-full mx-4">
          <div>
            <h1 className="w-full text-3xl md:text-5xl lg:text-[70px] font-bold leading-tight text-center md:text-left">
              Quality Designs, Animations & Software Development
            </h1>
            <div className="bg-gray-400 h-[10px] w-[100px]"></div>
            <p className="text-[21px] md:text-left text-center mt-5">Marketing and other companies are
              using our services to increase their products
              sale</p>
            <button className="p-2 flex mx-auto md:mx-0 hover:bg-[#FF9900] text-white bg-[#1791C8] mt-5 font-semibold text-[24px] rounded-full">Book a Call Now</button>
          </div>
          <img src='/woman.jpg' alt='woman' className="w-full md:w-1/2 md:h-auto object-cover" />
        </div>
      </section>
      <section className="mx-5">
        <h1 className="text-center text-[21px] text-[#1791C8] underline">Services</h1>
        <h1 className="font-semibold text-center text-[30px]">Get to Learn more about our Services</h1>
        <p className="text-center">Connect with us and get lucrative services from our compitent team. We value <br /> customer satisfactions. At Design Fiti your work quality is quaranteed</p>
        <div className="w-full mb-7">
          <div className="flex w-full flex-col gap-9 md:flex-row mt-6">
            <div className="border md:w-1/2 w-full bg-white cursor-pointer hover:bg-slate-100 rounded-lg p-4 flex flex-col items-center relative">
              <div className="rounded-full h-[40px] w-[40px] bg-gray-500 relative -top-9"></div>
              <h1 className="font-bold text-[23px] -mt-5">Graphic Design</h1>
              <p className="text-center">We convert your idea to design. Get your posters, Flyers, Bunners, Logos Certificates etc. Done is a quality way</p>
            </div>
            <div className="border md:w-1/2 w-full bg-white cursor-pointer hover:bg-slate-100 rounded-lg p-4 flex flex-col items-center relative justify-center">
              <div className="rounded-full h-[40px] w-[40px] bg-gray-500 relative -top-9"></div>
              <h1 className="font-bold text-center text-[23px] -mt-5">Animations</h1>
              <p className="text-center">Would you want to grow your business faster? Let us market for you with our animations.</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-9 md:flex-row mt-6">
            <div className="border w-full bg-white cursor-pointer hover:bg-slate-100 rounded-lg p-4 flex flex-col items-center relative">
              <div className="rounded-full h-[40px] w-[40px] bg-gray-500 relative -top-9"></div>
              <h1 className="font-bold text-[23px] -mt-5">Software Development</h1>
              <p className="text-center">Get highly responsive and user friendly websites and software with us.</p>
            </div>
            <div className="border w-full bg-white cursor-pointer hover:bg-slate-100 rounded-lg p-4 flex flex-col items-center relative justify-center">
              <div className="rounded-full h-[40px] w-[40px] bg-gray-500 relative -top-9"></div>
              <h1 className="font-bold text-center text-[23px] -mt-5">Video Editing</h1>
              <p className="text-center">Want your videos be edited in a professional way? Worry no more!!! Reach out to us and get your job done quickly.</p>
            </div>
          </div>
        </div>
        <Link href='/' className="text-white rounded-3xl hover:bg-[#FF9900] bg-[#1791C8] py-3 px-7 cursor-pointer">Learn More</Link>
      </section>
      <section className="mt-7 mx-4">
        <h1 className="text-center text-[24px] font-semibold text-[#1791C8] underline">Unleash your full power with design fiti</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <span className="text-[80px] text-[#1791C8] font-bold">20+</span>
            Projects
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[80px] text-[#1791C8] font-bold">10+</span>
            Clients
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[80px] text-[#1791C8] font-bold">15+</span>
            Clients
          </div>
        </div>
        <div className="w-full justify-center items-center flex flex-col md:flex-row gap-3 mt-9">
          <div className="md:w-1/4 w-full">
            <h1 className="text-[26px] font-bold md:text-start text-center">What our clients think about Design fiti</h1>
            <p className="md:text-start text-center">These are just some of the opinion of customers who have received our services.</p>
            <div className="flex w-full gap-2 items-center">
              <button className="p-2 border rounded">
                <IoIosArrowForward />
              </button>
              <button className="p-2 border rounded">
                <IoIosArrowBack />
              </button>
            </div>
          </div>
          <div className="md:w-3/4 w-full">
            <div className="bg-gray-400 w-full h-[300px]">

            </div>
          </div>
        </div>
      </section>
      <section className="mt-7">
        <h1 className="text-center text-[26px] font-bold text-[#1791C8] underline">Frequently asked questions</h1>
        <p className="text-center">Have questions? We are here to help you.</p>
        <button className="flex mt-3 mx-auto bg-[#1791C8] items-center text-white gap-2 px-4 py-3">Contact Us <FaArrowRight /></button>
        <div className="mt-9">
          <div className="w-full p-3 flex flex-col md:flex-row gap-3">
            <div className="border p-3 w-full md:w-1/2 rounded">
              <div className="flex justify-between w-full"><h1 className="font-bold">What do Design Fiti do?</h1>
                <button
                  onClick={() => handleToggle(1)}
                  className="rounded-full items-center font-bold justify-center flex text-white bg-gray-400 h-8 w-8"
                >
                  {openId === 1 ? '-' : '+'}
                </button>
              </div>

              {openId === 1 && (
                <div className="w-full mt-2">
                  Design Fiti is a company that deals with software development, animation, video editing
                </div>
              )}
            </div>
            <div className="border p-3 w-full md:w-1/2 rounded">
              <div className="flex justify-between w-full"><h1 className="font-bold">What programming Languages do we use?</h1>
                <button
                  onClick={() => handleToggle(2)}
                  className="rounded-full items-center font-bold justify-center flex text-white bg-gray-400 h-8 w-8"
                >
                  {openId === 2 ? '-' : '+'}
                </button>
              </div>
              {openId === 2 && (
                <div className="w-full mt-2">
                Design Fiti is a company that deals with software development, animation, video editing
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </NavLayout>
  );
}
