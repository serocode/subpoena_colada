import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 113 — Arrest. */
export const r113: RuleChapter = {
	id: 'r113',
	n: 113,
	title: 'Arrest',
	short: 'R113 Arrest',
	tiu: 'pp. 108–114',
	plain: `An arrest is taking a person into custody so he can answer for a crime. Usually a judge issues a warrant first. Without a warrant, an arrest is lawful only in three situations: the person commits a crime in front of the arresting person; a crime has just been committed and the arresting person has personal knowledge of facts showing this person did it; or the person is an escaped prisoner. The Rule also says how arrests are made, who may be called to help, when a door may be forced, and who may visit the person arrested.`,
	purpose: `To secure the person of the accused so that he may be bound to answer for the offense, while protecting him from arbitrary seizure (Const., Art. III, Sec. 2).`,
	stage: `After the judge finds probable cause (${ruleLink('r112', 'sections', 'Rule 112, Sec. 5')}) — or, for warrantless arrests, before any case is filed, followed by inquest (${ruleLink('r112', 'sections', 'Rule 112, Sec. 6')}). Arrest is one way the court acquires jurisdiction over the person of the accused.`,
	questions: [
		'What is an arrest, and how is it made?',
		'How is a warrant executed, by whom, and within what periods?',
		'When may a peace officer or private person arrest without a warrant?',
		'What must the person arresting say, and when may he skip it?',
		'When may an officer break into or out of a building?',
		'What is the effect of an illegal arrest on the court\'s jurisdiction and on the evidence?',
		'What rights does the arrested person have to visits and counsel?'
	],
	relations: `Rule 113 follows ${ruleLink('r112')} (warrants issue under Sec. 5; warrantless arrests lead to inquest under Sec. 6) and connects to ${ruleLink('r114')} (bail; Sec. 23 allows warrantless re-arrest of an accused on bail who tries to leave the country; Sec. 26 preserves objections to the arrest if raised before plea), ${ruleLink('r115')} (custodial rights) and ${ruleLink('r117')} (lack of jurisdiction over the person, Sec. 3[c], is waived if not raised before plea).`,
	principles: [
		'<b>Warrant is the rule; warrantless arrest is the exception</b> — strictly construed.',
		'<b>No violence or unnecessary force</b>; no greater restraint than necessary (Sec. 2).',
		'<b>Personal knowledge</b> is the core of warrantless arrests: the overt act in the officer\'s presence (in flagrante) or personal knowledge of facts that a crime was just committed (hot pursuit).',
		'<b>An illegal arrest affects jurisdiction over the person</b>, but the objection is waived if not raised before plea — and waiver of the arrest does not waive the inadmissibility of evidence seized.',
		'<b>An illegal arrest is not a ground for acquittal</b> and does not set aside a conviction based on independent evidence.'
	],
	sections: [
		{
			n: '1',
			title: 'Definition of arrest',
			text: `"Arrest is the taking of a person into custody in order that he may be bound to answer for the commission of an offense."`,
			plain: `Arrest = custody for the purpose of answering for a crime.`,
			effect: `Purpose matters: a motorist flagged down for a traffic violation and waiting for a ticket is not under arrest (Luz v. People, in Tiu).`,
			cases: `${caseLink('luz', 'Luz v. People (2012)')}.`,
			hypo: `A traffic enforcer stops a motorcycle rider for not wearing a helmet and asks for his license while writing a ticket. Not an arrest — no intent to take him into custody to answer for an offense.`,
			trap: `An "invitation" to the police station of a person suspected of a crime is treated as custodial investigation under RA 7438 (Sec. 2, last paragraph), so the rights of a person under custodial investigation attach.`
		},
		{
			n: '2',
			title: 'Arrest; how made',
			text: `"An arrest is made by an actual restraint of a person to be arrested, or by his submission to the custody of the person making the arrest. No violence or unnecessary force shall be used in making an arrest. The person arrested shall not be subject to a greater restraint than is necessary for his detention."`,
			plain: `Either physically restrain him or he submits. Use only the force needed.`,
			reqs: `(1) Intent to arrest; (2) actual restraint or submission under the belief that submission is necessary.`,
			effect: `Unnecessary force may give rise to criminal, civil (Civil Code Art. 32) and administrative liability.`,
			hypo: `A suspect, told he is under arrest, walks to the police car on his own. He has been arrested — by submission.`,
			trap: `Physical touching is not required.`
		},
		{
			n: '3',
			title: 'Duty of arresting officer',
			text: `The officer executing the warrant shall arrest the accused and deliver him to the nearest police station or jail without unnecessary delay.`,
			plain: `Arrest, then bring him to the nearest station or jail right away.`,
			who: `Officer executing the warrant.`,
			when: `Without unnecessary delay.`,
			effect: `Unnecessary delay may expose the officer to liability (e.g., RPC Art. 125 in warrantless cases; delay in delivery).`,
			hypo: `Officers arrest X on a warrant and drive around the city for six hours "to get information" before booking him. They violated Sec. 3.`
		},
		{
			n: '4',
			title: 'Execution of warrant',
			text: `"The head of the office to whom the warrant of arrest was delivered for execution shall cause the warrant to be executed within ten (10) days from its receipt. Within ten (10) days after the expiration of the period, the officer to whom it was assigned for execution shall make a report to the judge who issued the warrant. In case of his failure to execute the warrant, he shall state the reasons therefor."`,
			plain: `Ten days to serve; ten more days to report to the judge (with reasons if not served). The warrant does not expire after ten days.`,
			who: `Head of the law enforcement office; assigned officer; issuing judge.`,
			when: `Execute within 10 days from receipt; report within 10 days after that period.`,
			exceptions: `The 10-day period is for the officers\' compliance; the warrant remains valid until served or recalled (Tiu, p. 110).`,
			effect: `Non-service does not void the warrant. Under the 2017 Revised Guidelines, a case is archived if the accused remains at large for six months after delivery of the warrant to the proper peace officer.`,
			hypo: `A warrant is received by the police on January 5 and served on March 1. The arrest is valid; the 10-day period does not limit the warrant\'s life.`,
			trap: `Confusing it with a <b>search</b> warrant, which is valid only for 10 days from its date (Rule 126).`,
			update: `Rules on the Use of Body-Worn Cameras in the Execution of Warrants (A.M. No. 21-06-08-SC, 2021): officers executing arrest warrants use body-worn cameras and an alternative recording device, notify the person that he is being recorded, and submit recordings to the court. Per secondary summaries, failure to use them does not make an arrest unlawful or the evidence inadmissible, but may lead to contempt. OCA Circular No. 265-2023 reports an amendment requiring a report within 10 days from assignment when the warrant is not executed, and a duty of the issuing judge to check the Rule 113, Sec. 4 report.`,
			verify: `Body-worn camera provisions were confirmed only through summaries; read A.M. No. 21-06-08-SC before citing section numbers.`
		},
		{
			n: '5',
			title: 'Arrest without warrant; when lawful',
			text: `A peace officer or a private person may, without a warrant, arrest a person: "(a) When, in his presence, the person to be arrested has committed, is actually committing, or is attempting to commit an offense; (b) When an offense has just been committed and he has probable cause to believe based on personal knowledge of facts or circumstances that the person to be arrested has committed it; and (c) When the person to be arrested is a prisoner who has escaped from a penal establishment or place where he is serving final judgment or is temporarily confined while his case is pending, or has escaped while being transferred from one confinement to another." In (a) and (b), the person arrested shall be forthwith delivered to the nearest police station or jail and proceeded against under the inquest rule of Rule 112.`,
			plain: `Three exceptions: caught in the act (in flagrante), hot pursuit of a crime just committed with personal knowledge, and escapees. Add Rule 114, Sec. 23: an accused on bail who tries to leave the country.`,
			reqs: `In flagrante: (1) an overt act showing the person has just committed, is committing or is attempting a crime; (2) done in the presence or within the view of the arresting person (Valdez v. People). Hot pursuit: (1) an offense has just been committed; (2) probable cause based on personal knowledge of facts or circumstances that the person committed it (Pestilos v. Generoso).`,
			who: `Peace officers and private persons (citizen's arrest).`,
			when: `In flagrante: at the time of the overt act. Hot pursuit: immediately after the offense — immediacy is judged case by case (Tiu, citing People v. del Rosario; Go v. CA: six days later is not "just been committed").`,
			exceptions: `"Reliable information" from an informant alone, without an overt act in the officer's presence, does not justify an in flagrante arrest (People v. Molina; People v. Laguio, in Tiu). For continuing crimes (rebellion, subversion), Tiu notes an overt act was held unnecessary (Umil v. Ramos).`,
			effect: `Lawful arrest → inquest (Rule 112, Sec. 6). Unlawful arrest → the person is entitled to release; the court lacks jurisdiction over his person unless he waives the objection by not raising it before plea; evidence seized incident to the illegal arrest is inadmissible.`,
			cases: `${caseLink('pestilos', 'Pestilos v. Generoso (2014)')}; ${caseLink('go-ca', 'Go v. CA (1992)')}; ${caseLink('valdez', 'Valdez v. People (2007)')}; <i>People v. Laguio</i> (2007); <i>Umil v. Ramos</i>.`,
			hypo: `A robbery victim tells police, ten minutes after the robbery, that the robber wore a red shirt and ran toward the market. Police find a man in a red shirt, panting, holding the victim's distinctive bag. Valid hot-pursuit arrest: the offense had just been committed and the officers have personal knowledge of facts (the bag, the description, the timing).`,
			trap: `In flagrante requires the arresting officer to see the overt act; hot pursuit does not, but requires immediacy and personal knowledge of facts. Suspicious behavior alone (looking around, running away) is not an overt act (Valdez).`,
			update: `The last paragraph refers to "section 7 of Rule 112," which became Sec. 6 after the 2005 amendment.`
		},
		{
			n: '6',
			title: 'Time of making arrest',
			text: `"An arrest may be made on any day and at any time of the day or night."`,
			plain: `Any day, any hour.`,
			trap: `Contrast search warrants, which as a rule must be served in the day time unless the affidavit asserts that the property is on the person or in the place ordered to be searched (Rule 126, Sec. 9).`
		},
		{
			n: '7',
			title: 'Method of arrest by officer by virtue of warrant',
			text: `The officer shall inform the person to be arrested of the cause of the arrest and of the fact that a warrant has been issued, except when he flees or forcibly resists before the officer has the opportunity to so inform him, or when giving the information will imperil the arrest. "The officer need not have the warrant in his possession at the time of the arrest but after the arrest, if the person arrested so requires, the warrant shall be shown to him as soon as practicable."`,
			plain: `Tell him why and that there is a warrant — unless he runs, fights, or telling him would ruin the arrest. The warrant can be shown later on request.`,
			exceptions: `Flight; forcible resistance before the officer can inform; information would imperil the arrest.`,
			hypo: `An officer recognizes a wanted person at a mall and arrests him; the warrant is at the station. Valid; the warrant must be shown to him as soon as practicable if he asks.`
		},
		{
			n: '8',
			title: 'Method of arrest by officer without warrant',
			text: `When arresting without a warrant, the officer shall inform the person of his authority and the cause of the arrest, unless the person is engaged in the commission of an offense, is pursued immediately after its commission, has escaped, flees or forcibly resists before the officer can inform him, or when giving the information will imperil the arrest.`,
			plain: `State your authority and the cause, unless the exceptions apply.`,
			exceptions: `Engaged in the offense; pursued immediately after; escaped; flees or resists; information would imperil the arrest.`,
			hypo: `Police chase a fleeing snatcher and tackle him. No need to first state their authority — he is pursued immediately after the offense and is fleeing.`
		},
		{
			n: '9',
			title: 'Method of arrest by private person',
			text: `A private person making an arrest shall inform the person to be arrested of the intention to arrest him and the cause of the arrest, subject to the same exceptions as in Sec. 8.`,
			plain: `A citizen says "I am arresting you" and why — unless the exceptions apply.`,
			effect: `A private person who arrests outside Sec. 5 may be liable for illegal detention or unlawful arrest under the RPC.`,
			trap: `A private person states his "intention to arrest," not his "authority."`
		},
		{
			n: '10',
			title: 'Officer may summon assistance',
			text: `An officer making a lawful arrest may orally summon as many persons as he deems necessary; every person summoned shall assist when he can do so without detriment to himself.`,
			plain: `An officer can call bystanders to help; they must help if it is safe for them.`,
			hypo: `A lone officer arresting a large suspect asks two bystanders to hold the suspect's arms. They must assist if they can do so without danger to themselves.`
		},
		{
			n: '11',
			title: 'Right of officer to break into building or enclosure',
			text: `An officer, in order to make an arrest with a warrant or without a warrant under Sec. 5, may break into any building or enclosure where the person to be arrested is or is reasonably believed to be, "if he is refused admittance thereto, after announcing his authority and purpose."`,
			plain: `Knock and announce first; if refused, the officer may force entry.`,
			reqs: `(1) Lawful arrest (with or without warrant); (2) person is or is reasonably believed to be inside; (3) announcement of authority and purpose; (4) refusal of admittance.`,
			effect: `Forced entry without announcement and refusal makes the entry unlawful and may taint evidence obtained inside.`,
			hypo: `Officers with an arrest warrant knock, announce, and are refused. They break the door. Lawful.`,
			trap: `This authorizes entry to <b>arrest</b>, not a general search of the house. A search beyond the person and the area within his immediate control needs a search warrant (Rule 126).`
		},
		{
			n: '12',
			title: 'Right to break out from building or enclosure',
			text: `"Whenever an officer has entered the building or enclosure in accordance with the preceding section, he may break out therefrom when necessary to liberate himself."`,
			plain: `If trapped inside after a lawful entry, he may break out.`
		},
		{
			n: '13',
			title: 'Arrest after escape or rescue',
			text: `"If a person lawfully arrested escapes or is rescued, any person may immediately pursue or retake him without a warrant at any time and in any place within the Philippines."`,
			plain: `Anyone may immediately recapture a lawfully arrested person who escapes or is rescued — anywhere in the country.`,
			reqs: `(1) Prior lawful arrest; (2) escape or rescue; (3) immediate pursuit.`,
			hypo: `A suspect lawfully arrested breaks free and runs into a neighboring province; a barangay tanod catches him there. Valid.`
		},
		{
			n: '14',
			title: 'Right of attorney or relative to visit person arrested',
			text: `Any member of the Philippine Bar, at the request of the person arrested or another acting for him, may visit and confer privately with him in jail or any place of custody at any hour of the day or night; a relative may do the same, subject to reasonable regulations.`,
			plain: `Lawyers may visit any time; relatives may visit under reasonable rules. RA 7438 adds more.`,
			effect: `RA 7438: assistance of counsel at all times; information of rights in a language understood; custodial investigation report read and explained by counsel, otherwise void; extrajudicial confession in writing signed in the presence of counsel (or, upon valid waiver, of specified persons), otherwise inadmissible; Art. 125 waiver in writing with counsel; visits by immediate family, doctors, religious ministers and accredited NGOs; "invitation" is covered.`,
			hypo: `Police refuse to let the arrested person's lawyer see him at 2 a.m. "because it is late." Violation of Sec. 14 and RA 7438.`
		}
	],
	reqs: [
		{
			name: 'Valid warrant of arrest',
			source: 'Const., Art. III, Sec. 2; Rule 112, Sec. 5; Rule 113, Secs. 4 and 7',
			what: 'A warrant issued upon probable cause personally determined by the judge, particularly describing the person.',
			who: 'Issued by the judge; executed by the law enforcement officer.',
			when: 'Executed within 10 days of receipt (directory); valid until served or recalled.',
			form: 'Written order; officer need not carry it but must show it on request after the arrest.',
			missing: 'Arrest under a void warrant is an illegal arrest: the person may seek release (habeas corpus or motion to quash the warrant); evidence seized incident to it is inadmissible.',
			defect: 'Waivable',
			defectNote: 'Objections to the warrant or arrest are waived if not raised before plea (Rule 114, Sec. 26; People v. Cunanan, 2015). The defect is never a ground for acquittal (People v. Yau, 2014).'
		},
		{
			name: 'In flagrante delicto arrest (Sec. 5[a])',
			source: 'Rule 113, Sec. 5(a); Valdez v. People (2007)',
			what: '(1) An overt act indicating the person has just committed, is committing or is attempting a crime; (2) in the presence or within the view of the arresting person.',
			who: 'Peace officer or private person who personally perceives the overt act.',
			when: 'At the moment of the overt act.',
			missing: 'No valid in flagrante arrest; a tip without an overt act is insufficient (Molina; Laguio).',
			defect: 'Waivable',
			defectNote: 'The illegality of the arrest is waived by failure to object before plea, but evidence seized remains inadmissible if timely objected to at trial (Villanueva v. People, 2014).'
		},
		{
			name: 'Hot pursuit arrest (Sec. 5[b])',
			source: 'Rule 113, Sec. 5(b); Pestilos v. Generoso (2014); Go v. CA (1992)',
			what: '(1) An offense has just been committed; (2) probable cause based on personal knowledge of facts or circumstances that the person committed it.',
			who: 'Peace officer or private person.',
			when: 'Immediately after the offense — judged by the circumstances; days later is too late.',
			missing: 'Arrest is illegal; the person is entitled to release and to a regular preliminary investigation (Go v. CA).',
			defect: 'Waivable',
			defectNote: 'Same waiver rule; the court may still try him if he submits to its jurisdiction.'
		},
		{
			name: 'Forced entry to arrest (Sec. 11)',
			source: 'Rule 113, Sec. 11',
			what: 'Announcement of authority and purpose; refusal of admittance; person inside or reasonably believed inside.',
			who: 'Officer arresting with a warrant or lawfully without one.',
			when: 'At the time of the arrest.',
			where: 'Any building or enclosure.',
			missing: 'Unlawful entry; possible liability for violation of domicile; evidence obtained may be challenged.',
			defect: 'Depends on the defect',
			defectNote: 'The arrest itself may still be valid if lawful grounds existed; but items seized in an unlawful entry are subject to exclusion under Art. III, Sec. 3(2).'
		},
		{
			name: 'Art. 125 / RA 7438 waiver',
			source: 'RA 7438, Sec. 2(e); Rule 112, Sec. 6',
			what: 'Written waiver of Art. 125 signed by the detained person.',
			who: 'Detained person, in the presence of counsel.',
			when: 'Before the complaint or information is filed, to undergo preliminary investigation.',
			form: 'Written; signed in the presence of counsel.',
			missing: 'The waiver is "null and void and of no effect" (RA 7438).',
			defect: 'Not waivable',
			defectNote: 'The counsel requirement cannot be dispensed with; continued detention on a void waiver is unlawful.'
		}
	],
	enums: [
		{
			id: 'E113.1',
			name: 'Warrantless arrests that are lawful',
			source: 'Rule 113, Sec. 5; Rule 114, Sec. 23; Rule 113, Sec. 13 — as organized in Tiu, pp. 110–112',
			kind: 'rule',
			memorize: true,
			lead: 'A person may be lawfully arrested without a warrant',
			items: [
				{ t: 'In flagrante delicto', d: 'When, in the presence of the arresting person, he has committed, is committing or is attempting to commit an offense (Sec. 5[a]). Requires an overt act within the arresting person\'s view.', s: 'in flagrante — overt act in his presence', x: 'Buy-bust operation.' },
				{ t: 'Hot pursuit', d: 'When an offense has just been committed and the arresting person has probable cause, based on personal knowledge of facts or circumstances, that the person committed it (Sec. 5[b]).', s: 'hot pursuit — just committed, personal knowledge of facts', x: 'Arrest minutes after a stabbing, on the victim\'s identification and blood on the suspect\'s clothes.' },
				{ t: 'Escaped prisoner', d: 'A prisoner who escaped from a penal establishment, from temporary confinement while his case is pending, or during transfer (Sec. 5[c]).', s: 'escaped prisoner' },
				{ t: 'Accused on bail attempting to leave the country', d: 'Without the court\'s permission (Rule 114, Sec. 23).', s: 'accused on bail leaving the country without permission' },
				{ t: 'Person lawfully arrested who escapes or is rescued', d: 'Any person may immediately pursue or retake him anywhere in the Philippines (Sec. 13).', s: 'retaking after escape or rescue' }
			],
			exceptions: 'The bondsman may also arrest the accused (or have him arrested on written authority) to surrender him (Rule 114, Sec. 23).',
			memory: '<b>F-H-E-B-R</b>: Flagrante · Hot pursuit · Escapee · Bail-jumper abroad · Retaking.',
			tip: 'Sec. 5 lists three; Tiu adds the bail rule (four). Some lists count the retaking rule (Sec. 13) as a fifth. Say which list you are giving.',
			question: 'When may a person be lawfully arrested without a warrant?'
		},
		{
			id: 'E113.2',
			name: 'Requisites of in flagrante and hot pursuit arrests',
			source: 'Rule 113, Sec. 5(a)–(b); Valdez v. People (2007); Pestilos v. Generoso (2014)',
			kind: 'case',
			memorize: true,
			lead: 'The requisites are',
			items: [
				{ t: 'In flagrante — overt act', d: 'The person executes an overt act indicating he has just committed, is committing or is attempting a crime.', s: 'in flagrante: overt act' },
				{ t: 'In flagrante — in the presence or view of the arresting person', d: 'Perceived by his senses.', s: 'in flagrante: in his presence or view' },
				{ t: 'Hot pursuit — offense has just been committed', d: 'Immediacy between the offense and the arrest.', s: 'hot pursuit: just committed' },
				{ t: 'Hot pursuit — probable cause from personal knowledge of facts or circumstances', d: 'Not actual knowledge of the crime, but facts gathered by the officer himself (including from the victim or witnesses) strong enough to create probable cause (Pestilos).', s: 'hot pursuit: probable cause from personal knowledge of facts' }
			],
			question: 'Give the requisites of a valid in flagrante delicto arrest and of a valid hot pursuit arrest.'
		},
		{
			id: 'E113.3',
			name: 'Exceptions to the duty to inform the person arrested',
			source: 'Rule 113, Secs. 7–9',
			kind: 'rule',
			lead: 'The duty to inform does not apply when the person',
			items: [
				{ t: 'Is engaged in the commission of an offense', d: 'Warrantless arrests only (Sec. 8): caught in the act, he already knows why he is being arrested.', s: 'is committing the offense' },
				{ t: 'Is pursued immediately after its commission', d: 'Warrantless arrests only: hot pursuit leaves no time to explain, and the pursuit itself tells him the cause.', s: 'is pursued immediately after' },
				{ t: 'Has escaped', d: 'Warrantless arrests only: the escapee knows why he is being retaken.', s: 'has escaped' },
				{ t: 'Flees or forcibly resists before he can be informed', d: 'Applies to arrests with or without a warrant (Secs. 7–8): the officer is excused because he had no opportunity to inform him.', s: 'flees or forcibly resists' },
				{ t: 'Would imperil the arrest if informed', d: 'Applies to all arrests: e.g., announcing the warrant would let him escape.', s: 'information would imperil the arrest' }
			],
			tip: 'With a warrant (Sec. 7), only the last two apply. Officer informs of "authority" (Sec. 8); private person of "intention to arrest" (Sec. 9).',
			question: 'What must the person making an arrest tell the person arrested? When may he dispense with it?'
		},
		{
			id: 'E113.4',
			name: 'Effects of an illegal arrest',
			source: 'Tiu, p. 113 (People v. Cunanan, 2015; De la Cruz v. People, 2014; Villanueva v. People, 2014; People v. Yau, 2014; People v. Velasco, 2013); Rule 114, Sec. 26; Rule 117, Secs. 3(c) and 9',
			kind: 'notes',
			memorize: true,
			lead: 'An illegal arrest',
			items: [
				{ t: 'Prevents the court from acquiring jurisdiction over the person', d: 'Ground to quash under Rule 117, Sec. 3(c).', s: 'no jurisdiction over the person' },
				{ t: 'Is waived if not raised before plea', d: 'Voluntary submission (plea, active participation) cures it; it cannot be raised for the first time on appeal (People v. Palma).', s: 'objection waived if not raised before plea' },
				{ t: 'Is not waived by applying for bail', d: 'If raised before plea (Rule 114, Sec. 26).', s: 'bail application is no waiver' },
				{ t: 'Does not make seized evidence admissible by waiver', d: 'Waiving the arrest does not waive the inadmissibility of evidence seized incident to it (De la Cruz; Villanueva).', s: 'evidence still inadmissible' },
				{ t: 'Is not a ground for acquittal', d: 'Conviction may rest on independent evidence (People v. Yau; People v. Velasco).', s: 'not a ground for acquittal' }
			],
			question: 'What are the effects of an illegal warrantless arrest?'
		},
		{
			id: 'E113.5',
			name: 'Rights of persons arrested, detained or under custodial investigation',
			source: 'RA 7438, Sec. 2; Rule 113, Sec. 14',
			kind: 'law',
			lead: 'Under RA 7438, a person arrested, detained or under custodial investigation has the right',
			items: [
				{ t: 'To be assisted by counsel at all times', d: 'From arrest through custodial investigation, not only at trial; counsel must be competent and independent (Sec. 2[a]; Const., Art. III, Sec. 12[1]).', s: 'counsel at all times' },
				{ t: 'To be informed of his rights to remain silent and to competent and independent counsel', d: 'In a language he understands; counsel provided if he cannot afford one (Sec. 2[b]).', s: 'to be informed of rights' },
				{ t: 'To have the custodial investigation report read and explained by counsel', d: 'Otherwise null and void (Sec. 2[c]).', s: 'report read and explained' },
				{ t: 'To an extrajudicial confession only in writing, signed in the presence of counsel', d: 'Or, on a valid waiver, in the presence of specified persons; otherwise inadmissible (Sec. 2[d]).', s: 'confession only in writing with counsel' },
				{ t: 'To waive Art. 125 only in writing in the presence of counsel', d: 'Otherwise void (Sec. 2[e]).', s: 'Art. 125 waiver only with counsel' },
				{ t: 'To visits and conferences', d: 'By immediate family, doctor, priest or minister, accredited NGOs (Sec. 2[f]); lawyers at any hour (Rule 113, Sec. 14).', s: 'visits' }
			],
			exceptions: '"Custodial investigation" includes the practice of issuing an "invitation" to a suspect.',
			question: 'What are the rights of a person arrested, detained or under custodial investigation under RA 7438?'
		}
	],
	comparisons: [
		{
			id: 'C113.1',
			title: 'Arrest with a warrant vs. warrantless arrest',
			a: 'Arrest with a warrant',
			b: 'Warrantless arrest',
			meaning: ['Arrest by virtue of a judge\'s warrant issued on probable cause.', 'Arrest without a warrant in the cases allowed by Sec. 5 and related rules.'],
			basis: ['Const., Art. III, Sec. 2; Rule 112, Sec. 5; Rule 113, Secs. 4, 7', 'Rule 113, Secs. 5, 8, 9, 13; Rule 114, Sec. 23'],
			who: ['Law enforcement officer to whom the warrant is delivered (and persons he summons).', 'Peace officer or private person.'],
			when: ['After the information is filed and probable cause is judicially determined.', 'In flagrante, hot pursuit, escapee, bail-jumper abroad, retaking.'],
			reqs: ['Inform of cause and existence of warrant (exceptions); show warrant on request.', 'Inform of authority (or intention) and cause (exceptions); deliver forthwith to the nearest station or jail.'],
			time: ['Execute within 10 days; report within 10 days after (directory).', 'Art. 125: deliver to judicial authorities within 12/18/36 hours.'],
			exceptions: ['Warrant not needed if already detained, after inquest, fine only (Rule 112, Sec. 5[c]).', 'Strictly construed; tips alone insufficient.'],
			effect: ['Court acquires jurisdiction over the person; case proceeds.', 'Inquest (Rule 112, Sec. 6); if unlawful, release and regular PI.'],
			trap: ['Thinking the warrant expires in 10 days.', 'Thinking suspicious conduct is an overt act.'],
			decisive: 'Who determined probable cause before the arrest: the judge (warrant) or the arresting person on personal knowledge (warrantless).',
			hypo: 'Police receive a tip that X will deliver shabu at 5 p.m. Instead of getting a warrant, they arrest X at 5 p.m. as he steps out of a car, with no overt act. The arrest is illegal; a warrant (or a buy-bust where they see the sale) was needed.'
		},
		{
			id: 'C113.2',
			title: 'In flagrante delicto arrest vs. hot pursuit arrest',
			a: 'In flagrante (Sec. 5[a])',
			b: 'Hot pursuit (Sec. 5[b])',
			meaning: ['Arrest of a person who, in the arresting person\'s presence, has committed, is committing or is attempting an offense.', 'Arrest of a person when an offense has just been committed and there is probable cause from personal knowledge of facts that he committed it.'],
			basis: ['Rule 113, Sec. 5(a)', 'Rule 113, Sec. 5(b)'],
			who: ['Peace officer or private person who witnesses the overt act.', 'Peace officer or private person who has personal knowledge of facts.'],
			when: ['During or right at the overt act.', 'Immediately after the offense.'],
			reqs: ['Overt act; in his presence or view.', 'Offense just committed; probable cause based on personal knowledge of facts or circumstances.'],
			time: ['Simultaneous with the act.', 'Short gap; six days is too long (Go v. CA).'],
			exceptions: ['Continuing crimes (Umil, per Tiu).', 'May rely on information from the victim or witnesses gathered by the officer himself (Pestilos).'],
			effect: ['Inquest.', 'Inquest.'],
			trap: ['Calling a tip-based arrest "in flagrante."', 'Calling an arrest days later "hot pursuit."'],
			decisive: 'Whether the arresting person saw the crime (in flagrante) or arrived after it and relied on facts he personally gathered (hot pursuit).',
			hypo: 'A police officer sees A stab B: in flagrante. An officer arrives five minutes after the stabbing, finds B bleeding, hears B and two bystanders point to A running away with a bloody knife: hot pursuit. An officer reads about the stabbing in the next day\'s newspaper and arrests A: neither — a warrant is needed.'
		},
		{
			id: 'C113.3',
			title: 'Warrant of arrest vs. search warrant (as to life and service)',
			a: 'Warrant of arrest',
			b: 'Search warrant',
			meaning: ['Order to take a person into custody.', 'Order to search for and seize personal property.'],
			basis: ['Rule 112, Sec. 5; Rule 113', 'Rule 126'],
			who: ['Issued by the judge after personal evaluation (examination optional).', 'Issued by the judge after personally examining the complainant and witnesses under oath, by searching questions (mandatory).'],
			when: ['Any day and any time (Sec. 6).', 'In the day time, unless the affidavit asserts the property is on the person or in the place (Rule 126, Sec. 9).'],
			reqs: ['Probable cause; particular description of the person.', 'Probable cause in connection with one specific offense; particular description of the place and things.'],
			time: ['Valid until served or recalled; execute within 10 days (directory).', 'Valid for 10 days from its date; thereafter void.'],
			exceptions: ['—', '—'],
			effect: ['Custody of the accused.', 'Seizure of the items; return and inventory.'],
			trap: ['Saying an arrest warrant expires in 10 days.', 'Serving a search warrant at night without the required assertion.'],
			decisive: 'Life of the warrant: arrest warrants do not expire; search warrants lapse after 10 days.',
			hypo: 'A warrant of arrest received on June 1 is served on July 15 — valid. A search warrant dated June 1 is served on June 15 — void.'
		}
	],
	cases: [
		{
			id: 'pestilos',
			name: 'Pestilos v. Generoso',
			cite: 'G.R. No. 182601, November 10, 2014',
			from: 'Tiu',
			facts: 'After an early-morning altercation in which the complainant was allegedly assaulted, police responded to his call, went to the scene, and on his identification "invited" the petitioners to the station; they were inquested for attempted murder. The petitioners argued that their warrantless arrest was invalid and that they were entitled to a regular preliminary investigation.',
			issue: 'Was the warrantless arrest valid under Sec. 5(b)?',
			ruling: 'Yes. The arrest was a valid hot-pursuit arrest.',
			doctrine: 'Under Sec. 5(b), the arresting officer need not witness the crime; "personal knowledge" refers to facts or circumstances he personally gathered — including information from the victim or witnesses, his own observations and fair inferences — strong enough to create probable cause, within a limited time frame after the offense.',
			reasoning: 'The 2000 Rules added "probable cause" and kept the immediacy element; the officers acted shortly after the incident on facts they gathered at the scene.',
			rule: 'Rule 113, Sec. 5(b); Rule 112, Sec. 6.',
			args: 'The petitioners argued that the police had no personal knowledge because they did not witness the incident; the Court read personal knowledge as knowledge of facts, not of the crime itself.',
			hypo: 'Police arrive 20 minutes after a hit-and-run; the victim\'s companion gives the plate number; police find the car nearby with fresh damage and the driver smelling of liquor. Valid hot pursuit.',
			examQ: 'What does "personal knowledge of facts or circumstances" mean in a hot-pursuit arrest?',
			verify: 'Tiu gives the doctrine and citation; the factual summary above is general. Check the decision for the time gap and details.'
		},
		{
			id: 'go-ca',
			name: 'Go v. Court of Appeals',
			cite: '1992 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Rolito Go allegedly shot Maguan in a traffic altercation. Six days later he went to the police station with his lawyers and was detained. The police had relied on eyewitness statements and a plate number registered to his wife.',
			issue: 'Was there a valid warrantless arrest?',
			ruling: 'No. Six days after the shooting is not "when [the offense] has in fact just been committed," and the officers had no personal knowledge; the information came from others.',
			doctrine: 'A warrantless arrest days after the crime, based on information from witnesses, is not a valid hot-pursuit arrest. The accused, not having been lawfully arrested, was entitled to release and to a regular preliminary investigation.',
			reasoning: 'Neither Sec. 5(a) nor 5(b) applied.',
			rule: 'Rule 113, Sec. 5; Rule 112, Secs. 1 and 6.',
			hypo: 'Police identify a suspect from CCTV three days later and arrest him without a warrant. Invalid; they need a warrant.',
			examQ: 'Is an arrest six days after the crime a valid hot-pursuit arrest?',
			also: ['r112'],
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'valdez',
			name: 'Valdez v. People',
			cite: '2007 (Tiu lists it as People v. Valdez)',
			from: 'Tiu',
			facts: 'A barangay tanod arrested the petitioner after he alighted from a bus, looked around, and allegedly attempted to run when approached.',
			issue: 'Was there a valid in flagrante arrest?',
			ruling: 'No.',
			doctrine: 'Two elements are needed for Sec. 5(a): (1) an overt act indicating the person has just committed, is committing or is attempting a crime; (2) in the presence or view of the arresting officer. Looking around after getting off a bus is natural; attempting to run, by itself, does not give personal knowledge of criminal activity.',
			reasoning: 'Suspicious behavior is not an overt act of a crime.',
			rule: 'Rule 113, Sec. 5(a).',
			hypo: 'A man nervously clutches a bag at a terminal. Without more, police may not arrest him in flagrante; at most, a lawful stop-and-frisk if genuine reasons exist (Rule 126).',
			examQ: 'What are the requisites of a valid in flagrante delicto arrest? Is flight enough?',
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'luz',
			name: 'Luz v. People',
			cite: '2012 (Tiu gives the case name only)',
			from: 'Tiu',
			facts: 'A motorist was flagged down for a traffic violation; while waiting for the citation ticket, items were found on him.',
			issue: 'Was the motorist under arrest while waiting for the ticket?',
			ruling: 'No. The waiting period was not an arrest; there was no intent to take him into custody.',
			doctrine: 'Arrest requires intent on one side to arrest and submission on the other; being flagged down for a traffic violation and waiting for a ticket is "waiting time," not custody.',
			reasoning: 'A traffic violation punished by a fine does not warrant arrest.',
			rule: 'Rule 113, Secs. 1–2.',
			hypo: 'An enforcer stops a jeepney driver for a traffic violation and, while writing a ticket, searches the driver\'s bag. The search cannot be justified as incident to a lawful arrest.',
			examQ: 'Is a motorist flagged down for a traffic violation under arrest?',
			also: ['r115'],
			verify: 'Year and G.R. number not given in Tiu; the case is commonly cited as Luz v. People (2012).'
		},
		{
			id: 'cunanan',
			name: 'People v. Cunanan (and related rulings on waiver)',
			cite: '2015 (Tiu gives the year only); with De la Cruz v. People (2014), Villanueva v. People (2014), People v. Yau (2014), People v. Velasco (2013)',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrines.',
			issue: 'When must the illegality of an arrest be raised, and what are the effects of failing to do so?',
			ruling: 'Before plea; otherwise waived — but the inadmissibility of evidence seized is not waived, and an illegal arrest is not a ground for acquittal.',
			doctrine: 'Objections to the arrest or the acquisition of jurisdiction over the person must be made before plea (Cunanan). Waiver of the illegal arrest is not a waiver of the inadmissibility of evidence seized (De la Cruz; Villanueva). Illegality of arrest is not by itself a ground for acquittal or for setting aside a conviction (Yau; Velasco).',
			reasoning: 'Jurisdiction over the person may be waived; the exclusionary rule protects a separate right.',
			rule: 'Rule 113, Sec. 5; Rule 114, Sec. 26; Rule 117, Secs. 3(c) and 9.',
			hypo: 'An accused illegally arrested pleads not guilty and later objects to the shabu seized from him. The arrest objection is waived; the evidence objection is not.',
			examQ: 'Does the waiver of an illegal arrest also waive the inadmissibility of evidence seized during the arrest?',
			also: ['r117'],
			verify: 'Citations not in Tiu.'
		}
	],
	deadlines: [
		{ ref: 'Rule 113, Sec. 4', act: 'Execute the warrant of arrest', who: 'Head of the office to whom it was delivered', period: '10 days', start: 'Receipt of the warrant', exceptions: 'Warrant remains valid after 10 days', effect: 'Directory; report with reasons for non-execution', kind: 'procedural' },
		{ ref: 'Rule 113, Sec. 4', act: 'Report to the issuing judge', who: 'Officer assigned', period: '10 days', start: 'Expiration of the 10-day execution period', exceptions: 'OCA Circ. 265-2023 reports an amended timing for failed executions', effect: 'Administrative', kind: 'procedural', verify: 'Check the amendment to the body-worn camera rules (A.M. No. 21-06-08-SC)' },
		{ ref: 'Rule 113, Sec. 5, last par.', act: 'Deliver the person arrested without warrant to the nearest station or jail', who: 'Arresting person', period: 'Forthwith', start: 'Arrest', exceptions: '—', effect: 'Then inquest within Art. 125 periods (see Rule 112)', kind: 'custodial' },
		{ ref: '2017 Revised Guidelines, III.6', act: 'Archive the case when the accused remains at large', who: 'Court', period: '6 months', start: 'Delivery of the warrant to the proper peace officer', exceptions: '—', effect: 'Case archived (warrant stays valid)', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'A warrant of arrest expires after 10 days.', right: 'The 10 days is for execution by the officers; the warrant is valid until served or recalled. Search warrants are the ones valid for 10 days.', example: 'Service two months later — valid.' },
		{ wrong: 'An informant\'s tip justifies an in flagrante arrest.', right: 'Not without an overt act in the officer\'s presence (Molina; Laguio).', example: 'Arrest on a tip as the suspect gets off a bus — invalid.' },
		{ wrong: 'Hot pursuit requires the officer to see the crime.', right: 'No; it requires probable cause from personal knowledge of facts, immediately after the crime (Pestilos).', example: 'Officer acts on the victim\'s pointing minutes after.' },
		{ wrong: 'An arrest days later on eyewitness information is hot pursuit.', right: 'No (Go v. CA, six days).', example: '—' },
		{ wrong: 'An illegal arrest voids the trial.', right: 'It is waived if not raised before plea, and is not a ground for acquittal (Cunanan; Yau).', example: 'Conviction stands on independent evidence.' },
		{ wrong: 'Waiving the illegal arrest waives the objection to the evidence seized.', right: 'No (De la Cruz; Villanueva).', example: 'Drugs from an illegal arrest stay inadmissible if objected to.' },
		{ wrong: 'Applying for bail waives the objection to the arrest.', right: 'No, if the objection is raised before plea (Rule 114, Sec. 26).', example: '—' },
		{ wrong: 'An officer may force entry to arrest without announcing.', right: 'He must announce authority and purpose and be refused admittance (Sec. 11).', example: '—' },
		{ wrong: 'A motorist stopped for a traffic violation is under arrest.', right: 'No — "waiting time" (Luz).', example: 'Search during ticketing is not incident to arrest.' },
		{ wrong: 'An arrest may be made only in the day time.', right: 'Any day, any time (Sec. 6).', example: '—' }
	],
	corrections: [
		{ old: 'Rule 113, Sec. 5 refers to "section 7 of Rule 112."', fix: 'After A.M. No. 05-8-26-SC (2005), the inquest provision is Rule 112, Sec. 6.', source: 'Rule 112 as amended' },
		{ old: 'No rules on recording the execution of warrants.', fix: 'Rules on the Use of Body-Worn Cameras in the Execution of Warrants (A.M. No. 21-06-08-SC, 2021): recording devices required when executing arrest warrants; per summaries, non-use does not make the arrest unlawful or evidence inadmissible for arrests, but may result in contempt.', source: 'A.M. No. 21-06-08-SC (2021); OCA Circular No. 265-2023' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Warrantless arrest', q: 'When may a peace officer or private person arrest without a warrant?', a: 'E113.1: in flagrante (Sec. 5[a]); hot pursuit (Sec. 5[b]); escaped prisoner (Sec. 5[c]); accused on bail attempting to leave without permission (Rule 114, Sec. 23); retaking after escape or rescue (Sec. 13).', keys: 'Sec. 5(a)–(c); Rule 114, Sec. 23; Sec. 13' },
		{ cat: 'A', level: 2, topic: 'Requisites', q: 'Give the requisites of a valid in flagrante delicto arrest and of a valid hot pursuit arrest.', a: 'E113.2. In flagrante: (1) overt act showing the person has just committed, is committing or attempting a crime; (2) in the presence or view of the arresting person. Hot pursuit: (1) offense has just been committed; (2) probable cause from personal knowledge of facts or circumstances that the person committed it.', keys: 'overt act; presence; just committed; personal knowledge' },
		{ cat: 'A', level: 3, topic: 'Illegal arrest', q: 'What are the effects of an illegal warrantless arrest?', a: 'E113.4: no jurisdiction over the person (Rule 117, Sec. 3[c]); waived if not raised before plea; bail is no waiver if raised before plea; waiver does not make seized evidence admissible; not a ground for acquittal.', keys: 'Cunanan; De la Cruz; Yau; Rule 114, Sec. 26' },
		{ cat: 'A', level: 2, topic: 'RA 7438', q: 'What are the rights of a person arrested, detained or under custodial investigation under RA 7438?', a: 'E113.5: counsel at all times; information of rights; report read and explained by counsel (else void); confession in writing with counsel (else inadmissible); Art. 125 waiver in writing with counsel (else void); visits. "Invitation" is covered.', keys: 'RA 7438, Sec. 2' },
		{ cat: 'B', level: 3, topic: 'Warrant vs warrantless', q: 'Distinguish arrest with a warrant from warrantless arrest.', a: 'See C113.1.', keys: 'who determines probable cause' },
		{ cat: 'B', level: 3, topic: 'Flagrante vs hot pursuit', q: 'Distinguish an in flagrante delicto arrest from a hot pursuit arrest.', a: 'See C113.2.', keys: 'overt act in presence vs personal knowledge of facts after the act' },
		{ cat: 'B', level: 3, topic: 'Arrest vs search warrant', q: 'Distinguish a warrant of arrest from a search warrant as to issuance, time of service and lifetime.', a: 'See C113.3.', keys: 'personal examination mandatory for search warrant; 10-day life; day time' },
		{ cat: 'C', level: 1, topic: 'Definition', q: 'An arrest may be made only by actual physical restraint of the person.', tf: false, short: 'False. It may also be made by the person\'s submission to the custody of the person making the arrest (Sec. 2).', keys: 'Sec. 2' },
		{ cat: 'C', level: 1, topic: 'Time', q: 'An arrest may be made at any time of the day or night.', tf: true, short: 'True (Sec. 6).', keys: 'Sec. 6' },
		{ cat: 'C', level: 2, topic: 'Warrant', q: 'A warrant of arrest becomes void if not served within ten days from its receipt by the police.', tf: false, short: 'False. The 10 days is the period for the officers to execute and report; the warrant remains valid until served or recalled (Tiu, p. 110).', trap: 'Confusing it with the 10-day life of a search warrant.', keys: 'Sec. 4' },
		{ cat: 'C', level: 2, topic: 'Warrant', q: 'The officer must have the warrant in his possession when he makes the arrest.', tf: false, short: 'False. He need not, but must show it as soon as practicable if the person arrested asks (Sec. 7).', keys: 'Sec. 7' },
		{ cat: 'C', level: 2, topic: 'Private person', q: 'A private person may make a warrantless arrest in the same instances as a peace officer.', tf: true, short: 'True. Sec. 5 applies to "a peace officer or a private person." A private person informs the arrestee of his intention to arrest and the cause (Sec. 9).', keys: 'Sec. 5; Sec. 9' },
		{ cat: 'C', level: 3, topic: 'In flagrante', q: 'A reliable tip from a confidential informant is sufficient to justify an in flagrante delicto arrest.', tf: false, short: 'False. Without an overt act indicative of a crime in the officer\'s presence, a tip is insufficient (People v. Molina; People v. Laguio).', keys: 'overt act; Molina; Laguio' },
		{ cat: 'C', level: 3, topic: 'Hot pursuit', q: 'In a hot pursuit arrest, the arresting officer must have personally witnessed the commission of the crime.', tf: false, short: 'False. He needs probable cause based on personal knowledge of facts or circumstances; he may rely on information from the victim or witnesses gathered at the scene (Pestilos v. Generoso).', keys: 'Pestilos' },
		{ cat: 'C', level: 3, topic: 'Illegal arrest', q: 'The illegality of a warrantless arrest may be raised for the first time on appeal.', tf: false, short: 'False. It must be raised before plea; otherwise it is waived (People v. Cunanan; People v. Palma).', keys: 'before plea; waiver' },
		{ cat: 'C', level: 4, topic: 'Illegal arrest', q: 'An accused who pleaded without objecting to his illegal arrest may no longer object to the admission of the drugs seized from him during that arrest.', tf: false, short: 'False. Waiver of the illegal arrest is not a waiver of the inadmissibility of evidence seized (De la Cruz v. People; Villanueva v. People, 2014).', keys: 'De la Cruz; Villanueva' },
		{ cat: 'C', level: 4, topic: 'Illegal arrest', q: 'An accused whose warrantless arrest is proven illegal must be acquitted.', tf: false, short: 'False. Illegality of arrest is not a ground for acquittal; conviction may rest on other evidence (People v. Yau; People v. Velasco).', keys: 'Yau; Velasco' },
		{ cat: 'C', level: 5, topic: 'Bail', q: 'An accused who applies for bail is deemed to have waived his objection to the legality of his arrest.', tf: false, short: 'False. Under Rule 114, Sec. 26, bail does not bar the challenge, provided it is raised before plea.', keys: 'Rule 114, Sec. 26' },
		{
			cat: 'D', level: 4, topic: 'Hot pursuit', title: 'Arrest the morning after',
			facts: 'At 10 p.m., V is stabbed in a bar. Witnesses tell police the next morning that the assailant was A, a regular customer. At 9 a.m., police go to A\'s house and arrest him without a warrant.',
			q: 'Was the arrest valid?',
			issue: 'Whether an arrest the morning after the offense, on witnesses\' information, is a valid hot-pursuit arrest.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 113, Sec. 5(b): the offense must have "just been committed" and the arresting officer must have probable cause based on personal knowledge of facts or circumstances. Go v. CA (1992): an arrest six days later on witnesses\' statements is invalid; Tiu (citing People v. del Rosario): a day later may lack immediacy.',
				application: 'Eleven hours passed; the police did not respond to the scene and gather facts themselves; they relied on witness accounts given the next morning. Immediacy and personal knowledge are both lacking.',
				conclusion: 'The arrest was illegal; the police should have obtained a warrant. A may move to quash for lack of jurisdiction over his person before plea and is entitled to a regular preliminary investigation.'
			},
			missing: 'If police had arrived at the bar within minutes, received the identification, and found A nearby with a bloodied knife, it would be a valid hot pursuit (Pestilos).',
			keys: 'just committed; personal knowledge; Go v. CA'
		},
		{
			cat: 'D', level: 4, topic: 'In flagrante', title: 'Buy-bust vs. tip',
			facts: 'Case 1: Police set up a buy-bust; the poseur-buyer hands marked money to B and receives a sachet, then signals; B is arrested. Case 2: Police receive a tip that C carries shabu; they wait at a terminal and arrest C as he alights, then search his bag and find shabu.',
			q: 'Are the arrests valid?',
			issue: 'Whether each arrest is a valid in flagrante delicto arrest.',
			alac: {
				answer: 'Case 1: valid. Case 2: invalid.',
				legalBasis: 'Rule 113, Sec. 5(a); Valdez v. People (overt act in the presence of the officer); People v. Molina and People v. Laguio (tip alone insufficient).',
				application: 'In Case 1 the officers witnessed the sale — an overt act in their presence. In Case 2 C did nothing criminal in their view; the arrest rested on the tip alone, and the search was not incident to a lawful arrest.',
				conclusion: 'B\'s arrest is valid; C\'s arrest is illegal and the shabu is inadmissible if timely objected to.'
			},
			keys: 'overt act; buy-bust; tip insufficient'
		},
		{
			cat: 'D', level: 4, topic: 'Forced entry', title: 'Breaking the door',
			facts: 'Officers with a warrant of arrest for D go to his house at midnight. They knock, shout "Police! We have a warrant for D!", hear someone running inside, and receive no answer. They break the door and arrest D in the kitchen.',
			q: 'Was the forced entry lawful?',
			issue: 'Whether officers may break into a house to serve an arrest warrant at night.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Rule 113, Sec. 6 (any time of day or night) and Sec. 11 (may break into any building where the person is or is reasonably believed to be, if refused admittance after announcing authority and purpose).',
				application: 'They had a warrant, announced authority and purpose, and were effectively refused admittance (no answer; flight inside). Night service of an arrest warrant is allowed.',
				conclusion: 'Lawful entry and arrest.'
			},
			trap: 'The night-time limit applies to search warrants, not arrest warrants; and the entry authorizes arrest, not a full search of the house.',
			keys: 'Sec. 6; Sec. 11; announce and refused'
		},
		{
			cat: 'E', level: 5, topic: 'Effects of illegal arrest', title: 'Illegal arrest, bail, plea and evidence',
			facts: 'E is arrested without a warrant on a tip and found with a firearm. He posts bail, then pleads not guilty without raising the legality of his arrest. During trial, when the prosecution offers the firearm, E objects that it was seized during an illegal arrest. After conviction, he argues on appeal that the court never acquired jurisdiction over his person.',
			q: 'Rule on E\'s objections.',
			issue: 'Effects of the failure to raise an illegal arrest before plea on jurisdiction and on the admissibility of evidence.',
			alac: {
				answer: 'The jurisdictional objection fails; the evidentiary objection succeeds.',
				legalBasis: 'Rule 114, Sec. 26 and Rule 117, Sec. 9: objections to the arrest must be raised before plea; People v. Cunanan (2015). De la Cruz v. People and Villanueva v. People (2014): waiver of the illegal arrest is not a waiver of the inadmissibility of evidence seized. Const., Art. III, Sec. 3(2).',
				application: 'E pleaded without raising the arrest, so he submitted to the court\'s jurisdiction. But he timely objected to the firearm at trial; it was seized incident to an arrest made on a tip with no overt act, so it is inadmissible.',
				conclusion: 'The court had jurisdiction over E, but the firearm must be excluded; if it is the corpus delicti, E must be acquitted for insufficiency of evidence — not because of the illegal arrest itself.'
			},
			trap: 'Two different rights: jurisdiction over the person (waivable by plea) and the exclusionary rule (objection at the time of offer).',
			keys: 'Rule 114, Sec. 26; Cunanan; De la Cruz; Villanueva'
		},
		{
			cat: 'E', level: 5, topic: 'Invitation', title: 'An "invitation" to the station',
			facts: 'Police "invite" F, a suspect in a robbery committed the day before, to the station "for questioning." F goes voluntarily. After eight hours of questioning without counsel, F signs a written confession. The police then detain him and refer him for inquest.',
			q: 'Was F arrested? Is the confession admissible? Is inquest proper?',
			issue: 'Whether an invitation is custodial investigation, and the validity of the confession and the inquest.',
			alac: {
				answer: 'F was effectively under custodial investigation; the confession is inadmissible; inquest is improper because there was no lawful warrantless arrest.',
				legalBasis: 'RA 7438, Sec. 2: custodial investigation includes the practice of issuing an "invitation"; an extrajudicial confession must be in writing and signed in the presence of counsel, otherwise inadmissible. Rule 113, Sec. 5; Rule 112, Sec. 6.',
				application: 'The robbery was committed the day before; police had no basis for a hot-pursuit arrest. F\'s "invitation" became custodial investigation without counsel. The detention after the confession is not a lawful warrantless arrest, so inquest cannot replace a preliminary investigation.',
				conclusion: 'Exclude the confession; F should be released and subjected to a regular preliminary investigation (or a warrant obtained).'
			},
			keys: 'RA 7438; invitation; Sec. 5'
		},
		{
			cat: 'E', level: 5, topic: 'Escapee and bail', title: 'Three warrantless re-arrests',
			facts: '(1) G, a detention prisoner awaiting trial, escapes from the city jail; a week later a police officer sees him in a mall and arrests him. (2) H, out on bail, is caught at the airport boarding a flight abroad without the court\'s permission. (3) I, lawfully arrested for theft, is rescued by friends; a barangay tanod pursues and catches him a few minutes later in the next town.',
			q: 'Are the warrantless arrests valid?',
			issue: 'Applicability of the escapee, bail and retaking exceptions.',
			alac: {
				answer: 'All three are valid.',
				legalBasis: 'Rule 113, Sec. 5(c) (escaped prisoner, including one temporarily confined while his case is pending); Rule 114, Sec. 23 (accused on bail attempting to depart without permission); Rule 113, Sec. 13 (any person may immediately pursue and retake a lawfully arrested person who escapes or is rescued, anywhere in the Philippines).',
				application: '(1) G is an escaped detention prisoner — Sec. 5(c) has no immediacy requirement. (2) H attempted to depart without permission. (3) I was immediately pursued after the rescue.',
				conclusion: 'Each arrest is lawful without a warrant.'
			},
			trap: 'Applying the immediacy requirement of hot pursuit to escapees — Sec. 5(c) does not require it; Sec. 13 (retaking) does ("immediately pursue").',
			keys: 'Sec. 5(c); Rule 114, Sec. 23; Sec. 13'
		},
		{ cat: 'F', level: 3, topic: 'Go v. CA', q: 'Why was the arrest of Rolito Go not a valid warrantless arrest? What was the consequence?', a: 'It was made six days after the shooting, so the offense had not "just been committed"; the officers were not present and had no personal knowledge — they relied on eyewitness statements and a plate number. Go was entitled to release and to a regular preliminary investigation.', keys: 'six days; personal knowledge; release; PI' },
		{ cat: 'F', level: 4, topic: 'Pestilos v. Generoso', q: 'How did Pestilos v. Generoso (2014) interpret "personal knowledge of facts or circumstances" in Sec. 5(b)?', a: 'Personal knowledge refers to facts or circumstances the officer personally gathers — his observations, information from the victim or witnesses, and fair inferences — strong enough to create probable cause, within a limited time after the offense. He need not have witnessed the crime.', keys: 'facts personally gathered; probable cause; immediacy' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 113', title: 'Rule 113 integrated — warrant served late, at night, without the warrant in hand',
			facts: 'A warrant for J\'s arrest is received by the police on February 1. They report on February 25 that J could not be located. On April 10 at 11 p.m., an officer who knows of the warrant (but does not have it with him) sees J at a bar and arrests him; J resists, and the officer calls two bystanders to help. At the station, J asks to see the warrant; it is shown to him the next morning. J\'s lawyer is refused entry at 1 a.m.',
			q: 'Identify the issues and resolve each.',
			issue: 'Validity of a warrant served after 10 days, at night, without the warrant in hand; assistance; visits.',
			alac: {
				answer: 'The arrest is valid; the refusal of the lawyer\'s visit is not.',
				legalBasis: 'Rule 113, Sec. 4 (10 days to execute — directory; warrant valid until served); Sec. 6 (any time); Sec. 7 (inform of cause and warrant unless he resists; need not possess the warrant; show it on request as soon as practicable); Sec. 10 (summon assistance); Sec. 14 and RA 7438 (lawyer may visit at any hour).',
				application: 'The February 25 report satisfied Sec. 4; the warrant remained valid. Night arrest is allowed. J resisted, excusing full prior information; the warrant was shown the next morning, as soon as practicable. Bystanders may be summoned. But refusing counsel at 1 a.m. violates Sec. 14 and RA 7438.',
				conclusion: 'The arrest stands; the officers who refused counsel are liable under RA 7438, and any statement taken in counsel\'s absence is inadmissible.'
			},
			keys: 'Secs. 4, 6, 7, 10, 14; RA 7438'
		}
	],
	memorize: [
		'Definition of arrest (Sec. 1) and how made (Sec. 2: restraint or submission; no unnecessary force)',
		'Sec. 4: execute within 10 days; report within 10 days after; warrant valid until served',
		'Sec. 5: in flagrante, hot pursuit, escapee + Rule 114, Sec. 23 and Sec. 13',
		'Requisites of in flagrante (overt act + presence) and hot pursuit (just committed + personal knowledge of facts)',
		'Duty to inform and its exceptions (Secs. 7–9)',
		'Sec. 11: announce authority and purpose; refused admittance; then break in',
		'Effects of illegal arrest: waived if not raised before plea; evidence still excludable; not a ground for acquittal',
		'RA 7438 rights; "invitation" is custodial investigation'
	],
	flashcards: [
		['Define arrest.', 'The taking of a person into custody in order that he may be bound to answer for the commission of an offense.'],
		['Two ways an arrest is made?', 'Actual restraint, or submission to custody.'],
		['Period to execute a warrant?', '10 days from receipt; report within 10 days after. The warrant stays valid.'],
		['Three warrantless arrests in Sec. 5?', 'In flagrante; hot pursuit; escaped prisoner.'],
		['Requisites of in flagrante?', 'Overt act; in the presence or view of the arresting person.'],
		['Requisites of hot pursuit?', 'Offense just committed; probable cause based on personal knowledge of facts or circumstances.'],
		['Is a tip enough for in flagrante?', 'No (Molina; Laguio).'],
		['Must the officer carry the warrant?', 'No; show it on request as soon as practicable.'],
		['When may an officer break into a building?', 'After announcing authority and purpose and being refused admittance.'],
		['Illegal arrest raised for the first time on appeal?', 'Too late — waived.'],
		['Does waiver of the arrest waive objections to the evidence?', 'No.'],
		['Is an illegal arrest a ground for acquittal?', 'No.'],
		['Can an accused on bail be re-arrested without a warrant?', 'Yes, if he attempts to leave the Philippines without the court\'s permission (Rule 114, Sec. 23).'],
		['Who may visit an arrested person at any hour?', 'Any member of the Philippine Bar (Sec. 14).']
	],
	oral: [
		['"When is a warrantless arrest lawful?"', 'Under Rule 113, Sec. 5: in flagrante delicto, when the person commits, is committing or attempts an offense in the arresting person\'s presence; hot pursuit, when an offense has just been committed and he has probable cause from personal knowledge of facts that the person did it; and escaped prisoners. Also an accused on bail who tries to leave the country, and retaking after escape.'],
		['"What is personal knowledge in hot pursuit?"', 'Not knowledge of the crime itself, but facts or circumstances the officer gathered personally — his observations and information from the victim or witnesses at the scene — strong enough to create probable cause, immediately after the offense (Pestilos).'],
		['"Does an illegal arrest invalidate the case?"', 'It affects jurisdiction over the person, which is waived if not raised before plea. It is not a ground for acquittal. But evidence seized during the illegal arrest stays inadmissible if timely objected to.'],
		['"Does a warrant of arrest expire?"', 'No. The ten days in Sec. 4 is for execution and reporting; the warrant remains valid until served or recalled.']
	],
	checklist: [
		'I can define arrest and state how it is made.',
		'I can state the periods for executing and reporting on a warrant and explain why the warrant does not expire.',
		'I can list all lawful warrantless arrests, including the bail and retaking rules.',
		'I can give the requisites of in flagrante and hot pursuit arrests and apply them to tip-based arrests.',
		'I can state the duty to inform and its exceptions.',
		'I can explain when an officer may break into a building.',
		'I can explain the effects of an illegal arrest on jurisdiction, evidence and conviction.',
		'I can list the RA 7438 rights.'
	],
	sheet: [
		'<b>Arrest (Secs. 1–2):</b> custody to answer for an offense; restraint or submission; no unnecessary force.',
		'<b>Warrant (Secs. 3–4, 7):</b> execute within 10 days, report within 10 days after; valid until served; inform of cause and warrant; show on request.',
		'<b>Warrantless (Sec. 5):</b> in flagrante (overt act + presence) · hot pursuit (just committed + personal knowledge of facts) · escapee. Plus bail-jumper leaving PH (Rule 114, Sec. 23) and retaking (Sec. 13).',
		'<b>Tips are not enough</b> for in flagrante; days later is not hot pursuit (Go v. CA).',
		'<b>Entry (Secs. 11–12):</b> announce authority and purpose; refused → break in; may break out.',
		'<b>Illegal arrest:</b> raise before plea or waived; evidence still excludable; not a ground for acquittal; bail is no waiver.',
		'<b>Rights:</b> lawyer visits any hour (Sec. 14); RA 7438 (counsel, confession in writing with counsel, Art. 125 waiver with counsel, "invitation" covered).'
	],
	watchFor: `<strong>Watch for: what the arresting officer personally saw or knew, and when.</strong>
<ul>
<li>Did he see an overt act (in flagrante), or arrive right after and gather facts himself (hot pursuit)? A tip is neither.</li>
<li>How much time passed since the crime?</li>
<li>Was the illegality raised before plea? Is the question about jurisdiction or about evidence?</li>
</ul>`
};
