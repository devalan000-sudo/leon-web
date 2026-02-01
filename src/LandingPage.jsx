import React from 'react';
import { ChevronRight, MessageCircle, Monitor, Smartphone, Zap } from 'lucide-react';
import Contacto from './Contacto';

const LandingPage = () => {
    return (
        <div className="bg-zinc-950 text-white min-h-screen font-sans">

            {/* 1. NAVBAR - Limpio y Profesional */}
            <nav className="flex justify-between items-center px-8 py-6 border-b border-zinc-900">
                <div className="text-xl font-bold flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg"></div>
                    Páginas Web León
                </div>
                <div className="hidden md:flex gap-8 text-zinc-400">
                    <a href="#solucion" className="hover:text-emerald-500 transition">Solución</a>
                    <a href="#demos" className="hover:text-emerald-500 transition">Demos</a>
                    <button className="text-emerald-500 font-semibold">Iniciar Proyecto</button>
                </div>
            </nav>

            {/* 2. HERO - Con Animación de Wireframes */}
            <header className="px-8 py-20 max-w-6xl mx-auto text-center md:text-left md:flex items-center gap-12 leading-relaxed">
                {/* Texto (Lado Izquierdo) */}
                <div className="md:w-1/2 space-y-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        Tu negocio en <span className="text-emerald-500 inline-block relative">
                            línea
                            {/* Subrayado sutil */}
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-emerald-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>, sin complicaciones.
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
                        Creamos vitrinas digitales profesionales para negocios en León, Gto. Muestra tus productos y cierra ventas por WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
                        <button className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 hover:scale-105 group">
                            Ver Catálogos Demo <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="text-zinc-300 hover:text-emerald-400 font-semibold px-8 py-4 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all">
                            Cómo funciona
                        </button>
                    </div>
                </div>

                {/* Animación (Lado Derecho) */}
                <div className="hidden md:block md:w-1/2 relative mt-12 md:mt-0 perspective-1000">
                    {/* Luz de fondo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/20 blur-[100px] rounded-full"></div>

                    {/* Contenedor de las "páginas" */}
                    <div className="relative h-[450px] w-full flex justify-center items-center">

                        {/* Wireframe 1 (Fondo - Desktop) */}
                        <div className="absolute bg-zinc-800/50 border border-zinc-700/50 w-11/12 h-64 rounded-xl -rotate-6 translate-y-8 blur-[1px] opacity-60 scale-90 origin-bottom-left transition-all duration-700 hover:rotate-0 hover:scale-95 hover:opacity-80 hover:blur-0 z-0">
                            <div className="h-4 bg-zinc-700/50 rounded-t-xl border-b border-zinc-700/50 flex items-center px-3 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-zinc-600"></div><div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                            </div>
                        </div>

                        {/* Wireframe 2 (Medio - Tablet) */}
                        <div className="absolute bg-zinc-800/80 border border-zinc-700/80 w-9/12 h-80 rounded-xl -rotate-3 translate-y-4 opacity-80 scale-95 origin-bottom transition-all duration-700 hover:rotate-0 hover:scale-100 hover:translate-y-2 z-10 shadow-xl">
                            <div className="p-4 space-y-3 opacity-50">
                                <div className="h-8 bg-zinc-700/50 rounded w-1/3 animate-pulse"></div>
                                <div className="h-24 bg-zinc-700/30 rounded w-full"></div>
                                <div className="space-y-2"><div className="h-3 bg-zinc-700/30 rounded w-full"></div><div className="h-3 bg-zinc-700/30 rounded w-5/6"></div></div>
                            </div>
                        </div>

                        {/* Wireframe 3 (Frente - Mobile - EL PRINCIPAL) */}
                        {/* Nota: Usamos 'animate-bounce' con una duración personalizada muy lenta para el efecto de flotar */}
                        <div className="absolute bg-zinc-900 border-2 border-emerald-500/40 w-7/12 h-96 rounded-2xl shadow-2xl shadow-emerald-500/10 z-20 overflow-hidden hover:border-emerald-400 transition-colors duration-500" style={{ animation: 'bounce 6s infinite ease-in-out' }}>
                            {/* Simulación de Header Móvil */}
                            <div className="h-12 bg-zinc-800/80 border-b border-zinc-800 flex items-center justify-between px-4">
                                <div className="w-20 h-3 bg-zinc-700 rounded-full"></div>
                                <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center">
                                    <div className="w-3 h-0.5 bg-emerald-500"></div>
                                </div>
                            </div>
                            {/* Simulación de Contenido */}
                            <div className="p-5 space-y-5">
                                {/* Hero Image Placeholder */}
                                <div className="h-32 bg-gradient-to-tr from-zinc-800 to-zinc-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
                                    <Monitor size={24} className="text-zinc-600/50" />
                                </div>
                                {/* Texto y Precio */}
                                <div className="space-y-2.5 pt-2">
                                    <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
                                    <div className="h-3 bg-zinc-800 rounded w-full"></div>
                                    <div className="h-3 bg-zinc-800 rounded w-2/3"></div>
                                </div>
                                {/* Botón CTA */}
                                <div className="h-10 bg-emerald-600/90 rounded-lg w-full mt-4 flex items-center justify-center px-4">
                                    <div className="h-3 bg-white/80 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

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

            {/* SECCIÓN DE CIERRE: PLAN Y PROCESO */}
            <section id="precios" className="py-24 px-8 bg-zinc-950">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Todo lo que necesitas en un <span className="text-emerald-500">solo paquete</span></h2>
                        <p className="text-zinc-400 text-lg">Sin letras chiquitas, diseñado para el comercio de León.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Tarjeta de Precio (La Oferta) */}
                        <div className="bg-zinc-900 border-2 border-emerald-500/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-emerald-500 transition-colors">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-950 text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                                Más Popular
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Plan "Vitrina Digital"</h3>
                            <p className="text-zinc-400 mb-6">Ideal para catálogos de productos y servicios profesionales.</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-extrabold text-white">$3500 MXN</span>
                                <span className="text-zinc-500 italic">pago único</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Diseño 100% Mobile First",
                                    "Catálogo con fotos y precios claros",
                                    "Botón de WhatsApp directo",
                                    "Ubicación en Google Maps",
                                    "Optimización de velocidad (React)",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/40">
                                Apartar mi lugar este mes
                            </button>
                        </div>

                        {/* Proceso (Eliminando el miedo a lo complejo) */}
                        <div className="space-y-10 py-4">
                            <h3 className="text-2xl font-bold">¿Cómo trabajamos?</h3>

                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Entrevista rápida", desc: "Me cuentas qué vendes y qué precios quieres mostrar." },
                                    { step: "02", title: "Diseño y Carga", desc: "Yo armo tu catálogo digital con la información de tu negocio." },
                                    { step: "03", title: "Lanzamiento", desc: "En pocos días tienes tu link listo para compartir por WhatsApp." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <span className="text-3xl font-black text-emerald-500/20">{item.step}</span>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                            <p className="text-zinc-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                                <p className="text-sm text-zinc-500 italic">
                                    * Al ser un servicio personalizado para negocios locales de León, el costo se ajusta a la cantidad de productos en tu catálogo.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

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

            <Contacto />

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