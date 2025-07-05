
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
                alt="SyncLink Logo" 
                className="w-12 h-12 rounded-xl group-hover:scale-105 transition-transform"
              />
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SyncLink</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Features
            </button>
            <Link 
              to="/support"
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Support
            </Link>
            <button 
              onClick={() => scrollToSection('privacy')}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Privacy
            </button>
            <button 
              onClick={() => scrollToSection('terms')}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-2 border border-slate-800">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block px-4 py-3 text-slate-300 hover:text-purple-400 transition-colors w-full text-left font-medium rounded-xl hover:bg-slate-800/50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block px-4 py-3 text-slate-300 hover:text-purple-400 transition-colors w-full text-left font-medium rounded-xl hover:bg-slate-800/50"
              >
                Features
              </button>
              <Link 
                to="/support"
                className="block px-4 py-3 text-slate-300 hover:text-purple-400 transition-colors w-full text-left font-medium rounded-xl hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <button 
                onClick={() => scrollToSection('privacy')}
                className="block px-4 py-3 text-slate-300 hover:text-purple-400 transition-colors w-full text-left font-medium rounded-xl hover:bg-slate-800/50"
              >
                Privacy
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="block px-4 py-3 text-slate-300 hover:text-purple-400 transition-colors w-full text-left font-medium rounded-xl hover:bg-slate-800/50"
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
