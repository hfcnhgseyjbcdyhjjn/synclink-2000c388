
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
              alt="RosterFlow Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold text-white">RosterFlow</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Features
            </button>
            <Link 
              to="/support"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Support
            </Link>
            <button 
              onClick={() => scrollToSection('privacy')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Privacy
            </button>
            <button 
              onClick={() => scrollToSection('terms')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Terms
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors w-full text-left"
              >
                Features
              </button>
              <Link 
                to="/support"
                className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <button 
                onClick={() => scrollToSection('privacy')}
                className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors w-full text-left"
              >
                Privacy
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors w-full text-left"
              >
                Terms
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
