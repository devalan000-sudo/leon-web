import React from 'react';
import { MessageCircle, Smartphone, Zap } from 'lucide-react';
import Contacto from './Contacto';
import Navbar from './Navbar';
import Hero from './Hero';
import Precios from './Precios';

const LandingPage = () => {
    return (
        <div className="bg-zinc-950 text-white min-h-screen font-sans">

            <Navbar />

            <Hero />

            {/* SECCIÓN DE EMPATÍA / INSIGHT */}
            <section className="py-20 px-8 bg-zinc-950 relative overflow-hidden border-y border-zinc-900">
                {/* Decoración sutil de fondo */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-zinc-500 uppercase tracking-[0.2em] text-sm font-bold mb-8">
                        La realidad del mercado actual
                    </h2>

                    <p className="text-2xl md:text-4xl text-zinc-200 font-medium leading-tight">
                        "Tus clientes potenciales quieren ver <span className="text-white font-bold">catálogos, precios, productos</span> y servicios sin tener que trasladarse a tu negocio."
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-4">
                        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            Si no encuentran esta información en segundos desde su celular,
                            estás perdiendo ventas frente a quienes sí tienen una <span className="text-emerald-500/80 font-semibold">Vitrina Digital</span>.
                        </p>
                    </div>
                </div>
            </section>

            <Precios />

            <Contacto />

            {/* 3. BENEFICIOS - ¿Por qué nosotros? */}
            <section id="solucion" className="bg-zinc-900/50 py-20 px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center rounded-lg text-emerald-500">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Carga Instantánea</h3>
                        <p className="text-zinc-400">Páginas optimizadas con tecnología moderna (React) para que tus clientes no esperen ni un segundo.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center rounded-lg text-emerald-500">
                            <Smartphone size={24} />
                        </div>
                        <h3 className="text-xl font-bold">100% Mobile First</h3>
                        <p className="text-zinc-400">Diseñado para verse perfecto en el celular, que es desde donde te buscan tus clientes en León.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center rounded-lg text-emerald-500">
                            <MessageCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Botón de WhatsApp</h3>
                        <p className="text-zinc-400">Convierte visitantes en clientes reales con un botón directo a tu chat personal.</p>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER / CONTACTO */}
            <footer className="py-12 px-8 text-center border-t border-zinc-900">
                <p className="text-zinc-500 mb-4">Páginas Web León © 2026</p>
                <p className="text-sm text-zinc-600">
                    Desarrollado por un programador y egresado de Ingeniería en Sistemas apasionado por el comercio local.
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;