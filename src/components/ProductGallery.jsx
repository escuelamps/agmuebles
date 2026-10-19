import React from 'react';
import { architecturalProducts } from '../data/products';

export const ProductGallery = ({ onSelectProduct }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {architecturalProducts.map((item, index) => {
        const isReversed = index % 2 === 1;

        return (
          <article 
            key={item.code}
            className="border-b border-[#2C2F34]/15 pb-16 sm:pb-24 transition-all"
          >
            {/* Top Bar de Cada Monografía */}
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
              <span className="text-[#2C2F34] font-bold">
                [ {item.refNumber} ]
              </span>
              <span>{item.typology}</span>
              <span className="hidden sm:inline text-gray-400">REF: {item.code}</span>
            </div>

            {/* Layout Asimétrico Editorial */}
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              isReversed ? 'lg:flex-row-reverse' : ''
            }`}>
              
              {/* Fotografía Arquitectónica */}
              <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <div 
                  onClick={() => onSelectProduct(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#2C2F34]/20 bg-gray-200 aspect-[16/10]"
                >
                  <img 
                    src={item.primaryImage} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                  <div className="absolute bottom-4 right-4 bg-[#2C2F34]/95 text-[#F0D030] text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    + Especificación Técnica
                  </div>
                </div>
              </div>

              {/* Ficha Editorial y Datos Técnicos */}
              <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                <div>
                  <span className="text-xs font-mono text-[#E0B605] uppercase tracking-wider block mb-1">
                    {item.designer} &bull; {item.year}
                  </span>
                  <h3 
                    onClick={() => onSelectProduct(item)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#2C2F34] cursor-pointer hover:text-black leading-tight"
                  >
                    {item.name}
                  </h3>
                </div>

                <p className="text-sm text-[#2C2F34]/80 leading-relaxed font-normal">
                  {item.shortDesc}
                </p>

                {/* Especificación de Materiales y Dimensiones */}
                <div className="bg-[#E9E7E2]/70 border border-[#2C2F34]/15 rounded-xl p-4 text-xs font-mono space-y-2">
                  <div className="flex justify-between border-b border-[#2C2F34]/10 pb-1.5">
                    <span className="text-gray-500 uppercase">Dimensiones:</span>
                    <span className="text-[#2C2F34] font-semibold">{item.dimensions}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#2C2F34]/10 pb-1.5">
                    <span className="text-gray-500 uppercase">Tiempo Fabricación:</span>
                    <span className="text-[#2C2F34] font-semibold">{item.leadTime}</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-gray-500 uppercase">Materiales:</span>
                    <span className="text-[#2C2F34] text-right truncate max-w-[200px]">
                      {item.materials.slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>

                {/* Botón de Acción */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => onSelectProduct(item)}
                    className="flex-1 bg-[#2C2F34] hover:bg-black text-[#E9E7E2] hover:text-[#F0D030] text-xs font-mono uppercase tracking-widest py-3 px-5 rounded-full transition-all text-center"
                  >
                    Ver Ficha Técnica Completa &rarr;
                  </button>
                  <a
                    href={`https://wa.me/573000000000?text=${encodeURIComponent(
                      `Hola AG Muebles, deseo consultar el sistema arquitectónico "${item.name}" (Ref: ${item.code}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#2C2F34] hover:bg-[#F0D030] hover:border-[#F0D030] text-[#2C2F34] flex items-center justify-center transition-colors"
                    title="Cotizar en WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.055-1.579-.333-.945-.389-1.536-.931-1.637-1.07-.101-.138-.809-1.077-.809-2.054 0-.978.508-1.459.689-1.659.182-.2.397-.249.53-.249.133 0 .265.003.382.008.123.006.287-.046.45.344.167.399.57 1.39.621 1.493.05.103.084.224.016.358-.069.135-.104.218-.206.338-.103.12-.216.269-.309.362-.103.103-.211.215-.091.421.12.206.533.879 1.144 1.423.787.7 1.448.916 1.654 1.019.206.103.327.086.447-.052.12-.137.515-.6.653-.806.137-.206.275-.172.463-.103.189.069 1.196.564 1.402.667.206.103.344.155.395.241.052.086.052.5-.092.905z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </article>
        );
      })}
    </div>
  );
};
