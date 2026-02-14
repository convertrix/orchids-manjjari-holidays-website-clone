"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { packages, services, siteConfig } from "@/lib/config";
import { Check, ChevronRight, Users, Calendar, Phone, Mail, MapPin } from "lucide-react";

function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedPkg = searchParams.get("package");

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    packageId: preselectedPkg || "",
    serviceIds: [] as string[],
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    travelDate: "",
    specialRequests: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    if (preselectedPkg) setStep(2);
  }, [preselectedPkg]);

  const selectedPkg = packages.find((p) => p.id === form.packageId);

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          packageName: selectedPkg?.name || "Custom Tour",
          packagePrice: selectedPkg?.price || 0,
          source: "website-booking",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setBookingId(data.bookingId);
        setStep(4);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handlePayment = async () => {
    // Razorpay integration placeholder
    const res = await fetch("/api/payments/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId,
        amount: selectedPkg?.price || 5000,
        currency: "INR",
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: form.phone,
      }),
    });
    const data = await res.json();
    if (data.message) {
      alert(data.message);
    }
  };

  return (
    <div className="container mx-auto max-w-[900px] px-[15px]">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {["Select Package", "Your Details", "Review", "Confirmation"].map((label, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold transition-colors ${step > idx + 1 ? "bg-[#8eb93e] text-white" : step === idx + 1 ? "bg-[#8eb93e] text-white" : "bg-[#e1e1e1] text-[#999]"}`}>
              {step > idx + 1 ? <Check size={16} /> : idx + 1}
            </div>
            <span className={`hidden sm:block ml-2 font-body text-[13px] ${step === idx + 1 ? "text-[#191c14] font-bold" : "text-[#999]"}`}>{label}</span>
            {idx < 3 && <ChevronRight size={16} className="text-[#ccc] mx-2" />}
          </div>
        ))}
      </div>

      {/* Step 1: Select Package */}
      {step === 1 && (
        <div>
          <h2 className="font-display font-bold text-[24px] text-[#547721] uppercase mb-6 text-center">Choose Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setForm({ ...form, packageId: pkg.id })}
                className={`text-left p-5 rounded-[5px] border-2 transition-all ${form.packageId === pkg.id ? "border-[#8eb93e] bg-[#8eb93e]/5" : "border-[#e1e1e1] hover:border-[#8eb93e]/50"}`}
              >
                <h4 className="font-display font-semibold text-[14px] text-[#547721] uppercase mb-1">{pkg.name}</h4>
                <p className="text-[12px] text-[#666] mb-2">{pkg.duration}</p>
                <span className="font-bold text-[#8eb93e] text-[18px]">&#8377;{pkg.price.toLocaleString()}</span>
                <span className="text-[12px] text-[#999] ml-1">per person</span>
              </button>
            ))}
          </div>

          <h3 className="font-display font-bold text-[18px] text-[#547721] uppercase mb-4 text-center">Add Services (Optional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => {
                  const ids = form.serviceIds.includes(svc.id)
                    ? form.serviceIds.filter((s) => s !== svc.id)
                    : [...form.serviceIds, svc.id];
                  setForm({ ...form, serviceIds: ids });
                }}
                className={`text-left p-4 rounded-[5px] border-2 transition-all ${form.serviceIds.includes(svc.id) ? "border-[#8eb93e] bg-[#8eb93e]/5" : "border-[#e1e1e1] hover:border-[#8eb93e]/50"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${form.serviceIds.includes(svc.id) ? "bg-[#8eb93e] border-[#8eb93e]" : "border-[#ccc]"}`}>
                    {form.serviceIds.includes(svc.id) && <Check size={12} className="text-white" />}
                  </div>
                  <span className="font-display font-semibold text-[14px] text-[#191c14] uppercase">{svc.name}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep(2)}
              disabled={!form.packageId}
              className="bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[14px] px-10 py-4 rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Details
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Your Details */}
      {step === 2 && (
        <div>
          <h2 className="font-display font-bold text-[24px] text-[#547721] uppercase mb-6 text-center">Your Details</h2>
          <div className="max-w-[600px] mx-auto space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e]" />
              <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e]" />
              <div className="relative">
                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]" />
                <select value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })} className="w-full pl-10 pr-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] appearance-none">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <option key={n} value={n}>{n} {n === 1 ? "Traveler" : "Travelers"}</option>)}
                  <option value="10+">10+ (Group)</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]" />
              <input type="date" value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} className="w-full pl-10 pr-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e]" />
            </div>
            <textarea placeholder="Special Requests / Notes" rows={4} value={form.specialRequests} onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} className="w-full px-5 py-4 bg-[#f9f9f9] border border-[#e1e1e1] rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] resize-none" />
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="border border-[#e1e1e1] text-[#444] font-body font-bold uppercase text-[13px] px-8 py-3 rounded-[5px] hover:border-[#8eb93e] transition-colors">Back</button>
              <button
                onClick={() => { if (form.name && form.email && form.phone) setStep(3); }}
                className="bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[14px] px-10 py-3 rounded-[5px] transition-colors"
              >
                Review Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div>
          <h2 className="font-display font-bold text-[24px] text-[#547721] uppercase mb-6 text-center">Review Your Booking</h2>
          <div className="max-w-[600px] mx-auto bg-[#f9f9f9] p-8 rounded-[5px]">
            {selectedPkg && (
              <div className="mb-6 pb-6 border-b border-[#e1e1e1]">
                <h3 className="font-display font-bold text-[18px] text-[#547721] uppercase mb-2">{selectedPkg.name}</h3>
                <p className="text-[14px] text-[#666]">{selectedPkg.duration}</p>
                <p className="font-bold text-[#8eb93e] text-[24px] mt-2">&#8377;{selectedPkg.price.toLocaleString()} <span className="text-[14px] text-[#999] font-normal">per person</span></p>
                <p className="text-[14px] text-[#444] mt-1">{form.travelers} travelers = <strong>&#8377;{(selectedPkg.price * parseInt(form.travelers || "1")).toLocaleString()}</strong> (estimated)</p>
              </div>
            )}
            {form.serviceIds.length > 0 && (
              <div className="mb-6 pb-6 border-b border-[#e1e1e1]">
                <h4 className="font-display font-semibold text-[14px] text-[#191c14] uppercase mb-2">Added Services</h4>
                {form.serviceIds.map((sid) => {
                  const svc = services.find((s) => s.id === sid);
                  return <p key={sid} className="text-[14px] text-[#444] flex items-center gap-2"><Check size={14} className="text-[#8eb93e]" /> {svc?.name}</p>;
                })}
              </div>
            )}
            <div className="space-y-2 text-[14px]">
              <p className="flex items-center gap-2"><Users size={14} className="text-[#8eb93e]" /> <strong>{form.name}</strong></p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-[#8eb93e]" /> {form.email}</p>
              <p className="flex items-center gap-2"><Phone size={14} className="text-[#8eb93e]" /> {form.phone}</p>
              {form.travelDate && <p className="flex items-center gap-2"><Calendar size={14} className="text-[#8eb93e]" /> {form.travelDate}</p>}
              {form.specialRequests && <p className="text-[#666] mt-2"><strong>Notes:</strong> {form.specialRequests}</p>}
            </div>
            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(2)} className="border border-[#e1e1e1] text-[#444] font-body font-bold uppercase text-[13px] px-8 py-3 rounded-[5px] hover:border-[#8eb93e] transition-colors">Back</button>
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[14px] px-10 py-3 rounded-[5px] transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Submitting..." : "Confirm Booking"}
              </button>
            </div>
            {status === "error" && <p className="text-red-500 text-[14px] mt-4 text-center">Something went wrong. Please try again.</p>}
          </div>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="text-center">
          <div className="w-20 h-20 bg-[#8eb93e] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-white" />
          </div>
          <h2 className="font-display font-bold text-[28px] text-[#547721] uppercase mb-4">Booking Confirmed!</h2>
          <p className="font-body text-[16px] text-[#444] mb-2">Thank you, <strong>{form.name}</strong>!</p>
          <p className="font-body text-[14px] text-[#666] mb-2">Your booking reference: <strong className="text-[#8eb93e]">{bookingId}</strong></p>
          <p className="font-body text-[14px] text-[#666] mb-8">We&apos;ll send confirmation details to <strong>{form.email}</strong></p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePayment}
              className="bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[14px] px-10 py-4 rounded-[5px] transition-colors"
            >
              Pay Now (Razorpay)
            </button>
            <a href={`tel:${siteConfig.phoneRaw}`} className="border border-[#8eb93e] text-[#8eb93e] hover:bg-[#8eb93e] hover:text-white font-body font-bold uppercase text-[14px] px-8 py-4 rounded-[5px] transition-colors flex items-center gap-2">
              <Phone size={16} /> Call Us
            </a>
          </div>
          <p className="text-[13px] text-[#999] mt-6">Our team will contact you shortly to finalize the itinerary and payment details.</p>
        </div>
      )}
    </div>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative h-[250px] flex items-center justify-center overflow-hidden p-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9841f211-e10d-4120-8bc2-8dbe636e607b-tropicalvacations-in/assets/images/tr2-9.jpg')` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-display font-extrabold text-white text-[42px] uppercase tracking-[2px] mb-4">Book Your Tour</h1>
          <p className="text-[#8eb93e] font-display text-[16px] uppercase tracking-[3px]">{siteConfig.name}</p>
        </div>
      </section>
      <section className="py-[60px] bg-white">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <BookingForm />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}
