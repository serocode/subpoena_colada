import { ruleLink, type RuleChapter } from './model';

/** Rule 127 — Provisional Remedies in Criminal Cases. */
export const r127: RuleChapter = {
	id: 'r127',
	n: 127,
	title: 'Provisional Remedies in Criminal Cases',
	short: 'R127 Provisional Remedies',
	tiu: 'p. 237 (Tiu reproduces only Secs. 1–2; the rest of his Rule 127 chapter, pp. 238–255, is the Sandiganbayan rules and the 2017 Continuous Trial Guidelines)',
	plain: `The civil provisional remedies — preliminary attachment, preliminary injunction, receivership, replevin and support pendente lite — can be used in a criminal case, but only for the civil action that is deemed instituted with it. If the offended party waived, reserved or separately filed the civil action, the remedies belong in that civil case instead. Rule 127 itself spells out attachment: the offended party may have the accused's property attached as security for the civil judgment when the accused is about to abscond, has embezzled or misappropriated money in a fiduciary capacity, is concealing or disposing of his property, or lives abroad.`,
	purpose: `To keep the civil liability from becoming an empty victory — securing the accused's property (or support for a child) while the criminal case is pending.`,
	stage: `Any time while the criminal case is pending, so long as the civil action is impliedly instituted with it (${ruleLink('r111')}).`,
	questions: [
		'When are civil provisional remedies available in a criminal case?',
		'What are the grounds for preliminary attachment under Rule 127?',
		'Which provisional remedies of the civil rules may apply?',
		'What happens if the civil action was reserved, waived or filed separately?'
	],
	relations: `Rule 127 depends entirely on ${ruleLink('r111')}: no civil action deemed instituted, no provisional remedy in the criminal case. The attachment grounds echo Rule 57, Sec. 1 of the civil rules. In BP 22 cases the civil action is always included (${ruleLink('r111', 'sections', 'Rule 111, Sec. 1[b]')}); in Sandiganbayan cases the civil action is always simultaneously instituted and cannot be reserved (PD 1606, Sec. 4, as amended). Support pendente lite in crimes resulting in the birth of a child ties to the civil liability in ${ruleLink('r120', 'sections', 'Rule 120, Sec. 2')}.`,
	principles: [
		'<b>Available only for the civil action deemed instituted</b> with the criminal action (Sec. 1).',
		'<b>"Insofar as they are applicable"</b> — the civil rules (Rules 57–61) govern requisites, bond and procedure.',
		'<b>Attachment: four grounds</b> in Sec. 2 — absconding; embezzlement or fraud in a fiduciary capacity; concealing or disposing of property; residence abroad.',
		'<b>The offended party</b>, not the prosecutor, is the real party in interest in a provisional remedy.'
	],
	sections: [
		{
			n: '1',
			title: 'Availability of provisional remedies',
			text: `"The provisional remedies in civil actions, insofar as they are applicable, may be availed of in connection with the civil action deemed instituted with the criminal action."`,
			plain: `The civil provisional remedies apply in the criminal case, but only to protect the civil claim riding with it.`,
			reqs: `(1) A civil action deemed instituted with the criminal action — not waived, reserved, or filed ahead (Rule 111, Sec. 1); (2) the remedy is applicable to the civil claim; (3) its requisites under the civil rules are met.`,
			who: `Offended party (applicant); accused (adverse party); the criminal court.`,
			when: `While the criminal case is pending.`,
			exceptions: `If the civil action was waived, reserved or filed separately, the remedy must be sought in the separate civil action, not the criminal case.`,
			effect: `The criminal court acts as a civil court for the provisional remedy; the requisites, bond and procedure of Rules 57–61 apply.`,
			hypo: `In an estafa case, the complainant reserved the civil action and later sued separately for the money. She cannot ask the criminal court for preliminary attachment; she must apply in the civil case.`,
			trap: `Independent civil actions (Civil Code Arts. 32, 33, 34, 2176) are not "deemed instituted" (Rule 111, Sec. 3); provisional remedies for them are sought in those actions.`
		},
		{
			n: '2',
			title: 'Attachment',
			text: `"When the civil action is properly instituted in the criminal action as provided in Rule 111, the offended party may have the property of the accused attached as security for the satisfaction of any judgment that may be recovered from the accused in the following cases: (a) When the accused is about to abscond from the Philippines; (b) When the criminal action is based on a claim for money or property embezzled or fraudulently misapplied or converted to the use of the accused who is a public officer, officer of a corporation, attorney, factor, broker, agent or clerk, in the course of his employment as such, or by any other person in a fiduciary capacity, or for a willful violation of duty; (c) When the accused has concealed, removed, or disposed of his property, or is about to do so; and (d) When the accused resides outside the Philippines."`,
			plain: `The offended party may attach the accused's property to secure the civil judgment if the accused is about to leave the country, embezzled or misappropriated money while in a position of trust, is hiding or disposing of his property, or lives abroad.`,
			reqs: `(1) Civil action properly instituted in the criminal action (Rule 111); (2) one of the four grounds; (3) the requisites of Rule 57 — affidavit showing the ground and a sufficient cause of action, and an attachment bond (verify the specific Rule 57 sections before citing).`,
			who: `Offended party (applicant); accused (whose property is attached).`,
			when: `While the case is pending, before judgment.`,
			effect: `The property is held in custodia legis as security; it is not a finding of guilt. The accused may discharge the attachment by a counter-bond or on the grounds provided in Rule 57.`,
			hypo: `A corporate treasurer is charged with estafa for converting ₱5 million of company funds. The company (offended party), which did not reserve the civil action, applies for attachment of his condominium under Sec. 2(b), posting a bond. The court may issue the writ.`,
			trap: `Sec. 2 lists four grounds; the civil rule (Rule 57, Sec. 1) lists more. In the criminal case, apply the four in Sec. 2 — and remember attachment secures only the civil liability, not fines or costs.`,
			verify: `Compare the grounds with Rule 57, Sec. 1, and check whether a writ may issue ex parte and when it may be enforced (prior or contemporaneous jurisdiction over the person), before relying on civil-procedure rules in a criminal case.`
		}
	],
	reqs: [
		{
			name: 'Civil action deemed instituted (Sec. 1)',
			source: 'Rule 127, Sec. 1; Rule 111, Sec. 1',
			what: 'The civil action for civil liability arising from the offense must be impliedly instituted with the criminal action.',
			who: 'Offended party (by not waiving, reserving or prior filing).',
			when: 'At the time of the application.',
			missing: 'No provisional remedy in the criminal case; the offended party must apply in the separate civil action.',
			defect: 'Not waivable',
			defectNote: 'The remedy is ancillary to the civil action; without it in the criminal case, the court has nothing to which the remedy can attach.'
		},
		{
			name: 'Ground for attachment (Sec. 2)',
			source: 'Rule 127, Sec. 2',
			what: 'One of the four grounds, shown by affidavit; an attachment bond.',
			who: 'Offended party.',
			when: 'Before judgment.',
			form: 'Verified application or affidavit; bond (Rule 57).',
			missing: 'The writ is improperly issued and may be discharged on motion.',
			defect: 'Curable',
			defectNote: 'A defective application may be supplemented; an improperly issued writ is discharged rather than voiding the criminal case.'
		}
	],
	enums: [
		{
			id: 'E127.1',
			name: 'Grounds for preliminary attachment in a criminal case',
			source: 'Rule 127, Sec. 2',
			kind: 'rule',
			memorize: true,
			lead: 'The offended party may have the accused\'s property attached when',
			items: [
				{ t: 'The accused is about to abscond from the Philippines', d: 'Flight would put the accused and his assets beyond reach.', s: 'about to abscond' },
				{ t: 'The action is based on money or property embezzled, fraudulently misapplied or converted by the accused in a fiduciary capacity, or on a willful violation of duty', d: 'Covers public officers, corporate officers, attorneys, factors, brokers, agents, clerks, and any other fiduciary.', s: 'fiduciary embezzlement or misapplication' },
				{ t: 'The accused has concealed, removed or disposed of his property, or is about to do so', d: 'Shown by specific acts, not mere fear.', s: 'concealing or disposing of property' },
				{ t: 'The accused resides outside the Philippines', d: 'A judgment would otherwise be hard to enforce.', s: 'resides abroad' }
			],
			memory: '<b>A-F-C-R</b>: Abscond · Fiduciary · Conceal · Reside abroad.',
			question: 'When may the offended party have the property of the accused attached?'
		},
		{
			id: 'E127.2',
			name: 'Civil provisional remedies that may apply in criminal cases',
			source: 'Rule 127, Sec. 1; Rules 57–61 of the Rules of Civil Procedure',
			kind: 'teaching',
			lead: 'The provisional remedies of the civil rules are',
			items: [
				{ t: 'Preliminary attachment (Rule 57)', d: 'Rule 127, Sec. 2 sets the grounds in criminal cases.', s: 'preliminary attachment' },
				{ t: 'Preliminary injunction (Rule 58)', d: 'Rarely applicable; it cannot be used to restrain the criminal prosecution itself.', s: 'preliminary injunction' },
				{ t: 'Receivership (Rule 59)', d: 'To preserve property in litigation, e.g., a business whose funds were misappropriated.', s: 'receivership' },
				{ t: 'Replevin (Rule 60)', d: 'To recover specific personal property — subject to the property being needed as evidence.', s: 'replevin' },
				{ t: 'Support pendente lite (Rule 61)', d: 'In criminal actions where the civil liability includes support for a child born because of the crime (e.g., rape, seduction), the court may order support pendente lite (Rule 61, Sec. 6).', s: 'support pendente lite' }
			],
			tip: 'This is a teaching list: Rule 127 says only "provisional remedies in civil actions, insofar as they are applicable." Tiu does not discuss the civil rules here.',
			question: 'What provisional remedies may be availed of in a criminal case? What is the condition?',
			verify: 'Rule 61, Sec. 6 (support in criminal cases) is cited from the civil rules, not Tiu; check the text and who may apply before reciting it.'
		}
	],
	comparisons: [
		{
			id: 'C127.1',
			title: 'Attachment in a criminal case (Rule 127, Sec. 2) vs. attachment in a civil action (Rule 57)',
			a: 'Criminal case (Rule 127)',
			b: 'Civil action (Rule 57)',
			meaning: ['Attachment of the accused\'s property to secure the civil liability deemed instituted.', 'Attachment of the defendant\'s property to secure any judgment.'],
			basis: ['Rule 127, Secs. 1–2', 'Rule 57, Sec. 1'],
			who: ['Offended party.', 'Plaintiff (or any proper party).'],
			when: ['While the criminal case is pending; civil action not reserved, waived or filed first.', 'At the commencement of the action or any time before entry of judgment.'],
			reqs: ['One of four grounds; affidavit; bond (Rule 57 applied).', 'One of the Rule 57 grounds; affidavit; bond.'],
			time: ['—', '—'],
			exceptions: ['Not available if the civil action was reserved, waived or separately filed.', '—'],
			effect: ['Secures only civil liability.', 'Secures the judgment.'],
			trap: ['Applying in the criminal case after reserving the civil action.', 'Assuming the Rule 57 grounds and the Rule 127 grounds are identical.'],
			decisive: 'Availability: attachment in a criminal case exists only because, and only so far as, the civil action rides with it.',
			hypo: 'The offended party in a BP 22 case (civil action always included) may apply for attachment in the criminal case if the drawer is about to leave the country.'
		}
	],
	cases: [],
	deadlines: [],
	traps: [
		{ wrong: 'The prosecutor may apply for preliminary attachment of the accused\'s property to secure the fine.', right: 'The offended party applies, and attachment secures only the civil liability (Sec. 2).', example: '—' },
		{ wrong: 'Provisional remedies are available in the criminal case even if the offended party reserved the civil action.', right: 'Only for the civil action deemed instituted (Sec. 1).', example: '—' },
		{ wrong: 'Any of the grounds in Rule 57, Sec. 1 supports attachment in a criminal case.', right: 'Rule 127, Sec. 2 lists four grounds.', example: '—' },
		{ wrong: 'A preliminary injunction may be issued in the criminal case to stop the prosecution.', right: 'Provisional remedies protect the civil claim; they do not restrain the criminal action.', example: '—' }
	],
	corrections: [
		{ old: 'No rule on preventing a respondent from leaving the country before an information is filed.', fix: 'The Rule on Precautionary Hold Departure Orders (A.M. No. 18-07-05-SC, 2018) lets a prosecutor apply to the RTC, before an information is filed, to bar a respondent from leaving the country for offenses punishable by at least 6 years and 1 day. It is related to, but not a provisional remedy under, Rule 127.', source: 'A.M. No. 18-07-05-SC (verify details)' }
	],
	practice: [
		{ cat: 'A', level: 1, topic: 'Attachment grounds', q: 'When may the offended party have the property of the accused attached?', a: 'E127.1.', keys: 'Sec. 2' },
		{ cat: 'A', level: 2, topic: 'Availability', q: 'What provisional remedies are available in criminal cases, and on what condition?', a: 'E127.2; only in connection with the civil action deemed instituted with the criminal action (Sec. 1).', keys: 'Sec. 1; Rule 111' },
		{ cat: 'B', level: 3, topic: 'Criminal vs civil attachment', q: 'Distinguish attachment in a criminal case from attachment in a civil action.', a: 'See C127.1.', keys: 'civil action deemed instituted' },
		{ cat: 'C', level: 1, topic: 'Availability', q: 'Provisional remedies in civil actions may be availed of in connection with the civil action deemed instituted with the criminal action.', tf: true, short: 'True (Sec. 1), insofar as they are applicable.', keys: 'Sec. 1' },
		{ cat: 'C', level: 2, topic: 'Reservation', q: 'An offended party who reserved the right to file a separate civil action may still apply for preliminary attachment in the criminal case.', tf: false, short: 'False. Provisional remedies attach to the civil action deemed instituted; once reserved, it is not in the criminal case (Sec. 1; Rule 111, Sec. 1).', keys: 'Sec. 1; reservation' },
		{ cat: 'C', level: 2, topic: 'Grounds', q: 'The property of an accused who resides outside the Philippines may be attached in the criminal case.', tf: true, short: 'True (Sec. 2[d]).', keys: 'Sec. 2(d)' },
		{ cat: 'C', level: 3, topic: 'Purpose', q: 'A writ of preliminary attachment in a criminal case secures the payment of the fine that may be imposed on the accused.', tf: false, short: 'False. It secures "any judgment that may be recovered from the accused" by the offended party — the civil liability (Sec. 2).', keys: 'Sec. 2; civil liability' },
		{
			cat: 'D', level: 4, topic: 'Attachment', title: 'The departing treasurer',
			facts: 'S, treasurer of a cooperative, is charged with estafa for converting ₱3 million of members\' deposits. The cooperative did not reserve the civil action. It learns S has booked a one-way flight to Canada and listed his house for sale. It applies in the criminal case for preliminary attachment of the house.',
			q: 'Should the writ issue?',
			issue: 'Availability and grounds of preliminary attachment in a criminal case.',
			alac: {
				answer: 'Yes, upon a proper affidavit and bond.',
				legalBasis: 'Rule 127, Sec. 1 (provisional remedies available for the civil action deemed instituted); Sec. 2(a), (b), (c) (accused about to abscond; embezzlement in a fiduciary capacity; disposing of property); Rule 57 (affidavit and bond).',
				application: 'The civil action rides with the criminal case (no reservation). Three grounds are present: S is about to leave the Philippines; the claim is for money converted by a fiduciary (treasurer); and he is about to dispose of his house.',
				conclusion: 'The criminal court should issue the writ upon the cooperative\'s affidavit and attachment bond.'
			},
			keys: 'Secs. 1–2; Rule 57'
		},
		{
			cat: 'E', level: 5, topic: 'Availability', title: 'Reserved, then attached',
			facts: 'In a reckless imprudence case, the victim\'s heirs expressly reserved the civil action and then filed a quasi-delict action under Art. 2176. Later, they move in the criminal case for attachment of the accused\'s car, alleging he is about to sell it.',
			q: 'Rule on the motion.',
			issue: 'Whether a provisional remedy may be granted in the criminal case after the civil action was reserved and separately filed.',
			alac: {
				answer: 'Deny the motion.',
				legalBasis: 'Rule 127, Sec. 1 (provisional remedies only in connection with the civil action deemed instituted); Rule 111, Secs. 1 and 3 (reservation; independent civil actions under Art. 2176 proceed separately).',
				application: 'The heirs reserved the civil action and sued separately on quasi-delict. No civil action remains in the criminal case to which attachment could be ancillary.',
				conclusion: 'The heirs should apply for attachment in their Art. 2176 action, where Rule 57 governs.'
			},
			keys: 'Sec. 1; Rule 111'
		}
	],
	memorize: [
		'Civil provisional remedies apply, insofar as applicable, only to the civil action deemed instituted (Sec. 1)',
		'Attachment grounds: about to abscond · fiduciary embezzlement or willful violation of duty · concealing or disposing of property · resides abroad (Sec. 2)',
		'Rules 57–61: attachment, injunction, receivership, replevin, support pendente lite'
	],
	flashcards: [
		['When are provisional remedies available in a criminal case?', 'When the civil action is deemed instituted with the criminal action, insofar as the remedies are applicable.'],
		['Four grounds for attachment in a criminal case?', 'Accused about to abscond; fiduciary embezzlement or misapplication; concealing or disposing of property; resides abroad.'],
		['Who applies for attachment?', 'The offended party.'],
		['What does attachment secure?', 'The civil liability — any judgment the offended party may recover.'],
		['Civil action reserved — provisional remedy?', 'Not in the criminal case; apply in the separate civil action.']
	],
	oral: [
		['"Can an offended party ask the criminal court for preliminary attachment?"', 'Yes, if the civil action is deemed instituted with the criminal action and one of the grounds in Rule 127, Sec. 2 exists — the accused is about to abscond, has embezzled or misapplied money in a fiduciary capacity, is concealing or disposing of his property, or resides abroad — subject to the affidavit and bond requirements of Rule 57.']
	],
	checklist: [
		'I can state when provisional remedies are available in a criminal case.',
		'I can list the four grounds for attachment under Rule 127.',
		'I can name the civil provisional remedies and when each might apply.'
	],
	sheet: [
		'<b>Sec. 1:</b> civil provisional remedies, insofar as applicable, only for the civil action deemed instituted (not reserved, waived or filed first).',
		'<b>Sec. 2 — attachment:</b> about to abscond · fiduciary embezzlement / willful violation of duty · concealing or disposing of property · resides abroad. Secures civil liability only.',
		'<b>Rules 57–61:</b> attachment · injunction · receivership · replevin · support pendente lite (Rule 61, Sec. 6 — child born of the crime).'
	],
	watchFor: `<strong>Watch for: is the civil action still in the criminal case?</strong>
<ul>
<li>Was it reserved, waived or filed first? Then no provisional remedy in the criminal case.</li>
<li>Which of the four attachment grounds is present?</li>
<li>Attachment secures civil liability — not the fine.</li>
</ul>`
};
