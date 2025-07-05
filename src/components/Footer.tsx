
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
                alt="RosterFlow Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-white">RosterFlow</span>
            </div>
            <p className="text-slate-400 text-sm">
              The ultimate Discord bot for sports and gaming league management. 
              Streamline your league operations with powerful automation tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('privacy')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Get Started</h3>
            <div className="space-y-3">
              <a 
                href="https://discord.com/oauth2/authorize?client_id=1351652889935745104&permissions=8&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                Add Bot to Server
              </a>
              <a 
                href="https://discord.gg/rosterflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                Join Support Server
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 RosterFlow Bot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
