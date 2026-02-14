"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { packages, tourCategories } from "@/lib/config";
import { Clock, IndianRupee, Suspense } from "lucide-react";

function PackagesContent() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");

  const filtered = cat ? packages.filter((p) => p.category === cat) : packages;
  const activeCat = tourCategories.find((c) => c.id === cat);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Link
          href="/packages"
          className={`px-5 py-2 rounded-full font-body font-bold text-[12px] uppercase tracking-[1px] transition-all border ${!cat ? "bg-[#8eb93e] text-white border-[#8eb93e]" : "bg-white text-[#444] border-[#e1e1e1] hover:border-[#8eb93e] hover:text-[#8eb93e]"}`}
        >
          All Packages
        </Link>
        {tourCategories.map((c) => (
          <Link
            key={c.id}
            href={`/packages?cat=${c.id}`}
            className={`px-5 py-2 rounded-full font-body font-bold text-[12px] uppercase tracking-[1px] transition-all border ${cat === c.id ? "bg-[#8eb93e] text-white border-[#8eb93e]" : "bg-white text-[#444] border-[#e1e1e1] hover:border-[#8eb93e] hover:text-[#8eb93e]"}`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {activeCat && (
        <p className="text-center font-body text-[16px] text-[#666] mb-8">
          Showing <strong>{filtered.length}</strong> packages in <strong>{activeCat.name}</strong>
        </p>
      )}

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {filtered.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-[5px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col h-full border border-[#e1e1e1]/50 hover:-translate-y-1 transition-transform duration-300">
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image src={pkg.image} alt={pkg.name} fill className="object-cover transition-transform duration-500 hover:scale-110" />
              {pkg.originalPrice > pkg.price && (
                <div className="absolute top-4 right-4 bg-[#ef4444] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                  {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-semibold text-[18px] text-[#547721] uppercase mb-3">{pkg.name}</h3>
              <div className="flex items-center gap-4 mb-3 text-[13px] text-[#666]">
                <span className="flex items-center gap-1"><Clock size={14} /> {pkg.duration}</span>
              </div>
              <p className="font-body text-[14px] text-[#444] leading-[1.6] mb-4 flex-grow">{pkg.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="font-display font-bold text-[22px] text-[#8eb93e]">&#8377;{pkg.price.toLocaleString()}</span>
                  {pkg.originalPrice > pkg.price && (
                    <span className="text-[14px] text-[#999] line-through ml-2">&#8377;{pkg.originalPrice.toLocaleString()}</span>
                  )}
                  <span className="text-[12px] text-[#666] block">per person</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/book?package=${pkg.id}`}
                  className="flex-1 text-center bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[12px] px-4 py-3 rounded-[5px] transition-colors"
                >
                  Book Now
                </Link>
                <Link
                  href={`/packages/${pkg.id}`}
                  className="flex-1 text-center border border-[#8eb93e] text-[#8eb93e] hover:bg-[#8eb93e] hover:text-white font-body font-bold uppercase text-[12px] px-4 py-3 rounded-[5px] transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[18px] text-[#666] font-body">No packages found in this category.</p>
          <Link href="/packages" className="inline-block mt-4 text-[#8eb93e] font-bold underline">View all packages</Link>
        </div>
      )}
    </>
  );
}

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden p-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr1-8.jpg')` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-display font-extrabold text-white text-[42px] uppercase tracking-[2px] mb-4">Tour Packages</h1>
          <p className="text-[#8eb93e] font-display text-[16px] uppercase tracking-[3px]">Explore Our Curated Experiences</p>
        </div>
      </section>
      <section className="py-[80px] bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1200px] px-[15px]">
          <PackagesContent />
        </div>
      </section>
      <Footer />
    </div>
  );
}
