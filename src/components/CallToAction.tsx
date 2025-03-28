
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Calendar } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-propolis-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Actúa Ahora
          </span>
          <h2 className="text-3xl md:text-4xl font-bold my-6">
            Comienza tu Viaje Hacia una Salud Natural
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de personas que han mejorado su salud con Propolis Biovital. 
            Tu bienestar y el de tu familia merecen lo mejor de la naturaleza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-propolis-gold hover:bg-propolis-gold/90 text-white px-8 py-7 rounded-full text-lg font-bold animate-shake-hover flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Comprar Ahora
            </Button>
            <Button className="bg-white text-propolis-green hover:bg-gray-100 font-bold py-7 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Ir a la Tienda
            </Button>
          </div>
          
          <div className="mt-8 text-white/80 text-sm">
            Envío gratuito en pedidos superiores a $50 • Entrega en 24/48h • Pago 100% seguro
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
