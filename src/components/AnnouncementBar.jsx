import React from 'react';

export const AnnouncementBar = ({ onOpenSwatches }) => {
  return (
    <div className="bg-[#2C2F34] text-[#F0D030] py-2 px-4 text-xs font-semibold tracking-wider uppercase flex items-center justify-between border-b border-[#3A3E45]">
      <div className="container mx-auto flex items-center justify-between">
        <span className="hidden md:inline-flex items-center gap-2 text-gray-300 normal-case">
          <span className="w-2 h-2 rounded-full bg-[#F0D030] animate-pulse"></span>
          Fabricación artesanal de muebles de lujo a medida en Colombia
        </span>

        <div className="mx-auto md:mx-0 flex items-center gap-4">
          <span className="text-white font-medium normal-case">
            Transformamos tus espacios: <strong className="text-[#F0D030]">Diseño 3D y toma de medidas sin costo</strong>
          </span>
          <button 
            onClick={onOpenSwatches}
            className="hidden sm:inline-flex items-center gap-1 bg-[#F0D030] text-[#2C2F34] px-2.5 py-0.5 rounded-full text-[11px] font-bold hover:bg-[#E0B605] transition-colors uppercase tracking-normal"
          >
            Pedir Muestras Gratis
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-gray-400 normal-case text-xs">
          <a href="tel:+573000000000" className="hover:text-white transition-colors">Tel: +57 300 000 0000</a>
          <span>|</span>
          <a href="#showroom" className="hover:text-white transition-colors">Showroom & Taller</a>
        </div>
      </div>
    </div>
  );
};
