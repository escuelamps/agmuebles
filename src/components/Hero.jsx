import React from 'react';

export const Hero = ({ onOpenConsultation, onExploreCatalog }) => {
  return (
    <section className="relative overflow-hidden bg-[#1E2024]">
      {/* Background Image con overlay suave para legibilidad */}
      <div className="relative min-h-[580px] lg:min-h-[680px] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85" 
          alt="Cocina y salón integrados de lujo a medida - AG MUEBLES" 
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78]"
        />
        
        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* Contenido Editorial */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 lg:py-24">
          <div className="max-w-2xl text-white">
            
            <div className="inline-flex items-center gap-2 bg-[#F0D030]/20 border border-[#F0D030]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#F0D030] uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F0D030]"></span>
              Colección Atelier 2026 &bull; Hecho a Medida
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] mb-6 text-white">
              TRANSFORMAMOS <br />
              <span className="text-[#F0D030] underline decoration-[#F0D030]/30 underline-offset-8">TUS ESPACIOS</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-xl">
              Creación e instalación de muebles a medida de lujo. Fusión de ebanistería noble, ingeniería de precisión y asesoría de diseño 3D para tu hogar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 bg-[#F0D030] hover:bg-[#E0B605] text-[#2C2F34] font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/20"
              >
                Explorar Catálogo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all"
              >
                Diseñar a Medida (3D)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Franja de Beneficios Estilo Castlery */}
      <div className="bg-[#24272B] text-gray-200 border-t border-white/10 py-5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-2 flex flex-col items-center">
              <span className="text-xl mb-1">📐</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Modelado 3D Gratuito</h4>
              <p className="text-[11px] text-gray-400">Visualiza antes de fabricar</p>
            </div>
            <div className="p-2 flex flex-col items-center">
              <span className="text-xl mb-1">🪵</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Maderas Nobles & Cuarzo</h4>
              <p className="text-[11px] text-gray-400">Materiales de primera calidad</p>
            </div>
            <div className="p-2 flex flex-col items-center">
              <span className="text-xl mb-1">⚡</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Herrajes Alemanes Soft-Close</h4>
              <p className="text-[11px] text-gray-400">Suavidad y alta durabilidad</p>
            </div>
            <div className="p-2 flex flex-col items-center">
              <span className="text-xl mb-1">🛡️</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">10 Años de Garantía</h4>
              <p className="text-[11px] text-gray-400">Respaldo estructural y servicio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
