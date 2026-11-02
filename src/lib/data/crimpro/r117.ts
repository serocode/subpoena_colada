import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 117 — Motion to Quash (including double jeopardy and provisional dismissal). */
export const r117: RuleChapter = {
	id: 'r117',
	n: 117,
	title: 'Motion to Quash',
	short: 'R117 Motion to Quash',
	tiu: 'pp. 158–168',
	plain: `A motion to quash is the accused's attack on the information itself, before he pleads: the facts alleged are not a crime, the court has no jurisdiction, the signing officer had no authority, the information is badly drafted or charges two crimes, the offense has prescribed, the facts alleged show a legal excuse, or he has already been tried for it (double jeopardy). The court looks only at the face of the information. Most grounds are waived if not raised before plea; four are never waived. The Rule also governs double jeopardy and provisional dismissal — a dismissal with the accused's consent that becomes permanent if the case is not revived within one or two years.`,
	purpose: `To let the accused dispose of a legally defective charge before trial, while protecting the State's ability to correct curable defects by amendment and to refile when the defect does not go to the merits.`,
	stage: `After the information is filed and before the accused pleads (${ruleLink('r116')}). Non-waivable grounds may be raised later, even on appeal. Provisional dismissal can happen at any stage, even during trial.`,
	questions: [
		'When, and in what form, is a motion to quash filed?',
		'What are the grounds, and which are waived if not raised before plea?',
		'May the court look beyond the information?',
		'What happens when the motion is granted — dismissal, amendment, or refiling?',
		'When does double jeopardy attach, and what are its exceptions?',
		'What is a provisional dismissal, and when does it become permanent?'
	],
	relations: `Rule 117 attacks the information drafted under ${ruleLink('r110')} (sufficiency, authority, duplicity, venue); its deadline is the plea under ${ruleLink('r116')}. Prescription as a ground links to the <a href="#prescription">prescription module</a>. Double jeopardy depends on a valid arraignment (${ruleLink('r116')}) and is triggered by acquittals and certain dismissals in ${ruleLink('r119')} (demurrer; speedy trial; discharge as state witness) and ${ruleLink('r120')}.`,
	principles: [
		'<b>A motion to quash hypothetically admits the facts alleged</b>; the court looks only at the face of the information (People v. Odtuhan, 2013).',
		'<b>Omnibus motion rule</b>: all available grounds must be raised; those not raised before plea are waived — except (a) facts not constituting an offense, (b) lack of jurisdiction over the offense, (g) extinction of criminal liability, (i) double jeopardy (Sec. 9).',
		'<b>Curable defects lead to amendment, not dismissal</b> (Sec. 4).',
		'<b>Quashal is not a bar to refiling</b> — except when based on extinction of liability or double jeopardy (Sec. 6).',
		'<b>Double jeopardy</b> requires a first jeopardy that attached (valid information, competent court, arraignment and plea), validly terminated (conviction, acquittal, or dismissal without express consent), and a second prosecution for the same or an included offense.'
	],
	sections: [
		{
			n: '1',
			title: 'Time to move to quash',
			text: `"At any time before entering his plea, the accused may move to quash the complaint or information."`,
			plain: `Before plea.`,
			when: `Before plea (contrast the bill of particulars: before arraignment).`,
			exceptions: `Non-waivable grounds (Sec. 9) may be raised after plea, even on appeal. Under summary (now expedited) procedure, a motion to quash is generally prohibited except for lack of jurisdiction over the subject matter or failure to comply with barangay conciliation (1991 Rule, Sec. 19 — carried over in the 2022 Rules; verify).`,
			effect: `Plea without a motion to quash waives the waivable grounds.`,
			hypo: `X is arraigned and pleads not guilty. A week later he moves to quash for duplicity. Too late — waived.`,
			trap: `"Before plea" — not "before trial."`,
			verify: `Confirm the prohibited-pleadings list of the 2022 Rules on Expedited Procedures.`
		},
		{
			n: '2',
			title: 'Form and contents',
			text: `"The motion to quash shall be in writing, signed by the accused or his counsel and shall distinctly specify its factual and legal grounds. The court shall consider no ground other than those stated in the motion, except lack of jurisdiction over the offense charged."`,
			plain: `Written, signed, grounds spelled out. The court rules only on what is raised — except lack of jurisdiction over the offense, which it may notice on its own.`,
			reqs: `(1) In writing; (2) signed by the accused or counsel; (3) factual and legal grounds distinctly specified.`,
			effect: `An oral motion to quash is not allowed. Grounds not stated are not considered (save lack of jurisdiction over the offense) — and are waived unless non-waivable.`,
			hypo: `The motion cites only duplicity. The information also shows on its face that the offense prescribed. The court may not quash on prescription unless raised — but prescription is non-waivable and may be raised later.`,
			trap: `Only lack of jurisdiction over the offense may be considered motu proprio. Under Villa Gomez (2020), the court may not dismiss motu proprio for lack of authority of the filing officer.`
		},
		{
			n: '3',
			title: 'Grounds',
			text: `The accused may move to quash on any of the following grounds: "(a) That the facts charged do not constitute an offense; (b) That the court trying the case has no jurisdiction over the offense charged; (c) That the court trying the case has no jurisdiction over the person of the accused; (d) That the officer who filed the information had no authority to do so; (e) That it does not conform substantially to the prescribed form; (f) That more than one offense is charged except when a single punishment for various offenses is prescribed by law; (g) That the criminal action or liability has been extinguished; (h) That it contains averments which, if true, would constitute a legal excuse or justification; and (i) That the accused has been previously convicted or acquitted of the offense charged, or the case against him was dismissed or otherwise terminated without his express consent."`,
			plain: `Nine grounds: no crime alleged; no jurisdiction over the offense; no jurisdiction over the person; no authority to file; defective form; two crimes in one; extinguished liability (e.g., prescription); the information itself shows a defense; already tried.`,
			reqs: `A ground in Sec. 3, apparent on the face of the information (except grounds like double jeopardy and extinction that require proof of prior proceedings or of facts such as death).`,
			exceptions: `Not grounds: affidavit of desistance; lack of probable cause; absence or irregularity of preliminary investigation; matters of defense such as self-defense not apparent from the information (Tiu, p. 162). A motion to quash on a ground not in Sec. 3 is a prohibited motion under the 2017 Guidelines.`,
			effect: `A motion on grounds (a), (b), (g) and (i) is a "meritorious motion" under the 2017 Guidelines (comment within 10 days; resolution within 10 days).`,
			cases: `${caseLink('odtuhan', 'People v. Odtuhan (2013)')} (hypothetical admission; no evidence aliunde); ${caseLink('villa-gomez', 'Villa Gomez v. People (2020)')} (ground [d] waivable); ${caseLink('solar', 'People v. Solar (2019)')} (ground [e] for qualifying circumstances alleged without ultimate facts).`,
			hypo: `An information for estafa alleges that the accused borrowed money and failed to pay, without alleging deceit or misappropriation. Ground (a): the facts do not constitute estafa. The court should first allow amendment (Sec. 4).`,
			trap: `Ground (h) is rare: it applies only when the information itself alleges facts showing a justification (e.g., that the accused acted to repel an unlawful aggression); a self-defense claim outside the information is a matter of defense for trial.`
		},
		{
			n: '4',
			title: 'Amendment of the complaint or information',
			text: `If the motion to quash is based on a defect that can be cured by amendment, the court shall order the amendment. If based on the ground that the facts charged do not constitute an offense, the prosecution shall be given an opportunity to correct the defect by amendment; the motion shall be granted if the prosecution fails to amend, or the information still suffers from the same defect despite the amendment.`,
			plain: `Fixable? Order an amendment first. Only if the prosecution fails or the fix does not work, quash.`,
			effect: `Immediate quashal without giving the opportunity to amend is error.`,
			hypo: `An information for murder omits the victim's name. The defect is curable — the court orders amendment instead of quashing.`,
			trap: `Even ground (a) — facts do not constitute an offense — is first met with an opportunity to amend.`
		},
		{
			n: '5',
			title: 'Effect of sustaining the motion to quash',
			text: `If the motion is sustained, the court may order that another complaint or information be filed, except as provided in Sec. 6. If the order is made, the accused, if in custody, shall not be discharged unless admitted to bail. If no order is made, or if no new information is filed within the time specified or allowed, the accused, if in custody, shall be discharged unless also in custody for another charge.`,
			plain: `Quashed? The court may order refiling; meanwhile the detained accused stays unless he posts bail. If no refiling, he is released.`,
			effect: `"To quash" means to annul or vacate; it does not necessarily mean dismissal of the case (People v. Sandiganbayan, in Tiu).`,
			hypo: `The court quashes an information for lack of jurisdiction over the offense (filed in the MTC instead of the RTC) and orders the prosecutor to file in the RTC within 10 days. The detained accused stays detained unless he posts bail.`
		},
		{
			n: '6',
			title: 'Order sustaining the motion to quash not a bar to another prosecution; exception',
			text: `"An order sustaining the motion to quash is not a bar to another prosecution for the same offense unless the motion was based on the grounds specified in section 3 (g) and (i) of this Rule."`,
			plain: `A quashed charge can be refiled — unless it was quashed for extinction of liability or double jeopardy.`,
			effect: `The prosecution's remedies against a quashal on (g) or (i): motion for reconsideration or appeal (no jeopardy because the accused has not pleaded).`,
			hypo: `An information is quashed because the offense prescribed. The prosecution cannot refile; it may only seek reconsideration or appeal the order.`
		},
		{
			n: '7',
			title: 'Former conviction or acquittal; double jeopardy',
			text: `When an accused has been convicted or acquitted, or the case against him dismissed or otherwise terminated without his express consent, by a court of competent jurisdiction, upon a valid complaint or information sufficient in form and substance to sustain a conviction, and after he had pleaded, the conviction, acquittal or dismissal is a bar to another prosecution for the offense charged, any attempt or frustration of it, or any offense which necessarily includes or is necessarily included in it. However, a conviction is not a bar to prosecution for an offense which necessarily includes the offense charged when: (a) the graver offense developed due to supervening facts arising from the same act or omission; (b) the facts constituting the graver charge became known or were discovered only after a plea was entered; or (c) the plea of guilty to the lesser offense was made without the consent of the prosecutor and of the offended party, except as provided in Rule 116, Sec. 1(f). In these cases, the accused is credited with any part of the judgment he has served.`,
			plain: `Once tried (convicted, acquitted, or dismissed without his consent) on a valid charge in a competent court after a plea, he cannot be tried again for the same offense or an included or including one — with three exceptions for graver offenses.`,
			reqs: `(1) First jeopardy attached: valid information; competent court; arraignment and valid plea. (2) First jeopardy validly terminated: conviction, acquittal, or dismissal without the accused\'s express consent (or with consent where it amounts to acquittal — demurrer, speedy trial, speedy disposition, discharge as state witness). (3) Second prosecution for the same offense, an attempt or frustration of it, or an offense that includes or is included in it.`,
			exceptions: `(a) Supervening facts (e.g., the victim of physical injuries dies after conviction); (b) facts discovered only after plea, despite diligence; (c) plea to a lesser offense without the prosecutor\'s and offended party\'s consent (save absence despite notice). Also, an acquittal rendered with grave abuse amounting to lack of jurisdiction (a sham trial, denial of due process to the prosecution) does not bar retrial (Galman v. Sandiganbayan; People v. Laguio, in Tiu).`,
			effect: `Ground (i) to quash; non-waivable. For quasi-offenses (Art. 365), a conviction or acquittal for one result bars prosecution for the other results of the same negligent act (Ivler v. Modesto-San Pedro, 2010).`,
			cases: `${caseLink('ivler', 'Ivler v. Modesto-San Pedro (2010)')}; <i>People v. Buan</i> (1968); <i>Bogo-Medellin Milling v. Son</i> (discharge as state witness is an acquittal, lost if he refuses to testify) — in Tiu.`,
			hypo: `A is convicted of serious physical injuries on his plea. Two weeks later, the victim dies from the same wounds. A may be prosecuted for homicide (supervening fact), credited with any time served.`,
			trap: `One act may constitute two distinct offenses under different laws (e.g., BP 22 and estafa; illegal recruitment and estafa; direct bribery and RA 3019) — prosecution for one does not bar the other, unless the act is punished by a law and an ordinance (Const., Art. III, Sec. 21) or the offenses are identical or included.`
		},
		{
			n: '8',
			title: 'Provisional dismissal',
			text: `"A case shall not be provisionally dismissed except with the express consent of the accused and with notice to the offended party." The provisional dismissal of offenses punishable by imprisonment not exceeding six years or a fine of any amount, or both, "shall become permanent one (1) year after issuance of the order without the case having been revived." For offenses punishable by imprisonment of more than six years, it becomes permanent two years after issuance of the order without the case having been revived.`,
			plain: `A dismissal "for now," with the accused's express consent and notice to the victim. If the State does not revive it within 1 year (≤6 years' imprisonment) or 2 years (>6 years), it becomes permanent.`,
			reqs: `(People v. Lacson, 2003): (1) the prosecution with the accused\'s express conformity, or the accused, or both, move for provisional dismissal; (2) the offended party is notified; (3) the court orders a provisional dismissal; (4) the public prosecutor is served a copy of the order.`,
			who: `Prosecution; accused (express consent — "no objection" or "with my conformity" written on the motion; mere silence is not express consent); offended party (notice); court.`,
			when: `Any time, even during trial (Tiu). Time-bar: 1 or 2 years from issuance of the order (A.M. No. 12-11-2-SC, Sec. 14; 2017 Guidelines, III.7).`,
			exceptions: `If dismissed without the accused\'s express consent, Sec. 8 does not apply; revival is subject to double jeopardy and prescription (Lacson). Grounds listed in Sec. 3 call for a motion to quash, not a provisional dismissal (Los Baños v. Pedro, 2009). A motion to withdraw the information is different (Torres v. Aguinaldo, 2005).`,
			effect: `Before the time-bar, the case may be revived by refiling the information or filing a new one for the same or an included offense; no new preliminary investigation is needed unless there are new witnesses, new accused, an upgraded charge, or an upgraded participation (Lacson). After the time-bar, the dismissal is automatically permanent; A.M. No. 12-11-2-SC says it "shall amount to an adjudication of the case on the merits."`,
			cases: `${caseLink('lacson', 'People v. Lacson (2003)')}; ${caseLink('los-banos', 'Los Baños v. Pedro (2009)')}; <i>Torres v. Aguinaldo</i> (2005); <i>Saldariega v. Panganiban</i> (2015).`,
			hypo: `The prosecution's witnesses are abroad. With the accused's written conformity and notice to the victim, the court provisionally dismisses a robbery case (more than 6 years) on March 1, 2026. The State must revive by March 1, 2028.`,
			trap: `The time-bar counts from <b>issuance</b> of the order (A.M. No. 12-11-2-SC; 2017 Guidelines), not from the prosecution's receipt — older rulings (Lacson) reckoned from receipt.`,
			update: `2017 Revised Guidelines for Continuous Trial, III.7, restates the 1- and 2-year periods "after issuance of the order."`
		},
		{
			n: '9',
			title: 'Failure to move to quash or to allege any ground therefor',
			text: `"The failure of the accused to assert any ground of a motion to quash before he pleads to the complaint or information, either because he did not file a motion to quash or failed to allege the same in said motion, shall be deemed a waiver of any objections except those based on the grounds provided for in paragraphs (a), (b), (g), and (i) of section 3 of this Rule."`,
			plain: `Not raised before plea = waived, except: no offense charged, no jurisdiction over the offense, extinguished liability, double jeopardy.`,
			effect: `Waived: lack of jurisdiction over the person (c), lack of authority (d — Villa Gomez), defective form (e), duplicity (f), legal excuse on the face (h). Not waived: (a), (b), (g), (i).`,
			hypo: `After conviction, the accused argues on appeal that the information charged two offenses. Waived; the court may convict of both if proved (Rule 120, Sec. 3).`,
			trap: `Tiu reproduces Sec. 9 in a version that reads "shall be deemed a waiver of any objections based on the grounds…(a), (b), (g), and (i)," but his own discussion — and the settled rule — treats (a), (b), (g) and (i) as the exceptions that are <b>not</b> waived. Recite it as the exceptions.`,
			verify: `Tiu\'s notes omit the "except those" phrase; check the exact wording of the codal.`
		}
	],
	reqs: [
		{
			name: 'Motion to quash (Secs. 1–3)',
			source: 'Rule 117, Secs. 1–3, 9',
			what: 'A motion on a ground in Sec. 3.',
			who: 'Accused or counsel (signed).',
			when: 'Before plea.',
			form: 'Written; factual and legal grounds distinctly specified.',
			missing: 'Waivable grounds are lost; non-waivable ones survive.',
			defect: 'Depends on the defect',
			defectNote: 'Grounds (c), (d), (e), (f), (h) are waivable; (a), (b), (g), (i) are not (Sec. 9). Only (b) is truly jurisdictional over the subject matter; (a) and (g) are non-waivable because no valid conviction can rest on them; (i) protects a constitutional right.'
		},
		{
			name: 'First jeopardy (Sec. 7)',
			source: 'Const., Art. III, Sec. 21; Rule 117, Sec. 7',
			what: 'Valid information; court of competent jurisdiction; arraignment and valid plea; termination by conviction, acquittal or dismissal without express consent.',
			who: 'Court; accused.',
			when: 'Upon plea (attachment) and termination.',
			missing: 'No jeopardy: e.g., information void on its face, court without jurisdiction, no arraignment, or dismissal at the accused\'s instance (unless amounting to acquittal).',
			defect: 'Not waivable',
			defectNote: 'Double jeopardy as a ground is non-waivable (Sec. 9); the accused may raise it at any stage.'
		},
		{
			name: 'Provisional dismissal (Sec. 8)',
			source: 'Rule 117, Sec. 8; People v. Lacson (2003); A.M. No. 12-11-2-SC, Sec. 14',
			what: 'Motion; express consent of the accused; notice to the offended party; court order; service on the public prosecutor.',
			who: 'Prosecution and/or accused; court.',
			when: 'Any time; time-bar runs from issuance of the order.',
			form: 'May be oral in open court; express consent viva voce or in writing.',
			missing: 'Without express consent, the time-bar does not apply; revival is limited only by double jeopardy and prescription.',
			defect: 'Depends on the defect',
			defectNote: 'Lack of notice to the offended party or of service on the prosecutor prevents the time-bar from running; lack of the accused\'s express consent changes the nature of the dismissal (possibly a bar by double jeopardy).'
		}
	],
	enums: [
		{
			id: 'E117.1',
			name: 'Grounds for a motion to quash',
			source: 'Rule 117, Sec. 3',
			kind: 'rule',
			memorize: true,
			lead: 'The accused may move to quash on the grounds',
			items: [
				{ t: 'The facts charged do not constitute an offense', d: 'Hypothetically admitting the allegations, an element is missing (Odtuhan).', s: '(a) no offense charged' },
				{ t: 'The court has no jurisdiction over the offense charged', d: 'Subject matter or territory (venue is jurisdictional).', s: '(b) no jurisdiction over the offense' },
				{ t: 'The court has no jurisdiction over the person of the accused', d: 'No valid arrest or voluntary appearance.', s: '(c) no jurisdiction over the person' },
				{ t: 'The officer who filed the information had no authority', d: 'E.g., no prior written approval of the head of office — waivable (Villa Gomez).', s: '(d) no authority to file' },
				{ t: 'It does not conform substantially to the prescribed form', d: 'Rule 110 requirements; includes qualifying circumstances alleged without ultimate facts (Solar).', s: '(e) defective form' },
				{ t: 'More than one offense is charged', d: 'Except when the law prescribes a single punishment for various offenses.', s: '(f) duplicity' },
				{ t: 'The criminal action or liability has been extinguished', d: 'Prescription, death, amnesty, pardon (where applicable), etc.', s: '(g) extinction' },
				{ t: 'It contains averments which, if true, constitute a legal excuse or justification', d: 'The defense appears on the face of the information.', s: '(h) legal excuse on its face' },
				{ t: 'Double jeopardy', d: 'Previously convicted or acquitted, or the case dismissed or terminated without his express consent.', s: '(i) double jeopardy' }
			],
			memory: '<b>"No Judge Personally Authorizes Forms Doubling Extinct Legal Jeopardy"</b> — No offense · Jurisdiction (offense) · Person · Authority · Form · Duplicity · Extinction · Legal excuse · Jeopardy.',
			tip: 'Nine grounds. Then say which four are not waived (a, b, g, i).',
			question: 'Enumerate the grounds for a motion to quash.'
		},
		{
			id: 'E117.2',
			name: 'Grounds not waived by failure to move to quash',
			source: 'Rule 117, Sec. 9',
			kind: 'rule',
			memorize: true,
			lead: 'The following grounds are not waived even if not raised before plea',
			items: [
				{ t: 'Facts charged do not constitute an offense', d: 'Ground (a): no valid conviction can rest on an information that charges no offense — though the court first allows amendment (Sec. 4).', s: 'no offense charged' },
				{ t: 'No jurisdiction over the offense', d: 'Ground (b): jurisdiction over the offense is conferred by law and cannot be waived or conferred by consent.', s: 'no jurisdiction over the offense' },
				{ t: 'Extinction of the criminal action or liability', d: 'Ground (g): prescription, death, amnesty and the like end the State\'s right to prosecute; they may be raised at any stage.', s: 'extinction' },
				{ t: 'Double jeopardy', d: 'Ground (i): the constitutional bar is not lost by failing to raise it before plea.', s: 'double jeopardy' }
			],
			memory: '<b>"A-B-G-I"</b> — "A Big Guilty Issue."',
			question: 'Which grounds for a motion to quash are not waived by failure to raise them before plea?'
		},
		{
			id: 'E117.3',
			name: 'Requisites of double jeopardy',
			source: 'Rule 117, Sec. 7; Tiu, pp. 160–161',
			kind: 'rule',
			memorize: true,
			ordered: true,
			lead: 'Double jeopardy bars a second prosecution when',
			items: [
				{ t: 'A first jeopardy attached', d: 'Valid complaint or information sufficient to sustain a conviction; court of competent jurisdiction; arraignment and valid plea.', s: 'first jeopardy attached (valid charge, competent court, plea)' },
				{ t: 'The first jeopardy was validly terminated', d: 'Conviction, acquittal, or dismissal without express consent; or with consent where it amounts to acquittal (demurrer; speedy trial; speedy disposition; discharge as state witness).', s: 'first jeopardy terminated' },
				{ t: 'The second prosecution is for the same offense', d: 'Or an attempt or frustration of it, or an offense that necessarily includes or is necessarily included in it.', s: 'same or included offense' }
			],
			question: 'What are the requisites of double jeopardy?'
		},
		{
			id: 'E117.4',
			name: 'When a conviction does not bar prosecution for a graver offense',
			source: 'Rule 117, Sec. 7, par. 2',
			kind: 'rule',
			memorize: true,
			lead: 'A conviction is not a bar to prosecution for an offense that necessarily includes the offense charged when',
			items: [
				{ t: 'The graver offense developed due to supervening facts arising from the same act or omission', d: 'E.g., the victim dies after a conviction for physical injuries.', s: 'supervening facts' },
				{ t: 'The facts constituting the graver charge became known or were discovered only after a plea was entered', d: 'Despite diligence.', s: 'facts discovered after plea' },
				{ t: 'The plea of guilty to the lesser offense was made without the consent of the prosecutor and the offended party', d: 'Except where the offended party failed to appear despite notice (Rule 116, Sec. 1[f]).', s: 'plea without the required consent' }
			],
			exceptions: 'The accused is credited with whatever he served under the first judgment.',
			question: 'When is a conviction not a bar to a prosecution for a graver offense that includes it?'
		},
		{
			id: 'E117.5',
			name: 'Dismissals with the accused\'s consent that still bar reprosecution',
			source: 'Tiu, pp. 160–161 (Rule 119, Secs. 9, 17–18, 23; Const., Art. III, Sec. 16)',
			kind: 'notes',
			lead: 'Even with the accused\'s consent, these dismissals amount to acquittal',
			items: [
				{ t: 'Grant of a demurrer to evidence', d: 'Dismissal on the merits for insufficiency of evidence.', s: 'demurrer granted' },
				{ t: 'Dismissal for violation of the right to speedy trial', d: 'Rule 119, Sec. 9.', s: 'speedy trial' },
				{ t: 'Dismissal for violation of the right to speedy disposition', d: 'Art. III, Sec. 16.', s: 'speedy disposition' },
				{ t: 'Discharge as a state witness', d: 'Operates as an acquittal unless he fails or refuses to testify (Rule 119, Sec. 18; Bogo-Medellin).', s: 'discharge as state witness' }
			],
			question: 'What dismissals bar reprosecution even though made on the accused\'s motion or with his consent?'
		},
		{
			id: 'E117.6',
			name: 'Requisites of a provisional dismissal',
			source: 'Rule 117, Sec. 8; People v. Lacson (2003), in Tiu, p. 166',
			kind: 'case',
			memorize: true,
			lead: 'Under People v. Lacson, the time-bar of Sec. 8 applies only if',
			items: [
				{ t: 'The prosecution with the accused\'s express conformity, or the accused, or both move for provisional dismissal', d: 'Silence or failure to object is not express consent.', s: 'motion with express consent' },
				{ t: 'The offended party is notified of the motion', d: 'So he can be heard; the dismissal affects his interest.', s: 'notice to offended party' },
				{ t: 'The court issues an order granting the motion and provisionally dismissing the case', d: 'There must be an actual order; the one- or two-year period runs from its issuance.', s: 'order of provisional dismissal' },
				{ t: 'The public prosecutor is served a copy of the order', d: 'So the State knows the period for revival has begun.', s: 'service on the prosecutor' }
			],
			question: 'What are the requisites of a provisional dismissal under Rule 117, Sec. 8?'
		},
		{
			id: 'E117.7',
			name: 'Matters that are not grounds for a motion to quash',
			source: 'Tiu, p. 162; 2017 Revised Guidelines, III.2(b)(iv)',
			kind: 'notes',
			lead: 'These are not grounds to quash',
			items: [
				{ t: 'Affidavit of desistance', d: 'Criminal cases generally cannot be compromised.', s: 'desistance' },
				{ t: 'Lack of probable cause', d: 'Determined under Rule 112; a motion for judicial determination of probable cause is now prohibited.', s: 'lack of probable cause' },
				{ t: 'Absence or irregularity of preliminary investigation', d: 'Remedy: remand for PI (Larrañaga).', s: 'no or defective PI' },
				{ t: 'Matters of defense', d: 'E.g., self-defense not alleged in the information.', s: 'matters of defense' }
			],
			exceptions: 'Some defenses are grounds by express rule: extinction (g), double jeopardy (i), legal excuse on the face (h).',
			question: 'Give matters that are not grounds for a motion to quash.'
		},
		{
			id: 'E117.8',
			name: 'When revival of a provisionally dismissed case requires a new preliminary investigation',
			source: 'People v. Lacson (2003), in Tiu, p. 167',
			kind: 'case',
			lead: 'A new preliminary investigation is needed when',
			items: [
				{ t: 'Original prosecution witnesses recanted, died or are unavailable and new witnesses emerged', d: 'The case now rests on evidence the accused has never answered.', s: 'new witnesses' },
				{ t: 'Persons other than the original accused are charged', d: 'The new respondents never had a preliminary investigation.', s: 'new accused' },
				{ t: 'The original charge is upgraded', d: 'E.g., homicide refiled as murder: a graver charge must first be answered.', s: 'upgraded charge' },
				{ t: 'The accused\'s liability is upgraded (e.g., accessory to principal)', d: 'Graver liability, same reason. Otherwise, revival needs no new preliminary investigation — the State simply refiles.', s: 'upgraded participation' }
			],
			question: 'When must a new preliminary investigation be conducted before reviving a provisionally dismissed case?'
		}
	],
	comparisons: [
		{
			id: 'C117.1',
			title: 'Motion to quash vs. provisional dismissal',
			a: 'Motion to quash (Secs. 1–6)',
			b: 'Provisional dismissal (Sec. 8)',
			meaning: ['Attack on the information on a ground in Sec. 3.', 'Temporary dismissal with the accused\'s express consent and notice to the offended party.'],
			basis: ['Rule 117, Secs. 1–6, 9', 'Rule 117, Sec. 8; Lacson; Los Baños v. Pedro'],
			who: ['Accused only.', 'Prosecution, accused, or both.'],
			when: ['Before plea (non-waivable grounds later).', 'Any time, even during trial.'],
			reqs: ['Written, signed, grounds specified.', 'Express consent; notice to offended party; order; service on the prosecutor. May be oral.'],
			time: ['—', 'Becomes permanent after 1 year (≤6 years\' imprisonment or fine) or 2 years (>6 years) from issuance of the order.'],
			exceptions: ['Quashal on (g) or (i) bars refiling.', 'Not applicable to Sec. 3 grounds (Los Baños).'],
			effect: ['Information quashed; refiling allowed except on (g), (i).', 'Revivable within the time-bar; permanent after.'],
			trap: ['Using provisional dismissal for a Sec. 3 ground.', 'Treating silence as express consent.'],
			decisive: 'Ground and consent: quash = a Sec. 3 defect raised by the accused; provisional dismissal = no Sec. 3 ground, temporary, by consent.',
			hypo: 'The information shows the offense prescribed: file a motion to quash (ground [g]); no refiling. The prosecution cannot find its witness: provisional dismissal with the accused\'s written conformity; revive within the period.'
		},
		{
			id: 'C117.2',
			title: 'Motion to quash vs. demurrer to evidence',
			a: 'Motion to quash',
			b: 'Demurrer to evidence (Rule 119, Sec. 23)',
			meaning: ['Attack on the face of the information.', 'Motion to dismiss after the prosecution rests, for insufficiency of evidence.'],
			basis: ['Rule 117', 'Rule 119, Sec. 23'],
			who: ['Accused.', 'Accused (with or without leave) or the court on its own initiative.'],
			when: ['Before plea.', 'After the prosecution rests.'],
			reqs: ['Ground in Sec. 3; hypothetical admission of the facts alleged.', 'Insufficiency of the prosecution\'s evidence; leave of court optional (but affects the right to present evidence).'],
			time: ['—', 'Motion for leave within 5 days after the prosecution rests; demurrer within 10 days from notice of grant (2017 Guidelines: oral motion for leave; demurrer within 10 calendar days; comment 10 days; resolution 30 days).'],
			exceptions: ['Non-waivable grounds may be raised later.', 'If filed without leave and denied, the accused waives the right to present evidence.'],
			effect: ['Quashal; amendment or refiling usually allowed.', 'Grant = acquittal (double jeopardy bars appeal); denial = trial continues (no appeal or certiorari before judgment).'],
			trap: ['Using a motion to quash to argue weak evidence.', 'Filing a demurrer without leave and expecting to still present evidence.'],
			decisive: 'What is attacked: the information (quash) vs. the prosecution\'s evidence (demurrer).',
			hypo: 'An information for theft alleges all elements: no quash. After the prosecution rests, it has not proved ownership of the property: demurrer. If granted, it is an acquittal.'
		},
		{
			id: 'C117.3',
			title: 'Provisional dismissal vs. dismissal on the merits',
			a: 'Provisional dismissal',
			b: 'Dismissal on the merits',
			meaning: ['Temporary dismissal by consent, revivable within the time-bar.', 'Dismissal based on the evidence or the law that disposes of the case.'],
			basis: ['Rule 117, Sec. 8', 'Rule 119, Sec. 23 (demurrer); Rule 120'],
			who: ['Prosecution/accused with consent.', 'Court.'],
			when: ['Any time; usually for unavailable witnesses.', 'After evaluation of evidence (or on speedy-trial grounds).'],
			reqs: ['Express consent; notice; order; service.', 'Insufficiency of evidence or a bar such as speedy trial.'],
			time: ['1 or 2 years to revive.', 'Final upon lapse of the appeal period; acquittal immediately final.'],
			exceptions: ['Permanent after the time-bar ("adjudication on the merits" — A.M. No. 12-11-2-SC).', '—'],
			effect: ['No double jeopardy within the period (consent).', 'Acquittal — double jeopardy.'],
			trap: ['Treating a provisional dismissal as an acquittal.', 'Thinking every dismissal with consent is provisional (demurrer and speedy-trial dismissals are acquittals).'],
			decisive: 'Whether the dismissal rests on consent and is revivable (provisional), or on an assessment of the case (merits).',
			hypo: 'Case A: provisionally dismissed on consent because the witness is abroad; revived after 8 months — valid. Case B: dismissed on demurrer because the evidence failed — cannot be revived or appealed.'
		},
		{
			id: 'C117.4',
			title: 'Dismissal vs. acquittal',
			a: 'Dismissal',
			b: 'Acquittal',
			meaning: ['Termination of the case without a finding on guilt (unless it amounts to acquittal).', 'Finding that the accused is not guilty — on the merits.'],
			basis: ['Rule 117, Secs. 6–8', 'Rule 120, Sec. 2; Rule 119, Sec. 23'],
			who: ['Court, on motion or own initiative.', 'Court after trial or on demurrer.'],
			when: ['Any stage.', 'After evidence.'],
			reqs: ['A ground (quash, provisional dismissal, failure to prosecute, etc.).', 'Insufficient evidence of guilt beyond reasonable doubt.'],
			time: ['Final after 15 days if not appealed (when appealable).', 'Immediately final; not appealable by the State (except certiorari for grave abuse).'],
			exceptions: ['Dismissal without express consent, or amounting to acquittal, bars reprosecution.', 'Void acquittal (sham trial) does not bar retrial.'],
			effect: ['Refiling possible if dismissal was on the accused\'s motion and not on the merits.', 'Bars reprosecution for the same or included offense.'],
			trap: ['Assuming every dismissal bars refiling.', 'Assuming the State may appeal an acquittal.'],
			decisive: 'Whether the termination rests on the merits (or on a ground equivalent to the merits) — only then is it an acquittal.',
			hypo: 'A case dismissed on the accused\'s motion for defective information may be refiled. A case dismissed because the prosecution failed to appear and the accused objected to postponement (speedy trial) is an acquittal.'
		},
		{
			id: 'C117.5',
			title: 'Waivable vs. non-waivable grounds (objections)',
			a: 'Waivable grounds',
			b: 'Non-waivable grounds',
			meaning: ['Objections lost if not raised before plea.', 'Objections that may be raised at any stage.'],
			basis: ['Rule 117, Sec. 9: grounds (c), (d), (e), (f), (h)', 'Rule 117, Sec. 9: grounds (a), (b), (g), (i)'],
			who: ['Accused.', 'Accused; court may notice lack of jurisdiction over the offense.'],
			when: ['Before plea.', 'Any time, even on appeal.'],
			reqs: ['Motion to quash before plea.', 'May be raised by motion or argument at any stage.'],
			time: ['Plea is the cut-off.', 'No cut-off.'],
			exceptions: ['Illegal arrest (c) also waived; but evidence seized remains excludable.', '—'],
			effect: ['Defect cured; trial proceeds.', 'Proceedings may be void (no jurisdiction) or the accused discharged.'],
			trap: ['Calling lack of authority (d) jurisdictional (overruled by Villa Gomez).', 'Calling venue waivable (it is jurisdictional — ground [b]).'],
			decisive: 'Whether the defect goes to the court\'s power or the State\'s right to convict at all (non-waivable), or only to procedure or personal rights (waivable).',
			hypo: 'After conviction, the accused discovers (1) the information charged two offenses and (2) the offense had prescribed before filing. (1) is waived; (2) may still be raised.'
		}
	],
	cases: [
		{
			id: 'odtuhan',
			name: 'People v. Odtuhan',
			cite: '2013 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused, charged with bigamy, moved to quash on the ground that the facts charged do not constitute an offense, relying on a judicial declaration of nullity of his first marriage obtained after the second marriage.',
			issue: 'May the court consider matters outside the information in resolving a motion to quash on ground (a)?',
			ruling: 'No.',
			doctrine: 'A motion to quash is a hypothetical admission of the facts alleged; the test is whether those facts establish the elements of the crime. Evidence aliunde is not considered. If the defect is curable by amendment, the prosecution must be given the chance to amend.',
			reasoning: 'The motion assails the information on its face.',
			rule: 'Rule 117, Secs. 3(a), 4.',
			args: 'The accused argued the later nullity judgment showed there was no valid first marriage; the Court held this was evidence aliunde.',
			hypo: 'An accused moves to quash a theft information by attaching a receipt showing he bought the item. Denied — the receipt is evidence aliunde; it is a defense for trial.',
			examQ: 'In resolving a motion to quash on the ground that the facts charged do not constitute an offense, may the court consider evidence outside the information?',
			verify: 'Facts summarized from general knowledge of the case; Tiu reproduces only the doctrine. Check the G.R. number and facts.'
		},
		{
			id: 'ivler',
			name: 'Ivler v. Modesto-San Pedro',
			cite: 'G.R. No. 172716, November 17, 2010',
			from: 'Tiu',
			facts: 'Following a vehicular collision, the accused was charged in two informations: reckless imprudence resulting in slight physical injuries, and reckless imprudence resulting in homicide and damage to property. He pleaded guilty to the first and was convicted, then invoked double jeopardy against the second.',
			issue: 'Does a conviction for one result of reckless imprudence bar prosecution for other results of the same act?',
			ruling: 'Yes.',
			doctrine: 'Reckless imprudence under Art. 365 is a single quasi-offense; the law penalizes the negligent act, not its results. Conviction or acquittal for one result bars prosecution for others arising from the same act (following People v. Buan, 1968).',
			reasoning: 'The gravity of the consequences only fixes the penalty; it does not create separate offenses.',
			rule: 'Rule 117, Secs. 3(i), 7.',
			hypo: 'A driver acquitted of reckless imprudence resulting in damage to property cannot later be tried for reckless imprudence resulting in physical injuries from the same collision.',
			examQ: 'May an accused convicted of reckless imprudence resulting in slight physical injuries be prosecuted for reckless imprudence resulting in homicide arising from the same act?'
		},
		{
			id: 'lacson',
			name: 'People v. Lacson',
			cite: '2003 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Murder cases arising from a police operation were provisionally dismissed; the State later sought to revive them. The accused invoked Sec. 8\'s time-bar.',
			issue: 'What are the requisites of a provisional dismissal and its time-bar?',
			ruling: 'The Court laid down the four requisites (E117.6) and the effects of the time-bar.',
			doctrine: 'Express consent is positive and unequivocal (e.g., "No objection" written on the motion); silence is not consent. Without express consent, Sec. 8 does not apply; revival is limited by double jeopardy and prescription. Revival by refiling or new information; no new PI unless new witnesses, new accused, upgraded charge or participation.',
			reasoning: 'The express consent requirement prevents the accused from later invoking double jeopardy; the time-bar protects him from indefinite exposure.',
			rule: 'Rule 117, Sec. 8.',
			hypo: 'The prosecutor moves for provisional dismissal; the accused says nothing. The time-bar does not apply; revival is possible within the prescriptive period.',
			examQ: 'What are the requisites of a provisional dismissal, and when does it become permanent?',
			verify: 'G.R. number not in Tiu. Lacson reckoned the period from the prosecution\'s receipt; A.M. No. 12-11-2-SC and the 2017 Guidelines reckon it from issuance of the order.'
		},
		{
			id: 'los-banos',
			name: 'Los Baños v. Pedro',
			cite: 'G.R. No. 173588, April 22, 2009',
			from: 'Tiu',
			facts: 'A case was dismissed on a ground listed in Rule 117, Sec. 3; the accused later invoked the Sec. 8 time-bar against its revival.',
			issue: 'Does the Sec. 8 time-bar apply to a dismissal on a Sec. 3 ground?',
			ruling: 'No.',
			doctrine: 'Where the grounds are those in Sec. 3, the remedy is a motion to quash, not provisional dismissal; Sec. 8 operates "in a world of its own" for dismissals not grounded on Sec. 3. The Court tabulated the differences (C117.1).',
			reasoning: 'Sec. 6 makes a quashal a bar only on (g) and (i); it does not mention Sec. 8 dismissals.',
			rule: 'Rule 117, Secs. 3, 6, 8.',
			hypo: 'An information quashed for non-conformity with form may be refiled even after two years (subject to prescription); the time-bar does not apply.',
			examQ: 'Distinguish a motion to quash from a provisional dismissal.'
		}
	],
	deadlines: [
		{ ref: 'Rule 117, Sec. 1', act: 'File a motion to quash', who: 'Accused', period: 'Before plea', start: '—', exceptions: 'Grounds (a), (b), (g), (i) may be raised later', effect: 'Waivable grounds waived (Sec. 9)', kind: 'procedural' },
		{ ref: '2017 Revised Guidelines, III.2(c)', act: 'Comment on and resolve a meritorious motion (e.g., MTQ on [a], [b], [g], [i])', who: 'Adverse party; court', period: 'Comment 10 calendar days; resolve within 10 calendar days after; MR 5 days, comment 5 days, resolve 5 days', start: 'Notice of the order to comment', exceptions: 'Hearing optional', effect: 'Non-extendible', kind: 'procedural' },
		{ ref: 'Rule 117, Sec. 5', act: 'File a new information after quashal', who: 'Prosecution', period: 'Within the time specified by the court (or extension for good cause)', start: 'Order', exceptions: 'Not if quashed on (g) or (i)', effect: 'Detained accused discharged if not refiled', kind: 'procedural' },
		{ ref: 'Rule 117, Sec. 8', act: 'Revive a provisionally dismissed case (imprisonment ≤ 6 years or fine)', who: 'Prosecution', period: '1 year', start: 'Issuance of the order of provisional dismissal', exceptions: 'Requisites of Lacson must be present', effect: 'Dismissal becomes permanent', kind: 'procedural' },
		{ ref: 'Rule 117, Sec. 8', act: 'Revive a provisionally dismissed case (imprisonment > 6 years)', who: 'Prosecution', period: '2 years', start: 'Issuance of the order', exceptions: 'Same', effect: 'Dismissal becomes permanent', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'A motion to quash may be filed any time before trial.', right: 'Before plea.', example: '—' },
		{ wrong: 'The court may consider evidence outside the information in resolving a motion to quash on ground (a).', right: 'No — hypothetical admission; evidence aliunde not considered (Odtuhan).', example: '—' },
		{ wrong: 'If the facts charged do not constitute an offense, the court must quash immediately.', right: 'The prosecution must first be given the opportunity to amend (Sec. 4).', example: '—' },
		{ wrong: 'A quashed information can never be refiled.', right: 'It can, except when quashed for extinction of liability or double jeopardy (Sec. 6).', example: '—' },
		{ wrong: 'Lack of jurisdiction over the person is never waived.', right: 'It is waived by plea or voluntary submission (Sec. 9).', example: '—' },
		{ wrong: 'Absence of preliminary investigation is a ground to quash.', right: 'Not a ground; remedy is remand (Larrañaga).', example: '—' },
		{ wrong: 'Any dismissal with the accused\'s consent allows refiling.', right: 'Not dismissals amounting to acquittal (demurrer, speedy trial, speedy disposition, state witness discharge).', example: '—' },
		{ wrong: 'One act can never be prosecuted twice.', right: 'One act may produce distinct offenses under different laws (BP 22 and estafa); double jeopardy protects against the same offense, unless punished by a law and an ordinance.', example: '—' },
		{ wrong: 'Each result of a reckless act is a separate offense.', right: 'Reckless imprudence is a single quasi-offense (Ivler).', example: '—' },
		{ wrong: 'Silence to a motion for provisional dismissal is consent.', right: 'Express consent is required (Lacson).', example: '—' },
		{ wrong: 'The time-bar runs from the prosecutor\'s receipt of the order.', right: 'From issuance of the order (A.M. No. 12-11-2-SC; 2017 Guidelines).', example: '—' }
	],
	corrections: [
		{ old: 'Lack of authority of the officer who filed the information cannot be waived (Cudia).', fix: 'Waivable; the court cannot dismiss on that ground motu proprio.', source: 'Villa Gomez v. People, G.R. No. 216824, November 10, 2020 (En Banc)' },
		{ old: 'Provisional dismissal period reckoned from the prosecution\'s receipt of the order (Lacson).', fix: 'Reckoned from issuance of the order.', source: 'A.M. No. 12-11-2-SC, Sec. 14; 2017 Revised Guidelines, III.7' },
		{ old: 'Treachery may be alleged by name only (Batin).', fix: 'A qualifying circumstance must be alleged with its ultimate facts; the remedy for a bare label is a motion to quash under Sec. 3(e) or a bill of particulars before arraignment.', source: 'People v. Solar, G.R. No. 225595, August 6, 2019 (En Banc)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Grounds', q: 'Enumerate the grounds for a motion to quash.', a: 'E117.1 — nine grounds (a)–(i).', keys: 'Sec. 3' },
		{ cat: 'A', level: 2, topic: 'Non-waivable', q: 'Which grounds for a motion to quash are not waived by failure to raise them before plea?', a: 'E117.2: (a) facts do not constitute an offense; (b) no jurisdiction over the offense; (g) extinction of liability; (i) double jeopardy.', keys: 'Sec. 9' },
		{ cat: 'A', level: 2, topic: 'Double jeopardy', q: 'Give the requisites of double jeopardy and the exceptions under Sec. 7, par. 2.', a: 'E117.3 and E117.4.', keys: 'Sec. 7' },
		{ cat: 'A', level: 3, topic: 'Provisional dismissal', q: 'What are the requisites of a provisional dismissal, and when does it become permanent?', a: 'E117.6; permanent after 1 year (≤6 years\' imprisonment or fine) or 2 years (>6 years) from issuance of the order.', keys: 'Sec. 8; Lacson' },
		{ cat: 'A', level: 3, topic: 'Not grounds', q: 'Give matters that are not grounds for a motion to quash.', a: 'E117.7: desistance; lack of probable cause; absence or irregularity of PI; matters of defense.', keys: 'not grounds' },
		{ cat: 'B', level: 3, topic: 'MTQ vs provisional', q: 'Distinguish a motion to quash from a provisional dismissal.', a: 'See C117.1.', keys: 'Los Baños' },
		{ cat: 'B', level: 3, topic: 'MTQ vs demurrer', q: 'Distinguish a motion to quash from a demurrer to evidence.', a: 'See C117.2.', keys: 'face of information vs evidence' },
		{ cat: 'B', level: 4, topic: 'Provisional vs merits', q: 'Distinguish a provisional dismissal from a dismissal on the merits, and a dismissal from an acquittal.', a: 'See C117.3 and C117.4.', keys: 'consent; revivable; double jeopardy' },
		{ cat: 'B', level: 4, topic: 'Waivable', q: 'Distinguish waivable from non-waivable grounds to quash, with examples.', a: 'See C117.5.', keys: 'Sec. 9' },
		{ cat: 'C', level: 1, topic: 'Time', q: 'A motion to quash may be filed at any time before the prosecution rests.', tf: false, short: 'False. Before plea (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 1, topic: 'Form', q: 'A motion to quash may be made orally in open court.', tf: false, short: 'False. It must be in writing, signed and specify its grounds (Sec. 2). (A provisional dismissal may be oral.)', keys: 'Sec. 2' },
		{ cat: 'C', level: 2, topic: 'Grounds considered', q: 'The court may quash an information on any ground apparent on its face even if not raised in the motion.', tf: false, short: 'False. Only lack of jurisdiction over the offense may be considered though not raised (Sec. 2).', keys: 'Sec. 2' },
		{ cat: 'C', level: 2, topic: 'Amendment', q: 'If the motion to quash is based on the ground that the facts charged do not constitute an offense, the court must immediately dismiss the case.', tf: false, short: 'False. The prosecution must first be given the opportunity to amend (Sec. 4).', keys: 'Sec. 4' },
		{ cat: 'C', level: 2, topic: 'Refiling', q: 'An order sustaining a motion to quash on the ground of prescription is not a bar to another prosecution for the same offense.', tf: false, short: 'False. Quashal on extinction of liability (g) or double jeopardy (i) bars another prosecution (Sec. 6).', keys: 'Sec. 6' },
		{ cat: 'C', level: 3, topic: 'Waiver', q: 'The accused who pleads without objecting waives the defense that the information charges more than one offense.', tf: true, short: 'True. Duplicity (f) is waivable; he may be convicted of as many offenses as are charged and proved (Rule 120, Sec. 3).', keys: 'Sec. 9; duplicity' },
		{ cat: 'C', level: 3, topic: 'Waiver', q: 'The defense of prescription is waived if not raised in a motion to quash before plea.', tf: false, short: 'False. Extinction of criminal liability (g) is not waived (Sec. 9).', keys: 'Sec. 9; (g)' },
		{ cat: 'C', level: 3, topic: 'Double jeopardy', q: 'Double jeopardy attaches upon the filing of a valid information in a court of competent jurisdiction.', tf: false, short: 'False. It also requires arraignment and a valid plea, and a valid termination of the first case.', keys: 'Sec. 7' },
		{ cat: 'C', level: 4, topic: 'Quasi-offense', q: 'An accused acquitted of reckless imprudence resulting in damage to property may still be tried for reckless imprudence resulting in homicide arising from the same collision.', tf: false, short: 'False. Reckless imprudence is a single quasi-offense; the acquittal bars the second prosecution (Ivler, 2010).', keys: 'Ivler' },
		{ cat: 'C', level: 4, topic: 'Provisional dismissal', q: 'The accused\'s failure to object to the prosecution\'s motion for provisional dismissal is express consent.', tf: false, short: 'False. Express consent must be positive and unequivocal; silence is not enough (Lacson).', keys: 'Lacson; express consent' },
		{ cat: 'C', level: 5, topic: 'Provisional dismissal', q: 'The one-year period to revive a provisionally dismissed case is reckoned from the prosecution\'s receipt of the order.', tf: false, short: 'False. From issuance of the order (A.M. No. 12-11-2-SC, Sec. 14; 2017 Guidelines).', update: 'Lacson (2003) reckoned from receipt; later issuances settled it as issuance.', keys: 'issuance of the order' },
		{
			cat: 'D', level: 4, topic: 'Amendment', title: 'Missing element — quash or amend?',
			facts: 'An information for estafa by misappropriation alleges that the accused received ₱500,000 from the complainant and failed to return it upon demand, but does not allege that he received it in trust, on commission, or under an obligation to return. The accused moves to quash for failure to charge an offense. The court immediately dismisses the case.',
			q: 'Was the court correct?',
			issue: 'Whether the court may quash outright for failure to allege an element without first allowing amendment.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 117, Sec. 4: if the motion is based on the ground that the facts charged do not constitute an offense, the prosecution "shall be given by the court an opportunity to correct the defect by amendment"; the motion shall be granted only if the prosecution fails to amend or the amended information still suffers from the defect.',
				application: 'The missing element (receipt in trust or under obligation to return) can be supplied by amendment before plea.',
				conclusion: 'The court should have ordered amendment; the dismissal was premature.'
			},
			keys: 'Sec. 4; opportunity to amend'
		},
		{
			cat: 'D', level: 4, topic: 'Waiver', title: 'Venue raised after conviction',
			facts: 'B is convicted of estafa by the RTC of Pasig. On appeal, he argues for the first time that all elements occurred in Manila, as the prosecution\'s own evidence shows.',
			q: 'May B still raise improper venue?',
			issue: 'Whether lack of territorial jurisdiction is waived if not raised before plea.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Venue in criminal cases is jurisdictional (Isip v. People). Lack of jurisdiction over the offense (Sec. 3[b]) is not waived (Sec. 9) and may be raised at any stage.',
				application: 'If the evidence shows no element occurred in Pasig, the Pasig RTC had no jurisdiction over the offense.',
				conclusion: 'The conviction must be set aside for lack of jurisdiction; the case may be filed in Manila subject to prescription.'
			},
			keys: 'Sec. 3(b); Sec. 9; venue jurisdictional'
		},
		{
			cat: 'D', level: 4, topic: 'Provisional dismissal', title: 'Revived after 14 months',
			facts: 'A case for theft (prision correccional — not exceeding 6 years) is provisionally dismissed on January 15, 2025, on the prosecution\'s motion bearing the accused\'s handwritten "No objection," with notice to the complainant. The prosecution revives it on March 20, 2026.',
			q: 'May the case be revived?',
			issue: 'Whether revival beyond one year is barred.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 117, Sec. 8: for offenses punishable by imprisonment not exceeding six years, a provisional dismissal becomes permanent one year after issuance of the order; A.M. No. 12-11-2-SC, Sec. 14 (reckoned from issuance; automatically permanent).',
				application: 'The Lacson requisites appear present (motion, express written consent, notice). One year from January 15, 2025 ended on January 15, 2026. Revival on March 20, 2026 is late.',
				conclusion: 'The dismissal became permanent; the revived case should be dismissed.'
			},
			missing: 'Whether the prosecutor was served a copy of the order (a Lacson requisite) — if not, the time-bar may not have begun.',
			keys: 'Sec. 8; 1 year; issuance'
		},
		{
			cat: 'E', level: 5, topic: 'Double jeopardy — supervening fact', title: 'Victim dies after the plea',
			facts: 'C is charged with frustrated homicide and, with the consent of the prosecutor and the victim, pleads guilty to serious physical injuries and is sentenced. Three weeks after the judgment, the victim dies from complications of the same wounds. The prosecutor files homicide. C moves to quash for double jeopardy.',
			q: 'Rule on the motion.',
			issue: 'Whether a conviction for a lesser offense bars prosecution for a graver offense arising from a supervening death.',
			alac: {
				answer: 'Deny the motion.',
				legalBasis: 'Rule 117, Sec. 7, par. 2(a): a conviction is not a bar to prosecution for an offense which necessarily includes the offense charged when "the graver offense developed due to supervening facts arising from the same act or omission constituting the former charge"; the accused is credited with the sentence served.',
				application: 'The death occurred after the plea and is a supervening fact arising from the same act.',
				conclusion: 'C may be tried for homicide, with credit for time served.'
			},
			missing: 'If the victim had already died before C\'s plea and the prosecution simply failed to amend, the exception would not apply (unless the death was discovered only after the plea despite diligence — par. 2[b]).',
			trap: 'The plea bargain had the required consents, so exception (c) does not apply — only (a).',
			keys: 'Sec. 7, par. 2(a); supervening fact; credit'
		},
		{
			cat: 'E', level: 5, topic: 'Double jeopardy — same act, different laws', title: 'BP 22 and estafa from one check',
			facts: 'D issues a postdated check to buy goods; it bounces. He is acquitted in the BP 22 case because notice of dishonor was not proved. The complainant then files estafa (Art. 315[2][d]) based on the same check. D moves to quash for double jeopardy.',
			q: 'Rule on the motion.',
			issue: 'Whether acquittal for BP 22 bars prosecution for estafa based on the same check.',
			alac: {
				answer: 'Deny the motion.',
				legalBasis: 'Const., Art. III, Sec. 21 and Rule 117, Sec. 7 protect against prosecution for the same offense, or one that includes or is included in it. Where one act constitutes two distinct offenses under different laws with different elements, prosecution under one is not a bar to the other (People v. Cabrera; Nierras v. Dacuycuy — in Tiu).',
				application: 'BP 22 (malum prohibitum; knowledge of insufficiency; notice of dishonor) and estafa (deceit and damage) have different elements; neither is included in the other.',
				conclusion: 'The estafa case proceeds.'
			},
			trap: 'The constitutional exception for an act punished by a law and an ordinance does not apply to two national laws.',
			keys: 'same offense test; different elements'
		},
		{
			cat: 'E', level: 5, topic: 'Quash vs provisional dismissal', title: 'Dismissal for lack of jurisdiction later "revived"',
			facts: 'On the accused\'s motion, the MTC dismisses an information for frustrated homicide for lack of jurisdiction (RTC offense). Three years later, the prosecutor files the information in the RTC. The accused invokes the two-year time-bar of Sec. 8.',
			q: 'Rule on the objection.',
			issue: 'Whether the Sec. 8 time-bar applies to a dismissal on a Sec. 3 ground.',
			alac: {
				answer: 'Overrule the objection (subject to prescription).',
				legalBasis: 'Los Baños v. Pedro (2009): where the dismissal rests on a ground in Sec. 3, the remedy is a motion to quash, and the Sec. 8 time-bar does not apply. Sec. 6: quashal is not a bar to another prosecution except on grounds (g) and (i).',
				application: 'The dismissal was for lack of jurisdiction over the offense — ground (b). Sec. 8 does not apply; Sec. 6 allows refiling.',
				conclusion: 'The RTC case may proceed if the offense has not prescribed (the MTC filing interrupted prescription — Olarte).'
			},
			keys: 'Los Baños; Sec. 6; Olarte'
		},
		{ cat: 'F', level: 3, topic: 'Odtuhan', q: 'What did People v. Odtuhan hold on the nature of a motion to quash under Sec. 3(a)?', a: 'It hypothetically admits the facts alleged; the test is whether those facts establish the elements; evidence aliunde is not considered; and curable defects call for amendment, not outright quashal.', keys: 'hypothetical admission; no evidence aliunde' },
		{ cat: 'F', level: 4, topic: 'Lacson', q: 'State the four requisites of a provisional dismissal under People v. Lacson and the consequence of a dismissal without the accused\'s express consent.', a: 'E117.6. Without express consent, Sec. 8 does not apply; revival is limited only by double jeopardy and prescription.', keys: 'Lacson' },
		{ cat: 'F', level: 4, topic: 'Ivler', q: 'Explain the doctrine in Ivler v. Modesto-San Pedro on double jeopardy and quasi-offenses.', a: 'Reckless imprudence is a single quasi-offense; the law penalizes the negligent act, not its results; a conviction or acquittal for one result bars prosecution for the others from the same act (following Buan).', keys: 'single quasi-offense' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 117', title: 'Rule 117 integrated',
			facts: 'An information for murder, signed by an assistant prosecutor without the city prosecutor\'s approval, alleges that E killed V "with treachery" and that the killing occurred "in Quezon City," but the evidence later shows it happened in Pasig. It also charges E with illegal possession of the firearm used. E files a motion to quash, citing only duplicity, before arraignment; it is denied. He pleads not guilty. After the prosecution rests, he argues: (1) lack of authority of the filing officer; (2) improper venue; (3) the treachery allegation is insufficient; (4) duplicity.',
			q: 'Rule on each argument.',
			issue: 'Waivable and non-waivable grounds after plea.',
			alac: {
				answer: '(1) Waived. (2) Not waived — may be raised. (3) Waived. (4) Already resolved (denied); duplicity, if any, allows conviction for each offense charged and proved.',
				legalBasis: 'Rule 117, Secs. 2, 3, 9; Villa Gomez v. People (2020) (lack of authority waivable); venue jurisdictional (Sec. 3[b]; non-waivable); People v. Solar (2019) (bare label waived if not raised before arraignment by MTQ or bill of particulars); Rule 120, Sec. 3 (conviction for several offenses charged and proved). Note: since RA 10591, use of an unlicensed firearm in murder is treated as an aggravating circumstance rather than a separate offense — verify before relying on the duplicity point.',
				application: '(1) and (3) were not raised before plea; both are waivable. (2) Venue goes to jurisdiction over the offense: if the evidence shows the killing occurred in Pasig, the Quezon City court lacks jurisdiction. (4) Duplicity was raised and denied; E may raise it on appeal as error, but the defect, if any, is not jurisdictional.',
				conclusion: 'The case turns on venue: if no element occurred in Quezon City, the court must dismiss for lack of jurisdiction (refiling in Pasig allowed, subject to prescription).'
			},
			verify: 'The treatment of illegal possession of a firearm used in murder under RA 10591 should be checked; the example is used only to test the duplicity ground.',
			keys: 'Sec. 9; Villa Gomez; Solar; venue'
		}
	],
	memorize: [
		'Before plea; written, signed, grounds specified; only lack of jurisdiction over the offense considered motu proprio',
		'Nine grounds (Sec. 3) and the four non-waivable ones (a, b, g, i)',
		'Sec. 4: amend first; Sec. 5: refiling order; Sec. 6: no bar except (g), (i)',
		'Double jeopardy requisites and three exceptions (Sec. 7)',
		'Dismissals amounting to acquittal even with consent',
		'Provisional dismissal: Lacson requisites; 1 year / 2 years from issuance',
		'Not grounds: desistance, no probable cause, no PI, matters of defense'
	],
	flashcards: [
		['Deadline for a motion to quash?', 'Before plea.'],
		['Form of a motion to quash?', 'Written, signed, factual and legal grounds distinctly specified.'],
		['Ground the court may consider motu proprio?', 'Lack of jurisdiction over the offense.'],
		['Nine grounds?', 'No offense; no jurisdiction over offense; over person; no authority; form; duplicity; extinction; legal excuse; double jeopardy.'],
		['Non-waivable grounds?', '(a), (b), (g), (i).'],
		['Effect of a curable defect?', 'Court orders amendment.'],
		['Quashal that bars refiling?', 'On (g) extinction or (i) double jeopardy.'],
		['Requisites of double jeopardy?', 'First jeopardy attached; validly terminated; second for the same or included offense.'],
		['Exceptions to the bar on a graver offense?', 'Supervening facts; facts discovered after plea; plea without required consent.'],
		['Is reckless imprudence one offense or many?', 'One quasi-offense (Ivler).'],
		['Provisional dismissal requisites?', 'Motion with express consent; notice to offended party; order; service on prosecutor.'],
		['Time-bar?', '1 year (≤6 years or fine), 2 years (>6 years), from issuance of the order.']
	],
	oral: [
		['"What is a motion to quash, and when is it filed?"', 'A motion assailing the information for defects on its face, filed before plea, in writing, specifying its grounds. It hypothetically admits the facts alleged.'],
		['"Which grounds survive the plea?"', 'Four: that the facts do not constitute an offense, lack of jurisdiction over the offense, extinction of criminal liability, and double jeopardy. All others are waived.'],
		['"When does double jeopardy attach?"', 'When the accused was arraigned and pleaded to a valid information before a competent court, and the case was terminated by conviction, acquittal, or dismissal without his express consent. A second prosecution for the same or an included offense is then barred, except for supervening facts, facts discovered after plea, or a plea bargain without the required consent.'],
		['"Explain provisional dismissal."', 'A dismissal with the accused\'s express consent and notice to the offended party; it becomes permanent if not revived within one year for offenses punishable by up to six years or a fine, or two years for graver ones, counted from issuance of the order.']
	],
	checklist: [
		'I can state when and how a motion to quash is filed.',
		'I can list all nine grounds and the four non-waivable ones.',
		'I can explain amendment, refiling and the bar in Sec. 6.',
		'I can state the requisites and exceptions of double jeopardy.',
		'I can apply Ivler to quasi-offenses.',
		'I can state the Lacson requisites and compute the time-bar.',
		'I can distinguish MTQ from provisional dismissal and demurrer.'
	],
	sheet: [
		'<b>MTQ (Secs. 1–2):</b> before plea; written, signed, grounds specified; court considers only stated grounds + lack of jurisdiction over the offense.',
		'<b>Grounds (Sec. 3):</b> no offense · no jurisdiction (offense) · no jurisdiction (person) · no authority · form · duplicity · extinction · legal excuse · double jeopardy.',
		'<b>Not waived (Sec. 9):</b> (a), (b), (g), (i). Waived: (c), (d — Villa Gomez), (e — Solar), (f), (h).',
		'<b>Effects (Secs. 4–6):</b> amend first; refiling ordered; no bar except (g), (i).',
		'<b>Double jeopardy (Sec. 7):</b> attached + terminated + same/included offense. Exceptions: supervening facts; discovered after plea; plea without consent. Ivler: reckless imprudence is one quasi-offense.',
		'<b>Provisional dismissal (Sec. 8):</b> express consent + notice + order + service (Lacson); permanent after 1 yr (≤6 yrs/fine) or 2 yrs (>6 yrs) from issuance.'
	],
	watchFor: `<strong>Watch for: the ground, the timing, and the consent.</strong>
<ul>
<li>Is the ground in Sec. 3? Is it one of the four that survive the plea?</li>
<li>Double jeopardy: was there a plea? Did the first case end without the accused\'s express consent (or with a dismissal amounting to acquittal)?</li>
<li>Provisional dismissal: express consent? notice? Count 1 or 2 years from issuance.</li>
</ul>`
};
