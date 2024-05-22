import NavLayout from "@/app/components/NavLayout";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  return (
    <NavLayout>
      <section className="px-5 bg-slate-300">
        <div className="flex w-full">
          <h1 className="text-[60px] w-2/5 font-bold leading-tight ">
            Discover the <br />
            Projects that We Are Proud Of
          </h1>
          <div className="w-3/5 relative" style={{ height: "300px" }}>
            <Image
              src="/sampleProjects.png"
              alt="sampleProjects"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <button className="relative flex items-center justify-center px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md mt-5 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300">
            Book a Call
          </button>
        </div>
        <div className="flex mt-5">
          <div className="w-1/3 text-[30px]">
            <p1 className="leading-tight-2">
              Our <br /> Approach
            </p1>
          </div>
          <div className="w-2/3">
            <p2 className="font-bold text-[30px]">
              We make Every Project Feel Personal <br /> because{" "}
              <span className="text-[#FF9900]">Our Clients Matter.</span>
            </p2>
          </div>
        </div>
      </section>
      <section className=" flex gap-20 items-center justify-center p-2 mt-12 bg-white">
        <div className="group w-[250px] h-full p-3 border-2 flex flex-col items-left rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl hover:bg-orange-400 hover:text-white ">
          <div className="bg-green-500 h-[100px] w-[100px] rounded-tr-none rounded-tl-full rounded-br-full rounded-bl-full group-hover:bg-white"></div>
          <h1 className="mt-5 font-bold"> Flowless UX/UI</h1>
          <p1>
            {" "}
            An exceptional is essential for a product to work. In this regard we
            strive to deliver outstanding experiences{" "}
          </p1>
          <div className="flex items-center justify-center mt-10 border-2 h-[70px] w-[70px] rounded-full">
            <FaArrowRight size={24} />
          </div>
        </div>
        <div className="group w-[250px] h-full p-3 border-2 flex flex-col items-left rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl hover:bg-orange-400 hover:text-white ">
          <div className="bg-blue-400 h-[100px] w-[100px] rounded-tr-none rounded-tl-full rounded-br-full rounded-bl-full group-hover:bg-white"></div>
          <h1 className="mt-5 font-bold"> Custom Graphics and Design </h1>
          <p1>
            {" "}
            A unique design must align to the brand’s personality and stand out
            n the market through originality , visual balance and awesome
            information flow{" "}
          </p1>
          <div className="flex items-center justify-center mt-10 border-2 h-[70px] w-[70px] rounded-full">
            <FaArrowRight size={24} />
          </div>
        </div>
        <div className="group w-[250px] h-full p-3 border-2 flex flex-col items-left rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl hover:bg-orange-400 hover:text-white ">
          <div className="bg-orange-400 h-[100px] w-[100px] rounded-tr-none rounded-tl-full rounded-br-full rounded-bl-full group-hover:bg-white"></div>
          <h1 className="mt-5 font-bold"> Best Developers</h1>
          <p1>
            {" "}
            We have the best developers on very project in hand . They are professionals offering code quality and maintenance after the job is done.           </p1>
          <div className="flex items-center justify-center mt-10 border-2 h-[70px] w-[70px] rounded-full">
            <FaArrowRight size={24} />
          </div>
        </div>
      </section>
    </NavLayout>
  );
}

export default Services;
