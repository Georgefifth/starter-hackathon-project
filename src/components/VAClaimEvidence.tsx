import React, { useState } from 'react';
import { CFR_CONDITIONS, CFRCondition } from '../data/cfrRatingDatabase';
import { ShieldCheck, AlertTriangle, FileText, Copy, Download, HelpCircle } from 'lucide-react';

interface Props {
  onNotify: (msg: string) => void;
}

export const VAClaimEvidence: React.FC<Props> = ({ onNotify }) => {
  const [selectedCondition, setSelectedCondition] = useState<CFRCondition>(CFR_CONDITIONS[0]);

  // 3-Prong Nexus Checklist State
  const [prong1Diagnosis, setProng1Diagnosis] = useState<boolean>(true);
  const [diagnosisClinic, setDiagnosisClinic] = useState<string>('Miami VA Medical Center (Audiology Clinic)');
  
  const [prong2InService, setProng2InService] = useState<boolean>(true);
  const [inServiceDetails, setInServiceDetails] = useState<string>('Repeated small arms & heavy weapon live-fire training without adequate double hearing protection (2018-2022).');

  const [prong3Nexus, setProng3Nexus] = useState<boolean>(false);
  const [nexusDoctor, setNexusDoctor] = useState<string>('Pending Private Audiologist / C&P Examiner Nexus Letter');

  // Personal Statement Fields
  const [veteranName, setVeteranName] = useState<string>('Alex M. Rodriguez');
  const [serviceBranch, setServiceBranch] = useState<string>('U.S. Army');
  const [serviceYears, setServiceYears] = useState<string>('2018 - 2022');
  const [currentImpact, setCurrentImpact] = useState<string>(
    'Persistent high-frequency buzzing and ringing in both ears impairs concentration in meetings, disrupts sleep cycles (waking 2-3 times per night), and produces chronic daytime fatigue.'
  );

  const prongsSatisfied = [prong1Diagnosis, prong2InService, prong3Nexus].filter(Boolean).length;
  const isAirtight = prongsSatisfied === 3;

  const generateStatementText = () => {
    return `DEPARTMENT OF VETERANS AFFAIRS
STATEMENT IN SUPPORT OF CLAIM (VA FORM 21-4138 COMPLIANT)
================================================================================
SECTION I: VETERAN IDENTIFICATION
Veteran Name: ${veteranName}
Branch of Service: ${serviceBranch}
Service Dates: ${serviceYears}
Claimed Condition: ${selectedCondition.name} (38 CFR Diagnostic Code: ${selectedCondition.diagnosticCode})
Body System: ${selectedCondition.bodySystem}

--------------------------------------------------------------------------------
SECTION II: EVIDENTIARY 3-PRONG NEXUS AUDIT SUMMARY
[Prong 1 - Current Diagnosis]: ${prong1Diagnosis ? 'VERIFIED' : 'DEFICIT - Unverified'}
  Evidence Source: ${diagnosisClinic}

[Prong 2 - In-Service Incurrence/Aggravation]: ${prong2InService ? 'VERIFIED' : 'DEFICIT - Unverified'}
  Military Service Incident / Exposure: ${inServiceDetails}
  Presumptive Qualifiers: ${selectedCondition.presumptiveQualifiers.join('; ')}

[Prong 3 - Medical Nexus Competent Medical Opinion]: ${prong3Nexus ? 'VERIFIED' : 'DEFICIT - Unverified / Pending'}
  Nexus Opinion Status: ${nexusDoctor}

Nexus Verification Status: ${isAirtight ? 'AIRTIGHT NEXUS ESTABLISHED (3/3 Prongs)' : `DEFICIENT (${prongsSatisfied}/3 Prongs - Risk of Denial)`}

--------------------------------------------------------------------------------
SECTION III: PERSONAL STATEMENT AS TO INCURRENCE & FUNCTIONAL OCCUPATIONAL IMPAIRMENT
I, ${veteranName}, submit this formal sworn statement in support of my claim for service-connected disability compensation for ${selectedCondition.name}.

1. INCURRENCE IN SERVICE:
During my military service in the ${serviceBranch} (${serviceYears}), I was routinely subjected to hazardous occupational conditions including:
${inServiceDetails}

2. CONTINUITY OF SYMPTOMS & CHRONICITY:
Since the date of my honorable separation, my symptoms have persisted continuously without remission. Prior to my active military service, I had no prior history or diagnosis of this condition.

3. FUNCTIONAL & OCCUPATIONAL IMPAIRMENT:
${currentImpact}

4. MEDICAL OPINION STANDARD (38 CFR § 3.102 REASONABLE DOUBT RULE):
It is respectfully submitted that based on my documented occupational duties and competent clinical findings, it is "at least as likely as not" that this condition is directly related to my military service.

--------------------------------------------------------------------------------
RECOMMENDED OFFICIAL VA DBQ FORM:
${selectedCondition.dbqFormName}

I certify under penalty of perjury that the foregoing statements are true and correct to the best of my knowledge and belief.

Submitted via VetNexus 305 Claim Evidence Co-Pilot
================================================================================`;
  };

  const copyStatement = () => {
    navigator.clipboard.writeText(generateStatementText());
    onNotify('VA Form 21-4138 Statement copied to clipboard!');
  };

  const downloadStatement = () => {
    const text = generateStatementText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `VA_Form_21-4138_${selectedCondition.diagnosticCode}_${veteranName.replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    onNotify(`Downloaded VA Form 21-4138 for ${selectedCondition.name}`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-command-800 border border-slate-700/80 rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                38 CFR PART 4 EVIDENCE AUDITOR
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Protects against VA claim denial by enforcing the 3-Prong Nexus Rule
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-100 mt-1">
              VA Disability Claim & Nexus Evidence Navigator
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Select a common veteran condition to audit your claim against Title 38 of the Code of Federal Regulations, check your 3-prong service-connection evidence, and synthesize an airtight VA Form 21-4138 statement.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={copyStatement}
              className="px-4 py-2 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition shadow flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy Statement
            </button>
            <button
              onClick={downloadStatement}
              className="px-4 py-2 text-sm font-semibold text-slate-200 bg-command-700 hover:bg-command-600 border border-slate-600 rounded-md transition flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download VA-21-4138.txt
            </button>
          </div>
        </div>

        {/* Condition Selector Chips */}
        <div className="mt-5 pt-4 border-t border-slate-700/60">
          <div className="text-xs font-mono text-slate-400 mb-2">
            SELECT CONDITION TO AUDIT AGAINST 38 CFR CRITERIA:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CFR_CONDITIONS.map(cond => (
              <button
                key={cond.diagnosticCode}
                onClick={() => setSelectedCondition(cond)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCondition.diagnosticCode === cond.diagnosticCode
                    ? 'bg-amber-500 text-black font-semibold shadow'
                    : 'bg-command-900/90 text-slate-300 hover:bg-command-700 border border-slate-700'
                }`}
              >
                <span className="font-mono font-bold">DC {cond.diagnosticCode}</span>
                <span>{cond.name.split('(')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Evidence Checklist & Rating Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 3-Prong Nexus Checklist & Form */}
        <div className="lg:col-span-6 space-y-6">
          {/* Nexus Status Banner */}
          <div className={`p-4 rounded-lg border flex items-start gap-3.5 ${
            isAirtight
              ? 'bg-emerald-950/40 border-emerald-500/70 text-emerald-200'
              : 'bg-amber-950/30 border-amber-500/70 text-amber-200'
          }`}>
            {isAirtight ? (
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-bold text-sm tracking-wide">
                {isAirtight
                  ? 'AIRTIGHT NEXUS STATUS: 3 / 3 PRONGS SATISFIED'
                  : `NEXUS DEFICIT WARNING: ONLY ${prongsSatisfied} / 3 PRONGS VERIFIED`}
              </div>
              <p className="text-xs mt-1 leading-relaxed text-slate-300">
                {isAirtight
                  ? 'Your evidence checklist establishes current diagnosis, in-service event, and medical causation satisfying 38 CFR requirements and the Reasonable Doubt doctrine.'
                  : 'Federal law (Shedden v. Principi) requires all 3 prongs for service connection. Submitting without a verified Nexus doctor letter or in-service record is the #1 cause of VA denials.'}
              </p>
            </div>
          </div>

          {/* 3-Prong Interactive Checklist */}
          <div className="bg-command-800 border border-slate-700 rounded-lg p-5 space-y-4">
            <h3 className="text-sm font-bold font-mono text-slate-200 uppercase tracking-wider flex items-center justify-between">
              <span>Mandatory 3-Prong Evidentiary Checklist</span>
              <span className="text-xs text-amber-400 lowercase font-sans">
                click checkboxes to audit
              </span>
            </h3>

            {/* Prong 1 */}
            <div className={`p-3.5 rounded border transition ${
              prong1Diagnosis ? 'bg-command-900/90 border-emerald-500/50' : 'bg-command-900/40 border-slate-700'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="prong1"
                  checked={prong1Diagnosis}
                  onChange={e => setProng1Diagnosis(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-0 cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="prong1" className="text-sm font-bold text-slate-200 cursor-pointer flex items-center justify-between">
                    <span>Prong 1: Current Medical Diagnosis</span>
                    {prong1Diagnosis ? (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">VERIFIED</span>
                    ) : (
                      <span className="text-[11px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">MISSING</span>
                    )}
                  </label>
                  <p className="text-xs text-slate-400 mt-1">
                    Must have an active diagnosis documented within the past 12 months by a licensed MD, DO, AuD, or psychologist.
                  </p>
                  <input
                    type="text"
                    value={diagnosisClinic}
                    onChange={e => setDiagnosisClinic(e.target.value)}
                    placeholder="Enter treating clinic or diagnostic source..."
                    className="w-full mt-2 bg-command-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Prong 2 */}
            <div className={`p-3.5 rounded border transition ${
              prong2InService ? 'bg-command-900/90 border-emerald-500/50' : 'bg-command-900/40 border-slate-700'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="prong2"
                  checked={prong2InService}
                  onChange={e => setProng2InService(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-0 cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="prong2" className="text-sm font-bold text-slate-200 cursor-pointer flex items-center justify-between">
                    <span>Prong 2: In-Service Incurrence or Presumption</span>
                    {prong2InService ? (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">VERIFIED</span>
                    ) : (
                      <span className="text-[11px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">MISSING</span>
                    )}
                  </label>
                  <p className="text-xs text-slate-400 mt-1">
                    Incident in Service Treatment Records (STRs), hazardous MOS duty exposure, or PACT Act presumptive theater qualification.
                  </p>
                  <textarea
                    rows={2}
                    value={inServiceDetails}
                    onChange={e => setInServiceDetails(e.target.value)}
                    placeholder="Describe specific in-service event or environmental hazard..."
                    className="w-full mt-2 bg-command-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Prong 3 */}
            <div className={`p-3.5 rounded border transition ${
              prong3Nexus ? 'bg-command-900/90 border-emerald-500/50' : 'bg-command-900/40 border-slate-700'
            }`}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="prong3"
                  checked={prong3Nexus}
                  onChange={e => setProng3Nexus(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-0 cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="prong3" className="text-sm font-bold text-slate-200 cursor-pointer flex items-center justify-between">
                    <span>Prong 3: Medical Nexus Link (≥ 50% Probability)</span>
                    {prong3Nexus ? (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">VERIFIED</span>
                    ) : (
                      <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">NEEDS EVIDENCE</span>
                    )}
                  </label>
                  <p className="text-xs text-slate-400 mt-1">
                    Physician statement using statutory phrase: <em className="text-amber-300">"At least as likely as not incurred in service"</em>.
                  </p>
                  <input
                    type="text"
                    value={nexusDoctor}
                    onChange={e => setNexusDoctor(e.target.value)}
                    placeholder="Nexus letter author or C&P examiner info..."
                    className="w-full mt-2 bg-command-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Veteran Profile Configuration for Statement */}
          <div className="bg-command-800 border border-slate-700 rounded-lg p-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase font-bold">
              Veteran Profile for VA Form 21-4138
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">NAME</label>
                <input
                  type="text"
                  value={veteranName}
                  onChange={e => setVeteranName(e.target.value)}
                  className="w-full bg-command-900 border border-slate-700 rounded text-xs px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">BRANCH</label>
                <input
                  type="text"
                  value={serviceBranch}
                  onChange={e => setServiceBranch(e.target.value)}
                  className="w-full bg-command-900 border border-slate-700 rounded text-xs px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">SERVICE DATES</label>
                <input
                  type="text"
                  value={serviceYears}
                  onChange={e => setServiceYears(e.target.value)}
                  className="w-full bg-command-900 border border-slate-700 rounded text-xs px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                CURRENT OCCUPATIONAL & DAILY FUNCTIONAL IMPAIRMENT
              </label>
              <textarea
                rows={3}
                value={currentImpact}
                onChange={e => setCurrentImpact(e.target.value)}
                className="w-full bg-command-900 border border-slate-700 rounded text-xs p-2 text-slate-200 focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: 38 CFR Part 4 Criteria & Live Statement Preview */}
        <div className="lg:col-span-6 space-y-6">
          {/* CFR Rating Schedule Card */}
          <div className="bg-command-800 border border-slate-700 rounded-lg p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-command-900 text-amber-400 border border-slate-700 rounded">
                  38 CFR § 4.{selectedCondition.diagnosticCode}
                </span>
                <h4 className="text-lg font-bold text-slate-100 mt-1">
                  {selectedCondition.name}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 font-mono">MAX SCHEDULAR RATING</span>
                <div className="text-lg font-bold text-amber-400 font-mono">
                  {selectedCondition.maxRating}%
                </div>
              </div>
            </div>

            {/* Rating Schedule Breakdown */}
            <div className="mt-4 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                Official VA Schedular Rating Tiers:
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedCondition.ratingTiers.map(tier => (
                  <div
                    key={tier.percentage}
                    className="p-2.5 rounded bg-command-900/80 border border-slate-800 text-xs flex items-start gap-3"
                  >
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono font-bold shrink-0">
                      {tier.percentage}%
                    </span>
                    <span className="text-slate-300 leading-relaxed">
                      {tier.criteria}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Presumptive Qualifiers */}
            <div className="mt-4 pt-3 border-t border-slate-700/60">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase block mb-1">
                Presumptive Service Qualifications:
              </span>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                {selectedCondition.presumptiveQualifiers.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form 21-4138 Statement Document Preview */}
          <div className="bg-command-800 border border-slate-700 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-slate-200 uppercase">
                  Live VA Form 21-4138 Document Stream
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyStatement}
                  className="p-1.5 text-xs text-slate-300 hover:text-white bg-command-900 hover:bg-command-700 border border-slate-700 rounded flex items-center gap-1 transition"
                  title="Copy statement text"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </button>
                <button
                  onClick={downloadStatement}
                  className="p-1.5 text-xs text-slate-300 hover:text-white bg-command-900 hover:bg-command-700 border border-slate-700 rounded flex items-center gap-1 transition"
                  title="Download text file"
                >
                  <Download className="w-3.5 h-3.5" />
                  Save
                </button>
              </div>
            </div>

            {/* Monospace Code Preview Box */}
            <div className="bg-[#070D1E] border border-slate-800 rounded p-3 font-mono text-[11px] text-slate-300 max-h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed select-all">
              {generateStatementText()}
            </div>

            {/* Legal Notice */}
            <div className="p-2.5 rounded bg-command-900/50 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                <strong>Accredited VSO Disclaimer:</strong> VetNexus 305 provides structured evidence preparation tools. We strongly recommend filing your completed statement through an accredited Veterans Service Officer (FDVA, VFW, American Legion, or DAV) for 100% free representation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
