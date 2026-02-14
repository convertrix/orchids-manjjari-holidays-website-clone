"use client";

import Header from "@/components/sections/header";
import HeroSlider from "@/components/sections/hero-slider";
import ProductCategories from "@/components/sections/product-categories";
import WelcomeAboutSection from "@/components/sections/welcome-about";
import EcoToursBanner from "@/components/sections/eco-tours-banner";
import OdishaTourGrid from "@/components/sections/odisha-tour-grid";
import ChhattisgarhIndiaTours from "@/components/sections/chhattisgarh-india-tours";
import ServicesSection from "@/components/sections/services";
import ClientTestimonials from "@/components/sections/client-testimonials";
import VideoTestimonials from "@/components/sections/video-testimonials";
import VacationCTA from "@/components/sections/vacation-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <ProductCategories />
      <WelcomeAboutSection />
      <EcoToursBanner />
      <OdishaTourGrid />
      <ChhattisgarhIndiaTours />
      <ServicesSection />
      <ClientTestimonials />
      <VideoTestimonials />
      <VacationCTA />
      <Footer />
    </div>
  );
}
