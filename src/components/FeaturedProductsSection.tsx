
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-propolis-green/10 text-propolis-green px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Nuestra Colección
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Descubre Toda Nuestra Línea de Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora toda nuestra gama de productos de propóleo para diferentes necesidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="/lovable-uploads/b1d6f914-56bb-4b59-8da7-0167d8c9c357.png" 
              alt="Propolis Herbal Botella" 
              className="h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-propolis-green text-center">Propolis Herbal (Botella)</h3>
            <p className="text-center text-gray-600 mb-4">Formato líquido para una absorción rápida</p>
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-propolis-green hover:underline font-medium">
                Ver detalles <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="/lovable-uploads/2aa9a1ab-9ea7-4fb0-a7b8-18183f38731e.png" 
              alt="Propolis Herbal Botellas" 
              className="h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-propolis-green text-center">Propolis Herbal (Pack)</h3>
            <p className="text-center text-gray-600 mb-4">Pack familiar para toda la temporada</p>
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-propolis-green hover:underline font-medium">
                Ver detalles <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="/lovable-uploads/f621f23f-5a7e-4b43-ad96-b41a3ca58033.png" 
              alt="Propolis Kids Botella" 
              className="h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-purple-600 text-center">Propolis Kids (Botella)</h3>
            <p className="text-center text-gray-600 mb-4">Fórmula especial para niños con sabor agradable</p>
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-purple-600 hover:underline font-medium">
                Ver detalles <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="/lovable-uploads/2196cd37-5ece-4380-8db8-8bf875d3346c.png" 
              alt="Propolis Herbal Caja" 
              className="h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-propolis-green text-center">Propóleo Herbal (Caja)</h3>
            <p className="text-center text-gray-600 mb-4">Presentación en caja para mejor conservación</p>
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-propolis-green hover:underline font-medium">
                Ver detalles <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="/lovable-uploads/438a6cca-ff56-40aa-9357-754bba17703e.png" 
              alt="Propóleo Kids Caja" 
              className="h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-purple-600 text-center">Propóleo Kids (Caja)</h3>
            <p className="text-center text-gray-600 mb-4">Formato en caja para mayor duración</p>
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-purple-600 hover:underline font-medium">
                Ver detalles <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="/lovable-uploads/2aa9a1ab-9ea7-4fb0-a7b8-18183f38731e.png" 
              alt="Pack Familiar" 
              className="h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-propolis-gold text-center">Pack Familiar</h3>
            <p className="text-center text-gray-600 mb-4">Productos para toda la familia a precio especial</p>
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-propolis-gold hover:underline font-medium">
                Ver detalles <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
