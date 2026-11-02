import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 121 — New Trial or Reconsideration. */
export const r121: RuleChapter = {
	id: 'r121',
	n: 121,
	title: 'New Trial or Reconsideration',
	short: 'R121 New Trial / MR',
	tiu: 'pp. 203–206',
	plain: `After a conviction and before it becomes final, the accused can ask the same trial court to look again. A motion for reconsideration says the judgment itself is wrong on the law or the facts, and the court can fix it on the existing record. A motion for new trial says the trial was flawed (errors of law or irregularities that hurt the accused) or that new, material evidence has turned up that could not have been found earlier and would probably change the result. Only the accused can ask; the court can act on its own only with his consent. Filing either motion stops the 15-day appeal clock; if it is denied, the accused gets a fresh 15 days to appeal.`,
	purpose: `To let the trial court correct its own errors, or hear evidence it never had, before the case goes up on appeal — which is cheaper and faster for everyone.`,
	stage: `After promulgation of a judgment of conviction (${ruleLink('r120')}) and before it becomes final; the alternative to, or the step before, appeal (${ruleLink('r122')}).`,
	questions: [
		'What remedies does a convicted accused have before the judgment becomes final?',
		'Who may move for new trial or reconsideration, and when?',
		'What are the grounds for each?',
		'What must the motion contain, especially when based on newly discovered evidence?',
		'What happens to the evidence and the judgment if the motion is granted?',
		'What happens to the appeal period if it is denied?'
	],
	relations: `Rule 121 sits between judgment (${ruleLink('r120')}) and appeal (${ruleLink('r122')}). It is one of five pre-finality remedies: modification under ${ruleLink('r120', 'sections', 'Rule 120, Sec. 7')}, reopening under ${ruleLink('r119', 'sections', 'Rule 119, Sec. 24')}, new trial, reconsideration and appeal. A new trial ordered under this Rule must begin within 30 days (extendible to 180) under ${ruleLink('r119', 'sections', 'Rule 119, Sec. 5')}. In the Court of Appeals, a new trial is allowed only on newly discovered evidence (${ruleLink('r124', 'sections', 'Rule 124, Sec. 14')}).`,
	principles: [
		'<b>Only for a judgment of conviction</b>, and only before it becomes final (Sec. 1).',
		'<b>Only the accused may ask</b>; the court may act on its own initiative only with his consent. The prosecution cannot move for new trial or reconsideration of an acquittal (double jeopardy).',
		'<b>New trial = defect in the trial or new evidence; reconsideration = error in the judgment</b> requiring no further proceedings (Secs. 2–3).',
		'<b>Filing stops the appeal period</b> (Rule 122, Sec. 6); after denial, the <b>fresh-period rule</b> gives 15 days from notice of denial (Neypes, applied to criminal cases).',
		'<b>Grant vacates the original judgment</b> and a new one is rendered (Sec. 6[c]).'
	],
	sections: [
		{
			n: '1',
			title: 'New trial or reconsideration',
			text: `"At any time before a judgment of conviction becomes final, the court may, on motion of the accused or at its own instance but with the consent of the accused, grant a new trial or reconsideration."`,
			plain: `Before the conviction becomes final, the accused may ask for a new trial or reconsideration; the judge may also offer one, but only if the accused agrees.`,
			reqs: `(1) A judgment of conviction; (2) not yet final; (3) motion of the accused, or the court's own initiative with the accused's consent.`,
			who: `The accused (movant); the court that rendered the judgment.`,
			when: `Before finality — in practice within the 15-day appeal period from promulgation (Rule 122, Sec. 6). No extension (Tiu's comparison table).`,
			exceptions: `The prosecution cannot file an MR or motion for new trial against an acquittal; its only remedy is Rule 65 certiorari for grave abuse or denial of due process (see ${ruleLink('r122')}).`,
			effect: `A timely motion suspends the appeal period (Rule 122, Sec. 6). Under the fresh-period rule, the accused has a fresh 15 days from notice of denial to appeal (Neypes; Tiu cites Sumiran v. Damaso, 2009; ${caseLink('yu-samson-tatad', 'Yu v. Samson-Tatad, 2011')}).`,
			cases: `${caseLink('yu-samson-tatad', 'Yu v. Samson-Tatad (2011)')}.`,
			hypo: `A is convicted on May 1 and files an MR on May 10. It is denied; A receives the denial on June 1. A may appeal until June 16 — a fresh 15 days, not just the 5 days left.`,
			trap: `"At its own instance" does not let the judge grant a new trial over the accused's objection: the consent of the accused is required, because a new trial puts him through the ordeal again.`
		},
		{
			n: '2',
			title: 'Grounds for a new trial',
			text: `The court "shall grant a new trial on any of the following grounds: (a) The errors of law or irregularities prejudicial to the substantial rights of the accused have been committed during the trial; (b) The new and material evidence has been discovered which the accused could not with reasonable diligence have discovered and produced at the trial and which if introduced and admitted would probably change the judgment."`,
			plain: `Two grounds: something went wrong in the trial that hurt the accused, or new evidence has surfaced that he could not have found before and that would probably change the verdict.`,
			reqs: `Newly discovered evidence must be: (1) discovered after trial; (2) not discoverable and producible at trial with reasonable diligence; (3) material, not merely cumulative, corroborative or impeaching; and (4) of such weight that it would probably change the judgment.`,
			who: `The accused; the trial court.`,
			when: `Before finality.`,
			exceptions: `In the Court of Appeals, only newly discovered evidence is a ground (Rule 124, Sec. 14). Generally no new trial in the Supreme Court, though it is left to the Court's discretion (Tiu).`,
			effect: `If a ground is shown, "the court shall grant" — the grant is mandatory once a ground is established, though whether the ground exists is for the court to weigh.`,
			hypo: `After conviction for homicide, the accused finds CCTV footage from a store across the street, which the store owner had kept abroad and only produced when he returned. It shows someone else firing the gun. All four requisites are present.`,
			trap: `Evidence that was available at trial but not presented because of counsel's strategy is not "newly discovered." And evidence that only impeaches a witness's credibility rarely "would probably change the judgment."`,
			verify: `Courts treat recantations of prosecution witnesses with disfavor as grounds for new trial — a settled doctrine not discussed in Tiu; check a recent decision before citing one.`
		},
		{
			n: '3',
			title: 'Ground for reconsideration',
			text: `"The court shall grant reconsideration on the ground of errors of law or fact in the judgment, which requires no further proceedings."`,
			plain: `Reconsideration fixes a mistake in the decision itself — in the law applied or the facts found — on the record already before the court.`,
			reqs: `(1) An error of law or fact; (2) in the judgment; (3) correctable without further proceedings (no new evidence).`,
			effect: `The court sets aside the judgment and renders a new one (Sec. 6[c]).`,
			hypo: `The judgment applies the wrong penalty for the offense found and ignores a mitigating circumstance shown in the record. Reconsideration is the proper remedy; no new evidence is needed.`,
			trap: `If correcting the error needs new evidence, the remedy is new trial, not reconsideration.`
		},
		{
			n: '4',
			title: 'Form of motion and notice to the prosecutor',
			text: `The motion "shall be in writing and shall state the grounds on which it is based. If based on a newly-discovered evidence, the motion must be supported by affidavits of witnesses by whom such evidence is expected to be given or by duly authenticated copies of documents which are proposed to be introduced in evidence. Notice of the motion for new trial or reconsideration shall be given to the prosecutor."`,
			plain: `Write it, state the grounds, attach the new witnesses' affidavits or authenticated copies of the new documents, and notify the prosecutor.`,
			reqs: `(1) Written; (2) grounds stated; (3) if newly discovered evidence — affidavits of the witnesses or duly authenticated copies of the documents; (4) notice to the prosecutor.`,
			who: `Accused and counsel; the prosecutor receives notice.`,
			effect: `A motion without the supporting affidavits or documents does not show that the new evidence exists and is material, and may be denied for that reason alone.`,
			hypo: `The accused moves for new trial, alleging "a new eyewitness will exonerate me," but attaches no affidavit. The motion is fatally deficient under Sec. 4.`,
			trap: `Notice goes to the prosecutor, not to the private complainant alone.`
		},
		{
			n: '5',
			title: 'Hearing on motion',
			text: `"Where a motion for a new trial calls for resolution of any question of fact, the court may hear evidence thereon by affidavits or otherwise."`,
			plain: `If the motion raises factual questions (for example, whether the evidence really could not have been found earlier), the court may receive evidence on it, by affidavit or otherwise.`,
			who: `Trial court; accused; prosecutor.`,
			when: `2017 Revised Guidelines: an MR of a judgment of conviction or motion for new trial is resolved within a non-extendible 10 calendar days from the prosecution's comment, with or without comment.`,
			hypo: `The prosecutor disputes that the "new" witness was unknown during trial. The court sets a short hearing to receive affidavits from both sides.`,
			trap: `"May" — a hearing is discretionary, not required in every case.`
		},
		{
			n: '6',
			title: 'Effects of granting a new trial or reconsideration',
			text: `"(a) When a new trial is granted on the ground of errors of law or irregularities committed during the trial, all proceedings and evidence affected thereby shall be set aside and taken anew. The court may, in the interest of justice, allow the introduction of additional evidence. (b) When a new trial is granted on the ground of newly-discovered evidence, the evidence already adduced shall stand and the newly-discovered and such other evidence as the court may, in the interest of justice, allow to be introduced shall be taken and considered together with the evidence already in the record. (c) In all cases, when the court grants new trial or reconsideration, the original judgment shall be set aside or vacated and a new judgment rendered accordingly."`,
			plain: `Errors or irregularities: redo the affected proceedings and evidence. New evidence: keep the old evidence and add the new. Either way, the old judgment is vacated and a new one is written.`,
			when: `Retrial must begin within 30 days from notice of the order, extendible to 180 days if impractical (Rule 119, Sec. 5).`,
			effect: `Vacating the judgment means there is no conviction until the new judgment; the accused's bail status follows the stage of the case.`,
			hypo: `The court grants a new trial because the accused was made to testify without counsel. Only the proceedings affected — his testimony — are set aside and taken again; unaffected prosecution testimony stands.`,
			trap: `Newly discovered evidence does not erase the record: the old evidence stays and is weighed with the new.`
		}
	],
	reqs: [
		{
			name: 'Newly discovered evidence (Sec. 2[b])',
			source: 'Rule 121, Secs. 2(b) and 4',
			what: 'Evidence discovered after trial; not discoverable with reasonable diligence; material; would probably change the judgment; supported by affidavits or authenticated documents.',
			who: 'Accused.',
			when: 'Before finality of the conviction (within the appeal period).',
			form: 'Written motion stating the ground, with affidavits of the witnesses or duly authenticated copies of the documents; notice to the prosecutor.',
			missing: 'Without any one requisite the motion is denied; without the supporting affidavits it fails Sec. 4 on its face.',
			defect: 'Not waivable',
			defectNote: 'The requisites are substantive conditions for the remedy, not formalities the prosecution can waive by silence; the court must still be satisfied they exist.'
		},
		{
			name: 'Timeliness of the motion (Sec. 1)',
			source: 'Rule 121, Sec. 1; Rule 122, Sec. 6',
			what: 'Filing before the judgment of conviction becomes final.',
			who: 'Accused.',
			when: 'Within 15 days from promulgation (the appeal period); no extension.',
			missing: 'A motion filed after finality cannot be entertained; the judgment can then be attacked only by extraordinary remedies (e.g., habeas corpus for a void judgment).',
			defect: 'Jurisdictional',
			defectNote: 'Once the judgment is final, the trial court loses power to amend it; the lapse of the period cannot be waived by the parties.'
		},
		{
			name: 'Consent of the accused when the court acts motu proprio (Sec. 1)',
			source: 'Rule 121, Sec. 1',
			what: 'Consent of the accused to a new trial or reconsideration initiated by the court.',
			who: 'Accused.',
			when: 'Before the court grants the new trial or reconsideration.',
			missing: 'A new trial or reconsideration imposed over the accused\'s objection may expose him to double jeopardy and is improper.',
			defect: 'Not waivable',
			defectNote: 'The consent requirement protects the accused; without it the court has no authority to reopen a judgment to his prejudice.'
		}
	],
	enums: [
		{
			id: 'E121.1',
			name: 'Remedies of the accused before a judgment of conviction becomes final',
			source: "Tiu, p. 203 (organized from Rules 119–122)",
			kind: 'notes',
			memorize: true,
			lead: 'Before a conviction becomes final, the accused may avail of',
			items: [
				{ t: 'Modification of judgment', d: 'On motion of the accused, before finality or perfection of appeal; no hearing required; never on the court\'s own motion (Rule 120, Sec. 7).', s: 'modification (Rule 120, Sec. 7)' },
				{ t: 'Reopening of the proceedings', d: 'Before finality, by the judge motu proprio or on motion, with hearing, to avoid a miscarriage of justice; must end within 30 days (Rule 119, Sec. 24).', s: 'reopening (Rule 119, Sec. 24)' },
				{ t: 'Motion for new trial', d: 'On errors of law or irregularities during trial, or newly discovered evidence (Rule 121, Sec. 2).', s: 'new trial (Rule 121)' },
				{ t: 'Motion for reconsideration', d: 'On errors of law or fact in the judgment needing no further proceedings (Rule 121, Sec. 3).', s: 'reconsideration (Rule 121)' },
				{ t: 'Appeal', d: 'Within 15 days from promulgation (Rule 122, Sec. 6).', s: 'appeal (Rule 122)' }
			],
			tip: 'Distinguish who may initiate: modification needs a motion of the accused; reopening may be motu proprio; new trial or reconsideration motu proprio needs the accused\'s consent.',
			question: 'What remedies are available to an accused before a judgment of conviction becomes final?'
		},
		{
			id: 'E121.2',
			name: 'Grounds for new trial',
			source: 'Rule 121, Sec. 2',
			kind: 'rule',
			memorize: true,
			lead: 'The grounds for a new trial are',
			items: [
				{ t: 'Errors of law or irregularities prejudicial to the substantial rights of the accused committed during the trial', d: 'A defect in how the trial was conducted, not in the judgment\'s reasoning.', s: 'errors of law or irregularities during trial', x: 'Denial of the right to present evidence; testimony taken without counsel.' },
				{ t: 'Newly discovered evidence', d: 'Material evidence the accused could not with reasonable diligence have discovered and produced at trial and which would probably change the judgment.', s: 'newly discovered evidence' }
			],
			question: 'What are the grounds for a new trial in a criminal case?'
		},
		{
			id: 'E121.3',
			name: 'Requisites of newly discovered evidence',
			source: 'Rule 121, Sec. 2(b); Tiu, p. 204',
			kind: 'rule',
			memorize: true,
			lead: 'Evidence is "newly discovered" if',
			items: [
				{ t: 'It was discovered after trial', d: 'It surfaced only after the trial ended.', s: 'discovered after trial' },
				{ t: 'It could not have been discovered and produced at trial with reasonable diligence', d: 'The accused must show diligence; evidence he knew of but did not present does not qualify.', s: 'not discoverable with reasonable diligence' },
				{ t: 'It is material', d: 'It goes to the merits, not merely cumulative, corroborative or impeaching.', s: 'material' },
				{ t: 'It would probably change the judgment if introduced and admitted', d: 'Its weight is such that a different verdict is probable, not merely possible.', s: 'would probably change the judgment' }
			],
			memory: '<b>A-D-M-C</b>: After trial · Diligence · Material · Change the result.',
			question: 'When is evidence considered newly discovered for purposes of a new trial?'
		},
		{
			id: 'E121.4',
			name: 'Formal requirements of the motion',
			source: 'Rule 121, Sec. 4',
			kind: 'rule',
			lead: 'The motion must',
			items: [
				{ t: 'Be in writing', d: 'No oral motion.', s: 'in writing' },
				{ t: 'State the grounds on which it is based', d: 'Specify whether errors, irregularities or new evidence.', s: 'state its grounds' },
				{ t: 'If based on newly discovered evidence, be supported by affidavits or duly authenticated copies of documents', d: 'Affidavits of the witnesses who will give the evidence, or authenticated copies of the documents to be offered.', s: 'supporting affidavits or documents' },
				{ t: 'Be served with notice on the prosecutor', d: 'The State, through the prosecutor, must be heard.', s: 'notice to the prosecutor' }
			],
			question: 'What are the formal requirements of a motion for new trial based on newly discovered evidence?'
		},
		{
			id: 'E121.5',
			name: 'Effects of granting a new trial or reconsideration',
			source: 'Rule 121, Sec. 6',
			kind: 'rule',
			memorize: true,
			lead: 'When the motion is granted',
			items: [
				{ t: 'Errors of law or irregularities: affected proceedings and evidence are set aside and taken anew', d: 'Additional evidence may be allowed in the interest of justice.', s: 'errors — affected proceedings taken anew' },
				{ t: 'Newly discovered evidence: the evidence already adduced stands', d: 'The new evidence (and other evidence the court allows) is taken and considered with the existing record.', s: 'new evidence — old evidence stands, new evidence added' },
				{ t: 'In all cases: the original judgment is set aside or vacated and a new judgment rendered', d: 'There is no longer a judgment of conviction until the new one is rendered.', s: 'original judgment vacated; new judgment' }
			],
			question: 'What are the effects of granting a new trial on each ground?'
		}
	],
	comparisons: [
		{
			id: 'C121.1',
			title: 'Motion for new trial vs. motion for reconsideration',
			a: 'New trial',
			b: 'Reconsideration',
			meaning: ['A rehearing of the case, in whole or part, because the trial was defective or new evidence surfaced.', 'A re-examination of the judgment on the existing record.'],
			basis: ['Rule 121, Secs. 1, 2, 4, 6(a)–(b)', 'Rule 121, Secs. 1, 3, 6(c)'],
			who: ['Accused; court motu proprio with his consent.', 'Same.'],
			when: ['Before finality of a conviction (within 15 days from promulgation).', 'Same.'],
			reqs: ['Errors of law or irregularities during trial; or newly discovered evidence with supporting affidavits or documents.', 'Errors of law or fact in the judgment, requiring no further proceedings.'],
			time: ['No extension; retrial within 30 days (up to 180) of the order (Rule 119, Sec. 5).', 'No extension.'],
			exceptions: ['In the CA, only newly discovered evidence (Rule 124, Sec. 14).', 'In the CA, MR within 15 days; no second MR (Rule 124, Sec. 16).'],
			effect: ['Proceedings retaken (errors) or evidence added (new evidence); judgment vacated.', 'Judgment vacated and a new one rendered.'],
			trap: ['Calling evidence "new" when it was available at trial.', 'Asking for reconsideration when the fix needs new evidence.'],
			decisive: 'Whether the fix needs further proceedings: new trial takes evidence; reconsideration does not.',
			hypo: 'The judge misread an exhibit: reconsideration. The defense discovers a document proving alibi after trial: new trial. Both stop the appeal period.'
		},
		{
			id: 'C121.2',
			title: 'New trial (Rule 121) vs. reopening (Rule 119, Sec. 24) vs. modification (Rule 120, Sec. 7)',
			a: 'New trial / reconsideration',
			b: 'Reopening / modification',
			meaning: ['Remedies against a judgment of conviction on stated grounds.', 'Reopening: receiving further evidence to avoid a miscarriage of justice. Modification: amending or setting aside a conviction on the accused\'s motion.'],
			basis: ['Rule 121', 'Rule 119, Sec. 24; Rule 120, Sec. 7'],
			who: ['Accused; court motu proprio only with consent.', 'Reopening: court motu proprio or on motion. Modification: only on motion of the accused.'],
			when: ['After judgment, before finality.', 'Reopening: any time before finality of the conviction (even before judgment). Modification: before finality or perfection of appeal.'],
			reqs: ['Specific grounds (Secs. 2–3); form (Sec. 4).', 'Reopening: hearing required; miscarriage of justice. Modification: motion; no hearing required.'],
			time: ['Retrial within 30 days, up to 180.', 'Reopened proceedings end within 30 days from the order.'],
			exceptions: ['—', '—'],
			effect: ['Judgment vacated; new judgment.', 'Reopening: new evidence received; modification: judgment amended.'],
			trap: ['Assuming the court may order a new trial over the accused\'s objection.', 'Assuming a court may modify a conviction on its own motion.'],
			decisive: 'Initiative and hearing: reopening may be motu proprio but needs a hearing; modification needs the accused\'s motion but no hearing; new trial motu proprio needs consent.',
			hypo: 'Before promulgation, the judge learns a key prosecution witness may have been bribed: reopening, with hearing. After promulgation, the accused notices the penalty is wrong: modification or reconsideration.'
		}
	],
	cases: [
		{
			id: 'yu-samson-tatad',
			name: 'Yu v. Samson-Tatad',
			cite: 'G.R. No. 170979, February 9, 2011',
			from: 'Checked',
			facts: 'The accused was convicted of estafa and filed a motion for new trial within the appeal period. It was denied, and she filed a notice of appeal within 15 days from receipt of the denial, but beyond the remaining balance of the original period. The prosecution moved to dismiss the appeal as late.',
			issue: 'Does the fresh-period rule in Neypes v. CA apply to appeals in criminal cases?',
			ruling: 'Yes. The appeal was timely.',
			doctrine: 'The fresh 15-day period to appeal from notice of the denial of a motion for new trial or reconsideration (Neypes) applies to criminal cases under Rule 122, Sec. 6; there is no reason to give the accused less than civil litigants.',
			reasoning: 'Rule 122, Sec. 6 and Rule 41, Sec. 3 are substantially the same; uniformity and the accused\'s right to appeal favor the fresh period.',
			rule: 'Rule 121; Rule 122, Sec. 6.',
			hypo: 'An MR is filed on day 14 and denied; the accused has 15 days from notice of the denial, not 1 day.',
			examQ: 'Does the fresh-period rule apply in criminal cases?',
			also: ['r122'],
			verify: 'Tiu cites Sumiran v. Damaso (2009) for the same point; Yu v. Samson-Tatad is the leading criminal case. Facts summarized; read the decision for details.'
		}
	],
	deadlines: [
		{ ref: 'Rule 121, Sec. 1; Rule 122, Sec. 6', act: 'File a motion for new trial or reconsideration', who: 'Accused', period: '15 days', start: 'Promulgation of the judgment', exceptions: 'No extension', effect: 'Judgment becomes final', kind: 'procedural' },
		{ ref: '2017 Revised Guidelines, III.16(b)', act: 'Resolve the MR or motion for new trial', who: 'Trial court', period: '10 calendar days (non-extendible)', start: 'Submission of the prosecution\'s comment (or lapse of the period, with or without comment)', exceptions: '—', effect: 'Administrative', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 5', act: 'Commence the new trial', who: 'Trial court', period: '30 days (extendible to 180 days)', start: 'Notice of the order granting new trial', exceptions: 'Extension if impractical (unavailable witnesses, other factors)', effect: 'Speedy-trial consequences', kind: 'procedural' },
		{ ref: 'Rule 122, Sec. 6 (Neypes; Yu v. Samson-Tatad)', act: 'Appeal after denial of the motion', who: 'Accused', period: '15 days (fresh period)', start: 'Notice of the order denying the motion', exceptions: '—', effect: 'Judgment becomes final', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'The prosecution may move to reconsider an acquittal within 15 days.', right: 'Rule 121 applies only to a judgment of conviction, on motion of the accused; reconsidering an acquittal would put him twice in jeopardy.', example: 'The State\'s remedy against an acquittal is Rule 65 certiorari for grave abuse (Villareal v. Aliga).' },
		{ wrong: 'The judge may order a new trial on his own motion whenever he doubts the verdict.', right: 'Only with the consent of the accused (Sec. 1).', example: '—' },
		{ wrong: 'Evidence the defense chose not to present is newly discovered if it later seems helpful.', right: 'It must not have been discoverable and producible at trial with reasonable diligence.', example: '—' },
		{ wrong: 'A new trial on newly discovered evidence wipes out the earlier testimony.', right: 'The evidence already adduced stands; the new evidence is added (Sec. 6[b]).', example: '—' },
		{ wrong: 'After an MR is denied, the accused has only the days left in the original period.', right: 'He has a fresh 15 days from notice of denial (Neypes; Yu v. Samson-Tatad).', example: '—' },
		{ wrong: 'An oral motion for new trial at promulgation suffices.', right: 'It must be in writing, state its grounds, and — for new evidence — attach affidavits or authenticated documents (Sec. 4).', example: '—' }
	],
	corrections: [
		{ old: 'Tiu cites Sumiran v. Damaso (2009) for applying the Neypes fresh period to criminal cases.', fix: 'The leading criminal case is Yu v. Samson-Tatad (2011), which expressly applied the fresh-period rule to Rule 122, Sec. 6.', source: 'Yu v. Samson-Tatad, G.R. No. 170979, February 9, 2011' },
		{ old: 'No period for resolving the motion.', fix: 'The 2017 Revised Guidelines require resolution within a non-extendible 10 calendar days from the prosecution\'s comment.', source: 'A.M. No. 15-06-10-SC, III.16(b)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Pre-finality remedies', q: 'Enumerate the remedies of an accused before a judgment of conviction becomes final.', a: 'E121.1.', keys: 'Rule 120, Sec. 7; Rule 119, Sec. 24; Rule 121; Rule 122' },
		{ cat: 'A', level: 1, topic: 'Grounds', q: 'What are the grounds for a new trial? For reconsideration?', a: 'E121.2; reconsideration — errors of law or fact in the judgment requiring no further proceedings (Sec. 3).', keys: 'Secs. 2–3' },
		{ cat: 'A', level: 2, topic: 'Newly discovered evidence', q: 'What are the requisites of newly discovered evidence?', a: 'E121.3.', keys: 'Sec. 2(b)' },
		{ cat: 'A', level: 2, topic: 'Effects', q: 'What are the effects of granting a new trial on each ground?', a: 'E121.5.', keys: 'Sec. 6' },
		{ cat: 'B', level: 3, topic: 'New trial vs MR', q: 'Distinguish a motion for new trial from a motion for reconsideration in criminal cases.', a: 'See C121.1.', keys: 'further proceedings' },
		{ cat: 'B', level: 3, topic: 'New trial vs reopening', q: 'Distinguish new trial under Rule 121 from reopening under Rule 119, Sec. 24 and modification under Rule 120, Sec. 7.', a: 'See C121.2.', keys: 'initiative; hearing; consent' },
		{ cat: 'C', level: 1, topic: 'Who may file', q: 'The prosecution may file a motion for reconsideration of a judgment of acquittal within 15 days from promulgation.', tf: false, short: 'False. Rule 121 covers only judgments of conviction, on motion of the accused; reconsidering an acquittal violates double jeopardy.', keys: 'Sec. 1; double jeopardy' },
		{ cat: 'C', level: 1, topic: 'Motu proprio', q: 'The court may grant a new trial at its own instance, but only with the consent of the accused.', tf: true, short: 'True (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 2, topic: 'Form', q: 'A motion for new trial based on newly discovered evidence must be supported by affidavits of the witnesses or authenticated copies of the documents.', tf: true, short: 'True (Sec. 4).', keys: 'Sec. 4' },
		{ cat: 'C', level: 2, topic: 'Effects', q: 'When a new trial is granted on newly discovered evidence, all evidence previously adduced is set aside and taken anew.', tf: false, short: 'False. The evidence already adduced stands; the new evidence is considered with it (Sec. 6[b]). Setting aside applies to new trial for errors or irregularities (Sec. 6[a]).', keys: 'Sec. 6' },
		{ cat: 'C', level: 2, topic: 'Reconsideration', q: 'Reconsideration is the proper remedy when correcting the error in the judgment requires the reception of additional evidence.', tf: false, short: 'False. Reconsideration covers errors of law or fact "which requires no further proceedings" (Sec. 3); if evidence is needed, the remedy is new trial.', keys: 'Sec. 3' },
		{ cat: 'C', level: 3, topic: 'Fresh period', q: 'If an accused files a motion for reconsideration on the 12th day of the appeal period and it is denied, he has only 3 days from notice of denial to appeal.', tf: false, short: 'False. Under the fresh-period rule, he has a fresh 15 days from notice of the denial (Neypes, applied in Yu v. Samson-Tatad, 2011).', update: 'The text of Rule 122, Sec. 6 still speaks of "the balance of the period"; the fresh-period rule supersedes it.', keys: 'Rule 122, Sec. 6; Neypes; Yu v. Samson-Tatad' },
		{ cat: 'C', level: 3, topic: 'Newly discovered evidence', q: 'Evidence known to the accused during trial, but not presented because his counsel thought it unnecessary, may be the basis of a new trial as newly discovered evidence.', tf: false, short: 'False. It could have been discovered and produced at trial with reasonable diligence (Sec. 2[b]).', keys: 'Sec. 2(b); reasonable diligence' },
		{ cat: 'C', level: 4, topic: 'Court of Appeals', q: 'An appellant in the Court of Appeals may move for a new trial on the ground of irregularities committed during the trial in the RTC.', tf: false, short: 'False. In the CA, a motion for new trial lies only on newly discovered evidence material to the defense (Rule 124, Sec. 14); trial irregularities are raised as assigned errors in the appeal.', keys: 'Rule 124, Sec. 14' },
		{
			cat: 'D', level: 4, topic: 'Newly discovered evidence', title: 'The witness who came home',
			facts: 'B is convicted of homicide on July 1 on the testimony of a lone eyewitness. On July 10, B files a motion for new trial alleging that C, an OFW who was abroad during the whole trial and whom nobody knew had seen the incident, has returned and will testify that the eyewitness was elsewhere. B attaches C\'s sworn affidavit and his passport stamps. The prosecutor opposes, saying B should have looked harder.',
			q: 'Should the motion be granted? If granted, what happens to the eyewitness\'s testimony?',
			issue: 'Whether the requisites of newly discovered evidence are present; effect of a grant.',
			alac: {
				answer: 'Yes, the motion should be granted; the eyewitness\'s testimony stays on the record and is weighed with C\'s.',
				legalBasis: 'Rule 121, Sec. 2(b) (new and material evidence not discoverable with reasonable diligence that would probably change the judgment); Sec. 4 (supporting affidavits); Sec. 6(b) (evidence already adduced stands).',
				application: 'C was abroad and unknown as a witness — diligence could not have found him. His testimony goes to the core issue (whether the lone eyewitness saw anything), so it is material and would probably change the verdict. The motion was filed within the 15-day period and supported by an affidavit.',
				conclusion: 'Grant the new trial. The prior evidence stands; C\'s testimony is taken and considered with it, and a new judgment is rendered.'
			},
			keys: 'Sec. 2(b); Sec. 4; Sec. 6(b)'
		},
		{
			cat: 'D', level: 4, topic: 'Fresh period', title: 'Counting after denial',
			facts: 'D is convicted at promulgation on March 3. He files an MR on March 15. It is denied by an order he receives on April 2. He files a notice of appeal on April 14.',
			q: 'Is the appeal timely?',
			issue: 'Computation of the appeal period after denial of an MR.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Rule 122, Sec. 6 (appeal within 15 days from promulgation; suspended by a motion for new trial or reconsideration); the fresh-period rule of Neypes, applied to criminal cases in Yu v. Samson-Tatad (2011).',
				application: 'The MR was timely (day 12). After denial, D had a fresh 15 days from April 2 — until April 17. The April 14 notice is within that period.',
				conclusion: 'The appeal is timely and should be given due course.'
			},
			keys: 'fresh period; Yu v. Samson-Tatad'
		},
		{
			cat: 'E', level: 5, topic: 'Motu proprio without consent', title: 'The judge who changed his mind',
			facts: 'E is convicted of reckless imprudence resulting in homicide and sentenced to a probationable penalty. He plans to apply for probation. Five days after promulgation, the judge, believing the evidence showed murder, issues an order on his own motion granting a "new trial" to receive evidence of treachery. E objects.',
			q: 'Was the order proper?',
			issue: 'Whether the court may grant a new trial motu proprio over the accused\'s objection.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 121, Sec. 1 (the court may grant a new trial "at its own instance but with the consent of the accused"); Const., Art. III, Sec. 21 (double jeopardy); Rule 120, Sec. 7 (modification only on motion of the accused).',
				application: 'E did not consent and objected. The order seeks to expose him to a graver conviction — exactly what the consent requirement and double jeopardy prevent. An information for reckless imprudence also could not support a conviction for murder.',
				conclusion: 'The order is void for lack of the accused\'s consent; the original judgment stands and E may apply for probation.'
			},
			trap: 'Do not confuse this with reopening under Rule 119, Sec. 24, which the judge may order motu proprio — but even reopening cannot be used to convict of an offense not charged.',
			keys: 'Sec. 1; consent; double jeopardy'
		},
		{ cat: 'F', level: 3, topic: 'Yu v. Samson-Tatad', q: 'What did Yu v. Samson-Tatad (2011) hold on appeal periods in criminal cases?', a: 'The Neypes fresh period — 15 days from notice of denial of a motion for new trial or reconsideration — applies to criminal appeals under Rule 122, Sec. 6.', keys: 'fresh period' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 121', title: 'Rule 121 integrated',
			facts: 'F is convicted of estafa. On day 8 he orally asks the judge at the hearing for a new trial because "a new witness will clear me"; the judge says to put it in writing. On day 14 F files a written motion stating that a bank record proves he returned the money before the demand; he attaches a photocopy of the record, uncertified. The prosecutor is not furnished a copy. The judge denies the motion on day 30; F receives the order on day 33 and files a notice of appeal on day 45.',
			q: 'Identify and resolve the issues.',
			issue: 'Form of the motion; notice to the prosecutor; effect on the appeal period.',
			alac: {
				answer: 'The motion was defective in form, but because it was timely filed in writing it stopped the appeal period, and the appeal on day 45 is timely.',
				legalBasis: 'Rule 121, Sec. 4 (written; grounds; affidavits or duly authenticated copies of documents; notice to the prosecutor); Rule 122, Sec. 6 and the fresh-period rule (Yu v. Samson-Tatad).',
				application: 'The oral request on day 8 was not a motion. The written motion on day 14 stated a ground but attached an unauthenticated photocopy and was not served on the prosecutor — enough to deny it. But a timely written motion for new trial still interrupts the period; F had a fresh 15 days from day 33, i.e., until day 48.',
				conclusion: 'Denial was proper; the day-45 notice of appeal is timely.'
			},
			verify: 'Whether a motion so defective that it is treated as a mere scrap of paper (e.g., no notice at all to the prosecutor) still interrupts the period is decided case by case — check recent rulings before relying on interruption.',
			keys: 'Sec. 4; Rule 122, Sec. 6; fresh period'
		}
	],
	memorize: [
		'Only a judgment of conviction; before finality; motion of the accused or court with his consent (Sec. 1)',
		'New trial: errors of law or irregularities during trial · newly discovered evidence (Sec. 2)',
		'Newly discovered: after trial · reasonable diligence · material · probably change the judgment',
		'Reconsideration: errors of law or fact in the judgment, no further proceedings (Sec. 3)',
		'Form: written · grounds · affidavits or authenticated documents · notice to the prosecutor (Sec. 4)',
		'Effects: errors → retake affected proceedings; new evidence → old evidence stands; always vacate and render a new judgment (Sec. 6)',
		'Fresh 15-day period after denial; retrial within 30 days (up to 180)'
	],
	flashcards: [
		['Who may move for new trial in a criminal case?', 'The accused; the court on its own only with his consent.'],
		['Grounds for new trial?', 'Errors of law or irregularities during trial prejudicial to the accused; newly discovered evidence.'],
		['Ground for reconsideration?', 'Errors of law or fact in the judgment requiring no further proceedings.'],
		['Four requisites of newly discovered evidence?', 'Discovered after trial; not discoverable with reasonable diligence; material; would probably change the judgment.'],
		['What must accompany a motion based on new evidence?', 'Affidavits of the witnesses or duly authenticated copies of the documents.'],
		['To whom is notice given?', 'The prosecutor.'],
		['Effect of grant on new evidence?', 'Old evidence stands; new evidence added; judgment vacated.'],
		['Effect of grant on errors or irregularities?', 'Affected proceedings and evidence set aside and taken anew.'],
		['Appeal period after denial?', 'Fresh 15 days from notice of denial (Yu v. Samson-Tatad).'],
		['When must a new trial start?', 'Within 30 days from notice of the order; extendible to 180 days (Rule 119, Sec. 5).']
	],
	oral: [
		['"Distinguish new trial from reconsideration."', 'Both are remedies of the accused against a conviction before finality. New trial addresses errors or irregularities in the trial, or newly discovered evidence, and involves taking evidence. Reconsideration addresses errors of law or fact in the judgment that can be fixed on the existing record.'],
		['"Can the prosecution move for a new trial?"', 'No. Rule 121 applies only to judgments of conviction, on motion of the accused. A new trial against an acquitted accused would violate double jeopardy; the State\'s only remedy is certiorari for grave abuse.'],
		['"What is newly discovered evidence?"', 'Evidence discovered after trial, which the accused could not have discovered and produced at trial with reasonable diligence, which is material, and which would probably change the judgment if admitted.']
	],
	checklist: [
		'I can list the five pre-finality remedies and who initiates each.',
		'I can state both grounds for new trial and the ground for reconsideration.',
		'I can apply the four requisites of newly discovered evidence.',
		'I can state the formal requirements of the motion.',
		'I can state the effects of a grant on each ground.',
		'I can compute the appeal period after denial (fresh period).'
	],
	sheet: [
		'<b>Who/when (Sec. 1):</b> conviction only · before finality (15 days) · accused moves, or court with his consent · prosecution never.',
		'<b>New trial (Sec. 2):</b> errors of law/irregularities during trial · newly discovered evidence (after trial · diligence · material · probably change).',
		'<b>Reconsideration (Sec. 3):</b> errors of law or fact in the judgment, no further proceedings.',
		'<b>Form (Sec. 4):</b> written · grounds · affidavits/authenticated documents · notice to the prosecutor. <b>Hearing (Sec. 5):</b> discretionary.',
		'<b>Effects (Sec. 6):</b> errors → retake affected proceedings; new evidence → old evidence stands; always vacate the judgment.',
		'<b>Periods:</b> resolve in 10 days (2017 Guidelines); retrial in 30 (≤180) days; fresh 15 days to appeal after denial.'
	],
	watchFor: `<strong>Watch for: who is asking, and what the fix needs.</strong>
<ul>
<li>Is the judgment a conviction? Is the movant the accused? If the court acted alone, did the accused consent?</li>
<li>Does correcting the error need new evidence (new trial) or only a second look (reconsideration)?</li>
<li>Was the "new" evidence really undiscoverable at trial? Are affidavits attached?</li>
<li>After denial, count a fresh 15 days from notice.</li>
</ul>`
};
