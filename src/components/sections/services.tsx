import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="relative py-[80px] bg-[#1a1a1a] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/1-39-23.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity",
        }}
      />
      <div className="container relative z-10 px-[15px] mx-auto max-w-[1240px]">
        <div className="flex flex-wrap -mx-[15px] items-center">
          <div className="w-full lg:w-1/2 px-[15px] mb-8 lg:mb-0">
            <div className="max-w-[550px]">
              <span className="block font-display text-[13px] font-bold text-primary tracking-[1px] uppercase mb-4">
                Manjjari Holidays
              </span>
              <h2 className="text-white text-[48px] md:text-[60px] font-extrabold font-display leading-[1.1] mb-6 text-left uppercase">
                Services
              </h2>
              <p className="text-[#cccccc] font-body text-[15px] leading-[1.8] mb-8">
                Manjjari Holidays is the tour designer of ODISHA - CHHATTISGARH - CENTRAL INDIA & NORTH EAST INDIA, curating niche products for PHOTOGRAPHY - ETHNIC - WILDLIFE - TREKKING - LEISURE - CULTURAL & SPECIAL INTEREST TOURS
              </p>
              <Link href="/services" className="inline-block bg-primary hover:bg-[#191c14] text-white font-body font-bold text-[13px] uppercase px-8 py-4 rounded-[5px] transition-all duration-300">
                View All Services
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-[15px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] bg-white p-[25px] md:p-[40px] shadow-2xl">
              <Link href="/services" className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/1-39-23.jpg" alt="Cab Services" fill className="object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="font-display font-semibold text-[14px] text-primary group-hover:text-secondary transition-colors uppercase tracking-[1px]">CAB SERVICES</h4>
              </Link>
              <Link href="/services" className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/hotel1-24.jpg" alt="Hotel Booking" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="font-display font-semibold text-[14px] text-primary group-hover:text-secondary transition-colors uppercase tracking-[1px]">HOTEL BOOKING</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
