import React from 'react';

const Precios = () => {
    return (
        <section id="precios" className="py-24 px-8 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Todo lo que necesitas en un <span className="text-emerald-500">solo paquete</span></h2>
                    <p className="text-zinc-400 text-lg">Sin letras chiquitas, diseñado para el comercio de León.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-20">

                    {/* Tarjeta 1: Página Web */}
                    <div className="bg-zinc-900 border-2 border-emerald-500/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-emerald-500 transition-colors h-full flex flex-col">
                        <div className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest border-b border-l border-emerald-500/30">
                            Esencial
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Página Web</h3>
                        <p className="text-zinc-400 mb-6 text-sm">Ideal para catálogos de productos y servicios profesionales.</p>

                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-extrabold text-white">$4,000</span>
                            <span className="text-zinc-500 italic text-sm">/ único</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Diseño 100% Mobile First",
                                "Catálogo de productos",
                                "Botón de WhatsApp directo",
                                "Ubicación en Google Maps",
                                "Optimización de velocidad (React)",
                                "Hosting incluido por 1 año"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full bg-zinc-800 hover:bg-emerald-600/20 text-white hover:text-emerald-400 border border-zinc-700 hover:border-emerald-500 font-bold py-4 rounded-xl transition-all">
                            Elegir Plan
                        </button>
                    </div>

                    {/* Tarjeta 2: E-commerce (NUEVA) */}
                    <div className="bg-zinc-900 border-2 border-emerald-500 p-8 rounded-3xl shadow-2xl shadow-emerald-900/20 relative overflow-hidden group transition-transform hover:-translate-y-1 h-full flex flex-col">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-950 text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                            Más Completo
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Tienda en Línea</h3>
                        <p className="text-zinc-400 mb-6 text-sm">Vende en automático con pasarela de pagos y carrito.</p>

                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-extrabold text-white">$10,000</span>
                            <span className="text-zinc-500 italic text-sm">/ único</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Todo lo de Página Web",
                                "Carrito de Compras",
                                "Pagos con Tarjeta (Stripe/PayPal)",
                                "Panel de Administración",
                                "Gestión de Inventario",
                                "Cupones de Descuento",
                                "Hosting incluido por 1 año"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/40">
                            Lo quiero todo
                        </button>
                    </div>

                </div>

                {/* Proceso (Movido abajo) */}
                <div className="max-w-3xl mx-auto space-y-10 pt-8 border-t border-zinc-900">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold">¿Cómo trabajamos?</h3>
                        <p className="text-zinc-400 mt-2">Un proceso simple para que tú te enfoques en tu negocio.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Entrevista", desc: "Platicamos sobre tus necesidades." },
                            { step: "02", title: "Desarrollo", desc: "Diseño y programo tu solución." },
                            { step: "03", title: "Entrega", desc: "Recibes tu sitio listo para vender." }
                        ].map((item, i) => (
                            <div key={i} className="text-center space-y-3">
                                <span className="text-4xl font-black text-emerald-500/20 block">{item.step}</span>
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-sm text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Precios;
