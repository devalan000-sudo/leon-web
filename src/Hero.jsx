import React from 'react';
import { Monitor, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
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
                    <a
                        href="https://wa.me/524772803134"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 hover:scale-105 group"
                    >
                        <MessageCircle size={20} className="group-hover:-rotate-12 transition-transform" />
                        Enviar Mensaje
                    </a>
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
    );
};

export default Hero;
