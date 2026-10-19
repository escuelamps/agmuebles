import React, { useState } from 'react';

export const ProductCard = ({ product, onQuickView }) => {
  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(0);

  const currentSwatch = product.swatches[selectedSwatchIndex] || product.swatches[0];

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img 
          src={currentSwatch.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-[#2C2F34] text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
            {product.tag}
          </span>
        )}

        {/* Botón Flotante Vista Rápida en Hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md text-[#2C2F34] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#F0D030] shadow-md flex items-center justify-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Vista Rápida & Medidas
        </button>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Círculos de Muestras de Acabado (Castlery Swatches) */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] text-gray-400 font-medium mr-1">Acabados:</span>
            {product.swatches.map((swatch, idx) => (
              <button
                key={swatch.name}
                onClick={() => setSelectedSwatchIndex(idx)}
                style={{ backgroundColor: swatch.colorHex }}
                className={`w-5 h-5 rounded-full border transition-all ${
                  selectedSwatchIndex === idx 
                    ? 'ring-2 ring-offset-2 ring-[#2C2F34] scale-110' 
                    : 'border-gray-300 hover:scale-105'
                }`}
                title={swatch.name}
              />
            ))}
            <span className="text-[11px] text-gray-500 truncate max-w-[120px]">
              {currentSwatch.name}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex text-amber-400 text-xs">
              {'★'.repeat(5)}
            </div>
            <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviewsCount})</span>
          </div>

          {/* Título de Producto */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-bold text-base text-[#2C2F34] hover:text-[#E0B605] transition-colors cursor-pointer mb-1 leading-snug"
          >
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 mb-3">
            {product.shortDesc}
          </p>
        </div>

        {/* Precio y Botón de Cotizar */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Fabricación</span>
            <span className="text-base font-extrabold text-[#2C2F34]">
              Desde ${product.priceFrom.toLocaleString('en-US')} USD
            </span>
          </div>

          <button
            onClick={() => onQuickView(product)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#F0D030] text-[#2C2F34] flex items-center justify-center transition-colors"
            title="Personalizar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
