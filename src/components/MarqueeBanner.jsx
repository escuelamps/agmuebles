import React from 'react';

export const MarqueeBanner = () => {
  const items = [
    'AG MUEBLES',
    'MOBILIARIO ARQUITECTÓNICO A MEDIDA',
    'TALLER AROLDO GUERRERO',
    'EBANISTERÍA DE ALTA PRECISIÓN',
    '10 AÑOS DE GARANTÍA ESTRUCTURAL',
    'PROYECTOS RESIDENCIALES Y CORPORATIVOS',
    'FABRICACIÓN 100% A MEDIDA EN COLOMBIA'
  ];

  return (
    <div className="bg-[#2C2F34] text-[#E9E7E2] py-2.5 px-4 overflow-hidden border-b border-[#3E4249] select-none text-[11px] font-mono tracking-widest uppercase">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-8">
        {[...items, ...items, ...items].map((text, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span className="hover:text-[#F0D030] transition-colors">{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0D030]"></span>
          </span>
        ))}
      </div>
    </div>
  );
};
