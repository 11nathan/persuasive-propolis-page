
import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  productType: "kids" | "herbal";
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
  const bgColor = productType === "kids" ? "bg-purple-50" : "bg-green-50";
  const borderColor = productType === "kids" ? "border-purple-200" : "border-green-200";
  const buttonBg = productType === "kids" ? "bg-purple-600" : "bg-green-600";
  const buttonHoverBg = productType === "kids" ? "hover:bg-purple-700" : "hover:bg-green-700";
  const iconColor = productType === "kids" ? "text-purple-600" : "text-green-600";

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden border-2 ${borderColor} ${bgColor} transition-all duration-300 hover:shadow-xl`}>
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full object-contain h-64 p-4"
        />
        {originalPrice && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold py-1 px-3 rounded-full text-sm transform rotate-12">
            ¡OFERTA!
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold mb-2 flex items-center">
            <svg className={`w-5 h-5 mr-2 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Beneficios:
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            {originalPrice && (
              <span className="text-gray-500 line-through mr-2">{originalPrice}</span>
            )}
            <span className="text-2xl font-bold">{price}</span>
          </div>
        </div>
        
        <button className={`w-full py-3 px-4 ${buttonBg} ${buttonHoverBg} text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 shadow-lg mb-2`}>
          Comprar Ahora
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
