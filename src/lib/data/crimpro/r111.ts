import { caseLink, ruleLink, type RuleChapter } from './model';

/** Rule 111 — Prosecution of Civil Action. */
export const r111: RuleChapter = {
	id: 'r111',
	n: 111,
	title: 'Prosecution of Civil Action',
	short: 'R111 Civil Action',
	tiu: 'pp. 53–65',
	plain: `A crime usually hurts two parties: the State and the victim. Rule 111 deals with the victim's claim for money (restitution, reparation, indemnification). By default, that claim rides along with the criminal case — filing the criminal case automatically files the civil claim for damages arising from the crime. The victim can opt out by waiving it, reserving it, or filing it first. Some civil claims (for violation of rights, defamation, fraud, physical injuries, police neglect and quasi-delict) never ride along: they are "independent" and can be filed any time. The rule also tells you what happens to the civil claim when the accused is acquitted or dies, and when a civil case must be decided first because it controls the criminal case (prejudicial question).`,
	purpose: `To avoid multiple suits by trying the civil liability arising from the crime together with the criminal case, while protecting the offended party's choice to sue separately and keeping civil claims that arise from other sources independent.`,
	stage: `Runs alongside the whole criminal case — from institution (when the civil action is impliedly instituted) to judgment (which must state the civil liability) and appeal (the offended party may appeal the civil aspect). Prejudicial questions are raised during preliminary investigation or before the prosecution rests.`,
	questions: [
		'Which civil action is deemed instituted with the criminal action, and when is it not?',
		'How, when and by whom is the civil action reserved? When is reservation not allowed?',
		'What happens to a separate civil action once the criminal action is filed? How is it consolidated?',
		'Which civil actions are independent, and what does "independent" mean in practice?',
		'What is the effect on the civil liability of an acquittal, of the extinction of criminal liability, and of the death of the accused?',
		'Does a judgment in a civil action bar the criminal action?',
		'What is a prejudicial question, and how and where is it raised?'
	],
	relations: `Rule 111 explains why the offended party may intervene under ${ruleLink('r110', 'sections', 'Rule 110, Sec. 16')}; why a judgment of conviction must state the civil liability and why an acquittal must say whether the act did not exist (${ruleLink('r120')}, Sec. 2); and why the offended party may appeal the civil aspect even after acquittal. A prejudicial question suspends arraignment (${ruleLink('r116')}, Sec. 11[a]) and can be raised during preliminary investigation (${ruleLink('r112')}).`,
	principles: [
		'<b>Every person criminally liable for a felony is also civilly liable</b> (RPC Art. 100) — unless the offense causes no damage (e.g., espionage, flight to an enemy country, as Tiu notes).',
		'<b>Only the civil liability ex delicto is deemed instituted</b> with the criminal action; civil liability from other sources (law, contract, quasi-delict) is not.',
		'<b>The criminal action takes precedence</b>: once it is filed, the separate civil action ex delicto is suspended (Sec. 2) — except where a prejudicial question requires the civil case to go first (Sec. 6).',
		'<b>Acquittal does not automatically extinguish civil liability</b>: it does only when the judgment finds that the act or omission from which civil liability may arise did not exist.',
		'<b>No double recovery</b> for the same act or omission (Sec. 3; Civil Code Art. 2177).'
	],
	sections: [
		{
			n: '1',
			title: 'Institution of criminal and civil actions',
			text: `(a) "When a criminal action is instituted, the civil action for the recovery of civil liability arising from the offense charged shall be deemed instituted with the criminal action unless the offended party waives the civil action, reserves the right to institute it separately or institutes the civil action prior to the criminal action." The reservation "shall be made before the prosecution starts presenting its evidence and under circumstances affording the offended party a reasonable opportunity to make such reservation." Filing fees: for moral, nominal, temperate or exemplary damages not specified in the complaint or information, the fees are a first lien on the judgment; if specified, they are paid on filing; no filing fees for actual damages except as provided in the Rules. No counterclaim, cross-claim or third-party complaint may be filed by the accused in the criminal case; such causes of action may be litigated separately. (b) The criminal action for violation of BP 22 "shall be deemed to include the corresponding civil action. No reservation to file such civil action separately shall be allowed." Filing fees are paid in full on the amount of the check; a civil action already filed separately and not yet tried may be consolidated with the BP 22 case.`,
			plain: `File the criminal case and the victim's claim for damages from the crime is automatically filed too — unless the victim says "I waive it," "I'll file it separately," or has already filed it. In BP 22 cases, the civil claim always goes with the criminal case.`,
			reqs: `Implied institution: (1) a criminal action instituted; (2) civil liability arising from the offense charged; (3) no waiver, reservation or prior civil action. Reservation: express; before the prosecution presents evidence; with reasonable opportunity.`,
			who: `Offended party (waives, reserves, files separately, pays fees); accused (cannot counterclaim); court (must rule on civil liability).`,
			when: `Reservation: before the prosecution starts presenting evidence. Estafa: if the offended party does not manifest within 15 days after the information is filed that the civil liability will be prosecuted separately, fees under Rule 141, Sec. 21(a) are collected (Tiu, p. 55).`,
			exceptions: `(1) BP 22 — no reservation (Sec. 1[b]), though Tiu notes that waiver or prior institution of the civil action is not prohibited (Lo Bun Tiong v. Balboa). (2) Graft cases in the Sandiganbayan — Tiu lists them as cases where reservation is not allowed. (3) Independent civil actions (Sec. 3) are never deemed instituted.`,
			effect: `The criminal and civil actions merge into one proceeding with the criminal predominating; a conviction must state the civil liability (Hun Hyung Park v. Eun Won Choi, in Tiu). Failure to reserve in time means the civil action ex delicto is tried with the criminal case.`,
			cases: `${caseLink('hun-hyung-park', 'Hun Hyung Park v. Eun Won Choi')}; ${caseLink('casupanan', 'Casupanan v. Laroya (2002)')}; <i>Lo Bun Tiong v. Balboa</i> (in Tiu, p. 57).`,
			hypo: `V is injured in a stabbing. The prosecutor files frustrated homicide. V says nothing about the civil action. V's claim for medical expenses and moral damages is deemed instituted; V may present evidence of damages through a private prosecutor, and the judgment of conviction must award them if proven.`,
			trap: `The accused cannot file a counterclaim in the criminal case, but that does not leave him remediless: he may file a separate civil action (e.g., for quasi-delict against the complainant — Casupanan v. Laroya).`,
			update: `Filing-fee schedules in Rule 141 have been revised since the 2004 version reproduced in Tiu. Check the current schedule before stating amounts.`
		},
		{
			n: '2',
			title: 'When separate civil action is suspended',
			text: `After the criminal action has been commenced, the separate civil action arising therefrom cannot be instituted until final judgment has been entered in the criminal action. If the criminal action is filed after the civil action, the civil action "shall be suspended in whatever stage it may be found before judgment on the merits," until final judgment in the criminal action. Before judgment on the merits in the civil action, it may, on motion of the offended party, be consolidated with the criminal action; the evidence already adduced is deemed automatically reproduced, without prejudice to cross-examination and additional evidence, and the two are tried and decided jointly. During the pendency of the criminal action, the running of the prescriptive period of the civil action that cannot be instituted separately or has been suspended "shall be tolled." "The extinction of the penal action does not carry with it extinction of the civil action. However, the civil action based on delict shall be deemed extinguished if there is a finding in a final judgment in the criminal action that the act or omission from which the civil liability may arise did not exist."`,
			plain: `The criminal case goes first. A reserved civil case waits for final judgment in the criminal case; a civil case filed earlier is frozen — unless the victim moves to merge it into the criminal case. The clock on the civil claim stops while it waits.`,
			reqs: `Suspension: (1) civil action ex delicto (not independent); (2) criminal action filed. Consolidation: (1) separate civil action filed earlier; (2) motion by the offended party; (3) before judgment on the merits in the civil action; (4) in the court trying the criminal action.`,
			who: `Offended party (moves to consolidate); civil court (suspends); criminal court (tries jointly).`,
			when: `Suspension lasts until final judgment in the criminal action. Consolidation: before judgment on the merits in the civil action.`,
			exceptions: `Independent civil actions (Sec. 3) are not suspended and are not subject to consolidation under this section (Tiu, p. 60). A prejudicial question reverses the order (Sec. 6).`,
			effect: `The civil action ex delicto survives an acquittal on reasonable doubt but is extinguished by a final finding that the act or omission did not exist.`,
			cases: `${caseLink('marcia', 'Marcia v. CA (1983)')}; ${caseLink('balerta', 'Balerta v. People (2014)')}; ${caseLink('padilla', 'Padilla v. CA (1984)')}.`,
			hypo: `A files a civil action for sum of money based on estafa against B in January. In March, an estafa information is filed. The civil case, still at pre-trial, is suspended. A may move to consolidate it with the estafa case; the evidence already presented is deemed reproduced.`,
			trap: `It is the <b>civil</b> action that is suspended when a criminal action is filed — not the other way around. The criminal action is suspended only by a prejudicial question.`
		},
		{
			n: '3',
			title: 'When civil action may proceed independently',
			text: `"In the cases provided for in Articles 32, 33, 34 and 2176 of the Civil Code of the Philippines, the independent civil action may be brought by the offended party. It shall proceed independently of the criminal action and shall require only a preponderance of evidence. In no case, however, may the offended party recover damages twice for the same act or omission charged in the criminal action."`,
			plain: `Some civil claims do not come from the crime itself but from other legal sources — violation of rights, defamation, fraud, physical injuries, police failure to help, and quasi-delict. These can be filed and tried on their own, whatever happens in the criminal case.`,
			reqs: `A cause of action under Civil Code Art. 32, 33, 34 or 2176 (Tiu also lists Art. 31).`,
			who: `Offended party.`,
			when: `Any time within the civil prescriptive period; no reservation needed under the 2000 Rules (Tiu, p. 60).`,
			exceptions: `No double recovery (Sec. 3; Art. 2177).`,
			effect: `Independent of the result of the criminal case; preponderance of evidence; not suspended by the criminal action; may be continued against the estate if the accused dies (Sec. 4).`,
			cases: `${caseLink('casupanan', 'Casupanan v. Laroya (2002)')} — the accused in a reckless-imprudence case may file a separate quasi-delict action against the private complainant; no forum shopping.`,
			hypo: `A is charged with reckless imprudence resulting in physical injuries. Without reserving, the victim files a separate action for quasi-delict against A and A's employer. Both proceed; the victim cannot recover twice.`,
			trap: `"Physical injuries" in Art. 33 has been read to mean bodily injuries in the generic sense; and the independent action under Art. 33 for "fraud" covers estafa. But an Art. 33 action is still subject to the no-double-recovery rule. Do not say an independent action must be reserved — under the 2000 Rules it need not be.`,
			verify: `The scope of "physical injuries" in Art. 33 (whether it includes death or reckless imprudence) has varied in jurisprudence; it is not discussed in Tiu.`
		},
		{
			n: '4',
			title: 'Effect of death on civil actions',
			text: `The death of the accused after arraignment and during the pendency of the criminal action extinguishes the civil liability arising from the delict. The independent civil action under Sec. 3, or one later instituted to enforce liability from other sources of obligation, may be continued against the estate or legal representative after proper substitution, or against the estate. The heirs may be substituted without appointment of an executor or administrator; the court may appoint a guardian ad litem for minor heirs. The court shall order the legal representative to appear and be substituted within thirty days from notice. A final judgment in favor of the offended party is enforced as a claim against the estate. If the accused dies before arraignment, the case is dismissed without prejudice to any civil action against the estate.`,
			plain: `If the accused dies while the case is pending, the criminal case and the civil claim from the crime die with him. Civil claims based on something else (contract, quasi-delict, law) can be pursued against his estate.`,
			reqs: `Substitution: notice of death; court order; heirs or legal representative appear within 30 days.`,
			who: `Heirs, executor or administrator, guardian ad litem for minor heirs; offended party.`,
			when: `30 days from notice for substitution.`,
			exceptions: `Death after final judgment: the civil liability already adjudged is enforced against the estate (Tiu, p. 63).`,
			effect: `Before arraignment: dismissal of the criminal case; offended party files a civil action against the estate. After arraignment, before finality: criminal liability and civil liability ex delicto extinguished (RPC Art. 89[1]; People v. Paras, 2014, in Tiu). After finality: civil liability enforced as a money claim against the estate.`,
			cases: `${caseLink('bayotas', 'People v. Bayotas (1994)')}.`,
			hypo: `A, convicted of estafa, dies while his appeal is pending. His criminal liability and civil liability ex delicto are extinguished. If the estafa arose from a loan agreement, the creditor may sue the estate on the contract.`,
			trap: `Students say "death extinguishes all civil liability." It extinguishes only civil liability <b>based solely on the crime</b>, and only if death occurs before final judgment.`
		},
		{
			n: '5',
			title: 'Judgment in civil action not a bar',
			text: `"A final judgment rendered in a civil action absolving the defendant from civil liability is not a bar to a criminal action against the defendant for the same act or omission subject of the civil action."`,
			plain: `Winning the civil case does not protect you from the criminal case.`,
			effect: `The State, not a party to the civil case, may still prosecute. Likewise, extinction of the civil liability (payment, compromise, novation) does not extinguish criminal liability (Civil Code Art. 2034; Metrobank v. Reynaldo, 2010, in Tiu).`,
			cases: `${caseLink('metrobank-reynaldo', 'Metropolitan Bank v. Reynaldo (2010)')}; <i>Cabico v. Dimaculangan</i> (in Tiu, p. 63): a judge cannot dismiss a criminal case because the civil liability has been paid.`,
			hypo: `B is absolved in a civil action for damages because the plaintiff failed to prove the amount of loss. The prosecutor files estafa for the same transaction. The civil judgment is no bar.`,
			trap: `Confusing this with Sec. 2: an <b>acquittal</b> that finds the act did not exist does extinguish the civil action ex delicto; a <b>civil</b> judgment absolving the defendant never bars the criminal action.`
		},
		{
			n: '6',
			title: 'Suspension by reason of prejudicial question',
			text: `"A petition for suspension of the criminal action based upon the pendency of a prejudicial question in a civil action may be filed in the office of the prosecutor or the court conducting the preliminary investigation. When the criminal action has been filed in court for trial, the petition to suspend shall be filed in the same criminal action at any time before the prosecution rests."`,
			plain: `If a civil case already pending will decide whether there is a crime at all, ask the prosecutor (during preliminary investigation) or the criminal court (before the prosecution rests) to put the criminal case on hold.`,
			reqs: `(1) A petition (no motu proprio suspension — Tiu, citing IBP v. Atienza); (2) filed in the proper forum and time; (3) the elements of Sec. 7.`,
			who: `Respondent or accused files; prosecutor or court resolves.`,
			when: `During preliminary investigation, with the prosecutor; after filing in court, any time before the prosecution rests.`,
			exceptions: `Tiu notes that the doctrine may apply to a prior administrative case that is civil in nature (San Miguel Properties v. Perez, 2013 — HLURB specific-performance case).`,
			effect: `The criminal action is suspended, not dismissed (Yap v. Paras, in Tiu, p. 64). A prejudicial question is also a ground to suspend arraignment (Rule 116, Sec. 11[a]).`,
			cases: `${caseLink('pimentel', 'Pimentel v. Pimentel (2010)')}; ${caseLink('san-miguel-properties', 'San Miguel Properties v. Perez (2013)')}.`,
			hypo: `X is charged with bigamy; earlier, X had filed a civil action to declare his first marriage void for lack of a marriage license. X petitions to suspend the bigamy case. Whether a prior void-marriage case is a prejudicial question to bigamy is a recurring exam issue; check the current doctrine on bigamy and the need for a judicial declaration of nullity before remarriage (Family Code Art. 40) before answering.`,
			trap: `The petition is filed in the <b>criminal</b> case, not the civil case — and only up to the time the prosecution rests.`,
			verify: `The bigamy illustration depends on substantive criminal-law doctrine not covered in Tiu's Rule 111 notes.`
		},
		{
			n: '7',
			title: 'Elements of prejudicial question',
			text: `"The elements of a prejudicial question are: (a) the previously instituted civil action involves an issue similar or intimately related to the issue raised in the subsequent criminal action, and (b) the resolution of such issue determines whether or not the criminal action may proceed."`,
			plain: `Two things: the civil case came first and deals with the same issue, and deciding that issue decides whether there is a criminal case at all.`,
			reqs: `(1) Previously instituted civil action; (2) similar or intimately related issue; (3) resolution determines whether the criminal action may proceed. Tiu (p. 64) adds from jurisprudence that jurisdiction to try the civil question must be lodged in another tribunal.`,
			effect: `If the elements are absent, the criminal action proceeds.`,
			cases: `${caseLink('pimentel', 'Pimentel v. Pimentel (2010)')} — the annulment case was filed after the criminal case, and its outcome would not determine guilt for frustrated parricide (the marriage subsisted when the crime was committed).`,
			hypo: `A is charged with estafa for selling land he did not own. Earlier, A had sued to quiet title to the land. If A wins and is declared the owner, there was no misrepresentation of ownership — the civil issue determines whether the estafa case can proceed. Prejudicial question.`,
			trap: `The civil action must be <b>previously</b> instituted. A civil action filed after the criminal case does not qualify (Pimentel).`
		}
	],
	reqs: [
		{
			name: 'Reservation of the civil action (Sec. 1[a])',
			source: 'Rule 111, Sec. 1(a)',
			what: 'An express reservation of the right to institute the civil action ex delicto separately.',
			who: 'The offended party.',
			when: 'Before the prosecution starts presenting its evidence, under circumstances giving a reasonable opportunity.',
			where: 'In the criminal action (or the prosecutor\'s office before filing).',
			form: 'Express manifestation; no particular form.',
			missing: 'The civil action ex delicto is deemed instituted with the criminal action and is tried there.',
			defect: 'Waivable',
			defectNote: 'The right to sue separately is lost by not reserving in time — but only for the civil action ex delicto. Independent civil actions need no reservation. In BP 22 cases reservation is not allowed at all.'
		},
		{
			name: 'Consolidation of a prior civil action (Sec. 2)',
			source: 'Rule 111, Sec. 2',
			what: 'Joint trial and decision of the earlier civil action and the criminal action.',
			who: 'Motion by the offended party; granted by the court trying the criminal action.',
			when: 'Before judgment on the merits in the civil action.',
			where: 'The court trying the criminal action.',
			missing: 'Without consolidation, the civil action stays suspended until final judgment in the criminal action; its prescriptive period is tolled.',
			defect: 'Waivable',
			defectNote: 'Consolidation is a remedy, not a duty. Not moving for it simply leaves the civil action suspended.'
		},
		{
			name: 'Petition to suspend for prejudicial question (Secs. 6–7)',
			source: 'Rule 111, Secs. 6–7; Rule 116, Sec. 11(a)',
			what: 'A petition showing (a) a previously instituted civil action with a similar or intimately related issue, whose (b) resolution determines whether the criminal action may proceed.',
			who: 'Respondent or accused.',
			when: 'During preliminary investigation, or in court any time before the prosecution rests.',
			where: 'The prosecutor\'s office (or the investigating body) or the criminal court — not the civil court.',
			form: 'Petition (written).',
			missing: 'No suspension; the court cannot suspend motu proprio.',
			defect: 'Waivable',
			defectNote: 'Not filing before the prosecution rests forfeits the remedy. It is not jurisdictional: a criminal judgment rendered despite a prejudicial question is not void for that reason.'
		},
		{
			name: 'Substitution of heirs after death of the accused (Sec. 4)',
			source: 'Rule 111, Sec. 4',
			what: 'Appearance and substitution of the legal representative or heirs in the surviving civil action.',
			who: 'Heirs or legal representative; guardian ad litem for minor heirs.',
			when: 'Within 30 days from notice of the court\'s order.',
			where: 'The court where the civil action (independent or based on other sources) is pending.',
			missing: 'The civil action cannot proceed against the estate until substitution; Tiu suggests applying Rule 3, Sec. 16 of the Rules of Civil Procedure.',
			defect: 'Curable',
			defectNote: 'Late substitution can be cured by ordering it; a judgment against a deceased party without substitution may be attacked for lack of due process as to the estate.'
		},
		{
			name: 'Filing fees for damages (Sec. 1)',
			source: 'Rule 111, Sec. 1(a)–(b); Rule 141',
			what: 'Payment of fees for moral, nominal, temperate or exemplary damages specified in the information; for BP 22, fees on the amount of the check.',
			who: 'Offended party.',
			when: 'On filing, if the amount is specified; otherwise the fees are a first lien on the judgment.',
			missing: 'Unspecified damages: lien on the judgment. Specified but unpaid: the court may not award beyond what was paid for — check Rule 141.',
			defect: 'Curable',
			defectNote: 'Payment can be made later or treated as a lien; it does not affect the court\'s jurisdiction over the criminal action.'
		}
	],
	enums: [
		{
			id: 'E111.1',
			name: 'When the civil action ex delicto is not deemed instituted with the criminal action',
			source: 'Rule 111, Sec. 1(a)',
			kind: 'rule',
			memorize: true,
			lead: 'The civil action ex delicto is not deemed instituted with the criminal action when the offended party',
			items: [
				{ t: 'Waives the civil action', d: 'Expressly gives up the claim for civil liability arising from the crime.', s: 'waives it' },
				{ t: 'Reserves the right to institute it separately', d: 'Before the prosecution presents evidence; the separate action then waits for final judgment in the criminal case (Sec. 2).', s: 'reserves it before the prosecution presents evidence' },
				{ t: 'Institutes the civil action prior to the criminal action', d: 'The earlier civil action is suspended once the criminal action is filed, but may be consolidated.', s: 'files it ahead of the criminal action' }
			],
			exceptions: 'BP 22: no reservation (Sec. 1[b]). Independent civil actions are never deemed instituted.',
			memory: '<b>W-R-P</b>: Waive · Reserve · Prior.',
			question: 'When is the civil action for civil liability ex delicto not deemed instituted with the criminal action?'
		},
		{
			id: 'E111.2',
			name: 'Independent civil actions',
			source: 'Rule 111, Sec. 3; Civil Code Arts. 32, 33, 34, 2176 (Tiu also lists Art. 31)',
			kind: 'rule',
			memorize: true,
			lead: 'The independent civil actions under Rule 111, Sec. 3 are those under',
			items: [
				{ t: 'Art. 32 — violation of constitutional rights and liberties', d: 'Against any public officer or private individual who obstructs or impairs the rights listed (speech, religion, due process, rights of the accused, etc.).', s: 'Art. 32 — violation of civil liberties' },
				{ t: 'Art. 33 — defamation, fraud and physical injuries', d: 'A civil action "entirely separate and distinct from the criminal action."', s: 'Art. 33 — defamation, fraud, physical injuries' },
				{ t: 'Art. 34 — refusal or failure of a police officer to render aid', d: 'The officer is primarily liable; the city or municipality subsidiarily.', s: 'Art. 34 — police failure to aid' },
				{ t: 'Art. 2176 — quasi-delict', d: 'Fault or negligence causing damage without a pre-existing contract; Art. 2177 bars double recovery.', s: 'Art. 2176 — quasi-delict' }
			],
			exceptions: 'In no case may the offended party recover damages twice for the same act or omission.',
			memory: '<b>32-33-34-2176</b>: "Rights, Reputation-fraud-injuries, Rescue, Recklessness."',
			tip: 'State that these need no reservation, proceed regardless of the criminal case and need only preponderance of evidence.',
			question: 'What are the independent civil actions under Rule 111? What makes them "independent"?'
		},
		{
			id: 'E111.3',
			name: 'Consequences of the independent character of Arts. 32, 33, 34 and 2176 actions',
			source: 'Tiu, p. 60',
			kind: 'notes',
			lead: 'Because these actions are independent',
			items: [
				{ t: 'They proceed regardless of the result of the criminal action', d: 'An acquittal does not bar them.', s: 'they proceed regardless of the criminal case' },
				{ t: 'Preponderance of evidence suffices', d: 'Not proof beyond reasonable doubt.', s: 'preponderance of evidence' },
				{ t: 'No reservation is needed', d: 'They are not deemed included in the criminal action.', s: 'no reservation needed' },
				{ t: 'Waiver or separate filing of the civil action ex delicto does not extinguish them', d: 'They arise from a different source.', s: 'not lost by waiver of the ex delicto action' },
				{ t: 'The offended party may still intervene in the criminal action', d: 'To protect any remaining civil interest ex delicto, subject to the prosecutor\'s control.', s: 'the offended party may still intervene' },
				{ t: 'Sec. 2 suspension and consolidation do not apply', d: 'They are not suspended by the filing of the criminal action.', s: 'not suspended' }
			],
			question: 'What are the consequences of the independent character of the civil actions under Arts. 32, 33, 34 and 2176?'
		},
		{
			id: 'E111.4',
			name: 'Elements of a prejudicial question',
			source: 'Rule 111, Sec. 7',
			kind: 'rule',
			memorize: true,
			lead: 'Under Rule 111, Sec. 7, the elements of a prejudicial question are',
			items: [
				{ t: 'The previously instituted civil action involves an issue similar or intimately related to the issue in the subsequent criminal action', d: 'The civil action must come first.', s: 'a previously instituted civil action with a similar or intimately related issue' },
				{ t: 'The resolution of that issue determines whether or not the criminal action may proceed', d: 'The civil issue is a logical antecedent of the criminal issue.', s: 'its resolution determines whether the criminal action may proceed' }
			],
			exceptions: 'Tiu adds a jurisprudential requisite: jurisdiction to try the civil question is lodged in another tribunal; and a prior administrative case "civil in nature" may qualify (San Miguel Properties v. Perez).',
			tip: 'Write the two codal elements first, then mention the jurisprudential refinements.',
			question: 'What is a prejudicial question? Give its elements and where and when it is raised.'
		},
		{
			id: 'E111.5',
			name: 'Effects of the death of the accused',
			source: 'Rule 111, Sec. 4; RPC Art. 89(1); Tiu, pp. 62–63',
			kind: 'notes',
			ordered: true,
			lead: 'The effect of the death of the accused depends on when it occurs',
			items: [
				{ t: 'Before arraignment', d: 'The case is dismissed, without prejudice to a civil action against the estate.', s: 'before arraignment — dismissal; civil action against the estate' },
				{ t: 'After arraignment, before final judgment', d: 'Criminal liability and civil liability ex delicto are extinguished; independent civil actions and claims from other sources continue against the estate after substitution.', s: 'pending trial or appeal — criminal and ex delicto civil liability extinguished; other sources survive' },
				{ t: 'After final judgment', d: 'The civil liability adjudged is enforced as a money claim against the estate.', s: 'after finality — civil liability enforced against the estate' }
			],
			question: 'What is the effect of the death of the accused on the criminal and civil liability? Distinguish according to when death occurs.'
		},
		{
			id: 'E111.6',
			name: 'People v. Bayotas guidelines on death pending appeal',
			source: 'People v. Bayotas, G.R. No. 102007, September 2, 1994 (not in Tiu)',
			kind: 'case',
			lead: 'Under Bayotas',
			items: [
				{ t: 'Death pending appeal extinguishes criminal liability and civil liability based solely on the offense', d: 'There is no longer an accused; the civil action ex delicto falls with the criminal action.', s: 'criminal and ex delicto civil liability extinguished' },
				{ t: 'Civil liability may survive if it rests on another source of obligation', d: 'Law, contracts, quasi-contracts, quasi-delicts (Civil Code Art. 1157).', s: 'liability from other sources survives' },
				{ t: 'The surviving claim is pursued by a separate civil action', d: 'Against the executor, administrator or estate, depending on the source.', s: 'pursued by separate civil action' },
				{ t: 'The prescriptive period of the surviving civil action is deemed interrupted while the criminal case was pending', d: 'The offended party does not lose the claim to prescription because he relied on the criminal case.', s: 'civil prescription interrupted during the criminal case' }
			],
			verify: 'Guidelines stated from the reported decision and summaries; not in Tiu. The fourth guideline\'s exact wording (citing Civil Code Art. 1155) should be checked.',
			question: 'Give the guidelines in People v. Bayotas on the effect of the death of the accused pending appeal.'
		},
		{
			id: 'E111.7',
			name: 'Kinds of acquittal and their effect on civil liability',
			source: 'Rule 111, Sec. 2; Civil Code Art. 29; RPC Art. 101; Tiu, pp. 61–62 (Marcia v. CA; Balerta v. People)',
			kind: 'notes',
			memorize: true,
			lead: 'The effect of an acquittal on civil liability depends on its ground',
			items: [
				{ t: 'The act or omission did not exist, or the accused was not its author', d: 'Civil liability ex delicto is extinguished; any civil action must rest on another source.', s: 'act did not exist / not the author — civil liability ex delicto extinguished', x: 'Accused acquitted because the prosecution proved he was elsewhere.' },
				{ t: 'Guilt not proved beyond reasonable doubt', d: 'Civil liability may still be proved by preponderance of evidence, in the same case or separately (Art. 29; Padilla v. CA).', s: 'reasonable doubt — civil liability survives' },
				{ t: 'An exempting circumstance under Art. 12(1), (2), (3), (5) or (6)', d: 'Civil liability survives (Art. 101) — e.g., insanity, minority, irresistible force, uncontrollable fear.', s: 'exempting circumstances (except accident and lawful cause) — civil liability survives' },
				{ t: 'A justifying circumstance', d: 'Generally no civil liability, except state of necessity (Art. 11[4]), where those benefited are liable (Art. 101).', s: 'justifying circumstances — none, except state of necessity' },
				{ t: 'The civil liability does not arise from the crime', d: 'E.g., liability from contract or quasi-delict, unaffected by the acquittal.', s: 'civil liability from another source — unaffected' }
			],
			tip: 'A judgment of acquittal must state whether the evidence absolutely failed to prove guilt or merely failed beyond reasonable doubt, and whether the act or omission did not exist (Rule 120, Sec. 2).',
			question: 'Is the accused who is acquitted still civilly liable? Distinguish according to the ground of acquittal.'
		},
		{
			id: 'E111.8',
			name: 'Rules on filing fees in the criminal action',
			source: 'Rule 111, Sec. 1; Rule 141, Sec. 21(a) (as reproduced in Tiu, pp. 55–57)',
			kind: 'rule',
			lead: 'The rules on filing fees are',
			items: [
				{ t: 'No filing fees for actual damages', d: 'Except as otherwise provided in the Rules.', s: 'none for actual damages' },
				{ t: 'BP 22: fees in full on the amount of the check', d: 'Treated as the actual damages claimed; plus fees on other damages alleged.', s: 'BP 22 — on the amount of the check' },
				{ t: 'Estafa: fees under Rule 141, Sec. 21(a)', d: 'If the offended party does not manifest within 15 days of the filing of the information that the civil liability will be prosecuted separately.', s: 'estafa — Rule 141, Sec. 21(a)' },
				{ t: 'Moral, nominal, temperate or exemplary damages specified', d: 'Fees paid on filing.', s: 'specified other damages — paid on filing' },
				{ t: 'Those damages not specified', d: 'Fees are a first lien on the judgment awarding them.', s: 'unspecified — first lien on the judgment' }
			],
			question: 'Are filing fees required for the civil action impliedly instituted with the criminal action?'
		}
	],
	comparisons: [
		{
			id: 'C111.1',
			title: 'Civil action ex delicto vs. independent civil action',
			a: 'Civil action ex delicto (Sec. 1)',
			b: 'Independent civil action (Sec. 3)',
			meaning: ['Action to enforce the civil liability arising from the crime (RPC Art. 100).', 'Action based on Civil Code Arts. 32, 33, 34 or 2176 — a source other than the crime.'],
			basis: ['Rule 111, Secs. 1–2; RPC Arts. 100–113', 'Rule 111, Sec. 3; Civil Code Arts. 32, 33, 34, 2176–2177'],
			who: ['Offended party, through the prosecutor or a private prosecutor in the criminal case, or separately if reserved or filed first.', 'Offended party, in a separate civil case.'],
			when: ['Deemed instituted with the criminal action unless waived, reserved or filed first.', 'Any time within its own prescriptive period.'],
			reqs: ['Reservation before the prosecution presents evidence, if to be filed separately.', 'No reservation needed.'],
			time: ['If reserved, cannot be filed until final judgment in the criminal case; if filed first, suspended.', 'Not suspended by the criminal action.'],
			exceptions: ['BP 22: no reservation.', 'No double recovery.'],
			effect: ['Extinguished by a finding that the act did not exist; by death of the accused before final judgment.', 'Proceeds regardless of the criminal case; survives the death of the accused (continued against the estate).'],
			trap: ['Thinking all civil claims ride with the criminal case.', 'Thinking independent actions must be reserved (the 1985 Rules required it; the 2000 Rules do not).'],
			decisive: 'The source of the obligation: the crime itself (ex delicto) vs. a separate provision of law or quasi-delict.',
			hypo: 'A driver is acquitted of reckless imprudence because the act from which civil liability might arise was found not to exist. The victim\'s civil action ex delicto is extinguished, but a pending quasi-delict action against the driver\'s employer continues — and the victim needs only preponderance of evidence.'
		},
		{
			id: 'C111.2',
			title: 'Suspension of the civil action (Sec. 2) vs. suspension of the criminal action (Sec. 6)',
			a: 'Civil action suspended (Sec. 2)',
			b: 'Criminal action suspended (Sec. 6 — prejudicial question)',
			meaning: ['The separate civil action ex delicto waits for the criminal case.', 'The criminal case waits for a previously filed civil case that will decide whether it may proceed.'],
			basis: ['Rule 111, Sec. 2', 'Rule 111, Secs. 6–7; Rule 116, Sec. 11(a)'],
			who: ['Automatic by operation of the Rule; the offended party may move to consolidate.', 'On petition of the respondent or accused; no motu proprio suspension.'],
			when: ['When a criminal action is filed while (or before) a civil action ex delicto is pending.', 'During preliminary investigation, or before the prosecution rests.'],
			reqs: ['Civil action ex delicto (not independent).', 'Previously instituted civil action; similar or intimately related issue; determinative of the criminal action.'],
			time: ['Until final judgment in the criminal action.', 'Until the civil issue is resolved.'],
			exceptions: ['Independent civil actions are not suspended.', 'Not if the civil action was filed after the criminal action.'],
			effect: ['Civil prescription tolled; consolidation possible before judgment on the merits.', 'Criminal action suspended, not dismissed; arraignment may be suspended.'],
			trap: ['Saying the criminal case is suspended because a civil case was filed earlier — only if the elements of a prejudicial question are present.', 'Filing the petition in the civil court.'],
			decisive: 'Which case goes first: ordinarily the criminal case; the civil case goes first only if it is prejudicial.',
			hypo: 'A sues B for collection on a loan; later A files estafa against B for the same transaction. The collection case is not prejudicial (its outcome does not decide whether there was deceit), so the estafa case proceeds; but if the collection case is an action ex delicto, it is suspended. If instead B had first filed an action to annul the sale for which he is charged with estafa, and the annulment would show he owned the property, the estafa case would be suspended.'
		},
		{
			id: 'C111.3',
			title: 'Acquittal on reasonable doubt vs. acquittal because the act did not exist',
			a: 'Acquittal on reasonable doubt',
			b: 'Acquittal because the act or omission did not exist (or accused not its author)',
			meaning: ['Guilt not proved beyond reasonable doubt.', 'A positive finding that the act from which civil liability may arise did not happen, or was not the accused\'s.'],
			basis: ['Civil Code Art. 29; Padilla v. CA; Balerta v. People', 'Rule 111, Sec. 2, last par.; Marcia v. CA'],
			who: ['Offended party may pursue civil liability.', 'Offended party may pursue only claims from other sources.'],
			when: ['Judgment of acquittal stating or implying reasonable doubt.', 'Judgment of acquittal with that finding.'],
			reqs: ['Preponderance of evidence of the civil liability.', 'A final finding in the criminal judgment.'],
			time: ['Civil liability may be adjudged in the same case or a separate action.', '—'],
			exceptions: ['—', 'Independent civil actions survive (they do not arise from the delict).'],
			effect: ['Civil liability ex delicto survives.', 'Civil liability ex delicto extinguished.'],
			trap: ['Assuming any acquittal ends civil liability.', 'Assuming the finding extinguishes quasi-delict claims too.'],
			decisive: 'Whether the court found that the act did not exist (extinguishes) or only that guilt was doubtful (survives).',
			hypo: 'In an estafa case, the court acquits because "the prosecution failed to prove deceit beyond reasonable doubt," but finds that the accused received the money. The court may still order him to return it. Had the court found that no money was ever received, the civil liability ex delicto would be extinguished.'
		},
		{
			id: 'C111.4',
			title: 'Death of the accused before arraignment vs. after arraignment (pending trial or appeal)',
			a: 'Death before arraignment',
			b: 'Death after arraignment, before final judgment',
			meaning: ['The accused dies before pleading.', 'The accused dies while the case is pending trial or appeal.'],
			basis: ['Rule 111, Sec. 4, last par.', 'Rule 111, Sec. 4; RPC Art. 89(1); Bayotas'],
			who: ['Offended party may sue the estate.', 'Offended party may continue or bring actions from other sources against the estate after substitution.'],
			when: ['Before plea.', 'After plea, before finality.'],
			reqs: ['Proof of death; dismissal.', 'Proof of death; substitution within 30 days for surviving civil actions.'],
			time: ['—', '30 days from notice for substitution.'],
			exceptions: ['—', 'Civil liability from contract, quasi-delict or law survives.'],
			effect: ['Case dismissed without prejudice to a civil action against the estate (on any viable source).', 'Criminal and civil liability ex delicto extinguished.'],
			trap: ['Thinking the civil claim ex delicto survives because the accused died before trial.', 'Thinking a pending appeal keeps the civil award alive.'],
			decisive: 'Whether there is a pending criminal action in which the civil action ex delicto was impliedly instituted (after arraignment) — it falls with the criminal action.',
			hypo: 'An accused convicted of homicide with ₱75,000 civil indemnity dies while his appeal is pending: the award is extinguished. If he dies after the judgment becomes final, the heirs of the victim may claim the ₱75,000 from his estate.'
		}
	],
	cases: [
		{
			id: 'hun-hyung-park',
			name: 'Hun Hyung Park v. Eun Won Choi',
			cite: 'Tiu gives no citation (2007 decision) — verify',
			from: 'Tiu',
			facts: 'Tiu reproduces the doctrines on the civil aspect of a criminal case; the facts are not given.',
			issue: 'Who may appeal the civil aspect of a judgment of acquittal, and which rules govern it?',
			ruling: 'The offended party (and the accused) may appeal the civil aspect despite acquittal; the Rules of Criminal Procedure govern the civil aspect impliedly instituted.',
			doctrine: 'The real parties in interest in the civil aspect are the offended party and the accused; the public prosecutor has no interest in appealing the civil aspect of an acquittal. In case of conviction, the court must state the civil liability unless the civil action was reserved, previously instituted or waived.',
			reasoning: 'With implied institution, the civil and criminal actions merge into one proceeding; the acquittal ends the prosecutor\'s work.',
			rule: 'Rule 111, Sec. 1; Rule 120, Sec. 2; Rule 122.',
			hypo: 'After an acquittal on reasonable doubt with no civil award, the offended party appeals the civil aspect alone — proper.',
			examQ: 'May the offended party appeal the civil aspect of a judgment of acquittal? May the public prosecutor?',
			also: ['r110', 'r120'],
			verify: 'Citation not in Tiu.'
		},
		{
			id: 'casupanan',
			name: 'Casupanan v. Laroya',
			cite: 'G.R. No. 145391, August 26, 2002',
			from: 'Checked',
			facts: 'After a vehicle collision, one driver filed a criminal complaint for reckless imprudence against the other. The accused driver and the vehicle\'s owner then filed a separate civil action for quasi-delict against the complainant. The civil action was dismissed for forum shopping.',
			issue: 'May an accused in a pending criminal case for reckless imprudence file a separate civil action for quasi-delict against the private complainant?',
			ruling: 'Yes. There was no forum shopping; the civil action for quasi-delict differs from the criminal case in cause of action and relief.',
			doctrine: 'The accused cannot counterclaim in the criminal case (Rule 111, Sec. 1), so his remedy is a separate civil action, which may proceed independently under Civil Code Arts. 31 and 2176.',
			reasoning: 'The quasi-delict action is based on a different source of obligation from the criminal case.',
			rule: 'Rule 111, Secs. 1 and 3.',
			args: 'The petitioners characterized their civil case as a counterclaim that could proceed independently; the decision is usually cited for the accused\'s right to a separate action.',
			hypo: 'X, charged with reckless imprudence, sues the complainant Y for damages to X\'s car under Art. 2176. Both cases proceed.',
			examQ: 'May the accused file a counterclaim in the criminal case? What is his remedy?',
			verify: 'Confirmed through summaries; read the decision for the Court\'s exact treatment of the counterclaim point.'
		},
		{
			id: 'bayotas',
			name: 'People v. Bayotas',
			cite: 'G.R. No. 102007, September 2, 1994',
			from: 'Checked',
			facts: 'The accused, convicted of rape by the RTC, died while his appeal was pending. The criminal aspect was dismissed; the question was whether his civil liability survived.',
			issue: 'Does the death of the accused pending appeal extinguish his civil liability?',
			ruling: 'Death pending appeal extinguishes criminal liability and civil liability based solely on the offense; civil liability based on other sources of obligation survives and may be pursued by a separate civil action.',
			doctrine: 'The Bayotas guidelines (E111.6).',
			reasoning: 'Civil liability ex delicto is rooted in the criminal liability; with no accused, there is no basis for it. Other sources (law, contract, quasi-contract, quasi-delict) are independent of the crime.',
			rule: 'RPC Art. 89(1); Rule 111, Sec. 4.',
			args: 'The Solicitor General argued that the appeal should still be resolved to review the civil award; the Court did not accept that approach.',
			hypo: 'An accused convicted of estafa arising from a loan dies on appeal. The creditor may sue the estate on the loan contract.',
			examQ: 'What is the effect of the death of the accused pending appeal on his civil liability?',
			also: ['r120'],
			verify: 'Not in Tiu; confirmed through summaries.'
		},
		{
			id: 'marcia',
			name: 'Marcia v. Court of Appeals',
			cite: '1983 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine.',
			issue: 'What is the effect on a later civil case of an acquittal based on a finding that the act did not exist?',
			ruling: 'The civil case must be dismissed.',
			doctrine: 'If the accused is acquitted because the fact from which civil liability could arise did not exist, a civil case subsequently brought must be dismissed; this is not a mere acquittal on reasonable doubt.',
			reasoning: 'There is no delict, so there is no civil liability ex delicto.',
			rule: 'Rule 111, Sec. 2, last par.',
			hypo: 'An acquittal for reckless imprudence finding that the accused driver was not negligent at all bars a later civil action based on the same negligence as a crime.',
			examQ: 'Does an acquittal always extinguish civil liability?',
			verify: 'Citation and facts not in Tiu.'
		},
		{
			id: 'balerta',
			name: 'Balerta v. People',
			cite: '2014 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine.',
			issue: 'What kinds of acquittal are there, and how do they affect civil liability?',
			ruling: 'Two kinds of acquittal have different effects.',
			doctrine: '(1) Acquittal because the accused is not the author of the act — closes the door to civil liability ex delicto; (2) acquittal on reasonable doubt — civil liability may still be proved by preponderance of evidence (Art. 29).',
			reasoning: 'Different quanta of proof for criminal and civil liability.',
			rule: 'Rule 111, Sec. 2; Civil Code Art. 29; Rule 120, Sec. 2.',
			hypo: 'Acquittal for mistaken identity — no civil liability ex delicto; acquittal for doubtful intent to gain — civil liability for the amount received may still be imposed.',
			examQ: 'Distinguish the two kinds of acquittal and their effect on civil liability.',
			verify: 'Citation and facts not in Tiu.'
		},
		{
			id: 'padilla',
			name: 'Padilla v. Court of Appeals',
			cite: '1984 (Tiu gives the year only)',
			from: 'Tiu',
			facts: 'Tiu reproduces only the doctrine.',
			issue: 'After an acquittal on reasonable doubt, must the offended party file a separate civil action to recover damages?',
			ruling: 'No. The court may award damages in the same criminal action.',
			doctrine: 'Art. 29 does not make a separate civil action the exclusive remedy; a judgment of acquittal and a judgment awarding damages in the same case can stand side by side. A separate action is justified where more facts must be established, or the offended party voluntarily chooses it.',
			reasoning: 'Requiring a separate action would clog dockets and duplicate litigation; the accused has had due process.',
			rule: 'Civil Code Art. 29; Rule 111, Sec. 2; Rule 120, Sec. 2.',
			hypo: 'The court acquits on reasonable doubt but orders the accused to pay the amount he admitted receiving.',
			examQ: 'May a court that acquits the accused hold him civilly liable in the same decision?',
			verify: 'Citation and facts not in Tiu.'
		},
		{
			id: 'pimentel',
			name: 'Pimentel v. Pimentel',
			cite: 'G.R. No. 172060, September 13, 2010 (Carpio, J.)',
			from: 'Checked',
			facts: 'The wife filed a complaint for frustrated parricide against the husband. She later filed a petition to declare the marriage void on the ground of psychological incapacity. The husband moved to suspend the criminal case, arguing that the relationship is an element of parricide.',
			issue: 'Is the action for declaration of nullity a prejudicial question to the frustrated parricide case?',
			ruling: 'No. The petition was denied.',
			doctrine: '(1) The civil action must be previously instituted (Rule 111, Sec. 7); here it was filed after the criminal case. (2) What matters for parricide is that the marriage subsisted when the crime was committed; a later declaration of nullity does not determine guilt.',
			reasoning: 'The resolution of the civil case would not determine whether the criminal action may proceed.',
			rule: 'Rule 111, Secs. 6–7.',
			hypo: 'A spouse charged with parricide files for nullity of marriage after the information. No suspension.',
			examQ: 'Is an action for nullity or annulment of marriage a prejudicial question to a parricide case?',
			verify: 'Confirmed through digests; read the full text for the Court\'s discussion of the element of relationship.'
		},
		{
			id: 'san-miguel-properties',
			name: 'San Miguel Properties v. Perez',
			cite: 'G.R. No. 166836, September 4, 2013',
			from: 'Tiu',
			facts: 'A buyer of subdivision lots filed a specific-performance case before the HLURB (to compel delivery of titles) and a criminal complaint under the subdivision law for non-delivery. Whether the buyer was entitled to delivery depended on whether the seller had been duly represented when the lots were sold.',
			issue: 'Can a case pending before an administrative agency be a prejudicial question to a criminal case?',
			ruling: 'Yes, where the administrative case is civil in nature and within the agency\'s exclusive jurisdiction; the HLURB action was prejudicial.',
			doctrine: 'The prejudicial-question rule generally applies to civil and criminal actions, but an issue in an administrative case civil in nature may be prejudicial (citing Quiambao v. Osorio).',
			reasoning: 'If the buyer was not entitled to delivery, the basis of criminal liability would not exist.',
			rule: 'Rule 111, Secs. 6–7.',
			hypo: 'A labor case before the NLRC on whether an employee was authorized to collect money may be argued as prejudicial to a later estafa case against him — apply the San Miguel test.',
			examQ: 'Does the doctrine of prejudicial question apply when the prior case is administrative?'
		},
		{
			id: 'metrobank-reynaldo',
			name: 'Metropolitan Bank and Trust Co. v. Reynaldo',
			cite: 'G.R. No. 164538, August 9, 2010',
			from: 'Tiu',
			facts: 'After an alleged estafa, the complainant bank entered into a debt settlement agreement with the debtor company; the respondents argued the settlement extinguished the criminal complaint.',
			issue: 'Does a compromise or novation after the commission of estafa extinguish criminal liability?',
			ruling: 'No. The complaint for estafa should not have been dismissed.',
			doctrine: 'Criminal liability for estafa is not affected by compromise or novation; reimbursement after the crime affects only civil liability.',
			reasoning: 'Estafa is a public offense prosecuted by the State; Civil Code Art. 2034 allows compromise only on the civil liability.',
			rule: 'Rule 111, Sec. 5; Civil Code Art. 2034; RPC Art. 89.',
			hypo: 'The accused repays the full amount before the information is filed. Criminal liability remains, though the payment may affect the civil aspect and, possibly, the prosecutor\'s assessment of the evidence.',
			examQ: 'Does payment or compromise extinguish criminal liability for estafa?'
		}
	],
	deadlines: [
		{ ref: 'Rule 111, Sec. 1(a)', act: 'Reserve the civil action', who: 'Offended party', period: 'Before the prosecution starts presenting evidence', start: 'Institution of the criminal action', exceptions: 'BP 22 (no reservation); independent civil actions (no reservation needed)', effect: 'Civil action ex delicto tried with the criminal case', kind: 'procedural' },
		{ ref: 'Rule 141, Sec. 21(a)', act: 'Manifest that the civil liability in estafa will be prosecuted separately', who: 'Offended party', period: '15 days', start: 'Filing of the information', exceptions: '—', effect: 'Filing fees collected on the amount involved', kind: 'procedural', verify: 'Fee schedule revised after 2004' },
		{ ref: 'Rule 111, Sec. 2', act: 'File the reserved civil action', who: 'Offended party', period: 'Not until final judgment in the criminal action', start: 'Commencement of the criminal action', exceptions: 'Independent civil actions', effect: 'Premature filing — suspended or dismissed; civil prescription tolled meanwhile', kind: 'procedural' },
		{ ref: 'Rule 111, Sec. 2', act: 'Move to consolidate a prior civil action', who: 'Offended party', period: 'Before judgment on the merits in the civil action', start: 'Filing of the criminal action', exceptions: '—', effect: 'Otherwise the civil action stays suspended', kind: 'procedural' },
		{ ref: 'Rule 111, Sec. 4', act: 'Appear and be substituted for the deceased accused', who: 'Legal representative / heirs', period: '30 days', start: 'Notice of the court\'s order', exceptions: 'Death before arraignment: case dismissed', effect: 'Surviving civil action proceeds against the estate', kind: 'procedural' },
		{ ref: 'Rule 111, Sec. 6', act: 'Petition to suspend for prejudicial question', who: 'Respondent / accused', period: 'During preliminary investigation; in court, any time before the prosecution rests', start: '—', exceptions: '—', effect: 'Late petition — not entertained', kind: 'procedural' }
	],
	traps: [
		{ wrong: 'All civil claims of the victim are deemed instituted with the criminal action.', right: 'Only the civil liability arising from the offense charged (ex delicto); independent civil actions are not.', example: 'A quasi-delict action against the employer may be filed separately without reservation.' },
		{ wrong: 'The offended party may reserve the civil action any time before judgment.', right: 'Before the prosecution starts presenting its evidence.', example: 'Reservation after the first prosecution witness testifies is too late.' },
		{ wrong: 'In BP 22, the offended party may reserve the civil action.', right: 'No reservation is allowed (Sec. 1[b]); waiver or prior filing is not prohibited (Lo Bun Tiong, per Tiu).', example: 'A civil action for the check amount filed before the BP 22 case may be consolidated.' },
		{ wrong: 'The filing of a criminal action suspends any civil action between the same parties.', right: 'Only the civil action ex delicto; independent civil actions proceed.', example: 'An Art. 33 defamation suit continues despite the libel case.' },
		{ wrong: 'An acquittal extinguishes civil liability.', right: 'Only if the judgment finds that the act did not exist (or the accused was not its author); acquittal on reasonable doubt leaves civil liability.', example: 'Padilla v. CA: damages awarded in the same judgment of acquittal.' },
		{ wrong: 'A prejudicial question may be raised in the civil case.', right: 'The petition is filed in the criminal case (or before the prosecutor) and only before the prosecution rests.', example: 'IBP v. Atienza (in Tiu): no motu proprio suspension; raise it first in the criminal action.' },
		{ wrong: 'A civil action filed after the criminal case can be a prejudicial question.', right: 'It must be previously instituted (Sec. 7; Pimentel).', example: 'Nullity petition filed after the parricide information — no suspension.' },
		{ wrong: 'Payment of the civil liability or an affidavit of desistance extinguishes criminal liability.', right: 'It does not (Art. 2034; Metrobank v. Reynaldo; Cabico v. Dimaculangan).', example: 'Estafa complainant paid in full — prosecution may continue.' },
		{ wrong: 'The death of the accused at any stage extinguishes all civil liability.', right: 'Only civil liability ex delicto, and only if death occurs before final judgment.', example: 'Death after finality: claim against the estate.' },
		{ wrong: 'The accused may counterclaim for damages in the criminal case.', right: 'No counterclaim, cross-claim or third-party complaint; file a separate civil action (Casupanan).', example: 'Accused sues the complainant separately for malicious prosecution or quasi-delict.' }
	],
	corrections: [
		{ old: 'Tiu cites "People vs Bayou 2012" for death pending appeal.', fix: 'The landmark guidelines are in People v. Bayotas (1994); later cases such as People v. Paras (2014, in Tiu) apply them. Cite Bayotas for the four guidelines.', source: 'People v. Bayotas, G.R. No. 102007, September 2, 1994' },
		{ old: 'Rule 141 fee tables (2004–2006 amounts).', fix: 'Rule 141 has been amended since; check the current schedule before stating amounts.', source: 'Rule 141 (as amended)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Implied institution', q: 'When is the civil action for the recovery of civil liability arising from the offense not deemed instituted with the criminal action?', a: 'E111.1: when the offended party (1) waives it, (2) reserves the right to institute it separately (before the prosecution presents evidence), or (3) institutes it before the criminal action. Independent civil actions are never deemed instituted; in BP 22 no reservation is allowed.', keys: 'waive; reserve; prior institution; Sec. 1(a)' },
		{ cat: 'A', level: 2, topic: 'Independent civil actions', q: 'Enumerate the independent civil actions under Rule 111 and the consequences of their independent character.', a: 'E111.2 and E111.3: Arts. 32, 33, 34 and 2176. They proceed regardless of the criminal case; need only preponderance of evidence; need no reservation; survive waiver of the ex delicto action; are not suspended; and the offended party may still intervene in the criminal case for the ex delicto liability — but no double recovery.', keys: 'Arts. 32, 33, 34, 2176; preponderance; no reservation; no double recovery' },
		{ cat: 'A', level: 2, topic: 'Prejudicial question', q: 'Give the elements of a prejudicial question. Where and when is it raised?', a: 'E111.4: (a) a previously instituted civil action involving an issue similar or intimately related to that in the criminal action; (b) its resolution determines whether the criminal action may proceed. Raised by petition with the prosecutor during preliminary investigation, or in the criminal court any time before the prosecution rests (Sec. 6).', keys: 'Sec. 7; previously instituted; before prosecution rests' },
		{ cat: 'A', level: 3, topic: 'Acquittal', q: 'Enumerate the grounds of acquittal and their effect on civil liability.', a: 'E111.7: act did not exist or accused not the author (extinguished); reasonable doubt (survives, Art. 29); exempting circumstances under Art. 12(1), (2), (3), (5), (6) (survives, Art. 101); justifying circumstances (none, except state of necessity); civil liability from other sources (unaffected).', keys: 'Sec. 2; Art. 29; Art. 101' },
		{ cat: 'A', level: 3, topic: 'Death of the accused', q: 'State the Bayotas guidelines on the effect of the death of the accused pending appeal.', a: 'E111.6: (1) death pending appeal extinguishes criminal liability and civil liability based solely on the offense; (2) civil liability may survive if based on other sources of obligation; (3) the surviving claim is pursued by separate civil action against the estate or executor; (4) the prescriptive period of that civil action is deemed interrupted during the criminal case.', keys: 'Bayotas; Art. 1157 sources; separate civil action; interruption' },
		{ cat: 'B', level: 3, topic: 'Civil actions', q: 'Distinguish the civil action ex delicto from an independent civil action.', a: 'See C111.1. Decisive point: the source of the obligation — crime vs. Civil Code provisions or quasi-delict — which explains reservation, suspension, effect of acquittal and effect of death.', keys: 'source of obligation; reservation; suspension' },
		{ cat: 'B', level: 3, topic: 'Suspension', q: 'Distinguish the suspension of the civil action under Sec. 2 from the suspension of the criminal action under Sec. 6.', a: 'See C111.2. Ordinarily the criminal action goes first and the civil action ex delicto waits; a prejudicial question reverses the order, on petition, if the civil action was filed first and determines whether the criminal action may proceed.', keys: 'Sec. 2; Secs. 6–7; previously instituted' },
		{ cat: 'B', level: 3, topic: 'Acquittal', q: 'Distinguish an acquittal on reasonable doubt from an acquittal based on a finding that the act did not exist.', a: 'See C111.3.', keys: 'Art. 29; Sec. 2 last par.' },
		{ cat: 'C', level: 1, topic: 'Implied institution', q: 'When a criminal action is instituted, all civil actions arising from the same act are deemed instituted with it.', tf: false, short: 'False. Only the civil action for civil liability arising from the offense charged (ex delicto) is deemed instituted; independent civil actions under Arts. 32, 33, 34 and 2176 are not.', keys: 'Sec. 1(a); Sec. 3' },
		{ cat: 'C', level: 1, topic: 'BP 22', q: 'In a prosecution for violation of BP 22, the offended party may reserve the right to file the civil action separately.', tf: false, short: 'False. Sec. 1(b): no reservation is allowed; the criminal action is deemed to include the civil action.', keys: 'Sec. 1(b)' },
		{ cat: 'C', level: 2, topic: 'Reservation', q: 'The reservation of the civil action may be made at any time before the prosecution rests.', tf: false, short: 'False. It must be made before the prosecution starts presenting its evidence (Sec. 1[a]).', trap: 'Confusing it with the period for a petition to suspend for prejudicial question (before the prosecution rests).', keys: 'before the prosecution starts presenting its evidence' },
		{ cat: 'C', level: 2, topic: 'Counterclaim', q: 'The accused may file a counterclaim for damages against the private complainant in the criminal case.', tf: false, short: 'False. No counterclaim, cross-claim or third-party complaint may be filed by the accused in the criminal case; he may litigate it in a separate civil action (Sec. 1[a]; Casupanan v. Laroya).', keys: 'no counterclaim; separate civil action' },
		{ cat: 'C', level: 2, topic: 'Independent civil actions', q: 'An independent civil action under Art. 33 of the Civil Code must be reserved in the criminal action.', tf: false, short: 'False. Under the 2000 Rules, independent civil actions are not deemed instituted with the criminal action and need not be reserved (Tiu, p. 60).', update: 'The 1985 Rules required reservation; the 2000 Rules removed it.', keys: 'Sec. 3; no reservation' },
		{ cat: 'C', level: 3, topic: 'Acquittal', q: 'A judgment of acquittal on reasonable doubt extinguishes the civil liability ex delicto.', tf: false, short: 'False. Civil liability survives and may be proved by preponderance of evidence, in the same case or separately (Art. 29; Padilla v. CA). It is extinguished only by a finding that the act did not exist.', keys: 'Art. 29; Sec. 2 last par.' },
		{ cat: 'C', level: 3, topic: 'Civil judgment', q: 'A final judgment in a civil action absolving the defendant bars a criminal action for the same act.', tf: false, short: 'False. Sec. 5: it is not a bar.', keys: 'Sec. 5' },
		{ cat: 'C', level: 3, topic: 'Prejudicial question', q: 'The court may suspend the criminal action motu proprio upon learning of a prejudicial question.', tf: false, short: 'False. A petition is required; suspension is not motu proprio (Sec. 6; Tiu, citing IBP v. Atienza).', keys: 'petition; no motu proprio' },
		{ cat: 'C', level: 4, topic: 'Death', q: 'If the accused dies after arraignment while his appeal is pending, the civil indemnity awarded by the trial court may still be collected from his estate.', tf: false, short: 'False. Death before final judgment extinguishes criminal liability and civil liability ex delicto (Sec. 4; Art. 89[1]; Bayotas). Claims from other sources must be pursued separately.', keys: 'Sec. 4; Bayotas' },
		{ cat: 'C', level: 4, topic: 'Prejudicial question', q: 'A civil action for declaration of nullity of marriage filed after an information for parricide is a prejudicial question.', tf: false, short: 'False. The civil action must be previously instituted, and its outcome would not determine guilt, since the marriage subsisted when the crime was committed (Pimentel v. Pimentel, 2010).', keys: 'Pimentel; previously instituted' },
		{ cat: 'C', level: 5, topic: 'Compromise', q: 'The court may dismiss an estafa case once the offended party, having been paid in full, files an affidavit of desistance.', tf: false, short: 'False. Payment and compromise affect only civil liability; estafa is a public offense (Art. 2034; Metrobank v. Reynaldo; Cabico v. Dimaculangan). The court may dismiss only if, without the complainant, the evidence is insufficient — a judgment on the evidence, not on the payment.', trap: 'In practice desistance often leads to dismissal for lack of evidence; the trap is giving payment as the legal ground.', keys: 'Art. 2034; Metrobank v. Reynaldo' },
		{
			cat: 'D', level: 4, topic: 'Reservation', title: 'Late reservation',
			facts: 'In a reckless-imprudence case, the prosecution has presented two witnesses. The offended party then manifests that she reserves the right to file a separate civil action for damages arising from the crime, explaining that she only now hired counsel. The accused objects.',
			q: 'Should the reservation be allowed?',
			issue: 'Whether the civil action ex delicto may be reserved after the prosecution has started presenting evidence.',
			alac: {
				answer: 'As a rule, no — unless she shows she had no reasonable opportunity to reserve earlier.',
				legalBasis: 'Rule 111, Sec. 1(a): the reservation "shall be made before the prosecution starts presenting its evidence and under circumstances affording the offended party a reasonable opportunity to make such reservation."',
				application: 'The prosecution has begun presenting evidence. Hiring counsel late is not, by itself, lack of reasonable opportunity; she could have manifested at any time before. However, she may still file an independent civil action for quasi-delict (Art. 2176), which needs no reservation.',
				conclusion: 'The reservation is too late; the civil action ex delicto stays with the criminal case, but she may sue on quasi-delict separately, subject to the bar on double recovery.'
			},
			keys: 'Sec. 1(a); before the prosecution presents evidence; Art. 2176'
		},
		{
			cat: 'D', level: 4, topic: 'Suspension and consolidation', title: 'Earlier civil case, later estafa',
			facts: 'In January, A sues B in the RTC for recovery of ₱800,000 that B allegedly misappropriated. In June, while the civil case is at the presentation of A\'s evidence, an estafa information is filed against B for the same act.',
			q: 'What happens to the civil case? What can A do?',
			issue: 'Effect of the filing of the criminal action on a previously filed civil action ex delicto.',
			alac: {
				answer: 'The civil case is suspended; A may move to consolidate it with the estafa case.',
				legalBasis: 'Rule 111, Sec. 2: if the criminal action is filed after the civil action, the latter "shall be suspended in whatever stage it may be found before judgment on the merits" until final judgment in the criminal action; before judgment on the merits, it may be consolidated on the offended party\'s motion, with the evidence already adduced deemed reproduced; the civil prescriptive period is tolled.',
				application: 'A\'s case seeks civil liability arising from the misappropriation (ex delicto). No judgment on the merits has been rendered. A may move to consolidate in the court trying the estafa case, and her evidence is deemed reproduced subject to cross-examination.',
				conclusion: 'Suspended; consolidation available on A\'s motion.'
			},
			missing: 'If A\'s civil case were based on a contract of loan (another source) or on Art. 33 (fraud), it would be independent and would not be suspended.',
			keys: 'Sec. 2; suspended; consolidation; deemed reproduced'
		},
		{
			cat: 'D', level: 4, topic: 'Death', title: 'Death before arraignment',
			facts: 'X is charged with reckless imprudence resulting in homicide. He dies before arraignment.',
			q: 'What happens to the criminal case and to the claim of the victim\'s heirs?',
			issue: 'Effect of the death of the accused before arraignment.',
			alac: {
				answer: 'The criminal case is dismissed; the heirs may file a civil action against X\'s estate.',
				legalBasis: 'Rule 111, Sec. 4, last par.: "If the accused dies before arraignment, the case shall be dismissed without prejudice to any civil action the offended party may file against the estate of the deceased." RPC Art. 89(1).',
				application: 'X died before plea. The heirs may sue the estate on quasi-delict (Art. 2176) — which survives — and may also sue X\'s employer if X was driving in the course of employment (Art. 2180).',
				conclusion: 'Dismiss the criminal case; the heirs file a civil action against the estate (and the employer, if applicable).'
			},
			keys: 'Sec. 4; before arraignment; Art. 2176'
		},
		{
			cat: 'D', level: 4, topic: 'Prejudicial question', title: 'Estafa and a prior quieting-of-title case',
			facts: 'B sold a lot to C, representing himself as owner. C files estafa against B. Six months earlier, B had sued D (who also claims the lot) for quieting of title; that case is pending. B files a petition to suspend the estafa case with the prosecutor.',
			q: 'Should the prosecutor suspend the preliminary investigation?',
			issue: 'Whether the quieting-of-title case is a prejudicial question to the estafa case.',
			alac: {
				answer: 'Yes.',
				legalBasis: 'Rule 111, Secs. 6–7: a previously instituted civil action involving an issue similar or intimately related to that in the criminal action, whose resolution determines whether the criminal action may proceed; the petition may be filed with the prosecutor during preliminary investigation.',
				application: 'The estafa charge rests on B\'s false representation of ownership. If the civil court declares B the owner, there was no false pretense. The civil action was filed first. The petition is filed in the proper forum (the prosecutor) at the proper time (preliminary investigation).',
				conclusion: 'Suspend the preliminary investigation pending resolution of the civil case.'
			},
			missing: 'If the estafa theory were different (e.g., B received payment and never delivered anything, regardless of ownership), the civil case would not be determinative.',
			keys: 'Secs. 6–7; previously instituted; determinative'
		},
		{
			cat: 'E', level: 5, topic: 'Acquittal and civil liability', title: 'Two acquittals, two results',
			facts: 'Case 1: A is acquitted of estafa; the decision states that "the prosecution failed to prove beyond reasonable doubt that A employed deceit," but notes that A admitted receiving ₱300,000 from the complainant. Case 2: B is acquitted of theft; the decision states that "the evidence shows that B was in another province on the date of the taking." In both, the decisions are silent on civil liability.',
			q: 'May the complainants still recover civil liability? How?',
			issue: 'Effect of the ground of acquittal on civil liability ex delicto.',
			alac: {
				answer: 'In Case 1, yes; in Case 2, not on the basis of the crime.',
				legalBasis: 'Rule 111, Sec. 2, last par.: civil liability based on delict is extinguished if a final judgment finds that the act or omission from which it may arise did not exist. Civil Code Art. 29: acquittal on reasonable doubt allows a civil action on preponderance of evidence. Balerta v. People (two kinds of acquittal); Padilla v. CA (damages may be awarded in the same case). Rule 120, Sec. 2.',
				application: 'Case 1 is an acquittal on reasonable doubt; A\'s receipt of the money is established, so the complainant may move for a ruling on the civil liability or file a separate civil action. Case 2 effectively finds B was not the author of the act; civil liability ex delicto is closed, and the complainant must look to another source (none appears).',
				conclusion: 'A may still be held civilly liable for ₱300,000; B may not be held civilly liable ex delicto.'
			},
			tempting: '"An acquittal bars civil liability." It does so only in Case 2.',
			trap: 'The decisions are silent on civil liability — the student must read the ground of acquittal to infer its effect (Art. 29, par. 2: the ground may be inferred from the text of the decision).',
			keys: 'Sec. 2; Art. 29; Balerta; Padilla'
		},
		{
			cat: 'E', level: 5, topic: 'Death pending appeal', title: 'Estafa, death on appeal, and the contract',
			facts: 'D borrows ₱2 million from E and issues postdated checks that bounce. D is convicted of estafa and of BP 22 by the RTC, with civil liability of ₱2 million. D dies while his appeal is pending in the Court of Appeals.',
			q: 'What happens to the criminal and civil liabilities? What should E do?',
			issue: 'Effect of the death of the accused pending appeal on civil liability ex delicto and on liability from other sources.',
			alac: {
				answer: 'Both criminal liabilities and the civil liability ex delicto are extinguished; E should file a separate civil action against D\'s estate on the loan.',
				legalBasis: 'Rule 111, Sec. 4; RPC Art. 89(1); People v. Bayotas (1994): death pending appeal extinguishes criminal liability and civil liability based solely on the offense; civil liability from another source (here, contract) survives and is pursued by separate civil action; the period to file it is deemed interrupted during the criminal case.',
				application: 'D died before final judgment. The ₱2 million award, based on the crimes, falls. But the loan is a separate source of obligation; E may claim against the estate (in the settlement proceedings, as a money claim).',
				conclusion: 'Dismiss the appeal as to the criminal aspect and the civil liability ex delicto; E pursues the loan against the estate.'
			},
			trap: 'In BP 22 the civil action is deemed included and cannot be reserved — but that rule does not keep the civil award alive after death; the contract does.',
			keys: 'Sec. 4; Bayotas; other sources of obligation'
		},
		{
			cat: 'E', level: 5, topic: 'Prejudicial question — timing and forum', title: 'Prejudicial question raised too late and in the wrong court',
			facts: 'In a falsification case, after the prosecution rests and the defense has presented one witness, the accused files in the civil court (where his earlier action to annul the deed is pending) a motion asking that court to order the suspension of the criminal case because of a prejudicial question.',
			q: 'Should the motion be granted?',
			issue: 'Whether a prejudicial question may be raised after the prosecution rests and in the civil court.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 111, Sec. 6: once the criminal action is filed in court, the petition to suspend "shall be filed in the same criminal action at any time before the prosecution rests." Tiu (citing IBP v. Atienza): the determination is made in the first instance in the criminal action.',
				application: 'The motion is filed in the wrong forum (the civil court) and too late (after the prosecution rested). The civil court has no authority to suspend the criminal case.',
				conclusion: 'Deny the motion; the criminal case proceeds.'
			},
			missing: 'Whether the annulment case would actually determine guilt for falsification (it may not, if the falsification is complete regardless of the deed\'s validity).',
			keys: 'Sec. 6; same criminal action; before prosecution rests'
		},
		{
			cat: 'E', level: 5, topic: 'Double recovery', title: 'Conviction and quasi-delict judgment for the same injury',
			facts: 'A bus driver is convicted of reckless imprudence resulting in serious physical injuries and ordered to pay the victim ₱500,000. Separately, the victim wins a quasi-delict case against the bus company for ₱500,000 for the same injuries.',
			q: 'May the victim collect both awards in full?',
			issue: 'Whether the offended party may recover twice for the same act or omission.',
			alac: {
				answer: 'No.',
				legalBasis: 'Rule 111, Sec. 3: "In no case … may the offended party recover damages twice for the same act or omission charged in the criminal action." Civil Code Art. 2177.',
				application: 'Both awards compensate the same injuries arising from the same act. The victim may choose the more favorable award (often the one against the solvent employer), but recovery under one reduces or bars the other.',
				conclusion: 'The victim may recover only once; payment under one judgment is credited against the other.'
			},
			keys: 'Sec. 3; Art. 2177; no double recovery'
		},
		{ cat: 'F', level: 3, topic: 'Pimentel v. Pimentel', q: 'In Pimentel v. Pimentel (2010), why was the petition for nullity of marriage not a prejudicial question to the frustrated parricide case? Give both reasons.', a: '(1) It was filed after the criminal case, so it was not a "previously instituted" civil action (Sec. 7). (2) Its resolution would not determine guilt: the relevant fact is that the marriage subsisted when the crime was committed.', keys: 'previously instituted; marriage subsisting at the time' },
		{ cat: 'F', level: 4, topic: 'Casupanan v. Laroya', q: 'What does Casupanan v. Laroya teach about the accused\'s remedy for his own damages in a reckless-imprudence case?', a: 'The accused cannot counterclaim in the criminal case, but he may file a separate civil action for quasi-delict against the complainant; it proceeds independently and is not forum shopping, because its cause of action and relief differ from the criminal case.', keys: 'no counterclaim; separate civil action; no forum shopping' },
		{ cat: 'F', level: 4, topic: 'People v. Bayotas', q: 'Explain the doctrine in People v. Bayotas and apply it to an accused convicted of reckless imprudence who dies pending appeal.', a: 'Death pending appeal extinguishes criminal liability and civil liability based solely on the crime; liability from other sources survives and is pursued by a separate civil action. For reckless imprudence, the victim may sue the estate (and the employer) on quasi-delict under Art. 2176.', keys: 'Bayotas; quasi-delict survives' },
		{
			cat: 'G', level: 5, topic: 'Integrated Rule 111', title: 'Rule 111 integrated — libel, Art. 33 and death',
			facts: 'P is defamed in a magazine article written by W. P files (1) a libel complaint, which results in an information against W, and (2) without any reservation, a separate civil action for damages under Art. 33 against W and the magazine. W argues that the civil case must be suspended until the libel case is decided. During trial of the libel case, W is acquitted on reasonable doubt. W later dies while the civil case is pending.',
			q: '(a) Must the civil case be suspended? (b) What is the effect of the acquittal on P\'s civil case? (c) What is the effect of W\'s death?',
			issue: 'Independent civil actions: suspension, effect of acquittal, and survival after death.',
			alac: {
				answer: '(a) No. (b) None — the civil case continues. (c) The civil case continues against W\'s estate after substitution.',
				legalBasis: 'Rule 111, Sec. 3: actions under Art. 33 (defamation) proceed independently of the criminal action and require only preponderance of evidence; no reservation is needed. Sec. 2 suspension does not apply to independent civil actions. Sec. 4: the independent civil action may be continued against the estate or legal representative after substitution within 30 days from notice.',
				application: '(a) P\'s action rests on Art. 33, so it is not suspended by the libel case. (b) An acquittal on reasonable doubt does not affect an independent action; P needs only preponderance of evidence. (c) W\'s death does not extinguish an Art. 33 action; the court orders the heirs or legal representative to substitute within 30 days.',
				conclusion: 'P\'s civil case proceeds throughout, now against W\'s estate; P may not recover twice for the same defamation.'
			},
			keys: 'Art. 33; Sec. 3; Sec. 4; no suspension; substitution'
		}
	],
	memorize: [
		'Sec. 1(a): deemed instituted unless waived, reserved (before the prosecution presents evidence), or filed first',
		'Sec. 1(b): BP 22 — civil action included; no reservation; fees on the amount of the check',
		'No counterclaim, cross-claim or third-party complaint by the accused',
		'Sec. 2: civil action ex delicto suspended; consolidation before judgment on the merits; civil prescription tolled',
		'Sec. 2 last par.: extinguished only by a final finding that the act did not exist',
		'Sec. 3: Arts. 32, 33, 34, 2176 — independent; preponderance; no double recovery',
		'Sec. 4: death before arraignment (dismiss) vs. after arraignment (ex delicto extinguished; substitution in 30 days)',
		'Secs. 6–7: prejudicial question — previously instituted; determinative; petition before the prosecution rests'
	],
	flashcards: [
		['Which civil action is deemed instituted with the criminal action?', 'The civil action for recovery of civil liability arising from the offense charged (ex delicto).'],
		['Deadline to reserve the civil action?', 'Before the prosecution starts presenting its evidence.'],
		['Can the civil action be reserved in BP 22?', 'No (Sec. 1[b]).'],
		['May the accused counterclaim in the criminal case?', 'No; file a separate civil action.'],
		['Fees for actual damages?', 'None, except BP 22 (amount of check) and estafa under Rule 141.'],
		['Effect of filing the criminal action on a separate civil action ex delicto?', 'Suspended until final judgment; may be consolidated before judgment on the merits.'],
		['Independent civil actions?', 'Arts. 32, 33, 34 and 2176 of the Civil Code.'],
		['When does an acquittal extinguish civil liability ex delicto?', 'When the final judgment finds that the act or omission from which it may arise did not exist.'],
		['Death of the accused before arraignment?', 'Case dismissed without prejudice to a civil action against the estate.'],
		['Death after arraignment, before final judgment?', 'Criminal and civil liability ex delicto extinguished; other sources survive against the estate.'],
		['Substitution period?', '30 days from notice.'],
		['Does a civil judgment absolving the defendant bar the criminal action?', 'No (Sec. 5).'],
		['Elements of a prejudicial question?', '(a) Previously instituted civil action with a similar or intimately related issue; (b) its resolution determines whether the criminal action may proceed.'],
		['Where and when to raise a prejudicial question?', 'With the prosecutor during PI; in the criminal court before the prosecution rests.']
	],
	oral: [
		['"Why is the civil action deemed instituted with the criminal action?"', 'Because every person criminally liable is also civilly liable (Art. 100), and trying both together avoids multiplicity of suits. Only the civil liability arising from the offense is deemed instituted, unless waived, reserved or filed earlier.'],
		['"What is an independent civil action, and why does it not need reservation?"', 'An action under Arts. 32, 33, 34 or 2176 of the Civil Code. It arises from a source other than the crime, so it is not deemed included in the criminal action; it proceeds regardless of the criminal case on preponderance of evidence, subject to the bar on double recovery.'],
		['"What happens to the civil liability if the accused is acquitted?"', 'It depends on the ground. If the court finds that the act did not exist or the accused was not its author, civil liability ex delicto is extinguished. If acquittal is on reasonable doubt, civil liability may still be proved by preponderance of evidence, in the same case or separately.'],
		['"The accused died while his appeal was pending. What happens?"', 'Under Rule 111, Sec. 4 and Bayotas, his criminal liability and civil liability based solely on the crime are extinguished; liability from other sources — contract, quasi-delict, law — may be pursued against his estate by separate action.'],
		['"Define a prejudicial question."', 'An issue in a previously instituted civil action, similar or intimately related to the issue in the criminal action, whose resolution determines whether the criminal action may proceed. It is raised by petition with the prosecutor during PI or in the criminal court before the prosecution rests; it suspends, not dismisses, the criminal action.'],
		['"Can a complainant who has been paid have the estafa case dismissed?"', 'Not on that ground. Payment or compromise affects only civil liability (Art. 2034; Metrobank v. Reynaldo). The case may fail only if the evidence becomes insufficient.']
	],
	checklist: [
		'I can state when the civil action ex delicto is and is not deemed instituted.',
		'I can give the deadline for reservation and the BP 22 exception.',
		'I can explain suspension and consolidation under Sec. 2.',
		'I can list the independent civil actions and their consequences.',
		'I can explain the effect of each kind of acquittal on civil liability.',
		'I can state the effect of death before arraignment, pending appeal and after finality (Bayotas).',
		'I can give the elements of a prejudicial question and where and when to raise it.',
		'I can explain why payment or a civil judgment does not end the criminal case.'
	],
	sheet: [
		'<b>Implied institution (Sec. 1):</b> civil liability ex delicto rides with the criminal action unless waived, reserved (before prosecution evidence) or filed first. BP 22 — no reservation. No counterclaims.',
		'<b>Suspension (Sec. 2):</b> criminal first; separate civil ex delicto waits; consolidate before civil judgment on the merits; civil prescription tolled.',
		'<b>Extinction:</b> acquittal extinguishes civil ex delicto only on a finding that the act did not exist (or accused not the author); reasonable doubt → civil survives (Art. 29).',
		'<b>Independent (Sec. 3):</b> Arts. 32, 33, 34, 2176 — no reservation, not suspended, preponderance, no double recovery.',
		'<b>Death (Sec. 4):</b> before arraignment → dismiss, sue estate; pending → criminal + ex delicto extinguished, other sources survive (Bayotas); substitution in 30 days.',
		'<b>Civil judgment (Sec. 5)</b> is no bar to the criminal action; payment/compromise does not extinguish criminal liability.',
		'<b>Prejudicial question (Secs. 6–7):</b> previously instituted civil case; determinative issue; petition with prosecutor or criminal court before prosecution rests; suspends, not dismisses.'
	],
	watchFor: `<strong>Watch for: the source of the civil claim and the timing.</strong>
<ul>
<li>Is the claim ex delicto (rides with the case) or independent (Arts. 32, 33, 34, 2176)?</li>
<li>Reservation: before the prosecution presents evidence. Prejudicial question: before the prosecution rests.</li>
<li>Acquittal: "act did not exist" vs. "reasonable doubt." Death: before arraignment, pending appeal, or after finality?</li>
</ul>`
};
