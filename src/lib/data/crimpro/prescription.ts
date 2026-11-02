/*
 * Prescription module — a special module: how long, when it starts,
 * what suspends it, what interrupts it, the Forestry Code / DENR case study with one-fact variations, and
 * computation drills. It sits right after Rule 110 because Rule 110, Sec. 1 is where institution and
 * interruption meet.
 */
import {
	box,
	caseLink,
	dl,
	flashcards,
	h3,
	h4,
	ol,
	p,
	renderAnswerKey,
	renderCase,
	renderComparison,
	renderPracticeSets,
	ruleLink,
	table,
	ul,
	type CaseStudy,
	type Comparison,
	type Deadline,
	type Practice
} from './model';

export const prescriptionCases: CaseStudy[] = [
	{
		id: 'olarte',
		name: 'People v. Olarte (as applied in Arambulo v. Laqui)',
		cite: 'Olarte: G.R. No. L-22465, February 28, 1967 · Arambulo v. Laqui: G.R. No. 138596, October 12, 2000',
		from: 'Tiu',
		facts: 'Arambulo (as reproduced in Tiu): a libel complaint was filed with the Quezon City prosecutor forty-two days after publication. The prosecutor found a prima facie case but filed the information with the Metropolitan Trial Court, which had no jurisdiction over libel. The accused argued the one-year period ran again when the prosecutor recommended filing, and that the case had prescribed.',
		issue: 'Does a complaint filed for preliminary investigation, or an information filed in a court without jurisdiction, interrupt prescription?',
		ruling: 'Yes. The filing interrupted prescription, and the period did not run again when the prosecutor recommended filing, because the proceedings had not terminated — they continued.',
		doctrine: 'Olarte: the filing of the complaint with the municipal court, "even if it be merely for purposes of preliminary examination or investigation," interrupts prescription, even if the court cannot try the case on the merits. Reasons: Art. 91 does not distinguish; the filing is the initial step of the proceedings; and it is unjust to deprive the injured party of vindication on account of delays not under his control.',
		reasoning: 'Art. 91 speaks of the filing of "the complaint or information" without distinguishing purpose; prescription runs again only when proceedings terminate without conviction or acquittal, or are unjustifiably stopped.',
		rule: 'RPC Art. 91; Rule 110, Sec. 1.',
		args: 'The accused\'s premise — that the period resumed when the prosecutor recommended filing — was rejected because that recommendation continued, not ended, the proceedings.',
		hypo: 'A complaint is filed with a prosecutor, who mistakenly files the information in a court without jurisdiction; the case is dismissed and refiled in the proper court. The first filing interrupted prescription; the period runs again only from the dismissal.',
		examQ: 'Does filing the information in a court without jurisdiction interrupt prescription? Why?'
	},
	{
		id: 'zaldivia',
		name: 'Zaldivia v. Reyes',
		cite: 'G.R. No. 102342, July 3, 1992 (En Banc)',
		from: 'Tiu',
		facts: 'A municipal ordinance of Rodriguez, Rizal was allegedly violated on May 11, 1990. A complaint was filed with the Office of the Provincial Prosecutor on May 30, 1990; the information was filed with the MTC on October 2, 1990.',
		issue: 'Did the filing with the prosecutor interrupt the two-month prescriptive period for ordinance violations?',
		ruling: 'No. The period ended on July 11, 1990; it was not interrupted by the filing with the prosecutor, which "was not a judicial proceeding." The offense had prescribed.',
		doctrine: 'For offenses under the Rule on Summary Procedure (including ordinance violations), the case is deemed commenced only when filed in court; "proceedings" in Act 3326, Sec. 2 meant judicial proceedings; and if Rule 110 conflicts with the Rule on Summary Procedure or with Act 3326, Rule 110 yields, because prescription is substantive and the Court\'s rule-making power cannot modify it.',
		reasoning: 'Sec. 9 of the then Rule on Summary Procedure required the complaint or information to be filed directly in court.',
		rule: 'Act 3326, Secs. 1–2; Rule on Summary Procedure; Rule 110, Sec. 1.',
		args: 'The Solicitor General\'s argument that "proceedings" includes administrative proceedings was rejected in Zaldivia; Panaguiton (2008) later adopted a broader reading for special laws.',
		hypo: 'Ordinance violation on March 1; complaint with prosecutor March 20; information in court May 10. Under Zaldivia, prescribed (two months ended May 1). Under Consebido\'s reasoning, the March 20 filing would toll — but see the module on whether Consebido reaches ordinances.',
		examQ: 'Does the filing of a complaint with the prosecutor interrupt the prescription of an ordinance violation? Is Zaldivia still good law?',
		also: ['r110']
	},
	{
		id: 'panaguiton',
		name: 'Panaguiton v. Department of Justice',
		cite: 'G.R. No. 167571, November 25, 2008',
		from: 'Tiu',
		facts: 'The petitioner filed a complaint-affidavit for violation of BP 22 with the Office of the City Prosecutor on August 24, 1995. The respondents argued that the offense had prescribed because no information was filed in court within the four-year period of Act 3326.',
		issue: 'For a special law (BP 22) governed by Act 3326, does filing the complaint with the prosecutor interrupt prescription?',
		ruling: 'Yes. The filing "signified the commencement of the proceedings for the prosecution of the accused and thus effectively interrupted the prescriptive period."',
		doctrine: 'BP 22 prescribes in four years under Act 3326. "Proceedings" in Act 3326, Sec. 2 should now be understood as either executive or judicial in character: "any kind of investigative proceeding instituted against the guilty person which may ultimately lead to his prosecution should be sufficient to toll prescription."',
		reasoning: 'When Act 3326 was passed in 1926, justices of the peace conducted preliminary investigations, so "judicial proceedings" then included investigation; the function has since moved to the executive. To rule otherwise would deprive the injured party of vindication on account of delays not under his control.',
		rule: 'Act 3326, Sec. 2; Rule 110, Sec. 1.',
		hypo: 'The rule this case states is the backbone of the DENR case study: if the DENR\'s investigation is an "investigative proceeding … which may ultimately lead to … prosecution," it tolls.',
		examQ: 'Does the filing of a BP 22 complaint with the prosecutor interrupt prescription? What is the test?',
		also: ['r110']
	},
	{
		id: 'interport',
		name: 'Securities and Exchange Commission v. Interport Resources Corp.',
		cite: 'G.R. No. 135808, October 6, 2008',
		from: 'Tiu',
		facts: 'Violations of the Revised Securities Act were investigated by the SEC before any complaint reached a prosecutor. The respondents claimed the offenses had prescribed.',
		issue: 'Does an investigation by an administrative agency (the SEC) interrupt prescription under Act 3326?',
		ruling: 'Yes. Proceedings under Act 3326 that interrupt prescription refer to proceedings both judicial and executive in character; the SEC\'s investigation is equivalent to the preliminary investigation conducted by the DOJ in criminal cases.',
		doctrine: 'An investigation by the agency the law charges with investigating the offense interrupts prescription. As summarized in Pangilinan: investigations conducted by the SEC "effectively interrupt the prescription period because it is equivalent to the preliminary investigation conducted by the DOJ."',
		reasoning: 'Same as Panaguiton (decided weeks later on the same reasoning); in addition, the Securities Regulation Code makes the SEC the agency of special competence to which such complaints must first be referred.',
		rule: 'Act 3326, Sec. 2; Rule 110, Sec. 5 (prosecution under special laws is governed by those laws).',
		hypo: 'The closest analogy for the DENR case: an agency investigation that the special law itself provides for.',
		examQ: 'Does an investigation by an administrative agency interrupt prescription of an offense under a special law?',
		verify: 'Facts are summarized at a high level; Tiu reproduces the doctrine.'
	},
	{
		id: 'pangilinan',
		name: 'People v. Pangilinan',
		cite: 'G.R. No. 152662, June 13, 2012',
		from: 'Tiu',
		facts: 'A BP 22 complaint was filed with the prosecutor; the information reached the court more than four years after the offense. The respondent argued that, as a special-law offense, only filing in court interrupts prescription.',
		issue: 'Is there a different interruption rule for special laws?',
		ruling: 'No. Filing the complaint with the prosecutor interrupted prescription.',
		doctrine: '"There is no more distinction between cases under the RPC and those covered by special laws with respect to the interruption of the period of prescription. The ruling in Zaldivia v. Reyes, Jr. is not controlling in special laws."',
		reasoning: 'Olarte, broadened by Francisco v. CA (filing with the fiscal\'s office), and followed in Llenes, Ingco, Brillante, Sanrio, Interport and Panaguiton. Aggrieved parties should not suffer because of the accused\'s delaying tactics or the investigating agencies\' delay.',
		rule: 'Act 3326, Sec. 2; Rule 110, Sec. 1.',
		hypo: 'An offense under a special law with no prescription clause: complaint with the prosecutor in year 3 of 4; information in year 5. Not prescribed.',
		examQ: 'Is Zaldivia controlling in special-law offenses?',
		verify: 'Tiu gives the doctrine; the specific facts above are stated only at the level of the issue.'
	},
	{
		id: 'jadewell',
		name: 'Jadewell Parking Systems Corp. v. Lidua',
		cite: 'G.R. No. 169588, October 7, 2013',
		from: 'Tiu',
		facts: 'A complaint for violation of a city ordinance was filed with the prosecutor within the two-month period, but the information was filed in court after it lapsed.',
		issue: 'Does Pangilinan\'s rule apply to ordinance violations?',
		ruling: 'No. For offenses covered by the Rule on Summary Procedure, including ordinance violations, prescription is interrupted only by the filing of the complaint or information in court. The offense had prescribed.',
		doctrine: '"The doctrine of Pangilinan pertains to violations of special laws but not to ordinances" (as later summarized in Consebido). Zaldivia applies to ordinances.',
		reasoning: 'The Rule on Summary Procedure, as a special rule, prevails over Rule 110, Sec. 1; and prescription is substantive.',
		rule: 'Act 3326; Rule on Summary Procedure; Rule 110, Sec. 1.',
		hypo: 'See the ordinance problem in the problem bank: the answer turns on whether Consebido reaches ordinances.',
		examQ: 'What interrupts prescription for an ordinance violation?',
		verify: 'Tiu reproduces the doctrine, not the facts; the facts above are stated only at the level of the issue.'
	},
	{
		id: 'lee',
		name: 'People v. Lee, Jr.',
		cite: 'G.R. No. 234618, September 16, 2019 (Third Division)',
		from: 'Checked',
		facts: 'A complaint for violation of RA 7877 (Anti-Sexual Harassment Act), which carries a three-year prescriptive period, was filed with the Office of the Ombudsman. The Sandiganbayan dismissed the case on prescription, relying on Jadewell.',
		issue: 'Did the filing of the complaint with the Ombudsman interrupt prescription?',
		ruling: 'Yes. The Sandiganbayan was reversed; the information was filed within the period as interrupted.',
		doctrine: 'For special laws, Act 3326 governs; "the prescriptive period is interrupted by the institution of proceedings for preliminary investigation against the accused," and the filing of the complaint with the Ombudsman "effectively tolled the running of the period of prescription." Jadewell concerned a city ordinance and was misapplied.',
		reasoning: 'Following Pangilinan, there is no distinction between RPC and special-law offenses on interruption.',
		rule: 'Act 3326, Sec. 2; Rule 110, Sec. 1.',
		hypo: 'A complaint under a special law filed with the Ombudsman in year 2 of a 3-year period; information in year 4 — not prescribed.',
		examQ: 'Does the filing of a complaint with the Ombudsman toll prescription for a special-law offense? Is Jadewell applicable?'
	},
	{
		id: 'consebido',
		name: 'People v. Consebido',
		cite: 'G.R. No. 258563, April 2, 2025 (En Banc, Inting, J.)',
		from: 'Checked',
		facts: 'The accused allegedly failed to file a VAT return due on October 25, 2008. The criminal complaint was filed in January 2014. The CTA dismissed the case on prescription (five years under NIRC Sec. 281).',
		issue: '(1) When does prescription begin for an NIRC offense? (2) Separately, what tolls prescription for offenses covered by the 2022 Rules on Expedited Procedures?',
		ruling: '(1) The petition was denied: the BIR could readily have discovered the missed return, so the discovery rule did not apply; the period ran from October 25, 2008, and the January 2014 complaint was too late. (2) The Court pronounced, prospectively, that the filing of the criminal complaint before the DOJ tolls prescription even for offenses covered by the 2022 Rules on Expedited Procedures.',
		doctrine: '"[H]enceforth, the filing of the criminal complaint before the DOJ, even if it involves offenses that may be covered by the 2022 Rules on Expedited Procedures in the First Level Courts, shall toll the running of the prescriptive period." The ruling in Desierto and in Corpus v. People, insofar as tolling for crimes covered by the 2022 Rules is concerned, "is deemed abandoned." The new rule applies prospectively, following the principle that the interpretation most favorable to the accused should be adopted for laws on prescription.',
		reasoning: 'The DOJ now investigates nearly all criminal cases (DOJ Circulars No. 015 and 028, 2024), including through summary investigation; the offended party should not be prejudiced by delays not under its control (Olarte). The phrase "complaint or information" in Art. 91, the 1991 Rule and the 2022 Rules is to be read as filing before the prosecution office.',
		rule: 'Act 3326, Sec. 2; NIRC Sec. 281; RPC Art. 91; 2022 Rules on Expedited Procedures, Rule II(B), Sec. 1; Rule 110, Sec. 1.',
		args: 'The People argued for the discovery rule; the Court rejected it on the facts because the omission was readily discoverable.',
		hypo: 'BP 22 committed in 2026; complaint with the city prosecutor within four years; information in court after four years. Not prescribed under Consebido. The same facts with a 2020 complaint fall under the abandoned Desierto rule because Consebido is prospective.',
		examQ: 'What did Consebido change about the interruption of prescription for offenses under the Rules on Expedited Procedures? Does it apply retroactively?',
		also: ['r110'],
		verify: 'The decision does not name Zaldivia or Jadewell among the abandoned rulings. Whether its "henceforth" reaches ordinance violations, and whether "prospective" is measured from the filing of the complaint or from the decision, should be checked against later applications.'
	},
	{
		id: 'romualdez-marcelo',
		name: 'Romualdez v. Marcelo',
		cite: 'G.R. Nos. 165510-33, July 28, 2006 (Resolution)',
		from: 'Tiu + checked',
		facts: 'Graft charges (RA 3019) were filed against an accused who had been abroad for years. The State argued that RPC Art. 91 (absence from the Philippines) suspended prescription.',
		issue: 'Does the absence of the offender from the Philippines suspend prescription of an offense under a special law?',
		ruling: 'No. On reconsideration, the Court held the offenses had prescribed.',
		doctrine: 'Act 3326 governs prescription of special-law offenses and has no provision on absence from the Philippines; Art. 91 cannot be supplied by judicial fiat.',
		reasoning: 'Courts cannot fill legislative silence; special provisions on prescription control.',
		rule: 'Act 3326; RPC Art. 91 (inapplicable).',
		args: 'A dissent argued that Art. 91 should apply suppletorily to avoid offenders evading prosecution by leaving the country; the majority did not adopt it.',
		hypo: 'A BP 22 offender flies abroad for five years. The four-year period keeps running unless proceedings were instituted.',
		examQ: 'Does absence from the Philippines suspend the prescription of a BP 22 offense?'
	},
	{
		id: 'behest-loans',
		name: 'Presidential Ad Hoc Fact-Finding Committee on Behest Loans v. Desierto',
		cite: 'G.R. No. 135715, April 13, 2011',
		from: 'Tiu',
		facts: 'Tiu reproduces the doctrine only (behest-loan transactions alleged to have been concealed).',
		issue: 'When does prescription begin for a special-law offense not known at the time of its commission?',
		ruling: 'From discovery of the unlawful nature of the act.',
		doctrine: 'The "blameless ignorance" doctrine in Act 3326, Sec. 2: if the violation was not known at the time of its commission, prescription runs from discovery — "discovery of the unlawful nature of the constitutive act or acts."',
		reasoning: 'The statute of limitations runs only when the aggrieved party knows, or has reasonable means of knowing, of the violation.',
		rule: 'Act 3326, Sec. 2.',
		hypo: 'A loan approved in secret is discovered by a fact-finding committee years later; the period runs from discovery.',
		examQ: 'Explain the blameless-ignorance doctrine under Act 3326.',
		verify: 'Facts not given in Tiu.'
	},
	{
		id: 'merida',
		name: 'Merida v. People',
		cite: 'G.R. No. 158182, June 12, 2008',
		from: 'Checked',
		facts: 'The accused cut a narra tree on private land without a DENR permit. A private individual (Tansiongco) filed the complaint with the Provincial Prosecutor, who filed an information for violation of Sec. 68 (now Sec. 77) of PD 705. The accused argued that only a forest officer could file the complaint under Sec. 80.',
		issue: 'Does PD 705, Sec. 80 bar a private person from filing a complaint with the prosecutor?',
		ruling: 'No. Section 80 "does not prohibit an interested person from filing a complaint before any qualified officer"; the trial court properly took cognizance. The penalty was reduced because the valuation of the lumber was an uncorroborated estimate.',
		doctrine: 'The forest officer\'s investigation under Sec. 80 is not the exclusive route to prosecution of Forestry Code offenses; the prosecutor\'s authority is not displaced. Violations of Sec. 68 (now 77) are punished under RPC Arts. 309–310 (qualified theft), so the penalty depends on the value of the forest products.',
		reasoning: 'Sec. 80 governs reports and complaints to forest officers; it does not limit who may complain to the prosecutor.',
		rule: 'PD 705, Secs. 77 (formerly 68) and 80; Rule 110, Secs. 3 and 5.',
		hypo: 'A barangay resident files directly with the prosecutor — valid. A complaint with the DENR forest officer is the statutory alternative, not a precondition.',
		examQ: 'Must a Forestry Code complaint first pass through the DENR?'
	},
	{
		id: 'causing',
		name: 'Causing v. People',
		cite: 'G.R. No. 258524 — Decision, October 11, 2023; Resolution on reconsideration, April 8, 2026',
		from: 'Checked',
		facts: 'A journalist charged with cyber libel moved to quash on prescription; the OSG argued for the fifteen-year period suggested in an earlier unsigned resolution (Tolentino v. People, 2018).',
		issue: 'What is the prescriptive period for cyber libel under RA 10175?',
		ruling: 'One year, counted from discovery by the offended party, the authorities or their agents (RPC Arts. 90–91). Both motions for partial reconsideration were denied in 2026.',
		doctrine: 'Cyber libel prescribes in one year like libel; the fifteen-year view from an unsigned resolution is not binding doctrine.',
		reasoning: 'RA 10175 does not provide its own period; Art. 90 fixes one year for libel and similar offenses.',
		rule: 'RPC Arts. 90–91; RA 10175, Sec. 4(c)(4); Rule 117, Sec. 3(g).',
		hypo: 'A post is discovered by the subject on January 5, 2026; the complaint must be filed with the prosecutor within one year from discovery.',
		examQ: 'What is the prescriptive period of cyber libel, and from when is it counted?',
		verify: 'Reported in summaries and the 2026 resolution; the 2023 decision was not read in full. Check whether the motion to quash was denied because the date of discovery required evidence at trial.'
	},
	{
		id: 'yapdiangco',
		name: 'Yapdiangco v. Buencamino',
		cite: 'G.R. No. L-28841, June 24, 1983',
		from: 'Checked',
		facts: 'Slight physical injuries were committed on December 2, 1964. The information was filed on February 1, 1965 — the sixty-first day, because the sixtieth day fell on a Sunday. The city court denied the motion to quash on the ground that a pleading may be filed on the next business day.',
		issue: 'Is the prescriptive period extended to the next working day when its last day falls on a Sunday or holiday?',
		ruling: 'No. The offense had prescribed.',
		doctrine: 'A Sunday or legal holiday is not a legal, efficient cause that interrupts prescription. The rule allowing filing on the next business day applies to procedural periods, not to the State\'s substantive period to prosecute.',
		reasoning: 'Prescription is a matter of substantive law; the State must file within the period.',
		rule: 'RPC Arts. 90–91; contrast Rule 22, Sec. 1 (procedural periods).',
		hypo: 'Light felony committed March 1; the 60th day falls on a holiday. The complaint must be filed before the holiday.',
		examQ: 'If the last day of the prescriptive period falls on a Sunday, may the complaint be filed on Monday?',
		verify: 'Confirmed through summaries and the case caption; read the decision for exact wording. Note that the Court counted two months as sixty days here, while Zaldivia counted calendar months — see the computation drills.'
	},
	{
		id: 'corpus',
		name: 'Corpus, Jr. v. People',
		cite: 'G.R. No. 255740, August 16, 2023 (Second Division)',
		from: 'Checked',
		facts: 'The accused was charged with serious physical injuries; the courts below convicted him of slight physical injuries, a light offense that prescribes in two months.',
		issue: 'May an accused be convicted of a lesser offense that had already prescribed when the information was filed?',
		ruling: 'No. The conviction was set aside.',
		doctrine: '"The accused cannot be convicted of an offense lesser than that charged if the lesser offense had already prescribed at the time the information was filed"; otherwise prosecutors could circumvent prescription by charging a graver offense.',
		reasoning: 'Prescription extinguishes criminal liability; charging the graver offense cannot revive it.',
		rule: 'RPC Arts. 89–91; Rule 120, Sec. 4 (variance).',
		args: 'Its statement that, for summary-procedure offenses, only filing in court interrupts prescription was abandoned prospectively in Consebido (2025). The lesser-offense holding was not.',
		hypo: 'Frustrated homicide charged 10 months after the act; evidence shows only slight physical injuries — no conviction for the lesser offense.',
		examQ: 'Can the court convict of a lesser included offense that had prescribed when the information was filed?',
		also: ['r120']
	}
];

export const prescriptionComparisons: Comparison[] = [
	{
		id: 'CPR.1',
		title: 'Prescription of felonies (RPC) vs. offenses under special laws (Act 3326)',
		a: 'Felonies under the RPC',
		b: 'Offenses under special laws without their own rule',
		meaning: ['Loss of the State\'s right to prosecute a felony by lapse of time.', 'Same, for offenses defined by special acts ("acts … not included in the Penal Code," Act 3326, Sec. 3).'],
		basis: ['RPC Arts. 89(5), 90, 91', 'Act 3326, Secs. 1–3 (unless the special law provides otherwise)'],
		who: ['Raised by the accused (motion to quash, Rule 117, Sec. 3[g], at any time — Sec. 9) or by the court.', 'Same.'],
		when: ['All RPC felonies, including libel, oral defamation and light felonies.', 'BP 22, RA 7877, PD 705 (unless its own rule applies), etc.; ordinances (2 months).'],
		reqs: ['Period depends on the penalty prescribed (afflictive, correctional, arresto mayor, light; special periods for libel and oral defamation).', 'Period depends on the imprisonment prescribed (≤1 month or fine only: 1 yr; >1 month <2 yrs: 4 yrs; 2 to <6 yrs: 8 yrs; 6 yrs or more: 12 yrs; treason 20 yrs).'],
		time: ['Starts on discovery by the offended party, the authorities or their agents (Art. 91).', 'Starts on commission; if not known, on discovery (Act 3326, Sec. 2).'],
		exceptions: ['Absence from the Philippines suspends the period (Art. 91).', 'No suspension for absence (Romualdez v. Marcelo, 2006).'],
		effect: ['Interrupted by the filing of the complaint or information (read as filing for preliminary investigation — Olarte; Francisco); runs again if proceedings terminate without conviction or acquittal or are unjustifiably stopped.', 'Interrupted when "proceedings are instituted against the guilty person" (executive or judicial — Panaguiton; Pangilinan); runs again if dismissed for reasons not constituting jeopardy.'],
		trap: ['Assuming the period starts on commission.', 'Applying Art. 91\'s absence rule to a special law.'],
		decisive: 'Start of the period and suspension by absence: RPC counts from discovery and stops while the offender is abroad; Act 3326 counts from commission (discovery only if unknown) and does not stop for absence.',
		hypo: 'A commits estafa (RPC) and B violates BP 22, both on January 1, 2020, discovered the same day; both fly abroad on January 2, 2020 and return January 2, 2025. A\'s period was suspended while abroad; B\'s four-year period ran out on January 1, 2024 unless proceedings were instituted.'
	},
	{
		id: 'CPR.2',
		title: 'Prescriptive period vs. procedural period',
		a: 'Prescriptive period of the offense',
		b: 'Procedural period (e.g., 10 days to file a counter-affidavit)',
		meaning: ['Time within which the State must institute proceedings, or lose the right to prosecute.', 'Time within which a party or officer must perform an act within a pending case.'],
		basis: ['RPC Arts. 90–91; Act 3326; special laws', 'Rules of Court (Rules 110–127); special rules; DOJ circulars'],
		who: ['The State (through the complainant and prosecutor).', 'Parties, prosecutors and courts.'],
		when: ['Before proceedings are instituted, and again after they terminate without conviction or acquittal.', 'Inside the proceedings.'],
		reqs: ['Filing with a body whose proceedings may lead to prosecution.', 'Doing the specific act (filing, resolving, serving) within the period.'],
		time: ['Last day not extended by Sundays or holidays (Yapdiangco).', 'If the last day is a Saturday, Sunday or holiday, the period runs until the next working day (Rule 22, Sec. 1, applied suppletorily).'],
		exceptions: ['Not extendible by the court; cannot be waived by the State.', 'Often extendible for good cause; some are directory.'],
		effect: ['Lapse extinguishes criminal liability (Art. 89[5]); ground to quash not waived (Rule 117, Sec. 9).', 'Lapse may bar the act (e.g., appeal), or may only expose the officer to sanctions (e.g., delay in resolving), or may support a speedy-disposition claim.'],
		trap: ['Adding the next-business-day rule to a prescriptive period.', 'Treating a prosecutor\'s delay in resolving as making the offense prescribe — the remedy is the right to speedy disposition (Cagang).'],
		decisive: 'Prescription extinguishes the State\'s right to prosecute; a procedural period regulates acts inside a case and rarely extinguishes anything.',
		hypo: 'A complaint was filed within the period, but the prosecutor took three years to resolve it. The offense has not prescribed (the filing interrupted it). The accused\'s remedy, if the delay is inordinate, is to invoke the right to speedy disposition — which, if violated, leads to dismissal on a different ground.'
	},
	{
		id: 'CPR.3',
		title: 'Prescription of the crime vs. prescription of the penalty',
		a: 'Prescription of the crime',
		b: 'Prescription of the penalty',
		meaning: ['Loss of the right to prosecute.', 'Loss of the right to enforce a final sentence.'],
		basis: ['RPC Arts. 89(5), 90, 91; Act 3326', 'RPC Arts. 89(6), 92, 93'],
		who: ['Raised by the accused before or during trial.', 'Raised by the convict after final judgment.'],
		when: ['Before a final judgment.', 'After final judgment, when the convict evades service.'],
		reqs: ['Lapse of the period without institution of proceedings.', 'Final judgment; evasion of service; lapse of the period.'],
		time: ['From discovery (RPC) or commission (special laws).', 'From the date the culprit evades service of sentence (Art. 93).'],
		exceptions: ['Absence from the Philippines suspends (RPC).', 'Interrupted if the culprit gives himself up, is captured, goes to a foreign country with which there is no extradition treaty, or commits another crime (Art. 93).'],
		effect: ['Criminal liability extinguished; information quashed or case dismissed.', 'The penalty can no longer be enforced.'],
		trap: ['Confusing the periods (Art. 90 vs. Art. 92).', 'Thinking prescription of the penalty runs from finality — it runs from evasion.'],
		decisive: 'Whether there is already a final judgment.',
		hypo: 'A convict escapes after final judgment: count prescription of the penalty from the escape. An accused who jumps bail before judgment: the crime is not prescribing (proceedings are pending); the trial may proceed in absentia.'
	}
];

export const prescriptionDeadlines: Deadline[] = [
	{ ref: 'RPC Art. 90', act: 'Institute proceedings — crimes punishable by death, reclusion perpetua or reclusion temporal', who: 'State / complainant', period: '20 years', start: 'Discovery (Art. 91)', exceptions: 'Absence from the Philippines suspends', effect: 'Criminal liability extinguished (Art. 89[5])', kind: 'prescriptive' },
	{ ref: 'RPC Art. 90', act: 'Other afflictive penalties', who: 'State / complainant', period: '15 years', start: 'Discovery', exceptions: 'Absence suspends', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'RPC Art. 90', act: 'Correctional penalties (except arresto mayor)', who: 'State / complainant', period: '10 years', start: 'Discovery', exceptions: 'Absence suspends', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'RPC Art. 90', act: 'Arresto mayor', who: 'State / complainant', period: '5 years', start: 'Discovery', exceptions: 'Absence suspends', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'RPC Art. 90', act: 'Libel and similar offenses (including cyber libel — Causing)', who: 'State / complainant', period: '1 year', start: 'Discovery', exceptions: 'Absence suspends', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'RPC Art. 90', act: 'Oral defamation and slander by deed', who: 'State / complainant', period: '6 months', start: 'Discovery', exceptions: 'Absence suspends', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'RPC Art. 90', act: 'Light offenses', who: 'State / complainant', period: '2 months', start: 'Discovery', exceptions: 'Absence suspends; last day not extended (Yapdiangco)', effect: 'Extinguished', kind: 'prescriptive', days: 'Yapdiangco counted 60 days' },
	{ ref: 'Act 3326, Sec. 1(a)', act: 'Special-law offense punished only by fine or imprisonment ≤ 1 month', who: 'State / complainant', period: '1 year', start: 'Commission; if unknown, discovery', exceptions: 'Special law\'s own period prevails', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'Act 3326, Sec. 1(b)', act: 'Imprisonment > 1 month but < 2 years (e.g., BP 22)', who: 'State / complainant', period: '4 years', start: 'Commission; if unknown, discovery', exceptions: '—', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'Act 3326, Sec. 1(c)', act: 'Imprisonment 2 years or more but < 6 years', who: 'State / complainant', period: '8 years', start: 'Commission; if unknown, discovery', exceptions: '—', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'Act 3326, Sec. 1(d)', act: 'Imprisonment 6 years or more (treason: 20 years)', who: 'State / complainant', period: '12 years', start: 'Commission; if unknown, discovery', exceptions: '—', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'Act 3326, Sec. 1', act: 'Ordinance violations', who: 'State / complainant', period: '2 months', start: 'Commission; if unknown, discovery', exceptions: 'Whether a prosecutor filing tolls is unsettled after Consebido', effect: 'Extinguished', kind: 'prescriptive' },
	{ ref: 'RA 3019, Sec. 11 (as amended by RA 10910)', act: 'Graft offenses', who: 'State / complainant', period: '20 years (15 years before RA 10910, 2016)', start: 'Act 3326, Sec. 2 rules', exceptions: 'RA 10910 is not retroactive', effect: 'Extinguished', kind: 'prescriptive', verify: 'Effectivity date of RA 10910 (approved July 21, 2016) — check publication date' },
	{ ref: 'NIRC Sec. 281', act: 'Tax offenses', who: 'State / BIR', period: '5 years', start: 'Commission; discovery only if not readily discoverable (Consebido)', exceptions: '—', effect: 'Extinguished', kind: 'prescriptive' }
];

/* ------------------------------------------------------------------ Practice */

export const prescriptionPractice: Practice[] = [
	{ cat: 'A', level: 1, topic: 'Prescription', q: 'Enumerate the four factors to consider in the prescription of crimes and state the RPC and special-law rule for each.', a: 'Tiu (pp. 34–35): (1) <b>Length</b> — Art. 90 (by penalty) vs. Act 3326, Sec. 1 (by imprisonment). (2) <b>Commencement</b> — discovery (Art. 91) vs. commission, or discovery if unknown (Act 3326, Sec. 2). (3) <b>Suspension</b> — absence from the Philippines suspends RPC prescription; no counterpart for special laws (Romualdez v. Marcelo). (4) <b>Interruption</b> — filing of the complaint or information (Art. 91; Rule 110, Sec. 1) vs. institution of proceedings, executive or judicial (Act 3326, Sec. 2; Panaguiton).', keys: 'length; commencement; suspension; interruption' },
	{ cat: 'B', level: 3, topic: 'Prescription', q: 'Distinguish the rules on prescription of felonies under the RPC from those of offenses under special laws governed by Act 3326.', a: 'See CPR.1. Decisive points: start (discovery vs. commission) and suspension by absence (RPC only).', keys: 'Art. 90/91; Act 3326; Romualdez' },
	{ cat: 'C', level: 1, topic: 'Prescription', q: 'Crimes punishable by arresto mayor prescribe in five years.', tf: true, short: 'True. RPC Art. 90, par. 3: correctional penalties prescribe in ten years, "with the exception of those punishable by arresto mayor, which shall prescribe in five years."', keys: 'Art. 90' },
	{ cat: 'C', level: 2, topic: 'Prescription', q: 'Under Act 3326, prescription of every special-law offense begins to run only from its discovery.', tf: false, short: 'False. It runs from the day of commission; discovery applies only if the violation was not known at the time (Act 3326, Sec. 2; blameless ignorance).', keys: 'Act 3326, Sec. 2' },
	{ cat: 'C', level: 2, topic: 'Prescription', q: 'The absence of the offender from the Philippines suspends the running of prescription for a violation of BP 22.', tf: false, short: 'False. Act 3326 has no absence provision, and Art. 91 cannot be applied to special laws (Romualdez v. Marcelo, 2006).', keys: 'Romualdez v. Marcelo' },
	{ cat: 'C', level: 3, topic: 'Prescription', q: 'The filing of a complaint in a court that has no jurisdiction to try the case does not interrupt prescription.', tf: false, short: 'False. Under Olarte (1967), followed in Arambulo v. Laqui (2000), filing interrupts prescription even if the court cannot try the case on the merits.', keys: 'Olarte; Arambulo' },
	{ cat: 'C', level: 3, topic: 'Prescription', q: 'When the last day of the prescriptive period falls on a Sunday, the complaint may be filed on the next working day.', tf: false, short: 'False. A Sunday or holiday does not extend the State\'s prescriptive period (Yapdiangco v. Buencamino, 1983). The next-working-day rule applies to procedural periods.', trap: 'Importing Rule 22, Sec. 1 into a substantive period.', keys: 'Yapdiangco' },
	{ cat: 'C', level: 3, topic: 'Prescription', q: 'The prescriptive period of a felony is based on the penalty actually imposed by the court after considering modifying circumstances.', tf: false, short: 'False. It is based on the penalty prescribed by law; for a compound penalty, the highest penalty is the basis (Art. 90, last par.).', keys: 'penalty prescribed by law; compound penalty' },
	{ cat: 'C', level: 4, topic: 'Prescription', q: 'Cyber libel under RA 10175 prescribes in fifteen years.', tf: false, short: 'False. Causing v. People (2023; reconsideration denied 2026): one year from discovery, as with libel under Art. 90. The fifteen-year view from an unsigned 2018 resolution is not binding.', update: 'Older reviewers cite Tolentino v. People (2018) for fifteen years.', keys: 'Causing; Art. 90; one year' },
	{ cat: 'C', level: 5, topic: 'Prescription', q: 'Under People v. Consebido (2025), a complaint for an offense covered by the Rules on Expedited Procedures that was filed with the prosecutor in 2020 tolled prescription.', tf: false, short: 'False, on the Court\'s own terms: the Consebido rule applies "henceforth," prospectively. For complaints filed before it, Desierto and Corpus applied: only filing in court tolled.', missing: 'How "prospective" is measured (date of filing vs. date of decision) has not been settled in the materials checked; flag it in your answer.', keys: 'Consebido; prospective; Desierto; Corpus' },
	{
		cat: 'D', level: 4, topic: 'Prescription — computation', title: 'Slight physical injuries — the last day',
		facts: 'X inflicts slight physical injuries on Y, who reports it to the police the same day. The sixtieth day after the incident falls on a Sunday. The complaint is filed with the city prosecutor on the following Monday.',
		q: 'Has the offense prescribed?',
		issue: 'Whether the two-month period for light offenses is extended when its last day falls on a Sunday.',
		alac: {
			answer: 'Yes, it has prescribed (on the Yapdiangco computation).',
			legalBasis: 'RPC Art. 90: light offenses prescribe in two months; Art. 91: counted from discovery. Yapdiangco v. Buencamino (1983): a Sunday or legal holiday does not extend the prescriptive period.',
			application: 'Discovery was on the day of the incident (the offended party knew immediately). The sixtieth day fell on a Sunday; filing on the next working day is beyond the period.',
			conclusion: 'The complaint was filed out of time; the case should be dismissed (Rule 117, Sec. 3[g]).'
		},
		missing: 'Whether "two months" means sixty days (Civil Code Art. 13; Yapdiangco) or two calendar months (Zaldivia counted May 11 to July 11). If counted by calendar months, the last day might fall on a different date — compute both and state the rule you use.',
		trap: 'Applying the next-working-day rule.',
		keys: 'Art. 90; Yapdiangco; light offenses'
	},
	{
		cat: 'D', level: 4, topic: 'Prescription — special law', title: 'Anti-Sexual Harassment complaint with the Ombudsman',
		facts: 'A public official commits an act of sexual harassment punishable under RA 7877 (prescriptive period: three years). The victim files a complaint with the Office of the Ombudsman two years later. The Ombudsman files the information with the Sandiganbayan four years after the act.',
		q: 'Has the offense prescribed?',
		issue: 'Whether the filing of a complaint with the Ombudsman interrupts prescription of a special-law offense.',
		alac: {
			answer: 'No.',
			legalBasis: 'Act 3326, Sec. 2: prescription is interrupted when proceedings are instituted against the guilty person. People v. Lee (2019): the filing of the complaint with the Ombudsman "effectively tolled" the period; Pangilinan (2012): no distinction between RPC and special-law offenses on interruption.',
			application: 'The complaint was filed in year two, within the three-year period. The Ombudsman\'s preliminary investigation is a proceeding that may lead to prosecution.',
			conclusion: 'The information is timely.'
		},
		tempting: 'Relying on Jadewell. Lee held Jadewell inapplicable because it involved a city ordinance.',
		keys: 'Act 3326; Lee; Pangilinan; Ombudsman'
	},
	{
		cat: 'E', level: 5, topic: 'Prescription — Forestry Code', title: 'Forestry Code complaint filed with a DENR legal officer',
		facts: 'A person commits an offense under the Forestry Code (PD 705). A complaint is submitted to the legal officer of the DENR.',
		q: 'Does the filing interrupt the prescriptive period of the offense? Do not answer yes or no without identifying the facts you need.',
		issue: 'Whether a complaint filed with a DENR legal officer is a "proceeding instituted against the guilty person" that interrupts prescription under Act 3326, Sec. 2.',
		alac: {
			answer: 'Qualified yes: it interrupts prescription if the complaint is a criminal complaint (or report) against the offender, lodged with the DENR office that PD 705, Sec. 80 charges with investigating the offense, and filed before the period lapsed. It does not interrupt if it is purely administrative, is filed with an officer with no investigative function, or comes too late.',
			legalBasis: 'PD 705, Sec. 80: complaints not committed in the presence of a forest officer "shall immediately be investigated by the forest officer assigned in the area," who, if there is prima facie evidence, "shall file the necessary complaint with the appropriate official authorized by law to conduct a preliminary investigation." Act 3326, Sec. 2 as read in Panaguiton (2008), SEC v. Interport (2008), Pangilinan (2012), People v. Lee (2019) and Consebido (2025): "any kind of investigative proceeding instituted against the guilty person which may ultimately lead to his prosecution" tolls prescription; an agency investigation equivalent to preliminary investigation suffices (Interport). Rule 110, Sec. 1 (institution) and Sec. 5 (prosecution under special laws governed by those laws). Merida v. People (2008): the DENR route is not exclusive.',
			application: 'The Sec. 80 investigation is a statutory step whose purpose is to lead to the filing of a complaint with the prosecutor — it is the kind of executive, investigative proceeding Panaguiton and Interport had in mind, and the offended party (the State) should not lose its case to delays in the agency. But three facts decide it: (1) Nature of the complaint — a criminal complaint or report seeking investigation for prosecution, not merely an administrative case for confiscation or permit cancellation. (2) Authority of the receiving officer — a "legal officer" must be part of the office that conducts the Sec. 80 investigation (the forest officer or the DENR office assigned to the area); a complaint left with an officer who has no investigative function is not a proceeding against the offender. (3) Timing — it must be filed before the period ran out. On the period itself: Sec. 77 offenses are punished by the penalties of RPC Arts. 309–310 (qualified theft), so the period depends on the value of the forest products. Under Act 3326 (special law without its own period) the period is likely 8 or 12 years depending on the imprisonment prescribed; some argue Art. 90 applies because the penalty is borrowed from the RPC — state both.',
			conclusion: 'If the complaint is criminal in nature, filed with the DENR office charged with the Sec. 80 investigation, against the offender, and within the period, it interrupts prescription; the period runs again only if the proceedings are dismissed for reasons not constituting jeopardy. If any of those facts is missing, it does not, and prescription is interrupted only when a complaint reaches the prosecutor. No Supreme Court decision squarely rules on a DENR legal officer; the answer rests on the Panaguiton–Interport–Consebido line.'
		},
		a: 'The examiner is testing whether you can move from "filed with the prosecutor" (settled) to "filed with an agency" (analogical). The strongest support is Interport, which treated an agency investigation as equivalent to preliminary investigation, and Sec. 80, which makes the DENR investigation a statutory gateway to prosecution. The strongest counter-argument is Merida: unlike the SEC under the Securities Regulation Code, the DENR investigation is not a mandatory first step, so the DENR is not the only body whose proceedings "may lead to prosecution" — but non-exclusivity did not stop the Ombudsman\'s concurrent jurisdiction from tolling in Lee.',
		missing: '(1) What offense and penalty — Sec. 77 (illegal cutting or possession) or another section? What is the value of the forest products (it fixes the penalty under Arts. 309–310 and so the period)? (2) Dates of commission, discovery, filing with the DENR, referral to the prosecutor and filing in court. (3) Was the complaint criminal or administrative? Sworn? Did it name the offender? (4) Is the "legal officer" a forest officer or part of the office conducting the Sec. 80 investigation, or merely a lawyer in a regional office? (5) What did the DENR do — investigate, refer, dismiss, or nothing? (6) Was the matter later filed with the prosecutor, and when?',
		tempting: '"No — only the prosecutor or the court can receive a complaint that interrupts prescription." That is Zaldivia\'s reading of "judicial proceedings," which Panaguiton, Interport and Pangilinan rejected for special laws. Equally wrong: "Yes — any filing anywhere interrupts." Proceedings must be against the guilty person and capable of leading to prosecution.',
		trap: 'The question names a DENR "legal officer," not a "forest officer," and does not say whether the complaint is criminal or administrative. The trap is answering yes or no without identifying those facts.',
		update: 'Consebido (2025) now expressly makes the filing of a complaint before the DOJ toll prescription uniformly. It does not speak of other agencies, so the DENR answer still rests on Interport\'s analogy.',
		keys: 'PD 705 Sec. 80; Act 3326 Sec. 2; Panaguiton; Interport; Pangilinan; Lee; Consebido; Merida; nature of complaint; authority of receiving officer; timing'
	},
	{
		cat: 'E', level: 5, topic: 'Prescription — BP 22 timeline', title: 'BP 22 — which interruption rule applies?',
		facts: 'D issues a check that bounces in 2019; notice of dishonor is received the same year. P files a complaint-affidavit with the city prosecutor in 2021. The prosecutor resolves the case and files the information in the MTC in 2024, more than four years after the offense.',
		q: 'Has the offense prescribed? Would your answer change if the check had bounced in 2025, the complaint had been filed in 2026, and the information had been filed in 2030?',
		issue: 'Whether a complaint with the prosecutor interrupts prescription of BP 22 committed after April 15, 2003 (when BP 22 came under the Rule on Summary Procedure).',
		alac: {
			answer: 'On the original facts, it likely has prescribed. On the alternative facts, it has not.',
			legalBasis: 'Act 3326: BP 22 prescribes in four years (Panaguiton). Republic v. Desierto (2023) and Corpus v. People (2023): for offenses covered by the Rule on Summary Procedure (BP 22 since April 15, 2003), only filing in court interrupts. People v. Consebido (April 2, 2025): henceforth, filing before the DOJ tolls even for offenses covered by the 2022 Rules on Expedited Procedures; Desierto and Corpus abandoned on that point; prospective.',
			application: 'The offense (2019) is covered by summary procedure; the complaint (2021) predates Consebido, so the Desierto rule applies and only the 2024 court filing counts — beyond four years. In the alternative, the 2026 complaint is filed after Consebido and within four years of the 2025 offense, so it tolled the period; the 2030 information is timely even though more than four years passed from the offense.',
			conclusion: 'On the original facts, move to quash on prescription (Rule 117, Sec. 3[g]); on the alternative facts, the case may proceed.'
		},
		tempting: 'Citing Panaguiton (filing with the prosecutor tolls BP 22) without noticing that Desierto limited it to offenses before April 15, 2003.',
		missing: 'How courts measure "prospective" — by date of filing of the complaint or by pendency at the time of the decision. If measured by pendency, a complaint filed in 2021 and still pending in April 2025 might be argued to fall under the new rule.',
		trap: 'Three rulings point three ways (Panaguiton 2008; Desierto 2023; Consebido 2025). The dates decide.',
		keys: 'Act 3326; Panaguiton; Desierto; Corpus; Consebido; April 15, 2003'
	},
	{
		cat: 'E', level: 5, topic: 'Prescription — ordinance', title: 'Ordinance violation after Consebido',
		facts: 'On February 2, 2026, V violates a city ordinance (penalty: fine). The city legal officer files a complaint with the city prosecutor on February 20, 2026. The information is filed in the MTCC on May 15, 2026.',
		q: 'Has the offense prescribed?',
		issue: 'Whether, after Consebido, the filing of a complaint for an ordinance violation with the prosecutor interrupts the two-month period.',
		alac: {
			answer: 'Arguably no, under Consebido — but the point is unsettled, and both answers should be stated.',
			legalBasis: 'Act 3326, Sec. 1: ordinance violations prescribe in two months. Zaldivia (1992) and Jadewell (2013): only filing in court interrupts. Consebido (2025): henceforth, the filing of the criminal complaint before the DOJ, even for offenses "covered by the 2022 Rules on Expedited Procedures," tolls; the 2022 Rules cover ordinance violations (Rule I, Sec. 1[B][3]). Consebido expressly abandoned Desierto and Corpus, but did not name Zaldivia or Jadewell.',
			application: 'The complaint was filed eighteen days after the offense, well within two months. If Consebido applies, prescription stopped on February 20 and the May 15 filing is timely. If Zaldivia and Jadewell still govern ordinances, the period ended in early April and the offense prescribed before May 15.',
			conclusion: 'The better view after Consebido is that the filing with the prosecutor tolled the period, because its reasoning and its words ("offenses that may be covered by the 2022 Rules") reach ordinance violations. A cautious answer flags that Zaldivia and Jadewell were not expressly abandoned.'
		},
		trap: 'Reciting Zaldivia from the notes as settled law, or reciting Consebido as if it named Zaldivia.',
		keys: 'Act 3326; Zaldivia; Jadewell; Consebido; Rule I, Sec. 1(B)'
	},
	{
		cat: 'E', level: 5, topic: 'Prescription — resumption', title: 'Complaint dismissed, then refiled',
		facts: 'An offense under a special law prescribes in four years. It is committed and known on January 10, 2020. A complaint is filed with the prosecutor on January 10, 2022. The prosecutor dismisses it for insufficiency of evidence on January 10, 2023; the dismissal becomes final. The complainant refiles with new evidence on March 10, 2024.',
		q: 'Was the refiled complaint timely?',
		issue: 'How much of the period remains after an interruption ends with a dismissal not amounting to jeopardy.',
		alac: {
			answer: 'Yes.',
			legalBasis: 'Act 3326, Sec. 2: prescription is interrupted when proceedings are instituted and "shall begin to run again if the proceedings are dismissed for reasons not constituting jeopardy." A prosecutor\'s dismissal at preliminary investigation does not place the respondent in jeopardy.',
			application: 'Two years ran before the first complaint (January 10, 2020 to January 10, 2022). The clock stopped until the dismissal on January 10, 2023, then resumed with two years left — until January 10, 2025. The refiling on March 10, 2024 is within that remainder.',
			conclusion: 'The refiled complaint is timely and interrupts prescription again.'
		},
		missing: 'Whether the period resumes on the date of the dismissal or on its finality (after the period for reconsideration or review). Compute both; here either way the refiling is timely.',
		trap: 'Restarting the full four years from the dismissal. Interruption is not renewal: only the unexpired balance runs again.',
		keys: 'Act 3326, Sec. 2; dismissed for reasons not constituting jeopardy; unexpired balance'
	},
	{
		cat: 'E', level: 5, topic: 'Prescription — RPC with absence', title: 'Estafa, discovery and absence abroad',
		facts: 'A commits estafa (penalty prescribed by law within correctional penalties) on June 1, 2014. The victim discovers it on June 1, 2016. A leaves for the United States on June 1, 2018 and returns on June 1, 2023. The complaint is filed with the prosecutor on June 1, 2026.',
		q: 'Has the offense prescribed?',
		issue: 'Computation of an RPC prescriptive period that starts on discovery and is suspended during absence from the Philippines.',
		alac: {
			answer: 'No.',
			legalBasis: 'RPC Art. 90: correctional penalties prescribe in ten years; Art. 91: the period runs from discovery and "shall not run when the offender is absent from the Philippine Archipelago."',
			application: 'The period began on June 1, 2016 (discovery). It ran two years until June 1, 2018, stopped for five years while A was abroad, and resumed on June 1, 2023. By June 1, 2026, a total of five years has run (2 + 3). Five years remain.',
			conclusion: 'The complaint is timely.'
		},
		tempting: 'Counting from commission (2014) or ignoring the absence.',
		missing: 'The exact penalty: if the amount defrauded places the penalty in a different class after RA 10951 (2017), the period may differ. Confirm the penalty prescribed for the amount involved.',
		keys: 'Art. 90; Art. 91; discovery; absence suspends'
	},
	{
		cat: 'G', level: 5, topic: 'Prescription — lesser offense', title: 'Graver offense charged to revive a prescribed lesser offense',
		facts: 'On January 5, 2026, B punches C. On August 10, 2026, the prosecutor files an information for less serious physical injuries. The evidence at trial shows only slight physical injuries (healing in five days).',
		q: 'May the court convict B of slight physical injuries?',
		issue: 'Whether an accused may be convicted of a lesser included offense that had prescribed when the information was filed.',
		alac: {
			answer: 'No.',
			legalBasis: 'Corpus v. People (2023): "the accused cannot be convicted of an offense lesser than that charged if the lesser offense had already prescribed at the time the information was filed." RPC Art. 90 (light offenses: two months). Rule 120, Sec. 4 (variance).',
			application: 'Slight physical injuries is a light felony that prescribed two months after January 5, 2026 (assuming the offense was immediately known and no earlier complaint was filed). By August 2026 it had prescribed. Convicting B of it would let the prosecution evade prescription by charging a graver offense.',
			conclusion: 'B must be acquitted of the lesser offense.'
		},
		missing: 'Whether a complaint was filed with the prosecutor earlier (e.g., in February 2026). If so, Consebido (prospective) would treat that filing as tolling, and the lesser offense would not have prescribed.',
		update: 'Corpus\'s lesser-offense holding stands; only its statement on tolling for summary-procedure offenses was abandoned in Consebido.',
		keys: 'Corpus; lesser offense prescribed; Art. 90; Consebido'
	}
];

/* ------------------------------------------------------------------ Rendering */

const variationLadder: [string, string, string][] = [
	['Complaint filed with the <b>proper prosecutor</b> (city/provincial prosecutor of the place)', 'Interrupts', 'Rule 110, Sec. 1; Panaguiton; Pangilinan; Consebido (now for all DOJ filings).'],
	['Complaint filed with the <b>DENR office or forest officer</b> charged with the Sec. 80 investigation', 'Likely interrupts (unsettled)', 'Sec. 80 makes it a statutory investigation leading to prosecution; Interport analogy. No SC case squarely in point.'],
	['Complaint left with a <b>DENR legal officer who has no investigative role</b> (e.g., a lawyer in the regional legal division handling permits)', 'Doubtful — probably does not interrupt', 'Not a proceeding "instituted against the guilty person" that may lead to prosecution; compare Tiu: void proceedings do not interrupt (Disini v. Sandiganbayan, as cited in Tiu).'],
	['<b>Administrative</b> complaint for confiscation or permit cancellation only', 'Does not interrupt the criminal period', 'Not a criminal proceeding against the offender.'],
	['Complaint filed with an <b>officer without authority</b> (e.g., barangay captain, a police desk blotter entry)', 'Does not interrupt (as a rule)', 'A blotter or report is not the institution of proceedings; contrast a complaint with a police unit that forwards it — the date of filing with the prosecutor controls.'],
	['Complaint filed directly with the <b>court</b> (MTC, for offenses not requiring PI, outside chartered cities)', 'Interrupts', 'Rule 110, Sec. 1(b); even a court without jurisdiction (Olarte).'],
	['Complaint with a <b>special-statute body</b> (SEC under the SRC; Ombudsman; COMELEC)', 'Interrupts', 'Interport (SEC); Lee (Ombudsman); concurrent jurisdiction of COMELEC (RA 9369).'],
	['Filed <b>one day before</b> the period ends', 'Interrupts', 'Within the period.'],
	['Filed <b>on the last day</b>', 'Interrupts', 'The last day is included (exclude the first, include the last).'],
	['Filed <b>the day after</b> the last day (which was a Sunday)', 'Too late', 'Yapdiangco: no extension for Sundays or holidays.'],
	['<b>Defective</b> complaint (unsworn; no respondent named)', 'Depends', 'If it still starts proceedings against the offender, arguably interrupts; if dismissed for the defect, the period runs again from the dismissal. Name the respondent and swear to it.'],
	['DENR <b>refers</b> the complaint to the prosecutor', 'If the DENR filing interrupted, the referral continues the same proceedings; if not, interruption occurs on filing with the prosecutor', 'Compute both dates.'],
	['DENR or prosecutor <b>dismisses</b>; a later preliminary investigation is started on refiling', 'Period resumed on dismissal; refiling interrupts again', 'Act 3326, Sec. 2; only the unexpired balance runs.'],
	['Proceedings <b>delayed</b> for years', 'Prescription stays interrupted', 'The remedy is the right to speedy disposition (Cagang v. Sandiganbayan, 2018; reiterated in Consebido\'s concern for delay), not prescription.'],
	['Offense is under the <b>RPC</b> instead of a special law', 'Art. 90/91 rules apply', 'Discovery rule; absence suspends; filing of complaint for PI interrupts.'],
	['Offense is an <b>ordinance</b> violation', 'Unsettled after Consebido', 'Zaldivia and Jadewell (court filing only) were not expressly abandoned; Consebido\'s words reach offenses covered by the 2022 Rules.']
];

const timeline: [string, string, string][] = [
	['1926', 'Act 3326 enacted', '"Proceedings" — at the time, justices of the peace conducted preliminary investigations.'],
	['1967', 'People v. Olarte', 'Filing the complaint for preliminary investigation interrupts, even in a court that cannot try the case.'],
	['1983', 'Francisco v. CA', 'Filing with the fiscal\'s office also interrupts (adopted in the 1988 amendment of Rule 110, Sec. 1).'],
	['1992', 'Zaldivia v. Reyes (En Banc)', 'Ordinance / summary procedure: only filing in court interrupts.'],
	['2006', 'Romualdez v. Marcelo', 'Absence abroad does not suspend special-law prescription.'],
	['2008', 'Panaguiton v. DOJ; SEC v. Interport', '"Proceedings" are executive or judicial; agency investigation equivalent to PI interrupts.'],
	['2012', 'People v. Pangilinan', 'No distinction between RPC and special laws on interruption; Zaldivia not controlling for special laws.'],
	['2013', 'Jadewell v. Lidua', 'Pangilinan does not apply to ordinances; Zaldivia applies.'],
	['2019', 'People v. Lee', 'Ombudsman complaint tolls; Jadewell limited to ordinances.'],
	['2023', 'Republic v. Desierto; Corpus v. People', 'Summary-procedure offenses (BP 22 after April 15, 2003; slight physical injuries): only filing in court interrupts.'],
	['2025', 'People v. Consebido (En Banc)', 'Henceforth, filing with the DOJ tolls even for offenses under the 2022 Expedited Rules; Desierto and Corpus abandoned on that point; prospective.']
];

const drills: [string, string][] = [
	['Light felony (2 months) discovered March 31. Last day?', 'Two readings: (a) sixty days (Civil Code Art. 13; Yapdiangco) — May 30; (b) two calendar months (as Zaldivia counted May 11 → July 11) — May 31. State the reading you use. If the last day is a Sunday, it is not extended.'],
	['Special-law offense punished only by a fine (1 year) committed and known on February 29, 2024. Last day?', 'Under the Administrative Code of 1987, Sec. 31, a year is twelve calendar months, so the period ends at the close of the twelfth month — February 28, 2025 (there is no February 29 in 2025). Some count to March 1; say which reading you use.'],
	['Libel (1 year) discovered on January 15, 2026; complaint filed with the prosecutor on January 15, 2027. Timely?', 'Excluding the first day and including the last, the year ends on January 15, 2027 — timely on that day (if that day is a Sunday, Yapdiangco says it is not extended, but filing on the day itself is still within the period).'],
	['Special law, 8 years. Committed and known January 1, 2018; complaint January 1, 2023; dismissed (no jeopardy) January 1, 2024. Last day to refile?', '5 years used; 3 remain from January 1, 2024 → January 1, 2027.'],
	['RPC felony, 10 years. Discovered January 1, 2016; offender abroad January 1, 2017 to January 1, 2021. Last day?', '1 year before departure + 9 years after return → January 1, 2030.'],
	['Ordinance (2 months) violated October 1; complaint with prosecutor October 20; information in court December 10. Prescribed?', 'Under Zaldivia/Jadewell: yes (period ended about December 1). Under Consebido\'s reasoning: no (tolled on October 20). Unsettled — give both.']
];

export function renderPrescription() {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="prescription">Prescription Module — Rule 110, Sec. 1 and the Forestry Code Case Study</h2>`);
	out.push(
		`<p class="sg-intro">Prescription is substantive law (RPC Arts. 89–91; Act 3326), but it meets procedure in ${ruleLink('r110', 'sections', 'Rule 110, Sec. 1')} — institution interrupts it — and in ${ruleLink('r117')} — it is a ground to quash that is never waived. Do not confuse these periods with the procedural periods in the <a href="#deadlines">deadlines matrix</a>.</p>`
	);

	out.push(h3('prescription-map', '1 · The four questions'));
	out.push(
		table(
			['Question', 'Felonies under the RPC', 'Special laws (Act 3326)', 'Ordinances'],
			[
				['<b>How long?</b>', 'Art. 90: 20 / 15 / 10 / 5 years; libel 1 year; oral defamation and slander by deed 6 months; light offenses 2 months. Compound penalty: the highest is the basis.', 'Sec. 1: 1 / 4 / 8 / 12 years by imprisonment; treason 20 years — unless the special law fixes its own period.', 'Act 3326, Sec. 1: 2 months.'],
				['<b>When does it start?</b>', 'Discovery by the offended party, the authorities or their agents (Art. 91).', 'Day of commission; if not known, discovery (Sec. 2 — "blameless ignorance").', 'Same as special laws.'],
				['<b>What suspends it?</b>', 'Absence of the offender from the Philippines (Art. 91).', 'Nothing comparable (Romualdez v. Marcelo).', 'Nothing comparable.'],
				['<b>What interrupts it?</b>', 'Filing of the complaint or information — including for preliminary investigation (Olarte; Francisco; Rule 110, Sec. 1).', 'Institution of proceedings, executive or judicial (Panaguiton; Interport; Pangilinan; Lee); DOJ filing (Consebido).', 'Court filing only (Zaldivia; Jadewell) — unsettled after Consebido.'],
				['<b>When does it run again?</b>', 'When proceedings terminate without conviction or acquittal, or are unjustifiably stopped for reasons not imputable to the accused (Art. 91).', 'When proceedings are dismissed for reasons not constituting jeopardy (Sec. 2).', 'Same as special laws.']
			]
		)
	);
	out.push(
		box(
			'blue',
			'Special laws with their own periods (examples)',
			ul([
				'RA 3019 (Anti-Graft): 20 years under RA 10910 (2016), not retroactive; 15 years before.',
				'NIRC (tax offenses), Sec. 281: 5 years; discovery rule only if the violation could not readily be known (Consebido).',
				'RA 7877 (Anti-Sexual Harassment): 3 years (People v. Lee).',
				'Cyber libel (RA 10175): no own period — one year under Art. 90 (Causing v. People).',
				'BP 22: no own period — four years under Act 3326 (Panaguiton).'
			]) + `<p class="rv-verify">⚠ Verify: other special laws (e.g., election offenses) have their own periods; check the statute before answering.</p>`
		)
	);

	out.push(h3('prescription-interrupt', '2 · Interruption — how the rule developed'));
	out.push(table(['Year', 'Ruling or law', 'What it held'], timeline.map(([y, c, h]) => [`<b>${y}</b>`, c, h])));
	out.push(
		box(
			'yellow',
			'The rule today, in four lines',
			ol([
				'RPC felonies and special-law offenses: filing the complaint with the prosecutor (or the Ombudsman, or the court) interrupts prescription.',
				'Agency investigations the law provides for (e.g., SEC) also interrupt (Interport).',
				'Offenses under the 2022 Expedited Rules: filing with the DOJ interrupts — but only prospectively from Consebido (April 2, 2025); before that, only filing in court (Desierto; Corpus).',
				'Ordinances: Zaldivia and Jadewell (court filing only) were not expressly abandoned; Consebido\'s reasoning points the other way. Flag it.'
			])
		)
	);
	out.push(
		box(
			'orange',
			'Three traps on interruption',
			ul([
				'Interruption is not renewal: when the period runs again, only the <b>unexpired balance</b> runs.',
				'Void proceedings do not interrupt (Tiu, citing Disini v. Sandiganbayan); a court without jurisdiction is different — Olarte says filing there interrupts.',
				'Delay by the investigating office does not make the offense prescribe. The accused\'s remedy is the right to speedy disposition (see Rule 115 and Rule 112).'
			])
		)
	);

	out.push(h3('prescription-forestry', '3 · Case study — Forestry Code complaint filed with a DENR legal officer'));
	out.push(
		box(
			'neutral',
			'The question',
			p('"If a person commits an offense under the Forestry Code and a complaint is submitted to the legal officer of the DENR, does the filing interrupt the prescriptive period of the offense?" Do not automatically answer yes or no.')
		)
	);
	out.push(h4('Working it through the ten-step method'));
	out.push(
		table(
			['Step', 'Applied to the DENR question'],
			[
				['1 · Offense', 'PD 705, Sec. 77 (formerly 68; renumbered by RA 7161): cutting, gathering, collecting or removing timber or other forest products without authority, or possessing them without legal documents — punished with the penalties of RPC Arts. 309–310 (qualified theft). Other sections define other offenses. <b>Need:</b> which section, and the value of the forest products.'],
				['2 · Procedural stage', 'Before preliminary investigation: a complaint or report to the DENR, which under Sec. 80 investigates and, if there is prima facie evidence, files the complaint with the officer authorized to conduct preliminary investigation.'],
				['3 · Actors', 'Complainant (private person, forest officer, police); DENR "legal officer" (is he the forest officer conducting the Sec. 80 investigation, or a lawyer with no investigative role?); prosecutor; court.'],
				['4 · Requirement', 'Act 3326, Sec. 2: "proceedings … instituted against the guilty person." Panaguiton/Interport test: an investigative proceeding, executive or judicial, that may ultimately lead to prosecution.'],
				['5 · Dates and deadline', 'Commission or discovery; filing with the DENR; referral; filing with the prosecutor; information. The period: under Act 3326, determined by the imprisonment prescribed (likely 8 or 12 years, given qualified-theft penalties); an Art. 90 view is possible because the penalty is borrowed from the RPC.'],
				['6 · Sufficiency', 'Criminal complaint or administrative case? Sworn? Names the offender? Filed with the office charged with the Sec. 80 investigation?'],
				['7 · Exceptions and special laws', 'PD 705 has no interruption rule of its own (verify the current text). Merida: the DENR route is not exclusive. Consebido: DOJ filing tolls uniformly — silent on other agencies.'],
				['8 · Consequence', 'If it interrupts, the period stops on filing with the DENR and resumes only if proceedings are dismissed without jeopardy. If not, interruption occurs only on filing with the prosecutor.'],
				['9 · Apply', 'A criminal complaint against the offender, lodged with the DENR office that investigates under Sec. 80, is an executive investigative proceeding that may lead to prosecution — the Interport analogy.'],
				['10 · Conclusion', 'Qualified yes, if the three facts are present (criminal in nature; proper DENR investigating office; within the period). Otherwise, no.']
			]
		)
	);
	out.push(
		box(
			'purple',
			'Defensible answers',
			ul([
				'<b>Yes (best supported):</b> Sec. 80 makes the DENR investigation the statutory gateway to prosecution; Interport treats an agency investigation as equivalent to preliminary investigation; Panaguiton and Consebido refuse to make the State bear delays it does not control.',
				'<b>No (strict view):</b> Rule 110, Sec. 1 speaks of the "proper officer for … preliminary investigation"; a DENR legal officer is not one; Merida shows the DENR route is optional, unlike the SEC\'s mandatory jurisdiction in Interport.',
				'<b>Depends (the model answer):</b> name the facts that decide it — nature of the complaint, authority of the receiving officer, timing — and resolve each.'
			])
		)
	);
	out.push(h4('One-fact variations'));
	out.push(table(['If the fact is…', 'Result', 'Why'], variationLadder.map(([a, b, c]) => [a, `<b>${b}</b>`, c])));

	out.push(h3('prescription-compute', '4 · Computing the period'));
	out.push(
		dl([
			['First and last day', 'Exclude the first day, include the last (Civil Code Art. 13, last par.; Rule 22, Sec. 1).'],
			['Last day on a Sunday or holiday', 'Not extended for prescription (Yapdiangco v. Buencamino, 1983) — contrast procedural periods under Rule 22, Sec. 1.'],
			['Months', 'Civil Code Art. 13 counts a month as 30 days; Yapdiangco counted two months as sixty days; Zaldivia counted calendar months (May 11 → July 11). The Administrative Code of 1987, Sec. 31 defines "month" as thirty days and "year" as twelve calendar months. Flag which you use.'],
			['Years', 'Twelve calendar months (Administrative Code of 1987, Sec. 31).'],
			['Interruption', 'Stop the clock on the filing date; when it runs again, add only the unexpired balance.']
		])
	);
	out.push(`<p class="rv-verify">⚠ Verify: the month-count conflict (30-day months vs. calendar months) has not been resolved in the materials provided. Show both computations when the answer turns on a day or two.</p>`);
	out.push(h4('Computation drills — answer first, then open'));
	out.push(flashcards(drills));

	out.push(h3('prescription-compare', '5 · Comparisons'));
	out.push(...prescriptionComparisons.map(renderComparison));

	out.push(h3('prescription-cases', '6 · Cases'));
	out.push(...prescriptionCases.map(renderCase));

	out.push(h3('prescription-deadlines', '7 · Prescriptive periods at a glance'));
	out.push(
		table(
			['Source', 'Offense', 'Period', 'Starts', 'Notes'],
			prescriptionDeadlines.map((d) => [`<b>${d.ref}</b>`, d.act, `<b>${d.period}</b>`, d.start, `${d.exceptions}${d.verify ? `<p class="rv-verify">⚠ Verify: ${d.verify}</p>` : ''}`])
		)
	);

	out.push(h3('prescription-practice', '8 · Problem bank'));
	out.push(`<p class="sg-intro">Prescription only. Numbers start with PR. The Forestry Code problem is the full model answer for the case study.</p>`);
	out.push(renderPracticeSets('PR', prescriptionPractice));
	out.push(h3('prescription-answers', '9 · Answer key'));
	out.push(renderAnswerKey('PR', prescriptionPractice));

	out.push(h3('prescription-review', '10 · Review'));
	out.push(
		flashcards([
			['Art. 90 periods?', '20 (death, RP, RT) · 15 (other afflictive) · 10 (correctional) · 5 (arresto mayor) · 1 (libel) · 6 months (oral defamation, slander by deed) · 2 months (light).'],
			['Act 3326 periods?', '1 yr (fine or ≤1 month) · 4 yrs (>1 month, <2 yrs) · 8 yrs (2 to <6 yrs) · 12 yrs (6 yrs or more) · 20 yrs (treason) · 2 months (ordinances).'],
			['When does RPC prescription start?', 'On discovery by the offended party, the authorities or their agents (Art. 91).'],
			['When does Act 3326 prescription start?', 'On commission; if not known, on discovery.'],
			['Does absence abroad suspend Act 3326 prescription?', 'No (Romualdez v. Marcelo).'],
			['Test for "proceedings" under Act 3326?', 'Any investigative proceeding, executive or judicial, against the guilty person that may ultimately lead to prosecution (Panaguiton).'],
			['What did Consebido add?', 'Prospectively, filing with the DOJ tolls even for offenses under the 2022 Expedited Rules; Desierto and Corpus abandoned on that point.'],
			['Sunday last day?', 'Not extended (Yapdiangco).'],
			['Cyber libel period?', 'One year (Causing).'],
			['Can a prescribed lesser offense support conviction under an information for a graver one?', 'No (Corpus).']
		])
	);
	out.push(
		ul(
			[
				'I can state all four prescription questions for RPC felonies, special laws and ordinances.',
				'I can trace the interruption rule from Olarte to Consebido and say what is still unsettled.',
				'I can answer the DENR question with the facts that decide it.',
				'I can compute a period with an interruption, a resumption and an absence.',
				'I can explain why a Sunday does not extend a prescriptive period.'
			],
			'rv-check'
		)
	);
	return out.join('\n');
}

export const prescriptionWatchFor = `<strong>Watch for: which law, which date, which office.</strong>
<ul>
<li>RPC or special law? (Start, suspension and interruption differ.)</li>
<li>Was the complaint filed before or after Consebido (April 2, 2025)? Is the offense under the Expedited Rules?</li>
<li>Where was it filed — prosecutor, agency, court? Was the agency's proceeding one that may lead to prosecution?</li>
</ul>`;
