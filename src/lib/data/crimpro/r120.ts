import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 120 — Judgment. */
export const r120: RuleChapter = {
	id: 'r120',
	n: 120,
	title: 'Judgment',
	short: 'R120 Judgment',
	tiu: 'pp. 197–202',
	plain: `The judgment is the court's final word: guilty or not guilty, and if guilty, the penalty and civil liability. It must be written by the judge, stating the facts and the law. A conviction must say what offense was committed, with what circumstances, the accused's participation and the penalty and damages; an acquittal must say whether guilt was not proved at all or only not beyond reasonable doubt, and whether the act did not exist (which decides the civil liability). The accused can be convicted only of what was charged or what is necessarily included in it. The judgment is read to the accused in person (promulgation); if he skips it without reason, he loses his remedies unless he surrenders within 15 days.`,
	purpose: `To end the case with a reasoned decision that the accused can understand and challenge, and to fix the consequences of conviction or acquittal, including civil liability.`,
	stage: `After the case is submitted for decision (${ruleLink('r119', 'sections', 'Rule 119, Sec. 11[d]')}); followed by remedies (new trial or reconsideration under Rule 121, appeal under Rule 122) and execution.`,
	questions: [
		'What is a judgment, and what are its formal requisites?',
		'What must a judgment of conviction and a judgment of acquittal contain?',
		'May the accused be convicted of several offenses in one information?',
		'When may he be convicted of an offense different from the one charged (variance)?',
		'How is a judgment promulgated, and what happens if the accused is absent?',
		'When does a judgment become final, and when may it be modified?'
	],
	relations: `The contents of an acquittal decide civil liability under ${ruleLink('r111')} (Sec. 2 — act did not exist vs. reasonable doubt). Variance (Secs. 4–5) protects the right to be informed (${ruleLink('r115')}) and depends on the information drafted under ${ruleLink('r110')}. Conviction for several offenses follows a waived duplicity objection (${ruleLink('r117')}). Promulgation in absentia parallels trial in absentia (${ruleLink('r115')}); bail after conviction links to ${ruleLink('r114', 'sections', 'Rule 114, Sec. 5')}.`,
	principles: [
		'<b>A judgment must state clearly and distinctly the facts and the law</b> (Const., Art. VIII, Sec. 14; Rule 120, Sec. 1).',
		'<b>Conviction only for the offense charged or one necessarily included</b> (Secs. 4–5).',
		'<b>An acquittal is final and unappealable</b> (save certiorari for grave abuse), but it must state its ground to fix civil liability.',
		'<b>Promulgation requires the accused\'s presence</b>, except for light offenses; unjustified absence forfeits remedies unless he surrenders and moves for leave within 15 days.',
		'<b>Appeal and probation are mutually exclusive</b> — subject to RA 10707\'s exception when the appellate court reduces the penalty to a probationable one.'
	],
	sections: [
		{
			n: '1',
			title: 'Judgment definition and form',
			text: `"Judgment is the adjudication by the court that the accused is guilty or not guilty of the offense charged and the imposition on him of the proper penalty and civil liability, if any. It must be written in the official language, personally and directly prepared by the judge and signed by him and shall contain clearly and distinctly a statement of the facts and the law upon which it is based."`,
			plain: `The judge writes and signs a decision, in the official language, explaining the facts and the law.`,
			reqs: `(1) Official language; (2) personally and directly prepared by the judge; (3) signed by him; (4) clear statement of facts and law.`,
			who: `The judge (he may have researchers, but must pen the decision — Tiu).`,
			when: `Within three months from submission for lower courts (Const., Art. VIII, Sec. 15); 2017 Guidelines: promulgation within 90 days from submission (15 days for drug cases).`,
			effect: `A decision that fails to state facts and law leaves the parties unable to identify errors and violates due process (Lumanog v. People, in Tiu). A judge who did not hear the witnesses may still validly decide on the record (People v. Alfredo, in Tiu).`,
			cases: `${caseLink('lumanog', 'Lumanog v. People')}; <i>Merencillo v. People</i> (2007 — judgment vs. interlocutory order).`,
			hypo: `A judge issues a one-paragraph decision: "After evaluating the evidence, the court finds the accused guilty." It is defective for failing to state the facts and law.`,
			trap: `Illness, additional assignments, heavy caseload, a missing clerk of court and missing transcripts do not excuse delay; the judge should ask the SC for an extension (Tiu, p. 197).`
		},
		{
			n: '2',
			title: 'Contents of the judgment',
			text: `If the judgment is of conviction, it shall state "(1) the legal qualification of the offense constituted by the acts committed by the accused and the aggravating or mitigating circumstances which attended its commission; (2) the participation of the accused in the offense, whether as principal, accomplice, or accessory after the fact; (3) the penalty imposed upon the accused; and (4) the civil liability or damages caused by his wrongful act or omission to be recovered from the accused by the offended party, if there is any, unless the enforcement of the civil liability by a separate civil action has been reserved or waived." If of acquittal, it shall state "whether the evidence of the prosecution absolutely failed to prove the guilt of the accused or merely failed to prove his guilt beyond reasonable doubt. In either case, the judgment shall determine if the act or omission from which the civil liability might arise did not exist."`,
			plain: `Conviction: name the crime and circumstances, the accused's role, the penalty, and damages. Acquittal: say whether the evidence failed completely or only fell short, and whether the act did not exist.`,
			reqs: `Conviction — four items. Acquittal — two determinations.`,
			effect: `The acquittal's statement determines whether civil liability ex delicto survives (Rule 111, Sec. 2; Civil Code Art. 29). An acquittal is immediately final; only certiorari for grave abuse lies.`,
			hypo: `An acquittal states: "The prosecution failed to prove beyond reasonable doubt that the accused misappropriated the funds." Civil liability may still be adjudged on preponderance of evidence.`,
			trap: `Omitting civil liability in a conviction is error unless it was reserved or waived (or filed separately first).`
		},
		{
			n: '3',
			title: 'Judgment for two or more offenses',
			text: `"When two or more offenses are charged in a single complaint or information but the accused fails to object to it before trial, the court may convict him of as many offenses as are charged and proved, and impose on him the penalty for each offense, setting out separately the findings of fact and law in each offense."`,
			plain: `Duplicity not objected to → conviction for each offense charged and proved, with separate findings.`,
			reqs: `(1) Two or more offenses charged in one information; (2) no objection before trial (motion to quash for duplicity); (3) each offense proved; (4) separate findings.`,
			effect: `Waived duplicity is not a ground to set aside the conviction.`,
			hypo: `One information charges two counts of estafa on different dates; the accused never objects. Both are proved. Two convictions, two penalties, separate findings.`,
			trap: `Rule 120, Sec. 3 says "before trial," while Rule 117 requires the motion to quash before plea — answer that the objection must be raised by motion to quash before plea (Rule 117, Secs. 1 and 9).`
		},
		{
			n: '4',
			title: 'Judgment in case of variance between allegation and proof',
			text: `"When there is variance between the offense charged in the complaint or information and that proved, and the offense as charged is included in or necessarily includes the offense proved, the accused shall be convicted of the offense proved which is included in the offense charged, or of the offense charged which is included in the offense proved."`,
			plain: `If the proof differs from the charge, convict of the lesser offense — whichever of the two is included in the other.`,
			effect: `Charged murder, proved homicide → homicide (included in the charge). Charged homicide, proved murder → homicide (the charge, which is included in the offense proved). The accused can never be convicted of the graver offense not charged.`,
			cases: `${caseLink('consulta', 'Consulta v. People (2009)')} (grave coercion included in robbery with intimidation); ${caseLink('corpus', 'Corpus v. People (2023)')} (no conviction for a lesser included offense that had prescribed when the information was filed).`,
			hypo: `Charged with rape, the accused is shown to have committed only lascivious acts. He may be convicted of acts of lasciviousness (included in rape).`,
			trap: `Variance runs in both directions, but the result is always the lesser of the two offenses.`
		},
		{
			n: '5',
			title: 'When an offense includes or is included in another',
			text: `"An offense charged necessarily includes the offense proved when some of the essential elements or ingredients of the former, as alleged in the complaint or information, constitute the latter. And an offense charged is necessarily included in the offense proved, when the essential ingredients of the former constitute or form a part of those constituting the latter."`,
			plain: `"Includes": some elements of the charged offense make up the proved offense. "Included in": all the charged offense's elements are part of the proved offense.`,
			cases: `Tiu (p. 200): less serious physical injuries included in serious physical injuries; acts of lasciviousness in rape; theft in robbery; grave coercion in robbery with intimidation.`,
			hypo: `Charged: robbery with intimidation. Proved: the accused forced the victim to hand over a phone but intent to gain was not proved. Grave coercion (violence or intimidation compelling another to do something against his will) is included.`,
			trap: `The test is the elements <b>as alleged</b> in the information, not merely the elements in the abstract.`
		},
		{
			n: '6',
			title: 'Promulgation of judgment',
			text: `"The judgment is promulgated by reading it in the presence of the accused and any judge of the court in which it was rendered. However, if the conviction is for a light offense, the judgment may be pronounced in the presence of his counsel or representative. When the judge is absent or outside of the province or city, the judgment may be promulgated by the clerk of court." If the accused is confined in another province or city, the executive judge of the RTC there may promulgate on request, and that court may accept the notice of appeal and approve bail pending appeal — except that if the conviction changed the offense from non-bailable to bailable, bail can only be filed with and resolved by the appellate court. Notice is given to the accused personally or through his bondsman or warden and counsel; if he was tried in absentia because he jumped bail or escaped, at his last known address. If he fails to appear despite notice, promulgation is made by recording the judgment in the criminal docket and serving him a copy at his last known address or through counsel. If the judgment is of conviction and his absence was without justifiable cause, "he shall lose the remedies available in these rules against the judgment and the court shall order his arrest. Within fifteen (15) days from promulgation of judgment, however, the accused may surrender and file a motion for leave of court to avail of these remedies"; if he proves justifiable cause, he may avail of them within fifteen days from notice.`,
			plain: `The judgment is read in court with the accused present. Light offenses: counsel may stand in. If he skips promulgation without reason, it is recorded anyway, he loses his remedies and is arrested — unless within 15 days he surrenders and shows a good reason.`,
			reqs: `Notice to the accused (personally, or through bondsman/warden and counsel; last known address if he absconded); reading in his presence and that of any judge (or clerk if the judge is absent).`,
			who: `Judge or clerk of court; executive judge of the place of detention; accused; counsel; bondsman; warden.`,
			when: `Surrender and motion for leave within 15 days from promulgation; remedies within 15 days from notice of the order allowing them.`,
			exceptions: `Light offenses (counsel or representative). Death-penalty cases: automatic review was not forfeited by escape (People v. Taruc, 2009, in Tiu) — moot after RA 9346 as to death.`,
			effect: `Unjustified absence at promulgation of a conviction: loss of remedies (MR, new trial, appeal), arrest; the accused loses standing in court (Jaylo v. Sandiganbayan, 2015).`,
			cases: `${caseLink('jaylo', 'Jaylo v. Sandiganbayan (2015)')}; <i>People v. Taruc</i> (2009).`,
			hypo: `X, on bail, is notified of promulgation but goes to a fiesta. The judgment of conviction is recorded in the docket. Ten days later he surrenders and moves for leave, but cannot show a justifiable cause. He has lost his remedies.`,
			trap: `In criminal cases a judgment is "promulgated," not merely "served" by mail as in civil cases.`
		},
		{
			n: '7',
			title: 'Modification of judgment',
			text: `"A judgment of conviction may, upon motion of the accused, be modified or set aside before it becomes final or before appeal is perfected. Except where the death penalty is imposed, a judgment becomes final after the lapse of the period for perfecting an appeal, or when the sentence has been partially or totally satisfied or served, or when the accused has waived in writing his right to appeal, or has applied for probation."`,
			plain: `The accused may ask to modify or set aside a conviction before it becomes final or before his appeal is perfected. It becomes final when the appeal period lapses, sentence is (partly) served, he waives appeal in writing, or he applies for probation.`,
			reqs: `Motion of the accused; before finality or perfection of appeal.`,
			when: `Appeal period: 15 days from promulgation (Rule 122, Sec. 6).`,
			effect: `Only the accused may move to modify a conviction (to protect against double jeopardy). Applying for probation waives appeal (Almero v. People, 2014) — but see RA 10707.`,
			cases: `${caseLink('almero', 'Almero v. People (2014)')}; <i>Tamayo v. People</i> (2008 — a compromise after finality does not obliterate criminal liability).`,
			hypo: `Convicted of estafa, the accused applies for probation on day 10. The judgment becomes final; he can no longer appeal.`,
			trap: `The prosecution cannot move to increase the penalty after promulgation — that would place the accused twice in jeopardy.`,
			update: `RA 10707 (2015) amended the Probation Law: when a judgment imposing a non-probationable penalty is appealed and the appellate court modifies it to a probationable penalty, the accused may apply for probation based on the modified decision before it becomes final. Tiu (2017) states only the general rule from Almero.`,
			verify: `Check RA 10707, Sec. 4 for the exact procedure (where the application is filed).`
		},
		{
			n: '8',
			title: 'Entry of judgment',
			text: `"After a judgment has become final, it shall be entered in accordance with Rule 36."`,
			plain: `Final judgments are entered in the book of entries of judgments.`
		},
		{
			n: '9',
			title: 'Existing provisions governing suspension of sentence, probation and parole not affected by this Rule',
			text: `"Nothing in this Rule shall affect any existing provisions in the laws governing suspension of sentence, probation or parole."`,
			plain: `Probation, parole and suspension of sentence (e.g., for children in conflict with the law) are governed by their own laws.`,
			hypo: `A minor offender\'s sentence may be suspended under the juvenile justice law notwithstanding Rule 120.`
		}
	],
	reqs: [
		{
			name: 'Formal requisites of a judgment (Sec. 1)',
			source: 'Rule 120, Sec. 1; Const., Art. VIII, Sec. 14',
			what: 'Written in the official language; personally prepared and signed by the judge; clear statement of facts and law.',
			who: 'The judge.',
			when: 'Within 3 months from submission (lower courts); 2017 Guidelines: promulgation within 90 days.',
			missing: 'A decision without facts and law violates due process and may be set aside (Lumanog). Delay exposes the judge to administrative liability but does not void the decision.',
			defect: 'Not waivable',
			defectNote: 'The constitutional requirement to state facts and law cannot be waived by the parties; a decision lacking it is vulnerable on appeal or certiorari.'
		},
		{
			name: 'Valid promulgation (Sec. 6)',
			source: 'Rule 120, Sec. 6',
			what: 'Reading of the judgment in the presence of the accused and a judge (or clerk), after notice.',
			who: 'Judge/clerk; accused personally (counsel or representative for light offenses).',
			when: 'On the scheduled date.',
			missing: 'Without notice, promulgation in absentia is invalid. With notice but unjustified absence: promulgation by recording in the docket; loss of remedies unless surrender and motion within 15 days.',
			defect: 'Depends on the defect',
			defectNote: 'Lack of notice is a due process defect (not waivable); unjustified absence is the accused\'s own waiver of remedies, curable only by timely surrender and proof of justifiable cause.'
		},
		{
			name: 'Regaining remedies after promulgation in absentia (Sec. 6)',
			source: 'Rule 120, Sec. 6; Jaylo v. Sandiganbayan (2015)',
			what: 'Surrender; motion for leave stating the reasons for absence; proof of justifiable cause.',
			who: 'Accused.',
			when: 'Within 15 days from promulgation; then remedies within 15 days from notice.',
			missing: 'Remedies lost; judgment becomes final; the accused is arrested.',
			defect: 'Not waivable',
			defectNote: 'The 15-day period is strict; without surrender the accused has no standing to seek relief (Jaylo).'
		}
	],
	enums: [
		{
			id: 'E120.1',
			name: 'Formal requisites of a judgment',
			source: 'Rule 120, Sec. 1',
			kind: 'rule',
			memorize: true,
			lead: 'A judgment must be',
			items: [
				{ t: 'Written in the official language', d: 'Filipino or English.', s: 'official language' },
				{ t: 'Personally and directly prepared by the judge', d: 'The judgment must be the judge\'s own work.', s: 'personally prepared by the judge' },
				{ t: 'Signed by the judge', d: 'The signature authenticates the judgment as the judge\'s act.', s: 'signed' },
				{ t: 'Containing clearly and distinctly a statement of the facts and the law', d: 'So the losing party can identify errors (Lumanog).', s: 'facts and law stated' }
			],
			question: 'What are the formal requisites of a judgment in a criminal case?'
		},
		{
			id: 'E120.2',
			name: 'Contents of a judgment of conviction',
			source: 'Rule 120, Sec. 2',
			kind: 'rule',
			memorize: true,
			lead: 'A judgment of conviction states',
			items: [
				{ t: 'The legal qualification of the offense and the aggravating or mitigating circumstances', d: 'The crime as the court finds it, and the circumstances that fix the penalty.', s: 'offense and circumstances' },
				{ t: 'The participation of the accused', d: 'Principal, accomplice or accessory after the fact.', s: 'participation' },
				{ t: 'The penalty imposed', d: 'The specific penalty, applying the Indeterminate Sentence Law where proper.', s: 'penalty' },
				{ t: 'The civil liability or damages', d: 'Unless reserved or waived.', s: 'civil liability' }
			],
			memory: '<b>O-P-P-C</b>: Offense · Participation · Penalty · Civil liability.',
			question: 'What must a judgment of conviction contain?'
		},
		{
			id: 'E120.3',
			name: 'Contents of a judgment of acquittal',
			source: 'Rule 120, Sec. 2',
			kind: 'rule',
			memorize: true,
			lead: 'A judgment of acquittal states',
			items: [
				{ t: 'Whether the prosecution\'s evidence absolutely failed to prove guilt or merely failed to prove it beyond reasonable doubt', d: 'Matters for the civil aspect: acquittal on reasonable doubt leaves room for civil liability on preponderance of evidence (Civil Code Art. 29).', s: 'absolute failure or reasonable doubt' },
				{ t: 'Whether the act or omission from which civil liability might arise did not exist', d: 'Decides civil liability ex delicto (Rule 111, Sec. 2).', s: 'whether the act existed' }
			],
			question: 'What must a judgment of acquittal state, and why?'
		},
		{
			id: 'E120.4',
			name: 'Modes of promulgation',
			source: 'Rule 120, Sec. 6',
			kind: 'rule',
			lead: 'A judgment may be promulgated',
			items: [
				{ t: 'By reading it in the presence of the accused and any judge of the court', d: 'The general rule.', s: 'reading before accused and judge' },
				{ t: 'In the presence of counsel or representative, for a light offense', d: 'For light offenses, the accused need not be present.', s: 'light offense — counsel or representative' },
				{ t: 'By the clerk of court, when the judge is absent or outside the province or city', d: 'The clerk reads it in the judge\'s absence.', s: 'by the clerk' },
				{ t: 'By the executive judge of the RTC of the place of confinement, when the accused is detained elsewhere', d: 'On request; may accept notice of appeal and approve bail pending appeal (save non-bailable-to-bailable).', s: 'by the executive judge where detained' },
				{ t: 'In absentia, by recording the judgment in the criminal docket and serving a copy', d: 'When the accused fails to appear despite notice.', s: 'in absentia — recorded in the docket' }
			],
			question: 'How is a judgment promulgated? What if the accused is absent?'
		},
		{
			id: 'E120.5',
			name: 'When a judgment of conviction becomes final',
			source: 'Rule 120, Sec. 7',
			kind: 'rule',
			memorize: true,
			lead: 'Except where death is imposed, a judgment becomes final',
			items: [
				{ t: 'After the lapse of the period for perfecting an appeal', d: '15 days from promulgation.', s: 'appeal period lapses' },
				{ t: 'When the sentence has been partially or totally satisfied or served', d: 'By serving or paying, he is deemed to have accepted the judgment.', s: 'sentence served (partly or fully)' },
				{ t: 'When the accused has waived in writing his right to appeal', d: 'The waiver must be in writing.', s: 'written waiver of appeal' },
				{ t: 'When the accused has applied for probation', d: 'Appeal and probation are mutually exclusive (Almero) — but see RA 10707.', s: 'application for probation' }
			],
			question: 'When does a judgment of conviction become final?'
		},
		{
			id: 'E120.6',
			name: 'Requisites to regain remedies after promulgation in absentia',
			source: 'Rule 120, Sec. 6, last par.',
			kind: 'rule',
			ordered: true,
			lead: 'An accused convicted in absentia regains his remedies if',
			items: [
				{ t: 'He surrenders', d: 'He must place himself under the court\'s jurisdiction; a fugitive cannot ask for relief.', s: 'surrender' },
				{ t: 'He files a motion for leave to avail of the remedies within 15 days from promulgation', d: 'Fifteen days from promulgation, not from notice.', s: 'motion for leave within 15 days' },
				{ t: 'He states the reasons for his absence', d: 'The motion must explain the absence.', s: 'states reasons' },
				{ t: 'He proves that his absence was for a justifiable cause', d: 'Then he may avail of the remedies within 15 days from notice.', s: 'proves justifiable cause' }
			],
			question: 'How may an accused who was absent at the promulgation of his conviction regain his remedies?'
		},
		{
			id: 'E120.7',
			name: 'Examples of necessarily included offenses',
			source: 'Rule 120, Secs. 4–5; Tiu, p. 200 (Consulta v. People, 2009)',
			kind: 'teaching',
			lead: 'Examples of offenses necessarily included in another',
			items: [
				{ t: 'Homicide in murder', d: 'Murder is homicide plus a qualifying circumstance; if the qualifier is not proved, the conviction is for homicide.', s: 'homicide in murder' },
				{ t: 'Theft in robbery', d: 'Robbery is theft plus violence, intimidation or force upon things; without them, theft remains.', s: 'theft in robbery' },
				{ t: 'Acts of lasciviousness in rape', d: 'If carnal knowledge is not proved but the lewd acts alleged are, the lesser offense may be found.', s: 'acts of lasciviousness in rape' },
				{ t: 'Less serious physical injuries in serious physical injuries', d: 'The two differ only in the gravity of the injury, which the evidence on healing time decides.', s: 'less serious in serious physical injuries' },
				{ t: 'Grave coercion in robbery with intimidation', d: 'Consulta v. People (2009).', s: 'grave coercion in robbery with intimidation' }
			],
			tip: 'Always check the elements as alleged in the information.',
			question: 'Give examples of offenses necessarily included in others.'
		}
	],
	comparisons: [
		{
			id: 'C120.1',
			title: 'Judgment of conviction vs. judgment of acquittal',
			a: 'Conviction',
			b: 'Acquittal',
			meaning: ['Adjudication that the accused is guilty, with penalty and civil liability.', 'Adjudication that the accused is not guilty.'],
			basis: ['Rule 120, Secs. 1–2', 'Rule 120, Sec. 2; Rule 111, Sec. 2'],
			who: ['Accused may move to modify (Sec. 7), seek new trial or reconsideration, or appeal.', 'Prosecution cannot appeal; private complainant may appeal the civil aspect.'],
			when: ['After trial; promulgated in the accused\'s presence.', 'Same; also by grant of demurrer.'],
			reqs: ['Offense and circumstances; participation; penalty; civil liability.', 'Ground of acquittal; whether the act existed.'],
			time: ['Final after 15 days (or earlier by waiver, service, probation).', 'Immediately final.'],
			exceptions: ['Unjustified absence at promulgation forfeits remedies.', 'Certiorari lies for grave abuse (sham trial).'],
			effect: ['Penalty and civil liability enforced; double jeopardy bars a graver charge save Rule 117, Sec. 7 exceptions.', 'Double jeopardy; civil liability survives unless the act did not exist.'],
			trap: ['Thinking the prosecution may move to increase the penalty.', 'Thinking acquittal ends civil liability automatically.'],
			decisive: 'Finality and appealability: an acquittal is final and immune from appeal by the State; a conviction may be challenged by the accused.',
			hypo: 'Two co-accused: A convicted, B acquitted on reasonable doubt. A may appeal within 15 days; the State cannot appeal B\'s acquittal, but the complainant may appeal B\'s civil liability.'
		},
		{
			id: 'C120.2',
			title: 'Variance: offense charged includes the offense proved vs. offense charged included in the offense proved',
			a: 'Charged includes proved (graver charged)',
			b: 'Charged included in proved (lesser charged)',
			meaning: ['The offense charged is graver; the offense proved is lesser and included.', 'The offense charged is lesser; the offense proved is graver and includes it.'],
			basis: ['Rule 120, Secs. 4–5', 'Rule 120, Secs. 4–5'],
			who: ['Court.', 'Court.'],
			when: ['At judgment.', 'At judgment.'],
			reqs: ['Some elements of the offense charged, as alleged, constitute the offense proved.', 'All essential ingredients of the offense charged form part of the offense proved.'],
			time: ['—', '—'],
			exceptions: ['No conviction for a lesser offense that had prescribed when the information was filed (Corpus, 2023).', 'Cannot convict of the graver offense proved.'],
			effect: ['Conviction for the offense proved (lesser).', 'Conviction for the offense charged (lesser).'],
			trap: ['Convicting of the graver offense proved.', '—'],
			decisive: 'In both directions, the conviction is for the lesser offense.',
			hypo: 'Charged with murder, proved homicide → homicide. Charged with homicide, proved murder (treachery proved but not alleged) → homicide.'
		},
		{
			id: 'C120.3',
			title: 'Promulgation (criminal) vs. service of judgment (civil)',
			a: 'Promulgation in criminal cases',
			b: 'Service in civil cases',
			meaning: ['Reading of the judgment in the accused\'s presence.', 'Delivery of a copy of the judgment to the parties.'],
			basis: ['Rule 120, Sec. 6', 'Rules of Civil Procedure (Rule 13; Rule 36)'],
			who: ['Judge or clerk; accused personally.', 'Clerk of court; parties through counsel.'],
			when: ['On the date set, after notice.', 'Upon issuance.'],
			reqs: ['Notice; presence (except light offenses); recording in the docket if absent.', 'Proper service.'],
			time: ['15 days from promulgation to appeal.', '15 days from receipt to appeal.'],
			exceptions: ['In absentia: recorded in the docket and served.', '—'],
			effect: ['Absent without cause → loss of remedies, arrest.', 'Period runs from receipt.'],
			trap: ['Thinking mailing a copy is promulgation.', '—'],
			decisive: 'Criminal judgments are promulgated (read in the accused\'s presence); civil judgments are served.',
			hypo: 'A court mails a judgment of conviction to the accused without scheduling promulgation. The judgment has not been promulgated; the appeal period has not begun.'
		}
	],
	cases: [
		{
			id: 'lumanog',
			name: 'Lumanog v. People',
			cite: 'Tiu gives the case name only',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine on the content of decisions.',
			issue: 'What must a decision contain?',
			ruling: 'A clear and distinct statement of the facts and law.',
			doctrine: 'The parties should be informed of how the case was decided, with the factual and legal reasons; a decision that does not state them leaves the losing party unable to pinpoint errors for review.',
			reasoning: 'Due process and Art. VIII, Sec. 14 of the Constitution.',
			rule: 'Rule 120, Sec. 1.',
			hypo: 'A conviction that merely recites the testimonies without evaluation is vulnerable.',
			examQ: 'Why must a judgment state the facts and the law on which it is based?',
			verify: 'Year and G.R. number not in Tiu.'
		},
		{
			id: 'jaylo',
			name: 'Jaylo v. Sandiganbayan',
			cite: '2015 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused, on bail, did not appear at the promulgation of the judgment convicting them and did not surrender within 15 days; they later sought reconsideration.',
			issue: 'May an accused who failed to appear at promulgation without justifiable cause avail of remedies without surrendering?',
			ruling: 'No.',
			doctrine: 'When the accused on bail fails to present himself at the promulgation of a judgment of conviction, he loses standing in court and cannot invoke its jurisdiction for relief unless he surrenders and files the motion for leave within 15 days.',
			reasoning: 'Rule 120, Sec. 6; one who flees from the court\'s jurisdiction cannot ask it for relief.',
			rule: 'Rule 120, Sec. 6.',
			hypo: 'An accused files an MR through counsel while remaining at large after promulgation in absentia — it should not be entertained.',
			examQ: 'What is the effect of the accused\'s unjustified absence at the promulgation of a judgment of conviction?',
			verify: 'Facts summarized generally; G.R. number not in Tiu.'
		},
		{
			id: 'consulta',
			name: 'Consulta v. People',
			cite: '2009 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused was charged with robbery with intimidation of persons; the evidence did not establish all elements of robbery.',
			issue: 'May he be convicted of grave coercion under an information for robbery with intimidation?',
			ruling: 'Yes.',
			doctrine: 'Grave coercion is necessarily included in robbery with intimidation, since both involve violence, threats or intimidation.',
			reasoning: 'Rule 120, Secs. 4–5.',
			rule: 'Rule 120, Secs. 4–5.',
			hypo: 'Charged with robbery for taking a phone by threat, the accused proves he believed the phone was his — no intent to gain; he may be convicted of grave coercion.',
			examQ: 'May an accused charged with robbery be convicted of grave coercion?',
			verify: 'Facts summarized generally; G.R. number not in Tiu.'
		},
		{
			id: 'almero',
			name: 'Almero v. People',
			cite: '2014 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused applied for probation and also sought to pursue remedies against the conviction.',
			issue: 'May an accused apply for probation and appeal?',
			ruling: 'No.',
			doctrine: 'Applying for probation is a waiver of the right to appeal; appeal and probation are mutually exclusive; an application implies an admission of guilt.',
			reasoning: 'Rule 120, Sec. 7; PD 968.',
			rule: 'Rule 120, Sec. 7.',
			hypo: 'An accused files a notice of appeal and later applies for probation while the appeal is pending — not allowed, except under RA 10707 where the appellate court reduces the penalty to a probationable one.',
			examQ: 'May an accused who applied for probation still appeal his conviction?',
			verify: 'RA 10707 (2015) created an exception after appellate modification; Tiu states only the general rule.'
		}
	],
	deadlines: [
		{ ref: 'Const., Art. VIII, Sec. 15', act: 'Decide the case', who: 'Lower courts (trial courts)', period: '3 months (collegiate courts 12 months; SC 24 months)', start: 'Submission for decision (last pleading, brief or memorandum required)', exceptions: 'Extension on request to the SC', effect: 'Certification of the reason for delay; administrative liability; the court must still decide', kind: 'constitutional' },
		{ ref: '2017 Revised Guidelines, III.16(a)', act: 'Promulgate the decision', who: 'Court', period: '90 days (drug cases 15 days; environmental 60 days; IPR 60 days)', start: 'Submission for decision', exceptions: 'Shorter periods in special laws', effect: 'Memoranda do not suspend the period', kind: 'procedural' },
		{ ref: 'RA 9165, Sec. 90', act: 'Decide drug cases', who: 'Court', period: '15 days', start: 'Submission for resolution', exceptions: '—', effect: 'Directory', kind: 'procedural' },
		{ ref: 'Rule 120, Sec. 6', act: 'Surrender and move for leave after promulgation in absentia', who: 'Accused', period: '15 days', start: 'Promulgation', exceptions: 'Justifiable cause must be proved', effect: 'Loss of remedies; arrest', kind: 'procedural' },
		{ ref: 'Rule 120, Sec. 6', act: 'Avail of remedies after leave is granted', who: 'Accused', period: '15 days', start: 'Notice of the order granting leave', exceptions: '—', effect: 'Finality', kind: 'procedural' },
		{ ref: 'Rule 122, Sec. 6 (with Rule 120, Sec. 7)', act: 'Appeal (or move for new trial or reconsideration)', who: 'Accused', period: '15 days', start: 'Promulgation (or notice of the final order)', exceptions: 'Interrupted by a timely MR or motion for new trial', effect: 'Judgment becomes final', kind: 'procedural' },
		{ ref: '2017 Revised Guidelines, III.16(b)', act: 'Resolve MR of conviction or motion for new trial', who: 'Court', period: '10 calendar days', start: 'Submission of the prosecution\'s comment (with or without comment)', exceptions: '—', effect: 'Non-extendible', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'A clerk of court may promulgate a judgment only if the judge consents.', right: 'When the judge is absent or outside the province or city, the clerk may promulgate (Sec. 6).', example: '—' },
		{ wrong: 'The accused must always be present at promulgation.', right: 'Not for light offenses (counsel or representative).', example: '—' },
		{ wrong: 'If the accused is absent at promulgation, the judgment cannot be promulgated.', right: 'It is promulgated by recording in the docket and serving a copy (Sec. 6).', example: '—' },
		{ wrong: 'An accused absent at promulgation may appeal through counsel.', right: 'Not unless he surrenders and moves for leave within 15 days with a justifiable cause (Sec. 6; Jaylo).', example: '—' },
		{ wrong: 'Charged with homicide, proved murder — convict of murder.', right: 'Convict of homicide (the offense charged, which is included).', example: '—' },
		{ wrong: 'The prosecution may move to correct a judgment to impose a higher penalty.', right: 'Only the accused may move to modify a conviction (Sec. 7).', example: '—' },
		{ wrong: 'An acquittal must always be accompanied by extinction of civil liability.', right: 'Only if the act did not exist; the judgment must say which (Sec. 2).', example: '—' },
		{ wrong: 'Applying for probation never bars an appeal.', right: 'It waives appeal (Almero) — except RA 10707\'s post-appeal probation when the penalty is reduced.', example: '—' },
		{ wrong: 'A judge\'s illness excuses delay in deciding.', right: 'Not an excuse; he should request an extension (Tiu, citing Balajedong v. Del Rosario).', example: '—' }
	],
	corrections: [
		{ old: 'Appeal and probation are mutually exclusive (Almero, 2014).', fix: 'RA 10707 (2015) allows an accused whose non-probationable sentence is reduced on appeal to a probationable one to apply for probation based on the modified decision before it becomes final.', source: 'RA 10707, amending PD 968, Sec. 4' },
		{ old: 'No fixed promulgation period apart from the Constitution.', fix: 'The 2017 Guidelines require promulgation within 90 days from submission (15 days for drug cases).', source: 'A.M. No. 15-06-10-SC, III.16' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Contents', q: 'What must a judgment of conviction contain? A judgment of acquittal?', a: 'E120.2 and E120.3.', keys: 'Sec. 2' },
		{ cat: 'A', level: 2, topic: 'Promulgation', q: 'How is a judgment promulgated? What happens if the accused fails to appear?', a: 'E120.4 and E120.6.', keys: 'Sec. 6' },
		{ cat: 'A', level: 2, topic: 'Finality', q: 'When does a judgment of conviction become final?', a: 'E120.5.', keys: 'Sec. 7' },
		{ cat: 'A', level: 3, topic: 'Form', q: 'What are the formal requisites of a judgment?', a: 'E120.1.', keys: 'Sec. 1' },
		{ cat: 'B', level: 3, topic: 'Conviction vs acquittal', q: 'Distinguish a judgment of conviction from a judgment of acquittal as to contents, finality and remedies.', a: 'See C120.1.', keys: 'finality; appeal; civil liability' },
		{ cat: 'B', level: 3, topic: 'Variance', q: 'Explain the two directions of variance under Rule 120, Secs. 4–5, with examples.', a: 'See C120.2.', keys: 'lesser offense' },
		{ cat: 'B', level: 3, topic: 'Promulgation vs service', q: 'Distinguish promulgation of a criminal judgment from service of a civil judgment.', a: 'See C120.3.', keys: 'presence; in absentia' },
		{ cat: 'C', level: 1, topic: 'Form', q: 'A judgment may be prepared by the judge\'s legal researcher and signed by the judge without stating the facts.', tf: false, short: 'False. It must be personally and directly prepared by the judge and state clearly and distinctly the facts and the law (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 1, topic: 'Promulgation', q: 'For a light offense, the judgment may be promulgated in the presence of the accused\'s counsel or representative.', tf: true, short: 'True (Sec. 6).', keys: 'Sec. 6' },
		{ cat: 'C', level: 2, topic: 'Variance', q: 'An accused charged with homicide may be convicted of murder if treachery is proved at trial.', tf: false, short: 'False. He may be convicted only of homicide, the offense charged, which is included in murder (Secs. 4–5).', keys: 'Sec. 4' },
		{ cat: 'C', level: 2, topic: 'Duplicity', q: 'When an information charges two offenses and the accused does not object, the court may convict him of both if proved.', tf: true, short: 'True (Sec. 3), with separate findings for each.', keys: 'Sec. 3' },
		{ cat: 'C', level: 3, topic: 'Promulgation', q: 'An accused who was absent without justification at the promulgation of his conviction may still appeal within 15 days through counsel.', tf: false, short: 'False. He loses his remedies unless, within 15 days, he surrenders and moves for leave, proving justifiable cause (Sec. 6; Jaylo).', keys: 'Sec. 6; Jaylo' },
		{ cat: 'C', level: 3, topic: 'Modification', q: 'The prosecution may move to modify a judgment of conviction to impose the correct, higher penalty before it becomes final.', tf: false, short: 'False. Sec. 7 allows modification only "upon motion of the accused."', keys: 'Sec. 7' },
		{ cat: 'C', level: 3, topic: 'Acquittal', q: 'A judgment of acquittal need not address civil liability.', tf: false, short: 'False. It must state whether the evidence absolutely failed or merely failed beyond reasonable doubt, and whether the act from which civil liability might arise did not exist (Sec. 2).', keys: 'Sec. 2' },
		{ cat: 'C', level: 4, topic: 'Probation', q: 'An accused who appealed his conviction can never apply for probation.', tf: false, short: 'False. Under RA 10707, if the appellate court reduces a non-probationable penalty to a probationable one, he may apply based on the modified decision before it becomes final. Otherwise, appeal and probation are mutually exclusive (Almero).', update: 'Tiu (2017) gives only the general rule.', keys: 'RA 10707; Almero' },
		{ cat: 'C', level: 5, topic: 'Variance and prescription', q: 'An accused charged with frustrated homicide may always be convicted of slight physical injuries if that is all the evidence proves.', tf: false, short: 'False. Not if slight physical injuries (2-month prescriptive period) had already prescribed when the information was filed (Corpus v. People, 2023).', keys: 'Corpus; variance' },
		{
			cat: 'D', level: 4, topic: 'Variance', title: 'Murder charged, homicide proved — and vice versa',
			facts: 'Case 1: A is charged with murder qualified by treachery, but treachery is not proved. Case 2: B is charged with homicide; at trial, treachery is clearly proved, but the information never alleged it.',
			q: 'Of what offense may each be convicted?',
			issue: 'Variance between the offense charged and the offense proved.',
			alac: {
				answer: 'A: homicide. B: homicide.',
				legalBasis: 'Rule 120, Secs. 4–5: when the offense charged includes the offense proved, conviction is for the offense proved; when the offense charged is included in the offense proved, conviction is for the offense charged. Rule 110, Secs. 8–9: qualifying circumstances must be alleged.',
				application: 'Murder includes homicide; homicide is included in murder. In both, the lesser offense controls; B cannot be convicted of murder because treachery was not alleged.',
				conclusion: 'Both are convicted of homicide.'
			},
			keys: 'Secs. 4–5; Rule 110, Sec. 8'
		},
		{
			cat: 'D', level: 4, topic: 'Promulgation in absentia', title: 'Absent at promulgation — hospital',
			facts: 'C is notified of promulgation for March 10. He is absent; the conviction is recorded in the docket. On March 20, he surrenders and moves for leave, attaching a hospital certificate showing emergency surgery on March 9.',
			q: 'Should leave be granted?',
			issue: 'Whether an accused absent at promulgation may regain his remedies.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Rule 120, Sec. 6: within 15 days from promulgation the accused may surrender and file a motion for leave; if he proves justifiable cause, he may avail of the remedies within 15 days from notice.',
				application: 'He surrendered and moved within 10 days, with proof of a justifiable cause.',
				conclusion: 'Grant leave; C may file an MR, motion for new trial, or appeal within 15 days from notice of the order.'
			},
			keys: 'Sec. 6; 15 days; justifiable cause'
		},
		{
			cat: 'E', level: 5, topic: 'Contents of acquittal', title: 'Silent acquittal and the civil claim',
			facts: 'The court acquits D of estafa in a decision stating only: "The accused is ACQUITTED." The complainant files a separate civil action for the ₱1 million she gave D; D moves to dismiss it, arguing the acquittal extinguished civil liability.',
			q: 'Rule on the motion to dismiss. What was wrong with the judgment?',
			issue: 'Content of a judgment of acquittal and its effect on civil liability.',
			alac: {
				answer: 'Deny the motion to dismiss; the judgment of acquittal was deficient.',
				legalBasis: 'Rule 120, Sec. 2 (acquittal must state the ground and whether the act from which civil liability might arise did not exist); Rule 111, Sec. 2 (civil liability ex delicto extinguished only by a finding that the act did not exist); Civil Code Art. 29 (acquittal on reasonable doubt; ground may be inferred from the decision).',
				application: 'The decision contains no finding that the act did not exist; civil liability ex delicto is not extinguished by a bare acquittal. Besides, the complainant may sue on the contract (another source).',
				conclusion: 'The civil action proceeds; the acquittal should have stated its ground and the existence of the act.'
			},
			keys: 'Sec. 2; Rule 111, Sec. 2; Art. 29'
		},
		{
			cat: 'E', level: 5, topic: 'Promulgation and bail', title: 'Promulgation by the executive judge of the place of detention',
			facts: 'E, charged with murder, is detained in Davao on another case; the trial court is in Cebu. The Cebu court convicts him of homicide and requests the Davao RTC executive judge to promulgate. After promulgation, E files with the Davao court a notice of appeal and an application for bail pending appeal.',
			q: 'May the Davao court act on both?',
			issue: 'Authority of the promulgating court over the notice of appeal and bail pending appeal.',
			alac: {
				answer: 'It may accept the notice of appeal, but not the bail application.',
				legalBasis: 'Rule 120, Sec. 6, par. 2: the executive judge of the place of confinement may promulgate and "shall have authority to accept the notice of appeal and to approve the bail bond pending appeal; provided, that if the decision … changed the nature of the offense from non-bailable to bailable, the application for bail can only be filed and resolved by the appellate court."',
				application: 'Murder (non-bailable when evidence is strong) became homicide (bailable). Bail pending appeal is for the appellate court.',
				conclusion: 'Accept the notice of appeal; refer the bail application to the CA.'
			},
			keys: 'Sec. 6, par. 2; non-bailable to bailable'
		},
		{ cat: 'F', level: 3, topic: 'Jaylo', q: 'What did Jaylo v. Sandiganbayan say about an accused who does not appear at the promulgation of his conviction?', a: 'He loses standing in court and cannot seek relief unless he surrenders and moves for leave within 15 days, showing justifiable cause (Sec. 6).', keys: 'standing; surrender; 15 days' },
		{ cat: 'F', level: 3, topic: 'Consulta', q: 'Why was grave coercion held necessarily included in robbery with intimidation in Consulta v. People?', a: 'Both involve violence, threats or intimidation; the essential ingredients of grave coercion form part of those of robbery with intimidation as alleged.', keys: 'Secs. 4–5' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 120', title: 'Rule 120 integrated',
			facts: 'F is tried on an information charging, in one count, estafa and falsification arising from separate acts. He never objects. The judge, who took over after all witnesses testified, convicts F of both, with a single penalty and a single paragraph of findings. Notice of promulgation is mailed to F, who appears; the judgment is read. Twelve days later, F applies for probation; on day 14, he files a notice of appeal.',
			q: 'Identify the issues and resolve each.',
			issue: 'Duplicity and separate findings; judge who did not hear the witnesses; promulgation; probation and appeal.',
			alac: {
				answer: 'The conviction for both offenses is allowed, but separate penalties and findings are required; the new judge may decide; the promulgation is valid; the application for probation waived the appeal.',
				legalBasis: 'Rule 120, Sec. 3 (convict of as many offenses as charged and proved, with the penalty for each and separate findings); People v. Alfredo (judge who did not hear witnesses may decide on the record); Sec. 6 (promulgation in the accused\'s presence after notice); Sec. 7 and Almero (probation application makes the judgment final and waives appeal).',
				application: 'F waived duplicity, so conviction for both is allowed — but a single penalty and combined findings violate Sec. 3. The successor judge may decide on the record. F was notified and present. By applying for probation on day 12, F waived his right to appeal; the day-14 notice of appeal is ineffective.',
				conclusion: 'The judgment should be corrected to impose separate penalties with separate findings (on F\'s motion, before finality); otherwise, the probation application controls.'
			},
			trap: 'Probation is unavailable if any penalty imposed exceeds six years (PD 968) — check the penalties before assuming F qualifies.',
			keys: 'Sec. 3; Sec. 6; Sec. 7; Almero'
		}
	],
	memorize: [
		'Definition and formal requisites of judgment (Sec. 1)',
		'Contents of conviction (4) and acquittal (2) (Sec. 2)',
		'Several offenses convicted if not objected to; separate penalties and findings (Sec. 3)',
		'Variance: conviction for the lesser offense either way (Secs. 4–5)',
		'Promulgation modes; in absentia; 15 days to surrender and move for leave (Sec. 6)',
		'Finality: appeal period lapses, sentence served, written waiver, probation (Sec. 7)',
		'Decide within 3 months (Const.); promulgate within 90 days (2017 Guidelines)'
	],
	flashcards: [
		['Define judgment.', 'The adjudication that the accused is guilty or not guilty of the offense charged and the imposition of the proper penalty and civil liability, if any.'],
		['Formal requisites?', 'Official language; personally prepared by the judge; signed; facts and law clearly stated.'],
		['Conviction contents?', 'Offense and circumstances; participation; penalty; civil liability.'],
		['Acquittal contents?', 'Absolute failure or reasonable doubt; whether the act existed.'],
		['Charged murder, proved homicide?', 'Convict of homicide.'],
		['Charged homicide, proved murder?', 'Convict of homicide.'],
		['Who may promulgate if the judge is absent?', 'The clerk of court.'],
		['Light offense — promulgation?', 'In the presence of counsel or representative.'],
		['Absent at promulgation without cause?', 'Lose remedies; arrest; unless surrender and motion within 15 days with justifiable cause.'],
		['When final?', 'Appeal period lapses; sentence served; written waiver; probation application.'],
		['Who may move to modify a conviction?', 'Only the accused.'],
		['Period to decide (lower courts)?', '3 months from submission (Const.); promulgation within 90 days (2017 Guidelines).']
	],
	oral: [
		['"What must a judgment of acquittal state?"', 'Whether the prosecution\'s evidence absolutely failed to prove guilt or merely failed to prove it beyond reasonable doubt, and whether the act or omission from which civil liability might arise did not exist — because that determines whether civil liability survives.'],
		['"Explain the variance rule."', 'If the offense proved differs from the offense charged and one includes the other, the accused is convicted of the lesser: the offense proved if it is included in the charge, or the offense charged if it is included in the offense proved.'],
		['"The accused skipped the promulgation. What happens?"', 'The judgment is promulgated by recording it in the docket and serving him a copy. If convicted and his absence was unjustified, he loses his remedies and is arrested — unless within 15 days he surrenders, moves for leave and proves a justifiable cause.']
	],
	checklist: [
		'I can state the formal requisites and contents of conviction and acquittal judgments.',
		'I can apply Sec. 3 on several offenses.',
		'I can apply the variance rule in both directions.',
		'I can describe all modes of promulgation and the in absentia rule.',
		'I can state when a judgment becomes final and who may move to modify it.',
		'I can explain the probation/appeal rule and RA 10707.'
	],
	sheet: [
		'<b>Judgment (Sec. 1):</b> guilty/not guilty + penalty + civil liability; official language; judge-written and signed; facts and law.',
		'<b>Conviction (Sec. 2):</b> offense and circumstances · participation · penalty · civil liability. <b>Acquittal:</b> absolute failure or reasonable doubt · whether the act existed.',
		'<b>Several offenses (Sec. 3):</b> no objection → convict of each proved; separate penalties and findings.',
		'<b>Variance (Secs. 4–5):</b> convict of the lesser (offense proved if included; offense charged if included in proved). Corpus: not a prescribed lesser offense.',
		'<b>Promulgation (Sec. 6):</b> read before accused and judge; light offense → counsel; clerk if judge absent; executive judge where detained; absent → docket entry; unjustified → lose remedies unless surrender + leave within 15 days.',
		'<b>Finality (Sec. 7):</b> appeal period (15 days) · service · written waiver · probation. Only the accused may move to modify. RA 10707: probation after appeal if penalty reduced.',
		'<b>Periods:</b> decide within 3 months (Const.); promulgate within 90 days (2017 Guidelines; 15 days drugs).'
	],
	watchFor: `<strong>Watch for: what was charged vs. proved, and who was in the courtroom.</strong>
<ul>
<li>Is the offense proved included in, or inclusive of, the offense charged? Convict of the lesser.</li>
<li>Was the accused present at promulgation? If not, did he surrender and move within 15 days?</li>
<li>Did the acquittal say whether the act existed? Did the accused apply for probation (waiving appeal)?</li>
</ul>`
};
