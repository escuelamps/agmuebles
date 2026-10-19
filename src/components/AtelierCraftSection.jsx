import React from 'react';

export const AtelierCraftSection = ({ onOpenInquiry }) => {
  return (
    <section id="atelier" className="py-24 bg-[#E9E7E2] text-[#2C2F34] border-t border-[#2C2F34]/15">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Top Header */}
        <div className="border-b border-[#2C2F34]/15 pb-6 mb-16 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono uppercase tracking-widest text-gray-500 gap-2">
          <span>[ 04 // EL TALLER ]</span>
          <span className="text-[#E0B605] font-bold">PRECISIÓN DE FABRICACIÓN &bull; AROLDO GUERRERO</span>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#2C2F34] leading-tight">
              Ingeniería Digital & Maestría Artesanal
            </h2>
            <p className="text-sm sm:text-base text-[#2C2F34]/85 font-light leading-relaxed">
              En AG MUEBLES, cada encargo nace de una estrecha colaboración entre diseñadores, arquitectos y maestros ebanistas. Fundada bajo el legado y dirección de <strong>Aroldo Guerrero</strong>, combinamos fresado CNC de 5 ejes para cortes micrométricos con el acabado y ensamble manual minucioso de cada veta.
            </p>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              No fabricamos en serie. Cada módulo se parametriza según la altura de tu cielo raso, la curvatura de tus muros y las necesidades específicas de almacenamiento de tu familia o proyecto corporativo.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#2C2F34]/15 text-xs font-mono">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#2C2F34] block mb-1">+15</span>
                <span className="text-gray-500 uppercase">Años de Taller</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#2C2F34] block mb-1">100%</span>
                <span className="text-gray-500 uppercase">A Medida</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#E0B605] block mb-1">10 Años</span>
                <span className="text-gray-500 uppercase">Garantía Estructural</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#2C2F34]/20 shadow-xl bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80" 
                alt="Taller de Ebanistería y Producción AG Muebles"
                className="w-full aspect-[4/3] object-cover filter contrast-[1.05]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#2C2F34]/90 backdrop-blur-md p-3 rounded-lg border border-white/10 text-xs font-mono text-gray-200 flex justify-between">
                <span>Taller Central de Producción</span>
                <span className="text-[#F0D030]">Control de Calidad ISO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso en 4 Pasos Técnicos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-[#2C2F34]/15 text-xs font-mono">
          <div className="bg-white/70 border border-[#2C2F34]/15 p-5 rounded-xl">
            <span className="text-[#E0B605] font-bold block mb-2">[ 01. LEVANTAMIENTO ]</span>
            <h4 className="text-[#2C2F34] font-bold text-sm mb-1 uppercase">Escaneo & Medición</h4>
            <p className="text-gray-600 leading-relaxed">Toma de cotas láser in situ y verificación de instalaciones hidrosanitarias y eléctricas.</p>
          </div>
          <div className="bg-white/70 border border-[#2C2F34]/15 p-5 rounded-xl">
            <span className="text-[#E0B605] font-bold block mb-2">[ 02. MODELADO 3D ]</span>
            <h4 className="text-[#2C2F34] font-bold text-sm mb-1 uppercase">Prototipado Digital</h4>
            <p className="text-gray-600 leading-relaxed">Generación de renders fotorrealistas y planos constructivos de despiece milimétrico.</p>
          </div>
          <div className="bg-white/70 border border-[#2C2F34]/15 p-5 rounded-xl">
            <span className="text-[#E0B605] font-bold block mb-2">[ 03. MAQUINADO CNC ]</span>
            <h4 className="text-[#2C2F34] font-bold text-sm mb-1 uppercase">Corte & Canteado</h4>
            <p className="text-gray-600 leading-relaxed">Mecanizado de alta precisión con sellado láser hidrófugo y laqueado en cabina presurizada.</p>
          </div>
          <div className="bg-white/70 border border-[#2C2F34]/15 p-5 rounded-xl">
            <span className="text-[#E0B605] font-bold block mb-2">[ 04. INSTALACIÓN ]</span>
            <h4 className="text-[#2C2F34] font-bold text-sm mb-1 uppercase">Montaje en Obra</h4>
            <p className="text-gray-600 leading-relaxed">Instalación por nuestro propio equipo de ebanistas con ajuste a plomo y certificado de garantía.</p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenInquiry}
            className="bg-[#2C2F34] hover:bg-black text-[#F0D030] font-mono uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-full transition-all shadow-md hover:scale-105"
          >
            Iniciar Asesoría Técnica con el Taller &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
