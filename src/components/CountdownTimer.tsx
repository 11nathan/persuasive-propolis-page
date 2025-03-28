
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours, minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }
        
        const newMinutes = prev.minutes - 1;
        
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prev.hours - 1;
        
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        // If countdown is finished, reset to initial values
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(countdownInterval);
  }, [hours, minutes, seconds]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
      <div className="bg-red-50 inline-block px-4 py-1 rounded-full text-red-500 font-semibold mb-3">
        <Clock className="inline-block w-4 h-4 mr-1" /> Oferta por Tiempo Limitado
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">¡No Pierdas Esta Oportunidad!</h3>
      <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
        <span className="font-bold">20% de descuento</span> en todos nuestros productos de propóleo y envío gratuito en pedidos mayores a $50. ¡Esta oferta expira pronto!
      </p>
      
      <div className="flex justify-center space-x-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="bg-propolis-gold text-white text-3xl font-bold rounded-lg w-16 h-16 flex items-center justify-center shadow-md">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-sm mt-2 text-gray-600">Horas</span>
        </div>
        <div className="text-3xl font-bold text-gray-500 flex items-center">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-propolis-gold text-white text-3xl font-bold rounded-lg w-16 h-16 flex items-center justify-center shadow-md">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-sm mt-2 text-gray-600">Minutos</span>
        </div>
        <div className="text-3xl font-bold text-gray-500 flex items-center">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-propolis-gold text-white text-3xl font-bold rounded-lg w-16 h-16 flex items-center justify-center shadow-md animate-pulse-slow">
            {formatTime(timeLeft.seconds)}
          </div>
          <span className="text-sm mt-2 text-gray-600">Segundos</span>
        </div>
      </div>
      
      <button className="btn-cta py-4 px-10 text-lg animate-shake">
        ¡Aprovecha Ahora!
      </button>
      
      <p className="text-xs text-gray-500 mt-4">*Oferta válida hasta agotar existencias</p>
    </div>
  );
};

export default CountdownTimer;
