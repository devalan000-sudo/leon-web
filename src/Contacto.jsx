import React from 'react';
import { Mail, Send, MapPin } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-24 px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">¿Listo para dar el <span className="text-emerald-500">siguiente paso</span>?</h2>
              <p className="text-zinc-400 text-lg">
                Cuéntame sobre tu negocio. Estoy listo para ayudarte a crear una vitrina digital que trabaje por ti 24/7.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-widest">Correo Electrónico</p>
                  <p className="text-lg">web.paginas.leon@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-widest">Ubicación</p>
                  <p className="text-lg">León, Guanajuato, México</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            action="https://formspree.io/f/xbdybwbn"
            method="POST"
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl space-y-6 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 ml-1">Tu Nombre</label>
                <input
                  name="nombre" // ← ATRIBUTO NAME AGREGADO
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-400 ml-1">Nombre del Negocio</label>
                <input
                  name="negocio" // ← ATRIBUTO NAME AGREGADO
                  type="text"
                  placeholder="Ej. Zapatería León"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Correo de contacto</label>
              <input
                name="email" // ← ATRIBUTO NAME AGREGADO
                type="email"
                required
                placeholder="juan@empresa.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">¿En qué puedo ayudarte?</label>
              <textarea
                name="mensaje" // ← ATRIBUTO NAME AGREGADO
                rows="4"
                required
                placeholder="Cuéntame sobre tu catálogo..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none text-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Enviar Mensaje <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contacto;