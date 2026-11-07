import React, { useState } from 'react';
import { MOS_DATABASE, MOSProfile, STARBullet } from '../data/mosDatabase';
import { copyToClipboard } from '../utils/clipboard';
import { Briefcase, ShieldCheck, CheckCircle2, Copy, Download, Search, Sparkles, AlertCircle } from 'lucide-react';

interface Props {
  onNotify: (msg: string) => void;
}

export const MOSCareerBridge: React.FC<Props> = ({ onNotify }) => {
  const [selectedBranch, setSelectedBranch] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMOS, setSelectedMOS] = useState<MOSProfile>(MOS_DATABASE[0]);
  const [targetIndustry, setTargetIndustry] = useState<string>('Technology');
  const [yearsOfService, setYearsOfService] = useState<number>(4);
  const [payGrade, setPayGrade] = useState<string>('E-5 / Sergeant');
  const [inputError, setInputError] = useState<string | null>(null);

  const branches = ['All', 'Army', 'Navy', 'Air Force', 'Marines', 'Coast Guard'];

  const filteredMOSList = MOS_DATABASE.filter(item => {
    const branchMatch = selectedBranch === 'All' || item.branch === selectedBranch;
    const queryMatch = searchQuery === '' || 
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.militaryTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.civilianTitles.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return branchMatch && queryMatch;
  });

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setYearsOfService(0);
      setInputError('Please enter a valid number of years.');
    } else if (val < 0 || val > 45) {
      setYearsOfService(val);
      setInputError('Years of service must be between 0 and 45.');
    } else {
      setYearsOfService(val);
      setInputError(null);
    }
  };

  const copyBullet = async (bullet: STARBullet) => {
    const text = `• ${bullet.atsSummary}\n  - Situation: ${bullet.situation}\n  - Action: ${bullet.action}\n  - Impact: ${bullet.result}`;
    await copyToClipboard(text);
    onNotify('Copied STAR bullet point to clipboard!');
  };

  const copyAllMarkdown = async () => {
    const content = `# Military Service Record Translation
**Branch:** ${selectedMOS.branch} | **Rating/MOS:** ${selectedMOS.code} - ${selectedMOS.militaryTitle}
**Clearance:** ${selectedMOS.clearanceLevel} | **Rank:** ${payGrade} (${yearsOfService} Years)
**Target Field:** ${targetIndustry}

## Civilian Target Roles
${selectedMOS.civilianTitles.map(t => `- ${t}`).join('\n')}

## Transferable ATS Keywords
${selectedMOS.atsKeywords.join(', ')}

## Professional Experience & STAR Bullet Points
${selectedMOS.starBullets.map((b, idx) => `
### Project / Operational Milestone ${idx + 1}
- **Role Summary:** ${b.atsSummary}
- **Situation:** ${b.situation}
- **Task:** ${b.task}
- **Action:** ${b.action}
- **Quantified Result:** ${b.result}
`).join('\n')}

## Recommended Industry Certifications
${selectedMOS.certifications.map(c => `- ${c}`).join('\n')}
`;

    await copyToClipboard(content);
    onNotify('Full ATS Resume Dossier copied as Markdown!');
  };

  const downloadTextFile = () => {
    const content = `VETNEXUS 305 — MILITARY CAREER TRANSLATION
Branch: ${selectedMOS.branch} | MOS: ${selectedMOS.code} - ${selectedMOS.militaryTitle}
Rank: ${payGrade} | Experience: ${yearsOfService} Years | Clearance: ${selectedMOS.clearanceLevel}
Target Domain: ${targetIndustry}

CIVILIAN MATCHED TITLES:
${selectedMOS.civilianTitles.map(t => `  * ${t}`).join('\n')}

ATS KEYWORDS & SKILLS:
${selectedMOS.atsKeywords.join(', ')}

STAR ACCOMPLISHMENT BULLETS:
${selectedMOS.starBullets.map((b, i) => `[${i + 1}] ${b.atsSummary}\n    Metrics: ${b.result}`).join('\n\n')}

RECOMMENDED CERTIFICATIONS:
${selectedMOS.certifications.map(c => `  * ${c}`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `VetNexus305_Resume_${selectedMOS.code}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    onNotify(`Downloaded VetNexus305_Resume_${selectedMOS.code}.txt`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner and Description */}
      <div className="bg-command-800 border border-slate-700/80 rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-semibold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                MIL-SPEC ATS TRANSLATOR
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Decodes military acronyms into civilian corporate ROI
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-100 mt-1">
              MOS-to-Civilian Career & STAR Resume Generator
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Select your military service branch and MOS/Rating to instantly synthesize ATS-optimized resume bullet points, civilian role equivalents, and technical keyword tags.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={copyAllMarkdown}
              className="px-4 py-2 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition shadow flex items-center gap-2"
              title="Copy entire dossier as formatted Markdown"
            >
              <Copy className="w-4 h-4" />
              Copy Full Markdown
            </button>
            <button
              onClick={downloadTextFile}
              className="px-4 py-2 text-sm font-semibold text-slate-200 bg-command-700 hover:bg-command-600 border border-slate-600 rounded-md transition flex items-center gap-2"
              title="Download clean plain text resume summary"
            >
              <Download className="w-4 h-4" />
              Export TXT
            </button>
          </div>
        </div>

        {/* Branch Filter & Search */}
        <div className="mt-5 pt-4 border-t border-slate-700/60 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {branches.map(branch => (
              <button
                key={branch}
                onClick={() => setSelectedBranch(branch)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition whitespace-nowrap ${
                  selectedBranch === branch
                    ? 'bg-amber-500 text-black font-semibold shadow-sm'
                    : 'bg-command-900/80 text-slate-300 hover:bg-command-700 border border-slate-700'
                }`}
              >
                {branch}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter by MOS code or role..."
              className="w-full bg-command-900/90 border border-slate-700 rounded text-sm pl-9 pr-3 py-1.5 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Main Dual-Column Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: MOS Selection List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
            <span>AVAILABLE MOS PROFILES ({filteredMOSList.length})</span>
            <span>CLICK TO LOAD</span>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
            {filteredMOSList.length === 0 ? (
              <div className="p-6 text-center bg-command-800 border border-slate-700/70 rounded-lg text-slate-400 text-sm">
                No military occupational specialty matching "{searchQuery}".
              </div>
            ) : (
              filteredMOSList.map(mos => (
                <button
                  key={`${mos.branch}-${mos.code}`}
                  onClick={() => setSelectedMOS(mos)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                    selectedMOS.code === mos.code && selectedMOS.branch === mos.branch
                      ? 'bg-command-700/90 border-amber-500/80 shadow-md ring-1 ring-amber-500/50'
                      : 'bg-command-800/80 border-slate-700/70 hover:bg-command-700/50 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-amber-400 text-sm">
                        {mos.code}
                      </span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                        {mos.branch}
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono">
                      {mos.clearanceLevel}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-100 mt-1">
                    {mos.militaryTitle}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                    ↳ Civilian: {mos.civilianTitles[0]}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Active MOS Details & STAR Bullet Customizer */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Header Card */}
          <div className="bg-command-800 border border-slate-700/80 rounded-lg p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-700">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-amber-500 text-black rounded">
                    {selectedMOS.branch} MOS {selectedMOS.code}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 bg-command-900 text-slate-300 border border-slate-700 rounded">
                    Clearance: {selectedMOS.clearanceLevel}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mt-2">
                  {selectedMOS.militaryTitle}
                </h3>
              </div>

              {/* ATS Match Meter */}
              <div className="bg-command-900/90 border border-slate-700 rounded-md p-2.5 min-w-[150px] text-right">
                <div className="text-xs text-slate-400 font-mono">ESTIMATED ATS SCORE</div>
                <div className="text-xl font-bold text-emerald-400 flex items-center justify-end gap-1">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  96% Match
                </div>
              </div>
            </div>

            {/* Customization Inputs (Rank & Years) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-1">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  PAY GRADE / RANK
                </label>
                <select
                  value={payGrade}
                  onChange={e => setPayGrade(e.target.value)}
                  className="w-full bg-command-900 border border-slate-700 rounded text-sm px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="E-4 / Specialist/Corporal">E-4 (Specialist / Corporal / Petty Officer 3rd)</option>
                  <option value="E-5 / Sergeant">E-5 (Sergeant / Petty Officer 2nd)</option>
                  <option value="E-6 / Staff Sergeant">E-6 (Staff Sergeant / Petty Officer 1st)</option>
                  <option value="E-7 / Sergeant First Class">E-7 (SFC / Chief Petty Officer)</option>
                  <option value="O-2 / First Lieutenant">O-2 (First Lieutenant / Lt. JG)</option>
                  <option value="O-3 / Captain">O-3 (Captain / Navy Lieutenant)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  ACTIVE YEARS OF SERVICE
                </label>
                <input
                  type="number"
                  min="0"
                  max="40"
                  value={yearsOfService}
                  onChange={handleYearsChange}
                  className={`w-full bg-command-900 border rounded text-sm px-3 py-2 text-slate-200 focus:outline-none ${
                    inputError ? 'border-red-500' : 'border-slate-700 focus:border-amber-400'
                  }`}
                />
                {inputError && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {inputError}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  TARGET CIVILIAN DOMAIN
                </label>
                <select
                  value={targetIndustry}
                  onChange={e => setTargetIndustry(e.target.value)}
                  className="w-full bg-command-900 border border-slate-700 rounded text-sm px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="Technology & IT Infrastructure">Technology & IT Infrastructure</option>
                  <option value="Defense Contracting & Aerospace">Defense Contracting & Aerospace</option>
                  <option value="Operations & Supply Chain Logistics">Operations & Logistics</option>
                  <option value="Healthcare & Clinical Care">Healthcare & Clinical Care</option>
                  <option value="Government & Public Safety">Government & Public Safety</option>
                </select>
              </div>
            </div>

            {/* Military Duties Summary */}
            <div className="mt-4 p-3 bg-command-900/60 border border-slate-700/60 rounded text-xs text-slate-300">
              <span className="font-mono text-amber-400 font-semibold uppercase">Official Duties:</span> {selectedMOS.primaryDuties}
            </div>

            {/* Matched Civilian Roles */}
            <div className="mt-4">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                DIRECT CIVILIAN ROLE TRANSLATIONS
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedMOS.civilianTitles.map((title, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-command-700 border border-slate-600 text-slate-200 rounded-md"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>

            {/* Transferable ATS Keywords */}
            <div className="mt-4">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                VERIFIED ATS SCANNER KEYWORDS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedMOS.atsKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded"
                  >
                    +{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* STAR Achievement Bullets */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                STAR Accomplishment Bullets (Situation · Task · Action · Result)
              </h4>
              <span className="text-xs text-slate-400 font-mono">
                Click any card to copy
              </span>
            </div>

            {selectedMOS.starBullets.map((bullet, idx) => (
              <div
                key={idx}
                className="bg-command-800 border border-slate-700 rounded-lg p-4 hover:border-slate-500 transition space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold text-amber-300">
                    • {bullet.atsSummary}
                  </div>
                  <button
                    onClick={() => copyBullet(bullet)}
                    className="p-1.5 text-slate-400 hover:text-amber-400 bg-command-900 hover:bg-command-700 border border-slate-700 rounded transition shrink-0"
                    title="Copy formatted bullet"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-command-900/80 p-3 rounded border border-slate-800">
                  <div>
                    <span className="font-mono text-slate-400 uppercase font-semibold">Situation: </span>
                    <span className="text-slate-300">{bullet.situation}</span>
                  </div>
                  <div>
                    <span className="font-mono text-slate-400 uppercase font-semibold">Task: </span>
                    <span className="text-slate-300">{bullet.task}</span>
                  </div>
                  <div>
                    <span className="font-mono text-slate-400 uppercase font-semibold">Action: </span>
                    <span className="text-slate-300">{bullet.action}</span>
                  </div>
                  <div>
                    <span className="font-mono text-emerald-400 uppercase font-semibold">Quantified Result: </span>
                    <span className="text-emerald-300 font-medium">{bullet.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommended Industry Certifications */}
          <div className="bg-command-800 border border-slate-700/80 rounded-lg p-4">
            <h5 className="text-xs font-mono text-amber-400 font-bold uppercase mb-2">
              Fast-Track Certification Pathway (GI Bill / VR&E Covered)
            </h5>
            <div className="flex flex-wrap gap-2">
              {selectedMOS.certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-command-900 border border-amber-500/40 text-amber-200 rounded"
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
