import React from 'react';
import Image from 'next/image';

/**
 * EcoToursBanner Component
 * 
 * Decorative banner section: "Eco Tours Odisha - India's Best Kept Secret"
 * Features polaroid-style photos of Odisha wildlife and a scenic center image.
 */
const EcoToursBanner: React.FC = () => {
  return (
    <section className="relative w-full py-0 overflow-hidden select-none">
      {/* Background Gradient */}
      <div
        className="relative w-full h-[220px] md:h-[280px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(90deg, #9ca9d3 0%, #7db0e3 50%, #76bce4 100%)',
        }}
      >
        {/* Main Content Wrapper */}
        <div className="container relative h-full flex items-center justify-center">

          {/* Polaroid 1: Bengal Tiger (Left) */}
          <div className="absolute left-[2%] md:left-[8%] top-1/2 -translate-y-1/2 z-20 transition-transform hover:scale-105 duration-300">
            <div className="absolute -top-4 -left-4 w-12 h-8 bg-[#f1ad01] rotate-[-15deg] opacity-90 shadow-sm" />
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[-8deg] w-[110px] md:w-[155px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=400&h=400&fit=crop&q=80"
                  alt="Bengal Tiger in Simlipal, Odisha"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Polaroid 2: Spotted Deer (Inner Left) */}
          <div className="absolute left-[15%] md:left-[22%] top-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-105 duration-300">
            <div className="absolute -bottom-4 -right-4 w-14 h-8 bg-[#f1ad01] rotate-[10deg] opacity-80 shadow-sm" />
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[5deg] w-[100px] md:w-[145px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1484406566174-9da000fda645?w=400&h=400&fit=crop&q=80"
                  alt="Spotted Deer in Odisha Forest"
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
            <div className="absolute border-[3px] border-[#f1ad01] w-[105%] h-[110%] -rotate-1 pointer-events-none" />

            <div className="relative w-[280px] md:w-[480px] h-[140px] md:h-[180px] overflow-hidden rounded-md shadow-2xl border-4 border-[#547721]/20">
              <Image
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&h=400&fit=crop&q=80"
                alt="Chilika Lake Odisha Landscape"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 40%' }}
                unoptimized
              />
              {/* Text Overlays */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                <h3 className="text-[#f1ad01] font-display font-bold text-xl md:text-3xl uppercase tracking-wider drop-shadow-md mb-1">
                  Eco Tours Odisha
                </h3>
                <p className="text-white font-body font-bold text-[10px] md:text-sm tracking-[0.1em] drop-shadow-sm">
                  India&apos;s Best Kept Secret
                </p>
              </div>
            </div>
          </div>

          {/* Polaroid 3: Indian Elephants (Inner Right) */}
          <div className="absolute right-[15%] md:right-[22%] top-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-105 duration-300">
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[-4deg] w-[100px] md:w-[145px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=400&fit=crop&q=80"
                  alt="Indian Elephants in Odisha Jungle"
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
            <div className="absolute -top-3 -right-3 w-10 h-6 bg-[#f1ad01] rotate-[20deg] opacity-90 shadow-sm" />
            <div className="relative p-2 pb-8 bg-white shadow-lg border border-gray-100 rotate-[6deg] w-[110px] md:w-[155px]">
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=400&h=400&fit=crop&q=80"
                  alt="Kingfisher Bird in Odisha"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 30%' }}
                  unoptimized
                />
              </div>
            </div>
          </div>

        </div>

        {/* Textured Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />

        {/* Horizontal Decorative Yellow Bar */}
        <div className="absolute h-8 md:h-12 w-full bg-[#f1ad01]/80 top-1/2 -translate-y-1/2 -z-1" />
      </div>
    </section>
  );
};

export default EcoToursBanner;