import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeAboutSection() {
  return (
    <section
      className="relative w-full py-[80px] bg-[#1a1a1a] overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://tropicalvacations.in/wp-content/themes/betheme/images/backgrounds/pattern-3.png")',
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-[15px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative p-[10px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -rotate-1 hover:rotate-0 transition-transform duration-500" style={{ maxWidth: "540px" }}>
              <div className="relative overflow-hidden border-[1px] border-[#e1e1e1]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/welcome-to-odisha-tropical-vacations-6.jpg"
                  alt="Welcome to Odisha - Manjjari Holidays"
                  width={520}
                  height={350}
                  className="w-full h-auto object-cover block"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-display font-extrabold text-[32px] md:text-[36px] lg:text-[40px] text-white uppercase leading-[1.2] mb-6 tracking-[1px]">
              Welcome to Manjjari Holidays
            </h2>
            <div className="max-w-[500px]">
              <p className="font-body text-[15px] text-[#cccccc] leading-[1.7] mb-6">
                Manjjari Holidays is a Travel and Tour Management Company based in Bhubaneswar, Odisha. We are one of the premium brands offering proficient tour planning and management services to esteemed travelers. Entrusted with high ethics, we believe in delivering the best of tour and travel services across Odisha, Chhattisgarh, and all of India.
              </p>
              <p className="font-body text-[15px] text-[#cccccc] leading-[1.7] mb-8">
                From eco wildlife tours to tribal experiences, from photography tours to heritage walks - we curate unforgettable journeys with our own fleet of vehicles, expert guides, and deep local knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[13px] px-8 py-3.5 rounded-[5px] transition-colors duration-300"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 border border-[#8eb93e] text-[#8eb93e] hover:bg-[#8eb93e] hover:text-white font-body font-bold uppercase text-[13px] px-8 py-3.5 rounded-[5px] transition-colors duration-300"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
