export interface VeteranResource305 {
  id: string;
  name: string;
  category: 'FIU Student Veterans' | 'VA Healthcare' | 'VSO & Claims Assistance' | 'Crisis & Emergency Relief';
  location: string;
  phone: string;
  email?: string;
  website: string;
  description: string;
  freeServices: string[];
  keyContacts: string;
}

export const RESOURCES_305: VeteranResource305[] = [
  {
    id: 'fiu-vma',
    name: 'FIU Office of Veteran and Military Affairs (VMA)',
    category: 'FIU Student Veterans',
    location: 'FIU Modesto A. Maidique Campus (MMC), SASC 230, 11200 SW 8th St, Miami, FL 33199',
    phone: '(305) 348-2838',
    email: 'veterans@fiu.edu',
    website: 'https://vma.fiu.edu',
    description: 'Serves over 1,200 FIU student veterans, active duty, reservists, and dependents. Assists with Post-9/11 GI Bill (Ch. 33), VR&E (Ch. 31), Yellow Ribbon Program, tuition deferments, and peer community study lounges.',
    freeServices: [
      'VA Education Benefits Certification (GI Bill / VR&E)',
      'FIU Out-of-State Tuition Waiver for Veterans (Congressman C.W. Bill Young Act)',
      'Dedicated Student Veteran Computer Lounge & Study Suites',
      'Career Development & Veteran Internship Placement'
    ],
    keyContacts: 'VMA Certifying Officials & Transition Counselors'
  },
  {
    id: 'fiu-law-clinic',
    name: 'FIU College of Law — Veterans Legal Clinic',
    category: 'FIU Student Veterans',
    location: 'Rafael Diaz-Balart Hall, Suite 1009, 11200 SW 8th St, Miami, FL 33199',
    phone: '(305) 348-7541',
    website: 'https://law.fiu.edu/clinics/veterans-clinic/',
    description: 'Provides free, pro bono legal representation to low-income South Florida veterans navigating VA disability appeals, discharge characterization upgrades, and federal administrative disputes.',
    freeServices: [
      'Pro Bono VA Disability Claim Appeals (Board of Veterans Appeals / CAVC)',
      'Discharge Characterization Upgrades (DD-293 / DD-149)',
      'VA Overpayment Waiver Requests',
      'Legal Consultation by Supervised Law Students & Licensed Attorneys'
    ],
    keyContacts: 'Clinical Supervising Attorneys'
  },
  {
    id: 'miami-va-hospital',
    name: 'Bruce W. Carter Department of Veterans Affairs Medical Center (Miami VA)',
    category: 'VA Healthcare',
    location: '1201 NW 16th St, Miami, FL 33125 (Health District / Civic Center)',
    phone: '(305) 575-7000',
    website: 'https://www.va.gov/miami-health-care/locations/bruce-w-carter-department-of-veterans-affairs-medical-center/',
    description: 'Tertiary referral medical center providing full-spectrum clinical care, 24/7 Emergency Department, PTSD and polytrauma treatment, prosthetic services, audiology, and spinal cord injury center for South Florida veterans.',
    freeServices: [
      '24/7 Comprehensive Emergency Medicine & Trauma Stabilization',
      'PACT Act Toxic Exposure Screening & Registry Exams',
      'C&P (Compensation & Pension) Audiology and Orthopedic Examinations',
      'Specialized Polytrauma, TBI & Mental Health Inpatient/Outpatient Services'
    ],
    keyContacts: 'Main Operator: (305) 575-7000 | Patient Advocate: ext. 13243'
  },
  {
    id: 'fdva-miami',
    name: 'Florida Department of Veterans\' Affairs (FDVA) — Miami Claims Bureau',
    category: 'VSO & Claims Assistance',
    location: '1201 NW 16th St, Room A1011, Miami, FL 33125',
    phone: '(305) 575-7000 x4085',
    website: 'https://floridavets.org',
    description: 'Official State of Florida accredited Veterans Service Officers (VSOs). Offers 100% free accredited legal power-of-attorney representation for initial disability compensation filings, supplemental claims, and Higher-Level Reviews.',
    freeServices: [
      'Free Accredited Representation for VA Disability & Pension Claims',
      'State of Florida 100% P&T Property Tax Exemption Verification',
      'Florida Disabled Veteran Free Hunting/Fishing & State Park Pass Certification',
      'Appeals Representation before the Board of Veterans Appeals'
    ],
    keyContacts: 'FDVA Accredited Veterans Claims Examiners'
  },
  {
    id: 'miami-dade-vso',
    name: 'Miami-Dade County Community Action & Human Services — Veterans Services',
    category: 'VSO & Claims Assistance',
    location: '701 NW 1st Court, 10th Floor, Miami, FL 33136',
    phone: '(786) 469-4640',
    website: 'https://www.miamidade.gov/global/service.page?Mappers=veterans-affairs',
    description: 'County-level certified veterans counselors assisting with municipal emergency assistance, burial benefits, transit passes, and state benefits for Miami-Dade veterans and surviving spouses.',
    freeServices: [
      'County Veterans Financial Hardship Emergency Grants',
      'Miami-Dade Transit Discounted/Free Patriot Pass Programs',
      'Local Burial & Memorial Benefit Applications',
      'Assistance with DD-214 Military Record Retrieval'
    ],
    keyContacts: 'Miami-Dade County Veteran Officers'
  },
  {
    id: 'vcl-988',
    name: 'Veterans Crisis Line (24/7 Confidential Crisis Support)',
    category: 'Crisis & Emergency Relief',
    location: 'National & South Florida Direct Emergency Dispatch',
    phone: 'Dial 988, then Press 1',
    email: 'Text 838255',
    website: 'https://www.veteranscrisisline.net',
    description: 'Free, confidential support available 24/7/365 for veterans in crisis and their families. Connect with caring, qualified VA responders, many of whom are veterans themselves.',
    freeServices: [
      '24/7 Emergency Crisis De-escalation by Trained Clinicians',
      'Immediate Coordination with Miami VA Suicide Prevention Coordinators',
      'Confidential Online Chat and Mobile SMS Support (Text 838255)',
      'Follow-up Care Management and Safety Planning'
    ],
    keyContacts: 'Dial 988 + 1 or text 838255'
  },
  {
    id: 'sacred-trust',
    name: 'Operation Sacred Trust (End Veteran Homelessness in South Florida)',
    category: 'Crisis & Emergency Relief',
    location: 'Serving Miami-Dade & Broward Counties',
    phone: '(855) 778-3411',
    website: 'https://www.operationsacredtrust.com',
    description: 'Funded by the VA Supportive Services for Veteran Families (SSVF) program. Rapid re-housing, emergency rental assistance, eviction prevention, and case management for veterans facing housing crises in South Florida.',
    freeServices: [
      'Emergency Temporary Housing Placement & Security Deposit Assistance',
      'Utility Payment & Eviction Prevention Grants',
      'Rapid Employment Placement and Transportation Vouchers',
      'Comprehensive Case Management and Legal Aid Referrals'
    ],
    keyContacts: 'Intake Hotline: (855) 778-3411'
  }
];
