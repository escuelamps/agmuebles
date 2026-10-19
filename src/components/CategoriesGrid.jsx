import React from 'react';
import { categories } from '../data/products';

export const CategoriesGrid = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F9FAFB] border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header de Sección */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0B605] block mb-2">
              Explora por Espacio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C2F34] tracking-tight">
              Mobiliario a Medida por Habitación
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md mt-2 sm:mt-0">
            Cada estancia tiene su propio ritmo. Diseñamos piezas integradas que maximizan la luz y el almacenamiento.
          </p>
        </div>

        {/* Grid de Categorías Estilo Castlery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                const el = document.getElementById('catalogo');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group cursor-pointer flex flex-col items-center text-center"
            >
              {/* Contenedor de Imagen Circular / Redondeada */}
              <div className="w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-200 mb-3.5 relative shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 border border-gray-100">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Títulos */}
              <h3 className="font-bold text-sm sm:text-base text-[#2C2F34] group-hover:text-[#E0B605] transition-colors leading-snug">
                {cat.name}
              </h3>
              <span className="text-xs text-gray-500 mt-0.5">
                {cat.itemCount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
