import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "BEST OFFERS",
    subtitle: "ODISHA TOURS",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/2-1-5.png",
    link: "/packages?cat=best-offers",
  },
  {
    title: "ECO RETREAT",
    subtitle: "ODISHA",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/1-2.png",
    link: "/packages?cat=eco-wildlife",
  },
  {
    title: "OWN FLEET",
    subtitle: "GUIDES - ESCORTS",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/fleet-4.png",
    link: "/services",
  },
  {
    title: "HOTELS",
    subtitle: "HOME STAYS - PALACES",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/7-3.png",
    link: "/services",
  },
];

const ProductCategories = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-[15px] max-w-[1200px]">
        <div className="text-center mb-[50px]">
          <h2 className="text-[#547721] font-display text-[32px] font-bold tracking-[0.5px] uppercase">OUR PRODUCTS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              <Link href={product.link} className="flex flex-col items-center text-center px-4 py-8 h-full transition-all duration-300">
                <div className="w-[125px] h-[125px] rounded-full border border-[#e1e1e1] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#8eb93e]">
                  <div className="relative w-[65px] h-[65px]">
                    <Image src={product.icon} alt={product.title} fill className="object-contain" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[#191c14] font-display text-[15px] font-bold uppercase leading-tight tracking-[0.5px]">{product.title}</h5>
                  <h5 className="text-[#191c14] font-display text-[15px] font-bold uppercase leading-tight tracking-[0.5px]">{product.subtitle}</h5>
                </div>
              </Link>
              {index !== products.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[60px] w-px bg-[#8eb93e]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
