
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ConnectDiscord = () => {
  const discordAuthUrl = "https://discord.com/oauth2/authorize?client_id=1351652889935745104&redirect_uri=https%3A%2F%2Frosterflow.lovable.app%2Fdashboard-callback&response_type=code&scope=identify%20guilds";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
              alt="RosterFlow Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold text-white">RosterFlow</span>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-md w-full mx-auto p-8">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-600">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/1ac9f7c4-f4ee-4db9-91a1-8df397726129.png" 
                  alt="RosterFlow Bot" 
                  className="w-20 h-20 rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-white">Connect Discord</h1>
                <p className="text-slate-400">
                  Link your Discord account to manage your RosterFlow bot settings
                </p>
              </div>

              <a 
                href={discordAuthUrl}
                className="w-full"
              >
                <Button 
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 text-lg"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Connect with Discord
                </Button>
              </a>

              <p className="text-sm text-slate-500">
                You'll be redirected to Discord to authorize the connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDiscord;
