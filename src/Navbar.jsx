import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-6 border-b border-zinc-900">
            <div className="text-xl font-bold flex items-center gap-2">
                Páginas Web León
            </div>
            <div className="hidden md:flex gap-8 text-zinc-400">
                <a href="#solucion" className="hover:text-emerald-500 transition">Inicio</a>
                <a href="#precios" className="hover:text-emerald-500 transition">Servicios</a>
                <a href="#contacto" className="text-emerald-500 font-semibold hover:text-emerald-400 transition">Contacto</a>
            </div>
        </nav>
    );
};

export default Navbar;
