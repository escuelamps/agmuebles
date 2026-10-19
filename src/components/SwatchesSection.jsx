import React, { useState } from 'react';
import { materialSwatches } from '../data/products';

export const SwatchesSection = ({ selectedSwatches, onToggleSwatch, onOpenConsultation }) => {
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    if (selectedSwatches.length === 0) {
      alert('Por favor selecciona al menos 1 muestra para solicitar tu kit.');
      return;
    }
    const names = selectedSwatches.map(s => s.name).join(', ');
    const url = `https://wa.me/573000000000?text=${encodeURIComponent(
      `¡Hola AG Muebles! Quiero solicitar el kit de muestras físicas a domicilio para los acabados: ${names}. ¿A qué dirección puedo enviar mis datos de entrega?`
    )}`;
    window.open(url, '_blank');
    setOrdered(true);
  };

  return (
    <section id="muestras" className="py-20 bg-[#F9FAFB] border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0B605] block mb-2">
              Toca la Calidad en Casa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C2F34] tracking-tight">
              Solicita Tu Kit de Muestras Físicas
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Elige hasta 3 muestras de maderas nobles, lacas poliuretano o piedras para comprobar texturas y tonos bajo la luz de tu hogar.
            </p>
          </div>

          {/* Grid de Swatches Interactivos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {materialSwatches.map((swatch) => {
              const isSelected = selectedSwatches.some(s => s.id === swatch.id);

              return (
                <div
                  key={swatch.id}
                  onClick={() => onToggleSwatch(swatch)}
                  className={`cursor-pointer rounded-2xl p-3 border-2 transition-all flex flex-col items-center text-center relative ${
                    isSelected 
                      ? 'border-[#2C2F34] bg-gray-50 ring-2 ring-[#F0D030] shadow-md scale-105' 
                      : 'border-gray-200 hover:border-gray-400 bg-white'
                  }`}
                >
                  {/* Checkmark */}
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#F0D030] text-[#2C2F34] text-xs font-black flex items-center justify-center">
                      ✓
                    </span>
                  )}

                  <div className="w-12 h-12 rounded-xl overflow-hidden mb-2 shadow-inner border border-black/10">
                    <img 
                      src={swatch.image} 
                      alt={swatch.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="font-bold text-xs text-[#2C2F34] leading-snug">
                    {swatch.name}
                  </h4>
                  <span className="text-[10px] text-gray-400 mt-1 block">
                    {swatch.type}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Barra de Resumen y Botón de Pedido */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200">
            <div>
              <span className="text-xs font-bold text-gray-700 block">
                Muestras seleccionadas: ({selectedSwatches.length}/3)
              </span>
              <p className="text-xs text-gray-500">
                {selectedSwatches.length > 0 
                  ? selectedSwatches.map(s => s.name).join(' • ')
                  : 'Haz clic en los cuadros para armar tu kit personalizado.'}
              </p>
            </div>

            <button
              onClick={handleOrder}
              disabled={selectedSwatches.length === 0}
              className={`px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedSwatches.length > 0
                  ? 'bg-[#2C2F34] hover:bg-black text-[#F0D030] shadow-md cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Pedir Kit a Domicilio
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
