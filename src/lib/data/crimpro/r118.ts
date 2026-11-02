import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 118 — Pre-Trial (with mediation, discovery and the 2017 Revised Guidelines). */
export const r118: RuleChapter = {
	id: 'r118',
	n: 118,
	title: 'Pre-Trial',
	short: 'R118 Pre-Trial',
	tiu: 'pp. 169–180 (with A.M. No. 03-1-09-SC, A.M. No. 04-1-12-SC, discovery under Rules 116 and 119)',
	plain: `After arraignment, the court must hold a pre-trial before trial. It is the last practical chance to plea bargain, and the time to agree on facts that need not be proved, mark the exhibits, waive objections to evidence, and fix the trial schedule. Anything the accused admits at pre-trial binds him only if it is in writing and signed by him and his lawyer. The court then issues a pre-trial order that controls the trial. The criminal liability itself cannot be compromised, but the civil liability in certain crimes can be mediated.`,
	purpose: `To abbreviate the trial by identifying contested issues, securing stipulations and marking evidence, and to explore plea bargaining and settlement of the civil aspect.`,
	stage: `After arraignment (${ruleLink('r116')}) and before trial (${ruleLink('r119')}). Under the 2017 Guidelines, arraignment and pre-trial are set together; mediation of the civil aspect follows them.`,
	questions: [
		'In which courts and when is pre-trial mandatory?',
		'What matters are taken up at pre-trial?',
		'What makes a pre-trial admission usable against the accused?',
		'What happens if counsel, the prosecutor, the accused or the offended party does not appear?',
		'What does the pre-trial order contain, and what is its effect?',
		'Can a criminal case be compromised or mediated?',
		'What discovery is available in criminal cases?'
	],
	relations: `Plea bargaining at pre-trial is governed by ${ruleLink('r116', 'sections', 'Rule 116, Sec. 2')} (before trial). Stipulations limit the issues for ${ruleLink('r119')}; modification of the order of trial when the accused admits the act but raises a lawful defense corresponds to ${ruleLink('r119', 'sections', 'Rule 119, Sec. 11[e]')}. Discovery draws on ${ruleLink('r116', 'sections', 'Rule 116, Sec. 10')} and the conditional examination rules of Rule 119 (Secs. 12–15). Compromise rules connect with ${ruleLink('r111')} (civil liability).`,
	principles: [
		'<b>Pre-trial is mandatory</b> in all criminal cases in the Sandiganbayan, RTCs and first-level courts; the court cannot skip it (OCA v. Español, 2004, in Tiu).',
		'<b>Admissions bind the accused only if written and signed by him and counsel</b> (Sec. 2).',
		'<b>The pre-trial order binds the parties, limits the trial and controls its course</b>, unless modified to prevent manifest injustice (Sec. 4).',
		'<b>No "as in default" in criminal pre-trial</b>: the sanctions for non-appearance fall on counsel and the prosecutor (Sec. 3).',
		'<b>Criminal liability cannot be compromised</b> (Civil Code Art. 2034), except where a law allows it; the civil liability may be.'
	],
	sections: [
		{
			n: '1',
			title: 'Pre-trial; mandatory in criminal cases',
			text: `In all criminal cases cognizable by the Sandiganbayan, RTC, MeTC, MTCC, MTC and MCTC, the court shall, after arraignment and within thirty days from the date it acquires jurisdiction over the person of the accused (unless a shorter period is provided), order a pre-trial conference to consider: "(a) plea bargaining; (b) stipulation of facts; (c) marking for identification of evidence of the parties; (d) waiver of objections to admissibility of evidence; (e) modification of the order of trial if the accused admits the charge but interposes a lawful defense; and (f) such matters as will promote a fair and expeditious trial of the criminal and civil aspects of the case."`,
			plain: `After arraignment, every criminal case goes to pre-trial: plea bargaining, agreed facts, marking of exhibits, waivers of objections, a reversed order of trial if the accused admits the act but claims a defense, and anything else that speeds up the trial.`,
			reqs: `Arraignment first; notice; the six matters.`,
			who: `Court; prosecutor; accused and counsel; private offended party (for plea bargaining and civil liability).`,
			when: `Within 30 days from the court's acquisition of jurisdiction over the accused; 10 days after arraignment if detained (Rule 116, Sec. 1[e]); A.M. No. 12-11-2-SC: within 30 days after arraignment, 10 days if detained; 2017 Guidelines: set together with arraignment.`,
			exceptions: `Plea bargaining in drug cases follows the Supreme Court framework (Estipona; Montierro).`,
			effect: `Skipping pre-trial is error (OCA v. Español). Evidence not marked and witnesses not named at pre-trial may be excluded at trial except for good cause (A.M. No. 03-1-09-SC).`,
			cases: `<i>OCA v. Español</i> (2004, in Tiu) — pre-trial cannot be dispensed with.`,
			hypo: `The accused admits stabbing the victim but claims self-defense. At pre-trial, the court may modify the order of trial so that the defense presents its evidence first.`,
			trap: `Stipulation of facts at pre-trial is a judicial admission — whatever is admitted need not be proved — but only if Sec. 2's formalities are met.`,
			update: `2017 Revised Guidelines (A.M. No. 15-06-10-SC): III.8 sets arraignment and pre-trial within 10 calendar days from the court's receipt of the case (detained) or 30 days from acquisition of jurisdiction (others); III.9 refers listed cases to mediation on the civil liability after arraignment and pre-trial, to be terminated within 30 days; III.12 requires stipulations on the testimony of witnesses without personal knowledge of the material facts (forensic chemists, medico-legal officers, custodians, experts, corroborative witnesses, witnesses on civil liability).`
		},
		{
			n: '2',
			title: 'Pre-trial agreement',
			text: `"All agreements or admissions made or entered during the pre-trial conference shall be reduced in writing and signed by the accused and counsel, otherwise, they cannot be used against the accused. The agreements covering the matters referred to in section 1 of this Rule shall be approved by the court."`,
			plain: `Admissions count against the accused only if written and signed by both him and his lawyer; agreements on Sec. 1 matters need court approval.`,
			reqs: `(1) In writing; (2) signed by the accused and counsel; (3) court approval for Sec. 1 agreements.`,
			effect: `Without the accused's and counsel's signatures, the admission cannot be used against the accused (unlike civil pre-trial admissions).`,
			hypo: `Defense counsel orally admits at pre-trial that the accused was at the crime scene; the accused does not sign the minutes. The prosecution cannot rely on the admission; it must prove presence at trial.`,
			trap: `Counsel's signature alone is not enough; the accused must also sign.`
		},
		{
			n: '3',
			title: 'Non-appearance at pre-trial conference',
			text: `"If the counsel for the accused or the prosecutor does not appear at the pre-trial conference and does not offer an acceptable excuse for his lack of cooperation, the court may impose proper sanctions or penalties."`,
			plain: `Absent lawyers or prosecutors without excuse may be sanctioned.`,
			who: `Defense counsel; prosecutor.`,
			effect: `No "as in default" or dismissal as in civil cases. If the accused is absent when required despite notice, his bail may be forfeited and he may be arrested (People v. Sunga, 2003, in Tiu). The offended party's absence does not stop pre-trial; he is only a witness once the information is filed (Sunga).`,
			cases: `<i>People v. Sunga</i> (2003, in Tiu).`,
			hypo: `The private complainant does not attend pre-trial. The court proceeds; it may compel his attendance later by subpoena.`,
			trap: `Importing the civil rule (dismissal for plaintiff's absence; ex parte evidence for defendant's absence) into criminal pre-trial.`
		},
		{
			n: '4',
			title: 'Pre-trial order',
			text: `"After the pre-trial conference, the court shall issue an order reciting the actions taken, the facts stipulated, and evidence marked. Such order shall bind the parties, limit the trial to matters not disposed of, and control the course of the action during the trial, unless modified by the court to prevent manifest injustice."`,
			plain: `The pre-trial order records what was done, agreed and marked; it binds the parties and frames the trial.`,
			when: `Within 10 days after termination of pre-trial (A.M. No. 03-1-09-SC). Trial starts within 30 days from receipt of the pre-trial order (Rule 119, Sec. 1).`,
			effect: `Binds the parties; limits the trial to matters not disposed of; controls the course of trial; modifiable only to prevent manifest injustice.`,
			hypo: `After pre-trial, the prosecution tries to present a witness not listed and an exhibit not marked. The court may exclude them unless good cause is shown.`,
			trap: `The order can be modified — but only "to prevent manifest injustice."`
		}
	],
	reqs: [
		{
			name: 'Mandatory pre-trial (Sec. 1)',
			source: 'Rule 118, Sec. 1; A.M. No. 03-1-09-SC; 2017 Revised Guidelines',
			what: 'A pre-trial conference covering the six matters.',
			who: 'Court, with prosecutor and defense.',
			when: 'After arraignment; within 30 days from acquisition of jurisdiction (10 days after arraignment if detained).',
			missing: 'Error; the court may be administratively liable; proceedings may be challenged if prejudice results.',
			defect: 'Curable',
			defectNote: 'The court can hold the omitted pre-trial; a judgment is not automatically void if the accused participated in trial without objecting and suffered no prejudice.'
		},
		{
			name: 'Admissions binding the accused (Sec. 2)',
			source: 'Rule 118, Sec. 2',
			what: 'Agreements and admissions in writing, signed by the accused and counsel; approval for Sec. 1 matters.',
			who: 'Accused and counsel; court.',
			when: 'At pre-trial.',
			form: 'Written; signed by both.',
			missing: 'The admission cannot be used against the accused.',
			defect: 'Not waivable',
			defectNote: 'The requirement protects the accused from improvident admissions by counsel; an unsigned admission is simply unusable against him.'
		},
		{
			name: 'Conditional examination of a prosecution witness (Rule 119, Sec. 15)',
			source: 'Rule 119, Sec. 15; Manguerra v. Risos (2008)',
			what: 'Examination of a sick or infirm witness, or one leaving the Philippines indefinitely, conducted like an examination at trial.',
			who: 'Prosecution; accused (notice; may attend).',
			when: 'Before trial.',
			where: 'Only before the court where the case is pending.',
			missing: 'A deposition taken elsewhere (e.g., before a clerk of court in another city) is improper; civil deposition rules (Rule 23) do not apply.',
			defect: 'Not waivable',
			defectNote: 'The place requirement protects confrontation and the judge\'s observation of demeanor; strictly construed (Manguerra). The accused\'s absence after notice is a waiver of his presence, not of the place requirement.'
		}
	],
	enums: [
		{
			id: 'E118.1',
			name: 'Matters considered at pre-trial',
			source: 'Rule 118, Sec. 1',
			kind: 'rule',
			memorize: true,
			lead: 'The pre-trial conference considers',
			items: [
				{ t: 'Plea bargaining', d: 'The last practical stage to plead to a lesser offense (before trial).', s: 'plea bargaining' },
				{ t: 'Stipulation of facts', d: 'Judicial admissions that need not be proved.', s: 'stipulation of facts' },
				{ t: 'Marking for identification of evidence', d: 'Preliminary marking; authentication still needed at trial.', s: 'marking of evidence' },
				{ t: 'Waiver of objections to admissibility of evidence', d: 'The parties may agree in advance not to object to particular evidence, shortening the trial.', s: 'waiver of objections' },
				{ t: 'Modification of the order of trial if the accused admits the charge but interposes a lawful defense', d: 'Reverse trial: the defense presents its evidence first (Rule 119, Sec. 11[e]).', s: 'reverse order of trial' },
				{ t: 'Such matters as will promote a fair and expeditious trial of the criminal and civil aspects', d: 'Catch-all for anything else that shortens or simplifies the trial.', s: 'other matters' }
			],
			memory: '<b>P-S-M-W-M-O</b>: Plea · Stipulate · Mark · Waive · Modify · Other.',
			question: 'What matters are considered at the pre-trial conference in criminal cases?'
		},
		{
			id: 'E118.2',
			name: 'Requisites for a pre-trial admission to be used against the accused',
			source: 'Rule 118, Sec. 2',
			kind: 'rule',
			memorize: true,
			lead: 'A pre-trial agreement or admission binds the accused only if',
			items: [
				{ t: 'It is reduced in writing', d: 'An oral admission at pre-trial cannot be used against the accused.', s: 'in writing' },
				{ t: 'It is signed by the accused', d: 'His own signature shows personal assent; counsel\'s signature alone is not enough.', s: 'signed by the accused' },
				{ t: 'It is signed by counsel', d: 'Shows the accused acted with legal advice. Both signatures are required.', s: 'signed by counsel' }
			],
			exceptions: 'Agreements on Sec. 1 matters must also be approved by the court.',
			question: 'When may a pre-trial admission be used against the accused?'
		},
		{
			id: 'E118.3',
			name: 'Effects of the pre-trial order',
			source: 'Rule 118, Sec. 4',
			kind: 'rule',
			lead: 'The pre-trial order',
			items: [
				{ t: 'Binds the parties', d: 'What was admitted or stipulated cannot be disputed at trial.', s: 'binds' },
				{ t: 'Limits the trial to matters not disposed of', d: 'Trial covers only the issues left open by the pre-trial order.', s: 'limits' },
				{ t: 'Controls the course of the action during the trial', d: 'Unless modified to prevent manifest injustice.', s: 'controls' }
			],
			memory: '<b>B-L-C</b>: Binds · Limits · Controls.',
			question: 'What is the effect of a pre-trial order?'
		},
		{
			id: 'E118.4',
			name: 'Matters for admission when plea bargaining fails',
			source: 'A.M. No. 03-1-09-SC, I.B.7(b) (in Tiu, pp. 173–174)',
			kind: 'issuance',
			lead: 'The court scrutinizes the information and records to secure admissions on',
			items: [
				{ t: 'Identity of the accused', d: 'Removes the need to prove who the accused is.', s: 'identity' },
				{ t: 'Court\'s territorial jurisdiction', d: 'Removes the need to prove venue, which in criminal cases is jurisdictional.', s: 'territorial jurisdiction' },
				{ t: 'Qualification of expert witnesses', d: 'Avoids qualifying each expert at trial.', s: 'expert qualifications' },
				{ t: 'Amount of damages', d: 'Lets the trial focus on liability.', s: 'damages' },
				{ t: 'Genuineness and due execution of documents', d: 'Documents need not be authenticated by witnesses at trial.', s: 'documents' },
				{ t: 'Cause of death or injury', d: 'In proper cases.', s: 'cause of death or injury' },
				{ t: 'Adoption of evidence presented in preliminary investigation', d: 'Affidavits and documents from the investigation may be adopted instead of presented anew.', s: 'adoption of PI evidence' },
				{ t: 'Disclosure of defenses', d: 'Alibi, insanity, self-defense, exercise of public authority, justifying or exempting circumstances.', s: 'disclosure of defenses' },
				{ t: 'Other matters that limit the facts in issue', d: 'Catch-all: anything that narrows what must be tried.', s: 'other limiting matters' }
			],
			question: 'What matters should the court try to obtain admissions on at pre-trial when plea bargaining fails?'
		},
		{
			id: 'E118.5',
			name: 'Cases referred to mediation on the civil liability',
			source: '2017 Revised Guidelines for Continuous Trial, III.9 (in Tiu, p. 252)',
			kind: 'issuance',
			lead: 'Unless settled earlier, these are referred to mediation on the civil liability',
			items: [
				{ t: 'Crimes where payment may prevent prosecution or extinguish liability', d: 'BP 22; SSS Law; PAG-IBIG Law.', s: 'BP 22, SSS, PAG-IBIG' },
				{ t: 'Crimes against property where the obligation may be civil', d: 'Theft (first-level courts); estafa under Art. 315(1) (not 315[2] and [3]); other swindling (316); swindling a minor (317); other deceits (318); malicious mischief (327).', s: 'property crimes of a civil character' },
				{ t: 'Crimes against honor where liability may be civil', d: 'Libel, threatening to publish, prohibited publication, grave and simple slander, slander by deed, incriminating innocent persons, intriguing against honor.', s: 'crimes against honor' },
				{ t: 'Cyber libel', d: 'Where the liability may be civil in nature.', s: 'cyber libel' },
				{ t: 'Criminal negligence (Title 14)', d: 'Where the liability may be civil.', s: 'criminal negligence' },
				{ t: 'Intellectual property cases', d: 'Where the liability may be civil.', s: 'IP cases' }
			],
			exceptions: 'Referral is made only after arraignment and pre-trial; mediation must end within 30 days; summary-procedure cases are not referred except those listed.',
			question: 'What criminal cases are referred to mediation under the 2017 Revised Guidelines for Continuous Trial?'
		},
		{
			id: 'E118.6',
			name: 'Modes of discovery available in criminal cases',
			source: 'Rule 116, Sec. 10; Rule 119, Secs. 12, 13, 15; Tiu (citing Riano), pp. 178–180',
			kind: 'notes',
			lead: 'Discovery in criminal cases includes',
			items: [
				{ t: 'Production or inspection of material evidence in the prosecution\'s possession', d: 'On motion with good cause (Rule 116, Sec. 10).', s: 'production/inspection' },
				{ t: 'Conditional examination of defense witnesses', d: 'Sick, infirm, more than 100 km away without means, or otherwise unavailable; before any judge or a designated lawyer (Rule 119, Secs. 12–13).', s: 'conditional exam — defense' },
				{ t: 'Conditional examination of prosecution witnesses', d: 'Too sick or infirm, or leaving the Philippines indefinitely; only before the court where the case is pending (Rule 119, Sec. 15).', s: 'conditional exam — prosecution' },
				{ t: 'Mental examination of the accused', d: 'Ordered on suspension of arraignment (Rule 116, Sec. 11[a]) — in the spirit of Rule 28 (Riano).', s: 'mental examination' }
			],
			exceptions: 'The civil deposition rules (Rule 23) do not apply where Rule 119 covers the situation (Manguerra v. Risos, 2008).',
			question: 'What modes of discovery are available in criminal cases?'
		},
		{
			id: 'E118.7',
			name: 'When criminal liability may be compromised',
			source: 'Civil Code Art. 2034; Tiu, p. 171',
			kind: 'notes',
			lead: 'As a rule, criminal liability cannot be compromised; exceptions provided by law include',
			items: [
				{ t: 'Tax cases where the law allows compromise', d: 'E.g., under the NIRC.', s: 'tax compromise' },
				{ t: 'Cases under the Katarungang Pambarangay', d: 'Amicable settlement of minor offenses within the Lupon\'s authority.', s: 'barangay settlement' }
			],
			exceptions: 'An offer of compromise by the accused may be received as an implied admission of guilt, except in quasi-offenses or cases allowed by law to be compromised (Rules on Evidence).',
			verify: 'The evidence rule on offers of compromise was renumbered in the 2019 Revised Rules on Evidence; check the current section.',
			question: 'May criminal liability be compromised?'
		}
	],
	comparisons: [
		{
			id: 'C118.1',
			title: 'Pre-trial in criminal cases vs. pre-trial in civil cases',
			a: 'Criminal (Rule 118)',
			b: 'Civil (Rule 18)',
			meaning: ['Conference after arraignment to abbreviate the criminal trial.', 'Conference after the last pleading to consider settlement, simplification and judgment without trial.'],
			basis: ['Rule 118; A.M. No. 03-1-09-SC; 2017 Guidelines', 'Rule 18 (as amended in 2019)'],
			who: ['Court sets it; no motion needed.', 'Under the 2019 amendments, the clerk of court issues the notice of pre-trial after the last responsive pleading (no motion) — Tiu reports the old ex parte motion requirement.'],
			when: ['Within 30 days (10 days if detained) after arraignment.', 'After the last responsive pleading.'],
			reqs: ['No pre-trial brief required by Rule 118 (though courts may require); admissions written and signed by accused and counsel.', 'Pre-trial briefs required; admissions bind without signature requirement.'],
			time: ['Pre-trial order within 10 days (A.M. No. 03-1-09-SC).', 'Per Rule 18.'],
			exceptions: ['Compromise of criminal liability not a purpose; civil aspect may be mediated.', 'Amicable settlement and ADR are central purposes; judgment on the pleadings or summary judgment may be considered.'],
			effect: ['Non-appearance: sanctions on counsel or prosecutor only; no default or dismissal.', 'Plaintiff absent: dismissal with prejudice; defendant absent: ex parte evidence.'],
			trap: ['Declaring the accused "as in default."', 'Requiring the accused\'s signature on civil admissions.'],
			decisive: 'Consequences of non-appearance and the formality of admissions.',
			hypo: 'Defense counsel fails to attend pre-trial: the court may fine counsel but cannot let the prosecution present evidence ex parte as if in default. In a civil case, the defendant\'s absence would allow ex parte presentation.',
		},
		{
			id: 'C118.2',
			title: 'Conditional examination of a defense witness vs. of a prosecution witness',
			a: 'Defense witness (Rule 119, Secs. 12–13)',
			b: 'Prosecution witness (Rule 119, Sec. 15)',
			meaning: ['Pre-trial examination of a witness for the accused who may be unable to attend trial.', 'Pre-trial examination of a prosecution witness who is too sick or about to leave the country.'],
			basis: ['Rule 119, Secs. 12–13', 'Rule 119, Sec. 15; Manguerra v. Risos'],
			who: ['Accused moves, with notice; affidavit of the accused.', 'Prosecution; accused given notice.'],
			when: ['After the accused is held to answer, before trial.', 'Before trial.'],
			reqs: ['Sick or infirm; resides more than 100 km away without means; or similar unavailability. Motion states name, residence, substance of testimony.', 'Too sick or infirm to appear; or leaving the Philippines with no definite date of return.'],
			time: ['Order served on the prosecutor at least 3 days before.', 'Reasonable notice to the accused.'],
			exceptions: ['Proceeds even if the prosecutor is absent after notice.', 'Accused\'s failure to attend after notice is a waiver.'],
			effect: ['Written record usable at trial.', 'Statement admissible for or against the accused.'],
			trap: ['Allowing a prosecution witness to be examined before another judge or a clerk of court (Manguerra).', 'Applying Rule 23 depositions.'],
			decisive: 'Where: any judge or designated lawyer (defense) vs. only the court where the case is pending (prosecution).',
			hypo: 'An 85-year-old prosecution witness in Manila is too ill to travel to the Cebu court. The examination must still be before the Cebu court (or its judge) — not before a Manila clerk of court.'
		},
		{
			id: 'C118.3',
			title: 'Compromise of the civil liability vs. compromise of the criminal liability',
			a: 'Civil liability',
			b: 'Criminal liability',
			meaning: ['Settlement of the damages arising from the crime.', 'Settlement that would end the State\'s action to punish.'],
			basis: ['Civil Code Art. 2034; 2017 Guidelines, III.9; A.M. No. 04-1-12-SC', 'Civil Code Art. 2034; special laws (tax, barangay)'],
			who: ['Offended party and accused (mediation).', 'Only where a law allows (e.g., BIR in tax cases).'],
			when: ['After arraignment and pre-trial (mediation within 30 days).', 'As the law allows.'],
			reqs: ['Written compromise; approval.', 'Statutory authority.'],
			time: ['30 days for mediation.', '—'],
			exceptions: ['—', 'Desistance is not a compromise of criminal liability.'],
			effect: ['Extinguishes civil liability only; the criminal action continues.', 'Ends the criminal action where allowed.'],
			trap: ['Thinking a compromise on damages ends the case.', 'Treating an affidavit of desistance as a ground for dismissal (Lamsen — viewed with disfavor).'],
			decisive: 'Whether a law authorizes compromise of the penal action: absent such a law, only civil liability may be settled.',
			hypo: 'In an estafa case, the parties settle the amount in mediation. The civil aspect ends, but the prosecution may continue; if the complainant then refuses to testify, the case may fail for lack of evidence — not because of the compromise.'
		}
	],
	cases: [
		{
			id: 'manguerra',
			name: 'Manguerra v. Risos',
			cite: 'G.R. No. 152643, August 28, 2008',
			from: 'Tiu',
			facts: 'The private complainant, an elderly prosecution witness in an estafa case pending in Cebu, was too ill to travel; the trial court allowed her deposition to be taken before the Clerk of Court of Makati under Rule 23.',
			issue: 'May the testimony of a sick prosecution witness be taken by deposition before another court\'s clerk under the civil rules?',
			ruling: 'No.',
			doctrine: 'Rule 119, Sec. 15 governs: conditional examination of a prosecution witness must be before the court where the case is pending, conducted like an examination at trial, with notice to the accused. Rule 23 does not apply because Rule 119 squarely covers the situation; the exception to in-court testimony is strictly construed.',
			reasoning: 'Protects the accused\'s right to confrontation and the judge\'s observation of demeanor.',
			rule: 'Rule 119, Secs. 12–15; Rule 118 (discovery).',
			args: 'The petitioners argued that the witness\'s age and illness exempted her from Sec. 15; the Court held those were precisely the grounds that placed her under Sec. 15.',
			hypo: 'A prosecution witness about to emigrate is examined before the judge of the trial court, with the accused notified — valid.',
			examQ: 'May the deposition of a sick prosecution witness be taken under Rule 23 before the clerk of court of another city?',
			also: ['r119']
		},
		{
			id: 'lamsen',
			name: 'People v. Lamsen',
			cite: 'G.R. No. 198338, November 13, 2013',
			from: 'Tiu',
			facts: 'After conviction, a prosecution witness executed an affidavit retracting her testimony.',
			issue: 'What weight is given to a recantation or affidavit of desistance executed after conviction?',
			ruling: 'Scant weight.',
			doctrine: 'Recantations are viewed with suspicion; an affidavit of desistance after conviction deserves only scant attention, being easily secured through intimidation or money; it is considered only when special circumstances raise doubt on the original testimony.',
			reasoning: 'Allowing easy retractions would make solemn trials a mockery.',
			rule: 'Rule 118 (compromise and desistance); Rule 121 (new trial).',
			hypo: 'A rape victim recants after conviction, citing family pressure to settle. The court disregards the recantation.',
			examQ: 'What is the effect of an affidavit of desistance or recantation executed after conviction?',
			also: ['r120']
		}
	],
	deadlines: [
		{ ref: 'Rule 118, Sec. 1', act: 'Hold pre-trial', who: 'Court', period: 'Within 30 days', start: 'Acquisition of jurisdiction over the person (after arraignment)', exceptions: 'Shorter periods by law or SC circular; detained accused — 10 days after arraignment (Rule 116, Sec. 1[e])', effect: 'Speedy-trial and administrative consequences', kind: 'constitutional' },
		{ ref: 'A.M. No. 12-11-2-SC, Sec. 8', act: 'Pre-trial; judicial affidavits', who: 'Court; prosecution', period: 'Pre-trial within 30 days after arraignment (10 if detained); judicial affidavits within 20 days from arraignment', start: 'Arraignment', exceptions: '—', effect: 'Dismissal for denial of speedy trial (detained accused)', kind: 'constitutional' },
		{ ref: 'A.M. No. 03-1-09-SC', act: 'Preliminary conference before the clerk; pre-trial order', who: 'Branch clerk; judge', period: 'Preliminary conference at least 3 days before pre-trial; pre-trial order within 10 days after pre-trial', start: 'Pre-trial date / termination', exceptions: '—', effect: '—', kind: 'procedural' },
		{ ref: '2017 Revised Guidelines, III.9(b)', act: 'Mediation of the civil liability', who: 'Philippine Mediation Center', period: '30 calendar days (non-extendible)', start: 'Referral after arraignment and pre-trial', exceptions: 'Only listed cases', effect: 'Trial proceeds if mediation fails', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 1', act: 'Commence trial', who: 'Court', period: '30 days', start: 'Receipt of the pre-trial order', exceptions: 'Excluded delays', effect: 'Speedy-trial dismissal (Rule 119, Sec. 9)', kind: 'constitutional' }
	],
	traps: [
		{ wrong: 'The court may skip pre-trial if the parties are ready for trial.', right: 'Pre-trial is mandatory (Sec. 1; OCA v. Español).', example: '—' },
		{ wrong: 'An admission by defense counsel at pre-trial binds the accused.', right: 'Only if written and signed by the accused and counsel (Sec. 2).', example: '—' },
		{ wrong: 'If defense counsel fails to appear at pre-trial, the accused may be declared "as in default."', right: 'No default in criminal cases; sanctions on counsel (Sec. 3).', example: '—' },
		{ wrong: 'The offended party\'s absence prevents pre-trial.', right: 'Pre-trial proceeds; he is only a witness (Sunga).', example: '—' },
		{ wrong: 'The pre-trial order can never be changed.', right: 'It may be modified to prevent manifest injustice (Sec. 4).', example: '—' },
		{ wrong: 'A compromise on damages ends the criminal case.', right: 'Criminal liability cannot be compromised (Art. 2034), save where a law allows.', example: '—' },
		{ wrong: 'Civil deposition rules apply to a sick prosecution witness.', right: 'Rule 119, Sec. 15 applies; examination before the trial court only (Manguerra).', example: '—' },
		{ wrong: 'Mediation of the civil aspect happens before arraignment.', right: 'After arraignment and pre-trial; 30 days (2017 Guidelines).', example: '—' }
	],
	corrections: [
		{ old: 'Civil pre-trial requires an ex parte motion by the plaintiff (comparison table in Tiu).', fix: 'Under the 2019 amendments to the Rules of Civil Procedure, the branch clerk issues the notice of pre-trial after the last responsive pleading; no motion is required.', source: 'A.M. No. 19-10-20-SC (2019 Amendments to the 1997 Rules of Civil Procedure), Rule 18, Sec. 1' },
		{ old: 'Plea bargaining at pre-trial "except for violations of the Comprehensive Dangerous Drugs Act" (A.M. No. 03-1-09-SC).', fix: 'Drug cases may now be plea-bargained under the Supreme Court framework (Estipona, 2017; Montierro, 2022).', source: 'Estipona v. Lobrigo; People v. Montierro' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Matters', q: 'What matters are considered at the pre-trial conference?', a: 'E118.1: plea bargaining; stipulation of facts; marking of evidence; waiver of objections; modification of the order of trial; other matters.', keys: 'Sec. 1' },
		{ cat: 'A', level: 2, topic: 'Agreements', q: 'When may a pre-trial agreement or admission be used against the accused? What is the effect of the pre-trial order?', a: 'E118.2 (written; signed by accused and counsel; court approval for Sec. 1 matters) and E118.3 (binds, limits, controls).', keys: 'Secs. 2, 4' },
		{ cat: 'A', level: 3, topic: 'Mediation', q: 'What cases are referred to mediation on the civil liability under the 2017 Guidelines?', a: 'E118.5.', keys: 'III.9' },
		{ cat: 'A', level: 3, topic: 'Discovery', q: 'What modes of discovery are available in criminal cases?', a: 'E118.6.', keys: 'Rule 116, Sec. 10; Rule 119, Secs. 12–15' },
		{ cat: 'B', level: 3, topic: 'Criminal vs civil pre-trial', q: 'Distinguish pre-trial in criminal cases from pre-trial in civil cases.', a: 'See C118.1.', keys: 'non-appearance; admissions; purpose' },
		{ cat: 'B', level: 3, topic: 'Conditional examination', q: 'Distinguish the conditional examination of a defense witness from that of a prosecution witness.', a: 'See C118.2.', keys: 'where; grounds; Manguerra' },
		{ cat: 'B', level: 4, topic: 'Compromise', q: 'Distinguish compromise of the civil liability from compromise of the criminal liability.', a: 'See C118.3.', keys: 'Art. 2034' },
		{ cat: 'C', level: 1, topic: 'Mandatory', q: 'Pre-trial is mandatory in criminal cases before the RTC but optional before first-level courts.', tf: false, short: 'False. It is mandatory in the Sandiganbayan, RTCs and all first-level courts (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 1, topic: 'Admissions', q: 'Admissions made by the accused at pre-trial need not be in writing to be used against him.', tf: false, short: 'False. They must be in writing and signed by the accused and counsel (Sec. 2).', keys: 'Sec. 2' },
		{ cat: 'C', level: 2, topic: 'Non-appearance', q: 'If defense counsel fails to appear at pre-trial without excuse, the court may allow the prosecution to present evidence ex parte.', tf: false, short: 'False. The court may impose sanctions on counsel; there is no "as in default" in criminal cases (Sec. 3).', keys: 'Sec. 3' },
		{ cat: 'C', level: 2, topic: 'Order', q: 'The pre-trial order may be modified by the court to prevent manifest injustice.', tf: true, short: 'True (Sec. 4).', keys: 'Sec. 4' },
		{ cat: 'C', level: 3, topic: 'Compromise', q: 'A compromise between the accused and the offended party on the civil liability in an estafa case extinguishes the criminal action.', tf: false, short: 'False. A compromise on civil liability does not extinguish the public action (Civil Code Art. 2034; Metrobank v. Reynaldo).', keys: 'Art. 2034' },
		{ cat: 'C', level: 3, topic: 'Discovery', q: 'The deposition of a sick prosecution witness may be taken before the clerk of court of the city where the witness lives under Rule 23.', tf: false, short: 'False. Rule 119, Sec. 15 requires conditional examination before the court where the case is pending (Manguerra v. Risos, 2008).', keys: 'Manguerra' },
		{ cat: 'C', level: 4, topic: 'Mediation', q: 'Under the 2017 Guidelines, all criminal cases are referred to mediation before arraignment.', tf: false, short: 'False. Only listed cases (e.g., BP 22, certain property and honor crimes, criminal negligence) are referred, and only after arraignment and pre-trial; mediation must end in 30 days.', keys: 'III.9' },
		{ cat: 'C', level: 4, topic: 'Desistance', q: 'An affidavit of desistance executed by the private complainant after conviction is a ground for acquittal.', tf: false, short: 'False. Recantations after conviction deserve scant consideration (People v. Lamsen, 2013).', keys: 'Lamsen' },
		{
			cat: 'D', level: 4, topic: 'Admissions', title: 'Counsel\'s stipulation, accused\'s silence',
			facts: 'At pre-trial in a homicide case, defense counsel stipulates that the accused was at the victim\'s house at the time of the killing. The minutes are signed by the prosecutor and defense counsel, but not by the accused. At trial, the prosecution offers no evidence of presence, relying on the stipulation.',
			q: 'Can the stipulation be used against the accused?',
			issue: 'Whether a pre-trial admission not signed by the accused binds him.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 118, Sec. 2: agreements or admissions at pre-trial "shall be reduced in writing and signed by the accused and counsel, otherwise, they cannot be used against the accused."',
				application: 'Only counsel signed. The admission cannot be used against the accused; the prosecution must prove his presence by evidence.',
				conclusion: 'The prosecution\'s failure to prove presence may result in acquittal if presence is essential.'
			},
			keys: 'Sec. 2; signed by accused and counsel'
		},
		{
			cat: 'D', level: 4, topic: 'Non-appearance', title: 'Absent accused and absent complainant',
			facts: 'On the pre-trial date, the accused (on bail) and the private complainant are absent; both counsel and the prosecutor are present. The accused had notice.',
			q: 'May the court proceed? What may it do about the accused?',
			issue: 'Effect of the absence of the accused and of the offended party at pre-trial.',
			alac: {
				answer: 'The court may proceed with pre-trial through counsel; it may order the forfeiture of the accused\'s bail and his arrest.',
				legalBasis: 'Rule 118, Sec. 3 (sanctions on counsel or prosecutor only); People v. Sunga (2003, in Tiu): the offended party is only a witness once the information is filed; the accused\'s absence despite notice may lead to forfeiture of bail and arrest (Rule 114, Secs. 2 and 21).',
				application: 'Counsel and prosecutor are present, so pre-trial can proceed. But admissions binding the accused require his signature (Sec. 2), so the court should limit what is stipulated.',
				conclusion: 'Proceed (or reset if admissions requiring the accused\'s signature are needed); forfeit bail and issue a warrant for the accused.'
			},
			keys: 'Sec. 3; Sunga; Rule 114, Sec. 21'
		},
		{
			cat: 'E', level: 5, topic: 'Reverse trial', title: 'Admits the stabbing, claims self-defense',
			facts: 'At pre-trial, the accused, through a written stipulation signed by him and counsel, admits that he stabbed the victim but claims self-defense. The prosecution insists on presenting its evidence first, as usual.',
			q: 'May the court reverse the order of trial? Who bears the burden of proof?',
			issue: 'Modification of the order of trial when the accused admits the act but interposes a lawful defense.',
			alac: {
				answer: 'Yes; the accused must prove self-defense by clear and convincing evidence.',
				legalBasis: 'Rule 118, Sec. 1(e) and Rule 119, Sec. 11(e): when the accused admits the act or omission charged but interposes a lawful defense, the order of trial may be modified. RA 8493, Sec. 7: an affirmative defense may modify the order of trial and requires the accused to prove it by clear and convincing evidence.',
				application: 'The written, signed stipulation is a judicial admission of the stabbing. With self-defense, the burden of evidence shifts; it is logical for the defense to present first.',
				conclusion: 'The court may order a reverse trial; if self-defense is not proved, the admission supports conviction.'
			},
			trap: 'Reverse trial is discretionary ("may be modified"); the court is not obliged to reverse the order.',
			keys: 'Sec. 1(e); Rule 119, Sec. 11(e); RA 8493, Sec. 7'
		},
		{
			cat: 'E', level: 5, topic: 'Pre-trial order', title: 'Unmarked exhibit, unlisted witness',
			facts: 'The pre-trial order lists four prosecution witnesses and marked exhibits A to F. At trial, the prosecution calls a fifth witness (a neighbor who just came forward) and offers an unmarked CCTV recording. The defense objects.',
			q: 'Rule on the objections.',
			issue: 'Effect of the pre-trial order on unlisted witnesses and unmarked evidence.',
			alac: {
				answer: 'Sustain the objections unless the prosecution shows good cause; the court may allow them to prevent manifest injustice.',
				legalBasis: 'Rule 118, Sec. 4 (the pre-trial order binds the parties, limits the trial and controls its course, unless modified to prevent manifest injustice); A.M. No. 03-1-09-SC (no evidence other than those identified and marked at pre-trial except for good cause).',
				application: 'The witness only recently came forward — possible good cause. The CCTV recording, if available earlier, lacks good cause. The defense should be given time to prepare if anything new is admitted.',
				conclusion: 'Admit the new witness if good cause is shown and the defense is not prejudiced; exclude the CCTV recording absent good cause.'
			},
			keys: 'Sec. 4; good cause; manifest injustice'
		},
		{ cat: 'F', level: 4, topic: 'Manguerra v. Risos', q: 'Why did the Court in Manguerra v. Risos refuse to allow the deposition of a sick prosecution witness before the Makati clerk of court?', a: 'Because Rule 119, Sec. 15 governs the conditional examination of a prosecution witness and requires it to be before the court where the case is pending, with notice to the accused and in the manner of trial; Rule 23 does not apply when Rule 119 covers the situation; the exception to in-court testimony is strictly construed to protect confrontation and allow the judge to observe demeanor.', keys: 'Sec. 15; strict construction' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 118', title: 'Rule 118 integrated',
			facts: 'In an estafa case under Art. 315(1), the accused is arraigned on March 1 and pre-trial is set on May 15. At pre-trial, the accused and complainant settle the civil liability in the courtroom. The prosecutor manifests that the complainant will execute an affidavit of desistance and moves to dismiss. Defense counsel orally stipulates that the accused received the money. The court dismisses the case "in view of the compromise."',
			q: 'Identify the errors.',
			issue: 'Pre-trial timing; mediation; compromise; admissions; dismissal.',
			alac: {
				answer: 'Four errors.',
				legalBasis: 'Rule 118, Sec. 1 (pre-trial within 30 days from acquisition of jurisdiction); 2017 Guidelines, III.8–9 (arraignment and pre-trial set together; estafa under 315[1] referred to mediation on civil liability after pre-trial, 30 days); Civil Code Art. 2034 (compromise does not extinguish the criminal action); Rule 118, Sec. 2 (admissions must be written and signed by accused and counsel).',
				application: '(1) Pre-trial on May 15 exceeds the period from arraignment. (2) The civil settlement is valid as to civil liability but should go through mediation and approval. (3) The compromise cannot be the basis of dismissal of the criminal case. (4) Counsel\'s oral stipulation cannot be used against the accused. If the prosecution moves to dismiss for insufficiency of evidence (complainant\'s desistance), the court must assess it independently (Crespo); a dismissal on the prosecution\'s motion with the accused\'s consent after arraignment generally does not bar refiling.',
				conclusion: 'The dismissal "in view of the compromise" is erroneous; the court should rule on the evidence, not on the compromise.'
			},
			keys: 'Sec. 1; Sec. 2; Art. 2034; mediation; Crespo'
		}
	],
	memorize: [
		'Pre-trial mandatory in Sandiganbayan, RTCs and first-level courts; within 30 days (10 if detained)',
		'Six matters (Sec. 1)',
		'Admissions: written + signed by accused and counsel (Sec. 2)',
		'Non-appearance: sanctions on counsel/prosecutor (Sec. 3); no default',
		'Pre-trial order: binds, limits, controls; modifiable to prevent manifest injustice (Sec. 4)',
		'Criminal liability not compromised (Art. 2034); civil aspect mediated (2017 Guidelines, 30 days)',
		'Discovery: Rule 116, Sec. 10; Rule 119, Secs. 12–15; Manguerra'
	],
	flashcards: [
		['Is pre-trial mandatory in criminal cases?', 'Yes, in the Sandiganbayan, RTCs and first-level courts.'],
		['When is pre-trial held?', 'Within 30 days from acquisition of jurisdiction (after arraignment); 10 days after arraignment if detained.'],
		['Six matters at pre-trial?', 'Plea bargaining; stipulation; marking; waiver of objections; modified order of trial; other matters.'],
		['Requisites for using a pre-trial admission against the accused?', 'Written; signed by the accused and counsel.'],
		['Effect of counsel\'s absence at pre-trial?', 'Sanctions on counsel; no default.'],
		['Effect of the pre-trial order?', 'Binds, limits, controls — modifiable to prevent manifest injustice.'],
		['Can criminal liability be compromised?', 'No, except where allowed by law; the civil liability can.'],
		['Where is a prosecution witness conditionally examined?', 'Only before the court where the case is pending.'],
		['Mediation period under the 2017 Guidelines?', '30 days from referral after arraignment and pre-trial.']
	],
	oral: [
		['"What is the purpose of pre-trial in a criminal case?"', 'To abbreviate the trial: plea bargaining, stipulation of facts, marking of evidence, waiver of objections, modification of the order of trial where the accused admits the act but claims a defense, and other matters for a fair and speedy trial.'],
		['"Defense counsel admitted a fact at pre-trial. Is the accused bound?"', 'Only if the admission was reduced to writing and signed by both the accused and counsel; otherwise it cannot be used against him.'],
		['"Can the parties compromise the criminal case?"', 'No. Criminal liability cannot be compromised except where a law allows it; only the civil liability can be, and certain cases are referred to mediation on the civil aspect after pre-trial.']
	],
	checklist: [
		'I can state when pre-trial is mandatory and when it is held.',
		'I can list the six matters considered at pre-trial.',
		'I can state the requirements for pre-trial admissions.',
		'I can explain the consequences of non-appearance and the effect of the pre-trial order.',
		'I can distinguish criminal and civil pre-trial.',
		'I can explain mediation of the civil aspect and the rule against compromising criminal liability.',
		'I can explain discovery in criminal cases (Manguerra).'
	],
	sheet: [
		'<b>Mandatory (Sec. 1):</b> all trial courts; after arraignment; within 30 days (10 days if detained).',
		'<b>Matters:</b> plea bargaining · stipulation · marking · waiver of objections · reverse trial · other matters.',
		'<b>Admissions (Sec. 2):</b> written + signed by accused and counsel; court approval for Sec. 1 agreements.',
		'<b>Non-appearance (Sec. 3):</b> sanctions on counsel/prosecutor; accused absent → bail forfeiture/arrest; offended party absent → proceed.',
		'<b>Pre-trial order (Sec. 4):</b> within 10 days; binds, limits, controls; modifiable to prevent manifest injustice.',
		'<b>Compromise:</b> criminal liability no (Art. 2034); civil aspect yes — mediation after pre-trial, 30 days (2017 Guidelines).',
		'<b>Discovery:</b> Rule 116, Sec. 10; conditional examination — defense before any judge; prosecution only before the trial court (Manguerra).'
	],
	watchFor: `<strong>Watch for: who signed, who was absent, what was marked.</strong>
<ul>
<li>Is the admission written and signed by both the accused and counsel?</li>
<li>Who was absent — counsel, prosecutor, accused, or complainant? (No default in criminal cases.)</li>
<li>Is a compromise being used to end the criminal case? Is the witness sick — where must the examination be held?</li>
</ul>`
};
