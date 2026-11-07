import { useState } from 'react';
import { MOSCareerBridge } from './components/MOSCareerBridge';
import { VAClaimEvidence } from './components/VAClaimEvidence';
import { ResourceHub305 } from './components/ResourceHub305';
import { PrivacySecurity } from './components/PrivacySecurity';
import { Briefcase, Scale, MapPin, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'mos' | 'claim' | 'resources' | 'privacy'>('mos');
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 flex flex-col font-sans">
      {/* Top Tactical Command Header */}
      <header className="border-b border-slate-700/80 bg-[#080E21]/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold font-mono text-lg shadow-sm">
                V3
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-black tracking-wider text-slate-100 font-mono">
                    VETNEXUS <span className="text-amber-400">305</span>
                  </h1>
                  <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/30">
                    FIU 305 EDITION
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                  Mission Transition & 38 CFR VA Claims Co-Pilot
                </p>
              </div>
            </div>

            {/* Crisis Alert Chip */}
            <div className="flex items-center gap-3">
              <a
                href="tel:988"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 hover:text-white text-xs font-semibold transition"
                title="Dial 988, then press 1 for Veterans Crisis Line"
              >
                <Phone className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                <span className="hidden md:inline">Veterans Crisis Line:</span>
                <span className="font-mono font-bold text-amber-300">988 + 1</span>
              </a>
            </div>
          </div>

          {/* Tactical Tab Navigation Bar */}
          <nav className="flex items-center gap-2 border-t border-slate-800/80 pt-2 pb-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('mos')}
              className={`px-3.5 py-2 rounded text-xs font-semibold flex items-center gap-2 transition whitespace-nowrap ${
                activeTab === 'mos'
                  ? 'bg-amber-500 text-black shadow-sm font-bold'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              MOS Career Bridge
            </button>

            <button
              onClick={() => setActiveTab('claim')}
              className={`px-3.5 py-2 rounded text-xs font-semibold flex items-center gap-2 transition whitespace-nowrap ${
                activeTab === 'claim'
                  ? 'bg-amber-500 text-black shadow-sm font-bold'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <Scale className="w-4 h-4" />
              VA Claim Nexus Auditor
            </button>

            <button
              onClick={() => setActiveTab('resources')}
              className={`px-3.5 py-2 rounded text-xs font-semibold flex items-center gap-2 transition whitespace-nowrap ${
                activeTab === 'resources'
                  ? 'bg-amber-500 text-black shadow-sm font-bold'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              305 South Florida Hub
            </button>

            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-3.5 py-2 rounded text-xs font-semibold flex items-center gap-2 transition whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'bg-amber-500 text-black shadow-sm font-bold'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Privacy & Local Audit
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'mos' && <MOSCareerBridge onNotify={showNotification} />}
        {activeTab === 'claim' && <VAClaimEvidence onNotify={showNotification} />}
        {activeTab === 'resources' && <ResourceHub305 onNotify={showNotification} />}
        {activeTab === 'privacy' && <PrivacySecurity onNotify={showNotification} />}
      </main>

      {/* Floating Action Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 border border-emerald-500 text-emerald-200 px-4 py-3 rounded-lg shadow-xl flex items-center gap-2.5 animate-bounce text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Command Console Footer */}
      <footer className="border-t border-slate-800 bg-[#070D1E] py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-300">VETNEXUS 305</span>
            <span>·</span>
            <span>Built for the 305 Veterans Hackathon Edition November 2026</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span>Organized by GDG at FIU & Code Crunch</span>
            <span>·</span>
            <span>100% Free & Open Source</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
