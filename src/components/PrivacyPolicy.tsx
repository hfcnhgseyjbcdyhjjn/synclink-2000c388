
const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-white">Privacy Policy</h2>
          <p className="text-slate-400">How we handle and protect your data</p>
        </div>
        
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <div className="prose prose-slate prose-invert max-w-none space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">RosterFlow Privacy Policy</h3>
              <p className="text-slate-300"><strong>Last Updated:</strong> June 2, 2025</p>
              <p className="text-slate-300">
                Welcome to RosterFlow! This Privacy Policy explains how RosterFlow ("we," "us," or "our") collects, uses, and discloses information when you use our Discord bot.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">1. Information We Collect</h4>
              <p className="text-slate-300">
                When you add RosterFlow to your Discord server and use its features, we may collect and store the following types of information:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li><strong>Server (Guild) Information:</strong> Server ID; IDs of channels configured for bot functions (e.g., transaction logs, game announcements, draft channels, score logs, standings channels); IDs of roles configured for bot functions (e.g., admin roles, staff roles like Franchise Owner/GM/Coach, team roles, Free Agent role, Suspended role, Referee, Streamer, Pickup Host, demand-related roles); Server-specific settings configured through the `/setup` command (e.g., roster caps, enabled/disabled commands, demand system settings).</li>
                <li><strong>User Information:</strong> User IDs of individuals who interact with the bot or are subjects of bot actions (e.g., players being signed/released/traded, users reporting scores, users making demands, staff members appointed to roles). We <strong>do not</strong> typically store Discord usernames, discriminators, or avatars directly, relying on Discord User IDs for identification. Content provided within commands, such as reasons for suspensions, notes for game scores, or details in trade proposals.</li>
                <li><strong>Team Information:</strong> Team Role IDs (used as the primary identifier for a team); Team Names (as configured by server administrators); Team Emojis (as configured by server administrators).</li>
                <li><strong>League Operational Data:</strong> Transaction logs (player ID, team role ID, type, timestamp); Game scores (team role IDs, scores for each team, the User ID of the reporter, and timestamps); Standings Data (aggregated data derived from reported game scores); Setup Configurations (all settings configured through the `/setup` command).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">2. How We Use Your Information</h4>
              <p className="text-slate-300">We use the collected information solely to:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Provide, operate, and maintain the RosterFlow bot and its features</li>
                <li>Enable server administrators to configure the bot according to their league's needs</li>
                <li>Process user commands and interactions</li>
                <li>Generate league-specific data such as standings and transaction logs</li>
                <li>Respond to support requests and troubleshoot issues</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">3. Data Storage and Security</h4>
              <p className="text-slate-300">
                All data collected by RosterFlow is stored in a local SQLite database (`transaction_bot.db`) located in the environment where the bot is hosted. We take reasonable measures to protect the information stored from loss, misuse, unauthorized access, disclosure, alteration, or destruction. However, no internet-based service or data storage system is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">4. Data Sharing and Disclosure</h4>
              <p className="text-slate-300">
                We do not sell, rent, or trade your server's or users' information with any third parties for their marketing purposes. Information is not shared with third parties except:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>As necessary to interact with the Discord API to provide the bot's functionality</li>
                <li>If required by law, such as to comply with a subpoena, or similar legal process</li>
                <li>When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">5. Data Retention</h4>
              <p className="text-slate-300">
                Server configuration data is retained as long as the bot is present in your server and the configuration is active. Transactional data is retained to provide historical information. If RosterFlow is removed from your server, we will no longer collect new data from that server. Stored data may be deleted upon request or as part of routine data management.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">6. Your Rights and Choices</h4>
              <p className="text-slate-300">
                Server Administrators can manage the bot's configuration and remove the bot. Users can request information about their data by contacting us via the support server.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">7. Children's Privacy</h4>
              <p className="text-slate-300">
                RosterFlow is not directed to individuals under the age of 13 (or the relevant age in your jurisdiction). We do not knowingly collect personal information from children.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">8. Changes to This Privacy Policy</h4>
              <p className="text-slate-300">
                We may update this Privacy Policy. We will notify you of significant changes by posting the new Policy on our support server or website.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">9. Contact Us</h4>
              <p className="text-slate-300">
                If you have any questions, please contact us via our official Discord Support Server: <a href="https://discord.gg/rosterflow" className="text-cyan-400 hover:text-cyan-300 underline">https://discord.gg/rosterflow</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
