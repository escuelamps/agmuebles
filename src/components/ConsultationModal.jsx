import React, { useState } from 'react';

export const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: 'Bogotá',
    room: 'cocina',
    budget: '$2,000 - $4,000 USD',
    notes: ''
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `¡Hola AG Muebles! Quiero agendar una asesoría de diseño 3D gratuita:\n- Nombre: ${form.name}\n- Teléfono: ${form.phone}\n- Ciudad: ${form.city}\n- Espacio: ${form.room}\n- Rango Inversión: ${form.budget}\n- Notas: ${form.notes}`
    );
    window.open(`https://wa.me/573000000000?text=${message}`, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0B605] block mb-1">
            Asesoría Personalizada
          </span>
          <h2 className="text-2xl font-extrabold text-[#2C2F34]">
            Agenda Tu Asesoría & Render 3D Gratuito
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Un diseñador o ebanista de AG Muebles evaluará tu espacio y te entregará una propuesta visual sin compromiso.
          </p>
        </div>

        {sent ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800">
            <span className="text-3xl block mb-2">✓</span>
            <h4 className="font-bold text-base mb-1">¡Solicitud Generada con Éxito!</h4>
            <p className="text-xs">Te hemos redirigido a WhatsApp para confirmar la fecha y hora de tu cita.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Nombre Completo *</label>
              <input 
                type="text" 
                required
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                placeholder="Ej. Carolina Mendoza"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F0D030]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Teléfono / WhatsApp *</label>
                <input 
                  type="tel" 
                  required
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  placeholder="+57 300 000 0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F0D030]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Ciudad / Municipio *</label>
                <input 
                  type="text" 
                  required
                  value={form.city}
                  onChange={e => setForm({...form, city: e.target.value})}
                  placeholder="Bogotá / Medellín / etc."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F0D030]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Espacio a Intervenir</label>
                <select 
                  value={form.room}
                  onChange={e => setForm({...form, room: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F0D030] bg-white"
                >
                  <option value="cocina">Cocina Integral</option>
                  <option value="salon">Centro de TV / Salón</option>
                  <option value="closet">Walk-in Closet / Vestidor</option>
                  <option value="comedor">Mesa & Comedor</option>
                  <option value="oficina">Estudio / Oficina</option>
                  <option value="completo">Residencia Completa</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Rango Estimado</label>
                <select 
                  value={form.budget}
                  onChange={e => setForm({...form, budget: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F0D030] bg-white"
                >
                  <option value="$1,000 - $2,500 USD">$1,000 - $2,500 USD</option>
                  <option value="$2,500 - $5,000 USD">$2,500 - $5,000 USD</option>
                  <option value="$5,000 - $10,000 USD">$5,000 - $10,000 USD</option>
                  <option value="Más de $10,000 USD">Más de $10,000 USD</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Detalles del proyecto o medidas</label>
              <textarea 
                rows="3"
                value={form.notes}
                onChange={e => setForm({...form, notes: e.target.value})}
                placeholder="Cuéntanos si tienes planos, fechas estimadas de entrega o ideas de materiales..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#F0D030]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2C2F34] hover:bg-black text-[#F0D030] py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Confirmar Cita por WhatsApp &rarr;
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
