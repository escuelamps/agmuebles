import React from 'react';

export const Footer = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-[#E9E7E2] text-[#2C2F34] pt-20 pb-12 border-t border-[#2C2F34]/20">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#2C2F34]/15">
          
          {/* Logo & Brand Identity */}
          <div className="lg:col-span-5 space-y-4">
            <img src="assets/marca-grafica-principal.png" alt="AG MUEBLES" className="h-10 sm:h-12 w-auto" />
            <p className="text-xs font-mono text-gray-600 leading-relaxed max-w-sm">
              <strong>AG MUEBLES</strong> representa el compromiso de <strong>Aroldo Guerrero</strong> con la excelencia del mobiliario arquitectónico a medida. Precisión, innovación y respeto por la materia prima.
            </p>
            <div className="text-xs font-mono text-gray-500">
              <span className="text-[#2C2F34] font-bold">@ag.muebles.diseno</span> &bull; Cobertura en toda Colombia
            </div>
          </div>

          {/* Quick Technical Index */}
          <div className="lg:col-span-3 space-y-3 text-xs font-mono">
            <h4 className="text-[#2C2F34] font-bold uppercase tracking-widest text-[11px] mb-2 border-b border-[#2C2F34]/10 pb-1">
              Sistemas
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>SIS-01 &bull; Cocinas Monolith</li>
              <li>SIS-02 &bull; Panel & Consola Kanso</li>
              <li>SIS-03 &bull; Vestidor Lumina Fumé</li>
              <li>SIS-04 &bull; Mesa Escultórica Kyoto</li>
              <li>SIS-05 &bull; Aparador Alistonado Sabi</li>
              <li>SIS-06 &bull; Librero Studio 360</li>
            </ul>
          </div>

          {/* Contact & Workshop */}
          <div className="lg:col-span-4 space-y-3 text-xs font-mono">
            <h4 className="text-[#2C2F34] font-bold uppercase tracking-widest text-[11px] mb-2 border-b border-[#2C2F34]/10 pb-1">
              Taller & Contacto
            </h4>
            <div className="space-y-2 text-gray-600">
              <p>WhatsApp: <strong className="text-[#2C2F34]">+57 300 000 0000</strong></p>
              <p>Correo: <strong className="text-[#2C2F34]">contacto@agmuebles.com</strong></p>
              <p>Horario: Lunes a Sábado 8:00 AM &ndash; 6:00 PM</p>
              <button
                onClick={onOpenInquiry}
                className="mt-3 inline-block bg-[#2C2F34] hover:bg-black text-[#F0D030] font-bold px-5 py-2.5 rounded-full uppercase tracking-wider text-[11px] transition-all hover:scale-105 shadow-sm"
              >
                Solicitar Visita Técnica
              </button>
            </div>
          </div>

        </div>

        {/* Marca monumental en el fondo del pie de página (estilo Mara SRL) */}
        <div className="py-8 border-b border-[#2C2F34]/10 overflow-hidden select-none">
          <h2 className="text-[14vw] font-black uppercase text-[#2C2F34]/10 leading-none tracking-tighter text-center whitespace-nowrap">
            AG MUEBLES
          </h2>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>&copy; 2026 AG MUEBLES. Aroldo Guerrero &bull; Todos los derechos reservados.</p>
          <p className="text-gray-500">
            Manual de Identidad Oficial &bull; Inspiración Arquitectónica Mara SRL
          </p>
        </div>

      </div>
    </footer>
  );
};
