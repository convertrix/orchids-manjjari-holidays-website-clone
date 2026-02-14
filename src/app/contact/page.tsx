"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { siteConfig } from "@/lib/config";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact-page", type: "enquiry" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden p-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/welcome-to-odisha-tropical-vacations-6.jpg')` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-display font-extrabold text-white text-[42px] uppercase tracking-[2px] mb-4">Contact Us</h1>
          <p className="text-[#8eb93e] font-display text-[16px] uppercase tracking-[3px]">Get In Touch</p>
        </div>
      </section>

      <section className="py-[80px] bg-white">
        <div className="container mx-auto max-w-[1200px] px-[15px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <h2 className="font-display font-bold text-[24px] text-[#547721] uppercase mb-8 text-left">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-[#8eb93e]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[14px] text-[#191c14] uppercase mb-1">Office Address</h4>
                    <p className="font-body text-[14px] text-[#666] leading-[1.6]">{siteConfig.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-[#8eb93e]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[14px] text-[#191c14] uppercase mb-1">Phone</h4>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="font-body text-[14px] text-[#666] hover:text-[#8eb93e]">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-[#8eb93e]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[14px] text-[#191c14] uppercase mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.email}`} className="font-body text-[14px] text-[#666] hover:text-[#8eb93e] block">{siteConfig.email}</a>
                    <a href={`mailto:${siteConfig.emailDomestic}`} className="font-body text-[14px] text-[#666] hover:text-[#8eb93e] block">{siteConfig.emailDomestic}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-[#8eb93e]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[14px] text-[#191c14] uppercase mb-1">Working Hours</h4>
                    <p className="font-body text-[14px] text-[#666]">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="font-body text-[14px] text-[#666]">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-display font-bold text-[24px] text-[#547721] uppercase mb-8 text-left">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] transition-colors" />
                  <input type="email" placeholder="Your Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] transition-colors" />
                  <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] transition-colors" />
                </div>
                <textarea placeholder="Your Message *" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] transition-colors resize-none" />
                <button type="submit" disabled={status === "loading"} className="inline-flex items-center gap-2 bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[14px] px-10 py-4 rounded-[5px] transition-colors disabled:opacity-50">
                  <Send size={16} /> {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && <p className="text-[#8eb93e] font-bold text-[14px]">Message sent successfully! We&apos;ll get back to you soon.</p>}
                {status === "error" && <p className="text-red-500 font-bold text-[14px]">Something went wrong. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <iframe
          src={siteConfig.mapEmbed}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Manjjari Holidays Location"
        />
      </section>

      <Footer />
    </div>
  );
}
