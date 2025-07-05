
import { Shield, Users, Calendar, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Logo and bot image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
                alt="RosterFlow Bot" 
                className="w-32 h-32 mx-auto rounded-2xl shadow-2xl border-2 border-cyan-400/30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                RosterFlow
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
              The Ultimate Discord Bot for League Management
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Streamline your sports league on Discord with RosterFlow! A comprehensive bot designed to simplify and automate the management of sports-themed and competitive gaming leagues through powerful, intuitive slash commands.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto py-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-sm text-slate-300">Team Management</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-sm text-slate-300">Game Scheduling</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-sm text-slate-300">Live Standings</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm text-slate-300">Player Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
