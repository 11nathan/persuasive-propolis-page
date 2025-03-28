
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              La Potencia Natural del <span className="text-propolis-green">Propóleo</span> para Tu Salud
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubre nuestros productos 100% naturales a base de propóleo, 
              formulados con ingredientes seleccionados para fortalecer tu sistema inmunológico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-propolis-green hover:bg-propolis-green/90 text-white px-8 py-3 rounded-full font-bold text-lg"
              >
                Ver Productos
              </Button>
              <Button
                variant="outline"
                className="border-propolis-green text-propolis-green hover:bg-propolis-green/10 px-8 py-3 rounded-full font-bold text-lg"
              >
                Acerca de Nosotros
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] animate-float">
              <img
                src="/lovable-uploads/c76f0e44-13e4-4d57-8c44-3bf03d836714.png"
                alt="Propóleo Natural"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="bg-green-500 rounded-full w-3 h-3"></span>
                <span className="font-medium">100% Ingredientes Naturales</span>
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
