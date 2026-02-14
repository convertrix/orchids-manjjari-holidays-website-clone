"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { MapPin, Phone, Users, Award, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Banner */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden p-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/welcome-to-odisha-tropical-vacations-6.jpg')` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-display font-extrabold text-white text-[42px] uppercase tracking-[2px] mb-4">About Us</h1>
          <p className="text-[#8eb93e] font-display text-[16px] uppercase tracking-[3px]">{siteConfig.name}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto max-w-[1200px] px-[15px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative p-[10px] bg-white shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/welcome-to-odisha-tropical-vacations-6.jpg"
                  alt="About Manjjari Holidays"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="font-display font-bold text-[32px] text-[#547721] uppercase mb-6 text-left">Welcome to {siteConfig.name}</h2>
              <p className="font-body text-[15px] text-[#444] leading-[1.8] mb-4">
                {siteConfig.name} is a premier Travel and Tour Management Company based in Bhubaneswar, Odisha. We are one of the trusted brands offering proficient tour planning and management services to esteemed travelers from across the globe.
              </p>
              <p className="font-body text-[15px] text-[#444] leading-[1.8] mb-4">
                We specialize in curating niche tours across Odisha, Chhattisgarh, Central India & Northeast India. Our expertise spans Photography Tours, Tribal & Ethnic Tours, Wildlife & Eco Tours, Trekking, Cultural Heritage, and Special Interest Tours.
              </p>
              <p className="font-body text-[15px] text-[#444] leading-[1.8] mb-6">
                With our own fleet of well-maintained vehicles, professional guides, and deep local knowledge, we ensure every journey is safe, comfortable, and memorable.
              </p>
              <div className="flex items-center gap-4 text-[14px] text-[#666]">
                <MapPin size={18} className="text-[#8eb93e]" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-4 text-[14px] text-[#666] mt-2">
                <Phone size={18} className="text-[#8eb93e]" />
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-[80px] bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1200px] px-[15px]">
          <h2 className="font-display font-bold text-[32px] text-[#547721] uppercase mb-[50px] text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "Our team of experienced travel professionals and local guides ensure a seamless and enriching travel experience." },
              { icon: Award, title: "Premium Quality", desc: "We maintain highest standards in accommodation, transport, and tour management for every guest." },
              { icon: Globe, title: "Vast Network", desc: "Extensive network across Odisha, Chhattisgarh, Northeast India and all major Indian destinations." },
              { icon: Heart, title: "Personalized Service", desc: "Every tour is customized to your interests, budget and schedule for a truly personal experience." },
              { icon: MapPin, title: "Local Expertise", desc: "Deep local knowledge of tribal areas, wildlife sanctuaries, hidden gems and off-beat destinations." },
              { icon: Phone, title: "24/7 Support", desc: "Round-the-clock assistance during your tour for any emergencies or schedule changes." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#8eb93e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-[#8eb93e]" />
                </div>
                <h3 className="font-display font-semibold text-[18px] text-[#547721] uppercase mb-4">{item.title}</h3>
                <p className="font-body text-[15px] text-[#444] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[60px] bg-[#191c14]">
        <div className="container mx-auto text-center">
          <h2 className="font-display font-bold text-[28px] text-white uppercase mb-4">Ready to Start Your Journey?</h2>
          <p className="text-[#ccc] font-body text-[16px] mb-8">Let us plan your perfect vacation across Odisha and beyond</p>
          <Link href="/book" className="inline-block bg-[#8eb93e] hover:bg-white hover:text-[#191c14] text-white font-body font-bold uppercase text-[14px] px-10 py-4 rounded-[5px] transition-all duration-300">
            Book Your Tour Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
