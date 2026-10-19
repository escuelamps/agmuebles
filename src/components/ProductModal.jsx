import React, { useState } from 'react';

export const ProductModal = ({ product, onClose, onAddSwatch }) => {
  if (!product) return null;

  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(0);
  const activeSwatch = product.swatches[selectedSwatchIndex] || product.swatches[0];

  const whatsappMessage = encodeURIComponent(
    `¡Hola AG Muebles! Me interesa el modelo "${product.name}" en acabado "${activeSwatch.name}". ¿Podrían asesorarme con las medidas y cotización para mi espacio?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-700 hover:text-black hover:bg-white flex items-center justify-center shadow-md transition-colors"
          aria-label="Cerrar modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Columna Izquierda: Imagen del producto según el swatch activo */}
        <div className="md:w-1/2 bg-gray-100 relative min-h-[300px] md:min-h-full">
          <img 
            src={activeSwatch.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg">
            Acabado actual: <strong className="text-[#F0D030]">{activeSwatch.name}</strong>
          </div>
        </div>

        {/* Columna Derecha: Detalles, Medidas y Personalización */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#2C2F34] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                {product.tag || 'Hecho a Medida'}
              </span>
              <div className="flex text-amber-400 text-xs">
                {'★'.repeat(5)}
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {product.rating} ({product.reviewsCount} reseñas)
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C2F34] mb-2 leading-tight">
              {product.name}
            </h2>

            <div className="text-xl font-black text-[#2C2F34] mb-4">
              Desde ${product.priceFrom.toLocaleString('en-US')} USD
              <span className="text-xs font-normal text-gray-500 block">
                *Incluye toma de medidas, render 3D e instalación en sitio.
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Selector de Acabados */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2.5">
                Selecciona el Acabado de Referencia:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.swatches.map((swatch, idx) => (
                  <button
                    key={swatch.name}
                    onClick={() => setSelectedSwatchIndex(idx)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                      selectedSwatchIndex === idx
                        ? 'border-[#2C2F34] bg-gray-50 text-[#2C2F34] ring-1 ring-[#2C2F34]'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <span 
                      className="w-4 h-4 rounded-full border border-black/10 inline-block"
                      style={{ backgroundColor: swatch.colorHex }}
                    />
                    {swatch.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensiones y Especificaciones */}
            <div className="mb-6 bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <h4 className="text-xs font-bold text-[#2C2F34] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#E0B605]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                Dimensiones Adaptables
              </h4>
              <p className="text-xs text-gray-600 mb-3 font-medium">
                {product.dimensions}
              </p>

              <h4 className="text-xs font-bold text-[#2C2F34] uppercase tracking-wider mb-2">
                Puntos Destacados:
              </h4>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {product.features?.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#E0B605] font-bold">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Acciones */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/573000000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#F0D030] hover:bg-[#E0B605] text-[#2C2F34] py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.055-1.579-.333-.945-.389-1.536-.931-1.637-1.07-.101-.138-.809-1.077-.809-2.054 0-.978.508-1.459.689-1.659.182-.2.397-.249.53-.249.133 0 .265.003.382.008.123.006.287-.046.45.344.167.399.57 1.39.621 1.493.05.103.084.224.016.358-.069.135-.104.218-.206.338-.103.12-.216.269-.309.362-.103.103-.211.215-.091.421.12.206.533.879 1.144 1.423.787.7 1.448.916 1.654 1.019.206.103.327.086.447-.052.12-.137.515-.6.653-.806.137-.206.275-.172.463-.103.189.069 1.196.564 1.402.667.206.103.344.155.395.241.052.086.052.5-.092.905z"/>
              </svg>
              Cotizar con Este Acabado
            </a>

            <button
              onClick={() => {
                onAddSwatch({
                  id: product.id + '-' + activeSwatch.name,
                  name: `${product.name} (${activeSwatch.name})`,
                  colorHex: activeSwatch.colorHex
                });
                alert('Muestra agregada a tu kit de acabados a domicilio.');
              }}
              className="px-4 py-3.5 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              Pedir Muestra Física
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
