import React from 'react';
import Image from 'next/image';

/**
 * EcoToursBanner Component
 * 
 * A pixel-perfect clone of the decorative banner section:
 * "Eco Tours Odisha - India's Best Kept Secret"
 * 
 * Features polaroid-style photos and a scenic center image against 
 * a stylized background with decorative yellow/orange tape elements.
 */
const EcoToursBanner: React.FC = () => {
  return (
    <section className="relative w-full py-0 overflow-hidden select-none">
      {/* Background Gradient/Container */}
      <div 
        className="relative w-full h-[220px] md:h-[280px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(90deg, #9ca9d3 0%, #7db0e3 50%, #76bce4 100%)',
        }}
      >
        {/* Main Content Wrapper */}
        <div className="container relative h-full flex items-center justify-center">
          
          {/* Polaroid 1: Tiger (Left) */}
          <div className="absolute left-[2%] md:left-[8%] top-1/2 -translate-y-1/2 z-20 transition-transform hover:scale-105 duration-300">
            {/* Decorative Yellow Tape Behind */}
            <div className="absolute -top-4 -left-4 w-12 h-8 bg-[#f1ad01] rotate-[-15deg] opacity-90 shadow-sm" />
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[-8deg] w-[110px] md:w-[155px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/images_7.png" 
                  alt="Tiger in wildlife"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Polaroid 2: Deer (Inner Left) */}
          <div className="absolute left-[15%] md:left-[22%] top-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-105 duration-300">
             {/* Decorative Yellow Tape Behind */}
             <div className="absolute -bottom-4 -right-4 w-14 h-8 bg-[#f1ad01] rotate-[10deg] opacity-80 shadow-sm" />
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[5deg] w-[100px] md:w-[145px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/images_7.png" 
                  alt="Deer in wildlife"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '80% 50%' }}
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Center Feature: Eco Tours Odisha Landscape */}
          <div className="relative z-30 flex flex-col items-center justify-center mx-auto">
            {/* Orange Decorative Frame (Skewed box) */}
            <div className="absolute border-[3px] border-[#f1ad01] w-[105%] h-[110%] -rotate-1 pointer-events-none" />
            
            <div className="relative w-[280px] md:w-[480px] h-[140px] md:h-[180px] overflow-hidden rounded-md shadow-2xl border-4 border-[#547721]/20">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/images_7.png"
                alt="River landscape"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 40%' }}
                unoptimized
              />
              {/* Text Overlays */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
                <h3 className="text-[#f1ad01] font-display font-bold text-xl md:text-3xl uppercase tracking-wider drop-shadow-md mb-1">
                  Eco Tours Odisha
                </h3>
                <p className="text-white font-body font-bold text-[10px] md:text-sm tracking-[0.1em] drop-shadow-sm">
                  India&apos;s Best Kept Secret
                </p>
              </div>
            </div>
          </div>

          {/* Polaroid 3: Elephants (Inner Right) */}
          <div className="absolute right-[15%] md:right-[22%] top-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-105 duration-300">
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[-4deg] w-[100px] md:w-[145px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/images_7.png" 
                  alt="Elephants"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '70% 30%' }}
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Polaroid 4: Kingfisher Bird (Right) */}
          <div className="absolute right-[2%] md:right-[8%] top-1/2 -translate-y-1/2 z-20 transition-transform hover:scale-105 duration-300">
            {/* Decorative Yellow Tape Behind */}
            <div className="absolute -top-3 -right-3 w-10 h-6 bg-[#f1ad01] rotate-[20deg] opacity-90 shadow-sm" />
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[6deg] w-[110px] md:w-[155px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/images_7.png" 
                  alt="Bird"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '90% 80%' }}
                  unoptimized
                />
              </div>
            </div>
          </div>

        </div>

        {/* Textured Overlay for Section Depth */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />
             
        {/* Horizontal Decorative Yellow Bar Backdrop */}
        <div className="absolute h-8 md:h-12 w-full bg-[#f1ad01]/80 top-1/2 -translate-y-1/2 -z-1" />
      </div>

      {/* Spacing for mobile layout adjustment */}
      <style jsx>{`
        @media (max-width: 640px) {
          .polaroid-stack {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default EcoToursBanner;