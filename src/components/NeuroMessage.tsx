"use client";

import { useState, useEffect } from "react";

export default function NeuroMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      {/* Efecto de fondo con círculos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Contenedor principal */}
      <div className={`relative z-10 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Título principal */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            BLOQUEARON
          </span>
        </h1>

        {/* Segundo título */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            SUS NEURONAS
          </span>
        </h2>

        {/* Línea decorativa */}
        <div className="w-64 md:w-96 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/50"></div>

        {/* Subtítulo o mensaje adicional */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Una declaración que resuena en el tiempo
        </p>

        {/* Efectos de partículas simuladas */}
        <div className="absolute -top-10 -left-10 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute -bottom-10 -right-10 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75 delay-1000"></div>
        <div className="absolute top-1/2 -left-16 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75 delay-2000"></div>
        <div className="absolute top-1/4 -right-16 w-5 h-5 bg-purple-300 rounded-full animate-ping opacity-75 delay-3000"></div>
      </div>

      {/* Footer sutil */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}>
        <p className="text-gray-500 text-sm">
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}