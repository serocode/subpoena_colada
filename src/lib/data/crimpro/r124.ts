import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 124 — Procedure in the Court of Appeals. */
export const r124: RuleChapter = {
	id: 'r124',
	n: 124,
	title: 'Procedure in the Court of Appeals',
	short: 'R124 Procedure in the CA',
	tiu: 'pp. 218–219',
	plain: `Once a criminal appeal reaches the Court of Appeals, the appellant files his brief within 30 days of notice, the appellee answers within 30 days, and the appellant may reply within 20 (30–30–20). A detained or unrepresented appellant gets counsel de oficio. The CA may dismiss the appeal if the appellant fails to file his brief (unless his lawyer is de oficio) or escapes, jumps bail or flees abroad. It reviews the whole record, may affirm, reverse, modify, increase or reduce the penalty, order a new trial, or dismiss; it may receive evidence itself. A death sentence is rendered but not entered and is certified to the SC; reclusion perpetua or life imprisonment is entered and may be appealed to the SC by notice of appeal. One MR within 15 days; no second MR.`,
	purpose: `To give a full, prompt review of convictions on the facts and the law, with safeguards for detained and indigent appellants.`,
	stage: `After an appeal is perfected under ${ruleLink('r122')}; before review by the SC under ${ruleLink('r125')}.`,
	questions: [
		'How is the case titled, and when is counsel de oficio designated?',
		'What are the periods for briefs, and when may they be extended?',
		'When may the CA dismiss an appeal?',
		'What may the CA do with the judgment (scope of judgment)?',
		'When may the CA receive evidence or grant a new trial?',
		'What happens when the CA finds that death, reclusion perpetua or life imprisonment should be imposed?',
		'What are the rules on reconsideration in the CA?'
	],
	relations: `Rule 124 continues ${ruleLink('r122')}: the appeal is perfected there and processed here. The CA's power to increase the penalty (Sec. 11) is the procedural side of the rule that an accused who appeals opens the whole case. Sec. 13 implements ${caseLink('mateo', 'People v. Mateo')}. A new trial in the CA (Sec. 14) borrows the form of ${ruleLink('r121', 'sections', 'Rule 121, Sec. 4')} but allows only newly discovered evidence. Dismissal for escape (Sec. 8) mirrors the loss of remedies on unjustified absence at promulgation (${ruleLink('r120', 'sections', 'Rule 120, Sec. 6')}). Sec. 18 imports the civil appellate rules (Rules 42, 44–46, 48–56).`,
	principles: [
		'<b>Title stays as in the court of origin</b>; parties become appellant and appellee (Sec. 1).',
		'<b>Briefs 30–30–20</b>, extendible only for good and sufficient cause on a motion filed before the period expires (Secs. 3–5).',
		'<b>No dismissal for failure to file a brief if counsel is de oficio</b>; dismissal for escape, jumping bail or flight abroad (Sec. 8).',
		'<b>Reversal only for substantial error</b> injuriously affecting the appellant\'s substantial rights (Sec. 10).',
		'<b>Broad scope</b>: affirm, reverse, modify, increase or reduce the penalty, remand for new trial or retrial, dismiss (Sec. 11).',
		'<b>Death: render but do not enter, and certify to the SC; RP/LI: render and enter; appeal by notice</b> (Sec. 13).',
		'<b>One MR, within 15 days</b>; it stays the mittimus (Sec. 16).'
	],
	sections: [
		{
			n: '1',
			title: 'Title of the case',
			text: `"In all criminal cases appealed to the Court of Appeals, the party appealing the case shall be called the 'appellant' and the adverse party the 'appellee,' but the title of the case shall remain as it was in the court of origin."`,
			plain: `The case stays "People of the Philippines v. [accused]"; the parties are labeled appellant and appellee.`,
			trap: `The title is not reversed even when the accused is the appellant.`
		},
		{
			n: '2',
			title: 'Appointment of counsel de oficio for the accused',
			text: `If it appears from the record that "(a) the accused is confined in prison, (b) is without counsel de parte on appeal, or (c) has signed the notice of appeal himself," the CA clerk "shall designate a counsel de oficio." An appellant not confined "may, upon request, be assigned a counsel de oficio within ten (10) days from receipt of the notice to file brief and he establishes his right thereto."`,
			plain: `The CA clerk must assign a free lawyer if the appellant is in prison, has no lawyer, or signed his own notice of appeal. One who is free may ask for one within 10 days of the notice to file brief, if he qualifies.`,
			reqs: `Any one of the three circumstances (mandatory designation); or, for a non-confined appellant, a request within 10 days and proof of entitlement.`,
			who: `CA clerk of court; appellant.`,
			when: `Non-confined appellant: within 10 days from receipt of the notice to file brief.`,
			hypo: `A detained appellant files a handwritten notice of appeal. The CA clerk must designate counsel de oficio even if he did not ask.`,
			trap: `The three circumstances are alternative: any one triggers the duty.`
		},
		{
			n: '3',
			title: 'When brief for appellant to be filed',
			text: `"Within thirty (30) days from receipt by the appellant or his counsel of the notice from the clerk of court of the Court of Appeals that the evidence, oral and documentary, is already attached to the record, the appellant shall file seven (7) copies of his brief with the clerk of court which shall be accompanied by proof of service of two (2) copies thereof upon the appellee."`,
			plain: `Appellant's brief: 30 days from notice that the evidence is attached to the record; 7 copies; serve 2 on the appellee.`,
			when: `30 days from receipt of the notice.`,
			effect: `Failure to file may lead to dismissal (Sec. 8), except where counsel is de oficio.`,
			update: `The CA's e-filing and copy requirements have changed since 2000 (efficient use of paper and e-filing issuances); check current requirements before stating the number of copies.`
		},
		{
			n: '4',
			title: 'When brief for appellee to be filed; reply brief of the appellant',
			text: `"Within thirty (30) days from the receipt of the brief of the appellant, the appellee shall file seven (7) copies of the brief of the appellee with the clerk of court which shall be accompanied by proof of service of two (2) copies thereof upon the appellant. Within twenty (20) days from receipt of the brief of the appellee, the appellant may file a reply brief traversing matters raised in the former but not covered in the brief of the appellant."`,
			plain: `Appellee's brief: 30 days from receipt of the appellant's brief. Reply brief (optional): 20 days, limited to new matters in the appellee's brief.`,
			when: `30 days (appellee); 20 days (reply).`,
			trap: `Criminal: 30–30–20. Civil (Rule 44): 45–45–20.`
		},
		{
			n: '5',
			title: 'Extension of time for filing briefs',
			text: `"Extension of time for the filing of briefs will not be allowed except for good and sufficient cause and only if the motion for extension is filed before the expiration of the time sought to be extended."`,
			plain: `Extensions are exceptional: good and sufficient cause, and the motion must be filed before the period runs out.`,
			reqs: `(1) Good and sufficient cause; (2) motion filed before expiration of the period.`,
			effect: `A motion filed after the period has lapsed cannot be granted.`
		},
		{
			n: '6',
			title: 'Form of briefs',
			text: `Briefs "shall either be printed, encoded or typewritten in double space on the legal size good quality unglazed paper, 330 mm. in length by 216 mm. in width."`,
			plain: `Double-spaced, legal-size paper.`,
			update: `Later issuances on paper size and e-filing (e.g., the Efficient Use of Paper Rule) changed format requirements; verify the current rule.`
		},
		{
			n: '7',
			title: 'Contents of brief',
			text: `"The briefs in criminal cases shall have the same contents as provided in sections 13 and 14 of Rule 44. A certified true copy of the decision or final order appealed from shall be appended to the brief of appellant."`,
			plain: `Same contents as civil briefs (Rule 44, Secs. 13–14); the appellant attaches a certified true copy of the decision.`,
			reqs: `Rule 44 contents (subject index, assignment of errors, statement of the case and facts, issues, argument, relief); certified true copy of the decision.`
		},
		{
			n: '8',
			title: 'Dismissal of appeal for abandonment or failure to prosecute',
			text: `The CA "may, upon motion of the appellee or motu proprio and with notice to the appellant in either case, dismiss the appeal if the appellant fails to file his brief within the time prescribed by this Rule, except where the appellant is represented by a counsel de oficio." It "may also, upon motion of the appellee or motu proprio, dismiss the appeal if the appellant escapes from prison or confinement, jumps bail or flees to a foreign country during the pendency of the appeal."`,
			plain: `Two grounds for dismissal: (1) no brief on time (but never when counsel is de oficio); (2) the appellant escapes, jumps bail or flees abroad while the appeal is pending.`,
			reqs: `Ground 1: failure to file the brief; notice to the appellant; counsel is not de oficio. Ground 2: escape, bail-jumping or flight during the appeal.`,
			who: `CA, motu proprio or on the appellee's motion.`,
			exceptions: `Counsel de oficio: the appellant should not suffer for appointed counsel's neglect; the CA should instead require counsel to file or appoint another.`,
			effect: `Dismissal makes the trial court judgment final. An appellant who escapes is deemed to have abandoned his appeal; he cannot seek relief from a court whose jurisdiction he evades.`,
			hypo: `While his appeal is pending, a convict on bail pending appeal flies to Dubai. The CA may dismiss the appeal motu proprio.`,
			trap: `"May" dismiss — dismissal is discretionary, and requires notice to the appellant on the failure-to-file ground.`,
			verify: `For the effect of escape on automatic review (now moot after RA 9346), see People v. Taruc (2009), noted in Rule 120.`
		},
		{
			n: '9',
			title: 'Prompt disposition of appeals',
			text: `"Appeals of accused who are under detention shall be given precedence in their disposition over other appeals. The Court of Appeals shall hear and decide the appeal at the earliest practicable time with due regard to the rights of the parties. The accused need not be present in court during the hearing of the appeal."`,
			plain: `Detained appellants go first. The accused need not attend the hearing of the appeal.`,
			trap: `Presence of the accused is required at arraignment and promulgation, but not at the hearing of the appeal.`
		},
		{
			n: '10',
			title: 'Judgment not to be reversed or modified except for substantial error',
			text: `"No judgment shall be reversed or modified unless the Court of Appeals, after an examination of the record and of the evidence adduced by the parties, is of the opinion that error was committed which injuriously affected the substantial rights of the appellant."`,
			plain: `Harmless errors do not justify reversal; the error must have hurt the appellant's substantial rights.`,
			hypo: `The trial court admitted a hearsay statement, but the conviction rests on two credible eyewitnesses. The error did not injuriously affect the appellant's rights; no reversal.`
		},
		{
			n: '11',
			title: 'Scope of judgment',
			text: `"The Court of Appeals may reverse, affirm, or modify the judgment and increase or reduce the penalty imposed by the trial court, remand the case to the Regional Trial Court for new trial or retrial, or dismiss the case."`,
			plain: `The CA can affirm, reverse, modify, raise or lower the penalty, send the case back for new trial or retrial, or dismiss.`,
			effect: `Because the accused's appeal opens the whole case, the CA may increase the penalty even if only the accused appealed (Trono; Bu Lin — see ${ruleLink('r122', 'cases')}).`,
			hypo: `Convicted of homicide, the accused appeals; the CA finds evident premeditation alleged and proved, convicts of murder and imposes reclusion perpetua — then enters judgment, appealable to the SC by notice (Sec. 13[c]).`,
			trap: `The power to "increase" the penalty applies to the accused's appeal; it is not a back door for the People to appeal an acquittal.`
		},
		{
			n: '12',
			title: 'Power to receive evidence',
			text: `The CA "shall have the power to try cases and conduct hearings, receive evidence and perform all acts necessary to resolve factual issues raised in cases falling within its original and appellate jurisdiction, including the power to grant and conduct new trials or further proceedings. Trials or hearings in the Court of Appeals must be continuous and must be completed within three months, unless extended by the Chief Justice." (As amended by A.M. No. 00-5-03-SC, 2004.)`,
			plain: `The CA may itself receive evidence and hold new trials; hearings must be continuous and finish within three months unless the Chief Justice extends.`,
			when: `Three months, extendible by the Chief Justice.`
		},
		{
			n: '13',
			title: 'Certification or appeal of case to the Supreme Court',
			text: `"(a) Whenever the Court of Appeals finds that the penalty of death should be imposed, the court shall render judgment but refrain from making an entry of judgment and forthwith certify the case and elevate its entire record to the Supreme Court for review. (b) Where the judgment also imposes a lesser penalty for offenses committed on the same occasion or which arose out of the same occurrence that gave rise to the more severe offense for which the penalty of death is imposed, and the accused appeals, the appeal shall be included in the case certified for review to the Supreme Court. (c) In cases where the Court of Appeals imposes reclusion perpetua, life imprisonment or a lesser penalty, it shall render and enter judgment imposing such penalty. The judgment may be appealed to the Supreme Court by notice of appeal filed with the Court of Appeals." (As amended by A.M. No. 00-5-03-SC, 2004.)`,
			plain: `Death: decide, don't enter, send up to the SC (with related lesser-penalty appeals). RP, LI or lower: decide and enter; the accused may appeal to the SC by notice of appeal filed with the CA.`,
			exceptions: `Penalties lower than RP/LI: the SC reviews by Rule 45 petition on questions of law, not by notice of appeal (Rule 125, Sec. 2; Tiu, p. 212).`,
			effect: `A notice of appeal to the SC in RP/LI cases opens both facts and law; a Rule 45 petition raises only questions of law.`,
			cases: `${caseLink('mateo', 'People v. Mateo (2004)')}.`,
			hypo: `The CA affirms reclusion perpetua for rape. The accused files a notice of appeal with the CA within 15 days; the SC may review the facts.`,
			trap: `Tiu reads the "lesser penalty" in Sec. 3(c) of Rule 122 and Sec. 13 here as covering co-participants or related offenses in the same occurrence, where someone was sentenced to RP/LI (p. 212).`,
			update: `With RA 9346 (2006), the CA no longer imposes death, so Sec. 13(a)–(b) are dormant; Sec. 13(c) is the operative rule.`
		},
		{
			n: '14',
			title: 'Motion for new trial',
			text: `"At any time after the appeal from the lower court has been perfected and before the judgment of the Court of Appeals convicting the appellant becomes final, the latter may move for a new trial on the ground of newly-discovered evidence material to his defense. The motion shall conform with the provisions of section 4, Rule 121."`,
			plain: `In the CA, the appellant may move for new trial — but only on newly discovered evidence — from perfection of the appeal until the CA's conviction becomes final.`,
			reqs: `(1) Newly discovered evidence material to the defense; (2) Rule 121, Sec. 4 form (written, grounds, affidavits or authenticated documents, notice); (3) filed after perfection and before finality of the CA judgment.`,
			exceptions: `Errors of law or irregularities in the trial are not grounds here; they are assigned as errors in the appeal.`,
			hypo: `During the appeal, a DNA test excluding the appellant becomes available for the first time. He may move in the CA for new trial with the laboratory report.`
		},
		{
			n: '15',
			title: 'Where new trial conducted',
			text: `"When a new trial is granted, the Court of Appeals may conduct the hearing and receive evidence as provided in section 12 of this Rule or refer the trial to the court of origin."`,
			plain: `The CA either hears the new evidence itself or refers the new trial to the trial court.`
		},
		{
			n: '16',
			title: 'Reconsideration',
			text: `"A motion for reconsideration shall be filed within fifteen (15) days after from notice of the decision or final order of the Court of Appeals, with copies served upon the adverse party, setting forth the grounds in support thereof. The mittimus shall be stayed during the pendency of the motion for reconsideration. No party shall be allowed a second motion for reconsideration of a judgment or final order."`,
			plain: `One MR, within 15 days of notice, served on the other side, stating grounds. While it is pending, the commitment order (mittimus) is stayed.`,
			when: `15 days from notice of the CA decision or final order.`,
			effect: `No second MR. The mittimus — the order committing the convict to prison — is stayed while the MR is pending.`,
			trap: `"Any party" may move for reconsideration in the CA, but the People cannot use an MR to undo an acquittal.`
		},
		{
			n: '17',
			title: 'Judgment transmitted and filed in trial court',
			text: `"When the entry of judgment of the Court of Appeals is issued, a certified true copy of the judgment shall be attached to the original record which shall be remanded to the clerk of the court from which the appeal was taken."`,
			plain: `After entry of judgment, the record goes back to the trial court with a certified copy of the CA judgment, for execution.`
		},
		{
			n: '18',
			title: 'Application of certain rules in civil to criminal cases',
			text: `"The provisions of Rules 42, 44 to 46 and 48 to 56 relating to procedure in the Court of Appeals and in the Supreme Court in original and appealed civil cases shall be applied to criminal cases insofar as they are applicable and not inconsistent with the provisions of this Rule."`,
			plain: `Civil appellate rules fill the gaps, if consistent with Rule 124.`,
			hypo: `The Rule is silent on the contents of a petition for review from an RTC appellate decision; Rule 42 applies.`
		}
	],
	reqs: [
		{
			name: 'Designation of counsel de oficio (Sec. 2)',
			source: 'Rule 124, Sec. 2',
			what: 'Designation of counsel for an appellant who is confined, has no counsel de parte, or signed his own notice of appeal.',
			who: 'Clerk of the CA (mandatory); the appellant (on request, if not confined).',
			when: 'On receipt of the record; non-confined appellant\'s request within 10 days from receipt of the notice to file brief.',
			missing: 'An appeal heard without counsel for an indigent detained appellant violates the right to counsel on appeal; any dismissal for failure to file a brief is improper.',
			defect: 'Not waivable',
			defectNote: 'The duty is the court\'s, protecting the constitutional right to counsel; the appellant\'s silence does not waive it.'
		},
		{
			name: 'Extension of time to file briefs (Sec. 5)',
			source: 'Rule 124, Sec. 5',
			what: 'Motion showing good and sufficient cause.',
			who: 'Appellant or appellee.',
			when: 'Before the expiration of the period sought to be extended.',
			missing: 'No extension; the appeal may be dismissed (appellant) or decided without the appellee\'s brief.',
			defect: 'Not waivable',
			defectNote: 'A late motion for extension cannot be granted; the CA may, however, relax the rule in the interest of justice.'
		},
		{
			name: 'Dismissal for escape or flight (Sec. 8)',
			source: 'Rule 124, Sec. 8, par. 2',
			what: 'Escape from prison or confinement, jumping bail, or flight abroad during the appeal.',
			who: 'CA, motu proprio or on the appellee\'s motion.',
			when: 'While the appeal is pending.',
			missing: '—',
			defect: 'Depends on the defect',
			defectNote: 'Not a "defect" but a forfeiture: the appellant abandons the appeal by putting himself beyond the court\'s reach. Dismissal is discretionary.'
		}
	],
	enums: [
		{
			id: 'E124.1',
			name: 'When the CA clerk must designate counsel de oficio',
			source: 'Rule 124, Sec. 2',
			kind: 'rule',
			memorize: true,
			lead: 'The clerk designates counsel de oficio if the accused',
			items: [
				{ t: 'Is confined in prison', d: 'Detention alone triggers the duty.', s: 'confined' },
				{ t: 'Is without counsel de parte on appeal', d: 'No retained lawyer for the appeal.', s: 'no counsel de parte' },
				{ t: 'Has signed the notice of appeal himself', d: 'A sign he has no counsel.', s: 'signed the notice himself' }
			],
			question: 'When must the clerk of the Court of Appeals designate counsel de oficio for the accused?'
		},
		{
			id: 'E124.2',
			name: 'Grounds for dismissal of an appeal',
			source: 'Rule 124, Sec. 8',
			kind: 'rule',
			memorize: true,
			lead: 'The CA may dismiss an appeal when the appellant',
			items: [
				{ t: 'Fails to file his brief within the time prescribed', d: 'On motion or motu proprio, with notice — except where represented by counsel de oficio.', s: 'no brief (not if counsel de oficio)' },
				{ t: 'Escapes from prison or confinement', d: 'During the pendency of the appeal.', s: 'escape' },
				{ t: 'Jumps bail', d: 'During the pendency of the appeal.', s: 'jumps bail' },
				{ t: 'Flees to a foreign country', d: 'During the pendency of the appeal.', s: 'flees abroad' }
			],
			question: 'On what grounds may the Court of Appeals dismiss a criminal appeal?'
		},
		{
			id: 'E124.3',
			name: 'Scope of the CA\'s judgment',
			source: 'Rule 124, Sec. 11',
			kind: 'rule',
			lead: 'The CA may',
			items: [
				{ t: 'Reverse, affirm or modify the judgment', d: 'After examining the record (Sec. 10).', s: 'reverse, affirm or modify' },
				{ t: 'Increase or reduce the penalty', d: 'Even on the accused\'s appeal alone.', s: 'increase or reduce the penalty' },
				{ t: 'Remand the case for new trial or retrial', d: 'Or conduct the new trial itself (Sec. 15).', s: 'remand for new trial or retrial' },
				{ t: 'Dismiss the case', d: 'E.g., for lack of jurisdiction of the trial court.', s: 'dismiss' }
			],
			question: 'What judgments may the Court of Appeals render in a criminal appeal?'
		},
		{
			id: 'E124.4',
			name: 'Brief periods in criminal appeals',
			source: 'Rule 124, Secs. 3–4',
			kind: 'rule',
			ordered: true,
			memorize: true,
			lead: 'The briefs are due',
			items: [
				{ t: 'Appellant\'s brief — 30 days', d: 'From receipt of notice that the evidence is attached to the record; 7 copies; 2 served.', s: 'appellant 30 days' },
				{ t: 'Appellee\'s brief — 30 days', d: 'From receipt of the appellant\'s brief.', s: 'appellee 30 days' },
				{ t: 'Reply brief — 20 days', d: 'From receipt of the appellee\'s brief; optional; only new matters.', s: 'reply 20 days' }
			],
			memory: '<b>30–30–20</b> (criminal) vs. <b>45–45–20</b> (civil, Rule 44).',
			question: 'State the periods for filing briefs in a criminal appeal in the Court of Appeals.'
		}
	],
	comparisons: [
		{
			id: 'C124.1',
			title: 'Motion for new trial in the trial court (Rule 121) vs. in the Court of Appeals (Rule 124, Sec. 14)',
			a: 'Trial court (Rule 121)',
			b: 'Court of Appeals (Rule 124, Sec. 14)',
			meaning: ['New trial before the court that convicted.', 'New trial sought during the appeal.'],
			basis: ['Rule 121, Secs. 1–6', 'Rule 124, Secs. 14–15'],
			who: ['Accused; court motu proprio with consent.', 'Appellant.'],
			when: ['Before the conviction becomes final (15 days).', 'After perfection of the appeal and before the CA conviction becomes final.'],
			reqs: ['Errors of law or irregularities during trial, or newly discovered evidence.', 'Newly discovered evidence material to the defense only.'],
			time: ['Retrial within 30 days (up to 180).', 'CA hearing within three months, or referral to the court of origin.'],
			exceptions: ['—', 'Generally no new trial in the SC, but left to its discretion.'],
			effect: ['Original judgment vacated.', 'CA hears or refers; judgment rendered on the whole record.'],
			trap: ['—', 'Moving in the CA on trial irregularities.'],
			decisive: 'Grounds: two in the trial court; one (newly discovered evidence) in the CA.',
			hypo: 'The appellant claims his trial counsel was not allowed to cross-examine. In the CA, he assigns it as error; he cannot move for new trial on it.'
		},
		{
			id: 'C124.2',
			title: 'CA judgment imposing death vs. reclusion perpetua or life imprisonment',
			a: 'Death',
			b: 'Reclusion perpetua / life imprisonment (or lesser)',
			meaning: ['The CA finds death should be imposed.', 'The CA imposes RP, LI or a lesser penalty.'],
			basis: ['Rule 124, Sec. 13(a)–(b)', 'Rule 124, Sec. 13(c)'],
			who: ['CA certifies motu proprio.', 'Accused appeals by notice of appeal (RP/LI) or Rule 45 (lesser).'],
			when: ['Upon rendition.', '15 days from notice.'],
			reqs: ['No notice of appeal needed.', 'Notice of appeal filed with the CA.'],
			time: ['—', '15 days.'],
			exceptions: ['Dormant since RA 9346.', 'Lesser penalties: Rule 45, questions of law.'],
			effect: ['Render but do not enter; elevate the entire record.', 'Render and enter judgment; appeal to the SC on facts and law.'],
			trap: ['Thinking the CA enters a death judgment.', 'Filing a Rule 45 petition for an RP case.'],
			decisive: 'Entry of judgment: never for death (SC must review); yes for RP/LI (appealable by notice).',
			hypo: 'The CA affirms reclusion perpetua. It enters judgment; the accused files a notice of appeal with the CA within 15 days.'
		}
	],
	cases: [],
	deadlines: [
		{ ref: 'Rule 124, Sec. 2', act: 'Request counsel de oficio (non-confined appellant)', who: 'Appellant', period: '10 days', start: 'Receipt of the notice to file brief', exceptions: 'Confined appellants get counsel without request', effect: 'Proceeds with counsel de parte or none', kind: 'procedural' },
		{ ref: 'Rule 124, Sec. 3', act: 'File appellant\'s brief', who: 'Appellant', period: '30 days', start: 'Receipt of notice that the evidence is attached to the record', exceptions: 'Extension for good cause, if moved before expiry (Sec. 5)', effect: 'Dismissal (Sec. 8), unless counsel de oficio', kind: 'procedural' },
		{ ref: 'Rule 124, Sec. 4', act: 'File appellee\'s brief', who: 'Appellee', period: '30 days', start: 'Receipt of the appellant\'s brief', exceptions: 'Sec. 5', effect: 'Decided without it', kind: 'procedural' },
		{ ref: 'Rule 124, Sec. 4', act: 'File reply brief (optional)', who: 'Appellant', period: '20 days', start: 'Receipt of the appellee\'s brief', exceptions: 'Sec. 5', effect: 'Waived', kind: 'procedural' },
		{ ref: 'Rule 124, Sec. 12', act: 'Complete trials or hearings in the CA', who: 'CA', period: '3 months', start: 'Commencement of the hearing', exceptions: 'Extension by the Chief Justice', effect: 'Administrative', kind: 'procedural' },
		{ ref: 'Rule 124, Sec. 13(c); Rule 45', act: 'Appeal from the CA to the SC', who: 'Appellant', period: '15 days', start: 'Notice of the CA judgment or denial of MR', exceptions: 'Notice of appeal for RP/LI; Rule 45 for lesser penalties', effect: 'CA judgment final', kind: 'procedural' },
		{ ref: 'Rule 124, Sec. 16', act: 'File motion for reconsideration in the CA', who: 'Either party', period: '15 days', start: 'Notice of the CA decision or final order', exceptions: 'No second MR', effect: 'Decision final; mittimus issues', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'The CA may dismiss the appeal of an accused represented by counsel de oficio who failed to file a brief.', right: 'Not on that ground (Sec. 8); the CA should require counsel to file or replace counsel.', example: '—' },
		{ wrong: 'A motion to extend the time to file a brief may be filed a few days after the period lapses, for good cause.', right: 'It must be filed before the period expires (Sec. 5).', example: '—' },
		{ wrong: 'The accused must be present during the hearing of his appeal.', right: 'He need not be present (Sec. 9).', example: '—' },
		{ wrong: 'Any error in the trial justifies reversal.', right: 'Only error that injuriously affected the appellant\'s substantial rights (Sec. 10).', example: '—' },
		{ wrong: 'The CA cannot receive evidence; it reviews the record only.', right: 'It may try cases, receive evidence and conduct new trials (Sec. 12).', example: '—' },
		{ wrong: 'A CA judgment imposing reclusion perpetua is reviewed by the SC only by Rule 45.', right: 'By notice of appeal filed with the CA (Sec. 13[c]).', example: '—' },
		{ wrong: 'A second MR may be filed in the CA if it raises new grounds.', right: 'No second MR (Sec. 16).', example: '—' },
		{ wrong: 'Brief periods in criminal appeals are 45–45–20.', right: '30–30–20 (Secs. 3–4); 45–45–20 is civil (Rule 44).', example: '—' }
	],
	corrections: [
		{ old: 'Sec. 13(a)–(b): the CA certifies death cases to the SC.', fix: 'Dormant since RA 9346 (2006); Sec. 13(c) governs reclusion perpetua and life imprisonment.', source: 'RA 9346' },
		{ old: 'Seven copies of briefs on legal-size paper (Secs. 3, 4, 6).', fix: 'Later issuances on paper size, copies and electronic filing have changed the formal requirements; check the CA\'s current rules.', source: 'Efficient Use of Paper Rule and e-filing issuances (verify)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Counsel de oficio', q: 'When must the clerk of the Court of Appeals designate counsel de oficio?', a: 'E124.1.', keys: 'Sec. 2' },
		{ cat: 'A', level: 1, topic: 'Briefs', q: 'State the periods for filing briefs in a criminal appeal in the CA.', a: 'E124.4.', keys: 'Secs. 3–4' },
		{ cat: 'A', level: 2, topic: 'Dismissal', q: 'On what grounds may the CA dismiss a criminal appeal? State the exception.', a: 'E124.2.', keys: 'Sec. 8' },
		{ cat: 'A', level: 2, topic: 'Scope', q: 'What judgments may the CA render in a criminal appeal?', a: 'E124.3.', keys: 'Sec. 11' },
		{ cat: 'B', level: 3, topic: 'New trial', q: 'Distinguish a motion for new trial in the trial court from one in the Court of Appeals.', a: 'See C124.1.', keys: 'newly discovered evidence only' },
		{ cat: 'B', level: 3, topic: 'Death vs RP', q: 'Distinguish what the CA does when it finds death should be imposed from when it imposes reclusion perpetua.', a: 'See C124.2.', keys: 'render but not enter; notice of appeal' },
		{ cat: 'C', level: 1, topic: 'Title', q: 'When the accused appeals to the CA, the title of the case becomes "[Accused] v. People of the Philippines."', tf: false, short: 'False. The title remains as in the court of origin; the parties are called appellant and appellee (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 1, topic: 'Briefs', q: 'The appellant in a criminal case must file his brief within 45 days from notice.', tf: false, short: 'False. Within 30 days from receipt of the notice that the evidence is attached to the record (Sec. 3). 45 days is the civil period.', keys: 'Sec. 3' },
		{ cat: 'C', level: 2, topic: 'Dismissal', q: 'The CA may dismiss an appeal if the appellant jumps bail while the appeal is pending.', tf: true, short: 'True (Sec. 8, par. 2), on motion or motu proprio.', keys: 'Sec. 8' },
		{ cat: 'C', level: 2, topic: 'Dismissal', q: 'The CA may dismiss an appeal for failure to file the appellant\'s brief even when the appellant is represented by counsel de oficio.', tf: false, short: 'False. The exception in Sec. 8 bars dismissal on that ground where the appellant is represented by counsel de oficio.', keys: 'Sec. 8' },
		{ cat: 'C', level: 2, topic: 'Presence', q: 'The accused need not be present in court during the hearing of his appeal.', tf: true, short: 'True (Sec. 9).', keys: 'Sec. 9' },
		{ cat: 'C', level: 3, topic: 'Scope', q: 'On the accused\'s appeal, the CA may increase the penalty imposed by the trial court.', tf: true, short: 'True (Sec. 11). The appeal throws the whole case open for review.', keys: 'Sec. 11; Trono' },
		{ cat: 'C', level: 3, topic: 'New trial', q: 'In the CA, the appellant may move for a new trial on the ground of errors of law committed during the trial.', tf: false, short: 'False. Only on newly discovered evidence material to his defense (Sec. 14).', keys: 'Sec. 14' },
		{ cat: 'C', level: 3, topic: 'Reconsideration', q: 'The pendency of a motion for reconsideration in the CA stays the mittimus.', tf: true, short: 'True (Sec. 16). Only one MR is allowed, within 15 days.', keys: 'Sec. 16' },
		{ cat: 'C', level: 4, topic: 'Certification', q: 'When the CA imposes reclusion perpetua, it renders judgment but refrains from entering it and certifies the case to the SC.', tf: false, short: 'False. That is the procedure for death (Sec. 13[a]). For RP or LI, the CA renders and enters judgment, appealable to the SC by notice of appeal filed with the CA (Sec. 13[c]).', keys: 'Sec. 13' },
		{
			cat: 'D', level: 4, topic: 'Dismissal and counsel', title: 'The missing brief',
			facts: 'H, detained, signs his own notice of appeal from a 12-year sentence for robbery. The CA clerk designates a PAO lawyer as counsel de oficio. The PAO lawyer fails to file the appellant\'s brief within 30 days. The OSG moves to dismiss the appeal.',
			q: 'Should the appeal be dismissed?',
			issue: 'Dismissal for failure to file a brief where counsel is de oficio.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 124, Sec. 8: the CA may dismiss an appeal for failure to file the brief "except where the appellant is represented by a counsel de oficio"; Sec. 2 (designation of counsel de oficio).',
				application: 'H is represented by counsel de oficio designated under Sec. 2 because he was confined and signed the notice himself. The exception applies; he should not lose his appeal through appointed counsel\'s neglect.',
				conclusion: 'Deny the motion; direct counsel to file the brief within a fixed period or designate another counsel de oficio.'
			},
			keys: 'Sec. 8 exception; Sec. 2'
		},
		{
			cat: 'D', level: 4, topic: 'Appeal to the SC', title: 'From the CA to the SC',
			facts: 'The CA affirms I\'s conviction for murder and the penalty of reclusion perpetua; the decision is entered. I wants to argue before the SC that the eyewitness was not credible.',
			q: 'What is the proper remedy, and may the SC review credibility?',
			issue: 'Mode of review of a CA judgment imposing reclusion perpetua.',
			alac: {
				answer: 'Notice of appeal filed with the CA; yes, the SC may review the facts.',
				legalBasis: 'Rule 124, Sec. 13(c): where the CA imposes reclusion perpetua, it renders and enters judgment, appealable to the SC by notice of appeal filed with the CA. Unlike a Rule 45 petition, this appeal opens questions of fact (Tiu, p. 212).',
				application: 'The penalty is reclusion perpetua, so I need not file a Rule 45 petition limited to questions of law; a notice of appeal lets him raise credibility.',
				conclusion: 'I should file a notice of appeal with the CA within 15 days; the SC may review the eyewitness\'s credibility.'
			},
			keys: 'Sec. 13(c); notice of appeal; facts and law'
		},
		{
			cat: 'E', level: 5, topic: 'New trial in the CA', title: 'DNA during appeal',
			facts: 'J was convicted of rape and appealed to the CA. While the appeal is pending, a DNA test on preserved samples — impossible during trial because the samples were mislabeled and found only later — excludes J. J moves for new trial in the CA, attaching the laboratory report and the analyst\'s affidavit. The OSG argues that new trial is a trial-court remedy under Rule 121.',
			q: 'Rule on the motion.',
			issue: 'Whether the CA may grant a new trial on newly discovered evidence.',
			alac: {
				answer: 'Grant the motion.',
				legalBasis: 'Rule 124, Sec. 14 (new trial in the CA on newly discovered evidence material to the defense, at any time after perfection of the appeal and before the CA judgment becomes final, in the form of Rule 121, Sec. 4); Sec. 15 (CA may receive evidence or refer to the court of origin); Sec. 12 (power to receive evidence).',
				application: 'The DNA evidence surfaced after trial, could not have been produced with diligence (mislabeled samples), and is material to identity. The motion is supported by the report and an affidavit, and is filed during the appeal.',
				conclusion: 'The CA should grant a new trial and either receive the DNA evidence itself or refer it to the RTC, then decide on the whole record.'
			},
			keys: 'Sec. 14; Sec. 15; Rule 121, Sec. 4'
		},
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 124', title: 'Rule 124 integrated',
			facts: 'K, on bail pending appeal, appeals his homicide conviction (8 years). He files his brief on day 34 after moving for extension on day 32. While the appeal is pending, he leaves for Hong Kong without permission. The CA, motu proprio, dismisses the appeal. K\'s lawyer files an MR on day 15 after notice; it is denied, and he files a second MR.',
			q: 'Identify and resolve the issues.',
			issue: 'Extension of briefs; dismissal for flight; MRs in the CA.',
			alac: {
				answer: 'The extension was improper, the dismissal for flight was proper, the first MR was timely but correctly denied, and the second MR is prohibited.',
				legalBasis: 'Rule 124, Sec. 5 (extension only if moved before the period expires); Sec. 8 (dismissal, motu proprio, if the appellant flees to a foreign country during the appeal); Sec. 16 (MR within 15 days; no second MR).',
				application: 'The motion for extension on day 32 came after the 30-day period lapsed — alone a ground for dismissal (K\'s counsel was de parte). Flight to Hong Kong during the appeal independently justifies dismissal. The MR on day 15 was timely; the second MR is barred.',
				conclusion: 'The dismissal stands; the RTC judgment becomes final, and the second MR should be expunged.'
			},
			keys: 'Secs. 5, 8, 16'
		}
	],
	memorize: [
		'Title unchanged; appellant/appellee (Sec. 1)',
		'Counsel de oficio: confined · no counsel de parte · signed notice himself; others request within 10 days (Sec. 2)',
		'Briefs 30–30–20; extension only for good cause, moved before expiry (Secs. 3–5)',
		'Dismissal: no brief (not if de oficio) · escape · jumps bail · flees abroad (Sec. 8)',
		'Reverse only for substantial error (Sec. 10); scope — affirm, reverse, modify, increase/reduce, remand, dismiss (Sec. 11)',
		'CA hearings within 3 months (Sec. 12); death → render not enter, certify; RP/LI → enter, notice of appeal (Sec. 13)',
		'New trial: newly discovered evidence only (Sec. 14); one MR in 15 days; stays mittimus (Sec. 16)'
	],
	flashcards: [
		['Brief periods in criminal appeals?', 'Appellant 30 · appellee 30 · reply 20 days.'],
		['When is an extension of the brief period allowed?', 'For good and sufficient cause, on a motion filed before the period expires.'],
		['When must counsel de oficio be designated?', 'If the appellant is confined, has no counsel de parte, or signed the notice of appeal himself.'],
		['Grounds to dismiss a criminal appeal?', 'Failure to file a brief (except counsel de oficio); escape; jumping bail; flight abroad.'],
		['Must the accused attend the hearing of his appeal?', 'No (Sec. 9).'],
		['CA scope of judgment?', 'Reverse, affirm, modify, increase or reduce the penalty, remand for new trial or retrial, or dismiss.'],
		['CA finds death should be imposed?', 'Render but do not enter; certify the case to the SC.'],
		['CA imposes reclusion perpetua?', 'Render and enter; appeal to the SC by notice of appeal filed with the CA.'],
		['Ground for new trial in the CA?', 'Only newly discovered evidence material to the defense.'],
		['MR in the CA?', 'Within 15 days; stays the mittimus; no second MR.']
	],
	oral: [
		['"When may the Court of Appeals dismiss a criminal appeal?"', 'When the appellant fails to file his brief on time — but not if he is represented by counsel de oficio — or when he escapes, jumps bail or flees to a foreign country while the appeal is pending. In either case it may act on motion or motu proprio.'],
		['"What does the CA do when it imposes reclusion perpetua?"', 'It renders and enters judgment. The accused may appeal to the Supreme Court by filing a notice of appeal with the CA, and the Supreme Court may review both facts and law.']
	],
	checklist: [
		'I can state the brief periods and the extension rule.',
		'I can state when counsel de oficio is designated.',
		'I can state the grounds for dismissal and the de oficio exception.',
		'I can state the CA\'s scope of judgment and power to receive evidence.',
		'I can explain Sec. 13 and its link to Mateo.',
		'I can contrast new trial in the CA with Rule 121.'
	],
	sheet: [
		'<b>Secs. 1–2:</b> title unchanged · counsel de oficio if confined, no counsel, or self-signed notice; others request within 10 days.',
		'<b>Secs. 3–7:</b> briefs 30–30–20 · extension only for good cause, before expiry · Rule 44 contents + certified decision.',
		'<b>Sec. 8:</b> dismiss for no brief (not if de oficio) · escape · bail-jumping · flight abroad.',
		'<b>Secs. 9–11:</b> detainees first; accused need not attend · substantial error only · affirm/reverse/modify/increase/reduce/remand/dismiss.',
		'<b>Secs. 12–15:</b> CA may receive evidence (3 months) · death → render not enter, certify; RP/LI → enter, notice of appeal · new trial on new evidence only.',
		'<b>Secs. 16–18:</b> one MR in 15 days, stays mittimus · record remanded · civil appellate rules suppletory.'
	],
	watchFor: `<strong>Watch for: counsel, briefs and flight.</strong>
<ul>
<li>Was the appellant represented by counsel de oficio? Then no dismissal for a missing brief.</li>
<li>Was the extension moved before the period lapsed?</li>
<li>Did the appellant escape, jump bail or leave the country during the appeal?</li>
<li>Reclusion perpetua or life imprisonment? Enter judgment; notice of appeal to the SC.</li>
<li>New trial in the CA? Newly discovered evidence only.</li>
</ul>`
};
