import React from 'react';

export const ValueProps = () => {
  const pillars = [
    {
      icon: '📐',
      title: 'Diseño 3D Fotorrealista',
      desc: 'Visualiza cada rincón a escala exacta antes de cortar la primera madera. Ajustamos medidas, colores e iluminación a tu gusto.'
    },
    {
      icon: '🪵',
      title: 'Maderas Nobles & Cuarzo',
      desc: 'Seleccionamos robles, nogales, tableros hidrófugos de alta densidad y piedras sinterizadas resistentes a manchas e impacto.'
    },
    {
      icon: '✨',
      title: 'Muestras a Domicilio',
      desc: 'Toca las texturas reales en tu propio espacio con luz natural. Enviamos kits de muestras físicas de madera, lacas y textiles.'
    },
    {
      icon: '🛡️',
      title: 'Garantía Estructural de 10 Años',
      desc: 'Respaldo total en ensamble, correderas y bisagras. Un compromiso de durabilidad fundado por Aroldo Guerrero.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0B605] block mb-1">
            ADN de Marca
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C2F34]">
            La Experiencia AG MUEBLES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3">{item.icon}</span>
              <h3 className="font-bold text-base text-[#2C2F34] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
