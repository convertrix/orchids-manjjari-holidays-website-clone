"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { packages, services, siteConfig } from "@/lib/config";
import { Check, ChevronRight, Users, Calendar, Phone, Mail, MapPin, Shield, MessageCircle } from "lucide-react";

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
  const [tokenAmount, setTokenAmount] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedPkg) setStep(2);
  }, [preselectedPkg]);

  const selectedPkg = packages.find((p) => p.id === form.packageId);

  // Calculate token amount
  const calculateTokenAmount = () => {
    if (!selectedPkg) return 0;
    const total = selectedPkg.price * parseInt(form.travelers || "1");
    return Math.ceil((total * siteConfig.tokenPercentage) / 100);
  };

  // Validate form fields
  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.name || form.name.length < 2) newErrors.name = "Name is required (min 2 characters)";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.phone || !/^[\+]?[0-9\s\-()]{10,15}$/.test(form.phone.replace(/\s/g, ""))) newErrors.phone = "Valid phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
      if (res.ok && data.success) {
        setStatus("success");
        setBookingId(data.bookingId);
        setTokenAmount(data.tokenAmount);
        setStep(4);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/payments/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId,
          tokenAmount: tokenAmount || calculateTokenAmount(),
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
        }),
      });
      const data = await res.json();
      if (data.success && data.paymentUrl) {
        // Redirect to PhonePe payment page
        window.location.href = data.paymentUrl;
      } else if (data.configured === false) {
        // Payment gateway not yet configured — show friendly message
        alert(data.message || "Payment gateway is being set up. Please use WhatsApp to complete payment.");
      } else {
        alert(data.message || "Payment initiation failed. Please try again.");
      }
    } catch {
      alert("Payment service temporarily unavailable. Please contact us on WhatsApp.");
    }
  };

  const getWhatsAppUrl = () => {
    const pkg = selectedPkg;
    const total = pkg ? pkg.price * parseInt(form.travelers || "1") : 0;
    const token = tokenAmount || calculateTokenAmount();
    const message = encodeURIComponent(
      `Hi Manjjari Holidays! 🌿\n\n` +
      `I've made a booking:\n` +
      `📋 Booking ID: ${bookingId}\n` +
      `🏕️ Package: ${pkg?.name || "Custom Tour"}\n` +
      `👥 Travelers: ${form.travelers}\n` +
      `📅 Date: ${form.travelDate || "Flexible"}\n` +
      `💰 Total: ₹${total.toLocaleString()}\n` +
      `💳 Token Amount: ₹${token.toLocaleString()}\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\n\n` +
      `Please help me finalize my tour package. Thank you!`
    );
    return `https://wa.me/${siteConfig.whatsappRaw}?text=${message}`;
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
                className={`text-left p-4 rounded-[8px] border-2 transition-all flex gap-4 items-start ${form.packageId === pkg.id ? "border-[#8eb93e] bg-[#8eb93e]/5 shadow-md" : "border-[#e1e1e1] hover:border-[#8eb93e]/50"}`}
              >
                {/* Package Thumbnail */}
                <div className="relative w-20 h-20 rounded-[5px] overflow-hidden shrink-0">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-semibold text-[14px] text-[#547721] uppercase mb-1 truncate">{pkg.name}</h4>
                  <p className="text-[12px] text-[#666] mb-1">{pkg.duration}</p>
                  <span className="font-bold text-[#8eb93e] text-[18px]">&#8377;{pkg.price.toLocaleString()}</span>
                  <span className="text-[11px] text-[#999] ml-1">per person</span>
                </div>
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
                className={`text-left p-4 rounded-[8px] border-2 transition-all flex items-center gap-4 ${form.serviceIds.includes(svc.id) ? "border-[#8eb93e] bg-[#8eb93e]/5" : "border-[#e1e1e1] hover:border-[#8eb93e]/50"}`}
              >
                {/* Service Thumbnail */}
                <div className="relative w-14 h-14 rounded-[5px] overflow-hidden shrink-0">
                  <Image src={svc.image} alt={svc.name} fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${form.serviceIds.includes(svc.id) ? "bg-[#8eb93e] border-[#8eb93e]" : "border-[#ccc]"}`}>
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
              <div>
                <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }} className={`w-full px-5 py-4 bg-[#f9f9f9] border rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] ${errors.name ? "border-red-400" : "border-[#e1e1e1]"}`} />
                {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
              </div>
              <div>
                <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }} className={`w-full px-5 py-4 bg-[#f9f9f9] border rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] ${errors.email ? "border-red-400" : "border-[#e1e1e1]"}`} />
                {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }} className={`w-full px-5 py-4 bg-[#f9f9f9] border rounded-[5px] font-body text-[14px] focus:outline-none focus:border-[#8eb93e] ${errors.phone ? "border-red-400" : "border-[#e1e1e1]"}`} />
                {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>}
              </div>
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
                onClick={() => { if (validateStep2()) setStep(3); }}
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
          <div className="max-w-[600px] mx-auto bg-[#f9f9f9] p-8 rounded-[8px]">
            {selectedPkg && (
              <div className="mb-6 pb-6 border-b border-[#e1e1e1]">
                <div className="flex gap-4 items-start mb-3">
                  <div className="relative w-16 h-16 rounded overflow-hidden shrink-0">
                    <Image src={selectedPkg.image} alt={selectedPkg.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[18px] text-[#547721] uppercase">{selectedPkg.name}</h3>
                    <p className="text-[14px] text-[#666]">{selectedPkg.duration}</p>
                  </div>
                </div>
                <p className="text-[14px] text-[#444] mt-2">
                  {form.travelers} travelers × &#8377;{selectedPkg.price.toLocaleString()} = <strong>&#8377;{(selectedPkg.price * parseInt(form.travelers || "1")).toLocaleString()}</strong> (total)
                </p>
                {/* Token Amount Highlight */}
                <div className="mt-3 p-4 bg-[#8eb93e]/10 border border-[#8eb93e]/20 rounded-[5px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={16} className="text-[#8eb93e]" />
                    <span className="font-bold text-[#547721] text-[14px] uppercase">Token Amount to Pay Now</span>
                  </div>
                  <p className="font-bold text-[#8eb93e] text-[28px]">&#8377;{calculateTokenAmount().toLocaleString()}</p>
                  <p className="text-[12px] text-[#666]">{siteConfig.tokenPercentage}% advance • Remaining payable after tour confirmation via WhatsApp</p>
                </div>
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
          <p className="font-body text-[14px] text-[#666] mb-2">We&apos;ll send confirmation details to <strong>{form.email}</strong></p>

          {/* Token Amount Display */}
          {selectedPkg && (
            <div className="max-w-[400px] mx-auto mt-6 p-5 bg-[#f9f9f9] rounded-[8px] border border-[#e1e1e1]">
              <p className="text-[14px] text-[#444] mb-1">Token Amount (Advance):</p>
              <p className="font-bold text-[#8eb93e] text-[32px]">&#8377;{(tokenAmount || calculateTokenAmount()).toLocaleString()}</p>
              <p className="text-[12px] text-[#999]">Remaining amount to be discussed on WhatsApp</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={handlePayment}
              className="bg-[#8eb93e] hover:bg-[#191c14] text-white font-body font-bold uppercase text-[14px] px-8 py-4 rounded-[5px] transition-colors flex items-center justify-center gap-2"
            >
              <Shield size={18} />
              Pay Token &#8377;{(tokenAmount || calculateTokenAmount()).toLocaleString()}
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1fba59] text-white font-body font-bold uppercase text-[14px] px-8 py-4 rounded-[5px] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="border border-[#8eb93e] text-[#8eb93e] hover:bg-[#8eb93e] hover:text-white font-body font-bold uppercase text-[14px] px-8 py-4 rounded-[5px] transition-colors flex items-center justify-center gap-2">
              <Phone size={16} /> Call Us
            </a>
          </div>
          <p className="text-[13px] text-[#999] mt-6 max-w-[500px] mx-auto">
            💡 <strong>How it works:</strong> Pay the token amount to secure your booking, then connect with us on WhatsApp to finalize your tour package, itinerary, and remaining payment.
          </p>
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
