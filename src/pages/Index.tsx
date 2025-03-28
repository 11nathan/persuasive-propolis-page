
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import CountdownTimer from "../components/CountdownTimer";
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
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <CountdownTimer hours={23} minutes={59} seconds={59} />
          </div>
        </div>
      </section>
      
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
