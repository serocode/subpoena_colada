import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 122 — Appeal. */
export const r122: RuleChapter = {
	id: 'r122',
	n: 122,
	title: 'Appeal',
	short: 'R122 Appeal',
	tiu: 'pp. 207–216',
	plain: `Any party may appeal a judgment or final order, unless it would put the accused twice in jeopardy — so the State cannot appeal an acquittal, and the offended party can appeal only the civil aspect. The accused appeals within 15 days from promulgation: by notice of appeal from the MTC to the RTC and from the RTC (original jurisdiction) to the CA, by petition for review (Rule 42) when the RTC decided as an appellate court, and by Rule 45 petition to the Supreme Court on pure questions of law. When the accused appeals, the whole case is thrown open: the appellate court may even increase the penalty. An appeal by one co-accused helps the others only if the result is favorable and applicable to them.`,
	purpose: `To give the convicted accused (and, on the civil aspect, the offended party) review by a higher court, while keeping the State from re-litigating an acquittal.`,
	stage: `After judgment (${ruleLink('r120')}) and any motion for new trial or reconsideration (${ruleLink('r121')}); the appeal is then processed under ${ruleLink('r124')} (Court of Appeals) or ${ruleLink('r125')} (Supreme Court).`,
	questions: [
		'Who may appeal, and what limits the State\'s right to appeal?',
		'To which court, and by what mode, is each judgment appealed?',
		'Within what period, and what interrupts it?',
		'What does an appeal by the accused open up for review?',
		'How does an appeal by one accused affect the others?',
		'When may an appeal be withdrawn?',
		'How may an acquittal be reviewed at all?'
	],
	relations: `The finality of acquittal is double jeopardy (${ruleLink('r117', 'sections', 'Rule 117, Sec. 7')}) seen from the appeal side. The offended party's appeal on the civil aspect follows from the civil action deemed instituted under ${ruleLink('r111')}. The period runs from promulgation (${ruleLink('r120', 'sections', 'Rule 120, Sec. 6')}) and is suspended by a motion under ${ruleLink('r121')}. Applying for probation waives appeal (${ruleLink('r120', 'sections', 'Rule 120, Sec. 7')}). Bail pending appeal is in ${ruleLink('r114', 'sections', 'Rule 114, Sec. 5')}. Procedure after the appeal reaches the CA is ${ruleLink('r124')}.`,
	principles: [
		'<b>Any party may appeal, unless the accused will be placed in double jeopardy</b> (Sec. 1).',
		'<b>An acquittal is final, unappealable and immediately executory</b>; it may be reviewed only by Rule 65 certiorari for grave abuse amounting to lack of jurisdiction or denial of due process to the prosecution.',
		'<b>An appeal by the accused throws the whole case open for review</b> — errors not assigned may be corrected, and the penalty may be increased.',
		'<b>Wrong mode, no tolling</b>: an appeal by the wrong mode does not stop the period, and the judgment becomes final (except in the interest of justice).',
		'<b>15 days from promulgation</b>, suspended by a motion for new trial or reconsideration, with a fresh 15 days after denial.'
	],
	sections: [
		{
			n: '1',
			title: 'Who may appeal',
			text: `"Any party may appeal from a judgment or final order, unless the accused will be placed in double jeopardy."`,
			plain: `The accused may appeal a conviction. The State may appeal only where double jeopardy does not attach (for example, a dismissal on a motion to quash before arraignment). The offended party may appeal the civil aspect.`,
			reqs: `(1) A judgment or final order (not an interlocutory order); (2) by a party; (3) no double jeopardy.`,
			who: `(1) The accused; (2) the offended party, on the civil aspect only; (3) the People, through the OSG, if double jeopardy does not attach (Tiu, p. 207).`,
			exceptions: `An acquittal — or a dismissal amounting to an acquittal — cannot be appealed by the State. It may be challenged only by Rule 65 certiorari where the prosecution was denied due process or the court acted with grave abuse amounting to lack of jurisdiction (${caseLink('villareal', 'Villareal v. Aliga, 2014')}; ${caseLink('ysidoro', 'Ysidoro v. Leonardo-de Castro, 2012')}).`,
			effect: `When the accused appeals, he waives the protection against double jeopardy and runs the risk of a higher penalty (People v. Torres, 2014; ${caseLink('trono', 'Trono v. US, 1905')}).`,
			cases: `${caseLink('ching-nicdao', 'Ching v. Nicdao (2007)')}; ${caseLink('nazareno', 'People v. Nazareno (2009)')}; ${caseLink('villareal', 'Villareal v. Aliga (2014)')}; ${caseLink('trono', 'Trono v. US (1905)')}; ${caseLink('bu-lin', 'Bu Lin v. CA (1982)')}.`,
			hypo: `The RTC quashes an information before arraignment for failure to state an offense. The People may appeal: jeopardy has not attached.`,
			trap: `"Any party may appeal" does not mean the private complainant may appeal the criminal aspect. The criminal action is the People's, represented on appeal by the OSG; the offended party's appeal is limited to civil liability.`,
			verify: `Later rulings (e.g., Austria v. AAA, G.R. No. 205275, June 28, 2022, En Banc) set guidelines on when a private offended party may seek review of the criminal aspect, including by certiorari, and on the OSG's role. Read the decision before stating the rule.`
		},
		{
			n: '2',
			title: 'Where to appeal',
			text: `The appeal may be taken "(a) To the Regional Trial Court, in cases decided by the Metropolitan Trial Court, Municipal Trial Court in Cities, Municipal Trial Court, or Municipal Circuit Trial Court; (b) To the Court of Appeals or to the Supreme Court in the proper cases provided by law, in cases decided by the Regional Trial Court; and (c) To the Supreme Court, in cases decided by the Court of Appeals."`,
			plain: `MTC → RTC. RTC → CA (or SC on pure questions of law). CA → SC.`,
			exceptions: `Cases within the Sandiganbayan's appellate jurisdiction: RTC decisions in cases involving public officers below salary grade 27 that are cognizable by the Sandiganbayan go to the Sandiganbayan, not the CA (PD 1606, Sec. 4, as amended). Sandiganbayan decisions go to the SC (Rule 45, or notice of appeal for RP/LI).`,
			hypo: `An RTC convicts a municipal treasurer (salary grade below 27) of malversation. The appeal goes to the Sandiganbayan, not the CA.`,
			trap: `The ladder skips the CA for Sandiganbayan cases and for pure questions of law from the RTC (Rule 45 to the SC).`
		},
		{
			n: '3',
			title: 'How appeal taken',
			text: `"(a) The appeal to the Regional Trial Court, or to the Court of Appeals in cases decided by the Regional Trial Court in the exercise of its original jurisdiction, shall be by notice of appeal filed with the court which rendered the judgment or final order appealed from and by serving a copy thereof upon the adverse party. (b) The appeal to the Court of Appeals in cases decided by the Regional Trial Court in the exercise of its appellate jurisdiction shall be by petition for review under Rule 42. (c) The appeal in cases where the penalty imposed by the Regional Trial Court is reclusion perpetua, life imprisonment or where a lesser penalty is imposed for offenses committed on the same occasion or which arose out of the same occurrence that gave rise to the more serious offense for which the penalty of death, reclusion perpetua, or life imprisonment is imposed, shall be by notice of appeal to the Court of Appeals in accordance with paragraph (a) of this Rule. (d) No notice of appeal is necessary in cases where the Regional Trial Court imposed the death penalty. The Court of Appeals shall automatically review the judgment as provided in Section 10 of this Rule." (As amended by A.M. No. 00-5-03-SC, 2004.)`,
			plain: `Notice of appeal, filed in the court that decided: MTC → RTC; RTC (original) → CA, including RP/LI cases. Petition for review (Rule 42): RTC (appellate) → CA. Death: automatic review by the CA, no notice needed. Rule 45 petition: pure questions of law to the SC.`,
			reqs: `Notice of appeal: filed in the trial court within the period and served on the adverse party. Petition for review: verified petition filed in the CA, docket fees paid, copies to the lower court and adverse party.`,
			who: `Appellant; clerk of the trial court.`,
			when: `15 days (Sec. 6). Rule 42: 15 days, extendible by 15 days on motion with fees paid, and a second 15 days only for the most compelling reasons. Rule 45: 15 days, extendible by 30 days for justifiable reasons (Rule 45, Sec. 2).`,
			exceptions: `Death penalty: automatic review, no notice (Sec. 3[d]) — but RA 9346 (2006) prohibits imposing death, so this is dormant.`,
			effect: `Using the wrong mode does not toll the period; the judgment becomes final, unless the interest of justice allows otherwise (Tiu, p. 214).`,
			cases: `${caseLink('mateo', 'People v. Mateo (2004)')} — intermediate CA review of death, RP and LI cases, implemented by A.M. No. 00-5-03-SC.`,
			hypo: `The RTC, deciding an appeal from the MTC, affirms a conviction for slight physical injuries. The accused files a notice of appeal. Wrong mode — the remedy was a Rule 42 petition for review in the CA; the RTC decision becomes final.`,
			trap: `Since Mateo (2004), an RTC sentence of reclusion perpetua or life imprisonment goes by notice of appeal to the CA — not directly to the SC, as before.`,
			update: `RA 9346 (2006) prohibits the imposition of death; reclusion perpetua (RPC nomenclature) or life imprisonment (special laws) is imposed instead. Automatic review of death sentences (Secs. 3[d] and 10) no longer operates in practice.`
		},
		{
			n: '4',
			title: 'Publication of notice of appeal',
			text: `"If personal service of the copy of the notice of appeal can not be made upon the adverse party or his counsel, service may be done by registered mail or by substituted service pursuant to sections 7 and 8 of Rule 13."`,
			plain: `If the notice can't be served personally, use registered mail or substituted service.`,
			trap: `The section is titled "publication," but the method is service by mail or substitution — not newspaper publication.`,
			update: `Rule 13 was amended in 2019 (A.M. No. 19-10-20-SC) to allow electronic and courier service; check the current modes before citing section numbers.`
		},
		{
			n: '5',
			title: 'Waiver of notice',
			text: `"The appellee may waive his right to a notice that an appeal has been taken. The appellate court may, in its discretion, entertain an appeal notwithstanding failure to give such notice if the interests of justice so require."`,
			plain: `The appellee may waive notice of the appeal; the appellate court may also hear an appeal despite lack of notice when justice requires.`,
			hypo: `The accused files a notice of appeal but forgets to serve the prosecutor. The CA may still entertain the appeal in the interest of justice.`
		},
		{
			n: '6',
			title: 'When appeal to be taken',
			text: `"An appeal must be taken within fifteen (15) days from promulgation of the judgment or from notice of the final order appealed from. This period for perfecting an appeal shall be suspended from the time a motion for new trial or reconsideration is filed until notice of the order overruling the motion shall have been served upon the accused or his counsel at which time the balance of the period begins to run."`,
			plain: `Fifteen days from promulgation (judgment) or from notice (final order). A motion for new trial or reconsideration stops the clock; after denial, the fresh-period rule gives a new 15 days.`,
			who: `Appellant.`,
			when: `15 days from promulgation or notice.`,
			exceptions: `The text says the "balance of the period" resumes after denial, but the Neypes fresh-period rule applies to criminal cases: a fresh 15 days from notice of denial (Tiu, citing Sumiran v. Damaso, 2009; ${caseLink('yu-samson-tatad', 'Yu v. Samson-Tatad, 2011')}).`,
			effect: `After the period lapses without appeal, the judgment becomes final (Rule 120, Sec. 7).`,
			hypo: `Promulgation on June 1; no motion filed. The last day to appeal is June 16.`,
			trap: `For a judgment, the period runs from promulgation (the reading), not from receipt of a copy by mail.`
		},
		{
			n: '7',
			title: 'Transcribing and filing notes of stenographic reporter upon appeal',
			text: `When the accused files a notice of appeal, the trial court directs the stenographer to transcribe his notes; when the People appeal, only the portions the court specifies in writing on motion. The stenographer certifies the transcript (original and four copies) and files it with the clerk without unnecessary delay. If death is imposed, the certified transcript must be filed "within thirty (30) days from promulgation of the sentence," and no extension may be granted "except by the Supreme Court and only upon justifiable grounds."`,
			plain: `Appeal by the accused → full transcript. Appeal by the People → only specified portions. Death cases → transcript within 30 days, extendible only by the SC.`,
			when: `Death cases: 30 days from promulgation.`
		},
		{
			n: '8',
			title: 'Transmission of papers to appellate court upon appeal',
			text: `"Within five (5) days from the filing of the notice of appeal, the clerk of the court with whom the notice of appeal was filed must transmit to the clerk of court of the appellate court the complete record of the case, together with said notice. The original and three copies of the transcript of stenographic notes, together with the records, shall also be transmitted to the clerk of the appellate court without undue delay. The other copy of the transcript shall remain in the lower court."`,
			plain: `The trial court clerk sends the record to the appellate court within 5 days of the notice of appeal.`,
			when: `5 days from filing of the notice of appeal.`,
			effect: `Transmission matters for withdrawal of appeal (Sec. 12): before transmission, the trial court may allow withdrawal.`
		},
		{
			n: '9',
			title: 'Appeal to the Regional Trial Courts',
			text: `"(a) Within five (5) days from perfection of the appeal, the clerk of court shall transmit the original record to the appropriate Regional Trial Court. (b) Upon receipt of the complete record of the case, transcripts and exhibits, the clerk of court of the Regional Trial Court shall notify the parties of such fact. (c) Within fifteen (15) days from receipt of the said notice, the parties may submit memoranda or briefs, or may be required by the Regional Trial Court to do so. After the submission of such memoranda or briefs, or upon the expiration of the period to file the same, the Regional Trial Court shall decide the case on the basis of the entire record of the case and of such memoranda or briefs as may have been filed."`,
			plain: `MTC appeals: the record goes to the RTC within 5 days; parties may file memoranda within 15 days of notice; the RTC decides on the record — no new trial-type hearing.`,
			when: `5 days (transmittal); 15 days (memoranda).`,
			effect: `No hearing: the RTC acts in its appellate jurisdiction (Tiu, p. 211).`,
			hypo: `On appeal from the MTC, the accused asks the RTC to hear a new witness. The RTC decides on the record and memoranda; the remedy for new evidence is a motion for new trial.`
		},
		{
			n: '10',
			title: 'Transmission of records in case of death penalty',
			text: `"In all cases where the death penalty is imposed by the trial court, the records shall be forwarded to the Court of Appeals for automatic review and judgment within twenty days but not earlier than fifteen days from the promulgation of the judgment or notice of denial of a motion for new trial or reconsideration. The transcript shall also be forwarded within ten days after the filing thereof by the stenographic reporter."`,
			plain: `Death cases: records go to the CA for automatic review between day 15 and day 20 after promulgation (or denial of a motion).`,
			when: `Not earlier than 15 nor later than 20 days; transcript within 10 days after filing.`,
			update: `Dormant since RA 9346 (2006) prohibited the imposition of death.`
		},
		{
			n: '11',
			title: 'Effect of appeal by any of several accused',
			text: `"(a) An appeal taken by one or more of several accused shall not affect those who did not appeal, except insofar as the judgment of the appellate court is favorable and applicable to the latter; (b) The appeal of the offended party from the civil aspect shall not affect the criminal aspect of the judgment or order appealed from. (c) Upon perfection of the appeal, the execution of the judgment or final order appealed from shall be stayed as to the appealing party."`,
			plain: `An appeal by one accused binds only him — unless the result is favorable and applicable to the others. The offended party's civil appeal does not touch the criminal judgment. Execution is stayed only for whoever appealed.`,
			reqs: `For the benefit to extend: (1) the appellate judgment is favorable; (2) it is applicable to the non-appealing co-accused.`,
			effect: `A non-appealing co-accused may benefit from an acquittal or reduced penalty on a ground common to all (e.g., the act is not a crime, or a qualifying circumstance was not proved) — but is not harmed by an increased penalty imposed on the appellant.`,
			hypo: `A and B are convicted of murder; only A appeals. The CA finds treachery unproved and convicts A of homicide. B, whose conviction rested on the same finding, benefits: his conviction is likewise reduced to homicide.`,
			trap: `A finding personal to the appellant (e.g., his own alibi, his own mitigating circumstance) is not "applicable" to the others.`
		},
		{
			n: '12',
			title: 'Withdrawal of appeal',
			text: `"Notwithstanding the perfection of the appeal, the Regional Trial Court, Metropolitan Trial Court, Municipal Trial Court in Cities, Municipal Trial Court, or Municipal Circuit Trial Court, as the case may be, may allow the appellant to withdraw his appeal before the record has been forwarded by the clerk of court to the proper appellate court as provided in section 8, in which case the judgment shall become final. The Regional Trial Court may also, in its discretion, allow the appellant from the judgment of a Metropolitan Trial Court, Municipal Trial Court in Cities, Municipal Trial Court, or Municipal Circuit Trial Court to withdraw his appeal, provided a motion to that effect is filed before rendition of the judgment in the case on appeal, in which case the judgment of the court of origin shall become final and the case shall be remanded to the latter court for execution of the judgment."`,
			plain: `Before the record is forwarded, the trial court may allow withdrawal; the judgment becomes final. In MTC appeals, the RTC may also allow withdrawal on motion before it decides, and remands for execution.`,
			who: `Trial court (before transmittal); RTC (in appeals from the MTC, before its judgment).`,
			effect: `The appealed judgment becomes final.`,
			hypo: `Convicted of a probationable offense, the accused appeals, then changes his mind and moves to withdraw before the record is sent up so that he can apply for probation. The trial court may allow withdrawal — but note that filing an appeal and then withdrawing it may affect probation eligibility under PD 968 as amended.`,
			verify: `Check PD 968, Sec. 4 as amended by RA 10707 on whether an accused who perfected an appeal and then withdrew it may still apply for probation.`
		},
		{
			n: '13',
			title: 'Appointment of counsel de oficio for accused on appeal',
			text: `"It shall be the duty of the clerk of the trial court, upon filing of a notice of appeal, to ascertain from the appellant, if confined in prison, whether he desires the Regional Trial Court, Court of Appeals or the Supreme Court to appoint a counsel de oficio to defend him and to transmit with the record on a form to be prepared by the clerk of court of the appellate court, a certificate of compliance with this duty and of the response of the appellant to his inquiry."`,
			plain: `If the appellant is in prison, the trial court clerk must ask whether he wants a counsel de oficio on appeal, and certify his answer with the record.`,
			who: `Clerk of the trial court; confined appellant.`,
			hypo: `A detained appellant files a notice of appeal himself. The clerk must ask him about counsel de oficio and certify the answer; the CA clerk will then designate counsel (Rule 124, Sec. 2).`
		}
	],
	reqs: [
		{
			name: 'Perfection of an appeal by notice of appeal (Secs. 3, 6)',
			source: 'Rule 122, Secs. 3(a), 6',
			what: 'Notice of appeal filed with the court that rendered the judgment, served on the adverse party.',
			who: 'Appellant (accused; People where no double jeopardy; offended party on the civil aspect).',
			when: 'Within 15 days from promulgation or notice of the final order (fresh 15 days after denial of an MR or motion for new trial).',
			where: 'The trial court, not the appellate court.',
			missing: 'No timely notice: the judgment becomes final and executory. Lack of service may be excused in the interest of justice (Sec. 5).',
			defect: 'Jurisdictional',
			defectNote: 'Perfection within the period is mandatory and jurisdictional; once lapsed, the appellate court acquires no jurisdiction and the judgment is final. Service defects, by contrast, may be waived by the appellee (Sec. 5).'
		},
		{
			name: 'Correct mode of appeal (Sec. 3)',
			source: 'Rule 122, Sec. 3; Tiu, p. 214',
			what: 'Notice of appeal (MTC → RTC; RTC original → CA); petition for review under Rule 42 (RTC appellate → CA); Rule 45 petition (pure questions of law to the SC).',
			who: 'Appellant.',
			when: 'Within the period for that mode.',
			missing: 'The appeal is dismissed and the period is not tolled; the judgment becomes final.',
			defect: 'Not waivable',
			defectNote: 'Exceptionally relaxed "in the interest of justice," but as a rule the wrong mode is fatal.'
		},
		{
			name: 'No double jeopardy (Sec. 1)',
			source: 'Rule 122, Sec. 1; Const., Art. III, Sec. 21',
			what: 'The State\'s appeal must not expose the accused to a second jeopardy.',
			who: 'The People, through the OSG.',
			when: 'At filing.',
			missing: 'An appeal from an acquittal, or from a dismissal amounting to an acquittal, is barred.',
			defect: 'Jurisdictional',
			defectNote: 'The bar is constitutional. Only Rule 65 certiorari survives, and only for denial of due process to the prosecution or grave abuse amounting to lack of jurisdiction.'
		}
	],
	enums: [
		{
			id: 'E122.1',
			name: 'Who may appeal',
			source: 'Rule 122, Sec. 1; Tiu, p. 207',
			kind: 'notes',
			memorize: true,
			lead: 'The following may appeal',
			items: [
				{ t: 'The accused', d: 'From a judgment of conviction; by appealing he waives double jeopardy and opens the whole case (People v. Torres, 2014).', s: 'the accused' },
				{ t: 'The offended party, as to the civil aspect only', d: 'Even after an acquittal, within the same period as the accused (Ching v. Nicdao, 2007).', s: 'offended party — civil aspect' },
				{ t: 'The People, provided the accused will not be placed in double jeopardy', d: 'E.g., from an order quashing the information before arraignment. Represented by the OSG.', s: 'the People — no double jeopardy' }
			],
			question: 'Who may appeal in a criminal case?'
		},
		{
			id: 'E122.2',
			name: 'Modes of appeal by court of origin',
			source: 'Rule 122, Secs. 2–3; Rule 124, Sec. 13; PD 1606, Sec. 7; Tiu, pp. 211–212',
			kind: 'notes',
			memorize: true,
			lead: 'The modes of appeal are',
			items: [
				{ t: 'MTC → RTC by notice of appeal', d: 'The RTC decides on the record and memoranda (Sec. 9).', s: 'MTC to RTC — notice of appeal' },
				{ t: 'RTC (original jurisdiction) → CA by notice of appeal', d: 'Questions of fact or mixed questions; includes RP or LI sentences (Sec. 3[c]); death → automatic review.', s: 'RTC original to CA — notice of appeal' },
				{ t: 'RTC (original jurisdiction) → SC by Rule 45 petition', d: 'Pure questions of law only.', s: 'RTC to SC — Rule 45, questions of law' },
				{ t: 'RTC (appellate jurisdiction) → CA by Rule 42 petition for review', d: 'When the case began in the MTC.', s: 'RTC appellate to CA — Rule 42' },
				{ t: 'CA → SC', d: 'Penalty below RP/LI: Rule 45. RP or LI: notice of appeal filed with the CA. Death: the CA renders but does not enter judgment and certifies the case (Rule 124, Sec. 13).', s: 'CA to SC — Rule 45, or notice of appeal for RP/LI' },
				{ t: 'Sandiganbayan → SC', d: 'Same pattern: Rule 45 below RP/LI; notice of appeal for RP/LI; death → automatic review.', s: 'Sandiganbayan to SC — Rule 45 or notice of appeal' }
			],
			memory: 'Notice of appeal goes up <b>one level</b> from a court of origin; Rule 42 goes up from a court that already reviewed; Rule 45 is the law-only lane to the SC — except for RP/LI, which go up by notice.',
			tip: 'The notice-of-appeal route from the CA or Sandiganbayan to the SC for RP/LI is the only time a criminal case reaches the SC on appeal by something other than Rule 45 — and the SC then reviews facts too.',
			question: 'Explain the modes of appeal in criminal cases, by court of origin.'
		},
		{
			id: 'E122.3',
			name: 'Effects of an appeal where there are several accused',
			source: 'Rule 122, Sec. 11',
			kind: 'rule',
			memorize: true,
			lead: 'Where there are several accused',
			items: [
				{ t: 'An appeal by one or more does not affect those who did not appeal', d: 'Except insofar as the appellate judgment is favorable and applicable to them.', s: 'non-appellants unaffected unless favorable and applicable' },
				{ t: 'The offended party\'s appeal on the civil aspect does not affect the criminal aspect', d: 'The penalty stays as adjudged.', s: 'civil appeal does not touch the criminal aspect' },
				{ t: 'Execution is stayed only as to the appealing party', d: 'Non-appealing co-accused may begin serving sentence.', s: 'stay only for the appellant' }
			],
			question: 'What is the effect of an appeal by one of several accused?'
		},
		{
			id: 'E122.4',
			name: 'Three modes of review of a criminal judgment (Ysidoro)',
			source: 'Ysidoro v. Leonardo-de Castro (2012), in Tiu, p. 209',
			kind: 'case',
			lead: 'A criminal judgment may be reviewed by',
			items: [
				{ t: 'Ordinary appeal (Rule 122, Sec. 3)', d: 'Resolves factual and legal issues, including material issues not raised; only for convictions.', s: 'ordinary appeal — facts and law' },
				{ t: 'Petition for review on certiorari (Rule 45)', d: 'Questions of law properly raised; only for convictions.', s: 'Rule 45 — questions of law' },
				{ t: 'Special civil action for certiorari (Rule 65)', d: 'Errors of jurisdiction — lack of jurisdiction or grave abuse; the only way to attack an acquittal.', s: 'Rule 65 — errors of jurisdiction' }
			],
			tip: 'Appeal and Rule 45 correct errors of judgment in a valid decision; Rule 65 attacks a decision as void.',
			question: 'What are the modes of reviewing a criminal judgment, and which may be used against an acquittal?'
		},
		{
			id: 'E122.5',
			name: 'Grounds to review an acquittal by certiorari',
			source: 'Villareal v. Aliga (2014); Ysidoro (2012); Tiu, p. 209',
			kind: 'case',
			memorize: true,
			lead: 'An acquittal may be reviewed by Rule 65 certiorari only where',
			items: [
				{ t: 'The prosecution was deprived of due process', d: 'E.g., denied the opportunity to present its case (a sham trial).', s: 'denial of due process to the prosecution' },
				{ t: 'The court acted with grave abuse of discretion amounting to lack or excess of jurisdiction', d: 'Capricious, whimsical, arbitrary or despotic — not mere misappreciation of evidence.', s: 'grave abuse amounting to lack of jurisdiction' }
			],
			tip: 'Misreading the evidence is an error of judgment, not of jurisdiction — certiorari will not lie.',
			question: 'May an acquittal ever be reviewed? On what grounds?'
		}
	],
	comparisons: [
		{
			id: 'C122.1',
			title: 'Ordinary appeal vs. petition for review (Rule 42) vs. petition for review on certiorari (Rule 45)',
			a: 'Ordinary appeal (notice of appeal)',
			b: 'Petition for review (Rule 42) / review on certiorari (Rule 45)',
			meaning: ['Appeal as of right by filing a notice in the court of origin.', 'Rule 42: discretionary review of an RTC decision rendered in its appellate jurisdiction. Rule 45: discretionary review on questions of law by the SC.'],
			basis: ['Rule 122, Sec. 3(a), (c); Rules 40–41 (civil analogues)', 'Rule 122, Sec. 3(b); Rules 42 and 45'],
			who: ['Appellant files with the trial court.', 'Petitioner files with the appellate court (CA for Rule 42; SC for Rule 45).'],
			when: ['15 days; no extension.', '15 days. Rule 42: +15 days, and a second +15 only for compelling reasons. Rule 45: +30 days for justifiable reasons.'],
			reqs: ['Notice; service on the adverse party.', 'Verified petition; docket fees; copies to the lower court and adverse party.'],
			time: ['Perfected upon timely filing of the notice.', 'Perfected upon timely filing of the petition and payment of fees.'],
			exceptions: ['RP/LI from the CA or SB to the SC: notice of appeal filed with the CA or SB.', 'Rule 45 limited to questions of law, save recognized exceptions.'],
			effect: ['Whole case open; facts and law.', 'Rule 42: facts and law. Rule 45: law only.'],
			trap: ['Filing a notice of appeal from an RTC appellate decision.', 'Raising factual issues in a Rule 45 petition.'],
			decisive: 'Ordinary appeal is a matter of right from a court of origin; petitions for review are discretionary and go up from a court that has already reviewed (Rule 42) or on law alone (Rule 45).',
			hypo: 'MTC conviction affirmed by the RTC: Rule 42 to the CA. RTC conviction in a case it tried: notice of appeal to the CA. CA affirms a sentence of 8 years: Rule 45 to the SC. CA affirms reclusion perpetua: notice of appeal with the CA.'
		},
		{
			id: 'C122.2',
			title: 'Appeal by the accused vs. review sought by the People',
			a: 'Appeal by the accused',
			b: 'Review sought by the People',
			meaning: ['Appeal from a conviction.', 'Appeal where jeopardy has not attached; certiorari against an acquittal.'],
			basis: ['Rule 122, Secs. 1, 3, 6', 'Rule 122, Sec. 1; Rule 65; Const., Art. III, Sec. 21'],
			who: ['Accused, through counsel.', 'The People, through the OSG (the prosecutor in the trial court).'],
			when: ['15 days from promulgation.', 'Appeal: 15 days. Certiorari: 60 days from notice (Rule 65).'],
			reqs: ['Notice of appeal or petition.', 'No double jeopardy; for certiorari, grave abuse or denial of due process.'],
			time: ['Fresh period after denial of an MR.', '—'],
			exceptions: ['Probation application waives appeal (Rule 120, Sec. 7).', 'Acquittal: no appeal at all.'],
			effect: ['Waives double jeopardy; whole case open; penalty may be increased.', 'If certiorari succeeds, the acquittal is void and the case may be remanded.'],
			trap: ['Assuming the penalty cannot be increased on the accused\'s own appeal.', 'Assuming a misappreciation of evidence is grave abuse.'],
			decisive: 'The accused\'s appeal opens everything; the People\'s challenge to an acquittal reaches only jurisdictional errors.',
			hypo: 'The RTC convicts A of homicide (charged: murder) and acquits B. A appeals: the CA may convict him of murder. The People cannot appeal B\'s acquittal; certiorari lies only if the court, say, refused to let the prosecution present evidence.'
		},
		{
			id: 'C122.3',
			title: 'Appeal in criminal cases vs. appeal in civil cases',
			a: 'Criminal',
			b: 'Civil',
			meaning: ['Review of a judgment of conviction (or a civil-aspect judgment).', 'Review of a judgment on the merits of a civil action.'],
			basis: ['Rules 122 and 124', 'Rules 40–45, 44'],
			who: ['Accused; People if no jeopardy; offended party on the civil aspect.', 'Any aggrieved party.'],
			when: ['15 days from promulgation.', '15 days from notice of judgment.'],
			reqs: ['Notice of appeal (no record on appeal); briefs 30–30–20 in the CA.', 'Notice (or record on appeal in special cases); briefs 45–45–20.'],
			time: ['Appellant 30 / appellee 30 / reply 20 days (Rule 124).', 'Appellant 45 / appellee 45 / reply 20 days (Rule 44).'],
			exceptions: ['Acquittal unappealable.', '—'],
			effect: ['Whole case open for review, including errors not assigned.', 'Generally limited to assigned errors.'],
			trap: ['Using the civil brief periods.', 'Assuming unassigned errors cannot be corrected in a criminal appeal.'],
			decisive: 'A criminal appeal throws the whole case open; a civil appeal is confined to the assigned errors.',
			hypo: 'The accused appeals only the award of damages. The CA may still review the conviction itself and the penalty.'
		}
	],
	cases: [
		{
			id: 'ching-nicdao',
			name: 'Ching v. Nicdao',
			cite: '2007 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused was acquitted by the CA of BP 22. The offended party, who had not reserved or separately filed the civil action, sought to appeal the civil aspect.',
			issue: 'May the offended party appeal the civil aspect notwithstanding the acquittal?',
			ruling: 'Yes.',
			doctrine: 'Where the accused is acquitted on reasonable doubt, the prosecution cannot appeal the acquittal, but the offended party may appeal the civil aspect within the same period granted the accused.',
			reasoning: 'The civil action was impliedly instituted (Rule 111, Sec. 1); extinction of the penal action does not carry with it extinction of the civil unless the act did not exist (Rule 111, Sec. 2[b]; Rule 120, Sec. 2).',
			rule: 'Rule 122, Sec. 1; Rule 111.',
			hypo: 'After an acquittal for estafa on reasonable doubt, the complainant files a notice of appeal limited to civil liability within 15 days — proper.',
			examQ: 'May an offended party appeal after the accused is acquitted?',
			also: ['r111', 'r120'],
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'trono',
			name: 'Trono v. United States',
			cite: '199 U.S. 521 (1905)',
			from: 'Tiu',
			facts: 'Accused charged with murder were convicted of a lesser offense, appealed, and on appeal were convicted of a higher offense with a heavier penalty.',
			issue: 'May the appellate court impose a penalty higher than that imposed below on the accused\'s own appeal?',
			ruling: 'Yes.',
			doctrine: 'By appealing his conviction, the accused waives the plea of double jeopardy and throws the whole case open for review — including the implied acquittal of the higher offense.',
			reasoning: 'The appeal asks that the whole judgment be set aside; the accused cannot accept the favorable part and reject the rest.',
			rule: 'Rule 122, Sec. 1; Rule 124, Sec. 11.',
			hypo: 'Charged with murder, convicted of homicide, the accused appeals; the CA finds treachery proved and convicts of murder.',
			examQ: 'When the accused appeals, may the appellate court increase his penalty?'
		},
		{
			id: 'bu-lin',
			name: 'Bu Lin v. Court of Appeals',
			cite: 'G.R. No. 57170, November 19, 1982',
			from: 'Tiu',
			facts: 'The accused was convicted of estafa under Art. 315(2)(d) (bouncing checks). The CA convicted him instead under Art. 315(2)(a) (false pretenses), which the trial court had found inapplicable. He claimed double jeopardy.',
			issue: 'Was the accused, in effect, acquitted of Art. 315(2)(a) by the trial court so that the CA could not convict him under it?',
			ruling: 'No.',
			doctrine: 'On appeal by the accused, the appellate court may render the judgment that law and justice dictate, favorable or not, whether or not the point was assigned as error.',
			reasoning: 'The accused waived the constitutional safeguard by appealing (following Trono).',
			rule: 'Rule 122, Sec. 1.',
			hypo: 'Convicted of theft, the accused appeals; the CA may convict him of qualified theft if the information alleged the qualifying circumstance and it was proved.',
			examQ: 'Does an accused who appeals waive double jeopardy as to a mode of commission rejected by the trial court?'
		},
		{
			id: 'nazareno',
			name: 'People v. Nazareno',
			cite: 'G.R. No. 168982, August 5, 2009',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine.',
			issue: 'May the State appeal or seek Rule 45 review of a judgment of acquittal?',
			ruling: 'No.',
			doctrine: 'A judgment of acquittal is final, unreviewable by appeal and immediately executory; the State may not seek its review by ordinary appeal or Rule 45 without placing the accused in double jeopardy.',
			reasoning: 'The government already had a complete opportunity to prove guilt; a second opportunity via appeal carries the same prejudice as a second trial.',
			rule: 'Rule 122, Sec. 1; Const., Art. III, Sec. 21.',
			hypo: 'The People file a Rule 45 petition arguing the trial court misweighed testimony in acquitting — dismiss.',
			examQ: 'Why can the State not appeal an acquittal?',
			verify: 'Facts not given in Tiu.'
		},
		{
			id: 'ysidoro',
			name: 'Ysidoro v. Leonardo-de Castro',
			cite: 'G.R. No. 171513, February 6, 2012',
			from: 'Tiu',
			facts: 'The People sought review of an acquittal by the Sandiganbayan.',
			issue: 'What are the modes of review of a criminal judgment, and which may reach an acquittal?',
			ruling: 'Only Rule 65 certiorari may reach an acquittal, and only on jurisdictional grounds.',
			doctrine: 'Ordinary appeal and Rule 45 correct errors of judgment in an intrinsically valid decision and lie only against convictions; Rule 65 corrects errors of jurisdiction. Double jeopardy does not bar a Rule 65 petition against an acquittal rendered with grave abuse or where the prosecution was denied due process.',
			reasoning: 'Certiorari does not re-weigh evidence; it asks only whether a valid decision was rendered.',
			rule: 'Rule 122; Rules 45 and 65.',
			hypo: 'The People claim the Sandiganbayan ignored documentary evidence. That is an error of judgment; certiorari fails.',
			examQ: 'Distinguish the three modes of review of a criminal judgment.',
			also: ['r117'],
			verify: 'Facts summarized generally.'
		},
		{
			id: 'mateo',
			name: 'People v. Mateo',
			cite: 'G.R. Nos. 147678-87, July 7, 2004',
			from: 'Tiu',
			facts: 'A death sentence was elevated to the SC for automatic review.',
			issue: 'Does the constitutional provision on SC review of death, RP and LI cases bar intermediate review by the CA?',
			ruling: 'No.',
			doctrine: 'The Constitution requires mandatory SC review in such cases but does not prohibit an intermediate review; the SC, in its rule-making power, provided for CA review first. The CA renders judgment and, for death, refrains from entering it and certifies the case to the SC.',
			reasoning: 'Where life and liberty are at stake, a prior CA determination of the facts minimizes error.',
			rule: 'Rule 122, Sec. 3; Rule 124, Sec. 13 (as amended by A.M. No. 00-5-03-SC, 2004).',
			hypo: 'An RTC imposes reclusion perpetua for rape. The appeal goes by notice to the CA, not to the SC.',
			examQ: 'Why do reclusion perpetua cases now go to the CA first?',
			also: ['r124']
		}
	],
	deadlines: [
		{ ref: 'Rule 122, Sec. 6', act: 'Appeal (notice of appeal)', who: 'Appellant', period: '15 days', start: 'Promulgation of the judgment, or notice of the final order', exceptions: 'Suspended by a motion for new trial or reconsideration; fresh 15 days after denial (Yu v. Samson-Tatad)', effect: 'Judgment becomes final', kind: 'procedural' },
		{ ref: 'Rule 42, Sec. 1 (via Rule 122, Sec. 3[b])', act: 'Petition for review (RTC appellate → CA)', who: 'Petitioner', period: '15 days (+15; second +15 for compelling reasons)', start: 'Notice of the RTC decision or of denial of an MR', exceptions: 'Extension only on motion with fees paid', effect: 'Decision becomes final', kind: 'procedural' },
		{ ref: 'Rule 45, Sec. 2', act: 'Petition for review on certiorari to the SC', who: 'Petitioner', period: '15 days (+30 for justifiable reasons)', start: 'Notice of the judgment or of denial of an MR', exceptions: '—', effect: 'Judgment becomes final', kind: 'procedural' },
		{ ref: 'Rule 122, Sec. 8', act: 'Transmit the record to the appellate court', who: 'Clerk of the trial court', period: '5 days', start: 'Filing of the notice of appeal', exceptions: '—', effect: 'Administrative', kind: 'procedural' },
		{ ref: 'Rule 122, Sec. 9(a), (c)', act: 'Transmit the record to the RTC; file memoranda', who: 'MTC clerk; parties', period: '5 days; 15 days', start: 'Perfection of the appeal; receipt of the RTC clerk\'s notice', exceptions: 'The RTC may require memoranda', effect: 'RTC decides on the record', kind: 'procedural' },
		{ ref: 'Rule 122, Sec. 7', act: 'File the certified transcript (death cases)', who: 'Stenographer', period: '30 days', start: 'Promulgation of the sentence', exceptions: 'Extension only by the SC on justifiable grounds', effect: 'Administrative', kind: 'procedural' },
		{ ref: 'Rule 122, Sec. 10', act: 'Forward records for automatic review (death cases)', who: 'Clerk of the trial court', period: 'Not earlier than 15 nor later than 20 days', start: 'Promulgation or notice of denial of a motion', exceptions: 'Dormant since RA 9346', effect: 'Automatic review by the CA', kind: 'procedural' },
		{ ref: 'Rule 65, Sec. 4', act: 'Certiorari against an acquittal', who: 'The People (OSG)', period: '60 days', start: 'Notice of the judgment or order', exceptions: '—', effect: 'Acquittal stands', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'The People may appeal an acquittal if the trial court clearly misread the evidence.', right: 'An acquittal is final and unappealable; misreading evidence is an error of judgment that not even certiorari reaches (Nazareno; Ysidoro).', example: '—' },
		{ wrong: 'An accused who appeals can only get a better result.', right: 'His appeal throws the whole case open; the penalty may be increased (Trono; Bu Lin; People v. Torres).', example: '—' },
		{ wrong: 'Reclusion perpetua cases go straight to the SC.', right: 'Since Mateo (2004): notice of appeal to the CA; then to the SC by notice of appeal filed with the CA.', example: '—' },
		{ wrong: 'An MTC conviction affirmed by the RTC is appealed to the CA by notice of appeal.', right: 'By petition for review under Rule 42.', example: '—' },
		{ wrong: 'The offended party may appeal the penalty imposed.', right: 'Only the civil aspect; the criminal aspect belongs to the People (Sec. 1; Sec. 11[b]).', example: '—' },
		{ wrong: 'An appeal by one co-accused benefits all of them in every case.', right: 'Only insofar as the judgment is favorable and applicable to them (Sec. 11[a]).', example: '—' },
		{ wrong: 'Filing a notice of appeal in the CA perfects the appeal from the RTC.', right: 'The notice is filed with the court that rendered the judgment (Sec. 3[a]).', example: '—' },
		{ wrong: 'The wrong mode of appeal still stops the period.', right: 'It does not; the judgment becomes final (Tiu, p. 214), save in the interest of justice.', example: '—' }
	],
	corrections: [
		{ old: 'Automatic review of death sentences (Secs. 3[d], 7, 10).', fix: 'RA 9346 (2006) prohibits the imposition of death; reclusion perpetua or life imprisonment is imposed instead, so automatic review no longer operates in practice.', source: 'RA 9346, Secs. 1–2' },
		{ old: 'The appeal period resumes for "the balance of the period" after denial of a motion (text of Sec. 6).', fix: 'A fresh 15-day period runs from notice of the denial.', source: 'Yu v. Samson-Tatad, G.R. No. 170979, February 9, 2011' },
		{ old: 'Service of the notice of appeal by registered mail or substituted service (Rule 13 as of 1997).', fix: 'The 2019 amendments to Rule 13 add electronic and accredited-courier service.', source: 'A.M. No. 19-10-20-SC (2019 Amendments to the 1997 Rules of Civil Procedure)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Who may appeal', q: 'Who may appeal in a criminal case? State the limitation on each.', a: 'E122.1.', keys: 'Sec. 1; double jeopardy' },
		{ cat: 'A', level: 2, topic: 'Modes', q: 'State the mode of appeal from (a) the MTC; (b) the RTC in its original jurisdiction; (c) the RTC in its appellate jurisdiction; (d) the CA; (e) the Sandiganbayan.', a: 'E122.2.', keys: 'Secs. 2–3; Rule 124, Sec. 13' },
		{ cat: 'A', level: 2, topic: 'Several accused', q: 'What is the effect of an appeal by one of several accused?', a: 'E122.3.', keys: 'Sec. 11' },
		{ cat: 'A', level: 3, topic: 'Review of acquittal', q: 'May a judgment of acquittal be reviewed? By what remedy and on what grounds?', a: 'E122.4 and E122.5.', keys: 'Rule 65; grave abuse; due process' },
		{ cat: 'B', level: 3, topic: 'Modes compared', q: 'Distinguish ordinary appeal from a petition for review (Rule 42) and a petition for review on certiorari (Rule 45) in criminal cases.', a: 'See C122.1.', keys: 'matter of right; questions of law' },
		{ cat: 'B', level: 3, topic: 'Accused vs People', q: 'Distinguish an appeal by the accused from the People\'s review of an acquittal.', a: 'See C122.2.', keys: 'whole case open; errors of jurisdiction' },
		{ cat: 'B', level: 3, topic: 'Criminal vs civil', q: 'Distinguish appeals in criminal and civil cases as to scope and brief periods.', a: 'See C122.3.', keys: '30–30–20; 45–45–20' },
		{ cat: 'C', level: 1, topic: 'Period', q: 'An appeal in a criminal case must be taken within 15 days from promulgation of the judgment.', tf: true, short: 'True (Sec. 6).', keys: 'Sec. 6' },
		{ cat: 'C', level: 1, topic: 'Where filed', q: 'A notice of appeal from an RTC judgment in a case it tried is filed with the Court of Appeals.', tf: false, short: 'False. It is filed with the court that rendered the judgment — the RTC — and served on the adverse party (Sec. 3[a]).', keys: 'Sec. 3(a)' },
		{ cat: 'C', level: 1, topic: 'Who may appeal', q: 'The offended party may appeal the civil aspect of a judgment of acquittal.', tf: true, short: 'True (Ching v. Nicdao, 2007), within the same period as the accused.', keys: 'Sec. 1; Ching v. Nicdao' },
		{ cat: 'C', level: 2, topic: 'Mode', q: 'An RTC decision affirming an MTC conviction is appealed to the CA by petition for review under Rule 42.', tf: true, short: 'True (Sec. 3[b]).', keys: 'Sec. 3(b)' },
		{ cat: 'C', level: 2, topic: 'RP cases', q: 'A judgment of the RTC imposing reclusion perpetua is appealed directly to the Supreme Court by notice of appeal.', tf: false, short: 'False. Since People v. Mateo (2004) and A.M. No. 00-5-03-SC, it is appealed by notice of appeal to the CA (Sec. 3[c]).', keys: 'Sec. 3(c); Mateo' },
		{ cat: 'C', level: 2, topic: 'Increase of penalty', q: 'On appeal by the accused alone, the appellate court cannot increase the penalty imposed by the trial court.', tf: false, short: 'False. The appeal throws the whole case open; the appellate court may increase the penalty (Trono; Bu Lin; Rule 124, Sec. 11).', keys: 'Trono; Rule 124, Sec. 11' },
		{ cat: 'C', level: 2, topic: 'Several accused', q: 'Execution of a judgment is stayed as to all accused once any one of them perfects an appeal.', tf: false, short: 'False. Only as to the appealing party (Sec. 11[c]).', keys: 'Sec. 11(c)' },
		{ cat: 'C', level: 3, topic: 'Certiorari', q: 'The People may assail a judgment of acquittal by certiorari under Rule 65 on the ground that the trial court erred in appreciating the evidence.', tf: false, short: 'False. Certiorari corrects errors of jurisdiction, not errors of judgment; misappreciation of evidence is not grave abuse (Ysidoro; Villareal v. Aliga).', keys: 'Rule 65; errors of jurisdiction' },
		{ cat: 'C', level: 3, topic: 'Wrong mode', q: 'An appeal taken by the wrong mode tolls the reglementary period, so the appellant may refile by the correct mode.', tf: false, short: 'False. The wrong mode does not toll the period; the judgment becomes final, save exceptionally in the interest of justice (Tiu, p. 214).', keys: 'wrong mode; finality' },
		{ cat: 'C', level: 3, topic: 'State appeal', q: 'The People may appeal from an order granting a motion to quash filed before arraignment.', tf: true, short: 'True. Jeopardy does not attach before a valid plea, so the appeal does not place the accused twice in jeopardy (Sec. 1).', keys: 'Sec. 1; no jeopardy before plea' },
		{ cat: 'C', level: 4, topic: 'Withdrawal', q: 'Once an appeal is perfected, the trial court can no longer allow the appellant to withdraw it.', tf: false, short: 'False. The trial court may allow withdrawal before the record is forwarded to the appellate court; the judgment then becomes final (Sec. 12).', keys: 'Sec. 12' },
		{ cat: 'C', level: 4, topic: 'CA to SC', q: 'When the CA affirms a sentence of life imprisonment, the accused may appeal to the SC only by a Rule 45 petition raising questions of law.', tf: false, short: 'False. By notice of appeal filed with the CA (Rule 124, Sec. 13[c]); the SC may then review facts as well as law.', keys: 'Rule 124, Sec. 13(c)' },
		{
			cat: 'D', level: 4, topic: 'Mode of appeal', title: 'MTC → RTC → ?',
			facts: 'A is convicted by the MTC of reckless imprudence resulting in damage to property. The RTC affirms on appeal. A receives the RTC decision on August 1 and on August 10 files a notice of appeal with the RTC.',
			q: 'Was A\'s appeal properly taken?',
			issue: 'Mode of appeal from an RTC decision rendered in its appellate jurisdiction.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 122, Sec. 3(b): appeal to the CA in cases decided by the RTC in its appellate jurisdiction is by petition for review under Rule 42, filed with the CA within 15 days. The wrong mode does not toll the period.',
				application: 'The RTC decided as an appellate court. A should have filed a verified Rule 42 petition with the CA and paid docket fees by August 16 (or moved for a 15-day extension). A notice of appeal with the RTC is the wrong mode.',
				conclusion: 'The appeal should be dismissed; unless A files a proper petition by August 16, the RTC decision becomes final.'
			},
			keys: 'Sec. 3(b); Rule 42'
		},
		{
			cat: 'D', level: 4, topic: 'Several accused', title: 'The co-accused who did not appeal',
			facts: 'B and C are convicted as co-principals of robbery with homicide. Only B appeals. The CA finds that the killing was not proved to have been committed by reason or on the occasion of the robbery and convicts B of robbery only.',
			q: 'Does the CA ruling benefit C?',
			issue: 'Effect of an appeal by one of several accused on those who did not appeal.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Rule 122, Sec. 11(a): an appeal by one accused does not affect those who did not appeal, "except insofar as the judgment of the appellate court is favorable and applicable to the latter."',
				application: 'The finding goes to the nature of the crime itself, common to both co-principals. It is favorable (a lighter offense) and applicable (the same facts underlie C\'s conviction).',
				conclusion: 'C\'s conviction should likewise be reduced to robbery.'
			},
			keys: 'Sec. 11(a); favorable and applicable'
		},
		{
			cat: 'E', level: 5, topic: 'Appeal and double jeopardy', title: 'Appeal from a partial acquittal',
			facts: 'D is charged with murder. The RTC convicts him of homicide, finding treachery unproved. D appeals, arguing self-defense. The OSG, in its brief, argues that treachery was proved and asks the CA to convict of murder.',
			q: 'May the CA convict D of murder?',
			issue: 'Whether an accused who appeals waives double jeopardy as to the graver offense.',
			alac: {
				answer: 'Yes, if treachery was properly alleged and proved.',
				legalBasis: 'Rule 122, Sec. 1; Rule 124, Sec. 11 (the CA may "increase or reduce the penalty"); Trono v. US (1905); Bu Lin v. CA (1982): by appealing, the accused waives double jeopardy and throws the whole case open for review.',
				application: 'The homicide conviction was an implied acquittal of murder, but D himself put the whole judgment in issue. The CA may correct errors not assigned, including the finding on treachery. Had D not appealed, the People could not have appealed to raise treachery.',
				conclusion: 'The CA may convict of murder and impose the corresponding penalty.'
			},
			trap: 'The answer flips if only the People sought review: an appeal by the State from the implied acquittal would be barred.',
			keys: 'whole case open; Trono; Rule 124, Sec. 11'
		},
		{
			cat: 'E', level: 5, topic: 'Review of acquittal', title: 'The sham trial',
			facts: 'In an estafa case, the judge, over the prosecutor\'s objection, cancels all remaining prosecution dates after the first witness, declares the prosecution\'s evidence closed, and acquits the accused the same day. The People file a notice of appeal; alternatively, they consider certiorari.',
			q: 'What is the People\'s proper remedy, and will it prosper?',
			issue: 'Whether an acquittal may be reviewed, and by what mode.',
			alac: {
				answer: 'Not appeal; Rule 65 certiorari, which should prosper.',
				legalBasis: 'Rule 122, Sec. 1 (no appeal where the accused would be placed in double jeopardy); Villareal v. Aliga (2014) and Ysidoro (2012): an acquittal may be assailed by Rule 65 certiorari where the prosecution was denied due process or the court acted with grave abuse amounting to lack of jurisdiction.',
				application: 'An appeal from the acquittal is barred. But the prosecution was denied any real chance to present its case — a denial of due process that makes the acquittal void, so double jeopardy does not attach.',
				conclusion: 'The notice of appeal should be dismissed; a Rule 65 petition within 60 days should be granted and the case remanded for continuation of trial.'
			},
			keys: 'Rule 65; denial of due process; void acquittal'
		},
		{ cat: 'F', level: 3, topic: 'Ching v. Nicdao', q: 'What did Ching v. Nicdao (2007) rule on the offended party\'s right to appeal after an acquittal?', a: 'The offended party may appeal the civil aspect, within the same period as the accused, because the civil action impliedly instituted survives an acquittal on reasonable doubt.', keys: 'civil aspect; same period' },
		{ cat: 'F', level: 3, topic: 'Mateo', q: 'What did People v. Mateo (2004) change about appeals in death, reclusion perpetua and life imprisonment cases?', a: 'It introduced an intermediate review by the CA before the case reaches the SC; implemented by A.M. No. 00-5-03-SC (2004).', keys: 'intermediate review' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 122', title: 'Rule 122 integrated',
			facts: 'E and F are convicted by the RTC of illegal sale of dangerous drugs and sentenced to life imprisonment; the RTC also orders E to pay a fine. At promulgation on May 2, E is present; F, on bail, is absent without cause. E files a notice of appeal with the CA on May 15; F\'s counsel files a notice of appeal for F with the RTC on May 16. The prosecutor files a notice of appeal of the fine, asking that it be increased.',
			q: 'Rule on each appeal.',
			issue: 'Where a notice of appeal is filed; appeal by an accused absent at promulgation; appeal by the People to increase a penalty.',
			alac: {
				answer: 'E\'s appeal is defective in venue but can be saved if a notice is filed with the RTC by May 17; F has no appeal; the People\'s appeal is barred.',
				legalBasis: 'Rule 122, Sec. 3(a), (c) (notice of appeal filed with the court that rendered the judgment; LI cases by notice to the CA); Sec. 6 (15 days from promulgation); Rule 120, Sec. 6 (unjustified absence at promulgation forfeits remedies unless the accused surrenders and moves for leave within 15 days); Sec. 1 (no appeal that places the accused in double jeopardy).',
				application: 'E filed in the wrong court; the notice belongs in the RTC, and the 15 days run to May 17 — a corrected filing in time cures it. F lost his remedies by his unjustified absence and has not surrendered; counsel cannot appeal for a fugitive (Jaylo). The People\'s appeal to increase the penalty would place the accused twice in jeopardy.',
				conclusion: 'E should refile with the RTC by May 17; F\'s notice should be disregarded unless he surrenders and obtains leave by May 17; the People\'s appeal should be dismissed.'
			},
			trap: 'Even though only the People are barred, if E\'s appeal proceeds, the CA may increase E\'s fine — the accused\'s own appeal opens the whole case.',
			keys: 'Sec. 3; Sec. 6; Rule 120, Sec. 6; Sec. 1'
		}
	],
	memorize: [
		'Any party may appeal, unless double jeopardy (Sec. 1): accused · offended party (civil only) · People (no jeopardy)',
		'Acquittal: final, unappealable, immediately executory; Rule 65 only for grave abuse or denial of due process',
		'Modes: MTC → RTC notice · RTC original → CA notice (incl. RP/LI) · RTC appellate → CA Rule 42 · pure law → SC Rule 45 · CA/SB → SC Rule 45, or notice for RP/LI',
		'15 days from promulgation; suspended by MR/MNT; fresh 15 days after denial',
		'Accused\'s appeal opens the whole case; penalty may be increased',
		'Several accused: no effect unless favorable and applicable; civil appeal does not touch the criminal aspect; stay only for the appellant (Sec. 11)',
		'Withdrawal before records forwarded (Sec. 12); clerk transmits within 5 days (Sec. 8)'
	],
	flashcards: [
		['Who may appeal?', 'Any party, unless the accused would be placed in double jeopardy.'],
		['May the offended party appeal an acquittal?', 'Only the civil aspect, within the same period (Ching v. Nicdao).'],
		['MTC conviction → ?', 'Notice of appeal to the RTC.'],
		['RTC (original) conviction → ?', 'Notice of appeal to the CA (questions of fact or mixed); Rule 45 to the SC on pure questions of law.'],
		['RTC (appellate) decision → ?', 'Petition for review under Rule 42 to the CA.'],
		['CA affirms reclusion perpetua → ?', 'Notice of appeal filed with the CA, to the SC.'],
		['Period to appeal?', '15 days from promulgation (or notice of the final order).'],
		['Effect of the wrong mode?', 'The period is not tolled; the judgment becomes final.'],
		['May the penalty be increased on the accused\'s appeal?', 'Yes — the whole case is open (Trono; Bu Lin).'],
		['How may an acquittal be reviewed?', 'Only by Rule 65 certiorari for grave abuse amounting to lack of jurisdiction or denial of due process to the prosecution.'],
		['Effect of an appeal by one of several accused?', 'None on the others, unless favorable and applicable.'],
		['When may an appeal be withdrawn?', 'Before the record is forwarded (trial court); in MTC appeals, before the RTC renders judgment.']
	],
	oral: [
		['"Can the State appeal an acquittal?"', 'No. An acquittal is final, unappealable and immediately executory; an appeal would place the accused twice in jeopardy. The State\'s only recourse is certiorari under Rule 65, and only if the prosecution was denied due process or the court acted with grave abuse amounting to lack of jurisdiction.'],
		['"What happens when the accused appeals?"', 'He waives the protection against double jeopardy and throws the whole case open for review. The appellate court may correct errors not assigned and may increase the penalty.'],
		['"Explain Section 11 of Rule 122."', 'An appeal by one accused does not affect those who did not appeal, except insofar as the appellate judgment is favorable and applicable to them; the offended party\'s civil appeal does not affect the criminal aspect; and execution is stayed only as to the appellant.']
	],
	checklist: [
		'I can state who may appeal and the double-jeopardy limit.',
		'I can match each court of origin to its appellate court and mode.',
		'I can explain Mateo and the CA\'s intermediate review.',
		'I can compute the appeal period, including the fresh period.',
		'I can apply Sec. 11 to several accused.',
		'I can explain how an acquittal may be reviewed (Rule 65 only).'
	],
	sheet: [
		'<b>Who (Sec. 1):</b> any party unless double jeopardy · accused · offended party (civil) · People (no jeopardy, e.g., quash before plea).',
		'<b>Acquittal:</b> final, unappealable, executory (Nazareno). Rule 65 only — grave abuse or denial of due process (Villareal v. Aliga; Ysidoro).',
		'<b>Modes (Secs. 2–3):</b> MTC→RTC notice · RTC orig→CA notice (RP/LI too) · RTC appellate→CA Rule 42 · law→SC Rule 45 · CA/SB→SC Rule 45 or notice for RP/LI. Wrong mode → final.',
		'<b>Period (Sec. 6):</b> 15 days from promulgation; suspended by MR/MNT; fresh 15 after denial (Yu v. Samson-Tatad).',
		'<b>Scope:</b> accused\'s appeal opens the whole case; penalty may go up (Trono; Bu Lin; Torres).',
		'<b>Several accused (Sec. 11):</b> favorable and applicable only; civil appeal ≠ criminal; stay only for the appellant.',
		'<b>Logistics:</b> record in 5 days (Sec. 8); MTC appeals decided on memoranda in 15 days (Sec. 9); withdraw before transmittal (Sec. 12). Death provisions dormant (RA 9346).'
	],
	watchFor: `<strong>Watch for: who appealed, from which court, by what mode.</strong>
<ul>
<li>Is the appellant the People against an acquittal? Barred — only Rule 65 for jurisdictional error.</li>
<li>Did the RTC decide as a trial court or as an appellate court? Notice of appeal vs. Rule 42.</li>
<li>Reclusion perpetua or life imprisonment? Notice of appeal to the CA (Mateo).</li>
<li>Did the accused appeal? Then the penalty may go up.</li>
<li>Several accused: is the appellate ruling favorable <i>and</i> applicable to the others?</li>
</ul>`
};
