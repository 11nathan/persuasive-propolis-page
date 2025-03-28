
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src="/lovable-uploads/36f63f21-f63b-4564-894d-d018f566f678.png" 
                alt="Biovital - The Honey Power" 
                className="h-24 md:h-32"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block">Refuerza tus Defensas</span> 
              <span className="text-propolis-green">Naturalmente</span> 
              <span className="block text-propolis-gold">con Propóleo Puro</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubre el poder ancestral de la naturaleza en cada gota. 
              <span className="font-semibold"> ¡100% natural, 100% efectivo!</span> 
              Fórmulas especiales para toda la familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-propolis-green hover:bg-propolis-green/90 text-white px-8 py-6 rounded-full font-bold text-lg animate-shake-hover flex items-center gap-2"
                onClick={scrollToProducts}
              >
                <ShoppingCart className="w-5 h-5" />
                Ver Productos
              </Button>
              <Button
                variant="outline"
                className="border-propolis-green text-propolis-green hover:bg-propolis-green/10 px-8 py-6 rounded-full font-bold text-lg flex items-center gap-2"
                onClick={scrollToProducts}
              >
                Descubrir Beneficios
                <ArrowDown className="w-5 h-5" />
              </Button>
            </div>
            <div className="mt-8 inline-block bg-yellow-50 px-4 py-2 rounded-full text-sm font-medium text-propolis-gold border border-propolis-gold/30 animate-pulse-slow">
              ¡Envío gratis en compras mayores a $50!
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] animate-float flex justify-center items-center">
              <img
                src="/lovable-uploads/842a496f-9e46-4629-8652-75aad227a67b.png"
                alt="Propóleo Natural"
                className="object-contain w-full h-full max-w-xs md:max-w-sm"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="bg-green-500 rounded-full w-3 h-3"></span>
                <span className="font-medium text-propolis-green">100% Ingredientes Naturales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
