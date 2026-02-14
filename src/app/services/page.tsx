"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import Image from "next/image";
import { services, siteConfig } from "@/lib/config";
import { Car, Hotel, Map, Users, Check } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { car: Car, hotel: Hotel, map: Map, users: Users };

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden p-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/1-39-23.jpg')` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-display font-extrabold text-white text-[42px] uppercase tracking-[2px] mb-4">Our Services</h1>
          <p className="text-[#8eb93e] font-display text-[16px] uppercase tracking-[3px]">{siteConfig.name}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto max-w-[1200px] px-[15px]">
          <div className="text-center mb-[50px]">
            <h2 className="font-display font-bold text-[32px] text-[#547721] uppercase mb-4">What We Offer</h2>
            <p className="font-body text-[16px] text-[#666] max-w-[600px] mx-auto">
              {siteConfig.name} is the tour designer of Odisha, Chhattisgarh, Central India & Northeast India, curating niche products for every type of traveler.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => {
              const Icon = iconMap[svc.icon] || Map;
              return (
                <div key={svc.id} className="bg-[#f9f9f9] p-8 rounded-[5px] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon size={28} className="text-[#8eb93e]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[20px] text-[#547721] uppercase mb-3">{svc.name}</h3>
                      <p className="font-body text-[15px] text-[#444] leading-[1.7] mb-4">{svc.description}</p>
                      <ul className="space-y-2">
                        {svc.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-[14px] text-[#444]">
                            <Check size={14} className="text-[#8eb93e] shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Banner: Cab + Hotel */}
      <section className="relative py-[80px] bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/1-39-23.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto max-w-[1200px] px-[15px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[5px] text-center">
              <div className="relative w-full h-[200px] mb-6 overflow-hidden rounded">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/1-39-23.jpg" alt="Cab Services" fill className="object-contain" />
              </div>
              <h3 className="font-display font-bold text-[20px] text-[#547721] uppercase mb-3">Cab Services</h3>
              <p className="font-body text-[14px] text-[#444] mb-4">Our own fleet of vehicles with GPS tracking and professional chauffeurs.</p>
              <Link href="/book" className="inline-block bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[13px] px-6 py-3 rounded-[5px] transition-colors">Book Cab</Link>
            </div>
            <div className="bg-white p-8 rounded-[5px] text-center">
              <div className="relative w-full h-[200px] mb-6 overflow-hidden rounded">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/hotel1-24.jpg" alt="Hotel Booking" fill className="object-cover" />
              </div>
              <h3 className="font-display font-bold text-[20px] text-[#547721] uppercase mb-3">Hotel Booking</h3>
              <p className="font-body text-[14px] text-[#444] mb-4">Premium hotels, eco resorts, heritage palaces, and home stays across Odisha.</p>
              <Link href="/book" className="inline-block bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[13px] px-6 py-3 rounded-[5px] transition-colors">Book Hotel</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
