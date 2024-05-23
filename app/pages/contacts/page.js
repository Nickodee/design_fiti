import NavLayout from "@/app/components/NavLayout";
import React from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCalling } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";


function Contacts() {
  return (
    <NavLayout>
      <section className="flex flex-col p-5">
        <div className="group bg-blue-400 w-full h-1/4 flex flex-col items-center justify-center rounded-3xl">
          <button className="bg-white border-2 p-2 rounded-md mb-4 mt-3 hover:bg-green-500 hover:text-white">
            Write to Us
          </button>
          <h1 className="mb-5 text-white font-bold text-[30px] ">
            Get in Touch
          </h1>
        </div>
        <div className="flex mt-4 bg-slate-100">
          <div className="flex flex-col items-start text-left w-1/2 p-5">
            <h1 className="text-3xl font-bold">Let's Talk!</h1>
            <p className="mb-4">
              Get in touch with us using the enquiry form or our contacts below.
            </p>
            <form className="p-10">
              <div className="flex gap-2">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="secondName"
                  >
                    Second Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="secondName"
                    name="secondName"
                    placeholder="Second Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="contactConsent"
                  name="contactConsent"
                  className="mr-2"
                  required
                />
                <label
                  className="block text-gray-700 text-sm"
                  htmlFor="contactConsent"
                >
                  I agree to be contacted and receive emails.
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <Image
                src="/contact.png"
                alt="contactscartoon"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg mb-4 mt-4">
          <label className="text-xl font-bold text-blue-600 mb-2">
            Quick Contacts!
          </label>
          <div className="flex justify-around w-full mt-4">
            <div className="flex items-center gap-2">
              <HiOutlineMail size={28} className="text-red-400"/>
              <span className="text-lg font-semibold ">
                <a href="mailto:designfity@gmail.com">designfity@gmail.com</a>
              </span>
            </div>
            <div className="flex items-center gap-5">
              <TbPhoneCalling size={28} className="text-blue-500" />{" "}
              <span className="text-lg font-semibold">+254748776293</span>{" "}
            </div>
            <div className="flex items-center gap-5">
              <CiLocationOn size={28} className="text-blue-500 "/>             
              <span className="text-lg font-semibold">Juja, Kenya</span>
            </div>
          </div>
        </div>
      </section>
    </NavLayout>
  );
}

export default Contacts;
