
import { Users, Trophy, FileText, Shield, Bot, Zap, UserPlus, Settings, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Advanced Player Management",
      description: "Complete roster control with intelligent signing, releasing, trading, and suspension capabilities. Track every player movement with detailed transaction logs and analytics."
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-400" />,
      title: "Smart League Operations",
      description: "Automated standings calculations, real-time score reporting, and comprehensive league statistics that update instantly across all channels."
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: "Dynamic Team Rosters",
      description: "Beautiful, interactive team roster displays showing Franchise Owner, General Manager, Head Coach, Assistant Coach, and all players with the powerful /roster command."
    },
    {
      icon: <UserPlus className="w-8 h-8 text-green-400" />,
      title: "Streamlined Applications",
      description: "Professional application system with /apply command. Users can seamlessly apply for Franchise Owner, General Manager, or Head Coach positions through intuitive forms."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      title: "Enterprise Security",
      description: "Military-grade permission system with granular role controls for league administrators, team staff, and players ensuring bulletproof access management."
    },
    {
      icon: <Bot className="w-8 h-8 text-pink-400" />,
      title: "AI-Powered Automation",
      description: "Intelligent role assignments, proactive transaction notifications, and smart league updates that eliminate manual administrative work completely."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Advanced Demand System",
      description: "Sophisticated player demand tracking with configurable cooldowns and intelligent role management for maintaining active league participation."
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: "One-Click Setup",
      description: "Revolutionary autosetup feature that instantly configures essential roles, channels, and settings for immediate deployment and use."
    }
  ];

  const popularServers = [
    { name: "LFL", link: "https://discord.gg/LFL", description: "Leading Fantasy League" },
    { name: "RCL", link: "https://discord.gg/RCL", description: "Rocket Championship League" },
    { name: "GCFL", link: "https://discord.gg/gcfl", description: "Global Championship Football League" }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-5xl font-display font-bold text-white">
            Everything You Need for 
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">League Excellence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Transform your Discord server into a professional league management powerhouse with enterprise-grade tools and intelligent automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:bg-slate-800/50"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl group-hover:scale-110 transition-transform border border-slate-700/50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center space-y-8 mb-24">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1351652889935745104&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Bot className="w-5 h-5 mr-3" />
                Add SyncLink to Your Server
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a 
              href="https://discord.gg/rosterflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="group bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 text-white font-semibold px-10 py-4 text-lg rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <Users className="w-5 h-5 mr-3" />
                Join Support Server
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Enhanced Popular Servers Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              <Trophy className="w-4 h-4 mr-2" />
              Trusted by the Best
            </div>
            <h3 className="text-4xl font-display font-bold text-white">
              Elite Communities Choose 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"> SyncLink</span>
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              Join these prestigious communities that trust SyncLink for their professional league management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularServers.map((server, index) => (
              <a
                key={index}
                href={server.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:bg-slate-800/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-blue-300 transition-colors">{server.name}</h4>
                  <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors group-hover:scale-110" />
                </div>
                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">{server.description}</p>
                <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
