
import { Shield, FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <section id="terms" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
            <FileText className="w-4 h-4 mr-2" />
            Legal Information
          </div>
          <h2 className="text-5xl font-display font-bold text-white">
            Terms of <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Service</span>
          </h2>
          <p className="text-slate-400 text-lg font-light">Clear guidelines for using SyncLink services</p>
        </div>
        
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800/50">
          <div className="prose prose-slate prose-invert max-w-none space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-3xl font-display font-bold text-blue-400">SyncLink Terms of Service</h3>
              </div>
              <p className="text-slate-300 text-lg"><strong className="text-white">Last Updated:</strong> June 2, 2025</p>
              <p className="text-slate-300 text-lg leading-relaxed">
                By adding SyncLink to your Discord server or using its features, you agree to these comprehensive Terms of Service.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                1. Description of Service
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                SyncLink is an advanced Discord bot specifically designed for comprehensive sports and gaming league management, 
                providing enterprise-grade automation and professional-level administrative tools.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                2. User Responsibilities and Conduct
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                You agree to use SyncLink in full compliance with all applicable laws, Discord's Terms of Service, and Community Guidelines. 
                Server Administrators bear full responsibility for proper bot configuration and usage. Strictly prohibited activities include 
                spamming, abuse, exploitation attempts, harassment, or using SyncLink for any illegal activities or purposes.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                3. Service Availability and Modifications
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                The Service is provided "AS IS" and "AS AVAILABLE" without any warranties. We reserve the right to modify, 
                suspend, or discontinue the Service at any time with or without prior notice to ensure optimal performance and security.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                4. Intellectual Property Rights
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                SyncLink and all its features, functionality, and innovations are the exclusive property of its developers. 
                You are granted a limited, non-exclusive license to use the Bot strictly as intended for league management purposes.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                5. Data Protection and Privacy
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                Your use of SyncLink is governed by our comprehensive Privacy Policy, which details our commitment to 
                protecting your data and maintaining the highest standards of information security.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                6. Limitation of Liability
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                We are not liable for any data loss, damages, or disruptions arising from the use of SyncLink. 
                Users accept full responsibility for their server management and data backup practices.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                7. Service Termination
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                You may terminate service at any time by removing SyncLink from your server. We reserve the right to 
                suspend or terminate access for violations of these Terms or Discord's community policies.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                8. Terms Updates and Modifications
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                We may update these Terms periodically to reflect service improvements or legal requirements. 
                Notice of material changes will be provided through our official channels.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-display font-semibold text-white flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></span>
                9. Contact Information
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                For questions, concerns, or support regarding these Terms, please contact us through our official Discord Support Server: 
                <a href="https://discord.gg/rosterflow" className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors ml-1">
                  https://discord.gg/rosterflow
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
