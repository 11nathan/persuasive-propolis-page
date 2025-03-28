
import React from "react";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import CountdownTimer from "@/components/CountdownTimer";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Productos Destacados
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
                description="Fórmula potente para adultos con propóleo puro, jengibre, aloe vera y eucalipto."
                imageSrc="/lovable-uploads/405c3428-db81-4adf-b1d9-41d9c69ed616.png"
                productType="herbal"
                benefits={[
                  "Fortalece el sistema inmunológico",
                  "Alivia la congestión del pecho",
                  "Proporciona alivio natural",
                  "100% ingredientes naturales"
                ]}
                price="$24.99"
                originalPrice="$29.99"
              />
            </div>
            
            <div className="flex-1">
              <ProductCard 
                title="Propolis Biovital Kids"
                description="Especialmente formulado para niños, con propóleo, jengibre y aloe vera en una dosis adecuada."
                imageSrc="/lovable-uploads/4deffe80-c824-4e0a-86d0-114403fba853.png"
                productType="kids"
                benefits={[
                  "Refuerza las defensas de los niños",
                  "Alivia suavemente la congestión",
                  "Sabor agradable que les encantará",
                  "Sin aditivos artificiales para su seguridad"
                ]}
                price="$22.99"
                originalPrice="$27.99"
              />
            </div>
          </div>
        </div>
      </section>
      
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
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personas como tú que han experimentado los beneficios de Propolis Biovital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard 
              name="María García"
              testimonial="Propolis Biovital Herbal ha sido un cambio radical para mi sistema inmunológico. Lo tomo cada mañana y me siento con mucha más energía y resistencia."
              stars={5}
              product="herbal"
            />
            
            <TestimonialCard 
              name="Juan Rodríguez"
              testimonial="Como padre, me preocupo por lo que doy a mis hijos. Propolis Biovital Kids es lo único que uso cuando están congestionados. ¡Es natural y funciona!"
              stars={5}
              product="kids"
            />
            
            <TestimonialCard 
              name="Laura Mendoza"
              testimonial="He probado muchos productos similares, pero ninguno como Propolis Biovital. La combinación de propóleo con hierbas hace toda la diferencia."
              stars={4}
              product="herbal"
            />
            
            <TestimonialCard 
              name="Pedro Sánchez"
              testimonial="Mi hijo odiaba tomar jarabes para la tos, hasta que descubrimos Propolis Biovital Kids. Le encanta el sabor y yo estoy tranquilo porque es natural."
              stars={5}
              product="kids"
            />
            
            <TestimonialCard 
              name="Carmen Vega"
              testimonial="Desde que uso Propolis Biovital Herbal, mis alergias estacionales han mejorado notablemente. ¡Lo recomiendo absolutamente!"
              stars={5}
              product="herbal"
            />
            
            <TestimonialCard 
              name="Miguel Torres"
              testimonial="El sistema inmunológico de mi hija se ha fortalecido mucho desde que comenzamos a usar Propolis Biovital Kids. Ahora rara vez se enferma."
              stars={4}
              product="kids"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-propolis-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comienza tu Viaje Hacia una Salud Natural
            </h2>
            <p className="text-xl mb-8">
              Únete a miles de personas que han mejorado su salud con Propolis Biovital. 
              Tu bienestar y el de tu familia merecen lo mejor de la naturaleza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cta flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Comprar Ahora
              </button>
              <button className="bg-white text-propolis-green hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Ir a la Tienda
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="bg-yellow-50 rounded-full p-6">
              <svg className="w-16 h-16 text-propolis-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">100% Garantía de Satisfacción</h3>
              <p className="text-gray-600 text-lg">
                Estamos tan seguros de la calidad y efectividad de nuestros productos que ofrecemos una garantía 
                de devolución de dinero si no estás completamente satisfecho dentro de los primeros 30 días.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Propolis Biovital</h2>
            <p className="mb-6">La naturaleza en su máxima expresión para tu salud</p>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="hover:text-propolis-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-propolis-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-propolis-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Propolis Biovital. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
