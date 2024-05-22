import NavLayout from "./components/NavLayout";
import Image from "next/image";

export default function Home() {
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
              <button className="p-2 flex mx-auto md:mx-0 hover:bg-[#FF9900] text-white bg-[#2dabb1] mt-5 font-semibold text-[24px] rounded-full">Book a Call Now</button>
          </div>
          <img src='/woman.jpg' alt='woman' className="w-full md:w-1/2 md:h-auto object-cover" />
        </div>
      </section>
      <section>
        <h1 className="text-center text-[21px]">Services</h1>
        <h1>Get to Learn more about our Services</h1>
      </section>

    </NavLayout>
  );
}
