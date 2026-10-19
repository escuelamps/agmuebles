import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const ProductGrid = ({ activeCategory, onSelectCategory, onQuickView }) => {
  const filterTabs = [
    { id: 'all', label: 'Todos' },
    { id: 'cocinas', label: 'Cocinas' },
    { id: 'salones', label: 'Salas & TV' },
    { id: 'dormitorios', label: 'Walk-in Closets' },
    { id: 'comedores', label: 'Comedores' },
    { id: 'almacenamiento', label: 'Libreros & Modulares' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Título de Sección */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0B605] block mb-2">
            Catálogo Exclusivo Atelier
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2F34] tracking-tight">
            Diseños Listos para Adaptar a Tu Espacio
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Cada pieza se fabrica según las dimensiones exactas de tu pared o estancia, con materiales y herrajes a tu elección.
          </p>
        </div>

        {/* Pestañas de Filtro (Castlery Filter Tabs) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeCategory === tab.id
                  ? 'bg-[#2C2F34] text-[#F0D030] shadow-md'
                  : 'bg-white text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Banner Inferior para Proyectos Especiales */}
        <div className="mt-16 bg-[#2C2F34] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F0D030] block mb-2">
              ¿No encuentras lo que buscas?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Desarrollamos Proyectos 100% Personalizados desde Cero
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Si ya tienes planos arquitectónicos, renders de tu diseñador o necesitas que nuestro equipo de interioristas mida tu espacio, contáctanos.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/573000000000?text=Hola%20AG%20Muebles,%20tengo%20un%20proyecto%20especial%20y%20quiero%20enviar%20planos."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F0D030] hover:bg-[#E0B605] text-[#2C2F34] font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider text-center transition-all shadow-md"
            >
              Enviar Planos a WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
