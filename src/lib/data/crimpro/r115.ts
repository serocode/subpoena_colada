import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 115 — Rights of the Accused. One section with nine paragraphs, each discussed as its own "section". */
export const r115: RuleChapter = {
	id: 'r115',
	n: 115,
	title: 'Rights of the Accused',
	short: 'R115 Rights of the Accused',
	tiu: 'pp. 136–146',
	plain: `Rule 115 lists the nine rights every accused has at trial: to be presumed innocent; to know exactly what he is charged with; to be present and defended by a lawyer; to testify (or stay silent without it being held against him); not to be forced to incriminate himself; to face and cross-examine the witnesses against him; to compel witnesses and evidence in his favor; to a speedy, impartial and public trial; and to appeal. Most mirror the Bill of Rights. Some can be waived (presence at trial, the right to testify), some carry conditions (trial in absentia needs arraignment, notice and unjustified absence).`,
	purpose: `To implement Art. III, Secs. 14, 16 and 17 of the Constitution and make them operational in the trial court.`,
	stage: `"In all criminal prosecutions" — from arraignment to promulgation for presence and counsel; through trial for confrontation, compulsory process and speedy trial; and after judgment for appeal. The right to speedy disposition (Const., Art. III, Sec. 16) also reaches preliminary investigation.`,
	questions: [
		'What are the nine rights of the accused at trial?',
		'What does the presumption of innocence require, and how does it interact with the presumption of regularity?',
		'When may the accused be tried in absentia, and when must he be present?',
		'When must the court appoint counsel de officio?',
		'How does the right against self-incrimination differ for an accused and for an ordinary witness?',
		'When may testimony from another proceeding be used against the accused?',
		'How are the rights to speedy trial and speedy disposition violated, and what is the remedy?'
	],
	relations: `The right to be informed is implemented by ${ruleLink('r110')} (sufficiency of the information) and ${ruleLink('r116')} (arraignment and bill of particulars). Presence and trial in absentia connect to ${ruleLink('r114')} (bail conditions) and ${ruleLink('r120')} (promulgation in absentia). Compulsory process and conditional examination are in ${ruleLink('r119')} (Secs. 12–15). Speedy trial time limits and exclusions are in ${ruleLink('r116')} (Sec. 1[g]) and ${ruleLink('r119')} (Secs. 1–10).`,
	principles: [
		'<b>The accused\'s rights are personal</b> and, except where the Constitution or the Rules forbid, may be waived.',
		'<b>Presumption of innocence prevails over the presumption of regularity</b> in the performance of official duty (Tiu, p. 137).',
		'<b>Equipoise rule</b>: when the evidence is evenly balanced, the scales tilt toward the accused (People v. Erguiza, in Tiu).',
		'<b>Trial in absentia</b> requires arraignment, due notice and unjustified absence (Const., Art. III, Sec. 14[2]).',
		'<b>Speedy trial and speedy disposition are relative</b>: vexatious, capricious and oppressive delay, judged by length, reasons, assertion and prejudice.'
	],
	sections: [
		{
			n: '1(a)',
			title: 'Presumption of innocence',
			text: `"To be presumed innocent until the contrary is proved beyond reasonable doubt."`,
			plain: `The State must prove guilt beyond reasonable doubt; the accused does not have to prove innocence.`,
			reqs: `Proof beyond reasonable doubt of every element and of identity.`,
			who: `Every accused; the prosecution bears the burden.`,
			effect: `Where circumstances yield two inferences, one consistent with innocence, the inference of innocence prevails; evenly balanced evidence results in acquittal (equipoise rule — People v. Erguiza, in Tiu). The presumption of regularity of official acts cannot prevail over it.`,
			cases: `<i>People v. Erguiza</i> (equipoise rule, in Tiu).`,
			hypo: `In a buy-bust case, the only proof of the chain of custody is the officers' testimony with unexplained gaps. The court cannot fill the gaps with the presumption of regularity; the presumption of innocence controls.`,
			trap: `The presumption arises when a person is charged — i.e., an accused. It does not mean the accused may stay silent and win automatically; once the prosecution makes a prima facie case, the burden of evidence shifts.`
		},
		{
			n: '1(b)',
			title: 'Right to be informed of the nature and cause of the accusation',
			text: `"To be informed of the nature and cause of the accusation against him."`,
			plain: `He must know exactly what he is accused of — through a sufficient information read to him in a language he understands.`,
			reqs: `A sufficient information (Rule 110, Secs. 6–12); arraignment in a known language or dialect (Rule 116, Sec. 1).`,
			effect: `Conviction for an offense not charged or not necessarily included violates the right (Rule 120, Sec. 4). Missing averments may be cured when the complaint or the prosecutor's resolution containing them is attached to the information and forms part of the record (Olivarez v. People, 2005 — rule on substantial compliance, in Tiu).`,
			cases: `${caseLink('olivarez', 'Olivarez v. People (2005)')}; ${caseLink('solar', 'People v. Solar (2019)')}.`,
			hypo: `An information for acts of lasciviousness omits the victim's minority, but the prosecutor's resolution attached to it states her age. Under Olivarez, the accused cannot claim he was not informed — subject to the waiver rule in Solar for defectively stated qualifying circumstances.`,
			trap: `The remedy for a vague information is a motion for bill of particulars or to quash before plea; waiting until after conviction usually fails.`
		},
		{
			n: '1(c)',
			title: 'Right to be present and to defend in person and by counsel; trial in absentia',
			text: `"To be present and defend in person and by counsel at every stage of the proceedings, from arraignment to promulgation of the judgment." The accused may waive his presence at the trial pursuant to the stipulations in his bail, unless his presence is specifically ordered for identification. "The absence of the accused without justifiable cause at the trial of which he had notice shall be considered a waiver of his right to be present thereat." When an accused under custody escapes, he waives his presence "on all subsequent trial dates until custody over him is regained." Upon motion, he may defend himself in person when it sufficiently appears that he can properly protect his rights without counsel.`,
			plain: `He may attend every stage and must be defended by a lawyer. If he skips trial without reason after notice, or escapes, the trial goes on without him. He may represent himself only if the court is satisfied he can.`,
			reqs: `Trial in absentia: (1) arraignment; (2) due notice; (3) unjustified absence (Const., Art. III, Sec. 14[2]).`,
			who: `Accused; counsel de parte or de officio; court.`,
			when: `From arraignment to promulgation.`,
			exceptions: `Presence is required (1) at arraignment and plea; (2) during trial when ordered for identification; (3) at promulgation, except for light offenses, where he may appear through counsel or a representative (Tiu, citing People v. de Grano).`,
			effect: `Absence before arraignment: the case cannot proceed (no trial in absentia without arraignment). Absence on a trial day: waiver for that day. Escape after arraignment: waiver for all subsequent dates. Absence at promulgation without justification: promulgation in absentia and loss of remedies unless he surrenders and moves for leave within 15 days (Rule 120, Sec. 6).`,
			cases: `${caseLink('libuit', 'Libuit v. People (2005)')}; <i>Tamayo v. People</i> (2008) and <i>Andrada v. People</i> (2005) on negligence of counsel (in Tiu).`,
			hypo: `After arraignment, X jumps bail. The prosecution presents its evidence over three months; X is tried and convicted in absentia. Valid: arraigned, notified (through the address in his bail), unjustified absence.`,
			trap: `Counsel de officio is <b>mandatory at arraignment</b>; during trial, the court has no duty to appoint one if the accused proceeded with counsel of his choice who later fails to appear (Libuit). But under the 2017 Guidelines, if counsel de parte is absent the hearing proceeds with a counsel de officio appointed by the court.`,
			update: `2017 Revised Guidelines, III.13(b): "In the absence of the counsel de parte, the hearing shall proceed upon appointment by the court of a counsel de officio." III.3: if a party does not qualify for PAO, the IBP local chapter provides free legal assistance.`
		},
		{
			n: '1(d)',
			title: 'Right to testify as a witness in his own behalf',
			text: `"To testify as a witness in his own behalf but subject to cross-examination on matters covered by direct examination. His silence shall not in any manner prejudice him."`,
			plain: `He may testify, but then he can be cross-examined on what he said. If he chooses silence, it cannot be held against him.`,
			effect: `Cross-examination is limited to matters covered by direct examination (and matters connected with them). No adverse inference from silence.`,
			hypo: `The accused testifies only on his alibi. On cross, the prosecutor asks about an unrelated robbery. Objection — beyond the scope and, as to a different offense, protected by the right against self-incrimination (Ayson).`,
			trap: `The prosecutor may not comment on the accused's failure to testify as evidence of guilt.`
		},
		{
			n: '1(e)',
			title: 'Right against self-incrimination',
			text: `"To be exempt from being compelled to be a witness against himself."`,
			plain: `He cannot be forced to give testimonial evidence against himself. He can refuse to take the stand at all.`,
			reqs: `Compulsion; testimonial (or communicative) evidence — oral testimony, or acts requiring the use of intelligence and attention (e.g., creating a handwriting sample — Beltran v. Samson).`,
			who: `Natural persons only (it is personal); applies in all proceedings, but its scope differs: an accused may refuse to testify altogether, an ordinary witness may only refuse particular incriminating questions (People v. Ayson).`,
			exceptions: `Purely mechanical acts or physical evidence (e.g., fingerprinting, being photographed) are not covered. The right is waivable — by testifying or by failing to object.`,
			effect: `If he testifies, he may be cross-examined on matters on direct and connected matters; but he may refuse to answer a question that would incriminate him for a <b>different</b> offense (Ayson).`,
			cases: `${caseLink('ayson', 'People v. Ayson (1989)')}; <i>Beltran v. Samson</i> (handwriting).`,
			hypo: `In a falsification case, the court orders the accused to write a passage so the prosecution can compare his handwriting. He may refuse: writing requires intelligence and attention and creates evidence that did not exist (Beltran v. Samson).`,
			trap: `Custodial-investigation rights (Art. III, Sec. 12) are distinct: they protect a person under investigation before the case is filed; Rule 115(e) protects the accused at trial.`
		},
		{
			n: '1(f)',
			title: 'Right to confront and cross-examine witnesses',
			text: `"To confront and cross-examine the witnesses against him at the trial." Either party may use the testimony of a witness who is deceased, out of or cannot with due diligence be found in the Philippines, unavailable or otherwise unable to testify, given in another case or proceeding, judicial or administrative, involving the same parties and subject matter, the adverse party having had the opportunity to cross-examine him.`,
			plain: `Witnesses against him must testify in his presence and be open to cross-examination. Testimony from an earlier case may be used only if the witness is now unavailable, the parties and subject matter are the same, and there was an opportunity to cross-examine.`,
			reqs: `Former testimony: (1) witness deceased, abroad or not found, unavailable or unable; (2) same parties and subject matter; (3) adverse party had the opportunity to cross-examine (Tiu, p. 141).`,
			effect: `Testimony not subjected to cross-examination through no fault of the accused may be stricken. Opportunity to cross-examine, not actual cross-examination, is enough.`,
			cases: `Rule 130, Sec. 47 (testimony or deposition at a former proceeding), reproduced in Tiu; the view reported in Tiu that depositions in another proceeding cannot be used in a criminal case because Rule 115(f) does not mention depositions.`,
			hypo: `The victim testified on direct in the criminal case but died before cross-examination. Her direct testimony may be stricken unless the delay in cross-examination was due to the defense.`,
			trap: `"Opportunity" is the test: a party who could have cross-examined but did not cannot complain.`,
			update: `The Revised Rules on Evidence (A.M. No. 19-08-15-SC, effective May 1, 2020) renumbered several provisions; check the current section number of the former-testimony rule before citing "Rule 130, Sec. 47."`,
			verify: `Section number under the 2019 amendments not confirmed.`
		},
		{
			n: '1(g)',
			title: 'Right to compulsory process',
			text: `"To have compulsory process issued to secure the attendance of witnesses and production of other evidence in his behalf."`,
			plain: `He can make the court subpoena his witnesses and documents.`,
			reqs: `Request for subpoena ad testificandum or duces tecum; conditional examination of defense witnesses when they are sick, infirm, more than 100 km away without means, or otherwise unavailable (Rule 119, Secs. 12–13).`,
			effect: `Denial of compulsory process for material evidence may violate due process.`,
			hypo: `A defense witness lives in a remote island more than 100 km away and cannot afford to travel. The accused may move for conditional examination (Rule 119, Sec. 12) before any judge, or a member of the Bar designated by the judge.`,
			trap: `Conditional examination of a <b>prosecution</b> witness may be done only before the court where the case is pending (Rule 119, Sec. 15); for a <b>defense</b> witness, before any judge or a designated lawyer (Sec. 13).`
		},
		{
			n: '1(h)',
			title: 'Right to speedy, impartial and public trial',
			text: `"To have speedy, impartial and public trial."`,
			plain: `No unreasonable delay; a neutral judge; proceedings open to the public.`,
			reqs: `Time limits: arraignment within 30 days from the court's acquisition of jurisdiction (Rule 116, Sec. 1[g]); trial within 30 days from receipt of the pre-trial order (Rule 119, Sec. 1); trial completed within 180 days from the first day (Rule 119, Sec. 2) — minus excluded delays (Rule 119, Sec. 3). For detained accused: A.M. No. 12-11-2-SC time limits.`,
			who: `Only the accused in a criminal case may invoke the right to speedy trial (Tiu, p. 143).`,
			exceptions: `Excluded delays (Rule 119, Sec. 3). Exclusion of the public is allowed when the evidence is offensive to decency or public morals, or on the accused's motion (Rule 119, Sec. 21).`,
			effect: `Remedy: motion to dismiss before trial (Rule 119, Sec. 9); failure to move before trial waives it. Dismissal for violation of speedy trial is equivalent to an acquittal and bars reprosecution even though the accused moved for it (Tiu, citing Condrada v. People).`,
			cases: `${caseLink('perez-people', 'Perez v. People (2008)')}; <i>Andres v. Cacdac</i> (the accused should first ask for trial, then move to dismiss if the prosecution cannot proceed); <i>Mari v. Gonzales</i> (balancing factors) — all in Tiu.`,
			hypo: `The prosecution fails to present any witness for eight consecutive settings over a year, each time asking for postponement. The accused objects and asks for trial each time; after the eighth, he moves to dismiss. Dismissal is warranted and bars a new prosecution.`,
			trap: `Speedy trial is a <b>relative</b> concept; exceeding the numerical limits is not automatically a violation if the delay is excluded or justified (Domondon; Olbes v. Buemio, in Tiu).`,
			update: `2017 Revised Guidelines for Continuous Trial: postponements prohibited except for acts of God, force majeure or physical inability of a witness; one-day examination rule; strict periods.`
		},
		{
			n: '1(i)',
			title: 'Right to appeal',
			text: `"To appeal in all cases allowed and in the manner prescribed by law."`,
			plain: `He may appeal when the law allows, following the procedure (Rules 122–125).`,
			effect: `The right to appeal is statutory; it is lost by escape or jumping bail during appeal, and by unjustified absence at promulgation unless he surrenders and moves for leave within 15 days (Rule 120, Sec. 6).`,
			hypo: `An accused convicted in absentia who does not surrender within 15 days loses the right to appeal.`,
			trap: `Appeal is a statutory, not a natural, right — but once granted by law, it is part of due process.`
		}
	],
	reqs: [
		{
			name: 'Trial in absentia',
			source: 'Const., Art. III, Sec. 14(2); Rule 115, Sec. 1(c); Rule 114, Sec. 2(c)',
			what: 'Trial proceeds without the accused.',
			who: 'Court, on the accused\'s waiver by unjustified absence.',
			when: 'After arraignment only.',
			missing: 'Without arraignment, the trial cannot proceed; without notice or with justified absence, proceedings in his absence violate due process.',
			defect: 'Not waivable',
			defectNote: 'The requisite of prior arraignment is constitutional; the accused cannot waive it in advance. The right to be present itself is waivable.'
		},
		{
			name: 'Assistance of counsel at arraignment',
			source: 'Rule 115, Sec. 1(c); Rule 116, Secs. 6–8',
			what: 'Counsel de parte or de officio present at arraignment.',
			who: 'Court must inform the accused of his right to counsel and appoint counsel de officio if he has none.',
			when: 'At arraignment.',
			missing: 'A plea without counsel (absent a valid waiver allowed by the court) is void; arraignment must be redone.',
			defect: 'Not waivable',
			defectNote: 'At arraignment the duty to appoint counsel de officio is mandatory. During trial, absence of counsel of choice does not oblige the court to appoint another (Libuit), though the 2017 Guidelines direct appointment of counsel de officio so the hearing may proceed.'
		},
		{
			name: 'Use of former testimony',
			source: 'Rule 115, Sec. 1(f); Rules on Evidence (former testimony)',
			what: 'Testimony given in another case or proceeding.',
			who: 'Either party may offer it.',
			when: 'At trial, if the witness is now unavailable.',
			missing: 'Without the three requisites, the testimony is hearsay and inadmissible.',
			defect: 'Waivable',
			defectNote: 'Failure to object when offered waives the objection, as with other hearsay.'
		},
		{
			name: 'Motion to dismiss for violation of speedy trial',
			source: 'Rule 119, Secs. 1–9; Rule 116, Sec. 1(g); RA 8493',
			what: 'A motion to dismiss on the ground that the accused was not brought to trial within the time limits.',
			who: 'Accused (burden of proof); prosecution (burden of going forward to show excluded periods).',
			when: 'Before trial.',
			missing: 'Failure to move before trial waives the right to dismiss under Sec. 9.',
			defect: 'Waivable',
			defectNote: 'Expressly waived by not moving before trial (Rule 119, Sec. 9). Constitutional speedy-trial claims based on oppressive delay during trial are judged by the balancing test.'
		}
	],
	enums: [
		{
			id: 'E115.1',
			name: 'Rights of the accused at the trial',
			source: 'Rule 115, Sec. 1(a)–(i)',
			kind: 'rule',
			ordered: false,
			memorize: true,
			lead: 'Under Rule 115, Sec. 1, the accused is entitled',
			items: [
				{ t: 'To be presumed innocent until the contrary is proved beyond reasonable doubt', d: 'The prosecution bears the burden; equipoise favors the accused.', s: 'presumption of innocence' },
				{ t: 'To be informed of the nature and cause of the accusation', d: 'Through a sufficient information and arraignment in a known language.', s: 'to be informed' },
				{ t: 'To be present and defend in person and by counsel at every stage', d: 'From arraignment to promulgation; waivable at trial; trial in absentia allowed after arraignment.', s: 'presence and counsel' },
				{ t: 'To testify as a witness in his own behalf', d: 'Subject to cross on matters covered by direct; silence not prejudicial.', s: 'to testify; silence not prejudicial' },
				{ t: 'To be exempt from being compelled to be a witness against himself', d: 'May refuse to take the stand altogether.', s: 'against self-incrimination' },
				{ t: 'To confront and cross-examine the witnesses against him', d: 'Former testimony usable only if the witness is unavailable, same parties and subject matter, with opportunity to cross.', s: 'confrontation and cross-examination' },
				{ t: 'To have compulsory process', d: 'Subpoenas; conditional examination of defense witnesses.', s: 'compulsory process' },
				{ t: 'To a speedy, impartial and public trial', d: 'Time limits under Rules 116 and 119; motion to dismiss before trial.', s: 'speedy, impartial and public trial' },
				{ t: 'To appeal in all cases allowed and in the manner prescribed by law', d: 'Statutory; may be lost by escape or by absence at promulgation.', s: 'appeal' }
			],
			memory: '<b>"I Hope I Pass This Subject, Can Strangers Assist?"</b> — Innocence · Informed · Presence/counsel · Testify · Self-incrimination · Confront · Subpoena (compulsory process) · Speedy trial · Appeal.',
			tip: 'Nine items. Give each one sentence and a qualifier (e.g., trial in absentia for presence; scope of cross for testifying).',
			question: 'Enumerate the rights of the accused at the trial under Rule 115 and explain each briefly.'
		},
		{
			id: 'E115.2',
			name: 'Requisites of trial in absentia',
			source: 'Const., Art. III, Sec. 14(2); Tiu, pp. 138–139',
			kind: 'law',
			memorize: true,
			ordered: true,
			lead: 'Trial in absentia is proper when',
			items: [
				{ t: 'The accused has been arraigned', d: 'Before arraignment, the court has no plea to try.', s: 'arraigned' },
				{ t: 'He has been duly notified of the trial or hearing', d: 'Notice to the address in his bail or to counsel.', s: 'duly notified' },
				{ t: 'His failure to appear is unjustified', d: 'Illness, force majeure and similar causes justify absence.', s: 'absence unjustified' }
			],
			question: 'What are the requisites of trial in absentia?'
		},
		{
			id: 'E115.3',
			name: 'When the presence of the accused is required',
			source: 'Rule 115, Sec. 1(c); Rule 116, Sec. 1(b); Rule 120, Sec. 6 — as organized in Tiu, p. 139',
			kind: 'notes',
			memorize: true,
			lead: 'The accused must be present',
			items: [
				{ t: 'At arraignment and plea', d: 'Whether he pleads guilty or not guilty.', s: 'arraignment and plea' },
				{ t: 'During trial, when ordered for identification', d: 'Even if he waived presence in his bail.', s: 'identification' },
				{ t: 'At promulgation of judgment', d: 'Except for light offenses, where counsel or a representative may appear.', s: 'promulgation (except light offenses)' }
			],
			question: 'When is the presence of the accused required?'
		},
		{
			id: 'E115.4',
			name: 'Rights of a suspect and of an accused regarding testimony (People v. Ayson)',
			source: 'People v. Ayson, G.R. No. 85215, July 7, 1989 (in Tiu, pp. 140–141)',
			kind: 'case',
			lead: 'Under Ayson, the person has these rights',
			items: [
				{ t: 'Before the case is filed, under custodial interrogation: to remain silent and to counsel, to be informed of them, freedom from coercion, and exclusion of evidence obtained in violation', d: 'Art. III, Sec. 12.', s: 'custodial: silence, counsel, information, no coercion, exclusion' },
				{ t: 'After filing: to refuse to be a witness', d: 'He may refuse to take the stand at all.', s: 'refuse to be a witness' },
				{ t: 'Not to have any prejudice result from the refusal', d: 'His silence may not be used against him (Rule 115, Sec. 1[d]).', s: 'no prejudice from refusal' },
				{ t: 'To testify in his own behalf, subject to cross-examination', d: 'If he takes the stand, he may be cross-examined on matters covered by his direct testimony (Rule 115, Sec. 1[d]).', s: 'testify, subject to cross' },
				{ t: 'While testifying, to refuse a specific question tending to incriminate him for another crime', d: 'Not for the crime charged.', s: 'refuse questions on other crimes' }
			],
			question: 'What are the rights of a person suspected and later charged with a crime as to testifying or producing evidence (People v. Ayson)?'
		},
		{
			id: 'E115.5',
			name: 'Requisites for using testimony given in another proceeding',
			source: 'Rule 115, Sec. 1(f); Tiu, p. 141',
			kind: 'rule',
			lead: 'Testimony given in another case may be used when',
			items: [
				{ t: 'The witness is deceased, out of or cannot with due diligence be found in the Philippines, unavailable, or otherwise unable to testify', d: 'Unavailability is why the exception exists: the earlier testimony replaces live testimony that can no longer be had.', s: 'witness unavailable' },
				{ t: 'The other case involved the same parties and subject matter', d: 'Judicial or administrative.', s: 'same parties and subject matter' },
				{ t: 'The adverse party had the opportunity to cross-examine him', d: 'Opportunity suffices.', s: 'opportunity to cross-examine' }
			],
			question: 'When may the testimony of a witness given in another proceeding be used against the accused?'
		},
		{
			id: 'E115.6',
			name: 'Factors in determining violation of speedy trial or speedy disposition',
			source: 'Mari v. Gonzales; Yulo v. People (in Tiu, pp. 144–145); Cagang v. Sandiganbayan (2018)',
			kind: 'case',
			memorize: true,
			lead: 'Courts weigh',
			items: [
				{ t: 'Length of the delay', d: 'Not mere mathematical reckoning.', s: 'length of delay' },
				{ t: 'Reasons for the delay', d: 'Complexity, attributable to the accused, or to the State.', s: 'reasons' },
				{ t: 'Assertion or failure to assert the right', d: 'Timely assertion matters (Cagang).', s: 'assertion of the right' },
				{ t: 'Prejudice to the accused', d: 'Oppressive pre-trial incarceration, anxiety, impairment of defense.', s: 'prejudice' }
			],
			question: 'What factors determine whether the right to speedy trial or speedy disposition has been violated?'
		},
		{
			id: 'E115.7',
			name: 'Speedy trial time limits',
			source: 'Rule 116, Sec. 1(g); Rule 119, Secs. 1, 2, 5, 6; RA 8493; A.M. No. 12-11-2-SC, Sec. 8 — as organized in Tiu, pp. 143–144',
			kind: 'notes',
			ordered: true,
			lead: 'The time limits are',
			items: [
				{ t: 'Arraignment within 30 days', d: 'From filing of the information or from the accused\'s appearance before the court, whichever is later (Rule 116, Sec. 1[g]).', s: 'arraignment — 30 days' },
				{ t: 'Trial within 30 days from receipt of the pre-trial order', d: 'Rule 119, Sec. 1.', s: 'trial starts — 30 days from pre-trial order' },
				{ t: 'Trial completed within 180 days from its first day', d: 'Rule 119, Sec. 2, minus excluded delays.', s: 'trial ends — 180 days' },
				{ t: 'Retrial after new trial within 30 days (extendible to 180) from finality of the order', d: 'Rule 119, Sec. 5.', s: 'retrial — 30 (max 180) days' },
				{ t: 'Detained accused (A.M. No. 12-11-2-SC): raffle 3 days; arraignment 10 days from raffle; pre-trial 10 days from arraignment; trial set within 30 days from pre-trial; trial 180 days (60 days by judicial affidavit)', d: 'A faster timetable for those who cannot post bail. Read it with the 2017 Revised Guidelines for Continuous Trial, which set their own periods (see Rule 119).', s: 'detained accused — 3/10/10/30/180' }
			],
			exceptions: 'Excluded delays under Rule 119, Sec. 3. Tiu also lists 80 days from arraignment to trial — the last of the transitional limits in Rule 119, Sec. 6.',
			verify: 'Rule 119, Sec. 6 set 180, 120 and 80 days for the three years after RA 8493 took effect; the 80-day figure was the third-year transitional limit.',
			question: 'What are the time limits under the speedy-trial rules?'
		}
	],
	comparisons: [
		{
			id: 'C115.1',
			title: 'Right to speedy trial vs. right to speedy disposition of cases',
			a: 'Speedy trial',
			b: 'Speedy disposition',
			meaning: ['Right of the accused to be tried without unreasonable delay.', 'Right of any party to prompt resolution of his case before any tribunal.'],
			basis: ['Const., Art. III, Sec. 14(2); Rule 115, Sec. 1(h); Rule 119; RA 8493', 'Const., Art. III, Sec. 16'],
			who: ['Only the accused in a criminal case.', 'Any party — before judicial, quasi-judicial or administrative bodies (including preliminary investigation).'],
			when: ['Before trial, by motion to dismiss (Rule 119, Sec. 9).', 'At any time while the case is pending.'],
			reqs: ['Time limits exceeded (minus exclusions), or vexatious, capricious and oppressive delay.', 'Vexatious, capricious and oppressive delay; balancing test; Cagang guidelines.'],
			time: ['30 days to arraignment; 30 days to trial; 180 days of trial.', 'Periods set by the rules of the tribunal (e.g., Ombudsman); otherwise reasonableness.'],
			exceptions: ['Excluded delays (Rule 119, Sec. 3).', 'Fact-finding before the formal complaint excluded (Cagang).'],
			effect: ['Dismissal equivalent to acquittal; double jeopardy attaches even though the accused moved for it.', 'Dismissal of the case; civil liability may still be pursued (Coscolluela).'],
			trap: ['Thinking the accused must not ask for trial first (he should — Andres v. Cacdac).', 'Thinking the respondent must follow up his case (he need not — Coscolluela; but Cagang requires timely assertion).'],
			decisive: 'Scope: speedy trial covers the criminal trial; speedy disposition covers all proceedings in any forum, including preliminary investigation.',
			hypo: 'A complaint sits with the Ombudsman for six years (no trial yet): only speedy disposition applies. After the information is filed, the prosecution repeatedly fails to present witnesses: speedy trial applies, and dismissal bars a new prosecution.'
		},
		{
			id: 'C115.2',
			title: 'Accused vs. ordinary witness — right against self-incrimination',
			a: 'Accused',
			b: 'Ordinary witness',
			meaning: ['May refuse to testify altogether.', 'Must take the stand when subpoenaed; may refuse only particular incriminating questions.'],
			basis: ['Rule 115, Sec. 1(d)–(e); People v. Ayson', 'Const., Art. III, Sec. 17; Rules on Evidence'],
			who: ['The accused in the case.', 'Any witness, including a party in a civil case.'],
			when: ['From filing to the end of trial.', 'When the incriminating question is asked.'],
			reqs: ['Invoke by not taking the stand.', 'Invoke question by question.'],
			time: ['—', 'At the time the question is put.'],
			exceptions: ['If he testifies, he may be cross-examined on matters covered by direct; may refuse questions about other crimes.', 'Immunity statutes may compel testimony.'],
			effect: ['No prejudice may result from silence.', 'Refusal limited to the specific question.'],
			trap: ['Saying an accused who testifies may refuse to answer questions about the crime charged.', 'Saying a witness may refuse to be sworn.'],
			decisive: 'The accused may refuse to be a witness at all; the witness may refuse only specific questions.',
			hypo: 'In a murder trial, the accused declines to testify — no adverse inference. His co-worker, subpoenaed by the prosecution, must testify, but may refuse to answer whether he himself bought the gun illegally.'
		},
		{
			id: 'C115.3',
			title: 'Trial in absentia vs. instances when presence is required',
			a: 'Trial in absentia',
			b: 'Required presence',
			meaning: ['Trial proceeding without the accused after waiver by unjustified absence.', 'Stages at which the accused must personally appear.'],
			basis: ['Const., Art. III, Sec. 14(2); Rule 115, Sec. 1(c); Rule 114, Sec. 2(c)', 'Rule 116, Sec. 1(b); Rule 115, Sec. 1(c); Rule 120, Sec. 6'],
			who: ['Court, on the accused\'s waiver.', 'Accused (personally).'],
			when: ['After arraignment, on trial dates.', 'Arraignment and plea; identification; promulgation (except light offenses).'],
			reqs: ['Arraignment; notice; unjustified absence.', 'Personal appearance.'],
			time: ['For the day missed; for all later dates if he escapes.', '—'],
			exceptions: ['Presence may be ordered for identification.', 'Light offenses: promulgation through counsel or representative.'],
			effect: ['Trial valid; judgment may follow.', 'Absence at arraignment stalls the case; absence at promulgation leads to promulgation in absentia and loss of remedies unless he surrenders within 15 days.'],
			trap: ['Trying an accused who jumped bail before arraignment.', 'Thinking promulgation can never be in absentia (it can, under Rule 120, Sec. 6).'],
			decisive: 'Arraignment: before it, no trial in absentia; after it, absence is a waiver.',
			hypo: 'Y is arraigned, then disappears. The trial proceeds and Y is convicted; promulgation is made by recording the judgment in the criminal docket and serving a copy at his last known address. Y loses his remedies unless he surrenders and moves for leave within 15 days.'
		},
		{
			id: 'C115.4',
			title: 'Presumption of innocence vs. presumption of regularity in the performance of official duty',
			a: 'Presumption of innocence',
			b: 'Presumption of regularity',
			meaning: ['The accused is innocent until proved guilty beyond reasonable doubt.', 'Public officers are presumed to have performed their duties regularly.'],
			basis: ['Const., Art. III, Sec. 14(2); Rule 115, Sec. 1(a)', 'Rules on Evidence (disputable presumptions)'],
			who: ['Benefits the accused.', 'Benefits the State\'s officers.'],
			when: ['From the filing of the charge.', 'When there is no evidence of irregularity.'],
			reqs: ['Overcome only by proof beyond reasonable doubt.', 'Overcome by evidence of irregularity.'],
			time: ['Until conviction becomes final.', '—'],
			exceptions: ['—', 'Does not apply where there is evidence of irregularity (e.g., broken chain of custody).'],
			effect: ['Prevails in a conflict (constitutional).', 'Cannot by itself support a conviction.'],
			trap: ['Convicting on the presumption of regularity alone.', 'Treating the presumption of innocence as a reason to ignore credible testimony.'],
			decisive: 'In a conflict, the constitutional presumption of innocence prevails over the evidentiary presumption of regularity.',
			hypo: 'In a drug case where the marking of the seized item was not done immediately and the officers offer no explanation, the court cannot presume regularity to cure the gap; the accused is acquitted.'
		}
	],
	cases: [
		{
			id: 'ayson',
			name: 'People v. Ayson',
			cite: 'G.R. No. 85215, July 7, 1989',
			from: 'Tiu',
			facts: 'Tiu reproduces the Court\'s statement of the rights of a person suspected and later charged with a crime.',
			issue: 'What is the scope of the right against self-incrimination of an accused as compared with an ordinary witness?',
			ruling: 'The accused may refuse to testify altogether; if he testifies, he may be cross-examined on matters stated in his direct and connected matters, but may refuse a question that would incriminate him for a different offense.',
			doctrine: 'An accused "can refuse to take the witness stand, be sworn, answer any question," and his refusal shall not prejudice him; an ordinary witness may only refuse particular incriminating questions. The rights before and after the case is filed are distinct (E115.4).',
			reasoning: 'The privilege protects against compulsion by the State; testifying is a waiver as to matters on direct.',
			rule: 'Const., Art. III, Secs. 12 and 17; Rule 115, Sec. 1(d)–(e).',
			hypo: 'An accused in a murder case testifies on alibi; on cross he must answer questions about his whereabouts that night but may refuse to answer whether he once stole a car.',
			examQ: 'Distinguish the right against self-incrimination of an accused from that of an ordinary witness.'
		},
		{
			id: 'olivarez',
			name: 'Olivarez v. People',
			cite: '2005 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'An information omitted an essential averment, which appeared in the complaint and the prosecutor\'s resolution attached to the record.',
			issue: 'Was the accused\'s right to be informed violated?',
			ruling: 'No.',
			doctrine: 'Rule on substantial compliance: when the complaint or resolution containing the missing averments is attached to the information and forms part of the record, the defect is cured and the accused cannot invoke violation of his right to be informed.',
			reasoning: 'The accused had access to the averments and was not misled.',
			rule: 'Rule 110, Secs. 6–9; Rule 115, Sec. 1(b).',
			hypo: 'The information omits that the victim was a minor, but the attached complaint states it; the minority may be considered (subject to Solar\'s waiver rules for qualifying circumstances).',
			examQ: 'May an omission in the information be cured by the complaint or resolution attached to it?',
			also: ['r110'],
			verify: 'G.R. number and facts not in Tiu; the case is commonly cited as Olivarez v. Court of Appeals (2005) — verify the title.'
		},
		{
			id: 'libuit',
			name: 'Libuit v. People',
			cite: '2005 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused went through arraignment and trial with counsel of his choice; when the defense was to present evidence, he appeared without counsel.',
			issue: 'Was the court obliged to appoint counsel de officio?',
			ruling: 'No.',
			doctrine: 'The court\'s duty to appoint counsel de officio for an accused without counsel is mandatory only at arraignment; there is no such duty where the accused proceeded with counsel of his choice and the counsel\'s absence is inexcusable.',
			reasoning: 'The accused is bound by his chosen counsel\'s conduct, absent gross negligence.',
			rule: 'Rule 115, Sec. 1(c); Rule 116, Sec. 6.',
			hypo: 'Counsel de parte fails to appear for the defense presentation. Under the 2017 Guidelines, the court may appoint counsel de officio so the hearing can proceed.',
			examQ: 'When is the court obliged to appoint counsel de officio?',
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'perez-people',
			name: 'Perez v. People',
			cite: 'G.R. No. 164763, February 12, 2008',
			from: 'Tiu',
			facts: 'Tiu does not summarize the facts; he flags the case as a comprehensive discussion of speedy trial.',
			issue: 'How is the right to speedy trial assessed?',
			ruling: 'By weighing the length of delay, reasons, assertion of the right and prejudice — not by mere mathematical reckoning.',
			doctrine: 'Speedy trial is a relative and flexible concept; vexatious, capricious and oppressive delay violates it.',
			reasoning: 'The balancing test adopted from comparative jurisprudence.',
			rule: 'Const., Art. III, Sec. 14(2); Rule 115, Sec. 1(h); Rule 119.',
			hypo: 'A two-year delay caused mostly by the accused\'s own motions does not violate the right.',
			examQ: 'What are the factors in determining whether the right to speedy trial was violated?',
			verify: 'Facts not given in Tiu; read the decision.'
		},
		{
			id: 'coscolluela',
			name: 'Coscolluela v. Sandiganbayan',
			cite: '2013 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'A preliminary investigation before the Ombudsman lasted years without action; the respondents did not follow up.',
			issue: 'Was the right to speedy disposition violated, and must the respondent follow up his case?',
			ruling: 'Yes, violated; the respondent has no duty to follow up.',
			doctrine: 'Any party may invoke speedy disposition before any tribunal; the State has the duty to expedite; dismissal on this ground results in acquittal, but civil liability may still be pursued in a separate case.',
			reasoning: 'A defendant has no duty to bring himself to trial.',
			rule: 'Const., Art. III, Sec. 16.',
			args: 'The prosecution argued that the respondents should have followed up; the Court rejected this (later refined by Cagang\'s requirement of timely assertion).',
			hypo: 'A respondent waits silently for eight years; after Cagang, his silence may count against him, unlike under Coscolluela.',
			examQ: 'Must the respondent follow up his case to invoke the right to speedy disposition?',
			also: ['r112'],
			verify: 'G.R. number not in Tiu. Compare with Cagang (2018), which requires timely assertion.'
		}
	],
	deadlines: [
		{ ref: 'Rule 116, Sec. 1(g); RA 8493', act: 'Arraign the accused', who: 'Court', period: '30 days', start: 'Filing of the information, or the accused\'s appearance before the court, whichever is later', exceptions: 'Excluded delays (Rule 119, Sec. 3); shorter periods for detained accused', effect: 'Ground for dismissal for denial of speedy trial (Rule 119, Sec. 9)', kind: 'constitutional' },
		{ ref: 'A.M. No. 12-11-2-SC, Sec. 8', act: 'Time limits for a detained accused', who: 'Court, prosecutor, defense counsel', period: 'Raffle within 3 days; arraign within 10 days of raffle; pre-trial within 10 days of arraignment (judicial affidavits within 20 days); trial set within 30 days of pre-trial; trial within 180 days (60 by judicial affidavit)', start: 'Filing of the information', exceptions: 'Excluded delays under Rule 119 and RA 8493', effect: 'Dismissal for denial of speedy trial (Sec. 9)', kind: 'constitutional' },
		{ ref: 'Rule 119, Sec. 9', act: 'Move to dismiss for denial of speedy trial', who: 'Accused', period: 'Before trial', start: '—', exceptions: '—', effect: 'Waived if not raised before trial; dismissal is subject to double jeopardy rules', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'An accused who jumped bail before arraignment may be tried in absentia.', right: 'Trial in absentia requires prior arraignment.', example: 'The case is archived until custody is regained.' },
		{ wrong: 'The court must always appoint counsel de officio when counsel of choice is absent at trial.', right: 'Mandatory only at arraignment (Libuit); under the 2017 Guidelines the court appoints counsel de officio so the hearing can proceed.', example: '—' },
		{ wrong: 'An accused who testifies may refuse to answer any incriminating question.', right: 'Only questions on a different offense; on the crime charged, he may be cross-examined on matters covered by direct (Ayson).', example: '—' },
		{ wrong: 'A handwriting sample can always be compelled.', right: 'Not when it requires the use of intelligence and attention to create evidence (Beltran v. Samson).', example: '—' },
		{ wrong: 'Former testimony is admissible if the witness was actually cross-examined.', right: 'Opportunity to cross-examine suffices; plus unavailability and identity of parties and subject matter.', example: '—' },
		{ wrong: 'A dismissal for violation of speedy trial, being on the accused\'s motion, does not bar reprosecution.', right: 'It is equivalent to an acquittal; double jeopardy attaches (Condrada, in Tiu).', example: '—' },
		{ wrong: 'Exceeding the numerical time limits automatically violates speedy trial.', right: 'Excluded delays and the balancing test apply (Perez; Olbes v. Buemio).', example: '—' },
		{ wrong: 'The presumption of regularity can support a conviction when the accused offers weak evidence.', right: 'The presumption of innocence prevails; the prosecution must prove guilt beyond reasonable doubt.', example: '—' },
		{ wrong: 'Speedy disposition applies only to courts.', right: 'Also to quasi-judicial and administrative bodies, including preliminary investigation (Art. III, Sec. 16).', example: '—' }
	],
	corrections: [
		{ old: 'Respondent need not follow up his case (Coscolluela, 2013).', fix: 'Cagang (2018, En Banc) requires timely assertion of the right; failure to raise it when the periods lapse may be treated as waiver.', source: 'Cagang v. Sandiganbayan, G.R. Nos. 206438 and 206458, July 31, 2018' },
		{ old: 'No rule on the absence of counsel de parte during trial.', fix: 'The 2017 Revised Guidelines direct the court to proceed with a counsel de officio when counsel de parte is absent.', source: 'A.M. No. 15-06-10-SC, III.13(b)' },
		{ old: 'Rule 130, Sec. 47 (former testimony).', fix: 'Renumbered in the 2019 Revised Rules on Evidence — check the current section.', source: 'A.M. No. 19-08-15-SC (effective May 1, 2020)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Rights', q: 'Enumerate the rights of the accused at the trial under Rule 115.', a: 'E115.1 — nine rights (a)–(i).', keys: 'Rule 115, Sec. 1' },
		{ cat: 'A', level: 2, topic: 'Trial in absentia', q: 'Give the requisites of trial in absentia and the instances when the accused\'s presence is required.', a: 'E115.2 (arraignment; due notice; unjustified absence) and E115.3 (arraignment and plea; identification; promulgation except for light offenses).', keys: 'Art. III, Sec. 14(2)' },
		{ cat: 'A', level: 3, topic: 'Self-incrimination', q: 'State the rights of a suspect and an accused regarding testifying or producing evidence as summarized in People v. Ayson.', a: 'E115.4.', keys: 'Ayson' },
		{ cat: 'A', level: 3, topic: 'Speedy trial', q: 'What factors determine whether the right to speedy trial or speedy disposition has been violated?', a: 'E115.6: length of delay; reasons; assertion; prejudice.', keys: 'balancing test' },
		{ cat: 'B', level: 3, topic: 'Speedy trial vs disposition', q: 'Distinguish the right to speedy trial from the right to speedy disposition of cases.', a: 'See C115.1.', keys: 'who; where; remedy; effect' },
		{ cat: 'B', level: 3, topic: 'Self-incrimination', q: 'Distinguish the right against self-incrimination of an accused from that of an ordinary witness.', a: 'See C115.2.', keys: 'refuse to testify vs refuse questions' },
		{ cat: 'B', level: 4, topic: 'Absentia', q: 'Distinguish trial in absentia from the instances when the presence of the accused is required.', a: 'See C115.3.', keys: 'arraignment' },
		{ cat: 'C', level: 1, topic: 'Presence', q: 'An accused may be tried in absentia even before arraignment if he was duly notified.', tf: false, short: 'False. Trial in absentia requires prior arraignment (Const., Art. III, Sec. 14[2]).', keys: 'arraignment' },
		{ cat: 'C', level: 1, topic: 'Silence', q: 'The accused\'s refusal to testify may be considered as evidence of guilt.', tf: false, short: 'False. "His silence shall not in any manner prejudice him" (Sec. 1[d]).', keys: 'Sec. 1(d)' },
		{ cat: 'C', level: 2, topic: 'Escape', q: 'An accused under custody who escapes after arraignment waives his right to be present only on the trial date immediately following his escape.', tf: false, short: 'False. He waives presence "on all subsequent trial dates until custody over him is regained" (Sec. 1[c]).', keys: 'Sec. 1(c)' },
		{ cat: 'C', level: 2, topic: 'Counsel', q: 'The court\'s duty to appoint counsel de officio is mandatory at arraignment.', tf: true, short: 'True (Libuit v. People; Rule 116, Sec. 6).', keys: 'arraignment' },
		{ cat: 'C', level: 2, topic: 'Self-incrimination', q: 'Compelling the accused to submit to fingerprinting violates his right against self-incrimination.', tf: false, short: 'False. Fingerprinting is a mechanical act, not testimonial; the right covers testimony and acts requiring intelligence and attention.', keys: 'mechanical act' },
		{ cat: 'C', level: 3, topic: 'Self-incrimination', q: 'An accused who takes the witness stand in his defense may refuse, on cross-examination, to answer questions on the crime charged that may incriminate him.', tf: false, short: 'False. He may be cross-examined on matters covered by his direct and connected matters; he may refuse only questions that would incriminate him for a different offense (Ayson).', keys: 'Ayson' },
		{ cat: 'C', level: 3, topic: 'Confrontation', q: 'Testimony given in a prior case is admissible against the accused only if he actually cross-examined the witness.', tf: false, short: 'False. Opportunity to cross-examine suffices, with unavailability of the witness and identity of parties and subject matter (Sec. 1[f]).', keys: 'opportunity' },
		{ cat: 'C', level: 3, topic: 'Speedy trial', q: 'A dismissal on the ground of violation of the right to speedy trial does not bar a new prosecution because the accused himself moved for dismissal.', tf: false, short: 'False. It is equivalent to an acquittal; double jeopardy attaches (Rule 119, Sec. 9; Condrada, in Tiu).', keys: 'acquittal; double jeopardy' },
		{ cat: 'C', level: 4, topic: 'Speedy disposition', q: 'The right to speedy disposition may be invoked in a preliminary investigation before the Ombudsman.', tf: true, short: 'True. Art. III, Sec. 16 covers all judicial, quasi-judicial and administrative bodies (Coscolluela; Cagang).', keys: 'Art. III, Sec. 16' },
		{ cat: 'C', level: 5, topic: 'Presumptions', q: 'Where the prosecution\'s evidence and the defense\'s evidence are evenly balanced, the presumption of regularity of the police officers\' acts tips the scale toward conviction.', tf: false, short: 'False. The equipoise rule favors the accused; the presumption of innocence prevails over the presumption of regularity.', keys: 'equipoise; presumption of innocence' },
		{
			cat: 'D', level: 4, topic: 'Trial in absentia', title: 'Bail-jumping before and after arraignment',
			facts: 'A and B, co-accused in a robbery case, are out on bail. A disappears a week before arraignment. B is arraigned, then stops attending trial; notices are sent to his address in the bail bond.',
			q: 'May the trial proceed as to each?',
			issue: 'Whether trial in absentia is available for an accused not yet arraigned and for one arraigned who absents himself.',
			alac: {
				answer: 'As to A, no; as to B, yes.',
				legalBasis: 'Const., Art. III, Sec. 14(2): after arraignment, trial may proceed notwithstanding the absence of the accused, provided he was duly notified and his failure to appear is unjustified. Rule 115, Sec. 1(c); Rule 114, Sec. 2(c).',
				application: 'A was never arraigned — there is no plea to try. B was arraigned, notified at his bail address, and offers no justification.',
				conclusion: 'Proceed against B in absentia; as to A, issue a warrant, forfeit his bail, and archive the case until he is arrested (2017 Guidelines, III.6).'
			},
			keys: 'arraignment; notice; unjustified absence'
		},
		{
			cat: 'D', level: 4, topic: 'Compulsory process', title: 'Distant defense witness',
			facts: 'The defense\'s key witness, a fisherman, lives on an island more than 100 km from the court and cannot afford to travel. Trial is in two months.',
			q: 'What can the accused do?',
			issue: 'How the accused may secure the testimony of a witness who cannot attend trial.',
			alac: {
				answer: 'Move for conditional examination of the witness.',
				legalBasis: 'Rule 115, Sec. 1(g); Rule 119, Secs. 12–13: the accused may, on motion with notice, have witnesses conditionally examined if the witness resides more than 100 km from the place of trial and has no means to attend; the examination is before a judge, or a member of the Bar designated by the judge, with notice to the prosecutor at least 3 days before.',
				application: 'The witness lives more than 100 km away and lacks means. The motion must state his name and residence and the substance of his testimony, supported by the accused\'s affidavit.',
				conclusion: 'The court should order the conditional examination; the written record may be used at trial.'
			},
			keys: 'Rule 119, Secs. 12–13; 100 km; 3 days\' notice'
		},
		{
			cat: 'E', level: 5, topic: 'Self-incrimination', title: 'Accused on the stand — two questions',
			facts: 'In a homicide trial, the accused testifies that he was home all night. On cross-examination, the prosecutor asks (1) "Isn\'t it true you were at the victim\'s house at 10 p.m.?" and (2) "Isn\'t it true that you sold a stolen motorcycle that same night?" The accused invokes the right against self-incrimination for both.',
			q: 'Rule on each invocation.',
			issue: 'Scope of cross-examination of an accused who testifies, and of the right against self-incrimination.',
			alac: {
				answer: 'Overrule the objection to question (1); sustain it as to question (2).',
				legalBasis: 'Rule 115, Sec. 1(d)–(e); People v. Ayson (1989): an accused who testifies may be cross-examined on matters stated in his direct or connected with it and cannot refuse on the ground of incrimination for the crime charged; but he may refuse a specific question that tends to incriminate him for a different offense.',
				application: '(1) goes to his alibi, which he raised on direct — he must answer. (2) concerns a different offense (fencing or theft); it is beyond the scope of direct and incriminating as to another crime.',
				conclusion: 'He must answer (1); he may decline (2).'
			},
			trap: 'Treating the right as all-or-nothing once the accused testifies.',
			keys: 'Ayson; scope of direct; other offense'
		},
		{
			cat: 'E', level: 5, topic: 'Speedy trial', title: 'Ask for trial first',
			facts: 'Over 14 months, the prosecution moves for postponement nine times because its witnesses are unavailable; the defense does not object each time. Before the tenth setting, the accused moves to dismiss for violation of speedy trial. The court grants the motion. The prosecution later refiles the same charge.',
			q: '(a) Was the dismissal proper? (b) May the case be refiled?',
			issue: 'Whether the accused who acquiesced in postponements may invoke speedy trial, and the effect of a dismissal on that ground.',
			alac: {
				answer: '(a) Doubtful — the accused\'s acquiescence weighs against him. (b) If the dismissal stands, no.',
				legalBasis: 'Rule 119, Secs. 3 and 9; Rule 115, Sec. 1(h); balancing test (length, reasons, assertion, prejudice — Mari v. Gonzales; Perez v. People); Andres v. Cacdac (accused should first ask for trial); dismissal is subject to double jeopardy (Condrada).',
				application: 'Fourteen months of delay attributable to the prosecution is significant, but the accused never objected or demanded trial — a factor against him. Unless the delays were unexcused and prejudicial, the dismissal may be reversed. If the dismissal is upheld (and not void), it operates as an acquittal.',
				conclusion: '(a) The court should have weighed the accused\'s failure to assert the right; (b) a valid speedy-trial dismissal bars refiling.'
			},
			missing: 'Whether the witnesses\' unavailability was due to excluded causes (Rule 119, Sec. 3[b]) and whether the accused was detained (A.M. No. 12-11-2-SC limits).',
			keys: 'balancing; Andres v. Cacdac; Rule 119, Sec. 9; double jeopardy'
		},
		{
			cat: 'E', level: 5, topic: 'Confrontation', title: 'Witness dies before cross-examination',
			facts: 'The prosecution\'s eyewitness finishes direct examination; the defense asks for time to prepare cross. Before the next setting, the witness dies.',
			q: 'Is the direct testimony admissible?',
			issue: 'Effect of the death of a witness before cross-examination.',
			alac: {
				answer: 'It depends on why cross-examination did not happen; if the defense had a fair opportunity and let it pass, the testimony may stand; if not, it should be stricken.',
				legalBasis: 'Rule 115, Sec. 1(f): right to confront and cross-examine; the test is opportunity to cross-examine (Tiu, p. 141).',
				application: 'The defense asked for time — a reasonable request — and the witness died before the next setting. The defense did not waive cross-examination; there was no real opportunity.',
				conclusion: 'The direct testimony should be stricken or given little weight; the accused\'s right to confrontation prevails.'
			},
			missing: 'If the defense had repeatedly postponed cross without justification, it would be deemed to have waived it, and the testimony would stand.',
			keys: 'confrontation; opportunity; waiver'
		},
		{ cat: 'F', level: 3, topic: 'People v. Ayson', q: 'According to People v. Ayson, what rights does an accused have after the case is filed in court regarding testifying?', a: 'To refuse to be a witness; not to have any prejudice from the refusal; to testify in his own behalf, subject to cross-examination; and, while testifying, to refuse a specific question that tends to incriminate him for another crime.', keys: 'Ayson four rights' },
		{ cat: 'F', level: 4, topic: 'Coscolluela / Cagang', q: 'Compare Coscolluela v. Sandiganbayan (2013) and Cagang v. Sandiganbayan (2018) on whether the respondent must assert his right to speedy disposition.', a: 'Coscolluela: the respondent has no duty to follow up; the State must expedite. Cagang: the right must be timely asserted; failure to raise it when periods lapse may be treated as waiver. Cagang also excludes fact-finding from the count and allocates the burden depending on whether the periods were exceeded.', keys: 'Coscolluela; Cagang; timely assertion' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 115', title: 'Rule 115 integrated',
			facts: 'Z, charged with estafa, is arraigned with counsel de officio because his lawyer is late. At trial, his lawyer of choice appears irregularly; the court proceeds once without him, appointing a PAO lawyer for that hearing. The prosecution offers the transcript of a witness\'s testimony in a civil case between Z and the same complainant over the same transaction; the witness has since emigrated and cannot be located. Z declines to testify. The judge remarks in the decision: "The accused\'s refusal to explain the missing funds speaks volumes."',
			q: 'Identify and resolve the Rule 115 issues.',
			issue: 'Counsel at arraignment and trial; use of former testimony; adverse inference from silence.',
			alac: {
				answer: 'The arraignment and the hearing with PAO counsel were valid; the former testimony is admissible if Z had the opportunity to cross-examine in the civil case; the judge\'s remark violates Z\'s right to silence.',
				legalBasis: 'Rule 115, Sec. 1(c) (counsel; counsel de officio mandatory at arraignment); 2017 Guidelines, III.13(b) (proceed with counsel de officio when counsel de parte is absent); Sec. 1(f) (former testimony: witness abroad or not found, same parties and subject matter, opportunity to cross); Sec. 1(d) ("his silence shall not in any manner prejudice him").',
				application: 'Counsel de officio at arraignment satisfies the right. Proceeding with PAO counsel during one hearing is allowed under the 2017 Guidelines. The civil case involved the same parties and subject matter; the witness is abroad and cannot be found; if Z (as a party) had the opportunity to cross-examine, the testimony may be used. The judge drew an adverse inference from silence.',
				conclusion: 'The judgment is vulnerable on the adverse-inference ground; if the conviction rests on that inference, it should be reversed.'
			},
			keys: 'counsel de officio; 2017 Guidelines; former testimony; silence'
		}
	],
	memorize: [
		'The nine rights in Rule 115, Sec. 1 (a)–(i)',
		'Trial in absentia: arraignment, notice, unjustified absence; escape = waiver for all subsequent dates',
		'Presence required: arraignment/plea, identification, promulgation (except light offenses)',
		'Counsel de officio mandatory at arraignment',
		'Ayson: accused may refuse to testify; if he testifies, cross on direct; may refuse questions on other crimes',
		'Former testimony: unavailable witness; same parties and subject matter; opportunity to cross',
		'Speedy trial vs. speedy disposition; balancing factors; dismissal = acquittal'
	],
	flashcards: [
		['Requisites of trial in absentia?', 'Arraignment; due notice; unjustified absence.'],
		['Effect of escape after arraignment?', 'Waiver of presence on all subsequent dates until custody is regained.'],
		['When is the accused\'s presence required?', 'Arraignment and plea; identification; promulgation (except light offenses).'],
		['Is counsel de officio mandatory at trial?', 'Mandatory at arraignment; during trial, not if the accused proceeded with counsel of choice (Libuit), though the 2017 Guidelines let the court appoint one to proceed.'],
		['May an accused refuse to testify altogether?', 'Yes; silence cannot prejudice him.'],
		['If he testifies, may he refuse incriminating questions?', 'Only those on a different offense (Ayson).'],
		['Is a handwriting sample covered by the privilege?', 'Yes, if it requires intelligence and attention to create evidence (Beltran v. Samson).'],
		['Requisites for former testimony?', 'Witness unavailable; same parties and subject matter; opportunity to cross.'],
		['Who may invoke speedy trial? speedy disposition?', 'Only the accused; any party before any tribunal.'],
		['Effect of dismissal for violation of speedy trial?', 'Equivalent to acquittal; double jeopardy.'],
		['Equipoise rule?', 'When evidence is evenly balanced, the presumption of innocence tilts the scale to the accused.']
	],
	oral: [
		['"Can an accused who jumped bail be tried?"', 'Only if he was arraigned. After arraignment, his unjustified absence despite notice waives his right to be present and the trial proceeds in absentia; before arraignment, the case cannot proceed.'],
		['"Your client took the stand. Can he refuse to answer the prosecutor\'s questions?"', 'Not on matters covered by his direct testimony on the crime charged; he waived the privilege by testifying. He may refuse only a question that tends to incriminate him for a different offense (Ayson).'],
		['"Distinguish speedy trial from speedy disposition."', 'Speedy trial is the accused\'s right in a criminal trial, enforced by a motion to dismiss before trial under Rule 119; speedy disposition is any party\'s right before any tribunal, including preliminary investigation. Both are judged by the length of and reasons for the delay, assertion of the right, and prejudice.']
	],
	checklist: [
		'I can list all nine rights of the accused with a one-line explanation each.',
		'I can state the requisites of trial in absentia and when presence is required.',
		'I can explain when counsel de officio must be appointed.',
		'I can distinguish the accused\'s privilege from an ordinary witness\'s (Ayson).',
		'I can state the requisites for using former testimony.',
		'I can distinguish speedy trial from speedy disposition and state the balancing factors.'
	],
	sheet: [
		'<b>Nine rights:</b> innocence · informed · presence & counsel · testify · no self-incrimination · confront · compulsory process · speedy/impartial/public trial · appeal.',
		'<b>Absentia:</b> after arraignment + notice + unjustified absence. Escape → waiver for all later dates. Presence required at arraignment, identification, promulgation (not light offenses).',
		'<b>Counsel:</b> de officio mandatory at arraignment; 2017 Guidelines — proceed with de officio if de parte absent.',
		'<b>Self-incrimination (Ayson):</b> accused may refuse to testify; if he does, cross on direct; may refuse questions on other crimes. Mechanical acts not covered; handwriting creation is.',
		'<b>Confrontation:</b> former testimony — unavailable witness, same parties and subject matter, opportunity to cross.',
		'<b>Speedy trial</b> (accused; motion before trial; dismissal = acquittal) vs. <b>speedy disposition</b> (any party, any forum; Cagang).'
	],
	watchFor: `<strong>Watch for: arraignment, notice, and what the accused said on direct.</strong>
<ul>
<li>Was he arraigned before he disappeared? Was he notified?</li>
<li>Did he testify? On what? Is the question about the crime charged or a different one?</li>
<li>Speedy trial or speedy disposition? Did he ask for trial before moving to dismiss?</li>
</ul>`
};
