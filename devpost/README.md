# 🏆 Devpost Submission — VetNexus 305

> **305 Veterans Hackathon Edition November 2026**  
> **Devpost Portal:** https://305veteransnov2026.devpost.com/

---

## 🏷 Project Title
**VetNexus 305 — Mission Transition & VA Benefits Co-Pilot**

## ⚡ Elevator Pitch
Mission-ready career bridge translating military MOS codes into ATS resumes and 38 CFR VA disability claim evidence co-pilot with South Florida & FIU veteran support.

## 🌐 Live URLs
- **Live Demo (Vercel):** https://305-veterans-hackathon-edition-nov.vercel.app
- **GitHub Repository (Fork):** https://github.com/Georgefifth/starter-hackathon-project
- **Interactive Pitch Deck:** https://305-veterans-hackathon-edition-nov.vercel.app/presentation/index.html

---

## 💡 Inspiration
Over 200,000 active-duty U.S. service members transition out of uniform every year, including over 1,200 student veterans and military families at Florida International University (FIU MMC Campus) and South Florida.

During this transition, veterans encounter two massive, systemic barriers:
1. **The Resume Jargon Chasm:** Military Occupational Specialties (MOS/AFSC/Ratings) and combat command leadership are misunderstood by corporate civilian ATS (Applicant Tracking Systems) and recruiters. Resumes get discarded before a human recruiter ever sees them.
2. **The 300,000+ VA Claim Backlog & Predatory Claim Sharks:** Navigating Title 38 of the Code of Federal Regulations (38 CFR Part 4) to establish a legally sufficient "Nexus" (Diagnosis + In-Service Incident + Medical Nexus link) is overwhelming. For-profit "claims sharks" exploit veterans by charging $3,000 to $8,000 for standard paperwork that accredited Veterans Service Officers provide for free.

We built **VetNexus 305** to empower veterans with mission-grade, 100% private tools: translating battlefield and technical service into six-figure corporate careers while organizing bulletproof VA disability claim evidence without paying a dime to predatory consultants.

---

## ⚡ What It Does
1. **MIL-SPEC MOS-to-Civilian Career Bridge:** Decodes military occupational codes across Army, Navy, Air Force, Marines, and Coast Guard into ATS-optimized STAR accomplishment bullets with quantified metrics.
2. **38 CFR Part 4 VA Claim & Nexus Evidence Auditor:** Enforces the statutory 3-Prong Nexus Rule (*Shedden v. Principi*) across high-frequency conditions (Tinnitus, PTSD, Back, Migraines, Sleep Apnea, Knee) and generates sworn VA Form 21-4138 statements.
3. **South Florida 305 Veteran Support Directory:** Links directly to FIU Veteran & Military Affairs (SASC 230), the Bruce W. Carter VA Medical Center in Miami, Florida Department of Veterans' Affairs (FDVA) accredited officers, and the 24/7 Veterans Crisis Line (988 + 1).
4. **100% Client-Side Privacy:** Zero server data retention or cloud tracking of sensitive medical records or DD-214 documents.

---

## 🔧 How We Built It
- **Frontend Framework:** React 19 + TypeScript + Vite 6
- **Design Tokens:** Tailwind CSS v4 with custom tactical military aesthetic (Command Navy `#0B132B`, Tactical Slate `#1C2541`, Signal Amber `#F59E0B`, Combat Sage `#10B981`)
- **Regulatory Datasets:** Title 38 CFR Part 4 Diagnostic Schedules and DoD/O*NET Military Occupational Classification crosswalks
- **Deployment Platform:** Vercel Global Edge Network with automated SPA routing
- **Testing & QA:** Comprehensive Playwright test suite (10/10 automated scenarios passed across Desktop 1440px and Mobile 390px) and a 15-case real-world validation benchmark achieving 100% ground-truth accuracy.
