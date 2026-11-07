# QA Test Scenarios — VetNexus 305

## Ranked Scenarios

- **[P0] Smoke / First Landing:** Verify application renders, tactical header shows "VETNEXUS 305", crisis hotline "988 + 1" visible, no horizontal overflow at 1440px and 390px.
- **[P0] MOS-to-Civilian Career Translation:** Switch military branches, select MOS profiles (25B, 11B, 68W, IT, 0311), verify civilian title translations, ATS keywords, and STAR accomplishment bullets render.
- **[P0] Export & Clipboard Feedback:** Test Markdown copy and TXT download actions; assert toast notifications appear.
- **[P0] 38 CFR VA Claim Nexus Auditor:** Navigate to VA Claim tab, select condition (e.g., 9411 PTSD, 6100 Tinnitus), toggle the 3-Prong Nexus checkboxes, assert real-time transition from "NEXUS DEFICIT WARNING" to "AIRTIGHT NEXUS STATUS".
- **[P0] VA Form 21-4138 Document Synthesis:** Update veteran name and service dates, assert live statement text preview stream updates instantly, and copy/download controls function.
- **[P1] 305 South Florida & FIU Hub:** Filter resources by category (FIU Student Veterans, VA Healthcare), search keywords, and verify telephone click-to-call links.
- **[P1] Privacy & Session Governance:** Open Privacy tab, verify zero-server retention guarantee, and test audit JSON export.
