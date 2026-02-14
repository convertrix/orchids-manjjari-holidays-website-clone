"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/welcome-to-odisha-tropical-vacations-6.jpg",
    title: "DISCOVER THE SPIRITUAL HEART OF ODISHA",
    subtitle: "MANJJARI HOLIDAYS",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr1-8.jpg",
    title: "EXPLORE THE LAND OF TEMPLES & TRIBES",
    subtitle: "MANJJARI HOLIDAYS",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr2-9.jpg",
    title: "EXPERIENCE ECO WILDLIFE TOURS",
    subtitle: "MANJJARI HOLIDAYS",
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden p-0 m-0">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle, transparent 0%, rgba(0,0,0,0.4) 100%)" }} />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-[800px]">
                <p className="font-display font-semibold text-[#8eb93e] text-[16px] md:text-[18px] uppercase tracking-[3px] mb-4">
                  {slide.subtitle}
                </p>
                <h1 className="font-display font-extrabold text-white text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] uppercase mb-8 drop-shadow-md">
                  {slide.title}
                </h1>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/packages"
                    className="bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold text-[13px] md:text-[14px] uppercase tracking-[1px] px-8 py-3 rounded-[5px] transition-all duration-300"
                  >
                    EXPLORE PACKAGES
                  </Link>
                  <Link
                    href="/book"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-[#191c14] text-white font-body font-bold text-[13px] md:text-[14px] uppercase tracking-[1px] px-8 py-3 rounded-[5px] transition-all duration-300 border border-white/50"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#8eb93e] text-white p-2 md:p-3 rounded-full transition-colors" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#8eb93e] text-white p-2 md:p-3 rounded-full transition-colors" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[12px] h-[12px] rounded-full border-2 transition-all ${index === currentSlide ? "bg-[#8eb93e] border-[#8eb93e] scale-125" : "bg-transparent border-white hover:bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
