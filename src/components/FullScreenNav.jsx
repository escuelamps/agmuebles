import React, { useState } from 'react';

export const FullScreenNav = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const [hoveredImage, setHoveredImage] = useState('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80');

  const navLinks = [
    { 
      number: '01', 
      title: 'Sistemas y Espacios', 
      subtitle: 'Cocinas, salones y vestidores a medida',
      target: 'sistemas',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' 
    },
    { 
      number: '02', 
      title: 'Índice de Mobiliario', 
      subtitle: 'Especificación técnica de colecciones',
      target: 'index-view',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80' 
    },
    { 
      number: '03', 
      title: 'Archivo de Materiales', 
      subtitle: 'Maderas nobles, cuarzo y lacas',
      target: 'materiales',
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80' 
    },
    { 
      number: '04', 
      title: 'El Taller & Ebanistería', 
      subtitle: 'Dirección por Aroldo Guerrero',
      target: 'taller',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80' 
    },
    { 
      number: '05', 
      title: 'Solicitar Asesoría 3D', 
      subtitle: 'Toma de medidas y cotización en sitio',
      target: 'inquiry',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80' 
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#2C2F34] text-[#E9E7E2] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-fadeIn">
      
      {/* Top Bar inside Overlay */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <img src="assets/logo-dark.png" alt="AG MUEBLES" className="h-8 sm:h-10 w-auto" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 hidden sm:inline">
            // Navegación Arquitectónica
          </span>
        </div>

        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E9E7E2] hover:text-[#F0D030]"
        >
          <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#F0D030]">
            &times;
          </span>
          <span>Cerrar</span>
        </button>
      </div>

      {/* Main Grid: Left Links, Right Floating Preview Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-10 items-center">
        
        {/* Left Column: Giant Typography Links */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {navLinks.map((item) => (
            <div
              key={item.number}
              onMouseEnter={() => setHoveredImage(item.image)}
              onClick={() => {
                onNavigate(item.target);
                onClose();
              }}
              className="group cursor-pointer flex items-baseline gap-4 sm:gap-6 border-b border-white/5 pb-3 transition-colors"
            >
              <span className="text-xs sm:text-sm font-mono text-[#F0D030] tracking-wider">
                {item.number}
              </span>
              <div className="flex-1">
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight uppercase group-hover:text-[#F0D030] group-hover:translate-x-2 transition-all">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">
                  {item.subtitle}
                </p>
              </div>
              <span className="text-xl text-gray-500 group-hover:text-[#F0D030] transition-colors">
                &rarr;
              </span>
            </div>
          ))}
        </div>

        {/* Right Column: Dynamic Preview Photo */}
        <div className="hidden lg:block lg:col-span-5 pl-8">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black/40 border border-white/10 relative shadow-2xl">
            <img 
              src={hoveredImage} 
              alt="Vista previa"
              className="w-full h-full object-cover transition-all duration-700 filter brightness-90"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs font-mono">
              <span className="text-[#F0D030] block">TALLER AG &bull; ARCHIVO</span>
              <span className="text-gray-300">Bogotá &bull; Colombia &bull; Fabricación a Medida</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Info */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">
        <div>
          <span>FUNDADO EN 2026 &bull; SISTEMAS ARQUITECTÓNICOS AROLDO GUERRERO</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/ag.muebles.diseno" target="_blank" rel="noopener noreferrer" className="hover:text-[#F0D030]">
            Instagram: @ag.muebles.diseno
          </a>
          <span>|</span>
          <a href="tel:+573000000000" className="hover:text-[#F0D030]">
            +57 300 000 0000
          </a>
        </div>
      </div>

    </div>
  );
};
