"use client";

import { use } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/config";
import { Clock, Check, MapPin } from "lucide-react";

export default function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-[120px] text-center">
          <h1 className="font-display text-[32px] text-[#547721] mb-4">Package Not Found</h1>
          <Link href="/packages" className="text-[#8eb93e] font-bold underline">View all packages</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero */}
      <section className="relative h-[400px] flex items-end overflow-hidden p-0">
        <div className="absolute inset-0">
          <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto max-w-[1200px] px-[15px] pb-12">
          <h1 className="font-display font-extrabold text-white text-[36px] uppercase tracking-[1px] mb-3">{pkg.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80 text-[14px]">
            <span className="flex items-center gap-1"><Clock size={16} /> {pkg.duration}</span>
            <span className="flex items-center gap-1"><MapPin size={16} /> Odisha, India</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-[60px] bg-white">
        <div className="container mx-auto max-w-[1200px] px-[15px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-display font-bold text-[24px] text-[#547721] uppercase mb-6 text-left">Overview</h2>
              <p className="font-body text-[15px] text-[#444] leading-[1.8] mb-8">{pkg.description}</p>

              <h3 className="font-display font-bold text-[20px] text-[#547721] uppercase mb-4 text-left">Tour Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#f9f9f9] rounded">
                    <MapPin size={16} className="text-[#8eb93e] shrink-0" />
                    <span className="font-body text-[14px] text-[#444]">{h}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-display font-bold text-[20px] text-[#547721] uppercase mb-4 text-left">What&apos;s Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {pkg.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-[#8eb93e] shrink-0" />
                    <span className="font-body text-[14px] text-[#444]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#f9f9f9] p-8 rounded-[5px] sticky top-[110px]">
                <div className="mb-6">
                  <span className="font-display font-bold text-[36px] text-[#8eb93e]">&#8377;{pkg.price.toLocaleString()}</span>
                  {pkg.originalPrice > pkg.price && (
                    <span className="text-[18px] text-[#999] line-through ml-3">&#8377;{pkg.originalPrice.toLocaleString()}</span>
                  )}
                  <span className="block text-[14px] text-[#666] mt-1">per person</span>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[14px] text-[#444] mb-2">
                    <Clock size={16} className="text-[#8eb93e]" /> <span>{pkg.duration}</span>
                  </div>
                </div>
                <Link
                  href={`/book?package=${pkg.id}`}
                  className="block w-full text-center bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[14px] px-6 py-4 rounded-[5px] transition-colors mb-4"
                >
                  Book This Package
                </Link>
                <Link
                  href={`/contact?package=${pkg.name}`}
                  className="block w-full text-center border border-[#8eb93e] text-[#8eb93e] hover:bg-[#8eb93e] hover:text-white font-body font-bold uppercase text-[14px] px-6 py-4 rounded-[5px] transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
