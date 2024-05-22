import NavLayout from "./components/NavLayout";
import Link from "next/link";

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
      <section className="mx-5">
        <h1 className="text-center text-[21px]">Services</h1>
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
        <Link href='/' className="text-white hover:bg-[#FF9900] bg-[#2dabb1] py-3 px-7 cursor-pointer">Learn More</Link>
      </section>

    </NavLayout>
  );
}
