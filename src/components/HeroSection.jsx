import React from 'react';

export const HeroSection = ({ onExplore, onOpenInquiry }) => {
  return (
    <section className="bg-[#E9E7E2] text-[#2C2F34] pt-8 pb-20 border-b border-[#2C2F34]/15">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Technical Sub-Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2C2F34]/15 pb-4 mb-10 text-xs font-mono uppercase tracking-widest text-gray-600 gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E0B605]"></span>
            <span>AG MUEBLES // PRODUCCIÓN ARQUITECTÓNICA A MEDIDA</span>
          </div>
          <div className="flex items-center gap-6">
            <span>COLECCIÓN 2026</span>
            <span>BOGOTÁ, COLOMBIA</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Columna Izquierda: Tipografía Monumental y Manifiesto */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-widest bg-[#2C2F34] text-[#F0D030] px-3 py-1 rounded-sm mb-6">
                [ 01 // MANIFIESTO ]
              </span>

              <h1 className="text-[clamp(2rem,4.3vw,4.25rem)] font-bold tracking-tight uppercase leading-[0.95] mb-8 text-[#2C2F34]">
                TRANSFORMAMOS <br />
                <span className="text-[#2C2F34] inline-block font-black border-b-4 border-[#F0D030]">
                  TUS ESPACIOS.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#2C2F34]/80 leading-relaxed font-normal max-w-xl mb-8">
                Diseño, fabricación e ingeniería de mobiliario a medida de alta gama. Una práctica fundada en la precisión de la ebanistería tradicional, procesos de control numérico CNC y acabados nobles para residencias y espacios corporativos.
              </p>
            </div>

            {/* Ficha técnica y CTAs */}
            <div className="pt-6 border-t border-[#2C2F34]/15 space-y-6">
              <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase text-gray-600">
                <div>
                  <span className="block text-gray-400">Fundador & Dirección:</span>
                  <strong className="text-[#2C2F34]">Aroldo Guerrero</strong>
                </div>
                <div>
                  <span className="block text-gray-400">Garantía:</span>
                  <strong className="text-[#2C2F34]">10 Años Estructural</strong>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onExplore}
                  className="bg-[#2C2F34] hover:bg-black text-[#F0D030] text-xs font-mono uppercase tracking-widest px-7 py-3.5 rounded-full transition-all flex items-center gap-3 shadow-sm hover:scale-105"
                >
                  <span>Explorar Sistemas</span>
                  <span>&darr;</span>
                </button>

                <button
                  onClick={onOpenInquiry}
                  className="border border-[#2C2F34] hover:bg-[#2C2F34] hover:text-white text-[#2C2F34] text-xs font-mono uppercase tracking-widest px-7 py-3.5 rounded-full transition-all hover:scale-105"
                >
                  Agendar Proyecto 3D
                </button>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen Arquitectónica y Epígrafe */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#2C2F34]/20 shadow-xl bg-[#24272B]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85" 
                alt="Sistema de Cocina Monolith - AG Muebles"
                className="w-full aspect-[4/3] object-cover filter contrast-[1.03]"
              />
              <div className="absolute top-4 left-4 bg-[#2C2F34]/90 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1.5 rounded-sm uppercase tracking-wider">
                FIG. 01 &bull; COCINA ARQUITECTÓNICA MONOLITH
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-500 mt-3 px-1">
              <span>Roble Americano &bull; Piedra Sinterizada &bull; Blumotion</span>
              <span>Ref: SIS-01</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
