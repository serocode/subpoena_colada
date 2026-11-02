import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 116 — Arraignment and Plea. */
export const r116: RuleChapter = {
	id: 'r116',
	n: 116,
	title: 'Arraignment and Plea',
	short: 'R116 Arraignment and Plea',
	tiu: 'pp. 147–157',
	plain: `Arraignment is the moment the accused is formally told, in open court and in a language he understands, exactly what he is charged with, and asked: guilty or not guilty? It is required by due process; without it there can be no valid trial, no trial in absentia, and no double jeopardy. Before he pleads, the accused must be given a lawyer and may ask for clarifications (bill of particulars), ask to see the prosecution's evidence, or ask the court to suspend the arraignment. Once he pleads, most objections to the information and to the preliminary investigation are waived. He may plead guilty to a lesser offense (plea bargaining) if the prosecutor and offended party agree and the court approves.`,
	purpose: `To implement the constitutional right to be informed of the nature and cause of the accusation and to fix the issues for trial.`,
	stage: `After the information is filed and the court acquires jurisdiction over the person (arrest or surrender); before pre-trial (${ruleLink('r118')}) and trial (${ruleLink('r119')}). Arraignment is the cut-off for motions to quash (${ruleLink('r117')}), bills of particulars, and objections to the arrest and preliminary investigation (${ruleLink('r114', 'sections', 'Rule 114, Sec. 26')}).`,
	questions: [
		'How, where and when is the accused arraigned?',
		'What must the court do about counsel before arraignment?',
		'What pleas may be entered, and when is a plea of not guilty entered for the accused?',
		'When may the accused plead guilty to a lesser offense, and with whose consent?',
		'What must the court do when the accused pleads guilty to a capital offense? To a non-capital offense?',
		'When may an improvident plea be withdrawn?',
		'What remedies does the accused have before arraignment (bill of particulars, discovery, suspension)?'
	],
	relations: `Rule 116 implements ${ruleLink('r115')} (right to be informed; right to counsel) and is the gateway to ${ruleLink('r117')} (motion to quash must be filed before plea) and ${ruleLink('r118')} (pre-trial follows arraignment). A pending petition for review under ${ruleLink('r112', 'sections', 'Rule 112, Sec. 4')} and a prejudicial question under ${ruleLink('r111')} suspend arraignment. Arraignment is a requisite of double jeopardy (${ruleLink('r117', 'sections', 'Rule 117, Sec. 7')}) and of trial in absentia (${ruleLink('r115')}).`,
	principles: [
		'<b>Arraignment is indispensable</b> to due process; proceedings without it are void unless the defect is cured by the accused\'s participation without objection (People v. Pangilinan, 2007).',
		'<b>The accused must be present and plead personally.</b>',
		'<b>Plea is the cut-off</b>: defects in the information (other than the non-waivable grounds), the arrest and the preliminary investigation are waived by pleading.',
		'<b>Plea bargaining is a rule of procedure</b> within the Supreme Court\'s rule-making power (Estipona v. Lobrigo, 2017); it is not a right of the accused and requires consent and court approval.',
		'<b>A plea of guilty to a capital offense never dispenses with evidence</b>: searching inquiry plus proof of guilt and degree of culpability.'
	],
	sections: [
		{
			n: '1',
			title: 'Arraignment and plea; how made',
			text: `(a) The accused must be arraigned before the court where the complaint or information was filed or assigned for trial, in open court, by the judge or clerk, by furnishing him a copy of the complaint or information, reading it in the language or dialect known to him, and asking him whether he pleads guilty or not guilty; the prosecution may call witnesses other than those named. (b) "The accused must be present at the arraignment and must personally enter his plea." Both arraignment and plea shall be made of record, but failure to do so does not affect validity. (c) If he refuses to plead or makes a conditional plea, a plea of not guilty is entered. (d) If he pleads guilty but presents exculpatory evidence, his plea is deemed withdrawn and a plea of not guilty entered. (e) For an accused under preventive detention: raffle and transmittal within 3 days from filing; arraignment within 10 days from raffle; pre-trial within 10 days after arraignment. (f) The private offended party shall appear at arraignment for plea bargaining, civil liability and other matters; if he fails to appear despite notice, the court may allow a plea of guilty to a lesser included offense with the conformity of the trial prosecutor alone. (g) Unless a shorter period is provided, arraignment shall be held within 30 days from the date the court acquires jurisdiction over the person of the accused, excluding the pendency of a motion to quash, a bill of particulars or other causes justifying suspension.`,
			plain: `In open court: give him a copy, read it in his language, ask for his plea. He must be there and answer himself. Refusal or a conditional plea = "not guilty." Pleading guilty but explaining away guilt = "not guilty." Detained accused: 3 days to raffle, 10 to arraign, 10 to pre-trial. Others: arraign within 30 days.`,
			reqs: `(1) Proper court; (2) open court; (3) judge or clerk; (4) copy furnished; (5) read in a known language or dialect; (6) asked to plead; (7) personal presence and personal plea.`,
			who: `Judge or clerk; accused (personally); counsel; prosecutor; private offended party.`,
			when: `Detained accused: raffle 3 days; arraignment 10 days from raffle; pre-trial 10 days after. Others: within 30 days from acquisition of jurisdiction over the person (2017 Guidelines: arraignment and pre-trial within 10 calendar days from the court's receipt of the case for detained accused, 30 days for others).`,
			exceptions: `Excluded from the 30 days: pendency of a motion to quash, bill of particulars, or other grounds for suspension. In multiple cases, the reading of the information may be waived with the accused's informed consent (2017 Guidelines, III.8[c]).`,
			effect: `Without arraignment: proceedings are void, no double jeopardy, no trial in absentia (Tiu, citing Taglay v. Daray, 2012). A belated arraignment is cured if the accused participated in trial without objection (People v. Pangilinan, 2007). Under RA 8493, Sec. 7, the accused pleading not guilty states whether his defense is negative or affirmative; an affirmative defense may modify the order of trial.`,
			cases: `${caseLink('pangilinan-2007', 'People v. Pangilinan (2007)')}; <i>People v. Magat</i> (plea conditioned on a lighter penalty is conditional — not guilty entered) and <i>People v. Comendador</i> (plea for leniency is not conditional) — in Tiu.`,
			hypo: `At arraignment, X says, "Guilty, but only if I get probation." That is a conditional plea; the court must enter a plea of not guilty.`,
			trap: `A plea of guilty followed by a claim of self-defense is not a plea of guilty — it is deemed withdrawn and not guilty is entered (Sec. 1[d]).`,
			update: `2017 Revised Guidelines (A.M. No. 15-06-10-SC), III.8: arraignment and pre-trial set within 10 calendar days from the court's receipt of the case for detained accused and within 30 calendar days from acquisition of jurisdiction for others; notice to the private complainant or arresting officer; waiver of reading in multiple cases; plea bargaining proceeds immediately at arraignment if the offended party (private crimes) or arresting officer (victimless crimes) is present to consent with the prosecutor's conformity.`
		},
		{
			n: '2',
			title: 'Plea of guilty to a lesser offense',
			text: `"At arraignment, the accused, with the consent of the offended party and the prosecutor, may be allowed by the trial court to plead guilty to a lesser offense which is necessarily included in the offense charged. After arraignment but before trial, the accused may still be allowed to plead guilty to said lesser offense after withdrawing his plea of not guilty. No amendment of the complaint or information is necessary."`,
			plain: `Plea bargaining: with the prosecutor's and victim's consent and the court's approval, plead guilty to a lesser included offense — at arraignment, or later before trial after withdrawing the not-guilty plea.`,
			reqs: `(1) Lesser offense necessarily included in the offense charged; (2) consent of the offended party (dispensed with if he fails to appear despite notice — Sec. 1[f]) and of the prosecutor; (3) court approval; (4) at arraignment, or after arraignment but before trial.`,
			who: `Accused; prosecutor; offended party; court.`,
			when: `At arraignment, or after arraignment but before trial (in practice, at pre-trial — Rule 118, Sec. 1[a]).`,
			exceptions: `Drug cases: governed by the Supreme Court's plea bargaining framework (A.M. No. 18-03-16-SC, as revised); after Montierro (2022), courts may overrule a prosecution objection based solely on DOJ guidelines inconsistent with the framework, but shall not allow plea bargaining if the objection is valid and supported by evidence (e.g., evidence of guilt is strong, or the accused is a recidivist or habitual offender).`,
			effect: `Conviction for the lesser offense; no amendment of the information needed. A plea to a lesser offense is not the mitigating circumstance of voluntary plea of guilt (which requires a plea to the offense charged — Tiu).`,
			cases: `${caseLink('estipona', 'Estipona v. Lobrigo (2017)')}; ${caseLink('montierro', 'People v. Montierro (2022)')}; <i>Daan v. Sandiganbayan</i> (definition; addressed to the court\'s discretion — in Tiu).`,
			hypo: `Charged with homicide, Y offers at pre-trial to plead guilty to reckless imprudence resulting in homicide. Reckless imprudence is not "necessarily included" in intentional homicide in the technical sense — check whether the lesser offense's elements are included in those alleged. If they are not, the plea cannot be accepted without amending the information.`,
			trap: `The offended party's consent is required in all cases at arraignment — not just in private crimes — unless he fails to appear despite notice.`,
			update: `Tiu reproduces the 2017 Guidelines' "Plea Bargaining Except in Drug Cases" and RA 9165, Sec. 23. Estipona v. Lobrigo (G.R. No. 226679, August 15, 2017, En Banc) declared Sec. 23 unconstitutional for encroaching on the Court's rule-making power; the Court then adopted a plea bargaining framework for drug cases (A.M. No. 18-03-16-SC, 2018), revised and applied in People v. Montierro (G.R. No. 254564, July 26, 2022, En Banc).`,
			verify: `The current text of the revised drug plea bargaining framework (A.M. No. 21-07-16-SC) and its acceptable lesser offenses should be checked before reciting specific equivalents.`
		},
		{
			n: '3',
			title: 'Plea of guilty to capital offense; reception of evidence',
			text: `"When the accused pleads guilty to a capital offense, the court shall conduct a searching inquiry into the voluntariness and full comprehension of the consequences of his plea and require the prosecution to prove his guilt and the precise degree of culpability. The accused may present evidence in his behalf."`,
			plain: `If he pleads guilty to a capital offense, the court must (1) question him carefully to be sure he understands and means it, (2) still make the prosecution prove guilt and degree of culpability, and (3) let him present evidence.`,
			reqs: `(1) Searching inquiry; (2) prosecution proves guilt and precise degree of culpability; (3) opportunity for the accused to present evidence (waivable).`,
			who: `Court; prosecution; accused.`,
			effect: `Failure to conduct a searching inquiry renders the plea improvident and inefficacious (People v. Gumimba, in Tiu). A conviction resting solely on an improvident plea is set aside and the case remanded; one supported by independent evidence stands (People v. Documento, 2010; People v. Gambao, 2013).`,
			cases: `${caseLink('pastor', 'People v. Pastor (2002)')} (guidelines for the searching inquiry); ${caseLink('documento', 'People v. Documento (2010)')}; <i>People v. Francisco</i> (2010 — evidence to determine participation and modifying circumstances; the accused may waive presenting evidence).`,
			hypo: `The accused pleads guilty to qualified rape. The judge asks only, "Do you understand your plea?" and convicts without evidence. The plea is improvident; the conviction rests solely on it, so the case is remanded.`,
			trap: `Since RA 9346 (2006) bars the death penalty, courts still apply Sec. 3's safeguards to offenses that were "capital" — in practice, to grave offenses punishable by reclusion perpetua.`,
			update: `RA 9346 prohibits the imposition of the death penalty; Tiu notes the substitution of reclusion perpetua or life imprisonment (RA 9346, Sec. 2).`,
			verify: `Whether Sec. 3 still applies to offenses formerly capital (now punishable by reclusion perpetua under RA 9346) is not discussed in Tiu; check post-2006 decisions.`
		},
		{
			n: '4',
			title: 'Plea of guilty to non-capital offense; reception of evidence, discretionary',
			text: `"When the accused pleads guilty to a non-capital offense, the court may receive evidence from the parties to determine the penalty to be imposed."`,
			plain: `For non-capital offenses, the court may (but need not) hear evidence — to fix the penalty.`,
			effect: `Discretionary, not mandatory; the accused cannot demand a searching inquiry and trial as in Sec. 3 (People v. Madraga, in Tiu).`,
			hypo: `The accused pleads guilty to homicide. The court may receive evidence on mitigating circumstances (e.g., voluntary surrender) to fix the penalty.`
		},
		{
			n: '5',
			title: 'Withdrawal of improvident plea of guilty',
			text: `"At any time before the judgment of conviction becomes final, the court may permit an improvident plea of guilty to be withdrawn and be substituted by a plea of not guilty."`,
			plain: `A guilty plea made without understanding its consequences can be withdrawn any time before the judgment becomes final.`,
			when: `Before finality of the judgment of conviction.`,
			effect: `On appeal, if the improvident plea was the sole basis of conviction, the case is remanded; if there is independent evidence, the conviction may stand (Documento; Gambao).`,
			cases: `${caseLink('documento', 'People v. Documento (2010)')}; <i>People v. Gambao</i> (2013).`,
			hypo: `The accused pleaded guilty believing he would get probation; the offense is not probationable. Before finality, he may move to withdraw the plea as improvident.`
		},
		{
			n: '6',
			title: 'Duty of court to inform accused of his right to counsel',
			text: `"Before arraignment, the court shall inform the accused of his right to counsel and ask him if he desires to have one. Unless the accused is allowed to defend himself in person or has employed a counsel of his choice, the court must assign a counsel de oficio to defend him."`,
			plain: `Before arraignment, the judge must tell him he has a right to a lawyer and assign one if he has none.`,
			effect: `Arraignment without counsel (and without leave to defend himself) is void.`,
			hypo: `The judge arraigns an unrepresented accused without asking if he wants counsel. The arraignment must be redone.`
		},
		{
			n: '7',
			title: 'Appointment of counsel de oficio',
			text: `Considering the gravity of the offense and the difficulty of the questions, the court shall appoint as counsel de oficio only members of the bar in good standing who can competently defend the accused; where such lawyers are not available, any person, resident of the province and of good repute for probity and ability.`,
			plain: `Appoint a competent lawyer; where none is available, a respected local resident.`,
			hypo: `In a remote municipality without available lawyers, the court appoints a respected retired teacher to assist the accused at arraignment. Allowed by Sec. 7.`
		},
		{
			n: '8',
			title: 'Time for counsel de oficio to prepare for arraignment',
			text: `Whenever counsel de oficio is appointed for arraignment, he shall be given a reasonable time to consult with the accused as to his plea before proceeding.`,
			plain: `Give the appointed lawyer time to talk with the accused before the plea.`,
			hypo: `A lawyer appointed at 9:00 a.m. is asked to proceed with the arraignment at 9:01. He should be given reasonable time to consult.`
		},
		{
			n: '9',
			title: 'Bill of particulars',
			text: `"The accused may, before arraignment, move for a bill of particulars to enable him properly to plead and to prepare for trial. The motion shall specify the alleged defects of the complaint or information and the details desired."`,
			plain: `If the information is too vague, ask before arraignment for the specific details needed to plead and prepare.`,
			reqs: `(1) Before arraignment; (2) specify the defects and the details desired (Tiu adds: the paragraphs where they appear, applying the Rules of Civil Procedure suppletorily).`,
			when: `Before arraignment; compliance within 10 days from notice under the civil rule applied suppletorily (Tiu, p. 155).`,
			effect: `Failure to move before arraignment waives the defect (People v. Jalbuena, in Tiu; People v. Solar). If the prosecution fails to comply, the case may be dismissed for failure to prosecute or the vague averments disregarded.`,
			cases: `${caseLink('solar', 'People v. Solar (2019)')} — the bill of particulars is a remedy for a qualifying circumstance alleged without its ultimate facts.`,
			hypo: `An information alleges "conspiracy" and "treachery" without facts. Before arraignment, the accused moves for particulars on the acts constituting treachery. The prosecution must supply them or treachery cannot be appreciated.`,
			trap: `Under the 2017 Guidelines, a motion for bill of particulars that does not conform to Sec. 9 is a prohibited motion.`
		},
		{
			n: '10',
			title: 'Production or inspection of material evidence in possession of prosecution',
			text: `Upon motion of the accused showing good cause and with notice, the court, to prevent surprise, suppression or alteration, may order the prosecution to produce and permit the inspection and copying or photographing of written statements of the complainant and witnesses in any investigation of the offense, and of designated documents, papers, books, accounts, letters, photographs, objects or tangible things not privileged, which constitute or contain material evidence and are in the possession or control of the prosecution, police or other investigating agencies.`,
			plain: `Criminal discovery: on good cause, the accused may inspect and copy witness statements and material evidence held by the prosecution or police.`,
			reqs: `(1) Motion; (2) good cause; (3) notice; (4) material, non-privileged evidence in the possession or control of the prosecution or investigating agencies.`,
			hypo: `The accused moves to inspect the CCTV footage the police took from the store. If material and not privileged, the court may order production and copying.`
		},
		{
			n: '11',
			title: 'Suspension of arraignment',
			text: `Upon motion by the proper party, arraignment shall be suspended: (a) when the accused appears to be suffering from an unsound mental condition which effectively renders him unable to fully understand the charge and to plead intelligently — the court orders mental examination and, if necessary, confinement; (b) when there exists a prejudicial question; and (c) when a petition for review of the prosecutor's resolution is pending at the DOJ or the Office of the President, "provided, that the period of suspension shall not exceed sixty (60) days counted from the filing of the petition with the reviewing office."`,
			plain: `Three grounds to postpone arraignment: the accused cannot understand (mental condition), a prejudicial civil case, or a pending DOJ/OP appeal (max 60 days).`,
			reqs: `Motion by the proper party; one of the three grounds.`,
			when: `Before arraignment; for (c), not beyond 60 days from filing of the petition with the reviewing office.`,
			exceptions: `A motion for reconsideration pending with the prosecutor (or Ombudsman) is not a ground (Ramiscal v. Sandiganbayan, 2010, in Tiu). Once arraigned before filing a petition for review, the DOJ must dismiss the petition (Adasa v. Abalos, 2007).`,
			effect: `Excluded from the 30-day arraignment period (Sec. 1[g]). Under the 2017 Guidelines, a motion to suspend on grounds not in Sec. 11 is prohibited; a motion based on unsound mental condition or prejudicial question is meritorious.`,
			cases: `${caseLink('adasa', 'Adasa v. Abalos (2007)')}; <i>Ramiscal v. Sandiganbayan</i> (2010).`,
			hypo: `The accused files a petition for review with the DOJ on March 1 and moves to suspend arraignment. The court suspends; by April 30 (60 days) the DOJ has not resolved. The court may proceed with arraignment.`,
			trap: `The 60 days run from the filing of the petition with the reviewing office, not from the court's order of suspension.`
		}
	],
	reqs: [
		{
			name: 'Valid arraignment (Sec. 1)',
			source: 'Rule 116, Sec. 1; Const., Art. III, Sec. 14(2)',
			what: 'Open-court reading of the information in a known language, copy furnished, personal plea.',
			who: 'Judge or clerk; accused personally; counsel.',
			when: 'Within 30 days from acquisition of jurisdiction (10 days from raffle if detained).',
			where: 'Court where the information was filed or assigned.',
			form: 'Of record (but failure to record does not void it).',
			missing: 'Proceedings void; no jeopardy; no trial in absentia. Cured if the accused participates in trial without objecting (People v. Pangilinan, 2007).',
			defect: 'Waivable',
			defectNote: 'The defect of non-arraignment may be cured by the accused\'s active participation without objection; but the requirement itself cannot be dispensed with by the court.'
		},
		{
			name: 'Counsel at arraignment (Secs. 6–8)',
			source: 'Rule 116, Secs. 6–8; Rule 115, Sec. 1(c)',
			what: 'Informing the accused of the right to counsel; appointment of counsel de oficio; reasonable time to consult.',
			who: 'Court.',
			when: 'Before arraignment.',
			missing: 'Arraignment void; must be redone.',
			defect: 'Not waivable',
			defectNote: 'Unless the court allows the accused to defend himself, counsel is indispensable at arraignment.'
		},
		{
			name: 'Plea bargaining (Sec. 2)',
			source: 'Rule 116, Secs. 1(f), 2; Estipona; Montierro; A.M. No. 18-03-16-SC',
			what: 'Plea of guilty to a lesser offense necessarily included in the offense charged.',
			who: 'Accused proposes; prosecutor and offended party consent; court approves.',
			when: 'At arraignment, or after arraignment but before trial.',
			missing: 'Without consent or court approval, no valid plea bargain; a plea to an offense not necessarily included needs amendment of the information.',
			defect: 'Depends on the defect',
			defectNote: 'Lack of the offended party\'s consent is excused if he failed to appear despite notice. In drug cases, a prosecution objection based solely on inconsistent DOJ guidelines may be overruled (Montierro). Accepting a plea to a non-included offense without amendment is a substantive error.'
		},
		{
			name: 'Searching inquiry (Sec. 3)',
			source: 'Rule 116, Sec. 3; People v. Pastor (2002)',
			what: 'Inquiry into voluntariness and full comprehension; prosecution proof of guilt and degree of culpability; opportunity for defense evidence.',
			who: 'Court.',
			when: 'Upon a plea of guilty to a capital offense.',
			missing: 'The plea is improvident; conviction based solely on it is set aside and remanded.',
			defect: 'Not waivable',
			defectNote: 'The accused may waive presenting his own evidence (People v. Francisco, 2010), but the searching inquiry and prosecution evidence are mandatory.'
		},
		{
			name: 'Bill of particulars (Sec. 9)',
			source: 'Rule 116, Sec. 9',
			what: 'Motion specifying the defects and the details desired.',
			who: 'Accused.',
			when: 'Before arraignment.',
			missing: 'Defect or detail is waived; evidence at trial may cure vagueness.',
			defect: 'Waivable',
			defectNote: 'Not raised before arraignment = waived (Jalbuena; Solar).'
		},
		{
			name: 'Suspension of arraignment (Sec. 11)',
			source: 'Rule 116, Sec. 11',
			what: 'Motion on one of the three grounds.',
			who: 'Proper party (usually the accused).',
			when: 'Before arraignment; for DOJ/OP review, up to 60 days from filing of the petition.',
			missing: 'Arraignment proceeds; once arraigned, a petition for review filed afterward is dismissed (Adasa).',
			defect: 'Waivable',
			defectNote: 'If the accused does not move to suspend, he may be arraigned; arraignment waives the right to preliminary investigation or reinvestigation.'
		}
	],
	enums: [
		{
			id: 'E116.1',
			name: 'How arraignment is made',
			source: 'Rule 116, Sec. 1(a)–(b)',
			kind: 'rule',
			memorize: true,
			ordered: true,
			lead: 'Arraignment is made',
			items: [
				{ t: 'Before the court where the complaint or information was filed or assigned for trial', d: 'The court with the case — not the court of the place of arrest.', s: 'in the proper court' },
				{ t: 'In open court, by the judge or clerk', d: 'A public act on the record, not in chambers.', s: 'in open court by judge or clerk' },
				{ t: 'By furnishing the accused a copy of the complaint or information', d: 'So he has the accusation in writing.', s: 'copy furnished' },
				{ t: 'By reading it in the language or dialect known to him', d: 'Through an interpreter if needed.', s: 'read in a known language' },
				{ t: 'By asking him whether he pleads guilty or not guilty', d: 'If he refuses to plead or pleads conditionally, a plea of not guilty is entered for him (Sec. 1[c]).', s: 'asked to plead' },
				{ t: 'With the accused present, entering his plea personally', d: 'Both made of record; failure to record does not affect validity.', s: 'accused present; personal plea' }
			],
			question: 'How is arraignment made?'
		},
		{
			id: 'E116.2',
			name: 'When a plea of not guilty is entered for the accused',
			source: 'Rule 116, Sec. 1(c)–(d); Tiu, p. 151',
			kind: 'rule',
			lead: 'A plea of not guilty is entered when the accused',
			items: [
				{ t: 'Refuses to plead', d: 'Silence or refusal.', s: 'refuses to plead' },
				{ t: 'Makes a conditional plea', d: 'E.g., "guilty if given a lighter penalty" (People v. Magat); a plea for leniency is not conditional (People v. Comendador).', s: 'conditional plea' },
				{ t: 'Pleads guilty but presents exculpatory evidence', d: 'The guilty plea is deemed withdrawn.', s: 'guilty plea with exculpatory evidence' }
			],
			exceptions: 'And, of course, when he himself pleads not guilty.',
			question: 'When is a plea of not guilty entered for the accused?'
		},
		{
			id: 'E116.3',
			name: 'Requisites of plea bargaining',
			source: 'Rule 116, Secs. 1(f), 2; Estipona v. Lobrigo (2017); People v. Montierro (2022)',
			kind: 'rule',
			memorize: true,
			lead: 'The accused may plead guilty to a lesser offense when',
			items: [
				{ t: 'The lesser offense is necessarily included in the offense charged', d: 'Its elements form part of those alleged.', s: 'lesser offense necessarily included' },
				{ t: 'The offended party consents', d: 'Dispensed with if he fails to appear at arraignment despite notice (then the prosecutor\'s conformity alone suffices).', s: 'offended party consents (unless absent despite notice)' },
				{ t: 'The prosecutor consents', d: 'In drug cases, an objection based solely on DOJ guidelines inconsistent with the Court\'s framework may be overruled (Montierro).', s: 'prosecutor consents' },
				{ t: 'The court approves', d: 'Plea bargaining is addressed to the court\'s sound discretion (Daan v. Sandiganbayan).', s: 'court approves' },
				{ t: 'It is made at arraignment, or after arraignment but before trial', d: 'After arraignment, the plea of not guilty is first withdrawn.', s: 'at arraignment or before trial' }
			],
			exceptions: 'No amendment of the information is needed. Drug cases follow the Supreme Court\'s plea bargaining framework.',
			question: 'What are the requisites of a valid plea bargain?'
		},
		{
			id: 'E116.4',
			name: 'Duties of the court when the accused pleads guilty to a capital offense',
			source: 'Rule 116, Sec. 3',
			kind: 'rule',
			memorize: true,
			ordered: true,
			lead: 'The court shall',
			items: [
				{ t: 'Conduct a searching inquiry into the voluntariness and full comprehension of the consequences of the plea', d: 'Guided by People v. Pastor.', s: 'searching inquiry' },
				{ t: 'Require the prosecution to prove guilt and the precise degree of culpability', d: 'Participation and modifying circumstances.', s: 'prosecution proves guilt and degree of culpability' },
				{ t: 'Allow the accused to present evidence', d: 'Which he may waive.', s: 'allow defense evidence' }
			],
			question: 'What must the court do when the accused pleads guilty to a capital offense?'
		},
		{
			id: 'E116.5',
			name: 'Guidelines for the searching inquiry',
			source: 'People v. Pastor, G.R. No. 140208, March 12, 2002 (in Tiu, pp. 153–154)',
			kind: 'case',
			lead: 'The judge should',
			items: [
				{ t: 'Ascertain how the accused came into custody, whether he had competent counsel during custodial and preliminary investigation, and under what conditions he was detained and interrogated', d: 'To rule out coercion.', s: 'custody, counsel and conditions of detention' },
				{ t: 'Ask defense counsel whether he conferred with the accused and fully explained the meaning and consequences of the plea', d: 'Counsel\'s assurance helps show an informed plea, but the judge must still question the accused himself.', s: 'question defense counsel' },
				{ t: 'Elicit the accused\'s personal profile', d: 'Age, socio-economic status, education.', s: 'personal profile' },
				{ t: 'Inform him of the exact penalty and that he will serve it', d: 'Dispel hopes of leniency.', s: 'inform of the exact penalty' },
				{ t: 'Ensure he knows the crime and its elements', d: 'Including any qualifying circumstance, so he knows exactly what he is admitting.', s: 'explain the crime and its elements' },
				{ t: 'Ask all questions in a language he understands', d: 'Through an interpreter if needed, so the answers are truly his.', s: 'use a language he understands' },
				{ t: 'Satisfy himself that the accused is truly guilty', d: 'Have him narrate or re-enact the crime or supply missing details.', s: 'have him narrate or re-enact' }
			],
			question: 'What guidelines should a judge follow in conducting a searching inquiry?'
		},
		{
			id: 'E116.6',
			name: 'Grounds to suspend arraignment',
			source: 'Rule 116, Sec. 11',
			kind: 'rule',
			memorize: true,
			lead: 'Upon motion, arraignment shall be suspended when',
			items: [
				{ t: 'The accused appears to suffer from an unsound mental condition', d: 'Rendering him unable to understand the charge and plead intelligently; mental examination and, if needed, confinement.', s: 'unsound mental condition' },
				{ t: 'There exists a prejudicial question', d: 'Rule 111, Secs. 6–7.', s: 'prejudicial question' },
				{ t: 'A petition for review of the prosecutor\'s resolution is pending at the DOJ or the Office of the President', d: 'Suspension not to exceed 60 days from filing of the petition.', s: 'pending petition for review — max 60 days' }
			],
			exceptions: 'A pending motion for reconsideration with the prosecutor or Ombudsman is not a ground (Ramiscal, 2010). Tiu also mentions escape of the accused as a practical cause of non-arraignment.',
			question: 'When shall the arraignment be suspended?'
		},
		{
			id: 'E116.7',
			name: 'Remedies of the accused before arraignment',
			source: 'Tiu, pp. 147–148 (Rule 116, Secs. 9–11; Rule 117; Rule 112, Sec. 6; Rule 114, Sec. 26)',
			kind: 'notes',
			lead: 'Before arraignment, the accused may',
			items: [
				{ t: 'Move for a bill of particulars', d: 'To get the details he needs to plead and prepare for trial; the motion must point out the defects and the details wanted (Sec. 9).', s: 'bill of particulars' },
				{ t: 'Move for production or inspection of material evidence', d: 'The court may order the prosecution to produce material evidence in its possession (Sec. 10).', s: 'discovery' },
				{ t: 'Move to suspend arraignment', d: 'On the grounds in Sec. 11: unsound mental condition, a prejudicial question, or a pending petition for review (suspension up to 60 days).', s: 'suspension' },
				{ t: 'Move to quash', d: 'Rule 117, including lack of jurisdiction over his person (illegal arrest).', s: 'motion to quash' },
				{ t: 'Move for preliminary investigation or reinvestigation', d: 'Absence or irregularity of PI; within 5 days after learning of filing in inquest cases (Rule 112, Sec. 6).', s: 'PI or reinvestigation' }
			],
			exceptions: 'All are waived by arraignment, except the non-waivable grounds to quash (Rule 117, Sec. 9).',
			question: 'What remedies are available to the accused before arraignment?'
		},
		{
			id: 'E116.8',
			name: 'When re-arraignment is required',
			source: 'Tiu, p. 156 (Cabangangan v. Concepcion; Kummer v. People)',
			kind: 'notes',
			lead: 'Re-arraignment is required',
			items: [
				{ t: 'After a substantial amendment of the information', d: 'The accused must be informed of the new accusation.', s: 'substantial amendment' },
				{ t: 'After substitution of the information', d: 'A new offense requires a new plea.', s: 'substitution' }
			],
			exceptions: 'Not required for formal amendments that do not prejudice the accused (e.g., a change of date — Kummer v. People).',
			question: 'When must an accused be re-arraigned?'
		}
	],
	comparisons: [
		{
			id: 'C116.1',
			title: 'Plea of guilty to a capital offense vs. to a non-capital offense',
			a: 'Capital offense (Sec. 3)',
			b: 'Non-capital offense (Sec. 4)',
			meaning: ['Plea of guilty to an offense punishable by death (in practice, the gravest offenses).', 'Plea of guilty to any other offense.'],
			basis: ['Rule 116, Sec. 3', 'Rule 116, Sec. 4'],
			who: ['Court must act; prosecution must prove; accused may present evidence.', 'Court may receive evidence.'],
			when: ['At arraignment (or on re-arraignment).', 'Same.'],
			reqs: ['Searching inquiry; proof of guilt and precise degree of culpability; opportunity for defense evidence.', 'None mandatory; evidence only to fix the penalty.'],
			time: ['—', '—'],
			exceptions: ['The accused may waive presenting his own evidence.', 'The accused cannot demand a searching inquiry (Madraga).'],
			effect: ['Without compliance, the plea is improvident; conviction based solely on it is set aside.', 'Plea is a judicial confession; conviction may follow immediately.'],
			trap: ['Convicting on the plea alone.', 'Treating Sec. 4\'s hearing as mandatory.'],
			decisive: 'Mandatory safeguards (capital) vs. discretionary reception of evidence (non-capital).',
			hypo: 'Two accused plead guilty on the same day — one to parricide (formerly capital), one to theft. For the first, the court conducts a searching inquiry and requires evidence; for the second, it may sentence immediately or hear evidence on mitigating circumstances.'
		},
		{
			id: 'C116.2',
			title: 'Plea of guilty to the offense charged vs. plea of guilty to a lesser offense (plea bargaining)',
			a: 'Plea to the offense charged',
			b: 'Plea to a lesser included offense',
			meaning: ['Admission of the offense as charged.', 'Admission of a lesser offense necessarily included in the charge.'],
			basis: ['Rule 116, Secs. 1, 3, 4; RPC Art. 13(7)', 'Rule 116, Secs. 1(f), 2'],
			who: ['Accused alone.', 'Accused with consent of prosecutor and offended party; court approval.'],
			when: ['At arraignment (mitigating only if before the prosecution presents evidence).', 'At arraignment, or after arraignment before trial.'],
			reqs: ['Voluntary, informed plea; for capital offenses, Sec. 3 safeguards.', 'Necessarily included offense; consents; court approval.'],
			time: ['—', 'Before trial.'],
			exceptions: ['—', 'Offended party\'s consent excused if absent despite notice; drug cases under the SC framework.'],
			effect: ['Conviction for the offense charged; voluntary plea of guilt may be mitigating.', 'Conviction for the lesser offense; not the mitigating circumstance of plea of guilt; no amendment needed.'],
			trap: ['Claiming the mitigating circumstance after a plea bargain.', 'Accepting a plea to a non-included offense without amending the information.'],
			decisive: 'Whether the accused admits the charge as filed or a lesser included offense by agreement.',
			hypo: 'Charged with frustrated homicide, A pleads guilty as charged at arraignment — he may get the mitigating circumstance. B, charged with the same, pleads guilty to less serious physical injuries with consent — he is convicted of the lesser offense, without the mitigating circumstance.'
		},
		{
			id: 'C116.3',
			title: 'Motion for bill of particulars vs. motion to quash',
			a: 'Bill of particulars (Sec. 9)',
			b: 'Motion to quash (Rule 117)',
			meaning: ['Request for details of a vague but valid information.', 'Attack on the information on the grounds in Rule 117, Sec. 3.'],
			basis: ['Rule 116, Sec. 9', 'Rule 117, Secs. 1–3'],
			who: ['Accused.', 'Accused.'],
			when: ['Before arraignment.', 'Before plea (non-waivable grounds at any time).'],
			reqs: ['Specify defects and details desired.', 'In writing, signed, specifying the factual and legal grounds.'],
			time: ['Compliance within 10 days (suppletory civil rule).', '—'],
			exceptions: ['Non-conforming motion is prohibited (2017 Guidelines).', 'Grounds not in Sec. 3 are prohibited (2017 Guidelines).'],
			effect: ['The information is clarified; vague averments may be disregarded if not supplied.', 'Information quashed (amendment may be ordered).'],
			trap: ['Using a motion to quash to cure mere vagueness (bill of particulars is the remedy).', 'Filing either after plea.'],
			decisive: 'Vagueness (particulars) vs. a legal defect listed in Rule 117 (quash).',
			hypo: 'An information for estafa does not say how the deceit was committed — bill of particulars. An information for estafa that alleges no damage at all — motion to quash (facts do not constitute an offense).'
		},
		{
			id: 'C116.4',
			title: 'Conditional (provisional) arraignment vs. regular arraignment',
			a: 'Conditional arraignment',
			b: 'Regular arraignment',
			meaning: ['Arraignment subject to express conditions, usually to accommodate a request to travel pending reinvestigation (a Sandiganbayan practice).', 'Simple, unconditional arraignment under Sec. 1.'],
			basis: ['People v. Espinosa; Albert v. Sandiganbayan (2009); Braza v. Sandiganbayan (2013) — in Tiu', 'Rule 116, Sec. 1'],
			who: ['Court and accused, with the accused\'s informed consent to the conditions.', 'Court and accused.'],
			when: ['While reinvestigation or other incidents are pending.', 'In the ordinary course.'],
			reqs: ['Conditions must be "unmistakable, express, informed and enlightened" and stated in the order.', 'Sec. 1 formalities.'],
			time: ['—', '—'],
			exceptions: ['If conditions are not expressly stated, the arraignment is deemed simple and unconditional (Albert).', '—'],
			effect: ['The accused may be estopped from invoking double jeopardy on an amended information (Braza).', 'Jeopardy may attach on a valid information upon plea.'],
			trap: ['Assuming the arraignment was conditional without written conditions in the order.', '—'],
			decisive: 'Whether the conditions were expressly stated in the order and knowingly accepted.',
			hypo: 'The Sandiganbayan arraigns X "so he may travel," but the minutes only say he pleaded not guilty and may travel. The arraignment is unconditional; if the information is later amended substantially, X may invoke double jeopardy issues.'
		}
	],
	cases: [
		{
			id: 'estipona',
			name: 'Estipona v. Lobrigo',
			cite: 'G.R. No. 226679, August 15, 2017 (En Banc)',
			from: 'Checked',
			facts: 'Charged with possession of a small quantity of shabu, the accused moved to plead guilty to a lesser offense (possession of paraphernalia). The prosecution objected, invoking RA 9165, Sec. 23, which prohibited plea bargaining in drug cases. The trial court denied the motion.',
			issue: 'Is Sec. 23 of RA 9165 constitutional?',
			ruling: 'No. Sec. 23 was declared unconstitutional.',
			doctrine: 'Plea bargaining is a rule of procedure within the Supreme Court\'s exclusive rule-making power (Const., Art. VIII, Sec. 5[5]); Congress cannot prohibit it. There is no constitutional right to plea bargain; acceptance of an offer requires the consent of the prosecutor and the offended party and the court\'s approval.',
			reasoning: 'Sec. 23 encroached on the Court\'s power to promulgate rules of procedure.',
			rule: 'Rule 116, Sec. 2; Rule 118, Sec. 1(a).',
			args: 'The State argued that Sec. 23 was a substantive policy choice by Congress; the Court held plea bargaining procedural.',
			hypo: 'An accused charged with sale of a small quantity of shabu asks to plead to a lesser offense; the court may consider it under the Supreme Court\'s plea bargaining framework.',
			examQ: 'Is plea bargaining allowed in drug cases? Discuss Estipona v. Lobrigo.',
			also: ['r118'],
			verify: 'Confirmed through summaries and later decisions; read the full text for the separate opinions.'
		},
		{
			id: 'montierro',
			name: 'People v. Montierro (with Baldadera v. People; A.M. No. 21-07-16-SC)',
			cite: 'G.R. No. 254564, July 26, 2022 (En Banc)',
			from: 'Checked',
			facts: 'Trial courts approved plea bargains in drug cases over the prosecution\'s objection, which was based on DOJ circulars restricting plea bargaining for certain offenses.',
			issue: 'May a court approve a plea bargain over the prosecution\'s objection?',
			ruling: 'Yes, in certain cases. The assailed CA rulings were set aside and the cases remanded to determine whether evidence of guilt is strong and whether the accused were recidivists or habitual offenders.',
			doctrine: 'Courts may overrule the prosecution\'s objection and approve a plea bargain if the objection is not supported by the evidence on record or is based solely on DOJ internal rules inconsistent with the Court\'s Plea Bargaining Framework in Drugs Cases; but courts shall not allow plea bargaining if the objection is valid and supported by evidence — e.g., evidence of guilt is strong, or the accused is a recidivist or habitual offender.',
			reasoning: 'Plea bargaining is procedural and within the Court\'s rule-making power; the DOJ cannot override the Court\'s framework by internal circulars.',
			rule: 'Rule 116, Sec. 2; A.M. No. 18-03-16-SC; A.M. No. 21-07-16-SC.',
			args: 'The prosecution argued its consent is indispensable; a dissent held that view, but the majority adopted the rule above.',
			hypo: 'The prosecutor objects to a plea bargain solely because a DOJ circular disallows it for that offense. The court may overrule the objection if the plea complies with the Court\'s framework and evidence of guilt is not strong.',
			examQ: 'Is the consent of the prosecution indispensable to plea bargaining in drug cases?',
			also: ['r118'],
			verify: 'Holding from excerpts and summaries.'
		},
		{
			id: 'pastor',
			name: 'People v. Pastor',
			cite: 'G.R. No. 140208, March 12, 2002',
			from: 'Tiu',
			facts: 'The accused pleaded guilty to a capital offense; the trial court\'s inquiry was perfunctory.',
			issue: 'What does a "searching inquiry" require?',
			ruling: 'The inquiry must establish voluntariness and full comprehension; the Court laid down guidelines.',
			doctrine: 'The searching inquiry focuses on (1) voluntariness and (2) full comprehension of the consequences; guidelines in E116.5.',
			reasoning: 'The irreversibility of the gravest penalties requires care to avoid improvident pleas.',
			rule: 'Rule 116, Sec. 3.',
			hypo: 'A judge who asks only whether the accused understands the charge, without asking about his custody, counsel and expectations of leniency, has not conducted a searching inquiry.',
			examQ: 'What are the guidelines for a searching inquiry?',
			verify: 'Facts summarized generally; Tiu reproduces the guidelines.'
		},
		{
			id: 'documento',
			name: 'People v. Documento',
			cite: 'G.R. No. 188706, March 17, 2010',
			from: 'Tiu',
			facts: 'The accused pleaded guilty to a capital offense; the trial court did not inform him that his plea would not reduce the penalty, nor of his right to present evidence.',
			issue: 'Must the conviction be set aside because the plea was improvident?',
			ruling: 'No. The plea was improvident, but the conviction rested on sufficient independent evidence and was sustained.',
			doctrine: 'Convictions based on an improvident plea of guilt are set aside only if the plea is the sole basis of the judgment; if the court relied on sufficient and credible evidence, the conviction stands.',
			reasoning: 'The plea loses legal significance where independent evidence proves guilt (also People v. Mira; People v. Gambao).',
			rule: 'Rule 116, Secs. 3 and 5.',
			hypo: 'An improvident plea, but three eyewitnesses and forensic evidence were presented — conviction affirmed.',
			examQ: 'What is the effect on appeal of an improvident plea of guilty?'
		},
		{
			id: 'pangilinan-2007',
			name: 'People v. Pangilinan (belated arraignment)',
			cite: 'G.R. No. 171020, March 14, 2007',
			from: 'Tiu',
			facts: 'The accused was arraigned only after the case had been submitted for decision; his counsel had participated in trial and cross-examined prosecution witnesses without objecting.',
			issue: 'Was the conviction void for lack of timely arraignment?',
			ruling: 'No. The defect was cured.',
			doctrine: 'Jurisdiction over the person is acquired by arrest, not arraignment. A belated arraignment does not void the proceedings where the accused, through counsel, actively participated in trial without objection and was not prejudiced.',
			reasoning: 'Counsel\'s active participation shows awareness of the charge.',
			rule: 'Rule 116, Sec. 1.',
			args: 'The accused argued the court had no jurisdiction over him during the bail hearings; the Court held his arrest conferred jurisdiction.',
			hypo: 'An accused never arraigned objects at the start of trial — the court must arraign him first; if he objects only after conviction, the defect is cured.',
			examQ: 'What is the effect of a belated arraignment after the case was submitted for decision?'
		},
		{
			id: 'adasa',
			name: 'Adasa v. Abalos',
			cite: '2007 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused was arraigned before she filed a petition for review with the DOJ; the DOJ nevertheless entertained the petition.',
			issue: 'May the DOJ entertain a petition for review filed after arraignment?',
			ruling: 'No.',
			doctrine: 'Arraignment before the filing of a petition for review is a ground for its dismissal under DC 70; the DOJ must not give it due course. Pleading to the charge waives the right to preliminary investigation and to question its irregularities, and is tantamount to a finding of probable cause.',
			reasoning: 'DC 70, Secs. 7 and 12.',
			rule: 'Rule 116, Sec. 11(c); Rule 112, Sec. 4.',
			hypo: 'The accused pleads not guilty on May 1 and files a petition for review on May 5 — the DOJ must dismiss it.',
			examQ: 'May the Secretary of Justice entertain a petition for review filed after the accused was arraigned?',
			also: ['r112'],
			verify: 'G.R. number not in Tiu.'
		}
	],
	deadlines: [
		{ ref: 'Rule 116, Sec. 1(e)', act: 'Raffle and transmit records (detained accused)', who: 'Executive judge / clerk', period: '3 days', start: 'Filing of the information', exceptions: '—', effect: 'Speedy-trial violation if unjustified', kind: 'constitutional' },
		{ ref: 'Rule 116, Sec. 1(e)', act: 'Arraign the detained accused', who: 'Court', period: '10 days', start: 'Date of raffle', exceptions: 'Excluded delays', effect: 'Speedy-trial violation if unjustified', kind: 'constitutional' },
		{ ref: 'Rule 116, Sec. 1(e)', act: 'Hold pre-trial (detained accused)', who: 'Court', period: '10 days', start: 'Arraignment', exceptions: '—', effect: '—', kind: 'constitutional' },
		{ ref: 'Rule 116, Sec. 1(g)', act: 'Arraign the accused', who: 'Court', period: '30 days', start: 'Acquisition of jurisdiction over the person', exceptions: 'Excludes pendency of motion to quash, bill of particulars, suspension; shorter periods by special law or SC circular', effect: 'Ground for dismissal for denial of speedy trial', kind: 'constitutional' },
		{ ref: '2017 Revised Guidelines, III.8(a)', act: 'Set arraignment and pre-trial', who: 'Court', period: '10 calendar days (detained) / 30 calendar days (not detained)', start: 'Court\'s receipt of the case (detained) / acquisition of jurisdiction (not detained)', exceptions: 'Shorter periods by special law or SC circular', effect: '—', kind: 'procedural' },
		{ ref: 'RA 8493, Sec. 7', act: 'Time to prepare for trial after a plea of not guilty', who: 'Accused', period: 'At least 15 days', start: 'Plea of not guilty', exceptions: '—', effect: 'Trial cannot start earlier without his consent', kind: 'procedural' },
		{ ref: 'Rule 116, Sec. 5', act: 'Withdraw an improvident plea of guilty', who: 'Accused (with court permission)', period: 'Any time before the judgment becomes final', start: '—', exceptions: '—', effect: 'Plea of not guilty substituted', kind: 'procedural' },
		{ ref: 'Rule 116, Sec. 9', act: 'Move for bill of particulars', who: 'Accused', period: 'Before arraignment', start: '—', exceptions: '—', effect: 'Waived; vague averments may be cured by evidence', kind: 'procedural' },
		{ ref: 'Rule 116, Sec. 11(c)', act: 'Suspension of arraignment for pending DOJ/OP review', who: 'Court', period: 'Not more than 60 days', start: 'Filing of the petition with the reviewing office', exceptions: 'MR pending with the prosecutor is not a ground', effect: 'Arraignment may proceed after 60 days', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'Arraignment may be dispensed with if the accused has a lawyer and knows the charge.', right: 'It is mandatory; only a defect cured by participation without objection is excused (Pangilinan, 2007).', example: '—' },
		{ wrong: 'A plea of "guilty, but it was self-defense" is a plea of guilty.', right: 'A plea of not guilty is entered (Sec. 1[d]).', example: '—' },
		{ wrong: 'A plea for leniency is a conditional plea.', right: 'No; a plea conditioned on a lighter penalty is (Magat vs. Comendador).', example: '—' },
		{ wrong: 'Plea bargaining is a right of the accused.', right: 'Requires consent of the prosecutor and offended party and court approval (Estipona; Daan).', example: '—' },
		{ wrong: 'Plea bargaining is never allowed in drug cases.', right: 'Sec. 23 of RA 9165 was struck down (Estipona, 2017); a framework applies; the court may overrule objections based solely on inconsistent DOJ circulars (Montierro, 2022).', example: '—' },
		{ wrong: 'Plea bargaining is allowed at any time before judgment.', right: 'At arraignment, or after arraignment but before trial.', example: '—' },
		{ wrong: 'A plea of guilty to a capital offense ends the case.', right: 'Searching inquiry plus evidence of guilt and degree of culpability are mandatory.', example: '—' },
		{ wrong: 'An improvident plea always leads to remand.', right: 'Only if it is the sole basis of conviction (Documento; Gambao).', example: '—' },
		{ wrong: 'A pending MR before the prosecutor suspends arraignment.', right: 'Only a petition for review at the DOJ or OP does, for up to 60 days (Ramiscal).', example: '—' },
		{ wrong: 'The 60-day suspension runs from the court\'s order.', right: 'From the filing of the petition with the reviewing office.', example: '—' }
	],
	corrections: [
		{ old: 'Plea bargaining prohibited in drug cases (RA 9165, Sec. 23); 2017 Guidelines say "Plea Bargaining Except in Drug Cases."', fix: 'Sec. 23 was declared unconstitutional in Estipona v. Lobrigo (2017); the Supreme Court adopted a plea bargaining framework for drug cases (A.M. No. 18-03-16-SC, 2018) and, in People v. Montierro (2022), held that courts may overrule prosecution objections based solely on inconsistent DOJ guidelines.', source: 'Estipona v. Lobrigo, G.R. No. 226679 (2017); People v. Montierro, G.R. No. 254564 (2022)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Arraignment', q: 'How is arraignment made?', a: 'E116.1: proper court; open court by judge or clerk; copy furnished; read in a known language; asked to plead; accused present and pleads personally; made of record.', keys: 'Sec. 1(a)–(b)' },
		{ cat: 'A', level: 2, topic: 'Plea bargaining', q: 'What are the requisites of plea bargaining?', a: 'E116.3: lesser offense necessarily included; consent of offended party (excused if absent despite notice) and prosecutor; court approval; at arraignment or after arraignment but before trial. No amendment needed. Drug cases follow the SC framework (Estipona; Montierro).', keys: 'Sec. 2; Sec. 1(f)' },
		{ cat: 'A', level: 2, topic: 'Capital offense', q: 'What must the court do when the accused pleads guilty to a capital offense? Give the Pastor guidelines.', a: 'E116.4 and E116.5.', keys: 'Sec. 3; Pastor' },
		{ cat: 'A', level: 2, topic: 'Suspension', q: 'When shall arraignment be suspended?', a: 'E116.6: unsound mental condition; prejudicial question; pending petition for review at the DOJ or OP (max 60 days from filing).', keys: 'Sec. 11' },
		{ cat: 'A', level: 3, topic: 'Remedies', q: 'What remedies does the accused have before arraignment?', a: 'E116.7: bill of particulars; discovery (Sec. 10); suspension; motion to quash; PI or reinvestigation.', keys: 'before plea' },
		{ cat: 'B', level: 3, topic: 'Capital vs non-capital', q: 'Distinguish a plea of guilty to a capital offense from one to a non-capital offense.', a: 'See C116.1.', keys: 'mandatory vs discretionary' },
		{ cat: 'B', level: 3, topic: 'Plea to charge vs lesser', q: 'Distinguish a plea of guilty to the offense charged from a plea of guilty to a lesser offense.', a: 'See C116.2.', keys: 'consent; mitigating; necessarily included' },
		{ cat: 'B', level: 3, topic: 'Particulars vs quash', q: 'Distinguish a motion for bill of particulars from a motion to quash.', a: 'See C116.3.', keys: 'vagueness vs legal defect' },
		{ cat: 'C', level: 1, topic: 'Presence', q: 'Counsel may enter the plea for the accused at arraignment if the accused is sick.', tf: false, short: 'False. The accused must be present and personally enter his plea (Sec. 1[b]).', keys: 'Sec. 1(b)' },
		{ cat: 'C', level: 1, topic: 'Conditional plea', q: 'When the accused makes a conditional plea of guilty, the court shall enter a plea of not guilty.', tf: true, short: 'True (Sec. 1[c]).', keys: 'Sec. 1(c)' },
		{ cat: 'C', level: 2, topic: 'Exculpatory evidence', q: 'An accused who pleads guilty but claims self-defense remains bound by his plea of guilty.', tf: false, short: 'False. His plea is deemed withdrawn and a plea of not guilty entered (Sec. 1[d]).', keys: 'Sec. 1(d)' },
		{ cat: 'C', level: 2, topic: 'Plea bargaining', q: 'A plea of guilty to a lesser offense may be made at any time before judgment.', tf: false, short: 'False. At arraignment, or after arraignment but before trial (Sec. 2).', keys: 'before trial' },
		{ cat: 'C', level: 2, topic: 'Plea bargaining', q: 'When the accused pleads guilty to a lesser offense, the information must be amended to charge that offense.', tf: false, short: 'False. "No amendment of the complaint or information is necessary" (Sec. 2).', keys: 'Sec. 2' },
		{ cat: 'C', level: 3, topic: 'Plea bargaining', q: 'If the offended party fails to appear at arraignment despite notice, the court may allow a plea of guilty to a lesser included offense with the conformity of the prosecutor alone.', tf: true, short: 'True (Sec. 1[f]).', keys: 'Sec. 1(f)' },
		{ cat: 'C', level: 3, topic: 'Suspension', q: 'A motion for reconsideration of the prosecutor\'s resolution pending before the prosecutor\'s office is a ground to suspend arraignment.', tf: false, short: 'False. Only a petition for review pending at the DOJ or OP (Sec. 11[c]; Ramiscal v. Sandiganbayan).', keys: 'Sec. 11(c); Ramiscal' },
		{ cat: 'C', level: 3, topic: 'Bill of particulars', q: 'Failure to move for a bill of particulars before arraignment waives the details desired.', tf: true, short: 'True (Jalbuena; Solar).', keys: 'before arraignment' },
		{ cat: 'C', level: 4, topic: 'Drug cases', q: 'Plea bargaining is prohibited in prosecutions under the Comprehensive Dangerous Drugs Act.', tf: false, short: 'False. Estipona v. Lobrigo (2017) declared RA 9165, Sec. 23 unconstitutional; plea bargaining in drug cases follows the Supreme Court\'s framework.', update: 'Tiu (2017) and the 2017 Guidelines reflect the prior prohibition.', keys: 'Estipona' },
		{ cat: 'C', level: 4, topic: 'Improvident plea', q: 'A conviction following an improvident plea of guilty must always be set aside and remanded.', tf: false, short: 'False. Only if the plea was the sole basis; if supported by independent evidence, it stands (Documento; Gambao).', keys: 'sole basis' },
		{ cat: 'C', level: 5, topic: 'Drug cases', q: 'In a drug case, the court may approve a plea bargain over the prosecution\'s objection when the objection rests solely on a DOJ circular inconsistent with the Court\'s plea bargaining framework.', tf: true, short: 'True (People v. Montierro, 2022) — but not if the objection is valid and supported by evidence, e.g., strong evidence of guilt or recidivism.', keys: 'Montierro' },
		{
			cat: 'D', level: 4, topic: 'Conditional plea', title: 'Guilty — "if I get probation"',
			facts: 'At arraignment for estafa, A says: "I plead guilty, Your Honor, if I will be granted probation." The court records a plea of guilty and sentences him.',
			q: 'Was the procedure correct?',
			issue: 'Whether a plea conditioned on probation is a valid plea of guilty.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 116, Sec. 1(c): "When the accused refuses to plead or makes a conditional plea, a plea of not guilty shall be entered for him." People v. Magat (in Tiu): a plea conditioned on the penalty is a conditional plea.',
				application: 'A\'s plea was conditioned on a favorable sentence (probation). It is not an unconditional admission.',
				conclusion: 'The court should have entered a plea of not guilty and proceeded to pre-trial; the judgment should be set aside.'
			},
			missing: 'If A had simply asked for leniency after pleading guilty, the plea would stand (People v. Comendador).',
			keys: 'Sec. 1(c); Magat'
		},
		{
			cat: 'D', level: 4, topic: 'Plea bargaining', title: 'Victim absent at arraignment',
			facts: 'In a frustrated homicide case, the victim is duly notified but does not appear at arraignment. The accused offers to plead guilty to serious physical injuries; the trial prosecutor agrees.',
			q: 'May the court accept the plea?',
			issue: 'Whether a plea to a lesser offense may be accepted without the offended party\'s consent when he fails to appear.',
			alac: {
				answer: 'Yes, if serious physical injuries is necessarily included in the frustrated homicide charged.',
				legalBasis: 'Rule 116, Sec. 1(f): if the offended party fails to appear despite due notice, the court may allow a plea of guilty to a lesser offense necessarily included in the offense charged with the conformity of the trial prosecutor alone. Sec. 2.',
				application: 'The victim was duly notified and absent. The prosecutor conforms. Physical injuries are generally considered included in a frustrated homicide charge where the information alleges the wounds inflicted.',
				conclusion: 'The court may approve the plea and convict for serious physical injuries.'
			},
			missing: 'Whether the information alleges facts constituting serious physical injuries (nature and duration of the injuries). If not, the offense may not be "necessarily included."',
			keys: 'Sec. 1(f); necessarily included'
		},
		{
			cat: 'D', level: 4, topic: 'Suspension', title: 'Petition for review — 60 days',
			facts: 'R files a petition for review with the DOJ on January 10 and moves to suspend arraignment. The court suspends. On March 15 the petition is still unresolved, and the court sets arraignment.',
			q: 'May the court proceed?',
			issue: 'Duration of suspension of arraignment pending a petition for review.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Rule 116, Sec. 11(c): suspension "shall not exceed sixty (60) days counted from the filing of the petition with the reviewing office."',
				application: 'Sixty days from January 10 ended in mid-March (March 11, counting from January 10). By March 15 the period has lapsed.',
				conclusion: 'The court may arraign R; the DOJ may still resolve the petition, but the court is not bound by it (Crespo).'
			},
			keys: 'Sec. 11(c); 60 days from filing'
		},
		{
			cat: 'E', level: 5, topic: 'Improvident plea', title: 'Guilty plea to qualified rape — perfunctory inquiry',
			facts: 'B pleads guilty to qualified rape (reclusion perpetua). The judge asks, "Do you understand the charge?" B says yes. Without further inquiry or prosecution evidence, the judge convicts. On appeal, B argues his plea was improvident.',
			q: 'What should the appellate court do? Would your answer change if the prosecution had presented the victim and the medico-legal officer?',
			issue: 'Effect of failure to conduct a searching inquiry and require evidence.',
			alac: {
				answer: 'On the facts given, set aside the conviction and remand. If independent evidence had been presented and supports guilt, the conviction may be affirmed.',
				legalBasis: 'Rule 116, Sec. 3 (searching inquiry; proof of guilt and degree of culpability); People v. Pastor (guidelines); People v. Documento (2010) and People v. Gambao (2013): convictions based on an improvident plea are set aside only if the plea is the sole basis.',
				application: 'A one-question inquiry falls short of Pastor; no evidence was received, so the plea is the sole basis.',
				conclusion: 'Remand for a proper arraignment and trial; in the alternative facts, affirm if the evidence proves guilt beyond reasonable doubt.'
			},
			trap: 'Since RA 9346, qualified rape is not punishable by death; whether Sec. 3 strictly applies is a point to flag — courts have continued to require care in grave offenses.',
			keys: 'Sec. 3; Pastor; Documento'
		},
		{
			cat: 'E', level: 5, topic: 'Drug plea bargaining', title: 'Prosecutor objects to a drug plea bargain',
			facts: 'C, charged with illegal sale of 0.05 gram of shabu, offers to plead guilty to possession of drug paraphernalia, consistent with the Supreme Court\'s framework. The prosecutor objects solely because a DOJ circular disallows plea bargaining for sale. C has no prior convictions and the evidence consists of a buy-bust with documented chain of custody.',
			q: 'May the court approve the plea bargain?',
			issue: 'Whether a court may approve a plea bargain in a drug case over the prosecution\'s objection.',
			alac: {
				answer: 'It may, unless the objection is valid and supported by evidence — and here the court must first determine whether evidence of guilt is strong.',
				legalBasis: 'Estipona v. Lobrigo (2017): plea bargaining is procedural; RA 9165, Sec. 23 is void. People v. Montierro (2022): courts may overrule an objection based solely on DOJ guidelines inconsistent with the Court\'s framework, but shall not allow plea bargaining when the objection is valid and supported by evidence, such as strong evidence of guilt or recidivism.',
				application: 'The stated objection (DOJ circular) alone is insufficient. But the buy-bust evidence with a documented chain of custody may show strong evidence of guilt — a valid ground if the prosecution raises and supports it.',
				conclusion: 'The court should hear the parties on the strength of the evidence and C\'s record; if evidence of guilt is not strong and C is not a recidivist, it may approve the plea over the objection.'
			},
			verify: 'Apply the current version of the framework (A.M. No. 21-07-16-SC) for the specific acceptable plea.',
			keys: 'Estipona; Montierro; framework'
		},
		{
			cat: 'E', level: 5, topic: 'Belated arraignment', title: 'Arraigned only after submission for decision',
			facts: 'D is arrested and his counsel participates in a bail hearing and the full trial, cross-examining prosecution witnesses. The court notices, after the case is submitted for decision, that D was never arraigned; it arraigns him (he pleads not guilty) and then convicts. D appeals, arguing the proceedings are void.',
			q: 'Will the appeal prosper?',
			issue: 'Effect of a belated arraignment where the accused participated in trial without objection.',
			alac: {
				answer: 'No.',
				legalBasis: 'People v. Pangilinan, G.R. No. 171020, March 14, 2007: jurisdiction over the person is acquired by arrest; a belated arraignment is cured where counsel actively participated without objection and the accused was not prejudiced.',
				application: 'D\'s counsel cross-examined witnesses — showing awareness of the charge — and raised no objection until after conviction.',
				conclusion: 'The defect was cured; the appeal fails on this ground.'
			},
			missing: 'Had D objected before or during trial, the court would have had to arraign him before proceeding; and absent arraignment, no trial in absentia or double jeopardy could arise.',
			keys: 'Pangilinan (2007); cured by participation'
		},
		{ cat: 'F', level: 4, topic: 'Estipona', q: 'What did Estipona v. Lobrigo hold, and what limits did it state on the accused\'s ability to plea bargain?', a: 'RA 9165, Sec. 23 (no plea bargaining in drug cases) is unconstitutional because plea bargaining is a procedural rule within the Supreme Court\'s exclusive rule-making power. But there is no constitutional right to plea bargain; acceptance requires the prosecutor\'s and offended party\'s consent and court approval.', keys: 'rule-making power; no right to plea bargain' },
		{ cat: 'F', level: 4, topic: 'Braza / Albert', q: 'When is a conditional arraignment valid, and what is its effect on double jeopardy?', a: 'The conditions must be unmistakable, express, informed and enlightened and stated in the order (People v. Espinosa; Albert v. Sandiganbayan); otherwise the arraignment is simple and unconditional. A valid conditional arraignment may estop the accused from invoking double jeopardy against an amended information (Braza v. Sandiganbayan, 2013).', keys: 'express conditions; estoppel' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 116', title: 'Rule 116 integrated',
			facts: 'E, detained, is charged with murder. The information is raffled on day 5 after filing. On day 20 after the raffle, E is brought for arraignment without counsel; the judge appoints the PAO lawyer in the courtroom and proceeds immediately. E says, "Guilty, but it was an accident." The judge records a plea of guilty and, after asking E if he understands, sets the case for promulgation. Before arraignment, E had filed a petition for review with the DOJ but did not move to suspend.',
			q: 'Identify the errors and their effects.',
			issue: 'Periods for detained accused; counsel; conditional/exculpatory plea; searching inquiry; suspension for petition for review.',
			alac: {
				answer: 'Five errors; the plea of guilty is void and a plea of not guilty must be entered.',
				legalBasis: 'Sec. 1(e) (raffle within 3 days; arraign within 10 days from raffle); Secs. 6–8 (counsel and reasonable time to consult); Sec. 1(d) (guilty plea with exculpatory claim — not guilty); Sec. 3 (searching inquiry and evidence); Sec. 11(c) (suspension only on motion).',
				application: '(1) Raffle on day 5 and arraignment 20 days later exceed the periods — a speedy-trial issue. (2) Counsel de oficio was not given reasonable time to consult. (3) "It was an accident" is exculpatory; the plea is deemed withdrawn. (4) For murder, the searching inquiry and prosecution evidence were mandatory. (5) The court was not obliged to suspend because E did not move; once arraigned, the DOJ must dismiss petitions filed after arraignment — but E filed before, so the DOJ may still act (DC 70, Sec. 7).',
				conclusion: 'Set aside the plea; enter not guilty; give counsel time; proceed to pre-trial and trial.'
			},
			keys: 'Sec. 1(d)–(e); Secs. 3, 6–8, 11'
		}
	],
	memorize: [
		'Manner of arraignment (Sec. 1[a]–[b]) and when not guilty is entered (Sec. 1[c]–[d])',
		'Detained accused: 3 / 10 / 10 days; others: 30 days (Sec. 1[e], [g])',
		'Plea bargaining requisites; offended party absent despite notice → prosecutor alone (Sec. 1[f], Sec. 2)',
		'Capital offense plea: searching inquiry + evidence + defense evidence (Sec. 3); Pastor guidelines',
		'Improvident plea: withdraw before finality; remand only if sole basis',
		'Counsel before arraignment (Secs. 6–8)',
		'Bill of particulars before arraignment (Sec. 9); discovery (Sec. 10)',
		'Suspension grounds; 60 days from filing of petition (Sec. 11)',
		'Estipona (2017) and Montierro (2022) on drug plea bargaining'
	],
	flashcards: [
		['Who conducts arraignment?', 'The judge or clerk, in open court.'],
		['Must the accused be present at arraignment?', 'Yes, and personally enter his plea.'],
		['Conditional plea?', 'A plea of not guilty is entered.'],
		['Guilty plea with exculpatory evidence?', 'Deemed withdrawn; not guilty entered.'],
		['Arraignment period — detained accused?', 'Raffle within 3 days of filing; arraign within 10 days of raffle; pre-trial within 10 days after.'],
		['Arraignment period — others?', 'Within 30 days from acquisition of jurisdiction over the person.'],
		['Requisites of plea bargaining?', 'Lesser included offense; consent of offended party and prosecutor; court approval; at arraignment or before trial.'],
		['Is an amendment needed after plea bargaining?', 'No.'],
		['Capital offense plea — duties?', 'Searching inquiry; prosecution proves guilt and degree of culpability; accused may present evidence.'],
		['When may an improvident plea be withdrawn?', 'Any time before the judgment becomes final.'],
		['Grounds to suspend arraignment?', 'Unsound mind; prejudicial question; pending DOJ/OP review (max 60 days from filing).'],
		['Deadline for bill of particulars?', 'Before arraignment.'],
		['Is plea bargaining allowed in drug cases?', 'Yes (Estipona, 2017), under the SC framework; objections based solely on DOJ circulars may be overruled (Montierro, 2022).']
	],
	oral: [
		['"Why is arraignment important?"', 'It is the formal means of informing the accused of the charge — a due process requirement. Without it there is no valid trial, no trial in absentia and no double jeopardy, unless the defect is cured by the accused\'s participation without objection.'],
		['"Can an accused plead guilty to a lesser offense?"', 'Yes, at arraignment or after arraignment before trial, if the lesser offense is necessarily included in the charge, the prosecutor and offended party consent — the offended party\'s consent is excused if he fails to appear despite notice — and the court approves. No amendment is needed.'],
		['"What if he pleads guilty to a capital offense?"', 'The court must conduct a searching inquiry into voluntariness and comprehension, require the prosecution to prove guilt and the precise degree of culpability, and allow the accused to present evidence.'],
		['"What happened to plea bargaining in drug cases?"', 'Estipona v. Lobrigo (2017) struck down RA 9165, Sec. 23 because plea bargaining is procedural; the Court adopted a plea bargaining framework, and Montierro (2022) allowed courts to overrule objections based solely on inconsistent DOJ circulars, but not valid, evidence-based objections.']
	],
	checklist: [
		'I can describe how and when arraignment is made, including for detained accused.',
		'I can state when a plea of not guilty is entered.',
		'I can list the requisites of plea bargaining and explain Estipona and Montierro.',
		'I can state the court\'s duties on a plea of guilty to a capital and a non-capital offense.',
		'I can explain improvident pleas and their effect on appeal.',
		'I can state the court\'s duties regarding counsel before arraignment.',
		'I can explain bill of particulars, discovery and suspension of arraignment.'
	],
	sheet: [
		'<b>Arraignment (Sec. 1):</b> open court; judge/clerk; copy; read in known language; personal plea. Refusal/conditional → not guilty; guilty + exculpatory → not guilty.',
		'<b>Periods:</b> detained — raffle 3 days, arraign 10 days, pre-trial 10 days; others — 30 days (minus MTQ, BOP, suspension).',
		'<b>Plea bargaining (Secs. 1[f], 2):</b> lesser included; consent of offended party (excused if absent despite notice) and prosecutor; court approval; at arraignment or before trial; no amendment. Drugs: Estipona (2017), framework, Montierro (2022).',
		'<b>Capital plea (Sec. 3):</b> searching inquiry (Pastor) + prosecution evidence + defense evidence. <b>Non-capital (Sec. 4):</b> evidence discretionary.',
		'<b>Improvident plea (Sec. 5):</b> withdraw before finality; on appeal remand only if sole basis (Documento).',
		'<b>Counsel (Secs. 6–8):</b> inform; appoint de oficio; time to consult.',
		'<b>Before arraignment:</b> bill of particulars (Sec. 9), discovery (Sec. 10), suspension (Sec. 11: unsound mind, prejudicial question, DOJ/OP review ≤60 days from filing).'
	],
	watchFor: `<strong>Watch for: what exactly the accused said, and when.</strong>
<ul>
<li>Is the plea conditional or exculpatory? Is the offense capital (searching inquiry)?</li>
<li>Plea bargain: lesser <em>included</em> offense? Consents? Before trial? Drug case (Estipona, Montierro)?</li>
<li>Count the periods: 3/10/10 for detained accused; 30 days otherwise; 60 days for DOJ review.</li>
</ul>`
};
