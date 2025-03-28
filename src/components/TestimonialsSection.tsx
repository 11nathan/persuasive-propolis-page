
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-propolis-gold/10 text-propolis-gold px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Experiencias Reales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personas como tú que han experimentado los beneficios de Propolis Biovital en su día a día.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard 
            name="María García"
            testimonial="Propolis Biovital Herbal ha sido un cambio radical para mi sistema inmunológico. Lo tomo cada mañana y me siento con mucha más energía y resistencia durante todo el día."
            stars={5}
            product="herbal"
            location="Madrid, España"
            purchaseDate="15/03/2023"
          />
          
          <TestimonialCard 
            name="Juan Rodríguez"
            testimonial="Como padre, me preocupo por lo que doy a mis hijos. Propolis Biovital Kids es lo único que uso cuando están congestionados. ¡Es natural y funciona de verdad!"
            stars={5}
            product="kids"
            location="Barcelona, España"
            purchaseDate="22/05/2023"
          />
          
          <TestimonialCard 
            name="Laura Mendoza"
            testimonial="He probado muchos productos similares, pero ninguno como Propolis Biovital. La combinación de propóleo con hierbas hace toda la diferencia para mantenerme saludable."
            stars={4}
            product="herbal"
            location="Valencia, España"
            purchaseDate="10/02/2023"
          />
          
          <TestimonialCard 
            name="Pedro Sánchez"
            testimonial="Mi hijo odiaba tomar jarabes para la tos, hasta que descubrimos Propolis Biovital Kids. Le encanta el sabor y yo estoy tranquilo porque es completamente natural."
            stars={5}
            product="kids"
            location="Sevilla, España"
            purchaseDate="05/04/2023"
          />
          
          <TestimonialCard 
            name="Carmen Vega"
            testimonial="Desde que uso Propolis Biovital Herbal, mis alergias estacionales han mejorado notablemente. Lo uso durante todo el año y noto una gran diferencia. ¡Lo recomiendo absolutamente!"
            stars={5}
            product="herbal"
            location="Bilbao, España"
            purchaseDate="18/06/2023"
          />
          
          <TestimonialCard 
            name="Miguel Torres"
            testimonial="El sistema inmunológico de mi hija se ha fortalecido mucho desde que comenzamos a usar Propolis Biovital Kids. Ahora rara vez se enferma y cuando lo hace, se recupera mucho más rápido."
            stars={4}
            product="kids"
            location="Zaragoza, España"
            purchaseDate="30/01/2023"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
