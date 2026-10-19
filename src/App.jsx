import React, { useState, useEffect } from 'react';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Header } from './components/Header';
import { FullScreenNav } from './components/FullScreenNav';
import { HeroSection } from './components/HeroSection';
import { ProductGallery } from './components/ProductGallery';
import { TechnicalIndexTable } from './components/TechnicalIndexTable';
import { ProductDrawer } from './components/ProductDrawer';
import { MaterialsMatrix } from './components/MaterialsMatrix';
import { AtelierCraftSection } from './components/AtelierCraftSection';
import { Footer } from './components/Footer';

export function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'index'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showLogoIntro, setShowLogoIntro] = useState(true);
  const [isPageExpanded, setIsPageExpanded] = useState(false);

  const playEntrance = () => {
    setShowLogoIntro(true);
    setIsPageExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setShowLogoIntro(false);
    }, 1100);

    setTimeout(() => {
      setIsPageExpanded(true);
    }, 1600);
  };

  useEffect(() => {
    const t1 = setTimeout(() => {
      setShowLogoIntro(false);
    }, 1100);

    const t2 = setTimeout(() => {
      setIsPageExpanded(true);
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Cierre con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImage) setLightboxImage(null);
        else if (selectedProduct) setSelectedProduct(null);
        else if (isInquiryModalOpen) setIsInquiryModalOpen(false);
        else if (isNavOpen) setIsNavOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, selectedProduct, isInquiryModalOpen, isNavOpen]);

  const handleNavigate = (targetId) => {
    if (targetId === 'index-view') {
      setViewMode('index');
      document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`page-scale-stage ${isPageExpanded ? 'stage-expanded' : ''} min-h-screen selection:bg-[#F0D030] selection:text-[#2C2F34]`}>
      
      {/* Pantalla Inicial: Carga primero el logo en fondo amarillo oficial (#F0D030) */}
      <div 
        className={`fixed inset-0 z-50 bg-[#F0D030] flex flex-col items-center justify-center p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
          showLogoIntro ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none scale-105'
        }`}
      >
        <div className="flex flex-col items-center text-center animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-md px-10 sm:px-12 py-7 sm:py-8 rounded-3xl shadow-2xl border border-black/5 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="assets/marca-grafica-principal.png" 
              alt="AG MUEBLES - Marca Gráfica Principal" 
              className="h-28 sm:h-36 w-auto object-contain filter drop-shadow-sm" 
            />
          </div>
        </div>
      </div>

      {/* Marco de Escala: La página comienza compacta y se expande suavemente a pantalla completa */}
      <div className={`page-scale-frame ${isPageExpanded ? 'expanded' : ''} min-h-screen bg-[#E9E7E2] text-[#2C2F34]`}>

        {/* 1. Ticker Continuo en la Cabecera (Mara SRL style) */}
        <MarqueeBanner />

        {/* 2. Encabezado Fijo */}
        <Header 
          onOpenMenu={() => setIsNavOpen(true)}
          viewMode={viewMode}
          onToggleView={setViewMode}
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
          onReplayIntro={playEntrance}
        />

        {/* 4. Sección Hero (Manifiesto & Referencia 01) */}
        <HeroSection 
          onExplore={() => {
            document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* 5. Catálogo de Sistemas Arquitectónicos (100% Fondo #E9E7E2) */}
        <section id="systems" className="py-20 sm:py-28 bg-[#E9E7E2] border-b border-[#2C2F34]/15">
          <div className="container mx-auto px-4 sm:px-8">
            
            {/* Cabecera de la Sección y Conmutador de Vistas */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2C2F34]/15 pb-6 mb-16 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E0B605] block mb-1">
                  [ 02 // ARCHIVO DE SISTEMAS ]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#2C2F34]">
                  Colección de Sistemas Arquitectónicos
                </h2>
              </div>

              {/* Botones de Cambio de Vista */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase text-gray-500 hidden sm:inline">Vista:</span>
                <div className="flex items-center border border-[#2C2F34]/30 rounded-full p-1 text-xs font-mono uppercase bg-white/60">
                  <button
                    onClick={() => setViewMode('gallery')}
                    className={`px-4 py-1.5 rounded-full transition-all ${
                      viewMode === 'gallery' ? 'bg-[#2C2F34] text-[#F0D030] font-bold shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Galería Editorial
                  </button>
                  <button
                    onClick={() => setViewMode('index')}
                    className={`px-4 py-1.5 rounded-full transition-all ${
                      viewMode === 'index' ? 'bg-[#2C2F34] text-[#F0D030] font-bold shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Tabla Técnica
                  </button>
                </div>
              </div>
            </div>

            {/* Renderizado de la Vista Seleccionada */}
            {viewMode === 'gallery' ? (
              <ProductGallery onSelectProduct={setSelectedProduct} />
            ) : (
              <TechnicalIndexTable onSelectProduct={setSelectedProduct} />
            )}

          </div>
        </section>

        {/* 6. Archivo de Materiales Nobles */}
        <MaterialsMatrix />

        {/* 7. El Taller & Ebanistería */}
        <AtelierCraftSection 
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* 8. Pie de Página */}
        <Footer 
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

      </div>

      {/* 3. Menú Overlay Pantalla Completa (Fuera del frame de escala) */}
      <FullScreenNav 
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Ficha Técnica Desplegable Lateral */}
      <ProductDrawer 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onImageClick={setLightboxImage}
      />

      {/* Quick Inquiry Modal - Cierre al hacer click por fuera */}
      {isInquiryModalOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsInquiryModalOpen(false)}
        >
          <div 
            className="relative bg-[#E9E7E2] text-[#2C2F34] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#2C2F34]/20 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsInquiryModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#2C2F34]/30 flex items-center justify-center text-gray-700 hover:bg-[#2C2F34] hover:text-white"
            >
              &times;
            </button>
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E0B605] block mb-1">
                // CONTACTO CON EL TALLER
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#2C2F34]">
                Iniciar Proyecto a Medida
              </h3>
              <p className="text-xs font-mono text-gray-600 mt-1">
                Agenda toma de medidas o envía planos arquitectónicos para modelado 3D.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.clientName.value;
                const phone = e.target.clientPhone.value;
                const project = e.target.projectType.value;
                const url = `https://wa.me/573000000000?text=${encodeURIComponent(
                  `Hola AG Muebles, deseo solicitar asesoría para un proyecto arquitectónico:\n- Nombre: ${name}\n- Teléfono: ${phone}\n- Tipo de Proyecto: ${project}`
                )}`;
                window.open(url, '_blank');
                setIsInquiryModalOpen(false);
              }}
              className="space-y-3 font-mono text-xs"
            >
              <div>
                <label className="block uppercase text-gray-500 mb-1">Nombre Completo *</label>
                <input 
                  type="text" 
                  name="clientName" 
                  required 
                  placeholder="Ej. Arq. Daniel Valencia" 
                  className="w-full px-4 py-2.5 rounded-lg border border-[#2C2F34]/25 bg-white focus:outline-none focus:border-[#2C2F34]"
                />
              </div>

              <div>
                <label className="block uppercase text-gray-500 mb-1">Teléfono / WhatsApp *</label>
                <input 
                  type="tel" 
                  name="clientPhone" 
                  required 
                  placeholder="+57 300 000 0000" 
                  className="w-full px-4 py-2.5 rounded-lg border border-[#2C2F34]/25 bg-white focus:outline-none focus:border-[#2C2F34]"
                />
              </div>

              <div>
                <label className="block uppercase text-gray-500 mb-1">Tipología del Espacio *</label>
                <select 
                  name="projectType" 
                  className="w-full px-4 py-2.5 rounded-lg border border-[#2C2F34]/25 bg-white focus:outline-none focus:border-[#2C2F34]"
                >
                  <option value="Cocina Monolith">Cocina Monolith a Medida</option>
                  <option value="Panel & TV Kanso">Panel & Salón Kanso</option>
                  <option value="Vestidor Lumina">Vestidor Lumina con Vitrinas</option>
                  <option value="Comedor Kyoto">Mesa & Comedor Kyoto</option>
                  <option value="Librero Studio 360">Librero Arquitectónico</option>
                  <option value="Proyecto Integral">Residencia / Contrato Completo</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C2F34] hover:bg-black text-[#F0D030] py-3.5 rounded-full font-bold uppercase tracking-widest text-xs mt-2 transition-all shadow"
              >
                Conectar con Atelier vía WhatsApp &rarr;
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Visor de Imágenes Lightbox - Cierre al hacer click por fuera o Esc */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn cursor-zoom-out select-none"
          onClick={() => setLightboxImage(null)}
          title="Click en cualquier parte por fuera para cerrar"
        >
          <div 
            className="relative max-w-5xl max-h-[92vh] flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-3 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F0D030] animate-pulse"></span>
                <span className="text-[11px] uppercase tracking-wider text-gray-400">
                  Click por fuera o [Esc] para salir
                </span>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#F0D030] text-white hover:text-[#2C2F34] transition-all font-mono text-xs uppercase tracking-wider border border-white/20"
              >
                <span>Cerrar</span>
                <span className="text-base leading-none font-bold">&times;</span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#181a1b] max-h-[78vh] flex items-center justify-center">
              <img 
                src={lightboxImage.url} 
                alt={lightboxImage.title || 'Detalle'} 
                className="w-auto h-auto max-h-[76vh] max-w-[90vw] object-contain"
              />
              {(lightboxImage.title || lightboxImage.subtitle) && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                  <div>
                    {lightboxImage.code && (
                      <span className="text-xs font-mono bg-[#F0D030] text-[#2C2F34] font-bold px-2.5 py-0.5 rounded-sm uppercase tracking-wider mr-2 inline-block mb-1">
                        {lightboxImage.code}
                      </span>
                    )}
                    <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white inline-block">
                      {lightboxImage.title}
                    </h4>
                    {lightboxImage.subtitle && (
                      <p className="text-xs font-mono text-gray-300 mt-1">
                        {lightboxImage.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-[#F0D030] uppercase tracking-widest hidden sm:inline border border-[#F0D030]/30 px-2 py-1 rounded">
                    AG Muebles
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action WhatsApp */}
      <a
        href="https://wa.me/573000000000?text=Hola%20AG%20Muebles,%20deseo%20asesoría%20para%20un%20proyecto%20arquitectónico."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#2C2F34] hover:bg-black text-[#F0D030] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 border border-white/20"
        aria-label="WhatsApp"
        title="Chat con Ebanista / Arquitecto"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.055-1.579-.333-.945-.389-1.536-.931-1.637-1.07-.101-.138-.809-1.077-.809-2.054 0-.978.508-1.459.689-1.659.182-.2.397-.249.53-.249.133 0 .265.003.382.008.123.006.287-.046.45.344.167.399.57 1.39.621 1.493.05.103.084.224.016.358-.069.135-.104.218-.206.338-.103.12-.216.269-.309.362-.103.103-.211.215-.091.421.12.206.533.879 1.144 1.423.787.7 1.448.916 1.654 1.019.206.103.327.086.447-.052.12-.137.515-.6.653-.806.137-.206.275-.172.463-.103.189.069 1.196.564 1.402.667.206.103.344.155.395.241.052.086.052.5-.092.905z"/>
        </svg>
      </a>

    </div>
  );
}
