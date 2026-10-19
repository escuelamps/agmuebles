import React from 'react';

export const ProductDrawer = ({ product, onClose, onImageClick }) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      {/* Drawer Container */}
      <div 
        className="relative bg-[#E9E7E2] text-[#2C2F34] w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#2C2F34]/20 animate-slideLeft cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="sticky top-0 z-20 bg-[#E9E7E2]/95 backdrop-blur-md p-6 border-b border-[#2C2F34]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-[#2C2F34] text-[#F0D030] px-2.5 py-0.5 rounded-sm font-bold">
              {product.code}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-600">
              Especificación Técnica
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-[#2C2F34]/30 flex items-center justify-center hover:bg-[#2C2F34] hover:text-white transition-colors text-lg"
          >
            &times;
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Main Title */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E0B605] block mb-1">
              {product.typology} &bull; {product.year}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#2C2F34]">
              {product.name}
            </h2>
            <p className="text-xs font-mono text-gray-500 mt-1">
              Diseño & Dirección: {product.designer}
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="space-y-3">
            <div 
              onClick={() => onImageClick && onImageClick({
                url: product.primaryImage,
                title: product.name,
                subtitle: `${product.typology} • Vista Principal`,
                code: product.code
              })}
              className={`aspect-[16/10] rounded-xl overflow-hidden bg-gray-300 border border-[#2C2F34]/20 ${onImageClick ? 'cursor-zoom-in group/img relative' : ''}`}
            >
              <img src={product.primaryImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
              {onImageClick && (
                <div className="absolute bottom-3 right-3 bg-[#2C2F34]/90 backdrop-blur-sm text-[#F0D030] text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5 shadow">
                  <span>🔍</span>
                  <span>Ampliar foto</span>
                </div>
              )}
            </div>
            {product.secondaryImage && (
              <div 
                onClick={() => onImageClick && onImageClick({
                  url: product.secondaryImage,
                  title: `${product.name} — Detalle Constructivo`,
                  subtitle: `${product.typology} • Detalle de Acabados`,
                  code: product.code
                })}
                className={`aspect-[16/10] rounded-xl overflow-hidden bg-gray-300 border border-[#2C2F34]/20 ${onImageClick ? 'cursor-zoom-in group/img relative' : ''}`}
              >
                <img src={product.secondaryImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                {onImageClick && (
                  <div className="absolute bottom-3 right-3 bg-[#2C2F34]/90 backdrop-blur-sm text-[#F0D030] text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5 shadow">
                    <span>🔍</span>
                    <span>Ampliar foto</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Description & Blueprint Narrative */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-[#2C2F34]/15 pb-2">
              Concepto & Arquitectura
            </h4>
            <p className="text-sm text-[#2C2F34]/90 leading-relaxed">
              {product.shortDesc}
            </p>
            <div className="bg-white/60 border border-[#2C2F34]/15 rounded-xl p-4 text-xs font-mono text-gray-700">
              <strong className="block text-[#2C2F34] uppercase mb-1">Nota de Fabricación:</strong>
              {product.blueprintDesc}
            </div>
          </div>

          {/* Detailed Specs Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-[#2C2F34]/15 pb-2">
              Datos Técnicos Estructurales
            </h4>
            <div className="border border-[#2C2F34]/15 rounded-xl overflow-hidden bg-white/50 text-xs font-mono">
              {product.specs?.map((spec, i) => (
                <div key={i} className="flex justify-between p-3 border-b border-[#2C2F34]/10 last:border-b-0">
                  <span className="text-gray-500 uppercase">{spec.label}</span>
                  <span className="text-[#2C2F34] font-bold text-right">{spec.value}</span>
                </div>
              ))}
              <div className="flex justify-between p-3 border-t border-[#2C2F34]/10 bg-[#E9E7E2]/50">
                <span className="text-gray-500 uppercase">Tiempo de Producción</span>
                <span className="text-[#2C2F34] font-bold">{product.leadTime}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Drawer Actions */}
        <div className="sticky bottom-0 bg-[#E9E7E2] p-6 border-t border-[#2C2F34]/15">
          <a
            href={`https://wa.me/573000000000?text=${encodeURIComponent(
              `Hola AG Muebles, deseo solicitar cotización técnica formal para el sistema "${product.name}" (Ref: ${product.code}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#2C2F34] hover:bg-black text-[#F0D030] text-xs font-mono uppercase tracking-widest py-4 px-6 rounded-full text-center transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <span>Consultar con un Arquitecto AG por WhatsApp</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </div>
  );
};
