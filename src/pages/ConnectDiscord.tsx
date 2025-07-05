
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ConnectDiscord = () => {
  const discordAuthUrl = "https://discord.com/oauth2/authorize?client_id=1351652889935745104&redirect_uri=https%3A%2F%2Frosterflow.lovable.app%2Fdashboard-callback&response_type=code&scope=identify%20guilds";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-gradient-shift bg-[length:200%_200%]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Navigation */}
      <nav className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
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
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-xl backdrop-blur-sm">
              Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] relative z-10">
        <div className="max-w-md w-full mx-auto p-8">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <img 
                    src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
                    alt="SyncLink Bot" 
                    className="w-24 h-24 rounded-2xl relative z-10 group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Secure Connection
                </div>
                <h1 className="text-3xl font-display font-bold text-white">Connect Discord</h1>
                <p className="text-slate-400 leading-relaxed">
                  Link your Discord account to access SyncLink's advanced management dashboard and configure your bot settings
                </p>
              </div>

              <a 
                href={discordAuthUrl}
                className="block w-full"
              >
                <Button 
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-4 text-lg rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-3" />
                  Connect with Discord
                </Button>
              </a>

              <p className="text-sm text-slate-500 leading-relaxed">
                You'll be securely redirected to Discord to authorize the connection. 
                Your data is protected with enterprise-grade encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDiscord;
