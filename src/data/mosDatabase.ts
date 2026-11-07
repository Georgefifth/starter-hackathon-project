export interface STARBullet {
  situation: string;
  task: string;
  action: string;
  result: string;
  atsSummary: string;
}

export interface MOSProfile {
  code: string;
  branch: 'Army' | 'Navy' | 'Air Force' | 'Marines' | 'Coast Guard';
  militaryTitle: string;
  civilianTitles: string[];
  clearanceLevel: 'Secret' | 'Top Secret / SCI' | 'Public Trust' | 'Standard';
  primaryDuties: string;
  atsKeywords: string[];
  certifications: string[];
  starBullets: STARBullet[];
}

export const MOS_DATABASE: MOSProfile[] = [
  {
    code: '25B',
    branch: 'Army',
    militaryTitle: 'Information Technology Specialist',
    civilianTitles: [
      'Systems Administrator',
      'IT Infrastructure Engineer',
      'Network Operations Specialist',
      'Technical Support Supervisor'
    ],
    clearanceLevel: 'Secret',
    primaryDuties: 'Maintained, configured, and troubleshot military enterprise IP networks, tactical C4I satellite terminals, Active Directory domain controllers, and cryptographic communications systems in austere field and garrison environments.',
    atsKeywords: [
      'Active Directory', 'Cisco IOS', 'VoIP', 'Network Security', 'TCP/IP',
      'Hardware Virtualization', 'Disaster Recovery', 'COMSEC', 'STIG Compliance',
      'ITIL Service Management', 'Access Control'
    ],
    certifications: ['CompTIA Security+ CE', 'Cisco CCNA', 'AWS Certified Solutions Architect', 'ITIL v4 Foundation'],
    starBullets: [
      {
        situation: 'Deployed multi-node tactical tactical command post enterprise network across 3 disconnected operating sites.',
        task: 'Establish 99.9% uptime communications backbone for 350+ end-users with zero classified information spillage.',
        action: 'Engineered Cisco switch and router topologies, configured automated VLAN trunking, enforced DoD STIG baselines, and implemented Type-1 hardware cryptographic key fill procedures.',
        result: 'Delivered operational network 14 hours ahead of deadline, maintaining 99.98% mission-critical uptime across a 9-month operational rotation.',
        atsSummary: 'Architected and administered multi-site enterprise network infrastructure supporting 350+ cross-functional personnel, ensuring strict compliance with defense security standards and zero security incidents.'
      },
      {
        situation: 'Legacy inventory and workstation imaging process required 6+ hours of manual technician intervention per laptop.',
        task: 'Accelerate workstation deployment pipeline while mitigating configuration drift.',
        action: 'Standardized automated PXE network boot imaging and PowerShell deployment scripts covering 400+ endpoints.',
        result: 'Reduced workstation provisioning cycle time by 75% (from 6 hours to 90 minutes) and eliminated manual configuration errors.',
        atsSummary: 'Automated endpoint provisioning and image deployment pipelines using PXE and scripting, reducing deployment time by 75% across 400+ assets.'
      },
      {
        situation: 'Frequent rotational personnel turnover caused ticket escalation backlogs and degraded user SLA resolution.',
        task: 'Standardize tier-1 through tier-3 incident resolution protocols across 12 junior technicians.',
        action: 'Authored 28 standard operating procedure (SOP) playbooks and led weekly technical cross-training workshops on ticket routing and hardware diagnostics.',
        result: 'Decreased average first-contact ticket resolution time from 48 hours to under 4 hours, elevating user satisfaction rating to 96%.',
        atsSummary: 'Developed standard operating procedures and trained 12 technicians, reducing enterprise helpdesk ticket resolution time by 91% while exceeding SLA benchmarks.'
      }
    ]
  },
  {
    code: '11B',
    branch: 'Army',
    militaryTitle: 'Infantryman / Team Leader',
    civilianTitles: [
      'Operations & Logistics Manager',
      'Field Safety Director',
      'Project Coordinator',
      'Physical Security Operations Specialist'
    ],
    clearanceLevel: 'Secret',
    primaryDuties: 'Led frontline reconnaissance, direct-action missions, operational risk management, equipment accountability, and tactical decision-making under high-stress and austere conditions.',
    atsKeywords: [
      'Operational Leadership', 'Cross-Functional Team Management', 'Crisis Decision Making',
      'Risk Mitigation', 'OSHA & Safety Compliance', 'Logistics Accountability', 'Asset Protection',
      'Standard Operating Procedures (SOP)'
    ],
    certifications: ['Project Management Professional (PMP)', 'OSHA 30-Hour Safety', 'Certified Protection Professional (CPP)'],
    starBullets: [
      {
        situation: 'Assigned leadership responsibility for a 9-person tactical reconnaissance squad operating in dispersed operational zones.',
        task: 'Execute high-tempo field objectives while maintaining 100% accountability for $4.2M in specialized vehicles and optical equipment.',
        action: 'Implemented daily pre-combat inspections (PCI), rigorous risk mitigation checklists, and adaptive decentralized decision protocols.',
        result: 'Completed 65+ consecutive tactical missions with zero preventable equipment loss and zero safety infractions.',
        atsSummary: 'Directed daily operations and risk mitigation for a 9-person specialized field team, managing $4.2M in critical assets with 100% accountability and zero safety incidents.'
      },
      {
        situation: 'Dynamic operating environment required rapid cross-training of newly assigned personnel during critical deployment phase.',
        task: 'Prepare junior personnel for advanced emergency evacuation and tactical communications responsibilities.',
        action: 'Structured a 6-week intensive operational readiness curriculum incorporating practical scenario drills and peer performance evaluations.',
        result: 'Qualified 100% of candidates on primary and secondary operational systems, earning unit top evaluation rating.',
        atsSummary: 'Designed and executed comprehensive performance training programs, accelerating operational readiness and achieving a 100% qualification rate on safety and equipment standards.'
      }
    ]
  },
  {
    code: '68W',
    branch: 'Army',
    militaryTitle: 'Combat Medic Specialist',
    civilianTitles: [
      'Emergency Medical Technician (EMT-Paramedic)',
      'Clinical Care Coordinator',
      'Healthcare Operations Supervisor',
      'Occupational Health & Safety Specialist'
    ],
    clearanceLevel: 'Secret',
    primaryDuties: 'Administered emergency trauma stabilization, tactical combat casualty care (TCCC), routine clinical triage, pharmaceutical inventory control, and medical evacuation coordination.',
    atsKeywords: [
      'Emergency Triage', 'Trauma Stabilization', 'BLS / ACLS / PHTLS', 'Patient Care Documentation',
      'HIPAA Compliance', 'Medical Logistics', 'Pharmaceutical Inventory Control', 'Infection Control'
    ],
    certifications: ['NREMT Paramedic', 'Certified Healthcare Safety Professional (CHSP)', 'AHA BLS/ACLS Instructor'],
    starBullets: [
      {
        situation: 'Managed primary aid station and mobile triage unit responsible for 450 service personnel in remote operational conditions.',
        task: 'Provide 24/7 acute trauma response, preventative health screening, and medical evacuation triage.',
        action: 'Standardized mass casualty protocol procedures, digitized clinical patient intake logs, and audited critical medical equipment supplies.',
        result: 'Treated 800+ clinical and acute trauma patients with zero preventable treatment delays, achieving a 100% survival rate for evacuated casualties.',
        atsSummary: 'Supervised clinical care and acute emergency triage for 450+ personnel, maintaining rigorous diagnostic and treatment protocols with a 100% casualty evacuation survival rate.'
      }
    ]
  },
  {
    code: '35F',
    branch: 'Army',
    militaryTitle: 'Intelligence Analyst',
    civilianTitles: [
      'Cyber Threat Intelligence Analyst',
      'Business Intelligence & Risk Manager',
      'Geospatial Data Analyst',
      'Security Operations Center (SOC) Analyst'
    ],
    clearanceLevel: 'Top Secret / SCI',
    primaryDuties: 'Collected, fused, analyzed, and disseminated all-source intelligence data, predictive threat modeling, geospatial analysis, and executive executive briefings.',
    atsKeywords: [
      'Threat Modeling', 'All-Source Analysis', 'Data Fusion', 'Predictive Analytics',
      'Executive Briefings', 'Risk Assessment', 'Open Source Intelligence (OSINT)', 'SIGINT / GEOINT'
    ],
    certifications: ['Certified Information Systems Security Professional (CISSP)', 'CompTIA CySA+', 'GIAC Cyber Threat Intelligence (GCTI)'],
    starBullets: [
      {
        situation: 'Synthesized multi-source data streams across structured reports, drone video feeds, and SIGINT intercepts in high-threat sectors.',
        task: 'Deliver daily predictive threat assessments to commanding officers and operational task force planners.',
        action: 'Applied advanced data fusion techniques, trend regression models, and clear intelligence summaries with visual risk heatmaps.',
        result: 'Produced 180+ intelligence summaries that directly averted 14 identified insurgent ambushes, saving mission assets.',
        atsSummary: 'Synthesized high-volume multi-source data into actionable predictive threat models, briefing senior decision-makers to mitigate operational risk across 180+ strategic cycles.'
      }
    ]
  },
  {
    code: 'IT',
    branch: 'Navy',
    militaryTitle: 'Information Systems Technician',
    civilianTitles: [
      'Network Administrator',
      'Cybersecurity Operations Specialist',
      'Enterprise Cloud Engineer',
      'Telecommunications Specialist'
    ],
    clearanceLevel: 'Top Secret / SCI',
    primaryDuties: 'Operated and maintained shipboard and shore-based automated data processing systems, satellite telecommunications (SHF/EHF), local area networks, and classified routing switches.',
    atsKeywords: [
      'Satellite Communications', 'Cisco Routing', 'Cybersecurity Compliance', 'LAN/WAN Architecture',
      'Crypto Key Management', 'Incident Response', 'Disaster Recovery'
    ],
    certifications: ['CompTIA Security+', 'Cisco CCNP Enterprise', 'Certified Ethical Hacker (CEH)'],
    starBullets: [
      {
        situation: 'Managed shipboard automated communication networks and satellite uplinks during multi-carrier naval exercise.',
        task: 'Maintain continuous cryptographic and tactical data exchange across 5 allied vessels.',
        action: 'Monitored RF spectrum feeds, resolved routing loop bottlenecks, and performed scheduled crypto rollover procedures.',
        result: 'Sustained uninterrupted multi-vessel communications over 60 continuous operational sea days.',
        atsSummary: 'Engineered and maintained mission-critical satellite and IP telecommunications networks for multi-vessel maritime operations, maintaining 100% secure link availability.'
      }
    ]
  },
  {
    code: '1N0X1',
    branch: 'Air Force',
    militaryTitle: 'All Source Intelligence Analyst',
    civilianTitles: [
      'Strategic Threat Intelligence Consultant',
      'Risk Intelligence Specialist',
      'Operations Research Analyst',
      'Security Operations Manager'
    ],
    clearanceLevel: 'Top Secret / SCI',
    primaryDuties: 'Analyzed global threat environments, adversary electronic signatures, air defense systems, and briefed combat aviators on mission hazards.',
    atsKeywords: [
      'Geopolitical Risk Analysis', 'Targeting Analysis', 'Air Defense Threat Modeling',
      'Sensor Fusion', 'Strategic Briefings', 'Data Dissemination'
    ],
    certifications: ['Certified Threat Intelligence Analyst (CTIA)', 'PMP', 'Scrum Master (CSM)'],
    starBullets: [
      {
        situation: 'High-stakes joint aerial operation required near-real-time threat identification of anti-aircraft radars and surface-to-air missile threats.',
        task: 'Provide accurate ingress and egress flight routing guidance to 24 flight crews daily.',
        action: 'Correlated radar signal emissions with optical satellite imagery to map real-time enemy threat rings and weapon engagement zones.',
        result: 'Zero aircraft losses or engagement incidents recorded across 450 total combat sorties.',
        atsSummary: 'Assessed complex radar and geopolitical telemetry data to formulate flight risk mitigation strategies, briefing 24 crews daily with 100% mission protection success.'
      }
    ]
  },
  {
    code: '0311',
    branch: 'Marines',
    militaryTitle: 'Rifleman / Infantry Squad Leader',
    civilianTitles: [
      'Field Operations Director',
      'Supply Chain Logistics Specialist',
      'Emergency Preparedness Coordinator',
      'Security Team Lead'
    ],
    clearanceLevel: 'Secret',
    primaryDuties: 'Executed rapid amphibious deployments, urban combat maneuvers, small-unit tactics, and strict personnel safety accountability in expeditionary environments.',
    atsKeywords: [
      'Operational Readiness', 'Tactical Problem Solving', 'Asset Inventory Control',
      'Crisis Leadership', 'Team Mentorship', 'Expeditionary Logistics'
    ],
    certifications: ['Associate Professional in Project Management (CAPM)', 'OSHA 30', 'Six Sigma Green Belt'],
    starBullets: [
      {
        situation: 'Commanded a 13-Marine infantry rifle squad during rapid overseas expeditionary deployment.',
        task: 'Execute daily perimeter security, quick-reaction force dispatches, and maintain equipment readiness in desert environments.',
        action: 'Established preventative maintenance checks, rigorous chain-of-custody protocols, and realistic simulation drills.',
        result: 'Maintained 100% equipment readiness rating across 180-day deployment without any mission failure.',
        atsSummary: 'Led operations, logistics, and safety for a 13-member high-readiness team, maintaining 100% asset accountability and mission readiness in expeditionary conditions.'
      }
    ]
  },
  {
    code: 'MST',
    branch: 'Coast Guard',
    militaryTitle: 'Marine Science Technician',
    civilianTitles: [
      'Environmental Health & Safety (EHS) Manager',
      'Hazardous Materials (HAZMAT) Compliance Officer',
      'Port Safety & Regulatory Inspector',
      'Maritime Environmental Specialist'
    ],
    clearanceLevel: 'Secret',
    primaryDuties: 'Conducted commercial vessel safety inspections, chemical and oil spill pollution investigations, federal maritime regulatory enforcement, and port facility security audits.',
    atsKeywords: [
      'HAZMAT Compliance', 'OSHA & EPA Regulations', 'Environmental Impact Assessment',
      'Port Security', 'Root Cause Analysis', 'Federal Maritime Regulations (CFR 33/46)'
    ],
    certifications: ['Certified Hazardous Materials Manager (CHMM)', 'OSHA HAZWOPER 40-Hour', 'Certified Safety Professional (CSP)'],
    starBullets: [
      {
        situation: 'Major commercial port handling over $12B in annual container and petrochemical cargo required rigorous environmental compliance audits.',
        task: 'Inspect international container ships, bulk fuel barges, and maritime waterfront facilities for environmental and federal code compliance.',
        action: 'Executed detailed audits of vessel safety management systems, ballast water discharge logs, and hazardous material manifests.',
        result: 'Identified and mitigated 42 critical safety and pollution infractions before port entry, preventing potential coastal contamination incidents.',
        atsSummary: 'Conducted rigorous environmental and safety regulatory compliance audits on commercial shipping vessels, preventing hazardous material incidents across major international ports.'
      }
    ]
  }
];
