import React, { useState, useEffect } from 'react';

export const Header = ({ onOpenMenu, viewMode, onToggleView, onOpenInquiry, onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-500 border-b border-[#2C2F34]/15 ${
      isScrolled ? 'bg-[#E9E7E2]/95 backdrop-blur-md shadow-sm' : 'bg-[#E9E7E2]'
    }`}>
      <div className="container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Izquierda: Disparador del Menú Overlay */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenMenu}
            className="group flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2C2F34] hover:text-black py-2"
          >
            <span className="w-6 h-6 rounded-full border border-[#2C2F34] flex items-center justify-center text-xs group-hover:bg-[#2C2F34] group-hover:text-white transition-all">
              +
            </span>
            <span className="font-bold underline-offset-4 group-hover:underline">Menú</span>
          </button>
        </div>

        {/* Centro: Logotipo Oficial AG MUEBLES */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="assets/marca-grafica-principal.png" 
              alt="AG MUEBLES" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Derecha: Conmutador de Vista (Galería / Tabla Técnica) y Cotizar */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2C2F34]/25 hover:border-[#2C2F34] text-[10px] font-mono uppercase tracking-wider text-[#2C2F34] transition-all bg-white/40 hover:bg-white"
              title="Rebobinar la animación de la página pequeña que se agranda"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0B605] animate-ping"></span>
              <span>Animación Inicial</span>
            </button>
          )}

          <div className="hidden md:flex items-center border border-[#2C2F34]/25 rounded-full p-1 text-[11px] font-mono uppercase tracking-wider bg-white/40">
            <button
              onClick={() => onToggleView('gallery')}
              className={`px-3 py-1 rounded-full transition-all ${
                viewMode === 'gallery' ? 'bg-[#2C2F34] text-white font-bold' : 'text-gray-600 hover:text-black'
              }`}
            >
              Galería
            </button>
            <button
              onClick={() => onToggleView('index')}
              className={`px-3 py-1 rounded-full transition-all ${
                viewMode === 'index' ? 'bg-[#2C2F34] text-white font-bold' : 'text-gray-600 hover:text-black'
              }`}
            >
              Tabla Técnica
            </button>
          </div>

          <button
            onClick={onOpenInquiry}
            className="bg-[#2C2F34] hover:bg-black text-[#F0D030] text-xs font-mono uppercase tracking-wider px-4 py-2.5 rounded-full transition-all shadow-sm"
          >
            Cotizar
          </button>
        </div>

      </div>
    </header>
  );
};
