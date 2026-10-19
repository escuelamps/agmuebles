import React from 'react';
import { architecturalProducts } from '../data/products';

export const TechnicalIndexTable = ({ onSelectProduct }) => {
  return (
    <div className="overflow-x-auto bg-white/80 rounded-2xl border border-[#2C2F34]/15 p-4 sm:p-6 shadow-sm">
      <table className="w-full text-left border-collapse text-xs font-mono">
        <thead>
          <tr className="border-b-2 border-[#2C2F34] text-gray-500 uppercase tracking-widest text-[11px]">
            <th className="py-4 px-3">Código</th>
            <th className="py-4 px-4">Sistema / Modelo</th>
            <th className="py-4 px-4 hidden md:table-cell">Tipología</th>
            <th className="py-4 px-4 hidden lg:table-cell">Materiales Principales</th>
            <th className="py-4 px-4 hidden sm:table-cell">Dimensiones</th>
            <th className="py-4 px-3 text-right">Detalle</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#2C2F34]/15">
          {architecturalProducts.map((item) => (
            <tr 
              key={item.code}
              onClick={() => onSelectProduct(item)}
              className="hover:bg-[#2C2F34] hover:text-[#E9E7E2] transition-colors cursor-pointer group"
            >
              <td className="py-5 px-3 font-bold text-[#2C2F34] group-hover:text-[#F0D030]">
                {item.code}
              </td>
              <td className="py-5 px-4">
                <span className="font-bold text-sm tracking-tight uppercase block group-hover:text-white">
                  {item.name}
                </span>
                <span className="text-[10px] text-gray-500 group-hover:text-gray-300 md:hidden block">
                  {item.typology}
                </span>
              </td>
              <td className="py-5 px-4 hidden md:table-cell text-gray-600 group-hover:text-gray-300 uppercase">
                {item.typology}
              </td>
              <td className="py-5 px-4 hidden lg:table-cell text-gray-500 group-hover:text-gray-300 truncate max-w-xs">
                {item.materials.join(' &bull; ')}
              </td>
              <td className="py-5 px-4 hidden sm:table-cell text-gray-600 group-hover:text-gray-300">
                {item.dimensions}
              </td>
              <td className="py-5 px-3 text-right">
                <span className="inline-flex items-center gap-1.5 underline decoration-[#F0D030] group-hover:text-[#F0D030] font-bold">
                  Ver Ficha &rarr;
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
