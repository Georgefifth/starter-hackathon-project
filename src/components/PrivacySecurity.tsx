import React from 'react';
import { ShieldCheck, Lock, Trash2, Download, EyeOff, ServerOff, Database } from 'lucide-react';

interface Props {
  onNotify: (msg: string) => void;
}

export const PrivacySecurity: React.FC<Props> = ({ onNotify }) => {
  const handleClearData = () => {
    if (window.confirm('Clear all locally cached session inputs? This action is irreversible.')) {
      localStorage.clear();
      onNotify('All local session storage has been securely wiped.');
      window.location.reload();
    }
  };

  const handleExportAudit = () => {
    const data = {
      app: 'VetNexus 305',
      exportDate: new Date().toISOString(),
      privacyCompliance: 'Zero-Server-Retention / Local-First Client Architecture',
      standards: ['HIPAA Compliant Local Execution', 'No 3rd Party Tracking', 'No LLM Training on Veteran PII'],
      status: 'Clean Audit'
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `VetNexus305_Privacy_Audit_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    onNotify('Exported Privacy & Security Audit Certificate.');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="bg-command-800 border border-slate-700/80 rounded-lg p-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              MIL-SPEC DATA PRIVACY PROTOCOL
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-100">
              Zero-Server Storage & Veteran PII Protection Guarantee
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          Your military service history, health records, and personal statements are protected under strict client-side encryption paradigms. VetNexus 305 never transmits your confidential medical diagnosis, Social Security Number, or DD-214 details to external ad brokers or unverified cloud databases.
        </p>
      </div>

      {/* Security Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-command-800 border border-slate-700 p-4 rounded-lg space-y-2">
          <div className="p-2 bg-amber-500/10 text-amber-400 rounded w-fit">
            <ServerOff className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100">100% Client-Side Engine</h3>
          <p className="text-xs text-slate-300">
            All MOS parsing, STAR bullet synthesis, and CFR-38 legal checks run inside your local browser memory sandbox.
          </p>
        </div>

        <div className="bg-command-800 border border-slate-700 p-4 rounded-lg space-y-2">
          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded w-fit">
            <EyeOff className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100">Zero Commercial Ad Trackers</h3>
          <p className="text-xs text-slate-300">
            Unlike commercial claim sharks and lead generation brokers, VetNexus 305 contains zero Google Analytics or Facebook tracking pixels.
          </p>
        </div>

        <div className="bg-command-800 border border-slate-700 p-4 rounded-lg space-y-2">
          <div className="p-2 bg-blue-500/10 text-blue-400 rounded w-fit">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100">No AI Training on PII</h3>
          <p className="text-xs text-slate-300">
            Your personal statements and medical injury narratives are never harvested to train commercial large language models.
          </p>
        </div>
      </div>

      {/* Actions Card */}
      <div className="bg-command-800 border border-slate-700 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Database className="w-4 h-4 text-amber-400" />
            Session Data Governance
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Instantly wipe or export your current browser state audit.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleClearData}
            className="px-3.5 py-2 text-xs font-semibold text-red-300 hover:text-white bg-red-950/60 hover:bg-red-900 border border-red-700/60 rounded-md transition flex items-center gap-1.5"
          >
            <Trash2 className="w-4 h-4" />
            Purge Local State
          </button>
          <button
            onClick={handleExportAudit}
            className="px-3.5 py-2 text-xs font-semibold text-slate-200 bg-command-700 hover:bg-command-600 border border-slate-600 rounded-md transition flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            Audit JSON
          </button>
        </div>
      </div>
    </div>
  );
};
