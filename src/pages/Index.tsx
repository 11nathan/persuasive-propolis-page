
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import TimerSection from "../components/TimerSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GuaranteeSection from "../components/GuaranteeSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* Countdown Timer Section */}
      <TimerSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Featured Products Section */}
      <FeaturedProductsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Guarantee Section */}
      <GuaranteeSection />
      
      {/* Call to Action Section */}
      <CallToAction />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
