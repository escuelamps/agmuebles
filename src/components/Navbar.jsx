import React, { useState, useEffect } from 'react';

export const Navbar = ({ onOpenConsultation, swatchesCount, onOpenSwatches, activeCategory, onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = [
    { id: 'all', label: 'Todo el Catálogo' },
    { id: 'cocinas', label: 'Cocinas de Autor' },
    { id: 'salones', label: 'Salas & TV' },
    { id: 'dormitorios', label: 'Walk-in Closets' },
    { id: 'comedores', label: 'Comedores' },
    { id: 'almacenamiento', label: 'Libreros & Modulares' },
    { id: 'lookbook', label: 'Shop The Look' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' 
        : 'bg-white border-b border-gray-100'
    }`}>
      {/* Barra Principal */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Botón Mobile Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-black focus:outline-none"
            aria-label="Menú principal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo AG MUEBLES */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="assets/logo-light.png" 
              alt="AG MUEBLES" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Enlaces de Navegación Estilo Castlery */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'lookbook') {
                    const el = document.getElementById('shop-the-look');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onSelectCategory(cat.id);
                    const el = document.getElementById('catalogo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-sm font-semibold tracking-wide transition-colors py-2 relative group ${
                  activeCategory === cat.id ? 'text-[#2C2F34] font-bold' : 'text-gray-600 hover:text-[#2C2F34]'
                }`}
              >
                {cat.label}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#F0D030] transition-transform duration-200 ${
                  activeCategory === cat.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Acciones de la derecha */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Botón Muestras / Swatches */}
            <button
              onClick={onOpenSwatches}
              className="relative p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100"
              title="Ver Muestras Seleccionadas"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {swatchesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F0D030] text-[#2C2F34] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {swatchesCount}
                </span>
              )}
            </button>

            {/* CTA Asesoría 3D Castlery Style */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 bg-[#2C2F34] hover:bg-[#1A1C1F] text-white px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow"
            >
              <span className="w-2 h-2 rounded-full bg-[#F0D030]"></span>
              Agendar Asesoría 3D
            </button>

            {/* Botón WhatsApp Directo */}
            <a
              href="https://wa.me/573000000000?text=Hola%20AG%20Muebles,%20deseo%20asesoría%20para%20un%20proyecto%20a%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-emerald-50 rounded-full transition-colors"
              title="Chat con un Ebanista / Diseñador"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.055-1.579-.333-.945-.389-1.536-.931-1.637-1.07-.101-.138-.809-1.077-.809-2.054 0-.978.508-1.459.689-1.659.182-.2.397-.249.53-.249.133 0 .265.003.382.008.123.006.287-.046.45.344.167.399.57 1.39.621 1.493.05.103.084.224.016.358-.069.135-.104.218-.206.338-.103.12-.216.269-.309.362-.103.103-.211.215-.091.421.12.206.533.879 1.144 1.423.787.7 1.448.916 1.654 1.019.206.103.327.086.447-.052.12-.137.515-.6.653-.806.137-.206.275-.172.463-.103.189.069 1.196.564 1.402.667.206.103.344.155.395.241.052.086.052.5-.092.905z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'lookbook') {
                    const el = document.getElementById('shop-the-look');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onSelectCategory(cat.id);
                    const el = document.getElementById('catalogo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-semibold text-gray-800 hover:text-[#2C2F34] py-2 border-b border-gray-50 flex items-center justify-between"
              >
                <span>{cat.label}</span>
                <span className="text-gray-400">&rarr;</span>
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenConsultation();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#2C2F34] text-white py-3 rounded-xl font-bold text-sm tracking-wider uppercase text-center"
              >
                Agendar Asesoría 3D
              </button>
              <button
                onClick={() => {
                  onOpenSwatches();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-bold text-sm text-center"
              >
                Solicitar Muestras de Acabados
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
