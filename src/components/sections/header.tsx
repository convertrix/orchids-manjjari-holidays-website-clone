"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <header className="w-full flex flex-col font-body">
      {/* Action Bar */}
      <div className="bg-[#191c14] text-white py-[7px] text-[13px] font-medium border-b border-[#2a2d25]">
        <div className="container mx-auto max-w-[1200px] px-[15px] flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            {/* Work Email */}
            <a
              href={`mailto:${siteConfig.bookingEmail}`}
              className="flex items-center gap-1.5 hover:text-[#8eb93e] transition-colors"
            >
              <Mail size={13} />
              <span className="hidden sm:inline">{siteConfig.bookingEmail}</span>
            </a>
            <span className="hidden md:block w-px h-4 bg-white/20" />
            {/* Quick Nav Links */}
            <ul className="hidden md:flex items-center gap-x-[18px]">
              <li><Link href="/" className="hover:text-[#8eb93e] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#8eb93e] transition-colors">About</Link></li>
              <li><Link href="/packages" className="hover:text-[#8eb93e] transition-colors">Packages</Link></li>
              <li><Link href="/services" className="hover:text-[#8eb93e] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#8eb93e] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-x-4">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-1.5 hover:text-[#8eb93e] transition-colors">
              <Phone size={13} /> <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm relative z-50">
        <div className="container mx-auto max-w-[1400px] px-4 flex items-center h-[70px]">
          {/* Logo — pushed far left */}
          <Link href="/" className="shrink-0 flex items-center gap-3 mr-8">
            <div className="w-10 h-10 bg-[#8eb93e] rounded-full flex items-center justify-center text-white font-display font-bold text-[16px] shadow-md">M</div>
            <div>
              <span className="font-display font-bold text-[16px] text-[#547721] uppercase tracking-[0.5px] block leading-tight">{siteConfig.name}</span>
              <span className="font-body text-[9px] text-[#8eb93e] uppercase tracking-[1.5px]">{siteConfig.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation — horizontal row with grouped sections */}
          <nav className="hidden lg:flex items-center h-full flex-1 justify-end">
            {/* Tour Categories Group */}
            <ul className="flex items-center h-full gap-0">
              {/* Odisha Tours Dropdown */}
              <li className="group relative h-full flex items-center">
                <Link
                  href="/packages"
                  className="px-4 flex items-center gap-1 h-full font-display font-semibold text-[13px] uppercase tracking-[0.3px] text-[#333] hover:text-[#8eb93e] transition-colors"
                >
                  Odisha Tours <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                {/* Modern Mega Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-3 group-hover:translate-y-0 z-50 pt-2">
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100/80 overflow-hidden">
                    {/* Dropdown Header */}
                    <div className="px-6 py-4 bg-gradient-to-r from-[#8eb93e]/5 to-[#547721]/5 border-b border-gray-100">
                      <h3 className="font-display font-bold text-[13px] text-[#547721] uppercase tracking-[1px]">Explore Odisha Tours</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-0">
                      <div className="p-5">
                        <h4 className="font-display font-bold text-[11px] text-[#8eb93e] mb-3 uppercase tracking-[1px]">Best Offers</h4>
                        <ul className="space-y-0.5">
                          <li>
                            <Link href="/packages?cat=best-offers" className="flex items-center gap-2 text-[13px] text-[#555] hover:text-[#8eb93e] py-2 px-3 rounded-lg hover:bg-[#8eb93e]/5 transition-all group/item">
                              <span className="w-1 h-4 rounded-full bg-transparent group-hover/item:bg-[#8eb93e] transition-all" />
                              Golden Triangle Tour
                            </Link>
                          </li>
                          <li>
                            <Link href="/packages?cat=best-offers" className="flex items-center gap-2 text-[13px] text-[#555] hover:text-[#8eb93e] py-2 px-3 rounded-lg hover:bg-[#8eb93e]/5 transition-all group/item">
                              <span className="w-1 h-4 rounded-full bg-transparent group-hover/item:bg-[#8eb93e] transition-all" />
                              Exotic Odisha Trip
                            </Link>
                          </li>
                          <li>
                            <Link href="/packages?cat=best-offers" className="flex items-center gap-2 text-[13px] text-[#555] hover:text-[#8eb93e] py-2 px-3 rounded-lg hover:bg-[#8eb93e]/5 transition-all group/item">
                              <span className="w-1 h-4 rounded-full bg-transparent group-hover/item:bg-[#8eb93e] transition-all" />
                              Mesmerizing Odisha
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="p-5 border-l border-gray-100">
                        <h4 className="font-display font-bold text-[11px] text-[#8eb93e] mb-3 uppercase tracking-[1px]">Special Interest</h4>
                        <ul className="space-y-0.5">
                          <li>
                            <Link href="/packages?cat=eco-wildlife" className="flex items-center gap-2 text-[13px] text-[#555] hover:text-[#8eb93e] py-2 px-3 rounded-lg hover:bg-[#8eb93e]/5 transition-all group/item">
                              <span className="w-1 h-4 rounded-full bg-transparent group-hover/item:bg-[#8eb93e] transition-all" />
                              Eco Wildlife Tours
                            </Link>
                          </li>
                          <li>
                            <Link href="/packages?cat=special-interest" className="flex items-center gap-2 text-[13px] text-[#555] hover:text-[#8eb93e] py-2 px-3 rounded-lg hover:bg-[#8eb93e]/5 transition-all group/item">
                              <span className="w-1 h-4 rounded-full bg-transparent group-hover/item:bg-[#8eb93e] transition-all" />
                              Tribal Tours
                            </Link>
                          </li>
                          <li>
                            <Link href="/packages?cat=culture-heritage" className="flex items-center gap-2 text-[13px] text-[#555] hover:text-[#8eb93e] py-2 px-3 rounded-lg hover:bg-[#8eb93e]/5 transition-all group/item">
                              <span className="w-1 h-4 rounded-full bg-transparent group-hover/item:bg-[#8eb93e] transition-all" />
                              Buddhist Tours
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Dropdown Footer */}
                    <div className="px-6 py-3 bg-gray-50/80 border-t border-gray-100">
                      <Link href="/packages" className="text-[12px] text-[#8eb93e] font-bold uppercase tracking-[0.5px] hover:text-[#547721] transition-colors">
                        View All Packages →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="h-full flex items-center">
                <Link href="/packages?cat=chhattisgarh" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.3px] text-[#333] hover:text-[#8eb93e] transition-colors">
                  Chhattisgarh Tours
                </Link>
              </li>

              <li className="h-full flex items-center">
                <Link href="/packages?cat=india" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.3px] text-[#333] hover:text-[#8eb93e] transition-colors">
                  India Tours
                </Link>
              </li>
            </ul>

            {/* Divider between tour links and other nav */}
            <span className="w-px h-6 bg-gray-200 mx-2" />

            {/* Other Nav Links Group */}
            <ul className="flex items-center h-full gap-0">
              <li className="h-full flex items-center">
                <Link href="/services" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.3px] text-[#333] hover:text-[#8eb93e] transition-colors">
                  Services
                </Link>
              </li>

              <li className="h-full flex items-center">
                <Link href="/about" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.3px] text-[#333] hover:text-[#8eb93e] transition-colors">
                  About
                </Link>
              </li>

              <li className="h-full flex items-center">
                <Link href="/contact" className="px-4 h-full flex items-center font-display font-semibold text-[13px] uppercase tracking-[0.3px] text-[#333] hover:text-[#8eb93e] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Book Now Button — prominent */}
            <Link
              href="/book"
              className="ml-5 bg-[#8eb93e] text-white font-body font-bold uppercase text-[12px] px-6 py-[10px] rounded-full transition-all hover:bg-[#547721] hover:shadow-[0_4px_15px_rgba(142,185,62,0.4)] hover:scale-[1.03] active:scale-[0.97] tracking-[0.5px]"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="container mx-auto max-w-[1200px] px-[15px] py-4">
            <nav className="flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[14px] uppercase hover:bg-[#8eb93e]/5 hover:text-[#8eb93e] rounded-lg transition-all">Home</Link>

              {/* Mobile Odisha Tours Accordion */}
              <div>
                <button
                  onClick={() => setMobileDropdown(!mobileDropdown)}
                  className="w-full py-3 px-4 font-display font-semibold text-[14px] uppercase hover:bg-[#8eb93e]/5 hover:text-[#8eb93e] rounded-lg transition-all flex items-center justify-between"
                >
                  Odisha Tours
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDropdown ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileDropdown ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-8 py-2 space-y-1">
                    <Link href="/packages?cat=best-offers" onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-[13px] text-[#555] hover:text-[#8eb93e] rounded transition-colors">Golden Triangle Tour</Link>
                    <Link href="/packages?cat=best-offers" onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-[13px] text-[#555] hover:text-[#8eb93e] rounded transition-colors">Exotic Odisha Trip</Link>
                    <Link href="/packages?cat=eco-wildlife" onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-[13px] text-[#555] hover:text-[#8eb93e] rounded transition-colors">Eco Wildlife Tours</Link>
                    <Link href="/packages?cat=special-interest" onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-[13px] text-[#555] hover:text-[#8eb93e] rounded transition-colors">Tribal Tours</Link>
                    <Link href="/packages?cat=culture-heritage" onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-[13px] text-[#555] hover:text-[#8eb93e] rounded transition-colors">Buddhist Tours</Link>
                    <Link href="/packages" onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-[12px] text-[#8eb93e] font-bold uppercase">View All →</Link>
                  </div>
                </div>
              </div>

              <Link href="/packages?cat=chhattisgarh" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[14px] uppercase hover:bg-[#8eb93e]/5 hover:text-[#8eb93e] rounded-lg transition-all">Chhattisgarh Tours</Link>
              <Link href="/packages?cat=india" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[14px] uppercase hover:bg-[#8eb93e]/5 hover:text-[#8eb93e] rounded-lg transition-all">India Tours</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[14px] uppercase hover:bg-[#8eb93e]/5 hover:text-[#8eb93e] rounded-lg transition-all">Services</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[14px] uppercase hover:bg-[#8eb93e]/5 hover:text-[#8eb93e] rounded-lg transition-all">About</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3 px-4 font-display font-semibold text-[14px] uppercase hover:bg-[#8eb93e]/5 hover:text-[#8eb93e] rounded-lg transition-all">Contact</Link>
              <Link href="/book" onClick={() => setMobileOpen(false)} className="py-3 px-4 bg-[#8eb93e] text-white text-center font-body font-bold uppercase text-[14px] rounded-[5px] mt-2 hover:bg-[#191c14] transition-colors">Book Now</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
