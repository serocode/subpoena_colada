import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 110 — Prosecution of Offenses. Prescription itself has its own module (prescription.ts). */
export const r110: RuleChapter = {
	id: 'r110',
	n: 110,
	title: 'Prosecution of Offenses',
	short: 'R110 Prosecution of Offenses',
	tiu: 'pp. 32–52 (venue at pp. 17–21; prosecutorial agencies at pp. 22–31)',
	plain: `Rule 110 answers three practical questions: <b>where and how does a criminal case start</b>, <b>who is in charge of prosecuting it</b>, and <b>what must the charge sheet say</b>. A case starts when a complaint is filed with the office that will investigate it (or, for minor offenses outside chartered cities, directly with the MTC). The public prosecutor runs the case for the People; the victim is a witness who may intervene only for the civil liability. The complaint or information must tell the accused, in plain language, exactly what he is accused of, and it may be corrected (amended) or replaced (substituted) only within limits.`,
	purpose: `To fix the starting point of a criminal action (which also stops prescription), to keep prosecution under the State's control, and to guarantee the accused's constitutional right to be informed of the nature and cause of the accusation (Const., Art. III, Sec. 14[2]).`,
	stage: `The very beginning: from the filing of the complaint (institution) through the drafting and filing of the information in court, and — for amendment, substitution and venue — up to judgment. It sits before Rule 112 (preliminary investigation) in time but is read together with it.`,
	questions: [
		'How is a criminal action instituted, and does the answer change if preliminary investigation is required or if the place is a chartered city?',
		'What does institution do to the prescriptive period? (Detailed in the <a href="#prescription">prescription module</a>.)',
		'Who may sign a complaint, and who may sign an information?',
		'Who prosecutes — and when may a private prosecutor, the offended party, a peace officer or the Solicitor General act?',
		'Which crimes can be prosecuted only upon the complaint of the offended party or specified relatives?',
		'When is a complaint or information sufficient, and what happens if a required allegation is missing?',
		'When may the charge be amended, with or without leave of court, and when must it be substituted?',
		'Where must the action be instituted and tried, and what are the exceptions?'
	],
	relations: `Rule 110 hands off to ${ruleLink('r112')} (the complaint filed under Sec. 1 starts preliminary investigation), to ${ruleLink('r111')} (filing the criminal action impliedly institutes the civil action, which is why the offended party may intervene under Sec. 16), to ${ruleLink('r116')} (the accused pleads to the information as worded; a vague one is cured by a bill of particulars), to ${ruleLink('r117')} (defects in the information are attacked by motion to quash, and most are waived if not raised before plea), to ${ruleLink('r119')} (Sec. 19 governs substitution when the wrong offense was charged) and to ${ruleLink('r120')} (the variance rule: the accused can be convicted only of what is charged or necessarily included).`,
	principles: [
		'<b>Criminal actions are prosecuted in the name of the People</b> and under the direction and control of the public prosecutor; the offended party is a witness for the State.',
		'<b>The allegations, not the caption, determine the offense charged.</b> The real question is whether the accused did the acts alleged in the body of the information.',
		'<b>Qualifying and aggravating circumstances must be alleged</b> — by stating the ultimate facts, not just their names (<i>People v. Solar</i>, 2019) — or they cannot raise the penalty.',
		'<b>Before plea, amendment is generally free; after plea, only formal amendments with leave and without prejudice.</b>',
		'<b>Venue is jurisdictional in criminal cases.</b> Unlike civil venue, it cannot be waived.',
		'<b>Institution interrupts prescription</b> unless a special law provides otherwise.'
	],
	sections: [
		{
			n: '1',
			title: 'Institution of criminal actions',
			text: `Criminal actions are instituted (a) for offenses that require preliminary investigation under Rule 112, Sec. 1 — by filing the complaint with the proper officer for the purpose of conducting the preliminary investigation; (b) for all other offenses — by filing the complaint or information directly with the Municipal Trial Court or Municipal Circuit Trial Court, or the complaint with the office of the prosecutor. In Manila and other chartered cities, the complaint is filed with the office of the prosecutor unless their charters provide otherwise. The last paragraph states: "The institution of the criminal action shall interrupt the running period of prescription of the offense charged unless otherwise provided in special laws."`,
			plain: `First ask: does the offense need preliminary investigation (penalty of at least 4 years, 2 months and 1 day)? If yes, file the complaint with the investigating office. If no, you may go straight to the MTC — except in Manila and chartered cities, where you file with the prosecutor.`,
			reqs: `(1) Determine whether preliminary investigation is required (Rule 112, Sec. 1). (2) Identify the "proper officer": the public prosecutor (DOJ National Prosecution Service), the Ombudsman (primary jurisdiction over cases cognizable by the Sandiganbayan) or the COMELEC (election offenses, concurrently with other prosecuting arms under RA 9369). (3) File a complaint (or, where allowed, an information) in the proper place.`,
			who: `Complainant (offended party, peace officer, or public officer charged with enforcing the law violated); the investigating officer; the MTC/MCTC for direct filing.`,
			when: `Any time before the offense prescribes. Filing is what interrupts prescription — see the <a href="#prescription">prescription module</a>.`,
			exceptions: `(1) "Unless otherwise provided in special laws" — a special law may fix its own interruption rule. (2) Direct filing with the court is not available in Manila and chartered cities (unless the charter allows it); Tiu notes there is no direct filing with the Metropolitan Trial Courts for this reason. (3) Under <i>Zaldivia</i> and <i>Jadewell</i>, ordinance and summary-procedure offenses were interrupted only by filing in court; <i>Consebido</i> (2025) changed this prospectively — see the update below.`,
			effect: `The criminal action is deemed instituted on filing with the proper officer, so prescription stops. The period runs again if the proceedings terminate without conviction or acquittal or are unjustifiably stopped for reasons not imputable to the accused (RPC Art. 91), or are dismissed for reasons not constituting jeopardy (Act 3326, Sec. 2).`,
			cases: `${caseLink('olarte', 'People v. Olarte (1967)')}; ${caseLink('panaguiton', 'Panaguiton v. DOJ (2008)')}; ${caseLink('pangilinan', 'People v. Pangilinan (2012)')}; ${caseLink('zaldivia', 'Zaldivia v. Reyes (1992)')}; ${caseLink('consebido', 'People v. Consebido (2025)')}.`,
			hypo: `Estafa involving ₱2 million is committed in Quezon City (a chartered city). The victim files a complaint-affidavit with the Office of the City Prosecutor. The criminal action is instituted on that date, and prescription stops, even though no information has yet been filed in court.`,
			trap: `"Institution" is not "filing in court." Students write that prescription stops only when the information reaches the court. For RPC offenses and most special laws that has not been the rule since <i>Francisco</i> (1983) and <i>Panaguiton</i> (2008).`,
			update: `(1) Since August 2005 (A.M. No. 05-8-26-SC), first-level court judges no longer conduct preliminary investigation (Tiu, p. 33). (2) <i>People v. Consebido</i>, G.R. No. 258563, April 2, 2025 (En Banc): henceforth, filing the criminal complaint before the DOJ tolls prescription even for offenses covered by the 2022 Rules on Expedited Procedures; the ruling is prospective, and <i>Republic v. Desierto</i> (2023) and <i>Corpus v. People</i> (2023) are abandoned on that point. (3) DOJ Department Circulars No. 015 and No. 028 (2024) now set the prosecutors' internal procedure — see ${ruleLink('r112')}.`
		},
		{
			n: '2',
			title: 'The complaint or information',
			text: `The complaint or information shall be in writing, in the name of the People of the Philippines, and against all persons who appear to be responsible for the offense involved.`,
			plain: `Three requirements: written, titled "People of the Philippines v. …", and naming everyone who appears responsible.`,
			reqs: `Writing; the People as plaintiff; all persons who appear responsible as accused.`,
			who: `The People (plaintiff); the accused; the offended party is not a party to the criminal aspect.`,
			exceptions: `None in the text. Prosecutorial discretion still decides who "appears" responsible after preliminary investigation.`,
			effect: `Because the People is the party, only the State (through the Solicitor General on appeal) may appeal the criminal aspect of a dismissal or acquittal; the private complainant may appeal only the civil aspect (${caseLink('villareal', 'Villareal v. Aliga, 2014')}).`,
			hypo: `A, B and C conspire in a robbery. The information names only A and B. The information is not void as to A and B; C may be added by amendment (before plea, without leave), or charged separately.`,
			trap: `A private complainant who files a petition for review in the Court of Appeals assailing an acquittal "in the name of the People" lacks standing on the criminal aspect. Only the OSG represents the People there.`
		},
		{
			n: '3',
			title: 'Complaint defined',
			text: `A complaint is a sworn written statement charging a person with an offense, subscribed by the offended party, any peace officer, or other public officer charged with the enforcement of the law violated.`,
			plain: `A complaint is a sworn charge signed by the victim, a police officer, or the official in charge of enforcing the law that was broken.`,
			reqs: `(1) Written; (2) sworn; (3) charges a person with an offense; (4) subscribed by one of the three persons named.`,
			who: `Offended party; any peace officer; other public officer charged with enforcing the law violated (e.g., a forest officer for Forestry Code violations, a customs officer for customs offenses).`,
			exceptions: `For private crimes (Sec. 5), only the persons named in that section may file the complaint.`,
			effect: `A complaint signed by someone outside the list is not a "complaint" under Rule 110. It may still be an affidavit-complaint that starts preliminary investigation before the prosecutor.`,
			cases: `Tiu (citing Prof. Salvador) distinguishes the Rule 110 "complaint" that can be filed directly in court from the "affidavit-complaint" filed with the prosecutor, which is governed by DOJ rules.`,
			hypo: `A neighbor who witnessed a theft executes a sworn statement and files it with the prosecutor. It cannot be filed directly in court as a Rule 110 complaint (he is neither offended party nor peace officer), but it validly starts preliminary investigation, after which the prosecutor files an information.`,
			trap: `Confusing "complainant" in preliminary investigation (anyone with knowledge, through an affidavit-complaint) with the restricted list of persons who may subscribe a Rule 110 complaint. See also <i>Merida v. People</i> (2008) in the <a href="#prescription">prescription module</a>: a private person may file a Forestry Code complaint with the prosecutor.`
		},
		{
			n: '4',
			title: 'Information defined',
			text: `An information is an accusation in writing charging a person with an offense, subscribed by the prosecutor and filed with the court.`,
			plain: `An information is the prosecutor's written charge filed in court. It need not be sworn because the prosecutor acts under the oath of office.`,
			reqs: `(1) Written; (2) charges a person with an offense; (3) subscribed by the prosecutor; (4) filed with the court.`,
			who: `Only a public officer who is a "prosecutor" may subscribe it. Under Rule 112, Sec. 4, the information needs the prior written authority or approval of the provincial or city prosecutor or chief state prosecutor (or the Ombudsman or deputy).`,
			effect: `Filing of the information in court gives the court jurisdiction over the case; from then on, its disposition rests on the court's sound discretion (${caseLink('crespo', 'Crespo v. Mogul')}). An information filed without the required authority is quashable under Rule 117, Sec. 3(d), but the defect is waived if not raised before plea (${caseLink('villa-gomez', 'Villa Gomez v. People, 2020')}).`,
			cases: `${caseLink('villa-gomez', 'Villa Gomez v. People (2020, En Banc)')}; Tiu (pp. 44) still reports the older view (Prof. Salvador; Riano citing <i>Cudia v. CA</i>) that lack of authority "cannot be cured by silence, acquiescence, or even by express consent."`,
			hypo: `An assistant city prosecutor files an information without the city prosecutor's written approval. The accused is arraigned without objecting. After the prosecution rests, he moves to dismiss for lack of jurisdiction. Under <i>Villa Gomez</i>, the motion fails: the defect is not jurisdictional and was waived.`,
			trap: `Answering with the pre-2020 rule. Write both: "Formerly treated as jurisdictional (Cudia; Quisay); abandoned in Villa Gomez v. People (2020, En Banc)."`,
			update: `<i>Villa Gomez v. People</i>, G.R. No. 216824, November 10, 2020 (En Banc): the lack of prior written authority "has nothing to do with a trial court's acquisition of jurisdiction"; it may be waived through silence, acquiescence, or failure to raise it during arraignment; prior contrary doctrines (including <i>Villa v. Ibañez</i>, <i>Turingan</i>, <i>Quisay</i>) are abandoned; and the court may not dismiss on this ground motu proprio.`
		},
		{
			n: '5',
			title: 'Who must prosecute criminal actions',
			text: `All criminal actions, whether commenced by complaint or information, "shall be prosecuted under the direction and control of a public prosecutor." If the public prosecutor has a heavy work schedule or there is a lack of public prosecutors, the private prosecutor may be authorized in writing by the Chief of the Prosecution Office or the Regional State Prosecutor to prosecute, subject to the court's approval; once authorized, he continues up to the end of trial unless the authority is revoked or withdrawn (A.M. No. 02-2-07-SC, effective May 1, 2002). In MTC/MCTC cases, when the prosecutor is not available, the offended party, any peace officer, or the public officer charged with enforcing the law violated may prosecute; that authority ends upon the prosecutor's actual intervention or the elevation of the case to the RTC (OCA Circular No. 39-2002). The section also restates the private-crime rules (adultery and concubinage; seduction, abduction and acts of lasciviousness; defamation imputing those offenses) and provides that prosecution for violation of special laws is governed by those laws.`,
			plain: `The State's lawyer runs every criminal case. A private lawyer can take over the courtroom work only with written authority approved by the court. A few "private crimes" cannot even begin unless the victim (or specified relatives) files the complaint.`,
			reqs: `Private prosecutor acting alone: (1) heavy work schedule or lack of public prosecutors; (2) written authority from the Chief of the Prosecution Office or Regional State Prosecutor; (3) approval of the court. Private crimes: complaint by the proper person, against both guilty parties (adultery/concubinage) and without consent or pardon.`,
			who: `Public prosecutor; private prosecutor; offended party, peace officer or public officer (MTC only, prosecutor unavailable); Solicitor General (appeals in the CA and SC); Ombudsman's special prosecutor (Sandiganbayan cases and their appeals to the SC).`,
			when: `Written authority lasts "up to the end of the trial" unless revoked. MTC authority of the offended party etc. lasts until the prosecutor actually intervenes or the case reaches the RTC.`,
			exceptions: `(1) Written authority (above). (2) MTC cases when the prosecutor is unavailable. (3) Special laws may provide their own rules on prosecution (e.g., referral to the SEC first for Securities Regulation Code violations — <i>SEC v. Interport</i>, cited in Tiu, p. 43).`,
			effect: `Proceedings held without the public prosecutor (and without a duly authorized private prosecutor) are a clear transgression of the Rules (${caseLink('pinote', 'Pinote v. Ayco, 2005')}); Tiu notes such proceedings are treated as void. In private crimes, without the proper complaint the State cannot prosecute.`,
			cases: `${caseLink('pinote', 'Pinote v. Ayco (2005)')}; ${caseLink('villareal', 'Villareal v. Aliga (2014)')}; <i>People v. Duca</i>, G.R. No. 171175, October 30, 2009 (OSG is the appellate counsel of the People; a CA acquittal rendered without hearing the OSG is void); <i>People v. Sandiganbayan</i>, G.R. No. 188165, December 11, 2013 (Ombudsman's special prosecutor represents the People in Sandiganbayan cases, RA 8249, Sec. 4[c]); ${caseLink('crespo', 'Crespo v. Mogul (1987)')} (prosecutor's discretion before filing; court's after filing).`,
			hypo: `The public prosecutor is sick. The private prosecutor, without written authority, presents two prosecution witnesses and the judge allows it. The testimony was taken in violation of Sec. 5; the proper course was to reset the hearing or obtain written authority approved by the court.`,
			trap: `Rape is <b>no longer</b> a private crime. RA 8353 (1997) reclassified it as a crime against persons, so it may be prosecuted without the victim's complaint. Do not list rape with seduction, abduction and acts of lasciviousness.`,
			verify: `The 2002 amendment's text is taken from OCA Circular No. 39-2002 as reproduced in Tiu (pp. 39–40).`
		},
		{
			n: '6',
			title: 'Sufficiency of complaint or information',
			text: `A complaint or information is sufficient if it states (1) the name of the accused; (2) the designation of the offense given by the statute; (3) the acts or omissions complained of as constituting the offense; (4) the name of the offended party; (5) the approximate date of the commission of the offense; and (6) the place where the offense was committed. When an offense is committed by more than one person, all of them shall be included.`,
			plain: `Six things make a charge sufficient: who did it, what crime, what acts, against whom, about when, and where.`,
			reqs: `All six items, plus the inclusion of all offenders.`,
			who: `The prosecutor (drafting); the court (passing on sufficiency); the accused (objecting).`,
			when: `Objections must be raised before plea, by motion to quash (Rule 117) or motion for bill of particulars (Rule 116, Sec. 9).`,
			exceptions: `The test is substantial, not literal: whether the crime is described "in intelligible terms with such particularity as to apprise the accused with reasonable certainty" of the offense charged (Tiu, p. 45).`,
			effect: `Failure to object before plea waives most formal defects, and evidence at trial can cure them (Tiu, p. 45). But an information that charges no offense at all is quashable at any stage (Rule 117, Sec. 9), and an accused can never be convicted of an offense not charged or necessarily included.`,
			cases: `<i>Lasoy v. Zenarosa</i> (2005) and <i>Miguel v. Sandiganbayan</i> (both in Tiu, p. 46): an information is valid if it states the statutory designation and the acts constituting the offense so that a person of ordinary intelligence knows what is meant.`,
			hypo: `An information for theft alleges the taking of "one cellular phone" from "a certain Maria" on "on or about March 2024" in "Quezon City, within the jurisdiction of this Court." It is sufficient: the name of the offended party is given, the date is approximate, and the place is within the court's territory.`,
			trap: `Sufficiency is judged from the four corners of the information, not from evidence outside it.`
		},
		{
			n: '7',
			title: 'Name of the accused',
			text: `The complaint or information must state the name and surname of the accused or any appellation or nickname by which he has been or is known. If his name cannot be ascertained, he must be described under a fictitious name with a statement that his true name is unknown. If his true name is later disclosed by him or appears in some other manner to the court, it shall be inserted in the complaint or information and the record.`,
			plain: `Use the real name, or a known alias, or a "John Doe" with a statement that the true name is unknown. Insert the true name when it comes out.`,
			reqs: `True name or known appellation; or fictitious name plus a statement that the true name is unknown.`,
			effect: `Inserting the true name later is a formal amendment (<i>People v. Padica</i>, in Tiu, p. 50). A mistake in the name is not a mistake in identity, but identity must still be proven (<i>People v. Amodia</i>, in Tiu, p. 46).`,
			hypo: `"John Doe, alias Botyok" is charged. At trial, the accused is identified by the witnesses as Botyok and his true name turns out to be Roberto Cruz. The court orders the true name inserted; the conviction can stand on identity proven at trial.`,
			trap: `The real issue is <b>identity</b>, not the name. Wrong name + proven identity = no acquittal.`
		},
		{
			n: '8',
			title: 'Designation of the offense',
			text: `The complaint or information shall state the designation of the offense given by the statute, aver the acts or omissions constituting the offense, and specify its qualifying and aggravating circumstances. If there is no designation of the offense, reference shall be made to the section or subsection of the statute punishing it.`,
			plain: `Name the crime (or cite the section if the law gives it no name), state the acts, and spell out every qualifying and aggravating circumstance.`,
			reqs: `(1) Statutory designation, or the section punishing the act; (2) averment of the acts or omissions; (3) qualifying and aggravating circumstances specified.`,
			effect: `A wrong or missing designation does not vitiate the information if the facts alleged clearly recite the crime (<i>Malto v. People</i>; <i>Licayco v. People</i> — Tiu, p. 46). But a qualifying or aggravating circumstance not alleged cannot be appreciated even if proven (Tiu, pp. 46–47).`,
			cases: `${caseLink('solar', 'People v. Solar (2019, En Banc)')} settled the split Tiu reports between <i>People v. Batin</i> (2007: the word "treachery" suffices) and <i>People v. Valdez</i> (2013: the word alone is a conclusion of law).`,
			hypo: `An information for murder alleges only that the killing was "with treachery and evident premeditation." The accused does not move to quash or ask for a bill of particulars, is arraigned and tried; treachery is proven. Under <i>Solar</i>, he is deemed to have waived the defect and treachery may be appreciated.`,
			trap: `Two different defects: an <b>unalleged</b> circumstance can never be appreciated; an alleged-but-<b>defectively stated</b> circumstance (a bare label) can be appreciated if the accused does not object before plea.`,
			update: `<i>People v. Solar</i>, G.R. No. 225595, August 6, 2019 (En Banc): an information alleging a qualifying or aggravating circumstance must state the ultimate facts constituting it; a bare reference such as "with treachery" is insufficient. The remedy is a motion to quash under Rule 117, Sec. 3(e) or a motion for bill of particulars before arraignment; failure to use them waives the defect, and the circumstance may be appreciated if proven.`,
			verify: `Solar's guidelines were confirmed through later decisions and summaries applying them (e.g., <i>People v. Sualog</i>, G.R. No. 250852, 2022), not from the full text of the ponencia.`
		},
		{
			n: '9',
			title: 'Cause of the accusation',
			text: `The acts or omissions constituting the offense and the qualifying and aggravating circumstances must be stated in ordinary and concise language, not necessarily in the language of the statute, but in terms sufficient to enable a person of common understanding to know what offense is being charged, its qualifying and aggravating circumstances, and for the court to pronounce judgment.`,
			plain: `Write it so an ordinary person understands it. Copying the statute is not required; stating the facts is.`,
			reqs: `Ordinary, concise language that lets (1) a person of common understanding know the charge and (2) the court pronounce judgment.`,
			effect: `The character of the crime is determined by the recital of ultimate facts, not by the caption or the provision cited (Tiu, p. 47). An accused cannot be convicted of an offense not charged or necessarily included, however strong the evidence; this right is not waivable.`,
			hypo: `The caption says "Estafa," but the body alleges that the accused, a domestic helper, took jewelry from her employer's cabinet without consent and with intent to gain. The accused is charged with qualified theft — the body controls.`,
			trap: `"The cause of accusation is the equivalent of the cause of action in civil cases" (Tiu, p. 47) — the facts alleged, not the label.`
		},
		{
			n: '10',
			title: 'Place of commission of the offense',
			text: `The complaint or information is sufficient if it can be understood from its allegations that the offense was committed, or some of its essential ingredients occurred, at some place within the jurisdiction of the court, unless the particular place is an essential element of the offense or is necessary for its identification.`,
			plain: `"Within the jurisdiction of this Court" is usually enough — unless the place itself is part of the crime.`,
			exceptions: `Where the place is an essential element (e.g., trespass to dwelling or violation of domicile, where the dwelling must be identified) or necessary to identify the offense.`,
			effect: `The allegation of place vests territorial jurisdiction on the face of the information; if the evidence later shows the offense was committed elsewhere, the court must dismiss for want of jurisdiction (Tiu, p. 18, citing <i>Isip v. People</i>, 2007).`,
			hypo: `An information for violation of domicile alleges only that the act was done "in Manila." Because the dwelling is an element, the house must be identified (e.g., the address); otherwise the information may be quashed or clarified by a bill of particulars.`,
			trap: `The allegation of place must also be <b>proven</b> at trial. An allegation alone does not establish venue when the prosecution evidence never mentions the place (<i>Treñas v. People</i>, cited in Tiu, p. 19).`
		},
		{
			n: '11',
			title: 'Date of commission of the offense',
			text: `It is not necessary to state the precise date the offense was committed except when it is a material ingredient of the offense. The offense may be alleged to have been committed on a date as near as possible to the actual date.`,
			plain: `"On or about" is fine — unless the date is part of the crime.`,
			exceptions: `When the date is a material ingredient (Tiu gives infanticide and election offenses as examples).`,
			effect: `A small change in date is a formal amendment (<i>Kummer v. People</i>: about a month); a great disparity (e.g., 1964 to 1969) defies approximation and is substantial (<i>People v. Reyes</i>) — both in Tiu, p. 50.`,
			cases: `<i>Bacasmas v. Sandiganbayan</i> (2013, in Tiu, p. 48): an information alleging a period (1995–1998) was sufficient because the offense was not committed on one day.`,
			hypo: `An information alleges a theft "on or about January 10, 2024." Evidence shows January 2. The variance is immaterial; the date is not an element of theft.`,
			trap: `The date matters for <b>prescription</b> even when it does not matter for sufficiency. A date alleged by the prosecution can show on the face of the information that the offense has prescribed (a ground to quash under Rule 117, Sec. 3[g]).`
		},
		{
			n: '12',
			title: 'Name of the offended party',
			text: `The complaint or information must state the name and surname of the person against whom or against whose property the offense was committed, or any appellation or nickname by which he is known; if there is no better way of identifying him, a fictitious name. (a) In offenses against property, if the name of the offended party is unknown, the property must be described with such particularity as to identify the offense. (b) If the true name is later disclosed, the court must cause it to be inserted. (c) For a juridical person, its name or any designation by which it is known suffices, without averring that it is a juridical person or organized under law.`,
			plain: `Name the victim. If you cannot (property crimes), describe the property well enough to identify the offense.`,
			effect: `In crimes against property, an error in the name of the offended party is <b>immaterial</b> if the property is specific and identifiable, but <b>fatal</b> if the property is generic, such as money (Tiu, p. 48, citing <i>Senador v. People</i>, 2013, and <i>Sayson v. People</i>).`,
			hypo: `An information for estafa names "Cynthia" as the offended party for specific pieces of jewelry, but the owner was "Rita." The jewelry is specific and identifiable, so the error does not affect the conviction.`,
			trap: `Applying the "immaterial error" rule to stolen cash. Money is generic: the wrong victim's name can lead to acquittal.`,
			verify: `Tiu gives only the rule from <i>Senador</i> and <i>Sayson</i>; the example above is hypothetical. Read the decisions before citing their facts.`
		},
		{
			n: '13',
			title: 'Duplicity of the offense',
			text: `A complaint or information must charge but one offense, except when the law prescribes a single punishment for various offenses.`,
			plain: `One information, one offense — unless the law itself punishes several acts with one penalty.`,
			exceptions: `Complex crimes, special complex crimes, compound crimes and continued crimes, where the law prescribes a single penalty (Tiu, p. 47).`,
			effect: `Duplicity is a ground to quash (Rule 117, Sec. 3[f]). If the accused does not object before plea, it is waived (<i>People v. Tabio</i>, in Tiu, p. 47), and the court may convict of as many offenses as are charged and proved (Rule 120, Sec. 3).`,
			hypo: `One information charges the accused with three counts of rape on different dates. He pleads without objecting. He may be convicted of all three if each is proved.`,
			trap: `Multiple <b>counts</b> are distinct offenses and should be in separate informations (Tiu, p. 48). Duplicity is a waivable defect, not a jurisdictional one.`
		},
		{
			n: '14',
			title: 'Amendment or substitution',
			text: `"A complaint or information may be amended, in form or in substance, without leave of court, at any time before the accused enters his plea. After the plea and during the trial, a formal amendment may only be made with leave of court and when it can be done without causing prejudice to the rights of the accused." An amendment before plea that downgrades the offense or excludes any accused requires a motion by the prosecutor, notice to the offended party and leave of court; the court must state its reasons and furnish all parties, especially the offended party, copies of its order. If it appears at any time before judgment that a mistake has been made in charging the proper offense, the court shall dismiss the original complaint or information upon the filing of a new one charging the proper offense under Rule 119, Sec. 19, provided the accused is not placed in double jeopardy; the court may require the witnesses to give bail.`,
			plain: `Before plea, the prosecutor may change almost anything — except that lowering the charge or dropping an accused needs the court's permission. After plea, only changes of form, with permission, that do not hurt the defense. If the wrong crime was charged altogether, file the right information and dismiss the old one (substitution).`,
			reqs: `Before plea: none, except motion + notice to offended party + leave for downgrading/excluding. After plea: (1) formal amendment only; (2) leave of court; (3) no prejudice. Substitution: (1) mistake in charging the proper offense; (2) before judgment; (3) new information filed; (4) no double jeopardy.`,
			who: `Prosecutor (moves to amend); court (grants leave; dismisses the original on substitution); offended party (entitled to notice when the charge is downgraded or an accused dropped).`,
			when: `Amendment without leave: before plea. Formal amendment with leave: after plea and during trial. Substitution: any time before judgment.`,
			exceptions: `Substantial amendment after plea is not allowed (Tiu notes an exception when it benefits the accused). The tests of prejudice: (1) does it change the nature of the crime; (2) would a defense under the original still be available; (3) would the accused's evidence apply equally to both (Tiu, pp. 49–50).`,
			effect: `Formal amendment: no new preliminary investigation and no new plea. Substantial amendment before plea may call for reinvestigation if it alters the charge. Substitution requires a new preliminary investigation and a new plea (Teehankee v. Madayag, quoted in ${caseLink('pacoy', 'Pacoy v. Cajigal')}).`,
			cases: `${caseLink('pacoy', 'Pacoy v. Cajigal (2007)')}; <i>Teehankee v. Madayag</i> (frustrated to consummated murder after the victim died — formal); <i>Almeda v. Villaluz</i> (adding recidivism and habitual delinquency — formal); <i>Fronda-Baggao v. People</i> (merging four illegal-recruitment informations into one for large-scale illegal recruitment — formal); <i>Mendez v. People</i> (2014) — all in Tiu, pp. 50–52.`,
			hypo: `After arraignment for homicide, the prosecutor seeks to amend the information to murder by adding detailed allegations that the accused shot the victim from behind while he was asleep. This adds a qualifying circumstance and raises the penalty; it is substantial and cannot be made after plea over the accused's objection.`,
			trap: `<i>Pacoy</i> is often misread as "homicide to murder after plea is formal." It was formal there only because <b>nothing in the recital of facts changed</b> — only the caption and preamble.`
		},
		{
			n: '15',
			title: 'Place where action is to be instituted',
			text: `(a) Subject to existing laws, the criminal action shall be instituted and tried in the court of the municipality or territory where the offense was committed or where any of its essential ingredients occurred. (b) An offense committed in a train, aircraft or other public or private vehicle in the course of its trip may be tried in any municipality or territory where the vehicle passed, including the place of departure and arrival. (c) An offense committed on board a vessel in the course of its voyage may be tried in the court of the first port of entry or of any municipality or territory where the vessel passed, subject to the generally accepted principles of international law. (d) Crimes committed outside the Philippines but punishable under Article 2 of the RPC are cognizable by the court where the criminal action is first filed.`,
			plain: `Try the case where the crime (or any element of it) happened. Moving vehicles and ships get wider options; crimes abroad under RPC Art. 2 go to whichever court gets the case first.`,
			reqs: `The information must allege, and the prosecution must prove, that the offense or an essential ingredient occurred within the court's territory.`,
			who: `The prosecutor (choice of venue among proper places); the court (may dismiss motu proprio); the Supreme Court (may order a change of venue to avoid a miscarriage of justice — Const., Art. VIII, Sec. 5[4]).`,
			exceptions: `Special laws: libel (RPC Art. 360 — place of printing and first publication, or residence of a private offended party, or office of a public officer); illegal recruitment (RA 8042, Sec. 9 — also where the offended party resides); Sandiganbayan cases (where the court sits); crimes with extraterritorial reach under special laws.`,
			effect: `Venue is jurisdictional in criminal cases (Tiu, p. 17, citing <i>Isip v. People</i>, 2007). Improper venue is raised by motion to quash for lack of jurisdiction over the offense, or by the court motu proprio, at any stage — though the parties may stipulate that the offense was committed within the territory (Tiu, p. 19).`,
			cases: `${caseLink('union-bank', 'Union Bank v. People (2012)')} (perjury — where the false certificate was subscribed and sworn to); ${caseLink('yalong', 'Yalong v. People (2013)')} (BP 22 — any place where the check was drawn, issued, delivered or dishonored); <i>Parulan v. Director of Prisons</i> (1968) (evasion of service of sentence is a continuing offense).`,
			hypo: `A bus passenger is robbed between Tarlac and Pampanga on a trip from Baguio to Manila. The case may be filed in any town the bus passed, including Baguio (departure) and Manila (arrival).`,
			trap: `Treating criminal venue like civil venue. In civil cases improper venue is waived if not raised; in criminal cases it goes to jurisdiction over the offense and is not waived by failure to move to quash (Rule 117, Sec. 9).`,
			update: `Tiu cites the Human Security Act (RA 9372) for extraterritorial terrorism prosecutions. RA 9372 was repealed by the Anti-Terrorism Act of 2020 (RA 11479); check that law's extraterritorial provision before citing a section number.`
		},
		{
			n: '16',
			title: 'Intervention of the offended party in criminal action',
			text: `Where the civil action for recovery of civil liability is instituted in the criminal action pursuant to Rule 111, the offended party may intervene by counsel in the prosecution of the offense.`,
			plain: `If the victim's civil claim rides with the criminal case, the victim may appear through a private prosecutor.`,
			reqs: `(1) Civil action impliedly instituted with the criminal action (not waived, reserved or previously filed); (2) appearance by counsel.`,
			who: `Offended party, through a private prosecutor, always under the direction and control of the public prosecutor.`,
			exceptions: `The offended party may not intervene when he has (1) waived the civil action, (2) reserved the right to institute it separately, or (3) instituted it before the criminal action (Tiu, p. 41). In those cases the public prosecutor may object to the private prosecutor's appearance.`,
			effect: `Where the offended party asserts the right to intervene, it "must be respected"; it is not a matter of tolerance. But the intervention is for the civil liability, not to demand punishment (${caseLink('lee-pue-liong', 'Lee Pue Liong v. Chua Pue Chin Lee, 2013')}).`,
			hypo: `In a BP 22 case, the complainant files a separate civil action for the amount of the check before the criminal case is filed. Rule 111, Sec. 1(b) deems the civil action included in the BP 22 case, and no reservation is allowed — so a separately filed civil action may be consolidated. Check ${ruleLink('r111')} before answering whether a private prosecutor may appear.`,
			trap: `Intervention is a <b>right</b> (when the civil action is with the criminal), not a privilege granted by the court. But it is never a right to control the prosecution.`
		}
	],
	reqs: [
		{
			name: 'A valid complaint (Sec. 3)',
			source: 'Rule 110, Sec. 3; Sec. 5 for private crimes',
			what: 'A sworn written statement charging a person with an offense.',
			who: 'The offended party, any peace officer, or a public officer charged with enforcing the law violated; for private crimes, only the persons named in Sec. 5.',
			when: 'Before the offense prescribes; in private crimes, before any express pardon or consent.',
			where: 'With the proper officer for preliminary investigation, or the MTC/MCTC where direct filing is allowed.',
			form: 'Written, sworn, subscribed by the proper person.',
			missing: 'An unsworn statement or one signed by an unlisted person is not a Rule 110 complaint. In private crimes, without the complaint of the proper person, the State cannot prosecute.',
			defect: 'Depends on the defect',
			defectNote:
				'Formal defects (e.g., a defective oath) are curable and waivable if not raised before plea. The absence of the private complainant\'s complaint in private crimes has long been treated as going to the court\'s authority to proceed (e.g., <i>Pilapil v. Ibay-Somera</i>, 1989, on adultery — not in Tiu; verify the wording before reciting it as "jurisdictional").'
		},
		{
			name: 'A valid information (Sec. 4; Rule 112, Sec. 4)',
			source: 'Rule 110, Sec. 4; Rule 112, Sec. 4; Rule 117, Sec. 3(d)',
			what: 'A written accusation charging a person with an offense, filed with the court.',
			who: 'Subscribed by a prosecutor, with the prior written authority or approval of the provincial, city or chief state prosecutor (or the Ombudsman or deputy).',
			when: 'After preliminary investigation (or inquest), or directly where no preliminary investigation is needed.',
			where: 'The court with subject-matter and territorial jurisdiction.',
			form: 'Written; need not be sworn; in the name of the People.',
			missing: 'Without authority, the information is quashable under Rule 117, Sec. 3(d).',
			defect: 'Waivable',
			defectNote:
				'Under <i>Villa Gomez v. People</i> (2020, En Banc) the lack of authority is not jurisdictional; it is waived if not raised in a motion to quash before plea, and the court cannot dismiss motu proprio on that ground. Tiu (2017) reports the abandoned view.'
		},
		{
			name: 'Sufficiency of the information (Secs. 6–12)',
			source: 'Rule 110, Secs. 6–12; Const., Art. III, Sec. 14(2)',
			what: 'Name of accused; statutory designation; acts or omissions; name of offended party; approximate date; place; qualifying and aggravating circumstances stated as ultimate facts.',
			who: 'Prosecutor drafts; accused objects; court rules.',
			when: 'Objections before plea (motion to quash, Rule 117, Sec. 3[e]; bill of particulars, Rule 116, Sec. 9).',
			form: 'Ordinary and concise language understandable to a person of common understanding.',
			missing:
				'Missing details: quash or bill of particulars, or amendment. Missing element (no offense charged): quash at any stage. Missing qualifying/aggravating circumstance: cannot be appreciated. Bare label of a circumstance: waived if not raised before plea (<i>Solar</i>).',
			defect: 'Depends on the defect',
			defectNote:
				'Form defects are waivable and curable by amendment or evidence. "Facts charged do not constitute an offense" is not waived (Rule 117, Sec. 9) — but it is still not "jurisdictional" in the strict sense; it is non-waivable because no conviction can rest on an information that charges no crime.'
		},
		{
			name: 'Amendment after plea (Sec. 14, par. 1)',
			source: 'Rule 110, Sec. 14',
			what: 'A formal (not substantial) change to the information.',
			who: 'Prosecutor moves; court grants leave.',
			when: 'After plea and during trial.',
			form: 'Motion for leave with the proposed amended information.',
			missing: 'Without leave, the amendment is ineffective; a substantial amendment after plea is not allowed over the accused\'s objection.',
			defect: 'Waivable',
			defectNote:
				'Prejudice is personal to the accused. If he does not object and goes to trial on the amended information, he cannot later complain that the amendment was substantial — except that he can never be convicted of an offense not charged.'
		},
		{
			name: 'Substitution (Sec. 14, par. 2; Rule 119, Sec. 19)',
			source: 'Rule 110, Sec. 14; Rule 119, Sec. 19',
			what: 'A new information charging the proper offense; dismissal of the original.',
			who: 'Prosecutor files the new information; court dismisses the original and may commit the accused if there is good cause to detain him.',
			when: 'Any time before judgment, once it is manifest that the accused cannot be convicted of the offense charged or one necessarily included in it.',
			missing: 'If the new offense is the same as or included in the first (identity of offenses), substitution would place the accused in double jeopardy — amendment is the proper route.',
			defect: 'Not waivable',
			defectNote: 'The no-double-jeopardy proviso protects a constitutional right; the court must check it even if the accused is silent.'
		},
		{
			name: 'Venue (Sec. 15)',
			source: 'Rule 110, Sec. 15; RPC Art. 360; special laws',
			what: 'The offense, or an essential ingredient, occurred within the court\'s territory.',
			who: 'Alleged by the prosecutor; proved at trial; raised by the accused or by the court motu proprio.',
			when: 'Alleged in the information; proved at trial; objection may be raised at any stage.',
			where: 'The court of the place of commission, subject to the exceptions in Sec. 15(b)–(d) and special laws.',
			missing: 'The court lacks jurisdiction over the offense and must dismiss.',
			defect: 'Jurisdictional',
			defectNote:
				'Venue in criminal cases is an element of jurisdiction and is not waived by failing to move to quash (Rule 117, Sec. 9). The parties may, however, stipulate to the fact of the place of commission (Tiu, p. 19).'
		}
	],
	enums: [
		{
			id: 'E110.1',
			name: 'Modes of instituting a criminal action',
			source: 'Rule 110, Sec. 1',
			kind: 'rule',
			memorize: true,
			lead: 'Under Rule 110, Sec. 1, criminal actions are instituted',
			items: [
				{
					t: 'By filing the complaint with the proper officer for preliminary investigation',
					d: 'For offenses where preliminary investigation is required (penalty of at least 4 years, 2 months and 1 day). The proper officer is the public prosecutor, the Ombudsman or the COMELEC, depending on the offense.',
					s: 'for offenses requiring preliminary investigation',
					x: 'Estafa of ₱1 million filed with the city prosecutor.'
				},
				{
					t: 'By filing the complaint or information directly with the MTC or MCTC',
					d: 'For offenses that do not require preliminary investigation, outside Manila and other chartered cities.',
					s: 'for other offenses, outside chartered cities',
					x: 'Slight physical injuries in a municipality filed directly with the MCTC.'
				},
				{
					t: 'By filing the complaint with the office of the prosecutor',
					d: 'Available for all offenses not requiring preliminary investigation; mandatory in Manila and other chartered cities unless their charters provide otherwise.',
					s: 'for other offenses, and always in chartered cities',
					x: 'A BP 22 complaint in Makati must go to the city prosecutor.'
				}
			],
			exceptions: 'Special laws may designate the investigating body or the mode (e.g., referral to the SEC first for Securities Regulation Code violations).',
			memory: '<b>P-D-P</b>: <b>P</b>I officer · <b>D</b>irect to MTC · <b>P</b>rosecutor (and only the prosecutor in chartered cities).',
			tip: 'Always add the chartered-city qualifier and the effect on prescription.',
			question: 'How is a criminal action instituted? Does it matter whether the offense was committed in a chartered city?'
		},
		{
			id: 'E110.2',
			name: 'Contents of a sufficient complaint or information',
			source: 'Rule 110, Sec. 6 (with Secs. 7–12 elaborating each item)',
			kind: 'rule',
			memorize: true,
			lead: 'A complaint or information is sufficient if it states',
			items: [
				{ t: 'The name of the accused', d: 'True name or known alias; if unknown, a fictitious name with a statement that the true name is unknown (Sec. 7). All offenders must be included.', s: 'name of the accused (all of them)' },
				{ t: 'The designation of the offense given by the statute', d: 'Or, if the statute gives none, reference to the section punishing it (Sec. 8). An erroneous designation does not vitiate the information if the facts are properly alleged.', s: 'designation of the offense' },
				{ t: 'The acts or omissions constituting the offense', d: 'Stated in ordinary and concise language, including qualifying and aggravating circumstances as ultimate facts (Secs. 8–9; Solar).', s: 'acts or omissions constituting the offense' },
				{ t: 'The name of the offended party', d: 'Or a fictitious name; for property crimes, a particular description of the property; for juridical persons, the name by which it is known (Sec. 12).', s: 'name of the offended party' },
				{ t: 'The approximate date of commission', d: 'The precise date is unnecessary unless it is a material ingredient (Sec. 11).', s: 'approximate date' },
				{ t: 'The place of commission', d: 'Sufficient if the offense or an ingredient occurred within the court\'s territory, unless the place is an element (Sec. 10).', s: 'place of commission' }
			],
			memory: '<b>N-D-A-N-D-P</b>: <b>N</b>ame (accused) · <b>D</b>esignation · <b>A</b>cts · <b>N</b>ame (victim) · <b>D</b>ate · <b>P</b>lace — "No Doubt About Name, Date, Place."',
			tip: 'Add the closing rule of Sec. 6: when several persons commit the offense, all must be included.',
			question: 'When is a complaint or information sufficient? Discuss each requirement briefly.'
		},
		{
			id: 'E110.3',
			name: 'Persons who may subscribe a complaint',
			source: 'Rule 110, Sec. 3',
			kind: 'rule',
			lead: 'A complaint may be subscribed by',
			items: [
				{ t: 'The offended party', d: 'The person directly injured; in private crimes, the specific persons named in Sec. 5.', s: 'the offended party' },
				{ t: 'Any peace officer', d: 'Police officers and other agents of persons in authority charged with keeping peace and order.', s: 'any peace officer' },
				{ t: 'Other public officer charged with the enforcement of the law violated', d: 'The official whose function is to enforce the particular law, e.g., a forest officer (PD 705) or customs officer.', s: 'a public officer charged with enforcing the law violated', x: 'A DENR forest officer subscribing a complaint for illegal possession of lumber.' }
			],
			tip: 'Contrast with an information, which only the prosecutor subscribes.',
			question: 'Who may subscribe a complaint? Who may subscribe an information?'
		},
		{
			id: 'E110.4',
			name: 'Private crimes and who may file the complaint',
			source: 'Rule 110, Sec. 5; RPC Art. 344',
			kind: 'rule',
			memorize: true,
			lead: 'The private crimes, and who may initiate them, are',
			items: [
				{ t: 'Adultery and concubinage', d: 'Only upon complaint of the offended spouse, who must include both guilty parties if both are alive; barred if the offended spouse consented or pardoned the offenders.', s: 'offended spouse; both guilty parties; no consent or pardon' },
				{ t: 'Seduction, abduction and acts of lasciviousness', d: 'Upon complaint of the offended party or her parents, grandparents or guardian, exercised successively in that order; barred by express pardon by any of them; the State files if she dies or becomes incapacitated with no known parents, grandparents or guardian. A minor may file independently unless incompetent or incapable.', s: 'offended party, then parents, grandparents, guardian successively; State as last resort; no express pardon' },
				{ t: 'Defamation imputing any of the above offenses', d: 'Only at the instance of and upon complaint filed by the offended party.', s: 'offended party only' }
			],
			exceptions: 'Rape is no longer a private crime (RA 8353, 1997). Prosecution for violation of special laws is governed by those laws.',
			memory: '<b>ACSAD</b>: <b>A</b>dultery · <b>C</b>oncubinage · <b>S</b>eduction · <b>A</b>bduction (and acts of lasciviousness) · <b>D</b>efamation imputing them.',
			tip: 'Examiners love the "both guilty parties" rule and the successive order of relatives. State both.',
			question: 'What are the private crimes? Who may file the complaint for each, and what bars the prosecution?'
		},
		{
			id: 'E110.5',
			name: 'Who may prosecute in the MTC/MCTC when the prosecutor is unavailable',
			source: 'Rule 110, Sec. 5 as amended by A.M. No. 02-2-07-SC, clarified by OCA Circular No. 39-2002',
			kind: 'rule',
			lead: 'When the prosecutor assigned to an MTC or MCTC case is unavailable, the case may be prosecuted by',
			items: [
				{ t: 'The offended party', d: 'Directly, or through counsel.', s: 'the offended party' },
				{ t: 'Any peace officer', d: 'Commonly the police officer who investigated the case.', s: 'any peace officer' },
				{ t: 'The public officer charged with enforcing the law violated', d: 'E.g., a municipal health officer for a sanitation ordinance.', s: 'the public officer charged with enforcing the law' }
			],
			exceptions: 'This authority ceases upon the actual intervention of the prosecutor or the elevation of the case to the RTC.',
			question: 'May a criminal case in the MTC proceed without the public prosecutor? Who may prosecute it, and until when?'
		},
		{
			id: 'E110.6',
			name: 'Exceptions to the rule that the action is tried where the offense was committed',
			source: 'Rule 110, Sec. 15(b)–(d); Const., Art. VIII, Sec. 5(4); RPC Art. 360; special laws — as listed in Tiu, pp. 18–19',
			kind: 'notes',
			lead: 'The exceptions to the locus criminis rule are',
			items: [
				{ t: 'Offenses under RPC Art. 2 committed outside the Philippines', d: 'Cognizable by the court where the action is first filed (Sec. 15[d]).', s: 'crimes abroad under Art. 2 — court where first filed' },
				{ t: 'Offenses in a moving train, aircraft or vehicle', d: 'Any municipality the vehicle passed, including departure and arrival (Sec. 15[b]).', s: 'vehicles — any place passed' },
				{ t: 'Offenses on board a vessel in the course of its voyage', d: 'First port of entry or any municipality the vessel passed, subject to international law (Sec. 15[c]).', s: 'vessels — first port of entry or any place passed' },
				{ t: 'Transfer of venue ordered by the Supreme Court', d: 'To avoid a miscarriage of justice (Const., Art. VIII, Sec. 5[4]); only the trial is transferred.', s: 'SC-ordered change of venue' },
				{ t: 'Cases within the Sandiganbayan\'s jurisdiction', d: 'Tried where the court sits.', s: 'Sandiganbayan cases' },
				{ t: 'Written defamation', d: 'RPC Art. 360 venue rules (see E110.7).', s: 'libel under Art. 360' },
				{ t: 'Illegal recruitment', d: 'Also where the offended party actually resides at the time of the offense (RA 8042, Sec. 9).', s: 'illegal recruitment — residence of the offended party' }
			],
			tip: 'Tiu\'s list also includes terrorism under RA 9372; that law was repealed by RA 11479 (2020). Say so if you cite it.',
			question: 'Give the exceptions to the rule that a criminal action must be instituted and tried where the offense was committed.'
		},
		{
			id: 'E110.7',
			name: 'Venue of written defamation',
			source: 'RPC Art. 360, as amended by RA 4363 (in Tiu, pp. 18–19)',
			kind: 'law',
			lead: 'Under Art. 360, the criminal action for written defamation may be filed in',
			items: [
				{ t: 'The RTC of the province or city where the article was printed and first published', d: 'Available whether the offended party is a public officer or a private person. The information must allege with particularity where it was printed and first published.', s: 'place of printing and first publication (any offended party)' },
				{ t: 'The RTC of the province where a private offended party actually resided at the time', d: 'Only for private individuals.', s: 'residence of a private offended party' },
				{ t: 'The RTC of Manila, if the offended party is a public officer holding office in Manila', d: 'Office at the time of the offense.', s: 'Manila, for public officers holding office there' },
				{ t: 'The RTC of the province or city where a public officer held office, if outside Manila', d: 'Office at the time of the offense.', s: 'place of office of a public officer outside Manila' }
			],
			exceptions: 'For online articles, "printed and first published" cannot be equated with "first accessed" (Bonifacio v. RTC of Makati, 2010, in Tiu, p. 19).',
			tip: 'Libel is in the RTC regardless of penalty because Art. 360 says so.',
			question: 'Where may a criminal action for libel be filed?'
		},
		{
			id: 'E110.8',
			name: 'Tests of whether an amendment prejudices the accused',
			source: 'Tiu, pp. 49–50, from jurisprudence (Teehankee v. Madayag; Pacoy v. Cajigal)',
			kind: 'case',
			memorize: true,
			lead: 'An amendment prejudices the accused, and is substantial, if',
			items: [
				{ t: 'It changes the nature of the crime or affects the essence of the offense', d: 'E.g., a new offense or a new qualifying circumstance.', s: 'it changes the nature or essence of the offense' },
				{ t: 'A defense under the original information would no longer be available', d: 'The accused loses a defense he had prepared.', s: 'a defense under the original is no longer available' },
				{ t: 'The accused\'s evidence would not be equally applicable', d: 'His evidence fits the original charge but not the amended one.', s: 'his evidence would not apply equally to both' }
			],
			tip: 'Add that the recital of facts and facts determining jurisdiction are substantial matters (Mendez v. People, 2014).',
			question: 'What are the tests to determine whether an amendment after plea is formal or substantial?'
		},
		{
			id: 'E110.9',
			name: 'Differences between amendment and substitution',
			source: 'Teehankee v. Madayag, as quoted in Pacoy v. Cajigal, G.R. No. 157472, September 28, 2007 (Tiu, p. 51)',
			kind: 'case',
			memorize: true,
			lead: 'Amendment and substitution differ in that',
			items: [
				{ t: 'Nature of the change', d: 'Amendment may be formal or substantial; substitution always involves a substantial change.', s: 'amendment may be formal or substantial; substitution is always substantial' },
				{ t: 'Leave of court', d: 'Amendment before plea needs no leave (except downgrading or excluding an accused); substitution always needs leave because the original must be dismissed.', s: 'amendment before plea needs no leave; substitution always does' },
				{ t: 'New preliminary investigation and plea', d: 'Formal amendment needs neither; substitution needs both.', s: 'substitution requires new preliminary investigation and new plea' },
				{ t: 'Identity of offense and double jeopardy', d: 'An amended information charges the same or an included or including offense; substitution charges a different offense, so double jeopardy cannot be invoked.', s: 'amendment — same or included offense; substitution — different offense, no jeopardy' }
			],
			memory: '<b>N-L-P-J</b>: Nature · Leave · Preliminary investigation and plea · Jeopardy.',
			question: 'Distinguish amendment from substitution of an information.'
		},
		{
			id: 'E110.10',
			name: 'When the offended party may not intervene in the criminal action',
			source: 'Rule 110, Sec. 16 with Rule 111, Sec. 1 (as organized in Tiu, p. 41)',
			kind: 'notes',
			lead: 'The offended party may not intervene through a private prosecutor when he has',
			items: [
				{ t: 'Waived the civil action', d: 'There is no civil liability left to pursue in the criminal case.', s: 'waived the civil action' },
				{ t: 'Reserved the right to institute it separately', d: 'The civil claim will be tried elsewhere.', s: 'reserved it' },
				{ t: 'Instituted the civil action before the criminal action', d: 'The civil claim is already pending separately.', s: 'filed it ahead of the criminal action' }
			],
			exceptions: 'In BP 22 cases, reservation is not allowed (Rule 111, Sec. 1[b]).',
			question: 'When may an offended party not intervene in the prosecution of the criminal action?'
		},
		{
			id: 'E110.11',
			name: 'Amendments held to be merely formal',
			source: 'Jurisprudence collected in Tiu, p. 50',
			kind: 'teaching',
			lead: 'Amendments held to be merely formal include',
			items: [
				{ t: 'Adding recidivism or habitual delinquency', d: 'Relates only to the range of the penalty (Almeda v. Villaluz).', s: 'adding recidivism or habitual delinquency' },
				{ t: 'Frustrated to consummated murder after the victim died', d: 'Only the stage of execution changes (Teehankee v. Madayag).', s: 'frustrated to consummated' },
				{ t: 'Caption and preamble changed with no change in the facts', d: 'Pacoy v. Cajigal (homicide to murder in the caption only).', s: 'change of caption only' },
				{ t: 'Merging informations into large-scale illegal recruitment', d: 'Fronda-Baggao v. People.', s: 'merging informations for large-scale illegal recruitment' },
				{ t: 'Inserting the real name of the accused', d: 'People v. Padica.', s: 'inserting the true name' },
				{ t: 'Adding conspiracy or a co-accused where the original accused\'s participation is unchanged', d: 'Buhat v. CA; People v. CA.', s: 'adding conspiracy without changing the accused\'s participation' },
				{ t: 'A slight change of date', d: 'About a month (Kummer v. People); not a span of years (People v. Reyes).', s: 'slight change of date' }
			],
			tip: 'A teaching list: the Rules do not enumerate formal amendments. Use it for examples, then apply the three tests (E110.8).',
			question: 'Give examples of amendments that have been held to be merely formal.'
		}
	],
	comparisons: [
		{
			id: 'C110.1',
			title: 'Complaint vs. information',
			a: 'Complaint (Sec. 3)',
			b: 'Information (Sec. 4)',
			meaning: ['A sworn written statement charging a person with an offense.', 'An accusation in writing charging a person with an offense, filed with the court.'],
			basis: ['Rule 110, Sec. 3', 'Rule 110, Sec. 4; Rule 112, Sec. 4'],
			who: ['Offended party, any peace officer, or public officer charged with enforcing the law violated.', 'Only the prosecutor, with prior written authority of the head of office.'],
			when: ['Starts preliminary investigation; may be filed directly with the MTC where allowed; required for private crimes.', 'Filed in court after preliminary investigation or inquest, or directly where none is required.'],
			reqs: ['Written, sworn, subscribed by a listed person.', 'Written, subscribed by the prosecutor; need not be sworn.'],
			time: ['Before prescription; filing interrupts prescription.', 'Before prescription (and within the periods of Rule 112 after resolution).'],
			exceptions: ['Private crimes: only the persons in Sec. 5.', 'Lack of authority is waivable (Villa Gomez).'],
			effect: ['Institutes the criminal action (Sec. 1).', 'Vests the court with jurisdiction over the case; disposition then rests with the court (Crespo).'],
			trap: ['Saying a complaint must always be filed in court — it is usually filed with the prosecutor.', 'Saying an information must be sworn.'],
			decisive: 'Who signs it and whether it is sworn: a complaint is sworn and signed by the offended party or an enforcement officer; an information is signed by the prosecutor and need not be sworn.',
			hypo: 'In adultery, the husband files a sworn complaint with the prosecutor, who later files an information in court. Both documents exist. If instead the prosecutor had filed an information without any complaint by the husband, the prosecution could not proceed — the private-crime rule requires the offended spouse\'s complaint.'
		},
		{
			id: 'C110.2',
			title: 'Amendment vs. substitution',
			a: 'Amendment (Sec. 14, par. 1)',
			b: 'Substitution (Sec. 14, par. 2; Rule 119, Sec. 19)',
			meaning: ['Correction of an error or omission in the same information.', 'Replacement of the information by a new one charging the proper offense.'],
			basis: ['Rule 110, Sec. 14, par. 1', 'Rule 110, Sec. 14, par. 2; Rule 119, Sec. 19'],
			who: ['Prosecutor; leave from the court when required.', 'Prosecutor files the new information; court dismisses the original.'],
			when: ['Before plea freely; after plea, formal only.', 'Any time before judgment, when a mistake in charging the proper offense appears.'],
			reqs: ['Before plea: leave only to downgrade or exclude. After plea: formal, leave, no prejudice.', 'Mistake in the offense charged; new information; no double jeopardy.'],
			time: ['Before plea / during trial.', 'Before judgment.'],
			exceptions: ['Substantial amendment after plea not allowed over objection.', 'Not allowed where the new offense is the same or included — that would be double jeopardy.'],
			effect: ['Formal: no new preliminary investigation, no new plea.', 'New preliminary investigation and new plea; original dismissed.'],
			trap: ['Calling homicide-to-murder after plea "substantial" without checking whether the facts changed.', 'Using substitution to raise the charge to a graver form of the same offense — that is amendment, and after plea it is barred.'],
			decisive: 'Identity of the offense: same, including or included offense → amendment; different offense → substitution.',
			hypo: 'A is charged with theft. Evidence shows he received the money in trust and misappropriated it (estafa). Estafa is not included in theft, so before judgment the court dismisses the theft information upon the filing of an estafa information (substitution); no double jeopardy. If instead the evidence showed qualified theft, the change would be to an offense that includes the one charged — an amendment, which after plea would be substantial and not allowed over objection; the accused could still be convicted of simple theft.'
		},
		{
			id: 'C110.3',
			title: 'Formal vs. substantial amendment',
			a: 'Formal amendment',
			b: 'Substantial amendment',
			meaning: ['Change that does not alter the nature of the offense or prejudice the defense.', 'Change in the recital of facts constituting the offense or in facts determining jurisdiction.'],
			basis: ['Rule 110, Sec. 14; Teehankee; Pacoy', 'Rule 110, Sec. 14; Mendez v. People (2014)'],
			who: ['Prosecutor, with leave after plea.', 'Prosecutor, before plea only.'],
			when: ['Before or after plea.', 'Before plea only (subject to leave for downgrading/excluding).'],
			reqs: ['After plea: leave and no prejudice.', 'Before plea: none, except the downgrade/exclusion rule.'],
			time: ['During trial, before judgment.', 'Before arraignment.'],
			exceptions: ['None.', 'Tiu notes an exception when the change benefits the accused.'],
			effect: ['No new plea needed.', 'May call for reinvestigation and a new plea.'],
			trap: ['Assuming every change to the caption is formal (it is formal only if the facts are unchanged).', 'Assuming adding conspiracy is always substantial (it is formal if the accused\'s participation is unchanged).'],
			decisive: 'Whether the change alters the facts constituting the offense or the defense available — apply the three tests (E110.8).',
			hypo: 'After plea, the prosecutor (a) adds "recidivism" and (b) adds a new act of taking a second item. (a) is formal — it only affects the penalty range; (b) charges an additional act and is substantial, so it cannot be added after plea.'
		},
		{
			id: 'C110.4',
			title: 'Institution of the criminal action vs. filing of the information in court',
			a: 'Institution (Rule 110, Sec. 1)',
			b: 'Filing of the information in court',
			meaning: ['Filing the complaint with the proper officer (or directly with the MTC where allowed).', 'Lodging the prosecutor\'s information with the trial court.'],
			basis: ['Rule 110, Sec. 1', 'Rule 110, Sec. 4; Rule 112, Secs. 4–5; Crespo v. Mogul'],
			who: ['Complainant.', 'Prosecutor.'],
			when: ['At the start of preliminary investigation.', 'After a finding of probable cause by the prosecutor.'],
			reqs: ['A complaint with the proper officer.', 'An information approved by the head of office.'],
			time: ['Before prescription.', 'Rule 112 periods; within the prescriptive period as interrupted.'],
			exceptions: ['Special laws may require more (formerly ordinances and summary procedure — Zaldivia; now Consebido).', '—'],
			effect: ['Interrupts prescription.', 'Court acquires jurisdiction over the case; withdrawal needs the court\'s approval.'],
			trap: ['Saying the criminal action begins only in court.', 'Saying the prosecutor may still freely withdraw the case after filing.'],
			decisive: 'Institution stops the clock; filing in court transfers control of the case from the prosecutor to the judge.',
			hypo: 'A complaint is filed with the prosecutor in month 10 of a 12-month period; the information reaches court in month 15. The offense has not prescribed, because the clock stopped at institution. Once the information is filed, a DOJ reversal does not automatically dismiss the case; the court decides (Crespo).'
		},
		{
			id: 'C110.5',
			title: 'Public crimes vs. private crimes',
			a: 'Public crimes',
			b: 'Private crimes',
			meaning: ['Offenses prosecutable on anyone\'s complaint or on the State\'s own initiative.', 'Offenses prosecutable only on the complaint of the offended party or specified relatives.'],
			basis: ['Rule 110, Secs. 1–5', 'Rule 110, Sec. 5; RPC Art. 344'],
			who: ['Anyone may file the affidavit-complaint; the prosecutor files the information.', 'Offended spouse; offended party, parents, grandparents, guardian (successively); State as last resort.'],
			when: ['Before prescription.', 'Before prescription and before any express pardon or consent.'],
			reqs: ['Complaint or affidavit-complaint; probable cause.', 'Complaint by the proper person; both guilty parties (adultery/concubinage).'],
			time: ['Prescriptive periods of Art. 90 or Act 3326.', 'Same, but pardon cuts off prosecution earlier.'],
			exceptions: ['—', 'Rape is no longer a private crime (RA 8353).'],
			effect: ['Desistance of the complainant does not bind the State.', 'Express pardon (or consent) before filing bars the action.'],
			trap: ['Thinking an affidavit of desistance ends a public-crime case.', 'Listing rape as a private crime.'],
			decisive: 'Whether the law conditions prosecution on the complaint of a specific person.',
			hypo: 'A minor victim of acts of lasciviousness forgives the offender, but her mother files the complaint. If the victim\'s pardon was express, prosecution is barred; if she simply did not file, the mother may file because the right passes successively to the parents.'
		}
	],
	cases: [
		{
			id: 'villa-gomez',
			name: 'Villa Gomez v. People',
			cite: 'G.R. No. 216824, November 10, 2020 (En Banc, Gesmundo, J.)',
			from: 'Checked',
			facts: 'An information was filed without the approval and signature of the city prosecutor. The trial court dismissed the case on its own motion; the Court of Appeals reinstated it.',
			issue: 'Does the lack of prior written authority or approval of the head of the prosecution office deprive the trial court of jurisdiction?',
			ruling: 'No. The petition was denied and the RTC was ordered to proceed with the case.',
			doctrine: 'The lack of prior written authority "has nothing to do with a trial court\'s acquisition of jurisdiction." It is a waivable ground under Rule 117, Sec. 3(d): waived by silence, acquiescence, or failure to raise it before plea. Contrary doctrines (Villa v. Ibañez, Turingan, Tolentino v. Paqueo, Quisay, Maximo, and similar rulings) are abandoned. The court cannot dismiss motu proprio on this ground.',
			reasoning: 'Rule 117, Sec. 9 excepts only grounds (a), (b), (g) and (i) from waiver; lack of authority (d) is not among them. Jurisdiction is conferred by law, not by a prosecutor\'s signature.',
			rule: 'Rule 110, Sec. 4; Rule 112, Sec. 4; Rule 117, Secs. 3(d) and 9.',
			args: 'The petitioner relied on the line of cases treating the defect as jurisdictional; the Court abandoned them rather than distinguishing them.',
			hypo: 'An accused discovers after the prosecution rests that the information lacked the city prosecutor\'s approval. A motion to quash now is too late; the defect was waived at arraignment.',
			examQ: 'Is an information filed without the prior written approval of the city prosecutor void? May the defect be raised after arraignment?',
			also: ['r112', 'r117']
		},
		{
			id: 'solar',
			name: 'People v. Solar',
			cite: 'G.R. No. 225595, August 6, 2019 (En Banc)',
			from: 'Checked',
			facts: 'The information charged murder "with treachery and abuse of superior strength" without describing the acts constituting either circumstance. The Court of Appeals downgraded the conviction to homicide because the qualifying circumstances were insufficiently alleged.',
			issue: 'Is an information that merely names a qualifying circumstance sufficient, and what happens if the accused does not object?',
			ruling: 'A bare label is insufficient; the information must state the ultimate facts. But an accused who does not move to quash (Rule 117, Sec. 3[e]) or ask for a bill of particulars before arraignment waives the defect, and the circumstance may be appreciated if proven.',
			doctrine: 'Qualifying and aggravating circumstances must be alleged by stating the ultimate facts that constitute them; the defect of a bare label is waivable.',
			reasoning: '"With treachery" is a conclusion of law, not a factual averment; the accused\'s right to be informed is protected by the pre-arraignment remedies, which he must use.',
			rule: 'Rule 110, Secs. 8–9; Rule 116, Sec. 9; Rule 117, Sec. 3(e) and Sec. 9.',
			hypo: 'An information alleges "evident premeditation" without facts. The accused moves for a bill of particulars before arraignment; the prosecution fails to supply the facts. Evident premeditation cannot be appreciated.',
			examQ: 'Is an information for murder that merely alleges "with treachery" sufficient? What should the defense do, and when?',
			also: ['r116', 'r117', 'r120'],
			verify: 'Holding confirmed through later decisions and summaries applying Solar (e.g., People v. Sualog, 2022); the main ponencia was not read in full.'
		},
		{
			id: 'pacoy',
			name: 'Pacoy v. Cajigal',
			cite: 'G.R. No. 157472, September 28, 2007',
			from: 'Tiu',
			facts: 'The accused was charged with homicide for killing 2Lt. Escueta. The information was later amended to murder, but the only changes were in the caption and the opening paragraph (the word "Homicide" crossed out and replaced by "Murder"); the recital of facts was unchanged.',
			issue: 'Was the amendment formal or substantial (or a substitution)?',
			ruling: 'Formal. No change in the recital of facts or in the court\'s jurisdiction; no prejudice to the accused.',
			doctrine: 'The allegations in the body, not the caption, determine the offense. Quoting Teehankee v. Madayag, the Court set out the four differences between amendment and substitution and the identity-of-offense test.',
			reasoning: 'Since the facts alleged were identical, a defense under the original remained available and the accused\'s evidence applied equally.',
			rule: 'Rule 110, Sec. 14.',
			hypo: 'If the amended information had added facts showing treachery, the amendment after plea would have been substantial.',
			examQ: 'Distinguish amendment from substitution. Is a change from homicide to murder after arraignment a formal amendment?'
		},
		{
			id: 'pinote',
			name: 'Pinote v. Ayco',
			cite: '2005 — administrative case against a judge (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'In an administrative complaint by a public prosecutor, the judge was charged for allowing the defense to present its witnesses in the absence of the public prosecutor or a private prosecutor designated for the purpose.',
			issue: 'May a criminal trial proceed without the public prosecutor or an authorized private prosecutor?',
			ruling: 'No. Allowing the defense witnesses to testify in the absence of the public prosecutor or a designated private prosecutor was "a clear transgression of the Rules."',
			doctrine: 'The presence of the public prosecutor in criminal trials is necessary to protect vital State interests; criminal actions are prosecuted under the prosecutor\'s direction and control.',
			reasoning: 'A crime is an offense against the People, not merely against the private complainant.',
			rule: 'Rule 110, Sec. 5.',
			hypo: 'The public prosecutor walks out mid-trial; the judge continues receiving defense evidence. The proceedings are vulnerable to nullification and the judge to administrative sanction.',
			examQ: 'May the court proceed with the trial in the absence of the public prosecutor? What are the exceptions?',
			verify: 'Tiu gives only "Pinote vs Ayco 2005." Verify the A.M. number and the penalty imposed before citing them.'
		},
		{
			id: 'villareal',
			name: 'Villareal v. Aliga',
			cite: 'G.R. No. 166995, January 13, 2014',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine, not the facts.',
			issue: 'Who may appeal the criminal aspect of a dismissal or acquittal?',
			ruling: 'Only the State, through the Solicitor General; the private offended party may appeal only the civil aspect.',
			doctrine: 'In criminal cases where the offended party is the State, the private complainant\'s interest is limited to the civil liability; in the prosecution of the offense his role is that of a witness.',
			reasoning: 'The People is the real party in interest on the criminal aspect.',
			rule: 'Rule 110, Secs. 2 and 5; Rule 122.',
			hypo: 'After an acquittal, the private complainant files a Rule 45 petition asking the SC to convict. It must be dismissed as to the criminal aspect; he may question only the civil aspect.',
			examQ: 'May a private complainant appeal an acquittal? What may he do instead?',
			also: ['r120', 'r122'],
			verify: 'Facts not given in Tiu; read the decision before citing them.'
		},
		{
			id: 'lee-pue-liong',
			name: 'Lee Pue Liong v. Chua Pue Chin Lee',
			cite: '2013 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine on the private prosecutor\'s intervention.',
			issue: 'Is the offended party\'s intervention through a private prosecutor a matter of the court\'s tolerance?',
			ruling: 'No. Where the private prosecution has asserted its right to intervene, that right must be respected.',
			doctrine: 'The offended party intervenes to enforce the civil liability born of the crime, not to demand punishment, and always subject to the public prosecutor\'s direction and control.',
			reasoning: 'Every person criminally liable is also civilly liable (RPC Art. 100); the civil action is impliedly instituted with the criminal action.',
			rule: 'Rule 110, Sec. 16; Rule 111, Sec. 1.',
			hypo: 'The court refuses to let the private prosecutor cross-examine a defense witness on the amount of damages. That is error, unless the civil action was waived, reserved or filed earlier.',
			examQ: 'Is the participation of a private prosecutor a matter of right? What are its limits?',
			also: ['r111'],
			verify: 'Tiu gives no G.R. number; verify before citing.'
		},
		{
			id: 'union-bank',
			name: 'Union Bank of the Philippines v. People',
			cite: 'G.R. No. 192565, February 28, 2012',
			from: 'Tiu',
			facts: 'A certificate against forum shopping was subscribed and sworn to before a notary in Makati and submitted to a court in Pasay. Perjury was charged in Makati; the accused sought to quash for improper venue, arguing it should be Pasay.',
			issue: 'Where is the venue of perjury committed through a false sworn certificate?',
			ruling: 'Makati was the proper venue: the execution of the certificate, the oath before the notary, and the willful assertion of falsehood were all alleged to have occurred there.',
			doctrine: 'Venue is examined from the allegations of the information together with Rule 110, Sec. 15(a); the action is tried where the offense or any essential ingredient occurred.',
			reasoning: 'All elements of perjury were alleged to have been committed in Makati.',
			rule: 'Rule 110, Sec. 15(a); Rule 117, Sec. 3(b).',
			hypo: 'If the false affidavit had been sworn in Pasay and only filed in Makati, Makati would not be a proper venue.',
			examQ: 'Where should perjury based on a false certificate of non-forum shopping be prosecuted?'
		},
		{
			id: 'yalong',
			name: 'Yalong v. People',
			cite: 'G.R. No. 187174, August 28, 2013',
			from: 'Tiu',
			facts: 'A check was drawn, issued and delivered in Manila but presented for deposit and dishonored in Batangas City. The BP 22 case was filed in the MTCC of Batangas City.',
			issue: 'Did the Batangas City court have territorial jurisdiction?',
			ruling: 'Yes. BP 22 is a transitory or continuing crime; it may be tried where the check was drawn, issued, delivered or dishonored.',
			doctrine: 'For continuing or transitory crimes, any court where an essential ingredient occurred has jurisdiction, and the first court to take cognizance excludes the others.',
			reasoning: 'Some acts material to the offense occurred in Batangas City.',
			rule: 'Rule 110, Sec. 15(a).',
			hypo: 'The complainant files in Manila after the Batangas case is filed. The Manila court must yield; the first court to take cognizance excludes the other.',
			examQ: 'Where may a BP 22 case be filed?'
		}
	],
	deadlines: [
		{ ref: 'Rule 110, Sec. 1', act: 'File the complaint (institution)', who: 'Complainant', period: 'Within the prescriptive period', start: 'RPC: discovery by offended party, authorities or agents (Art. 91). Special laws: commission, or discovery if unknown (Act 3326, Sec. 2)', exceptions: 'Absence from the Philippines suspends RPC prescription only', effect: 'Filing interrupts prescription; late filing — the offense has prescribed (Rule 117, Sec. 3[g])', kind: 'prescriptive' },
		{ ref: 'Rule 110, Sec. 14', act: 'Amend in form or substance without leave', who: 'Prosecutor', period: 'Before the accused enters his plea', start: 'Filing of the information', exceptions: 'Downgrading the offense or excluding an accused needs motion, notice to offended party and leave', effect: 'Amendment effective without leave', kind: 'procedural' },
		{ ref: 'Rule 110, Sec. 14', act: 'Formal amendment after plea', who: 'Prosecutor (with leave)', period: 'After plea and during trial', start: 'Plea', exceptions: 'Substantial amendment not allowed', effect: 'Without leave or with prejudice — not allowed', kind: 'procedural' },
		{ ref: 'Rule 110, Sec. 14; Rule 119, Sec. 19', act: 'Substitution of the information', who: 'Prosecutor and court', period: 'Any time before judgment', start: 'When the mistake becomes manifest', exceptions: 'Not if it places the accused in double jeopardy', effect: 'Original dismissed upon filing of the proper information; accused may be held if good cause', kind: 'procedural' },
		{ ref: 'Rule 110, Sec. 5', act: 'Private prosecutor\'s written authority', who: 'Chief of Prosecution Office / Regional State Prosecutor; court approval', period: 'Up to the end of the trial', start: 'Court approval', exceptions: 'Revocation or withdrawal', effect: 'Private prosecutor may proceed without the public prosecutor', kind: 'procedural' },
		{ ref: 'Rule 110, Sec. 5 (OCA Circ. 39-2002)', act: 'Prosecution by offended party, peace officer or public officer in MTC', who: 'Those persons', period: 'Until the prosecutor actually intervenes or the case is elevated to the RTC', start: 'Unavailability of the prosecutor', exceptions: '—', effect: 'Authority ceases', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'Prescription stops only when the information is filed in court.', right: 'Filing the complaint with the proper officer for preliminary investigation interrupts prescription (Sec. 1; Panaguiton; Pangilinan). For expedited-rules offenses the court-filing rule was abandoned prospectively in Consebido (2025).', example: 'BP 22 complaint filed with the prosecutor within four years; information filed in court after four years — not prescribed.' },
		{ wrong: 'An information must be sworn to.', right: 'Only a complaint must be sworn; the prosecutor acts under his oath of office.', example: 'An unsworn information signed by the prosecutor is valid.' },
		{ wrong: 'The caption determines the crime charged.', right: 'The recital of facts in the body controls.', example: 'Caption "Estafa," body alleges taking by a domestic helper — qualified theft.' },
		{ wrong: 'Before plea, the prosecutor may always amend without leave.', right: 'Not when the amendment downgrades the offense or excludes an accused: motion, notice to the offended party and leave are required.', example: 'Dropping one of three accused before arraignment requires leave.' },
		{ wrong: 'Lack of authority of the officer who filed the information is a jurisdictional defect.', right: 'Waivable since Villa Gomez v. People (2020).', example: 'Raised for the first time on appeal — denied.' },
		{ wrong: 'An unalleged qualifying circumstance may be appreciated if proven.', right: 'It cannot be appreciated at all; only a defectively alleged one may be, if the accused failed to object (Solar).', example: 'Treachery proven but never mentioned in the information — homicide, not murder.' },
		{ wrong: 'Rape is a private crime.', right: 'Since RA 8353 (1997), rape is a crime against persons and may be prosecuted de oficio.', example: 'The victim\'s affidavit of desistance does not by itself end a rape case.' },
		{ wrong: 'Improper venue is waived if not raised in a motion to quash.', right: 'Venue is jurisdictional in criminal cases; it may be raised at any stage.', example: 'Libel filed where the article was merely read — dismissed on appeal.' },
		{ wrong: 'The private complainant may appeal an acquittal.', right: 'Only the OSG may appeal the criminal aspect; the complainant may appeal the civil aspect.', example: 'Villareal v. Aliga.' },
		{ wrong: 'Adultery may be prosecuted against the wife alone.', right: 'Both guilty parties must be included if both are alive.', example: 'Complaint against the wife only — the State cannot proceed on it.' },
		{ wrong: 'Duplicity voids the information.', right: 'It is a ground to quash, waived if not raised before plea; the accused may then be convicted of all offenses charged and proved.', example: 'Two estafas in one information, no objection — two convictions possible.' }
	],
	corrections: [
		{ old: 'Ordinance violations and summary-procedure offenses are interrupted only by filing in court (Zaldivia; Jadewell).', fix: 'Consebido (2025, En Banc) held, prospectively, that filing the complaint before the DOJ tolls prescription even for offenses covered by the 2022 Rules on Expedited Procedures, abandoning Desierto and Corpus on that point. Zaldivia and Jadewell were not expressly named as abandoned — see the prescription module.', source: 'People v. Consebido, G.R. No. 258563, April 2, 2025' },
		{ old: 'Lack of authority of the officer signing the information cannot be cured by silence or consent (Cudia, as reported by Riano and Salvador).', fix: 'Not jurisdictional; waivable if not raised before plea; the court cannot dismiss motu proprio on that ground.', source: 'Villa Gomez v. People, G.R. No. 216824, November 10, 2020 (En Banc)' },
		{ old: 'Conflicting rulings on whether "with treachery" is a sufficient allegation (Batin, 2007 vs. Valdez, 2013).', fix: 'Ultimate facts are required; the defect is waived if not raised before arraignment by motion to quash or bill of particulars.', source: 'People v. Solar, G.R. No. 225595, August 6, 2019 (En Banc)' },
		{ old: '1991 Revised Rule on Summary Procedure.', fix: 'Replaced by the 2022 Rules on Expedited Procedures in the First Level Courts (A.M. No. 08-8-7-SC, effective April 11, 2022). Criminal coverage: traffic laws, rental law, ordinances, BP 22, and offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000.', source: 'A.M. No. 08-8-7-SC, Rule I, Sec. 1(B), as quoted in Consebido' },
		{ old: 'Human Security Act (RA 9372) as an exception to venue.', fix: 'Repealed by the Anti-Terrorism Act of 2020 (RA 11479).', source: 'RA 11479 (2020)' }
	],
	practice: [
		// A — Enumeration
		{ cat: 'A', level: 1, topic: 'Sufficiency', q: 'Enumerate the contents of a sufficient complaint or information. Explain each briefly.', a: 'See E110.2: (1) name of the accused — all offenders included; (2) designation of the offense by statute (or the section punishing it); (3) acts or omissions constituting the offense, with qualifying and aggravating circumstances stated as ultimate facts; (4) name of the offended party (or a particular description of property); (5) approximate date; (6) place within the court\'s jurisdiction. Rule 110, Sec. 6.', keys: 'Rule 110, Sec. 6; "all of them shall be included"; approximate date; within the jurisdiction of the court' },
		{ cat: 'A', level: 2, topic: 'Institution', q: 'Enumerate the modes of instituting a criminal action and state the effect of institution on prescription.', a: 'See E110.1. (1) Complaint with the proper officer for preliminary investigation, for offenses requiring it; (2) complaint or information directly with the MTC/MCTC for other offenses; (3) complaint with the office of the prosecutor — mandatory in Manila and chartered cities unless their charters provide otherwise. Institution interrupts prescription unless special laws provide otherwise (Sec. 1, last par.).', keys: 'proper officer; MTC/MCTC; chartered cities; interrupts prescription' },
		{ cat: 'A', level: 2, topic: 'Private crimes', q: 'What are the private crimes? Who may file the complaint for each?', a: 'See E110.4. Adultery and concubinage — offended spouse, against both guilty parties, barred by consent or pardon. Seduction, abduction and acts of lasciviousness — offended party, then parents, grandparents, guardian successively; the State if she dies or is incapacitated with no known relatives; barred by express pardon. Defamation imputing those crimes — offended party only.', keys: 'Rule 110, Sec. 5; Art. 344; both guilty parties; successive order; express pardon' },
		{ cat: 'A', level: 3, topic: 'Venue', q: 'Enumerate the exceptions to the rule that the criminal action shall be instituted and tried where the offense was committed.', a: 'See E110.6: Art. 2 RPC crimes abroad (court where first filed); offenses in moving vehicles; offenses on vessels; SC-ordered transfer of venue; Sandiganbayan cases; libel under Art. 360; illegal recruitment (residence of offended party). Note that venue remains jurisdictional.', keys: 'Sec. 15(b)–(d); Art. VIII, Sec. 5(4); Art. 360; RA 8042' },
		{ cat: 'A', level: 3, topic: 'Amendment', q: 'Give the tests of whether an amendment prejudices the accused, and three examples of amendments held to be merely formal.', a: 'Tests (E110.8): whether it changes the nature or essence of the offense; whether a defense under the original remains available; whether the accused\'s evidence applies equally. Formal examples (E110.11): adding recidivism (Almeda v. Villaluz); frustrated to consummated murder (Teehankee); caption-only change (Pacoy).', keys: 'nature of offense; defense still available; evidence equally applicable' },
		// B — Compare
		{ cat: 'B', level: 3, topic: 'Complaint/information', q: 'Distinguish a complaint from an information.', a: 'See C110.1. Complaint — sworn, subscribed by the offended party, a peace officer or an enforcing officer; institutes the action. Information — not sworn, subscribed only by the prosecutor (with the head of office\'s authority), filed in court; vests the court with jurisdiction over the case.', keys: 'sworn vs. not sworn; who subscribes; filed with court' },
		{ cat: 'B', level: 3, topic: 'Amendment/substitution', q: 'Distinguish amendment from substitution of an information.', a: 'See C110.2 and E110.9: nature of change; leave; new preliminary investigation and plea; identity of offense and double jeopardy. Test: same or included offense → amendment; different offense → substitution.', keys: 'Teehankee v. Madayag; Pacoy v. Cajigal; identity of offense' },
		{ cat: 'B', level: 3, topic: 'Institution/filing', q: 'Distinguish the institution of a criminal action from the filing of the information in court.', a: 'See C110.4. Institution is the filing of the complaint with the proper officer (or directly with the MTC); it interrupts prescription. Filing of the information transfers control to the court; thereafter a motion to dismiss is addressed to the court\'s discretion (Crespo v. Mogul).', keys: 'Sec. 1; Crespo; prescription' },
		// C — True or false
		{ cat: 'C', level: 1, topic: 'Information', q: 'An information must be sworn to by the prosecutor who files it.', tf: false, short: 'False. Only a complaint must be sworn (Sec. 3); an information is subscribed by the prosecutor, who acts under his oath of office (Sec. 4).', keys: 'Rule 110, Secs. 3–4' },
		{ cat: 'C', level: 1, topic: 'Complaint', q: 'A complaint may be subscribed by any peace officer.', tf: true, short: 'True. Sec. 3 lists the offended party, any peace officer, or other public officer charged with enforcing the law violated.', keys: 'Rule 110, Sec. 3' },
		{ cat: 'C', level: 2, topic: 'Designation', q: 'The designation of the offense in the caption of the information determines the crime for which the accused may be convicted.', tf: false, short: 'False. The recital of facts in the body controls, not the caption or the law cited.', a: 'Tiu, pp. 46–47; Malto v. People; Pacoy v. Cajigal.', trap: 'Students anchor on the caption because it is the first thing they read.', keys: 'recital of ultimate facts controls' },
		{ cat: 'C', level: 2, topic: 'Amendment', q: 'Before the accused enters a plea, the prosecutor may amend the information in any respect without leave of court.', tf: false, short: 'False. An amendment before plea that downgrades the offense or excludes an accused requires a motion by the prosecutor, notice to the offended party and leave of court (Sec. 14).', keys: 'downgrade; exclude; notice to offended party; leave' },
		{ cat: 'C', level: 2, topic: 'Amendment', q: 'After plea, a formal amendment may be made without leave of court so long as it does not prejudice the accused.', tf: false, short: 'False. After plea, a formal amendment needs both leave of court and absence of prejudice.', keys: 'Sec. 14; leave of court' },
		{ cat: 'C', level: 2, topic: 'Venue', q: 'Improper venue in a criminal case is waived if the accused does not raise it in a motion to quash.', tf: false, short: 'False. Venue is jurisdictional in criminal cases; lack of jurisdiction over the offense is not waived (Rule 117, Sec. 9) and may be raised at any stage.', keys: 'venue jurisdictional; Isip v. People; Rule 117, Sec. 9' },
		{ cat: 'C', level: 2, topic: 'Who prosecutes', q: 'In an MTC case, when the assigned prosecutor is unavailable, the offended party may prosecute the case.', tf: true, short: 'True — as may any peace officer or the public officer charged with enforcing the law violated, until the prosecutor actually intervenes or the case is elevated to the RTC (Sec. 5; OCA Circular No. 39-2002).', keys: 'MTC/MCTC; prosecutor unavailable; ceases on intervention or elevation' },
		{ cat: 'C', level: 3, topic: 'Appeal', q: 'A private complainant may appeal a judgment of acquittal insofar as the criminal aspect is concerned.', tf: false, short: 'False. Only the State, through the OSG, may appeal the criminal aspect; the private complainant may appeal the civil aspect (Villareal v. Aliga).', keys: 'OSG; civil aspect only' },
		{ cat: 'C', level: 3, topic: 'Private crimes', q: 'Rape may be prosecuted only upon a complaint filed by the offended party or her parents, grandparents or guardian.', tf: false, short: 'False. RA 8353 (1997) reclassified rape as a crime against persons; it is a public crime.', trap: 'Old reviewers list rape among the private crimes of Art. 344.', keys: 'RA 8353; crime against persons' },
		{ cat: 'C', level: 4, topic: 'Information', q: 'An information filed by an assistant prosecutor without the prior written approval of the city prosecutor is void, and the defect may be raised at any time, even on appeal.', tf: false, short: 'False. Under Villa Gomez v. People (2020, En Banc), the defect is not jurisdictional and is waived if not raised in a motion to quash before plea.', update: 'Tiu (2017) reports the older rule (Cudia), now abandoned.', keys: 'Villa Gomez; Rule 117, Sec. 3(d); waivable' },
		{ cat: 'C', level: 4, topic: 'Qualifying circumstances', q: 'Where the information alleges only that the killing was committed "with treachery," the accused can never be convicted of murder.', tf: false, short: 'False. Under People v. Solar (2019), the bare label is insufficient, but if the accused fails to move to quash or for a bill of particulars before arraignment, the defect is waived and treachery may be appreciated if proven.', trap: 'Confusing a defectively alleged circumstance (waivable) with an unalleged one (never appreciated).', keys: 'Solar; ultimate facts; waiver' },
		{ cat: 'C', level: 5, topic: 'Duplicity', q: 'An information charging two distinct offenses is void and cannot support any conviction.', tf: false, short: 'False. Duplicity is a ground to quash (Rule 117, Sec. 3[f]); if not raised before plea it is waived, and the court may convict of as many offenses as are charged and proved (Rule 120, Sec. 3).', keys: 'Sec. 13; waiver; Rule 120, Sec. 3' },
		// D — Short situational
		{
			cat: 'D', level: 4, topic: 'Amendment before plea', title: 'Dropping an accused before arraignment',
			facts: 'A, B and C are charged with estafa. Before arraignment, the prosecutor files an amended information dropping C, without notice to the offended party, and the court admits it without a hearing.',
			q: 'Was the amendment valid?',
			issue: 'Whether an amendment before plea that excludes an accused may be made without motion, notice to the offended party and leave of court.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 110, Sec. 14, par. 1: an amendment before plea that "excludes any accused" can be made only upon motion by the prosecutor, with notice to the offended party and with leave of court; the court must state its reasons and furnish all parties, especially the offended party, copies of its order.',
				application: 'The prosecutor excluded C without a motion and without notice to the offended party, and the court admitted the amendment without stating reasons. These are the safeguards the 2000 Rules added precisely for exclusions and downgrades.',
				conclusion: 'The exclusion of C is invalid; the offended party may move to set aside the order and the court must hear the matter.'
			},
			a: 'Before plea, amendments are generally free — but the Rules single out two kinds that need the court\'s control: downgrading and excluding.',
			tempting: '"Before plea, amendment is without leave." True only as a general rule; the exclusion of an accused is the exception.',
			keys: 'Sec. 14; excludes any accused; notice to offended party; leave'
		},
		{
			cat: 'D', level: 4, topic: 'Private crimes', title: 'Adultery against the wife only',
			facts: 'H files a complaint for adultery against his wife W only. He says he does not want to involve the paramour P, a family friend. Both W and P are alive.',
			q: 'May the prosecution proceed?',
			issue: 'Whether an adultery complaint that does not include both guilty parties may be prosecuted.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 110, Sec. 5 (and RPC Art. 344): the offended party cannot institute criminal prosecution without including the guilty parties, if both are alive.',
				application: 'H excluded P although both W and P are alive. The rule is designed to prevent the offended spouse from choosing whom to punish.',
				conclusion: 'The complaint is defective; H must include both W and P for the prosecution to proceed.'
			},
			missing: 'If P were dead, H could proceed against W alone. If H had earlier consented to or pardoned the relationship, no prosecution is possible at all.',
			keys: 'both guilty parties; if both alive; consent or pardon'
		},
		{
			cat: 'D', level: 4, topic: 'Public crimes', title: 'Rape complaint by a stranger',
			facts: 'A 25-year-old woman is raped. She refuses to file a complaint. The barangay captain, who learned of the incident, files a complaint-affidavit with the prosecutor, attaching the medico-legal report and a witness\'s affidavit.',
			q: 'May the prosecutor proceed with the preliminary investigation and file an information?',
			issue: 'Whether rape requires the complaint of the offended party.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'RA 8353 (Anti-Rape Law of 1997) reclassified rape as a crime against persons (RPC Art. 266-A), removing it from the private crimes under Art. 344 and Rule 110, Sec. 5.',
				application: 'Since rape is a public crime, anyone with knowledge may file the complaint-affidavit that starts preliminary investigation, and the prosecutor files the information if there is probable cause. The victim\'s refusal affects the strength of the evidence, not the State\'s authority to prosecute.',
				conclusion: 'The prosecutor may proceed.'
			},
			trap: 'Older materials list rape among the private crimes. Seduction, abduction and acts of lasciviousness remain private crimes; rape does not.',
			keys: 'RA 8353; crime against persons; public crime'
		},
		{
			cat: 'D', level: 4, topic: 'Venue', title: 'BP 22 — where to file',
			facts: 'D draws and delivers a check in Manila to C. C deposits it in Batangas City, where it is dishonored. C files a BP 22 case in the MTCC of Batangas City. D moves to quash for lack of jurisdiction, arguing the check was issued in Manila.',
			q: 'Rule on the motion.',
			issue: 'Whether the Batangas City court has territorial jurisdiction over a BP 22 case where the check was dishonored there.',
			alac: {
				answer: 'Deny the motion.',
				legalBasis: 'Rule 110, Sec. 15(a): the action is instituted and tried where the offense was committed or any of its essential ingredients occurred. BP 22 is a transitory or continuing crime that may be tried where the check was drawn, issued, delivered or dishonored (Yalong v. People, 2013; Rigor v. People, 2004).',
				application: 'Dishonor, an essential element, occurred in Batangas City.',
				conclusion: 'The Batangas City court has jurisdiction; the first court to take cognizance excludes the others.'
			},
			keys: 'transitory crime; drawn, issued, delivered or dishonored'
		},
		{
			cat: 'D', level: 4, topic: 'Who prosecutes', title: 'Private prosecutor without authority',
			facts: 'At the scheduled hearing, the public prosecutor is absent. The private prosecutor, who has no written authority, insists on presenting the complainant. The judge allows it.',
			q: 'Was the judge correct?',
			issue: 'Whether a private prosecutor may present evidence in the absence of the public prosecutor without written authority.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 110, Sec. 5 (as amended by A.M. No. 02-2-07-SC): criminal actions are prosecuted under the direction and control of a public prosecutor; a private prosecutor may proceed alone only if authorized in writing by the Chief of the Prosecution Office or the Regional State Prosecutor, subject to the court\'s approval. Pinote v. Ayco (2005).',
				application: 'There was no written authority and no court approval. The public prosecutor\'s absence does not transfer control to the private prosecutor.',
				conclusion: 'The judge should have reset the hearing; the testimony was received in violation of the Rules and the judge may be administratively liable.'
			},
			missing: 'If the case were in the MTC, the offended party (or a peace officer) may prosecute when the prosecutor is unavailable — but in the RTC that option does not exist.',
			keys: 'direction and control; written authority; court approval'
		},
		// E — Tricky hypotheticals
		{
			cat: 'E', level: 5, topic: 'Amendment after plea', title: 'Homicide to murder — caption or facts?',
			facts: 'X is arraigned on an information for homicide that alleges that he "shot V from behind while V was asleep, giving him no chance to defend himself." During trial, the prosecutor moves to amend the caption and preamble from "Homicide" to "Murder." In a second case, Y is arraigned on an information for homicide alleging only that he "shot and killed V." During trial, the prosecutor moves to add "with treachery, by shooting V from behind while he was asleep."',
			q: 'Rule on both motions.',
			issue: 'Whether changing homicide to murder after plea is a formal or substantial amendment.',
			alac: {
				answer: 'Grant the motion in X\'s case; deny it in Y\'s case.',
				legalBasis: 'Rule 110, Sec. 14: after plea, only formal amendments with leave and without prejudice. The body of the information, not the caption, determines the offense. Pacoy v. Cajigal (2007): a change of caption with no change in the recital of facts is formal.',
				application: 'In X\'s case the facts constituting treachery were already alleged; the change only conforms the caption to the facts, so X\'s defense and evidence are unaffected. In Y\'s case the amendment adds new facts that qualify the killing and raise the penalty — a change in the recital of facts, which is substantial.',
				conclusion: 'X may be tried for murder on the amended caption; Y may not be charged with murder by amendment after plea and may be convicted only of homicide on the existing information.'
			},
			trap: 'Both motions "change homicide to murder." The answer turns entirely on whether the factual recital changes.',
			tempting: 'Citing Pacoy for the broad proposition that homicide-to-murder after plea is always formal.',
			keys: 'Pacoy v. Cajigal; recital of facts; formal vs. substantial'
		},
		{
			cat: 'E', level: 5, topic: 'Substitution', title: 'Theft charged, estafa proved',
			facts: 'A is charged with theft for "taking ₱500,000 from B\'s office safe." Trial shows that B had entrusted the money to A to deposit, and A kept it. The prosecution has not yet rested.',
			q: 'What should the court do? Can A invoke double jeopardy if a new information is filed?',
			issue: 'Whether the court may dismiss the theft information upon the filing of an estafa information, and whether double jeopardy bars it.',
			alac: {
				answer: 'The court should require the filing of an information for estafa and, upon its filing, dismiss the theft information. A cannot invoke double jeopardy.',
				legalBasis: 'Rule 110, Sec. 14, par. 2 and Rule 119, Sec. 19: when it appears before judgment that a mistake has been made in charging the proper offense and the accused cannot be convicted of the offense charged or one necessarily included in it, the court shall commit the accused to answer for the proper offense and dismiss the original upon the filing of the proper information, provided the accused is not placed in double jeopardy.',
				application: 'Theft (taking without consent) and estafa with abuse of confidence (misappropriation of money received in trust) have different elements; neither is necessarily included in the other. A cannot be convicted of estafa under the theft information, so substitution is the proper course, and jeopardy does not attach to a different offense.',
				conclusion: 'Substitute the information; A may be held if there is good cause to detain him.'
			},
			missing: 'If the evidence had shown qualified theft (a domestic helper\'s taking), the offense would include the one charged; the remedy would be amendment, not substitution — and after plea, A could be convicted only of simple theft.',
			keys: 'Sec. 14 par. 2; Rule 119, Sec. 19; identity of offenses; no double jeopardy'
		},
		{
			cat: 'E', level: 5, topic: 'Venue', title: 'Libel filed where the article was read',
			facts: 'P, a private individual residing in Cebu City, is defamed in a newspaper printed and first published in Manila. P reads the article while on vacation in Makati and files the libel complaint there. An information is filed with the RTC of Makati. D does not move to quash, pleads, and is convicted. On appeal, D raises improper venue for the first time.',
			q: 'Will the appeal prosper?',
			issue: 'Whether improper venue in libel may be raised for the first time on appeal.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'RPC Art. 360 limits the venue of written defamation to the place where the article was printed and first published, or, for a private individual, where he actually resided at the time. Venue is jurisdictional in criminal cases (Isip v. People, 2007), and lack of jurisdiction over the offense is not waived by failure to move to quash (Rule 117, Sec. 9).',
				application: 'Makati is neither the place of printing and first publication (Manila) nor P\'s residence (Cebu City). The RTC of Makati had no jurisdiction over the offense, and D\'s silence did not confer it.',
				conclusion: 'The conviction must be set aside for lack of jurisdiction.'
			},
			trap: 'Applying the civil rule that improper venue is waived if not raised.',
			missing: 'Prescription: libel prescribes in one year (Art. 90). If the case is refiled in the proper venue, check whether the first filing interrupted the period and whether it has run again.',
			keys: 'Art. 360; venue jurisdictional; Rule 117, Sec. 9'
		},
		{
			cat: 'E', level: 5, topic: 'Offended party', title: 'Wrong victim named — cash vs. jewelry',
			facts: 'Two informations for estafa are filed. In the first, the offended party is named as "ABC Lending" for ₱300,000 in cash, but the money belonged to its president, M, personally. In the second, the offended party is named as "Rita" for a specific diamond ring, but the ring belonged to her sister Cynthia. Both errors surface at trial.',
			q: 'What is the effect of each error?',
			issue: 'Whether an error in the name of the offended party in crimes against property is fatal.',
			alac: {
				answer: 'The error is fatal in the first case and immaterial in the second.',
				legalBasis: 'Rule 110, Sec. 12(a); Tiu (p. 48), citing Senador v. People (2013): where the property is generic and not identifiable (such as money), an error in the designation of the offended party is fatal; where the property is specific and identifiable, the error is immaterial.',
				application: 'Cash cannot be identified apart from its owner, so naming the wrong owner describes a different offense. The ring is specific and identifiable; the offense is sufficiently identified by the property itself.',
				conclusion: 'The accused may be acquitted in the first case; the second may proceed, with the true name inserted.'
			},
			keys: 'Sec. 12(a); generic vs. specific property; Senador'
		},
		{
			cat: 'E', level: 5, topic: 'Information — authority', title: 'Unapproved information raised after the prosecution rests',
			facts: 'An assistant city prosecutor files an information for estafa without the written approval of the city prosecutor. The accused posts bail, is arraigned and pleads not guilty, and trial proceeds. After the prosecution rests, the accused moves to dismiss for lack of jurisdiction, citing Cudia v. Court of Appeals and Quisay v. People. Alternatively, before arraignment the judge, on her own, dismisses the case on the same ground.',
			q: 'Rule on the accused\'s motion. Was the judge\'s motu proprio dismissal (in the alternative facts) proper?',
			issue: 'Whether lack of authority of the filing officer is jurisdictional, and whether the court may dismiss on that ground motu proprio.',
			alac: {
				answer: 'Deny the motion. The motu proprio dismissal was improper.',
				legalBasis: 'Villa Gomez v. People, G.R. No. 216824, November 10, 2020 (En Banc): the lack of prior written authority does not affect jurisdiction; it is a ground to quash under Rule 117, Sec. 3(d) that is waived if not raised before plea; earlier contrary doctrines are abandoned; and the court may not dismiss on this ground motu proprio. Rule 117, Sec. 9 exempts only grounds (a), (b), (g) and (i) from waiver.',
				application: 'The accused pleaded without moving to quash, so the defect was waived. In the alternative facts, only the accused may raise this ground; the judge could not dismiss on her own.',
				conclusion: 'Trial continues; in the alternative, the dismissal should be reversed.'
			},
			update: 'Cudia and Quisay reflect the rule reported in Tiu (2017); Villa Gomez abandoned it.',
			trap: 'Reciting the pre-2020 rule because it is in the notes.',
			keys: 'Villa Gomez; Rule 117, Secs. 3(d), 9; no motu proprio dismissal'
		},
		// F — Case-based
		{ cat: 'F', level: 3, topic: 'Pacoy v. Cajigal', q: 'In Pacoy v. Cajigal, why was the change from homicide to murder after arraignment considered a formal amendment? State the four differences between amendment and substitution the Court adopted.', a: 'Only the caption and preamble changed; the recital of facts and the court\'s jurisdiction did not, so there was no prejudice. Differences (from Teehankee v. Madayag): (1) amendment may be formal or substantial, substitution is substantial; (2) amendment before plea needs no leave, substitution needs leave; (3) formal amendment needs no new preliminary investigation or plea, substitution needs both; (4) amendment involves the same or an included offense, substitution a different one, so no double jeopardy.', keys: 'caption only; identity of offense' },
		{ cat: 'F', level: 4, topic: 'People v. Solar', q: 'What did People v. Solar (2019) hold about informations that merely name a qualifying circumstance? How does the holding protect both the accused and the prosecution?', a: 'The information must state the ultimate facts constituting the circumstance; "with treachery" alone is a conclusion of law. The accused is protected by the pre-arraignment remedies (motion to quash under Rule 117, Sec. 3[e]; bill of particulars). The prosecution is protected because an accused who does not use them waives the defect, and the circumstance may be appreciated if proven.', keys: 'ultimate facts; motion to quash; bill of particulars; waiver' },
		{ cat: 'F', level: 4, topic: 'Union Bank v. People', q: 'In Union Bank v. People (2012), why was Makati the proper venue for perjury when the certificate was submitted to a court in Pasay?', a: 'Because the essential elements — the execution of the certificate, the oath before a notary, and the deliberate assertion of falsehood — were alleged to have been committed in Makati. Venue lies where the offense or any essential ingredient occurred (Sec. 15[a]); submission in Pasay was not an element.', keys: 'Sec. 15(a); essential ingredients' },
		// G — Integrated within the Rule
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 110', title: 'Rule 110 integrated — acts of lasciviousness',
			facts: 'M, 15 years old and of normal intelligence, is subjected to acts of lasciviousness by her uncle U in Quezon City. M does not want to file a complaint. Her grandmother G files a sworn complaint with the Office of the City Prosecutor, saying M\'s parents are working abroad and "will not mind." The prosecutor files an information alleging that U committed the act "on or about the first week of June 2024" in "Quezon City, within the jurisdiction of this Court," and that U is M\'s uncle. Before arraignment, the prosecutor moves to amend the information to allege that M was "below 18 years of age" (to qualify the offense under special law), and to correct U\'s surname.',
			q: '(a) Was the complaint validly filed? (b) Is the information sufficient as to date and place? (c) May the amendments be made, and with or without leave?',
			issue: 'Who may file the complaint for acts of lasciviousness; sufficiency of date and place; amendment before plea.',
			alac: {
				answer: '(a) Doubtful — as stated, G\'s filing is premature unless M\'s parents cannot or will not file. (b) Yes. (c) Yes, without leave.',
				legalBasis: 'Rule 110, Sec. 5: the offended party, even if a minor, may initiate the prosecution independently unless incompetent or incapable; where she fails to file, her parents, grandparents or guardian may file, and their right "shall be exercised successively in the order herein provided." Secs. 10–11: approximate date and an allegation that the offense occurred within the court\'s jurisdiction suffice. Sec. 14: before plea, amendment in form or substance is without leave, except downgrading or excluding an accused.',
				application: '(a) M has failed to file, so the right passes to her parents first, then the grandparents. G\'s statement that the parents "will not mind" is not a showing that they are unable or unwilling to file; the safer course is a complaint by the parents (who may file from abroad through proper authentication) or proof that they cannot. (b) The date is not an element of acts of lasciviousness, and the place is alleged within Quezon City. (c) Both amendments occur before plea and neither downgrades the offense nor excludes an accused; adding age is substantial but allowed before plea; correcting the surname is formal.',
				conclusion: '(a) Cure the complaint by having the parents file or by showing they cannot; (b) the information is sufficient; (c) the amendments may be made without leave.'
			},
			missing: 'If M were incompetent or incapacitated, her parents could file for her. If M or any of the persons named expressly pardoned U, prosecution is barred. Whether the conduct is also punishable under a special law (e.g., child-abuse legislation) could change who may file — "prosecution for violation of special laws shall be governed by the provisions thereof."',
			trap: 'Treating any relative as qualified to file. The order is successive: offended party → parents → grandparents → guardian → State.',
			keys: 'Sec. 5 successive order; Secs. 10–11; Sec. 14 before plea'
		},
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 110', title: 'Rule 110 integrated — intervention, prosecution and appeal',
			facts: 'In an estafa case before the RTC, the offended party O did not reserve the civil action. The public prosecutor objects to the appearance of O\'s private prosecutor, saying "the State alone prosecutes crimes." Later, the court acquits the accused for insufficiency of evidence and declares him not civilly liable because "the act from which civil liability might arise did not exist." O wants to appeal.',
			q: '(a) Rule on the public prosecutor\'s objection. (b) What may O appeal, and through whom?',
			issue: 'Right of the offended party to intervene; who may appeal the criminal and civil aspects of an acquittal.',
			alac: {
				answer: '(a) Overrule the objection. (b) O may appeal only the civil aspect, in his own name; the criminal aspect may be appealed only by the OSG — and an acquittal cannot be appealed on the criminal aspect without placing the accused in double jeopardy (save grave abuse amounting to lack of jurisdiction).',
				legalBasis: 'Rule 110, Sec. 16: where the civil action is instituted with the criminal action, the offended party may intervene by counsel; the right must be respected (Lee Pue Liong v. Chua Pue Chin Lee, 2013), subject to the public prosecutor\'s direction and control. Villareal v. Aliga (2014): only the OSG may appeal the criminal aspect; the offended party may appeal the civil aspect.',
				application: 'O did not waive, reserve or previously file the civil action, so he has a right to intervene. On appeal, O\'s interest is limited to civil liability; he may challenge the finding that the act did not exist because that finding extinguishes civil liability ex delicto.',
				conclusion: '(a) The private prosecutor may appear; (b) O may appeal the civil aspect.'
			},
			missing: 'If O had reserved or previously filed the civil action, the public prosecutor\'s objection would be proper.',
			keys: 'Sec. 16; Lee Pue Liong; Villareal; OSG; civil aspect'
		}
	],
	memorize: [
		'Three modes of institution (E110.1) and the chartered-city rule',
		'Six contents of a sufficient information (E110.2)',
		'Who may subscribe a complaint (E110.3) vs. an information (prosecutor only)',
		'The private crimes, who files, and what bars prosecution (E110.4)',
		'Amendment: before plea (free, except downgrade/exclude) vs. after plea (formal, leave, no prejudice)',
		'Four differences between amendment and substitution (E110.9) and the identity-of-offense test',
		'Venue rule of Sec. 15 and its exceptions (E110.6); libel venue under Art. 360 (E110.7)',
		'Updates: Villa Gomez (2020), Solar (2019), Consebido (2025)'
	],
	flashcards: [
		['How is a criminal action instituted for an offense requiring preliminary investigation?', 'By filing the complaint with the proper officer for preliminary investigation (Rule 110, Sec. 1[a]).'],
		['Can a complaint be filed directly with the MeTC in Manila?', 'No. In Manila and other chartered cities, the complaint is filed with the office of the prosecutor unless the charter provides otherwise.'],
		['Effect of institution on prescription?', 'Interrupts it, unless a special law provides otherwise (Sec. 1, last par.).'],
		['Who may subscribe a complaint?', 'The offended party, any peace officer, or other public officer charged with enforcing the law violated.'],
		['Must an information be sworn?', 'No. It is subscribed by the prosecutor, who acts under his oath of office.'],
		['What controls: the caption or the body of the information?', 'The recital of facts in the body.'],
		['Effect of an unalleged aggravating circumstance proven at trial?', 'It cannot be appreciated.'],
		['Effect of a qualifying circumstance alleged only as "with treachery"?', 'Defective (Solar), but waived if the accused does not move to quash or for a bill of particulars before arraignment.'],
		['Amendment before plea that downgrades the offense — requirements?', 'Motion by the prosecutor, notice to the offended party, leave of court; court states reasons and furnishes copies.'],
		['After plea, what amendments are allowed?', 'Formal ones, with leave of court and without prejudice to the accused.'],
		['When is substitution proper?', 'When a mistake has been made in charging the proper offense and the new offense is different (not included or including); before judgment; no double jeopardy.'],
		['Is criminal venue waivable?', 'No. It is jurisdictional.'],
		['Who represents the People on appeal in the CA and SC?', 'The Solicitor General (Ombudsman\'s special prosecutor for Sandiganbayan cases).'],
		['Is lack of the city prosecutor\'s approval of an information jurisdictional?', 'No — waivable if not raised before plea (Villa Gomez v. People, 2020).'],
		['Is rape a private crime?', 'No, since RA 8353 (1997).']
	],
	oral: [
		['Professor: "Mr. X, when is a criminal action instituted?"', 'Under Rule 110, Sec. 1, it depends on whether preliminary investigation is required. If required, by filing the complaint with the proper officer for preliminary investigation. If not, by filing the complaint or information directly with the MTC or MCTC, or the complaint with the prosecutor — and in chartered cities, only with the prosecutor. Institution interrupts prescription unless a special law provides otherwise.'],
		['"Why is the prosecution under the direction and control of the public prosecutor?"', 'Because a crime is an offense against the State; placing control in the prosecutor prevents malicious or unfounded prosecutions by private persons (Crespo v. Mogul). The offended party is only a witness for the State, though he may intervene through counsel for the civil liability.'],
		['"Is the designation in the caption controlling?"', 'No. The character of the crime is determined by the recital of ultimate facts in the body, not the caption or the law cited. An erroneous designation does not vitiate the information if the facts are properly alleged.'],
		['"Distinguish amendment from substitution in one sentence."', 'If the new charge is the same as, includes, or is included in the original, it is amendment; if it is a different offense, it is substitution, which requires leave, a new preliminary investigation and a new plea, and raises no double jeopardy.'],
		['"Can you amend homicide to murder after arraignment?"', 'Only if the facts constituting the qualifying circumstance were already alleged, so that the change is in the caption only (Pacoy v. Cajigal). Adding new facts that qualify the killing is substantial and not allowed after plea.'],
		['"What did Villa Gomez change?"', 'It held that an information filed without the head of office\'s prior written authority is not jurisdictionally defective; the defect is waived if not raised before plea, and courts cannot dismiss motu proprio on that ground. It abandoned the older cases.'],
		['"What are the private crimes?"', 'Adultery and concubinage; seduction, abduction and acts of lasciviousness; and defamation imputing any of them. Rape is no longer one.'],
		['"Where is libel filed?"', 'In the RTC where the article was printed and first published, or, for a private individual, where he resided at the time; for a public officer, where he held office (Manila or elsewhere).']
	],
	checklist: [
		'I can state the three modes of institution and the chartered-city rule without notes.',
		'I can explain how institution affects prescription and name the 2025 change (Consebido).',
		'I can list the six contents of a sufficient information and the rule on qualifying circumstances (Solar).',
		'I can say who signs a complaint and who signs an information, and whether each must be sworn.',
		'I can state when a private prosecutor may proceed without the public prosecutor.',
		'I can list the private crimes, who may file, and the bars (consent, pardon, both guilty parties).',
		'I can decide whether an amendment is formal or substantial using the three tests.',
		'I can distinguish amendment from substitution in four points.',
		'I can apply the venue rules, including vehicles, vessels, libel and BP 22.',
		'I can state Villa Gomez (2020) and explain why lack of authority is waivable.'
	],
	sheet: [
		'<b>Institution (Sec. 1):</b> complaint with PI officer · or directly with MTC/MCTC · or with prosecutor (only option in chartered cities). Interrupts prescription unless special law says otherwise.',
		'<b>Complaint</b> = sworn, by offended party / peace officer / enforcing officer. <b>Information</b> = by prosecutor, unsworn, filed in court.',
		'<b>Prosecutor controls</b> (Sec. 5); private prosecutor alone only with written authority + court approval; MTC: offended party/peace officer/public officer if prosecutor unavailable.',
		'<b>Private crimes:</b> adultery/concubinage (spouse; both parties; no consent/pardon); seduction/abduction/acts of lasciviousness (victim → parents → grandparents → guardian → State); defamation imputing them. Rape is public.',
		'<b>Sufficiency (Sec. 6):</b> name, designation, acts, victim, approximate date, place. Body controls; circumstances as ultimate facts (Solar — waivable).',
		'<b>Amendment (Sec. 14):</b> before plea free (except downgrade/exclude → motion, notice, leave); after plea formal only, leave, no prejudice. <b>Substitution:</b> different offense, before judgment, no jeopardy.',
		'<b>Venue (Sec. 15):</b> where committed or any ingredient occurred; jurisdictional; vehicles, vessels, Art. 2 crimes, libel (Art. 360), BP 22 (transitory).',
		'<b>Updates:</b> Villa Gomez (2020) lack of authority waivable · Solar (2019) · Consebido (2025) · 2022 Expedited Rules.'
	],
	watchFor: `<strong>Watch for: which document, signed by whom, changed when.</strong>
<ul>
<li>Is it a <em>complaint</em> (sworn; victim or officer) or an <em>information</em> (prosecutor)? Is it a private crime?</li>
<li>Amendment questions: before or after plea? Downgrade or exclusion? Did the <em>facts</em> change or only the caption?</li>
<li>Venue is jurisdictional. Lack of the prosecutor's authority is not (Villa Gomez, 2020).</li>
</ul>`
};
