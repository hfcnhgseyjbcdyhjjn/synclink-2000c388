
import { Sparkles, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800/50 py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-6">
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
            <p className="text-slate-400 leading-relaxed">
              The revolutionary Discord bot that transforms league management through intelligent automation, 
              enterprise-grade security, and seamless integration. Built for the future of competitive gaming.
            </p>
            <div className="flex items-center text-slate-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-400 fill-current" />
              <span>for the gaming community</span>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-display font-semibold text-lg">Quick Navigation</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="group flex items-center text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                <span>Features & Capabilities</span>
                <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('privacy')}
                className="group flex items-center text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                <span>Privacy Policy</span>
                <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="group flex items-center text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                <span>Terms of Service</span>
                <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Enhanced Actions */}
          <div className="space-y-6">
            <h3 className="text-white font-display font-semibold text-lg">Get Started Today</h3>
            <div className="space-y-4">
              <a 
                href="https://discord.com/oauth2/authorize?client_id=1351652889935745104&permissions=8&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl text-white hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col">
                  <span className="font-semibold">Add to Server</span>
                  <span className="text-sm text-slate-300">Start managing your league</span>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://discord.gg/rosterflow"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col">
                  <span className="font-semibold">Join Community</span>
                  <span className="text-sm text-slate-300">Get support & updates</span>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-slate-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © 2025 SyncLink Bot. All rights reserved. Revolutionizing league management.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <span>Powered by cutting-edge AI</span>
              <span>•</span>
              <span>Enterprise-grade security</span>
              <span>•</span>
              <span>24/7 uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
