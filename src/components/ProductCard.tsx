
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  productType: 'herbal' | 'kids';
  benefits: string[];
  price: string;
  originalPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
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
    <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${cardGradient}`}>
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-64 object-contain p-4"
        />
        {originalPrice && (
          <Badge className="absolute top-4 right-4 bg-red-500 text-white">
            OFERTA
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-2 ${accentColor}`}>{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold mb-2">Beneficios:</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className={`mr-2 ${accentColor} flex-shrink-0 mt-1`}>
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold">{price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through ml-2">{originalPrice}</span>
            )}
          </div>
          <Button className={`${buttonBg} text-white px-6 rounded-full`}>
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
