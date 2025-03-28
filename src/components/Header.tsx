
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/36f63f21-f63b-4564-894d-d018f566f678.png" 
              alt="Biovital - The Honey Power" 
              className="h-10"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollTo('products')}
              className="text-gray-700 hover:text-propolis-green font-medium transition-colors"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollTo('beneficios')}
              className="text-gray-700 hover:text-propolis-green font-medium transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollTo('testimonios')}
              className="text-gray-700 hover:text-propolis-green font-medium transition-colors"
            >
              Testimonios
            </button>
          </nav>
          
          <Button 
            className="bg-propolis-green hover:bg-propolis-green/90 text-white rounded-full flex items-center gap-2"
            onClick={() => scrollTo('products')}
          >
            <ShoppingCart className="w-4 h-4" />
            Comprar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
