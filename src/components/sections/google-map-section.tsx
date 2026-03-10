import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

/**
 * GoogleMapSection Component
 * 
 * Displays the Manjjari Holidays Google Maps business location
 * with contact information alongside the map embed.
 */
const GoogleMapSection = () => {
    return (
        <section className="py-16 bg-[#f5f5f0]">
            <div className="container mx-auto max-w-[1200px] px-[15px]">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-display font-bold text-[32px] text-[#547721] uppercase mb-3">
                        Find Us
                    </h2>
                    <div className="w-16 h-[3px] bg-[#8eb93e] mx-auto mb-4" />
                    <p className="font-body text-[16px] text-[#666] max-w-[500px] mx-auto">
                        Visit our office or reach out to plan your dream tour
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Card */}
                    <div className="lg:col-span-1 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 flex flex-col justify-center">
                        <h3 className="font-display font-bold text-[20px] text-[#547721] uppercase mb-6">
                            {siteConfig.name}
                        </h3>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={18} className="text-[#8eb93e]" />
                                </div>
                                <div>
                                    <p className="font-body text-[14px] text-[#444] leading-[1.6]">
                                        {siteConfig.address.line1},<br />
                                        {siteConfig.address.line2},<br />
                                        {siteConfig.address.line3}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone size={18} className="text-[#8eb93e]" />
                                </div>
                                <a
                                    href={`tel:${siteConfig.phoneRaw}`}
                                    className="font-body text-[14px] text-[#444] hover:text-[#8eb93e] transition-colors"
                                >
                                    {siteConfig.phone}
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-[#8eb93e]" />
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href={`mailto:${siteConfig.bookingEmail}`}
                                        className="font-body text-[14px] text-[#444] hover:text-[#8eb93e] transition-colors"
                                    >
                                        {siteConfig.bookingEmail}
                                    </a>
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="font-body text-[13px] text-[#888] hover:text-[#8eb93e] transition-colors mt-0.5"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#8eb93e]/10 rounded-full flex items-center justify-center shrink-0">
                                    <Clock size={18} className="text-[#8eb93e]" />
                                </div>
                                <div>
                                    <p className="font-body text-[14px] text-[#444]">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="font-body text-[13px] text-[#888]">Sun: By Appointment</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={`https://wa.me/${siteConfig.whatsappRaw}?text=Hi%20Manjjari%20Holidays%2C%20I%20want%20to%20know%20more%20about%20your%20tour%20packages.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fba59] text-white font-body font-bold uppercase text-[13px] px-6 py-3 rounded-[5px] transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] min-h-[350px] lg:min-h-[400px]">
                        <iframe
                            src={siteConfig.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "350px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Manjjari Holidays - Office Location"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleMapSection;
