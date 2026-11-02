import { ul, type Chapter } from './model';

export const ch9: Chapter = {
	id: 'ch9',
	n: 9,
	roman: 'IX',
	title: 'Prospective and Retroactive Statutes',
	short: 'Ch. IX — Prospective & Retroactive Statutes',
	sections: '§§9.01–9.27',

	plain: `Laws look forward: they govern what happens <b>after</b> they take effect. A law reaches back to past acts or rights only if the legislature clearly says so, or if it is the kind of law that naturally reaches back: procedural laws, curative laws, and penal laws that help the accused. Even then, it cannot take away vested rights, impair contracts, deny due process, or punish past acts after the fact (ex post facto).`,
	overview: `<p><b>Part A (§§9.01–9.05)</b> defines retroactive laws, states the presumption that laws are prospective (Art. 4, Civil Code), and sets the constitutional limits on retroactivity. <b>Part B (§§9.06–9.16)</b> covers statutes given prospective effect: penal laws (with the ban on ex post facto laws and bills of attainder, and the exception for laws favorable to the accused), substantive laws, vested rights, jurisdiction and contracts. <b>Part C (§§9.17–9.27)</b> covers statutes given retroactive effect: procedural, curative and remedial laws, and laws on prescription. The chapter closes with the effect of judicial decisions: the Supreme Court\'s interpretation is part of the law from its enactment, but a doctrine that is <i>overruled</i> is changed only prospectively.</p>
<p>Exam questions in this chapter almost always turn on <b>two questions in order</b>: (1) Did the legislature intend retroactivity, expressly or because of the law\'s nature? (2) If so, does retroactivity hit a constitutional wall: a vested right, a contract, due process, or the ex post facto clause?</p>`,
	questions: [
		'What is a retroactive law, and why are laws presumed prospective?',
		'When may a statute validly operate retroactively?',
		'What is an ex post facto law? A bill of attainder?',
		'When do penal laws apply retroactively, and to whom do they not apply?',
		'What are vested rights, and why do they block retroactivity?',
		'Why do procedural and curative laws apply to pending cases, and when do they not?',
		'What happens to those who relied on a doctrine the Supreme Court later abandons?'
	],
	keyPoints: [
		'Art. 4, Civil Code: laws have no retroactive effect unless the contrary is provided; in doubt, against retroactivity.',
		'Retroactivity is valid unless it impairs contracts, takes property without due process, divests vested rights, or is ex post facto.',
		'Penal laws are prospective, but retroactive if favorable to an accused who is not a habitual criminal, even after final judgment (Art. 22, RPC).',
		'The ex post facto ban is limited to criminal or penal matters.',
		'Procedural laws apply to pending cases (no vested right in procedure), subject to exceptions.',
		'Curative statutes may operate retroactively if they do not impair vested rights or contracts; police-power measures may go further.',
		'An overruled doctrine is replaced prospectively: those who relied on it in good faith are protected (<i>Jabinal</i>; <i>Co v. CA</i>).'
	],
	connects: `Chapter IX is the time dimension of construction. It links to Chapter VII (penal laws strictly construed; prescription of crimes liberally construed), to Chapter X (amendments and repeals also operate prospectively; the effects of repeal on vested rights and pending cases), and to Chapter II (stare decisis; <i>legis interpretatio legis vim obtinet</i>). None of the five assigned cases turns on retroactivity; see part 8.`,
	objectives: [
		'Define a retroactive law and state the presumption of prospectivity with its basis.',
		'Enumerate the constitutional limits on retroactive legislation.',
		'Enumerate the six kinds of ex post facto laws and the elements of a bill of attainder.',
		'Apply Art. 22 of the RPC and its exceptions, including the remedy after final judgment.',
		'Explain why procedural and curative laws apply retroactively, and the exceptions.',
		'Distinguish judicial interpretation (retroactive to enactment) from overruling (prospective).',
		'Solve an ALAC problem involving a favorable penal law and a habitual delinquent.'
	],

	concepts: [
		{
			term: 'Prospective statute',
			plain: 'A law that covers only what happens after it takes effect.',
			legal: 'A statute that operates on acts, transactions and rights arising after its effectivity. All statutes are presumed prospective (§§9.01–9.03).',
			why: 'People should be judged by the law in force when they acted.',
			example: 'A 2025 law banning plastic straws "effective upon publication" cannot be used to fine a restaurant for 2024 sales.',
			confuse: 'A law that merely <i>affects</i> past facts in shaping future consequences; using past facts as a basis for future regulation is not necessarily retroactive.'
		},
		{
			term: 'Retroactive statute (legal sense)',
			plain: 'A law that reaches back and changes the legal effect of what already happened.',
			legal: 'One that takes away or impairs vested rights acquired under existing laws, or creates a new obligation, imposes a new duty, or attaches a new disability in respect of transactions or considerations already past (§9.01).',
			why: 'Defining it this way identifies what fairness forbids: changing the rules after people relied on them.',
			example: 'A law reducing retirement bonuses already earned and paid under the old law.',
			confuse: 'Ex post facto law, which is only the <i>criminal</i> kind of retroactive law.'
		},
		{
			term: 'Presumption of prospectivity',
			plain: 'When in doubt, the law looks forward.',
			legal: '"Laws shall have no retroactive effect, unless the contrary is provided" (Art. 4, Civil Code). All laws operate prospectively unless the contrary is clearly, plainly and unequivocally expressed or necessarily implied; doubt is resolved against retroactivity. The presumption covers original enactments, amendments and repeals (§§9.02–9.03).',
			why: 'Retroactivity upsets settled expectations and can be unjust.',
			example: 'Phrases like "from and after its approval" confirm prospectivity (§9.04).',
			confuse: 'A constitutional ban. The Constitution does not forbid retroactive laws as such; it forbids certain effects (§9.05).'
		},
		{
			term: 'Vested right',
			plain: 'A right that is already fully yours, not just hoped for.',
			legal: 'A right that has become fixed and established, no longer open to doubt or controversy, and that the law protects from impairment by later legislation. There is no vested right in a rule of law staying unchanged, in a particular remedy or procedure, or in the omission to legislate; inchoate rights not yet acted on are not vested (§§9.10–9.13).',
			why: 'Retroactive laws are tolerable only so long as they do not take away what people already own.',
			example: 'A retirement bonus already earned under the law in force at retirement.',
			confuse: 'An expectation, such as hoping a tax rate will stay low.'
		},
		{
			term: 'Ex post facto law',
			plain: 'A law that punishes, or punishes more, something done before the law existed.',
			legal: 'A law that, in criminal matters, (1) makes criminal an act innocent when done; (2) aggravates a crime; (3) inflicts a greater penalty; (4) alters the rules of evidence to convict on less or different testimony; (5) under the guise of regulating civil rights, imposes a penalty or deprivation for an act lawful when done; or (6) deprives the accused of a lawful protection already acquired, such as a former acquittal or amnesty. Prohibited by Art. III, Sec. 22 (§9.07).',
			why: 'Fair warning: no one should be punished under rules made after the act.',
			example: 'A 2026 law raising the penalty for estafa cannot apply to estafa committed in 2025.',
			confuse: 'Retroactive civil laws. The ex post facto clause covers only criminal or penal matters; civil retroactivity is tested by due process and the contract clause.'
		},
		{
			term: 'Bill of attainder',
			plain: 'A law that declares people guilty and punishes them without a trial.',
			legal: 'A legislative act that inflicts punishment without judicial trial; its essence is the substitution of a legislative for a judicial determination of guilt (§9.08; <i>People v. Ferrer</i>, 48 SCRA 382 (1972)).',
			why: 'Separation of powers: only courts adjudge guilt.',
			example: '<i>Ferrer</i> upheld the Anti-Subversion Act because guilt still had to be proved at trial, and the Act operated prospectively.',
			confuse: 'Ex post facto law. A bill of attainder is also usually ex post facto; if a law is not ex post facto, that is persuasive that it is not a bill of attainder.'
		},
		{
			term: 'Favorable penal law (Art. 22, RPC)',
			plain: 'If the law later becomes kinder to the offender, the offender gets the benefit.',
			legal: '"Penal laws shall have a retroactive effect insofar as they favor the person guilty of a felony, who is not a habitual criminal, as this term is defined in Rule 5 of Article 62 of this Code, although at the time of the publication of such laws a final sentence has been pronounced and the convict is serving the same" (Art. 22, RPC; §9.09).',
			why: 'Justice and humanity: <i>favorabilia sunt amplianda, odiosa restringenda</i>.',
			example: 'A new law lowers the penalty for a theft amount: a non-habitual convict already serving sentence may benefit.',
			confuse: 'Habitual delinquents, who are excluded.'
		},
		{
			term: 'Procedural (adjective) law',
			plain: 'Rules on how to enforce rights in court, not on what the rights are.',
			legal: 'A law prescribing rules and forms of procedure for enforcing rights or obtaining redress. It applies to actions pending and undetermined at its passage, because no one has a vested right in procedure; in that sense it is retroactive (§9.19).',
			why: 'Procedure serves justice; better procedures should apply as soon as possible.',
			example: '<i>Subido v. Sandiganbayan</i>: R.A. 7975, amending P.D. 1606 on jurisdiction and procedure, applied to pending cases.',
			confuse: 'Substantive law, which creates or defines rights and is prospective.'
		},
		{
			term: 'Curative statute',
			plain: 'A law that fixes past defects so that acts or proceedings become valid.',
			legal: 'A statute that cures defects in prior acts or proceedings and adds to the means of enforcing existing obligations; it validates what the legislature could have authorized in the first place. It may be given retroactive effect if it does not impair vested rights or contract obligations (§§9.21–9.23).',
			why: 'To give effect to what the parties intended where only a technical defect stood in the way.',
			example: 'LGC Sec. 442(d) treats municipal districts created by presidential issuances as regular municipalities, curing the earlier defect in their creation.',
			confuse: 'Remedial statute in general. Every curative statute is remedial, but not every remedial statute cures a past defect.'
		},
		{
			term: 'Prospective overruling; <i>legis interpretatio legis vim obtinet</i>',
			plain: 'The Supreme Court\'s reading of a law counts as part of the law from the start, but if the Court changes its mind, the new reading applies only going forward.',
			legal: 'Judicial decisions applying or interpreting the laws form part of the legal system (Art. 8, Civil Code), and the interpretation is deemed part of the law as of its enactment. But when a doctrine is overruled, the new doctrine operates prospectively and does not prejudice those who relied on the old one in good faith (<i>People v. Jabinal</i>; <i>Co v. CA</i>).',
			why: 'People must be able to rely on the law as the Court declared it when they acted.',
			example: '<i>Jabinal</i>: a secret agent who possessed a firearm while <i>Macarandang</i> exempted secret agents was acquitted even though <i>Mapa</i> later abandoned that doctrine.',
			confuse: 'A first interpretation of an unchanged statute, which is treated as having been the law all along.'
		}
	],

	principles: [
		{
			name: 'Laws are presumed prospective',
			rule: 'Laws have no retroactive effect unless the contrary is provided. A statute operates prospectively unless the intent to give it retroactive effect is clearly, plainly and unequivocally expressed or necessarily implied. Doubt is resolved against retroactivity. The presumption applies to original enactments, amendments and repeals.',
			basis: 'Art. 4, Civil Code; Agpalo §§9.01–9.04.',
			why: 'Retroactive laws upset settled expectations and may be unjust.',
			when: 'Any question whether a new law applies to acts, rights or cases that arose before its effectivity.',
			limits: 'The presumption yields to clear intent, and certain kinds of laws are retroactive by nature (procedural, curative, favorable penal laws).',
			differs: 'Art. 4 states a presumption; the Constitution states prohibitions on particular retroactive effects.',
			example: 'A law "effective fifteen days after publication" with no retroactivity clause does not govern a contract executed the year before.'
		},
		{
			name: 'When retroactivity is permitted, and its constitutional limits',
			rule: 'The Constitution does not forbid retroactive laws as such. A statute may be retroactive if the legislature so intends and the statute does not (1) impair the obligation of contracts, (2) deprive a person of property without due process, (3) divest vested rights, or (4) amount to an ex post facto law. If a law expressly says it is retroactive, the only question is whether that violates the Constitution.',
			basis: 'Agpalo §9.05; Art. III, Secs. 1, 10 and 22, 1987 Constitution; Art. 2253, Civil Code (new rights); Art. 256, Family Code.',
			why: 'Legislative intent controls within constitutional bounds.',
			when: 'A law expressly provides for retroactivity, or is of a kind that is retroactive by nature.',
			limits: 'Retroactive laws cannot take away vested rights. The Family Code, for instance, is retroactive only "insofar as it does not prejudice or impair vested or acquired rights" (Art. 256). New rights declared for the first time apply at once only if they do not impair vested rights of the same origin (Art. 2253, Civil Code).',
			differs: 'Ex post facto is one of four limits, and it applies only in criminal matters.',
			example: 'A law creating a new right to support for illegitimate children may apply to children born before it, but cannot undo a partition of an estate already final.'
		},
		{
			name: 'Penal laws: no ex post facto laws or bills of attainder',
			rule: 'No ex post facto law or bill of attainder shall be enacted. An ex post facto law is limited to criminal or penal matters; the test is whether the law, applied retroactively, takes from an accused any right that was regarded at the time as vital to the protection of life and liberty. A bill of attainder inflicts punishment without judicial trial.',
			basis: 'Art. III, Sec. 22, 1987 Constitution; Agpalo §§9.06–9.08; <i>People v. Ferrer</i>, 48 SCRA 382 (1972); <i>In re Kay Villegas Kami</i>, 35 SCRA 429 (1970).',
			why: 'Fair warning, and only courts adjudge guilt.',
			when: 'A penal law is applied to acts done before its effectivity, or a law punishes a designated person or group without trial.',
			limits: 'Changes favorable to the accused are not ex post facto. Procedural changes that do not affect substantial rights of the accused are not ex post facto.',
			differs: 'Retroactive civil laws are tested under due process and the contract clause, not the ex post facto clause.',
			example: '<i>Ferrer</i>: the Anti-Subversion Act was neither ex post facto nor a bill of attainder, because it applied only to membership after its effectivity and guilt had to be proved in court.'
		},
		{
			name: 'Penal laws favorable to the accused are retroactive (Art. 22, RPC)',
			rule: 'Penal laws cannot be given retroactive effect, except when favorable to the accused. Favorable penal laws apply to persons guilty of a felony who are not habitual criminals, even if a final sentence has been pronounced and the convict is serving it.',
			basis: 'Art. 22, RPC; Agpalo §9.09.',
			why: 'Justice and humanity: if the State now thinks the act deserves less punishment, it should not keep punishing it more.',
			when: 'A later law reduces the penalty, decriminalizes the act, removes subsidiary imprisonment, adds mitigating or extinguishing grounds, or shortens prescription.',
			limits: 'Not applicable (1) to a habitual criminal (as defined in Art. 62(5)), (2) where the new law expressly says it does not apply to pending cases, and (3) where the accused himself invokes the prior law. If the convict is already serving sentence, the remedy recognized in jurisprudence is a petition for habeas corpus.',
			differs: 'This is the mirror image of the ex post facto ban: unfavorable laws cannot reach back; favorable ones do.',
			example: 'Theft of property worth ₱15,000 is moved to a lighter penalty bracket by a new law: a first-time offender serving the old, heavier sentence may seek release once he has served the new maximum.'
		},
		{
			name: 'Substantive laws, vested rights, jurisdiction and contracts: prospective',
			rule: 'Substantive statutes are prospective. A statute may not be applied retroactively if it impairs a vested right, disturbs a right embodied in a judgment, creates new obligations for past transactions, or revives a right or liability already extinguished. A court that has acquired jurisdiction keeps it despite a later law transferring jurisdiction, unless the law provides otherwise expressly or by necessary implication. A law cannot impair the obligation of existing contracts.',
			basis: 'Agpalo §§9.10–9.16; Art. III, Sec. 10, Constitution.',
			why: 'Fixed rights and pending proceedings deserve stability.',
			when: 'A new law is invoked against rights already acquired or against a court\'s pending case.',
			limits: 'No one has a vested right in a rule of law staying unchanged, in a remedy, or in the omission to legislate. Police-power measures may affect contracts (§§9.22–9.23).',
			differs: 'Procedural laws, by contrast, do apply to pending cases (§9.19).',
			example: 'Maria retired with a 10% bonus under the law then in force; a later law cutting future bonuses to 5% cannot reduce hers.'
		},
		{
			name: 'Procedural laws apply to pending actions',
			rule: 'Statutes regulating procedure are applicable to actions pending and undetermined at the time of their passage, because no one has a vested right in procedure or a particular remedy.',
			basis: 'Agpalo §§9.17–9.20; <i>Subido v. Sandiganbayan</i> (R.A. 7975).',
			why: 'Procedure is a means to justice and does not create or take away rights.',
			when: 'A new rule of procedure takes effect while a case is pending.',
			limits: 'Not applied to pending cases when (1) the law expressly or impliedly provides otherwise, (2) application is not feasible or would work injustice, (3) it would involve intricate problems of due process or impair the independence of the courts, or (4) it would impair vested rights or contract obligations (§9.20).',
			differs: 'Substantive laws are prospective; procedural laws reach pending cases.',
			example: 'An amendment removing a bar on pauper appeals lets a pending pauper petition be considered.'
		},
		{
			name: 'Curative and remedial statutes may be retroactive',
			rule: 'Curative statutes, which cure defects in prior acts or proceedings and validate what the legislature could have authorized at the start, may be given retroactive effect, provided they do not impair vested rights or obligations of contracts.',
			basis: 'Agpalo §§9.21–9.23.',
			why: 'To carry out what the parties intended where only a technical defect stood in the way.',
			when: 'A law "confirms," "validates" or "ratifies" past acts.',
			limits: 'A curative law cannot validate what the legislature itself could not have authorized (an unconstitutional act), nor disturb rights already embodied in a final judgment. But a remedial or curative statute enacted as a police-power measure may be given retroactive effect even if it affects vested rights or contracts, when the legislative intent is clearly retrospective (§§9.22–9.23).',
			differs: 'Procedural laws govern how rights are enforced; curative laws validate past acts.',
			example: 'A law confirming sales of public land made within a period that a prior law had declared prohibited validates those sales.'
		},
		{
			name: 'Prescription',
			rule: 'Statutes of limitation on criminal prosecutions are acts of grace and are construed liberally in favor of the accused; a law shortening the prescriptive period is favorable and applies retroactively. The law aids the vigilant, not those who sleep on their rights (<i>vigilantibus et non dormientibus jura subveniunt</i>).',
			basis: 'Agpalo §§9.24–9.27; Art. 22, RPC; <i>People v. Moran</i>, 44 Phil. 387 (1923); <i>Yapdiangco v. Buencamino</i>, G.R. No. L-28841, June 24, 1983.',
			why: 'Time wears out proofs of innocence and guilt alike.',
			when: 'A dispute over whether a crime has prescribed, or whether a new prescriptive period applies.',
			limits: 'In <i>Yapdiangco</i>, the information for a light offense was filed on the 61st day because the 60th fell on a Sunday; the Court held the offense had prescribed. A Sunday or holiday does not extend the prescriptive period for criminal actions.',
			differs: 'The rule that a pleading due on a Sunday may be filed the next working day does not apply to prescription of crimes.',
			example: 'If a new law shortens the prescriptive period of an offense from 10 to 5 years, an accused whose offense was committed 6 years ago may invoke it.'
		},
		{
			name: 'Judicial decisions: interpretation is retroactive to enactment; overruling is prospective',
			rule: 'Judicial decisions applying or interpreting laws form part of the legal system, and the Court\'s interpretation of a statute is deemed part of it from its enactment (<i>legis interpretatio legis vim obtinet</i>). But when a doctrine is overruled and a different view adopted, the new doctrine applies prospectively and does not prejudice parties who relied on the old one in good faith.',
			basis: 'Art. 8, Civil Code; Art. VIII, Sec. 4(3), Constitution; <i>People v. Jabinal</i>, 55 SCRA 607 (1974); <i>Co v. CA</i>, G.R. No. 100776, Oct. 28, 1993.',
			why: 'Stability and fairness: <i>stare decisis et non quieta movere</i>; people must be able to rely on the law as declared.',
			when: 'An act was done while an earlier doctrine (or an official construction) prevailed and is judged after the doctrine changed.',
			limits: 'Only the Court en banc may modify or reverse a doctrine (Art. VIII, Sec. 4(3)). The protection is for good-faith reliance; it is strongest in criminal cases, where punishability must be foreseeable.',
			differs: 'A first interpretation of an unchanged statute is not a change of law and applies to past acts; an overruling is a change and does not.',
			example: '<i>Co v. CA</i>: Co issued a guarantee check in 1983, while a Ministry of Justice circular said such checks were outside B.P. 22. The later doctrine in <i>Que v. People</i> (1987) could not be applied to him.'
		}
	],

	enums: [
		{
			id: 'E9.1',
			name: 'Limits on retroactive legislation',
			source: 'Agpalo §9.05; Art. III, Secs. 1, 10, 22, 1987 Constitution.',
			kind: 'book',
			memorize: true,
			lead: 'A statute may be given retroactive effect provided it does not',
			items: [
				{ t: 'Impair the obligation of contracts', d: 'Art. III, Sec. 10: no law impairing the obligation of contracts shall be passed.', s: 'impair the obligation of contracts' },
				{ t: 'Deprive a person of property without due process', d: 'Art. III, Sec. 1.', s: 'deprive a person of property without due process of law' },
				{ t: 'Divest vested rights', d: 'Rights already fixed and established cannot be taken by later legislation.', s: 'divest vested rights' },
				{ t: 'Amount to an ex post facto law', d: 'Art. III, Sec. 22; criminal matters only.', s: 'operate as an ex post facto law' }
			],
			memory: '<b>C-D-V-E: Contracts · Due process · Vested rights · Ex post facto.</b>',
			tip: 'Start with the rule that the Constitution does not prohibit retroactive laws as such; these four are the limits. Note that police-power measures may affect contracts.',
			question: 'Is a retroactive law per se unconstitutional? What are the limits on retroactive legislation?'
		},
		{
			id: 'E9.2',
			name: 'Kinds of ex post facto laws',
			source: '<i>Calder v. Bull</i> (first four); Philippine decisions such as <i>In re Kay Villegas Kami</i>, 35 SCRA 429 (1970) state all six; Agpalo §9.07.',
			kind: 'case',
			ordered: true,
			memorize: true,
			lead: 'An ex post facto law is one which',
			items: [
				{ t: 'Makes criminal an act done before the law, innocent when done, and punishes it', d: 'Criminalizes past innocent conduct.', s: 'makes criminal an act innocent when done and punishes it' },
				{ t: 'Aggravates a crime, or makes it greater than it was when committed', d: 'Upgrades the offense after the fact.', s: 'aggravates a crime or makes it greater than when committed' },
				{ t: 'Changes the punishment and inflicts a greater penalty than the law annexed to the crime when committed', d: 'Increases the penalty retroactively.', s: 'inflicts a greater punishment than the law annexed when committed' },
				{ t: 'Alters the legal rules of evidence to convict on less or different testimony than the law required when the offense was committed', d: 'Lowers the bar for conviction after the fact.', s: 'alters the rules of evidence to convict on less or different testimony' },
				{ t: 'Assuming to regulate civil rights and remedies only, in effect imposes a penalty or deprivation of a right for something lawful when done', d: 'A penalty disguised as civil regulation.', s: 'under the guise of civil regulation, penalizes an act lawful when done' },
				{ t: 'Deprives a person accused of a crime of some lawful protection to which he has become entitled', d: 'E.g., the protection of a former conviction or acquittal, or a proclamation of amnesty.', s: 'deprives the accused of an acquired lawful protection (prior acquittal, amnesty)' }
			],
			memory: '<b>"Criminalize · Aggravate · Punish more · Prove less · Penalize as civil · Protection removed."</b>',
			tip: 'Add: the prohibition is limited to criminal or penal matters. Common mistake: listing an unfavorable civil law as ex post facto.',
			question: 'What is an ex post facto law? Enumerate its kinds.',
			verify: 'Wording follows the standard formulation. Only the first four come from <i>Calder v. Bull</i>; check the exact text in <i>Kay Villegas Kami</i> before quoting.'
		},
		{
			id: 'E9.3',
			name: 'Elements of a bill of attainder',
			source: 'Agpalo §9.08; <i>People v. Ferrer</i>, 48 SCRA 382 (1972).',
			kind: 'teaching',
			lead: 'A bill of attainder is',
			items: [
				{ t: 'A legislative act', d: 'Not a judicial or executive act.', s: 'a legislative act' },
				{ t: 'That singles out a specific person or a definite class', d: 'It identifies who is affected, by name or by readily ascertainable characteristics.', s: 'which singles out specific persons or a definite class' },
				{ t: 'That inflicts punishment or imposes a burden on them', d: 'A deprivation of life, liberty, property or rights by way of punishment.', s: 'and inflicts punishment on them' },
				{ t: 'Without judicial trial', d: 'The essence: a legislative, instead of a judicial, determination of guilt.', s: 'without judicial trial' }
			],
			memory: '<b>Legislature · Singles out · Punishes · No trial.</b>',
			tip: 'Lead with the essence from <i>Ferrer</i>: "the substitution of a legislative for a judicial determination of guilt." Add that a bill of attainder is usually also ex post facto, so if a law is not ex post facto, that is persuasive it is not a bill of attainder.',
			question: 'What is a bill of attainder? Why was the Anti-Subversion Act held not to be one?',
			verify: 'Another common listing of the elements: "singling out of a definite minority, imposition of a burden, legislative intent, and retroactive application to past conduct." This grouping follows the definition in <i>Ferrer</i>; check the decision\'s exact wording.'
		},
		{
			id: 'E9.4',
			name: 'When a favorable penal law does NOT apply retroactively',
			source: 'Art. 22, RPC; Agpalo §9.09.',
			kind: 'book',
			memorize: true,
			lead: 'A penal law favorable to the accused does not apply retroactively',
			items: [
				{ t: 'To a habitual criminal (habitual delinquent)', d: 'Art. 22 excludes one who is a habitual criminal as defined in Art. 62, Rule 5: within ten years from release or last conviction for serious or less serious physical injuries, robo, hurto, estafa or falsification, he is found guilty of any of them a third time or oftener.', s: 'when the offender is a habitual criminal under Art. 62(5)' },
				{ t: 'When the new law expressly provides that it shall not apply to pending cases', d: 'The legislature may limit the benefit.', s: 'when the new law expressly excludes pending actions' },
				{ t: 'When the accused invokes the prior law instead', d: 'The benefit is the accused\'s to claim.', s: 'when the accused elects to be governed by the prior law' }
			],
			memory: '<b>Habitual · Expressly excluded · Elects old law.</b>',
			tip: 'The first is in the text of Art. 22; quote it. Also state the remedy if already serving sentence: a petition for habeas corpus.',
			question: 'When is a penal law favorable to the accused not given retroactive effect?',
			verify: 'Confirm the third exception in Agpalo.'
		},
		{
			id: 'E9.5',
			name: 'Statutes that may be given retroactive effect',
			source: 'Agpalo §§9.05, 9.09, 9.17–9.23; Art. 2253, Civil Code.',
			kind: 'teaching',
			memorize: true,
			lead: 'The following statutes may be given retroactive effect',
			items: [
				{ t: 'Statutes that expressly so provide', d: 'If they do not violate the four constitutional limits.', s: 'statutes expressly made retroactive, within constitutional limits' },
				{ t: 'Penal laws favorable to the accused', d: 'Except to habitual criminals (Art. 22, RPC).', s: 'penal laws favorable to a non-habitual accused' },
				{ t: 'Procedural (adjective) laws', d: 'They apply to pending cases, subject to §9.20.', s: 'procedural laws, to pending cases' },
				{ t: 'Curative statutes', d: 'If they do not impair vested rights or contracts.', s: 'curative statutes not impairing vested rights or contracts' },
				{ t: 'Remedial statutes enacted under the police power', d: 'Even if they affect vested rights or contracts, where the intent is clearly retrospective (§§9.22–9.23).', s: 'police-power remedial statutes with clearly retrospective intent' },
				{ t: 'Statutes creating new rights', d: 'Effective at once even as to prior acts, provided they do not impair vested rights of the same origin (Art. 2253, Civil Code).', s: 'statutes creating new rights, without impairing vested rights' }
			],
			memory: '<b>Express · Favorable penal · Procedural · Curative · Police power · New rights.</b>',
			tip: 'Close with the default: all other laws are prospective (Art. 4).',
			question: 'Laws are presumed prospective. What statutes may nevertheless be given retroactive effect?'
		},
		{
			id: 'E9.6',
			name: 'When a procedural law is NOT applied to pending cases',
			source: 'Agpalo §9.20.',
			kind: 'book',
			memorize: true,
			lead: 'A procedural law is not applied to pending cases when',
			items: [
				{ t: 'The law expressly or by implication provides otherwise', d: 'The legislature may limit it to cases filed after effectivity.', s: 'the law itself provides otherwise, expressly or impliedly' },
				{ t: 'Application is not feasible or would work injustice', d: 'E.g., a new step that can no longer be taken at the case\'s stage.', s: 'application would not be feasible or would work injustice' },
				{ t: 'It would involve intricate problems of due process or impair the independence of the courts', d: 'Constitutional concerns override retroactivity.', s: 'it would raise intricate due-process problems or impair judicial independence' },
				{ t: 'It would impair a vested right or an obligation of contract', d: 'The general constitutional limit.', s: 'it would impair vested rights or contracts' }
			],
			memory: '<b>Law says no · Unfeasible/unjust · Due process/independence · Vested rights.</b>',
			tip: 'State the general rule first: no vested right in procedure.',
			question: 'Procedural laws apply to pending actions. Are there exceptions?'
		},
		{
			id: 'E9.7',
			name: 'Statutes given prospective effect',
			source: 'Agpalo §§9.06–9.16.',
			kind: 'teaching',
			lead: 'The following are given prospective effect only',
			items: [
				{ t: 'Penal laws unfavorable to the accused', d: 'The ex post facto ban.', s: 'penal laws not favorable to the accused' },
				{ t: 'Substantive laws', d: 'Laws that create, define or regulate rights and duties.', s: 'substantive laws' },
				{ t: 'Laws that would impair vested rights', d: 'Including rights embodied in judgments and liabilities already extinguished.', s: 'laws that would impair vested rights' },
				{ t: 'Laws that would impair the obligation of contracts', d: 'Art. III, Sec. 10 (subject to police power).', s: 'laws impairing existing contracts' },
				{ t: 'Laws altering jurisdiction, as to pending cases', d: 'Unless they provide otherwise.', s: 'laws altering jurisdiction, as to pending cases' },
				{ t: 'Amendatory and repealing statutes', d: 'They too are presumed prospective (Ch. X).', s: 'amendments and repeals' },
				{ t: 'New doctrines overruling old ones, as to good-faith reliance', d: '<i>Jabinal</i>; <i>Co v. CA</i>.', s: 'overruling doctrines, as to those who relied in good faith' }
			],
			memory: '"<b>Anything that hurts the accused, takes rights, or changes the forum mid-case looks only forward.</b>"',
			tip: 'This is a study grouping drawn from §§9.06–9.16; present it as such.',
			question: 'What statutes are given prospective effect only?'
		},
		{
			id: 'E9.8',
			name: 'Things in which no one has a vested right',
			source: 'Agpalo §§9.10–9.13.',
			kind: 'teaching',
			lead: 'There is no vested right in',
			items: [
				{ t: 'A rule of law remaining unchanged', d: 'The legislature may change the law for the future.', s: 'the continuance of an existing rule of law' },
				{ t: 'A particular remedy or mode of procedure', d: 'Hence procedural laws reach pending cases.', s: 'a particular remedy or procedure' },
				{ t: 'The omission to legislate', d: 'No one can demand that Congress keep silent.', s: 'the legislature\'s continued failure to legislate' },
				{ t: 'Inchoate or expectant rights not yet acted on', d: 'Mere expectations are not vested.', s: 'mere expectations or inchoate rights' }
			],
			memory: '<b>No vested right in: the old rule, the old remedy, the old silence, or a hope.</b>',
			tip: 'Use this list to answer "Is X a vested right?" questions.',
			question: 'What is a vested right? Give examples of interests that are not vested rights.'
		}
	],

	reqs: [
		{
			name: 'A valid retroactive statute',
			source: 'Art. 4, Civil Code; Agpalo §9.05.',
			what: ul([
				'Retroactivity is <b>clearly intended</b> (expressly or by necessary implication), or the law is retroactive by nature.',
				'It does <b>not impair</b> the obligation of contracts.',
				'It does <b>not deprive</b> anyone of property without due process.',
				'It does <b>not divest</b> vested rights.',
				'It is <b>not ex post facto</b> (if penal).'
			]),
			why: 'Legislative intent controls, within constitutional bounds.',
			mode: 'Cumulative — all must concur',
			absent: 'No clear intent: the law is prospective (Art. 4). Constitutional limit violated: the law is not applied retroactively, or is void as so applied.',
			interacts: 'Police-power measures may affect contracts and vested rights where intent is clearly retrospective (§§9.22–9.23).',
			hypo: 'A 2026 law retroactively increases real property tax for 2024. It is a civil, not penal, law, so it is not ex post facto, but it may be challenged under due process if it is oppressive.'
		},
		{
			name: 'Retroactive benefit of a favorable penal law (Art. 22, RPC)',
			source: 'Art. 22, RPC; Agpalo §9.09.',
			what: ul([
				'A <b>penal</b> law.',
				'<b>Favorable</b> to the accused or convict.',
				'The person is <b>not a habitual criminal</b> (Art. 62(5)).',
				'The new law does <b>not exclude</b> pending cases.'
			]),
			why: 'Justice and humanity.',
			mode: 'Cumulative — all must concur',
			absent: 'If any requisite fails, the old law governs.',
			interacts: 'Applies even after final judgment; the remedy for a convict serving sentence is habeas corpus.',
			hypo: 'A convict with two prior estafa convictions within ten years who is convicted of estafa a third time is a habitual delinquent and cannot benefit.'
		},
		{
			name: 'A valid curative statute',
			source: 'Agpalo §§9.21–9.23.',
			what: ul([
				'It cures a <b>defect</b> in prior acts or proceedings.',
				'The legislature <b>could have authorized</b> the act in the first place.',
				'It does <b>not impair</b> vested rights or contracts, unless it is a police-power measure with clearly retrospective intent.'
			]),
			why: 'To carry out what the parties intended.',
			mode: 'Cumulative — all must concur',
			absent: 'A curative law cannot validate what the legislature could not have authorized, or disturb rights fixed by final judgment.',
			interacts: 'Works with E9.5 (statutes that may be retroactive).',
			hypo: 'A law validates municipal ordinances approved by a sanggunian whose quorum rule was miscounted. Valid, since Congress could have set that quorum.'
		},
		{
			name: 'Protection against an overruled doctrine',
			source: 'Art. 8, Civil Code; <i>People v. Jabinal</i>; <i>Co v. CA</i>.',
			what: ul([
				'The act was done while an <b>earlier doctrine</b> (or official construction) was in force.',
				'The person <b>relied</b> on it in good faith.',
				'The later doctrine would <b>prejudice</b> him (especially by making conduct punishable).'
			]),
			why: 'Punishability must be foreseeable; the law as declared when one acted governs.',
			mode: 'Cumulative — all must concur',
			absent: 'If the act was done after the new doctrine, or there was no reliance, the new doctrine applies.',
			interacts: 'Distinguish a first interpretation of a statute, which is deemed part of the law from enactment.',
			hypo: 'A taxpayer followed a BIR ruling later revoked; under similar reasoning (and Sec. 246, NIRC), the revocation is generally not applied retroactively to his prejudice.'
		}
	],

	comparisons: [
		{
			id: 'C9.1',
			title: 'Prospective vs. retroactive statutes',
			a: 'Prospective',
			b: 'Retroactive',
			def: ['Operates on acts and rights arising after effectivity.', 'Impairs vested rights or attaches new obligations, duties or disabilities to past transactions.'],
			purpose: ['Stability; fair notice.', 'Remedy past defects; extend benefits; enforce rights more efficiently.'],
			basis: ['Art. 4, Civil Code; §§9.01–9.04.', '§9.05; Art. 22, RPC; §§9.17–9.23.'],
			when: ['The default for all laws.', 'Clear intent, or laws retroactive by nature.'],
			key: ['Presumed.', 'Must be clearly intended and constitutionally permissible.'],
			limits: ['—', 'Contracts, due process, vested rights, ex post facto.'],
			example: ['A new licensing requirement applies to permits issued after it.', 'A law lowering a penalty benefits convicts already serving.'],
			trap: ['Thinking prospectivity means past facts can never be considered.', 'Thinking every retroactive law is unconstitutional.'],
			decisive: 'Whether the law changes the legal consequences of what already happened.',
			matters: 'Retroactive laws face constitutional scrutiny; prospective laws generally do not on this ground.',
			recognize: 'Compare the date of the act or right with the law\'s effectivity.',
			mistake: 'Skipping the intent question and going straight to constitutionality.'
		},
		{
			id: 'C9.2',
			title: 'Substantive vs. procedural laws (effect on pending cases)',
			a: 'Substantive law',
			b: 'Procedural law',
			def: ['Creates, defines or regulates rights and duties.', 'Prescribes rules and forms for enforcing rights.'],
			purpose: ['Define what people may claim.', 'Define how they claim it.'],
			basis: ['§§9.10–9.16.', '§§9.17–9.20; <i>Subido</i>.'],
			when: ['A new law changes the rights themselves.', 'A new law changes the method of enforcement.'],
			key: ['Prospective.', 'Applies to pending cases.'],
			limits: ['May be retroactive if expressly so and constitutional.', 'Not if expressly excluded, unfeasible or unjust, due-process or judicial-independence problems, or vested rights impaired.'],
			example: ['A law raising the legal interest rate does not apply to obligations already due.', 'R.A. 7975 applied to pending Sandiganbayan cases.'],
			trap: ['Calling a jurisdiction-transferring law "procedural" so it reaches pending cases. Jurisdiction already acquired is retained unless the law says otherwise.', 'Applying a procedural law that would destroy a vested right.'],
			decisive: 'Whether the law touches the right itself or only the method of enforcing it.',
			matters: 'It decides whether a pending case is governed by the old or the new law.',
			recognize: 'Ask: would the outcome on the merits change, or only the steps?',
			mistake: 'Assuming every rule in the Rules of Court is "procedural" for this purpose.'
		},
		{
			id: 'C9.3',
			title: 'Ex post facto law vs. bill of attainder',
			a: 'Ex post facto law',
			b: 'Bill of attainder',
			def: ['A retroactive penal law of one of six kinds.', 'A legislative act inflicting punishment without judicial trial.'],
			purpose: ['Ensure fair warning.', 'Preserve the judicial function of determining guilt.'],
			basis: ['Art. III, Sec. 22; §9.07.', 'Art. III, Sec. 22; §9.08; <i>Ferrer</i>.'],
			when: ['A penal law is applied to past acts.', 'A law singles out persons or a class for punishment.'],
			key: ['Defined by <b>retroactivity</b>.', 'Defined by <b>absence of judicial trial</b>.'],
			limits: ['Not if favorable to the accused.', 'Not if guilt must still be proved in court (<i>Ferrer</i>).'],
			example: ['A law raising the penalty for crimes already committed.', 'A law declaring named officials guilty of graft and forfeiting their pensions.'],
			trap: ['Calling a prospective law with trial a bill of attainder.', 'Thinking a law must name persons to be a bill of attainder; a definite class suffices.'],
			decisive: 'Retroactive punishment (ex post facto) vs. punishment without trial (attainder).',
			matters: 'A law can be one without the other, though a bill of attainder is usually also ex post facto.',
			recognize: 'Ask two questions: does it reach past acts? Does it dispense with trial?',
			mistake: 'Using the two terms interchangeably.'
		},
		{
			id: 'C9.4',
			title: 'Curative statutes vs. procedural statutes',
			a: 'Curative statute',
			b: 'Procedural statute',
			def: ['Validates past acts or proceedings that were defective.', 'Governs the method of enforcing rights.'],
			purpose: ['Give effect to intended acts despite technical defects.', 'Improve how cases are handled.'],
			basis: ['§§9.21–9.23.', '§§9.17–9.20.'],
			when: ['Past acts were defective and the legislature wants them to stand.', 'A case is pending when the new rule takes effect.'],
			key: ['Looks back to <b>past acts</b>.', 'Looks to <b>pending proceedings</b>.'],
			limits: ['Cannot validate what could not have been authorized; cannot impair vested rights (except police power).', '§9.20 exceptions.'],
			example: ['LGC Sec. 442(d) treating municipal districts as regular municipalities.', 'R.A. 7975 on Sandiganbayan procedure.'],
			trap: ['Thinking a curative law can revive what a final judgment settled.', 'Thinking procedural laws can never affect pending cases.'],
			decisive: 'Curative laws fix past acts; procedural laws govern ongoing proceedings.',
			matters: 'Different limits apply.',
			recognize: 'Look for "validate," "confirm," "ratify" (curative) vs. "procedure," "mode of appeal," "rules" (procedural).',
			mistake: 'Treating <i>Subido</i> as a pure curative case. The Court called R.A. 7975 both procedural and curative.'
		},
		{
			id: 'C9.5',
			title: 'Judicial interpretation of a statute vs. overruling of a doctrine',
			a: 'Interpretation',
			b: 'Overruling',
			def: ['The Court\'s construction of a statute it had not construed (or consistently construed) before.', 'The Court abandons a prior doctrine and adopts a different one.'],
			purpose: ['Declare what the law has meant all along.', 'Correct an earlier error.'],
			basis: ['Art. 8, Civil Code; <i>legis interpretatio legis vim obtinet</i>.', '<i>Jabinal</i>; <i>Co v. CA</i>; Art. VIII, Sec. 4(3).'],
			when: ['First authoritative reading of a law.', 'A change from an earlier reading.'],
			key: ['Deemed part of the law <b>from its enactment</b>.', 'Applies <b>prospectively</b> as to those who relied on the old doctrine.'],
			limits: ['—', 'Protection is for good-faith reliance; only the Court en banc can overrule.'],
			example: ['The <i>Molina</i> guidelines applied to a petition filed before <i>Molina</i> (the interpretation is part of the law from enactment).', '<i>Jabinal</i>: acquitted though <i>Mapa</i> later changed the rule.'],
			trap: ['Saying every judicial ruling is prospective.', 'Saying overruled doctrines are retroactively erased.'],
			decisive: 'Whether the Court is declaring the law for the first time or changing what it earlier declared.',
			matters: 'It decides whether past acts are judged by the new reading.',
			recognize: 'Look for an earlier, contrary Supreme Court doctrine in force when the act was done.',
			mistake: 'Ignoring the reliance requirement.'
		},
		{
			id: 'C9.6',
			title: 'Retroactivity of favorable penal laws vs. the ex post facto prohibition',
			a: 'Favorable penal law (Art. 22)',
			b: 'Ex post facto prohibition',
			def: ['Penal laws favoring the accused apply retroactively.', 'Penal laws unfavorable to the accused cannot apply retroactively.'],
			purpose: ['Mercy and justice.', 'Fair warning.'],
			basis: ['Art. 22, RPC.', 'Art. III, Sec. 22.'],
			when: ['A new law reduces or removes liability.', 'A new law creates or increases liability.'],
			key: ['Statutory rule (can be limited by the legislature, e.g., by excluding pending cases).', 'Constitutional prohibition (cannot be overridden by the legislature).'],
			limits: ['Not for habitual criminals.', 'Applies only to penal matters.'],
			example: ['Lower penalty applies even after final judgment.', 'Higher penalty cannot apply to earlier crimes.'],
			trap: ['Thinking Art. 22 benefits habitual delinquents.', 'Thinking the ex post facto clause covers civil laws.'],
			decisive: 'Direction of the change: favorable reaches back; unfavorable cannot.',
			matters: 'Same principle viewed from two sides: retroactivity is allowed only when it helps the accused.',
			recognize: 'Does the new law help or hurt the accused?',
			mistake: 'Forgetting that the legislature can limit Art. 22 (it is statutory) but cannot authorize an ex post facto law.'
		}
	],

	authorities: [
		{ kind: 'provision', name: 'Art. 4, Civil Code', text: '"Laws shall have no retroactive effect, unless the contrary is provided."' },
		{
			kind: 'provision',
			name: 'Art. 22, Revised Penal Code',
			text: '"Penal laws shall have a retroactive effect insofar as they favor the person guilty of a felony, who is not a habitual criminal, as this term is defined in Rule 5 of Article 62 of this Code, although at the time of the publication of such laws a final sentence has been pronounced and the convict is serving the same."'
		},
		{
			kind: 'provision',
			name: 'Art. 62, last paragraph, Revised Penal Code (habitual delinquent)',
			text: 'A person is a habitual delinquent if, within a period of ten years from the date of his release or last conviction of the crimes of serious or less serious physical injuries, robo, hurto, estafa or falsification, he is found guilty of any of said crimes a third time or oftener.'
		},
		{ kind: 'provision', name: 'Art. III, Secs. 10 and 22, 1987 Constitution', text: 'Sec. 10: "No law impairing the obligation of contracts shall be passed." Sec. 22: "No ex post facto law or bill of attainder shall be enacted."' },
		{ kind: 'provision', name: 'Art. 8, Civil Code; Art. VIII, Sec. 4(3), Constitution', text: 'Judicial decisions applying or interpreting the laws or the Constitution form part of the legal system. No doctrine or principle of law laid down by the Court in a decision rendered en banc or in division may be modified or reversed except by the Court sitting en banc.' },
		{
			kind: 'provision',
			name: 'Art. 2253, Civil Code; Art. 256, Family Code',
			text: 'Art. 2253: rights arising under prior laws from acts done under their regime are governed by those laws; but a right declared for the first time in the Code is effective at once, even as to prior acts, provided it does not prejudice or impair any vested or acquired right of the same origin. Art. 256, Family Code: the Code has retroactive effect insofar as it does not prejudice or impair vested or acquired rights.',
			verify: 'Paraphrased; check exact wording.'
		},
		{ kind: 'case', name: 'People v. Jabinal', cite: 'G.R. No. L-30061, Feb. 27, 1974, 55 SCRA 607', text: 'Under <i>Macarandang</i> (and <i>Lucero</i>), secret agents appointed by governors were exempt from firearm licensing; <i>Mapa</i> (1967) abandoned that doctrine. Jabinal, who possessed the firearm while the old doctrine prevailed, was acquitted: an overruling doctrine operates prospectively.' },
		{
			kind: 'case',
			name: 'Co v. Court of Appeals',
			cite: 'G.R. No. 100776, Oct. 28, 1993',
			text: 'Ministry of Justice Circular No. 4 (Dec. 15, 1981) said guarantee checks were outside B.P. 22; Circular No. 12 (Aug. 8, 1984) reversed it for checks issued after its date; <i>Que v. People</i> (Sept. 21, 1987) held guarantee checks covered. Co, who issued a guarantee check in 1983, was acquitted: <i>Que</i> could not be applied retroactively to his prejudice.'
		},
		{ kind: 'case', name: 'Subido v. Sandiganbayan', cite: 'G.R. No. 122641, Jan. 20, 1997', text: 'R.A. 7975, which amended P.D. 1606 on the Sandiganbayan\'s jurisdiction and procedure, is procedural and curative and may be applied to pending cases where no vested or contractual right is impaired.', verify: 'Citation as commonly reported; not checked against the full text.' },
		{ kind: 'case', name: 'People v. Ferrer', cite: '48 SCRA 382 (1972)', text: 'The Anti-Subversion Act is not a bill of attainder: guilt must still be judicially established, and the Act operates prospectively (membership after its effectivity).' },
		{ kind: 'case', name: 'In re Kay Villegas Kami, Inc.', cite: 'G.R. No. L-32485, Oct. 22, 1970, 35 SCRA 429', text: 'Cited for the kinds of ex post facto laws; Sec. 8 of R.A. 6132 was challenged as ex post facto.', verify: 'Check the exact list in the decision.' },
		{ kind: 'case', name: 'Yapdiangco v. Buencamino', cite: 'G.R. No. L-28841, June 24, 1983', text: 'An information for a light offense filed on the 61st day, because the 60th fell on a Sunday, was filed too late; a Sunday or legal holiday does not interrupt or extend the prescriptive period for criminal actions.' },
		{ kind: 'case', name: 'People v. Moran', cite: '44 Phil. 387 (1923)', text: 'Statutes of limitation on criminal prosecutions are acts of grace, liberally construed in favor of the accused.', verify: 'Standard citation; not checked against the full text.' }
	],

	caseNote: 'None of the five assigned cases turns on retroactivity. Don\'t force one into a Chapter IX answer; use the chapter\'s own cases (<i>Jabinal</i>, <i>Co v. CA</i>, <i>Subido</i>, <i>Ferrer</i>, <i>Yapdiangco</i>). The one point of contact, flagged for checking, is below.',
	caseLinks: [
		{
			caseId: 'catiis',
			strength: 'Not invoked — exam point only',
			doctrine: 'Procedural rules govern proceedings after their effectivity; rules favorable to the accused may reach pending cases.',
			facts: 'The Information in <i>Catiis</i> was filed on Oct. 10, 2001, after the Revised Rules of Criminal Procedure took effect on Dec. 1, 2000. The Court applied Rule 110, Secs. 8–9 (aggravating circumstances must be alleged) and cited <i>People v. Bragat</i> (2001).',
			issue: 'Did any retroactivity question arise?',
			applied: 'No: the rules were already in force when the Information was filed, so they applied prospectively. Separately, the line of cases <i>Catiis</i> cites is often noted for applying the new pleading requirement to cases pending when the 2000 Rules took effect, because it favors the accused.',
			ruling: 'Only reclusion temporal was imposable; bail as a matter of right.',
			lesson: 'If asked to connect <i>Catiis</i> to Chapter IX, say the rules applied prospectively. The favorable-retroactivity point is a side note.',
			examUse: 'Possible follow-up: "Would the result differ if the Information had been filed in 1999?" Answer through Chapter IX: a procedural rule favorable to the accused may apply to pending cases.'
		}
	],

	traps: [
		{ wrong: 'Every retroactive law is unconstitutional.', right: 'Only those that impair contracts, deny due process, divest vested rights, or are ex post facto.', example: 'A curative law validating defective but authorizable sales is valid.' },
		{ wrong: 'The ex post facto clause protects against retroactive civil laws.', right: 'It is limited to criminal or penal matters.', example: 'A retroactive tax increase is tested under due process, not the ex post facto clause.' },
		{ wrong: 'A favorable penal law benefits everyone.', right: 'Not habitual criminals; not if the law excludes pending cases.', example: 'A third-time estafa convict within ten years does not benefit.' },
		{ wrong: 'A favorable penal law cannot help a convict whose judgment is already final.', right: 'Art. 22 applies "although ... a final sentence has been pronounced and the convict is serving the same"; habeas corpus is the remedy.', example: 'A convict serving the old, longer sentence may petition for release.' },
		{ wrong: 'A law transferring jurisdiction applies to pending cases because jurisdiction is "procedural."', right: 'A court keeps jurisdiction already acquired unless the new law provides otherwise.', example: 'An RTC case filed before a jurisdiction-transfer law continues in the RTC.' },
		{ wrong: 'Every Supreme Court ruling is prospective.', right: 'A first interpretation is part of the law from enactment; only an overruling is prospective as to good-faith reliance.', example: '<i>Jabinal</i> (overruling) vs. <i>Molina</i> guidelines applied to earlier petitions (interpretation).' },
		{ wrong: 'A crime\'s prescriptive period is extended when its last day falls on a Sunday.', right: 'No: <i>Yapdiangco v. Buencamino</i>.', example: 'File on the last working day before the period ends.' },
		{ wrong: 'One of the five cases is a retroactivity case.', right: 'None is; use <i>Jabinal</i>, <i>Co</i>, <i>Subido</i>, <i>Ferrer</i>.', example: '—' }
	],

	practice: [
		// C
		{ cat: 'C', level: 1, topic: 'Definitions', q: 'What is a retroactive law, in the legal sense?', short: 'One that takes away or impairs vested rights acquired under existing laws, or creates a new obligation, imposes a new duty, or attaches a new disability in respect of transactions or considerations already past (§9.01).', keys: 'impairs vested rights; new obligation/duty/disability; past transactions' },
		{ cat: 'C', level: 1, topic: 'Presumption', q: 'What is the presumption on the effect of laws in point of time? Give its legal basis.', short: 'Laws are presumed prospective: "Laws shall have no retroactive effect, unless the contrary is provided" (Art. 4, Civil Code). Retroactivity must be clearly expressed or necessarily implied; doubt is resolved against it. The presumption covers amendments and repeals too.', keys: 'Art. 4; prospective; clear intent; doubt against retroactivity' },
		{ cat: 'C', level: 1, topic: 'Ex post facto', q: 'Define an ex post facto law. To what kind of laws does the prohibition apply?', short: 'A law that, in criminal matters, retroactively criminalizes an innocent act, aggravates a crime, increases the penalty, lowers the evidence needed to convict, penalizes under the guise of civil regulation an act lawful when done, or removes an acquired protection such as an acquittal or amnesty. The prohibition applies only to criminal or penal matters (Art. III, Sec. 22; §9.07).', keys: 'six kinds; criminal or penal only' },
		{ cat: 'C', level: 2, topic: 'Bill of attainder', q: 'What is a bill of attainder? What is its essence?', short: 'A legislative act that inflicts punishment without judicial trial. Its essence is the substitution of a legislative for a judicial determination of guilt (<i>People v. Ferrer</i>; §9.08).', keys: 'legislative act; punishment; without trial; substitution of legislative for judicial determination' },
		{ cat: 'C', level: 2, topic: 'Procedural laws', q: 'Why do procedural laws apply to actions pending at the time of their passage?', short: 'Because no one has a vested right in a particular procedure or remedy; procedural laws prescribe only the forms for enforcing rights, not the rights themselves (§9.19).', keys: 'no vested right in procedure; forms not rights' },
		{ cat: 'C', level: 2, topic: 'Curative statutes', q: 'What is a curative statute, and when may it be given retroactive effect?', short: 'A statute that cures defects in prior acts or proceedings and adds to the means of enforcing existing obligations, validating what the legislature could have authorized in the first place. It may be retroactive if it does not impair vested rights or contract obligations, unless it is a police-power measure with clearly retrospective intent (§§9.21–9.23).', keys: 'cures defects; could have authorized; no impairment of vested rights; police power exception' },
		{ cat: 'C', level: 2, topic: 'Judicial doctrines', q: 'What is the effect on a person who acted in reliance on a Supreme Court doctrine that is later overruled?', short: 'The new doctrine applies prospectively and does not prejudice those who relied on the old doctrine in good faith (<i>People v. Jabinal</i>). This differs from a first interpretation of a statute, which is deemed part of the law from its enactment (Art. 8, Civil Code).', keys: 'prospective; good-faith reliance; Jabinal; Art. 8' },
		// A
		{ cat: 'A', level: 1, topic: 'Limits', q: 'Is a retroactive law unconstitutional per se? Enumerate the limits on retroactive legislation.', short: 'No. The Constitution does not prohibit retroactive laws as such. A statute may be retroactive provided it does not (1) impair the obligation of contracts, (2) deprive a person of property without due process, (3) divest vested rights, or (4) constitute an ex post facto law (§9.05).', keys: 'not per se; contracts; due process; vested rights; ex post facto' },
		{ cat: 'A', level: 1, topic: 'Ex post facto', q: 'Enumerate the kinds of ex post facto laws.', short: 'One that (1) makes criminal an act innocent when done and punishes it; (2) aggravates a crime or makes it greater than when committed; (3) inflicts a greater punishment than the law then annexed; (4) alters the rules of evidence to convict on less or different testimony; (5) under the guise of regulating civil rights, imposes a penalty or deprivation for an act lawful when done; (6) deprives the accused of a lawful protection already acquired, such as a former conviction or acquittal or an amnesty.', keys: 'six kinds; criminal matters only' },
		{ cat: 'A', level: 2, topic: 'Favorable penal laws', q: 'Penal laws favorable to the accused are given retroactive effect. State the basis and the exceptions.', short: 'Basis: Art. 22, RPC, which applies even if a final sentence has been pronounced and is being served. Exceptions: (1) the offender is a habitual criminal under Art. 62(5); (2) the new law expressly excludes pending cases; (3) per Agpalo as summarized in your guide, the accused invokes the prior law. A convict already serving sentence may seek relief by habeas corpus.', keys: 'Art. 22; habitual criminal; express exclusion; habeas corpus' },
		{ cat: 'A', level: 2, topic: 'Procedural laws', q: 'Enumerate the instances when a procedural law is not applied to pending cases.', short: 'When (1) the law expressly or impliedly provides otherwise; (2) application would not be feasible or would work injustice; (3) it would involve intricate problems of due process or impair the independence of the courts; (4) it would impair vested rights or contract obligations (§9.20).', keys: 'law says otherwise; unfeasible/unjust; due process/independence; vested rights' },
		{ cat: 'A', level: 2, topic: 'Retroactive statutes', q: 'Enumerate the statutes that may be given retroactive effect.', short: '(1) Statutes expressly made retroactive, within constitutional limits; (2) penal laws favorable to a non-habitual accused; (3) procedural laws, as to pending cases; (4) curative statutes not impairing vested rights or contracts; (5) remedial police-power measures with clearly retrospective intent; (6) statutes creating new rights, without impairing vested rights (Art. 2253, Civil Code).', keys: 'express; favorable penal; procedural; curative; police power; new rights' },
		// D
		{ cat: 'D', level: 2, topic: 'Presumption', q: 'Under Art. 4 of the Civil Code, laws may never be given retroactive effect.', tf: false, a: 'Art. 4 says laws have no retroactive effect "unless the contrary is provided." Laws may be retroactive if so intended and constitutionally permissible.', keys: 'Art. 4, Civil Code', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Ex post facto', q: 'The constitutional prohibition against ex post facto laws applies to civil laws that retroactively impair private rights.', tf: false, a: 'It is limited to criminal or penal matters. Retroactive civil laws are tested under due process and the contract clause (§9.07).', keys: 'Art. III, Sec. 22; Agpalo §9.07', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Favorable penal laws', q: 'A penal law favorable to the accused applies retroactively even if a final sentence has already been pronounced and the convict is serving it, provided he is not a habitual criminal.', tf: true, a: 'That is the express text of Art. 22, RPC.', keys: 'Art. 22, RPC', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Favorable penal laws', q: 'A habitual delinquent is entitled to the retroactive benefit of a penal law favorable to the accused.', tf: false, a: 'Art. 22 expressly excludes habitual criminals as defined in Art. 62(5).', keys: 'Art. 22; Art. 62(5), RPC', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Vested rights', q: 'No one has a vested right in a particular rule of procedure.', tf: true, a: 'Hence procedural laws apply to pending actions, subject to §9.20 exceptions.', keys: 'Agpalo §§9.19–9.20', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Jurisdiction', q: 'A statute transferring jurisdiction over a class of cases to another court automatically applies to cases already pending in the original court.', tf: false, a: 'A court that has acquired jurisdiction keeps it despite a later law transferring jurisdiction, unless the law provides otherwise expressly or by necessary implication (§9.15).', keys: 'Agpalo §9.15', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Curative statutes', q: 'A curative statute may validate acts that the legislature could have authorized in the first place.', tf: true, a: 'That is the defining feature of a curative statute; it cannot validate what the legislature could not have authorized (§9.21).', keys: 'Agpalo §9.21', tag: 'requisites' },
		{ cat: 'D', level: 2, topic: 'Judicial doctrines', q: 'When the Supreme Court abandons a doctrine, the new doctrine applies to acts done in reliance on the old doctrine.', tf: false, a: 'The new doctrine applies prospectively and does not prejudice those who relied on the old one in good faith (<i>People v. Jabinal</i>; <i>Co v. CA</i>).', keys: 'Jabinal; Co v. CA', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'Ex post facto', q: 'A law that increases the penalty for a crime cannot be applied to a crime committed before the law took effect.', tf: true, a: 'That is the third kind of ex post facto law: inflicting a greater punishment than the law annexed to the crime when committed.', keys: 'Art. III, Sec. 22', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Prescription', q: 'A law shortening the prescriptive period of a crime cannot benefit an accused whose crime was committed before the law took effect.', tf: false, a: 'A shorter prescriptive period is favorable to the accused, so it applies retroactively (Art. 22; statutes on prescription of crimes are liberally construed for the accused).', keys: 'Art. 22; Agpalo §§7.34, 9.09', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Prescription', q: 'Where the last day of the prescriptive period for a criminal action falls on a Sunday, the information may still be filed on the next working day.', tf: false, a: 'In <i>Yapdiangco v. Buencamino</i>, the Court held that a Sunday or holiday does not extend the prescriptive period for criminal actions; the information filed on the 61st day was too late.', keys: 'Yapdiangco v. Buencamino, G.R. No. L-28841 (1983)', tag: 'jurisprudence' },
		// B
		{ cat: 'B', level: 3, topic: 'Substantive vs. procedural', q: 'Distinguish substantive from procedural laws as to their application to pending cases.', short: 'Substantive laws, which create, define or regulate rights, are <b>prospective</b>: they do not govern rights or transactions that arose before them. Procedural laws, which prescribe how rights are enforced, apply to <b>pending</b> actions, because no one has a vested right in procedure, unless the law provides otherwise, application is unfeasible or unjust, it raises due-process or judicial-independence problems, or it impairs vested rights (§9.20).', keys: 'rights vs. method; prospective vs. pending cases; exceptions' },
		{ cat: 'B', level: 3, topic: 'Ex post facto vs. attainder', q: 'Distinguish an ex post facto law from a bill of attainder.', short: 'An ex post facto law is defined by <b>retroactivity</b> in penal matters (six kinds). A bill of attainder is defined by <b>punishment without judicial trial</b>: a legislative determination of guilt. A law may be one and not the other; a bill of attainder is usually also ex post facto, and if a law is not ex post facto, that is persuasive that it is not a bill of attainder (<i>Ferrer</i>).', keys: 'retroactive punishment vs. no trial; Ferrer' },
		{ cat: 'B', level: 3, topic: 'Interpretation vs. overruling', q: 'Distinguish the temporal effect of the Supreme Court\'s interpretation of a statute from that of its overruling of a prior doctrine.', short: 'An interpretation is deemed part of the statute from its enactment (<i>legis interpretatio legis vim obtinet</i>; Art. 8, Civil Code), so it governs past acts. An overruling changes what the Court had declared, so the new doctrine applies prospectively and does not prejudice those who relied on the old one in good faith (<i>Jabinal</i>; <i>Co v. CA</i>).', keys: 'from enactment vs. prospective; good-faith reliance' },
		// F
		{ cat: 'F', level: 2, topic: 'Jabinal', q: 'State the facts and ruling of People v. Jabinal and the doctrine it established.', short: 'Jabinal, appointed secret agent by a governor, was found with an unlicensed firearm while <i>Macarandang</i> held such agents exempt from licensing. <i>Mapa</i> (1967) abandoned that doctrine, and the trial court convicted him under <i>Mapa</i>. The Court acquitted him: when a doctrine is overruled, the new doctrine applies prospectively and does not apply to those who relied on the old one in good faith.', keys: 'Macarandang; Mapa; prospective; good faith; acquitted' },
		{ cat: 'F', level: 3, topic: 'Co v. CA', q: 'Explain how Co v. CA applied the Jabinal principle to an executive construction.', short: 'Co issued a guarantee check in 1983, while Ministry of Justice Circular No. 4 (1981) said such checks were outside B.P. 22. <i>Que v. People</i> (1987) later held guarantee checks covered. The Court held that <i>Que</i> could not be applied retroactively to Co, who acted on the official construction in force; he was acquitted. The same prospectivity that protects reliance on judicial doctrine protected reliance on the official executive opinion.', keys: 'Circular No. 4; Que (1987); prospective; reliance on official construction' },
		{ cat: 'F', level: 3, topic: 'Subido', q: 'Why could R.A. 7975 be applied to cases already pending before the Sandiganbayan (Subido v. Sandiganbayan)?', short: 'Because it is procedural (prescribing rules and forms for enforcing rights) and also curative or remedial (curing defects and adding means of enforcing existing obligations), and its retroactive application impaired no vested or contractual right.', keys: 'procedural; curative; no vested right impaired' },
		// E
		{
			cat: 'E',
			level: 4,
			topic: 'Favorable penal laws',
			title: 'Ch. IX — Two thieves and a kinder law',
			facts: 'R.A. No. 12800 (hypothetical) took effect on March 1, 2026. It raised the value thresholds for theft so that stealing property worth ₱15,000 now carries a much lighter penalty than before. Pedro, a first-time offender, was convicted in 2024 of stealing a ₱15,000 phone and is serving a sentence under the old, heavier penalty; he has already served more than the maximum of the new penalty. Rico was convicted in 2025 of stealing a ₱15,000 bicycle; it was his third theft conviction within ten years from his last release. The new law says nothing about pending cases or prior convictions.',
			q: 'May Pedro and Rico benefit from R.A. No. 12800? What remedy is available? Answer using ALAC.',
			alac: {
				answer: 'Pedro may benefit; Rico may not.',
				legalBasis: 'Penal laws "shall have a retroactive effect insofar as they favor the person guilty of a felony, who is not a habitual criminal," even if "a final sentence has been pronounced and the convict is serving the same" (Art. 22, RPC). A habitual delinquent is one who, within ten years from release or last conviction for serious or less serious physical injuries, robo, hurto, estafa or falsification, is found guilty of any of them a third time or oftener (Art. 62, RPC). The recognized remedy for a convict already serving sentence is a petition for habeas corpus.',
				application: 'R.A. No. 12800 is a penal law that reduces the penalty for theft of ₱15,000, so it is favorable. It does not exclude pending cases or final convictions. Pedro is a first-time offender, so he is entitled to its retroactive benefit even though his sentence is final; since he has served more than the new maximum, his continued detention is no longer lawful. Rico\'s conviction is his third for theft (hurto) within ten years of his last release, so he is a habitual delinquent whom Art. 22 expressly excludes.',
				conclusion: 'Pedro may obtain release through a petition for habeas corpus; Rico continues to serve his sentence under the old law.'
			},
			weaker: 'The view that a final judgment cannot be touched ignores Art. 22\'s express words "although ... a final sentence has been pronounced."'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Jurisdiction',
			title: 'Ch. IX — The case that changed courts',
			facts: 'In 2024, Ana filed a ₱2.5 million collection suit in the RTC, which had jurisdiction under the law then in force. Trial began in 2025. In 2026, R.A. No. 12850 (hypothetical) transferred to first-level courts exclusive original jurisdiction over civil actions involving ₱3 million or less. The law is silent on pending cases. The defendant moves to dismiss for lack of jurisdiction.',
			q: 'Should the RTC dismiss the case? Answer using ALAC.',
			alac: {
				answer: 'No. The RTC retains jurisdiction over Ana\'s case.',
				legalBasis: 'Jurisdiction is determined by the law in force when the action is filed. A court that has acquired jurisdiction keeps it despite a later law transferring jurisdiction, unless the new law provides otherwise expressly or by necessary implication (Agpalo §9.15). Laws are presumed prospective (Art. 4, Civil Code).',
				application: 'When Ana filed in 2024, the RTC had jurisdiction, so it validly acquired jurisdiction over the case. R.A. No. 12850 is silent on pending cases and contains no clear intent to divest courts of cases already before them. Treating it as a mere "procedural" rule that reaches pending cases would ignore that jurisdiction already vested in the RTC and would waste the trial already conducted.',
				conclusion: 'The motion to dismiss should be denied; the RTC should decide the case.'
			},
			weaker: 'The defendant\'s argument treats a jurisdiction-transferring law like a rule of procedure, but the rule on pending cases (§9.15) is specific and protects jurisdiction already acquired.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Judicial doctrines',
			title: 'Ch. IX — The hobbyist and the abandoned doctrine',
			facts: 'In People v. Alpha (hypothetical, 2018), the Supreme Court en banc held that licensed drone hobbyists were exempt from a penal statute punishing possession of "unregistered aerial devices." In 2023, Lito, a licensed hobbyist, kept an unregistered drone at home. In People v. Beta (hypothetical, 2025), the Court en banc abandoned Alpha and held hobbyists covered. In 2026 Lito is charged for his 2023 possession.',
			q: 'Should Lito be convicted? Answer using ALAC.',
			alac: {
				answer: 'No. Lito should be acquitted.',
				legalBasis: 'Judicial decisions interpreting the laws form part of the legal system (Art. 8, Civil Code). When a doctrine is overruled, the new doctrine applies prospectively and does not prejudice those who relied on the old doctrine in good faith, especially in criminal cases where punishability must be foreseeable (<i>People v. Jabinal</i>; <i>Co v. CA</i>).',
				application: 'In 2023, <i>Alpha</i> was the controlling interpretation and treated licensed hobbyists like Lito as exempt; it was part of the law of the land when he acted. <i>Beta</i> changed that doctrine only in 2025. Applying <i>Beta</i> to Lito\'s 2023 conduct would punish him for an act that, as the law then stood, was not punishable.',
				conclusion: 'Lito should be acquitted; <i>Beta</i> governs only possession after its promulgation.'
			},
			weaker: 'The prosecution may argue that an interpretation is part of the law from enactment. That rule covers a first interpretation, not the overruling of a contrary doctrine on which people relied.'
		},
		// G
		{
			cat: 'G',
			level: 5,
			topic: 'Curative statutes',
			title: 'Ch. IX — The curative law and the final judgment',
			facts: 'Act A (hypothetical, 2015) declared void any sale of land acquired under a free patent if made within five years from the grant. In 2021, Ben sold such land, within the five-year period, to Carla. Ben\'s heirs sued in 2023 to recover it; the court declared the sale void, and the judgment became final in January 2025. In June 2025, Act B (hypothetical) "confirmed and validated" all sales of free-patent land made within the prohibited period before its effectivity. Carla now asks to keep the land under Act B. Another buyer, Dino, whose similar 2022 purchase was never litigated, also invokes Act B.',
			q: 'Does Act B help Carla? Does it help Dino? Discuss using ALAC.',
			alac: {
				answer: 'Act B does not help Carla, because her case is settled by a final judgment. It does help Dino.',
				legalBasis: 'A curative statute validates acts the legislature could have authorized in the first place and may be applied retroactively, provided it does not impair vested rights or contract obligations (Agpalo §§9.21–9.23). A statute may not be applied retroactively so as to disturb a right embodied in a final judgment (§9.10). Laws are retroactive only within constitutional limits, one of which is that vested rights are not divested (§9.05).',
				application: '<b>Dino:</b> Congress could have allowed sales within five years in the first place, so it can validate them now. No one acquired a vested right against Dino\'s purchase, so Act B validates his sale. <b>Carla:</b> the heirs\' right to the land was declared in a judgment that became final in January 2025, before Act B. That right is vested and embodied in a judgment. Applying Act B to Carla would reopen a final judgment, which a curative law cannot do. Act B shows no police-power purpose that could justify disturbing it.',
				conclusion: 'Carla must return the land to Ben\'s heirs; Dino\'s purchase is validated by Act B.'
			},
			weaker: 'Applying Act B to Carla would let the legislature overturn a final judicial decision, which runs into both the vested-rights limit and the separation of powers.'
		},
		{
			cat: 'G',
			level: 5,
			topic: 'Ex post facto',
			title: 'Ch. IX — Two changes after the crime',
			facts: 'In January 2024, Dante allegedly committed a light offense; at that time the law required the testimony of a co-accused to be corroborated before it could support a conviction for that offense. In 2025, Act X (hypothetical) provided that "uncorroborated testimony of a co-accused shall be sufficient to convict for offenses committed before or after this Act." Separately, the light offense prescribed in March 2024, two months after its commission. In 2026, Act Y (hypothetical) extended the prescriptive period for that offense to five years "including offenses committed before this Act." Dante is charged in 2026, and the prosecution relies on Act X and Act Y.',
			q: 'May Act X and Act Y be applied to Dante? Discuss.',
			alac: {
				answer: 'Neither may be applied to Dante.',
				legalBasis: 'No ex post facto law shall be enacted (Art. III, Sec. 22). An ex post facto law includes one that alters the legal rules of evidence to authorize conviction on less or different testimony than the law required when the offense was committed, and one that deprives an accused of a lawful protection to which he has become entitled (<i>In re Kay Villegas Kami</i>; Agpalo §9.07). A statute may not revive a liability already extinguished (§9.10). Statutes on prescription of crimes are acts of grace construed in favor of the accused (§7.34).',
				application: '<b>Act X</b> lets the State convict on uncorroborated co-accused testimony for offenses committed before it, when the law at the time required corroboration. That is the fourth kind of ex post facto law, so it cannot apply to Dante\'s 2024 offense. <b>Act Y</b>: Dante\'s offense prescribed in March 2024, extinguishing his criminal liability and giving him a lawful protection against prosecution. Applying Act Y would revive an extinguished liability and strip him of that protection, the sixth kind of ex post facto law.',
				conclusion: 'The prosecution cannot rely on Act X or Act Y; since the offense prescribed in 2024, the case should be dismissed.'
			},
			weaker: 'Calling Act X "merely procedural" does not save it: changes in evidence rules that let the State convict on less proof are a recognized kind of ex post facto law.'
		}
	],

	memoryAids: [
		['Limits on retroactivity', '<b>C-D-V-E</b>: Contracts · Due process · Vested rights · Ex post facto.'],
		['Ex post facto kinds', '<b>Criminalize · Aggravate · Punish more · Prove less · Penalize as civil · Protection removed.</b>'],
		['Art. 22 exceptions', '<b>Habitual · Expressly excluded · Elects old law.</b>'],
		['Procedural-law exceptions', '<b>Law says no · Unfeasible/unjust · Due process/independence · Vested rights.</b>'],
		['Retroactive kinds', '<b>Express · Favorable penal · Procedural · Curative · Police power · New rights.</b>'],
		['Judicial decisions', '"<b>First reading: always was. Overruling: from now on.</b>"']
	],
	flashcards: [
		['Art. 4, Civil Code?', '"Laws shall have no retroactive effect, unless the contrary is provided."'],
		['Is a retroactive law unconstitutional per se?', 'No; only if it impairs contracts, denies due process, divests vested rights, or is ex post facto.'],
		['To what matters does the ex post facto ban apply?', 'Criminal or penal matters only.'],
		['Essence of a bill of attainder?', 'Substitution of a legislative for a judicial determination of guilt (<i>Ferrer</i>).'],
		['Art. 22, RPC key words?', '"...insofar as they favor the person guilty of a felony, who is not a habitual criminal ... although at the time of the publication of such laws a final sentence has been pronounced..."'],
		['Who is excluded from Art. 22?', 'Habitual criminals (Art. 62(5): third conviction within ten years for physical injuries, robo, hurto, estafa or falsification).'],
		['Remedy of a convict serving sentence when a favorable law is passed?', 'Petition for habeas corpus.'],
		['Is there a vested right in procedure?', 'No; procedural laws apply to pending cases.'],
		['Four exceptions to retroactive procedural laws?', 'Law provides otherwise; unfeasible or unjust; due-process or judicial-independence problems; impairs vested rights or contracts.'],
		['Does a law transferring jurisdiction reach pending cases?', 'Not unless it says so expressly or by necessary implication.'],
		['Curative statute?', 'Cures defects in past acts; validates what the legislature could have authorized; retroactive if no vested rights impaired.'],
		['Effect of overruling a doctrine?', 'New doctrine is prospective; good-faith reliance on the old one is protected (<i>Jabinal</i>).'],
		['<i>Co v. CA</i> involved what law and what circular?', 'B.P. 22; Ministry of Justice Circular No. 4 (guarantee checks not covered).'],
		['Does a Sunday extend the prescriptive period of a crime?', 'No (<i>Yapdiangco v. Buencamino</i>).'],
		['<i>Favorabilia sunt amplianda, odiosa restringenda</i>?', 'Favorable things are to be enlarged; odious things restricted.'],
		['<i>Legis interpretatio legis vim obtinet</i>?', 'The interpretation of a law obtains the force of law.']
	],
	recall: [
		['Define a retroactive law.', 'One that impairs vested rights or creates new obligations, duties or disabilities for past transactions.'],
		['State the four limits on retroactive laws.', 'Contracts; due process; vested rights; ex post facto.'],
		['List the six kinds of ex post facto laws.', 'Criminalizes innocent past act; aggravates a crime; greater penalty; less evidence; penalty disguised as civil regulation; removes acquired protection.'],
		['Quote Art. 22 of the RPC (key parts).', 'Penal laws are retroactive insofar as they favor the person guilty of a felony who is not a habitual criminal, even though at the time of their publication a final sentence has been pronounced and is being served.'],
		['Who is a habitual delinquent?', 'One who, within ten years of release or last conviction for serious/less serious physical injuries, robo, hurto, estafa or falsification, is found guilty of any of them a third time or more.'],
		['Why do procedural laws reach pending cases?', 'No vested right in procedure.'],
		['When may a curative statute not be applied retroactively?', 'When it would impair vested rights (e.g., rights fixed by final judgment) or contracts, unless a police-power measure with clear retrospective intent; or when it validates what could not have been authorized.'],
		['What did Jabinal hold?', 'An overruling doctrine is prospective; a person who acted under the old doctrine is protected.'],
		['What did Yapdiangco hold?', 'A Sunday or holiday does not extend the prescriptive period for criminal actions.'],
		['Which of the five assigned cases is a retroactivity case?', 'None.']
	],
	summary: {
		rules: [
			'Laws are prospective unless the contrary is provided (Art. 4).',
			'Retroactivity is valid within four limits: contracts, due process, vested rights, ex post facto.',
			'Ex post facto: penal only; six kinds. Bill of attainder: punishment without trial.',
			'Favorable penal laws retroactive except to habitual criminals, even after final judgment (Art. 22).',
			'Procedural laws reach pending cases (four exceptions); jurisdiction already acquired is retained.',
			'Curative statutes retroactive without impairing vested rights; police power may go further.',
			'Overruled doctrines change prospectively (<i>Jabinal</i>; <i>Co</i>).'
		],
		distinctions: ['Prospective vs. retroactive.', 'Substantive vs. procedural.', 'Ex post facto vs. bill of attainder.', 'Curative vs. procedural statutes.', 'Interpretation vs. overruling.', 'Art. 22 vs. ex post facto ban.'],
		cases: ['<i>Jabinal</i>; <i>Co v. CA</i>; <i>Subido</i>; <i>Ferrer</i>; <i>Yapdiangco</i>; <i>Kay Villegas Kami</i>.', 'Five assigned cases: no direct link (Catiis side note only).'],
		traps: ['"Retroactive = unconstitutional."', '"Ex post facto covers civil laws."', '"Habitual delinquents benefit."', '"Final judgment blocks Art. 22."', '"Jurisdiction transfer reaches pending cases."']
	},
	checklist: [
		'I can define a retroactive law and state Art. 4.',
		'I can list the four limits on retroactivity and the six kinds of ex post facto laws.',
		'I can quote the key words of Art. 22 RPC and its exclusion of habitual criminals.',
		'I can explain when procedural laws do and do not reach pending cases.',
		'I can explain curative statutes and why they cannot reopen final judgments.',
		'I can explain <i>Jabinal</i> and <i>Co v. CA</i> and distinguish interpretation from overruling.',
		'I can solve the two-thieves ALAC problem in under 15 minutes.'
	],
	watchFor: `<strong>Watch for: intent first, then the constitutional wall.</strong>
<ul>
<li>Default is prospective (Art. 4). Favorable penal laws reach back even after final judgment, except for habitual criminals (Art. 22).</li>
<li>Ex post facto is penal-only; procedural laws reach pending cases, but jurisdiction already acquired is retained.</li>
<li>Overruled doctrine → new rule is prospective (<i>Jabinal</i>; <i>Co</i>).</li>
</ul>`
};
