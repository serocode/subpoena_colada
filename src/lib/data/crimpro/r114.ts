import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 114 — Bail. */
export const r114: RuleChapter = {
	id: 'r114',
	n: 114,
	title: 'Bail',
	short: 'R114 Bail',
	tiu: 'pp. 115–135 (with RA 6036, RA 10389, PD 968 and A.M. No. 12-11-2-SC)',
	plain: `Bail is the security given so a person in custody can be released while his case goes on, guaranteeing that he will appear in court whenever required. Before conviction, bail is generally a right — the court can only set the amount. The big exception: offenses punishable by reclusion perpetua or life imprisonment (formerly death), where bail is denied if the evidence of guilt is strong; to decide that, the court must hold a hearing in which the prosecution carries the burden. After an RTC conviction, bail becomes discretionary, and in some cases is forbidden. Bail can take four forms — surety bond, property bond, cash, or recognizance.`,
	purpose: `To reconcile the accused's interest in pre-trial liberty (honoring the presumption of innocence and letting him prepare his defense) with society's interest in assuring his presence at trial. Bail is not meant to punish, to raise revenue, or to prevent the accused from committing other crimes (Enrile v. Sandiganbayan, 2015, in Tiu).`,
	stage: `From the moment a person is in custody of the law — even before a case is filed (Sec. 17[c]) — through trial, and in some cases pending appeal; never after final judgment or once service of sentence has begun (Sec. 24), save for probation.`,
	questions: [
		'What is bail, and who may apply for it?',
		'When is bail a matter of right, a matter of discretion, not required, or not allowed?',
		'What hearing is required, and who bears the burden of proof?',
		'What are the forms of bail and their requirements?',
		'How is the amount fixed, increased or reduced?',
		'Where is bail filed?',
		'What happens when the accused fails to appear (forfeiture), and when is bail cancelled?',
		'What objections does applying for bail not waive?'
	],
	relations: `Bail follows arrest (${ruleLink('r113')}) or surrender, and may be sought even during preliminary investigation after inquest (${ruleLink('r112', 'sections', 'Rule 112, Sec. 6')}). Sec. 26 preserves objections to the arrest and to the absence of preliminary investigation if raised before plea (${ruleLink('r116')}). A bail condition makes unjustified absence a waiver of the right to be present, allowing trial in absentia (${ruleLink('r115')}). After conviction, bail pending appeal links to ${ruleLink('r120')} and Rule 122.`,
	principles: [
		'<b>Constitutional right</b> (Art. III, Sec. 13): all persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, are bailable before conviction; the right survives suspension of the privilege of the writ of habeas corpus; excessive bail is prohibited.',
		'<b>Custody is a prerequisite</b>: one must be under the custody of the law (arrested or surrendered) to apply.',
		'<b>The penalty prescribed, not imposable, controls</b> whether an offense is punishable by reclusion perpetua (People v. Valdez, 2015, in Tiu).',
		'<b>A hearing is mandatory</b> where bail is discretionary, even if the prosecution does not object (Serapio; Domingo v. Pagayatan).',
		'<b>Bail ends with the RTC judgment</b>: continued liberty on appeal on the same bail requires the bondsman\'s consent.'
	],
	sections: [
		{
			n: '1',
			title: 'Bail defined',
			text: `"Bail is the security given for the release of a person in custody of the law, furnished by him or a bondsman, to guarantee his appearance before any court as required under the conditions hereinafter specified. Bail may be given in the form of corporate surety, property bond, cash deposit, or recognizance."`,
			plain: `Bail = security for release, guaranteeing appearance. Four forms: surety, property, cash, recognizance.`,
			reqs: `(1) Person in custody of the law; (2) security furnished by him or a bondsman; (3) to guarantee appearance.`,
			who: `The person in custody or a bondsman.`,
			exceptions: `Bail is also used for material witnesses (Rule 119, Sec. 14) and witnesses on substitution of the information (Rule 110, Sec. 14) — without prior custody. Jurisprudence extends bail to extradition (Gov't of Hong Kong v. Olalia, 2007) and allows it at the Commissioner's discretion in deportation; it is not available in military proceedings (Comendador v. Villa, 1991).`,
			effect: `Bail does not answer for civil liability, but a cash deposit may be applied to fines and costs (Sec. 14).`,
			cases: `${caseLink('olalia', 'Gov\'t of Hong Kong v. Olalia (2007)')}; ${caseLink('comendador', 'Comendador v. Villa (1991)')}; <i>Paderanga v. CA</i> (1995 — custody by submission through counsel while hospitalized).`,
			hypo: `A fugitive files, through counsel, a motion to fix bail while hiding. Premature: he is not in custody of the law. He must first surrender.`,
			trap: `Bail is not available to someone at large — but "custody" includes surrender, even constructive surrender through counsel when the accused is confined in a hospital (Paderanga).`
		},
		{
			n: '2',
			title: 'Conditions of the bail; requirements',
			text: `All kinds of bail are subject to these conditions: (a) the undertaking is effective upon approval and, unless cancelled, remains in force at all stages of the case "until promulgation of the judgment of the Regional Trial Court, irrespective of whether the case was originally filed in or appealed to it"; (b) the accused shall appear before the proper court whenever required; (c) failure to appear at the trial without justification and despite due notice is a waiver of the right to be present, and trial may proceed in absentia; (d) the bondsman shall surrender the accused for execution of the final judgment. The papers state the accused's name, address, amount and conditions, with recent passport-size photographs (face, left and right profiles).`,
			plain: `While on bail you must show up when required. If you skip trial without reason after notice, the trial goes on without you. The bail lasts until the RTC promulgates its judgment.`,
			reqs: `Approval; appearance whenever required; photographs and personal data.`,
			who: `Accused; bondsman; court.`,
			when: `From approval until promulgation of the RTC judgment.`,
			exceptions: `To continue on the same bail during appeal, the bondsman must consent (Sec. 5; Maguddatu v. CA, in Tiu).`,
			effect: `Unjustified absence: waiver of presence and trial in absentia; forfeiture (Sec. 21); possible cancellation. Bail does not include the right to leave the country (Manotoc v. CA, 1986).`,
			cases: `${caseLink('maguddatu', 'Maguddatu v. CA')}; ${caseLink('manotoc', 'Manotoc v. CA (1986)')}.`,
			hypo: `An accused on bail is convicted by the RTC and files a notice of appeal. His bail covered him only until promulgation; to stay out during appeal, he must apply for bail pending appeal (discretionary) and, to use the same bond, get the bondsman's consent.`,
			trap: `Under the old rules bail lasted until "full determination" of the case; under the 2000 Rules it lasts only until promulgation of the RTC judgment.`
		},
		{
			n: '3',
			title: 'No release or transfer except on court order or bail',
			text: `"No person under detention by legal process shall be released or transferred except upon order of the court or when he is admitted to bail."`,
			plain: `Once detained by legal process, the jail cannot release or move him on its own.`,
			effect: `An unauthorized release or transfer may expose the custodian to criminal and administrative liability.`,
			hypo: `The warden transfers a detention prisoner to another province "for security reasons" without a court order. Violation of Sec. 3.`
		},
		{
			n: '4',
			title: 'Bail, a matter of right; exception',
			text: `All persons in custody shall be admitted to bail as a matter of right, with sufficient sureties, or released on recognizance as prescribed by law or the Rule, "(a) before or after conviction by the Metropolitan Trial Court, Municipal Trial Court, Municipal Trial Court in Cities, or Municipal Circuit Trial Court, and (b) before conviction by the Regional Trial Court of an offense not punishable by death, reclusion perpetua, or life imprisonment."`,
			plain: `First-level court cases: bail is a right, before or after conviction. RTC cases: bail is a right before conviction, unless the offense is punishable by death, reclusion perpetua or life imprisonment.`,
			reqs: `Custody; offense and stage within Sec. 4.`,
			who: `Accused; court (fixes amount only).`,
			exceptions: `Offenses punishable by death, reclusion perpetua or life imprisonment (Sec. 7).`,
			effect: `The court cannot deny bail; risk of flight is a reason to increase the amount, not to deny it (San Miguel v. Maceda, in Tiu). Remedy if denied: mandamus (or certiorari).`,
			hypo: `An accused charged with homicide (reclusion temporal) in the RTC applies for bail before conviction. It is a matter of right; the court may only fix the amount, even if he once missed a hearing.`,
			trap: `"Matter of right" still requires notice to the prosecutor or his recommendation (Sec. 18); in practice the recommended amount in the information is used.`
		},
		{
			n: '5',
			title: 'Bail, when discretionary',
			text: `Upon conviction by the RTC of an offense not punishable by death, reclusion perpetua or life imprisonment, admission to bail is discretionary. The application may be filed and acted on by the trial court despite the filing of a notice of appeal, provided it has not transmitted the original record to the appellate court. If the conviction changed the offense from non-bailable to bailable, the application can only be filed with and resolved by the appellate court. If granted, the accused may continue on the same bail during appeal subject to the bondsman's consent. If the penalty imposed exceeds six years, bail shall be denied or cancelled upon a showing by the prosecution, with notice to the accused, of: (a) recidivism, quasi-recidivism, habitual delinquency, or reiteration; (b) previous escape, evasion of sentence or violation of bail conditions without valid justification; (c) commission of the offense while under probation, parole or conditional pardon; (d) probability of flight; or (e) undue risk of committing another crime during the appeal. The appellate court may review the RTC's resolution motu proprio or on motion, after notice.`,
			plain: `After an RTC conviction (non-capital), bail pending appeal is up to the court. If the sentence exceeds six years and any of five red flags is shown, bail must be denied.`,
			reqs: `(1) RTC conviction; (2) offense not punishable by death, RP or life; (3) appeal; (4) for penalties above 6 years — absence of the bail-negating circumstances (and even then, discretion remains — Leviste).`,
			who: `RTC (while it has the record) or appellate court; prosecution (proves bail-negating circumstances).`,
			when: `After promulgation; in the RTC until the original record is transmitted.`,
			exceptions: `If the conviction downgraded the offense from non-bailable to bailable, only the appellate court may act.`,
			effect: `Even with no bail-negating circumstance, the court may deny bail in the exercise of discretion (Leviste v. CA, 2010). Remedy against cancellation pending appeal: a motion in the appeal itself, not a separate certiorari petition (Chua v. CA, in Tiu).`,
			cases: `${caseLink('leviste', 'Leviste v. CA (2010)')}; <i>Chua v. CA</i> (in Tiu).`,
			hypo: `X, charged with murder, is convicted of homicide and sentenced to 12 years. He files a notice of appeal and an application for bail with the RTC, which has not transmitted the record. Because the conviction changed the offense from non-bailable to bailable, only the CA may act.`,
			trap: `Students say "no bail-negating circumstance → bail must be granted." Wrong: it remains discretionary (Leviste).`
		},
		{
			n: '6',
			title: 'Capital offense defined',
			text: `"A capital offense is an offense which, under the law existing at the time of its commission and of the application for admission to bail, may be punished with death."`,
			plain: `Capital = punishable by death under the law both when committed and when bail is sought.`,
			effect: `RA 9346 (2006) prohibits the imposition of the death penalty; in practice the non-bailability rule now operates through "reclusion perpetua or life imprisonment" (Sec. 7; Const., Art. III, Sec. 13).`,
			hypo: `An offense once punishable by death is committed in 2025. Because RA 9346 prohibits death, it is not "capital" under Sec. 6; but if punishable by reclusion perpetua, Sec. 7 applies anyway.`,
			trap: `Look at the penalty <b>prescribed</b>, not what may be imposed after mitigating circumstances.`
		},
		{
			n: '7',
			title: 'Capital offense or offense punishable by reclusion perpetua or life imprisonment, not bailable',
			text: `"No person charged with a capital offense, or an offense punishable by reclusion perpetua or life imprisonment, shall be admitted to bail when evidence of guilt is strong, regardless of the stage of the criminal prosecution."`,
			plain: `If the offense carries RP or life (or death) and the evidence of guilt is strong, no bail — at any stage.`,
			reqs: `(1) Offense punishable by death, RP or life; (2) evidence of guilt strong — determined after hearing.`,
			who: `Court; prosecution (burden, Sec. 8).`,
			exceptions: `Enrile v. Sandiganbayan (2015): bail granted to an elderly, ailing accused charged with plunder in view of his health and low flight risk — a ruling on its peculiar facts.`,
			effect: `If evidence of guilt is not strong, bail is granted (though the court may still deny it if the probability of escape is great — Tiu, p. 124). A conviction for such an offense indicates that evidence of guilt is strong (People v. Nitcha, in Tiu).`,
			cases: `${caseLink('enrile', 'Enrile v. Sandiganbayan (2015)')}.`,
			hypo: `A murder accused petitions for bail. After a summary hearing, the court finds the eyewitness identification doubtful. Evidence of guilt is not strong — bail is granted.`,
			trap: `"Discretionary" before conviction in an RP case means the court determines whether evidence of guilt is strong; it does not mean the court may deny bail at will once it finds the evidence weak.`
		},
		{
			n: '8',
			title: 'Burden of proof in bail application',
			text: `At the hearing of an application for bail by a person in custody for an offense punishable by death, reclusion perpetua or life imprisonment, "the prosecution has the burden of showing that evidence of guilt is strong." The evidence presented is automatically reproduced at the trial, but either party may move to recall a witness for additional examination unless the witness is dead, outside the Philippines, or otherwise unable to testify.`,
			plain: `In RP cases, the prosecution must prove strong evidence of guilt; the bail-hearing evidence carries over into the trial.`,
			reqs: `Hearing; notice to the prosecutor; summary of the prosecution's evidence in the order.`,
			who: `Prosecution (burden); court; accused (may submit affidavits).`,
			when: `Under the 2017 Revised Guidelines, a petition for bail filed after the information is set for summary hearing after arraignment and pre-trial and resolved within 30 calendar days from the first hearing (20 days for drug cases); an MR within 10 days. Under A.M. No. 12-11-2-SC, the order issues within 48 hours after the hearing.`,
			exceptions: `The accused need not present evidence; the resolution is based solely on the prosecution's evidence (2017 Guidelines).`,
			effect: `The order must contain a summary of the evidence and the judge's conclusion; failure is grave abuse. A hearing is required even if the prosecution does not object (Serapio v. Sandiganbayan, 2003; Domingo v. Pagayatan, 2003).`,
			cases: `${caseLink('serapio', 'Serapio v. Sandiganbayan (2003)')}; <i>Mabutas v. Perello</i> (2005 — the judge's four duties).`,
			hypo: `The prosecutor manifests "no objection" to bail in a rape case. The judge grants bail without hearing. The order is void for lack of hearing.`,
			trap: `The burden is on the <b>prosecution</b>, not on the accused to prove that evidence is weak.`,
			update: `2017 Revised Guidelines for Continuous Trial (A.M. No. 15-06-10-SC), III.10: summary hearing after arraignment and pre-trial; 30/20-day resolution periods; the court does not suspend the presentation of evidence in chief while the bail petition is pending.`
		},
		{
			n: '9',
			title: 'Amount of bail; guidelines',
			text: `The judge who issued the warrant or granted the application shall fix a reasonable amount, considering primarily (but not limited to): (a) financial ability of the accused; (b) nature and circumstances of the offense; (c) penalty for the offense charged; (d) character and reputation of the accused; (e) age and health; (f) weight of the evidence; (g) probability of appearing at the trial; (h) forfeiture of other bail; (i) the fact that the accused was a fugitive when arrested; and (j) pendency of other cases where the accused is on bail. "Excessive bail shall not be required."`,
			plain: `Ten factors; the amount must be enough to secure appearance and no more.`,
			who: `Judge who issued the warrant or granted the application.`,
			effect: `The DOJ Bail Bond Guide is considered but not controlling; the order fixing the amount is not appealable (A.M. No. 12-11-2-SC, Secs. 1 and 4). Excessive bail amounts to denial of bail.`,
			cases: `<i>Villaseñor v. Abaño</i> (in Tiu) — the principal factor is the probability of appearance; inability to pay does not by itself make bail excessive.`,
			hypo: `A daily-wage earner charged with theft is required to post ₱500,000. He may move to reduce it, attaching proof of his financial capacity (A.M. No. 12-11-2-SC, Sec. 3).`,
			trap: `Inability to pay alone does not make bail excessive; but an indigent may be released on recognizance under RA 10389.`
		},
		{
			n: '10',
			title: 'Corporate surety',
			text: `Any domestic or foreign corporation licensed as a surety and currently authorized may provide bail by a bond subscribed jointly by the accused and an officer authorized by its board.`,
			plain: `An insurance company issues the bond; the accused pays a premium he does not get back.`,
			reqs: `Licensed surety (accredited by the courts); bond signed by the accused and an authorized officer.`
		},
		{
			n: '11',
			title: 'Property bond, how posted',
			text: `A property bond is an undertaking constituted as a lien on real property. Within ten days after approval, the accused shall cause the annotation of the lien on the title with the Register of Deeds (or, if unregistered, in the Registration Book) and on the tax declaration with the assessor; within the same period, he shall submit his compliance to the court. Failure is sufficient cause for cancellation of the bond and his re-arrest and detention.`,
			plain: `Pledge land; annotate the lien within 10 days and report compliance.`,
			when: `10 days from approval.`,
			effect: `Non-compliance: cancellation and re-arrest.`,
			hypo: `The accused posts a property bond but never annotates the lien. On day 11 the court may cancel the bond and order his re-arrest.`
		},
		{
			n: '12',
			title: 'Qualifications of sureties in property bond',
			text: `(a) Each must be a resident owner of real estate within the Philippines; (b) a sole surety's real estate must be worth at least the amount of the undertaking; (c) with two or more sureties, each may justify in a lesser amount but the aggregate must equal the bail. In all cases, every surety must be worth the amount of his own undertaking over and above debts, obligations and exempt property.`,
			plain: `Sureties must own Philippine real estate worth enough, net of debts.`
		},
		{
			n: '13',
			title: 'Justification of sureties',
			text: `Every surety justifies by affidavit before the judge, describing the property, his title, encumbrances, other undischarged bails and liabilities; the court may examine sureties under oath. "No bail shall be approved unless the surety is qualified."`,
			plain: `Sureties swear to their qualifications before the judge.`
		},
		{
			n: '14',
			title: 'Deposit of cash as bail',
			text: `The accused or anyone on his behalf may deposit cash with the nearest collector of internal revenue or provincial, city or municipal treasurer (Tiu adds the clerk of court) in the amount fixed by the court or recommended by the prosecutor. On submission of the certificate of deposit and a written undertaking showing compliance with Sec. 2, the accused is discharged. The money is applied to fine and costs, and the excess returned.`,
			plain: `Pay cash to the proper collecting officer, not to the judge.`,
			effect: `A judge who personally receives a cash bond commits gross misconduct (Lachica v. Tormis, 2005, in Tiu).`,
			hypo: `A judge accepts ₱20,000 cash bail at her chambers on a Saturday and releases the accused. The release order is irregular and the judge is administratively liable.`
		},
		{
			n: '15',
			title: 'Recognizance',
			text: `"Whenever allowed by law or these Rules, the court may release a person in custody to his own recognizance or that of a responsible person."`,
			plain: `Release on a promise — his own or that of a responsible person — only when a law or rule allows it.`,
			exceptions: `Allowed: RA 6036 (ordinances, light felonies, offenses not exceeding six months and/or ₱2,000, if unable to post bail, with exceptions); Sec. 16 (served the minimum); Sec. 24 and PD 968 (probation applicants unable to post bail); youthful offenders; summary procedure (release on bail or recognizance of a responsible citizen); RA 10389 (indigents, for offenses not punishable by death, RP or life).`,
			cases: `RA 10389 (Recognizance Act of 2012): a matter of right for indigent accused of offenses not punishable by death, RP or life, before or after conviction by first-level courts and before conviction by the RTC, upon compliance with requirements (sworn declaration of indigency, social welfare certification, arraignment, notice to the sanggunian, hearing).`,
			hypo: `A jobless father charged with qualified theft (not punishable by RP), arraigned, with a DSWD certificate of indigency, applies under RA 10389. He may be released to a qualified custodian.`,
			trap: `Under RA 10389, the accused must already be arraigned, and the custodian must not be a relative within the fourth degree.`
		},
		{
			n: '16',
			title: 'Bail, when not required; reduced bail or recognizance',
			text: `No bail shall be required when the law or the Rules so provide. A person in custody for a period equal to or more than the possible maximum imprisonment for the offense charged "shall be released immediately," without prejudice to the trial or appeal; if the maximum penalty is destierro, he shall be released after thirty days of preventive imprisonment. A person in custody for a period equal to or more than the minimum of the principal penalty prescribed, without application of the Indeterminate Sentence Law or any modifying circumstance, shall be released on reduced bail or on his own recognizance, at the court's discretion.`,
			plain: `Served the maximum? Release, no bail. Destierro? Release after 30 days. Served the minimum? Reduced bail or recognizance.`,
			when: `Destierro: after 30 days of preventive imprisonment.`,
			effect: `A.M. No. 12-11-2-SC, Sec. 5, and RA 10389, Sec. 5(b): release on recognizance after service of the minimum (mandatory under RA 10389 for qualified accused).`,
			hypo: `An accused charged with less serious physical injuries (arresto mayor, up to 6 months) has been detained for 7 months. He must be released immediately without bail.`,
			trap: `"Minimum" here is the minimum of the prescribed principal penalty without ISLAW or modifying circumstances.`
		},
		{
			n: '17',
			title: 'Bail, where filed',
			text: `(a) Bail in the amount fixed may be filed with the court where the case is pending, or, if the judge is absent or unavailable, with any RTC, MeTC, MTC or MCTC judge in the province, city or municipality. If the accused is arrested elsewhere, bail may also be filed with any RTC of the place of arrest, or if no RTC judge is available, any first-level judge there. (b) Where bail is discretionary, or the accused seeks release on recognizance, the application "may only be filed in the court where the case is pending, whether on preliminary investigation, trial, or on appeal." (c) Any person in custody not yet charged in court may apply for bail with any court in the province, city or municipality where he is held.`,
			plain: `Matter of right: the court of the case, or (if unavailable or arrest elsewhere) other judges. Discretionary or recognizance: only the court of the case. Not yet charged: any court where held.`,
			who: `Court where the case is pending; other judges as allowed.`,
			effect: `The accepting judge forwards the bail and release order to the court where the case is pending, which may require a different bail for good reason (Sec. 19). Failure to forward violates the Rules (Savella v. Ines, in Tiu).`,
			hypo: `X, charged with murder in Cebu, is arrested in Davao. He may not apply for bail in a Davao RTC: bail in a murder case is discretionary, so only the Cebu court may hear it.`,
			trap: `Sec. 17(a)'s alternatives apply only where bail is a matter of right.`
		},
		{
			n: '18',
			title: 'Notice of application to prosecutor',
			text: `In an application for bail under Sec. 8, "the court must give reasonable notice of the hearing to the prosecutor or require him to submit his recommendation."`,
			plain: `The prosecutor must be notified or asked for a recommendation.`,
			effect: `Granting bail without notice to the prosecutor denies the State due process; the judge may be administratively liable.`,
			trap: `Tiu (and the cases) say notice and hearing are required whether bail is a right or discretionary — though, in practice, bail as a matter of right follows the recommended amount.`
		},
		{
			n: '19',
			title: 'Release on bail',
			text: `The accused must be discharged upon approval of the bail by the judge with whom it was filed under Sec. 17. If bail is filed with a court other than where the case is pending, the accepting judge forwards it with the release order and supporting papers to that court, which may for good reason require a different bail.`,
			plain: `Approval → immediate release; papers forwarded to the trial court.`
		},
		{
			n: '20',
			title: 'Increase or reduction of bail',
			text: `After admission to bail, the court may, upon good cause, increase or reduce the amount; if increased, the accused may be committed to custody if he does not give the increased bail within a reasonable period. An accused released without bail upon filing of the complaint or information may, whenever a strong showing of guilt appears, be required to give bail or be committed.`,
			plain: `The amount can go up or down for good cause.`,
			effect: `Failure to post increased bail within a reasonable time leads to commitment.`,
			hypo: `Midway through trial, evidence shows the accused has booked a one-way flight abroad. The court may increase bail (and issue a hold-departure order).`
		},
		{
			n: '21',
			title: 'Forfeiture of bail',
			text: `When the accused's presence is required, the bondsmen are notified to produce him. If he fails to appear, the bail is declared forfeited and the bondsmen are given thirty days to (a) produce the body of their principal or give the reason for his non-production, and (b) explain why the accused did not appear when first required. Failing these, judgment is rendered against the bondsmen, jointly and severally, for the amount of the bail; the court shall not reduce or mitigate their liability "unless the accused has been surrendered or is acquitted."`,
			plain: `No-show → forfeiture order → 30 days for the bondsman to produce the accused and explain → otherwise, judgment on the bond.`,
			who: `Court; bondsmen; accused.`,
			when: `30 days from the order of forfeiture.`,
			exceptions: `Mitigation only if the accused is surrendered or acquitted.`,
			effect: `The forfeiture order is interlocutory; the judgment on the bond is separate (Mendoza v. Alarma, in Tiu). The court may also issue a bench warrant.`,
			hypo: `Accused misses the hearing. The court declares the bail forfeited on March 1. The surety produces him on March 25 with a medical certificate explaining his absence. No judgment on the bond; the court may lift the forfeiture.`,
			trap: `Two orders: the order of forfeiture (show cause) and the judgment against the bondsmen. Judgment cannot be entered without the 30-day opportunity.`
		},
		{
			n: '22',
			title: 'Cancellation of bail',
			text: `Upon application of the bondsmen, with due notice to the prosecutor, bail may be cancelled upon surrender of the accused or proof of his death. Bail is deemed automatically cancelled upon acquittal, dismissal of the case, or execution of the judgment of conviction. In all instances, cancellation is without prejudice to any liability on the bond.`,
			plain: `Automatic: acquittal, dismissal, execution of judgment. On the bondsman's application: surrender or death of the accused.`,
			effect: `Liability already incurred on the bond (e.g., after forfeiture) survives cancellation.`,
			hypo: `The accused dies while on bail. The bondsman applies for cancellation with proof of death and notice to the prosecutor.`
		},
		{
			n: '23',
			title: 'Arrest of accused out on bail',
			text: `For the purpose of surrendering the accused, the bondsmen may arrest him or, upon written authority endorsed on a certified copy of the undertaking, cause him to be arrested by a police officer or any other person of suitable age and discretion. An accused on bail may be re-arrested without a warrant if he attempts to depart from the Philippines without the court's permission.`,
			plain: `The bondsman is the accused's "jailer" — he may arrest him to surrender him. Leaving the country without permission = warrantless re-arrest.`,
			cases: `<i>U.S. v. Addison</i> (in Tiu): once the bail obligation is assumed, the bondsman becomes the jailer of the accused.`,
			hypo: `The surety learns the accused plans to skip town; it arrests him with a police officer bearing its written authority and surrenders him to the court. Valid.`
		},
		{
			n: '24',
			title: 'No bail after final judgment; exception',
			text: `"No bail shall be allowed after the judgment of conviction has become final." If before finality the accused applies for probation, he may be allowed temporary liberty under his bail; if none was filed or he cannot file one, he may be released on recognizance to a responsible member of the community. "In no case shall bail be allowed after the accused has commenced to serve sentence."`,
			plain: `Final conviction or service of sentence = no bail — except probation applicants before finality.`,
			exceptions: `Probation (PD 968, Sec. 7; Sec. 24).`,
			hypo: `A convict whose judgment became final last month asks for bail pending a petition for habeas corpus. Denied — no bail after final judgment.`
		},
		{
			n: '25',
			title: 'Court supervision of detainees',
			text: `The court supervises all persons in custody to eliminate unnecessary detention. Executive judges of RTCs conduct monthly personal inspections of jails, segregate sexes and minors, ensure private conference with counsel, and report monthly to the Court Administrator the total number of detainees, the names of those held for more than thirty days, the duration, the crime, the status and cause of detention.`,
			plain: `Judges inspect jails monthly and report detainees held more than 30 days.`
		},
		{
			n: '26',
			title: 'Bail not a bar to objections on illegal arrest, lack of or irregular preliminary investigation',
			text: `"An application for or admission to bail shall not bar the accused from challenging the validity of his arrest or the legality of the warrant issued therefor, or from assailing the regularity or questioning the absence of a preliminary investigation of the charge against him, provided that he raises them before entering his plea. The court shall resolve the matter as early as practicable but not later than the start of the trial of the case."`,
			plain: `Posting bail does not waive objections to the arrest, the warrant, or the preliminary investigation — if raised before plea.`,
			when: `Raise before plea; court resolves no later than the start of trial.`,
			effect: `Not raised before plea: waived.`,
			cases: `Overturns the older rule that posting bail waives objections to the arrest.`,
			hypo: `An accused illegally arrested posts bail, then before arraignment moves to quash for lack of jurisdiction over his person. The motion is timely.`,
			trap: `The protection is conditioned on raising the objection before plea.`
		}
	],
	reqs: [
		{
			name: 'Custody of the law',
			source: 'Rule 114, Sec. 1; Paderanga v. CA (1995); Serapio v. Sandiganbayan (2003)',
			what: 'Arrest or voluntary surrender (actual or constructive).',
			who: 'The applicant.',
			when: 'Before the application is acted on.',
			missing: 'Application is premature and must be denied.',
			defect: 'Curable',
			defectNote: 'Cured by surrender; the accused may re-apply once in custody. Arraignment is not a prerequisite (Serapio).'
		},
		{
			name: 'Hearing where bail is discretionary (Secs. 7–8, 18)',
			source: 'Rule 114, Secs. 7, 8, 18; Serapio; Domingo v. Pagayatan; A.M. No. 12-11-2-SC; 2017 Revised Guidelines',
			what: 'Notice to the prosecutor; summary hearing; prosecution\'s evidence; order summarizing the evidence and stating the conclusion.',
			who: 'Court; prosecution bears the burden.',
			when: 'After arraignment and pre-trial (2017 Guidelines) for petitions filed after the information; resolve within 30 days (20 for drugs).',
			form: 'Written order with summary of evidence and conclusion.',
			missing: 'An order granting or denying bail without hearing or without the summary is issued with grave abuse; the judge may be sanctioned.',
			defect: 'Not waivable',
			defectNote: 'The hearing protects both the State and the accused; the prosecution\'s non-objection does not dispense with it.'
		},
		{
			name: 'Property bond annotation (Sec. 11)',
			source: 'Rule 114, Sec. 11',
			what: 'Annotation of the lien on the title (or registration book) and tax declaration; submission of compliance.',
			who: 'Accused.',
			when: 'Within 10 days after approval.',
			where: 'Register of Deeds and assessor of the place where the land lies; compliance to the court.',
			missing: 'Cancellation of the bond and re-arrest.',
			defect: 'Curable',
			defectNote: 'Late annotation before cancellation may be accepted at the court\'s discretion; otherwise the accused posts other bail.'
		},
		{
			name: 'Bondsmen\'s compliance after forfeiture (Sec. 21)',
			source: 'Rule 114, Sec. 21',
			what: '(a) Produce the accused or give the reason for non-production; (b) explain the original non-appearance.',
			who: 'Bondsmen.',
			when: 'Within 30 days from the order of forfeiture.',
			missing: 'Judgment against the bondsmen, jointly and severally, for the full amount; no mitigation unless the accused is surrendered or acquitted.',
			defect: 'Curable',
			defectNote: 'Producing the accused within the period (or before judgment) avoids judgment on the bond.'
		},
		{
			name: 'Release on recognizance under RA 10389',
			source: 'RA 10389, Secs. 5–7',
			what: 'Sworn declaration of indigency; social welfare certification; arraignment; notice to the sanggunian; documentation; hearing with notice to the prosecutor.',
			who: 'Indigent accused; qualified custodian; court.',
			when: 'Before or after conviction by first-level courts; before conviction by the RTC; after arraignment.',
			missing: 'No release on recognizance; disqualified if any Sec. 7 circumstance exists.',
			defect: 'Curable',
			defectNote: 'Missing documents may be supplied; disqualifications cannot be cured.'
		}
	],
	enums: [
		{
			id: 'E114.1',
			name: 'Forms of bail',
			source: 'Rule 114, Sec. 1 (with Secs. 10–15)',
			kind: 'rule',
			memorize: true,
			lead: 'Bail may be given in the form of',
			items: [
				{ t: 'Corporate surety', d: 'Bond by a licensed surety company, subscribed jointly by the accused and an authorized officer (Sec. 10).', s: 'corporate surety' },
				{ t: 'Property bond', d: 'Lien on real property; annotate within 10 days of approval (Secs. 11–13).', s: 'property bond' },
				{ t: 'Cash deposit', d: 'With the collector of internal revenue or provincial, city or municipal treasurer; applied to fines and costs (Sec. 14).', s: 'cash deposit' },
				{ t: 'Recognizance', d: 'Release on one\'s own or a responsible person\'s undertaking, when allowed by law or the Rules (Sec. 15).', s: 'recognizance' }
			],
			memory: '<b>S-P-C-R</b>: Surety · Property · Cash · Recognizance.',
			question: 'What are the forms of bail? Explain each briefly.'
		},
		{
			id: 'E114.2',
			name: 'Conditions of every bail',
			source: 'Rule 114, Sec. 2',
			kind: 'rule',
			memorize: true,
			lead: 'All kinds of bail are subject to the conditions that',
			items: [
				{ t: 'The undertaking is effective upon approval and remains in force until promulgation of the RTC judgment', d: 'Unless cancelled; whether the case was filed in or appealed to the RTC.', s: 'effective until promulgation of the RTC judgment' },
				{ t: 'The accused appears whenever required by the court or the Rules', d: 'Bail guarantees appearance; failure to appear when required is ground for forfeiture (Sec. 21).', s: 'appearance whenever required' },
				{ t: 'Unjustified non-appearance at trial despite notice waives his right to be present; trial may proceed in absentia', d: 'Mirrors Const., Art. III, Sec. 14(2): after arraignment, due notice and an unjustified absence, the trial goes on without him.', s: 'non-appearance = waiver; trial in absentia' },
				{ t: 'The bondsman surrenders the accused for execution of the final judgment', d: 'The bondsman\'s undertaking runs through judgment: he must produce the accused when the sentence is to be executed.', s: 'bondsman surrenders for execution' }
			],
			question: 'What are the conditions of bail?'
		},
		{
			id: 'E114.3',
			name: 'Bail-negating circumstances (penalty imposed exceeds six years)',
			source: 'Rule 114, Sec. 5, par. 3',
			kind: 'rule',
			memorize: true,
			lead: 'If the penalty imposed by the RTC exceeds six years, bail shall be denied or cancelled upon a showing',
			items: [
				{ t: 'That he is a recidivist, quasi-recidivist or habitual delinquent, or committed the crime aggravated by reiteration', d: 'Repeat offenders: the record shows he is likely to offend again.', s: 'repeat offender' },
				{ t: 'That he previously escaped, evaded sentence, or violated bail conditions without justification', d: 'A track record of non-compliance with the court\'s orders.', s: 'previous escape, evasion or bail violation' },
				{ t: 'That he committed the offense while under probation, parole or conditional pardon', d: 'He offended while already enjoying a conditional grant of liberty.', s: 'offense while on probation, parole or conditional pardon' },
				{ t: 'That the circumstances indicate probability of flight', d: 'Judged from the facts of the case, such as earlier attempts to leave.', s: 'flight risk' },
				{ t: 'That there is undue risk he may commit another crime during the appeal', d: 'As with every item on this list, the prosecution must show it, with notice to the accused.', s: 'risk of another crime' }
			],
			exceptions: '"Or other similar circumstances." Even if none is present, bail remains discretionary (Leviste v. CA, 2010).',
			memory: '<b>R-E-P-F-C</b>: Repeat · Escape · Probation/parole · Flight · Crime again.',
			question: 'After conviction by the RTC imposing imprisonment exceeding six years, when must bail be denied?'
		},
		{
			id: 'E114.4',
			name: 'Factors in fixing the amount of bail',
			source: 'Rule 114, Sec. 9; A.M. No. 12-11-2-SC, Sec. 1',
			kind: 'rule',
			lead: 'The judge considers primarily, but not exclusively',
			items: [
				{ t: 'Financial ability of the accused', d: 'Bail must be within his means; excessive bail is prohibited (Sec. 9, last par.; Const., Art. III, Sec. 13).', s: 'financial ability' },
				{ t: 'Nature and circumstances of the offense', d: 'Graver and more violent offenses justify a higher amount.', s: 'nature and circumstances of the offense' },
				{ t: 'Penalty for the offense charged', d: 'The heavier the possible penalty, the greater the temptation to flee.', s: 'penalty' },
				{ t: 'Character and reputation of the accused', d: 'Good standing in the community suggests he will appear.', s: 'character and reputation' },
				{ t: 'Age and health of the accused', d: 'Advanced age or poor health lowers the risk of flight.', s: 'age and health' },
				{ t: 'Weight of the evidence against him', d: 'Strong evidence raises the incentive to flee; for offenses punishable by reclusion perpetua or life imprisonment, strong evidence of guilt means no bail at all (Sec. 7).', s: 'weight of evidence' },
				{ t: 'Probability of appearing at trial', d: 'The principal consideration (Villaseñor v. Abaño).', s: 'probability of appearance' },
				{ t: 'Forfeiture of other bail', d: 'A history of forfeited bonds shows he has failed to appear before.', s: 'forfeiture of other bail' },
				{ t: 'That he was a fugitive when arrested', d: 'Direct evidence of flight risk.', s: 'fugitive when arrested' },
				{ t: 'Pendency of other cases where he is on bail', d: 'Several pending cases add to the risk that he will not appear in this one.', s: 'other cases on bail' }
			],
			exceptions: 'Excessive bail shall not be required. The DOJ Bail Bond Guide is considered but not controlling.',
			memory: '<b>"FANCY PW-FFP"</b>: Finances · Act (nature) · peNalty · Character · Years and health · Proof weight · Will appear · Forfeitures · Fugitive · Pending cases.',
			question: 'What factors does the court consider in fixing the amount of bail?'
		},
		{
			id: 'E114.5',
			name: 'Availability of bail — the four categories',
			source: 'Rule 114, Secs. 4, 5, 7, 16, 24 — as organized in Tiu, pp. 123–125',
			kind: 'notes',
			memorize: true,
			lead: 'Bail is',
			items: [
				{ t: 'Not required', d: 'Served the maximum (release); destierro (release after 30 days); served the minimum (reduced bail or recognizance); RA 6036 cases.', s: 'not required — served maximum/minimum, destierro, RA 6036' },
				{ t: 'A matter of right', d: 'Before or after conviction by first-level courts; before conviction by the RTC of an offense not punishable by death, RP or life.', s: 'right — MTC (before/after); RTC before conviction, non-RP' },
				{ t: 'A matter of discretion', d: 'Before conviction of an RP/life offense (depends on whether evidence of guilt is strong); after RTC conviction of a non-RP offense, pending appeal (if >6 years, none of the bail-negating circumstances).', s: 'discretion — RP before conviction; after RTC conviction pending appeal' },
				{ t: 'Not allowed', d: 'RP/life offense with strong evidence of guilt; after final judgment or start of service (except probation); after RTC conviction with >6 years imposed and a bail-negating circumstance.', s: 'not allowed — RP with strong evidence; final judgment; >6 years with bail-negating circumstance' }
			],
			question: 'When is bail not required, a matter of right, a matter of discretion, and not allowed?'
		},
		{
			id: 'E114.6',
			name: 'Where bail may be filed',
			source: 'Rule 114, Sec. 17',
			kind: 'rule',
			lead: 'Bail may be filed',
			items: [
				{ t: 'With the court where the case is pending', d: 'The general rule.', s: 'court where the case is pending' },
				{ t: 'If its judge is absent or unavailable, with any RTC or first-level judge in the same province, city or municipality', d: 'Bail as a matter of right only.', s: 'other judges of the same place if the judge is unavailable' },
				{ t: 'If arrested elsewhere, with any RTC of the place of arrest (or, if none available, any first-level judge there)', d: 'Bail as a matter of right only.', s: 'RTC of the place of arrest' },
				{ t: 'If bail is discretionary or recognizance is sought, only with the court where the case is pending', d: 'Whether on preliminary investigation, trial or appeal.', s: 'discretionary bail / recognizance — only the court of the case' },
				{ t: 'If not yet charged, with any court in the province, city or municipality where he is held', d: 'A person in custody who has not yet been charged may apply with any court in the place where he is held (Sec. 17[c]).', s: 'not yet charged — any court where held' }
			],
			question: 'Where may bail be filed?'
		},
		{
			id: 'E114.7',
			name: 'Grounds for cancellation of bail',
			source: 'Rule 114, Sec. 22',
			kind: 'rule',
			lead: 'Bail is cancelled',
			items: [
				{ t: 'Automatically, upon acquittal', d: 'No motion is needed: the bond has served its purpose.', s: 'automatic — acquittal' },
				{ t: 'Automatically, upon dismissal of the case', d: 'Same: with the case dismissed, there is nothing left to appear for.', s: 'automatic — dismissal' },
				{ t: 'Automatically, upon execution of the judgment of conviction', d: 'The accused is now in custody; cancellation is without prejudice to any liability already incurred on the bail.', s: 'automatic — execution of judgment' },
				{ t: 'On the bondsman\'s application, upon surrender of the accused', d: 'With notice to the prosecutor.', s: 'on application — surrender' },
				{ t: 'On the bondsman\'s application, upon proof of the death of the accused', d: 'With notice to the prosecutor.', s: 'on application — death' }
			],
			exceptions: 'Cancellation is without prejudice to liability on the bond. Bail may also be cancelled for breach of conditions (Secs. 5 and 11).',
			question: 'When is bail cancelled? Distinguish automatic cancellation from cancellation on application.'
		},
		{
			id: 'E114.8',
			name: 'Duties of the judge in a bail application',
			source: 'Mabutas v. Perello (2005), as cited in Tiu, p. 127',
			kind: 'case',
			memorize: true,
			ordered: true,
			lead: 'The judge must',
			items: [
				{ t: 'Notify the prosecutor of the hearing, or require his recommendation', d: 'Required even if the prosecutor does not object (Sec. 18).', s: 'notify the prosecutor' },
				{ t: 'Conduct a hearing where bail is discretionary', d: 'Whether or not the prosecutor presents evidence.', s: 'hold a hearing' },
				{ t: 'Decide whether evidence of guilt is strong based on the prosecution\'s summary of evidence', d: 'With a written summary in the order.', s: 'decide on the summary of the prosecution\'s evidence' },
				{ t: 'If evidence of guilt is not strong, discharge the accused upon approval of the bond', d: 'If the evidence of guilt is strong, the petition must be denied.', s: 'discharge on approval of the bond' }
			],
			question: 'What are the duties of the judge when an application for bail is filed?'
		},
		{
			id: 'E114.9',
			name: 'Objections not waived by applying for bail',
			source: 'Rule 114, Sec. 26',
			kind: 'rule',
			lead: 'An application for or admission to bail does not bar the accused from challenging',
			items: [
				{ t: 'The validity of his arrest', d: 'Posting bail no longer waives an illegal arrest — provided he raises it before entering his plea.', s: 'validity of arrest' },
				{ t: 'The legality of the warrant', d: 'E.g., a warrant issued without the judge\'s personal evaluation of the evidence.', s: 'legality of warrant' },
				{ t: 'The regularity or absence of a preliminary investigation', d: 'The court resolves these objections as early as practicable, but not later than the start of trial.', s: 'regularity or absence of PI' }
			],
			exceptions: 'Provided he raises them before entering his plea.',
			question: 'Does applying for bail waive objections to an illegal arrest or to the absence of preliminary investigation?'
		},
		{
			id: 'E114.10',
			name: 'Instances when release on recognizance is allowed',
			source: 'Rule 114, Secs. 15, 16, 24; RA 6036; RA 10389; PD 968; Rule on Summary Procedure — as organized in Tiu, pp. 120–121',
			kind: 'notes',
			lead: 'Release on recognizance is allowed',
			items: [
				{ t: 'Under RA 6036', d: 'Ordinances, light felonies, offenses not higher than six months and/or ₱2,000, when unable to post bail — with exceptions (e.g., in flagrante, confession, prior escape).', s: 'RA 6036 minor offenses' },
				{ t: 'After service of the minimum of the prescribed penalty', d: 'Sec. 16; RA 10389, Sec. 5(b).', s: 'served the minimum' },
				{ t: 'For probation applicants unable to post bail', d: 'PD 968, Sec. 7; Sec. 24.', s: 'probation applicants' },
				{ t: 'For youthful offenders unable to furnish bail', d: 'Under juvenile justice laws.', s: 'youthful offenders' },
				{ t: 'In summary procedure after arrest for failure to appear', d: 'Recognizance of a responsible citizen (not his own).', s: 'summary procedure' },
				{ t: 'For indigent accused under RA 10389', d: 'Offenses not punishable by death, RP or life; requirements and disqualifications apply.', s: 'RA 10389 indigents' }
			],
			question: 'When may an accused be released on recognizance?'
		}
	],
	comparisons: [
		{
			id: 'C114.1',
			title: 'Bail as a matter of right vs. bail as a matter of discretion',
			a: 'Bail as a matter of right',
			b: 'Bail as a matter of discretion',
			meaning: ['The court cannot deny bail; it only fixes the amount.', 'The court decides whether to grant bail.'],
			basis: ['Const., Art. III, Sec. 13; Rule 114, Sec. 4', 'Rule 114, Secs. 5, 7, 8'],
			who: ['Any court under Sec. 17(a), including judges of the place of arrest.', 'Only the court where the case is pending (Sec. 17[b]); appellate court in some cases.'],
			when: ['Before/after conviction by first-level courts; before RTC conviction of non-RP offenses.', 'Before conviction of RP/life offenses; after RTC conviction of non-RP offenses pending appeal.'],
			reqs: ['Custody; notice to prosecutor or recommendation; approval.', 'Custody; notice; mandatory hearing; prosecution\'s burden (RP cases); order with summary of evidence.'],
			time: ['Immediately upon approval.', '2017 Guidelines: summary hearing after arraignment and pre-trial; resolve within 30 days (20 drugs).'],
			exceptions: ['Flight risk does not justify denial — only a higher amount.', 'Even absent bail-negating circumstances, may be denied (Leviste).'],
			effect: ['Denial is correctible by mandamus or certiorari.', 'Denial reviewable for grave abuse (Rule 65) or, pending appeal, by motion in the appeal.'],
			trap: ['Holding a full-blown hearing to decide whether to grant (the only issue is amount).', 'Granting without hearing because the prosecutor did not object.'],
			decisive: 'Whether the court has power to refuse bail: none if a matter of right; yes if discretionary.',
			hypo: 'Two accused before the same RTC: A for homicide, B for murder. A\'s bail is a right — the judge fixes the amount without deciding the strength of the evidence. B\'s bail depends on a hearing where the prosecution must show strong evidence of guilt.'
		},
		{
			id: 'C114.2',
			title: 'Forfeiture vs. cancellation of bail',
			a: 'Forfeiture (Sec. 21)',
			b: 'Cancellation (Sec. 22)',
			meaning: ['Declaration that the bond is lost because the accused failed to appear, followed by judgment on the bond.', 'Termination of the bail undertaking.'],
			basis: ['Rule 114, Sec. 21', 'Rule 114, Sec. 22 (also Secs. 5 and 11)'],
			who: ['Court, after notice to bondsmen; bondsmen given 30 days.', 'Automatic, or on the bondsmen\'s application with notice to the prosecutor.'],
			when: ['Accused fails to appear when required.', 'Acquittal, dismissal, execution of judgment; surrender or death of the accused.'],
			reqs: ['Notice to produce; non-appearance; 30-day show-cause period.', 'The ground; for application, notice to the prosecutor.'],
			time: ['30 days to produce and explain.', '—'],
			exceptions: ['Liability mitigated only if the accused is surrendered or acquitted.', 'Without prejudice to liability already incurred on the bond.'],
			effect: ['Judgment against bondsmen jointly and severally for the amount.', 'Bondsmen released prospectively.'],
			trap: ['Entering judgment on the bond without the 30-day period.', 'Thinking cancellation erases a forfeiture already incurred.'],
			decisive: 'Forfeiture punishes non-appearance; cancellation ends the undertaking because it is no longer needed.',
			hypo: 'The accused skips trial (forfeiture order). Within 30 days, the surety surrenders him: no judgment on the bond, and the surety may then apply for cancellation upon surrender.'
		},
		{
			id: 'C114.3',
			title: 'Bail (bond) vs. recognizance',
			a: 'Bail by bond or cash',
			b: 'Recognizance',
			meaning: ['Security in money or property guaranteeing appearance.', 'Release upon an undertaking of the accused or a responsible person.'],
			basis: ['Rule 114, Secs. 1, 10–14', 'Rule 114, Secs. 15–16, 24; RA 6036; RA 10389; PD 968'],
			who: ['Accused or bondsman.', 'Accused or a responsible person/qualified custodian.'],
			when: ['Whenever bail is a right or granted in discretion.', 'Only when allowed by law or the Rules.'],
			reqs: ['Amount fixed; approval; for property bonds, annotation within 10 days.', 'RA 10389: indigency, social welfare certificate, arraignment, sanggunian notice, hearing.'],
			time: ['Effective until RTC promulgation.', 'Subject to the conditions of the law allowing it.'],
			exceptions: ['—', 'Disqualifications (RA 10389, Sec. 7); summary procedure requires a responsible citizen, not own recognizance.'],
			effect: ['Forfeiture on non-appearance.', 'Arrest on breach (RA 10389, Sec. 11); custodian liable for failure to produce.'],
			trap: ['Assuming recognizance is available whenever the accused is poor (only under the laws allowing it).', 'Forgetting that recognizance under RA 10389 requires arraignment.'],
			decisive: 'Security: money or property vs. a promise backed by a person.',
			hypo: 'An indigent accused of estafa (not RP) before arraignment cannot yet use RA 10389; after arraignment, with the certificate and sanggunian notice, he may be released to a custodian.'
		},
		{
			id: 'C114.4',
			title: 'Bail before conviction in an RP case vs. bail after RTC conviction (penalty above six years)',
			a: 'Before conviction — offense punishable by RP or life',
			b: 'After RTC conviction — imprisonment above six years imposed (non-RP offense)',
			meaning: ['Bail depends on whether evidence of guilt is strong.', 'Bail pending appeal is discretionary; denied if a bail-negating circumstance is shown.'],
			basis: ['Const., Art. III, Sec. 13; Rule 114, Secs. 7–8', 'Rule 114, Sec. 5'],
			who: ['Court where the case is pending; prosecution bears the burden.', 'RTC (if record not transmitted) or appellate court; prosecution shows bail-negating circumstances.'],
			when: ['Any time before conviction, once in custody.', 'After promulgation, pending appeal.'],
			reqs: ['Summary hearing; order with summary of evidence.', 'Notice to the accused; showing of any circumstance in Sec. 5; otherwise discretion.'],
			time: ['30 days from first hearing (2017 Guidelines).', '—'],
			exceptions: ['Enrile (humanitarian considerations).', 'If the conviction made the offense bailable, only the appellate court acts.'],
			effect: ['Strong evidence → no bail at any stage.', 'Bail-negating circumstance → bail denied or cancelled.'],
			trap: ['Putting the burden on the accused.', 'Thinking absence of bail-negating circumstances compels a grant.'],
			decisive: 'Before conviction the question is the strength of the evidence; after conviction the presumption of innocence is gone and the question is risk.',
			hypo: 'An accused charged with murder is granted bail because evidence of guilt was not strong; he is convicted of homicide and sentenced to 14 years. His original bail ends at promulgation; for bail pending appeal the CA must consider Sec. 5 risks, and may deny bail even if none is shown.'
		}
	],
	cases: [
		{
			id: 'enrile',
			name: 'Enrile v. Sandiganbayan',
			cite: 'G.R. No. 213847, August 18, 2015 (En Banc) — citation from general knowledge; Tiu gives the name and year',
			from: 'Tiu',
			facts: 'A senator in his nineties, charged with plunder (punishable by reclusion perpetua), voluntarily surrendered and moved to fix bail, citing his age, frail health and lack of flight risk. The Sandiganbayan denied the motion.',
			issue: 'May an accused charged with an offense punishable by reclusion perpetua be granted bail in view of his age and health?',
			ruling: 'Bail was granted.',
			doctrine: 'The purpose of bail is to guarantee appearance; it is not to prevent the commission of other crimes. The amount should be high enough to assure presence but no higher. The Court considered the accused\'s age, health and the improbability of flight. Tiu also cites the case for the point that absence of bail-negating circumstances does not automatically result in a grant.',
			reasoning: 'Humanitarian considerations and the accused\'s character and lack of flight risk; detention would endanger his health.',
			rule: 'Const., Art. III, Sec. 13; Rule 114, Secs. 7–9.',
			args: 'The prosecution argued that bail could be granted only after a hearing finding that evidence of guilt was not strong; the majority granted bail on other considerations — a point criticized by the dissent.',
			hypo: 'A 25-year-old healthy accused charged with plunder invokes Enrile. The ruling is tied to its peculiar facts; he must still show that evidence of guilt is not strong.',
			examQ: 'May bail be granted to an accused charged with an offense punishable by reclusion perpetua without a finding that evidence of guilt is not strong? Discuss Enrile.',
			verify: 'Facts and holding stated from general knowledge of the case; Tiu cites it for the purpose of bail and the amount.'
		},
		{
			id: 'leviste',
			name: 'Leviste v. Court of Appeals',
			cite: '2010 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused, charged with murder and convicted of homicide with a penalty exceeding six years, applied for bail pending appeal, arguing that none of the Sec. 5 circumstances was present.',
			issue: 'Is bail pending appeal mandatory when none of the bail-negating circumstances is present?',
			ruling: 'No. The CA\'s denial was upheld.',
			doctrine: 'Sec. 5, par. 3 covers two scenarios: if no bail-negating circumstance is present, bail is discretionary; if one is present and proved, bail must be denied. Discretion includes an initial determination that the appeal raises a substantial question and consideration of the applicant\'s record and character.',
			reasoning: 'After conviction, the presumption of innocence no longer supports bail as a right.',
			rule: 'Rule 114, Sec. 5.',
			hypo: 'An accused with a clean record convicted of homicide asks for bail pending a frivolous appeal; the CA may deny it.',
			examQ: 'After conviction by the RTC imposing a penalty exceeding six years, is bail automatic if none of the Sec. 5 circumstances is present?',
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'olalia',
			name: 'Government of Hong Kong SAR v. Olalia',
			cite: 'G.R. No. 153675, April 19, 2007',
			from: 'Tiu',
			facts: 'A prospective extraditee applied for bail during extradition proceedings.',
			issue: 'Is bail available in extradition proceedings?',
			ruling: 'Yes, under conditions.',
			doctrine: 'Extradition is not a criminal proceeding but involves deprivation of liberty; in light of international human-rights obligations, bail may be granted. (Tiu summarizes the reasoning; the Court required clear and convincing evidence that the extraditee is not a flight risk — verify.)',
			reasoning: 'The State\'s power to deprive liberty is not limited to criminal proceedings; modern international law emphasizes individual rights.',
			rule: 'Const., Art. III, Sec. 13 (by extension); Rule 114.',
			hypo: 'A foreign national facing extradition petitions for bail; he must show he is not a flight risk.',
			examQ: 'Is bail available in extradition proceedings?',
			verify: 'The standard of proof required of the extraditee is not stated in Tiu.'
		},
		{
			id: 'comendador',
			name: 'Comendador v. de Villa',
			cite: 'G.R. No. 93177, August 2, 1991',
			from: 'Tiu',
			facts: 'Military officers charged before a court-martial for their involvement in a coup attempt sought bail.',
			issue: 'Is the right to bail available in the military?',
			ruling: 'No.',
			doctrine: 'The right to bail has traditionally not been recognized in the military, as an exception to the Bill of Rights, given the military\'s unique structure and national-security considerations; this does not violate equal protection.',
			reasoning: 'Soldiers are allowed fiduciary use of firearms; release of mutinous officers is a dangerous precedent; equal protection applies only to those similarly situated.',
			rule: 'Const., Art. III, Sec. 13.',
			hypo: 'A soldier tried by court-martial for mutiny invokes the right to bail; denied.',
			examQ: 'Are military personnel facing court-martial entitled to bail?'
		},
		{
			id: 'serapio',
			name: 'Serapio v. Sandiganbayan',
			cite: '2003 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'The accused, charged with plunder, petitioned for bail before arraignment; the prosecution did not object to bail.',
			issue: 'Must the accused be arraigned before his petition for bail is heard? Is a hearing required when the prosecution does not object?',
			ruling: 'Arraignment is not a prerequisite; a hearing is mandatory despite the prosecution\'s non-objection.',
			doctrine: 'A person may petition for bail as soon as he is deprived of liberty; the court must still hold a hearing where bail is discretionary, even if the prosecution does not object or chooses only to comment.',
			reasoning: 'The judge must determine for himself whether evidence of guilt is strong.',
			rule: 'Rule 114, Secs. 7–8, 18.',
			hypo: 'Before arraignment, a murder accused petitions for bail; the court sets a hearing and requires the prosecution to present evidence.',
			examQ: 'Is arraignment necessary before a bail hearing? Is a hearing required if the prosecution does not object? (Note: the 2017 Revised Guidelines now schedule the summary hearing of a petition filed after the information "after arraignment and pre-trial.")',
			verify: 'G.R. number not in Tiu.'
		},
		{
			id: 'maguddatu',
			name: 'Maguddatu v. Court of Appeals',
			cite: 'Tiu gives no citation — verify',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine.',
			issue: 'Does bail posted during trial remain effective during appeal?',
			ruling: 'No; it remains in force only until promulgation of the RTC judgment.',
			doctrine: 'Under the 2000 Rules, bail is effective until promulgation of the RTC judgment (a departure from the old rule — until full determination). To continue on the same bail during appeal, the bondsman must consent.',
			reasoning: 'Rule 114, Sec. 2(a) and Sec. 5.',
			rule: 'Rule 114, Secs. 2(a), 5.',
			hypo: 'A convicted accused who appeals without applying for bail pending appeal may be committed.',
			examQ: 'Is the bail posted during trial effective during the appeal?',
			verify: 'Citation not in Tiu.'
		},
		{
			id: 'manotoc',
			name: 'Manotoc, Jr. v. Court of Appeals',
			cite: '1986 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'An accused out on bail sought permission to travel abroad.',
			issue: 'Does a person admitted to bail have the right to leave the country?',
			ruling: 'No.',
			doctrine: 'A court may prevent a person on bail from leaving the country; the bond is intended to make him available whenever needed.',
			reasoning: 'Leaving the country would defeat the court\'s control over the accused.',
			rule: 'Rule 114, Secs. 2 and 23.',
			hypo: 'An accused on bail books a vacation abroad without court permission; he may be re-arrested without a warrant at the airport.',
			examQ: 'May an accused out on bail travel abroad?',
			verify: 'Citation not in Tiu.'
		}
	],
	deadlines: [
		{ ref: 'Rule 114, Sec. 11', act: 'Annotate the property-bond lien and submit compliance', who: 'Accused', period: '10 days', start: 'Approval of the bond', exceptions: '—', effect: 'Cancellation of the bond; re-arrest and detention', kind: 'procedural' },
		{ ref: 'Rule 114, Sec. 16', act: 'Release of accused whose maximum penalty is destierro', who: 'Court / custodian', period: '30 days of preventive imprisonment', start: 'Detention', exceptions: '—', effect: 'Release without bail', kind: 'custodial' },
		{ ref: 'Rule 114, Sec. 21', act: 'Produce the accused and explain his non-appearance', who: 'Bondsmen', period: '30 days', start: 'Order of forfeiture', exceptions: 'Liability mitigated only if accused surrendered or acquitted', effect: 'Judgment against bondsmen, jointly and severally, for the amount of the bail', kind: 'procedural' },
		{ ref: 'Rule 114, Sec. 2(a)', act: 'Life of the bail', who: '—', period: 'Until promulgation of the RTC judgment', start: 'Approval', exceptions: 'Continues on appeal only with bail pending appeal and the bondsman\'s consent', effect: 'Bail no longer covers the accused', kind: 'procedural' },
		{ ref: 'Rule 114, Sec. 5', act: 'Apply for bail pending appeal with the RTC', who: 'Accused', period: 'Until the original record is transmitted to the appellate court', start: 'Promulgation / notice of appeal', exceptions: 'If conviction made the offense bailable — appellate court only', effect: 'Must apply with the appellate court', kind: 'procedural' },
		{ ref: '2017 Revised Guidelines, III.10', act: 'Hear and resolve a petition for bail', who: 'Court', period: '30 calendar days from the first hearing (20 for drug cases); MR within 10 days', start: 'First hearing (set after arraignment and pre-trial)', exceptions: '—', effect: 'Non-extendible; evidence in chief not suspended meanwhile', kind: 'procedural' },
		{ ref: 'A.M. No. 12-11-2-SC, Sec. 6(d)', act: 'Issue order on bail in RP cases', who: 'Court', period: '48 hours', start: 'After the hearing', exceptions: '—', effect: 'Order must summarize evidence and state conclusion', kind: 'procedural' },
		{ ref: 'RA 10389, Sec. 6', act: 'Sanggunian comment; notice to prosecutor; hearing on recognizance', who: 'Sanggunian; court', period: 'Sanggunian: 10 days; notice: within 24 hours of filing; hearing: not earlier than 24 nor later than 48 hours from the prosecutor\'s receipt of notice', start: 'Notice / filing', exceptions: '—', effect: '—', kind: 'procedural' },
		{ ref: 'Rule 114, Sec. 25', act: 'Report detainees held more than 30 days', who: 'Executive judges', period: 'Monthly', start: '—', exceptions: '—', effect: 'Administrative supervision', kind: 'custodial' }
	],
	traps: [
		{ wrong: 'A fugitive may apply for bail through counsel.', right: 'He must be in custody (arrest or surrender); constructive surrender may suffice in special cases (Paderanga).', example: 'Motion to fix bail by a fugitive — premature.' },
		{ wrong: 'Arraignment must precede a bail hearing.', right: 'Not a prerequisite (Serapio); but the 2017 Guidelines schedule the hearing after arraignment and pre-trial for petitions filed after the information.', example: '—' },
		{ wrong: 'If the prosecution does not object, no bail hearing is needed in an RP case.', right: 'Hearing is mandatory (Serapio; Domingo v. Pagayatan).', example: 'Bail granted on "no objection" — void.' },
		{ wrong: 'The accused must prove that evidence of guilt is weak.', right: 'The prosecution has the burden (Sec. 8).', example: '—' },
		{ wrong: 'Bail posted during trial covers the appeal.', right: 'Only until promulgation of the RTC judgment (Sec. 2[a]).', example: 'Convicted accused must apply for bail pending appeal.' },
		{ wrong: 'No bail-negating circumstance → bail pending appeal must be granted.', right: 'Still discretionary (Leviste).', example: '—' },
		{ wrong: 'Bail may be filed anywhere if the offense is non-bailable as a right.', right: 'Discretionary bail and recognizance: only the court where the case is pending (Sec. 17[b]).', example: 'Murder accused arrested in another province cannot post bail there.' },
		{ wrong: 'Posting bail waives the objection to an illegal arrest.', right: 'Not if raised before plea (Sec. 26).', example: '—' },
		{ wrong: 'Flight risk justifies denial of bail that is a matter of right.', right: 'It justifies a higher amount, not denial (San Miguel v. Maceda).', example: '—' },
		{ wrong: 'A judge may receive cash bail personally.', right: 'Only the collector, treasurer (or clerk of court) may; the judge commits gross misconduct (Lachica v. Tormis).', example: '—' },
		{ wrong: 'Bail may be granted after final conviction.', right: 'Not after finality or after service begins, except probation (Sec. 24).', example: '—' }
	],
	corrections: [
		{ old: 'Bail petitions heard as soon as filed.', fix: 'The 2017 Revised Guidelines set petitions filed after the information for summary hearing after arraignment and pre-trial, resolved within 30 days from the first hearing (20 for drug cases), based solely on the prosecution\'s evidence.', source: 'A.M. No. 15-06-10-SC, III.10 (in Tiu, p. 253)' },
		{ old: '"Capital offense" defined by the death penalty (Sec. 6).', fix: 'RA 9346 (2006) prohibits the imposition of death; non-bailability now turns on reclusion perpetua or life imprisonment with strong evidence of guilt.', source: 'RA 9346; Const., Art. III, Sec. 13' },
		{ old: 'Summary procedure release: bail or recognizance of a responsible citizen (1991 Rule, Sec. 16).', fix: 'The 1991 Rule was replaced by the 2022 Rules on Expedited Procedures; check their arrest and release provisions.', source: 'A.M. No. 08-8-7-SC (2022)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Forms', q: 'What are the forms of bail?', a: 'E114.1: corporate surety, property bond, cash deposit, recognizance (Sec. 1).', keys: 'Sec. 1' },
		{ cat: 'A', level: 2, topic: 'Availability', q: 'When is bail (a) not required, (b) a matter of right, (c) a matter of discretion, and (d) not allowed?', a: 'E114.5.', keys: 'Secs. 4, 5, 7, 16, 24' },
		{ cat: 'A', level: 2, topic: 'Bail-negating', q: 'Enumerate the circumstances that require denial or cancellation of bail after an RTC conviction imposing imprisonment exceeding six years.', a: 'E114.3: repeat offender (recidivism, quasi-recidivism, habitual delinquency, reiteration); previous escape, evasion of sentence or bail violation; offense while on probation, parole or conditional pardon; probability of flight; undue risk of another crime during appeal — or similar circumstances.', keys: 'Sec. 5, par. 3' },
		{ cat: 'A', level: 3, topic: 'Amount', q: 'What factors does the court consider in fixing the amount of bail?', a: 'E114.4 (ten factors of Sec. 9); excessive bail not required; DOJ Bail Bond Guide not controlling.', keys: 'Sec. 9; A.M. No. 12-11-2-SC' },
		{ cat: 'A', level: 3, topic: 'Recognizance', q: 'When may an accused be released on recognizance?', a: 'E114.10: RA 6036; served the minimum (Sec. 16; RA 10389); probation applicants (Sec. 24; PD 968); youthful offenders; summary procedure (responsible citizen); RA 10389 indigents.', keys: 'Sec. 15; RA 10389' },
		{ cat: 'B', level: 3, topic: 'Right vs discretion', q: 'Distinguish bail as a matter of right from bail as a matter of discretion.', a: 'See C114.1.', keys: 'power to refuse; hearing; where filed' },
		{ cat: 'B', level: 3, topic: 'Forfeiture vs cancellation', q: 'Distinguish forfeiture from cancellation of bail.', a: 'See C114.2.', keys: 'non-appearance vs end of undertaking; 30 days' },
		{ cat: 'B', level: 4, topic: 'Before vs after conviction', q: 'Distinguish bail before conviction of an offense punishable by reclusion perpetua from bail pending appeal after an RTC conviction imposing more than six years.', a: 'See C114.4.', keys: 'strength of evidence vs risk; Leviste' },
		{ cat: 'C', level: 1, topic: 'Definition', q: 'Bail may be posted by a person who is not yet in the custody of the law.', tf: false, short: 'False. Bail is security for the release of a person "in custody of the law"; a fugitive must first surrender (Sec. 1; Tiu, p. 116).', keys: 'custody of the law' },
		{ cat: 'C', level: 1, topic: 'Right', q: 'Before conviction by the RTC, an accused charged with homicide is entitled to bail as a matter of right.', tf: true, short: 'True. Homicide (reclusion temporal) is not punishable by death, RP or life (Sec. 4[b]).', keys: 'Sec. 4' },
		{ cat: 'C', level: 2, topic: 'Duration', q: 'Bail posted in the RTC remains effective until the judgment becomes final.', tf: false, short: 'False. It remains in force until promulgation of the RTC judgment (Sec. 2[a]); continued liberty on appeal requires bail pending appeal and the bondsman\'s consent.', keys: 'Sec. 2(a); Maguddatu' },
		{ cat: 'C', level: 2, topic: 'Where filed', q: 'An accused charged with murder in Manila but arrested in Baguio may post bail with any RTC in Baguio.', tf: false, short: 'False. Bail in a murder case is discretionary; the application may only be filed in the court where the case is pending (Sec. 17[b]).', keys: 'Sec. 17(b)' },
		{ cat: 'C', level: 2, topic: 'Cash', q: 'The judge may receive the cash bail personally to avoid delay in the release of the accused.', tf: false, short: 'False. Cash is deposited with the collector of internal revenue or the provincial, city or municipal treasurer (or the clerk of court); a judge who receives it commits gross misconduct (Lachica v. Tormis).', keys: 'Sec. 14; Lachica' },
		{ cat: 'C', level: 3, topic: 'Hearing', q: 'If the prosecution does not object, the court may grant bail to an accused charged with murder without a hearing.', tf: false, short: 'False. A hearing is mandatory where bail is discretionary, regardless of the prosecution\'s stance (Serapio; Domingo v. Pagayatan).', keys: 'mandatory hearing' },
		{ cat: 'C', level: 3, topic: 'Burden', q: 'In a bail hearing for an offense punishable by reclusion perpetua, the accused must prove that the evidence of his guilt is not strong.', tf: false, short: 'False. The prosecution has the burden of showing that evidence of guilt is strong (Sec. 8).', keys: 'Sec. 8' },
		{ cat: 'C', level: 3, topic: 'Prescribed penalty', q: 'Whether an offense is "punishable by reclusion perpetua" for bail purposes depends on the penalty that may actually be imposed after considering mitigating circumstances.', tf: false, short: 'False. The penalty prescribed by law controls, not the imposable penalty (People v. Valdez, 2015, in Tiu; Sec. 6).', keys: 'prescribed penalty' },
		{ cat: 'C', level: 4, topic: 'Discretion', q: 'After conviction by the RTC imposing a penalty of 10 years, the accused must be granted bail pending appeal if the prosecution fails to prove any bail-negating circumstance.', tf: false, short: 'False. Bail remains discretionary; the court may still deny it (Leviste v. CA, 2010).', keys: 'Leviste' },
		{ cat: 'C', level: 4, topic: 'Sec. 26', q: 'By posting bail, the accused waives his right to question the legality of his warrantless arrest.', tf: false, short: 'False. Sec. 26: bail does not bar the challenge, if raised before plea.', keys: 'Sec. 26' },
		{ cat: 'C', level: 5, topic: 'Downgraded conviction', q: 'An accused charged with murder but convicted of homicide may apply for bail pending appeal with the RTC so long as the RTC has not transmitted the record.', tf: false, short: 'False. When the conviction changed the offense from non-bailable to bailable, the application can only be filed with and resolved by the appellate court (Sec. 5, par. 1; Rule 120, Sec. 6).', trap: 'The general rule (RTC acts until it transmits the record) has this exception.', keys: 'Sec. 5; non-bailable to bailable' },
		{
			cat: 'D', level: 4, topic: 'Forfeiture', title: 'Surety produces the accused late',
			facts: 'Accused A, on a corporate surety bond, fails to appear at trial on May 2. The court declares the bond forfeited and gives the surety 30 days. On June 15, the surety files a manifestation that it cannot locate A. The court renders judgment against the surety for the full amount. On July 1, A is arrested; the surety moves to reduce its liability.',
			q: 'Should the motion be granted?',
			issue: 'Whether the court may reduce the bondsman\'s liability after judgment on the bond.',
			alac: {
				answer: 'The court may not reduce or mitigate the liability, because A was neither surrendered by the surety nor acquitted.',
				legalBasis: 'Rule 114, Sec. 21: failing to produce the accused and explain within 30 days, judgment is rendered against the bondsmen jointly and severally; "the court shall not reduce or otherwise mitigate the liability of the bondsmen, unless the accused has been surrendered or is acquitted."',
				application: 'The surety failed within 30 days; A was arrested by the authorities, not surrendered by the surety, and not acquitted.',
				conclusion: 'Deny the motion.'
			},
			missing: 'If the surety itself had caused A\'s arrest and surrender (Sec. 23), "surrendered" could be argued to apply.',
			keys: 'Sec. 21; surrendered or acquitted'
		},
		{
			cat: 'D', level: 4, topic: 'Served minimum', title: 'Detained longer than the minimum',
			facts: 'B is charged with estafa; the prescribed penalty is prision correccional (6 months and 1 day to 6 years). B has been detained for 8 months awaiting trial and cannot afford bail.',
			q: 'What relief is available to B?',
			issue: 'Release of an accused who has been detained for at least the minimum of the prescribed penalty.',
			alac: {
				answer: 'B may be released on reduced bail or on his own recognizance.',
				legalBasis: 'Rule 114, Sec. 16, par. 3: a person in custody for a period equal to or more than the minimum of the principal penalty prescribed, without ISLAW or modifying circumstances, shall be released on reduced bail or on his own recognizance at the court\'s discretion. RA 10389, Sec. 5(b) and A.M. No. 12-11-2-SC, Sec. 5: release on recognizance.',
				application: 'The minimum of prision correccional is 6 months and 1 day; B has served 8 months.',
				conclusion: 'B should be released on reduced bail or recognizance, without prejudice to trial.'
			},
			missing: 'If B had been detained beyond the maximum (6 years), release would be immediate and without bail (Sec. 16, par. 2).',
			keys: 'Sec. 16; RA 10389, Sec. 5(b)'
		},
		{
			cat: 'D', level: 4, topic: 'Where filed', title: 'Arrested in another city on a homicide warrant',
			facts: 'C is charged with homicide before the RTC of Iloilo City. He is arrested in Quezon City on a weekend.',
			q: 'Where may C post bail?',
			issue: 'Where bail as a matter of right may be filed when the accused is arrested outside the place where the case is pending.',
			alac: {
				answer: 'With the Iloilo RTC, or with any RTC of Quezon City (or, if no RTC judge is available, any first-level judge there).',
				legalBasis: 'Rule 114, Sec. 4(b) (homicide bailable as a right before conviction); Sec. 17(a) (if arrested elsewhere, bail may also be filed with any RTC of the place of arrest, or any first-level judge if no RTC judge is available); Sec. 19 (accepting judge forwards papers).',
				application: 'Homicide is not punishable by RP; bail is a matter of right. C was arrested in Quezon City, so its courts may accept bail.',
				conclusion: 'C may post bail in Quezon City; the judge forwards the bail and release order to Iloilo.'
			},
			keys: 'Sec. 17(a); Sec. 19'
		},
		{
			cat: 'E', level: 5, topic: 'Bail hearing', title: 'Bail granted on the parties\' agreement',
			facts: 'D is charged with rape (reclusion perpetua). At the scheduled hearing, the prosecutor manifests that the complainant has executed an affidavit of desistance and that the prosecution "will not oppose" bail. The judge grants bail of ₱200,000 in a one-line order, without receiving evidence.',
			q: 'Is the order valid? What should the judge have done?',
			issue: 'Whether bail in an RP case may be granted without hearing and without summarizing the evidence, on the prosecution\'s non-objection.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 114, Secs. 7–8, 18; Serapio v. Sandiganbayan (2003); Domingo v. Pagayatan (2003); Mabutas v. Perello (2005); A.M. No. 12-11-2-SC, Sec. 6: a hearing is mandatory; the prosecution bears the burden; the order must contain a summary of the evidence and the judge\'s conclusion.',
				application: 'Rape is punishable by reclusion perpetua, so bail is discretionary and depends on whether evidence of guilt is strong. The judge received no evidence and wrote no summary; the affidavit of desistance does not by itself establish that evidence of guilt is weak.',
				conclusion: 'The order is issued with grave abuse of discretion; the judge should have required the prosecution to present its evidence (it may adopt affidavits), examined the witnesses, and issued an order with a summary and conclusion.'
			},
			trap: 'The prosecution\'s non-objection and the complainant\'s desistance tempt students to say a hearing is unnecessary.',
			keys: 'mandatory hearing; Serapio; Mabutas; summary of evidence'
		},
		{
			cat: 'E', level: 5, topic: 'Bail pending appeal', title: 'Convicted, sentenced to 12 years, with a prior bail violation',
			facts: 'E was out on bail during trial for frustrated murder. Once, he missed a hearing without justification and his bond was forfeited, though he later appeared. He is convicted of frustrated homicide and sentenced to an indeterminate penalty with a maximum of 12 years. He files a notice of appeal and asks the RTC (which still has the record) for bail pending appeal.',
			q: 'Should bail be granted?',
			issue: 'Bail pending appeal where the penalty exceeds six years and the accused previously violated his bail conditions.',
			alac: {
				answer: 'No — it must be denied if the prosecution shows the prior violation.',
				legalBasis: 'Rule 114, Sec. 5: upon RTC conviction of an offense not punishable by death, RP or life, bail is discretionary; the RTC may act while it holds the original record; if the penalty imposed exceeds six years, bail shall be denied upon a showing (with notice to the accused) that he "violated the conditions of his bail without valid justification."',
				application: 'Frustrated homicide is not punishable by RP; the RTC still has the record; the penalty exceeds six years; E missed a hearing without justification — a bail violation.',
				conclusion: 'Bail pending appeal must be denied; E\'s original bail ended at promulgation.'
			},
			missing: 'If the prosecution does not raise the prior violation, the court still has discretion to deny (Leviste). If the conviction had changed the offense from non-bailable to bailable (e.g., murder charged), only the CA could act.',
			keys: 'Sec. 5, par. 3(b); Leviste; record not transmitted'
		},
		{
			cat: 'E', level: 5, topic: 'Recognizance', title: 'Indigent accused before arraignment',
			facts: 'F, a jobless father of four, is charged with qualified theft (prescribed penalty: reclusion temporal). Before arraignment, he applies for release on recognizance under RA 10389, attaching a sworn declaration of indigency. His cousin offers to be his custodian.',
			q: 'Should the application be granted?',
			issue: 'Requirements of release on recognizance under RA 10389.',
			alac: {
				answer: 'Not yet.',
				legalBasis: 'RA 10389, Secs. 5–6, 8: recognizance is a matter of right for offenses not punishable by death, RP or life, before conviction by the RTC, upon compliance with requirements, including a social welfare certificate of indigency, prior arraignment, notice to the sanggunian, and a hearing; the custodian must not be a relative within the fourth degree.',
				application: 'Qualified theft punishable by reclusion temporal qualifies (assuming the value does not raise it to RP). But F has not been arraigned, has no social welfare certification, and his cousin (fourth degree) is disqualified as custodian.',
				conclusion: 'Deny for now; F may re-apply after arraignment with the required certification and a qualified custodian.'
			},
			missing: 'Whether the value of the property makes the prescribed penalty reclusion perpetua (then RA 10389 does not apply).',
			keys: 'RA 10389; arraigned; custodian not a relative within the fourth degree'
		},
		{ cat: 'F', level: 3, topic: 'Leviste', q: 'Explain the two scenarios under Sec. 5, par. 3 identified in Leviste v. CA.', a: 'For penalties exceeding six years after RTC conviction: (1) if none of the bail-negating circumstances is present, bail is discretionary; (2) if any is present and proved, bail must be denied. Discretion includes assessing whether the appeal is not frivolous and the applicant\'s character and record.', keys: 'two scenarios; discretion' },
		{ cat: 'F', level: 4, topic: 'Enrile', q: 'What considerations led the Court to grant bail in Enrile v. Sandiganbayan, and why is the ruling treated with caution?', a: 'The accused\'s advanced age, frail health, voluntary surrender and low flight risk, given that bail exists to secure appearance. It is treated with caution because bail was granted in an RP case without a finding that evidence of guilt was not strong, on facts peculiar to the accused.', keys: 'purpose of bail; humanitarian; peculiar facts' },
		{ cat: 'F', level: 3, topic: 'Comendador / Olalia', q: 'Is the right to bail available (a) in military court-martial proceedings, (b) in extradition proceedings?', a: '(a) No — Comendador v. de Villa (1991). (b) Yes, under conditions — Gov\'t of Hong Kong v. Olalia (2007).', keys: 'Comendador; Olalia' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 114', title: 'Rule 114 integrated — from surrender to appeal',
			facts: 'G, charged with murder in Makati, surrenders to the Makati RTC through counsel while confined in a Pasig hospital, and petitions for bail. The prosecution presents two eyewitnesses whose accounts conflict on who fired the shot. The court grants bail of ₱300,000, summarizing the evidence. G posts a property bond but annotates the lien on day 14. Later, G is convicted of homicide and sentenced to 8–14 years. He asks the RTC for bail pending appeal; the RTC has not transmitted the record.',
			q: '(a) Was G in custody when he applied? (b) Was the grant of bail proper? (c) Effect of the late annotation? (d) Which court acts on bail pending appeal?',
			issue: 'Custody, discretionary bail, property bonds and bail pending appeal after a downgraded conviction.',
			alac: {
				answer: '(a) Yes. (b) Yes. (c) The bond could have been cancelled and G re-arrested. (d) Only the Court of Appeals.',
				legalBasis: '(a) Paderanga v. CA: surrender through counsel while hospitalized is submission to the court\'s custody. (b) Secs. 7–8: hearing; prosecution\'s burden; order with summary. (c) Sec. 11: annotation and compliance within 10 days, else cancellation and re-arrest. (d) Sec. 5, par. 1 and Rule 120, Sec. 6: where the conviction changed the offense from non-bailable to bailable, the application can only be filed with and resolved by the appellate court.',
				application: '(a) G communicated his submission through counsel while confined. (b) Conflicting eyewitness accounts justify a finding that evidence of guilt is not strong; the court heard and summarized. (c) Day 14 is late; cancellation was within the court\'s power, though it may accept late compliance. (d) Murder (non-bailable when evidence is strong) became homicide (bailable).',
				conclusion: 'G\'s custody and bail were proper; the late annotation exposed him to cancellation; bail pending appeal must be sought in the CA.'
			},
			keys: 'Paderanga; Secs. 7–8; Sec. 11; Sec. 5; Rule 120, Sec. 6'
		}
	],
	memorize: [
		'Definition of bail (Sec. 1) and four forms',
		'Four conditions of bail (Sec. 2); bail lasts until promulgation of the RTC judgment',
		'Matter of right (Sec. 4) vs. discretion (Secs. 5, 7) vs. not required (Sec. 16) vs. not allowed (Secs. 7, 24)',
		'Five bail-negating circumstances (Sec. 5, par. 3)',
		'Burden on the prosecution; hearing mandatory (Sec. 8; Serapio)',
		'Ten factors in fixing bail (Sec. 9)',
		'Where filed (Sec. 17), including (b) discretionary/recognizance and (c) not yet charged',
		'Forfeiture: 30 days; mitigation only if surrendered or acquitted (Sec. 21)',
		'Cancellation grounds (Sec. 22); Sec. 26 objections preserved if raised before plea'
	],
	flashcards: [
		['Define bail.', 'Security given for the release of a person in custody of the law, furnished by him or a bondsman, to guarantee his appearance before any court as required.'],
		['Forms of bail?', 'Corporate surety, property bond, cash deposit, recognizance.'],
		['Until when is bail effective?', 'Until promulgation of the RTC judgment.'],
		['When is bail a matter of right?', 'Before/after conviction by first-level courts; before RTC conviction of an offense not punishable by death, RP or life.'],
		['Who bears the burden in an RP bail hearing?', 'The prosecution — to show evidence of guilt is strong.'],
		['Is a hearing required if the prosecution does not object?', 'Yes.'],
		['Five bail-negating circumstances?', 'Repeat offender; prior escape/evasion/bail violation; offense on probation/parole/conditional pardon; flight risk; risk of another crime.'],
		['Where must discretionary bail be filed?', 'Only in the court where the case is pending.'],
		['Property bond — annotation period?', '10 days from approval.'],
		['Forfeiture — period for bondsmen?', '30 days to produce and explain.'],
		['Automatic cancellation grounds?', 'Acquittal, dismissal, execution of judgment.'],
		['Detained longer than the maximum?', 'Released immediately without bail.'],
		['Destierro?', 'Release after 30 days of preventive imprisonment.'],
		['Bail after final conviction?', 'Not allowed, except probation applicants before finality.'],
		['Does bail waive objections to illegal arrest?', 'No, if raised before plea (Sec. 26).']
	],
	oral: [
		['"When is bail a matter of right?"', 'Under Sec. 4: before or after conviction by the first-level courts, and before conviction by the RTC of an offense not punishable by death, reclusion perpetua or life imprisonment. The court cannot deny it; it only fixes the amount.'],
		['"Your client is charged with murder. Is he entitled to bail?"', 'Murder is punishable by reclusion perpetua, so bail depends on whether the evidence of guilt is strong. He must petition for bail; the court must hold a summary hearing where the prosecution has the burden; if the evidence is not strong, bail is granted.'],
		['"He was convicted of homicide and sentenced to 12 years. Can he stay out?"', 'His bail ended at promulgation. Bail pending appeal is discretionary; because the penalty exceeds six years it must be denied if a bail-negating circumstance is shown. And because the conviction changed a non-bailable charge to a bailable one, only the appellate court can act on it.'],
		['"The accused skipped a hearing. What happens to the bond?"', 'The court declares the bail forfeited and gives the bondsmen 30 days to produce the accused and explain; otherwise judgment is rendered against them for the full amount, which cannot be reduced unless the accused is surrendered or acquitted.']
	],
	checklist: [
		'I can define bail and state who may apply and when.',
		'I can classify bail as not required, a right, discretionary, or not allowed.',
		'I can state the five bail-negating circumstances and the Leviste rule.',
		'I can describe the bail hearing: burden, notice, summary, periods.',
		'I can list the forms of bail and their requirements.',
		'I can state where bail is filed in each situation.',
		'I can explain forfeiture and cancellation.',
		'I can explain Sec. 26 and RA 10389.'
	],
	sheet: [
		'<b>Bail (Sec. 1):</b> security for release of a person in custody; four forms. Not for civil liability; cash applied to fines/costs.',
		'<b>Conditions (Sec. 2):</b> effective until RTC promulgation; appear when required; absence = waiver, trial in absentia; bondsman surrenders for execution.',
		'<b>Right (Sec. 4):</b> MTC before/after; RTC before conviction of non-RP. <b>Discretion:</b> RP before conviction (strong evidence?); RTC conviction pending appeal (Sec. 5; >6 yrs + red flag = deny).',
		'<b>Hearing (Secs. 7–8, 18):</b> mandatory; prosecution burden; summary in order; 2017 Guidelines: after arraignment/pre-trial, 30 days (20 drugs).',
		'<b>Amount (Sec. 9):</b> ten factors; no excessive bail; order not appealable.',
		'<b>Where (Sec. 17):</b> court of the case; others if right; discretionary/recognizance only court of the case; not yet charged — any court where held.',
		'<b>Forfeiture (Sec. 21):</b> 30 days; no mitigation unless surrendered/acquitted. <b>Cancellation (Sec. 22):</b> automatic (acquittal, dismissal, execution) or on application (surrender, death).',
		'<b>Sec. 16:</b> maximum served → release; destierro → 30 days; minimum served → reduced bail/recognizance. <b>Sec. 24:</b> no bail after finality (except probation). <b>Sec. 26:</b> bail is no waiver if raised before plea.'
	],
	watchFor: `<strong>Watch for: the penalty prescribed, the stage, and the court.</strong>
<ul>
<li>RP/life prescribed? Before or after conviction? Which court convicted (MTC or RTC)?</li>
<li>Penalty imposed above six years? Any bail-negating circumstance? Did the conviction downgrade a non-bailable charge?</li>
<li>Was there a hearing with a summary of evidence? Where was the bail filed?</li>
</ul>`
};
