import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 112 — Preliminary Investigation (section numbers as amended by A.M. No. 05-8-26-SC). */
export const r112: RuleChapter = {
	id: 'r112',
	n: 112,
	title: 'Preliminary Investigation',
	short: 'R112 Preliminary Investigation',
	tiu: 'pp. 66–107 (including DOJ and Ombudsman rules, summary procedure and barangay conciliation)',
	plain: `Before a serious charge (penalty of at least 4 years, 2 months and 1 day) is filed in court, a prosecutor must first check whether there is enough basis to put the respondent on trial. That check is the preliminary investigation: the complainant files affidavits, the respondent answers with counter-affidavits, and the prosecutor decides whether there is probable cause. If yes, an information is filed in court, and the judge must then decide — independently — whether there is probable cause to issue a warrant of arrest. If the person was arrested without a warrant, a quicker summary review (inquest) replaces the preliminary investigation, though the arrested person can still ask for one.`,
	purpose: `To protect the innocent from hasty, malicious and oppressive prosecution and from the trouble, expense and anxiety of a public trial, and to protect the State from useless and expensive trials (DO 153, Part III, Sec. 2, in Tiu, p. 70).`,
	stage: `Between institution (${ruleLink('r110', 'sections', 'Rule 110, Sec. 1')}) and the filing of the information in court; then the judge's determination of probable cause for a warrant (Sec. 5) links to ${ruleLink('r113')} (arrest). Inquest (Sec. 6) follows a warrantless arrest.`,
	questions: [
		'What is a preliminary investigation, and when is it required?',
		'Who may conduct it?',
		'What is the step-by-step procedure, and what are the periods at each step?',
		'What happens after the investigating prosecutor resolves the case, and what remedies does the losing party have?',
		'What must the judge do when the information is filed, and when is no warrant needed?',
		'What happens when the respondent was arrested without a warrant (inquest)?',
		'What is the procedure for offenses that do not require preliminary investigation?',
		'What is the effect of the absence of a preliminary investigation, and how is it raised?'
	],
	relations: `Rule 112 follows ${ruleLink('r110')} (the complaint filed under Sec. 1 starts it) and leads to ${ruleLink('r113')} (warrants issued under Sec. 5; warrantless arrests that trigger inquest under Sec. 6) and ${ruleLink('r114')} (bail may be applied for even during a preliminary investigation after inquest; Rule 114, Sec. 26 preserves objections to the absence of preliminary investigation if raised before plea). A pending petition for review with the DOJ suspends arraignment (${ruleLink('r116')}, Sec. 11[c]). The absence of preliminary investigation is not a ground to quash (${ruleLink('r117')}).`,
	principles: [
		'<b>Preliminary investigation is statutory, not constitutional</b> — but where the law grants it, it is a substantive right and a component of due process (Tiu, p. 67).',
		'<b>It is waivable</b>: it must be invoked before or at the time of plea (Rule 114, Sec. 26; People v. Buluran, in Tiu).',
		'<b>It determines probable cause, not guilt</b>: "Is the respondent probably guilty and should he go to trial?"',
		'<b>Two determinations of probable cause</b>: executive (prosecutor — whether to file) and judicial (judge — whether to issue a warrant). Each is independent.',
		'<b>Once the information is filed, the court controls the case</b> (Crespo v. Mogul); a motion to withdraw requires the court\'s own assessment (Lanier v. People).',
		'<b>Absence of preliminary investigation does not affect jurisdiction</b> and is not a ground to quash; the remedy is to suspend proceedings and remand for investigation.'
	],
	sections: [
		{
			n: '1',
			title: 'Preliminary investigation defined; when required',
			text: `"Preliminary investigation is an inquiry or proceeding to determine whether there is sufficient ground to engender a well-founded belief that a crime has been committed and the respondent is probably guilty thereof, and should be held for trial." Except as provided in the section on persons lawfully arrested without a warrant, a preliminary investigation is required before the filing of a complaint or information for an offense where the penalty prescribed by law is "at least four (4) years, two (2) months and one (1) day without regard to the fine."`,
			plain: `A preliminary investigation is a screening, not a trial. It is required when the penalty prescribed by law is at least 4 years, 2 months and 1 day — whatever the fine.`,
			reqs: `(1) An offense with a prescribed penalty of at least 4 years, 2 months and 1 day; (2) the respondent was not lawfully arrested without a warrant (otherwise inquest applies, Sec. 6).`,
			who: `Complainant; respondent; investigating officer.`,
			when: `Before the complaint or information is filed in court. The right must be invoked before or at plea.`,
			exceptions: `(1) Lawful warrantless arrest — inquest instead (Sec. 6). (2) Offenses below the threshold — Sec. 8 procedure. (3) Expedited Rules offenses — their own procedure.`,
			effect: `If required but not conducted: the information is not void and the court keeps jurisdiction; the accused may ask the court to suspend proceedings and remand for preliminary investigation — before plea. Failure to invoke it before plea waives it.`,
			cases: `${caseLink('larranaga', 'Larrañaga v. CA')} (remand, not dismissal); <i>Socrates v. Sandiganbayan</i> and <i>Enriquez v. Sarmiento</i> (absence of PI not a ground to quash and does not affect jurisdiction — Tiu, p. 77).`,
			hypo: `An information for estafa (penalty above 4 years, 2 months and 1 day) is filed without preliminary investigation. Before arraignment, the accused moves for preliminary investigation. The court should hold the proceedings in abeyance and order the prosecutor to conduct it — not dismiss the case.`,
			trap: `Measuring the threshold by the penalty that would actually be <b>imposed</b> (after modifying circumstances). The test is the penalty <b>prescribed by law</b>, "without regard to the fine."`,
			update: `DOJ Department Circular No. 015 (2024 DOJ-NPS Rules on Preliminary Investigations and Inquest Proceedings) applies the formal preliminary investigation to offenses with a prescribed penalty of at least six years and one day, and adopts a higher internal standard — "prima facie evidence with reasonable certainty of conviction." DOJ Department Circular No. 028 (2024) provides summary investigation (imprisonment of one day to one year, or fine) and expedited preliminary investigation (up to six years). These are executive rules for prosecutors; the Rules of Court threshold (4 years, 2 months and 1 day) and the probable-cause standard remain the standard under the Rules of Court.`,
			verify: `The cross-reference in Sec. 1 ("except as provided in section 7") was not renumbered when A.M. No. 05-8-26-SC (2005) deleted the old Sec. 5 on investigating judges; it refers to the warrantless-arrest section, now Sec. 6.`
		},
		{
			n: '2',
			title: 'Officers authorized to conduct preliminary investigations',
			text: `(a) Provincial or City Prosecutors and their assistants; (b) National and Regional State Prosecutors; and (c) other officers as may be authorized by law. Their authority includes all crimes cognizable by the proper court in their respective territorial jurisdictions (as amended by A.M. No. 05-8-26-SC, effective October 3, 2005).`,
			plain: `Prosecutors investigate. Judges no longer do (since 2005). Other bodies do when a law says so — chiefly the Ombudsman and the COMELEC.`,
			who: `City and provincial prosecutors and assistants; national and regional state prosecutors; the Ombudsman (primary jurisdiction over Sandiganbayan cases, RA 6770, Sec. 15[1]); the COMELEC (election offenses, concurrently with other prosecuting arms — RA 9369, Sec. 43); the PCGG (cases it investigated — EO 14, 1986).`,
			exceptions: `First-level court judges no longer conduct preliminary investigation (A.M. No. 05-8-26-SC).`,
			effect: `A preliminary investigation by an unauthorized officer is void and does not satisfy the right; Tiu notes that void proceedings do not interrupt prescription (citing Disini v. Sandiganbayan).`,
			hypo: `A municipal judge conducts a preliminary investigation in 2026 for a theft punishable by prision mayor. The investigation is unauthorized; the accused may demand a proper preliminary investigation before plea.`,
			trap: `Saying "MTC judges may conduct preliminary investigation" — true before October 3, 2005 only.`
		},
		{
			n: '3',
			title: 'Procedure',
			text: `(a) The complaint states the respondent's address and is accompanied by the affidavits of the complainant and witnesses and supporting documents, in as many copies as there are respondents plus two; the affidavits are subscribed and sworn to before a prosecutor or government official authorized to administer oaths (or, if unavailable, a notary public), who certifies that he personally examined the affiants and is satisfied they voluntarily executed and understood their affidavits. (b) Within ten days after filing, the investigating officer either dismisses the complaint if he finds no ground to continue, or issues a subpoena with copies of the complaint and supporting documents; the respondent may examine and copy the complainant's evidence; objects need only be made available. (c) Within ten days from receipt of the subpoena, the respondent submits his counter-affidavit and those of his witnesses, sworn and certified the same way; "The respondent shall not be allowed to file a motion to dismiss in lieu of a counter-affidavit." (d) If the respondent cannot be subpoenaed, or does not submit counter-affidavits within ten days, the officer resolves the complaint on the complainant's evidence. (e) The officer may set a clarificatory hearing; the parties may attend but without the right to examine or cross-examine, though they may submit questions; it is held within ten days from submission (or expiration) of counter-affidavits and terminated within five days. (f) Within ten days after the investigation, the officer determines whether there is sufficient ground to hold the respondent for trial.`,
			plain: `Paper first: complaint with sworn affidavits; ten days for the prosecutor to dismiss or subpoena; ten days for the respondent to answer with sworn counter-affidavits (no motion to dismiss); an optional question-and-answer hearing with no cross-examination; then ten days to decide.`,
			reqs: `Complaint with respondent's address; sworn affidavits with the administering officer's certification; copies; subpoena with attachments; sworn counter-affidavits.`,
			who: `Complainant (any competent person for public crimes — Santos-Concio v. DOJ); respondent; investigating officer; administering officer or notary.`,
			when: `10 days (dismiss or subpoena) · 10 days (counter-affidavit) · hearing within 10 days, terminated within 5 · 10 days to resolve.`,
			exceptions: `(1) Reply and rejoinder affidavits are not provided for by Rule 112 but are allowed in practice (Tiu, citing Riano). (2) Ombudsman cases follow its own rules (A.O. No. 07), e.g., no motion to dismiss except for lack of jurisdiction. (3) DOJ rules set the prosecutors' internal procedure (DC 015, 2024).`,
			effect: `Non-submission of a counter-affidavit leads to resolution on the complainant's evidence; as long as efforts were made to reach the respondent, the investigation is valid (Ocampo v. Abando, 2014). Want of oath in the complaint is a defect of form only (Sasot v. People, 2005).`,
			cases: `${caseLink('santos-concio', 'Santos-Concio v. DOJ (2008)')}; ${caseLink('estrada-ombudsman', 'Estrada v. Ombudsman (2015)')}; ${caseLink('ocampo-abando', 'Ocampo v. Abando (2014)')}; <i>Sasot v. People</i> (2005); <i>Artillero v. Casimiro</i> (2012 — failure to furnish the complainant a copy of the counter-affidavit is a procedural defect).`,
			hypo: `Respondent R receives a subpoena and files a "motion to dismiss" arguing the complaint states no offense. The prosecutor may disregard it: a motion to dismiss cannot take the place of a counter-affidavit. If R files nothing else within ten days, the complaint is resolved on the complainant's evidence.`,
			trap: `A respondent has no right to cross-examine the complainant's witnesses, and no right to copies of his co-respondents' counter-affidavits (Estrada v. Ombudsman, 2015).`
		},
		{
			n: '4',
			title: 'Resolution of investigating prosecutor and its review',
			text: `If the investigating prosecutor finds cause to hold the respondent for trial, he prepares the resolution and information and certifies under oath in the information that he (or an authorized officer) personally examined the complainant and his witnesses; that there is reasonable ground to believe that a crime has been committed and that the accused is probably guilty thereof; that the accused was informed of the complaint and the evidence against him; and that he was given an opportunity to submit controverting evidence. Otherwise, he recommends dismissal. Within five days from his resolution he forwards the record to the provincial or city prosecutor or chief state prosecutor (or the Ombudsman or deputy for Sandiganbayan cases), who acts within ten days and informs the parties. "No complaint or information may be filed or dismissed by an investigating prosecutor without the prior written authority or approval of the provincial or city prosecutor or chief state prosecutor or the Ombudsman or his deputy." If the head disapproves a recommendation to dismiss, he may file the information himself or direct another prosecutor to do so without another preliminary investigation. If the Secretary of Justice, on petition or motu proprio, reverses or modifies the resolution, he directs the prosecutor to file the information without another preliminary investigation or to dismiss or move to dismiss, with notice to the parties; the same rule applies to the Ombudsman.`,
			plain: `The investigating prosecutor only recommends. His boss approves within ten days. The Secretary of Justice can reverse on review. Nothing is filed or dismissed without the boss's written approval.`,
			reqs: `Resolution; information with the certification under oath; forwarding within 5 days; action by the head within 10 days; prior written approval.`,
			who: `Investigating prosecutor; head of office (provincial/city prosecutor, chief state prosecutor, Ombudsman or deputy); Secretary of Justice; parties.`,
			when: `Forward within 5 days; head acts within 10 days. DOJ appeal: petition for review within 15 days from receipt of the resolution (DC 70, 2000 NPS Rule on Appeal); one motion for reconsideration (DC 70: within 15 days; DO 153: within 10 days); MR of the Secretary's resolution within 10 days. Office of the President: only for offenses punishable by reclusion perpetua to death, new and material issues, within 30 days, prescription not lapsing within 6 months (MC 58).`,
			exceptions: `A petition for review is not given due course if the accused had already been arraigned when it was filed; arraignment after filing does not bar review (DC 70, Sec. 7). Petitions from resolutions in MTC-cognizable cases outside NCR go to the Regional State Prosecutor (DC 70-A).`,
			effect: `The certification is not an essential part of the information; its absence does not invalidate it (Alvizo v. Sandiganbayan, in Tiu). A pending petition for review does not bar the filing of the information, but the court proceedings should be held in abeyance; arraignment may be suspended for up to sixty days (Rule 116, Sec. 11[c]). The court is not bound by the Secretary's resolution (Crespo; Ledesma v. CA, 1997).`,
			cases: `${caseLink('crespo', 'Crespo v. Mogul (1987)')}; ${caseLink('lanier', 'Lanier v. People (2014)')}; <i>Ledesma v. CA</i> (1997); <i>Joaquin v. Drilon</i> (the Secretary may consider unassigned errors); <i>Community Rural Bank of Guimba v. Talavera</i> (2005 — the prosecutor cannot reinvestigate to overrule the Secretary); ${caseLink('gatchalian', 'Gatchalian v. Ombudsman (2018)')}.`,
			hypo: `The city prosecutor approves the filing of an estafa information. Respondent files a petition for review with the DOJ and, in court, a motion to suspend arraignment. The court should suspend arraignment for up to 60 days; it may still issue a warrant of arrest (Viudez v. CA, 2009, in Tiu).`,
			trap: `Remedies differ by office: DOJ resolution → petition for review to the Secretary → Rule 65 to the CA (CTA for tax and tariff cases). Ombudsman resolution in a criminal case → Rule 65 directly to the Supreme Court (Gatchalian, 2018).`,
			update: `DOJ Department Circular No. 015 (2024) now governs NPS preliminary investigations; check whether its periods for motions for reconsideration and petitions for review replace those of DO 153 and DC 70 reproduced in Tiu.`,
			verify: `Periods for MR and petition for review under the 2024 DOJ rules were not confirmed.`
		},
		{
			n: '5',
			title: 'When warrant of arrest may issue',
			text: `(a) By the RTC: within ten days from the filing of the complaint or information, the judge "shall personally evaluate the resolution of the prosecutor and its supporting evidence." He may immediately dismiss the case if the evidence on record clearly fails to establish probable cause. If he finds probable cause, he issues a warrant of arrest, or a commitment order if the accused has already been arrested under a warrant or the information was filed after inquest. In case of doubt, he may order the prosecutor to present additional evidence within five days from notice, and the issue must be resolved within thirty days from the filing of the complaint or information. (b) By the MTC: preliminary investigation of cases within the first-level courts' jurisdiction, when required, is conducted by the prosecutor; the warrant procedure follows paragraph (a). (c) No warrant issues if the accused is already under detention under a warrant issued by the MTC, or if the complaint or information was filed after inquest (Sec. 6), or if the offense is penalized by fine only.`,
			plain: `When the information reaches the RTC, the judge has ten days to look at the prosecutor's resolution and evidence himself and decide: dismiss, issue a warrant (or a commitment order if the accused is already held), or ask for more evidence (five days; decide within thirty days of filing).`,
			reqs: `Personal evaluation by the judge of the resolution and supporting evidence — not necessarily personal examination of witnesses (Soliven v. Makasiar; Ocampo v. Abando).`,
			who: `Judge; prosecutor; accused.`,
			when: `10 days to evaluate; 5 days for additional evidence; resolve within 30 days from filing.`,
			exceptions: `No warrant: accused already detained; filed after inquest (commitment order instead); fine only; Sec. 8(b) cases (summons may issue); summary/expedited procedure cases (arrest only for failure to appear).`,
			effect: `A warrant implies a finding of probable cause. A dismissal for lack of probable cause before arraignment is a final order appealable by the prosecution (no jeopardy); the prosecution may also refile with new evidence (Cajipe v. People, 2014).`,
			cases: `${caseLink('soliven', 'Soliven v. Makasiar (as applied in AAA v. Carbonell, 2007)')}; ${caseLink('ocampo-abando', 'Ocampo v. Abando (2014)')}; <i>Webb v. De Leon</i>; <i>Okabe v. Gutierrez</i>; <i>Anlud Metal Recycling v. Ang</i> (2015 — courts are not bound by the prosecutor's finding); ${caseLink('cajipe', 'Cajipe v. People (2014)')}.`,
			hypo: `The RTC judge issues a warrant the day after the information is filed, relying only on the prosecutor's certification without looking at the affidavits. The warrant is vulnerable: the judge must personally evaluate the resolution and supporting evidence, not just the certification.`,
			trap: `Under the 2017 Revised Guidelines for Continuous Trial, a "motion for judicial determination of probable cause" is a <b>prohibited motion</b>, denied outright. The judge determines probable cause on his own; the accused may move to quash a warrant (a meritorious motion).`,
			update: `Revised Guidelines for Continuous Trial (A.M. No. 15-06-10-SC, effective September 1, 2017), III.2(b)(i).`
		},
		{
			n: '6',
			title: 'When accused lawfully arrested without warrant',
			text: `When a person is lawfully arrested without a warrant for an offense requiring preliminary investigation, the complaint or information may be filed by a prosecutor without such investigation, provided an inquest has been conducted in accordance with existing rules. If no inquest prosecutor is available, the complaint may be filed by the offended party or a peace officer directly with the proper court on the basis of the affidavit of the offended party or arresting officer or person. Before the complaint or information is filed, the person arrested may ask for a preliminary investigation, but he must sign a waiver of Art. 125 of the RPC in the presence of his counsel; notwithstanding the waiver, he may apply for bail, and the investigation must be terminated within fifteen days from its inception. After the filing in court without a preliminary investigation, the accused may, within five days from the time he learns of its filing, ask for a preliminary investigation with the same right to adduce evidence.`,
			plain: `Arrested without a warrant? A quick inquest replaces the full preliminary investigation. You can still get a full one: before the case is filed (sign an Art. 125 waiver with your lawyer; 15 days) or within 5 days after you learn the case was filed.`,
			reqs: `Inquest: (1) lawful warrantless arrest; (2) offense requiring preliminary investigation. PI before filing: (1) request; (2) written waiver of Art. 125 signed in the presence of counsel (RA 7438). PI after filing: (1) motion within 5 days from learning of the filing; (2) no prior preliminary investigation.`,
			who: `Inquest prosecutor; arrested person and counsel; offended party or peace officer (direct filing if no inquest prosecutor); court.`,
			when: `Inquest within Art. 125 periods (12, 18 or 36 hours depending on the penalty). PI after waiver: within 15 days. PI after filing: request within 5 days from learning of the filing.`,
			exceptions: `If the offense does not require preliminary investigation, no inquest is required (Tiu, though in practice one is held). If the arrest was unlawful, the inquest prosecutor recommends release (DO 153, Part II, Sec. 9).`,
			effect: `Failure to ask for preliminary investigation within five days waives it. Under the 2017 Revised Guidelines, a motion for preliminary investigation filed beyond the 5-day period is a prohibited motion. An inquest for an offense different from the one for which the person was arrested is void (Beltran v. People, in Tiu).`,
			cases: `RA 7438, Sec. 2 (last paragraph): custodial investigation includes the practice of issuing an "invitation" to a person investigated for an offense he is suspected to have committed.`,
			verify: `How Art. 125 hours are counted for "invited" persons and the start of detention: check the current DOJ inquest rules (DC 015, 2024).`,
			hypo: `X is arrested in flagrante for robbery at 9 p.m. on Monday. Robbery carries an afflictive penalty, so he must be delivered to judicial authorities within 36 hours. At the inquest he asks for a preliminary investigation and signs an Art. 125 waiver with his lawyer present; the investigation must end within 15 days, and he may apply for bail meanwhile.`,
			trap: `The Art. 125 waiver must be in writing and signed in the presence of counsel — a waiver signed without counsel is void (RA 7438).`
		},
		{
			n: '7',
			title: 'Records',
			text: `(a) An information or complaint filed in court shall be supported by the affidavits and counter-affidavits of the parties and their witnesses, the other supporting evidence and the resolution. (b) The record of the preliminary investigation shall not form part of the record of the case; the court, on its own or on motion, may order its production when necessary to resolve the case or an incident, or when it is to be introduced as evidence.`,
			plain: `The information goes to court with the affidavits and the resolution, so the judge can evaluate probable cause. The whole preliminary-investigation file stays out of the case record unless the court calls for it.`,
			effect: `The judge evaluates probable cause from these records (Sec. 5). Affidavits from the preliminary investigation are not evidence at trial unless properly presented.`,
			hypo: `The defense wants to impeach a prosecution witness with his preliminary-investigation affidavit. It may move that the court order its production.`,
			trap: `"Part of the record of the case" — the preliminary-investigation record is <b>not</b>, unless ordered produced.`
		},
		{
			n: '8',
			title: 'Cases not requiring a preliminary investigation nor covered by the Rule on Summary Procedure',
			text: `(a) If filed with the prosecutor: for an offense punishable by imprisonment of less than four years, two months and one day, the procedure in Sec. 3(a) is observed and the prosecutor acts on the complaint based on the complainant's affidavits and supporting documents within ten days from its filing. (b) If filed with the MTC or MCTC: the procedure in Sec. 3(a) is observed; within ten days, the judge, after personally evaluating the evidence or personally examining in writing and under oath the complainant and witnesses in the form of searching questions and answers, dismisses the complaint if he finds no probable cause; he may require additional evidence within ten days from notice and, if still no probable cause, dismiss within ten days from its submission or expiration of the period. If he finds probable cause, he issues a warrant of arrest, or a commitment order if the accused is already arrested; but if he is satisfied there is no need to place the accused under custody, he may issue summons instead.`,
			plain: `Lighter offenses get no preliminary investigation. The prosecutor (10 days) or the MTC judge (10 days, plus 10 for more evidence) checks probable cause from the complainant's papers alone. The judge may issue a summons instead of a warrant.`,
			reqs: `Complaint with sworn affidavits (Sec. 3[a]); probable-cause determination on the complainant's evidence.`,
			who: `Prosecutor or MTC/MCTC judge; complainant.`,
			when: `Prosecutor: 10 days. Judge: 10 days; additional evidence within 10 days from notice; dismissal within 10 days after.`,
			exceptions: `Offenses under the Rule on Summary Procedure (now the 2022 Rules on Expedited Procedures) follow their own rules.`,
			effect: `Summons in lieu of a warrant is "the only criminal procedure provision which recognizes the issuance of a summons" (Tiu, p. 90).`,
			hypo: `Less serious physical injuries (arresto mayor) in a province: the victim files directly with the MCTC. Within ten days, the judge evaluates the affidavits, finds probable cause, and — since the accused is a local resident with a fixed job — issues a summons.`,
			trap: `Under the 2017 Revised Guidelines, a motion for preliminary investigation in a Sec. 8 case is a prohibited motion (there is no right to it).`,
			update: `Tiu cites this section as "Sec. 9" in places, using the pre-2005 numbering. The coverage of the summary procedure in Tiu (penalty not exceeding six months or a fine of ₱1,000) is from the 1991 Rule; the 2022 Rules on Expedited Procedures cover offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000 (plus traffic, rental-law, ordinance and BP 22 cases).`
		}
	],
	reqs: [
		{
			name: 'Preliminary investigation when required (Sec. 1)',
			source: 'Rule 112, Secs. 1–3; Rule 114, Sec. 26',
			what: 'An inquiry into probable cause, with notice to the respondent and an opportunity to submit counter-affidavits.',
			who: 'An officer authorized under Sec. 2.',
			when: 'Before the information is filed, for offenses with a prescribed penalty of at least 4 years, 2 months and 1 day.',
			where: 'The prosecution office (or Ombudsman/COMELEC) with territorial authority.',
			form: 'Sworn complaint and affidavits; subpoena; sworn counter-affidavits; written resolution.',
			missing: 'The information remains valid and the court keeps jurisdiction; on timely motion, the court suspends proceedings and remands for preliminary investigation (Larrañaga). Not a ground to quash.',
			defect: 'Waivable',
			defectNote: 'Waived if not invoked before or at plea (Rule 114, Sec. 26; People v. Buluran). It is never jurisdictional (Enriquez v. Sarmiento, in Tiu).'
		},
		{
			name: 'Sworn affidavits with the administering officer\'s certification (Sec. 3[a])',
			source: 'Rule 112, Sec. 3(a), (c)',
			what: 'Affidavits subscribed and sworn to before a prosecutor or authorized official (notary only if unavailable), who certifies personal examination of the affiants.',
			who: 'Complainant and witnesses; respondent and witnesses; administering officer.',
			when: 'With the complaint; with the counter-affidavit within 10 days.',
			form: 'Written, sworn, certified.',
			missing: 'Defect of form (Sasot v. People, 2005); the prosecutor may require compliance or dismiss outright (DO 153, Part III, Sec. 14[e], in Tiu).',
			defect: 'Curable',
			defectNote: 'Want of oath does not affect the substantial rights of the respondent; it can be cured by re-subscribing. It does not void a later information.'
		},
		{
			name: 'Prior written approval of the head of office (Sec. 4)',
			source: 'Rule 112, Sec. 4, par. 3; Rule 117, Sec. 3(d)',
			what: 'Written authority or approval before filing or dismissing a complaint or information.',
			who: 'Provincial/city prosecutor, chief state prosecutor, Ombudsman or deputy.',
			when: 'Before filing or dismissal.',
			missing: 'Information quashable for lack of authority of the filing officer.',
			defect: 'Waivable',
			defectNote: 'Not jurisdictional and waived if not raised before plea (Villa Gomez v. People, 2020, En Banc). See Rule 110, Sec. 4.'
		},
		{
			name: 'Judicial determination of probable cause (Sec. 5)',
			source: 'Const., Art. III, Sec. 2; Rule 112, Sec. 5',
			what: 'Personal evaluation by the judge of the prosecutor\'s resolution and supporting evidence.',
			who: 'The judge — personally.',
			when: 'Within 10 days of filing; resolve doubtful cases within 30 days.',
			missing: 'A warrant issued without personal evaluation is void; the accused may move to quash the warrant (a meritorious motion under the 2017 Guidelines).',
			defect: 'Waivable',
			defectNote: 'The judge cannot dispense with personal determination — it is a constitutional requirement for a valid warrant. But the accused waives objections to the warrant or arrest if he does not raise them before plea (Rule 114, Sec. 26), and an invalid warrant does not oust the court of jurisdiction to try the case.'
		},
		{
			name: 'Waiver of Art. 125 to obtain preliminary investigation after warrantless arrest (Sec. 6)',
			source: 'Rule 112, Sec. 6; RPC Art. 125; RA 7438',
			what: 'A written waiver of the Art. 125 periods.',
			who: 'The arrested person, in the presence of counsel.',
			when: 'Before the complaint or information is filed.',
			form: 'Written; signed in the presence of counsel.',
			missing: 'Without a valid waiver, the person must be delivered to judicial authorities (or released) within the Art. 125 period; the prosecutor proceeds by inquest.',
			defect: 'Not waivable',
			defectNote: 'The counsel requirement protects the detainee; a waiver signed without counsel is void and cannot justify continued detention.'
		},
		{
			name: 'Request for preliminary investigation after filing (Sec. 6, last par.)',
			source: 'Rule 112, Sec. 6; 2017 Revised Guidelines for Continuous Trial, III.2(b)(ii)',
			what: 'A motion asking for preliminary investigation.',
			who: 'The accused.',
			when: 'Within 5 days from the time he learns of the filing of the information.',
			where: 'The court where the case is pending.',
			missing: 'The right is waived; a late motion is a prohibited motion denied outright.',
			defect: 'Waivable',
			defectNote: 'The five-day period is strictly applied; failure to move in time is a waiver.'
		}
	],
	enums: [
		{
			id: 'E112.1',
			name: 'Instances when probable cause must be determined',
			source: 'Tiu, p. 68 (Rule 112, Secs. 1, 3, 5, 8; Rule 113, Sec. 5[b]; Rule 126, Sec. 4)',
			kind: 'notes',
			memorize: true,
			lead: 'Probable cause must be determined in four instances',
			items: [
				{ t: 'By the prosecutor in preliminary investigation', d: 'Executive determination: whether to file an information (Rule 112, Secs. 1 and 3).', s: 'by the prosecutor — whether to file' },
				{ t: 'By the judge on the filing of the information', d: 'Judicial determination: whether to issue a warrant of arrest or commitment order (Rule 112, Secs. 5 and 8).', s: 'by the judge — whether to issue a warrant' },
				{ t: 'By a peace officer or private person making a warrantless arrest', d: 'When an offense has just been committed and he has probable cause based on personal knowledge (Rule 113, Sec. 5[b]).', s: 'by the arresting person — hot pursuit' },
				{ t: 'By the judge issuing a search warrant', d: 'In connection with one specific offense, after personally examining the complainant and witnesses (Rule 126, Sec. 4).', s: 'by the judge — search warrant' }
			],
			question: 'In what instances must probable cause be determined under the Rules on Criminal Procedure?'
		},
		{
			id: 'E112.2',
			name: 'Officers authorized to conduct preliminary investigation',
			source: 'Rule 112, Sec. 2 (as amended by A.M. No. 05-8-26-SC); Tiu, pp. 68–69',
			kind: 'rule',
			memorize: true,
			lead: 'Under Rule 112, Sec. 2, preliminary investigation may be conducted by',
			items: [
				{ t: 'Provincial or city prosecutors and their assistants', d: 'For all crimes cognizable by the proper court within their territory.', s: 'provincial and city prosecutors and assistants' },
				{ t: 'National and regional state prosecutors', d: 'DOJ prosecutors with national or regional reach.', s: 'national and regional state prosecutors' },
				{ t: 'Other officers authorized by law', d: 'E.g., the Ombudsman (primary jurisdiction over Sandiganbayan cases), the COMELEC (election offenses, concurrent under RA 9369), the PCGG (EO 14).', s: 'other officers authorized by law (Ombudsman, COMELEC, PCGG)' }
			],
			exceptions: 'Judges of first-level courts no longer conduct preliminary investigation (since October 3, 2005).',
			question: 'Who may conduct a preliminary investigation? May an MTC judge?'
		},
		{
			id: 'E112.3',
			name: 'Steps in a preliminary investigation',
			source: 'Rule 112, Sec. 3(a)–(f)',
			kind: 'rule',
			ordered: true,
			memorize: true,
			lead: 'Under Rule 112, Sec. 3, the preliminary investigation proceeds as follows',
			items: [
				{ t: 'Filing of the complaint with sworn affidavits and supporting documents', d: 'With the respondent\'s address, in copies for each respondent plus two; affidavits certified by the administering officer.', s: 'complaint with sworn, certified affidavits' },
				{ t: 'Within 10 days: dismissal or subpoena', d: 'The officer dismisses if there is no ground to continue, or subpoenas the respondent with copies; the respondent may examine the complainant\'s evidence.', s: '10 days — dismiss or subpoena' },
				{ t: 'Within 10 days from receipt: counter-affidavit', d: 'Sworn and certified; no motion to dismiss in lieu of a counter-affidavit.', s: '10 days — counter-affidavit; no motion to dismiss' },
				{ t: 'If no counter-affidavit or respondent cannot be subpoenaed: resolution on the complainant\'s evidence', d: 'Ex parte resolution.', s: 'default — resolve on complainant\'s evidence' },
				{ t: 'Optional clarificatory hearing', d: 'Within 10 days from submission or expiration of counter-affidavits; terminated within 5 days; no cross-examination, but questions may be submitted.', s: 'optional hearing — 10 days, ends within 5; no cross' },
				{ t: 'Within 10 days after the investigation: determination', d: 'Whether there is sufficient ground to hold the respondent for trial.', s: '10 days — resolve' }
			],
			memory: '<b>C-10-10-D-H-10</b>: Complaint · 10 (subpoena) · 10 (counter) · Default · Hearing (10/5) · 10 (resolve).',
			tip: 'Examiners ask for the periods. Write each step with its number of days.',
			question: 'Outline the procedure of preliminary investigation under Rule 112, Sec. 3, with the periods.'
		},
		{
			id: 'E112.4',
			name: 'Contents of the prosecutor\'s certification in the information',
			source: 'Rule 112, Sec. 4, par. 1',
			kind: 'rule',
			lead: 'The investigating prosecutor certifies under oath in the information',
			items: [
				{ t: 'That he, or as shown by the record an authorized officer, personally examined the complainant and his witnesses', d: 'The examination may be done by the investigating prosecutor or, if the record shows it, by another officer authorized to conduct preliminary investigation.', s: 'personal examination of complainant and witnesses' },
				{ t: 'That there is reasonable ground to believe that a crime has been committed and that the accused is probably guilty thereof', d: 'The probable-cause finding itself: a well-founded belief, not proof beyond reasonable doubt.', s: 'reasonable ground — crime committed, accused probably guilty' },
				{ t: 'That the accused was informed of the complaint and of the evidence submitted against him', d: 'Notice: the respondent was furnished the complaint, affidavits and supporting documents (Sec. 3[b]).', s: 'accused informed of the complaint and evidence' },
				{ t: 'That he was given an opportunity to submit controverting evidence', d: 'Opportunity to be heard: he was subpoenaed and could file a counter-affidavit; if he did not, the prosecutor may resolve on the complainant\'s evidence (Sec. 3[d]).', s: 'opportunity to submit controverting evidence' }
			],
			exceptions: 'The certification is not an essential part of the information; its absence does not invalidate it (Alvizo v. Sandiganbayan, in Tiu).',
			tip: 'Tiu splits the second item into two (five items). Either count is fine if all elements are stated.',
			question: 'What must the investigating prosecutor certify in the information? What is the effect of its absence?'
		},
		{
			id: 'E112.5',
			name: 'Options of the RTC judge upon the filing of the information',
			source: 'Rule 112, Sec. 5(a)',
			kind: 'rule',
			memorize: true,
			lead: 'Within ten days from the filing of the information, the RTC judge may',
			items: [
				{ t: 'Dismiss the case', d: 'If the evidence on record clearly fails to establish probable cause.', s: 'dismiss if probable cause clearly lacking' },
				{ t: 'Issue a warrant of arrest or commitment order', d: 'If he finds probable cause; a commitment order if the accused is already under arrest by warrant or the information was filed after inquest.', s: 'issue a warrant (or commitment order)' },
				{ t: 'Order the prosecutor to present additional evidence', d: 'In case of doubt, within 5 days from notice; resolve within 30 days from filing.', s: 'require additional evidence within 5 days; resolve within 30 days' }
			],
			question: 'What may the judge do upon the filing of an information in the RTC? Within what periods?'
		},
		{
			id: 'E112.6',
			name: 'When a warrant of arrest is not necessary upon filing of the information',
			source: 'Rule 112, Sec. 5(c), Sec. 8(b); summary procedure — as organized in Tiu, p. 93',
			kind: 'notes',
			lead: 'A warrant of arrest need not issue',
			items: [
				{ t: 'When the accused is already under detention', d: 'A commitment order issues instead.', s: 'accused already detained' },
				{ t: 'When the information was filed after inquest (Sec. 6)', d: 'The accused is already lawfully in custody.', s: 'filed after inquest' },
				{ t: 'When the offense is penalized by fine only', d: 'No detention is contemplated.', s: 'fine only' },
				{ t: 'In Sec. 8(b) cases where the judge finds custody unnecessary', d: 'Summons may issue instead.', s: 'Sec. 8(b) — summons instead' },
				{ t: 'In summary (now expedited) procedure cases', d: 'Arrest only for failure to appear when required.', s: 'summary procedure — except failure to appear' }
			],
			verify: 'Whether the 2022 Rules on Expedited Procedures keep the 1991 rule allowing arrest only for failure to appear was not confirmed from the text.',
			question: 'When is the issuance of a warrant of arrest not necessary upon the filing of an information?'
		},
		{
			id: 'E112.7',
			name: 'Options of a person lawfully arrested without a warrant',
			source: 'Rule 112, Sec. 6; Rule 114, Sec. 7; Tiu, pp. 97–98',
			kind: 'notes',
			lead: 'A person lawfully arrested without a warrant for an offense requiring preliminary investigation may',
			items: [
				{ t: 'Undergo inquest', d: 'Summary determination of probable cause within the Art. 125 periods.', s: 'undergo inquest' },
				{ t: 'Ask for preliminary investigation before the information is filed', d: 'Signing an Art. 125 waiver in the presence of counsel; PI terminated within 15 days.', s: 'ask for PI before filing, with an Art. 125 waiver and counsel' },
				{ t: 'Apply for bail', d: 'Even during the preliminary investigation, with any court in the province, city or municipality where he is held (Rule 114, Sec. 17[c]).', s: 'apply for bail' },
				{ t: 'Ask for preliminary investigation after the information is filed', d: 'Within 5 days from learning of the filing.', s: 'ask for PI within 5 days after learning of the filing' }
			],
			question: 'What are the options of a person lawfully arrested without a warrant for an offense requiring preliminary investigation?',
			verify: 'Tiu cites "Rule 114, Sec. 7(c)" for bail of persons not yet charged; in the 2000 Rules the provision is Rule 114, Sec. 17(c).'
		},
		{
			id: 'E112.8',
			name: 'Remedies against resolutions in preliminary investigation',
			source: 'Rule 112, Sec. 4; DOJ DC 70 and 70-A (2000); MC 58 (1993); Ombudsman A.O. 07; Tiu, pp. 86–89; Gatchalian v. Ombudsman (2018)',
			kind: 'notes',
			memorize: true,
			ordered: true,
			lead: 'The remedies are',
			items: [
				{ t: 'Motion for reconsideration with the prosecution office', d: 'One motion only.', s: 'motion for reconsideration' },
				{ t: 'Petition for review to the Secretary of Justice (or the Regional State Prosecutor for MTC cases outside NCR)', d: 'Within 15 days; not given due course if the accused was already arraigned when it was filed.', s: 'petition for review to the Secretary of Justice within 15 days' },
				{ t: 'Appeal to the Office of the President', d: 'Only for offenses punishable by reclusion perpetua to death, on new and material issues, within 30 days, and if prescription will not lapse within 6 months (MC 58).', s: 'appeal to the Office of the President (RP to death only)' },
				{ t: 'Petition for certiorari under Rule 65', d: 'Against the Secretary of Justice, with the CA (CTA for tax and tariff cases); against the Ombudsman in criminal cases, directly with the Supreme Court.', s: 'Rule 65 — CA (DOJ), CTA (tax), SC (Ombudsman)' }
			],
			verify: 'DOJ DC 015 (2024) may have changed the MR and petition-for-review periods.',
			question: 'What are the remedies of a party aggrieved by the resolution of the prosecutor? Of the Ombudsman?'
		},
		{
			id: 'E112.9',
			name: 'Motions prohibited by the 2017 Revised Guidelines that relate to preliminary investigation',
			source: 'A.M. No. 15-06-10-SC (effective September 1, 2017), III.2(b) — Tiu, p. 249',
			kind: 'issuance',
			memorize: true,
			lead: 'The following are prohibited motions, denied outright before arraignment',
			items: [
				{ t: 'Motion for judicial determination of probable cause', d: 'The judge determines probable cause on his own under Sec. 5.', s: 'motion for judicial determination of probable cause' },
				{ t: 'Motion for preliminary investigation filed beyond the 5-day period after inquest, or in Sec. 8 cases, or after the accused failed to participate despite notice', d: 'The right was waived or never existed.', s: 'late or unwarranted motion for preliminary investigation' },
				{ t: 'Motion for reinvestigation after the information is filed — without leave, in Sec. 8 cases, or on unmeritorious grounds after an actual preliminary investigation', d: 'Grounds such as credibility, admissibility, innocence or lack of due process when the accused was actually notified are not meritorious.', s: 'motion for reinvestigation without leave or on weak grounds' },
				{ t: 'Petition to suspend for prejudicial question when no civil case has been filed', d: 'Rule 111, Sec. 7 requires a previously instituted civil action.', s: 'prejudicial-question petition with no civil case' }
			],
			exceptions: 'Meritorious motions include a prosecution motion to withdraw or downgrade after reinvestigation and a motion to quash a warrant of arrest.',
			question: 'What motions relating to preliminary investigation and probable cause are prohibited under the 2017 Revised Guidelines for Continuous Trial?'
		},
		{
			id: 'E112.10',
			name: 'When parties may go directly to court without barangay conciliation',
			source: 'RA 7160 (Local Government Code), Sec. 412(b) — Tiu, p. 107',
			kind: 'law',
			lead: 'The parties may go directly to court',
			items: [
				{ t: 'Where the accused is under detention', d: 'Conciliation would delay the case of a person already deprived of liberty, so the court acts at once.', s: 'accused detained' },
				{ t: 'Where a person has been deprived of personal liberty calling for habeas corpus', d: 'Same reason: a petition for the release of a person illegally detained cannot wait for barangay proceedings.', s: 'habeas corpus situations' },
				{ t: 'Where actions are coupled with provisional remedies', d: 'Preliminary injunction, attachment, delivery of personal property, support pendente lite.', s: 'provisional remedies' },
				{ t: 'Where the action may otherwise be barred by the statute of limitations', d: 'If waiting for conciliation would let the action prescribe, the party may go directly to court. (A complaint with the punong barangay interrupts prescription only for up to 60 days — LGC Sec. 410[c].)', s: 'prescription about to run' }
			],
			exceptions: 'Barangay conciliation covers offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱5,000 between parties residing in the same city or municipality, with a private offended party, and not involving the government or a public officer acting officially (LGC Sec. 408). Filing with the punong barangay interrupts prescription for up to 60 days (Sec. 410[c]).',
			question: 'When may the parties go directly to court without prior barangay conciliation?'
		},
		{
			id: 'E112.11',
			name: 'Cagang guidelines on inordinate delay (speedy disposition)',
			source: 'Cagang v. Sandiganbayan, G.R. Nos. 206438 and 206458, July 31, 2018 (En Banc) — not in Tiu',
			kind: 'case',
			lead: 'Under Cagang',
			items: [
				{ t: 'Speedy disposition is distinct from speedy trial', d: 'It may be invoked before any tribunal, judicial or quasi-judicial, including preliminary investigation.', s: 'speedy disposition applies before any tribunal' },
				{ t: 'The case is deemed initiated on the filing of the formal complaint', d: 'Time spent in fact-finding investigation before the formal complaint is not counted.', s: 'counted from the formal complaint; fact-finding excluded' },
				{ t: 'The burden shifts depending on the periods', d: 'If the right is invoked within the periods set by rules, the defense must prove the delay was inordinate; beyond them, the prosecution must justify it.', s: 'burden depends on whether the periods were exceeded' },
				{ t: 'Delay is not determined by mechanical computation', d: 'Courts consider complexity, number of accused, volume of evidence, and acts of the respondent; malicious or politically motivated prosecution may justify dismissal.', s: 'not mechanical; complexity and context' },
				{ t: 'The right must be timely asserted', d: 'Failure to raise it when the periods lapse may be treated as a waiver.', s: 'must be invoked timely' }
			],
			verify: 'Guidelines summarized from reports of the decision; check the exact numbering and wording of the guidelines in the full text before reciting them.',
			question: 'What are the Cagang guidelines on the right to speedy disposition during preliminary investigation?'
		}
	],
	comparisons: [
		{
			id: 'C112.1',
			title: 'Executive (prosecutorial) vs. judicial determination of probable cause',
			a: 'Executive determination',
			b: 'Judicial determination',
			meaning: ['Whether there is sufficient ground to file an information and hold the respondent for trial.', 'Whether there is probable cause to issue a warrant of arrest (or commitment order).'],
			basis: ['Rule 112, Secs. 1, 3, 4', 'Const., Art. III, Sec. 2; Rule 112, Secs. 5 and 8(b)'],
			who: ['Investigating prosecutor, approved by the head of office; reviewable by the Secretary of Justice.', 'The judge, personally.'],
			when: ['During preliminary investigation or inquest.', 'Upon the filing of the information.'],
			reqs: ['Affidavits and counter-affidavits; resolution; certification.', 'Personal evaluation of the resolution and supporting evidence; personal examination of witnesses optional.'],
			time: ['10 days to resolve after investigation; head acts within 10 days.', '10 days; additional evidence 5 days; resolve within 30 days.'],
			exceptions: ['Courts do not interfere except for grave abuse of discretion.', 'The judge is not bound by the prosecutor\'s finding (Anlud Metal Recycling v. Ang).'],
			effect: ['Information filed or complaint dismissed.', 'Warrant issued or case dismissed (dismissal appealable — Cajipe).'],
			trap: ['Filing mandamus to compel a prosecutor to file — it does not lie (Tiu, p. 77).', 'Moving for "judicial determination of probable cause" — prohibited under the 2017 Guidelines.'],
			decisive: 'Purpose: the prosecutor decides whether to charge; the judge decides whether to deprive the accused of liberty.',
			hypo: 'The prosecutor finds probable cause for murder; the judge, on reviewing the affidavits, finds the eyewitness account incredible and dismisses. The dismissal is valid — the judge\'s determination is independent — and the prosecution\'s remedy is appeal, not certiorari (Cajipe).'
		},
		{
			id: 'C112.2',
			title: 'Preliminary investigation vs. inquest',
			a: 'Preliminary investigation (Sec. 3)',
			b: 'Inquest (Sec. 6)',
			meaning: ['A full inquiry into probable cause with notice and counter-affidavits.', 'An informal, summary investigation of a person arrested without a warrant, to decide whether he should remain in custody and be charged.'],
			basis: ['Rule 112, Secs. 1–4', 'Rule 112, Sec. 6; DO 153 Part II; DOJ Circular 61 (1993); DOJ DC 015 (2024)'],
			who: ['Investigating prosecutor (or other authorized officer).', 'Inquest prosecutor.'],
			when: ['Respondent not under arrest; penalty ≥ 4y 2m 1d.', 'Lawful warrantless arrest; offense requiring preliminary investigation.'],
			reqs: ['Complaint, subpoena, counter-affidavit, optional hearing, resolution.', 'Referral documents (affidavit of arrest, investigation report, statements); check legality of the arrest; probable cause.'],
			time: ['10/10/10 days under Sec. 3 (DO 153: resolve within 60 or 90 days).', 'Within the Art. 125 periods (12/18/36 hours).'],
			exceptions: ['—', 'The arrested person may opt for a full PI by waiving Art. 125 with counsel, or ask for one within 5 days after filing.'],
			effect: ['Information filed or complaint dismissed.', 'Information filed (commitment order, no warrant) or release recommended.'],
			trap: ['Saying a person arrested without a warrant loses the right to preliminary investigation.', 'Conducting inquest for an offense other than the one for which he was arrested (void — Beltran).'],
			decisive: 'Whether the respondent is under warrantless arrest: if yes, inquest within Art. 125 hours; if no, the full Sec. 3 procedure.',
			hypo: 'A buy-bust arrest at noon: the inquest prosecutor must resolve within 36 hours (afflictive penalty). If the arrested person wants to submit counter-affidavits, he waives Art. 125 with counsel and gets a 15-day preliminary investigation instead — staying detained unless he posts bail.'
		},
		{
			id: 'C112.3',
			title: 'Probable cause to file an information vs. probable cause to issue a warrant of arrest',
			a: 'Probable cause to file (charge)',
			b: 'Probable cause for a warrant',
			meaning: ['Facts and circumstances that would lead a person of ordinary caution to entertain an honest and strong suspicion that the respondent is guilty (Tiu, p. 67).', '"Such facts and circumstances which would lead a reasonably discreet and prudent man to believe that an offense has been committed by the person sought to be arrested" (Ocampo v. Abando).'],
			basis: ['Rule 112, Secs. 1 and 4', 'Const., Art. III, Sec. 2; Rule 112, Sec. 5'],
			who: ['Prosecutor.', 'Judge.'],
			when: ['Before filing.', 'After filing.'],
			reqs: ['Evidence that engenders a well-founded belief of probable guilt; more than bare suspicion, less than proof for conviction.', 'Same quantum, plus the necessity of placing the accused under custody (in Sec. 8 cases the judge may issue summons instead).'],
			time: ['Sec. 3 periods.', 'Sec. 5 periods.'],
			exceptions: ['DOJ internal standard since 2024: "prima facie evidence with reasonable certainty of conviction" (DC 015).', 'No warrant if the accused is detained, after inquest, or for fine-only offenses.'],
			effect: ['Respondent becomes an accused; case goes to court.', 'Accused is arrested; court acquires jurisdiction over his person.'],
			trap: ['Thinking the judge must hold a hearing (not required — Ocampo).', 'Thinking a DOJ "reasonable certainty" standard binds the court.'],
			decisive: 'The question asked: "Should he be tried?" (prosecutor) vs. "Should he be arrested?" (judge).',
			hypo: 'The prosecutor files an information for a bailable offense against an accused who is already detained on another case. The judge finds probable cause but issues a commitment order instead of a warrant; for a fine-only offense, he issues neither.'
		},
		{
			id: 'C112.4',
			title: 'Remedy against a DOJ resolution vs. remedy against an Ombudsman resolution (criminal aspect)',
			a: 'DOJ (prosecutor / Secretary of Justice)',
			b: 'Ombudsman',
			meaning: ['Review of the prosecutor\'s probable-cause finding within the executive branch, then by the courts.', 'Review of the Ombudsman\'s probable-cause finding.'],
			basis: ['Rule 112, Sec. 4; DC 70 (2000 NPS Rule on Appeal); MC 58', 'RA 6770; Ombudsman A.O. 07; Gatchalian v. Ombudsman (2018)'],
			who: ['Aggrieved complainant or respondent.', 'Aggrieved complainant or respondent.'],
			when: ['MR; petition for review (15 days); then Rule 65 to the CA (CTA for tax).', 'MR (5 days under A.O. 07, one only); then Rule 65 directly to the SC.'],
			reqs: ['Verified petition with required contents (DC 70, Sec. 5).', 'Grave abuse of discretion amounting to lack or excess of jurisdiction.'],
			time: ['15 days to petition for review.', 'Rule 65 within 60 days.'],
			exceptions: ['Not given due course if the accused was arraigned before the petition was filed.', 'Administrative decisions of the Ombudsman go to the CA under Rule 43 — not this route.'],
			effect: ['The Secretary may direct filing or withdrawal; the court is not bound (Crespo).', 'The SC may annul the finding for grave abuse.'],
			trap: ['Filing Rule 65 with the CA against an Ombudsman criminal resolution (wrong court — Gatchalian).', 'Filing Rule 43 against the Secretary of Justice (wrong mode — Tiu, citing Alcaraz v. Gonzalez).'],
			decisive: 'Which office issued it: DOJ → Secretary → CA; Ombudsman (criminal) → SC.',
			hypo: 'A mayor charged with graft before the Ombudsman wants to challenge the finding of probable cause: MR with the Ombudsman, then Rule 65 in the Supreme Court. If the same mayor were charged with estafa before the city prosecutor, he would go to the Secretary of Justice, then to the CA.'
		}
	],
	cases: [
		{
			id: 'crespo',
			name: 'Crespo v. Mogul',
			cite: 'G.R. No. L-53373, June 30, 1987',
			from: 'Tiu',
			facts: 'After an information for estafa was filed and the trial court set arraignment, the Secretary of Justice, on review, directed the fiscal to move for dismissal. The judge denied the motion to dismiss.',
			issue: 'Once an information is filed, may the court refuse to dismiss it on the motion of the prosecutor acting on the Secretary of Justice\'s directive?',
			ruling: 'Yes. The court may grant or deny the motion in the exercise of its discretion.',
			doctrine: '"[O]nce a complaint or information is filed in Court any disposition of the case as its dismissal or the conviction or acquittal of the accused rests in the sound discretion of the Court." The fiscal keeps direction and control but "cannot impose his opinion on the trial court"; reinvestigation after filing needs the court\'s permission; and the fiscal must continue to appear for the People even if he disagrees.',
			reasoning: 'Filing the information vests the court with jurisdiction over the case; the preliminary investigation ends on filing.',
			rule: 'Rule 112, Sec. 4; Rule 110, Sec. 5.',
			hypo: 'The DOJ reverses a finding of probable cause after the information is filed. The court must independently assess the motion to withdraw (Lanier); it may deny it.',
			examQ: 'Is the trial court bound by the Secretary of Justice\'s resolution directing the withdrawal of an information?',
			also: ['r110', 'r117']
		},
		{
			id: 'lanier',
			name: 'Lanier v. People',
			cite: 'G.R. No. 189176, March 19, 2014',
			from: 'Tiu',
			facts: 'The Secretary of Justice found no probable cause in a drug case (citing the manner of service of the search warrant) and the prosecution moved to withdraw the information. The RTC granted it, deferring entirely to the DOJ and expressing concern that no prosecutor would handle the case.',
			issue: 'May the trial court grant a motion to withdraw the information without its own independent assessment?',
			ruling: 'No. The RTC\'s order was nullified.',
			doctrine: 'Confronted with a motion to withdraw based on the Secretary\'s resolution, the trial court must make an independent assessment of the merits; the Secretary\'s ruling is persuasive but not binding. Matters of defense (elements, admissibility) are threshed out at trial.',
			reasoning: 'Deferring entirely to the DOJ abdicates judicial power.',
			rule: 'Rule 112, Sec. 4; Crespo v. Mogul.',
			args: 'The RTC thought it had not yet acquired jurisdiction over the accused because no commitment order had issued; the Court rejected that premise.',
			hypo: 'A judge grants a motion to withdraw in a one-line order "in view of the DOJ resolution." The private complainant may file Rule 65 to annul it.',
			examQ: 'What must a court do when the prosecution moves to withdraw the information pursuant to a DOJ resolution?'
		},
		{
			id: 'larranaga',
			name: 'Larrañaga v. Court of Appeals',
			cite: 'Tiu gives no citation — verify',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine.',
			issue: 'What should the court do when an information is filed without a required preliminary investigation?',
			ruling: 'Hold the proceedings in abeyance and remand the case to the prosecutor for preliminary investigation; do not dismiss.',
			doctrine: 'The absence of preliminary investigation does not affect the court\'s jurisdiction or the validity of the information; the remedy is suspension and remand (also Socrates v. Sandiganbayan; Enriquez v. Sarmiento).',
			reasoning: 'Preliminary investigation is a statutory right that the court can still give effect to.',
			rule: 'Rule 112, Sec. 1; Rule 114, Sec. 26.',
			hypo: 'Before arraignment, the accused shows no preliminary investigation was held for an offense requiring one. The court suspends and remands.',
			examQ: 'Is the absence of preliminary investigation a ground to dismiss or quash the information?',
			also: ['r117'],
			verify: 'Citation not in Tiu.'
		},
		{
			id: 'santos-concio',
			name: 'Santos-Concio v. Department of Justice',
			cite: '2008 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Tiu reproduces the doctrines: a preliminary investigation proceeded on affidavits of witnesses with personal knowledge, attached to an NBI referral that was not itself sworn by the law enforcer.',
			issue: 'Who may file the complaint for preliminary investigation, and must it be a single sworn complaint by the offended party?',
			ruling: 'Any competent person may file it for a public crime; the complaint may consist of several affidavits.',
			doctrine: 'A complaint for preliminary investigation differs from a Rule 110 complaint; the affidavit is a component of the complaint; for public crimes, "any competent person" with personal knowledge may file; the prosecutor has discretion to determine the adequacy of the averments and may dismiss outright or proceed.',
			reasoning: 'Preliminary investigation is inquisitorial and often the only means to identify who may be charged.',
			rule: 'Rule 112, Sec. 3(a)–(b); Rule 110, Sec. 3.',
			hypo: 'A BSP letter with attached affidavits of bank employees can be treated as an affidavit-complaint (Soriano v. People, 2010, in Tiu).',
			examQ: 'May a preliminary investigation proceed on affidavits of witnesses attached to an unsworn agency referral?',
			also: ['r110'],
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'estrada-ombudsman',
			name: 'Estrada v. Office of the Ombudsman',
			cite: '2015 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'A respondent in a preliminary investigation asked for copies of his co-respondents\' counter-affidavits and objected that he could not cross-examine the complainant\'s witnesses.',
			issue: 'Does the respondent have a right to the co-respondents\' counter-affidavits and to cross-examine?',
			ruling: 'No to both.',
			doctrine: 'The respondent\'s right under Sec. 3(b) is to examine the evidence submitted by the complainant; there is no right to cross-examine in preliminary investigation; admissibility is for trial.',
			reasoning: 'Preliminary investigation is summary and inquisitorial; it is not a trial.',
			rule: 'Rule 112, Sec. 3(b), (e).',
			hypo: 'A respondent demands to cross-examine the complainant at a clarificatory hearing. He may only submit written questions for the prosecutor to ask.',
			examQ: 'Does a respondent in a preliminary investigation have the right to cross-examine the complainant\'s witnesses?',
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'ocampo-abando',
			name: 'Ocampo v. Abando',
			cite: 'G.R. No. 176830, February 11, 2014',
			from: 'Tiu',
			facts: 'Respondents claimed they were denied due process because they were not reached during preliminary investigation, and that the judge issued warrants without a hearing.',
			issue: 'Is the preliminary investigation valid if the respondent could not be subpoenaed? Must the judge hold a hearing before issuing a warrant?',
			ruling: 'The preliminary investigation was valid, and no hearing was needed for the warrant.',
			doctrine: 'As long as efforts were made to reach the respondent and he had the opportunity to present evidence, the preliminary investigation remains valid (Sec. 3[d]). For warrants, a hearing is not necessary; personal examination of the complainant and witnesses is not mandatory; personal evaluation of the prosecutor\'s report and supporting documents suffices.',
			reasoning: 'The rule foils attempts to delay prosecution; Soliven and Webb on judicial determination.',
			rule: 'Rule 112, Secs. 3(d) and 5.',
			hypo: 'A respondent hides to avoid the subpoena; the prosecutor resolves on the complainant\'s evidence; the information and warrant are valid.',
			examQ: 'Must the judge personally examine the complainant and witnesses before issuing a warrant of arrest?',
			also: ['r113']
		},
		{
			id: 'soliven',
			name: 'Soliven v. Makasiar (as applied in AAA v. Carbonell)',
			cite: 'AAA v. Carbonell, G.R. No. 171465, June 8, 2007 — as cited in Tiu',
			from: 'Tiu',
			facts: 'In AAA v. Carbonell, the accused argued that Art. III, Sec. 2 requires the judge to personally examine the complainant and witnesses before issuing a warrant.',
			issue: 'Does the Constitution require personal examination by the judge?',
			ruling: 'No.',
			doctrine: 'What the Constitution underscores is the judge\'s exclusive and personal responsibility to satisfy himself of probable cause. He may (1) personally evaluate the fiscal\'s report and supporting documents and issue the warrant, or (2) if he finds no probable cause, disregard the report and require supporting affidavits. Personal examination is necessary only when there is an utter failure of the evidence to show probable cause.',
			reasoning: 'Otherwise judges would be laden with preliminary examination instead of trying cases (Soliven; Webb v. De Leon; Okabe v. Gutierrez).',
			rule: 'Const., Art. III, Sec. 2; Rule 112, Sec. 5.',
			hypo: 'A judge issues a warrant after reading the resolution, the affidavits and counter-affidavits, without calling witnesses. Valid.',
			examQ: 'Is the judge required to personally examine the complainant and his witnesses before issuing a warrant of arrest?',
			also: ['r113']
		},
		{
			id: 'cajipe',
			name: 'Cajipe v. People',
			cite: '2014 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The trial court dismissed an information for lack of probable cause before arraignment; the prosecution sought review.',
			issue: 'What is the prosecution\'s remedy when the trial court dismisses for lack of probable cause?',
			ruling: 'Appeal, because the dismissal is a final order; certiorari is not the proper remedy.',
			doctrine: 'An order dismissing a case for lack of probable cause disposes of the case and is appealable under Rule 122, Sec. 1; there is no double jeopardy because the accused has not been arraigned. The prosecution may also refile on new evidence.',
			reasoning: 'Final orders are appealable; jeopardy requires arraignment and plea.',
			rule: 'Rule 112, Sec. 5; Rule 122, Sec. 1.',
			hypo: 'The RTC dismisses a rape information for lack of probable cause. The prosecution files a notice of appeal within 15 days.',
			examQ: 'What is the remedy of the prosecution from an order dismissing the information for lack of probable cause?',
			also: ['r117'],
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'gatchalian',
			name: 'Gatchalian v. Office of the Ombudsman',
			cite: 'G.R. No. 229288, August 1, 2018',
			from: 'Checked',
			facts: 'The petitioner, charged in connection with the sale of a bank\'s shares to a government corporation, filed Rule 65 certiorari with the CA against the Ombudsman\'s finding of probable cause. The CA dismissed for lack of jurisdiction.',
			issue: 'Where should a party challenge an Ombudsman resolution finding probable cause in a criminal case?',
			ruling: 'In the Supreme Court, by a Rule 65 petition; the CA has no jurisdiction.',
			doctrine: 'The remedy against an Ombudsman resolution on probable cause in criminal cases is certiorari under Rule 65 filed with the Supreme Court; the Fabian/Morales rulings on CA review concern administrative cases.',
			reasoning: 'RA 6770 and the line of cases from Kuizon v. Desierto limit CA review to administrative disciplinary cases.',
			rule: 'Rule 112, Sec. 4; RA 6770; Rule 65.',
			hypo: 'A respondent loses before the Ombudsman in a graft complaint. He files Rule 65 with the SC after his motion for reconsideration is denied.',
			examQ: 'What is the remedy against a resolution of the Ombudsman finding probable cause in a criminal case, and where is it filed?',
			verify: 'Holding confirmed through later decisions citing it and summaries; read the full text for the disposition.'
		},
		{
			id: 'cagang',
			name: 'Cagang v. Sandiganbayan',
			cite: 'G.R. Nos. 206438 and 206458, July 31, 2018 (En Banc, Leonen, J.)',
			from: 'Checked',
			facts: 'The accused sought to quash informations and an arrest order, claiming inordinate delay in the Ombudsman\'s preliminary investigation.',
			issue: 'Was the right to speedy disposition violated?',
			ruling: 'No. The delay was justified by the complexity of the case, and the accused did not timely assert his right.',
			doctrine: 'The right is violated only by vexatious, capricious and oppressive delay, assessed on the facts, not mathematically; time spent in fact-finding before the formal complaint is excluded; the right must be timely invoked. See E112.11.',
			reasoning: 'Courts ask how long a competent and independent public officer would need given the complexity of the case.',
			rule: 'Const., Art. III, Sec. 16; Rule 112, Sec. 3; Rule 115.',
			args: 'The accused counted the period from the start of the fact-finding investigation; the Court excluded it.',
			hypo: 'A preliminary investigation takes four years for a single-transaction graft complaint with one respondent, and the respondent repeatedly asked for resolution. A strong speedy-disposition claim.',
			examQ: 'When does delay in preliminary investigation violate the right to speedy disposition? From when is the delay counted?',
			also: ['r115'],
			verify: 'Guidelines summarized from reports; read the decision for the exact text.'
		}
	],
	deadlines: [
		{ ref: 'Rule 112, Sec. 3(b)', act: 'Dismiss the complaint or issue subpoena', who: 'Investigating officer', period: '10 days', start: 'Filing of the complaint', exceptions: '—', effect: 'Delay — administrative; possible speedy-disposition claim', kind: 'procedural' },
		{ ref: 'Rule 112, Sec. 3(c)', act: 'Submit counter-affidavit', who: 'Respondent', period: '10 days', start: 'Receipt of the subpoena with complaint and affidavits', exceptions: 'Extension only in the interest of justice (DO 153: not more than 10 days)', effect: 'Resolution on the complainant\'s evidence (Sec. 3[d])', kind: 'procedural' },
		{ ref: 'Rule 112, Sec. 3(e)', act: 'Hold clarificatory hearing', who: 'Investigating officer', period: 'Within 10 days; terminate within 5 days', start: 'Submission of counter-affidavits or expiration of the period', exceptions: 'Hearing is optional', effect: '—', kind: 'procedural' },
		{ ref: 'Rule 112, Sec. 3(f)', act: 'Resolve the preliminary investigation', who: 'Investigating officer', period: '10 days', start: 'End of the investigation', exceptions: 'DO 153: whole PI within 60 days (90 for capital offenses) from assignment', effect: 'Delay — administrative; speedy disposition (Cagang)', kind: 'procedural', verify: 'DO 153 periods may be superseded by DOJ DC 015 (2024)' },
		{ ref: 'Rule 112, Sec. 4', act: 'Forward the record to the head of office', who: 'Investigating prosecutor', period: '5 days', start: 'Date of the resolution', exceptions: '—', effect: '—', kind: 'procedural' },
		{ ref: 'Rule 112, Sec. 4', act: 'Act on the resolution', who: 'Provincial/city prosecutor, chief state prosecutor, Ombudsman or deputy', period: '10 days', start: 'Receipt of the record', exceptions: '—', effect: 'Approve, reverse or return', kind: 'procedural' },
		{ ref: 'DOJ DC 70 (2000), Sec. 3', act: 'Petition for review to the Secretary of Justice', who: 'Aggrieved party', period: '15 days', start: 'Receipt of the resolution, or of the denial of the MR', exceptions: 'Not given due course if the accused was arraigned before filing', effect: 'Late petition dismissed', kind: 'procedural', verify: 'May be changed by DOJ DC 015 (2024)' },
		{ ref: 'DOJ DC 70, Sec. 13', act: 'MR of the Secretary\'s resolution', who: 'Aggrieved party', period: '10 days (non-extendible); one MR only', start: 'Receipt of the resolution on appeal', exceptions: '—', effect: 'Finality', kind: 'procedural' },
		{ ref: 'MC 58 (1993)', act: 'Appeal to the Office of the President', who: 'Aggrieved party', period: '30 days', start: 'Notice of the Secretary\'s resolution', exceptions: 'Only RP-to-death offenses, new and material issues, prescription not lapsing within 6 months', effect: 'Outright dismissal', kind: 'procedural' },
		{ ref: 'Ombudsman A.O. 07, Rule II, Sec. 7', act: 'MR of the Ombudsman\'s resolution', who: 'Aggrieved party', period: '5 days; one MR only', start: 'Notice', exceptions: '—', effect: 'Finality; then Rule 65 to the SC', kind: 'procedural', verify: 'Ombudsman rules have since been revised; check the current period' },
		{ ref: 'Rule 112, Sec. 5(a)', act: 'Evaluate probable cause for a warrant', who: 'RTC judge', period: '10 days', start: 'Filing of the information', exceptions: 'Doubt: additional evidence within 5 days; resolve within 30 days from filing', effect: 'Warrant, commitment order or dismissal', kind: 'procedural' },
		{ ref: 'RPC Art. 125', act: 'Deliver the arrested person to judicial authorities', who: 'Arresting officer', period: '12 hours (light penalties) · 18 hours (correctional) · 36 hours (afflictive or capital)', start: 'Start of detention (hours, not days)', exceptions: 'Written waiver with counsel to undergo PI', effect: 'Delay in delivery of detained persons (criminal liability of the officer); release', kind: 'custodial', days: 'Hours, not days' },
		{ ref: 'Rule 112, Sec. 6', act: 'Terminate preliminary investigation after Art. 125 waiver', who: 'Investigating prosecutor', period: '15 days', start: 'Inception of the PI', exceptions: '—', effect: 'Prolonged detention; bail available meanwhile', kind: 'procedural' },
		{ ref: 'Rule 112, Sec. 6', act: 'Ask for preliminary investigation after the information is filed', who: 'Accused', period: '5 days', start: 'From the time he learns of the filing', exceptions: '—', effect: 'Waived; late motion is a prohibited motion (2017 Guidelines)', kind: 'procedural' },
		{ ref: 'Rule 112, Sec. 8(a)', act: 'Act on a complaint for an offense not requiring PI', who: 'Prosecutor', period: '10 days', start: 'Filing', exceptions: '—', effect: '—', kind: 'procedural' },
		{ ref: 'Rule 112, Sec. 8(b)', act: 'Determine probable cause; additional evidence; dismiss', who: 'MTC/MCTC judge', period: '10 days · additional evidence 10 days · dismissal 10 days', start: 'Filing · notice · submission or expiration', exceptions: 'Summons instead of warrant', effect: '—', kind: 'procedural' },
		{ ref: 'RA 9165, Sec. 90', act: 'Terminate PI in drug cases; file information', who: 'Prosecutor', period: 'PI within 30 days; information within 24 hours after termination (48 hours if the PI was by a judge)', start: 'Filing of the complaint / termination of PI', exceptions: '—', effect: 'Administrative', kind: 'procedural' },
		{ ref: 'LGC Sec. 410(c)', act: 'Interruption of prescription by barangay complaint', who: 'Complainant', period: 'Not more than 60 days', start: 'Filing with the punong barangay', exceptions: 'Resumes upon receipt of the certificate of repudiation or certification to file action', effect: 'Prescription resumes', kind: 'prescriptive' }
	],
	traps: [
		{ wrong: 'Preliminary investigation is a constitutional right.', right: 'It is statutory, though a component of due process when granted, and waivable.', example: 'Accused pleads without asking for PI — waived.' },
		{ wrong: 'The threshold is based on the penalty the court will likely impose.', right: 'It is the penalty prescribed by law, without regard to the fine.', example: 'An offense punishable by prision correccional in its medium period (2y 4m 1d to 4y 2m) plus a ₱100,000 fine needs no PI — the fine is disregarded.' },
		{ wrong: 'The absence of preliminary investigation is a ground to quash.', right: 'It is not; the court suspends and remands (Larrañaga; Socrates).', example: 'Motion to quash on that ground — denied; motion to remand — granted if timely.' },
		{ wrong: 'The respondent may file a motion to dismiss instead of a counter-affidavit.', right: 'Not allowed (Sec. 3[c]); Ombudsman rules allow it only for lack of jurisdiction.', example: 'Respondent who files only a motion to dismiss is deemed not to have controverted the complaint.' },
		{ wrong: 'The respondent may cross-examine the complainant\'s witnesses at the clarificatory hearing.', right: 'No; he may submit questions (Sec. 3[e]; Estrada v. Ombudsman).', example: '—' },
		{ wrong: 'The judge must personally examine the complainant before issuing a warrant.', right: 'Personal evaluation of the record suffices (Soliven; Ocampo).', example: 'Warrant issued on review of affidavits is valid.' },
		{ wrong: 'The accused may file a motion for judicial determination of probable cause.', right: 'Prohibited motion under the 2017 Guidelines.', example: 'Denied outright before arraignment.' },
		{ wrong: 'A DOJ reversal binds the court to dismiss.', right: 'The court must make its own assessment (Crespo; Lanier).', example: 'Motion to withdraw denied; trial proceeds.' },
		{ wrong: 'An Ombudsman probable-cause finding is challenged in the CA.', right: 'Rule 65 directly in the SC (Gatchalian, 2018).', example: 'CA petition dismissed for lack of jurisdiction.' },
		{ wrong: 'A person arrested without a warrant cannot get a preliminary investigation.', right: 'He can — before filing with an Art. 125 waiver and counsel, or within 5 days after learning of the filing.', example: 'Request on day 6 — waived.' },
		{ wrong: 'MTC judges may conduct preliminary investigation.', right: 'Not since October 3, 2005 (A.M. No. 05-8-26-SC).', example: '—' },
		{ wrong: 'A dismissal by the judge for lack of probable cause is reviewed by certiorari.', right: 'It is a final order; appeal (Cajipe).', example: '—' }
	],
	corrections: [
		{ old: 'Summary procedure covers offenses punishable by imprisonment not exceeding six months or a fine not exceeding ₱1,000 (1991 Rule).', fix: 'The 2022 Rules on Expedited Procedures (effective April 11, 2022) cover offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000, plus traffic, rental, ordinance and BP 22 cases.', source: 'A.M. No. 08-8-7-SC, Rule I, Sec. 1(B), as quoted in People v. Consebido (2025)' },
		{ old: 'DO 153 (1996) and DC 70 (2000) govern the prosecutors\' procedure.', fix: 'DOJ DC 015 (2024 DOJ-NPS Rules on Preliminary Investigations and Inquest Proceedings) and DC 028 (2024 Rules on Summary Investigation and Expedited Preliminary Investigation) now govern NPS procedure: PI for offenses of at least 6 years and 1 day; standard "prima facie evidence with reasonable certainty of conviction"; summary investigation for 1 day to 1 year; expedited PI up to 6 years. The Rules of Court are unchanged.', source: 'DOJ DC 015 and DC 028 (2024), as described in secondary sources and in Consebido' },
		{ old: 'Remedy against an Ombudsman probable-cause finding: Rule 65 to the SC (Baviera v. Zoleta).', fix: 'Reaffirmed in Gatchalian v. Ombudsman (2018).', source: 'G.R. No. 229288, August 1, 2018' },
		{ old: 'Speedy disposition — no fixed rule on when the delay is counted.', fix: 'Cagang (2018, En Banc): counted from the formal complaint; fact-finding excluded; burden depends on whether the periods were exceeded; must be invoked timely.', source: 'G.R. Nos. 206438 and 206458, July 31, 2018' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Officers', q: 'Who may conduct a preliminary investigation?', a: 'E112.2: (a) provincial or city prosecutors and their assistants; (b) national and regional state prosecutors; (c) other officers authorized by law — the Ombudsman, the COMELEC (election offenses, concurrently), the PCGG. MTC judges no longer may (A.M. No. 05-8-26-SC, 2005).', keys: 'Sec. 2; A.M. No. 05-8-26-SC' },
		{ cat: 'A', level: 2, topic: 'Procedure', q: 'Outline the procedure of preliminary investigation under Sec. 3 with the periods for each step.', a: 'E112.3: complaint with sworn, certified affidavits → 10 days to dismiss or subpoena → 10 days for counter-affidavit (no motion to dismiss) → if none, resolve on complainant\'s evidence → optional clarificatory hearing within 10 days, ends within 5, no cross-examination → 10 days to resolve.', keys: '10-10-10; no motion to dismiss; no cross-examination' },
		{ cat: 'A', level: 2, topic: 'Judicial probable cause', q: 'What are the options of the RTC judge upon the filing of the information? When is a warrant not necessary?', a: 'E112.5 and E112.6: dismiss if probable cause clearly lacking; issue warrant or commitment order; require additional evidence within 5 days and resolve within 30 days from filing. No warrant: accused detained; filed after inquest; fine only; Sec. 8(b) summons; summary procedure except failure to appear.', keys: 'Sec. 5(a), (c)' },
		{ cat: 'A', level: 3, topic: 'Warrantless arrest', q: 'What are the options of a person lawfully arrested without a warrant for an offense requiring preliminary investigation?', a: 'E112.7: undergo inquest; ask for PI before filing with a written Art. 125 waiver signed in the presence of counsel (PI within 15 days); apply for bail; ask for PI within 5 days after learning of the filing.', keys: 'Sec. 6; Art. 125 waiver; 15 days; 5 days' },
		{ cat: 'A', level: 3, topic: 'Remedies', q: 'What are the remedies of a party aggrieved by the resolution of the prosecutor? By the Ombudsman?', a: 'E112.8: MR; petition for review to the Secretary of Justice within 15 days (RSP for MTC cases outside NCR); appeal to the OP only under MC 58; Rule 65 to the CA against the Secretary (CTA for tax). Ombudsman: one MR, then Rule 65 directly to the SC (Gatchalian).', keys: 'DC 70; MC 58; Rule 65; Gatchalian' },
		{ cat: 'A', level: 3, topic: 'Prohibited motions', q: 'Enumerate the prohibited motions under the 2017 Revised Guidelines that relate to preliminary investigation and probable cause.', a: 'E112.9: motion for judicial determination of probable cause; late or unwarranted motion for PI; motion for reinvestigation without leave, in Sec. 8 cases, or on unmeritorious grounds; prejudicial-question petition when no civil case was filed.', keys: 'A.M. No. 15-06-10-SC III.2(b)' },
		{ cat: 'B', level: 3, topic: 'Probable cause', q: 'Distinguish executive from judicial determination of probable cause.', a: 'See C112.1.', keys: 'prosecutor vs judge; whether to charge vs whether to arrest' },
		{ cat: 'B', level: 3, topic: 'Inquest', q: 'Distinguish preliminary investigation from inquest.', a: 'See C112.2.', keys: 'warrantless arrest; Art. 125; summary' },
		{ cat: 'B', level: 3, topic: 'Remedies', q: 'Distinguish the remedy against a DOJ resolution from the remedy against an Ombudsman resolution in a criminal case.', a: 'See C112.4.', keys: 'Secretary → CA; Ombudsman → SC' },
		{ cat: 'C', level: 1, topic: 'Nature', q: 'The right to preliminary investigation is guaranteed by the Bill of Rights.', tf: false, short: 'False. It is a statutory right — but a substantive one and a component of due process when granted (Tiu, p. 67).', keys: 'statutory; substantive; waivable' },
		{ cat: 'C', level: 1, topic: 'Threshold', q: 'Preliminary investigation is required for offenses where the penalty prescribed by law is at least four years, two months and one day, without regard to the fine.', tf: true, short: 'True (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 2, topic: 'Officers', q: 'Municipal trial court judges may conduct preliminary investigations of cases within their territory.', tf: false, short: 'False. That authority was removed by A.M. No. 05-8-26-SC, effective October 3, 2005.', keys: 'A.M. No. 05-8-26-SC' },
		{ cat: 'C', level: 2, topic: 'Procedure', q: 'A respondent may file a motion to dismiss in lieu of a counter-affidavit.', tf: false, short: 'False. Sec. 3(c) expressly disallows it.', keys: 'Sec. 3(c)' },
		{ cat: 'C', level: 2, topic: 'Procedure', q: 'At the clarificatory hearing, the respondent\'s counsel may cross-examine the complainant\'s witnesses.', tf: false, short: 'False. The parties may be present but without the right to examine or cross-examine; they may submit questions (Sec. 3[e]).', keys: 'Sec. 3(e)' },
		{ cat: 'C', level: 3, topic: 'Absence of PI', q: 'The absence of a required preliminary investigation is a ground for a motion to quash.', tf: false, short: 'False. It is not among the grounds in Rule 117, Sec. 3; the remedy is to ask the court to suspend proceedings and remand for PI, before plea (Larrañaga; Socrates v. Sandiganbayan).', keys: 'not a ground to quash; remand' },
		{ cat: 'C', level: 3, topic: 'Judicial probable cause', q: 'Before issuing a warrant of arrest, the judge must personally examine the complainant and his witnesses.', tf: false, short: 'False. Personal evaluation of the prosecutor\'s resolution and supporting evidence suffices; personal examination is optional (Soliven v. Makasiar; Ocampo v. Abando).', keys: 'Soliven; Ocampo; personal evaluation' },
		{ cat: 'C', level: 3, topic: 'Warrantless arrest', q: 'A person arrested without a warrant may ask for preliminary investigation before the information is filed only if he signs a waiver of Art. 125 in the presence of counsel.', tf: true, short: 'True (Sec. 6; RA 7438). He may still apply for bail, and the PI must end within 15 days.', keys: 'Sec. 6; Art. 125 waiver; counsel' },
		{ cat: 'C', level: 3, topic: 'Motion', q: 'The accused may file a motion for judicial determination of probable cause before arraignment.', tf: false, short: 'False. It is a prohibited motion under the 2017 Revised Guidelines for Continuous Trial, denied outright.', update: 'Tiu describes the practice of filing such motions; the 2017 Guidelines prohibited them.', keys: 'A.M. No. 15-06-10-SC' },
		{ cat: 'C', level: 4, topic: 'DOJ review', q: 'Once the Secretary of Justice reverses a finding of probable cause, the trial court must grant the prosecution\'s motion to withdraw the information.', tf: false, short: 'False. The court must make its own independent assessment; the Secretary\'s resolution is persuasive, not binding (Crespo; Lanier v. People, 2014).', keys: 'Crespo; Lanier' },
		{ cat: 'C', level: 4, topic: 'Ombudsman', q: 'A respondent may challenge the Ombudsman\'s finding of probable cause in a criminal case by Rule 65 certiorari in the Court of Appeals.', tf: false, short: 'False. The petition is filed directly with the Supreme Court (Gatchalian v. Ombudsman, 2018).', keys: 'Gatchalian; Rule 65; SC' },
		{ cat: 'C', level: 5, topic: 'Delay', q: 'If the prosecutor takes three years to resolve a simple complaint, the offense prescribes.', tf: false, short: 'False. The filing interrupted prescription; delay may violate the right to speedy disposition (Cagang), which is a different ground for dismissal.', trap: 'Confusing prescription with speedy disposition.', keys: 'interruption; Cagang' },
		{
			cat: 'D', level: 4, topic: 'Absence of PI', title: 'No preliminary investigation — what to do',
			facts: 'An information for qualified theft (penalty above 4 years, 2 months and 1 day) is filed directly in the RTC without preliminary investigation. The accused is arrested on a warrant. Before arraignment, he moves to quash on the ground that no preliminary investigation was held.',
			q: 'Rule on the motion. What should the court do?',
			issue: 'Whether the absence of preliminary investigation is a ground to quash, and the proper remedy.',
			alac: {
				answer: 'Deny the motion to quash, but suspend the proceedings and remand the case for preliminary investigation.',
				legalBasis: 'Rule 112, Sec. 1: PI is required for offenses with a penalty of at least 4 years, 2 months and 1 day. Rule 117, Sec. 3 does not list its absence as a ground to quash. Larrañaga v. CA; Socrates v. Sandiganbayan: the court holds the proceedings in abeyance and remands. Rule 114, Sec. 26: the objection must be raised before plea.',
				application: 'The offense required PI; none was held. The accused raised it before arraignment. The proper relief is remand, not dismissal; the information remains valid and the court keeps jurisdiction.',
				conclusion: 'Treat the motion as one for preliminary investigation: suspend and remand.'
			},
			tempting: 'Quashing the information "for lack of due process." The absence of PI does not affect jurisdiction or the validity of the information.',
			keys: 'Larrañaga; Socrates; Rule 114, Sec. 26'
		},
		{
			cat: 'D', level: 4, topic: 'Inquest', title: 'Five days after learning of the filing',
			facts: 'X is arrested without a warrant for frustrated homicide on March 1. After inquest, an information is filed on March 2; X learns of it on March 3. On March 10, X moves for a preliminary investigation.',
			q: 'Should the motion be granted?',
			issue: 'Whether a motion for preliminary investigation filed more than five days after the accused learned of the filing is timely.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 112, Sec. 6: after filing without preliminary investigation, the accused "may within five (5) days from the time he learns of its filing, ask for a preliminary investigation." 2017 Revised Guidelines, III.2(b)(ii): a motion for PI filed beyond the five-day period is a prohibited motion, denied outright.',
				application: 'X learned of the filing on March 3; the five days ended on March 8. His March 10 motion is late.',
				conclusion: 'Deny the motion outright; the right was waived.'
			},
			missing: 'If March 8 fell on a Saturday, this is a procedural period, so Rule 22, Sec. 1 would carry it to the next working day — compute carefully.',
			keys: 'Sec. 6; 5 days; prohibited motion'
		},
		{
			cat: 'D', level: 4, topic: 'Judicial probable cause', title: 'Judge rubber-stamps the information',
			facts: 'An information for estafa is filed with the RTC at 9 a.m. By 10 a.m., the judge has issued a warrant of arrest. The order says only: "Finding probable cause based on the prosecutor\'s certification, let a warrant issue." The record shows that the affidavits had not yet been transmitted to the court.',
			q: 'Is the warrant valid?',
			issue: 'Whether a warrant may be issued on the prosecutor\'s certification alone.',
			alac: {
				answer: 'No.',
				legalBasis: 'Const., Art. III, Sec. 2: probable cause "to be determined personally by the judge." Rule 112, Sec. 5(a): the judge "shall personally evaluate the resolution of the prosecutor and its supporting evidence." Soliven v. Makasiar; Okabe v. Gutierrez (in Tiu): the judge should consider the report, affidavits and counter-affidavits, not the certification alone.',
				application: 'The supporting evidence was not even before the judge; he relied solely on the certification.',
				conclusion: 'The warrant is invalid; the accused may move to quash it (a meritorious motion under the 2017 Guidelines).'
			},
			missing: 'If the affidavits had been attached and the judge read them, a brief order would still be valid — he need not write a detailed resolution or examine witnesses.',
			keys: 'personal evaluation; Soliven; Okabe'
		},
		{
			cat: 'D', level: 4, topic: 'Remedies', title: 'Petition for review and arraignment',
			facts: 'On May 1, the city prosecutor approves the filing of an information for falsification against R. On May 5, the information is filed in court. On May 10, R files a petition for review with the Secretary of Justice and moves in court to suspend arraignment. The court denies the motion and sets arraignment on May 20.',
			q: 'Was the court correct?',
			issue: 'Whether arraignment should be suspended while a petition for review is pending with the DOJ.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 116, Sec. 11(c): upon motion, arraignment shall be suspended if a petition for review of the resolution of the prosecutor is pending at the DOJ or the Office of the President, provided the period of suspension does not exceed sixty days from the filing of the petition. DC 70, Sec. 9: the appeal does not hold the filing of the information, but proceedings in court should be held in abeyance.',
				application: 'R filed the petition before arraignment and moved to suspend. The court must suspend arraignment for up to sixty days from May 10.',
				conclusion: 'The court should suspend arraignment until the petition is resolved or until sixty days lapse, whichever comes first; it may still issue a warrant (Viudez v. CA).'
			},
			keys: 'Rule 116, Sec. 11(c); 60 days; DC 70'
		},
		{
			cat: 'E', level: 5, topic: 'Threshold', title: 'Which procedure — PI, Sec. 8, or expedited?',
			facts: 'Three complaints are filed in a chartered city: (1) slight physical injuries (arresto menor); (2) less serious physical injuries (arresto mayor); (3) estafa with a prescribed penalty of prision correccional maximum to prision mayor minimum.',
			q: 'Which procedure applies to each? Does any require preliminary investigation?',
			issue: 'Determining the applicable procedure from the prescribed penalty.',
			alac: {
				answer: '(1) Expedited (summary) procedure; (2) Sec. 8 procedure if not covered by the Expedited Rules — but arresto mayor (up to 6 months) is within the one-year ceiling, so it is also under the Expedited Rules; (3) preliminary investigation.',
				legalBasis: 'Rule 112, Sec. 1 (PI for at least 4y 2m 1d); Sec. 8 (cases below the threshold not under the summary rule); 2022 Rules on Expedited Procedures, Rule I, Sec. 1(B) (imprisonment not exceeding one year or fine not exceeding ₱50,000); Rule 110, Sec. 1 (in chartered cities, file with the prosecutor).',
				application: 'Arresto menor and arresto mayor both fall within one year — expedited procedure, filed with the city prosecutor (chartered city). The estafa\'s maximum (prision mayor minimum, 6y 1d to 8y) exceeds 4y 2m 1d — preliminary investigation required.',
				conclusion: '(1) and (2): expedited procedure via the city prosecutor; (3): preliminary investigation.'
			},
			trap: 'Using Tiu\'s 1991 summary-procedure ceiling (six months) would put case (2) under Sec. 8 instead.',
			update: 'Under the DOJ\'s 2024 circulars, the prosecutor would use summary investigation for (1) and (2) and — internally — expedited PI for offenses up to 6 years; (3) would get formal PI only if its prescribed penalty reaches 6y 1d (it does, at the maximum).',
			keys: 'Sec. 1; Sec. 8; 2022 Expedited Rules; chartered city'
		},
		{
			cat: 'E', level: 5, topic: 'Crespo / Lanier', title: 'DOJ reverses after arraignment',
			facts: 'After A is arraigned for estafa, the Secretary of Justice — on a petition filed before arraignment — reverses the finding of probable cause and directs the prosecutor to move for withdrawal of the information. The judge grants the motion, stating: "The Court defers to the expertise of the DOJ."',
			q: '(a) Could the Secretary still act after arraignment? (b) Was the judge\'s order proper? (c) What may the private complainant do?',
			issue: 'Effect of a DOJ reversal after the information is filed, and the court\'s duty.',
			alac: {
				answer: '(a) Yes. (b) No. (c) File a petition for certiorari under Rule 65.',
				legalBasis: 'DC 70, Sec. 7: arraignment after the filing of the petition does not bar the Secretary from exercising his power of review. Crespo v. Mogul; Lanier v. People (2014): the trial court must make an independent assessment of a motion to withdraw; deferring entirely to the DOJ is grave abuse of discretion. Tiu (p. 94): the private offended party may file Rule 65 when the court allows withdrawal without its own finding.',
				application: 'The petition was filed before arraignment, so the Secretary could act. But the judge merely deferred, without evaluating the evidence himself.',
				conclusion: 'The order granting withdrawal is void; the complainant may seek its annulment by certiorari.'
			},
			missing: 'If the judge had evaluated the evidence and found no probable cause, a dismissal after arraignment would raise double jeopardy issues — a dismissal on the prosecution\'s motion with the accused\'s express consent generally does not bar a new prosecution; check Rule 117, Sec. 7.',
			keys: 'DC 70, Sec. 7; Crespo; Lanier; Rule 65'
		},
		{
			cat: 'E', level: 5, topic: 'Inquest — offense mismatch', title: 'Arrested for one crime, inquested for another',
			facts: 'Police arrest Y without a warrant for allegedly inciting to sedition during a rally. At the inquest, the prosecutor, on the same referral, finds probable cause for rebellion — a different and graver offense — and files an information for rebellion.',
			q: 'Is the inquest valid?',
			issue: 'Whether an inquest may be conducted for an offense other than the one for which the person was arrested.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 112, Sec. 6 allows filing without preliminary investigation only for the offense for which the person was lawfully arrested without a warrant, after inquest. Tiu (p. 98), citing Beltran v. People: where the inquest was for another offense than the one that was the basis of the arrest, the inquest proceedings are void.',
				application: 'Y was arrested for inciting to sedition; rebellion was not the basis of the arrest. As to rebellion, there was no lawful warrantless arrest to support inquest; Y is entitled to a regular preliminary investigation.',
				conclusion: 'The inquest for rebellion is void; Y may demand preliminary investigation before plea.'
			},
			verify: 'Tiu gives "Beltran vs People" without citation; verify the case details before reciting them.',
			keys: 'Sec. 6; Beltran; void inquest'
		},
		{
			cat: 'E', level: 5, topic: 'Speedy disposition', title: 'Four years in preliminary investigation',
			facts: 'A fact-finding team of the Ombudsman investigates a mayor for two years. A formal complaint is filed in January 2020. The respondent files his counter-affidavit in March 2020 and twice moves for early resolution in 2021. The Ombudsman resolves only in January 2025. The case involves a single procurement contract.',
			q: 'May the mayor have the case dismissed for violation of the right to speedy disposition?',
			issue: 'Whether the delay in preliminary investigation violated the right to speedy disposition.',
			alac: {
				answer: 'Likely yes.',
				legalBasis: 'Const., Art. III, Sec. 16. Cagang v. Sandiganbayan (2018): the period is counted from the filing of the formal complaint, excluding fact-finding; if the delay exceeds the periods in the rules, the prosecution must justify it; the respondent must assert the right timely; complexity is considered.',
				application: 'Counting from January 2020 (not the earlier fact-finding), the resolution took five years for a single-contract case. The mayor asserted his right in 2021. The prosecution must show the delay was justified by complexity or attributable to the mayor.',
				conclusion: 'Unless the Ombudsman justifies the delay, the case should be dismissed for violation of the right to speedy disposition.'
			},
			missing: 'Whether the Ombudsman\'s own rules set a specific period for resolving the preliminary investigation (it determines who bears the burden), and whether any delay was caused by the mayor\'s own motions.',
			keys: 'Cagang; formal complaint; fact-finding excluded; burden'
		},
		{ cat: 'F', level: 3, topic: 'Crespo v. Mogul', q: 'State the rule in Crespo v. Mogul and explain what the fiscal should do if the court denies his motion to dismiss filed on the Secretary of Justice\'s instructions.', a: 'Once an information is filed, its disposition rests in the court\'s sound discretion; the court may grant or deny a motion to dismiss even if based on the Secretary\'s directive. If denied, the fiscal must continue to appear for the People and present the evidence (he may turn over presentation to a private prosecutor under his direction and control) — he cannot abandon the case, or the proceedings would be void.', keys: 'Crespo; sound discretion; duty to continue' },
		{ cat: 'F', level: 4, topic: 'Ocampo v. Abando', q: 'In Ocampo v. Abando (2014), what two rulings did the Court make on preliminary investigation and warrants?', a: '(1) Where efforts were made to reach the respondent and he had an opportunity to present evidence, a preliminary investigation resolved on the complainant\'s evidence is valid (Sec. 3[d]). (2) No hearing is needed before a warrant; personal examination is not mandatory; personal evaluation of the prosecutor\'s report and supporting documents suffices.', keys: 'Sec. 3(d); no hearing; personal evaluation' },
		{ cat: 'F', level: 4, topic: 'Cajipe v. People', q: 'What is the prosecution\'s remedy when the trial court dismisses the information for lack of probable cause, and why is there no double jeopardy?', a: 'Appeal (the order is final) — or refiling with new evidence. No double jeopardy because the accused has not been arraigned (Cajipe v. People, 2014). Certiorari is not the remedy.', keys: 'final order; appeal; no arraignment' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 112', title: 'Rule 112 integrated — from complaint to warrant',
			facts: 'On June 1, C files an estafa complaint (penalty above 6 years) against R in Quezon City, with affidavits notarized by a notary public although an assistant prosecutor was available in the same building. On June 20, the prosecutor issues a subpoena. R receives it on June 25 and, on July 5, files a "Motion to Dismiss for Lack of Jurisdiction" arguing the transaction occurred in Makati. The prosecutor resolves on July 30 finding probable cause; the city prosecutor approves on August 20. The information is filed on August 25. On August 26, R files a "Motion for Judicial Determination of Probable Cause." On September 15, the judge, without reading the affidavits, issues a warrant.',
			q: 'Identify every procedural defect and its effect.',
			issue: 'Compliance with Rule 112, Secs. 3–5, the 2017 Guidelines, and the effect of each defect.',
			alac: {
				answer: 'There are five defects; only the warrant is seriously vulnerable.',
				legalBasis: 'Rule 112, Sec. 3(a) (affidavits before a prosecutor or authorized official; notary only in their absence); Sec. 3(b) (10 days to subpoena); Sec. 3(c) (10 days for counter-affidavit; no motion to dismiss in lieu); Sec. 4 (forward within 5 days; head acts within 10 days); Sec. 5(a) (judge personally evaluates within 10 days); 2017 Revised Guidelines (motion for judicial determination of probable cause prohibited); Sasot v. People (want of proper oath is a defect of form).',
				application: '(1) Notarization when a prosecutor was available — a defect of form, curable (Sasot). (2) Subpoena on day 19 instead of within 10 days — a directory period; no effect on validity, possibly administrative. (3) R\'s motion to dismiss in lieu of a counter-affidavit is not allowed; R is deemed not to have controverted the complaint — though venue (Makati) is a real issue to raise later by motion to quash for lack of jurisdiction (Rule 117, Sec. 3[b]), which is never waived. (4) The head acted 21 days after the resolution — directory, no effect. (5) R\'s motion for judicial determination of probable cause is prohibited and should be denied outright; and the judge\'s warrant, issued 21 days after filing and without reading the affidavits, violates Sec. 5(a) and Art. III, Sec. 2.',
				conclusion: 'The information stands; R may move to quash the warrant (meritorious) and, before plea, move to quash the information for improper venue if the evidence shows the offense occurred entirely in Makati.'
			},
			trap: 'Treating every missed period as fatal. Most Rule 112 periods are directory; the constitutional requirement of personal determination is not.',
			keys: 'Sec. 3(a)–(c); Sec. 4; Sec. 5(a); 2017 Guidelines; Sasot; venue'
		}
	],
	memorize: [
		'Definition of PI (Sec. 1) and the threshold: at least 4 years, 2 months, 1 day, without regard to the fine',
		'Officers (Sec. 2): prosecutors and state prosecutors; others by law; no MTC judges since 2005',
		'Sec. 3 steps and periods: 10 / 10 / hearing 10 & 5 / 10',
		'Sec. 4: forward in 5 days; head acts in 10; no filing or dismissal without prior written approval',
		'Sec. 5: judge evaluates in 10 days; additional evidence in 5; resolve in 30; when no warrant',
		'Sec. 6: inquest; PI before filing with Art. 125 waiver and counsel (15 days); PI within 5 days after learning of filing',
		'Art. 125: 12 / 18 / 36 hours',
		'Remedies: MR → Secretary (15 days) → CA via Rule 65; Ombudsman → SC via Rule 65 (Gatchalian)',
		'2017 Guidelines prohibited motions; 2024 DOJ circulars (DC 015, DC 028)'
	],
	flashcards: [
		['Define preliminary investigation.', 'An inquiry or proceeding to determine whether there is sufficient ground to engender a well-founded belief that a crime has been committed and the respondent is probably guilty thereof, and should be held for trial.'],
		['When is PI required?', 'For offenses with a prescribed penalty of at least 4 years, 2 months and 1 day, without regard to the fine (except lawful warrantless arrests — inquest).'],
		['Can an MTC judge conduct PI?', 'No, since October 3, 2005.'],
		['Period to subpoena or dismiss?', '10 days from filing.'],
		['Period for counter-affidavit?', '10 days from receipt of subpoena.'],
		['Can the respondent cross-examine at the clarificatory hearing?', 'No; he may submit questions.'],
		['Period for the head of office to act?', '10 days from receipt of the record.'],
		['Effect of absence of PI?', 'Not a ground to quash; no effect on jurisdiction; court suspends and remands if raised before plea.'],
		['Must the judge personally examine witnesses for a warrant?', 'No; personal evaluation of the record suffices.'],
		['RTC judge\'s period to evaluate probable cause?', '10 days; additional evidence within 5 days; resolve within 30 days from filing.'],
		['When no warrant is needed?', 'Already detained; filed after inquest; fine only; Sec. 8(b) summons; summary procedure except failure to appear.'],
		['Art. 125 periods?', '12 hours (light), 18 hours (correctional), 36 hours (afflictive/capital).'],
		['Period to ask for PI after inquest filing?', '5 days from learning of the filing.'],
		['Remedy vs. Ombudsman probable-cause finding?', 'Rule 65 to the Supreme Court.'],
		['Is a motion for judicial determination of probable cause allowed?', 'No — prohibited by the 2017 Guidelines.']
	],
	oral: [
		['"Is preliminary investigation a constitutional right?"', 'No. It is statutory, but once granted it is a substantive right and part of due process. It is waived if not invoked before or at plea.'],
		['"What does the prosecutor determine in a preliminary investigation?"', 'Probable cause — whether there is sufficient ground to believe a crime was committed and the respondent is probably guilty and should be tried. Not guilt beyond reasonable doubt.'],
		['"The judge received the information. What must he do?"', 'Within ten days, personally evaluate the prosecutor\'s resolution and supporting evidence. Dismiss if probable cause is clearly lacking; issue a warrant or commitment order if present; if in doubt, require additional evidence within five days and resolve within thirty days from filing.'],
		['"What if there was no preliminary investigation?"', 'The information is valid and the court has jurisdiction; it is not a ground to quash. The accused should, before plea, ask the court to suspend proceedings and remand for preliminary investigation.'],
		['"Distinguish inquest from preliminary investigation."', 'Inquest is a summary investigation of a person lawfully arrested without a warrant, done within the Art. 125 periods, to decide whether he stays in custody and is charged. PI is the full inquiry with subpoena and counter-affidavits. The arrested person may opt for PI by waiving Art. 125 with counsel, or within five days after learning of the filing.'],
		['"What is your remedy against a DOJ resolution? Against the Ombudsman\'s?"', 'For DOJ: MR, petition for review to the Secretary within 15 days, then Rule 65 in the CA (CTA for tax cases). For the Ombudsman in criminal cases: MR, then Rule 65 directly in the Supreme Court.']
	],
	checklist: [
		'I can define preliminary investigation and state the threshold penalty.',
		'I can list who may conduct it and explain the 2005 amendment.',
		'I can outline the Sec. 3 procedure with all its periods.',
		'I can explain Sec. 4: approval, review by the Secretary, and the effect of a DOJ reversal after filing (Crespo, Lanier).',
		'I can state the judge\'s options and periods under Sec. 5, and when no warrant is needed.',
		'I can explain inquest, the Art. 125 waiver, and the five-day rule.',
		'I can state the remedies against DOJ and Ombudsman resolutions.',
		'I can name the prohibited motions under the 2017 Guidelines.',
		'I can explain the effect of absence of PI and how to raise it.',
		'I can apply Cagang to delay in preliminary investigation.'
	],
	sheet: [
		'<b>PI (Sec. 1):</b> probable cause, not guilt; required if penalty ≥ 4y 2m 1d (prescribed, regardless of fine). Statutory, substantive, waivable before plea.',
		'<b>Who (Sec. 2):</b> prosecutors; state prosecutors; Ombudsman, COMELEC, PCGG. No MTC judges since 2005.',
		'<b>Procedure (Sec. 3):</b> sworn affidavits → 10 days subpoena/dismiss → 10 days counter-affidavit (no MTD) → optional hearing (10/5, no cross) → 10 days resolve.',
		'<b>Review (Sec. 4):</b> forward 5 days; head acts 10 days; prior written approval; Secretary may reverse; court not bound (Crespo, Lanier).',
		'<b>Warrant (Sec. 5):</b> judge personally evaluates within 10 days; extra evidence 5 days; resolve 30 days. No warrant if detained, after inquest, fine only.',
		'<b>Inquest (Sec. 6):</b> warrantless arrest; Art. 125 (12/18/36 h); PI with waiver + counsel (15 days); PI within 5 days after learning of filing.',
		'<b>Sec. 8:</b> below threshold — prosecutor 10 days; MTC judge 10/10/10; summons possible.',
		'<b>Remedies:</b> DOJ → Secretary (15 days) → CA Rule 65; Ombudsman → SC Rule 65 (Gatchalian). 2017 Guidelines: no motion for judicial determination of PC. 2024 DOJ DC 015/028.'
	],
	watchFor: `<strong>Watch for: the penalty, the arrest, and who acted when.</strong>
<ul>
<li>Prescribed penalty ≥ 4y 2m 1d? Was the respondent arrested without a warrant (inquest)?</li>
<li>Count the periods: 10/10/10 (Sec. 3), 5/10 (Sec. 4), 10/5/30 (Sec. 5), 15 and 5 (Sec. 6).</li>
<li>DOJ or Ombudsman? Before or after the information was filed (Crespo)? Before or after arraignment?</li>
</ul>`
};
