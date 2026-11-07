# UX Contract — VetNexus 305

> Acceptance contract for VetNexus 305 frontend implementation.

## 1. Product

- **One-liner:** Mission-ready military MOS-to-civilian career bridge & 38 CFR VA disability claim evidence co-pilot with local 305 South Florida veteran support.
- **Primary user:** Transitioning U.S. military service members, student veterans (such as at FIU MMC Miami), and military veterans navigating VA disability claims or civilian job markets.
- **Job to be done:** Translate military branch/MOS service records into ATS-optimized civilian STAR resumes and audit medical records against 38 CFR Part 4 rating schedules to generate airtight VA Form 21-4138 claim evidence statements.
- **Core success action:** In ≤ 3 clicks, generate a tailored STAR career translation or an evidence-backed VA Claim Nexus checklist with exportable personal statement.
- **What the user should never have to guess:** Whether their sensitive military or medical data leaves their browser (100% private client-side processing) and what exact legal criteria (38 CFR code & Nexus prongs) are required for a claim.

---

## 2. Core Flow

| # | Step | User action | System feedback | Next step is obvious? |
|---|---|---|---|---|
| 1 | Select Branch & MOS/Rating (or VA Condition) | Clicks Branch pill (Army, Navy, Air Force, Marines, Coast Guard) & picks MOS (e.g. 11B, 25B, 68W) | Live preview updates civilian title matches, top ATS skills, and STAR achievement templates | Yes, "Customize STAR Bullets" or "Export Resume" highlighted |
| 2 | Customize & ATS Optimize | Adjusts years of service, rank/scope, or selects target industry (Tech, Logistics, Healthcare, Defense) | Instant STAR bullet synthesis with quantified metric placeholders and ATS score meter | Yes, "Copy Markdown" / "Download Text" button active |
| 3 | VA Claim Nexus Audit | Switches to "VA Claim Navigator", picks condition (e.g. 6100 Tinnitus, 9411 PTSD, 5237 Lumbar Strain) | 3-prong Nexus evidence status checklist updates (Diagnosis, In-Service Event, Medical Nexus) | Yes, "Generate VA Form 21-4138 Statement" button clearly visible |
| 4 | Export & 305 Resource Connect | Generates structured statement and views local FIU/Miami 305 veteran emergency & VSO resources | Formatted statement displayed in high-contrast copyable pane with direct 305 hotline/office links | Yes, direct one-click copy and resource telephone links |

**Target:** ≤ 3 steps and ≤ 1.5 minutes from landing to the core result.

---

## 3. Pages / Views

VetNexus 305 uses an intuitive tactical tabbed workspace:

| Page / Tab | Purpose | Primary action | Secondary actions |
|---|---|---|---|
| **MOS Career Bridge** | Translate military duties to civilian careers & STAR bullets | Select MOS & generate STAR bullet points | Switch industry target, copy ATS resume bullets, download markdown |
| **VA Claim Evidence** | Audit claim against 38 CFR Part 4 & check 3-prong Nexus | Verify Nexus prongs & generate Form 21-4138 draft | View DBQ checklist, copy statement, view secondary service conditions |
| **305 Local Hub** | FIU & South Florida veteran healthcare, VSO & emergency aid | Filter by category (Healthcare, VSO Claims, Student Vet, Emergency) | One-tap phone call, map address preview, FDVA contact |
| **Privacy & Security** | Transparency on zero-server data retention | Review privacy policy & client-side security architecture | Reset local state, export full session archive |

---

## 4. Required States

- [x] **Empty / first visit:** Clear military branch selector with highlighted default (e.g., Army 25B / 11B) and prompt: "Select your branch and MOS to translate service record".
- [x] **Loading:** Skeleton pulse on statement generator and instant responsive rendering (< 50ms).
- [x] **Success:** Visible toast banner and badge confirmation ("STAR Bullets Copied to Clipboard", "VA Statement Formatted").
- [x] **Error / Invalid input:** Inline field feedback if custom duties or custom years are outside valid range (0-40 years).
- [x] **Mobile 390px layout:** Responsive single-column stacked layout, touch targets ≥ 48px, horizontal scroll prevention, sticky bottom quick-action bar.

---

## 5. Design Tokens

- **Font family:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for clean readability; `JetBrains Mono, Menlo, monospace` for MOS codes, CFR diagnostic codes, and document previews.
- **Spacing scale:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px.
- **Colors:**
  - Background: Deep Command Navy `#0B132B` / Surface Card `#1C2541` / Elevated Card `#243356`
  - Text: Tactical Crisp White `#F8FAFC` / Slate Subtext `#94A3B8`
  - Accent / Signal: Signal Gold / Amber `#F59E0B` (military chevron insignia highlight)
  - Success / Active: Combat Sage / Emerald `#10B981` (evidence verified)
  - Warning / Alert: Alert Crimson `#EF4444` (missing Nexus prong indicator)
  - Borders: Tactical Stroke `#334155`
- **Radius & Borders:** 6px to 8px crisp utilitarian corners (not exaggerated bubble radii).
- **Button and input height:** Minimum 44px (touch target ≥ 48px on mobile).
- **Icon style:** Utilitarian line icons (Lucide React, 1.75px stroke width).

---

## 6. References

| Reference | What to borrow | What not to copy |
|---|---|---|
| Military.com Skills Translator | Branch and MOS taxonomy classification | Static non-interactive layout, ad clutter |
| VA Form 21-4138 (Official VA Statement) | 4-part legal structure (Condition, In-service incident, Current severity, Impact on work) | Intimidating PDF bureaucratic barrier |
| Linear / GitHub Actions Matrix | High-density status chips, crisp borders, dark utilitarian command aesthetic | Software developer-specific workflows |

---

## 7. Mobile (390px)

- 390px layout tested for iPhone 14/15/16 and Android flagship viewports.
- Branch pills horizontally scrollable with visible edge fade.
- 100% full-width action buttons on mobile (`w-full py-3`).
- Zero horizontal page overflow; all tables wrap into responsive summary cards.
- Sticky top header with quick emergency hotline badge (Veterans Crisis Line: 988, Option 1).

---

## 8. Visual Direction

- **Three adjectives:** Mission-Ready, Authoritative, High-Precision.
- **Product archetype:** Tactical Workspace / Regulatory Evidence Editor.
- **Palette rationale:** Deep Navy (`#0B132B`) and Tactical Slate (`#1C2541`) honor naval/military tradition while providing high contrast for veterans with visual or cognitive fatigue. Gold/Amber (`#F59E0B`) draws immediate focus to actionable recommendations and ATS metrics. Emerald (`#10B981`) indicates completed Nexus evidentiary criteria.
- **Density:** Balanced-to-dense utility workspace. Information density is crucial for veterans who want clear, un-fluffed actionable data rather than empty decorative marketing space.
- **Signature element:** **The 3-Prong Nexus Matrix & 38 CFR Diagnostic Code Auditor** — an interactive military evidence grid mapping service dates, hazard exposures, and clinical diagnoses to VA disability law standards.
- **Rejected clichés:** NO purple/pink gradients, NO glassmorphism translucency, NO 3-card generic marketing hero, NO emoji bullet points, NO abstract blob art.
- **Generic test:** Placing the interface in any other SaaS product would immediately look out of place due to the distinctive military branch insignia tokens, CFR-38 legal evidence chips, and tactical command aesthetic.

---

## 9. UX Acceptance Checklist

- [x] First-time user recognizes the transition and VA claim purpose within 5 seconds.
- [x] Core task achievable in ≤ 3 clicks without reading manual.
- [x] Every action provides visual feedback within 100ms.
- [x] All missing Nexus criteria clearly explained with actionable remediation steps.
- [x] Empty states prompt user with sample pre-filled MOS and conditions for instant exploration.
- [x] Mobile 390px view is fully usable without layout breakage.
