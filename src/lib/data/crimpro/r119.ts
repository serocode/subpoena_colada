import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 119 — Trial. */
export const r119: RuleChapter = {
	id: 'r119',
	n: 119,
	title: 'Trial',
	short: 'R119 Trial',
	tiu: 'pp. 181–196 (with RA 8493, A.M. No. 12-11-2-SC, RA 6981 and immunity statutes; 2017 Guidelines at pp. 249–255)',
	plain: `Rule 119 runs the trial: when it starts (within 30 days of the pre-trial order), how long it can last (180 days, minus excused delays), when it may be postponed, and in what order the parties present evidence. It also covers getting testimony early from witnesses who may not be available, discharging a co-accused to testify for the State, fixing a wrongly charged offense, excluding the public, and two key exits: the demurrer to evidence (the accused says the prosecution's evidence is not enough) and reopening the case before judgment becomes final.`,
	purpose: `To secure a speedy, orderly trial consistent with the accused's rights, with tools to preserve testimony, obtain the testimony of a participant, and end weak prosecutions early.`,
	stage: `After pre-trial (${ruleLink('r118')}) and before judgment (${ruleLink('r120')}). A demurrer comes after the prosecution rests; reopening may happen any time before the judgment of conviction becomes final.`,
	questions: [
		'When must trial begin and end, and which delays are excluded?',
		'When may trial be postponed, and what grounds are prohibited?',
		'What is the order of trial, and when may it be reversed?',
		'How is the testimony of an unavailable defense or prosecution witness preserved?',
		'When may an accused be discharged to be a state witness, and what is the effect?',
		'What happens when the wrong offense was charged?',
		'How does a demurrer to evidence work, with and without leave?',
		'When may the proceedings be reopened?'
	],
	relations: `Rule 119 implements the right to speedy trial (${ruleLink('r115')}) and builds on the pre-trial order (${ruleLink('r118')}). Sec. 19 is the trial-stage counterpart of substitution under ${ruleLink('r110', 'sections', 'Rule 110, Sec. 14')}. A granted demurrer or a state-witness discharge operates as an acquittal for double jeopardy (${ruleLink('r117', 'sections', 'Rule 117, Sec. 7')}). The case is then decided under ${ruleLink('r120')}.`,
	principles: [
		'<b>Continuous trial</b>: once begun, trial proceeds day to day as far as practicable; the whole trial may not exceed 180 days from its first day, excluding allowed delays (Sec. 2).',
		'<b>Postponements are the exception</b>; congestion, lack of preparation, and failure to obtain available prosecution witnesses are never grounds (Sec. 4).',
		'<b>The prosecution\'s choice of state witness deserves deference</b>; courts deny discharge only in clear cases of non-compliance with Sec. 17 (People v. Sandiganbayan, 2013; Ampatuan v. De Lima, 2013).',
		'<b>A granted demurrer is an acquittal</b> — not appealable; only certiorari for grave abuse (Dayap v. Sendiong).',
		'<b>A demurrer without leave is a gamble</b>: if denied, the accused loses the right to present evidence.'
	],
	sections: [
		{
			n: '1',
			title: 'Time to prepare for trial',
			text: `"After a plea of not guilty is entered, the accused shall have at least fifteen (15) days to prepare for trial. The trial shall commence within thirty (30) days from receipt of the pre-trial order."`,
			plain: `At least 15 days to prepare after pleading not guilty; trial starts within 30 days of the pre-trial order.`,
			when: `15 days minimum preparation; 30 days from receipt of the pre-trial order.`,
			effect: `Failure to start on time (minus exclusions) supports a motion to dismiss for denial of speedy trial (Sec. 9).`,
			hypo: `Pre-trial order received on June 1; first trial date set for August 15 without any excluded delay. The accused may move to dismiss before trial.`
		},
		{
			n: '2',
			title: 'Continuous trial until terminated; postponements',
			text: `"Trial once commenced shall continue from day to day as far as practicable until terminated. It may be postponed for a reasonable period of time for good cause." The court, after consulting the prosecutor and defense counsel, sets the case for continuous trial on a weekly or short-term calendar. "In no case shall the entire trial period exceed one hundred eighty (180) days from the first day of trial, except as otherwise authorized by the Supreme Court." Shorter periods in special laws or circulars apply.`,
			plain: `Trial runs continuously; 180 days maximum from the first day, unless the SC allows more.`,
			when: `180 days from the first day of trial (A.M. No. 12-11-2-SC: 60 days if by judicial affidavits, for detained accused).`,
			exceptions: `Excluded delays (Sec. 3); shorter periods in special laws (e.g., RA 9165, Sec. 90: 60 days).`,
			effect: `Unjustified extension may violate speedy trial.`,
			hypo: `A trial that began on January 10 should end by early July, unless delays are excluded.`,
			update: `2017 Revised Guidelines: trial Monday to Thursday; motions, arraignment, pre-trial and promulgation on Friday mornings; postponements prohibited except for acts of God, force majeure, or physical inability of the witness (with a postponement fee); "one-day examination of witness rule"; oral offer of evidence on the day of the last witness.`
		},
		{
			n: '3',
			title: 'Exclusions',
			text: `Excluded in computing the time within which trial must commence: (a) delay from other proceedings concerning the accused — mental or physical examination; other criminal charges; extraordinary remedies against interlocutory orders; pre-trial proceedings (not exceeding 30 days); inhibition, change of venue or transfer; a finding of a prejudicial question; and a proceeding under advisement (not exceeding 30 days); (b) absence or unavailability of an essential witness; (c) mental incompetence or physical inability of the accused; (d) where the information is dismissed on the prosecution's motion and refiled for the same offense, the period from dismissal to when the time limit would have run on the new charge; (e) a reasonable period when the accused is joined with a co-accused over whom the court has no jurisdiction or for whom time has not run, and no separate trial was granted; and (f) a continuance granted on findings that the ends of justice outweigh the interest in a speedy trial.`,
			plain: `Delays caused by legitimate proceedings, missing essential witnesses, the accused's incapacity, refiling, co-accused, or justified continuances do not count.`,
			reqs: `Essential witness "absent" when whereabouts unknown or cannot be determined by due diligence; "unavailable" when whereabouts known but presence cannot be obtained by due diligence.`,
			effect: `The prosecution bears the burden of going forward with evidence of exclusions (Sec. 9).`,
			hypo: `Trial is delayed 45 days while the CA resolves the accused's certiorari petition against an interlocutory order. Those 45 days are excluded.`,
			trap: `Pre-trial delay and "under advisement" periods are excluded only up to 30 days each.`
		},
		{
			n: '4',
			title: 'Factors for granting continuance',
			text: `The court considers, among others: (a) whether denial would likely make continuation impossible or result in a miscarriage of justice; and (b) whether the case is so novel, unusual and complex (number of accused, nature of the prosecution) that adequate preparation within the time limits is unreasonable. "No continuance … shall be granted because of congestion of the court's calendar or lack of diligent preparation or failure to obtain available witnesses on the part of the prosecutor."`,
			plain: `Postpone only to avoid injustice or for genuinely complex cases — never for a busy docket, an unprepared lawyer, or a prosecutor who did not get available witnesses.`,
			exceptions: `Prohibited grounds: court congestion; lack of diligent preparation; prosecutor's failure to obtain available witnesses.`,
			effect: `A continuance on prohibited grounds is not excluded from the time limits.`,
			hypo: `The prosecutor asks for postponement because he did not subpoena a witness who lives nearby. Prohibited ground.`
		},
		{
			n: '5',
			title: 'Time limit following an order for new trial',
			text: `If the accused is to be tried again after an order for new trial, trial shall commence within thirty days from notice of the order; if impractical due to unavailability of witnesses or other factors, the court may extend it, but not beyond 180 days from notice.`,
			plain: `Retrial within 30 days of the new-trial order; at most 180 days.`,
			when: `30 days (extendible to 180) from notice of the order.`,
			hypo: `A new trial is granted on newly discovered evidence; the retrial must start within 30 days of notice unless extended for good reason.`
		},
		{
			n: '6',
			title: 'Extended time limit',
			text: `For the first twelve months following September 15, 1998, the arraignment-to-trial limit was 180 days; for the second twelve months, 120 days; for the third, 80 days.`,
			plain: `Transitional limits after the Speedy Trial Act: 180, then 120, then 80 days.`,
			trap: `Tiu presents "80 days from arraignment to trial" as a working limit; strictly, Sec. 6 was a three-year transition. The standing limits are Rule 116, Sec. 1(g) (arraignment within 30 days) and Sec. 1 of this Rule (trial within 30 days of the pre-trial order).`,
		},
		{
			n: '7',
			title: 'Public attorney\'s duties where accused is imprisoned',
			text: `If the public attorney knows that the accused is detained (cannot post bail, non-bailable, or serving sentence), he shall promptly seek the prisoner's presence for trial or notify the custodian to advise the prisoner of his right to demand trial; the custodian promptly advises the prisoner and relays any demand; the public attorney then seeks the prisoner's presence; the custodian makes him available upon a properly supported request.`,
			plain: `PAO lawyers must actively get detained clients to trial.`,
			hypo: `A PAO lawyer learns his client is serving sentence in another case in Bilibid; he must notify the custodian so the client can demand trial.`
		},
		{
			n: '8',
			title: 'Sanctions',
			text: `Private counsel, public attorney or prosecutor who (a) knowingly allows the case to be set for trial without disclosing that a necessary witness would be unavailable; (b) files a motion solely for delay knowing it frivolous; (c) makes a false material statement to obtain a continuance; or (d) willfully fails to proceed to trial without justification may be punished by: a fine not exceeding ₱20,000 (private counsel); a fine not exceeding ₱5,000 (counsel de oficio, public attorney, prosecutor); and denial of the right to practice before the court for up to 30 days — without prejudice to criminal or other sanctions.`,
			plain: `Lawyers who cause delay by deception or frivolous motions can be fined or barred from that court for up to 30 days.`,
			hypo: `Defense counsel files a motion to inhibit on a fabricated ground solely to delay. The court may fine him up to ₱20,000 and bar him for up to 30 days.`
		},
		{
			n: '9',
			title: 'Remedy where accused is not brought to trial within the time limit',
			text: `If the accused is not brought to trial within the time limit (Rule 116, Sec. 1[g] and Sec. 1 of this Rule as extended), the information may be dismissed on motion of the accused for denial of speedy trial. The accused has the burden of proving the motion; the prosecution has the burden of going forward with evidence of excluded time. "The dismissal shall be subject to the rules on double jeopardy." Failure of the accused to move for dismissal prior to trial is a waiver of the right to dismiss under this section.`,
			plain: `Move to dismiss before trial; the dismissal counts as an acquittal.`,
			when: `Before trial.`,
			effect: `Dismissal bars reprosecution (equivalent to acquittal) even though on the accused's motion.`,
			hypo: `The accused moves to dismiss on day 100 after receiving the pre-trial order, no trial having started and no excluded delays shown. Dismissal is proper and bars refiling.`,
			trap: `This statutory remedy is waived if not raised before trial; but a constitutional speedy-trial claim (Sec. 10) can still be made for oppressive delay during trial.`
		},
		{
			n: '10',
			title: 'Law on speedy trial not a bar to provision on speedy trial in the Constitution',
			text: `No provision of law on speedy trial and no implementing rule shall be interpreted as a bar to any charge of denial of the right to speedy trial guaranteed by Art. III, Sec. 14(2) of the Constitution.`,
			plain: `The Speedy Trial Act sets floors, not ceilings; the constitutional right stands on its own.`,
			hypo: `Delays technically excluded under Sec. 3 may still, taken together and if vexatious, violate the constitutional right.`
		},
		{
			n: '11',
			title: 'Order of trial',
			text: `(a) The prosecution presents evidence to prove the charge and, in the proper case, the civil liability. (b) The accused may present evidence to prove his defense and damages, if any, from a provisional remedy. (c) The prosecution and defense may, in that order, present rebuttal and sur-rebuttal evidence, unless the court permits additional evidence on the main issue. (d) Upon admission of evidence, the case is deemed submitted for decision unless the court directs oral argument or memoranda. (e) "When the accused admits the act or omission charged in the complaint or information but interposes a lawful defense, the order of trial may be modified."`,
			plain: `Prosecution → defense → rebuttal → sur-rebuttal → submission. Reverse trial if the accused admits the act but claims a defense.`,
			effect: `Memoranda, when required, do not suspend the period to promulgate (2017 Guidelines: discretionary, max 25 pages).`,
			hypo: `The accused admits shooting the victim but claims defense of a relative. The court may let the defense present first.`
		},
		{
			n: '12',
			title: 'Application for examination of witness for accused before trial',
			text: `When the accused has been held to answer, he may, on motion with notice, have witnesses conditionally examined. The motion states (a) the name and residence of the witness; (b) the substance of his testimony; and (c) that the witness is sick or infirm such that he will not be able to attend trial, or resides more than 100 km from the place of trial and has no means to attend, or similar circumstances make him unavailable. It is supported by the accused's affidavit and other evidence the court requires.`,
			plain: `The defense can take a witness's testimony early if he may be unable to attend trial.`,
			reqs: `Motion with notice; contents (a)–(c); affidavit of the accused.`,
			hypo: `A defense witness is about to undergo surgery abroad. The accused moves for conditional examination, stating his name, residence and expected testimony.`
		},
		{
			n: '13',
			title: 'Examination of defense witness; how made',
			text: `If satisfied, the court orders the examination at a specified date, time and place, serving the prosecutor a copy at least three days before. It is taken before a judge, or if not practicable, a member of the Bar in good standing designated by the judge, or if ordered by a superior court, before an inferior court designated. It proceeds even if the prosecutor, duly notified, is absent. A written record is taken.`,
			plain: `Before any judge or a designated lawyer; prosecutor notified 3 days ahead.`,
			when: `Order served on the prosecutor at least 3 days before.`,
			hypo: `The examination is taken before a designated lawyer in the witness's province; the prosecutor, notified, does not appear. It proceeds.`
		},
		{
			n: '14',
			title: 'Bail to secure appearance of material witness',
			text: `When the court is satisfied, upon proof or oath, that a material witness will not testify when required, it may, on motion of either party, order the witness to post bail; upon refusal, the court shall commit him to prison until he complies or is legally discharged after testifying.`,
			plain: `A material witness likely to skip may be required to post bail — or be jailed until he testifies.`,
			hypo: `The key eyewitness has told neighbors he will leave town to avoid testifying. On the prosecution's motion, the court orders him to post bail; he refuses and is committed until he testifies.`,
			trap: `Bail here does not require prior custody.`
		},
		{
			n: '15',
			title: 'Examination of witness for the prosecution',
			text: `When a prosecution witness is too sick or infirm to appear at trial, or has to leave the Philippines with no definite date of returning, he may forthwith be conditionally examined before the court where the case is pending, in the presence of the accused (or in his absence after reasonable notice), in the same manner as at trial. The accused's failure or refusal to attend after notice is a waiver. The statement may be admitted for or against the accused.`,
			plain: `Prosecution witnesses about to become unavailable testify early — but only before the trial court, with the accused notified.`,
			cases: `${caseLink('manguerra', 'Manguerra v. Risos (2008)')} — must be before the court where the case is pending; civil depositions (Rule 23) do not apply.`,
			hypo: `A prosecution witness is emigrating next month. She is examined before the trial court with the accused present and cross-examining.`,
			trap: `Defense witnesses may be examined before any judge or a designated lawyer (Sec. 13); prosecution witnesses only before the trial court (Sec. 15).`
		},
		{
			n: '16',
			title: 'Trial of several accused',
			text: `When two or more accused are jointly charged, they shall be tried jointly unless the court, in its discretion and on motion of the prosecutor or any accused, orders separate trial for one or more.`,
			plain: `Joint trial is the rule; separate trial is discretionary on motion.`,
			hypo: `One of three accused has a defense that conflicts with the others\'; he may move for separate trial.`
		},
		{
			n: '17',
			title: 'Discharge of accused to be state witness',
			text: `When two or more persons are jointly charged, upon motion of the prosecution before resting its case, the court may direct one or more accused to be discharged with their consent to be state witnesses when, after requiring the prosecution to present evidence and each proposed state witness's sworn statement at a hearing, the court is satisfied that: (a) there is absolute necessity for the testimony; (b) there is no other direct evidence available except his testimony; (c) his testimony can be substantially corroborated in its material points; (d) he does not appear to be the most guilty; and (e) he has not at any time been convicted of an offense involving moral turpitude. Evidence adduced in support of the discharge automatically forms part of the trial. If the motion is denied, his sworn statement is inadmissible.`,
			plain: `To turn a co-accused into a State witness: joint charge, prosecution motion before it rests, his consent, a hearing, and five conditions.`,
			reqs: `Procedural: two or more jointly charged; prosecution\'s motion before resting; consent of the accused; hearing with evidence and sworn statement. Substantive: the five conditions (a)–(e).`,
			who: `Prosecution (moves); court (decides); accused to be discharged (consents).`,
			when: `Before the prosecution rests its case.`,
			effect: `Granted: acquittal (Sec. 18). Denied: he is tried with the others; his sworn statement is inadmissible.`,
			cases: `${caseLink('salvanera', 'Salvanera v. People (2007)')}; ${caseLink('anabe', 'People v. Anabe (2010)')}; <i>Jimenez v. People</i> (2014 — "not the most guilty," not "least guilty"); <i>People v. Sandiganbayan</i> and ${caseLink('ampatuan-de-lima', 'Ampatuan v. De Lima (2013)')} (deference to the prosecution).`,
			hypo: `Three accused in a kidnapping; the driver, who never touched the victim and has no prior conviction, is the only one who can describe the planning meeting. The prosecution moves before resting for his discharge. If his account is corroborated by phone records and the ransom trail, the court may discharge him.`,
			trap: `"Not the most guilty" — not "least guilty." And the corroboration requirement is relaxed when the state witness is an eyewitness whose testimony is direct evidence (Anabe).`
		},
		{
			n: '18',
			title: 'Discharge of accused operates as acquittal',
			text: `"The order indicated in the preceding section shall amount to an acquittal of the discharged accused and shall be a bar to future prosecution for the same offense, unless the accused fails or refuses to testify against his co-accused in accordance with his sworn statement constituting the basis for the discharge."`,
			plain: `Discharge = acquittal, unless he backs out of testifying.`,
			effect: `Double jeopardy bars reprosecution — subject to his testifying as promised (Bogo-Medellin Milling v. Son, in Tiu). Tiu advises that he be arraigned first so jeopardy attaches.`,
			hypo: `The discharged accused testifies but later recants on cross. If he failed to testify "in accordance with his sworn statement," the State may prosecute him.`
		},
		{
			n: '19',
			title: 'When mistake has been made in charging the proper offense',
			text: `When it becomes manifest at any time before judgment that a mistake has been made in charging the proper offense and the accused cannot be convicted of the offense charged or any offense necessarily included in it, the accused shall not be discharged if there appears good cause to detain him; the court shall commit him to answer for the proper offense and dismiss the original case upon the filing of the proper information.`,
			plain: `Wrong offense charged? Hold the accused (if there is cause), require the right information, then dismiss the old one.`,
			reqs: `(1) Mistake in charging the proper offense; (2) manifest before judgment; (3) accused cannot be convicted of the offense charged or an included offense.`,
			effect: `Substitution under Rule 110, Sec. 14; no double jeopardy because the offenses differ.`,
			hypo: `During trial for theft, evidence shows the accused, an employee entrusted with collections, misappropriated them (estafa). The court requires an estafa information and dismisses the theft case on its filing.`
		},
		{
			n: '20',
			title: 'Appointment of acting prosecutor',
			text: `When a prosecutor, assistant or deputy is disqualified under Rule 137, Sec. 1 or for other reasons, the judge or the prosecutor shall communicate with the Secretary of Justice to appoint an acting prosecutor.`,
			plain: `If the prosecutor is disqualified, the Secretary of Justice appoints a replacement.`,
			hypo: `The assigned prosecutor is the complainant's brother. The court communicates with the Secretary of Justice for an acting prosecutor.`
		},
		{
			n: '21',
			title: 'Exclusion of the public',
			text: `The judge may, motu proprio, exclude the public if the evidence is offensive to decency or public morals; he may also, on motion of the accused, exclude the public, except court personnel and the parties' counsel.`,
			plain: `Closed hearings for indecent evidence (court's own motion) or at the accused's request.`,
			hypo: `In a rape trial involving explicit testimony, the judge excludes the public on his own initiative.`,
			trap: `Exclusion "on motion" belongs to the accused, not the prosecution or the offended party (though special laws, e.g., on child witnesses, may provide more).`
		},
		{
			n: '22',
			title: 'Consolidation of trials of related offenses',
			text: `"Charges for offenses founded on the same facts or forming part of a series of offenses of similar character may be tried jointly at the discretion of the court."`,
			plain: `Related cases may be tried together.`,
			effect: `2017 Guidelines, III.5: newly filed related cases with a prosecution motion are raffled to one court; later cases against other accused over the same incident go directly to the court with the earlier case.`,
			hypo: `Ten estafa informations against the same accused involving similar sales schemes may be tried jointly.`
		},
		{
			n: '23',
			title: 'Demurrer to evidence',
			text: `After the prosecution rests, the court may dismiss the action for insufficiency of evidence (1) on its own initiative after giving the prosecution the opportunity to be heard, or (2) upon demurrer filed by the accused with or without leave of court. If a demurrer filed with leave is denied, the accused may present evidence. "When the demurrer to evidence is filed without leave of court, the accused waives the right to present evidence and submits the case for judgment on the basis of the evidence for the prosecution." The motion for leave must state its grounds and be filed within five days (non-extendible) after the prosecution rests; the prosecution may oppose within five days. If leave is granted, the demurrer is filed within ten days from notice; the prosecution may oppose within ten days. "The order denying the motion for leave of court to file demurrer to evidence or the demurrer itself shall not be reviewable by appeal or by certiorari before judgment."`,
			plain: `After the prosecution rests, the accused can say "the evidence is not enough." With leave and denied → he still presents evidence. Without leave and denied → judgment on the prosecution's evidence alone. Granted → acquittal.`,
			reqs: `Prosecution has rested; demurrer grounded on insufficiency of evidence, referring to the evidence on record (Cabador); leave optional but consequential.`,
			who: `Accused; court (motu proprio, after hearing the prosecution); prosecution (opposition).`,
			when: `Leave: 5 days after the prosecution rests; opposition 5 days. Demurrer: 10 days from notice of leave; opposition 10 days. 2017 Guidelines: oral motion for leave, resolved orally; demurrer within 10 calendar days; comment within 10; resolution within 30 days.`,
			effect: `Grant = acquittal; not appealable (only Rule 65 for grave abuse — Dayap v. Sendiong). The court may not award civil damages in the same order without letting the accused present evidence on the civil aspect (Salazar v. People, 2003), unless it finds the act did not exist. Denial = not reviewable by appeal or certiorari before judgment.`,
			cases: `${caseLink('cabador', 'Cabador v. People (2009)')}; ${caseLink('salazar', 'Salazar v. People (2003)')}; <i>Dayap v. Sendiong</i> (2009); <i>Singian v. Sandiganbayan</i> (2013 — sufficiency means proof of the crime and the accused\'s participation).`,
			hypo: `After the prosecution rests in a qualified theft case without proving that the accused had access to the cash, the accused files a demurrer with leave. If denied, he may still present evidence; if he had filed without leave, the court would decide on the prosecution's evidence alone.`,
			trap: `Not every "motion to dismiss" after trial begins is a demurrer: the test is the allegations, the stage, and the movant\'s primary objective (Cabador — a speedy-trial motion is not a demurrer, so no waiver of the right to present evidence).`,
			update: `2017 Revised Guidelines, III.13(d): after the prosecution rests, the court asks the accused whether he will move for leave; oral motion resolved orally; if leave is denied, the accused presents evidence on the scheduled dates; if he insists on filing the demurrer anyway, the scheduled dates are cancelled; demurrer within 10 days, comment within 10 days, resolution within 30 days; if the demurrer (with leave) is denied, the accused presents and terminates his evidence promptly.`
		},
		{
			n: '24',
			title: 'Reopening',
			text: `"At any time before finality of the judgment of conviction, the judge may, motu proprio or upon motion, with hearing in either case, reopen the proceedings to avoid a miscarriage of justice. The proceedings shall be terminated within thirty (30) days from the order granting it."`,
			plain: `Before the conviction becomes final, the judge may reopen the case — on his own or on motion, after a hearing — to prevent injustice; finish within 30 days.`,
			reqs: `(Cabarles v. Maceda, in Tiu): (1) before finality of the judgment of conviction; (2) motu proprio or on motion; (3) after hearing; (4) to avoid a miscarriage of justice; (5) terminated within 30 days from the order.`,
			when: `Any time before finality; complete within 30 days.`,
			effect: `Reopening without hearing denies due process.`,
			hypo: `After submission for decision, the defense discovers a CCTV recording showing the accused elsewhere. The court may reopen, after hearing, to receive it within 30 days.`,
			trap: `Reopening (Sec. 24) differs from new trial (Rule 121): reopening may happen even before judgment; new trial presupposes a judgment and specific grounds.`
		}
	],
	reqs: [
		{
			name: 'Discharge as state witness (Sec. 17)',
			source: 'Rule 119, Secs. 17–18',
			what: 'Five substantive conditions (absolute necessity; no other direct evidence; substantial corroboration; not the most guilty; no conviction involving moral turpitude) plus a hearing with evidence and sworn statement.',
			who: 'Prosecution moves; court decides; accused consents.',
			when: 'Before the prosecution rests.',
			form: 'Motion; sworn statement of the proposed state witness.',
			missing: 'Discharge should be denied; if denied, the sworn statement is inadmissible. An improvident discharge (granted despite a missing condition) is not void and still operates as acquittal if he testifies; the error does not affect the admissibility of his testimony.',
			defect: 'Depends on the defect',
			defectNote: 'Courts defer to the prosecution and deny only in clear cases (People v. Sandiganbayan; Ampatuan). The discharged accused\'s immunity is lost if he fails or refuses to testify as promised.'
		},
		{
			name: 'Demurrer to evidence (Sec. 23)',
			source: 'Rule 119, Sec. 23; 2017 Revised Guidelines, III.13(d)',
			what: 'Motion challenging the sufficiency of the prosecution\'s evidence.',
			who: 'Accused (with or without leave) or the court motu proprio.',
			when: 'After the prosecution rests; leave within 5 days; demurrer within 10 days of leave.',
			form: 'Leave motion states its grounds; demurrer refers to the evidence (Cabador).',
			missing: 'Without leave: if denied, the accused waives the right to present evidence. Late leave motion: may be denied.',
			defect: 'Waivable',
			defectNote: 'The right to present evidence is waived by filing without leave; the periods are non-extendible.'
		},
		{
			name: 'Conditional examination (Secs. 12–15)',
			source: 'Rule 119, Secs. 12–15; Manguerra v. Risos',
			what: 'Pre-trial examination of a witness likely unavailable for trial.',
			who: 'Defense (Sec. 12) or prosecution (Sec. 15).',
			when: 'Before trial.',
			where: 'Defense witness: before any judge or a designated lawyer. Prosecution witness: only before the court where the case is pending.',
			missing: 'Testimony taken in the wrong forum or without notice is inadmissible.',
			defect: 'Not waivable',
			defectNote: 'The forum requirement for prosecution witnesses protects confrontation; strictly construed.'
		},
		{
			name: 'Reopening (Sec. 24)',
			source: 'Rule 119, Sec. 24; Cabarles v. Maceda',
			what: 'Order reopening proceedings to receive further evidence.',
			who: 'Judge, motu proprio or on motion.',
			when: 'Before finality of the judgment of conviction; finished within 30 days.',
			missing: 'Without hearing, the order is void for denial of due process.',
			defect: 'Not waivable',
			defectNote: 'The hearing requirement is express ("with hearing in either case").'
		}
	],
	enums: [
		{
			id: 'E119.1',
			name: 'Delays excluded in computing the time for trial',
			source: 'Rule 119, Sec. 3',
			kind: 'rule',
			memorize: true,
			lead: 'Excluded in computing the time are',
			items: [
				{ t: 'Delay from other proceedings concerning the accused', d: 'Mental/physical examination; other charges; extraordinary remedies; pre-trial (≤30 days); inhibition, venue change or transfer; prejudicial question; matters under advisement (≤30 days).', s: 'other proceedings concerning the accused' },
				{ t: 'Absence or unavailability of an essential witness', d: 'Absent: whereabouts unknown; unavailable: known but presence cannot be obtained by due diligence.', s: 'essential witness absent or unavailable' },
				{ t: 'Mental incompetence or physical inability of the accused', d: 'The time during which the accused cannot stand trial is excluded (Sec. 3[c]).', s: 'incompetence or inability of the accused' },
				{ t: 'Dismissal on the prosecution\'s motion and refiling for the same offense', d: 'From dismissal to when the time limit would run on the new charge.', s: 'dismissal and refiling' },
				{ t: 'Joinder with a co-accused over whom there is no jurisdiction or for whom time has not run', d: 'Reasonable period; no separate trial granted.', s: 'co-accused not yet before the court' },
				{ t: 'Continuance granted on findings that the ends of justice outweigh speedy trial', d: 'Findings must be in the order.', s: 'justified continuance' }
			],
			question: 'What periods of delay are excluded in computing the time within which trial must commence?'
		},
		{
			id: 'E119.2',
			name: 'Factors for continuance — and prohibited grounds',
			source: 'Rule 119, Sec. 4',
			kind: 'rule',
			lead: 'In granting a continuance, the court considers',
			items: [
				{ t: 'Whether denial would make continuation impossible or result in a miscarriage of justice', d: 'If going on without the continuance would make the trial impossible or unjust, the continuance may be granted.', s: 'impossibility or miscarriage of justice' },
				{ t: 'Whether the case is so novel, unusual and complex that adequate preparation within the time limits is unreasonable', d: 'Number of accused or nature of the prosecution.', s: 'novel, unusual, complex' }
			],
			exceptions: 'Never a ground: court congestion; lack of diligent preparation; the prosecutor\'s failure to obtain available witnesses. Under the 2017 Guidelines, postponements are allowed only for acts of God, force majeure or physical inability of the witness.',
			question: 'What factors may justify a continuance, and what grounds are prohibited?'
		},
		{
			id: 'E119.3',
			name: 'Order of trial',
			source: 'Rule 119, Sec. 11',
			kind: 'rule',
			ordered: true,
			memorize: true,
			lead: 'The trial proceeds in this order',
			items: [
				{ t: 'Prosecution evidence', d: 'On the charge and, in the proper case, the civil liability.', s: 'prosecution' },
				{ t: 'Defense evidence', d: 'On the defense and damages from any provisional remedy.', s: 'defense' },
				{ t: 'Rebuttal and sur-rebuttal', d: 'In that order, unless the court allows additional evidence on the main issue.', s: 'rebuttal, sur-rebuttal' },
				{ t: 'Submission for decision', d: 'Upon admission of evidence, unless oral argument or memoranda are required.', s: 'submission' }
			],
			exceptions: 'Reverse trial when the accused admits the act but interposes a lawful defense (Sec. 11[e]).',
			question: 'What is the order of trial? When may it be modified?'
		},
		{
			id: 'E119.4',
			name: 'Requisites for discharge of an accused as state witness',
			source: 'Rule 119, Sec. 17',
			kind: 'rule',
			memorize: true,
			lead: 'The court may discharge an accused to be a state witness when it is satisfied that',
			items: [
				{ t: 'There is absolute necessity for his testimony', d: 'His testimony is the only way to prove a fact essential to the case, such as a conspiracy known only to the participants.', s: 'absolute necessity' },
				{ t: 'There is no other direct evidence available except his testimony', d: 'Direct evidence requires no inference.', s: 'no other direct evidence' },
				{ t: 'His testimony can be substantially corroborated in its material points', d: 'Not every point; corroboration may be circumstantial (Salvanera); relaxed if he is an eyewitness (Anabe).', s: 'substantially corroborated' },
				{ t: 'He does not appear to be the most guilty', d: 'Not "least guilty" (Jimenez v. People).', s: 'not the most guilty' },
				{ t: 'He has not at any time been convicted of an offense involving moral turpitude', d: 'Only a conviction for an offense involving moral turpitude disqualifies him.', s: 'no conviction involving moral turpitude' }
			],
			exceptions: 'Procedural requisites: two or more jointly charged; prosecution\'s motion before resting; consent of the accused; hearing with evidence and sworn statement.',
			memory: '<b>N-O-C-M-M</b>: Necessity · Only direct evidence · Corroborated · not Most guilty · no Moral turpitude conviction.',
			question: 'What are the requisites for the discharge of an accused to become a state witness?'
		},
		{
			id: 'E119.5',
			name: 'Grounds for conditional examination of a defense witness',
			source: 'Rule 119, Sec. 12',
			kind: 'rule',
			lead: 'A defense witness may be conditionally examined if',
			items: [
				{ t: 'He is sick or infirm', d: 'Reasonable ground to believe he cannot attend trial.', s: 'sick or infirm' },
				{ t: 'He resides more than 100 km from the place of trial and has no means to attend', d: 'Distance and lack of means must concur.', s: 'more than 100 km, no means' },
				{ t: 'Other similar circumstances make him unavailable', d: 'A catch-all for comparable unavailability; the motion must be supported by the accused\'s affidavit and other evidence the court requires.', s: 'similar unavailability' }
			],
			exceptions: 'For a prosecution witness (Sec. 15): too sick or infirm, or leaving the Philippines with no definite date of return.',
			question: 'When may a defense witness be conditionally examined? A prosecution witness?'
		},
		{
			id: 'E119.6',
			name: 'Requisites for admission of a participant as state witness under the Witness Protection Act',
			source: 'RA 6981, Sec. 10 (in Tiu, p. 191)',
			kind: 'law',
			lead: 'A participant may be admitted as state witness under RA 6981 when',
			items: [
				{ t: 'The offense is a grave felony under the RPC or its equivalent under special laws', d: 'Unlike Rule 119, Sec. 17, the Act limits admission to grave felonies (those with afflictive penalties) or their special-law equivalents.', s: 'grave felony' },
				{ t: 'There is absolute necessity for his testimony', d: 'As under Rule 119: his testimony is indispensable.', s: 'absolute necessity' },
				{ t: 'There is no other direct evidence available', d: 'As under Rule 119: no other direct evidence for the proper prosecution of the offense.', s: 'no other direct evidence' },
				{ t: 'His testimony can be substantially corroborated on material points', d: 'As under Rule 119: not every point, only the material ones.', s: 'corroborated' },
				{ t: 'He does not appear to be the most guilty', d: 'As under Rule 119. The difference is the decision-maker: under RA 6981 the DOJ admits him to the Program; under Rule 119 the court discharges him.', s: 'not the most guilty' },
				{ t: 'He has not been convicted of a crime involving moral turpitude', d: 'As under Rule 119.', s: 'no moral turpitude conviction' }
			],
			exceptions: 'Admission is by the DOJ; the prosecutor must exclude him from the information or move for his discharge (Sec. 12).',
			question: 'What are the requisites for admission of a participant in a crime as state witness under the Witness Protection Program?'
		},
		{
			id: 'E119.7',
			name: 'Requisites of reopening',
			source: 'Rule 119, Sec. 24; Cabarles v. Maceda (in Tiu, p. 196)',
			kind: 'case',
			lead: 'Proceedings may be reopened when',
			items: [
				{ t: 'Before finality of the judgment of conviction', d: 'Reopening is possible only while the judgment is not yet final.', s: 'before finality' },
				{ t: 'By the judge, motu proprio or on motion', d: 'The court on its own or a party may initiate it.', s: 'motu proprio or on motion' },
				{ t: 'After a hearing', d: 'In either case.', s: 'after hearing' },
				{ t: 'To avoid a miscarriage of justice', d: 'The purpose and the test; the order should show why reopening is needed.', s: 'to avoid miscarriage of justice' },
				{ t: 'Terminated within 30 days from the order', d: 'The reopened proceedings must end within 30 days from the order granting reopening.', s: 'finished within 30 days' }
			],
			question: 'What are the requisites for reopening the proceedings?'
		},
		{
			id: 'E119.8',
			name: 'Demurrer to evidence — steps and periods',
			source: 'Rule 119, Sec. 23; 2017 Revised Guidelines, III.13(d)',
			kind: 'rule',
			ordered: true,
			lead: 'The demurrer proceeds as follows',
			items: [
				{ t: 'Prosecution rests', d: 'After the ruling on its formal offer (Cabador).', s: 'prosecution rests' },
				{ t: 'Motion for leave, stating grounds, within 5 days (non-extendible)', d: '2017 Guidelines: oral motion, resolved orally.', s: 'leave — 5 days' },
				{ t: 'Prosecution opposes within 5 days', d: 'Non-extendible; counted from receipt of the motion for leave.', s: 'opposition — 5 days' },
				{ t: 'If leave is granted, demurrer within 10 days from notice', d: 'Non-extendible.', s: 'demurrer — 10 days' },
				{ t: 'Prosecution opposes (comments) within 10 days', d: 'Non-extendible; counted from receipt of the demurrer.', s: 'opposition — 10 days' },
				{ t: 'Court resolves (2017 Guidelines: within 30 days)', d: 'Grant = acquittal; denial not reviewable before judgment.', s: 'resolution — 30 days' }
			],
			exceptions: 'Without leave: if denied, the accused waives the right to present evidence.',
			question: 'Outline the procedure and periods for a demurrer to evidence.'
		},
		{
			id: 'E119.9',
			name: 'Immunity statutes',
			source: 'Const., Art. XIII, Sec. 18(8); RA 6770, Sec. 17; EO 14-A, Sec. 5; PD 749; RA 6981 (in Tiu, pp. 188–192)',
			kind: 'teaching',
			lead: 'Immunity from prosecution may be granted under',
			items: [
				{ t: 'The Constitution — Commission on Human Rights', d: 'For testimony or evidence necessary in its investigations.', s: 'CHR' },
				{ t: 'The Ombudsman Act (RA 6770, Sec. 17)', d: 'Witnesses compelled after invoking the privilege; and discretionary grants.', s: 'Ombudsman' },
				{ t: 'EO 14-A — PCGG', d: 'Ill-gotten wealth investigations.', s: 'PCGG' },
				{ t: 'PD 749 — givers of bribes in graft cases', d: 'Five conditions, including corroboration and no moral-turpitude conviction.', s: 'bribe-givers' },
				{ t: 'RA 6981 — Witness Protection, Security and Benefit Act', d: 'DOJ admission; immunity for the offense testified on.', s: 'witness protection' }
			],
			tip: 'A teaching list collected from Tiu. Distinguish transactional immunity from use-and-derivative-use immunity (Tanchanco v. Sandiganbayan, in Tiu).',
			question: 'What laws grant immunity from prosecution to witnesses?'
		}
	],
	comparisons: [
		{
			id: 'C119.1',
			title: 'Discharge as state witness (Rule 119) vs. admission to the Witness Protection Program (RA 6981)',
			a: 'Discharge under Rule 119, Secs. 17–18',
			b: 'Admission under RA 6981',
			meaning: ['Court order discharging a co-accused to testify for the State.', 'DOJ admission of a participant as state witness, with protection and benefits.'],
			basis: ['Rule 119, Secs. 17–18', 'RA 6981, Secs. 10–14'],
			who: ['Court, on prosecution motion.', 'DOJ (Secretary).'],
			when: ['After the information is filed; before the prosecution rests.', 'Before or after filing; the prosecutor then excludes him or moves for discharge.'],
			reqs: ['Joint charge; five conditions; hearing; consent.', 'Grave felony; the same five conditions; sworn statement; MOA.'],
			time: ['Before the prosecution rests.', 'RA 6981, Sec. 9: proceedings to be finished within 3 months.'],
			exceptions: ['Immunity lost if he fails or refuses to testify as promised.', 'Immunity lost if he fails or refuses to testify, or testifies falsely.'],
			effect: ['Acquittal; double jeopardy (if arraigned).', 'Exclusion from the information — not an acquittal; no jeopardy if he never pleaded (Yu v. RTC of Tagaytay, in Tiu); plus protection and benefits.'],
			trap: ['Thinking the court decides WPP admission.', 'Calling WPP exclusion an acquittal.'],
			decisive: 'Who grants it and its effect: the court (acquittal) vs. the DOJ (exclusion with protection).',
			hypo: 'A participant admitted to the WPP before the information is filed is simply not included; if he later refuses to testify, he may be charged. A co-accused discharged by the court after arraignment who testifies as promised is acquitted and cannot be charged again.'
		},
		{
			id: 'C119.2',
			title: 'Demurrer with leave vs. demurrer without leave',
			a: 'With leave of court',
			b: 'Without leave of court',
			meaning: ['Demurrer filed after the court grants leave.', 'Demurrer filed without asking leave, or after leave was denied.'],
			basis: ['Rule 119, Sec. 23', 'Rule 119, Sec. 23'],
			who: ['Accused.', 'Accused.'],
			when: ['Leave within 5 days after the prosecution rests; demurrer within 10 days from notice of leave.', 'After the prosecution rests.'],
			reqs: ['Motion for leave stating grounds.', 'None, but at his risk.'],
			time: ['5/5/10/10 days; 2017 Guidelines resolution in 30 days.', 'Same resolution period.'],
			exceptions: ['—', '—'],
			effect: ['If denied, the accused may present evidence.', 'If denied, the accused waives the right to present evidence; judgment on the prosecution\'s evidence.'],
			trap: ['Thinking a denied demurrer can be challenged by certiorari before judgment (it cannot).', 'Forgetting that a grant in either case is an acquittal.'],
			decisive: 'What happens if it is denied: evidence still allowed (with leave) or waived (without leave).',
			hypo: 'Two co-accused demur after the prosecution rests, A with leave and B without. Both are denied. A presents his evidence; B is judged on the prosecution\'s evidence alone.'
		},
		{
			id: 'C119.3',
			title: 'Reopening (Rule 119, Sec. 24) vs. new trial (Rule 121)',
			a: 'Reopening',
			b: 'New trial',
			meaning: ['Reopening of proceedings to receive further evidence to prevent a miscarriage of justice.', 'Rehearing after judgment on specified grounds.'],
			basis: ['Rule 119, Sec. 24', 'Rule 121, Secs. 1–2'],
			who: ['Judge, motu proprio or on motion of either party.', 'Accused on motion, or the court motu proprio with the accused\'s consent.'],
			when: ['Any time before finality of the judgment of conviction (even before judgment).', 'After judgment of conviction, before it becomes final.'],
			reqs: ['Hearing; to avoid miscarriage of justice.', 'Errors of law or irregularities prejudicial to the accused; or newly discovered evidence that would probably change the judgment.'],
			time: ['Finished within 30 days from the order.', 'Motion within 15 days from promulgation (period to appeal); retrial within 30 days (max 180) from notice.'],
			exceptions: ['—', '—'],
			effect: ['Additional evidence received; judgment may follow or be modified.', 'Original judgment set aside; evidence already taken stands.'],
			trap: ['Thinking reopening requires a judgment.', 'Thinking new trial may be granted on the court\'s own initiative without the accused\'s consent.'],
			decisive: 'Timing and grounds: reopening is broad and can occur before judgment; new trial presupposes a judgment and specific grounds.',
			hypo: 'Before decision, a witness who had been missing appears: reopening. After conviction, a document proving the accused\'s alibi surfaces that could not have been found earlier: new trial on newly discovered evidence.'
		},
		{
			id: 'C119.4',
			title: 'Transactional immunity vs. use-and-derivative-use immunity',
			a: 'Transactional immunity',
			b: 'Use-and-derivative-use immunity',
			meaning: ['Immunity from prosecution for the offense to which the testimony relates.', 'Testimony (and evidence derived from it) cannot be used against the witness, but he may be prosecuted on independent evidence.'],
			basis: ['Tanchanco v. Sandiganbayan (2005), in Tiu; e.g., RA 6981, Sec. 12; PD 749', 'Tanchanco; e.g., compelled testimony provisions'],
			who: ['Granting authority under the statute.', 'Same.'],
			when: ['When the statute grants immunity from prosecution.', 'When the statute bars use of compelled testimony.'],
			reqs: ['Statutory grant; compliance with conditions.', 'Compelled testimony.'],
			time: ['—', '—'],
			exceptions: ['Lost if the witness fails to testify or testifies falsely.', 'Prosecution on independent evidence remains possible.'],
			effect: ['No prosecution for the transaction.', 'Only the use of the testimony and its fruits is barred.'],
			trap: ['Assuming all immunity is transactional.', '—'],
			decisive: 'Whether the witness is protected from prosecution itself, or only from the use of what he said.',
			hypo: 'A witness compelled to testify under a use-immunity statute may still be prosecuted if the State has independent documentary proof of his participation; under transactional immunity he may not.'
		}
	],
	cases: [
		{
			id: 'salvanera',
			name: 'Salvanera v. People',
			cite: '2007 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Two co-accused in a murder case were discharged to testify against the alleged mastermind; the defense challenged the discharge as lacking corroboration.',
			issue: 'Was the discharge proper, and what corroboration is required?',
			ruling: 'The discharge was upheld.',
			doctrine: 'Granting immunity is a tactical prosecutorial decision; corroboration need not be on the very same points — it is enough that the state witness\'s testimony is corroborated by other evidence on material points.',
			reasoning: 'The power to prosecute includes deciding whom not to prosecute.',
			rule: 'Rule 119, Sec. 17.',
			hypo: 'A state witness\'s account of the planning meeting is corroborated by text messages and a hotel registry — enough.',
			examQ: 'What degree of corroboration is required for the testimony of a proposed state witness?',
			verify: 'Facts summarized generally; G.R. number not in Tiu.'
		},
		{
			id: 'anabe',
			name: 'People v. Anabe',
			cite: 'G.R. No. 179033, September 6, 2010',
			from: 'Tiu',
			facts: 'The conviction rested on the testimony of a discharged state witness who was not an eyewitness to the killing.',
			issue: 'May an uncorroborated state witness\'s testimony support conviction?',
			ruling: 'Not when the state witness is not an eyewitness; his testimony is circumstantial and must be corroborated.',
			doctrine: 'Turning an accused into a state witness "is not a magic formula"; the testimony must be received with caution and substantially corroborated. The exception allowing uncorroborated testimony applies only to an eyewitness, whose testimony is direct evidence; otherwise the rule on circumstantial evidence applies.',
			reasoning: 'Sec. 17 assumes the state witness\'s testimony is direct evidence.',
			rule: 'Rule 119, Sec. 17.',
			hypo: 'A state witness who only heard about the crime from the accused cannot alone sustain a conviction.',
			examQ: 'When may the uncorroborated testimony of a state witness support a conviction?'
		},
		{
			id: 'ampatuan-de-lima',
			name: 'Ampatuan v. De Lima',
			cite: '2013 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'An accused in the Maguindanao massacre case sought to compel the prosecution to include in the information a participant admitted to the Witness Protection Program.',
			issue: 'May mandamus compel the prosecution to charge a person admitted as state witness?',
			ruling: 'No.',
			doctrine: 'The decision to use an accused as a state witness originates from the prosecution; courts should generally defer and deny discharge only in clear cases of failure to meet the requirements (with People v. Sandiganbayan, 2013).',
			reasoning: 'The prosecution has a better view of the strength of its evidence.',
			rule: 'Rule 119, Sec. 17; RA 6981.',
			hypo: 'The defense opposes the discharge of a co-accused arguing he is "equally guilty." Unless clearly the most guilty, the court should defer.',
			examQ: 'What is the court\'s role when the prosecution moves to discharge an accused as state witness?',
			verify: 'Facts summarized generally; G.R. number not in Tiu.'
		},
		{
			id: 'cabador',
			name: 'Cabador v. People',
			cite: 'G.R. No. 186001, October 2, 2009',
			from: 'Tiu',
			facts: 'After five years of trial, the accused filed a "motion to dismiss" on speedy-trial grounds, with a few lines saying the evidence was insufficient, on the same day the prosecution filed its formal offer. The trial court treated it as a demurrer without leave and deemed him to have waived presenting evidence.',
			issue: 'Was the motion a demurrer to evidence?',
			ruling: 'No.',
			doctrine: 'To determine whether a pleading is a demurrer, consider the allegations made in good faith, the stage of the proceedings, and the primary objective of the movant (Enojas v. COMELEC). A demurrer refers to the evidence and is filed after the prosecution rests (after the ruling on its formal offer).',
			reasoning: 'The motion\'s thrust was speedy trial; it did not analyze any evidence; the prosecution had not rested.',
			rule: 'Rule 119, Secs. 9 and 23.',
			hypo: 'A motion filed before the court rules on the prosecution\'s formal offer, arguing only delay, is not a demurrer; the accused keeps his right to present evidence.',
			examQ: 'When is a motion to dismiss filed during trial considered a demurrer to evidence?'
		},
		{
			id: 'salazar',
			name: 'Salazar v. People',
			cite: '2003 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The trial court granted the accused\'s demurrer and acquitted her of estafa, but in the same order held her civilly liable for her purchases.',
			issue: 'May the court adjudge civil liability when granting a demurrer?',
			ruling: 'No — not without allowing the accused to present evidence on the civil aspect.',
			doctrine: 'Upon granting a demurrer, the court should acquit and set the case for continuation of trial on the civil aspect, so the accused may present evidence and the parties rebut; adjudging civil liability on the prosecution\'s evidence alone denies due process.',
			reasoning: 'The accused has not yet adduced evidence on either aspect.',
			rule: 'Rule 119, Secs. 11 and 23; Rule 111, Sec. 2.',
			hypo: 'After acquitting on demurrer, the court schedules hearings for the defense to present evidence on the alleged unpaid amount.',
			examQ: 'May a court that grants a demurrer to evidence also award damages in the same order?',
			also: ['r111'],
			verify: 'G.R. number not in Tiu.'
		}
	],
	deadlines: [
		{ ref: 'Rule 119, Sec. 1', act: 'Prepare for trial / commence trial', who: 'Accused / court', period: 'At least 15 days to prepare; trial within 30 days', start: 'Plea of not guilty / receipt of the pre-trial order', exceptions: 'Excluded delays (Sec. 3)', effect: 'Motion to dismiss for denial of speedy trial (Sec. 9)', kind: 'constitutional' },
		{ ref: 'Rule 119, Sec. 2', act: 'Complete the trial', who: 'Court', period: '180 days', start: 'First day of trial', exceptions: 'Excluded delays; SC authorization; shorter periods in special laws', effect: 'Speedy-trial violation', kind: 'constitutional' },
		{ ref: 'Rule 119, Sec. 3(a)(4), (7)', act: 'Excluded pre-trial delay; matter under advisement', who: '—', period: 'Not more than 30 days each', start: '—', exceptions: '—', effect: 'Excess counts against the time limit', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 5', act: 'Commence retrial after an order for new trial', who: 'Court', period: '30 days (extendible to 180 days)', start: 'Notice of the order', exceptions: 'Unavailability of witnesses', effect: 'Speedy-trial violation', kind: 'constitutional' },
		{ ref: 'Rule 119, Sec. 9', act: 'Move to dismiss for denial of speedy trial', who: 'Accused', period: 'Before trial', start: '—', exceptions: 'Constitutional claim preserved (Sec. 10)', effect: 'Waiver', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 13', act: 'Serve the order for conditional examination of a defense witness', who: 'Court', period: 'At least 3 days before', start: 'Scheduled examination', exceptions: '—', effect: 'Examination proceeds even if the notified prosecutor is absent', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 23', act: 'Motion for leave to file demurrer; opposition', who: 'Accused; prosecution', period: '5 days; 5 days (non-extendible)', start: 'Prosecution rests / receipt of motion', exceptions: '2017 Guidelines: oral motion, resolved orally', effect: 'Late motion may be denied', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 23', act: 'File demurrer; opposition', who: 'Accused; prosecution', period: '10 days; 10 days (non-extendible)', start: 'Notice of leave / receipt of demurrer', exceptions: '—', effect: '—', kind: 'procedural' },
		{ ref: '2017 Revised Guidelines, III.13(d)', act: 'Resolve the demurrer', who: 'Court', period: '30 calendar days', start: 'Filing of the comment or lapse of the 10-day period', exceptions: '—', effect: 'Non-extendible', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 24', act: 'Terminate reopened proceedings', who: 'Court', period: '30 days', start: 'Order granting reopening', exceptions: '—', effect: '—', kind: 'procedural' },
		{ ref: 'RA 6981, Sec. 9', act: 'Finish proceedings where a protected witness testifies', who: 'Court / tribunal', period: '3 months', start: 'Filing of the case', exceptions: '—', effect: 'Directory', kind: 'procedural' },
		{ ref: 'Rule 119, Sec. 6 (transitional)', act: 'Arraignment to trial (first three years after RA 8493)', who: 'Court', period: '180 / 120 / 80 days', start: 'Arraignment', exceptions: 'Transitional', effect: '—', kind: 'constitutional', verify: 'Transitional provision; confirm whether tested' }
	],
	traps: [
		{ wrong: 'Court congestion justifies postponement.', right: 'Expressly prohibited (Sec. 4).', example: '—' },
		{ wrong: 'All delays count toward the 180 days.', right: 'Excluded delays under Sec. 3 do not.', example: '—' },
		{ wrong: 'A prosecution witness may be conditionally examined before any judge.', right: 'Only before the court where the case is pending (Sec. 15; Manguerra).', example: '—' },
		{ wrong: 'A state witness must be the least guilty.', right: 'He must not appear to be the most guilty (Jimenez v. People).', example: '—' },
		{ wrong: 'A state witness\'s testimony must be corroborated on every point.', right: 'Substantially, on material points; relaxed for eyewitnesses (Salvanera; Anabe).', example: '—' },
		{ wrong: 'If the motion to discharge is denied, the proposed witness\'s affidavit may still be used.', right: 'It is inadmissible (Sec. 17).', example: '—' },
		{ wrong: 'A granted demurrer may be appealed by the State.', right: 'It is an acquittal; only certiorari for grave abuse (Dayap v. Sendiong).', example: '—' },
		{ wrong: 'An accused who demurs without leave may still present evidence if denied.', right: 'He waives it (Sec. 23).', example: '—' },
		{ wrong: 'A denied demurrer may be challenged by certiorari.', right: 'Not reviewable by appeal or certiorari before judgment (Sec. 23).', example: '—' },
		{ wrong: 'Any motion to dismiss after trial begins is a demurrer.', right: 'Apply the Cabador test (allegations, stage, objective).', example: '—' },
		{ wrong: 'Reopening may be ordered without hearing if the judge acts motu proprio.', right: 'Hearing required "in either case" (Sec. 24).', example: '—' },
		{ wrong: 'WPP admission is an acquittal.', right: 'It is exclusion; no jeopardy if he never pleaded.', example: '—' }
	],
	corrections: [
		{ old: 'Demurrer procedure: written motion for leave within 5 days; demurrer within 10 days.', fix: 'The 2017 Guidelines add an oral motion for leave resolved orally, cancellation of defense dates if the accused insists on a demurrer after leave is denied, and resolution within 30 days.', source: 'A.M. No. 15-06-10-SC, III.13(d)' },
		{ old: 'Postponements for good cause.', fix: 'The 2017 Guidelines prohibit postponements except for acts of God, force majeure or physical inability of the witness, and require a postponement fee.', source: 'A.M. No. 15-06-10-SC, III.2(d)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Order of trial', q: 'What is the order of trial? When may it be modified?', a: 'E119.3; reverse trial when the accused admits the act but interposes a lawful defense (Sec. 11[e]).', keys: 'Sec. 11' },
		{ cat: 'A', level: 2, topic: 'State witness', q: 'What are the requisites for the discharge of an accused to become a state witness?', a: 'E119.4 — five substantive conditions plus procedural requisites (joint charge; prosecution motion before resting; consent; hearing).', keys: 'Sec. 17' },
		{ cat: 'A', level: 2, topic: 'Exclusions', q: 'Enumerate the delays excluded in computing the time within which trial must commence.', a: 'E119.1.', keys: 'Sec. 3' },
		{ cat: 'A', level: 3, topic: 'Continuance', q: 'What factors justify a continuance, and what grounds are prohibited?', a: 'E119.2.', keys: 'Sec. 4' },
		{ cat: 'A', level: 3, topic: 'Demurrer', q: 'Outline the steps and periods for a demurrer to evidence.', a: 'E119.8.', keys: 'Sec. 23; 2017 Guidelines' },
		{ cat: 'A', level: 3, topic: 'Reopening', q: 'What are the requisites of reopening the proceedings?', a: 'E119.7.', keys: 'Sec. 24' },
		{ cat: 'B', level: 3, topic: 'Discharge vs WPP', q: 'Distinguish discharge as state witness under Rule 119 from admission to the Witness Protection Program.', a: 'See C119.1.', keys: 'court vs DOJ; acquittal vs exclusion' },
		{ cat: 'B', level: 3, topic: 'Demurrer leave', q: 'Distinguish a demurrer with leave from a demurrer without leave.', a: 'See C119.2.', keys: 'effect of denial' },
		{ cat: 'B', level: 4, topic: 'Reopening vs new trial', q: 'Distinguish reopening under Rule 119 from new trial under Rule 121.', a: 'See C119.3.', keys: 'before judgment; grounds' },
		{ cat: 'C', level: 1, topic: 'Time', q: 'After a plea of not guilty, the accused shall have at least fifteen days to prepare for trial.', tf: true, short: 'True (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'C', level: 1, topic: 'Trial period', q: 'The entire trial period may not exceed 180 days from the first day of trial, except as authorized by the Supreme Court.', tf: true, short: 'True (Sec. 2), subject to excluded delays.', keys: 'Sec. 2' },
		{ cat: 'C', level: 2, topic: 'Continuance', q: 'A continuance may be granted because the prosecutor failed to subpoena an available witness.', tf: false, short: 'False. Prohibited ground (Sec. 4).', keys: 'Sec. 4' },
		{ cat: 'C', level: 2, topic: 'Conditional examination', q: 'A prosecution witness about to leave the country may be conditionally examined before any judge or a member of the Bar designated by the judge.', tf: false, short: 'False. Only before the court where the case is pending (Sec. 15; Manguerra). The broader rule is for defense witnesses (Sec. 13).', keys: 'Sec. 15' },
		{ cat: 'C', level: 2, topic: 'State witness', q: 'A proposed state witness must appear to be the least guilty among the accused.', tf: false, short: 'False. He must not appear to be the most guilty (Sec. 17[d]; Jimenez v. People).', keys: 'not the most guilty' },
		{ cat: 'C', level: 3, topic: 'State witness', q: 'If the motion to discharge an accused as state witness is denied, his sworn statement may still be used against his co-accused.', tf: false, short: 'False. It is inadmissible (Sec. 17).', keys: 'Sec. 17' },
		{ cat: 'C', level: 3, topic: 'Demurrer', q: 'When a demurrer filed without leave is denied, the accused may still present evidence.', tf: false, short: 'False. He waives the right and the case is decided on the prosecution\'s evidence (Sec. 23).', keys: 'without leave' },
		{ cat: 'C', level: 3, topic: 'Demurrer', q: 'An order denying a demurrer to evidence may be challenged by certiorari before judgment.', tf: false, short: 'False. It is not reviewable by appeal or certiorari before judgment (Sec. 23).', keys: 'Sec. 23' },
		{ cat: 'C', level: 4, topic: 'Demurrer', q: 'The prosecution may appeal an order granting a demurrer to evidence.', tf: false, short: 'False. A grant is an acquittal; the remedy is certiorari only for grave abuse of discretion (Dayap v. Sendiong).', keys: 'acquittal; certiorari' },
		{ cat: 'C', level: 4, topic: 'Demurrer', q: 'In granting a demurrer, the court may also order the accused to pay civil damages on the basis of the prosecution\'s evidence.', tf: false, short: 'False. The accused must be allowed to present evidence on the civil aspect (Salazar v. People, 2003).', keys: 'Salazar' },
		{ cat: 'C', level: 5, topic: 'Reopening', q: 'Reopening of the proceedings is available only after judgment and before it becomes final.', tf: false, short: 'False. It may be ordered at any time before finality of the judgment of conviction — even before judgment — after hearing (Sec. 24).', keys: 'Sec. 24' },
		{
			cat: 'D', level: 4, topic: 'State witness', title: 'Discharge after the prosecution rests',
			facts: 'After the prosecution formally offers its evidence and rests, it moves to discharge co-accused B to testify against A, explaining that B only now agreed to cooperate.',
			q: 'Should the motion be granted?',
			issue: 'Whether an accused may be discharged as state witness after the prosecution rests.',
			alac: {
				answer: 'No, as filed — the motion is late.',
				legalBasis: 'Rule 119, Sec. 17: discharge is "upon motion of the prosecution before resting its case."',
				application: 'The prosecution already rested. It may move to reopen (Sec. 24) to present new evidence if a miscarriage of justice would otherwise result, but discharge under Sec. 17 is time-barred.',
				conclusion: 'Deny the motion; consider reopening only if its requisites are met.'
			},
			keys: 'before resting; Sec. 24'
		},
		{
			cat: 'D', level: 4, topic: 'Demurrer', title: 'Demurrer without leave, denied',
			facts: 'After the prosecution rests in a malversation case, C files a demurrer without asking for leave. The court denies it. C then asks to present his witnesses.',
			q: 'Should he be allowed?',
			issue: 'Effect of denial of a demurrer filed without leave.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 119, Sec. 23: "When the demurrer to evidence is filed without leave of court, the accused waives the right to present evidence and submits the case for judgment on the basis of the evidence for the prosecution."',
				application: 'C filed without leave; the denial triggers the waiver.',
				conclusion: 'The court renders judgment on the prosecution\'s evidence.'
			},
			missing: 'If C\'s pleading were not really a demurrer (e.g., a speedy-trial motion) under the Cabador test, there would be no waiver.',
			keys: 'without leave; waiver'
		},
		{
			cat: 'D', level: 4, topic: 'Speedy trial', title: 'Trial started late',
			facts: 'D receives the pre-trial order on February 1. No trial date is held until May 15. In between, a 20-day period was spent resolving D\'s motion to inhibit the judge. On May 10, D moves to dismiss for denial of speedy trial.',
			q: 'Rule on the motion.',
			issue: 'Whether the time limit to commence trial was exceeded after excluding allowed delays.',
			alac: {
				answer: 'Grant the motion (unless other exclusions are shown).',
				legalBasis: 'Rule 119, Sec. 1 (trial within 30 days from receipt of the pre-trial order); Sec. 3(a)(5) (delay from orders of inhibition excluded); Sec. 9 (accused proves; prosecution goes forward with exclusions; dismissal subject to double jeopardy; motion before trial).',
				application: 'From February 1 to May 10 is about 98 days; excluding 20 days for the inhibition, about 78 days ran — far beyond 30. D moved before trial.',
				conclusion: 'Dismiss; the dismissal bars reprosecution.'
			},
			keys: 'Secs. 1, 3, 9'
		},
		{
			cat: 'E', level: 5, topic: 'State witness corroboration', title: 'The hearsay state witness',
			facts: 'E, discharged as state witness, testifies that the mastermind F told him after the killing that F had ordered it. No other evidence links F to the crime. F is convicted.',
			q: 'Should the conviction be affirmed?',
			issue: 'Whether the uncorroborated testimony of a non-eyewitness state witness suffices.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 119, Sec. 17(c) (substantial corroboration); People v. Anabe (2010): the testimony of a state witness who is not an eyewitness is circumstantial and must be corroborated; only an eyewitness\'s sincere, detailed testimony may stand alone.',
				application: 'E did not witness the killing; his testimony is of F\'s admission — not direct evidence of the killing — and is uncorroborated.',
				conclusion: 'Reverse and acquit F for insufficiency of evidence.'
			},
			trap: 'The discharge itself is not invalidated by weak corroboration; the problem is the sufficiency of evidence for conviction.',
			keys: 'Anabe; corroboration; circumstantial'
		},
		{
			cat: 'E', level: 5, topic: 'Demurrer and civil liability', title: 'Acquitted on demurrer, ordered to pay',
			facts: 'G, charged with estafa, files a demurrer with leave after the prosecution rests. The court grants it, acquitting G for failure to prove deceit, but in the same order directs G to pay the complainant ₱400,000 as civil liability.',
			q: '(a) May the prosecution appeal the acquittal? (b) Is the civil award valid?',
			issue: 'Effect of a granted demurrer on appeal and on civil liability.',
			alac: {
				answer: '(a) No. (b) No — not without letting G present evidence on the civil aspect.',
				legalBasis: '(a) A granted demurrer is an acquittal; double jeopardy bars appeal; only certiorari for grave abuse (Dayap v. Sendiong). (b) Salazar v. People (2003): the court should acquit and set the case for continuation of trial on the civil aspect.',
				application: '(a) Nothing suggests grave abuse. (b) G has not presented any evidence; the award on the prosecution\'s evidence alone denies due process. Because the acquittal is on reasonable doubt (deceit not proved), civil liability may still be proved (Art. 29).',
				conclusion: '(a) The acquittal stands. (b) Set aside the civil award; continue trial on the civil aspect.'
			},
			keys: 'Dayap; Salazar; Art. 29'
		},
		{
			cat: 'E', level: 5, topic: 'Mistake in charging', title: 'Wrong offense discovered mid-trial',
			facts: 'H is tried for robbery. Mid-trial, evidence shows there was no violence or intimidation; H, a houseguest, took the jewelry while the owners slept (theft, not robbery). Later evidence also shows H was a domestic helper (qualified theft).',
			q: 'What should the court do?',
			issue: 'Whether Sec. 19 applies and what the court may convict of.',
			alac: {
				answer: 'Sec. 19 does not apply as to theft; the court may convict of theft as an offense necessarily included in robbery, but not of qualified theft unless properly charged.',
				legalBasis: 'Rule 119, Sec. 19 applies only when the accused "cannot be convicted of the offense charged or any other offense necessarily included therein." Rule 120, Secs. 4–5 (variance: conviction for an offense necessarily included). Qualifying circumstances must be alleged (Rule 110, Secs. 8–9).',
				application: 'Theft (taking with intent to gain without consent) is necessarily included in robbery as alleged; H can be convicted of theft. Qualified theft requires the qualifying relationship to be alleged; it was not, so it cannot be appreciated without a new information — and Sec. 19 is not the route because theft is included.',
				conclusion: 'Convict of simple theft; no substitution needed.'
			},
			trap: 'Using Sec. 19 when the proved offense is included in the one charged.',
			keys: 'Sec. 19; Rule 120, Sec. 4; qualifying circumstances'
		},
		{ cat: 'F', level: 3, topic: 'Cabador', q: 'What criteria did Cabador v. People use to decide whether a motion was a demurrer, and why did it matter?', a: 'Allegations made in good faith, stage of the proceedings, and the primary objective of the movant (Enojas). It mattered because treating the motion as a demurrer without leave would have waived the accused\'s right to present evidence; the Court found it was a speedy-trial motion filed before the prosecution rested.', keys: 'Cabador; Enojas criteria' },
		{ cat: 'F', level: 4, topic: 'Anabe', q: 'Under People v. Anabe, when may the uncorroborated testimony of a state witness suffice?', a: 'Only when the state witness is an eyewitness whose testimony is direct evidence, sincere, straightforward and detailed. Otherwise, the testimony is circumstantial and must be corroborated.', keys: 'eyewitness exception' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 119', title: 'Rule 119 integrated',
			facts: 'In a kidnapping case against I, J and K, trial starts on March 1. On April 10, the prosecution\'s witness L, a nurse about to leave for Canada indefinitely, is examined before the clerk of court because the judge is on leave; the defense is notified but objects. On May 20, the prosecution moves to discharge K (the driver, never convicted, who did not touch the victim) as state witness; the court grants it after a hearing. The prosecution rests on June 30. On July 3, I files a demurrer without leave; it is denied on August 1. I asks to present evidence; denied. Judgment of conviction follows.',
			q: 'Identify the issues and resolve each.',
			issue: 'Conditional examination; state witness discharge; demurrer without leave.',
			alac: {
				answer: 'L\'s testimony is inadmissible; K\'s discharge is valid if the other requisites were met; I lost the right to present evidence.',
				legalBasis: 'Rule 119, Sec. 15 and Manguerra (prosecution witness examined only before the court where the case is pending); Sec. 17 (discharge before the prosecution rests, five conditions, hearing); Sec. 23 (demurrer without leave — waiver of evidence if denied).',
				application: 'The examination before the clerk of court violates Sec. 15; L\'s testimony must be excluded. K\'s discharge came before the prosecution rested, after a hearing, and he does not appear the most guilty; validity depends on absolute necessity, no other direct evidence and corroboration. I filed without leave; denial waived his evidence.',
				conclusion: 'The conviction stands only if the remaining admissible evidence (including K\'s corroborated testimony) proves guilt beyond reasonable doubt.'
			},
			keys: 'Sec. 15; Manguerra; Sec. 17; Sec. 23'
		}
	],
	memorize: [
		'15 days to prepare; trial within 30 days of the pre-trial order; 180 days maximum',
		'Exclusions (Sec. 3) and prohibited grounds for continuance (Sec. 4)',
		'Order of trial (Sec. 11) and reverse trial',
		'Conditional examination: defense (any judge/lawyer; 3 days\' notice) vs. prosecution (trial court only)',
		'State witness: five conditions; before the prosecution rests; acquittal unless he fails to testify',
		'Sec. 19: mistake in charging — commit, require new information, dismiss original',
		'Demurrer: 5/5/10/10 days; with vs. without leave; grant = acquittal; denial not reviewable before judgment',
		'Reopening: before finality; hearing; 30 days'
	],
	flashcards: [
		['Time to prepare for trial?', 'At least 15 days after a plea of not guilty.'],
		['When must trial start?', 'Within 30 days from receipt of the pre-trial order.'],
		['Maximum trial period?', '180 days from the first day of trial, minus exclusions.'],
		['Prohibited grounds for continuance?', 'Court congestion; lack of diligent preparation; prosecutor\'s failure to obtain available witnesses.'],
		['Order of trial?', 'Prosecution, defense, rebuttal, sur-rebuttal, submission.'],
		['Where is a prosecution witness conditionally examined?', 'Only before the court where the case is pending.'],
		['Five conditions for state witness?', 'Absolute necessity; no other direct evidence; substantial corroboration; not the most guilty; no moral turpitude conviction.'],
		['Effect of discharge as state witness?', 'Acquittal — unless he fails or refuses to testify per his sworn statement.'],
		['Demurrer periods?', 'Leave 5 days; opposition 5; demurrer 10; opposition 10; (2017) resolve in 30.'],
		['Demurrer without leave, denied?', 'Accused waives presenting evidence.'],
		['Demurrer granted?', 'Acquittal; not appealable.'],
		['Reopening?', 'Before finality; motu proprio or on motion; with hearing; finish in 30 days.']
	],
	oral: [
		['"Explain the demurrer to evidence."', 'After the prosecution rests, the accused may move to dismiss for insufficiency of evidence, with or without leave. Leave is sought within five days; the demurrer is filed within ten days of leave. If granted, it is an acquittal. If denied, the accused may present evidence if he had leave, but waives it if he filed without leave; the denial is not reviewable before judgment.'],
		['"When can a co-accused be discharged as state witness?"', 'On the prosecution\'s motion before it rests, with his consent, after a hearing, when there is absolute necessity, no other direct evidence, substantial corroboration, he does not appear the most guilty, and he has no conviction for moral turpitude. The discharge is an acquittal unless he fails to testify as promised.'],
		['"What if the wrong crime was charged?"', 'Under Sec. 19, if before judgment it appears the accused cannot be convicted of the offense charged or an included offense, the court holds him if there is good cause, requires the proper information, and dismisses the original upon its filing.']
	],
	checklist: [
		'I can state the trial time limits and the excluded delays.',
		'I can list the factors for continuance and the prohibited grounds.',
		'I can state the order of trial and when it may be reversed.',
		'I can distinguish conditional examination of defense and prosecution witnesses.',
		'I can state the requisites and effect of discharge as state witness, and compare it with WPP admission.',
		'I can explain Sec. 19 and its relation to substitution.',
		'I can explain the demurrer procedure and the effects of grant and denial, with and without leave.',
		'I can state the requisites of reopening and distinguish it from new trial.'
	],
	sheet: [
		'<b>Time:</b> 15 days to prepare; trial within 30 days of pre-trial order; ≤180 days; exclusions (Sec. 3); motion to dismiss before trial (Sec. 9) → acquittal.',
		'<b>Continuance (Sec. 4):</b> miscarriage of justice or complex case; never congestion, lack of preparation, or available prosecution witness not obtained.',
		'<b>Order (Sec. 11):</b> prosecution → defense → rebuttal → sur-rebuttal → submission; reverse if admission + lawful defense.',
		'<b>Conditional examination:</b> defense (Secs. 12–13: sick, >100 km, unavailable; any judge/lawyer; 3 days) · prosecution (Sec. 15: sick or leaving PH; trial court only — Manguerra).',
		'<b>State witness (Secs. 17–18):</b> before prosecution rests; 5 conditions; hearing; acquittal unless he fails to testify. WPP (RA 6981): DOJ; exclusion, not acquittal.',
		'<b>Sec. 19:</b> wrong offense, not included → hold, new information, dismiss original.',
		'<b>Demurrer (Sec. 23):</b> leave 5 days; demurrer 10 days; with leave denied → present evidence; without leave denied → waived; grant = acquittal; denial unreviewable before judgment.',
		'<b>Reopening (Sec. 24):</b> before finality; with hearing; 30 days.'
	],
	watchFor: `<strong>Watch for: timing and leave.</strong>
<ul>
<li>Has the prosecution rested? (State witness motion must come before; demurrer after.)</li>
<li>Was leave of court obtained before the demurrer?</li>
<li>Whose witness is being examined early, and before whom?</li>
</ul>`
};
