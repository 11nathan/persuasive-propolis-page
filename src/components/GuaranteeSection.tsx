
import React from 'react';
import { Shield } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-12 bg-white" id="garantia">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto bg-yellow-50 rounded-2xl p-8 shadow-md">
          <div className="bg-white rounded-full p-6 shadow-md">
            <Shield className="w-16 h-16 text-propolis-gold" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">100% Garantía de Satisfacción</h3>
            <p className="text-gray-600 text-lg mb-4">
              Estamos tan seguros de la calidad y efectividad de nuestros productos que ofrecemos una garantía 
              de devolución de dinero si no estás completamente satisfecho dentro de los primeros 30 días.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2 text-xs font-semibold">VERIFICADO</span>
              Más de 10,000 clientes satisfechos en toda España
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
