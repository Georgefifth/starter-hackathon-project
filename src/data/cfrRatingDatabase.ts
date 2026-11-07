export interface RatingTier {
  percentage: number;
  criteria: string;
}

export interface CFRCondition {
  diagnosticCode: string;
  name: string;
  bodySystem: string;
  maxRating: number;
  ratingTiers: RatingTier[];
  presumptiveQualifiers: string[];
  dbqFormName: string;
  commonInServiceCauses: string[];
  recommendedEvidence: string[];
  nexusLanguageTemplate: string;
}

export const CFR_CONDITIONS: CFRCondition[] = [
  {
    diagnosticCode: '6100',
    name: 'Tinnitus (Recurrent ringing in the ears)',
    bodySystem: 'Special Senses (Ear & Auditory)',
    maxRating: 10,
    ratingTiers: [
      { percentage: 10, criteria: 'Recurrent ringing, buzzing, or hissing sounds in one or both ears, verified through subjective report and audiological evaluation.' }
    ],
    presumptiveQualifiers: ['High Noise Exposure MOS (Combat Arms, Aviation, Mechanics, Engineers, Navy Shipboard Engineering)'],
    dbqFormName: 'VA Form 21-0960N-1 (Ear Conditions DBQ)',
    commonInServiceCauses: [
      'Prolonged acoustic trauma from weapons firing (small arms, artillery, mortars)',
      'Engine and turbine noise on flight lines or vehicle motor pools',
      'Shipboard machinery or boiler room acoustic vibrations'
    ],
    recommendedEvidence: [
      'Military MOS duty description showing High or Moderate acoustic risk rating on VA Duty MOS Noise Exposure Listing',
      'Current audiogram or ENT diagnosis confirming persistent bilateral or unilateral tinnitus',
      'Personal statement detailing exact dates, weapon systems fired without adequate hearing protection, and first onset of symptoms'
    ],
    nexusLanguageTemplate: 'In my professional medical opinion, it is at least as likely as not (50% or greater probability) that the veteran\'s recurrent tinnitus was incurred during active military service as a direct consequence of repeated occupational noise exposure during their duties as an MOS {MOS_CODE} technician.'
  },
  {
    diagnosticCode: '9411',
    name: 'Post-Traumatic Stress Disorder (PTSD)',
    bodySystem: 'Mental Disorders',
    maxRating: 100,
    ratingTiers: [
      { percentage: 0, criteria: 'A mental condition diagnosed, but symptoms are not severe enough to interfere with work or social activities.' },
      { percentage: 10, criteria: 'Occupational and social impairment due to mild or transient symptoms under stress, or controlled by medication.' },
      { percentage: 30, criteria: 'Occupational and social impairment with occasional decrease in work efficiency and intermittent inability to perform tasks.' },
      { percentage: 50, criteria: 'Occupational and social impairment with reduced reliability and productivity, flat affect, panic attacks weekly.' },
      { percentage: 70, criteria: 'Occupational and social impairment with deficiencies in most areas (work, school, family relations), suicidal ideation, near-continuous panic, obsessional rituals.' },
      { percentage: 100, criteria: 'Total occupational and social impairment, persistent danger of hurting self or others, persistent hallucinations or delusions.' }
    ],
    presumptiveQualifiers: ['Combat Action Ribbon (CAR)', 'Combat Infantryman Badge (CIB)', 'Purple Heart', 'Fear of Hostile Military Activity'],
    dbqFormName: 'VA Form 21-0960P-3 (Review PTSD DBQ)',
    commonInServiceCauses: [
      'IED blast exposure or firefight combat engagements',
      'Witnessing mass casualty trauma or casualty retrieval details',
      'Military Sexual Trauma (MST) or acute personal life-threatening assault'
    ],
    recommendedEvidence: [
      'Formal DSM-5 diagnostic assessment by a licensed clinical psychologist or psychiatrist',
      'DD-214 verifying combat awards, deployment campaign medals, or verified stressor incident logs',
      'VA Form 21-0781 (Statement in Support of Claim for Service Connection for PTSD)',
      'Buddy statements (VA Form 21-10210) from service members witnessing the stressor event'
    ],
    nexusLanguageTemplate: 'Based upon thorough clinical review of military personnel records and psychometric testing, the veteran meets full DSM-5 criteria for PTSD. It is at least as likely as not that the traumatic stressor events experienced during active deployment in {THEATER} directly triggered and maintain the veteran\'s chronic psychiatric symptoms.'
  },
  {
    diagnosticCode: '5237',
    name: 'Lumbosacral Strain / Degenerative Disc Disease (Lower Back)',
    bodySystem: 'Musculoskeletal System (Spine)',
    maxRating: 100,
    ratingTiers: [
      { percentage: 10, criteria: 'Forward flexion of the thoracolumbar spine greater than 60 degrees but not greater than 85 degrees; or localized muscle spasm, tenderness, or guarding.' },
      { percentage: 20, criteria: 'Forward flexion greater than 30 degrees but not greater than 60 degrees; or combined range of motion not greater than 120 degrees.' },
      { percentage: 40, criteria: 'Forward flexion 30 degrees or less; or favorable ankylosis of the entire thoracolumbar spine.' },
      { percentage: 52, criteria: 'Unfavorable ankylosis of the entire thoracolumbar spine (50%) or whole spine (100%).' }
    ],
    presumptiveQualifiers: ['Heavy load carriage (rucking > 50 lbs), airborne jump status, heavy vehicle operations'],
    dbqFormName: 'VA Form 21-0960M-14 (Back / Thoracolumbar Spine DBQ)',
    commonInServiceCauses: [
      'Repetitive heavy rucking, body armor wear, and parachute jumps',
      'Motor vehicle rollovers or rough terrain tactical vehicle transit (HMMWV, MRAP)',
      'Heavy lifting of munitions, equipment racks, or mechanical assemblies'
    ],
    recommendedEvidence: [
      'X-Ray or MRI imaging documenting degenerative changes, facet arthrosis, or disc herniation',
      'Goniometer range-of-motion measurements performed by a physical therapist or physician',
      'Service Treatment Records (STRs) showing clinic visits for back pain during active duty',
      'Detailed log of functional flare-ups detailing inability to bend or sit during work'
    ],
    nexusLanguageTemplate: 'Physical examination and imaging reveal chronic lumbosacral strain with disc space narrowing. Given the veteran\'s documented in-service medical visits for acute back strain following repetitive heavy rucksack marches, it is my medical opinion that the current back pathology is at least as likely as not causally related to active military duties.'
  },
  {
    diagnosticCode: '8100',
    name: 'Migraines / Chronic Tension Headaches',
    bodySystem: 'Neurological Conditions',
    maxRating: 50,
    ratingTiers: [
      { percentage: 0, criteria: 'With less frequent attacks than once every 2 months.' },
      { percentage: 10, criteria: 'With characteristic prostrating attacks averaging one in 2 months over the last several months.' },
      { percentage: 30, criteria: 'With characteristic prostrating attacks occurring on an average once a month over the last several months.' },
      { percentage: 50, criteria: 'With very frequent completely prostrating and prolonged attacks productive of severe economic inadaptability.' }
    ],
    presumptiveQualifiers: ['Secondary to TBI, PTSD, or chronic cervical spine pain; PACT Act toxic exposure'],
    dbqFormName: 'VA Form 21-0960C-8 (Headaches / Migraines DBQ)',
    commonInServiceCauses: [
      'Concussive blast wave exposure or mild Traumatic Brain Injury (TBI)',
      'Chronic stress, sleep deprivation, and sustained night vision optic strain',
      'Secondary consequence of service-connected tinnitus or neck trauma'
    ],
    recommendedEvidence: [
      'Detailed Headache Diary kept over 3-6 months documenting dates, duration, prostrating nature (needing dark, quiet room and bed rest), and missed work hours',
      'Prescription records for migraine rescue medications (e.g. Sumatriptan, Rizatriptan)',
      'Statement from employer regarding missed workdays or productivity loss'
    ],
    nexusLanguageTemplate: 'The veteran suffers from chronic prostrating migraines occurring 3 to 4 times per month, requiring dark-room confinement and causing severe economic inadaptability. It is at least as likely as not that these episodes are secondary to the veteran\'s service-connected traumatic brain injury and chronic cervical strain sustained during military service.'
  },
  {
    diagnosticCode: '6847',
    name: 'Obstructive Sleep Apnea (OSA)',
    bodySystem: 'Respiratory System',
    maxRating: 100,
    ratingTiers: [
      { percentage: 0, criteria: 'Asymptomatic but with documented sleep disorder breathing from sleep study.' },
      { percentage: 30, criteria: 'Persistent daytime hypersomnolence not requiring mechanical breathing device.' },
      { percentage: 50, criteria: 'Requires use of continuous positive airway pressure (CPAP) or BiPAP machine.' },
      { percentage: 100, criteria: 'Chronic respiratory failure with carbon dioxide retention, or cor pulmonale.' }
    ],
    presumptiveQualifiers: ['Secondary to chronic rhinitis/sinusitis under PACT Act, or secondary to PTSD and weight gain from physical disability'],
    dbqFormName: 'VA Form 21-0960N-2 (Respiratory Conditions DBQ)',
    commonInServiceCauses: [
      'Secondary to PACT Act presumptive respiratory conditions (chronic rhinitis / chronic sinusitis)',
      'Secondary to service-connected PTSD / anxiety causing nocturnal awakenings and airway collapse',
      'Direct in-service sleep study diagnosis documented while on active orders'
    ],
    recommendedEvidence: [
      'Official Polysomnography (Sleep Study) report showing Apnea-Hypopnea Index (AHI) ≥ 5',
      'Official prescription for CPAP/BiPAP device showing continuous medical necessity',
      'Medical Nexus letter connecting OSA either directly or as secondary to PACT Act toxic airway inflammation or PTSD medications'
    ],
    nexusLanguageTemplate: 'The veteran is clinically diagnosed with severe obstructive sleep apnea requiring CPAP therapy. Based on medical literature and physical examination, it is at least as likely as not that the veteran\'s OSA is exacerbated and maintained as a secondary consequence of their service-connected chronic rhinitis and deviated septum incurred during burn pit exposure in Southwest Asia.'
  },
  {
    diagnosticCode: '5260',
    name: 'Limitation of Flexion of Knee',
    bodySystem: 'Musculoskeletal System (Knee & Lower Leg)',
    maxRating: 30,
    ratingTiers: [
      { percentage: 10, criteria: 'Flexion limited to 45 degrees; or instability of knee joint.' },
      { percentage: 20, criteria: 'Flexion limited to 30 degrees.' },
      { percentage: 30, criteria: 'Flexion limited to 15 degrees.' }
    ],
    presumptiveQualifiers: ['Patellofemoral syndrome, meniscus tears, ACL/MCL strain from combat training'],
    dbqFormName: 'VA Form 21-0960M-9 (Knee and Lower Leg DBQ)',
    commonInServiceCauses: [
      'Airborne jump impact injuries, obstacle course twist, or combat running trauma',
      'Patellar tendonitis from repetitive weighted marching over uneven terrain',
      'Direct traumatic impact in tactical motor vehicles or amphibious craft'
    ],
    recommendedEvidence: [
      'Knee range of motion measurements with a goniometer recording flexion, extension, and painful arc',
      'Service Treatment Records documenting knee sprain, acute effusion, or bracing during active duty',
      'Current MRI or orthopedic consultation report confirming meniscal tear or chondromalacia'
    ],
    nexusLanguageTemplate: 'Orthopedic evaluation indicates significant limitation of knee flexion with painful arc. In light of the veteran\'s documented in-service right knee hyper-extension during tactical airborne training, it is at least as likely as not that the current patellofemoral degeneration is a direct residual of the in-service injury.'
  }
];
