import { ul, type Chapter } from './model';

export const ch8: Chapter = {
	id: 'ch8',
	n: 8,
	roman: 'VIII',
	title: 'Mandatory and Directory Statutes',
	short: 'Ch. VIII — Mandatory & Directory Statutes',
	sections: '§§8.01–8.23',

	plain: `Some legal requirements must be followed exactly, or what was done is void: these are <b>mandatory</b>. Others are guidance: breaking them is an irregularity that may get an official disciplined, but the act still stands. These are <b>directory</b>. "Shall" and "may" are clues, not answers. The real test is what the legislature intended, judged mostly by the consequences of each reading.`,
	overview: `<p><b>Part A (§§8.01–8.09)</b> defines the two kinds of statutes, gives the test (legislative intent, read through the consequences of each reading), and explains how much weight words like "shall," "may" and "shall not" carry. <b>Part B (§§8.10–8.19)</b> lists requirements the courts treat as mandatory. <b>Part C (§§8.20–8.23)</b> lists those treated as directory.</p>
<p>Three patterns solve most exam questions. (1) <b>Who must comply?</b> A deadline binding a <i>litigant</i> (to appeal, to pay docket fees) is mandatory; a deadline binding a <i>judge or official</i> (to decide) is usually directory. (2) <b>Whose rights depend on it?</b> Requirements protecting citizens or third persons, or conferring jurisdiction, are mandatory; requirements of order and convenience are directory. (3) <b>When is it raised?</b> Election rules on conduct are mandatory before the election and generally directory after it.</p>`,
	questions: [
		'What makes a statutory requirement mandatory or directory?',
		'What happens when each kind is violated?',
		'Does "shall" always mean mandatory, and "may" always permissive?',
		'Which kinds of requirements are treated as mandatory, and which as directory?',
		'Why is a deadline mandatory for a litigant but directory for a judge?',
		'How do election laws change character before and after an election?'
	],
	keyPoints: [
		'Mandatory → non-compliance makes the act void or brings a sanction. Directory → the act stands; at most an irregularity or administrative liability.',
		'No universal rule: look at the whole statute, its purpose, and the consequences of each reading (§§8.03–8.04).',
		'"Shall" is presumed mandatory and "may" permissive; negative words ("shall not," "only") are mandatory. Each presumption can flip.',
		'Mandatory: jurisdictional requirements, time for litigants to act or appeal, conditions for benefits, qualifications for office, protections in tax assessment and auction sales, election rules before the election.',
		'Directory: guidance for officers, manner of judicial action, time for officials or courts to decide (unless time is of the essence, negative words, or a limit on power).',
		'Art. 5, Civil Code: acts against mandatory or prohibitory laws are void unless the law itself authorizes their validity.'
	],
	connects: `Chapter VIII applies Chapter VII's thinking to commands rather than coverage: requirements that protect rights tend to be mandatory, just as statutes in derogation of rights are strictly construed. It ties to Chapter IX (procedural rules apply to pending cases) and Chapter XI (constitutional provisions are presumed mandatory). <i>Aquino v. Quezon City</i> is the best case illustration: the notice of delinquency is mandatory, but the Court did not demand actual receipt.`,
	objectives: [
		'Define mandatory and directory statutes and state the effect of violating each.',
		'Apply the consequences test and the "effect" test to a new provision.',
		'Explain when "shall" means "may" and when "may" means "shall."',
		'Enumerate the requirements held mandatory and those held directory.',
		'Distinguish deadlines for litigants from deadlines for courts, citing Art. VIII, Sec. 15.',
		'Apply the before/after rule for election laws and its exceptions.',
		'Explain how <i>Aquino</i> treated the notice requirements in a tax sale.'
	],

	concepts: [
		{
			term: 'Mandatory statute',
			plain: 'A rule you must follow exactly, or what you did is void.',
			legal: 'A statute whose command must be obeyed on pain of sanction or of the nullity of what is done in disregard of it; the court cannot treat the breach as immaterial (§8.01).',
			why: 'Some requirements are the very thing that protects rights or confers authority.',
			example: 'Paying the appellate docket fees within the period to appeal (<i>Enriquez v. Enriquez</i>).',
			confuse: '"Strictly construed." Strict construction concerns how far a statute reaches; mandatory character concerns what happens if a requirement is not met.'
		},
		{
			term: 'Directory statute',
			plain: 'A rule that guides how something should be done; skipping it does not cancel what was done.',
			legal: 'A statute that is permissive or discretionary, or that merely outlines the act to be done in such a way that no injury can result from ignoring it, or whose purpose can be achieved another way with substantially the same result. Non-compliance may be an irregularity or ground for discipline, but does not invalidate the proceedings (§8.01).',
			why: 'Voiding acts for minor procedural lapses would punish innocent parties for an official\'s mistake.',
			example: 'A judge who decides after the period fixed for decision: the decision is valid.',
			confuse: '"Optional." A directory requirement is still meant to be obeyed; it is only that disobedience does not void the act.'
		},
		{
			term: 'Consequences test',
			plain: 'Ask what would happen under each reading, and pick the one the legislature must have intended.',
			legal: 'There is no universal rule; whether a statute is mandatory or directory depends on legislative intent, found from the whole statute, its nature, object and purpose, and the consequences of construing it one way or the other (§§8.03–8.04).',
			why: 'The words alone ("shall," "may") are not reliable enough to decide whether an act should be void.',
			example: 'If voiding the act would hurt innocent third parties for an official\'s slip, the requirement is likely directory.',
			confuse: 'A word test. Words are only evidence of intent.'
		},
		{
			term: '"Shall" — a word of command',
			plain: '"Shall" usually means "must."',
			legal: '"Shall," "must," "ought" and "should" are presumed mandatory, especially when addressed to public officials or when public interest or private rights are involved (§§8.05–8.06). "Shall" may be read as "may" when the context or intent requires it, or when no public benefit or private right requires it to be imperative.',
			why: 'Words of command ordinarily signal a duty.',
			example: '<i>Director of Lands v. CA</i>: the Commissioner "shall cause" notice to be published in a newspaper of general circulation; mandatory.',
			confuse: 'Automatic mandatory character. The test is still intent and consequences (§8.08).'
		},
		{
			term: '"May" — a word of permission',
			plain: '"May" usually means "can, but need not."',
			legal: '"May" is presumed permissive and directory. It is read as "shall" when the law requires an act by justice or public duty, or gives a public officer a power concerning the public interest or individual rights (§§8.07–8.08, 8.10).',
			why: 'A power given for the benefit of others is a duty to those others.',
			example: '"The treasurer may issue a certificate of payment to the taxpayer": because the taxpayer\'s right depends on it, the treasurer must issue it.',
			confuse: 'Pure discretion. Some "mays" impose duties.'
		},
		{
			term: 'Negative (prohibitory) statute',
			plain: '"Shall not" leaves only one way to obey: don\'t.',
			legal: 'Negative, prohibitory and exclusive words ("shall not," "cannot," "ought not," "only") are mandatory; an affirmative statement qualified by "only" is a negative statute. Prohibitions "can rarely, if ever, be directory" (§8.09).',
			why: 'There is no alternative way of complying with a prohibition.',
			example: '"The appeal shall be filed only with the Regional Trial Court": filing elsewhere is ineffective.',
			confuse: 'Penal statutes. A prohibitory statute need not carry a criminal penalty; its violation may simply void the act (Art. 5, Civil Code).'
		},
		{
			term: 'Jurisdictional requirement',
			plain: 'A step without which the court or tribunal has no power to act.',
			legal: 'Requirements by which a court or tribunal acquires jurisdiction must be strictly complied with; non-compliance means no jurisdiction, and the decision is void (§8.12).',
			why: 'Jurisdiction is conferred by law and cannot be created by waiver or convenience.',
			example: 'Publication in land registration, reconstitution of title and naturalization; a written claim for refund before suing for a tax refund.',
			confuse: 'Procedural details of order and method, which are directory (§8.14).'
		},
		{
			term: 'Directory as to time',
			plain: 'An official who misses a deadline still has the power to act.',
			legal: 'Where a statute fixes the time within which a public officer or body must act, it is generally directory as to time: an act done late is not void, though the officer may be dealt with administratively. Exceptions: time is of the essence, the statute uses negative words, or the time was meant as a limit on the power itself (§8.22; <i>PAFLU v. Secretary of Labor</i>).',
			why: 'Voiding late official acts would punish the parties, who are not at fault.',
			example: '<i>Querubin v. CA</i> (1948): the three-month period for deciding election appeals is directory.',
			confuse: 'Time to appeal, which binds litigants and is mandatory.'
		},
		{
			term: 'Art. 5, Civil Code',
			plain: 'Acts that break mandatory or prohibitory laws are void, unless the law says otherwise.',
			legal: '"Acts executed against the provisions of mandatory or prohibitory laws shall be void, except when the law itself authorizes their validity."',
			why: 'It states the general consequence of violating a mandatory or prohibitory law.',
			example: 'A sale of property prohibited by law is void.',
			confuse: 'Directory provisions, whose violation does not void the act.'
		}
	],

	principles: [
		{
			name: 'Mandatory vs. directory: definitions and effects',
			rule: 'A mandatory provision must be obeyed on pain of nullity or sanction. A directory provision merely guides; non-compliance is an irregularity that may expose the official to discipline but does not invalidate the act. Acts against mandatory or prohibitory laws are void unless the law itself authorizes their validity.',
			basis: 'Agpalo §8.01; Art. 5, Civil Code.',
			why: 'The classification decides whether a lapse undoes what was done.',
			when: 'Whenever someone attacks an act or proceeding because a statutory step was skipped.',
			limits: 'Art. 5\'s own exception: the law may authorize the validity of the act despite the violation.',
			differs: 'Mandatory/directory is about the effect of non-compliance; strict/liberal (Ch. VII) is about how far the statute reaches.',
			example: 'Docket fees not paid within the appeal period: the appeal is not perfected (mandatory). Decision released after the period to decide: valid (directory as to time).'
		},
		{
			name: 'The test is legislative intent, read through consequences',
			rule: 'There is no universal rule. Look at the whole statute, its nature, object and purpose, and the consequences of each reading. A requirement is generally directory if no substantial rights depend on it, no injury can result from ignoring it, and its purpose can be achieved another way with substantially the same result; otherwise it is mandatory. Requirements meant to protect citizens are mandatory.',
			basis: 'Agpalo §§8.02–8.04.',
			why: 'Words alone cannot tell whether the legislature wanted an act voided for a lapse.',
			when: 'Every classification problem.',
			limits: 'A statute is not construed as mandatory if that would cause hardship or injustice to the innocent public (for instance, through an officer\'s delay) or lead to absurd, impossible or mischievous results; it is read as directory without preventing sanctions on the officer. But mandatory words should not lightly be read as directory, and never so as to make a new law.',
			differs: 'The word test (shall/may) is only evidence within this larger inquiry.',
			example: 'An election officer forgets to detach a ballot coupon. The voter\'s ballot is not voided, because the duty was the officer\'s and the result is not affected.'
		},
		{
			name: 'The words used: "shall," "may," and negative words',
			rule: '"Shall," "must," "ought" and "should" are presumed mandatory; "may" is presumed permissive; negative, prohibitory and exclusive words are mandatory. "Shall" and "may" are interchangeable when the legislature\'s intent, the context and the consequences require.',
			basis: 'Agpalo §§8.05–8.09.',
			why: 'Words are the best first evidence of intent, but not conclusive.',
			when: 'Reading the operative verb of a provision.',
			limits: '"Shall" → "may" when context or intent requires, or when no public benefit or private right needs it to be imperative. "May" → "shall" when justice or public duty requires the act, or when a public officer is given a power concerning public interest or private rights. Prohibitions can rarely, if ever, be directory.',
			differs: 'Under the consequences test, the decisive question is: would non-compliance make the act void?',
			example: 'Corporation Code: shares "may be transferred by delivery of the certificate": permissive, so other valid modes exist. <i>Magtajas</i>: Sec. 458 says the sanggunian "shall" enact ordinances against prohibited gambling, so reading "gambling" to include legal gambling would <i>compel</i> every LGU to ban it.'
		},
		{
			name: 'Statutes conferring power and granting benefits are mandatory',
			rule: 'A statute giving a public body or officer power to act on matters of public interest or private rights is mandatory even if worded permissively: it imposes rather than confers. Steps or conditions required to avail of a statutory benefit are mandatory, and failure to take them usually means loss of the benefit.',
			basis: 'Agpalo §§8.10–8.11.',
			why: 'The power is given for others\' benefit, and benefits are conditioned on the steps the law sets. <i>Qui prior est in tempore, potior est in jure</i>.',
			when: 'An officer refuses to act under a "may" provision affecting others; a claimant skipped a condition for a benefit.',
			limits: 'Where the statute clearly leaves the matter to the officer\'s discretion and no right depends on it, "may" stays permissive.',
			differs: 'Compare Ch. VII §7.15: conditions of privileges are also strictly complied with.',
			example: 'A tax amnesty requires filing within 90 days; a taxpayer who files on day 100 loses the benefit.'
		},
		{
			name: 'Jurisdictional and protective procedural requirements, and time for litigants, are mandatory',
			rule: 'Requirements by which a court acquires jurisdiction must be strictly complied with. Periods for litigants to act or appeal are mandatory. Procedural acts that are jurisdictional, of the essence of the proceeding, or prescribed for the protection of the parties are mandatory; mere details of order and method are directory.',
			basis: 'Agpalo §§8.12–8.14; <i>Director of Lands v. CA</i>, G.R. No. 102858, July 28, 1997; <i>Enriquez v. Enriquez</i>, G.R. No. 139303, Aug. 25, 2005; Rule 41, Sec. 4.',
			why: 'Jurisdiction and due process cannot depend on convenience; deadlines for litigants prevent delay and give finality.',
			when: 'Publication, notice, filing periods, docket fees.',
			limits: 'Liberal construction of the Rules of Court (Ch. VII) does not excuse a mandatory and jurisdictional requirement, except in rare cases the Court itself recognizes for compelling reasons.',
			differs: 'Deadlines for <i>officials or courts</i> to act are generally directory (§8.22).',
			example: '<i>Director of Lands v. CA</i>: publication of the notice of initial hearing in a newspaper of general circulation is mandatory, even though P.D. 1529 says Official Gazette publication suffices to confer jurisdiction, because due process requires notice people actually read.'
		},
		{
			name: 'Election laws: before vs. after the election; qualifications always mandatory',
			rule: 'Provisions on the conduct of elections are mandatory if enforced before the election in a direct proceeding, but generally directory after the election, so that innocent voters are not disenfranchised. Provisions on qualifications and disqualifications of candidates, and qualifications for public office, are mandatory; eligibility is continuing.',
			basis: 'Agpalo §§8.15–8.17.',
			why: 'Before the election, compliance can still be compelled; after it, voiding ballots punishes voters for officials\' lapses. Eligibility goes to the right to hold office itself.',
			when: 'A pre-election action to compel compliance; a post-election protest attacking ballots; a disqualification case.',
			limits: 'Even after the election, a provision stays mandatory if (1) violation obstructs the free and intelligent casting of votes or the ascertainment of the result, (2) it affects an essential element of the election, or (3) the statute expressly declares the act essential or its omission fatal.',
			differs: 'Qualification rules are mandatory before and after the election; conduct rules change character.',
			example: 'Votes for a candidate later found ineligible are void, and he is ousted. But a voter\'s ballot is not voided because the election officer forgot to detach its coupon.'
		},
		{
			name: 'Tax assessment and public auction sales',
			rule: 'In assessing taxes, provisions that protect taxpayers, secure equality, or give certainty are mandatory; those merely for the information or direction of officers are directory. Notice of assessment within the period is mandatory. The procedure for public auction sales is mandatory and must be strictly followed; otherwise the sale is void.',
			basis: 'Agpalo §§8.18–8.19; <i>Aquino v. Quezon City</i> (2006).',
			why: 'These laws take property, so the protections built into them are part of due process.',
			when: 'A tax-delinquency sale or an assessment is attacked for want of notice or other steps.',
			limits: '<i>Aquino</i>: the notice of delinquency is mandatory, but where notice is sent directly to the owner, posting and publication are not indispensable (a tax sale is <i>in personam</i>), and Sec. 73 requires that the notice of sale be <i>sent</i>, not received.',
			differs: 'The mandatory character attaches to the protection, not to every detail of how it is delivered.',
			example: 'A treasurer who auctions land without any notice of delinquency to the owner produces a void sale.'
		},
		{
			name: 'Directory requirements: guidance for officers, manner of judicial action, time to decide',
			rule: 'Requirements meant to guide officers for order, system and dispatch are directory, unless accompanied by negative words. Requirements on the manner in which judges act are generally directory. A period within which a court or officer must decide is directory as to time: a late decision is valid, though the officer may answer administratively.',
			basis: 'Agpalo §§8.20–8.23; <i>Querubin v. CA</i>, G.R. No. L-2581, Dec. 2, 1948; <i>PAFLU v. Secretary of Labor</i>, 27 SCRA 40 (1969); Art. VIII, Sec. 15(4), 1987 Constitution.',
			why: 'Procedure is secondary to substantive rights, and the parties should not lose their case because the official was slow.',
			when: 'A decision or official act is attacked as late or irregular in form.',
			limits: 'Time is mandatory when it is of the essence, when the statute uses negative words, or when it limits the officer\'s power (e.g., "shall be deemed approved"). The Constitution calls the periods in Art. VIII, Sec. 15 "mandatory," but Sec. 15(4) itself says the court shall still decide after the period expires, without prejudice to the judge\'s liability.',
			differs: 'Deadlines for litigants (to appeal, to pay fees) are mandatory.',
			example: 'A trial judge decides on day 100 of a 90-day period: the decision stands; the judge may be sanctioned.'
		}
	],

	enums: [
		{
			id: 'E8.1',
			name: 'Questions under the consequences test',
			source: 'Agpalo §§8.03–8.04.',
			kind: 'book',
			memorize: true,
			lead: 'To decide whether a provision is mandatory, ask whether',
			items: [
				{ t: 'The statute prescribes a result in addition to what it requires', d: 'If the law states what happens on non-compliance (e.g., "shall be void," "deemed approved," "cannot be considered"), it is likely mandatory.', s: 'it attaches a consequence to non-compliance' },
				{ t: 'Third persons would suffer if the officer fails to act', d: 'If others\' rights depend on the act, the duty is mandatory.', s: 'third persons would be prejudiced by non-compliance' },
				{ t: 'The law gives no alternative choice', d: 'If there is only one way to comply, the provision tends to be mandatory.', s: 'the law leaves no alternative' },
				{ t: 'The matter is one of substance, not form', d: 'Substantive requirements are mandatory; matters of form tend to be directory.', s: 'it concerns substance rather than form' },
				{ t: 'Disregarding the law would injure the public more', d: 'If ignoring the provision causes greater public harm, it is mandatory.', s: 'greater public injury would result from ignoring it' }
			],
			memory: '<b>R-T-A-S-P: Result · Third persons · Alternative · Substance · Public injury.</b> Mostly "yes" → mandatory.',
			tip: 'Pair this list with the "effect test" (E8.2). Common mistake: answering with the word test alone ("it says shall, so it is mandatory").',
			question: 'What questions should a court ask in determining whether a statutory provision is mandatory or directory?',
			verify: 'Confirm Agpalo\'s exact formulation before quoting this five-question list as his.'
		},
		{
			id: 'E8.2',
			name: 'When a requirement is directory (the "effect" test)',
			source: 'Agpalo §§8.01, 8.04.',
			kind: 'book',
			memorize: true,
			lead: 'A requirement is generally directory when',
			items: [
				{ t: 'No substantial rights depend on it', d: 'Nobody\'s rights are protected by the step itself.', s: 'no substantial rights depend on it' },
				{ t: 'No injury can result from ignoring it', d: 'Skipping it harms no one.', s: 'no injury results from ignoring it' },
				{ t: 'Its purpose can be achieved another way with substantially the same result', d: 'The goal is reached even without literal compliance.', s: 'its purpose is attainable in another manner with substantially the same result' }
			],
			memory: '<b>No rights · No injury · Same result.</b>',
			tip: 'These are <b>cumulative</b>. If even one fails (for example, the step protects citizens), treat the requirement as mandatory. <i>Aquino</i> shows the third idea at work: personal notice by registered mail achieved what posting and publication were for.',
			question: 'When is a statutory requirement considered merely directory?'
		},
		{
			id: 'E8.3',
			name: 'Statutes or requirements held mandatory',
			source: 'Agpalo §§8.10–8.19.',
			kind: 'book',
			memorize: true,
			lead: 'The following have been held mandatory',
			items: [
				{ t: 'Statutes conferring power on public officers', d: 'Where the power concerns public interest or individual rights, even if worded "may" (§8.10).', s: 'statutes conferring power on officers over public interest or private rights' },
				{ t: 'Statutes granting benefits', d: 'Steps and conditions to avail of a benefit (§8.11).', s: 'conditions for availing of statutory benefits' },
				{ t: 'Jurisdictional requirements', d: 'Publication in land registration, reconstitution, naturalization; written claim for tax refund (§8.12).', s: 'requirements by which a court acquires jurisdiction' },
				{ t: 'Time for litigants to act or appeal', d: 'Including payment of docket fees within the period (§8.13; <i>Enriquez</i>).', s: 'periods for litigants to act or to appeal' },
				{ t: 'Procedural requirements that are jurisdictional, essential, or protective', d: 'Steps of the essence of the proceeding or prescribed for the parties\' protection (§8.14).', s: 'essential or protective procedural steps' },
				{ t: 'Election laws on conduct, before the election', d: 'When enforced in a direct proceeding before the election (§8.15).', s: 'election-conduct rules enforced before the election' },
				{ t: 'Election laws on qualification and disqualification', d: 'Votes for a disqualified candidate are void (§8.16).', s: 'rules on candidates\' qualifications and disqualifications' },
				{ t: 'Qualifications for public office', d: 'Continuing: required at the start of the term and throughout (§8.17).', s: 'qualifications for office, which are continuing' },
				{ t: 'Protective provisions in the assessment of taxes', d: 'Including notice of assessment to the taxpayer within the period (§8.18).', s: 'taxpayer-protective assessment requirements, including notice' },
				{ t: 'Procedure for public auction sales', d: 'In derogation of property rights; non-compliance voids the sale (§8.19).', s: 'the prescribed procedure for public auction sales' }
			],
			memory: '<b>"Power, Benefits, Jurisdiction, Litigant time, Essential procedure, Elections (before & qualifications), Office qualifications, Tax protections, Auctions."</b> Each one protects someone\'s rights or the tribunal\'s authority.',
			tip: 'If asked for "at least five," pick ones you can illustrate: jurisdictional publication (<i>Director of Lands</i>), docket fees (<i>Enriquez</i>), qualifications, auction sales (<i>Aquino</i>), conditions of benefits.',
			question: 'Enumerate the kinds of statutory requirements that have been held mandatory.'
		},
		{
			id: 'E8.4',
			name: 'Statutes or requirements held directory',
			source: 'Agpalo §§8.20–8.23.',
			kind: 'book',
			memorize: true,
			lead: 'The following have been held directory',
			items: [
				{ t: 'Requirements for the guidance of officers', d: 'For order, system and dispatch of business, unless accompanied by negative words (§8.20).', s: 'rules guiding officers for order, system and dispatch' },
				{ t: 'Requirements on the manner of judicial action', d: 'How judges perform their functions (§8.21).', s: 'rules on the manner in which courts act' },
				{ t: 'Periods within which officials or courts must decide', d: 'Directory as to time, subject to exceptions (§8.22; <i>Querubin</i>).', s: 'periods for officials or courts to decide' },
				{ t: 'Constitutional time limits for deciding cases', d: 'Late decisions remain valid; the judge may answer administratively (§8.23; Art. VIII, Sec. 15(4)).', s: 'constitutional periods for decision, as to validity of late decisions' }
			],
			memory: '<b>Guide · Manner · Time to decide · Constitutional periods.</b> All are about <i>officials</i>, not litigants.',
			tip: 'Add the exceptions for time limits (E8.6). Say "directory as to time." Don\'t say the periods can be ignored; they bind the judge administratively.',
			question: 'Enumerate the kinds of statutory requirements that have been held directory.'
		},
		{
			id: 'E8.5',
			name: 'When an election-conduct provision stays mandatory even after the election',
			source: 'Agpalo §8.15.',
			kind: 'book',
			lead: 'An election-conduct provision is mandatory even after the election when',
			items: [
				{ t: 'Its violation obstructs the free and intelligent casting of votes or the ascertainment of the result', d: 'The defect goes to whether the result reflects the voters\' will.', s: 'its violation obstructs free and intelligent voting or the ascertainment of the result' },
				{ t: 'It affects an essential element of the election', d: 'Something without which there is no valid election.', s: 'it concerns an essential element of the election' },
				{ t: 'The statute expressly declares the act essential or its omission fatal', d: 'The legislature itself has said non-compliance voids the ballot or proceeding.', s: 'the law expressly makes the act essential or its omission fatal' }
			],
			memory: '<b>Obstructs · Essential · Expressly fatal.</b>',
			tip: 'State the general rule first (directory after the election) and then the exceptions.',
			question: 'Provisions on the conduct of elections are generally directory after the election. When do they remain mandatory?'
		},
		{
			id: 'E8.6',
			name: 'When a time limit for an official or court is mandatory',
			source: 'Agpalo §8.22; <i>PAFLU v. Secretary of Labor</i>, 27 SCRA 40 (1969).',
			kind: 'case',
			lead: 'A period within which an officer or body must act is mandatory when',
			items: [
				{ t: 'Time is of the essence', d: 'The act is useless or harmful if done late.', s: 'time is of the essence of the thing to be done' },
				{ t: 'The statute uses negative words', d: 'E.g., "shall not act after," "no decision shall be rendered beyond."', s: 'the statute is phrased negatively' },
				{ t: 'The time was intended as a limitation of power, authority or right', d: 'After the period the officer loses the power, e.g., "if not acted upon within 30 days, the application shall be deemed approved."', s: 'the period limits the officer\'s power' }
			],
			memory: '<b>Essence · Negative words · Power ends.</b>',
			tip: 'Lead with the rule (directory as to time) and give <i>Querubin</i>. Then the three exceptions.',
			question: 'Is a statutory period for a public officer to act mandatory or directory? Are there exceptions?',
			verify: '<i>PAFLU v. Secretary of Labor</i>: not checked against the full text.'
		},
		{
			id: 'E8.7',
			name: 'Constitutional periods to decide or resolve',
			source: 'Art. VIII, Sec. 15(1) and (4); Art. IX-A, Sec. 7, 1987 Constitution.',
			kind: 'law',
			lead: 'The Constitution fixes these periods, counted from submission',
			items: [
				{ t: 'Supreme Court: 24 months', d: 'Art. VIII, Sec. 15(1).', s: 'twenty-four months' },
				{ t: 'Lower collegiate courts: 12 months, unless reduced by the Supreme Court', d: 'Court of Appeals, Sandiganbayan, Court of Tax Appeals.', s: 'twelve months unless reduced by the Supreme Court' },
				{ t: 'All other lower courts: 3 months', d: 'Trial courts.', s: 'three months' },
				{ t: 'Constitutional Commissions: 60 days', d: 'Art. IX-A, Sec. 7: decided by majority vote of all members.', s: 'sixty days' }
			],
			memory: '<b>24 · 12 · 3 · 60</b> ("two years, one year, one quarter, two months").',
			tip: 'Add Sec. 15(4): despite expiration of the "applicable mandatory period," the court shall still decide, without prejudice to responsibility incurred. So the late decision is valid.',
			question: 'What are the constitutional periods within which courts and the Constitutional Commissions must decide cases? What is the effect of deciding beyond them?'
		},
		{
			id: 'E8.8',
			name: 'When "shall" is read as "may," and "may" as "shall"',
			source: 'Agpalo §§8.06–8.08, 8.10.',
			kind: 'teaching',
			lead: 'The presumptions on "shall" and "may" flip as follows',
			items: [
				{ t: '"Shall" → "may": when the context or legislative intent requires', d: 'The provision, read as a whole, shows a mere guide.', s: '"shall" is permissive when context or intent so requires' },
				{ t: '"Shall" → "may": when no public benefit or private right requires it to be imperative', d: 'Nothing depends on strict compliance.', s: '"shall" is permissive when no public or private right needs it to be imperative' },
				{ t: '"May" → "shall": when justice or public duty requires the act', d: 'The act is owed, not optional.', s: '"may" is mandatory when the act is required by justice or public duty' },
				{ t: '"May" → "shall": when a public officer is given a power concerning public interest or private rights', d: 'The power is held for the benefit of others.', s: '"may" is mandatory when it confers power on an officer over public interest or private rights' }
			],
			memory: '"Shall" relaxes when <b>nothing depends on it</b>; "may" hardens when <b>someone depends on it</b>.',
			tip: 'Always end with the decisive question: would non-compliance make the act void?',
			question: 'Is the word "shall" always mandatory and "may" always permissive? Explain when each may be given the meaning of the other.'
		}
	],

	reqs: [
		{
			name: 'Treating a requirement as directory',
			source: 'Agpalo §§8.01, 8.04.',
			what: ul(['No substantial right depends on it.', 'No injury results from ignoring it.', 'Its purpose can be achieved another way with substantially the same result.']),
			why: 'To avoid voiding acts over formalities that hurt no one.',
			mode: 'Cumulative — all must concur',
			absent: 'If any condition fails, especially if the requirement protects citizens or confers jurisdiction, treat it as mandatory.',
			interacts: 'Safety valve: even a mandatory-looking provision is read as directory if a mandatory reading would cause injustice to the innocent public or absurd results.',
			hypo: 'A statute says permit applications "shall be filed on green forms." An applicant uses a white form with all the required data. Directory: no rights depend on the color.'
		},
		{
			name: 'A time limit for officials becomes mandatory',
			source: 'Agpalo §8.22; <i>PAFLU</i>.',
			what: ul(['Time is of the essence; <b>or</b>', 'The statute uses negative words; <b>or</b>', 'The period limits the officer\'s power or authority.']),
			why: 'Then the legislature clearly meant the power to lapse with the period.',
			mode: 'Alternative — any one suffices',
			absent: 'Otherwise the period is directory: the late act is valid; the officer may be disciplined.',
			interacts: 'Contrast with litigant deadlines, which are mandatory without need of these exceptions.',
			hypo: '"Applications not acted upon within 60 days shall be deemed approved." A denial on day 75 is void; the application is deemed approved.'
		},
		{
			name: 'An election-conduct rule stays mandatory after the election',
			source: 'Agpalo §8.15.',
			what: ul(['Violation obstructs free and intelligent voting or the ascertainment of the result; <b>or</b>', 'It affects an essential element of the election; <b>or</b>', 'The statute expressly declares the act essential or the omission fatal.']),
			why: 'These defects go to whether the result reflects the will of the voters.',
			mode: 'Alternative — any one suffices',
			absent: 'The rule is directory after the election; ballots are not voided for officials\' lapses.',
			interacts: 'Qualification rules are mandatory regardless of timing (§§8.16–8.17).',
			hypo: 'A law says ballots without the voter\'s thumbmark on the stub "shall be void." Even after the election, such ballots are void because the law expressly made the omission fatal.'
		},
		{
			name: 'Perfecting an appeal',
			source: 'Agpalo §8.13; Rule 41, Sec. 4; <i>Enriquez v. Enriquez</i>.',
			what: ul(['Notice of appeal (or record on appeal) filed within the period.', 'Full appellate docket and other lawful fees paid within the same period.']),
			why: 'To prevent delay and secure finality; the appellate court\'s jurisdiction depends on it.',
			mode: 'Cumulative — all must concur',
			absent: 'The appeal is not perfected; the appellate court acquires no jurisdiction, and the judgment becomes final.',
			interacts: 'Liberal construction of the Rules (Ch. VII) does not ordinarily cure the defect; the Court relaxes it only in exceptional cases for compelling reasons.',
			hypo: 'Notice filed on day 14; fees paid on day 17 of a 15-day period: no perfected appeal.'
		}
	],

	comparisons: [
		{
			id: 'C8.1',
			title: 'Mandatory vs. directory statutes',
			a: 'Mandatory',
			b: 'Directory',
			def: ['Must be obeyed on pain of nullity or sanction.', 'A guide; non-compliance is an irregularity, not a cause of nullity.'],
			purpose: ['Protect rights, confer jurisdiction, secure essential steps.', 'Promote order, system and dispatch.'],
			basis: ['§8.01; Art. 5, Civil Code.', '§8.01; §§8.20–8.23.'],
			when: ['Rights depend on the step; jurisdiction; litigant deadlines; protective requirements.', 'No rights depend on it; purpose achievable otherwise; deadlines for officials.'],
			key: ['Non-compliance voids the act.', 'Non-compliance does not void the act (official may be sanctioned).'],
			limits: ['Not read as mandatory if that causes injustice to the innocent public or absurd results.', 'Not read as directory if that would make a new law or defeat protection of citizens.'],
			example: ['Late docket fees: no appeal.', 'Late decision: valid decision.'],
			trap: ['"It says shall, so it is mandatory."', '"Directory means optional."'],
			decisive: 'What happens to the act if the requirement is not met.',
			matters: 'It decides whether a party wins or loses because of a lapse.',
			recognize: 'Ask who must comply and whose rights the step protects.',
			mistake: 'Classifying by the verb alone.'
		},
		{
			id: 'C8.2',
			title: '"Shall" vs. "may"',
			a: '"Shall"',
			b: '"May"',
			def: ['Word of command; presumed mandatory.', 'Word of permission; presumed permissive and directory.'],
			purpose: ['Impose a duty.', 'Confer discretion.'],
			basis: ['§§8.05–8.06.', '§§8.07–8.08.'],
			when: ['Addressed to officials, or where public interest or private rights are involved.', 'Where the law leaves a choice.'],
			key: ['Read as "may" when context, intent, or the absence of any right at stake requires.', 'Read as "shall" when justice, public duty, or others\' rights require.'],
			limits: ['Not conclusive (§8.08).', 'Not conclusive (§8.08).'],
			example: ['Commissioner "shall cause" newspaper publication: mandatory (<i>Director of Lands</i>).', 'Treasurer "may issue" a certificate on which the taxpayer\'s right depends: mandatory.'],
			trap: ['Assuming every "shall" voids the act if disobeyed.', 'Assuming every "may" is pure discretion.'],
			decisive: 'Both are presumptions that yield to intent and consequences.',
			matters: 'A wrong presumption may void a valid act or excuse a real duty.',
			recognize: 'Ask whether anyone\'s right depends on the act being done.',
			mistake: 'Treating §8.08 as if words were conclusive.'
		},
		{
			id: 'C8.3',
			title: 'Time for litigants to act or appeal vs. time for courts or officials to decide',
			a: 'Litigant deadlines',
			b: 'Deadlines for courts/officials',
			def: ['Periods within which a party must file, appeal or pay fees.', 'Periods within which a court or officer must decide or act.'],
			purpose: ['Prevent delay; give finality; confer appellate jurisdiction.', 'Promote speedy disposition.'],
			basis: ['§8.13; Rule 41, Sec. 4; <i>Enriquez</i>.', '§§8.22–8.23; <i>Querubin</i>; Art. VIII, Sec. 15(4).'],
			when: ['A party files or pays late.', 'A decision is released late.'],
			key: ['Mandatory: late filing or payment is fatal.', 'Directory as to time: the late act is valid.'],
			limits: ['Rare relaxation for compelling reasons.', 'Mandatory if time is of the essence, negative words, or limit of power.'],
			example: ['Appeal filed on day 17 of 15: dismissed.', 'Decision on day 100 of 90: valid; judge may be sanctioned.'],
			trap: ['Treating a late appeal like a late decision.', 'Saying the judge loses jurisdiction.'],
			decisive: 'Who bears the deadline: the litigant (mandatory) or the official (directory).',
			matters: 'Parties should not lose rights because a judge was slow, but they lose rights if they themselves are late.',
			recognize: 'Find the subject of the verb: "the appellant shall..." vs. "the court shall decide...".',
			mistake: 'Answering by the word "within" alone.'
		},
		{
			id: 'C8.4',
			title: 'Election laws before vs. after the election',
			a: 'Before the election',
			b: 'After the election',
			def: ['Provisions on conduct enforced in a direct proceeding before voting.', 'The same provisions invoked in a protest after voting.'],
			purpose: ['Secure compliance while it can still be compelled.', 'Protect the votes of innocent voters.'],
			basis: ['§8.15.', '§8.15.'],
			when: ['Pre-election petitions to compel or restrain.', 'Post-election protests attacking ballots or returns.'],
			key: ['Mandatory.', 'Generally directory.'],
			limits: ['—', 'Mandatory if violation obstructs free voting or the result, affects an essential element, or the law declares it fatal.'],
			example: ['A court orders the election officer to post the list of voters as required.', 'Ballots are not voided because the officer failed to detach the coupons.'],
			trap: ['Applying the before rule to a post-election protest.', 'Forgetting the three exceptions.'],
			decisive: 'Timing of enforcement.',
			matters: 'After the election, the voters\' will is at stake.',
			recognize: 'Is the case a pre-election action or an election protest?',
			mistake: 'Treating qualification rules as directory after the election. They are always mandatory.'
		},
		{
			id: 'C8.5',
			title: 'Jurisdictional requirements vs. procedural details of order and method',
			a: 'Jurisdictional / essential',
			b: 'Order and method',
			def: ['Steps by which a tribunal acquires power, or which are of the essence or protect parties.', 'Steps for the orderly conduct of proceedings.'],
			purpose: ['Confer authority; secure due process.', 'Convenience and system.'],
			basis: ['§§8.12, 8.14.', '§8.14.'],
			when: ['Publication, notice, filing of a claim before suit.', 'Form, sequence, format of filings.'],
			key: ['Mandatory: non-compliance voids the proceeding.', 'Directory: non-compliance is an irregularity.'],
			limits: ['Cannot be waived by the parties.', 'Becomes mandatory if accompanied by negative words.'],
			example: ['No newspaper publication in land registration: decision void (<i>Director of Lands</i>).', 'Pleading not on the prescribed paper size: not void.'],
			trap: ['Calling every procedural rule mandatory.', 'Calling publication a mere formality.'],
			decisive: 'Whether the tribunal\'s power or a party\'s protection depends on the step.',
			matters: 'Jurisdictional defects void the judgment and may be raised any time.',
			recognize: 'Ask: without this step, would the court have authority, or would someone be denied notice?',
			mistake: 'Assuming liberal construction of the Rules cures jurisdictional defects.'
		},
		{
			id: 'C8.6',
			title: 'Affirmative ("shall") vs. negative ("shall not," "only") provisions',
			a: 'Affirmative provision',
			b: 'Negative / prohibitory provision',
			def: ['States what shall be done.', 'States what shall not be done, or limits action with "only."'],
			purpose: ['Direct an act.', 'Forbid an act or exclude other modes.'],
			basis: ['§§8.05–8.06.', '§8.09; Art. 5, Civil Code.'],
			when: ['A duty is imposed.', 'A prohibition or exclusive mode is imposed.'],
			key: ['May be mandatory or directory depending on intent and consequences.', 'Almost always mandatory: there is only one way to obey.'],
			limits: ['May be read as directory.', '"Can rarely, if ever, be directory."'],
			example: ['"The board shall meet monthly": likely directory.', '"No license shall be issued without inspection": a license issued without inspection is void.'],
			trap: ['Treating negative words as mere guidance.', 'Forgetting that "only" makes an affirmative provision negative.'],
			decisive: 'Negative wording removes alternatives, so non-compliance cannot be "substantially the same."',
			matters: 'It determines whether the effect test can ever save a non-compliant act.',
			recognize: 'Look for "not," "no," "only," "cannot."',
			mistake: 'Missing the word "only."'
		}
	],

	authorities: [
		{ kind: 'provision', name: 'Art. 5, Civil Code', text: '"Acts executed against the provisions of mandatory or prohibitory laws shall be void, except when the law itself authorizes their validity."' },
		{
			kind: 'provision',
			name: 'Art. VIII, Sec. 15(1) and (4), 1987 Constitution',
			text: '(1) Cases must be decided within 24 months from submission for the Supreme Court, 12 months for lower collegiate courts unless reduced by the Supreme Court, and 3 months for all other lower courts. (4) "Despite the expiration of the applicable mandatory period, the court, without prejudice to such responsibility as may have been incurred in consequence thereof, shall decide or resolve the case or matter submitted thereto for determination, without further delay."'
		},
		{ kind: 'provision', name: 'Art. IX-A, Sec. 7, 1987 Constitution', text: 'Each Constitutional Commission shall decide by a majority vote of all its members any case or matter brought before it within sixty days from the date of its submission for decision or resolution.' },
		{ kind: 'provision', name: 'Rule 41, Sec. 4, Rules of Court', text: 'Within the period for taking an appeal, the appellant shall pay to the clerk of the court which rendered the judgment the full amount of the appellate court docket and other lawful fees.' },
		{
			kind: 'provision',
			name: 'P.D. 1529, Sec. 23 (notice of initial hearing)',
			text: 'The Commissioner of Land Registration shall cause the notice of initial hearing to be published once in the Official Gazette and once in a newspaper of general circulation, with a proviso that publication in the Official Gazette is sufficient to confer jurisdiction on the court. In <i>Director of Lands v. CA</i> (1997) the Court nonetheless held newspaper publication mandatory as a requirement of due process.',
			verify: 'Paraphrased; check the exact text of Sec. 23 and the decision\'s discussion of the proviso.'
		},
		{
			kind: 'case',
			name: 'Director of Lands v. Court of Appeals (Abistado)',
			cite: 'G.R. No. 102858, July 28, 1997',
			text: 'Publication of the notice of initial hearing in a newspaper of general circulation is mandatory; "shall" denotes an imperative, and the Official Gazette is not as widely read. Without it the application for registration cannot be granted; it was dismissed without prejudice to refiling.'
		},
		{ kind: 'case', name: 'Querubin v. Court of Appeals', cite: 'G.R. No. L-2581, Dec. 2, 1948 (82 Phil. 226)', text: 'The three-month period for deciding election appeals is directory; dismissing a case merely because time ran out would defeat justice for reasons beyond the parties\' control.' },
		{ kind: 'case', name: 'Enriquez v. Enriquez', cite: 'G.R. No. 139303, Aug. 25, 2005', text: 'Payment of the appellate docket fees within the period to appeal is mandatory and jurisdictional for perfecting an appeal.', verify: 'Not checked against the full text.' },
		{ kind: 'case', name: 'PAFLU v. Secretary of Labor', cite: '27 SCRA 40 (1969)', text: 'A statute fixing the time for a public officer to act is generally directory as to time, unless time is of the essence, the statute has negative words, or the period limits the officer\'s power.', verify: 'Not checked against the full text.' },
		{
			kind: 'case',
			name: 'Marcelino v. Cruz',
			cite: '121 SCRA 51 (1983)',
			text: 'Under the 1973 Constitution, the period for lower courts to decide was held directory; a decision rendered after it is valid.',
			verify: 'Standard citation for this point; not checked against the full text.'
		},
		{ kind: 'case', name: 'Aquino v. Quezon City', cite: 'G.R. Nos. 137534 & 138624, Aug. 3, 2006', text: 'The Sec. 65 notice of delinquency is a mandatory prerequisite to every tax remedy, but direct notice by registered mail suffices, and Sec. 73 does not require actual receipt. See the five-case section.' }
	],

	caseNote: '<i>Aquino</i> is the Chapter VIII case: it shows a mandatory notice requirement whose purpose can be met by direct notice. <i>Catiis</i> (Rule 110 on aggravating circumstances) and <i>Magtajas</i> ("shall" in Sec. 458) use mandatory language in their reasoning. <i>Corona</i> enforces the forum fixed by statute.',
	caseLinks: [
		{
			caseId: 'aquino',
			strength: 'Direct — the Court applied it',
			doctrine: 'Notice requirements in tax sales are mandatory (§§8.18–8.19), but the purpose of notice can be fulfilled by direct notice to the owner.',
			facts: 'Quezon City sold the Aquinos\' and Torrado\'s delinquent lots at auction. The Aquinos received only a notice by registered mail, with no posting or publication of the notice of delinquency. Torrado\'s notices went to "Butuan City," the address in the tax records, and were returned.',
			issue: 'Were the sales void for non-compliance with Sec. 65 (notice of delinquency) and Sec. 73 (notice of sale) of P.D. 464?',
			applied: 'The Court called the Sec. 65 notice mandatory: "as required in Section sixty-five" underscored its mandatory nature and its link to every remedy. But since a tax sale is <i>in personam</i>, what protects the owner is notice sent directly to him; posting and publication are not indispensable once registered-mail notice is given. Under Sec. 73, compliance "is limited to strictly following the provisions of the statute," which require sending, not receipt.',
			ruling: 'The notices satisfied the law; both sales were upheld.',
			lesson: 'A mandatory requirement is defined by its protective purpose. Some modes of complying may be dispensable if the purpose is achieved, consistent with the "effect" idea in §8.04. Courts will not add a requirement (actual receipt) the statute does not impose.',
			examUse: 'Hypothetical: a treasurer mails notice but does not post it, or posts it but sends no direct notice. Which sale is void?'
		},
		{
			caseId: 'catiis',
			strength: 'Supporting — consistent, partly relied on',
			doctrine: 'A provision that prescribes the consequence of non-compliance is mandatory (§8.03, first question).',
			facts: 'The Information alleged no aggravating circumstance.',
			issue: 'Could the maximum period (reclusion perpetua) be imposed anyway?',
			applied: 'Rule 110, Secs. 8–9 require qualifying and aggravating circumstances to be specified in the Information; under the jurisprudence cited (<i>People v. Casitas</i>, <i>People v. Bragat</i>), unalleged circumstances "cannot be considered ... even if they are subsequently proved." The rule states its own consequence, the hallmark of a mandatory requirement.',
			ruling: 'Only reclusion temporal could be imposed; bail was a matter of right.',
			lesson: 'When the rule itself says what happens on non-compliance, treat it as mandatory.',
			examUse: 'Integrated question with Chapter VI (whole statute) and Chapter VIII (mandatory pleading rule).'
		},
		{
			caseId: 'magtajas',
			strength: 'Supporting — consistent, partly relied on',
			doctrine: '"Shall" is mandatory.',
			facts: 'LGC Sec. 458 says the sanggunian "shall" enact ordinances to prevent and suppress "gambling and other prohibited games of chance."',
			issue: 'Could "gambling" include legal gambling?',
			applied: 'The Court pointed out that "shall" is mandatory, so under the petitioners\' reading every LGU would be <i>required</i> to suppress even gambling authorized by law, leaving PAGCOR "a toothless tiger." That consequence showed the reading was wrong.',
			ruling: 'Ordinances void; "gambling" means illegal gambling.',
			lesson: 'The mandatory character of "shall" can be used to test the consequences of a proposed reading.',
			examUse: '"Explain how the word \'shall\' figured in Magtajas."'
		},
		{
			caseId: 'corona',
			strength: 'Not invoked — exam point only',
			doctrine: 'Requirements prescribed for the protection of the parties (such as the forum fixed by statute) are essential.',
			facts: 'The DOTC used its Administrative Action Board as a "shortcut" under A.O. No. 25 instead of the PPA General Manager.',
			issue: 'Could an administrative policy override the forum fixed by the PPA Charter?',
			applied: 'The Court held the employee "should be afforded the opportunity of confronting the charges against him in the forum where the law requires that they should be ventilated." Proceedings before the wrong body were void.',
			ruling: 'AAB decisions against Dinopol void; cases remanded.',
			lesson: 'When a requirement protects the person charged, departing from it is fatal, whatever the convenience.',
			examUse: 'Use as an analogy for §8.14 (procedural steps prescribed for the protection of the parties).'
		}
	],

	traps: [
		{ wrong: '"Shall" always makes a provision mandatory.', right: 'It is a presumption; intent, context and consequences control (§8.08).', example: 'A requirement that forms "shall be green" is directory.' },
		{ wrong: 'A judge who decides after the constitutional period loses jurisdiction.', right: 'The decision is valid; the judge may be sanctioned (Art. VIII, Sec. 15(4); §8.23).', example: 'Decision on day 100 of 90: valid.' },
		{ wrong: 'A litigant\'s late appeal is excused the same way a judge\'s late decision is.', right: 'Litigant deadlines are mandatory and jurisdictional.', example: 'Docket fees paid one day late: no appeal (<i>Enriquez</i>).' },
		{ wrong: 'Election-conduct rules are always mandatory.', right: 'Mandatory before the election; generally directory after, subject to three exceptions.', example: 'Coupons not detached: ballots still counted.' },
		{ wrong: '"Directory" means "optional."', right: 'Directory rules must still be followed; only the effect of breach differs.', example: 'A judge who habitually decides late is disciplined.' },
		{ wrong: 'Official Gazette publication alone always suffices in land registration.', right: 'Newspaper publication is also mandatory for due process (<i>Director of Lands v. CA</i>).', example: 'Registration granted after OG-only publication: application dismissed.' },
		{ wrong: '<i>Aquino</i> held that every mode of notice in Sec. 65 is indispensable.', right: 'The notice of delinquency is mandatory, but direct notice by mail suffices; posting and publication are not indispensable.', example: 'The Aquinos\' sale was upheld despite no posting or publication.' },
		{ wrong: 'Prohibitory provisions can be satisfied "substantially."', right: 'There is only one way to obey a prohibition; they can rarely, if ever, be directory.', example: '"Only licensed engineers may sign plans": a non-engineer\'s signature is ineffective.' }
	],

	practice: [
		// C
		{ cat: 'C', level: 1, topic: 'Definitions', q: 'Define mandatory and directory statutes.', short: 'A <b>mandatory</b> statute is one whose command must be obeyed on pain of sanction or nullity of what is done in disregard of it. A <b>directory</b> statute is permissive or merely outlines the act to be done so that no injury results from ignoring it, or its purpose can be achieved another way with substantially the same result; non-compliance does not invalidate the act (§8.01).', keys: 'nullity/sanction vs. irregularity; no injury; same result' },
		{ cat: 'C', level: 1, topic: 'Effects', q: 'What is the effect of an act executed against a mandatory or prohibitory law?', short: 'It is void, except when the law itself authorizes its validity (Art. 5, Civil Code).', keys: 'void; except when the law authorizes validity; Art. 5' },
		{ cat: 'C', level: 1, topic: 'Words', q: 'Is the word "shall" always mandatory? Explain.', short: 'No. "Shall" is presumed mandatory, but it may be read as "may" when the context or intent requires, or when no public benefit or private right requires it to be imperative. The decisive question is legislative intent, judged by the consequences: would non-compliance make the act void? (§§8.05–8.08)', keys: 'presumed; context and intent; consequences' },
		{ cat: 'C', level: 2, topic: 'Words', q: 'When is "may" construed as "shall"?', short: 'When the law requires an act by justice or public duty, or when it gives a public body or officer a power concerning the public interest or the rights of individuals; such a power is held for others and so imposes a duty (§§8.07, 8.10).', keys: 'justice or public duty; power over public interest or private rights' },
		{ cat: 'C', level: 2, topic: 'Words', q: 'Why are prohibitory statutes almost always mandatory?', short: 'Because there is only one way to obey a prohibition: by not doing the forbidden act. Negative, prohibitory and exclusive words ("shall not," "cannot," "only") leave no alternative mode of compliance, so they "can rarely, if ever, be directory" (§8.09).', keys: 'one way to obey; no alternative; rarely if ever directory' },
		{ cat: 'C', level: 2, topic: 'Election laws', q: 'What is the rule on whether election laws on the conduct of elections are mandatory or directory?', short: 'They are mandatory if enforced before the election in a direct proceeding, but generally directory after the election, so as not to disenfranchise innocent voters, unless the violation obstructs free voting or the ascertainment of the result, affects an essential element, or the law expressly declares it fatal (§8.15).', keys: 'before → mandatory; after → directory; three exceptions' },
		{ cat: 'C', level: 2, topic: 'Time to decide', q: 'Does a trial court that decides a case beyond the three-month constitutional period lose jurisdiction?', short: 'No. Under Art. VIII, Sec. 15(4), despite the expiration of the "applicable mandatory period," the court shall still decide the case, without prejudice to the responsibility incurred. The decision is valid; the judge may be held administratively liable (§8.23).', keys: 'Sec. 15(4); valid decision; administrative liability' },
		// A
		{ cat: 'A', level: 1, topic: 'Test', q: 'Enumerate the questions a court asks in determining whether a provision is mandatory or directory.', short: 'Whether (1) the statute prescribes a result in addition to the requirement; (2) third persons would suffer if the act is not done; (3) the law gives no alternative choice; (4) the matter is one of substance rather than form; (5) disregarding the law would cause greater injury to the public. Mostly "yes" → mandatory (§§8.03–8.04).', keys: 'result; third persons; no alternative; substance; public injury' },
		{ cat: 'A', level: 1, topic: 'Mandatory', q: 'Enumerate at least eight kinds of statutory requirements held mandatory.', short: 'Statutes conferring power on officers over public interest or private rights; conditions for statutory benefits; jurisdictional requirements; periods for litigants to act or appeal (including docket fees); essential or protective procedural steps; election-conduct rules enforced before the election; rules on candidates\' qualifications; qualifications for office; taxpayer-protective assessment requirements (notice); procedure for public auction sales (§§8.10–8.19).', keys: 'power; benefits; jurisdiction; litigant time; protective procedure; elections; qualifications; tax notice; auctions' },
		{ cat: 'A', level: 1, topic: 'Directory', q: 'Enumerate the kinds of statutory requirements held directory.', short: '(1) Requirements guiding officers for order, system and dispatch (unless with negative words); (2) requirements on the manner of judicial action; (3) periods within which officers or courts must decide (directory as to time); (4) constitutional time limits for deciding cases, as to the validity of late decisions (§§8.20–8.23).', keys: 'guidance; manner; time to decide; constitutional periods' },
		{ cat: 'A', level: 2, topic: 'Time to decide', q: 'A period for a public officer to act is generally directory as to time. Give the exceptions.', short: 'It is mandatory when (1) time is of the essence; (2) the statute uses negative words; or (3) the period was intended as a limitation of the officer\'s power, authority or right (§8.22; <i>PAFLU v. Secretary of Labor</i>).', keys: 'essence; negative words; limitation of power' },
		{ cat: 'A', level: 2, topic: 'Constitutional periods', q: 'State the constitutional periods for deciding cases in the Supreme Court, the lower collegiate courts, the other lower courts and the Constitutional Commissions.', short: 'Supreme Court: 24 months; lower collegiate courts: 12 months unless reduced by the Supreme Court; all other lower courts: 3 months; all counted from submission (Art. VIII, Sec. 15(1)). Constitutional Commissions: 60 days from submission (Art. IX-A, Sec. 7). A late decision remains valid under Sec. 15(4).', keys: '24/12/3; 60 days; from submission; Sec. 15(4)' },
		{ cat: 'A', level: 2, topic: 'Election laws', q: 'When does a provision on the conduct of elections remain mandatory even after the election?', short: 'When (1) its violation obstructs the free and intelligent casting of votes or the ascertainment of the result; (2) it affects an essential element of the election; or (3) the statute expressly declares the act essential or its omission fatal (§8.15).', keys: 'obstructs; essential element; expressly fatal' },
		// D
		{ cat: 'D', level: 2, topic: 'Words', q: 'The word "shall" in a statute always makes the provision mandatory.', tf: false, a: '"Shall" is only presumed mandatory. It may be read as "may" when the context, intent or consequences so require (§8.08).', keys: 'Agpalo §§8.05–8.08', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Effects', q: 'Acts executed against mandatory or prohibitory laws are void, except when the law itself authorizes their validity.', tf: true, a: 'This restates Art. 5 of the Civil Code.', keys: 'Art. 5, Civil Code', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Time to decide', q: 'A trial judge who decides a case after the three-month constitutional period loses jurisdiction, and the decision is void.', tf: false, a: 'Art. VIII, Sec. 15(4) directs the court to decide even after the period expires, without prejudice to administrative responsibility. The decision is valid.', keys: 'Art. VIII, Sec. 15(4); Agpalo §8.23', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Litigant deadlines', q: 'Payment of the appellate docket fees within the period to appeal is mandatory for the perfection of an appeal.', tf: true, a: 'Rule 41, Sec. 4 requires payment within the period to appeal, and the Court treats it as mandatory and jurisdictional (<i>Enriquez v. Enriquez</i>; §8.13).', keys: 'Rule 41, Sec. 4; Enriquez', tag: 'requisites' },
		{ cat: 'D', level: 2, topic: 'Election laws', q: 'After an election, any irregularity by election officers in the conduct of the voting requires the rejection of the affected ballots.', tf: false, a: 'After the election, conduct rules are generally directory to protect innocent voters, unless the violation obstructs free voting or the result, affects an essential element, or the law declares it fatal (§8.15).', keys: 'Agpalo §8.15', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Qualifications', q: 'Qualifications for public office are continuing requirements that must exist at the start of the term and throughout its duration.', tf: true, a: 'Eligibility is continuing; one who is not qualified when assuming office, or loses a qualification during the term, becomes ineligible (§8.17).', keys: 'Agpalo §8.17', tag: 'requisites' },
		{ cat: 'D', level: 2, topic: 'Words', q: 'Prohibitory statutes using "shall not" are generally directory.', tf: false, a: 'Negative and prohibitory words are mandatory; prohibitions can rarely, if ever, be directory (§8.09).', keys: 'Agpalo §8.09', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Words', q: 'A statute conferring power on a public officer concerning the public interest is mandatory even if it uses the word "may."', tf: true, a: 'Such a statute imposes rather than confers; the power is held for the benefit of third persons (§8.10).', keys: 'Agpalo §8.10', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Jurisdictional', q: 'Because P.D. 1529 says publication in the Official Gazette suffices to confer jurisdiction, publication of the notice of initial hearing in a newspaper of general circulation may be dispensed with.', tf: false, a: '<i>Director of Lands v. CA</i> (1997) held newspaper publication mandatory as a requirement of due process; "shall" is imperative, and the Official Gazette is not widely read.', keys: 'Director of Lands v. CA, G.R. No. 102858 (1997)', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'Guidance', q: 'Requirements meant to guide officers in the conduct of business, for order, system and dispatch, are generally directory.', tf: true, a: 'Such requirements are directory unless accompanied by negative words providing that the act shall not be done in any other manner or time (§8.20).', keys: 'Agpalo §8.20', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Aquino', q: 'In Aquino v. Quezon City, the Court held that the notice of sale under Sec. 73 of P.D. 464 must actually be received by the delinquent taxpayer.', tf: false, a: 'Sec. 73 gives the treasurer the option to send the notice to the tax-record address or the known residence; nothing requires actual receipt. Compliance is measured by strictly following the statute.', keys: 'Aquino v. Quezon City (2006)', tag: 'jurisprudence' },
		// B
		{ cat: 'B', level: 3, topic: 'Definitions', q: 'Distinguish mandatory from directory statutes as to definition, test and effect of non-compliance.', short: '<b>Definition:</b> mandatory = must be obeyed on pain of nullity or sanction; directory = a guide whose breach does not void the act. <b>Test:</b> for both, legislative intent from the whole statute, purpose and consequences; a requirement is directory if no substantial rights depend on it, no injury results, and its purpose can be met otherwise. <b>Effect:</b> mandatory → void act (Art. 5, Civil Code); directory → valid act, possible administrative sanction.', keys: 'nullity vs. irregularity; intent and consequences; Art. 5' },
		{ cat: 'B', level: 3, topic: 'Time', q: 'Distinguish the period to appeal from the period within which a court must decide a case. Why are they treated differently?', short: 'The period to appeal (and to pay docket fees) binds the <b>litigant</b> and is mandatory and jurisdictional: a late appeal is not perfected (Rule 41, Sec. 4; <i>Enriquez</i>). The period to decide binds the <b>court</b> and is directory as to time: a late decision is valid, though the judge may be sanctioned (§8.22; <i>Querubin</i>; Art. VIII, Sec. 15(4)).', a: 'Reason: parties control their own filings and must bear the consequences of delay, and finality needs firm deadlines. But parties do not control the judge, and voiding late decisions would punish them for delay they did not cause.', keys: 'litigant vs. court; mandatory vs. directory; finality; parties not at fault' },
		{ cat: 'B', level: 3, topic: 'Election laws', q: 'Distinguish the treatment of election laws on the conduct of elections before and after the election.', short: 'Before the election, in a direct proceeding, they are mandatory and compliance may be compelled. After the election they are generally directory, so ballots are not voided for officials\' lapses, unless the violation obstructs free voting or the result, affects an essential element, or the law declares it fatal (§8.15). Qualification rules are mandatory either way.', keys: 'before mandatory; after directory; exceptions; qualifications always mandatory' },
		// F
		{ cat: 'F', level: 3, topic: 'Aquino', q: 'In Aquino v. Quezon City, was the Sec. 65 notice of delinquency mandatory? If so, why were the sales upheld despite the absence of posting and publication?', short: 'Yes. Read with Sec. 67, the notice is a prerequisite to every collection remedy; "as required in Section sixty-five" underscores its mandatory nature. But the sales stood because a tax sale is <i>in personam</i>: what protects the taxpayer is notice sent directly to him, and the Aquinos admitted receiving notice by registered mail. Posting and publication were not indispensable once the purpose of notice was achieved.', keys: 'mandatory notice; in personam; direct notice suffices; Talusan v. Tayag' },
		{ cat: 'F', level: 3, topic: 'Magtajas', q: 'How did the Court in Magtajas use the mandatory character of "shall" in Sec. 458 of the LGC?', short: 'It showed the absurd consequence of the petitioners\' reading. If "gambling" included legal gambling, then "shall" would <i>require</i> every LGU to suppress even gambling authorized by statute, leaving PAGCOR "a toothless tiger or a white elephant." That consequence confirmed that "gambling" means illegal gambling.', keys: '"shall" mandatory; consequence; toothless tiger' },
		{ cat: 'F', level: 4, topic: 'Catiis', q: 'In Catiis, the Information alleged no aggravating circumstance. Classify the rule requiring that aggravating circumstances be alleged, and explain its effect on bail.', short: 'It is mandatory. Rule 110, Secs. 8–9 require qualifying and aggravating circumstances to be specified in the Information, and unalleged circumstances cannot be considered even if proved (<i>Casitas</i>; <i>Bragat</i>). The rule states its own consequence, which marks a mandatory provision. With none alleged, only reclusion temporal was imposable, so the offense was bailable as a matter of right.', keys: 'mandatory; consequence stated; cannot be considered; reclusion temporal; bail as of right' },
		// E
		{
			cat: 'E',
			level: 4,
			topic: 'Litigant deadlines',
			title: 'Ch. VIII — The late docket fees',
			facts: 'Atty. Reyes received the RTC decision against her client on March 1. She filed a notice of appeal on March 15, the last day of the 15-day period, but paid the appellate docket fees only on March 18, explaining that the cashier\'s line was long and that the delay was only three days. The appellee moves to dismiss the appeal.',
			q: 'Should the appeal be dismissed? Answer using ALAC.',
			alac: {
				answer: 'Yes. The appeal was not perfected because the docket fees were not paid within the period to appeal.',
				legalBasis: 'Periods for litigants to act or appeal are mandatory (Agpalo §8.13). Rule 41, Sec. 4 requires the appellant to pay the full appellate docket and other lawful fees "within the period for taking an appeal," and payment within that period is mandatory and jurisdictional (<i>Enriquez v. Enriquez</i>). Liberal construction of the Rules does not excuse a mandatory and jurisdictional requirement, save in exceptional cases for compelling reasons.',
				application: 'The period ended on March 15. The notice of appeal was timely, but the fees were paid on March 18, outside the period. Both steps are required to perfect the appeal. A long cashier\'s line is not a compelling reason; it is an ordinary risk counsel could have avoided by paying earlier. The shortness of the delay does not matter because a mandatory period is not satisfied by substantial compliance.',
				conclusion: 'The appeal should be dismissed, and the RTC decision becomes final.'
			},
			weaker: 'Counsel\'s plea for liberality confuses the directory treatment of <i>courts\'</i> deadlines with the mandatory treatment of <i>litigants\'</i> deadlines.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Time to decide',
			title: 'Ch. VIII — The late decision',
			facts: 'A civil case was submitted for decision in an RTC on January 10. Judge Santos decided it on June 2, beyond the three-month period in Art. VIII, Sec. 15(1). The losing party moves to annul the decision for lack of jurisdiction, arguing that the Constitution itself calls the period "mandatory."',
			q: 'Is the decision void? Answer using ALAC.',
			alac: {
				answer: 'No. The decision is valid, although Judge Santos may be held administratively liable.',
				legalBasis: 'Art. VIII, Sec. 15(1) requires lower courts to decide within three months from submission, but Sec. 15(4) provides that despite the expiration of the "applicable mandatory period," the court, "without prejudice to such responsibility as may have been incurred," shall still decide the case. Periods for courts and officials to decide are directory as to time (Agpalo §§8.22–8.23; <i>Querubin v. CA</i>).',
				application: 'The decision came almost five months after submission, beyond the three-month period. But the Constitution itself contemplates decisions after the period and keeps the court\'s duty to decide; the word "mandatory" refers to the judge\'s duty and possible liability, not to the court\'s jurisdiction. Voiding the decision would punish the parties, who did not cause the delay.',
				conclusion: 'The motion to annul should be denied; the delay may be the subject of an administrative complaint against the judge.'
			},
			weaker: 'Reading "mandatory" in Sec. 15 as jurisdictional ignores Sec. 15(4), which would be pointless if late decisions were void.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Election laws',
			title: 'Ch. VIII — The unsigned ballots',
			facts: 'A (hypothetical) election statute requires the chair of each board of election inspectors to sign the back of every ballot before handing it to the voter. The statute is silent on the effect of a missing signature. In one precinct the chair forgot to sign 300 ballots, which were otherwise genuine, properly cast and counted. There is no evidence of fraud. After the election, the losing candidate files a protest asking that the 300 ballots be declared invalid.',
			q: 'Should the 300 ballots be invalidated? Answer using ALAC.',
			alac: {
				answer: 'No. The signature requirement is directory after the election, and the ballots should be counted.',
				legalBasis: 'Election laws on the conduct of elections are mandatory before the election but generally directory after it, so that innocent voters are not disenfranchised, unless the violation obstructs the free and intelligent casting of votes or the ascertainment of the result, affects an essential element of the election, or the statute expressly declares the act essential or its omission fatal (Agpalo §8.15).',
				application: 'The protest was filed after the election. The duty to sign belonged to the election officer, not the voters. The statute does not declare unsigned ballots void, and there is no showing of fraud or that the omission affected how votes were cast or counted. The signature is an authentication measure whose purpose (ensuring genuine ballots) is satisfied here, since the ballots are admittedly genuine. None of the three exceptions applies.',
				conclusion: 'The 300 ballots are valid and should be counted; the chair may be held liable for the lapse.'
			},
			weaker: 'Invalidating the ballots would disenfranchise 300 voters for an official\'s mistake. If the statute had said unsigned ballots "shall be void," the result would differ.'
		},
		// G
		{
			cat: 'G',
			level: 5,
			topic: 'Time to decide',
			title: 'Ch. VIII — The deemed-approved permit',
			facts: 'A (hypothetical) city ordinance-enabling statute provides: "The Mayor shall act on an application for a business permit within 30 days from its filing. Applications not acted upon within such period shall be deemed approved." Liza filed a complete application on May 1. On June 20 the Mayor denied it, citing a pending complaint by a neighbor. Liza argues that her permit was deemed approved on May 31. The city argues that periods for officials to act are merely directory, as in <i>Querubin</i>.',
			q: 'Who is correct? Discuss using ALAC.',
			alac: {
				answer: 'Liza is correct. The 30-day period is mandatory because it limits the Mayor\'s power, so the application was deemed approved and the late denial is void.',
				legalBasis: 'A period for a public officer to act is generally directory as to time (Agpalo §8.22; <i>Querubin v. CA</i>), but it is mandatory when time is of the essence, when the statute uses negative words, or when the period is intended as a limitation of the officer\'s power or authority (<i>PAFLU v. Secretary of Labor</i>). Under the consequences test, a statute that prescribes a result in addition to the requirement is mandatory (§§8.03–8.04).',
				application: 'The statute does more than set a target date: it states what happens when the Mayor does not act in time, namely the application is "deemed approved." That attached consequence shows the legislature meant the Mayor\'s power to deny to end at the 30th day. <i>Querubin</i> is different: the statute there fixed a period without saying what happens after it, and voiding a late decision would have hurt the parties. Here, treating the period as directory would hurt the applicant and nullify the "deemed approved" clause.',
				conclusion: 'Liza\'s permit was deemed approved on May 31; the June 20 denial is without effect, though the city may proceed against her through proper revocation proceedings if grounds exist.'
			},
			weaker: 'The city\'s reading would make the "deemed approved" clause meaningless, contrary to the rule that every part of a statute be given effect (Ch. VI).'
		},
		{
			cat: 'G',
			level: 5,
			topic: 'Tax sales',
			title: 'Ch. VIII — Two auctions, two notices',
			facts: 'A municipality\'s tax code reproduces Secs. 65, 67 and 73 of P.D. 464 word for word. Two delinquent lots are auctioned. For Lot A, the treasurer mailed the notice of delinquency by registered mail to the owner\'s address in the tax records, where she received it, but did not post it at the barangay hall or publish it. For Lot B, the treasurer posted and published the notice of delinquency but sent nothing to the owner, whose correct address appeared in the tax records. Both owners sue to annul the sales.',
			q: 'Is either sale void? Discuss using ALAC, applying <i>Aquino v. Quezon City</i> and the rules on mandatory statutes.',
			alac: {
				answer: 'The sale of Lot A is valid. The sale of Lot B is vulnerable to annulment for want of the notice that is indispensable in an <i>in personam</i> tax sale.',
				legalBasis: 'The notice of delinquency is a mandatory prerequisite to every collection remedy, including sale (<i>Aquino</i>, reading Secs. 65 and 67 together). Public auction procedures, being in derogation of property rights, are mandatory and must be strictly followed (Agpalo §8.19). But a tax sale is <i>in personam</i>, so what is indispensable is notice sent directly to the taxpayer; posting and publication are not indispensable once direct notice is given (<i>Aquino</i>, applying <i>Talusan v. Tayag</i>). A requirement whose purpose is achieved another way with substantially the same result is treated as satisfied (§8.04).',
				application: '<b>Lot A:</b> the owner received direct notice at her tax-record address. That is exactly what <i>Aquino</i> held sufficient; the lack of posting and publication does not void the sale. <b>Lot B:</b> the treasurer did the reverse, using only posting and publication. Under <i>Talusan</i>, as applied in <i>Aquino</i>, publication alone does not suffice for an <i>in personam</i> proceeding. The mandatory protection, direct notice to the owner, was never given, though the correct address was in the records.',
				conclusion: 'Lot A\'s sale stands. Lot B\'s sale should be annulled, subject to the owner\'s payment of the delinquent taxes and any applicable rules on reimbursement of the buyer.'
			},
			weaker: 'Treating posting and publication as interchangeable with direct notice ignores the reason <i>Aquino</i> gave: in a proceeding <i>in personam</i>, what protects the taxpayer is notice addressed to him.'
		}
	],

	memoryAids: [
		['Consequences test', '<b>R-T-A-S-P</b>: Result attached · Third persons · Alternative? · Substance · Public injury.'],
		['Directory "effect" test', '<b>No rights · No injury · Same result</b> (all three).'],
		['Who bears the deadline?', '"<b>Litigant late = lost. Judge late = liable, not lost.</b>"'],
		['Election rules', '"<b>Before: must. After: may</b>, unless obstructs, essential, or expressly fatal."'],
		['Time-limit exceptions', '<b>Essence · Negative words · Power ends.</b>'],
		['Constitutional periods', '<b>24 · 12 · 3 · 60.</b>']
	],
	flashcards: [
		['Define a mandatory statute.', 'One whose command must be obeyed on pain of sanction or nullity of what is done in disregard of it.'],
		['Define a directory statute.', 'One that merely guides; non-compliance is an irregularity that does not void the act.'],
		['Art. 5, Civil Code?', 'Acts against mandatory or prohibitory laws are void, except when the law itself authorizes their validity.'],
		['Is "shall" conclusive?', 'No; presumed mandatory, but intent, context and consequences control.'],
		['When does "may" mean "shall"?', 'When justice or public duty requires the act, or a power concerning public interest or private rights is given to an officer.'],
		['Negative words like "shall not" and "only"?', 'Mandatory; prohibitions can rarely, if ever, be directory.'],
		['Docket fees paid after the appeal period?', 'Appeal not perfected; mandatory and jurisdictional (<i>Enriquez</i>; Rule 41, Sec. 4).'],
		['Decision rendered after the period to decide?', 'Valid; directory as to time; judge may be sanctioned (Art. VIII, Sec. 15(4); <i>Querubin</i>).'],
		['Three exceptions making an official\'s time limit mandatory?', 'Time of the essence; negative words; period limits the power.'],
		['Election-conduct rules after the election?', 'Generally directory, unless they obstruct free voting or the result, affect an essential element, or the law declares the omission fatal.'],
		['Qualifications for office?', 'Mandatory and continuing.'],
		['Newspaper publication in land registration?', 'Mandatory (<i>Director of Lands v. CA</i>, 1997), despite the OG-jurisdiction proviso.'],
		['Notice of delinquency in a tax sale (<i>Aquino</i>)?', 'Mandatory prerequisite to every remedy; direct mailed notice suffices; no actual-receipt requirement in Sec. 73.'],
		['Public auction sale procedure?', 'Mandatory; strictly followed, or the sale is void (§8.19).'],
		['Supreme Court period to decide?', '24 months from submission.'],
		['Constitutional Commissions period to decide?', '60 days from submission (Art. IX-A, Sec. 7).']
	],
	recall: [
		['Give the five questions of the consequences test.', 'Result attached? Third persons hurt? No alternative? Substance not form? Greater public injury if disregarded?'],
		['Give the three conditions for treating a requirement as directory.', 'No substantial rights depend on it; no injury from ignoring it; purpose achievable otherwise with substantially the same result.'],
		['List ten mandatory requirements.', 'Power-conferring statutes; benefit conditions; jurisdictional steps; litigant deadlines; essential/protective procedure; election rules before election; candidate qualifications; office qualifications; tax-assessment protections; auction procedure.'],
		['List four directory requirements.', 'Guidance for officers; manner of judicial action; time to decide; constitutional periods as to validity.'],
		['When is an official\'s time limit mandatory?', 'Time of the essence; negative words; limitation of power.'],
		['What does Art. VIII, Sec. 15(4) provide?', 'Despite expiration of the mandatory period, the court shall decide without further delay, without prejudice to responsibility incurred.'],
		['How did Director of Lands v. CA treat newspaper publication?', 'As mandatory for due process, despite the proviso that OG publication confers jurisdiction.'],
		['How did Aquino treat posting and publication?', 'Not indispensable when notice was sent directly to the owner; a tax sale is in personam.'],
		['How did Magtajas use "shall"?', 'To show the petitioners\' reading would compel every LGU to ban legal gambling.'],
		['State Art. 5 of the Civil Code.', 'Acts against mandatory or prohibitory laws are void, except when the law itself authorizes their validity.']
	],
	summary: {
		rules: [
			'Mandatory = breach voids or sanctions; directory = breach is an irregularity only.',
			'Test: legislative intent, read through the whole statute, purpose and consequences.',
			'"Shall" presumed mandatory, "may" permissive, negatives mandatory; all can flip.',
			'Mandatory: jurisdiction, litigant deadlines, benefits, qualifications, tax and auction protections, election rules before voting.',
			'Directory: guidance, manner of judicial action, time to decide (unless essence, negative words, or limit of power).',
			'Art. 5, Civil Code; Art. VIII, Sec. 15(4).'
		],
		distinctions: ['Mandatory vs. directory.', '"Shall" vs. "may."', 'Litigant deadlines vs. court deadlines.', 'Election rules before vs. after voting.', 'Jurisdictional vs. order-and-method requirements.'],
		cases: ['<i>Aquino</i>: mandatory notice; direct notice suffices; no actual receipt.', '<i>Catiis</i>: Rule 110 states its own consequence (mandatory).', '<i>Magtajas</i>: "shall" used to test consequences.', '<i>Corona</i>: forum fixed by law protects the employee.'],
		traps: ['"Shall = always mandatory."', '"Late judge = void decision."', '"Late litigant = excused like a judge."', '"Directory = optional."', '"Every Sec. 65 mode is indispensable."']
	},
	checklist: [
		'I can define mandatory and directory statutes and state Art. 5 of the Civil Code.',
		'I can apply the consequences test and the effect test to a new provision.',
		'I can explain when "shall" means "may" and vice versa.',
		'I can list the mandatory and directory categories from memory.',
		'I can explain why a late appeal is fatal but a late decision is not, citing Art. VIII, Sec. 15(4).',
		'I can apply the before/after rule for election laws and its three exceptions.',
		'I can explain how <i>Aquino</i> treated the notice requirements.'
	],
	watchFor: `<strong>Watch for: who must comply, and what the law says happens if they don\'t.</strong>
<ul>
<li>Litigant deadlines (appeal, docket fees) are mandatory; court and official deadlines are directory as to time, unless the law makes the power lapse ("deemed approved").</li>
<li>"Shall" and "may" are presumptions only; negative words are mandatory.</li>
<li><i>Aquino</i>: the notice of delinquency is mandatory, but direct mailed notice suffices and actual receipt is not required.</li>
</ul>`
};
