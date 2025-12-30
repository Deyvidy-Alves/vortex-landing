import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-2xl border border-white/20 shadow-lg px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0000FF] to-[#9E5EFF] bg-clip-text text-transparent">
                Vortex
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#solucoes" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                Soluções
              </a>
              <a href="#vclinic" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                V-Clinic
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                Contato
              </a>
              <button className="bg-[#0000FF] text-white px-6 py-3 rounded-lg hover:bg-[#0000CC] transition-all hover:shadow-lg hover:scale-105">
                Fale com um Consultor
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#solucoes" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                  Soluções
                </a>
                <a href="#vclinic" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                  V-Clinic
                </a>
                <a href="#sobre" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                  Sobre
                </a>
                <a href="#contato" className="text-gray-700 hover:text-[#0000FF] transition-colors">
                  Contato
                </a>
                <button className="bg-[#0000FF] text-white px-6 py-3 rounded-lg hover:bg-[#0000CC] transition-all w-full">
                  Fale com um Consultor
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
