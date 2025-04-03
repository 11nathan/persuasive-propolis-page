
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  boxImageSrc?: string; // We'll keep this in the interface but won't use it
  productType: 'herbal' | 'kids';
  benefits: string[];
  price: string;
  originalPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  boxImageSrc, // Keeping the parameter but not using it
  productType,
  benefits,
  price,
  originalPrice,
}) => {
  const cardGradient = productType === 'kids' 
    ? 'bg-gradient-to-br from-purple-50 to-purple-100' 
    : 'bg-gradient-to-br from-green-50 to-green-100';
  
  const accentColor = productType === 'kids' ? 'text-purple-600' : 'text-propolis-green';
  const buttonBg = productType === 'kids' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-propolis-green hover:bg-propolis-green/90';

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${cardGradient}`}>
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-64 object-contain p-4"
        />
        {originalPrice && (
          <Badge className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-bold">
            OFERTA ESPECIAL
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-2 ${accentColor}`}>{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <Star className="w-5 h-5 text-propolis-gold" fill="currentColor" />
            Beneficios:
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start bg-white/50 p-2 rounded-lg">
                <span className={`mr-2 ${accentColor} flex-shrink-0 mt-1`}>
                  <Check className="h-5 w-5" />
                </span>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col gap-4 mb-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold">{price}</span>
              {originalPrice && (
                <span className="text-gray-500 line-through ml-2">{originalPrice}</span>
              )}
            </div>
            {originalPrice && (
              <Badge className="bg-green-500 text-white">
                Ahorra {(() => {
                  const priceNum = parseFloat(price.replace('$', ''));
                  const originalPriceNum = parseFloat(originalPrice.replace('$', ''));
                  const discount = Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100);
                  return `${discount}%`;
                })()}
              </Badge>
            )}
          </div>
          <Button className={`${buttonBg} text-white px-6 py-7 rounded-full text-lg font-bold w-full animate-shake-hover flex gap-2 justify-center`}>
            <ShoppingCart className="w-5 h-5" />
            Comprar Ahora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
