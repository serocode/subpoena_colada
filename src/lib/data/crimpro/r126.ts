import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 126 — Search and Seizure. */
export const r126: RuleChapter = {
	id: 'r126',
	n: 126,
	title: 'Search and Seizure',
	short: 'R126 Search and Seizure',
	tiu: 'pp. 221–236',
	plain: `A search warrant is a judge's written order, in the name of the People, telling a peace officer to search for specific personal property and bring it to court. It issues only on probable cause for one specific offense, found personally by the judge after examining the applicant and witnesses under oath with searching questions, and it must describe the place and the things particularly. It is served in the daytime (unless the affidavit justifies night service), in the presence of the occupant or two local witnesses, within 10 days. Evidence from an illegal search is inadmissible for any purpose. A warrant is the rule, but there are recognized exceptions — consent, search incident to a lawful arrest, plain view, moving vehicles, customs searches, stop-and-frisk, exigent circumstances, visual checkpoint searches, and regulatory inspections — each strictly construed against the State.`,
	purpose: `To protect people's homes, papers and effects from unreasonable searches, by requiring a neutral judge to decide beforehand whether a search is justified and what may be taken.`,
	stage: `Usually before a criminal action (during investigation), but a warrant may be applied for while the case is pending — then only in the court where it is pending (Sec. 2). Closely linked to arrest (${ruleLink('r113')}), since a lawful arrest permits a search of the person.`,
	questions: [
		'What is a search warrant, and what property may be seized?',
		'Where is the application filed?',
		'What are the requisites for issuing a search warrant?',
		'How is a warrant executed (time, witnesses, receipt, return)?',
		'When is a warrantless search valid?',
		'What is the consequence of an illegal search, and how is it challenged?'
	],
	relations: `Search incident to a lawful arrest (Sec. 13) depends on a valid arrest under ${ruleLink('r113', 'sections', 'Rule 113, Sec. 5')} — the arrest must come first. The judge's personal examination for a search warrant is stricter than the personal evaluation for a warrant of arrest under ${ruleLink('r112', 'sections', 'Rule 112, Sec. 6')} (${caseLink('soliven', 'Soliven')}). A motion to quash a warrant or suppress evidence (Sec. 14) is filed in the court of the criminal case, which may be a different court from the issuing court. Illegally obtained evidence is excluded under Const., Art. III, Sec. 3(2) — but objecting to an illegal arrest before plea (${ruleLink('r117')}) is a separate question from excluding evidence (see ${caseLink('luz', 'Luz v. People')}).`,
	principles: [
		'<b>No search warrant except on probable cause</b>, personally determined by the judge after examination under oath of the complainant and witnesses, particularly describing the place and things (Const., Art. III, Sec. 2; Rule 126, Sec. 4).',
		'<b>One specific offense</b> per warrant — no "scatter-shot" warrants.',
		'<b>Exclusionary rule</b>: evidence from an unreasonable search is inadmissible for any purpose in any proceeding (Art. III, Sec. 3[2]) — but the rule binds the State, not private individuals (People v. Marti).',
		'<b>Warrantless searches are exceptions, strictly construed</b>; probable cause (or, for stop-and-frisk, a genuine reason) is still required; ample time to get a warrant defeats the exception (Aminnudin).',
		'<b>An application for a search warrant is not a criminal action</b>; venue under Sec. 2 is not jurisdictional and may be waived (Pilipinas Shell v. Romars, 2015).'
	],
	sections: [
		{
			n: '1',
			title: 'Search warrant defined',
			text: `"A search warrant is an order in writing issued in the name of the People of the Philippines, signed by a judge and directed to a peace officer, commanding him to search for personal property described therein and bring it before the court."`,
			plain: `A written, judge-signed order, in the People's name, to a peace officer: search for described personal property and bring it to court.`,
			reqs: `(1) In writing; (2) in the name of the People; (3) signed by a judge; (4) directed to a peace officer; (5) commanding a search for described personal property and its production in court.`,
			effect: `A search warrant is a process, akin to a writ of discovery — not a criminal action (Pilipinas Shell v. Romars, 2015).`,
			cases: `${caseLink('pilipinas-shell', 'Pilipinas Shell v. Romars (2015)')}.`,
			trap: `It covers personal property only; real property is not "seized."`
		},
		{
			n: '2',
			title: 'Court where application for search warrant shall be filed',
			text: `An application shall be filed with: "a) Any court within whose territorial jurisdiction a crime was committed. b) For compelling reasons stated in the application, any court within the judicial region where the crime was committed if the place of the commission of the crime is known, or any court within the judicial region where the warrant shall be enforced. However, if the criminal action has already been filed, the application shall only be made in the court where the criminal action is pending."`,
			plain: `File where the crime was committed; for compelling reasons stated in the application, any court in the judicial region of the crime or of the place of enforcement. Once a criminal case is filed, only in the court where it is pending.`,
			reqs: `For (b): compelling reasons stated in the application.`,
			who: `Applicant (usually a law enforcement officer); judge.`,
			exceptions: `Special courts with warrants enforceable outside their territory: (1) Executive and Vice-Executive Judges of the Manila and Quezon City RTCs, on applications by the PNP, NBI and certain task forces personally endorsed by their heads, for heinous crimes, illegal gambling, illegal firearms, dangerous drugs, IP Code, AMLA and customs violations (A.M. No. 99-10-09-SC; A.M. No. 03-8-02-SC, Sec. 12 — expressly an exception to Rule 126, Sec. 2; Marimla v. People, 2009); (2) Special Commercial Courts of Quezon City, Manila, Makati and Pasig for IP writs of search and seizure, enforceable nationwide (A.M. No. 10-3-10-SC); (3) Cybercrime Courts of Quezon City, Manila, Makati and Pasig for RA 10175 warrants, enforceable nationwide (A.M. No. 03-03-03-SC, as amended).`,
			effect: `Improper venue is not jurisdictional because the application is not a criminal action; it is waived if not raised in the first motion to quash (omnibus motion rule) (Pilipinas Shell v. Romars, 2015).`,
			cases: `${caseLink('pilipinas-shell', 'Pilipinas Shell v. Romars (2015)')}; Marimla v. People (2009, in Tiu).`,
			hypo: `Drugs are being sold from a house in Cebu City. Police apply in a Cebu City RTC — proper under (a). If they fear a leak in Cebu City, they may apply in any RTC in Region VII, stating that reason (b).`,
			trap: `Once the criminal case is filed, the only proper court is the one where it is pending — not the court of the place of enforcement.`,
			update: `The Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC, effective 2018) created specific warrants for computer data — to disclose, intercept, search, seize and examine — issued by designated cybercrime courts.`,
			verify: `Check A.M. No. 17-11-03-SC for the names, requisites and periods of each cybercrime warrant before citing them.`
		},
		{
			n: '3',
			title: 'Personal property to be seized',
			text: `A search warrant may be issued for the search and seizure of personal property: "(a) Subject of the offense; (b) Stolen or embezzled and other proceeds, or fruits of the offense; or (c) Used or intended to be used as the means of committing an offense."`,
			plain: `Three kinds: the subject of the offense (e.g., drugs, unlicensed guns), its fruits (stolen goods, proceeds), and its means (tools, equipment).`,
			effect: `Ownership is irrelevant: it is enough that the person against whom the warrant is directed has control or possession of the property (Yao v. People, 2007).`,
			cases: `${caseLink('yao', 'Yao v. People (2007)')}.`,
			hypo: `A warrant for "LPG cylinders bearing Petron marks illegally refilled, and the refilling machines" covers subject (cylinders) and means (machines), even if the cylinders belong to a separate corporation controlled by the respondents.`,
			trap: `It is not required that the property belong to the person named in the warrant.`
		},
		{
			n: '4',
			title: 'Requisites for issuing search warrant',
			text: `"A search warrant shall not issue except upon probable cause in connection with one specific offense to be determined personally by the judge after examination under oath or affirmation of the complainant and the witnesses he may produce, and particularly describing the place to be searched and the things to be seized which may be anywhere in the Philippines."`,
			plain: `Probable cause, for one specific offense, found personally by the judge after questioning the applicant and witnesses under oath, and a particular description of the place and things.`,
			reqs: `(1) Probable cause; (2) in connection with one specific offense; (3) determined personally by the judge; (4) after examination under oath or affirmation of the complainant and witnesses; (5) particular description of the place to be searched and the things to be seized.`,
			who: `Judge; applicant; witnesses.`,
			effect: `A warrant that does not strictly comply is void; nothing seized under it is admissible (People v. Veloso, 1925, in Tiu; Const., Art. III, Sec. 3[2]).`,
			cases: `Probable cause: Burgos v. Chief of Staff (1984), ${caseLink('microsoft-maxicorp', 'Microsoft v. Maxicorp (2004)')}, Del Castillo v. People (2012). One offense: ${caseLink('stonehill', 'Stonehill v. Diokno (1967)')}, Vallejo v. CA (2004). Particularity: ${caseLink('uy-unifish', 'Uy v. BIR (2000)')}, ${caseLink('francisco', 'People v. Francisco (2002)')}, ${caseLink('yao', 'Yao v. People (2007)')}.`,
			hypo: `A warrant authorizes a search for "evidence of violations of the Dangerous Drugs Act and the Firearms Law." It is a scatter-shot warrant — void for covering more than one specific offense.`,
			trap: `Probable cause for a search warrant asks whether an offense was committed and whether the things connected with it are in the place to be searched — not who committed it.`
		},
		{
			n: '5',
			title: 'Examination of complainant; record',
			text: `"The judge must, before issuing the warrant, personally examine in the form of searching questions and answers, in writing and under oath, the complainant and the witnesses he may produce on facts personally known to them and attach to the record their sworn statements, together with the affidavits submitted."`,
			plain: `The judge himself asks probing questions, in writing and under oath, about what the applicant and witnesses personally know, and attaches their sworn statements and affidavits to the record.`,
			reqs: `(1) Personal examination by the judge; (2) searching questions and answers; (3) in writing and under oath; (4) on facts personally known to the deponents; (5) sworn statements and affidavits attached to the record.`,
			effect: `No personal examination, or only leading, routine or pre-printed questions → no valid finding of probable cause; issuance is grave abuse of discretion (Bache v. Ruiz, 1971; Silva v. Presiding Judge, 1991; Yao, 2007). Without personal knowledge, the warrant is a nullity (Sony Music v. Español, 2005). The test of the affidavit: whether it was drawn so that perjury could be charged on it (Alvarez v. CFI, 1937).`,
			cases: `${caseLink('bache', 'Bache & Co. v. Ruiz (1971)')}; Silva v. Presiding Judge (1991); ${caseLink('yao', 'Yao v. People (2007)')}; contrast ${caseLink('soliven', 'Soliven v. Makasiar (1988)')} for warrants of arrest.`,
			hypo: `The applicant's witness fills in blanks on a mimeographed form; the judge asks only "Are these statements true?" The warrant is void (Silva).`,
			trap: `For a warrant of arrest, the judge need not personally examine the complainant and witnesses; personal evaluation of the prosecutor's report and supporting documents suffices (Soliven). For a search warrant, personal examination by searching questions is required (Tiu, p. 227).`
		},
		{
			n: '6',
			title: 'Issuance and form of search warrant',
			text: `"If the judge is satisfied of the existence of facts upon which the application is based or that there is probable cause to believe that they exist, he shall issue the warrant, which must be substantially in the form prescribed by these Rules."`,
			plain: `Satisfied of probable cause, the judge issues the warrant in substantially the prescribed form.`,
			effect: `Probable cause is less than proof that would justify conviction but more than bare suspicion; the judge uses a flexible "totality of the circumstances" standard (Del Castillo, 2012; Microsoft v. Maxicorp, 2004).`
		},
		{
			n: '7',
			title: 'Right to break door or window to effect search',
			text: `"The officer, if refused admittance to the place of directed search after giving notice of his purpose and authority, may break open any outer or inner door or window of a house or any part of a house or anything therein to execute the warrant or liberate himself or any person lawfully aiding him when unlawfully detained therein."`,
			plain: `Knock and announce first; if refused entry, the officer may break in — and break out if unlawfully detained inside.`,
			reqs: `(1) Notice of purpose and authority; (2) refusal of admittance.`,
			trap: `Compare Rule 113, Secs. 11–12 (breaking in to make an arrest). Both require announcement and refusal first.`
		},
		{
			n: '8',
			title: 'Search of house, room, or premise to be made in presence of two witnesses',
			text: `"No search of a house, room, or any other premise shall be made except in the presence of the lawful occupant thereof or any member of his family or in the absence of the latter, two witnesses of sufficient age and discretion residing in the same locality."`,
			plain: `The search is done in front of the occupant or a family member — or, if none is present, two adult witnesses who live in the same locality.`,
			reqs: `Presence of (1) the lawful occupant or a member of his family; or (2) in their absence, two witnesses of sufficient age and discretion residing in the same locality.`,
			effect: `The witness requirement guards against planting of evidence. A search conducted without the required witnesses is unreasonable, and what it yields may be excluded.`,
			hypo: `Police make the occupants wait outside while two officers search the bedroom alone. The occupants were "present" at the premises but not at the search — the requirement is not met.`,
			trap: `The two-witness alternative applies only in the absence of the occupant and his family; the witnesses must reside in the same locality, so barangay residents, not fellow officers.`,
			verify: `The effect of a Sec. 8 violation on admissibility is stated from general principle; cite a decision before relying on it.`
		},
		{
			n: '9',
			title: 'Time of making search',
			text: `"The warrant must direct that it be served in the day time, unless the affidavit asserts that the property is on the person or in the place ordered to be searched, in which case a direction may be inserted that it be served at any time of the day or night."`,
			plain: `Daytime only, unless the affidavit says the property is on the person or in the place — then the warrant may allow service day or night.`,
			hypo: `The warrant says nothing about night service; police serve it at 11:00 p.m. The search is irregular.`
		},
		{
			n: '10',
			title: 'Validity of search warrant',
			text: `"A search warrant shall be valid for ten (10) days from its date. Thereafter it shall be void."`,
			plain: `Ten days from its date, then void.`,
			when: `10 days from the date of the warrant.`,
			trap: `A warrant of arrest has no expiry (Rule 113, Sec. 4); a search warrant does. Compare also: once a search warrant is executed and the property seized, it cannot be used again for another search within the 10 days.`,
			verify: `The rule that a search warrant, once served, is spent even within the 10 days comes from jurisprudence not in Tiu; check before citing a case.`
		},
		{
			n: '11',
			title: 'Receipt for the property seized',
			text: `"The officer seizing property under the warrant must give a detailed receipt for the same to the lawful occupant of the premises in whose presence the search and seizure were made, or in the absence of such occupant, must, in the presence of at least two witnesses of sufficient age and discretion residing in the same locality, leave a receipt in the place in which he found the seized property."`,
			plain: `Give a detailed receipt to the occupant — or, if absent, leave it at the place, before two local witnesses.`
		},
		{
			n: '12',
			title: 'Delivery of property and inventory thereof to court; return and proceedings thereon',
			text: `"(a) The officer must forthwith deliver the property seized to the judge who issued the warrant, together with a true inventory thereof duly verified under oath. (b) Ten (10) days after issuance of the search warrant, the issuing judge shall ascertain if the return has been made, and if none, shall summon the person to whom the warrant was issued and require him to explain why no return was made. If the return has been made, the judge shall ascertain whether section 11 of this Rule has been complied with and shall require that the property seized be delivered to him. The judge shall see to it that subsection (a) hereof has been complied with. (c) The return on the search warrant shall be filed and kept by the custodian of the log book on search warrants who shall enter therein the date of the return, the result, and other actions of the judge. A violation of this section shall constitute contempt of court."`,
			plain: `Deliver the seized property and a sworn inventory to the issuing judge at once. After 10 days, the judge checks for a return and compliance with the receipt rule. Violations are contempt.`,
			when: `Forthwith (delivery); 10 days after issuance (judge checks).`,
			effect: `Contempt of court for violations.`,
			update: `The Rules on the Use of Body-Worn Cameras in the Execution of Warrants (A.M. No. 21-06-08-SC, 2021) also cover search warrants: per summaries, officers record the search with body-worn and alternative recording devices and submit the recordings to the issuing court.`,
			verify: `Read A.M. No. 21-06-08-SC for the effect of failing to record a search on the admissibility of the evidence — summaries differ, and Rule 113 in this reviewer treats arrests separately.`
		},
		{
			n: '13',
			title: 'Search incident to lawful arrest',
			text: `"A person lawfully arrested may be searched for dangerous weapons or anything which may have been used or constitute proof in the commission of an offense without a search warrant."`,
			plain: `After a lawful arrest, the officer may search the person for weapons and evidence of the offense — no warrant needed.`,
			reqs: `(1) The arrest is lawful (with a warrant, or within Rule 113, Sec. 5); (2) it precedes the search; (3) the search is limited to the person and the area within his immediate control, at the place of arrest; (4) it is for weapons or evidence.`,
			effect: `Justified by the need to disarm the suspect and to preserve evidence (Luz v. People, 2012). The process cannot be reversed — a search cannot create the grounds for the arrest (People v. De Los Reyes, 2011).`,
			cases: `${caseLink('nolasco', 'Nolasco v. Paño (1987)')}; ${caseLink('luz', 'Luz v. People (2012)')}.`,
			hypo: `A is lawfully arrested in flagrante on a street corner. Police then go to his house three blocks away and search it. The house search is not incident to the arrest (Nolasco).`,
			trap: `If the arrest is invalid (e.g., a tip only, no overt act), the search falls with it — even if contraband is found.`
		},
		{
			n: '14',
			title: 'Motion to quash a search warrant or to suppress evidence; where to file',
			text: `"A motion to quash a search warrant and/or to suppress evidence obtained thereby may be filed in and acted upon only by the court where the action has been instituted. If no criminal action has been instituted, the motion may be filed in and resolved by the court that issued the search warrant. However, if such court failed to resolve the motion and a criminal case is subsequent filed in another court, the motion shall be resolved by the latter court."`,
			plain: `Case filed → only the court of the case. No case yet → the issuing court; but if it hasn't ruled when a case is filed elsewhere, the trial court resolves it.`,
			who: `The person whose right was violated (the right is personal — Stonehill).`,
			exceptions: `IP cases: if no criminal complaint is filed within 60 days from issuance, the issuing court may, on motion, quash the warrant and order return of the goods (A.M. No. 10-3-10-SC, Rule 11, Sec. 4).`,
			effect: `Quashal makes the seized items inadmissible; contraband (illegal per se) is not returned.`,
			hypo: `A Makati RTC issues a warrant; the drug case is later filed in a Pasig RTC. A motion to quash is filed in Makati but not resolved. The Pasig RTC resolves it.`,
			trap: `The objection to the warrant's venue must be raised in the first motion to quash, or it is waived (omnibus motion rule; Pilipinas Shell).`
		}
	],
	reqs: [
		{
			name: 'Probable cause personally determined after searching examination (Secs. 4–5)',
			source: 'Const., Art. III, Sec. 2; Rule 126, Secs. 4–5',
			what: 'Facts and circumstances leading a reasonably prudent person to believe an offense was committed and that the things sought are in the place to be searched, found by the judge after personally examining the applicant and witnesses with searching questions, in writing and under oath, on facts of their personal knowledge.',
			who: 'The issuing judge (not the clerk, not the applicant).',
			when: 'Before issuance.',
			form: 'Written questions and answers; sworn statements and affidavits attached to the record.',
			missing: 'The warrant is void; items seized are inadmissible (Bache; Silva; Sony Music v. Español).',
			defect: 'Not waivable',
			defectNote: 'A constitutional requisite. (The right to object to a search itself may be waived — e.g., by valid consent — but a warrant without probable cause is not cured by the State\'s good faith.)'
		},
		{
			name: 'One specific offense (Sec. 4)',
			source: 'Rule 126, Sec. 4',
			what: 'The warrant must relate to a single specific offense.',
			who: 'Judge.',
			when: 'At issuance.',
			missing: 'A scatter-shot warrant for several offenses is void (Stonehill; Vallejo).',
			defect: 'Not waivable',
			defectNote: 'A warrant covering several offenses gives the officer the discretion the Constitution forbids.'
		},
		{
			name: 'Particular description of the place and things (Sec. 4)',
			source: 'Const., Art. III, Sec. 2; Rule 126, Sec. 4',
			what: 'A description that points out the place to the exclusion of all others and, on inquiry, leads the officers unerringly to it; things described as specifically as the circumstances ordinarily allow.',
			who: 'Judge (only the judge, in the warrant itself, may particularize the place — Francisco).',
			when: 'At issuance.',
			missing: 'A general warrant is void. A partly general warrant is void only as to the items not particularly described — the warrant is severable (Uy v. BIR; Microsoft v. Maxicorp).',
			defect: 'Depends on the defect',
			defectNote: 'Wholly general: void. Partly general: severable. Wrong owner\'s name or minor address error: not fatal if the description otherwise leaves the officer no discretion (Uy v. BIR; Yao).'
		},
		{
			name: 'Valid search incident to arrest (Sec. 13)',
			source: 'Rule 126, Sec. 13; Rule 113, Sec. 5',
			what: 'A lawful arrest first, then a search of the person and the area within immediate control, for weapons and evidence.',
			who: 'Arresting officer.',
			when: 'Contemporaneous with, and after, the arrest.',
			where: 'The place of arrest only (Nolasco).',
			missing: 'The search is illegal; evidence excluded.',
			defect: 'Depends on the defect',
			defectNote: 'The illegality of the arrest is waived if not raised before plea, but the waiver does not make illegally seized evidence admissible (see Rule 113 and Luz).'
		}
	],
	enums: [
		{
			id: 'E126.1',
			name: 'Personal property that may be seized',
			source: 'Rule 126, Sec. 3',
			kind: 'rule',
			memorize: true,
			lead: 'A search warrant may issue for personal property that is',
			items: [
				{ t: 'Subject of the offense', d: 'The thing whose possession or trade is the crime.', s: 'subject of the offense', x: 'Shabu; an unlicensed firearm.' },
				{ t: 'Stolen or embezzled and other proceeds, or fruits of the offense', d: 'What the crime produced.', s: 'proceeds or fruits', x: 'Stolen jewelry; cash from a robbery.' },
				{ t: 'Used or intended to be used as the means of committing an offense', d: 'The tools of the crime.', s: 'means of committing the offense', x: 'Counterfeiting plates; LPG refilling machines.' }
			],
			memory: '<b>S-F-M</b>: Subject · Fruits · Means.',
			question: 'What personal property may be the subject of a search warrant?'
		},
		{
			id: 'E126.2',
			name: 'Requisites for the issuance of a search warrant',
			source: 'Const., Art. III, Sec. 2; Rule 126, Secs. 4–5; Tiu, p. 225',
			kind: 'rule',
			memorize: true,
			lead: 'A search warrant issues only upon',
			items: [
				{ t: 'Probable cause', d: 'Facts that would lead a reasonably discreet and prudent person to believe an offense was committed and the objects sought are in the place to be searched.', s: 'probable cause' },
				{ t: 'In connection with one specific offense', d: 'No scatter-shot warrants.', s: 'one specific offense' },
				{ t: 'Determined personally by the judge', d: 'Not by the applicant or anyone else.', s: 'personally determined by the judge' },
				{ t: 'After examination under oath or affirmation of the complainant and witnesses, by searching questions and answers in writing', d: 'On facts personally known to them; sworn statements attached to the record (Sec. 5).', s: 'searching examination under oath' },
				{ t: 'Particularly describing the place to be searched and the things to be seized', d: 'Leaving the officer no discretion.', s: 'particular description' }
			],
			memory: '<b>P-O-P-E-D</b>: Probable cause · One offense · Personally · Examination · Description.',
			question: 'What are the requisites for the issuance of a valid search warrant?'
		},
		{
			id: 'E126.3',
			name: 'When the things to be seized are particularly described',
			source: 'Bache & Co. v. Ruiz (1971), in Tiu, p. 228',
			kind: 'case',
			lead: 'Things are particularly described when',
			items: [
				{ t: 'The description is as specific as the circumstances will ordinarily allow', d: 'Technical precision is not required; generic terms are acceptable only when nothing more specific is available (Uy v. BIR).', s: 'as specific as circumstances allow' },
				{ t: 'The description expresses a conclusion of fact, not of law, to guide the officer', d: '"Shabu" is factual; "property used in violation of law" is a legal conclusion.', s: 'conclusion of fact, not law' },
				{ t: 'The things described are limited to those bearing direct relation to the offense', d: 'Prevents a roving commission.', s: 'directly related to the offense' }
			],
			tip: 'These are alternative tests ("or"), not cumulative requisites, in the way Bache states them — but answer by showing the description passes all three.',
			question: 'When does a search warrant particularly describe the things to be seized?'
		},
		{
			id: 'E126.4',
			name: 'Recognized warrantless searches',
			source: 'Tiu, p. 230 (from jurisprudence)',
			kind: 'case',
			memorize: true,
			lead: 'The recognized exceptions to the warrant requirement are',
			items: [
				{ t: 'Consented search (express or implied waiver)', d: 'The right exists; the person knows of it; he actually intends to relinquish it. Consent must be voluntary and proved by clear and positive evidence (Luz; Aruta).', s: 'consent' },
				{ t: 'Search incident to a lawful arrest', d: 'Arrest first; search the person and the area of immediate control (Sec. 13; Nolasco).', s: 'incident to lawful arrest' },
				{ t: 'Plain view', d: 'Prior lawful intrusion or position; inadvertent discovery; immediately apparent illegality (People v. Fajardo, 2011).', s: 'plain view' },
				{ t: 'Search of a moving vehicle', d: 'The vehicle is moving (mobile) and there is probable cause (Papa v. Mago; Lo Ho Wing; Sapla).', s: 'moving vehicle' },
				{ t: 'Customs search', d: 'By persons authorized under customs laws; not in a dwelling; reasonable cause to suspect dutiable or prohibited articles (Papa v. Mago; People v. CFI of Rizal).', s: 'customs search' },
				{ t: 'Stop and frisk', d: 'A genuine reason, from the officer\'s experience and the surroundings, to believe the person carries weapons or contraband — more than a hunch (Malacat; Esquillo; Cogaed).', s: 'stop and frisk' },
				{ t: 'Exigent and emergency circumstances', d: 'Urgency that makes getting a warrant impracticable (People v. De Gracia — coup, courts closed).', s: 'exigent circumstances' },
				{ t: 'Visual search at checkpoints', d: 'Routine, brief, visual only; a fuller search needs probable cause (Valmonte v. De Villa; Aniag; Escaño).', s: 'checkpoint (visual only)' },
				{ t: 'Inspection of buildings and premises for fire, sanitary and building regulations', d: 'Administrative inspections under police power.', s: 'regulatory inspections' },
				{ t: 'Searches of vessels and aircraft for violations of fishery, immigration and customs laws', d: 'Mobility and the State\'s border interests.', s: 'vessels and aircraft' }
			],
			exceptions: 'All are strictly construed against the State; probable cause (or, for stop-and-frisk, a genuine reason) is still required; and the exception fails if the authorities had ample time to get a warrant (Aminnudin; Racho; Veroy v. Layague; MHP Garments).',
			memory: '<b>"C-I-P-M-C-S-E-V-I-V"</b>: Consent · Incident to arrest · Plain view · Moving vehicle · Customs · Stop-and-frisk · Exigency · Visual checkpoint · Inspection · Vessels.',
			tip: 'Add public-transport and port security searches (Saluday v. People, 2018; Dela Cruz v. People, 2016) as later-recognized reasonable searches, labeled as such.',
			question: 'Enumerate the recognized exceptions to the requirement of a search warrant and briefly explain each.'
		},
		{
			id: 'E126.5',
			name: 'Requisites of the plain view doctrine',
			source: 'People v. Fajardo (2011), in Tiu, p. 233',
			kind: 'case',
			memorize: true,
			lead: 'Plain view applies when',
			items: [
				{ t: 'The officer has a prior justification for an intrusion, or is in a position from which he can view the area', d: 'He must be lawfully where he is.', s: 'lawful prior intrusion or position' },
				{ t: 'The discovery is inadvertent', d: 'He was not looking for it.', s: 'inadvertent discovery' },
				{ t: 'It is immediately apparent that the item may be evidence of a crime, contraband or otherwise subject to seizure', d: 'No further search or manipulation needed to know what it is.', s: 'immediately apparent' }
			],
			question: 'What are the requisites of a valid seizure under the plain view doctrine?'
		},
		{
			id: 'E126.6',
			name: 'Requisites of a valid waiver of the right against unreasonable search',
			source: 'Tiu, p. 231; Luz v. People (2012); People v. Aruta (1998)',
			kind: 'case',
			lead: 'A valid waiver requires that',
			items: [
				{ t: 'The right exists', d: 'There must be a right to waive.', s: 'right exists' },
				{ t: 'The person has knowledge, actual or constructive, of the right', d: 'He knows he may refuse.', s: 'knowledge of the right' },
				{ t: 'He has an actual intention to relinquish it', d: 'Unequivocal, specific, intelligently given, free of duress or coercion; the State proves it by clear and positive evidence; silence or passive submission is not consent (Barros; Roan v. Gonzales).', s: 'actual intention to relinquish' }
			],
			tip: 'Luz lists factors for voluntariness: age; public or secluded place; objection or passivity; education and intelligence; coercive police procedures; belief that nothing would be found; nature of questioning; environment; vulnerable subjective state.',
			question: 'When is consent to a warrantless search valid?'
		}
	],
	comparisons: [
		{
			id: 'C126.1',
			title: 'Search warrant vs. warrant of arrest',
			a: 'Search warrant',
			b: 'Warrant of arrest',
			meaning: ['Order to search for and seize personal property.', 'Order to take a person into custody.'],
			basis: ['Const., Art. III, Sec. 2; Rule 126', 'Const., Art. III, Sec. 2; Rules 112–113'],
			who: ['Judge, on application of a peace officer or other applicant.', 'Judge, on the information filed by the prosecutor.'],
			when: ['Before or during the case.', 'After the information is filed.'],
			reqs: ['Probable cause that an offense was committed and the things are in the place; judge personally examines applicant and witnesses by searching questions.', 'Probable cause that an offense was committed and the accused probably committed it; judge personally evaluates the prosecutor\'s resolution and evidence (Soliven) — examination optional.'],
			time: ['Valid for 10 days (Sec. 10).', 'No expiry; executed within 10 days with a report (Rule 113, Sec. 4).'],
			exceptions: ['Warrantless searches (E126.4).', 'Warrantless arrests (Rule 113, Sec. 5).'],
			effect: ['Illegally seized evidence inadmissible.', 'Illegal arrest waived if not raised before plea; evidence still excludable.'],
			trap: ['Thinking evaluation of documents suffices for a search warrant.', 'Thinking the judge must personally examine witnesses for a warrant of arrest.'],
			decisive: 'The judge\'s duty: searching personal examination for a search warrant; personal evaluation of the record suffices for a warrant of arrest.',
			hypo: 'A judge issues a search warrant after reading the police affidavits without questioning anyone. The warrant is void, though the same procedure would have been enough for a warrant of arrest.'
		},
		{
			id: 'C126.2',
			title: 'Search incident to lawful arrest vs. stop and frisk',
			a: 'Search incident to lawful arrest',
			b: 'Stop and frisk',
			meaning: ['Full search of the arrested person and the area of immediate control.', 'Limited pat-down of outer clothing of a person behaving suspiciously.'],
			basis: ['Rule 126, Sec. 13', 'Terry v. Ohio; Posadas; Malacat; Esquillo; Manalili'],
			who: ['Arresting officer.', 'Police officer who identifies himself.'],
			when: ['After a lawful arrest.', 'Before any arrest; the search precedes the arrest.'],
			reqs: ['A valid arrest first (with warrant or under Rule 113, Sec. 5).', 'A genuine reason, from experience and surroundings, to believe the person is armed or carries contraband — more than suspicion, less than probable cause; more than one suspicious circumstance (Cogaed).'],
			time: ['Contemporaneous with the arrest.', 'Brief.'],
			exceptions: ['Not a remote place (Nolasco).', 'A tip alone is not enough (Cogaed; Sapla).'],
			effect: ['Weapons and evidence admissible.', 'Weapons (and, by Manalili, drugs) found may justify an arrest.'],
			trap: ['Reversing the order: search first to justify the arrest.', 'Treating a hunch ("eyes moving fast") as a genuine reason (Malacat).'],
			decisive: 'Sequence and threshold: incident-to-arrest needs a lawful arrest first; stop-and-frisk comes before arrest and needs a genuine reason.',
			hypo: 'Police see a man at night peering into parked cars, a bulge at his waist, fleeing when approached. A pat-down is a valid stop-and-frisk; if a gun is found, the arrest follows.'
		},
		{
			id: 'C126.3',
			title: 'Checkpoint visual search vs. search of a moving vehicle',
			a: 'Checkpoint (visual)',
			b: 'Moving vehicle (extensive)',
			meaning: ['Routine stop with brief questions and a look inside.', 'Full search of the vehicle and its contents.'],
			basis: ['Valmonte v. De Villa (1989); Aniag (1994); Escaño (2000)', 'Papa v. Mago (1968); Lo Ho Wing (1991); Aruta (1998); Sapla (2020)'],
			who: ['Police or military at a fixed, regularized checkpoint.', 'Police with probable cause.'],
			when: ['Any time, without prior announcement.', 'When the vehicle is mobile and probable cause exists.'],
			reqs: ['Visual only; no body search; least intrusive.', 'Probable cause — a tip alone does not suffice (Sapla).'],
			time: ['Brief.', '—'],
			exceptions: ['Becomes a search requiring probable cause once it goes beyond visual.', 'Consent may substitute.'],
			effect: ['Valid if visual.', 'Valid only with probable cause.'],
			trap: ['Opening bags at a routine checkpoint without probable cause.', 'Relying on an anonymous text alone.'],
			decisive: 'Intrusiveness: a look is a checkpoint; opening, rummaging or a body search is a vehicle search needing probable cause.',
			hypo: 'At a checkpoint, a soldier shines a flashlight inside a car and sees nothing; he then orders the trunk opened. Without probable cause or consent, the trunk search is invalid (Aniag).'
		}
	],
	cases: [
		{
			id: 'pilipinas-shell',
			name: 'Pilipinas Shell Petroleum Corp. v. Romars International Gases Corp.',
			cite: 'G.R. No. 189669, February 16, 2015',
			from: 'Tiu',
			facts: 'Search warrants were obtained against a respondent for unauthorized refilling of LPG cylinders, in a court outside the place of the alleged offense. The respondent later sought to quash them for improper venue.',
			issue: 'Is the venue rule in Rule 126, Sec. 2 jurisdictional?',
			ruling: 'No; the objection was waived.',
			doctrine: 'An application for a search warrant is not a criminal action but a special criminal process; the rule that venue is jurisdictional in criminal cases does not apply, and improper venue is waived if not raised under the omnibus motion rule.',
			reasoning: 'A warrant is a process akin to a writ of discovery, issued in a court\'s ancillary jurisdiction.',
			rule: 'Rule 126, Secs. 1, 2, 14.',
			hypo: 'A respondent files a motion to quash on lack of probable cause only, then a second motion on venue. The venue objection is waived.',
			examQ: 'Is improper venue in a search warrant application a jurisdictional defect?',
			verify: 'Facts summarized generally from the doctrine Tiu quotes.'
		},
		{
			id: 'bache',
			name: 'Bache & Co. (Phil.), Inc. v. Ruiz',
			cite: '1971 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The application and the witness\'s printed-form deposition were sworn before the judge, but the judge asked no questions; the deputy clerk had examined the witness, and the judge only listened to the stenographer read her notes, warned against perjury and administered the oath.',
			issue: 'Was there a personal examination by the judge?',
			ruling: 'No; the warrant was void.',
			doctrine: 'The Constitution and the Rules require the judge himself to examine the complainant and witnesses; examination by the clerk is not enough. Things to be seized are particularly described when the description is as specific as circumstances allow, expresses a conclusion of fact, or is limited to things directly related to the offense.',
			reasoning: 'The framers deliberately made personal examination the issuing judge\'s duty, despite the time it takes.',
			rule: 'Rule 126, Secs. 4–5.',
			hypo: 'A judge delegates the questioning of witnesses to his branch clerk and signs the warrant. Void.',
			examQ: 'May the judge delegate the examination of the applicant\'s witnesses to the clerk of court?'
		},
		{
			id: 'yao',
			name: 'Yao v. People',
			cite: 'G.R. No. 168306, June 19, 2007',
			from: 'Tiu',
			facts: 'Search warrants were issued against persons engaged in refilling LPG cylinders bearing Petron and Shell marks; they argued the warrants did not describe the place particularly and that the seized items belonged to a separate corporation.',
			issue: 'Were the warrants valid?',
			ruling: 'Yes.',
			doctrine: '(1) Searching questions must be probing and exhaustive, not routine or pro forma. (2) A description of the place is sufficient if the officer can, with reasonable effort, identify it; the executing officer\'s prior knowledge (especially as affiant) is relevant. (3) Things need only be substantially similar to those described as a class. (4) Ownership is immaterial; control or possession suffices.',
			reasoning: 'The Constitution requires reasonable particularity, not technical precision.',
			rule: 'Rule 126, Secs. 3–5.',
			hypo: 'A warrant names the right compound but the wrong owner; the executing officer was the affiant and knew the compound. Valid.',
			examQ: 'Must the property to be seized be owned by the person against whom the warrant is directed?'
		},
		{
			id: 'microsoft-maxicorp',
			name: 'Microsoft Corp. v. Maxicorp, Inc.',
			cite: '2004 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Search warrants were issued for counterfeit software and related items; some items were described generally.',
			issue: 'Was there probable cause, and did the general description of some items void the whole warrant?',
			ruling: 'Probable cause existed; the warrant was valid as to the items particularly described.',
			doctrine: 'Probable cause concerns probability, not certainty; it is judged by the standards of a reasonably prudent person. A partially defective warrant remains valid as to the items specifically described; a warrant is severable.',
			reasoning: 'No law requires nullifying a warrant that is particular as to some items.',
			rule: 'Rule 126, Secs. 4, 6.',
			hypo: 'A warrant lists "pirated DVDs of [named titles]" and "other materials used in piracy." Valid as to the DVDs; void as to the "other materials."',
			examQ: 'Can a search warrant be partially valid?',
			verify: 'G.R. number not in Tiu; facts summarized generally.'
		},
		{
			id: 'stonehill',
			name: 'Stonehill v. Diokno',
			cite: 'G.R. No. L-19550, June 19, 1967',
			from: 'Checked',
			facts: 'Forty-two search warrants were issued against the petitioners and their corporations for "violation of Central Bank Laws, Tariff and Customs Laws, Internal Revenue (Code) and Revised Penal Code," authorizing seizure of practically all their business records.',
			issue: 'Were the warrants valid, and who may challenge them?',
			ruling: 'The warrants were void as general warrants; but only the corporations could challenge the searches of corporate premises.',
			doctrine: 'A warrant issued for several unspecified offenses, describing the things in sweeping terms, is a general warrant. The exclusionary rule is the only practical way to enforce the constitutional guarantee. The right is personal: only the party whose rights were violated may object.',
			reasoning: 'Without exclusion, the prosecution profits from its officers\' wrong; the earlier Moncado rule admitting illegally seized evidence was abandoned.',
			rule: 'Rule 126, Sec. 4; Const., Art. III, Secs. 2–3.',
			args: 'The State argued that illegally seized evidence remained admissible (Moncado); the Court abandoned that rule.',
			hypo: 'A warrant authorizes seizure of "all documents showing violations of tax and customs laws." Void.',
			examQ: 'What is a general (scatter-shot) warrant, and why is it void?'
		},
		{
			id: 'uy-unifish',
			name: 'Uy and Unifish Packing Corp. v. BIR',
			cite: '2000 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Search warrants for tax violations contained discrepancies in names and addresses, and described some documents only generally.',
			issue: 'Were the warrants void for lack of particularity?',
			ruling: 'Partially valid.',
			doctrine: 'A description of the place is sufficient if the officer can, with reasonable effort, identify it; failure to name, or misnaming, the owner is not fatal if the place is otherwise correctly described. A generic description is allowed only when a more specific one is unavailable. The warrant is severable: items not particularly described are cut off without voiding the rest.',
			reasoning: 'Particularity prevents officer discretion; minor errors that leave no discretion do not offend it.',
			rule: 'Rule 126, Sec. 4.',
			hypo: 'A warrant describes "unregistered sales invoices" (specific) and "records of transactions" (general). Valid as to the invoices.',
			examQ: 'Does a wrong name of the owner invalidate a search warrant?',
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'francisco',
			name: 'People v. Francisco',
			cite: '2002 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine.',
			issue: 'May officers enlarge the place to be searched based on their own knowledge?',
			ruling: 'No.',
			doctrine: 'The place to be searched, as set out in the warrant, cannot be amplified or modified by the officers\' own knowledge of the premises or by the evidence they presented in applying; only the judge may particularize the place, and only in the warrant itself.',
			reasoning: 'Otherwise officers would have the very discretion the Constitution removes from them.',
			rule: 'Rule 126, Sec. 4.',
			hypo: 'The warrant covers "the house at No. 5 Rizal St."; police also search the adjoining house No. 7, which they "knew" the accused used. The No. 7 search is illegal.',
			examQ: 'May the police search a place not described in the warrant because they know the accused uses it?',
			verify: 'Facts not given in Tiu.'
		},
		{
			id: 'marti',
			name: 'People v. Marti',
			cite: 'G.R. No. 81561, January 18, 1991',
			from: 'Checked',
			facts: 'The accused sent packages abroad through a forwarding company. Following company policy, the proprietor opened them, found marijuana, and turned them over to the NBI.',
			issue: 'Was the evidence inadmissible as the fruit of an unreasonable search?',
			ruling: 'No.',
			doctrine: 'The constitutional protection against unreasonable searches and the exclusionary rule are restraints on the government; they do not apply to searches by private individuals acting on their own.',
			reasoning: 'The Bill of Rights governs the relationship between the individual and the State.',
			rule: 'Const., Art. III, Secs. 2–3; Rule 126.',
			hypo: 'A hotel housekeeper finds a gun in a guest\'s drawer and hands it to the police. Admissible — unless the housekeeper was acting at the police\'s direction.',
			examQ: 'Does the exclusionary rule apply to evidence obtained by a private individual?'
		},
		{
			id: 'aruta',
			name: 'People v. Aruta',
			cite: 'G.R. No. 120915, April 3, 1998',
			from: 'Tiu + checked',
			facts: 'On an informant\'s tip that a woman would arrive from Baguio carrying marijuana, police waited at a bus stop, approached the accused when she alighted with a bag, and searched it. She was not acting suspiciously.',
			issue: 'Was the warrantless search valid?',
			ruling: 'No.',
			doctrine: 'Exceptions to the warrant requirement are strictly construed and still require probable cause; courts indulge every reasonable presumption against waiver of constitutional rights; passive submission is not consent.',
			reasoning: 'The accused was doing nothing that showed a crime; the police relied on the tip alone and had time to get a warrant.',
			rule: 'Rule 126; Rule 113, Sec. 5.',
			hypo: 'Police act only on a text message that a named passenger will carry drugs; they search her bag on arrival. Invalid.',
			examQ: 'Is an informant\'s tip, without more, probable cause for a warrantless search?',
			also: ['r113']
		},
		{
			id: 'aminnudin',
			name: 'People v. Aminnudin',
			cite: '1988 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Police knew at least two days in advance the accused\'s name, the vessel (M/V Wilcon) and its date of arrival in Iloilo, but did not get a warrant; they arrested and searched him as he came down the gangplank.',
			issue: 'Was the warrantless arrest and search valid?',
			ruling: 'No.',
			doctrine: 'Where the authorities had ample time and opportunity to obtain a warrant, the warrantless search and arrest are not justified.',
			reasoning: 'There was no urgency; the PC lieutenant decided on his own that a warrant was unnecessary.',
			rule: 'Rule 126; Rule 113, Sec. 5.',
			hypo: 'Police learn on Monday that a named courier will arrive on Thursday. A warrantless search on Thursday is invalid (also People v. Racho, 2010).',
			examQ: 'What is the effect of the police\'s ample opportunity to secure a warrant?'
		},
		{
			id: 'nolasco',
			name: 'Nolasco v. Paño',
			cite: '1987 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused were arrested away from an apartment that the authorities then searched, claiming the search was incident to the arrest.',
			issue: 'May a search incident to arrest extend to a place other than the place of arrest?',
			ruling: 'No.',
			doctrine: 'A warrantless search incident to a lawful arrest is strictly limited to the person arrested, at the time of and incident to the arrest, for dangerous weapons or proof of the offense; it cannot be made in a place other than the place of arrest.',
			reasoning: 'Strict construction of the exception in Rule 126, Sec. 13 (then Sec. 12).',
			rule: 'Rule 126, Sec. 13.',
			hypo: 'A is arrested at a mall; police search his condominium unit an hour later. Not incident to arrest.',
			examQ: 'What is the permissible scope of a search incident to a lawful arrest?',
			verify: 'Facts summarized generally from the doctrine Tiu quotes.'
		},
		{
			id: 'papa-mago',
			name: 'Papa v. Mago',
			cite: 'G.R. No. L-27360, February 28, 1968',
			from: 'Tiu',
			facts: 'The Manila police chief, deputized in writing by the Commissioner of Customs, intercepted trucks carrying goods suspected of being smuggled and seized them without a warrant.',
			issue: 'Was the warrantless seizure valid?',
			ruling: 'Yes.',
			doctrine: 'Persons exercising police authority under the customs law may search and seize without a warrant, except in a dwelling house. A moving vehicle may be searched without a warrant because it can be quickly moved out of the jurisdiction where the warrant must be sought.',
			reasoning: 'The Tariff and Customs Code authorizes searches of vehicles and containers on reasonable cause, requiring a warrant only for dwellings.',
			rule: 'Rule 126; Tariff and Customs Code (now the Customs Modernization and Tariff Act, RA 10863).',
			hypo: 'Customs police stop a van leaving the pier with undeclared electronics. Valid without a warrant.',
			examQ: 'May customs officers search a dwelling house without a warrant?'
		},
		{
			id: 'malacat',
			name: 'Malacat v. Court of Appeals',
			cite: 'G.R. No. 123595, December 12, 1997',
			from: 'Tiu + checked',
			facts: 'Police patrolling Plaza Miranda after a bomb threat saw the accused standing with others, his "eyes moving very fast." They approached; he fled; they caught and searched him and found a grenade.',
			issue: 'Was the search a valid stop-and-frisk?',
			ruling: 'No.',
			doctrine: 'Stop-and-frisk does not require probable cause, but mere suspicion or a hunch does not suffice; there must be a genuine reason, in light of the officer\'s experience and the surrounding conditions, to believe the person has concealed weapons.',
			reasoning: 'Fast-moving eyes at a crowded plaza are not a genuine reason.',
			rule: 'Rule 126; Terry v. Ohio.',
			hypo: 'Police frisk a man because he "looked nervous" when he saw them. Invalid.',
			examQ: 'What justifies a stop-and-frisk?'
		},
		{
			id: 'esquillo',
			name: 'Esquillo v. People',
			cite: '2010 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'During a surveillance, police saw the accused place a plastic sachet of white crystalline substance into a cigarette case; when they approached and introduced themselves, she tried to flee.',
			issue: 'Was the search valid?',
			ruling: 'Yes, as a stop-and-frisk.',
			doctrine: 'A police officer may stop a citizen, interrogate him and pat him for weapons or contraband where there is a genuine reason, from his experience and the surrounding conditions, to believe the person has them concealed; the search precedes the arrest.',
			reasoning: 'Rationale: crime prevention and officer safety.',
			rule: 'Rule 126.',
			hypo: 'Police see a man hand a small sachet to another in an alley known for drug activity; both run. A frisk is justified.',
			examQ: 'Give the rationale of the stop-and-frisk doctrine.',
			verify: 'Facts summarized generally; G.R. number not in Tiu.'
		},
		{
			id: 'de-gracia',
			name: 'People v. De Gracia',
			cite: '1994 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'During the December 1989 coup attempt, with intense firing near Camp Aguinaldo, a military team raided an office building used by rebels and seized firearms and explosives without a warrant. The courts were closed.',
			issue: 'Was the warrantless search valid?',
			ruling: 'Yes.',
			doctrine: 'Exigent and emergency circumstances — here, general chaos and the closure of the courts — justify a warrantless search where there is probable cause and no opportunity to apply for a warrant.',
			reasoning: 'Probable cause existed and the urgency made a warrant impracticable.',
			rule: 'Rule 126.',
			hypo: 'During a typhoon, police enter a collapsed warehouse to rescue workers and see boxes of firearms. Seizure valid (exigency and plain view).',
			examQ: 'When do exigent circumstances justify a warrantless search?'
		},
		{
			id: 'valmonte',
			name: 'Valmonte v. De Villa',
			cite: 'G.R. No. 83988, September 29, 1989',
			from: 'Tiu',
			facts: 'Residents challenged military and police checkpoints in Valenzuela as violating the right against unreasonable searches.',
			issue: 'Are checkpoints unconstitutional per se?',
			ruling: 'No.',
			doctrine: 'Checkpoints are not illegal per se; routine inspection and a few questions are not unreasonable searches. A more thorough inspection amounting to a search needs probable cause and is then justified as a moving-vehicle search.',
			reasoning: 'Public safety and order, balanced against a minimal intrusion.',
			rule: 'Rule 126.',
			hypo: 'At a checkpoint, a motorist is asked where he is going and the interior is viewed with a flashlight. Valid.',
			examQ: 'Are police checkpoints valid? Within what limits?'
		},
		{
			id: 'cogaed',
			name: 'People v. Cogaed',
			cite: 'G.R. No. 200334, July 30, 2014',
			from: 'Checked',
			facts: 'Acting on an informant\'s message, police waited for a jeepney; the driver signaled that a passenger was carrying marijuana. Police asked the passenger to open his bags and found marijuana.',
			issue: 'Was there a valid stop-and-frisk or search incident to arrest?',
			ruling: 'No; the accused was acquitted.',
			doctrine: 'For a valid stop-and-frisk, the officer must personally observe facts leading to a reasonable suspicion — more than one seemingly innocent circumstance. A tip relayed by another, with nothing suspicious observed, is insufficient.',
			reasoning: 'The accused did nothing suspicious in the officers\' presence; the suspicion came from the driver, not the police.',
			rule: 'Rule 126; Rule 113, Sec. 5.',
			hypo: 'A bus conductor tells police a passenger "looks like a drug courier." Without more, a search is invalid.',
			examQ: 'Is a tip from a third person sufficient basis for a stop-and-frisk?',
			verify: 'Not in Tiu; checked against summaries for this reviewer.'
		},
		{
			id: 'saluday',
			name: 'Saluday v. People',
			cite: 'G.R. No. 215305, April 3, 2018 (En Banc)',
			from: 'Checked',
			facts: 'At a military checkpoint, soldiers boarded a bus; a soldier lifted a bag beside the accused, found it unusually heavy, asked him to open it, and found a firearm and explosives.',
			issue: 'Was the warrantless search of the bag valid?',
			ruling: 'Yes.',
			doctrine: 'Passengers on public transport have a reduced expectation of privacy; reasonable searches of public buses and passengers\' bags, conducted in a manner least intrusive and for legitimate safety purposes, are valid. The Court laid down guidelines on searches upon entry into terminals, before boarding, and while in transit at checkpoints.',
			reasoning: 'Public safety in mass transport, balanced with minimal intrusion; the accused also consented.',
			rule: 'Rule 126; Const., Art. III, Sec. 2.',
			hypo: 'Before boarding a provincial bus, all passengers pass their bags through an X-ray at the terminal. Valid.',
			examQ: 'Are routine searches of bus passengers\' bags valid without a warrant?',
			verify: 'Not in Tiu; checked against summaries. Read the decision for the exact guidelines.'
		},
		{
			id: 'sapla',
			name: 'People v. Sapla',
			cite: 'G.R. No. 244045, June 16, 2020 (En Banc)',
			from: 'Checked',
			facts: 'Police received a text message from an unnamed informant describing a man carrying marijuana on a jeepney; they set up a checkpoint, stopped the jeepney, and searched the described passenger\'s sack, finding marijuana.',
			issue: 'Does an unverified tip alone provide probable cause for a warrantless search of a moving vehicle or its passenger?',
			ruling: 'No; the accused was acquitted.',
			doctrine: 'A solitary, unverified tip does not constitute probable cause for a warrantless search of a moving vehicle; the police must have other facts — personally observed suspicious circumstances — that corroborate it. Cases holding otherwise were abandoned.',
			reasoning: 'Allowing searches on tips alone would make the warrant requirement meaningless and open the door to abuse.',
			rule: 'Rule 126; Const., Art. III, Sec. 2.',
			hypo: 'A text says "a woman in a red shirt on the 3 p.m. bus has shabu." Police stop the bus and search her bag. Invalid without more.',
			examQ: 'Is a tip sufficient probable cause to search a moving vehicle?',
			verify: 'Not in Tiu; checked against summaries. Confirm which earlier rulings Sapla expressly abandoned before citing them.'
		}
	],
	deadlines: [
		{ ref: 'Rule 126, Sec. 10', act: 'Serve the search warrant', who: 'Peace officer', period: '10 days', start: 'Date of the warrant', exceptions: '—', effect: 'Warrant void thereafter', kind: 'procedural' },
		{ ref: 'Rule 126, Sec. 12(a)', act: 'Deliver seized property and verified inventory to the issuing judge', who: 'Seizing officer', period: 'Forthwith', start: 'Seizure', exceptions: '—', effect: 'Contempt of court', kind: 'procedural' },
		{ ref: 'Rule 126, Sec. 12(b)', act: 'Ascertain whether a return was made', who: 'Issuing judge', period: '10 days', start: 'Issuance of the warrant', exceptions: '—', effect: 'Summons to explain; contempt', kind: 'procedural' },
		{ ref: 'A.M. No. 10-3-10-SC, Rule 11, Sec. 4', act: 'File the criminal complaint after an IP search warrant', who: 'Applicant / complainant', period: '60 days', start: 'Issuance of the search warrant', exceptions: '—', effect: 'Warrant may be quashed and goods returned on motion; show-cause order', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'For a search warrant, the judge may rely on the applicant\'s affidavits without questioning anyone.', right: 'Personal examination by searching questions and answers, in writing and under oath, is required (Sec. 5; Bache; Silva).', example: 'Contrast a warrant of arrest (Soliven).' },
		{ wrong: 'A warrant "for violation of the Dangerous Drugs Act and the Firearms Law" is valid if both are described.', right: 'One specific offense per warrant (Sec. 4); scatter-shot warrants are void (Stonehill).', example: '—' },
		{ wrong: 'Police may search a nearby house they know the suspect uses, if it is not in the warrant.', right: 'Only the judge, in the warrant, may particularize the place (People v. Francisco).', example: '—' },
		{ wrong: 'If part of the warrant is general, the whole warrant is void.', right: 'Severable: valid as to the items particularly described (Uy v. BIR; Microsoft v. Maxicorp).', example: '—' },
		{ wrong: 'Evidence found by a private security guard\'s search is inadmissible.', right: 'The exclusionary rule binds the State, not private persons acting on their own (Marti).', example: '—' },
		{ wrong: 'A search may come first, and the arrest follow from what is found, as "incident to arrest."', right: 'The arrest must precede the search (De Los Reyes); a search before arrest must stand on its own exception (e.g., stop-and-frisk).', example: '—' },
		{ wrong: 'A tip from an informant is probable cause to search a passenger.', right: 'Not by itself (Aruta; Cogaed; Sapla, 2020).', example: '—' },
		{ wrong: 'Failure to object during the search is consent.', right: 'Consent must be unequivocal, specific, intelligent and free; silence or passive submission is not consent (Aruta; Barros).', example: '—' },
		{ wrong: 'A search warrant is valid until served.', right: 'Ten days from its date (Sec. 10); a warrant of arrest has no expiry.', example: '—' },
		{ wrong: 'Improper venue of a search warrant application is a jurisdictional defect that may be raised anytime.', right: 'The application is not a criminal action; venue is waived if not raised in the first motion (Pilipinas Shell, 2015).', example: '—' },
		{ wrong: 'Checkpoints may open bags and frisk passengers as a matter of routine.', right: 'Only visual inspection is routine; more needs probable cause or consent (Valmonte; Aniag; Escaño) — but see Saluday on public transport.', example: '—' }
	],
	corrections: [
		{ old: 'Moving-vehicle searches liberally allowed on information received.', fix: 'A solitary, unverified tip does not supply probable cause to search a moving vehicle or its passengers; corroborating, personally observed facts are required.', source: 'People v. Sapla, G.R. No. 244045, June 16, 2020 (En Banc)' },
		{ old: 'No specific rule on searches in public transport.', fix: 'Reasonable, minimally intrusive searches of public transport passengers and their bags are valid; the Court laid down guidelines.', source: 'Saluday v. People, G.R. No. 215305, April 3, 2018 (En Banc)' },
		{ old: 'Cybercrime search warrants issued by designated cybercrime courts (A.M. No. 03-03-03-SC).', fix: 'The Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC, 2018) created warrants to disclose, intercept, search, seize and examine computer data.', source: 'A.M. No. 17-11-03-SC (verify details)' },
		{ old: 'No rule on recording the execution of search warrants.', fix: 'Body-worn and alternative recording devices are required when executing warrants; the effect of non-use on admissibility should be read from the issuance itself.', source: 'A.M. No. 21-06-08-SC (2021) (verify)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Property', q: 'What personal property may be the subject of a search warrant?', a: 'E126.1.', keys: 'Sec. 3' },
		{ cat: 'A', level: 1, topic: 'Requisites', q: 'What are the requisites for the issuance of a search warrant?', a: 'E126.2.', keys: 'Sec. 4; Art. III, Sec. 2' },
		{ cat: 'A', level: 2, topic: 'Venue', q: 'Where may an application for a search warrant be filed? State the exceptions.', a: 'Sec. 2: court where the crime was committed; for compelling reasons, any court in the judicial region of the crime or of enforcement; if a case is filed, only the court where it is pending. Exceptions: Manila and QC executive judges (A.M. 99-10-09-SC; A.M. 03-8-02-SC); Special Commercial Courts for IP writs; Cybercrime Courts.', keys: 'Sec. 2; A.M. No. 03-8-02-SC' },
		{ cat: 'A', level: 2, topic: 'Warrantless searches', q: 'Enumerate the recognized warrantless searches and briefly explain each.', a: 'E126.4.', keys: 'strict construction; probable cause' },
		{ cat: 'A', level: 3, topic: 'Plain view', q: 'What are the requisites of the plain view doctrine?', a: 'E126.5.', keys: 'Fajardo' },
		{ cat: 'A', level: 3, topic: 'Consent', q: 'When is consent to a warrantless search valid?', a: 'E126.6.', keys: 'Luz; Aruta' },
		{ cat: 'B', level: 3, topic: 'SW vs WA', q: 'Distinguish a search warrant from a warrant of arrest as to the judge\'s duty and validity period.', a: 'See C126.1.', keys: 'searching examination; 10 days' },
		{ cat: 'B', level: 3, topic: 'SILA vs stop-and-frisk', q: 'Distinguish a search incident to a lawful arrest from a stop-and-frisk.', a: 'See C126.2.', keys: 'sequence; genuine reason' },
		{ cat: 'B', level: 3, topic: 'Checkpoint vs moving vehicle', q: 'Distinguish a checkpoint search from a search of a moving vehicle.', a: 'See C126.3.', keys: 'visual; probable cause; Sapla' },
		{ cat: 'C', level: 1, topic: 'Validity', q: 'A search warrant is valid for ten days from its date.', tf: true, short: 'True (Sec. 10). Thereafter it is void.', keys: 'Sec. 10' },
		{ cat: 'C', level: 1, topic: 'Time', q: 'A search warrant may always be served at any time of the day or night.', tf: false, short: 'False. Daytime, unless the affidavit asserts the property is on the person or in the place, in which case the warrant may direct service at any time (Sec. 9).', keys: 'Sec. 9' },
		{ cat: 'C', level: 1, topic: 'One offense', q: 'A single search warrant may be issued for two or more offenses if the things to be seized are particularly described.', tf: false, short: 'False. One specific offense only (Sec. 4); a warrant for several offenses is a scatter-shot warrant (Stonehill; Vallejo).', keys: 'Sec. 4' },
		{ cat: 'C', level: 2, topic: 'Examination', q: 'In issuing a search warrant, the judge may rely solely on the affidavits of the applicant and witnesses without examining them personally.', tf: false, short: 'False. He must personally examine them by searching questions and answers, in writing and under oath (Sec. 5; Bache; Silva). Evaluation of documents suffices only for a warrant of arrest (Soliven).', keys: 'Sec. 5; Bache; Soliven' },
		{ cat: 'C', level: 2, topic: 'Ownership', q: 'The property to be seized must be owned by the person against whom the search warrant is directed.', tf: false, short: 'False. Control or possession suffices (Yao v. People, 2007).', keys: 'Yao' },
		{ cat: 'C', level: 2, topic: 'Witnesses', q: 'In the absence of the lawful occupant and his family, a search of a house may be made in the presence of two police officers who did not take part in the raid.', tf: false, short: 'False. The two witnesses must be of sufficient age and discretion and residing in the same locality (Sec. 8).', keys: 'Sec. 8' },
		{ cat: 'C', level: 2, topic: 'Exclusionary rule', q: 'Evidence obtained by a private individual through a search, without any participation of the police, is inadmissible under the exclusionary rule.', tf: false, short: 'False. The constitutional guarantee and exclusionary rule apply to the State, not private individuals acting on their own (People v. Marti, 1991).', keys: 'Marti' },
		{ cat: 'C', level: 2, topic: 'Venue', q: 'Once a criminal action has been filed, an application for a search warrant related to it may be filed only in the court where the action is pending.', tf: true, short: 'True (Sec. 2, last par.).', keys: 'Sec. 2' },
		{ cat: 'C', level: 3, topic: 'Venue', q: 'Improper venue of a search warrant application is jurisdictional and may be raised at any time.', tf: false, short: 'False. An application for a search warrant is not a criminal action; improper venue is waived if not raised in the first motion to quash (Pilipinas Shell v. Romars, 2015).', keys: 'Pilipinas Shell; omnibus motion' },
		{ cat: 'C', level: 3, topic: 'Partial validity', q: 'A search warrant that describes some items particularly and others generally is void in its entirety.', tf: false, short: 'False. A warrant is severable; it remains valid as to the items particularly described (Uy v. BIR; Microsoft v. Maxicorp).', keys: 'severability' },
		{ cat: 'C', level: 3, topic: 'SILA', q: 'A person lawfully arrested in a mall may be searched, as an incident of the arrest, together with his house located elsewhere.', tf: false, short: 'False. The search is limited to the person and the place of arrest (Nolasco v. Paño).', keys: 'Sec. 13; Nolasco' },
		{ cat: 'C', level: 3, topic: 'Stop and frisk', q: 'A stop-and-frisk requires probable cause.', tf: false, short: 'False. It requires less than probable cause but more than a hunch: a genuine reason, from the officer\'s experience and the surroundings, to believe the person is armed or carries contraband (Malacat; Esquillo).', keys: 'Malacat; genuine reason' },
		{ cat: 'C', level: 4, topic: 'Tip', q: 'An unverified tip that a described passenger is carrying drugs is sufficient probable cause for police to search him at a checkpoint.', tf: false, short: 'False. A solitary tip is not probable cause; personally observed, corroborating circumstances are needed (People v. Sapla, 2020, En Banc; Cogaed, 2014).', update: 'Sapla (2020) abandoned rulings that allowed tip-based searches of moving vehicles.', keys: 'Sapla; Cogaed' },
		{ cat: 'C', level: 4, topic: 'Ample time', q: 'Where the police knew days in advance the identity and arrival of a suspect, a warrantless search upon his arrival may still be justified as a search of a moving vehicle.', tf: false, short: 'False. Ample time and opportunity to secure a warrant defeats the exception (Aminnudin, 1988; Racho, 2010).', keys: 'Aminnudin; Racho' },
		{ cat: 'C', level: 5, topic: 'Consent', q: 'A suspect who silently hands over his bag when a uniformed officer says "Open it" has validly consented to the search.', tf: false, short: 'False. Consent must be unequivocal, specific and freely given; passive submission to a show of authority is not consent, and the State must prove consent by clear and positive evidence (Aruta; Luz).', keys: 'Aruta; Luz; voluntariness' },
		{
			cat: 'D', level: 4, topic: 'Particularity', title: 'The wrong house number',
			facts: 'A warrant authorizes the search of "the two-storey house painted blue with a red gate at No. 10 Grace St., Brgy. Malinis, owned by Juan Cruz." The blue house with a red gate is actually No. 11; No. 10 is a vacant lot. The house is owned by Juan\'s brother. The affiant officer, who had surveilled the blue house, leads the search team.',
			q: 'Is the warrant valid as to the blue house?',
			issue: 'Particularity of description of the place; effect of a wrong address and owner\'s name.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Rule 126, Sec. 4 (particular description); Uy v. BIR (2000) (a wrong owner\'s name is not fatal if the place is otherwise correctly described); Yao v. People (2007) (a description suffices if the officer can, with reasonable effort, identify the place; the executing officer\'s prior knowledge as affiant is relevant). Tiu, p. 228: a wrong address is fatal unless the warrant also particularly describes the place.',
				application: 'Apart from the number, the warrant describes a unique structure (two-storey, blue, red gate) on a named street; No. 10 is a vacant lot, so there is no other house it could mean. The affiant led the team, leaving no room for discretion.',
				conclusion: 'The warrant is valid as to the blue house at No. 11.'
			},
			keys: 'Sec. 4; Uy; Yao'
		},
		{
			cat: 'D', level: 4, topic: 'Plain view', title: 'The gun on the table',
			facts: 'Officers serve a valid search warrant for shabu in M\'s house. In the living room, on a coffee table, they see an unlicensed pistol. They seize the shabu from the bedroom and the pistol.',
			q: 'Is the pistol admissible?',
			issue: 'Seizure of items not described in the warrant.',
			alac: {
				answer: 'Yes, under the plain view doctrine.',
				legalBasis: 'Plain view (People v. Fajardo, 2011): prior lawful intrusion; inadvertent discovery; immediately apparent illegality.',
				application: 'The officers were lawfully in the house under a valid warrant; they came upon the pistol in the open while searching for shabu, not looking for guns; an unlicensed firearm in the open is immediately apparent contraband (subject to verification of the license).',
				conclusion: 'The pistol is admissible; the officers may also file a separate case for illegal possession of firearms.'
			},
			missing: 'If the officers had to open a closed box, or had been tipped about a gun and were looking for it, discovery would not be inadvertent or the item not immediately apparent.',
			keys: 'plain view; Fajardo'
		},
		{
			cat: 'E', level: 5, topic: 'Search incident to arrest', title: 'The tip at the bus terminal',
			facts: 'Police receive a text that "a man in a black jacket with a blue backpack" will arrive on the 5 p.m. bus with marijuana. At the terminal, they see N, matching the description, alight and walk normally. They stop him, open his backpack and find marijuana; then they arrest him. N is arraigned without objecting to his arrest and later moves to exclude the marijuana.',
			q: 'Should the marijuana be excluded?',
			issue: 'Validity of a warrantless search based on a tip; effect of failure to object to the arrest before plea.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Const., Art. III, Secs. 2 and 3(2); Rule 126, Sec. 13 (search incident to a lawful arrest presupposes a prior lawful arrest); Rule 113, Sec. 5 (no overt act); People v. Aruta (1998); People v. Cogaed (2014); People v. Sapla (2020) (a tip alone is not probable cause). Failure to object to an illegal arrest before plea waives the objection to the arrest but not the inadmissibility of evidence seized (as in Rule 113 of this reviewer).',
				application: 'N did nothing suspicious; the police acted on the tip alone. The search came before the arrest, so it cannot be incident to it; there was no genuine reason for a stop-and-frisk, no consent, and no moving vehicle. Waiver of the illegal arrest does not cure the illegal search.',
				conclusion: 'The marijuana is inadmissible; without it, N should be acquitted.'
			},
			keys: 'Sec. 13; Aruta; Cogaed; Sapla; Art. III, Sec. 3(2)'
		},
		{
			cat: 'E', level: 5, topic: 'Issuance', title: 'The fill-in-the-blanks deposition',
			facts: 'Police apply for a warrant to search O\'s store for counterfeit goods. The judge gives the witness a printed form with blanks; the witness fills in his name, the store address and "I saw fake shoes sold there." The judge asks, "Is this true?" and signs a warrant for "counterfeit goods and documents showing violations of the IP Code and the Tax Code."',
			q: 'Is the warrant valid?',
			issue: 'Personal examination by searching questions; one specific offense; particularity.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 126, Secs. 4–5; Silva v. Presiding Judge (1991) (pre-printed depositions with leading questions are not searching questions); Bache v. Ruiz (1971); Stonehill v. Diokno (1967) and Vallejo v. CA (2004) (one specific offense; no general description).',
				application: 'The judge asked no probing questions; the deposition was a pro forma form. The warrant covers violations of two laws, and "documents showing violations" is a general description leaving discretion to the officers.',
				conclusion: 'The warrant is void; items seized under it are inadmissible and should be returned unless they are contraband.'
			},
			keys: 'Secs. 4–5; Silva; Bache; Stonehill'
		},
		{
			cat: 'E', level: 5, topic: 'Checkpoint', title: 'The checkpoint and the trunk',
			facts: 'At a fixed, well-lit COMELEC checkpoint during an election period, police stop P\'s car, look through the windows with a flashlight, and see nothing unusual. They then order P to open the trunk "as standard procedure." P complies without a word. They find unlicensed firearms.',
			q: 'Is the search valid?',
			issue: 'Scope of a checkpoint search; consent.',
			alac: {
				answer: 'No.',
				legalBasis: 'Valmonte v. De Villa (1989); Aniag v. COMELEC (1994); People v. Escaño (2000): checkpoint searches are valid only when limited to a visual inspection; a more intrusive search needs probable cause. Consent must be voluntary and is not presumed from silence (Aruta).',
				application: 'The visual inspection showed nothing; there was no probable cause to search the trunk. P\'s silent compliance with an order phrased as "standard procedure" is submission to authority, not consent.',
				conclusion: 'The firearms are inadmissible.'
			},
			missing: 'If the officers had seen a gun barrel through the window (plain view) or smelled something giving probable cause, the trunk search would be justified.',
			keys: 'visual search; Aniag; Aruta'
		},
		{ cat: 'F', level: 3, topic: 'Stonehill', q: 'Why were the warrants in Stonehill v. Diokno void, and who could challenge the searches?', a: 'They were general warrants for several unspecified offenses, describing virtually all records. Only the persons whose rights were violated could object; the corporations\' rights could be invoked only by the corporations.', keys: 'general warrant; personal right' },
		{ cat: 'F', level: 3, topic: 'Marti', q: 'What did People v. Marti hold on searches by private persons?', a: 'The Bill of Rights restrains the government; evidence found by a private person acting on his own, without State participation, is admissible.', keys: 'private individuals' },
		{ cat: 'F', level: 4, topic: 'Sapla', q: 'What did People v. Sapla (2020) hold about tips and searches of moving vehicles?', a: 'A solitary, unverified tip is not probable cause for a warrantless search of a moving vehicle or its passengers; police need other, personally observed facts corroborating it.', keys: 'tip; probable cause; En Banc 2020' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 126', title: 'Rule 126 integrated',
			facts: 'On June 1, Judge Q of the RTC of Makati issues, after properly examining the applicant and witnesses, a warrant to search R\'s house in Makati for shabu. It is silent on the time of service. Police serve it on June 14 at 10 p.m. R is out; his family is held in the garage while two officers search the bedrooms; two barangay tanods watch from the doorway. They find shabu and leave a receipt on the table. The information is filed in the RTC of Makati (another branch). R moves before Judge Q to quash the warrant and suppress the evidence.',
			q: 'Identify and resolve the issues.',
			issue: 'Validity period; time of service; witnesses; receipt; where to file the motion.',
			alac: {
				answer: 'The search was invalid on several grounds; the motion should be filed with, and granted by, the branch where the criminal case is pending.',
				legalBasis: 'Rule 126, Sec. 10 (warrant valid 10 days from its date); Sec. 9 (daytime unless the warrant directs otherwise); Sec. 8 (presence of the occupant or a family member, or two local witnesses in their absence); Sec. 11 (receipt to the occupant); Sec. 14 (motion filed only in the court where the action is instituted); Const., Art. III, Sec. 3(2).',
				application: 'June 14 is beyond 10 days from June 1 — the warrant was void when served. Service at 10 p.m. without a night-service direction violated Sec. 9. The family was present at the premises but kept away from the search, and the tanods were stationed at a doorway rather than witnessing the search — Sec. 8 was not met. Since the criminal case is pending, only the trial branch may resolve the motion.',
				conclusion: 'R should file the motion in the branch trying the case; the shabu should be suppressed.'
			},
			keys: 'Secs. 8, 9, 10, 11, 14'
		}
	],
	memorize: [
		'Search warrant: written order, People, signed by judge, to peace officer, search for personal property, bring to court (Sec. 1)',
		'Venue: where crime committed; region (compelling reasons); court of pending case; special courts — Manila/QC executive judges, IP and cybercrime courts (Sec. 2)',
		'Property: subject · fruits · means (Sec. 3)',
		'Requisites: probable cause · one offense · judge personally · searching examination in writing under oath · particular description (Secs. 4–5)',
		'Execution: knock and announce (Sec. 7) · occupant/family or two local witnesses (Sec. 8) · daytime unless directed (Sec. 9) · 10 days (Sec. 10) · receipt (Sec. 11) · inventory and return (Sec. 12)',
		'Ten warrantless searches; strictly construed; probable cause still needed; ample time defeats them',
		'Exclusionary rule (Art. III, Sec. 3[2]) — not for private searches (Marti); motion to quash/suppress in the court of the case (Sec. 14)'
	],
	flashcards: [
		['Define search warrant.', 'An order in writing, in the name of the People, signed by a judge and directed to a peace officer, commanding him to search for personal property described and bring it before the court.'],
		['Three kinds of property seizable?', 'Subject of the offense; proceeds or fruits; means of committing it.'],
		['Five requisites of a search warrant?', 'Probable cause; one specific offense; personally determined by the judge; after searching examination under oath; particular description.'],
		['Is a search warrant application a criminal action?', 'No — a special criminal process; venue is waivable (Pilipinas Shell).'],
		['Search warrant validity?', '10 days from its date.'],
		['Night service?', 'Only if the affidavit asserts the property is on the person or in the place and the warrant so directs.'],
		['Witnesses to a house search?', 'Occupant or family member; in their absence, two witnesses of sufficient age and discretion residing in the locality.'],
		['Is a partly general warrant void?', 'Only as to the general items; it is severable.'],
		['Does the exclusionary rule apply to private searches?', 'No (Marti).'],
		['Scope of search incident to arrest?', 'The person and immediate area at the place of arrest; weapons and evidence; after a lawful arrest.'],
		['Stop-and-frisk standard?', 'A genuine reason, not a hunch; less than probable cause (Malacat).'],
		['Is a tip probable cause?', 'Not by itself (Aruta; Cogaed; Sapla).'],
		['Where to file a motion to quash a search warrant once a case is filed?', 'Only in the court where the case is pending.']
	],
	oral: [
		['"What are the requisites of a valid search warrant?"', 'It must be issued upon probable cause, in connection with one specific offense, determined personally by the judge after examining under oath, by searching questions and answers in writing, the complainant and his witnesses on facts personally known to them, and it must particularly describe the place to be searched and the things to be seized.'],
		['"Distinguish search incident to arrest from stop-and-frisk."', 'Search incident to arrest requires a lawful arrest first and covers the person and the area of immediate control. Stop-and-frisk happens before any arrest, is limited to a pat-down, and needs only a genuine reason based on the officer\'s experience and the surroundings — more than a hunch, less than probable cause.'],
		['"Can police search a car on a tip?"', 'Not on a tip alone. A moving vehicle may be searched without a warrant only with probable cause, and the Supreme Court in Sapla (2020) held that a solitary, unverified tip is not probable cause; there must be other facts the police personally observed.']
	],
	checklist: [
		'I can define a search warrant and list the seizable property.',
		'I can state the venue rule, its exceptions, and Pilipinas Shell.',
		'I can state and apply the five requisites, with the leading cases.',
		'I can apply the execution rules (Secs. 7–12).',
		'I can enumerate and apply the ten warrantless searches, with their requisites.',
		'I can apply the exclusionary rule and the Marti exception.',
		'I can state where to file a motion to quash or suppress.'
	],
	sheet: [
		'<b>Definition (Sec. 1):</b> written · People · judge-signed · to peace officer · personal property · bring to court. Not a criminal action (Pilipinas Shell).',
		'<b>Venue (Sec. 2):</b> place of crime · region (compelling reasons) · pending-case court only · special courts (Manila/QC EJs; IP; cybercrime).',
		'<b>Requisites (Secs. 3–6):</b> subject/fruits/means · probable cause · one offense · judge personally · searching Q&A in writing under oath (Bache; Silva) · particular description (Uy; Francisco; Yao; severable).',
		'<b>Execution (Secs. 7–12):</b> announce then break · occupant or 2 local witnesses · daytime · 10 days · receipt · sworn inventory · judge checks return in 10 days · contempt.',
		'<b>Sec. 13:</b> arrest first, then search person and place of arrest (Nolasco). <b>Sec. 14:</b> quash/suppress in court of the case.',
		'<b>Warrantless:</b> consent · incident to arrest · plain view · moving vehicle · customs · stop-and-frisk · exigency · checkpoint (visual) · inspections · vessels. Strict; ample time defeats (Aminnudin).',
		'<b>Post-2017:</b> Saluday (2018, public transport) · Sapla (2020, tip ≠ probable cause) · cybercrime warrants (2018) · body-worn cameras (2021).'
	],
	watchFor: `<strong>Watch for: warrant or exception, and the order of events.</strong>
<ul>
<li>With a warrant: did the judge personally ask searching questions? One offense? Particular place and things? Served within 10 days, in daytime, before proper witnesses?</li>
<li>Without a warrant: name the exception and its requisites. Did the arrest come before the search?</li>
<li>Was the basis only a tip? (Sapla, Cogaed.) Did the police have time to get a warrant? (Aminnudin.)</li>
<li>Was the searcher a private person acting alone? (Marti.)</li>
<li>Once a case is filed, the motion to quash or suppress goes to that court.</li>
</ul>`
};
