/*
 * Practice quizzes — four sets of four-option situational MCQs, by Rule range:
 *   Quiz 1: Rules 110–114 · Quiz 2: Rules 115–119 · Quiz 3: Rules 120–124 · Quiz 4: Rules 125–127.
 * Each item is written with the correct answer first (`a`) and three distractors (`d`); `arrange` rotates the
 * options so the correct answer's position varies in the printed guide (the MCQ engine shuffles them again).
 * IDs come from each item's position in its quiz, so append new items at the end of a quiz to keep saved
 * progress attached.
 */
import type { McqQuestion, McqTag } from '$lib/types';
import { box, h3, p, ruleLink } from './model';

export interface QuizItem {
	/** Rule number the item tests. */
	r: number;
	q: string;
	/** The correct option. */
	a: string;
	/** Three wrong options. */
	d: [string, string, string];
	/** Why the answer is right (and the tempting option wrong). */
	e: string;
	/** Legal basis. */
	b: string;
	tag?: McqTag;
	hint?: string;
}

export interface Quiz {
	id: string;
	n: number;
	from: number;
	to: number;
	items: QuizItem[];
	watchFor: string;
}

/* ------------------------------------------------------------------ *
 * Quiz 1 — Rules 110–114
 * ------------------------------------------------------------------ */

const quiz1: QuizItem[] = [
	{
		r: 110,
		q: `A complaint for slight physical injuries, an offense that does not require preliminary investigation, is to be filed in Quezon City, a chartered city. Where is it filed?`,
		a: `With the office of the city prosecutor`,
		d: [`Directly with the Metropolitan Trial Court`, `With the barangay captain, who forwards it to the court`, `With the PNP station that investigated the incident`],
		e: `In chartered cities, the complaint is filed with the prosecutor, unless the city charter provides otherwise. Direct filing with the first-level court is allowed only outside chartered cities.`,
		b: `Rule 110, Sec. 1(b)`
	},
	{
		r: 110,
		q: `A complaint for estafa (an RPC felony) is filed with the office of the provincial prosecutor for preliminary investigation. What is its effect on the prescriptive period?`,
		a: `It interrupts the running of the prescriptive period`,
		d: [`None until the information is filed in court`, `It interrupts prescription only if the respondent is served a subpoena`, `It suspends prescription only for the 60 days allowed for preliminary investigation`],
		e: `For RPC felonies, the filing of the complaint with the prosecutor for preliminary investigation interrupts prescription (Art. 91, RPC; Rule 110, Sec. 1). See the prescription module for special laws and ordinances.`,
		b: `Rule 110, Sec. 1; RPC Art. 91`
	},
	{
		r: 110,
		q: `A wife wants to file a complaint for concubinage against her husband only, sparing his mistress, who is a close family friend. May she?`,
		a: `No. The complaint must include both guilty parties, if both are alive`,
		d: [`Yes, because the offended spouse controls whom to prosecute`, `Yes, but only with the prosecutor's approval`, `No, because concubinage is a public crime that only the prosecutor may file`],
		e: `In adultery and concubinage, the offended spouse cannot institute the action against one guilty party only; both must be included if both are alive, and the action is barred if the spouse consented or pardoned.`,
		b: `Rule 110, Sec. 5; RPC Art. 344`
	},
	{
		r: 110,
		q: `An information was signed by an assistant city prosecutor without the city prosecutor's prior written authority. The accused was arraigned and went to trial without objecting. After the prosecution rests, he moves to dismiss for lack of authority. Ruling?`,
		a: `Deny. The lack of authority is not jurisdictional and was waived by failure to raise it before plea`,
		d: [`Grant. Lack of authority is a jurisdictional defect that may be raised at any time`, `Grant, but only if the defect appears on the face of the information`, `Deny, because only the court may raise the defect motu proprio`],
		e: `Villa Gomez v. People (2020, En Banc) held that the filing officer's lack of authority is not jurisdictional; it is waived if not raised by motion to quash before plea, and the court cannot dismiss on that ground motu proprio. Tiu (2017) states the older contrary view.`,
		b: `Rule 117, Secs. 3(d) and 9; Villa Gomez v. People (2020)`
	},
	{
		r: 110,
		q: `An information for murder alleges only that the accused killed the victim "with treachery," without stating the facts that make up treachery. What is the accused's proper remedy, and when?`,
		a: `A motion to quash for defect in form, or a motion for a bill of particulars, before arraignment`,
		d: [`Object to the evidence of treachery at trial; the defect is jurisdictional`, `Raise it on appeal; failure to allege ultimate facts can never be waived`, `No remedy; naming the circumstance is always sufficient`],
		e: `People v. Solar (2019, En Banc): qualifying and aggravating circumstances must be alleged with their ultimate facts. The defect is cured or waived: the accused must file a motion to quash under Rule 117, Sec. 3(e) or a bill of particulars before arraignment, or he waives it.`,
		b: `Rule 110, Secs. 8–9; Rule 117, Sec. 3(e); Rule 116, Sec. 9; People v. Solar (2019)`
	},
	{
		r: 110,
		q: `After the accused pleaded not guilty to homicide, the prosecutor moves to amend the information to murder by adding treachery. Ruling?`,
		a: `Deny. It is a substantial amendment, which is not allowed after plea`,
		d: [`Grant, with leave of court, since amendments are liberally allowed`, `Grant, if the accused is re-arraigned`, `Grant, as a substitution of the information`],
		e: `After plea, only formal amendments may be made, with leave and without prejudice to the accused. Changing homicide to murder alters the nature of the offense — a substantial amendment. It is not a substitution, because homicide is included in murder.`,
		b: `Rule 110, Sec. 14`
	},
	{
		r: 111,
		q: `In a BP 22 prosecution, the complainant files a manifestation reserving the right to file a separate civil action for the amount of the checks. What is its effect?`,
		a: `None. The civil action for the amount of the checks is deemed included and cannot be reserved`,
		d: [`The civil action is validly reserved and must be filed separately`, `The criminal case is suspended until the civil action is filed`, `The reservation is valid if made before the prosecution presents evidence`],
		e: `In BP 22 cases, the criminal action is deemed to include the corresponding civil action, and no reservation to file it separately is allowed.`,
		b: `Rule 111, Sec. 1(b)`
	},
	{
		r: 111,
		q: `The accused is acquitted of estafa because his guilt was not proved beyond reasonable doubt; the court finds the money was in fact received and not returned. May he be held civilly liable in the same judgment?`,
		a: `Yes. Civil liability ex delicto survives an acquittal on reasonable doubt and requires only preponderance of evidence`,
		d: [`No. An acquittal always extinguishes civil liability ex delicto`, `No. The offended party must file a separate civil action`, `Yes, but only if the civil action was reserved`],
		e: `Civil liability ex delicto is extinguished only when the judgment finds that the act or omission from which it might arise did not exist. An acquittal on reasonable doubt leaves it intact.`,
		b: `Rule 111, Sec. 2; Rule 120, Sec. 2; Civil Code Art. 29`
	},
	{
		r: 111,
		q: `The victim of serious physical injuries files a civil action for damages under Art. 33 of the Civil Code while the criminal case is pending, without having reserved it. Must the civil action be suspended?`,
		a: `No. An independent civil action proceeds independently and need not be reserved`,
		d: [`Yes, until final judgment in the criminal case`, `Yes, because it was not reserved`, `It must be dismissed as forum shopping`],
		e: `Independent civil actions under Arts. 32, 33, 34 and 2176 of the Civil Code may be brought separately, need no reservation, and are not suspended by the criminal action — though there can be no double recovery.`,
		b: `Rule 111, Sec. 3`
	},
	{
		r: 111,
		q: `The accused dies while his appeal from a conviction for homicide is pending. What happens to his civil liability?`,
		a: `Civil liability ex delicto is extinguished; liability from other sources (e.g., quasi-delict) may be pursued against his estate in a separate action`,
		d: [`All civil liability is extinguished`, `The appeal continues on the civil aspect alone`, `His civil liability ex delicto is automatically charged against his estate`],
		e: `Death pending appeal extinguishes criminal liability and civil liability based solely on the offense; claims based on other sources of obligation survive and may be filed against the estate (People v. Bayotas, 1994).`,
		b: `Rule 111, Sec. 4; RPC Art. 89; People v. Bayotas (1994)`
	},
	{
		r: 111,
		q: `Months after an information for bigamy was filed, the accused files a civil case to annul his first marriage, then asks the criminal court to suspend the bigamy case on the ground of a prejudicial question. Ruling?`,
		a: `Deny. A prejudicial question requires a previously instituted civil action`,
		d: [`Grant, since nullity of the first marriage is always determinative of bigamy`, `Grant, but only until the civil case reaches pre-trial`, `Deny, because a prejudicial question can only be raised before the prosecutor`],
		e: `The elements of a prejudicial question are a previously instituted civil action involving an issue similar or intimately related to the criminal action, the resolution of which determines whether the criminal action may proceed. A civil case filed after the criminal case does not qualify.`,
		b: `Rule 111, Secs. 6–7`
	},
	{
		r: 112,
		q: `Under Rule 112, when is a preliminary investigation required before an information is filed?`,
		a: `When the offense is punishable by at least 4 years, 2 months and 1 day of imprisonment, without regard to the fine`,
		d: [`When the offense is punishable by more than 6 years of imprisonment`, `Only when the offense is within the RTC's exclusive original jurisdiction`, `Whenever the respondent asks for one`],
		e: `Rule 112, Sec. 1 requires preliminary investigation for offenses where the penalty prescribed by law is at least 4 years, 2 months and 1 day, regardless of the fine. Check the 2024 DOJ circulars for how prosecutors now classify cases (marked Verify in the Rule 112 chapter).`,
		b: `Rule 112, Sec. 1`
	},
	{
		r: 112,
		q: `Served a subpoena in a preliminary investigation, the respondent files a motion to dismiss the complaint for lack of jurisdiction instead of a counter-affidavit. What should the investigating prosecutor do?`,
		a: `Not entertain it; a motion to dismiss is not allowed in lieu of a counter-affidavit`,
		d: [`Resolve the motion first before requiring a counter-affidavit`, `Treat it as a counter-affidavit and resolve the complaint`, `Forward it to the court for resolution`],
		e: `Rule 112, Sec. 3(c) requires the respondent to submit a counter-affidavit within 10 days and provides that a motion to dismiss in lieu of a counter-affidavit shall not be admitted.`,
		b: `Rule 112, Sec. 3(c)`
	},
	{
		r: 112,
		q: `An information for qualified theft is filed in the RTC with the prosecutor's resolution and supporting evidence. What must the judge do?`,
		a: `Personally evaluate the resolution and evidence within 10 days, and issue a warrant, dismiss, or require additional evidence`,
		d: [`Conduct a new preliminary investigation`, `Issue a warrant immediately on the strength of the prosecutor's certification`, `Personally examine the complainant and witnesses by searching questions before any warrant issues`],
		e: `The judge personally evaluates the prosecutor's resolution and supporting evidence; he may dismiss if the evidence clearly fails to establish probable cause, issue a warrant, or order additional evidence within 5 days, resolving the issue within 30 days from filing. Personal examination by searching questions is required for search warrants, not warrants of arrest (Soliven).`,
		b: `Rule 112, Sec. 5(a); Soliven v. Makasiar`
	},
	{
		r: 112,
		q: `A person arrested without a warrant for robbery wants a preliminary investigation instead of an inquest. What must he do?`,
		a: `Sign a waiver of Art. 125 of the RPC with the assistance of counsel; the investigation must end within 15 days`,
		d: [`File a motion for preliminary investigation with the court before any information is filed, without any waiver`, `Post bail first, which automatically entitles him to preliminary investigation`, `Nothing; preliminary investigation is automatic after a warrantless arrest`],
		e: `Before the complaint or information is filed, the person arrested may ask for a preliminary investigation, but must sign a waiver of Art. 125 in the presence of counsel. The investigation must be terminated within 15 days from its inception.`,
		b: `Rule 112, Sec. 6`
	},
	{
		r: 112,
		q: `The Ombudsman finds probable cause to charge a mayor with graft. What is the mayor's remedy against the finding?`,
		a: `A petition for certiorari under Rule 65 with the Supreme Court`,
		d: [`A petition for review under Rule 43 with the Court of Appeals`, `An appeal to the Office of the President`, `A petition for review on certiorari under Rule 45 with the Supreme Court`],
		e: `Findings of probable cause by the Ombudsman in criminal cases are reviewed by Rule 65 certiorari in the Supreme Court for grave abuse of discretion (Gatchalian v. Ombudsman, 2018), not by Rule 43.`,
		b: `Gatchalian v. Ombudsman (2018)`
	},
	{
		r: 113,
		q: `Police officers on patrol see X hand a small plastic sachet to Y in exchange for money, in front of them. They arrest X without a warrant. Is the arrest valid?`,
		a: `Yes, as an in flagrante delicto arrest — an overt act indicating a crime, done in the officers' presence`,
		d: [`No, because the officers did not have a warrant`, `Yes, as a hot pursuit arrest`, `No, unless the sachet is first confirmed to contain drugs`],
		e: `An in flagrante arrest requires (1) an overt act showing the person has just committed, is committing or is attempting to commit an offense, (2) done in the presence or within the view of the arresting officer.`,
		b: `Rule 113, Sec. 5(a)`
	},
	{
		r: 113,
		q: `Three days after a shooting, police arrest Z without a warrant on the strength of eyewitness statements identifying him. Is the arrest valid?`,
		a: `No. Hot pursuit requires that the offense has just been committed and that the officer has personal knowledge of facts indicating the person committed it`,
		d: [`Yes, as a hot pursuit arrest, because eyewitnesses identified him`, `Yes, because the police have probable cause`, `Yes, if Z is charged within 36 hours`],
		e: `A delay of days defeats "just been committed," and the officers relied on others' accounts rather than personal knowledge (Go v. CA). The police should have obtained a warrant.`,
		b: `Rule 113, Sec. 5(b); Go v. CA`
	},
	{
		r: 113,
		q: `A warrant of arrest issued on March 1 has not been served by March 11. What is its status?`,
		a: `It remains valid until served or lifted; the officer must report to the judge within 10 days after the 10-day execution period`,
		d: [`It is void after 10 days, like a search warrant`, `It must be re-issued by the judge`, `It expires when the officer files his report`],
		e: `A warrant of arrest has no expiry; the 10-day period is for execution and reporting. A search warrant, by contrast, is void after 10 days (Rule 126, Sec. 10).`,
		b: `Rule 113, Sec. 4`
	},
	{
		r: 113,
		q: `An accused who was illegally arrested is arraigned and pleads not guilty without raising the illegality. At trial, he moves to dismiss the case because of the illegal arrest. Ruling?`,
		a: `Deny. Objections to an illegal arrest are waived if not raised before plea`,
		d: [`Grant. An illegal arrest voids the court's jurisdiction over the case`, `Grant, because posting bail did not waive the objection`, `Deny, but order his release`],
		e: `Any objection to the legality of the arrest must be made before entering a plea; otherwise it is waived. The waiver does not, however, make evidence obtained through the illegal arrest admissible.`,
		b: `Rule 113; Rule 114, Sec. 26; Rule 117, Sec. 9`
	},
	{
		r: 113,
		q: `A detention prisoner escapes while being transferred to court. A jail guard who sees him the next day re-arrests him without a warrant. Is the arrest valid?`,
		a: `Yes. A person who escaped from a penal establishment or while being transferred may be arrested without a warrant`,
		d: [`No, a new warrant must be issued`, `Only if the escape happened within 24 hours`, `Only if the guard was part of the original transfer escort`],
		e: `Rule 113, Sec. 5(c) allows a warrantless arrest of a prisoner who escaped from a penal establishment or place of confinement, or while being transferred from one confinement to another.`,
		b: `Rule 113, Sec. 5(c)`
	},
	{
		r: 114,
		q: `X is charged in the RTC with homicide (reclusion temporal). Before conviction, is he entitled to bail?`,
		a: `Yes, as a matter of right`,
		d: [`Only in the court's discretion, after a hearing`, `No, because homicide is punishable by more than 6 years`, `Only if he is not a recidivist`],
		e: `Before conviction by the RTC, bail is a matter of right for offenses not punishable by death, reclusion perpetua or life imprisonment.`,
		b: `Rule 114, Sec. 4; Const., Art. III, Sec. 13`
	},
	{
		r: 114,
		q: `In a murder case, the judge grants bail without a hearing because the prosecutor filed no opposition. Was this proper?`,
		a: `No. A hearing is mandatory where bail is discretionary, and the prosecution must be given the chance to show strong evidence of guilt`,
		d: [`Yes, because the prosecution's silence is a waiver`, `Yes, because bail is a matter of right in all cases before conviction`, `Yes, if the accused is a first offender`],
		e: `For offenses punishable by reclusion perpetua or life imprisonment, bail is denied when evidence of guilt is strong. Whether it is strong can be decided only after a hearing in which the prosecution bears the burden; granting bail without one is grave abuse.`,
		b: `Rule 114, Secs. 7–8`
	},
	{
		r: 114,
		q: `The RTC convicts Y of homicide and sentences him to 12 years. The prosecution shows Y earlier escaped from legal confinement. Y applies for bail pending appeal. Ruling?`,
		a: `Deny. Where the penalty exceeds 6 years and the accused previously escaped, bail shall be denied or cancelled`,
		d: [`Grant, because homicide is a bailable offense`, `Grant, because bail is a matter of right pending appeal`, `Refer the application to the Court of Appeals in all cases`],
		e: `After RTC conviction for an offense not punishable by RP/LI, bail is discretionary; if the penalty exceeds 6 years, it is denied or cancelled on a showing of circumstances such as recidivism, prior escape, or probability of flight.`,
		b: `Rule 114, Sec. 5`
	},
	{
		r: 114,
		q: `Z is charged in Manila with estafa, a bailable offense, and is arrested in Cebu City. Where may he post bail?`,
		a: `With any RTC judge of Cebu City (or, if none is available, any MTC judge there), since bail is a matter of right`,
		d: [`Only in the Manila court where the case is pending`, `Only after he is brought to Manila`, `With the Cebu City police station`],
		e: `Bail may be filed with the court where the case is pending, or, if the accused is arrested elsewhere, with any RTC judge (or MTC judge if none is available) of that province or city. This does not apply where bail is discretionary or on recognizance, which go only to the court of the case.`,
		b: `Rule 114, Sec. 17`
	}
];

/* ------------------------------------------------------------------ *
 * Quiz 2 — Rules 115–119
 * ------------------------------------------------------------------ */

const quiz2: QuizItem[] = [
	{
		r: 115,
		q: `After arraignment, the accused, on bail, stops attending trial despite notice and without justification. May trial proceed?`,
		a: `Yes, in absentia, since he was arraigned, notified and his absence is unjustified`,
		d: [`No, trial must be suspended until he is arrested`, `Yes, but only if his counsel consents`, `No, because the accused must be present at every stage`],
		e: `Trial in absentia requires (1) prior arraignment, (2) due notice, and (3) unjustified absence.`,
		b: `Const., Art. III, Sec. 14(2); Rule 115, Sec. 1(c)`
	},
	{
		r: 115,
		q: `At which of the following must the accused be present?`,
		a: `Arraignment`,
		d: [`The hearing of his appeal in the Court of Appeals`, `Promulgation of a judgment for a light offense`, `Trial dates after he was arraigned and validly waived his appearance, where identification is not in issue`],
		e: `The accused must be present at arraignment and plea, at promulgation (except for light offenses), and when needed for identification. He need not attend the hearing of his appeal (Rule 124, Sec. 9).`,
		b: `Rule 116, Sec. 1(b); Rule 115, Sec. 1(c); Rule 120, Sec. 6; Rule 124, Sec. 9`
	},
	{
		r: 115,
		q: `The prosecution calls the accused to the witness stand as its first witness. What may the accused do?`,
		a: `Refuse to take the witness stand altogether`,
		d: [`Take the stand but refuse each incriminating question`, `Take the stand only if his counsel is present`, `Nothing; he must testify if subpoenaed`],
		e: `An ordinary witness may refuse only specific incriminating questions; the accused may refuse to testify at all. If he does testify, he may be cross-examined on matters covered by his direct (People v. Ayson).`,
		b: `Rule 115, Sec. 1(d)–(e); People v. Ayson`
	},
	{
		r: 115,
		q: `Which of the following is protected by the right against self-incrimination?`,
		a: `Being compelled to write from dictation to produce a handwriting sample`,
		d: [`Being fingerprinted`, `Being made to try on clothing found at the crime scene`, `Being photographed`],
		e: `The privilege covers testimonial compulsion. Mechanical acts (fingerprinting, photographs, trying on clothes) are not covered, but writing from dictation calls for the accused's mental act and is covered (Beltran v. Samson).`,
		b: `Rule 115, Sec. 1(e); Const., Art. III, Sec. 17`
	},
	{
		r: 115,
		q: `A public official invokes the right to speedy disposition of cases before the Ombudsman. From when is the delay counted?`,
		a: `From the filing of the formal complaint; fact-finding investigations are excluded`,
		d: [`From the commission of the offense`, `From the start of the fact-finding investigation`, `From the filing of the information in the Sandiganbayan`],
		e: `Cagang v. Sandiganbayan (2018, En Banc): the period runs from the filing of the formal complaint; the burden shifts depending on whether the periods were exceeded; and the right must be timely asserted.`,
		b: `Const., Art. III, Sec. 16; Cagang v. Sandiganbayan (2018)`
	},
	{
		r: 116,
		q: `An accused who is not detained must be arraigned within what period?`,
		a: `Within 30 days from the date the court acquires jurisdiction over his person`,
		d: [`Within 10 days from the filing of the information`, `Within 15 days from the raffle of the case`, `Within 60 days from the filing of the information`],
		e: `Rule 116, Sec. 1(g) sets 30 days from acquisition of jurisdiction, excluding time for a pending motion to quash, bill of particulars or suspension. A detained accused is arraigned within 10 days from raffle.`,
		b: `Rule 116, Sec. 1(e), (g)`
	},
	{
		r: 116,
		q: `At arraignment for homicide, the accused says, "Guilty, but I only fired because he was about to stab me." What plea should the court enter?`,
		a: `Not guilty`,
		d: [`Guilty, with the claim treated as a mitigating circumstance`, `Guilty to a lesser offense`, `No plea until he consults counsel`],
		e: `A plea of guilty accompanied by a claim of a justifying or exculpatory circumstance (self-defense) is not a valid plea of guilty; a plea of not guilty is entered.`,
		b: `Rule 116, Sec. 1(d)`
	},
	{
		r: 116,
		q: `The accused pleads guilty to murder (reclusion perpetua). What must the court do?`,
		a: `Conduct a searching inquiry into the voluntariness and full comprehension of the plea, require the prosecution to prove guilt and the precise degree of culpability, and allow the accused to present evidence`,
		d: [`Render judgment immediately on the plea`, `Reject the plea, because guilty pleas are not allowed in capital offenses`, `Conduct a searching inquiry only; reception of evidence is discretionary`],
		e: `For a plea of guilty to a capital offense, all three are mandatory. Reception of evidence is discretionary only for non-capital offenses (Sec. 4).`,
		b: `Rule 116, Sec. 3`
	},
	{
		r: 116,
		q: `At arraignment, the accused offers to plead guilty to a lesser offense necessarily included in the charge. The prosecutor agrees. The offended party was duly notified but did not appear. May the court allow the plea?`,
		a: `Yes, with the conformity of the trial prosecutor alone`,
		d: [`No, the offended party's consent is indispensable`, `No, plea bargaining is allowed only during pre-trial`, `Yes, even without the prosecutor's conformity`],
		e: `Rule 116, Sec. 1(f): if the offended party fails to appear at arraignment despite due notice, the court may allow a plea to a lesser offense necessarily included in the offense charged with the conformity of the trial prosecutor alone.`,
		b: `Rule 116, Secs. 1(f) and 2`
	},
	{
		r: 116,
		q: `The accused's petition for review of the prosecutor's resolution is pending before the DOJ. He moves to suspend his arraignment. For how long may it be suspended?`,
		a: `Not more than 60 days from the filing of the petition`,
		d: [`Until the DOJ resolves the petition, however long that takes`, `Not more than 30 days from the filing of the motion`, `It may not be suspended on that ground`],
		e: `A pending petition for review with the DOJ or the Office of the President is a ground to suspend arraignment, but the suspension cannot exceed 60 days from the filing of the petition.`,
		b: `Rule 116, Sec. 11(c)`
	},
	{
		r: 117,
		q: `After arraignment and during trial, the accused discovers that the offense had prescribed before the information was filed. May he still move to quash?`,
		a: `Yes. Extinction of criminal liability is not waived by failure to raise it before plea`,
		d: [`No. All grounds not raised before plea are waived`, `Only with leave of court and the prosecutor's consent`, `No. Prescription must be raised in a demurrer to evidence`],
		e: `Grounds that survive the plea: failure to charge an offense, lack of jurisdiction over the offense, extinction of the offense or penalty, and double jeopardy.`,
		b: `Rule 117, Secs. 3(g) and 9`
	},
	{
		r: 117,
		q: `The accused moves to quash, after his arraignment, on the ground that the court never acquired jurisdiction over his person. Ruling?`,
		a: `Deny. Lack of jurisdiction over the person is waived if not raised before plea`,
		d: [`Grant. Jurisdiction can be raised at any stage`, `Grant, because jurisdiction over the person can never be waived`, `Deny, but only if he posted bail`],
		e: `Unlike lack of jurisdiction over the offense, lack of jurisdiction over the person is waivable and is waived by entering a plea without objection.`,
		b: `Rule 117, Secs. 3(c) and 9`
	},
	{
		r: 117,
		q: `After arraignment and repeated postponements by the prosecution, the court dismisses the case on the accused's motion invoking his right to speedy trial. May he be charged again with the same offense?`,
		a: `No. A dismissal for violation of the right to speedy trial amounts to an acquittal and bars a second prosecution`,
		d: [`Yes, because the dismissal was upon the accused's own motion`, `Yes, within the prescriptive period`, `Yes, if the prosecution shows the delays were justified`],
		e: `As a rule, a dismissal on the accused's motion does not bar re-prosecution, but a dismissal for violation of the right to speedy trial (or on demurrer) is equivalent to an acquittal and gives rise to double jeopardy.`,
		b: `Rule 117, Sec. 7; Const., Art. III, Sec. 21`
	},
	{
		r: 117,
		q: `A theft case (penalty not exceeding 6 years) is provisionally dismissed with the accused's express consent and notice to the offended party, by an order issued on March 1, 2025. Until when may it be revived?`,
		a: `March 1, 2026 — one year from the issuance of the order`,
		d: [`Two years from issuance of the order`, `One year from the prosecution's receipt of the order`, `At any time within the prescriptive period of theft`],
		e: `A provisional dismissal becomes permanent if not revived within 1 year (offenses punishable by imprisonment not exceeding 6 years or a fine) or 2 years (over 6 years). Under A.M. No. 12-11-2-SC and the 2017 Guidelines, the period runs from issuance of the order.`,
		b: `Rule 117, Sec. 8; A.M. No. 12-11-2-SC, Sec. 14`
	},
	{
		r: 117,
		q: `A reckless driver hits a jeepney, killing one passenger and slightly injuring another. He is convicted of reckless imprudence resulting in slight physical injuries. May he later be prosecuted for reckless imprudence resulting in homicide for the same incident?`,
		a: `No. Reckless imprudence is a single quasi-offense; conviction for one consequence bars prosecution for the others`,
		d: [`Yes, because homicide is a graver offense`, `Yes, because there were different victims`, `Yes, under the supervening-fact exception`],
		e: `Ivler v. Modesto-San Pedro (2010): the quasi-offense of reckless imprudence is one offense regardless of its several consequences; a prior conviction or acquittal for one bars prosecution for the rest.`,
		b: `Rule 117, Sec. 7; Ivler v. Modesto-San Pedro (2010)`
	},
	{
		r: 117,
		q: `The accused is convicted, on a plea of guilty, of frustrated homicide. Two weeks later the victim dies of the wound. May he now be charged with homicide?`,
		a: `Yes. The graver offense developed from a supervening fact arising from the same act`,
		d: [`No. Double jeopardy bars any second prosecution for the same act`, `No, because he pleaded guilty`, `Yes, but only if the prosecution consented to the first plea`],
		e: `Conviction does not bar prosecution for a graver offense that developed because of supervening facts arising from the same act or omission (e.g., the victim's later death).`,
		b: `Rule 117, Sec. 7(a)`
	},
	{
		r: 118,
		q: `When must pre-trial be held in a criminal case where the accused is not detained?`,
		a: `After arraignment and within 30 days from the date the court acquires jurisdiction over the accused`,
		d: [`Only if the prosecution moves for it`, `Before arraignment, to explore plea bargaining`, `Only in cases within the RTC's jurisdiction`],
		e: `Pre-trial is mandatory in all criminal cases before the Sandiganbayan, RTC and first-level courts, after arraignment and within 30 days from the court's acquisition of jurisdiction (10 days for a detained accused under the 2017 Guidelines).`,
		b: `Rule 118, Sec. 1`
	},
	{
		r: 118,
		q: `At pre-trial, defense counsel orally admits that the accused was at the scene of the crime. The admission is recorded in the minutes but not signed by the accused. May it be used against him?`,
		a: `No. Pre-trial admissions must be reduced to writing and signed by the accused and counsel`,
		d: [`Yes, because counsel's admissions bind the client`, `Yes, because it appears in the court's minutes`, `Only if the accused does not repudiate it at trial`],
		e: `All agreements or admissions made at pre-trial must be in writing and signed by the accused and counsel; otherwise they cannot be used against the accused.`,
		b: `Rule 118, Sec. 2`
	},
	{
		r: 118,
		q: `The pre-trial order limits trial to the issue of self-defense. At trial, the prosecution tries to present evidence on a matter not in the order. May the court allow it?`,
		a: `Only to prevent manifest injustice; the pre-trial order otherwise binds the parties and limits the trial`,
		d: [`Yes, freely, because pre-trial orders are not binding in criminal cases`, `No, never, because the order is final`, `Yes, if the defense fails to object`],
		e: `The pre-trial order binds the parties, limits the trial to matters not disposed of, and controls the course of the action, unless modified by the court to prevent manifest injustice.`,
		b: `Rule 118, Sec. 4`
	},
	{
		r: 118,
		q: `During court-annexed mediation in a homicide case, the heirs and the accused settle the civil liability, and the heirs execute an affidavit of desistance. What happens to the criminal case?`,
		a: `It proceeds; a compromise on civil liability does not extinguish the public action`,
		d: [`It is dismissed because the civil liability is settled`, `It is provisionally dismissed`, `It is converted into a civil case`],
		e: `The civil aspect may be compromised, but the compromise does not extinguish criminal liability; the offense is against the State. Desistance may weaken the prosecution's evidence but does not by itself require dismissal.`,
		b: `Civil Code Art. 2034; Rule 118, Sec. 1; 2017 Revised Guidelines`
	},
	{
		r: 119,
		q: `After the prosecution rests, the accused files a demurrer to evidence without leave of court. It is denied. What follows?`,
		a: `He waives the right to present evidence, and the case is decided on the prosecution's evidence`,
		d: [`He may still present evidence, since denial of a demurrer is interlocutory`, `He may appeal the denial immediately`, `The court must set the case for reception of defense evidence`],
		e: `A demurrer filed without leave, if denied, waives the accused's right to present evidence; with leave, he may still present evidence after denial.`,
		b: `Rule 119, Sec. 23`
	},
	{
		r: 119,
		q: `The court grants the accused's demurrer to evidence. May the prosecution appeal?`,
		a: `No. The grant is an acquittal; only certiorari for grave abuse amounting to lack of jurisdiction may lie`,
		d: [`Yes, within 15 days from notice`, `Yes, by petition for review under Rule 42`, `Yes, if the demurrer was filed without leave`],
		e: `A grant of a demurrer to evidence is a judgment of acquittal on the merits; appeal would place the accused in double jeopardy.`,
		b: `Rule 119, Sec. 23; Rule 122, Sec. 1`
	},
	{
		r: 119,
		q: `The prosecution moves to discharge co-accused C as a state witness. Which circumstance, if shown, defeats the motion?`,
		a: `C appears to be the most guilty`,
		d: [`C's testimony can be substantially corroborated on its material points`, `There is no other direct evidence available except C's testimony`, `C has not been convicted of any offense involving moral turpitude`],
		e: `Requisites: (1) absolute necessity of the testimony; (2) no other direct evidence except his; (3) testimony can be substantially corroborated; (4) he does not appear to be the most guilty; (5) he has not been convicted of an offense involving moral turpitude.`,
		b: `Rule 119, Sec. 17`
	},
	{
		r: 119,
		q: `A prosecution witness is about to leave the Philippines for good. The prosecution wants his testimony taken conditionally. Before whom?`,
		a: `Only before the court where the case is pending`,
		d: [`Before any judge, notary or lawyer, like a defense witness`, `Before the Philippine consul where he will reside`, `Before the investigating prosecutor`],
		e: `A prosecution witness's conditional examination is taken before the court where the case is pending (Rule 119, Sec. 15; Manguerra v. Risos), unlike a defense witness, whose deposition may be taken before any judge or member of the bar (Secs. 12–13).`,
		b: `Rule 119, Sec. 15; Manguerra v. Risos`
	},
	{
		r: 119,
		q: `The prosecution asks for a continuance because the court's calendar is congested and its witness, though available, was not subpoenaed in time. Should the continuance be granted?`,
		a: `No. Congestion of the calendar and lack of diligent preparation are not grounds for continuance`,
		d: [`Yes, at the court's discretion, for any good cause`, `Yes, if the defense does not object`, `Yes, once for each party`],
		e: `Rule 119, Sec. 4 prohibits continuances based on congestion of the court's calendar, lack of diligent preparation, or failure to obtain available witnesses.`,
		b: `Rule 119, Sec. 4`
	}
];

/* ------------------------------------------------------------------ *
 * Quiz 3 — Rules 120–124
 * ------------------------------------------------------------------ */

const quiz3: QuizItem[] = [
	{
		r: 120,
		q: `A is charged with murder qualified by treachery, but treachery is not proved. Of what may he be convicted?`,
		a: `Homicide, the offense proved, which is included in the offense charged`,
		d: [`Murder, since treachery was alleged`, `Nothing; he must be acquitted for failure of proof`, `Homicide, but only if the information is first amended`],
		e: `When the offense charged includes the offense proved, the accused is convicted of the offense proved.`,
		b: `Rule 120, Secs. 4–5`
	},
	{
		r: 120,
		q: `B is charged with homicide. At trial, treachery is clearly proved, though the information never alleged it. Of what may he be convicted?`,
		a: `Homicide`,
		d: [`Murder, because treachery was proved`, `Murder, if the defense did not object to the evidence`, `Nothing until the information is amended to murder`],
		e: `When the offense charged is included in the offense proved, the accused is convicted of the offense charged. A qualifying circumstance not alleged cannot be appreciated.`,
		b: `Rule 120, Secs. 4–5; Rule 110, Sec. 8`
	},
	{
		r: 120,
		q: `C, on bail, is notified of the promulgation of a judgment of conviction but goes to a party instead. What is the consequence?`,
		a: `The judgment is promulgated by recording it in the docket; C loses his remedies and is ordered arrested, unless within 15 days he surrenders and moves for leave, showing justifiable cause`,
		d: [`Promulgation must be reset until C appears`, `C keeps his remedies, which his counsel may pursue for him`, `The judgment is void for lack of the accused's presence`],
		e: `An accused who fails without justifiable cause to appear at promulgation of a conviction loses the remedies available against the judgment; within 15 days from promulgation he may surrender and seek leave to avail of them (Jaylo v. Sandiganbayan).`,
		b: `Rule 120, Sec. 6`
	},
	{
		r: 120,
		q: `D is convicted of a light offense. May the judgment be promulgated without him?`,
		a: `Yes, in the presence of his counsel or representative`,
		d: [`No, the accused must always be present`, `Yes, by mailing a copy to him`, `Only if he waives his presence in writing`],
		e: `For a light offense, the judgment may be pronounced in the presence of the accused's counsel or representative.`,
		b: `Rule 120, Sec. 6`
	},
	{
		r: 120,
		q: `Convicted of estafa with a probationable penalty, E applies for probation on day 10 after promulgation. On day 14 he files a notice of appeal. What is the status of the judgment?`,
		a: `Final; the application for probation waived his right to appeal`,
		d: [`Not final; the notice of appeal was filed within 15 days`, `Not final until the probation application is resolved`, `Final only as to the civil aspect`],
		e: `A judgment becomes final when the accused applies for probation; appeal and probation are mutually exclusive (Almero), subject to RA 10707's exception when an appellate court reduces the penalty to a probationable one.`,
		b: `Rule 120, Sec. 7; PD 968 as amended by RA 10707`
	},
	{
		r: 121,
		q: `The accused is acquitted. Within 15 days, the prosecution files a motion for reconsideration. Ruling?`,
		a: `Deny. Reconsideration under Rule 121 is available only against a judgment of conviction, on the accused's motion`,
		d: [`Grant if the motion shows a clear error of law`, `Set it for hearing, then resolve on the merits`, `Grant only if the private complainant joins the motion`],
		e: `Rule 121 applies only before a judgment of conviction becomes final, on motion of the accused (or by the court with his consent). Reconsidering an acquittal would put him twice in jeopardy.`,
		b: `Rule 121, Sec. 1; Const., Art. III, Sec. 21`
	},
	{
		r: 121,
		q: `After conviction, the accused moves for new trial, presenting a receipt proving payment that he had in his files during trial but forgot to give his lawyer. Should the motion be granted on the ground of newly discovered evidence?`,
		a: `No. The evidence could have been discovered and produced at trial with reasonable diligence`,
		d: [`Yes, because it would probably change the judgment`, `Yes, because it is material`, `Yes, if the prosecutor does not oppose`],
		e: `Newly discovered evidence must have been discovered after trial, not discoverable and producible at trial with reasonable diligence, material, and likely to change the judgment. Evidence in the accused's own files fails the diligence requirement.`,
		b: `Rule 121, Sec. 2(b)`
	},
	{
		r: 121,
		q: `A new trial is granted on the ground of newly discovered evidence. What happens to the evidence already presented?`,
		a: `It stands, and the new evidence is taken and considered with it`,
		d: [`It is set aside and all witnesses testify again`, `It is set aside only as to the prosecution`, `It is struck from the record`],
		e: `When new trial is granted on newly discovered evidence, the evidence already adduced stands; when granted for errors of law or irregularities, the affected proceedings and evidence are set aside and taken anew. In all cases, the original judgment is vacated.`,
		b: `Rule 121, Sec. 6`
	},
	{
		r: 121,
		q: `Convicted on June 1, F moves for reconsideration on June 12. The denial is received on July 1. Until when may he appeal?`,
		a: `July 16 — a fresh 15 days from receipt of the denial`,
		d: [`July 5 — the 4 days left of the original period`, `June 16 — the original period is not suspended`, `July 31 — 30 days from receipt of the denial`],
		e: `The fresh-period rule of Neypes applies to criminal appeals (Yu v. Samson-Tatad, 2011): the accused has 15 days from notice of the order denying the motion for new trial or reconsideration.`,
		b: `Rule 122, Sec. 6; Yu v. Samson-Tatad (2011)`
	},
	{
		r: 121,
		q: `The judgment misapplied the Indeterminate Sentence Law; no new evidence is needed to correct it. What is the proper remedy in the trial court?`,
		a: `A motion for reconsideration, on the ground of error of law in the judgment`,
		d: [`A motion for new trial, on the ground of error of law during trial`, `A motion to reopen the proceedings`, `A petition for relief from judgment`],
		e: `Reconsideration covers errors of law or fact in the judgment that require no further proceedings. New trial covers errors of law or irregularities during the trial, or newly discovered evidence.`,
		b: `Rule 121, Secs. 2–3`
	},
	{
		r: 122,
		q: `An MTC convicts G; the RTC affirms on appeal. How does G bring the case to the Court of Appeals?`,
		a: `By petition for review under Rule 42`,
		d: [`By notice of appeal filed with the RTC`, `By petition for review on certiorari under Rule 45`, `By notice of appeal filed with the Court of Appeals`],
		e: `Appeal to the CA from an RTC decision rendered in its appellate jurisdiction is by petition for review under Rule 42. The wrong mode does not toll the period.`,
		b: `Rule 122, Sec. 3(b)`
	},
	{
		r: 122,
		q: `The RTC convicts H of murder and imposes reclusion perpetua. How and where does H appeal?`,
		a: `By notice of appeal filed with the RTC, to the Court of Appeals`,
		d: [`By notice of appeal directly to the Supreme Court`, `The case goes to the Supreme Court for automatic review`, `By petition for review on certiorari under Rule 45 with the Supreme Court`],
		e: `Since People v. Mateo (2004) and A.M. No. 00-5-03-SC, RTC judgments imposing reclusion perpetua or life imprisonment are appealed by notice of appeal to the CA.`,
		b: `Rule 122, Sec. 3(c); People v. Mateo (2004)`
	},
	{
		r: 122,
		q: `The RTC acquits I after trial. The prosecutor believes the court misappreciated the evidence. What is the People's remedy?`,
		a: `None by appeal; certiorari lies only for grave abuse amounting to lack of jurisdiction or denial of due process — not for misappreciation of evidence`,
		d: [`Appeal to the CA within 15 days`, `A Rule 45 petition to the Supreme Court on questions of law`, `A motion for new trial`],
		e: `An acquittal is final, unappealable and immediately executory. Rule 65 certiorari reaches only errors of jurisdiction (Villareal v. Aliga, 2014; Ysidoro v. Leonardo-de Castro, 2012).`,
		b: `Rule 122, Sec. 1; Const., Art. III, Sec. 21`
	},
	{
		r: 122,
		q: `J is acquitted of estafa on reasonable doubt; the court awards no damages. May the complainant appeal?`,
		a: `Yes, as to the civil aspect only, within the same period as the accused`,
		d: [`No, an acquittal bars any appeal`, `Yes, as to both the criminal and civil aspects`, `Only through the OSG`],
		e: `The offended party may appeal the civil aspect of a judgment of acquittal (Ching v. Nicdao, 2007); the criminal aspect is untouched (Rule 122, Sec. 11[b]).`,
		b: `Rule 122, Secs. 1 and 11(b); Ching v. Nicdao (2007)`
	},
	{
		r: 122,
		q: `K and L are convicted of robbery with homicide; only K appeals. The CA finds the homicide was not committed on the occasion of the robbery and convicts K of robbery only. Effect on L?`,
		a: `L benefits, because the ruling is favorable and applicable to him`,
		d: [`None, because L did not appeal`, `L benefits only if he files his own appeal within 15 days of the CA ruling`, `L's sentence is increased instead`],
		e: `An appeal by one accused does not affect those who did not appeal, except insofar as the appellate judgment is favorable and applicable to them.`,
		b: `Rule 122, Sec. 11(a)`
	},
	{
		r: 122,
		q: `Convicted of homicide on a murder information, M appeals. May the CA convict him of murder?`,
		a: `Yes. By appealing, the accused throws the whole case open for review and waives double jeopardy`,
		d: [`No, the trial court's judgment was an implied acquittal of murder`, `No, unless the People also appealed`, `Only if M assigned treachery as an error`],
		e: `An appeal by the accused opens the entire case; the appellate court may correct unassigned errors and increase the penalty (Trono v. US; Bu Lin v. CA; Rule 124, Sec. 11).`,
		b: `Rule 122, Sec. 1; Rule 124, Sec. 11`
	},
	{
		r: 122,
		q: `N perfects an appeal by filing a notice of appeal, then changes his mind before the record is forwarded to the appellate court. May he withdraw the appeal?`,
		a: `Yes, the trial court may allow it, and the judgment becomes final`,
		d: [`No, a perfected appeal can no longer be withdrawn`, `Only the appellate court may allow withdrawal`, `Yes, but the judgment remains appealable for another 15 days`],
		e: `The trial court may allow withdrawal of the appeal before the record is forwarded; the judgment then becomes final.`,
		b: `Rule 122, Sec. 12`
	},
	{
		r: 123,
		q: `What procedure governs a criminal case for theft (penalty within the MTC's jurisdiction, imprisonment over one year) filed in a Municipal Trial Court?`,
		a: `The same procedure as in the RTC`,
		d: [`The 2022 Rules on Expedited Procedures`, `The 1991 Revised Rule on Summary Procedure`, `The Rules on Small Claims`],
		e: `MTC procedure is the same as the RTC's, except court-specific provisions and cases under the special procedure for minor offenses — now the 2022 Rules on Expedited Procedures, which cover offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000 (plus traffic, rental, ordinance and BP 22 cases).`,
		b: `Rule 123, Sec. 1; A.M. No. 08-8-7-SC (2022)`
	},
	{
		r: 123,
		q: `Which criminal case in a first-level court is covered by the 2022 Rules on Expedited Procedures?`,
		a: `A violation of a city ordinance`,
		d: [`Falsification of a public document by a private individual`, `Estafa involving ₱500,000`, `Serious physical injuries`],
		e: `The 2022 Rules cover traffic, rental law, ordinance and BP 22 cases, and other offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000. The other options carry heavier penalties.`,
		b: `Rule 123, Sec. 1; A.M. No. 08-8-7-SC (2022)`
	},
	{
		r: 124,
		q: `Within what period must the appellant file his brief in a criminal appeal before the Court of Appeals?`,
		a: `30 days from receipt of the notice that the evidence is attached to the record`,
		d: [`45 days from receipt of the notice to file brief`, `15 days from perfection of the appeal`, `30 days from filing of the notice of appeal`],
		e: `Criminal appeals: appellant 30 days, appellee 30 days, reply 20 days. Civil appeals (Rule 44): 45–45–20.`,
		b: `Rule 124, Secs. 3–4`
	},
	{
		r: 124,
		q: `O, detained and represented by a PAO lawyer designated as counsel de oficio, fails to file his brief on time. The OSG moves to dismiss the appeal. Ruling?`,
		a: `Deny. An appeal may not be dismissed for failure to file the brief where the appellant is represented by counsel de oficio`,
		d: [`Grant, since the period lapsed`, `Grant, unless O files the brief himself within 5 days`, `Grant, because PAO lawyers are counsel de parte`],
		e: `Rule 124, Sec. 8 excepts appellants represented by counsel de oficio from dismissal for failure to file the brief; the CA should require counsel to file or appoint another.`,
		b: `Rule 124, Secs. 2 and 8`
	},
	{
		r: 124,
		q: `While his appeal is pending, P, out on bail, flies to Canada without the court's permission. What may the CA do?`,
		a: `Dismiss the appeal, on motion of the appellee or motu proprio`,
		d: [`Only cancel his bail; the appeal must still be decided`, `Suspend the appeal until he returns`, `Decide the appeal without a brief, giving it due course`],
		e: `The CA may dismiss the appeal if the appellant escapes, jumps bail or flees to a foreign country during the pendency of the appeal.`,
		b: `Rule 124, Sec. 8`
	},
	{
		r: 124,
		q: `The CA affirms Q's conviction and the penalty of reclusion perpetua. What does the CA do with its judgment, and how may Q go to the Supreme Court?`,
		a: `It renders and enters judgment; Q may appeal by notice of appeal filed with the CA`,
		d: [`It renders but does not enter judgment, and certifies the case to the SC`, `It enters judgment; Q may go up only by Rule 45 on questions of law`, `It forwards the case to the SC for automatic review`],
		e: `Where the CA imposes reclusion perpetua, life imprisonment or a lesser penalty, it renders and enters judgment; RP/LI judgments may be appealed to the SC by notice of appeal filed with the CA. "Render but not enter" applies to death, now dormant under RA 9346.`,
		b: `Rule 124, Sec. 13(c)`
	},
	{
		r: 124,
		q: `During his appeal in the CA, R wants a new trial because the trial judge refused to let his counsel cross-examine a key witness. May he move for new trial in the CA on that ground?`,
		a: `No. In the CA, new trial is allowed only on newly discovered evidence; the trial error should be assigned as error in the appeal`,
		d: [`Yes, errors of law during trial are a ground for new trial in any court`, `Yes, but only before the appellee's brief is filed`, `No, new trial is never allowed in the CA`],
		e: `Rule 124, Sec. 14 limits new trial in the CA to newly discovered evidence material to the defense; trial irregularities are raised in the appeal itself.`,
		b: `Rule 124, Sec. 14`
	},
	{
		r: 124,
		q: `S's motion for reconsideration of the CA decision is denied. He files a second motion for reconsideration raising new grounds. Ruling?`,
		a: `It is not allowed; no party may file a second MR of a judgment or final order of the CA`,
		d: [`It is allowed if it raises grounds not in the first motion`, `It is allowed with leave of court`, `It is allowed within 15 days from the denial`],
		e: `Rule 124, Sec. 16: an MR must be filed within 15 days from notice of the decision, it stays the mittimus, and no second MR is allowed.`,
		b: `Rule 124, Sec. 16`
	}
];

/* ------------------------------------------------------------------ *
 * Quiz 4 — Rules 125–127
 * ------------------------------------------------------------------ */

const quiz4: QuizItem[] = [
	{
		r: 125,
		q: `In a criminal appeal, the Supreme Court en banc is equally divided on whether to acquit, and remains so after re-deliberation. What is the result?`,
		a: `The conviction is reversed and the accused acquitted`,
		d: [`The conviction is affirmed`, `The case is remanded to the CA`, `The Chief Justice casts the deciding vote`],
		e: `Rule 125, Sec. 3: if the en banc is equally divided or the necessary majority cannot be had on whether to acquit, the case is deliberated again, and if no decision is reached, the conviction is reversed and the accused acquitted.`,
		b: `Rule 125, Sec. 3`
	},
	{
		r: 125,
		q: `The CA affirms a conviction for falsification with a penalty of 6 years. How is the CA decision reviewed by the Supreme Court?`,
		a: `As in civil cases — by petition for review on certiorari under Rule 45, on questions of law`,
		d: [`By notice of appeal filed with the CA`, `By automatic review`, `By petition for review under Rule 42`],
		e: `Review of CA decisions in criminal cases follows the civil procedure (Rule 45), except that reclusion perpetua and life imprisonment cases go up by notice of appeal (Rule 124, Sec. 13[c]).`,
		b: `Rule 125, Sec. 2; Rule 124, Sec. 13`
	},
	{
		r: 125,
		q: `What procedure does the Supreme Court follow in criminal cases, original and appealed?`,
		a: `The same as in the Court of Appeals, unless the Constitution or law provides otherwise`,
		d: [`Its own internal rules exclusively`, `The procedure of the trial court of origin`, `The procedure in the Sandiganbayan`],
		e: `Rule 125, Sec. 1 makes SC procedure uniform with the CA's, subject to the Constitution and statutes.`,
		b: `Rule 125, Sec. 1`
	},
	{
		r: 126,
		q: `Which of the following may NOT be the subject of a search warrant?`,
		a: `A parcel of land used as a drug den`,
		d: [`Counterfeiting plates used to print fake bills`, `Jewelry stolen in a robbery`, `Unlicensed firearms`],
		e: `A search warrant is for personal property: the subject of the offense, its proceeds or fruits, or the means of committing it. Land is not personal property to be seized and brought before the court.`,
		b: `Rule 126, Secs. 1 and 3`
	},
	{
		r: 126,
		q: `An information for illegal possession of firearms is already pending in the RTC of Pasig. The police want a search warrant for more firearms connected with the case. Where must they apply?`,
		a: `Only in the RTC of Pasig where the criminal action is pending`,
		d: [`In any court within the judicial region where the warrant will be enforced`, `In the RTC of Manila, through its executive judge, in all cases`, `In any court where the firearms are located`],
		e: `Once the criminal action has been filed, the application shall be made only in the court where it is pending.`,
		b: `Rule 126, Sec. 2, last par.`
	},
	{
		r: 126,
		q: `A respondent's first motion to quash a search warrant attacks only probable cause. After it is denied, he files a second motion arguing improper venue. Ruling on the second motion?`,
		a: `Deny. Venue in search warrant applications is not jurisdictional and was waived under the omnibus motion rule`,
		d: [`Grant. Venue is jurisdictional in criminal cases and may be raised anytime`, `Grant, because the venue rule in Sec. 2 is mandatory`, `Deny, because only the prosecution may raise venue`],
		e: `An application for a search warrant is not a criminal action but a special criminal process; venue is not jurisdictional and is waived if not raised in the first motion (Pilipinas Shell v. Romars, 2015).`,
		b: `Rule 126, Secs. 2 and 14; Pilipinas Shell v. Romars (2015)`
	},
	{
		r: 126,
		q: `The judge lets the branch clerk question the applicant's witness, then reads the transcript and signs the search warrant. Is the warrant valid?`,
		a: `No. The judge must personally examine the applicant and witnesses by searching questions and answers`,
		d: [`Yes, since the judge reviewed the transcript`, `Yes, because the witness testified under oath`, `Yes, if the clerk is a lawyer`],
		e: `Examination by the clerk is not personal examination by the judge (Bache & Co. v. Ruiz, 1971). The Constitution and Rule 126, Sec. 5 require the judge himself to ask searching questions.`,
		b: `Const., Art. III, Sec. 2; Rule 126, Secs. 4–5; Bache v. Ruiz`
	},
	{
		r: 126,
		q: `The applicant's witnesses answer a mimeographed form of leading questions by filling in blanks; the judge asks no other questions. The warrant issues. Is it valid?`,
		a: `No. Leading, routinary questions on a pre-printed form are not "searching questions"; issuing the warrant is grave abuse`,
		d: [`Yes, because the witnesses swore to the answers`, `Yes, as long as the answers show probable cause`, `Yes, because the form of the examination is left to the judge's discretion`],
		e: `The examination must be probing and exhaustive, not merely routinary or pro forma (Silva v. Presiding Judge, 1991; Yao v. People, 2007).`,
		b: `Rule 126, Sec. 5; Silva v. Presiding Judge (1991)`
	},
	{
		r: 126,
		q: `A search warrant authorizes the seizure of "items used in violation of the Dangerous Drugs Act and the Comprehensive Firearms Law." What is the defect?`,
		a: `It is a scatter-shot warrant, issued for more than one specific offense`,
		d: [`It fails to name the owner of the items`, `It does not state the time of service`, `There is no defect if the items are listed`],
		e: `A search warrant must issue in connection with one specific offense (Rule 126, Sec. 4). A warrant for several offenses is void (Stonehill v. Diokno; Vallejo v. CA).`,
		b: `Rule 126, Sec. 4`
	},
	{
		r: 126,
		q: `A warrant correctly describes the premises to be searched but names the wrong person as the owner. Is it void?`,
		a: `No. A wrong owner's name is not fatal if the place is otherwise described so that the officer has no discretion`,
		d: [`Yes. Any error in the warrant voids it`, `Yes, because the owner's name is an essential requisite`, `No, but only if the actual owner consents`],
		e: `Where the warrant is for specifically described premises, failure to name, or misnaming, the owner does not invalidate it (Uy and Unifish Packing Corp. v. BIR, 2000).`,
		b: `Rule 126, Sec. 4; Uy v. BIR (2000)`
	},
	{
		r: 126,
		q: `A warrant describes some documents specifically ("unregistered sales invoices for 2024") and others generally ("records of all transactions"). What is its status?`,
		a: `Valid as to the specifically described items and void as to the rest — the warrant is severable`,
		d: [`Void in its entirety`, `Valid in its entirety, because part of it is specific`, `Valid only if the respondent does not object`],
		e: `A partially defective warrant remains valid as to the items particularly described; the items not sufficiently described may be cut off (Uy v. BIR; Microsoft v. Maxicorp).`,
		b: `Rule 126, Sec. 4`
	},
	{
		r: 126,
		q: `A warrant covers "the house at No. 5 Mabini St." The police also search the adjoining house at No. 7, which they personally know the suspect uses. Is the search of No. 7 valid?`,
		a: `No. Officers cannot amplify the place described in the warrant by their own knowledge`,
		d: [`Yes, because the officers had personal knowledge`, `Yes, if contraband is found there`, `Yes, because both houses are on the same street`],
		e: `Only the judge, and only in the warrant itself, may particularize the place to be searched (People v. Francisco, 2002).`,
		b: `Rule 126, Sec. 4; People v. Francisco (2002)`
	},
	{
		r: 126,
		q: `A search warrant dated May 2 is served on May 14. What is the status of the search?`,
		a: `Invalid; the warrant was void after 10 days from its date`,
		d: [`Valid, because a warrant is good until served`, `Valid, if the delay was justified`, `Valid, because the 10-day period runs from receipt by the officer`],
		e: `A search warrant is valid for 10 days from its date; thereafter it is void.`,
		b: `Rule 126, Sec. 10`
	},
	{
		r: 126,
		q: `A warrant silent on the time of service is served at 11:00 p.m. Was the service proper?`,
		a: `No. The warrant must be served in the daytime unless it directs service at any time, based on an affidavit asserting the property is on the person or in the place`,
		d: [`Yes, a search warrant may be served at any hour`, `Yes, if the occupant was awake`, `Yes, if the officers knocked and announced`],
		e: `Rule 126, Sec. 9: daytime service is the rule; night service requires a direction in the warrant based on the affidavit.`,
		b: `Rule 126, Sec. 9`
	},
	{
		r: 126,
		q: `The occupant and his family are absent. In whose presence must the search of the house be made?`,
		a: `Two witnesses of sufficient age and discretion residing in the same locality`,
		d: [`Two police officers not part of the raiding team`, `The barangay captain only`, `Any two adults chosen by the officers`],
		e: `The search must be made in the presence of the lawful occupant or a member of his family, or, in their absence, two witnesses of sufficient age and discretion residing in the same locality.`,
		b: `Rule 126, Sec. 8`
	},
	{
		r: 126,
		q: `A courier company's owner, following company policy and without any police involvement, opens a package, finds marijuana and turns it over to the NBI. Is the marijuana admissible against the sender?`,
		a: `Yes. The constitutional protection and the exclusionary rule apply to the State, not to private individuals acting on their own`,
		d: [`No. It is fruit of the poisonous tree`, `No, because no search warrant was obtained`, `Only if the sender consented in writing`],
		e: `People v. Marti (1991): the Bill of Rights restrains the government; a search by a private person, without State participation, does not trigger the exclusionary rule.`,
		b: `Const., Art. III, Secs. 2–3; People v. Marti (1991)`
	},
	{
		r: 126,
		q: `T is lawfully arrested in a mall. An hour later, police go to his condominium unit across town and search it without a warrant "as an incident of the arrest." Is the search valid?`,
		a: `No. A search incident to arrest is limited to the person and the place of arrest`,
		d: [`Yes, because the arrest was lawful`, `Yes, if done within 24 hours`, `Yes, if items connected with the crime are found`],
		e: `A search incident to a lawful arrest covers the person and the area within his immediate control at the place of arrest, for weapons or evidence (Nolasco v. Paño).`,
		b: `Rule 126, Sec. 13; Nolasco v. Paño`
	},
	{
		r: 126,
		q: `During a patrol after a bomb threat, police frisk U because his "eyes were moving very fast" while he stood on a street corner. They find a grenade. Is the frisk valid?`,
		a: `No. A stop-and-frisk needs a genuine reason, not a hunch`,
		d: [`Yes, because of the bomb threat`, `Yes, because stop-and-frisk needs no justification`, `Yes, because a grenade was found`],
		e: `Malacat v. CA (1997): stop-and-frisk requires a genuine reason, from the officer's experience and the surroundings, to believe the person is armed; fast-moving eyes are not enough.`,
		b: `Malacat v. CA (1997); Terry v. Ohio`
	},
	{
		r: 126,
		q: `Police receive an anonymous text that a man in a green shirt on a certain jeepney is carrying marijuana. They stop the jeepney at a checkpoint and search the man's bag. He had done nothing suspicious. Is the search valid?`,
		a: `No. A solitary, unverified tip is not probable cause for a warrantless search of a moving vehicle or its passengers`,
		d: [`Yes, as a search of a moving vehicle`, `Yes, as a checkpoint search`, `Yes, because the description matched`],
		e: `People v. Sapla (2020, En Banc): an unverified tip, without other suspicious circumstances personally observed by the police, does not establish probable cause.`,
		b: `Const., Art. III, Sec. 2; People v. Sapla (2020)`
	},
	{
		r: 126,
		q: `At a routine checkpoint, officers look into V's car with a flashlight, see nothing unusual, then order the trunk opened "as standard procedure." V complies silently; firearms are found. Is the trunk search valid?`,
		a: `No. A checkpoint search must be limited to a visual inspection; there was no probable cause, and silent compliance is not consent`,
		d: [`Yes, because checkpoints are valid`, `Yes, because V consented by complying`, `Yes, because firearms were found`],
		e: `Routine checkpoint searches are valid only when visual (Valmonte v. De Villa; Aniag v. COMELEC); a more intrusive search needs probable cause. Consent must be unequivocal and free; passive submission is not consent (People v. Aruta).`,
		b: `Valmonte v. De Villa; Aniag v. COMELEC; People v. Aruta`
	},
	{
		r: 126,
		q: `Executing a valid search warrant for shabu, officers see an unlicensed pistol lying on the living room table and seize it. Is the pistol admissible?`,
		a: `Yes, under the plain view doctrine`,
		d: [`No, because it was not described in the warrant`, `No, unless a second warrant is obtained`, `Yes, but only in the drug case`],
		e: `Plain view requires a lawful prior intrusion or position, inadvertent discovery, and that the item's illegality be immediately apparent (People v. Fajardo, 2011).`,
		b: `People v. Fajardo (2011)`
	},
	{
		r: 126,
		q: `Police learn on a Monday the name of a drug courier, the bus he will take, and that he will arrive on Thursday. They do not apply for a warrant, and search him on arrival. Is the search valid?`,
		a: `No. The authorities had ample time and opportunity to obtain a warrant`,
		d: [`Yes, as a search of a moving vehicle`, `Yes, because they had reliable information`, `Yes, as a search incident to arrest`],
		e: `People v. Aminnudin (1988); People v. Racho (2010): when the police had ample time to secure a warrant, a warrantless search and arrest are not justified.`,
		b: `People v. Aminnudin (1988); People v. Racho (2010)`
	},
	{
		r: 126,
		q: `A search warrant issued by the RTC of Makati was used to seize goods; the criminal case was later filed in the RTC of Pasig. The respondent's motion to quash, filed in Makati, was never resolved. Which court resolves it?`,
		a: `The RTC of Pasig, where the criminal case is now pending`,
		d: [`The RTC of Makati, as the issuing court`, `The Court of Appeals`, `Either court, at the respondent's choice`],
		e: `If no criminal action has been instituted, the issuing court resolves the motion; but if it fails to resolve it and a case is later filed in another court, the latter resolves it.`,
		b: `Rule 126, Sec. 14`
	},
	{
		r: 127,
		q: `In an estafa case, the complainant reserved the civil action and filed it separately. She now asks the criminal court for a writ of preliminary attachment. Ruling?`,
		a: `Deny. Provisional remedies are available only for the civil action deemed instituted with the criminal action`,
		d: [`Grant, because estafa is a ground for attachment`, `Grant, upon posting of a bond`, `Grant, if the accused is about to abscond`],
		e: `Rule 127, Sec. 1 makes civil provisional remedies available only in connection with the civil action deemed instituted. Once reserved and filed separately, the remedy must be sought in that civil case.`,
		b: `Rule 127, Sec. 1; Rule 111, Sec. 1`
	},
	{
		r: 127,
		q: `Which of the following is a ground for preliminary attachment of the accused's property under Rule 127?`,
		a: `The accused resides outside the Philippines`,
		d: [`The accused is a public official`, `The offense is punishable by more than 6 years`, `The accused has been denied bail`],
		e: `Rule 127, Sec. 2 grounds: the accused is about to abscond; the action is based on money or property embezzled or misapplied in a fiduciary capacity or a willful violation of duty; the accused has concealed or disposed of his property or is about to; or he resides abroad.`,
		b: `Rule 127, Sec. 2`
	},
	{
		r: 127,
		q: `What does a writ of preliminary attachment in a criminal case secure?`,
		a: `The satisfaction of any judgment the offended party may recover from the accused — the civil liability`,
		d: [`The payment of the fine`, `The accused's appearance at trial`, `The costs of the prosecution`],
		e: `Attachment secures "any judgment that may be recovered from the accused" by the offended party; the accused's appearance is secured by bail.`,
		b: `Rule 127, Sec. 2`
	},
	{
		r: 127,
		q: `A corporate treasurer charged with estafa for converting company funds is about to sell his house. The company did not reserve the civil action. May it ask the criminal court to attach the house?`,
		a: `Yes, on the grounds of fiduciary misappropriation and disposal of property, subject to the affidavit and bond requirements of Rule 57`,
		d: [`No, attachment is a purely civil remedy`, `No, only the prosecutor may apply`, `Yes, without need of a bond`],
		e: `The civil action is deemed instituted, and two grounds under Rule 127, Sec. 2 — (b) and (c) — are present. The civil rules on attachment (affidavit, bond) apply.`,
		b: `Rule 127, Secs. 1–2; Rule 57`
	}
];

/* ------------------------------------------------------------------ *
 * Assembly
 * ------------------------------------------------------------------ */

export const quizzes: Quiz[] = [
	{
		id: 'quiz1',
		n: 1,
		from: 110,
		to: 114,
		items: quiz1,
		watchFor: `<strong>Watch for (Rules 110–114): who filed, where, and whether the defect survives the plea.</strong> Chartered city → prosecutor. Private crimes → both parties. Lack of authority and bare labels are waivable (Villa Gomez; Solar). Substantial amendments after plea are barred. Civil liability survives reasonable doubt; BP 22 cannot be reserved. Hot pursuit needs "just committed" and personal knowledge. Discretionary bail needs a hearing.`
	},
	{
		id: 'quiz2',
		n: 2,
		from: 115,
		to: 119,
		items: quiz2,
		watchFor: `<strong>Watch for (Rules 115–119): what survives the plea, and what counts as an acquittal.</strong> Prescription, no offense, no jurisdiction over the offense and double jeopardy survive. Speedy-trial dismissals and granted demurrers are acquittals. Ivler: reckless imprudence is one quasi-offense. Plea bargaining with an absent (notified) offended party needs only the prosecutor. Pre-trial admissions must be signed by the accused and counsel.`
	},
	{
		id: 'quiz3',
		n: 3,
		from: 120,
		to: 124,
		items: quiz3,
		watchFor: `<strong>Watch for (Rules 120–124): the lesser offense, the fresh period, and the right mode.</strong> Variance convicts of the lesser either way. Absent at promulgation → lose remedies unless surrender within 15 days. Only the accused moves for new trial or reconsideration. MTC → RTC → CA is Rule 42; RP/LI goes by notice to the CA. The accused's appeal opens the whole case. 30–30–20 briefs; no dismissal if counsel is de oficio.`
	},
	{
		id: 'quiz4',
		n: 4,
		from: 125,
		to: 127,
		items: quiz4,
		watchFor: `<strong>Watch for (Rules 125–127): the judge's personal examination, the 10-day life, and the order of arrest and search.</strong> Search warrants need searching questions by the judge, one offense and particular description; they die after 10 days. Arrest must precede a search incident to it. A tip alone is never probable cause (Sapla). Checkpoints are visual only. Private searches are not excluded (Marti). Provisional remedies only for the civil action still in the criminal case.`
	}
];

const LETTERS = ['A', 'B', 'C', 'D'];

/** Puts the correct option at position `i % 4`, keeping the distractors in order. */
function arrange(x: QuizItem, i: number) {
	const k = i % 4;
	const options = [...x.d];
	options.splice(k, 0, x.a);
	return { options, correctIndex: k };
}

const quizTitle = (z: Quiz) => `Quiz ${z.n} — Rules ${z.from}–${z.to}`;

export const quizTopics = quizzes.map((z) => ({
	id: z.id,
	name: `Quiz ${z.n}: Rules ${z.from}–${z.to}`,
	eyebrow: 'PRACTICE QUIZ',
	desc: `${z.items.length} situational multiple-choice questions on Rules ${z.from}–${z.to}`
}));

export const quizWatchFor: Record<string, string> = Object.fromEntries(quizzes.map((z) => [z.id, z.watchFor]));

export function quizMcqs(moduleId: string): McqQuestion[] {
	return quizzes.flatMap((z) =>
		z.items.map((x, i) => {
			const { options, correctIndex } = arrange(x, i);
			return {
				id: `${moduleId}:${z.id}:${i + 1}`,
				topicId: z.id,
				topic: `Quiz ${z.n} · Rule ${x.r}`,
				tag: x.tag,
				question: x.q,
				options,
				correctIndex,
				explanation: x.e,
				legalBasis: x.b,
				hint: x.hint
			};
		})
	);
}

/* ------------------------------------------------------------------ *
 * Study-guide rendering
 * ------------------------------------------------------------------ */

const qzId = (z: Quiz, i: number) => `qz${z.n}-${i + 1}`;
const qzAnsId = (z: Quiz, i: number) => `qz${z.n}-a${i + 1}`;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderQuizzes() {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="quizzes">Practice Quizzes — Rules 110–127</h2>`);
	out.push(
		`<p class="sg-intro">Four quizzes of situational multiple-choice questions (${quizzes.map((z) => z.items.length).join(', ')} items), by Rule range. Take each one in the <b>MCQ Practice Engine</b> (pick "Quiz 1" to "Quiz 4" in the topic filter; Exam mode times you and scores by Rule), or on paper here — the answer key is in the <a href="#quiz-answers">next section</a>.</p>`
	);
	out.push(
		`<p class="rv-source">${quizzes.map((z) => `<a href="#quiz-${z.n}">${quizTitle(z)}</a>`).join(' · ')}</p>`
	);
	for (const z of quizzes) {
		out.push(h3(`quiz-${z.n}`, quizTitle(z)));
		out.push(box('orange', 'Before you start', p(z.watchFor)));
		z.items.forEach((x, i) => {
			const { options } = arrange(x, i);
			out.push(
				`<div class="rv-q" id="${qzId(z, i)}"><div class="rv-qhead"><span class="rv-num">Q${z.n}.${i + 1}</span>${ruleLink(`r${x.r}`)}</div><p class="rv-question">${esc(x.q)}</p><ol class="rv-options" type="A">${options.map((o) => `<li>${esc(o)}</li>`).join('')}</ol><p class="rv-jump"><a href="#${qzAnsId(z, i)}">Answer ↓</a></p></div>`
			);
		});
	}
	return out.join('\n');
}

export function renderQuizAnswers() {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="quiz-answers">Practice Quizzes — Answer Key</h2>`);
	out.push(`<p class="sg-intro">Numbers match the quizzes. Each answer gives the correct option, why it is right (and why the tempting option is wrong), and the legal basis.</p>`);
	for (const z of quizzes) {
		out.push(h3(`quiz-answers-${z.n}`, `${quizTitle(z)} — answers`));
		z.items.forEach((x, i) => {
			const { correctIndex } = arrange(x, i);
			out.push(
				`<div class="rv-ans" id="${qzAnsId(z, i)}"><div class="rv-qhead"><span class="rv-num">Q${z.n}.${i + 1}</span>${ruleLink(`r${x.r}`)}</div><p class="rv-echo">${esc(x.q)}</p><p><b>${LETTERS[correctIndex]}. ${esc(x.a)}</b></p><p>${esc(x.e)}</p><p class="rv-keys"><b>Basis:</b> ${esc(x.b)}</p><p class="rv-jump"><a href="#${qzId(z, i)}">↑ Back to question</a></p></div>`
			);
		});
	}
	return out.join('\n');
}
