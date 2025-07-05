
import { Shield, Users, Calendar, BarChart3, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-gradient-shift bg-[length:200%_200%]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-spin" style={{ animationDuration: '20s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          {/* Logo and bot image with enhanced styling */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-glow"></div>
              <img 
                src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
                alt="SyncLink Bot" 
                className="w-40 h-40 mx-auto rounded-3xl shadow-2xl border-2 border-purple-400/30 relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2 animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Enhanced headline with better typography */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              The Future of League Management
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                SyncLink
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Revolutionary Discord Bot for 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text"> League Excellence</span>
            </h2>
          </div>

          {/* Enhanced description */}
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your Discord server into a professional league management powerhouse. SyncLink brings enterprise-grade automation, 
            intuitive controls, and seamless integration to elevate your competitive gaming and sports communities.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1351652889935745104&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Shield className="w-5 h-5 mr-3" />
                Add SyncLink to Server
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a 
              href="https://discord.gg/rosterflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="group bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 text-white font-semibold px-8 py-4 text-lg rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <Users className="w-5 h-5 mr-3" />
                Join Community
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Enhanced feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-16">
            <div className="group text-center space-y-3 p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-display font-semibold text-white">Team Management</h3>
              <p className="text-sm text-slate-400">Advanced roster control</p>
            </div>
            <div className="group text-center space-y-3 p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-display font-semibold text-white">Smart Scheduling</h3>
              <p className="text-sm text-slate-400">Automated game planning</p>
            </div>
            <div className="group text-center space-y-3 p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-display font-semibold text-white">Live Analytics</h3>
              <p className="text-sm text-slate-400">Real-time insights</p>
            </div>
            <div className="group text-center space-y-3 p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-display font-semibold text-white">Secure Operations</h3>
              <p className="text-sm text-slate-400">Enterprise-grade security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
