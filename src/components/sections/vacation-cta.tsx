import React from "react";
import Image from "next/image";
import Link from "next/link";

const VacationCTA = () => {
  return (
    <section className="py-[80px] bg-white">
      <div className="container">
        <div className="relative overflow-hidden rounded-[5px] flex flex-col md:flex-row h-auto md:h-[300px]" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <div className="relative w-full md:w-[60%] p-8 md:p-12 z-10 flex flex-col justify-center bg-[#8eb93e]" style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}>
            <h2 className="text-white text-[28px] md:text-[32px] font-bold font-display uppercase tracking-[0.5px] text-left mb-4 leading-[1.2]">
              Enjoy Your Vacation With Manjjari Holidays
            </h2>
            <p className="text-white text-[15px] font-body leading-[1.6] mb-8 max-w-[500px]">
              Experience the perfect getaway with us! From breathtaking destinations to unforgettable adventures, we ensure every moment of your vacation is filled with relaxation, fun, and lasting memories.
            </p>
            <div>
              <Link href="/book" className="inline-block bg-white text-[#444444] font-body font-bold uppercase text-[13px] px-6 py-3 rounded-[5px] transition-all duration-300 hover:bg-[#191c14] hover:text-white">
                BOOK YOUR TOUR NOW
              </Link>
            </div>
          </div>
          <div className="relative w-full md:w-[48%] md:-ml-[8%] h-[250px] md:h-full z-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/bg-22.jpg"
              alt="Bird life in Odisha"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacationCTA;
