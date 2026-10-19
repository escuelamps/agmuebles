import React, { useState } from 'react';
import { shopTheLookHotspots } from '../data/products';

export const ShopTheLook = ({ onSelectProduct }) => {
  const look = shopTheLookHotspots[0];
  const [activePin, setActivePin] = useState(null);

  return (
    <section id="shop-the-look" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0B605] block mb-2">
            Inspiración Castlery &bull; Estilo AG
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2F34] tracking-tight">
            Shop The Look &bull; Espacios Integrados
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Toca o haz clic sobre los puntos luminosos para descubrir cada elemento fabricado a medida en esta residencia.
          </p>
        </div>

        {/* Contenedor Interactivo con Hotspots */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-100 max-w-5xl mx-auto">
          <img 
            src={look.bgImage} 
            alt={look.roomTitle}
            className="w-full h-[450px] sm:h-[550px] lg:h-[620px] object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

          {/* Información del Espacio */}
          <div className="absolute bottom-6 left-6 text-white max-w-md hidden sm:block pointer-events-none">
            <span className="text-xs uppercase tracking-widest text-[#F0D030] font-bold block mb-1">
              Ambiente Interactivo
            </span>
            <h3 className="text-2xl font-bold">{look.roomTitle}</h3>
            <p className="text-xs text-gray-300 mt-1">{look.roomDesc}</p>
          </div>

          {/* Hotspots interactivos (+) */}
          {look.pins.map((pin) => {
            const isActive = activePin?.id === pin.id;

            return (
              <div 
                key={pin.id}
                style={{ top: pin.y, left: pin.x }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                {/* Pin pulsante */}
                <button
                  onClick={() => setActivePin(isActive ? null : pin)}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                    isActive 
                      ? 'bg-[#F0D030] text-[#2C2F34] scale-110 ring-4 ring-white/80' 
                      : 'bg-white/95 text-[#2C2F34] hover:bg-[#F0D030] hover:scale-105'
                  }`}
                  aria-label={`Ver ${pin.title}`}
                >
                  <span className="font-black text-base sm:text-lg leading-none">+</span>
                  {/* Onda de pulso animada */}
                  {!isActive && (
                    <span className="absolute w-full h-full rounded-full bg-white/60 animate-ping pointer-events-none"></span>
                  )}
                </button>

                {/* Tarjeta flotante emergente */}
                {isActive && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 sm:left-full sm:translate-x-3 sm:bottom-auto sm:-top-8 w-64 bg-white rounded-2xl shadow-2xl p-3 z-30 animate-fadeIn border border-gray-100 text-left">
                    <div className="relative h-28 w-full rounded-xl overflow-hidden mb-2.5 bg-gray-100">
                      <img 
                        src={pin.image} 
                        alt={pin.title} 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePin(null);
                        }}
                        className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs font-bold hover:bg-black"
                      >
                        &times;
                      </button>
                    </div>

                    <span className="text-[10px] font-bold text-[#E0B605] uppercase tracking-wider block">
                      {pin.category}
                    </span>
                    <h4 className="font-bold text-sm text-[#2C2F34] leading-tight mb-1">
                      {pin.title}
                    </h4>
                    <span className="font-extrabold text-sm text-[#2C2F34] block mb-2.5">
                      {pin.price}
                    </span>

                    <button
                      onClick={() => {
                        onSelectProduct(pin.productId);
                        setActivePin(null);
                      }}
                      className="w-full bg-[#2C2F34] hover:bg-[#1A1C1F] text-white py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors text-center"
                    >
                      Ver Opciones & Medidas
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
