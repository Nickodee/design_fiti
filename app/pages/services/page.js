
import NavLayout from "@/app/components/NavLayout";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  return (
    <NavLayout>
      <section className="px-5 py-10 bg-slate-300">
        <div className="flex flex-col md:flex-row w-full items-center md:items-start">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight w-full md:w-2/5 mb-5 md:mb-0">
            Discover the <br />
            Projects that We Are Proud Of
          </h1>
          <div className="w-full md:w-3/5 relative h-64 md:h-80 lg:h-96">
            <Image
              src="/sampleProjects.png"
              alt="sampleProjects"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-start mt-5">
          <button className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300">
            Book a Call
          </button>
        </div>
        <div className="flex flex-col md:flex-row mt-5">
          <div className="w-full md:w-1/3 text-xl md:text-2xl lg:text-3xl mb-5 md:mb-0">
            <p className="leading-tight">
              Our <br /> Approach
            </p>
          </div>
          <div className="w-full md:w-2/3 text-lg md:text-xl lg:text-2xl">
            <p className="font-bold">
              We make Every Project Feel Personal <br /> because{" "}
              <span className="text-[#FF9900]">Our Clients Matter.</span>
            </p>
            <p className="font-bold mt-5">Our services</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center p-2 mt-12 bg-white">
        <div className="group w-full md:w-[250px] h-full p-3 border-2 flex flex-col items-start rounded-3xl hover:bg-orange-400 hover:text-white transition duration-300">
          <div className="bg-green-500 h-[100px] w-[100px] rounded-tr-none rounded-tl-full rounded-br-full rounded-bl-full group-hover:bg-white transition duration-300"></div>
          <h1 className="mt-5 font-bold">Flawless UX/UI</h1>
          <p>
            An exceptional UX/UI is essential for a product to work. In this regard, we strive to deliver outstanding experiences.
          </p>
          <div className="flex items-center justify-center mt-10 border-2 h-[70px] w-[70px] rounded-full">
            <FaArrowRight size={24} />
          </div>
        </div>
        <div className="group w-full md:w-[250px] h-full p-3 border-2 flex flex-col items-start rounded-3xl hover:bg-orange-400 hover:text-white transition duration-300">
          <div className="bg-blue-400 h-[100px] w-[100px] rounded-tr-none rounded-tl-full rounded-br-full rounded-bl-full group-hover:bg-white transition duration-300"></div>
          <h1 className="mt-5 font-bold">Custom Graphics and Design</h1>
          <p>
            A unique design must align with the brand’s personality and stand out in the market through originality, visual balance, and awesome information flow.
          </p>
          <div className="flex items-center justify-center mt-10 border-2 h-[70px] w-[70px] rounded-full">
            <FaArrowRight size={24} />
          </div>
        </div>
        <div className="group w-full md:w-[250px] h-full p-3 border-2 flex flex-col items-start rounded-3xl hover:bg-orange-400 hover:text-white transition duration-300">
          <div className="bg-orange-400 h-[100px] w-[100px] rounded-tr-none rounded-tl-full rounded-br-full rounded-bl-full group-hover:bg-white transition duration-300"></div>
          <h1 className="mt-5 font-bold">Best Developers</h1>
          <p>
            We have the best developers on every project. They are professionals offering code quality and maintenance after the job is done.
          </p>
          <div className="flex items-center justify-center mt-10 border-2 h-[70px] w-[70px] rounded-full">
            <FaArrowRight size={24} />
          </div>
        </div>
      </section>
    </NavLayout>
  );
}

export default Services;
