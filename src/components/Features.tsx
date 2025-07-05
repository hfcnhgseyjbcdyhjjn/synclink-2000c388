import { Users, Trophy, FileText, Shield, Bot, Zap, UserPlus, Settings, ExternalLink } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Player Management",
      description: "Complete roster management with signing, releasing, trading, and suspension capabilities. Track player movements with detailed transaction logs."
    },
    {
      icon: <Trophy className="w-8 h-8 text-cyan-400" />,
      title: "League Operations",
      description: "Automated standings calculations, game score reporting, and comprehensive league statistics tracking for competitive gameplay."
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: "Team Roster Display",
      description: "View complete team rosters showing Franchise Owner, General Manager, Head Coach, Assistant Coach, and all players with the /roster command."
    },
    {
      icon: <UserPlus className="w-8 h-8 text-cyan-400" />,
      title: "Staff Applications",
      description: "Streamlined application process with /apply command. Users can apply for Franchise Owner, General Manager, or Head Coach positions through interactive forms."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Role-Based Permissions",
      description: "Granular permission system with configurable roles for league administrators, team staff, and players ensuring proper access control."
    },
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: "Smart Automation",
      description: "Automated role assignments, transaction notifications, and league updates that reduce manual administrative work."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Demand System",
      description: "Advanced player demand tracking with configurable cooldowns and automated role management for active league participation."
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      title: "Auto Setup",
      description: "Quick league initialization with autosetup feature that automatically configures essential roles, channels, and settings for immediate use."
    }
  ];

  const popularServers = [
    {
      name: "LFL",
      link: "https://discord.gg/LFL"
    },
    {
      name: "RCL", 
      link: "https://discord.gg/RCL"
    },
    {
      name: "GCFL",
      link: "https://discord.gg/gcfl"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Powerful Features</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to run a professional sports or gaming league on Discord
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-slate-600/50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1351652889935745104&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-cyan-500/25"
            >
              <Bot className="w-5 h-5 mr-2" />
              Add RosterFlow to Your Server
            </a>
            <a 
              href="https://discord.gg/rosterflow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors shadow-lg border border-slate-500"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Support Server
            </a>
            <a 
              href="https://discord.gg/rosterflow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg border border-green-500"
            >
              <Users className="w-5 h-5 mr-2" />
              Community Discord
            </a>
          </div>
        </div>

        {/* Popular Servers Section */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-white">Popular Servers Using RosterFlow</h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Join these amazing communities that trust RosterFlow for their league management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularServers.map((server, index) => (
              <a
                key={index}
                href={server.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-white">{server.name}</h4>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="mt-4 text-cyan-400 text-sm font-medium">
                  Join Server →
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
