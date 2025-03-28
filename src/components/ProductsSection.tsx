
import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  return (
    <section className="py-16 bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-yellow-50 text-propolis-gold px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Nuestra Selección
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Productos Naturales para tu Bienestar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el poder ancestral del propóleo combinado con hierbas naturales
            para el bienestar de toda tu familia.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="flex-1">
            <ProductCard 
              title="Propolis Biovital Herbal"
              description="Fórmula potente para adultos con propóleo puro, jengibre, aloe vera y eucalipto. Fortalece tu sistema inmune naturalmente."
              imageSrc="/lovable-uploads/b1d6f914-56bb-4b59-8da7-0167d8c9c357.png"
              boxImageSrc="/lovable-uploads/2196cd37-5ece-4380-8db8-8bf875d3346c.png"
              productType="herbal"
              benefits={[
                "Fortalece tu sistema inmunológico rápidamente",
                "Alivia la congestión respiratoria de forma natural",
                "Proporciona alivio para la garganta irritada",
                "Fórmula concentrada con ingredientes 100% naturales"
              ]}
              price="$24.99"
              originalPrice="$29.99"
            />
          </div>
          
          <div className="flex-1">
            <ProductCard 
              title="Propolis Biovital Kids"
              description="Formulado especialmente para niños con propóleo, jengibre y aloe vera en dosis adecuada y sabor agradable."
              imageSrc="/lovable-uploads/f621f23f-5a7e-4b43-ad96-b41a3ca58033.png"
              boxImageSrc="/lovable-uploads/438a6cca-ff56-40aa-9357-754bba17703e.png"
              productType="kids"
              benefits={[
                "Refuerza las defensas de los niños durante todo el año",
                "Alivia suavemente la congestión sin efectos secundarios",
                "Sabor agradable que les encantará, sin resistencia",
                "Sin conservantes artificiales, seguro para uso diario"
              ]}
              price="$22.99"
              originalPrice="$27.99"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
