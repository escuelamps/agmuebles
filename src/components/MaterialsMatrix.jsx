import React from 'react';
import { materialsData } from '../data/products';

export const MaterialsMatrix = () => {
  return (
    <section id="materials" className="py-20 bg-[#E9E7E2] border-t border-b border-[#2C2F34]/15">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#2C2F34]/15 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E0B605] block mb-2">
              [ 03 // MATERIALS ARCHIVE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#2C2F34]">
              Materia Prima & Acabados Nobles
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-600 max-w-sm mt-3 sm:mt-0 uppercase">
            Seleccionamos maderas con certificación de origen, piedras ultracompactas y lacas de alta resistencia mecánica.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {materialsData.map((mat) => (
            <div 
              key={mat.code}
              className="bg-white/80 rounded-2xl overflow-hidden border border-[#2C2F34]/15 p-5 flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 mb-4 border border-[#2C2F34]/10">
                  <img 
                    src={mat.image} 
                    alt={mat.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-[11px] font-mono text-gray-400">{mat.code}</span>
                  <span className="text-[11px] font-mono text-[#E0B605] uppercase">{mat.tone}</span>
                </div>
                <h3 className="text-lg font-bold uppercase text-[#2C2F34] mb-1">
                  {mat.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-mono">
                  {mat.finish}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#2C2F34]/10 text-[11px] font-mono text-gray-500 flex justify-between">
                <span>Procedencia:</span>
                <span className="text-[#2C2F34] font-semibold">{mat.origin}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
