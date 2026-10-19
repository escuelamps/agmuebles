import React from 'react';

export const CustomerReviews = () => {
  const reviews = [
    {
      author: 'Arq. Mariana Restrepo',
      location: 'Bogotá, Chicó Reservado',
      space: 'Cocina Monolith & Alacenas Ocultas',
      rating: 5,
      comment: 'Como arquitecta, soy sumamente exigente con el despiece y la nivelación milimétrica. AG Muebles no solo respetó cada detalle del plano, sino que los herrajes y la luz indirecta superaron las expectativas de mi cliente.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      author: 'Felipe & Andrea Gómez',
      location: 'Medellín, El Poblado',
      space: 'Centro de TV Kanso & Panel Alistonado',
      rating: 5,
      comment: 'Buscábamos un estilo moderno, cálido y libre de cables visibles. El proceso con el render 3D fue clave para elegir el tono del roble. La instalación se hizo en un solo día sin ensuciar el piso.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
    },
    {
      author: 'Dr. Alejandro Morales',
      location: 'Chía, Hacienda Fontanar',
      space: 'Vestidor Walk-In Lumina con Vidrio Fumé',
      rating: 5,
      comment: 'El vestidor es una obra de arte. La sensación de abrir una gaveta de cierre suave forrada en terciopelo y ver la ropa iluminada automáticamente con los sensores es puro lujo diario.',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0B605] block mb-2">
              Comunidad & Confianza
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2F34] tracking-tight">
              Hogares Reales con AG MUEBLES
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-sm mt-2 sm:mt-0">
            Inspírate con residencias y proyectos reales diseñados, fabricados e instalados por nuestro equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={rev.image} 
                  alt={rev.space} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-sm text-[#2C2F34]">
                    {rev.author}
                  </h4>
                  <span className="text-xs text-gray-400 block">
                    {rev.location} &bull; <strong className="text-gray-700 font-semibold">{rev.space}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
