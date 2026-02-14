import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const Footer = () => {
  const popularOdishaTours = [
    { name: "Best Offers Odisha Tours", link: "/packages?cat=best-offers" },
    { name: "Eco Wildlife Tours", link: "/packages?cat=eco-wildlife" },
    { name: "Special Interest Tours", link: "/packages?cat=special-interest" },
    { name: "Culture & Heritage Tours", link: "/packages?cat=culture-heritage" },
    { name: "Buddhist Tours Odisha", link: "/packages?cat=culture-heritage" },
    { name: "Tribal Odisha Tours", link: "/packages?cat=special-interest" },
    { name: "Festival Tours Odisha", link: "/packages?cat=special-interest" },
    { name: "Textile Tours Odisha", link: "/packages?cat=special-interest" },
  ];

  const otherTours = [
    { name: "Chhattisgarh Tribal Tour", link: "/packages?cat=chhattisgarh" },
    { name: "Photography Tour Chhattisgarh", link: "/packages?cat=chhattisgarh" },
    { name: "Northeast Trips", link: "/packages?cat=india" },
    { name: "South India Tours", link: "/packages?cat=india" },
    { name: "Special Interest Tours India", link: "/packages?cat=india" },
  ];

  const usefulLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "All Packages", link: "/packages" },
    { name: "Services", link: "/services" },
    { name: "Book Now", link: "/book" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <footer className="bg-[#4a6a1f] text-white pt-16 pb-8 relative overflow-hidden font-body">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/bg-22.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="font-display text-[20px] font-bold uppercase mb-8 pb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#8eb93e]">Popular Odisha Tours</h4>
            <ul className="space-y-3">
              {popularOdishaTours.map((item) => (
                <li key={item.name} className="flex items-center">
                  <span className="text-[#8eb93e] mr-2"><ChevronRight size={14} strokeWidth={3} /></span>
                  <Link href={item.link} className="text-[14px] leading-[1.8] hover:text-[#8eb93e] transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[20px] font-bold uppercase mb-8 pb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#8eb93e]">Incredible India Tours</h4>
            <ul className="space-y-3">
              {otherTours.map((item) => (
                <li key={item.name} className="flex items-center">
                  <span className="text-[#8eb93e] mr-2"><ChevronRight size={14} strokeWidth={3} /></span>
                  <Link href={item.link} className="text-[14px] leading-[1.8] hover:text-[#8eb93e] transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[20px] font-bold uppercase mb-8 pb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#8eb93e]">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((item) => (
                <li key={item.name} className="flex items-center">
                  <span className="text-[#8eb93e] mr-2"><ChevronRight size={14} strokeWidth={3} /></span>
                  <Link href={item.link} className="text-[14px] leading-[1.8] hover:text-[#8eb93e] transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[20px] font-bold uppercase mb-8 pb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#8eb93e]">Quick Contact</h4>
            <div className="space-y-5 text-[14px]">
              <div className="flex items-start">
                <MapPin className="text-[#8eb93e] mr-3 mt-1 shrink-0" size={20} />
                <p className="leading-[1.6]">
                  <strong>{siteConfig.name}</strong><br />
                  {siteConfig.address.line1},<br />
                  {siteConfig.address.line2},<br />
                  {siteConfig.address.line3}
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#8eb93e] mr-3 shrink-0" size={18} />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#8eb93e] transition-colors">{siteConfig.phone}</a>
              </div>
              <div className="flex items-start">
                <Mail className="text-[#8eb93e] mr-3 mt-1 shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[#8eb93e] transition-colors mb-1">{siteConfig.email}</a>
                  <a href={`mailto:${siteConfig.emailDomestic}`} className="hover:text-[#8eb93e] transition-colors">{siteConfig.emailDomestic}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-white/80 font-medium">
            &copy; {new Date().getFullYear()} {siteConfig.name} | All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-[#8eb93e] rounded-full hover:bg-[#191c14] transition-colors"><Facebook size={16} fill="white" /></a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-[#8eb93e] rounded-full hover:bg-[#191c14] transition-colors"><Twitter size={16} fill="white" /></a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-[#8eb93e] rounded-full hover:bg-[#191c14] transition-colors"><Youtube size={16} fill="white" /></a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-[#8eb93e] rounded-full hover:bg-[#191c14] transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
