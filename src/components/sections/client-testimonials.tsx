"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ms. Hong Yee Leo X 2",
    country: "MALAYSIA",
    text: "The vehicle is neat, clean and in perfect condition with very good Chauffer. The Guide is Fantastic and well informative.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/testi-profile-fig-85x85-25.png"
  },
  {
    id: 2,
    name: "Ms. Sabina Rommler",
    country: "GERMANY",
    text: "When I came to Odisha, India as a solo traveler some years ago, Tropical Vacations was the first travel agency,",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/Sabina-85x85-26.jpg"
  },
  {
    id: 3,
    name: "Sangman Lee X 5",
    country: "SOUTH KOREA",
    text: "We are a group of retired proffesors doing research on ancient Buddhist monuments on east coast starting",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/971078_1381505882102843_1267604503_n-1-27.jpg"
  },
  {
    id: 4,
    name: "Price Giovanni",
    country: "ITALY",
    text: "Throughout my tour in Odisha the driver and Guide are excellent, I came to visit the temples and Tribes of Odisha",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/testi-profile-fig-85x85-25.png"
  }
];

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-0">
      {/* Background Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-15 grayscale pointer-events-none"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/971078_1381505882102843_1267604503_n-1-27.jpg')`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Dark Overlay Wrapper */}
      <div className="relative z-10 bg-[#191c14]/90 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-white text-2xl font-display font-bold uppercase tracking-wider mb-4 md:mb-0">
              OUR HAPPY CLIENTS
            </h2>
            <h2 className="text-white text-2xl font-display font-bold uppercase tracking-wider">
              ALL VIDEOS ON YOUTUBE
            </h2>
          </div>

          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            {/* Carousel Item */}
            <div className="relative w-full transition-opacity duration-500 ease-in-out">
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#8eb93e]">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 right-1/2 translate-x-12 bg-[#8eb93e] rounded-full p-1 border-2 border-[#191c14]">
                   {/* Ghost Icon Replacement for the small circle in middle */}
                   <div className="w-5 h-5 flex items-center justify-center">
                     <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/></svg>
                   </div>
                </div>
              </div>

              <h3 className="text-white text-xl font-display font-bold mb-1 uppercase">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-[#8eb93e] text-[13px] font-display font-bold tracking-widest uppercase mb-6">
                {testimonials[activeIndex].country}
              </p>

              <div className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl font-body leading-relaxed mb-6 italic">
                "{testimonials[activeIndex].text}"
              </div>
              
              <p className="text-[#8eb93e] font-bold text-sm mb-10">(More...)</p>

              <div className="flex justify-center gap-2 mb-10">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "bg-[#8eb93e] w-6" : "bg-white/30 w-2"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center gap-4">
                <a 
                  href="/testimonials"
                  className="bg-[#8eb93e] hover:bg-[#191c14] text-white px-8 py-3 rounded-[5px] font-body font-bold text-[13px] tracking-wider uppercase transition-all flex items-center gap-2 group border border-[#8eb93e]"
                >
                  <ChevronRight className="w-4 h-4 bg-white/20 rounded-full" />
                  VIEW MORE
                </a>
                
                <a 
                  href="/video-gallery"
                  className="bg-[#8eb93e] hover:bg-[#191c14] text-white px-8 py-3 rounded-[5px] font-body font-bold text-[13px] tracking-wider uppercase transition-all flex items-center gap-2 group border border-[#8eb93e]"
                >
                  EXPLORE MORE
                  <ChevronRight className="w-4 h-4 bg-white/20 rounded-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}