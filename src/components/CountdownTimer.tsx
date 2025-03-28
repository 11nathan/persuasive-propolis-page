
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours = 24, minutes = 0, seconds = 0 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft((prev) => ({
          ...prev,
          seconds: prev.seconds - 1,
        }));
      } else if (timeLeft.minutes > 0) {
        setTimeLeft((prev) => ({
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 59,
        }));
      } else if (timeLeft.hours > 0) {
        setTimeLeft((prev) => ({
          ...prev,
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="w-full bg-purple-100 py-4 px-6 rounded-lg">
      <div className="flex items-center justify-center gap-2 mb-2">
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="text-xl font-bold text-purple-600">¡Oferta Especial por Tiempo Limitado!</h3>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col items-center">
          <div className="bg-purple-600 text-white text-2xl font-bold rounded-lg w-16 h-16 flex items-center justify-center">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-xs mt-1 text-gray-600">Horas</span>
        </div>
        <div className="text-2xl font-bold text-purple-600">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-600 text-white text-2xl font-bold rounded-lg w-16 h-16 flex items-center justify-center">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-xs mt-1 text-gray-600">Minutos</span>
        </div>
        <div className="text-2xl font-bold text-purple-600">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-600 text-white text-2xl font-bold rounded-lg w-16 h-16 flex items-center justify-center">
            {formatTime(timeLeft.seconds)}
          </div>
          <span className="text-xs mt-1 text-gray-600">Segundos</span>
        </div>
      </div>
      <p className="text-center mt-4 font-medium text-purple-600">¡Aprovecha ahora y mejora tu salud naturalmente!</p>
    </div>
  );
};

export default CountdownTimer;
