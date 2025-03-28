
import React from 'react';
import { Shield, Sun, Leaf, Heart, Award, Star } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-propolis-green" />,
      title: "Fortalece tu Sistema Inmunológico",
      description: "El propóleo contiene componentes bioactivos que ayudan a fortalecer las defensas naturales del cuerpo contra agentes externos."
    },
    {
      icon: <Sun className="w-12 h-12 text-propolis-gold" />,
      title: "100% Natural",
      description: "Elaboramos nuestros productos con ingredientes naturales de alta calidad, sin aditivos artificiales ni conservantes dañinos."
    },
    {
      icon: <Leaf className="w-12 h-12 text-propolis-green" />,
      title: "Poder Herbal Combinado",
      description: "Combinamos el propóleo con extractos herbales cuidadosamente seleccionados que potencian sus beneficios para la salud."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Para Toda la Familia",
      description: "Ofrecemos formulaciones específicas tanto para adultos como para niños, adaptadas a las necesidades de cada grupo de edad."
    },
    {
      icon: <Award className="w-12 h-12 text-propolis-gold" />,
      title: "Calidad Certificada",
      description: "Todos nuestros productos pasan por rigurosos controles de calidad para garantizar su efectividad y seguridad."
    },
    {
      icon: <Star className="w-12 h-12 text-propolis-purple" />,
      title: "Tradición y Experiencia",
      description: "Contamos con años de experiencia en la elaboración de productos naturales basados en el propóleo y sus beneficios."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-green-50 text-propolis-green px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Los Beneficios del Propóleo de Biovital</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros productos combinan lo mejor de la naturaleza con la ciencia moderna para ofrecerte soluciones efectivas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center h-full">
              <div className="mb-4 p-3 rounded-full bg-gray-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
