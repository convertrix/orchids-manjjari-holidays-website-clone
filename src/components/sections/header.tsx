"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full flex flex-col font-body">
      {/* Action Bar */}
      <div className="bg-[#191c14] text-white py-[6px] text-[13px] font-medium border-b border-[#2a2d25]">
        <div className="container mx-auto max-w-[1200px] px-[15px] flex justify-between items-center">
          <div className="flex items-center">
            <ul className="hidden md:flex items-center gap-x-[18px]">
              <li><Link href="/" className="hover:text-[#8eb93e] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#8eb93e] transition-colors">About</Link></li>
              <li><Link href="/packages" className="hover:text-[#8eb93e] transition-colors">Packages</Link></li>
              <li><Link href="/services" className="hover:text-[#8eb93e] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#8eb93e] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-x-4">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-1 hover:text-[#8eb93e] transition-colors">
              <Phone size={13} /> <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm relative z-50">
        <div className="container mx-auto max-w-[1200px] px-[15px] flex justify-between items-center h-[90px]">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8eb93e] rounded-full flex items-center justify-center text-white font-display font-bold text-lg">M</div>
            <div>
              <span className="font-display font-bold text-[18px] text-[#547721] uppercase tracking-[1px] block leading-tight">{siteConfig.name}</span>
              <span className="font-body text-[10px] text-[#8eb93e] uppercase tracking-[2px]">{siteConfig.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center h-full">
              {/* Odisha Tours Dropdown */}
              <li className="group relative h-full flex items-center">
                <Link href="/packages" className="px-4 flex items-center gap-1 h-full font-display font-semibold text-[13px] uppercase tracking-[0.5px] text-[#444444] hover:text-[#8eb93e]">
                  Odisha Tours <ChevronDown size={14} />
                </Link>
                <div className="absolute top-full left-0 w-[600px] bg-white border-t-2 border-[#8eb93e] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-display font-bold text-[12px] text-[#547721] mb-3 uppercase border-b pb-2">Best Offers</h4>
                      <ul className="space-y-1">
                        <li><Link href="/packages?cat=best-offers" className="text-[12px] text-[#666] hover:text-[#8eb93e] py-1 block">Golden Triangle Tour</Link></li>
                        <li><Link href="/packages?cat=best-offers" className="text-[12px] text-[#666] hover:text-[#8eb93e] py-1 block">Exotic Odisha Trip</Link></li>
                        <li><Link href="/packages?cat=best-offers" className="text-[12px] text-[#666] hover:text-[#8eb93e] py-1 block">Mesmerizing Odisha</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[12px] text-[#547721] mb-3 uppercase border-b pb-2">Special Interest</h4>
                      <ul className="space-y-1">
                        <li><Link href="/packages?cat=eco-wildlife" className="text-[12px] text-[#666] hover:text-[#8eb93e] py-1 block">Eco Wildlife Tours</Link></li>
                        <li><Link href="/packages?cat=special-interest" className="text-[12px] text-[#666] hover:text-[#8eb93e] py-1 block">Tribal Tours</Link></li>
                        <li><Link href="/packages?cat=culture-heritage" className="text-[12px] text-[#666] hover:text-[#8eb93e] py-1 block">Buddhist Tours</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="h-full flex items-center">
                <Link href="/packages?cat=chhattisgarh" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.5px] text-[#444444] hover:text-[#8eb93e]">
                  Chhattisgarh Tours
                </Link>
              </li>

              <li className="h-full flex items-center">
                <Link href="/packages?cat=india" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.5px] text-[#444444] hover:text-[#8eb93e]">
                  India Tours
                </Link>
              </li>

              <li className="h-full flex items-center">
                <Link href="/services" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.5px] text-[#444444] hover:text-[#8eb93e]">
                  Services
                </Link>
              </li>

              <li className="h-full flex items-center">
                <Link href="/about" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.5px] text-[#444444] hover:text-[#8eb93e]">
                  About
                </Link>
              </li>

              <li className="h-full flex items-center">
                <Link href="/contact" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.5px] text-[#444444] hover:text-[#8eb93e]">
                  Contact
                </Link>
              </li>

              <li className="ml-4 flex items-center">
                <Link
                  href="/book"
                  className="bg-[#8eb93e] text-white font-body font-bold uppercase text-[12px] px-6 py-[10px] rounded-[5px] transition-all hover:bg-[#191c14] hover:shadow-lg"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="container mx-auto max-w-[1200px] px-[15px] py-4">
              <nav className="flex flex-col gap-2">
                <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[13px] uppercase hover:bg-gray-50 rounded">Home</Link>
                <Link href="/packages" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[13px] uppercase hover:bg-gray-50 rounded">Odisha Tours</Link>
                <Link href="/packages?cat=chhattisgarh" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[13px] uppercase hover:bg-gray-50 rounded">Chhattisgarh Tours</Link>
                <Link href="/packages?cat=india" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[13px] uppercase hover:bg-gray-50 rounded">India Tours</Link>
                <Link href="/services" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[13px] uppercase hover:bg-gray-50 rounded">Services</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[13px] uppercase hover:bg-gray-50 rounded">About</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[13px] uppercase hover:bg-gray-50 rounded">Contact</Link>
                <Link href="/book" onClick={() => setMobileOpen(false)} className="py-3 px-4 bg-[#8eb93e] text-white text-center font-body font-bold uppercase text-[13px] rounded-[5px] mt-2">Book Now</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
