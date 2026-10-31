import { ruleLink, type RuleChapter } from './model';

/** Rule 123 — Procedure in the Municipal Trial Courts. */
export const r123: RuleChapter = {
	id: 'r123',
	n: 123,
	title: 'Procedure in the Municipal Trial Courts',
	short: 'R123 Procedure in MTCs',
	tiu: 'p. 217',
	plain: `First-level courts (MeTC, MTCC, MTC, MCTC) follow the same criminal procedure as the RTC, with two exceptions: provisions that by their terms apply only to one kind of court, and cases covered by the special rules for small offenses — formerly the Revised Rule on Summary Procedure, now the 2022 Rules on Expedited Procedures in the First Level Courts. This chapter collects the differences scattered through Rules 110–122 so you can spot them in a problem.`,
	purpose: `To have one set of criminal procedure rules for all trial courts, while keeping a faster track for minor offenses.`,
	stage: `All stages — but only for cases within the first-level courts' jurisdiction (offenses punishable by imprisonment not exceeding six years, subject to the RTC's and the Sandiganbayan's exclusive jurisdiction).`,
	questions: [
		'Which procedure governs criminal cases in the MTCs?',
		'What are the exceptions to the uniform procedure?',
		'Which cases follow the expedited (formerly summary) procedure?',
		'What provisions of Rules 110–122 apply differently in first-level courts?'
	],
	relations: `Rule 123 is a cross-reference rule. The MTC-specific provisions sit elsewhere: institution directly with the MTC (${ruleLink('r110', 'sections', 'Rule 110, Sec. 1[b]')}), prosecution by the offended party or a peace officer when no prosecutor is available (${ruleLink('r110', 'sections', 'Rule 110, Sec. 5')}), cases not needing preliminary investigation (${ruleLink('r112', 'sections', 'Rule 112, Sec. 8')}), bail as a matter of right before and after conviction (${ruleLink('r114', 'sections', 'Rule 114, Sec. 4')}), and appeal to the RTC decided on memoranda (${ruleLink('r122', 'sections', 'Rule 122, Secs. 2[a] and 9')}).`,
	principles: [
		'<b>Uniform procedure</b>: MTC procedure is the same as the RTC\'s (Sec. 1).',
		'<b>Exception 1</b>: a provision that applies only to either court.',
		'<b>Exception 2</b>: cases governed by the special rules for minor offenses — now the 2022 Rules on Expedited Procedures (A.M. No. 08-8-7-SC), replacing the 1991 Revised Rule on Summary Procedure.',
		'<b>Since 2005, MTC judges do not conduct preliminary investigation</b> (A.M. No. 05-8-26-SC).'
	],
	sections: [
		{
			n: '1',
			title: 'Uniform procedure',
			text: `"The procedure to be observed in the Metropolitan Trial Courts, Municipal Trial Courts and Municipal Circuit Trial Courts shall be the same as in the Regional Trial Courts, except where a particular provision applies only to either of said courts and in criminal cases governed by the Revised Rule on Summary Procedure."`,
			plain: `Same rules as the RTC, except (1) provisions meant only for one kind of court and (2) cases under the summary (now expedited) procedure.`,
			who: `First-level courts: MeTC, MTCC, MTC, MCTC.`,
			exceptions: `(1) Provisions applying only to either court (see E123.2). (2) Cases covered by the special procedure for minor offenses — now the 2022 Rules on Expedited Procedures in the First Level Courts.`,
			effect: `Unless one of the exceptions applies, every rule in Rules 110–122 governs the MTC exactly as it does the RTC.`,
			hypo: `An accused in the MTC files a motion to quash on the ground that the facts charged do not constitute an offense. In a regular case, Rule 117 applies as in the RTC. If the case is under the Expedited Procedures, check whether a motion to quash on that ground is a prohibited motion.`,
			trap: `The Revised Rule on Summary Procedure named in Sec. 1 has been replaced; cite the 2022 Rules on Expedited Procedures.`,
			update: `The 2022 Rules on Expedited Procedures in the First Level Courts (A.M. No. 08-8-7-SC, effective April 11, 2022) cover, in criminal cases: violations of traffic laws, rules and regulations; the rental law; municipal or city ordinances; BP 22; and other offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000 (see ${ruleLink('r110', 'traps', 'the Rule 110 corrections')}).`,
			verify: `The list of prohibited pleadings and motions and the exact steps under the 2022 Rules (e.g., counter-affidavits, when a warrant may issue) were not in Tiu; read A.M. No. 08-8-7-SC before stating them.`
		}
	],
	reqs: [
		{
			name: 'Coverage of the expedited procedure',
			source: 'Rule 123, Sec. 1; A.M. No. 08-8-7-SC (2022)',
			what: 'The offense must be one listed in the 2022 Rules (traffic, rental, ordinance, BP 22, or imprisonment ≤ 1 year or fine ≤ ₱50,000).',
			who: 'First-level court, motu proprio, from the complaint or information.',
			when: 'At filing.',
			missing: 'If the case is outside the coverage, the regular procedure applies; if wrongly tried under the expedited procedure, the error is procedural.',
			defect: 'Curable',
			defectNote: 'Applying the wrong procedure in a court that has jurisdiction does not void the proceedings; the court converts the case to the proper procedure. (Whether the court has jurisdiction at all is a separate question.)',
		}
	],
	enums: [
		{
			id: 'E123.1',
			name: 'Exceptions to the uniform procedure',
			source: 'Rule 123, Sec. 1',
			kind: 'rule',
			memorize: true,
			lead: 'MTC procedure is the same as in the RTC, except',
			items: [
				{ t: 'Where a particular provision applies only to either of said courts', d: 'E.g., direct filing of a complaint with the MTC; appeal to the RTC on memoranda.', s: 'court-specific provisions' },
				{ t: 'In criminal cases governed by the special procedure for minor offenses', d: 'Then the 1991 Revised Rule on Summary Procedure; now the 2022 Rules on Expedited Procedures.', s: 'expedited (formerly summary) procedure cases' }
			],
			question: 'What procedure governs criminal cases in the first-level courts? What are the exceptions?'
		},
		{
			id: 'E123.2',
			name: 'Provisions in Rules 110–122 that work differently in first-level courts',
			source: 'Rules 110, 112, 114, 120, 122 (as cross-referenced in this reviewer)',
			kind: 'teaching',
			lead: 'Provisions specific to first-level courts include',
			items: [
				{ t: 'Institution by complaint directly with the MTC', d: 'For offenses not requiring preliminary investigation, except in chartered cities where the complaint goes to the prosecutor (Rule 110, Sec. 1[b]).', s: 'direct filing with the MTC' },
				{ t: 'Prosecution by the offended party, a peace officer or a public officer when no prosecutor is available', d: 'Rule 110, Sec. 5, as amended by A.M. No. 02-2-07-SC; OCA Circular No. 39-2002.', s: 'prosecution without a public prosecutor' },
				{ t: 'Cases not requiring preliminary investigation', d: 'Rule 112, Sec. 8 (as amended in 2005): the prosecutor evaluates; MTC judges no longer conduct preliminary investigation.', s: 'no PI below 4 years, 2 months, 1 day' },
				{ t: 'Bail as a matter of right before and after conviction', d: 'Rule 114, Sec. 4.', s: 'bail always a matter of right' },
				{ t: 'Appeal to the RTC, decided on the record and memoranda', d: 'Rule 122, Secs. 2(a) and 9; withdrawal in the RTC before judgment (Sec. 12).', s: 'appeal to RTC on memoranda' }
			],
			tip: 'This is a teaching list built for this reviewer, not a list in Rule 123.',
			question: 'Give examples of provisions in the Rules of Criminal Procedure that apply differently in the first-level courts.'
		}
	],
	comparisons: [
		{
			id: 'C123.1',
			title: 'Regular procedure vs. expedited procedure in the first-level courts',
			a: 'Regular procedure',
			b: 'Expedited procedure (2022 Rules)',
			meaning: ['The full Rules 110–122, as in the RTC.', 'A faster track for minor offenses, with prohibited pleadings and motions.'],
			basis: ['Rule 123, Sec. 1; Rules 110–122', 'Rule 123, Sec. 1; A.M. No. 08-8-7-SC (2022)'],
			who: ['MTC; prosecutor; accused.', 'MTC; prosecutor or offended party; accused.'],
			when: ['Offenses within MTC jurisdiction not covered by the expedited rules.', 'Traffic, rental, ordinance, BP 22, and offenses with imprisonment ≤ 1 year or fine ≤ ₱50,000.'],
			reqs: ['As in the RTC.', 'Affidavits with the complaint; counter-affidavits; limited motions (verify the list).'],
			time: ['Rule 116, 118, 119 periods.', 'Shorter, by the 2022 Rules (verify).'],
			exceptions: ['—', 'Regular rules apply suppletorily.'],
			effect: ['Appeal to the RTC (Rule 122).', 'Appeal to the RTC (Rule 122).'],
			trap: ['Assuming every MTC case is "summary."', 'Citing the 1991 Summary Procedure thresholds (6 months / ₱1,000).'],
			decisive: 'Coverage: the expedited track depends on the offense and its penalty, not on the court alone.',
			hypo: 'Slight physical injuries (arresto menor) → expedited. Theft with a penalty of prision correccional → regular MTC procedure.'
		}
	],
	cases: [],
	deadlines: [],
	traps: [
		{ wrong: 'MTC judges may conduct preliminary investigation of offenses within RTC jurisdiction.', right: 'Not since A.M. No. 05-8-26-SC (2005); preliminary investigation is for prosecutors and other authorized officers (Rule 112, Sec. 2).', example: '—' },
		{ wrong: 'All criminal cases in the MTC follow summary procedure.', right: 'Only those covered by the special rules — now the 2022 Rules on Expedited Procedures.', example: '—' },
		{ wrong: 'The Revised Rule on Summary Procedure covers offenses punishable by up to six months\' imprisonment.', right: 'Replaced in 2022; the expedited rules cover offenses punishable by up to one year\'s imprisonment or a ₱50,000 fine, plus traffic, rental, ordinance and BP 22 cases.', example: '—' },
		{ wrong: 'Bail in the MTC becomes discretionary after conviction.', right: 'In first-level courts, bail is a matter of right before and after conviction (Rule 114, Sec. 4).', example: '—' }
	],
	corrections: [
		{ old: 'Rule 123 refers to "the Revised Rule on Summary Procedure."', fix: 'Replaced by the 2022 Rules on Expedited Procedures in the First Level Courts (effective April 11, 2022).', source: 'A.M. No. 08-8-7-SC (2022)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Uniform procedure', q: 'What procedure governs criminal cases in the first-level courts? State the exceptions.', a: 'E123.1.', keys: 'Sec. 1' },
		{ cat: 'A', level: 2, topic: 'MTC-specific provisions', q: 'Give at least four provisions in Rules 110–122 that apply differently in the first-level courts.', a: 'E123.2.', keys: 'Rule 110, Secs. 1, 5; Rule 112, Sec. 8; Rule 114, Sec. 4; Rule 122, Sec. 9' },
		{ cat: 'B', level: 3, topic: 'Regular vs expedited', q: 'Distinguish regular from expedited procedure in the first-level courts.', a: 'See C123.1.', keys: 'coverage; 2022 Rules' },
		{ cat: 'C', level: 1, topic: 'Uniform procedure', q: 'The procedure in the Municipal Trial Courts is generally the same as in the Regional Trial Courts.', tf: true, short: 'True (Sec. 1), except court-specific provisions and cases under the special procedure for minor offenses.', keys: 'Sec. 1' },
		{ cat: 'C', level: 2, topic: 'Summary procedure', q: 'Criminal cases in the MTC are still governed by the 1991 Revised Rule on Summary Procedure when they fall within its coverage.', tf: false, short: 'False. The 1991 Rule was replaced by the 2022 Rules on Expedited Procedures in the First Level Courts (A.M. No. 08-8-7-SC).', update: 'Rule 123, Sec. 1 still names the 1991 Rule.', keys: 'A.M. No. 08-8-7-SC' },
		{ cat: 'C', level: 2, topic: 'Preliminary investigation', q: 'A municipal trial court judge may conduct the preliminary investigation of an offense punishable by prision mayor.', tf: false, short: 'False. Since A.M. No. 05-8-26-SC (2005), MTC judges no longer conduct preliminary investigation.', keys: 'Rule 112, Sec. 2' },
		{ cat: 'C', level: 3, topic: 'Bail', q: 'An accused convicted by the MTC is entitled to bail as a matter of right while his appeal is pending.', tf: true, short: 'True (Rule 114, Sec. 4): in first-level courts, bail is a matter of right before and after conviction.', keys: 'Rule 114, Sec. 4' },
		{
			cat: 'D', level: 4, topic: 'Procedure to apply', title: 'Which track?',
			facts: 'G is charged in the MTC with (1) violation of a city ordinance on littering, and (2) theft of a ₱15,000 phone, punishable under the RPC as amended by RA 10951 by a penalty within the MTC\'s jurisdiction but exceeding one year.',
			q: 'What procedure governs each case?',
			issue: 'Coverage of the expedited procedure under Rule 123.',
			alac: {
				answer: 'The ordinance case follows the expedited procedure; the theft case follows the regular procedure.',
				legalBasis: 'Rule 123, Sec. 1 (uniform procedure, except cases governed by the special rules for minor offenses); 2022 Rules on Expedited Procedures (ordinance violations; offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000).',
				application: 'Ordinance violations are expressly covered. The theft, though within the MTC\'s jurisdiction, carries imprisonment beyond one year, so it is outside the expedited rules and follows Rules 110–122 as in the RTC.',
				conclusion: 'Expedited procedure for the ordinance case; regular procedure for the theft.'
			},
			verify: 'Confirm the theft penalty bracket under RA 10951 for the stated value before relying on the example.',
			keys: 'Sec. 1; 2022 Rules coverage'
		}
	],
	memorize: [
		'MTC procedure = RTC procedure (Sec. 1)',
		'Exceptions: court-specific provisions · special procedure for minor offenses',
		'1991 Summary Procedure → 2022 Rules on Expedited Procedures (traffic, rental, ordinance, BP 22; ≤ 1 year or ≤ ₱50,000)',
		'No PI by MTC judges since 2005; bail always a matter of right in the MTC; appeals to the RTC on memoranda'
	],
	flashcards: [
		['What procedure governs MTC criminal cases?', 'The same as the RTC, except court-specific provisions and cases under the special procedure for minor offenses.'],
		['What replaced the Revised Rule on Summary Procedure?', 'The 2022 Rules on Expedited Procedures in the First Level Courts (A.M. No. 08-8-7-SC).'],
		['Criminal coverage of the 2022 Rules?', 'Traffic, rental law, ordinances, BP 22, and offenses punishable by imprisonment ≤ 1 year or fine ≤ ₱50,000.'],
		['Do MTC judges conduct preliminary investigation?', 'No, not since A.M. No. 05-8-26-SC (2005).'],
		['Bail after MTC conviction?', 'A matter of right (Rule 114, Sec. 4).']
	],
	oral: [
		['"What does Rule 123 say?"', 'That criminal procedure in the first-level courts is the same as in the RTC, except where a provision applies only to one kind of court and in cases governed by the special procedure for minor offenses — originally the Revised Rule on Summary Procedure, now the 2022 Rules on Expedited Procedures.']
	],
	checklist: [
		'I can state Rule 123 and its two exceptions.',
		'I can name the cases covered by the 2022 Rules on Expedited Procedures.',
		'I can list MTC-specific provisions from Rules 110–122.'
	],
	sheet: [
		'<b>Sec. 1:</b> MTC = RTC procedure, except (1) court-specific provisions and (2) special procedure for minor offenses.',
		'<b>Now:</b> 2022 Rules on Expedited Procedures — traffic · rental · ordinance · BP 22 · ≤ 1 year or ≤ ₱50,000.',
		'<b>MTC-specific:</b> direct filing (R110 §1[b]) · private prosecution if no prosecutor (R110 §5) · no PI by judges (2005) · bail always of right (R114 §4) · appeal to RTC on memoranda (R122 §9).'
	],
	watchFor: `<strong>Watch for: which court, and which track.</strong>
<ul>
<li>Is the case in a first-level court? Then the RTC rules apply unless a provision is court-specific.</li>
<li>Is the offense covered by the 2022 Expedited Rules? Check the penalty and the kind of law violated.</li>
<li>Do not cite the 1991 Summary Procedure thresholds.</li>
</ul>`
};
