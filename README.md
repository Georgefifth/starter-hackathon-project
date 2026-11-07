# 🏷 VetNexus 305 — Mission Transition & VA Benefits Co-Pilot
> **Veteran-First Military MOS-to-Civilian Career Translation & 38 CFR VA Disability Claim Evidence Co-Pilot**  
> *Built for the 305 Veterans Hackathon Edition November 2026 (Organized by GDG at FIU & Code Crunch Worldwide)*

[![Live Deployment](https://img.shields.io/badge/Live%20Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://305-veterans-hackathon-edition-nov.vercel.app)
[![GitHub Fork](https://img.shields.io/badge/Forked%20From-Starter%20Project-blue?style=for-the-badge&logo=github)](https://github.com/Georgefifth/starter-hackathon-project)
[![Crisis Support](https://img.shields.io/badge/Veterans%20Crisis%20Line-Dial%20988%20%2B%201-red?style=for-the-badge&logo=phone)](tel:988)

---

## ⚡ Live URLs & Access
- **Production URL:** [https://305-veterans-hackathon-edition-nov.vercel.app](https://305-veterans-hackathon-edition-nov.vercel.app)
- **GitHub Repository (Fork):** [https://github.com/Georgefifth/starter-hackathon-project](https://github.com/Georgefifth/starter-hackathon-project)
- **Official Event:** [305 Veterans Hackathon Edition Nov 2026](https://305veteransnov2026.devpost.com/)

---

## 💡 Inspiration (The Story)
Over 200,000 active U.S. service members transition out of uniform every year, including over 1,200 student veterans at Florida International University (FIU MMC) and South Florida. 

Yet transitioning veterans face two massive systemic hurdles:
1. **The Resume Jargon Chasm:** Military Occupational Specialties (MOS/AFSC/Ratings) and combat command leadership are misunderstood by corporate civilian ATS (Applicant Tracking Systems) and recruiters. Resumes get discarded before a human ever reads them.
2. **The 300,000+ VA Claim Backlog & Predatory Claim Sharks:** Navigating Title 38 of the Code of Federal Regulations (38 CFR Part 4) to establish a legally sufficient "Nexus" (Diagnosis + In-Service Incident + Medical Nexus link) is overwhelming. For-profit "claims sharks" exploit veterans by charging $3,000 to $8,000 for basic paperwork that accredited Veterans Service Officers provide for free.

We built **VetNexus 305** to empower veterans with mission-grade, 100% private tools: translating battlefield and technical service into six-figure corporate careers while organizing bulletproof VA disability claim evidence without paying a dime to predatory consultants.

---

## ⚡ What It Does

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

## 🔧 Technical Stack & Architecture

- **Frontend Framework:** React 19 + TypeScript + Vite 6
- **Styling & Design System:** Tailwind CSS v4 + Tactical Military Command Design Tokens (Navy `#0B132B`, Slate `#1C2541`, Signal Amber `#F59E0B`, Combat Sage `#10B981`)
- **Iconography:** Lucide React
- **Deployment Platform:** Vercel Global Edge Network with single-page URL rewriting
- **End-to-End QA:** Playwright Test Suite (Desktop 1440px & Mobile 390px automated visual and functional regression)

---

## 🏃 Quick Start (Local Setup in 2 Minutes)

```bash
# Clone the repository
git clone https://github.com/Georgefifth/starter-hackathon-project.git
cd starter-hackathon-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to run the application locally.

To run the production build:
```bash
npm run build
npm run preview
```

---

## 🏆 Hackathon Tracks & Judging Criteria Alignment

| Judging Criteria | VetNexus 305 Implementation |
|---|---|
| **Technical Difficulty** | High-precision CFR-38 Part 4 legal diagnostic parser, dynamic 3-prong nexus validator, ATS keyword crosswalk engine, and client-side document synthesis. |
| **Innovation & Creativity** | Replaces predatory $5,000 private claim consultants and rigid 1-to-1 keyword translators with a mission-driven, privacy-preserving co-pilot. |
| **Design & User Experience** | Military command aesthetic with WCAG AA accessibility, zero generic AI clichés, tactile responsive feedback (<50ms), and 390px mobile-first optimization. |
| **Impact & Usefulness** | Solves immediate career and healthcare access challenges for 18M+ U.S. veterans and FIU's 1,200+ military community members. |
| **Working Prototype** | Fully interactive live application deployed on Vercel with zero mock dead-ends. |

---

## 🛡 Privacy & Disclaimer
*VetNexus 305 is an independent open-source educational tool designed to assist veterans in preparing claim evidence and resumes. It does not replace legal counsel or medical evaluation. Veterans are strongly encouraged to submit claims through accredited, free Veterans Service Organizations (FDVA, VFW, American Legion, DAV, or AMVETS).*
