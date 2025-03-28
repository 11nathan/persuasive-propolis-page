
import React from "react";

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  stars: number;
  product: "kids" | "herbal";
  location?: string;
  purchaseDate?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  testimonial,
  stars,
  product,
  location = "Cliente verificado",
  purchaseDate,
}) => {
  const cardGradient = product === "kids" 
    ? "bg-gradient-to-br from-purple-50 to-purple-100" 
    : "bg-gradient-to-br from-green-50 to-green-100";
    
  const avatarBackground = product === "kids" ? "bg-purple-600" : "bg-green-600";

  return (
    <div className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cardGradient}`}>
      <div className="mb-3">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < stars ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          {purchaseDate && (
            <span className="text-xs text-gray-500 ml-2 mt-1">Compra verificada el {purchaseDate}</span>
          )}
        </div>
      </div>
      
      <p className="text-gray-700 italic mb-4">"{testimonial}"</p>
      
      <div className="flex items-center mt-4">
        <div className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center ${avatarBackground} text-white font-bold`}>
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <div className="text-xs text-gray-500">{location}</div>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-right">
        <span className={product === "kids" ? "text-purple-600" : "text-propolis-green"}>
          Usuario de {product === "kids" ? "Propolis Biovital Kids" : "Propolis Biovital Herbal"}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
