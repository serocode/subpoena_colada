import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 125 — Procedure in the Supreme Court. */
export const r125: RuleChapter = {
	id: 'r125',
	n: 125,
	title: 'Procedure in the Supreme Court',
	short: 'R125 Procedure in the SC',
	tiu: 'p. 220',
	plain: `The Supreme Court follows the Court of Appeals' procedure (Rule 124) in criminal cases, unless the Constitution or a law says otherwise. Review of CA decisions in criminal cases follows the civil procedure — a Rule 45 petition on questions of law — except reclusion perpetua and life imprisonment cases, which come up by notice of appeal. If the Court en banc is equally divided, or cannot muster the needed majority, on whether to acquit, the case is deliberated again; if there is still no decision, the conviction is reversed and the accused acquitted.`,
	purpose: `To make the SC's criminal procedure uniform with the CA's, and to resolve deadlocks in favor of liberty.`,
	stage: `Final review, after ${ruleLink('r124')} (CA) or directly from the RTC or Sandiganbayan on pure questions of law (${ruleLink('r122')}).`,
	questions: [
		'What procedure does the SC follow in criminal cases?',
		'How are CA decisions in criminal cases reviewed by the SC?',
		'What happens when the SC en banc is equally divided on whether to acquit?'
	],
	relations: `Sec. 1 incorporates ${ruleLink('r124')}. Sec. 2 sends review of CA decisions to the civil rules (Rule 45), subject to the notice-of-appeal route for RP/LI in ${ruleLink('r124', 'sections', 'Rule 124, Sec. 13[c]')}. Sec. 3 reflects the presumption of innocence (${ruleLink('r115')}): a conviction must command a majority; a deadlock acquits.`,
	principles: [
		'<b>Uniform procedure</b>: SC procedure = CA procedure, unless the Constitution or law provides otherwise (Sec. 1).',
		'<b>Review of CA criminal decisions = civil procedure</b> — Rule 45, questions of law (Sec. 2); RP/LI by notice of appeal (Rule 124, Sec. 13[c]).',
		'<b>Deadlock acquits</b>: an equally divided en banc, after re-deliberation, reverses the conviction (Sec. 3).',
		'<b>Constitutional floor</b>: the SC reviews all criminal cases in which the penalty imposed is reclusion perpetua or higher (Const., Art. VIII, Sec. 5[2][d]).'
	],
	sections: [
		{
			n: '1',
			title: 'Uniform procedure',
			text: `"Unless otherwise provided by the Constitution or by law, the procedure in the Supreme Court in original and in appealed cases shall be the same as in the Court of Appeals."`,
			plain: `The SC uses the CA's procedure (briefs, dismissal grounds, scope of judgment) unless the Constitution or a law provides otherwise.`,
			exceptions: `The Constitution (e.g., Art. VIII, Secs. 4 and 5 on en banc and division cases, and SC review of RP-or-higher cases) and statutes (e.g., PD 1606 on Sandiganbayan appeals).`,
			hypo: `An appellant in the SC fails to file his brief and has counsel de parte. The SC may dismiss the appeal, applying Rule 124, Sec. 8 through Rule 125, Sec. 1.`
		},
		{
			n: '2',
			title: 'Review of decisions of the Court of Appeals',
			text: `"The procedure for the review by the Supreme Court of decisions in criminal cases rendered by the Court of Appeals shall be the same as in civil cases."`,
			plain: `CA criminal decisions are reviewed as in civil cases — by Rule 45 petition on questions of law.`,
			exceptions: `RP or LI imposed by the CA: notice of appeal filed with the CA, opening facts and law (Rule 124, Sec. 13[c]). Death: certification (dormant since RA 9346).`,
			effect: `In a Rule 45 petition, the SC generally does not re-examine the evidence; factual findings of the CA, especially when affirming the trial court, are generally binding, subject to recognized exceptions.`,
			cases: `${caseLink('ysidoro', 'Ysidoro v. Leonardo-de Castro (2012)')} on the three modes of review.`,
			hypo: `The CA affirms a 6-year sentence for falsification. The accused files a Rule 45 petition arguing only that the witnesses lied. The SC may deny it for raising questions of fact.`,
			trap: `Do not use Rule 45 for an RP/LI case decided by the CA — the remedy is a notice of appeal.`,
			verify: `The recognized exceptions to the rule that the SC does not review facts on Rule 45 (e.g., findings grounded on speculation, misapprehension of facts, conflicting findings) come from civil jurisprudence; check a criminal case applying them before citing.`
		},
		{
			n: '3',
			title: 'Decision if opinion is equally divided',
			text: `"When the Supreme Court en banc is equally divided in opinion or the necessary majority cannot be had on whether to acquit the appellant, the case shall again be deliberated upon and if no decision is reached after re-deliberation, the judgment of conviction of the lower court shall be reversed and the accused acquitted."`,
			plain: `A tie (or no majority) on acquittal → deliberate again → still no decision → acquit.`,
			reqs: `(1) SC en banc; (2) equally divided, or no necessary majority, on whether to acquit; (3) re-deliberation; (4) still no decision.`,
			effect: `The lower court's conviction is reversed and the accused acquitted.`,
			hypo: `Fourteen justices take part; seven vote to affirm, seven to acquit. After re-deliberation, the vote is unchanged. The accused is acquitted.`,
			trap: `The tie-breaker favors acquittal — contrast civil cases, where a deadlock generally leaves the appealed judgment standing.`,
			verify: `Compare the general rule on divided votes in civil cases (Rule 56, Sec. 7) before relying on the contrast.`
		}
	],
	reqs: [
		{
			name: 'Acquittal by deadlock (Sec. 3)',
			source: 'Rule 125, Sec. 3',
			what: 'An equally divided en banc (or no necessary majority) on acquittal, unchanged after re-deliberation.',
			who: 'SC en banc.',
			when: 'After re-deliberation.',
			missing: 'If a majority is reached on re-deliberation, the case is decided by that majority.',
			defect: 'Not waivable',
			defectNote: 'A rule in favor of the accused, rooted in the presumption of innocence; not something the prosecution can avoid.'
		}
	],
	enums: [
		{
			id: 'E125.1',
			name: 'Routes of a criminal case to the Supreme Court',
			source: 'Rule 125, Secs. 1–2; Rule 124, Sec. 13; Rule 122, Sec. 3; PD 1606, Sec. 7; Const., Art. VIII, Sec. 5(2)(d)',
			kind: 'teaching',
			lead: 'A criminal case reaches the SC by',
			items: [
				{ t: 'Rule 45 petition from the CA (penalty below RP/LI)', d: 'Questions of law (Sec. 2).', s: 'Rule 45 from the CA' },
				{ t: 'Notice of appeal from the CA (RP or LI)', d: 'Filed with the CA; facts and law (Rule 124, Sec. 13[c]).', s: 'notice of appeal from the CA for RP/LI' },
				{ t: 'Rule 45 petition from the RTC on pure questions of law', d: 'Bypassing the CA (Rule 122, Sec. 2[b]).', s: 'Rule 45 from the RTC' },
				{ t: 'Rule 45 petition or notice of appeal from the Sandiganbayan', d: 'Rule 45 for lesser penalties; notice of appeal for RP/LI (PD 1606, Sec. 7).', s: 'from the Sandiganbayan' },
				{ t: 'Certification for review (death)', d: 'CA or Sandiganbayan renders but does not enter judgment — dormant since RA 9346.', s: 'certification — death (dormant)' },
				{ t: 'Rule 65 certiorari', d: 'For jurisdictional errors, including the narrow review of acquittals.', s: 'Rule 65' }
			],
			tip: 'A teaching list assembled from several provisions; Rule 125 itself has no list.',
			question: 'By what modes may a criminal case reach the Supreme Court?'
		}
	],
	comparisons: [
		{
			id: 'C125.1',
			title: 'Review by notice of appeal vs. Rule 45 petition in the Supreme Court',
			a: 'Notice of appeal (RP/LI)',
			b: 'Rule 45 petition',
			meaning: ['Appeal as of right from a CA or Sandiganbayan judgment imposing RP or LI.', 'Discretionary review on questions of law.'],
			basis: ['Rule 124, Sec. 13(c); PD 1606, Sec. 7', 'Rule 125, Sec. 2; Rule 45'],
			who: ['Accused.', 'Accused (or the People, where no double jeopardy).'],
			when: ['15 days.', '15 days (+30 for justifiable reasons).'],
			reqs: ['Notice filed with the CA or Sandiganbayan.', 'Verified petition; docket fees; only questions of law.'],
			time: ['—', '—'],
			exceptions: ['—', 'Factual review only in recognized exceptions.'],
			effect: ['SC reviews facts and law.', 'SC reviews law; facts generally binding.'],
			trap: ['Filing Rule 45 for an RP case.', 'Raising credibility issues in Rule 45.'],
			decisive: 'The penalty: RP/LI goes up by notice (facts open); anything lower goes up by Rule 45 (law only).',
			hypo: 'CA affirms 20 years for homicide (reclusion temporal) → Rule 45. CA affirms reclusion perpetua for murder → notice of appeal.'
		}
	],
	cases: [],
	deadlines: [],
	traps: [
		{ wrong: 'A tie vote in the SC en banc on a criminal appeal affirms the conviction.', right: 'After re-deliberation, a continuing deadlock acquits (Sec. 3).', example: '—' },
		{ wrong: 'The SC never reviews facts in criminal cases.', right: 'It does on a notice of appeal in RP/LI cases; and, exceptionally, on Rule 45.', example: '—' },
		{ wrong: 'The SC has its own criminal procedure distinct from the CA\'s.', right: 'It follows the CA\'s, unless the Constitution or law provides otherwise (Sec. 1).', example: '—' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Routes to the SC', q: 'By what modes may a criminal case reach the Supreme Court?', a: 'E125.1.', keys: 'Rule 45; notice of appeal; Rule 65' },
		{ cat: 'B', level: 3, topic: 'Notice vs Rule 45', q: 'Distinguish review by notice of appeal from a Rule 45 petition in the Supreme Court.', a: 'See C125.1.', keys: 'RP/LI; questions of law' },
		{ cat: 'C', level: 1, topic: 'Uniform procedure', q: 'The procedure in the Supreme Court in criminal cases is the same as in the Court of Appeals, unless the Constitution or law provides otherwise.', tf: true, short: 'True (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 2, topic: 'Review of CA decisions', q: 'Review by the Supreme Court of Court of Appeals decisions in criminal cases follows the procedure in civil cases.', tf: true, short: 'True (Sec. 2) — generally Rule 45 — except RP/LI cases, which go up by notice of appeal (Rule 124, Sec. 13[c]).', keys: 'Sec. 2' },
		{ cat: 'C', level: 2, topic: 'Deadlock', q: 'When the SC en banc is equally divided on whether to acquit and remains so after re-deliberation, the judgment of conviction is affirmed.', tf: false, short: 'False. The conviction is reversed and the accused acquitted (Sec. 3).', keys: 'Sec. 3' },
		{ cat: 'C', level: 3, topic: 'Constitution', q: 'The Constitution requires the Supreme Court to have the power to review all criminal cases in which the penalty imposed is reclusion perpetua or higher.', tf: true, short: 'True (Art. VIII, Sec. 5[2][d]) — but Mateo held this does not bar an intermediate CA review.', keys: 'Art. VIII, Sec. 5(2)(d); Mateo' },
		{
			cat: 'D', level: 4, topic: 'Deadlock', title: 'The divided Court',
			facts: 'L\'s conviction for plunder (reclusion perpetua) reaches the SC en banc on appeal. Of the 14 justices taking part, 7 vote to affirm and 7 to acquit. The case is deliberated again; the vote does not change.',
			q: 'What is the result?',
			issue: 'Effect of an equally divided SC en banc on whether to acquit.',
			alac: {
				answer: 'L is acquitted.',
				legalBasis: 'Rule 125, Sec. 3: when the SC en banc is equally divided or the necessary majority cannot be had on whether to acquit, the case is deliberated again, and if no decision is reached, the judgment of conviction is reversed and the accused acquitted.',
				application: 'The Court was equally divided; re-deliberation produced no majority.',
				conclusion: 'The Sandiganbayan\'s conviction is reversed and L acquitted.'
			},
			keys: 'Sec. 3; re-deliberation'
		}
	],
	memorize: [
		'SC procedure = CA procedure, unless Constitution or law otherwise (Sec. 1)',
		'Review of CA criminal decisions = civil procedure (Rule 45) (Sec. 2); RP/LI by notice of appeal',
		'Equally divided en banc on acquittal → re-deliberate → still none → acquit (Sec. 3)'
	],
	flashcards: [
		['What procedure does the SC follow in criminal cases?', 'The CA\'s, unless the Constitution or law provides otherwise.'],
		['How are CA criminal decisions reviewed by the SC?', 'As in civil cases (Rule 45), except RP/LI cases by notice of appeal.'],
		['SC en banc tied on acquittal?', 'Re-deliberate; if still no decision, acquit.']
	],
	oral: [
		['"What happens if the Supreme Court is equally divided in a criminal appeal?"', 'Under Rule 125, Sec. 3, the case is deliberated again; if there is still no decision, the conviction is reversed and the accused acquitted — the deadlock is resolved in favor of the presumption of innocence.']
	],
	checklist: [
		'I can state the three sections of Rule 125.',
		'I can list the routes of a criminal case to the SC.',
		'I can apply the deadlock rule.'
	],
	sheet: [
		'<b>Sec. 1:</b> SC = CA procedure unless Constitution/law otherwise.',
		'<b>Sec. 2:</b> CA criminal decisions reviewed as in civil (Rule 45, law only); RP/LI by notice of appeal (R124 §13[c]).',
		'<b>Sec. 3:</b> en banc tie (or no majority) on acquittal → re-deliberate → acquit.'
	],
	watchFor: `<strong>Watch for: the penalty and the vote.</strong>
<ul>
<li>RP or LI from the CA? Notice of appeal, not Rule 45.</li>
<li>A deadlocked en banc acquits — after re-deliberation.</li>
</ul>`
};
