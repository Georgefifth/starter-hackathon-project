# Devpost Submission Form Fields — VetNexus 305

> Ready-to-copy fields for submitting to Devpost at https://305veteransnov2026.devpost.com/

---

## 1. Project Name
```text
VetNexus 305 — Mission Transition & VA Benefits Co-Pilot
```

---

## 2. Elevator Pitch (169 / 200 Characters)
```text
Mission-ready career bridge translating military MOS codes into ATS resumes and 38 CFR VA disability claim evidence co-pilot with South Florida & FIU veteran support.
```

---

## 3. Built With (12 Tags)
```text
react, typescript, vite, tailwindcss, lucide-icons, playwright, vercel, ffmpeg, military-transition, va-disability, cfr-38, client-side-privacy
```

---

## 4. Try It Out Links
- **Production Live Demo URL:** `https://305-veterans-hackathon-edition-nov.vercel.app`
- **GitHub Repository (Fork):** `https://github.com/Georgefifth/starter-hackathon-project`
- **Interactive Pitch Deck:** `https://305-veterans-hackathon-edition-nov.vercel.app/presentation/index.html` (or `presentation/index.html`)

---

## 5. Video Demo Link
```text
TODO(human): Upload `submission/assets/demo.mp4` to YouTube as "Unlisted", then paste the YouTube URL here and in the Devpost video field.
```

---

## 6. Image Gallery & Captions

| Filename | Caption (Max 150 Chars) |
|---|---|
| `gallery-1-mos-translator.png` | MOS Career Bridge translating military duties into ATS-optimized STAR accomplishment bullets with 96% match rating. |
| `gallery-2-va-claim-nexus.png` | 38 CFR Part 4 Disability Claim Auditor verifying the 3-prong nexus rule and generating sworn VA Form 21-4138 statements. |
| `gallery-3-305-resources.png` | South Florida & FIU 305 Veteran Support Hub with direct Miami VA, FDVA VSO, and 24/7 crisis hotline access. |
| `gallery-4-mobile-responsive.png` | 390px mobile-first responsive layout with zero horizontal overflow and touch-friendly mission controls. |
| `gallery-5-validation-benchmark.png` | 100% ground truth validation across 15 real-world legal and military test cases with under 50ms client response latency. |

---

## 7. About The Project (Markdown Format)

```markdown
## Inspiration

Over 200,000 active-duty U.S. service members transition out of uniform every year, including over 1,200 student veterans and military families at Florida International University (FIU MMC Campus) and South Florida.

During this transition, veterans encounter two massive, systemic barriers:
1. **The Resume Jargon Chasm:** Military Occupational Specialties (MOS/AFSC/Ratings) and combat command leadership are misunderstood by corporate civilian ATS (Applicant Tracking Systems) and recruiters. Resumes get discarded before a human recruiter ever sees them.
2. **The 300,000+ VA Claim Backlog & Predatory Claim Sharks:** Navigating Title 38 of the Code of Federal Regulations (38 CFR Part 4) to establish a legally sufficient "Nexus" (Diagnosis + In-Service Incident + Medical Nexus link) is overwhelming. For-profit "claims sharks" exploit veterans by charging $3,000 to $8,000 for standard paperwork that accredited Veterans Service Officers provide for free.

We built **VetNexus 305** to empower veterans with mission-grade, 100% private tools: translating battlefield and technical service into six-figure corporate careers while organizing bulletproof VA disability claim evidence without paying a dime to predatory consultants.

---

## What It Does

VetNexus 305 operates as an integrated, tactical veteran co-pilot across four core modules:

1. **MIL-SPEC MOS-to-Civilian Career Bridge:**
   - Decodes military codes across Army, Navy, Air Force, Marines, and Coast Guard (e.g. 11B, 25B, 68W, 35F, IT, 1N0X1, 0311, MST).
   - Generates ATS-optimized STAR (Situation, Task, Action, Result) achievement bullets with quantified metrics.
   - Decodes defense acronyms into corporate business value (e.g. converting "tactical C4I satellite link" to "multi-site enterprise network infrastructure").
   - One-click copy for Markdown resumes or downloadable plain-text dossiers.

2. **38 CFR Part 4 VA Claim & Nexus Evidence Auditor:**
   - Audits high-frequency veteran conditions (6100 Tinnitus, 9411 PTSD, 5237 Lumbosacral Strain, 8100 Migraines, 6847 Sleep Apnea, 5260 Knee Flexion).
   - Enforces the statutory **3-Prong Nexus Rule** (*Shedden v. Principi*): Current Diagnosis + In-Service Incurrence + Competent Medical Opinion.
   - Generates a fully formatted, sworn **VA Form 21-4138 (Statement in Support of Claim)** ready for submission.

3. **305 Area Veteran Emergency & Support Hub:**
   - Direct connection to FIU Veteran & Military Affairs (VMA SASC 230), the Bruce W. Carter VA Medical Center in Miami, the Florida Department of Veterans' Affairs (FDVA), Operation Sacred Trust (homelessness prevention), and the 24/7 Veterans Crisis Line (Dial 988, Option 1).

4. **Zero-Server Client-Side Privacy Architecture:**
   - 100% client-side data sandbox. No sensitive medical records, SSNs, or DD-214 service data are ever transmitted to external commercial trackers or LLM training pipelines.

---

## How We Built It

- **Frontend & Architecture:** React 19 + TypeScript + Vite 6 for blazing performance (<50ms state updates).
- **Design System:** Tailwind CSS v4 styled with a custom Tactical Military Command theme (Command Navy `#0B132B`, Tactical Slate `#1C2541`, Signal Amber `#F59E0B`, Combat Sage `#10B981`) meeting WCAG AA contrast standards.
- **Legal & Crosswalk Datasets:** Hand-curated official Title 38 CFR Part 4 Diagnostic Schedules and DoD/O*NET Military Occupational Classification crosswalks.
- **Deployment:** Vercel Global Edge Network with automated SPA rewrites.
- **Quality Assurance & Testing:** Comprehensive Playwright test suite validating 10 end-to-end scenarios across Desktop (1440×900) and Mobile (390×844) viewports, plus an automated 15-case real-world validation benchmark achieving 100% ground-truth accuracy.

---

## Challenges We Ran Into

- **Decoding Military Complexity into ATS Compatibility:** Military evaluations use dense acronyms (e.g. C4I, COMSEC, STIG, BFT) that trigger instant ATS rejection. We designed prompt-free, deterministic algorithmic templates that preserve technical rigor while translating duties into civilian metrics (e.g., uptime, team size, budget, security compliance).
- **Adhering to Federal Veterans Law Standards:** Ensuring our VA claim audit strictly adhered to Title 38 CFR Part 4 and federal judicial precedent (*Shedden v. Principi*) without offering unauthorized legal advice. We incorporated accredited VSO disclaimers and connected users directly to licensed State of Florida officers.
- **Client-Side Clipboard Permissions in Headless QA:** During Playwright browser QA, clipboard write permissions failed without user interaction; we engineered a robust dual-strategy fallback clipboard utility that succeeds across all browser security models.

---

## Accomplishments That We're Proud Of

- **100% Ground Truth Regulatory Accuracy:** Verified against 15 real-world test cases covering official DoD MOS codes, CFR disability ratings, and Miami VA infrastructure.
- **Flawless Playwright QA:** 10 out of 10 automated test scenarios passed with 0 console errors and 0 network failures on both desktop and mobile viewports.
- **Authentic Mission-Driven UX:** Zero generic AI clichés (no glassmorphism, no generic purple gradients). High-contrast tactical command aesthetics tailored for veterans.
- **100% Free & Open Source:** Eliminating predatory financial barriers for veterans seeking what they rightfully earned.

---

## What We Learned

- How to structure complex administrative legal requirements (38 CFR rating schedules, DBQ forms) into intuitive, actionable user checklists.
- The depth of underemployment among combat arms veterans and how structured STAR bullet mapping dramatically closes the corporate hiring gap.
- The power of client-side privacy architectures in building deep trust with privacy-sensitive communities like veterans and service members.

---

## What's Next for VetNexus 305

- **PACT Act Toxic Exposure Interactive Map:** Geolocation mapping of burn pit zones, Camp Lejeune water contamination, and particulate matter zones to automate presumptive claim documentation.
- **Direct VSO E-Filing Connector:** Secure API integration allowing veterans to transmit completed Form 21-4138 packets directly to accredited Florida Department of Veterans' Affairs representatives.
- **Multilingual Support (Spanish & Haitian Creole):** Expanding accessibility for South Florida's diverse military and immigrant veteran population in Miami-Dade.
```
