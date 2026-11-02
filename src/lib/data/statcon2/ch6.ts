import { ul, type Chapter } from './model';

export const ch6: Chapter = {
	id: 'ch6',
	n: 6,
	roman: 'VI',
	title: 'Statute Construed as a Whole and in Relation to Other Statutes',
	short: 'Ch. VI — Statute as a Whole & Other Statutes',
	sections: '§§6.01–6.28',

	plain: `A statute is one piece of legislation, so you read each word in light of every other word in it. A statute also sits among other laws: the Constitution above it and other statutes beside it. So you read it in harmony with those too. The whole chapter rests on one presumption: <b>the legislature means its laws to fit together.</b>`,
	overview: `<p>Chapter VI has two halves. <b>Part A (§§6.01–6.13)</b> looks <i>inward</i>: how to read one provision in light of the rest of the same statute, how to reconcile provisions that seem to clash, and why no word should be left useless. <b>Part B (§§6.14–6.28)</b> looks <i>outward</i>: how to read a statute in harmony with the Constitution, with other statutes on the same subject (statutes <i>in pari materia</i>), with general or special laws, and with laws it refers to, supplements, reenacts or copies.</p>
<p>Why it matters: most real construction disputes are not about one word in a vacuum. They are about <b>which provision or which law controls</b>. All five of your assigned cases use a Chapter VI rule. <i>Catiis</i>, <i>Aquino</i> and <i>Manila Lodge</i> read one statute as a whole. <i>Corona</i> and <i>Magtajas</i> read two statutes together.</p>`,
	questions: [
		'How do I find the meaning of a provision when other provisions of the same statute bear on it?',
		'What do I do when two provisions of the same statute appear to conflict?',
		'When a statute can be read two ways, which reading does the Constitution require?',
		'When are two statutes <i>in pari materia</i>, and what follows if they are?',
		'When a general law and a special law collide, which prevails, and when does that answer flip?',
		'What happens to a law that refers to, supplements, reenacts or copies another law?'
	],
	keyPoints: [
		'Read the statute as a whole; one part may be qualified by another part.',
		'<b>Harmonize first.</b> Choose between provisions or laws only when harmony is impossible.',
		'A special provision or law is an exception to a general one, <b>whichever came first</b>, subject to three exceptions.',
		'Of two possible readings, adopt the one that keeps the statute constitutional, but only if the text is fairly open to it.',
		'Statutes <i>in pari materia</i> are read together as one system; the legislature is presumed to know existing laws.',
		'A reenacted statute carries its settled construction; an adopted (foreign) statute carries the foreign construction made <i>before</i> adoption.'
	],
	connects: `Chapters IV–V tell you what a word means; Chapter VI tells you how that meaning is shaped by the rest of the statute and by other laws. Chapter VI also sets up Chapter X: when harmonizing fails, the question becomes whether one law repealed the other. The presumption against implied repeal (Ch. X) is the other side of the duty to harmonize (Ch. VI). And §6.14 (harmony with the Constitution) previews Chapter XI.`,
	objectives: [
		'State the whole-statute rule and use it to defeat an argument that isolates one word (<i>Catiis</i>).',
		'Enumerate, in order, the steps for resolving apparently conflicting provisions of one statute.',
		'Define statutes <i>in pari materia</i>, give the three tests, and explain why they are harmonized.',
		'Apply <i>generalia specialibus non derogant</i> and its three exceptions, whichever law is later.',
		'Explain the rule of constitutional harmony and its limit.',
		'Distinguish reference, supplemental, reenacted and adopted statutes and state the rule for each.',
		'Connect each of the five cases to the correct Chapter VI rule.'
	],

	concepts: [
		{
			term: 'Statute construed as a whole',
			plain: 'Read the whole law, not one sentence or word, to find what it means.',
			legal: 'Legislative intent is ascertained from the statute as a whole and not from an isolated part, section, phrase or word; every part is interpreted with reference to its context (<i>Aisporna v. CA</i>, quoted in <i>Aquino v. Quezon City</i>).',
			why: 'A legislature enacts a statute as a single, coherent scheme. A part read alone can mean something the legislature never intended.',
			example: 'In <i>Catiis</i>, "any person or persons" in Sec. 1, P.D. 1689 could not be read apart from "committed by a syndicate consisting of five or more persons" in the same sentence.',
			confuse: '<i>Statutes in pari materia.</i> That rule reads <b>different statutes</b> together; this rule reads the <b>parts of one statute</b> together.'
		},
		{
			term: 'Harmonization (reconciliation) of provisions',
			plain: 'If two parts of a law seem to clash, look for a reading under which both work.',
			legal: 'Apparently conflicting provisions of the same statute must be reconciled and harmonized so that each is given effect (§6.05).',
			why: 'The legislature is presumed not to enact contradictory provisions in one law; consistency is "of prime importance" (§6.08).',
			example: 'One provision: medical board members are appointed from a list submitted by the PMA. Another allows reappointment of members whose terms expired. Read together, a member being <i>reappointed</i> need not be on a fresh PMA list (Agpalo\'s illustration in §6.05).',
			confuse: 'Choosing between provisions. Choosing is the fallback; reconciling comes first.'
		},
		{
			term: '<i>Interpretatio fienda est ut res magis valeat quam pereat</i>',
			plain: 'Interpret a law so that it works, not so that it fails.',
			legal: 'A statute is construed so as to give it effect and to uphold it rather than to render it, or any of its parts, inoperative or void.',
			why: 'Courts assume the legislature passed every provision to have some effect.',
			example: 'Of two readings, one of which leaves a section with nothing to do, choose the other.',
			confuse: '<i>Utile per inutile non vitiatur</i>, which saves the rest of a statute from a part that really is useless. This maxim stops you from <i>making</i> a part useless.'
		},
		{
			term: 'Rule against surplusage (no nugatory construction)',
			plain: 'Assume every word has a job.',
			legal: 'Effect must be given to every word, clause and sentence; a statute is construed so that no part becomes inoperative or superfluous (§§6.07, 6.10–6.11).',
			why: 'The legislature is presumed not to use words in vain.',
			example: 'In <i>Manila Lodge</i>, if the reclaimed land were the City\'s patrimonial property, the grant "hereby authorized ... to sell" the north-end hotel site would be superfluous. So the land was not patrimonial.',
			confuse: '<i>Surplusagium non nocet</i> ("surplusage does not harm"). That maxim applies only when words <i>really</i> add nothing: they are disregarded, and they do not invalidate the statute.'
		},
		{
			term: 'Special provision vs. general provision (same statute)',
			plain: 'Inside one law, the specific section is the exception to the broad section.',
			legal: 'Where a general and a special provision of the same statute cover the same matter, the special provision is read as an exception to the general one, which then governs only the cases the special provision does not reach (§6.06).',
			why: 'This gives effect to both provisions; neither is wasted.',
			example: 'Sec. 3 grants an honorarium to "all" health workers; Sec. 9 excludes those holding elective barangay posts. Sec. 9 is the exception.',
			confuse: 'Special <i>law</i> vs. general <i>law</i> (§6.20), which is the same idea applied between two different statutes and has its own exceptions (§6.22).'
		},
		{
			term: 'Construction in harmony with the Constitution',
			plain: 'If a law can be read two ways, pick the way that keeps it constitutional.',
			legal: 'A statute is construed in harmony with, not in violation of, the Constitution. If it is fairly susceptible of two constructions, one making it unconstitutional, the court adopts the one that sustains it (§6.14).',
			why: 'The legislature is presumed to have acted within the Constitution, and every intendment favors validity.',
			example: '<i>Garcia v. COMELEC</i>: "ordinance" in the local-initiative provisions was not read so narrowly as to exclude resolutions, because the Constitution speaks of "any act or law."',
			confuse: 'Construing the Constitution itself (Ch. XI). This rule is about reading a <i>statute</i> against the Constitution.'
		},
		{
			term: 'Statutes <i>in pari materia</i>',
			plain: '"On the same matter." Laws on the same subject are read together as if they were one law.',
			legal: 'Statutes are <i>in pari materia</i> when they relate to the same person or thing, have the same purpose or object, or cover the same specific subject matter; they are construed together and harmonized (§§6.15–6.16).',
			why: 'The legislature is presumed to know existing laws and not to create two hostile systems on one subject (§6.17).',
			example: '<i>Corona</i>: the PPA Charter and the Civil Service Law both govern discipline of PPA personnel, so they were harmonized into one two-stage scheme.',
			confuse: 'Two laws merely in the same broad field (e.g., both "tax laws") are not <i>in pari materia</i> if their specific subjects differ.'
		},
		{
			term: '<i>Generalia specialibus non derogant</i>',
			plain: 'A general law does not override a special law.',
			legal: 'Where a general law and a special law on the same subject conflict, the special law prevails as an exception to the general law, whichever was passed first (§§6.20–6.21), subject to the exceptions in §6.22.',
			why: 'In making the special law the legislature focused on particular facts; it is not presumed to have undone that by a later general law that never mentions them (§6.21).',
			example: '<i>Magtajas</i>: the later, general Local Government Code did not repeal the earlier, special P.D. 1869 (PAGCOR Charter).',
			confuse: '<i>Leges posteriores priores contrarias abrogant</i> (later laws repeal earlier contrary laws). That rule turns on <b>time</b>; this one turns on <b>specificity</b>.'
		},
		{
			term: 'Reference statute',
			plain: 'A law that borrows another law by pointing to it.',
			legal: 'A statute that refers to another law and makes it applicable to its own subject. The adopted law becomes part of the adopting law as if incorporated in full, and is taken as it stood at the time of adoption, not as later changed, unless the adopting law expressly says otherwise (§6.23).',
			why: 'It avoids repeating long provisions while fixing the borrowed rule at a known point in time.',
			example: 'The Science Stamp Tax Act collected its tax "in the same manner and subject to the same penalties" as the documentary stamp tax, so NIRC penalties for counterfeit documentary stamps cover counterfeit science stamps.',
			confuse: 'Supplemental statute, which adds to a law; a reference statute borrows from a law.'
		},
		{
			term: 'Supplemental statute',
			plain: 'A law that fills gaps in an existing law without rewriting it.',
			legal: 'A statute that supplies deficiencies in an existing law, adding to, completing or extending it without changing its text; it is read together with the original as one whole (§6.24).',
			why: '"No law can be viewed in isolation or as the beginning of a new legal system" (<i>Manila Jockey Club v. CA</i>).',
			example: 'R.A. 309 was silent on who gets horse-race "breakages"; Executive Orders 88 and 89 allocated them. The two were harmonized.',
			confuse: 'An amendment, which changes the text of the existing law (Ch. X).'
		},
		{
			term: 'Reenacted statute',
			plain: 'A law that repeats an older law, and so inherits how courts read the older law.',
			legal: 'A statute that reproduces an earlier statute in the same or substantially the same words. The legislature is presumed to have adopted the earlier settled judicial (or practical) construction along with the words (§§6.25–6.27).',
			why: 'Lawmakers who copy words that courts have already construed are presumed to accept that construction.',
			example: '<i>Montelibano v. Ferrer</i>: a provision of the Manila Charter on the city fiscal, already construed by the Court, was copied into the Bacolod Charter and carried the same construction.',
			confuse: 'A mere amendment. Changed wording suggests changed meaning; the presumption needs substantially the same words.'
		},
		{
			term: 'Adopted statute',
			plain: 'A law copied from a foreign law, which carries the foreign courts\' reading.',
			legal: 'A statute patterned after or copied from a foreign law. The construction given by the foreign courts <b>before</b> adoption is presumed adopted; rulings made <b>after</b> adoption are only persuasive (§6.28).',
			why: 'The legislature is presumed to take the foreign law as it was then understood.',
			example: 'If Congress copies a U.S. statute word for word, U.S. decisions construing it before the copying are presumed part of our law.',
			confuse: 'Reenacted statute, which repeats a <i>Philippine</i> law and carries <i>Philippine</i> construction.'
		}
	],

	principles: [
		{
			name: 'Construe the statute as a whole',
			rule: 'The intent of a statute is found in the statute as a whole, not in an isolated part. A word, phrase or section is read with the sentence, section and chapter to which it belongs, because one portion may be qualified by another.',
			basis: 'Agpalo §§6.01–6.04; <i>Aisporna v. CA</i>, 113 SCRA 459 (1982), quoted in <i>Aquino v. Quezon City</i> (2006); <i>Catiis v. CA</i> (2006): "it is a dangerous practice to base construction upon only a part of a section since one portion may be qualified by the other portion."',
			why: 'A statute is enacted as one plan. Meaning depends on context.',
			when: 'Whenever a party builds an argument on one word or one section, or when a provision\'s placement (chapter heading, order of sections, cross-references) bears on its reach.',
			limits: 'Reading as a whole <b>explains</b> the text; it does not license adding a requirement the text omits. In <i>Aquino</i> the Court read Sec. 65 with the whole chapter, yet refused to add an "actual receipt" requirement to Sec. 73. If the provision, read in context, is clear, it is applied as written.',
			differs: 'In pari materia reads different statutes together; the whole-statute rule reads the parts of one statute together.',
			example: '<i>Catiis</i>: "any person or persons" + "a syndicate consisting of five or more persons" + "when not committed by a syndicate <i>as above defined</i>" in the second paragraph = four accused cannot commit syndicated estafa.'
		},
		{
			name: 'Reconcile apparently conflicting provisions; choose only as a last resort',
			rule: 'Apparently conflicting provisions of the same statute are harmonized so each has effect. If they are truly irreconcilable, the court prefers the provision that best fits the general plan and purpose of the statute; if there is no basis for choice, the provision <b>last in position</b> prevails as the latest expression of the legislative will.',
			basis: 'Agpalo §§6.05, 6.07–6.08 (the same order is stated for codes in §10.12).',
			why: 'The legislature is presumed to enact consistent provisions; a construction that destroys one provision defeats part of what was enacted.',
			when: 'Two provisions of the same statute seem to command different results for the same situation.',
			limits: 'The last-in-position rule is a last resort and yields when a contrary legislative intent clearly appears. Never jump to choosing before honestly trying to reconcile.',
			differs: 'Between two <i>different</i> statutes the fallbacks are <i>generalia specialibus</i> (§6.20) and <i>leges posteriores</i> (Ch. X), not "last in position."',
			example: 'A licensing act says in Sec. 4 that a license is valid one year and in Sec. 15 that it is valid three years. If the statute\'s plan (annual inspections, annual fees) presupposes one year, Sec. 4 prevails even though Sec. 15 comes later.'
		},
		{
			name: 'A special provision is an exception to a general provision',
			rule: 'Where a general and a special provision in the same statute deal with the same matter, the special provision is treated as an exception to the general provision, and the general provision governs the remaining cases.',
			basis: 'Agpalo §6.06.',
			why: 'Both provisions are given effect; the specific one reflects the legislature\'s closer attention to the particular case.',
			when: 'One section states a broad rule and another, in the same law, deals particularly with part of the same ground.',
			limits: 'Yields if the statute clearly shows a different intent (for example, an express "notwithstanding" clause in the general provision).',
			differs: 'Same logic as <i>generalia specialibus</i> between two laws, but within one enactment there is no question of timing.',
			example: 'Driver\'s-license law: Sec. 2 bars licenses below 18; Sec. 9 allows student permits from 16 if accompanied by a licensed adult. Sec. 9 is the exception; Sec. 2 governs everyone else.'
		},
		{
			name: 'Give effect to every word; avoid nugatory readings — but surplusage does not vitiate',
			rule: 'A statute is construed so that no word, clause or provision is rendered useless. But if words truly add nothing, they are disregarded and do not invalidate the statute (<i>utile per inutile non vitiatur</i>; <i>surplusagium non nocet</i>).',
			basis: 'Agpalo §§6.07, 6.10–6.11; <i>Manila Lodge No. 761 v. CA</i> (1976), citing Sutherland: "effect must be given to every word, clause, and sentence of the statute."',
			why: 'The legislature is presumed not to waste words. And a drafting excess should not destroy an otherwise good law.',
			when: 'One reading would make a word, clause or section meaningless.',
			limits: 'The presumption that every word counts yields when a word is plainly redundant or a clerical slip (Ch. IV). It never lets a court invent a meaning that contradicts the text just to avoid redundancy.',
			differs: 'The anti-surplusage rule shapes <i>meaning</i>; <i>surplusagium non nocet</i> addresses <i>validity</i> when redundancy is real.',
			example: '<i>Manila Lodge</i>: "hereby authorized ... to lease ... to sell" would be pointless if the City already owned the land as private property, so the land was public dominion.'
		},
		{
			name: 'Construe the statute in harmony with the Constitution',
			rule: 'If a statute is fairly susceptible of two constructions, one of which would make it unconstitutional, the court adopts the construction that keeps it valid. Courts may even depart from "the more usual or apparent import of the language" to avoid unconstitutionality (<i>In re Guarina</i>, as cited by Agpalo).',
			basis: 'Agpalo §6.14; <i>Garcia v. COMELEC</i>, 237 SCRA 279 (1994); Art. 7, par. 2, Civil Code (a law inconsistent with the Constitution is void).',
			why: 'The legislature is presumed to follow the Constitution; courts avoid striking down a co-equal branch\'s act when a valid reading exists.',
			when: 'Genuine ambiguity, and one of the possible readings raises a constitutional problem.',
			limits: '<b>Only when the text is fairly susceptible of the saving reading.</b> A court cannot rewrite a clear provision. If the only reasonable reading is unconstitutional, the statute is void.',
			differs: 'This is a rule for choosing between readings of a statute. It is not the same as the rules for construing the Constitution itself (Ch. XI).',
			example: '<i>Garcia v. COMELEC</i>: a sanggunian resolution may be the subject of a local initiative. The Constitution (Art. VI, Sec. 32) speaks of "any act or law," R.A. 6735 expressly includes resolutions, and the LGC extends initiative to all subjects within the sanggunian\'s power.'
		},
		{
			name: 'Statutes in pari materia are read together and harmonized',
			rule: 'Statutes that relate to the same person or thing, have the same purpose or object, or cover the same specific subject are construed together as one system: <i>interpretare et concordare leges legibus est optimus interpretandi modus</i>. Laws made at different times are read in light of their times: <i>distingue tempora et concordabis jura</i>.',
			basis: 'Agpalo §§6.15–6.17; <i>Corona v. CA</i> (1992), quoting Agpalo; <i>Magtajas v. Pryce</i> (1994); <i>C & C Commercial v. NAWASA</i>, 21 SCRA 984 (1967); <i>Manila Jockey Club v. CA</i>, 300 SCRA 181 (1998).',
			why: 'The legislature is presumed to know the existing laws, cannot be presumed to want two hostile systems on one subject, and would otherwise make lawmaking "a useless and idle ceremony" (§6.17).',
			when: 'Two or more statutes deal with the same specific subject. The later law need not refer to the earlier.',
			limits: 'Laws on different specific matters are not <i>in pari materia</i>, even under one broad topic. If harmonizing is truly impossible, look to the circumstances of passage and other aids; usually the later law prevails (§§6.18–6.19), subject to the special–general rule, and the question becomes one of implied repeal (Ch. X).',
			differs: 'The whole-statute rule works inside one statute; this rule works across statutes.',
			example: '<i>Corona</i>: original jurisdiction over PPA personnel in the PPA General Manager (PPA Charter); appellate jurisdiction in the DOTC Secretary or the CSC (Civil Service Law). Both laws keep working.'
		},
		{
			name: 'Special law prevails over general law — generalia specialibus non derogant',
			rule: 'Where a special law and a general law on the same subject conflict, the special law prevails as an exception to the general law, <b>whichever was enacted first</b>. The general law governs everything outside the special law\'s field. Harmonize first.',
			basis: 'Agpalo §§6.20–6.22; <i>Corona v. CA</i> (later special law: partial implied repeal of the general law "to the extent of the inconsistency, or an exception grafted upon the general law"); <i>Magtajas v. Pryce</i> (later general law did not repeal earlier special law; <i>Lichauco & Co. v. Apostol</i>, 44 Phil. 138).',
			why: 'In making the special law the legislature had the particular facts in mind; it is not presumed to have wiped that out by a later general act that never mentions them (§6.21).',
			when: 'Two laws on the same subject, one treating it generally and the other particularly, and they cannot be fully reconciled.',
			limits: 'Under §6.22 the special law <b>loses</b> when (1) the legislature clearly intended the later general law to cover the whole subject and repeal inconsistent laws; (2) the special law only sets a general rule while the general law sets a specific rule; or (3) the roles are reversed: the general law treats the subject in particular and the special law treats it in general.',
			differs: '<i>Leges posteriores</i> prefers the later law; <i>generalia specialibus</i> prefers the special law regardless of date. A later <i>general</i> law does not repeal an earlier <i>special</i> law absent clear intent.',
			example: '<i>Magtajas</i>: LGUs may suppress all gambling <b>except</b> gambling authorized by statutes like P.D. 1869. <i>Corona</i>: the PPA Charter is the exception to the Civil Service Law at the original stage.'
		},
		{
			name: 'Statutes that refer to, supplement, reenact or copy other laws',
			rule: '<b>Reference</b> statute: the adopted law is read in as if set out in full, as it stood at adoption. <b>Supplemental</b> statute: read with the original as one whole. <b>Reenacted</b> statute: carries the settled judicial or practical construction of the earlier law. <b>Adopted</b> statute: carries the foreign construction made before adoption; later foreign rulings are only persuasive.',
			basis: 'Agpalo §§6.23–6.28; <i>Manila Jockey Club v. CA</i>; <i>Montelibano v. Ferrer</i>, 97 Phil. 228 (1955).',
			why: 'Each rule tracks what the legislature is presumed to have intended when it borrowed, added to, repeated, or copied existing law.',
			when: 'The statute points to another law, fills a gap in it, repeats it, or copies a foreign model.',
			limits: 'Reenactment rule: only if the statute is capable of the construction and the construction had become a settled rule of conduct (§6.27); it never freezes a reading that clearly conflicts with legislative intent. Reference statute: later amendments to the referred law are not included unless the adopting law expressly provides.',
			differs: 'Reenacted vs. adopted: domestic vs. foreign source. Reference vs. supplemental: borrows vs. adds.',
			example: 'Science Stamp Tax Act (reference); E.O. 88–89 and R.A. 309 (supplemental); Bacolod Charter copying the Manila Charter (reenacted).'
		}
	],

	enums: [
		{
			id: 'E6.1',
			name: 'Steps when two provisions of the same statute appear to conflict',
			source: 'Agpalo §6.05 (and §10.12 for codes).',
			kind: 'book',
			ordered: true,
			memorize: true,
			lead: 'When two provisions of the same statute appear to conflict, the court proceeds in this order',
			items: [
				{
					t: 'Reconcile and harmonize them',
					d: 'Look for a reading under which both operate, for instance by treating the broad words of one as limited by the conditions or exceptions in the other. This is mandatory because the legislature is presumed to enact consistent provisions.',
					s: 'read both so that each is given effect (ut res magis valeat quam pereat)',
					x: 'A section granting a benefit to "all employees" is read with a later section excluding probationary employees.'
				},
				{
					t: 'If irreconcilable, prefer the provision that best fits the general plan and purpose',
					d: 'Choose the provision more consistent with the statute\'s overall design and declared policy, because that better reflects legislative intent.',
					s: 'the provision more in accord with the general intent and purpose of the whole statute prevails'
				},
				{
					t: 'If there is no ground to choose, the provision last in position prevails',
					d: 'The later provision in physical order is treated as the latest expression of the legislative will and prevails to the extent of the conflict, unless a contrary intent clearly appears.',
					s: 'the provision last in order of position prevails as the latest expression of legislative will, unless a contrary intent clearly appears'
				}
			],
			memory: '<b>R-P-L: Reconcile → Purpose → Last.</b> You only move right when the step before it fails.',
			tip: 'Keywords: "reconcile and harmonize," "general plan and purpose," "last in position," "latest expression of the legislative will." Common mistakes: starting with step 3; applying "last in position" to two <i>different</i> statutes (between statutes use <i>generalia specialibus</i> and <i>leges posteriores</i>).',
			question: 'Two provisions of the same statute appear to be in conflict. How should the court resolve the conflict? Enumerate the steps in order and explain each briefly.',
			verify: 'The same three-step order appears for codes in §10.12. Confirm the exact wording of step 2 in Agpalo before quoting it.'
		},
		{
			id: 'E6.2',
			name: 'Tests for statutes in pari materia',
			source: 'Agpalo §6.15.',
			kind: 'book',
			memorize: true,
			lead: 'Statutes are in pari materia when they',
			items: [
				{ t: 'Relate to the same person or thing', d: 'Both laws govern the same individuals, class of persons, or thing.', s: 'relate to the same person or thing', x: 'Two laws governing the discipline of the same PPA personnel (<i>Corona</i>).' },
				{
					t: 'Have the same purpose or object',
					d: 'Both laws aim at the same goal, even if worded differently.',
					s: 'have the same purpose or object',
					x: 'The Flag Law and R.A. 912 both aim to prefer local materials in government purchases (<i>C & C Commercial v. NAWASA</i>).'
				},
				{
					t: 'Cover the same specific subject matter',
					d: 'The subject must be the same <i>specific</i> subject. Laws on different specific matters under one broad heading are not <i>in pari materia</i>.',
					s: 'cover the same specific subject matter'
				}
			],
			memory: '<b>Same WHO, same WHY, same WHAT.</b> Any one is enough.',
			tip: 'The tests are <b>alternative</b> ("or"). The later law need not mention the earlier one. Common mistakes: requiring all three; treating any two laws in the same broad field (e.g., "tax laws") as <i>in pari materia</i>.',
			question: 'When are statutes said to be in pari materia? Enumerate the tests and briefly discuss each.'
		},
		{
			id: 'E6.3',
			name: 'Reasons why statutes on the same subject are reconciled',
			source: 'Agpalo §6.17; <i>Corona v. CA</i> (quoting Agpalo).',
			kind: 'book',
			lead: 'Statutes on the same subject are reconciled because',
			items: [
				{
					t: 'The legislature is presumed to know the existing laws',
					d: 'When it enacts a law, it is presumed to have in mind the previous statutes on the same subject; absent express repeal or amendment, the new law is deemed enacted in accordance with the policy of the prior laws (<i>Corona</i>).',
					s: 'the legislature is presumed to have the existing laws on the subject in mind when it enacts a new one'
				},
				{
					t: 'The legislature cannot be presumed to want two hostile systems on one subject',
					d: 'Conflict is not presumed. If one reading creates a clash and another does not, the reading without the clash is preferred.',
					s: 'it cannot be presumed to have intended conflicting systems on the same subject'
				},
				{
					t: 'Otherwise lawmaking would be a "useless and idle ceremony" and the law uncertain',
					d: 'If every new law silently cancelled older ones, no one could know what the law is. Harmonizing produces "a uniform system of jurisprudence" (<i>Corona</i>).',
					s: 'reconciliation avoids making legislation idle and the law uncertain, and yields a uniform system of jurisprudence'
				}
			],
			memory: '<b>Knows · No war · No waste.</b>',
			tip: 'Tie this list to the presumption against implied repeal (Ch. X): they are two sides of the same coin. Consequence to state: courts must try to harmonize <b>before</b> declaring any law repealed or invalid.',
			question: 'Why must statutes on the same subject be reconciled whenever possible? Give the reasons.'
		},
		{
			id: 'E6.4',
			name: 'When the special law does NOT prevail over the general law (exceptions to generalia specialibus)',
			source: 'Agpalo §6.22.',
			kind: 'book',
			memorize: true,
			lead: 'The special law does not prevail over the general law',
			items: [
				{
					t: 'When the legislature clearly intended the later general law to cover the whole subject and repeal all inconsistent laws',
					d: 'Clear intent overrides the presumption, and the general law then repeals the special law. The intent must be clear: a general repealing clause alone is not enough (<i>Magtajas</i>: LGC Sec. 534(f) did not repeal P.D. 1869).',
					s: 'where the legislature clearly intended the later general law to cover the whole subject and repeal all inconsistent laws'
				},
				{
					t: 'When the special law merely establishes a general rule while the general law creates a specific rule',
					d: 'Labels do not control; what matters is which law speaks <i>particularly</i> on the point in dispute. If the "special" statute only states a broad rule on that point and the "general" statute has the detailed rule, the detailed rule governs.',
					s: 'where the special law only lays down a general rule on the point while the general law lays down a specific one'
				},
				{
					t: 'When the general law treats the subject in particular and the special law treats it in general',
					d: 'The rule works only when the general law treats the subject in general and the special law in particular. Reverse the treatment and the result reverses: the general law prevails.',
					s: 'where the roles are reversed — the general law treats the subject in particular and the special law in general'
				}
			],
			memory: '<b>C-V-R: Clear intent · Vague special law · Roles reversed.</b>',
			tip: 'Keywords: "clearly intended," "general rule vs. specific rule," "treats the subject in particular." Common mistake: answering "the later law always prevails." Another: forgetting to harmonize first.',
			question: 'Is the rule that a special law prevails over a general law absolute? Enumerate the exceptions and explain each.'
		},
		{
			id: 'E6.5',
			name: 'Statutes related to other statutes, and the rule for each',
			source: 'Agpalo §§6.23–6.28.',
			kind: 'book',
			memorize: true,
			lead: 'Statutes related to other statutes are of four kinds',
			items: [
				{
					t: 'Reference statute',
					d: 'Refers to another law and makes it applicable to its subject. The adopted law is read in as if incorporated in full, as it stood at the time of adoption; later changes are not included unless expressly stated. A construction that makes the adopted law meaningless is disfavored.',
					s: 'adopts another law by reference; the adopted law is read into it as of the time of adoption',
					x: 'Science Stamp Tax Act borrowing the NIRC penalties for documentary stamps.'
				},
				{
					t: 'Supplemental statute',
					d: 'Supplies deficiencies in an existing law, adding to, completing or extending it without changing its text. It is read together with the original as one intelligible whole.',
					s: 'fills gaps in an existing law without changing its text; read together with it',
					x: '<i>Manila Jockey Club</i>: E.O. 88 and 89 allocated race "breakages" on which R.A. 309 was silent.'
				},
				{
					t: 'Reenacted statute',
					d: 'Reproduces an earlier law in the same or substantially the same words. The legislature is presumed to adopt the settled judicial (and practical) construction together with the language.',
					s: 'repeats an earlier law in substantially the same words and carries its settled construction',
					x: '<i>Montelibano v. Ferrer</i>: the Bacolod Charter copied the Manila Charter\'s fiscal provision.'
				},
				{
					t: 'Adopted statute',
					d: 'Patterned after or copied from a foreign law. The foreign courts\' construction before adoption is presumed adopted; their rulings after adoption are only persuasive.',
					s: 'copied from a foreign law; carries the foreign construction made before adoption'
				}
			],
			memory: '<b>R-S-R-A: Refers · Supplies · Repeats · Abroad.</b>',
			tip: 'Keywords: "as of the time of adoption," "without changing its text," "presumed to adopt the construction," "before adoption." Common mistakes: treating a mere amendment as a reenactment; treating foreign rulings made after adoption as binding.',
			question: 'Enumerate the kinds of statutes that are related to other statutes, and state the rule of construction for each.'
		},
		{
			id: 'E6.6',
			name: 'Conditions for the reenactment rule',
			source: 'Agpalo §§6.25–6.27 (items 3–4 are the limits stated in §6.27; items 1–2 are what the rule presupposes).',
			kind: 'teaching',
			lead: 'A reenacted statute is presumed to carry its prior construction only when',
			items: [
				{
					t: 'The law is reenacted in the same or substantially the same words',
					d: 'It must be a reenactment, not an amendment that changes the operative words. A change in language suggests a change in meaning (§10.06).',
					s: 'it is reenacted in the same or substantially the same terms'
				},
				{
					t: 'The earlier law had been construed before the reenactment',
					d: 'There must be a construction to adopt: a judicial ruling or a settled executive (practical) construction.',
					s: 'it had received a judicial or practical construction before reenactment'
				},
				{
					t: 'The statute is capable of that construction',
					d: 'The construction must be one the words can bear. The doctrine does not freeze a reading the text cannot support.',
					s: 'the statute is fairly capable of that construction'
				},
				{
					t: 'The construction had become a settled rule of conduct',
					d: 'An isolated or unsettled interpretation is not presumed adopted.',
					s: 'the construction had become a settled rule of conduct'
				}
			],
			memory: '<b>Same words · Prior reading · Fits the text · Settled.</b>',
			tip: 'Say expressly that the presumption yields to clear contrary legislative intent. Don\'t present this four-item list as Agpalo\'s wording; it is a study grouping of the rule and its limits.',
			question: 'When may a court presume that a reenacted statute carries the construction given to the earlier statute?'
		},
		{
			id: 'E6.7',
			name: 'Latin maxims of Chapter VI',
			source: 'Agpalo, Chapter VI; <i>Corona</i> and <i>Magtajas</i> (<i>interpretare et concordare</i>).',
			kind: 'teaching',
			memorize: true,
			lead: 'The Chapter VI maxims are',
			items: [
				{ t: 'Interpretatio fienda est ut res magis valeat quam pereat', d: 'A law should be interpreted so it is upheld and works, not so it fails. Used against readings that destroy a provision.', s: 'interpret so the law takes effect rather than fails' },
				{ t: 'Utile per inutile non vitiatur', d: 'The useful is not vitiated by the useless. A genuinely useless part does not invalidate the rest.', s: 'the useful is not spoiled by the useless' },
				{ t: 'Surplusagium non nocet', d: 'Surplusage does no harm. Truly redundant words are disregarded, not fatal.', s: 'surplusage does not vitiate a statute' },
				{
					t: 'Interpretare et concordare leges legibus est optimus interpretandi modus',
					d: 'To interpret and harmonize laws with laws is the best method of interpretation. The maxim behind <i>in pari materia</i>; quoted in <i>Corona</i> and <i>Magtajas</i>.',
					s: 'the best interpretation harmonizes laws with other laws'
				},
				{ t: 'Distingue tempora et concordabis jura', d: 'Distinguish the times and you will harmonize the laws. Read each law in light of the conditions when it was made.', s: 'distinguish the times and the laws will agree' },
				{ t: 'Generalia specialibus non derogant', d: 'General things do not derogate from special things. The special law prevails as an exception.', s: 'the general does not override the special' }
			],
			memory: 'Group them: <b>save the law</b> (interpretatio fienda, utile per inutile, surplusagium) · <b>harmonize laws</b> (interpretare et concordare, distingue tempora) · <b>pick the special</b> (generalia specialibus).',
			tip: 'Examiners often give the maxim and ask for the meaning <i>and</i> a case. Corona printed the harmonization maxim as "Interpretare et concordare legibus est optimus interpretandi"; the standard form adds "leges" and "modus."',
			question: 'Give the meaning of the following and state when each is applied: (a) generalia specialibus non derogant; (b) interpretare et concordare leges legibus est optimus interpretandi modus; (c) utile per inutile non vitiatur.'
		}
	],

	reqs: [
		{
			name: 'Construction in harmony with the Constitution (saving construction)',
			source: 'Agpalo §6.14; <i>Garcia v. COMELEC</i>.',
			what: ul([
				'The statute is <b>fairly susceptible</b> of two or more constructions.',
				'One construction would make it unconstitutional (or raise a grave constitutional doubt).',
				'The other construction is reasonable and consistent with the statute\'s words and purpose.'
			]),
			why: 'The legislature is presumed to act within the Constitution; courts prefer saving a co-equal branch\'s act to striking it down.',
			mode: 'Cumulative — all must concur',
			absent: 'If the text admits only one reasonable reading, the court cannot rewrite it. If that reading is unconstitutional, the statute (or the offending part) is void (Art. 7, par. 2, Civil Code).',
			interacts: 'Works with <i>ut res magis valeat quam pereat</i>; contrasts with verba legis (Ch. IV), since a clear text leaves no room to choose.',
			hypo: 'A law lets a mayor deny rally permits when an assembly "may disturb public order." Read broadly it allows denial for any traffic; read narrowly, only for a clear and present danger. The court adopts the narrow reading.'
		},
		{
			name: 'Special law prevails over general law',
			source: 'Agpalo §§6.20–6.22; <i>Corona</i>; <i>Magtajas</i>.',
			what: ul([
				'Two laws deal with the <b>same subject</b>.',
				'One treats the subject <b>generally</b>, the other <b>particularly</b>.',
				'They conflict and cannot be fully harmonized.',
				'None of the §6.22 exceptions applies.'
			]),
			why: 'The special law reflects the legislature\'s focused attention on particular facts.',
			mode: 'Mixed',
			modeNote: 'Requisites 1–3 are cumulative; the §6.22 exceptions are alternative (any one defeats the rule).',
			absent: 'If the laws are on different subjects, there is nothing to reconcile. If one §6.22 exception applies, the general law prevails. If the laws can be harmonized, both operate.',
			interacts: 'Overrides "later law prevails" (<i>Magtajas</i>); can coincide with it (<i>Corona</i>, where the special law was also later).',
			hypo: 'A 2010 calamity law allows direct purchase of relief goods; a 2024 procurement law requires public bidding for "all" purchases and has only a general repealing clause. The calamity law survives as the exception.'
		},
		{
			name: 'Statutes in pari materia',
			source: 'Agpalo §6.15.',
			what: ul(['Same person or thing; <b>or</b>', 'Same purpose or object; <b>or</b>', 'Same specific subject matter.']),
			why: 'To identify which laws must be read as one system.',
			mode: 'Alternative — any one suffices',
			absent: 'If no test is met, each statute is construed on its own; the duty to read them as one system does not arise.',
			interacts: 'Being <i>in pari materia</i> is also the first requisite of implied repeal by irreconcilable conflict (Ch. X, §10.20).',
			hypo: 'A tax-exemption law for cooperatives and a law on cooperative registration both concern cooperatives (same person/thing) and may be read together on what counts as a "duly registered" cooperative.'
		},
		{
			name: '"Last in position prevails"',
			source: 'Agpalo §6.05; §10.12 for codes.',
			what: ul([
				'The conflicting provisions are in the <b>same statute</b> (or code).',
				'They are <b>irreconcilable</b> after a genuine attempt to harmonize.',
				'There is <b>no basis</b> to prefer one as better fitting the general plan and purpose.',
				'No contrary legislative intent clearly appears.'
			]),
			why: 'As a last resort, the later provision is taken as the latest expression of the legislative will.',
			mode: 'Cumulative — all must concur',
			absent: 'If the provisions can be reconciled, or one better fits the plan, the rule is never reached.',
			interacts: 'It is the intra-statute counterpart of <i>leges posteriores</i> between statutes.',
			hypo: 'Sec. 4 says one-year license; Sec. 15 says three years; the rest of the law presupposes yearly renewal. Sec. 4 wins at step 2, so step 3 never applies.'
		}
	],

	comparisons: [
		{
			id: 'C6.1',
			title: 'Statute construed as a whole vs. statutes in pari materia',
			a: 'Statute construed as a whole',
			b: 'Statutes in pari materia',
			def: ['Reading every part of <b>one</b> statute in light of the whole statute.', 'Reading <b>two or more</b> statutes on the same subject together as one system.'],
			purpose: ['Find the single intent of one enactment.', 'Keep the body of law on one subject consistent.'],
			basis: ['§§6.01–6.04; <i>Aisporna v. CA</i> (quoted in <i>Aquino</i>); <i>Catiis</i>.', '§§6.15–6.17; <i>Corona</i>; <i>Magtajas</i>; <i>C & C Commercial v. NAWASA</i>.'],
			when: ['A party relies on one word, clause or section.', 'Two laws govern the same person or thing, purpose, or specific subject.'],
			key: ['One statute; internal context.', 'Several statutes; external context.'],
			limits: ['Cannot add requirements the text omits (<i>Aquino</i>, Sec. 73).', 'Needs the same <i>specific</i> subject; if irreconcilable, the question becomes implied repeal (Ch. X).'],
			example: ['<i>Catiis</i>: "any person" read with "syndicate consisting of five or more persons."', '<i>Corona</i>: PPA Charter read with the Civil Service Law and the Administrative Code.'],
			trap: ['Calling <i>Catiis</i> an <i>in pari materia</i> case. It read one section.', 'Assuming two laws are <i>in pari materia</i> because both are "tax laws."'],
			decisive: 'How many statutes are involved: one statute → whole-statute rule; two or more on the same specific subject → <i>in pari materia</i>.',
			matters: 'The fallbacks differ. Inside one statute, an irreconcilable clash goes to "best fits the plan," then "last in position." Between statutes it goes to <i>generalia specialibus</i> and the implied-repeal rules of Chapter X.',
			recognize: 'Count the enactments in the facts. Does the argument isolate a word (whole statute) or pit one law against another (<i>in pari materia</i>)?',
			mistake: 'Using "last in position" to resolve a conflict between two different laws.'
		},
		{
			id: 'C6.2',
			title: 'Special vs. general provision (same statute) vs. special vs. general law (different statutes)',
			a: 'Special v. general provision (§6.06)',
			b: 'Special v. general law (§§6.20–6.22)',
			def: ['Within one statute, the particular provision is read as an exception to the broad provision.', 'Between two statutes on the same subject, the law that treats it particularly prevails over the law that treats it generally.'],
			purpose: ['Give effect to both provisions of one enactment.', 'Give effect to both laws and respect the legislature\'s focused judgment in the special law.'],
			basis: ['§6.06.', '§§6.20–6.22; <i>Corona</i>; <i>Magtajas</i>; <i>Lichauco & Co. v. Apostol</i>.'],
			when: ['Two sections of one statute cover the same situation.', 'Two statutes cover the same subject.'],
			key: ['No timing question: both provisions were enacted together.', 'Timing is irrelevant too: the special law prevails whether earlier (<i>Magtajas</i>) or later (<i>Corona</i>).'],
			limits: ['Yields to a clearly contrary intent (e.g., a "notwithstanding" clause).', 'The three §6.22 exceptions, including clear intent to repeal.'],
			example: ['License law: general bar below 18; special student permit at 16.', 'P.D. 1869 (special) vs. LGC Sec. 458 (general): PAGCOR casinos are excepted from the LGU power to suppress gambling.'],
			trap: ['Saying the general provision controls because it is "broader."', 'Saying the later general law repealed the earlier special law because it is later.'],
			decisive: 'Same logic, different arena. One works inside a single statute; the other works between statutes and carries the formal §6.22 exceptions.',
			matters: 'Only the between-statutes rule can end in a repeal (exception 1). Inside one statute, nothing is repealed; one provision simply carves out the other.',
			recognize: 'Are the two rules in the same R.A. or in different enactments?',
			mistake: 'Citing §6.22 exceptions for two sections of the same law.'
		},
		{
			id: 'C6.3',
			title: 'Reference statute vs. supplemental statute',
			a: 'Reference statute',
			b: 'Supplemental statute',
			def: ['Refers to another law and makes it applicable to its subject.', 'Supplies deficiencies in an existing law without changing its text.'],
			purpose: ['Borrow existing rules without repeating them.', 'Complete or extend an existing law.'],
			basis: ['§6.23.', '§6.24; <i>Manila Jockey Club v. CA</i>.'],
			when: ['The new law says another law\'s rules apply "in the same manner" to its subject.', 'The existing law is silent or incomplete on a point the new law addresses.'],
			key: ['The new law borrows <b>from</b> another law.', 'The new law adds <b>to</b> another law.'],
			limits: ['The borrowed law is taken as it stood at adoption; later changes are excluded unless expressly included.', 'Must be read with the original as one whole; it cannot be used to contradict the original.'],
			example: ['Science stamp tax collected "in the same manner and subject to the same penalties" as documentary stamp tax.', 'E.O. 88–89 allocating race "breakages" on which R.A. 309 was silent.'],
			trap: ['Applying later amendments of the borrowed law automatically.', 'Treating the supplemental law as an amendment or a repeal.'],
			decisive: 'Direction of the relationship: a reference statute imports another law\'s rules; a supplemental statute exports new rules into an existing law.',
			matters: 'It decides what you read together and as of when: the borrowed law frozen at adoption, or the original and its supplement as one living whole.',
			recognize: 'Look for "in the same manner as," "subject to the provisions of [another law]" (reference) versus a new law filling a gap the old law left open (supplemental).',
			mistake: 'Saying the Executive Orders in <i>Manila Jockey Club</i> repealed R.A. 309. They were harmonized as supplementing it.'
		},
		{
			id: 'C6.4',
			title: 'Reenacted statute vs. adopted statute',
			a: 'Reenacted statute',
			b: 'Adopted statute',
			def: ['Reproduces an earlier <b>Philippine</b> law in substantially the same words.', 'Is patterned after or copied from a <b>foreign</b> law.'],
			purpose: ['Carry forward the settled construction of the earlier law.', 'Carry over the foreign law\'s meaning as understood when copied.'],
			basis: ['§§6.25–6.27; <i>Montelibano v. Ferrer</i>.', '§6.28.'],
			when: ['A provision already construed by our courts is reenacted.', 'Congress copies a foreign statute.'],
			key: ['Carries the prior Philippine judicial or practical construction.', 'Carries the foreign construction made <b>before</b> adoption; later foreign rulings are only persuasive.'],
			limits: ['Only if the statute can bear the construction and it had become a settled rule of conduct.', 'Post-adoption foreign decisions do not bind.'],
			example: ['Bacolod Charter copying the Manila Charter\'s provision on the city fiscal.', 'A Philippine statute copied from a U.S. statute.'],
			trap: ['Applying the rule to a mere amendment.', 'Treating a U.S. decision rendered after adoption as binding.'],
			decisive: 'Source of the borrowed construction: domestic courts and practice (reenacted) vs. foreign courts before adoption (adopted).',
			matters: 'It tells you which body of decisions controls and up to what date.',
			recognize: 'Is the earlier text a Philippine law or a foreign law?',
			mistake: 'Using the date of reenactment as the cut-off for foreign rulings. For adopted statutes the cut-off is the date of adoption.'
		},
		{
			id: 'C6.5',
			title: 'Rule against surplusage vs. surplusagium non nocet / utile per inutile',
			a: 'Rule against surplusage',
			b: 'Surplusagium non nocet / utile per inutile non vitiatur',
			def: ['Presume every word has meaning; avoid readings that make a word or provision useless.', 'When words really are surplus, they are disregarded and do not invalidate the statute.'],
			purpose: ['Guide <b>meaning</b>.', 'Protect <b>validity</b>.'],
			basis: ['§§6.07, 6.10–6.11; <i>Manila Lodge</i>.', '§6.11; maxims stated in Agpalo Ch. VI.'],
			when: ['Two readings exist and one leaves words idle.', 'After construction, some words genuinely add nothing.'],
			key: ['Operates <b>before</b> concluding words are idle.', 'Operates <b>after</b> concluding words are idle.'],
			limits: ['Cannot force a meaning the words cannot bear.', 'Applies only to truly redundant matter, not to words with a possible function.'],
			example: ['"Hereby authorized ... to sell" must mean something, so the land was not already disposable (<i>Manila Lodge</i>).', 'A repeated phrase in two clauses is harmless and does not void the law.'],
			trap: ['Quoting <i>surplusagium non nocet</i> to argue every word must be given meaning.', 'Declaring words "surplusage" too quickly to escape their effect.'],
			decisive: 'One shapes how you read the words; the other says what happens if some words turn out to be useless anyway.',
			matters: 'Using the wrong one reverses your argument. One preserves the words\' effect; the other neutralizes them.',
			recognize: 'Is the dispute over what a word means (anti-surplusage) or over whether a redundant word spoils the law (surplusagium)?',
			mistake: 'Treating the two as the same rule.'
		},
		{
			id: 'C6.6',
			title: 'Generalia specialibus non derogant vs. leges posteriores priores contrarias abrogant',
			a: 'Generalia specialibus non derogant',
			b: 'Leges posteriores priores contrarias abrogant',
			def: ['The special law prevails over the general law on the same subject, regardless of which is later.', 'A later law repeals an earlier contrary law to the extent of the conflict.'],
			purpose: ['Respect the legislature\'s focused judgment on a particular matter.', 'Give effect to the latest expression of the legislative will.'],
			basis: ['§§6.20–6.22; <i>Corona</i>; <i>Magtajas</i>; <i>Lichauco</i>.', '§§6.18, 10.19–10.20; Art. 7, Civil Code; <i>Mecano v. COA</i>.'],
			when: ['Two laws on the same subject, one general and one particular in treatment.', 'Two laws on the same subject and object are irreconcilable, and specificity does not explain the conflict.'],
			key: ['Measures <b>specificity</b>.', 'Measures <b>time</b>.'],
			limits: ['The three §6.22 exceptions.', 'Applies only to irreconcilable conflict; implied repeal is disfavored; a later general law does not repeal an earlier special law absent clear intent.'],
			example: ['<i>Magtajas</i>: earlier special P.D. 1869 survives the later general LGC.', 'Two laws of equal generality fix different penalties for the same act: the later law controls to the extent of the conflict.'],
			trap: ['Forgetting that special beats general even when the special law is older.', 'Treating "later law prevails" as the first step instead of the last resort.'],
			decisive: 'Special beats general regardless of date. Later beats earlier only when neither law is special relative to the other and they cannot be reconciled.',
			matters: 'In a later-general vs. earlier-special conflict, the two maxims point in opposite directions. <i>Generalia specialibus</i> wins unless the legislature clearly intended a repeal.',
			recognize: 'Ask two questions in order: (1) Is one law special relative to the other? (2) If not, which is later, and are they truly irreconcilable?',
			mistake: 'Adopting the <i>Magtajas</i> petitioners\' argument that the later LGC prevailed simply because it was later.'
		}
	],

	authorities: [
		{ kind: 'provision', name: 'Art. 7, par. 2, Civil Code', text: '"When the courts declare a law to be inconsistent with the Constitution, the former shall be void and the latter shall govern." This is why courts prefer a construction that keeps a statute in harmony with the Constitution.' },
		{
			kind: 'provision',
			name: 'Art. VI, Sec. 32, 1987 Constitution (as applied in Garcia v. COMELEC)',
			text: 'Congress shall provide for a system of initiative and referendum whereby the people can directly propose and enact laws or approve or reject "any act or law or part thereof" passed by Congress or a local legislative body. The words "any act" were read to include a sanggunian resolution.'
		},
		{ kind: 'case', name: 'Aisporna v. Court of Appeals', cite: '113 SCRA 459 (1982)', text: 'A statute is construed as a whole; its meaning is drawn from a general view of the act, and every part is interpreted with reference to its context. Quoted in <i>Aquino v. Quezon City</i>.' },
		{
			kind: 'case',
			name: 'Garcia v. COMELEC',
			cite: '237 SCRA 279 (1994)',
			text: 'Harmony with the Constitution: a resolution of a local legislative body may be the subject of a local initiative. A narrow, literal reading of "ordinance" would clash with the Constitution\'s "any act or law" and defeat the lawmakers\' intent.'
		},
		{ kind: 'case', name: 'C & C Commercial Corp. v. NAWASA', cite: '21 SCRA 984 (1967)', text: 'Laws <i>in pari materia</i> are construed to attain their common objective. R.A. 912\'s preference for local materials covers government-owned corporations, as the Flag Law does, though R.A. 912 mentions only "the Government."' },
		{ kind: 'case', name: 'Manila Jockey Club, Inc. v. Court of Appeals', cite: '300 SCRA 181 (1998)', text: 'Supplemental laws are harmonized with the law they supplement; "no law can be viewed in isolation or as the beginning of a new legal system." Executive Orders 88 and 89 on race "breakages" read with R.A. 309.' },
		{
			kind: 'case',
			name: 'Montelibano v. Ferrer',
			cite: '97 Phil. 228 (1955)',
			text: 'Reenacted statute: a provision of the Manila Charter on the city fiscal, already construed by the Court, was reproduced in the Bacolod Charter, and the same construction was presumed adopted.',
			verify: 'Facts not checked against the full decision.'
		},
		{ kind: 'case', name: 'Lichauco & Co. v. Apostol', cite: '44 Phil. 138', text: 'The intent to repeal a former law will not be imputed when the two statutes bear to each other the relation of general to special. Quoted in <i>Magtajas</i>.' },
		{ kind: 'case', name: 'NAPOCOR v. Presiding Judge; Lagman v. City of Manila', cite: '190 SCRA 477 (1990); 17 SCRA 579 (1966)', text: 'A later special law repugnant to a prior general law on the same subject impliedly repeals it to the extent of the inconsistency, or is grafted as an exception onto it. Cited in <i>Corona</i>.' },
		{ kind: 'book', name: 'Agpalo, Statutory Construction (6th ed.)', cite: '§§6.01–6.28', text: 'Primary source for this chapter.' }
	],

	caseNote: 'All five cases use a Chapter VI rule. <b>One statute read as a whole:</b> <i>Catiis</i> (one sentence and the next paragraph), <i>Aquino</i> (a whole chapter), <i>Manila Lodge</i> (every section of Act No. 1360). <b>Two statutes read together:</b> <i>Corona</i> (later special law over earlier general law, harmonized) and <i>Magtajas</i> (earlier special law survives later general law, harmonized).',
	caseLinks: [
		{
			caseId: 'catiis',
			strength: 'Direct — the Court applied it',
			doctrine: 'Statute construed as a whole; one portion may be qualified by another; a statutory definition controls.',
			facts: 'The Information charged only four accused with syndicated estafa under Sec. 1, P.D. 1689, though it alleged they acted "in a syndicated manner consisting of five (5) or more persons." The complainant argued that "any person or persons" means even one person may commit syndicated estafa.',
			issue: 'Does "any person or persons" allow fewer than five persons to be charged with syndicated estafa punishable by life imprisonment to death?',
			applied: 'The Court read the sentence in its entirety. The subject "any person or persons" is qualified by the penalty condition "committed by a syndicate consisting of five or more persons," and the second paragraph ("when not committed by a syndicate <i>as above defined</i>") confirms the definition is the operative test. "It is a dangerous practice to base construction upon only a part of a section since one portion may be qualified by the other portion."',
			ruling: 'No. Four accused cannot constitute a syndicate; the second paragraph applies. With no aggravating circumstance alleged, only reclusion temporal could be imposed, so bail was a matter of right. Petition denied.',
			lesson: 'Never construe a word lifted out of its sentence. It also illustrates the no-nugatory-construction idea: a singular reading of "any person" would leave the second paragraph little room to operate.',
			examUse: '"Explain, with a case, the rule that a statute must be construed as a whole." Or a hypothetical: a law defines a "cooperative" as one with 15 or more members, and a 10-member group claims the benefit.'
		},
		{
			caseId: 'aquino',
			strength: 'Direct — the Court applied it',
			doctrine: 'Statute construed as a whole; every part interpreted with reference to its context (<i>Aisporna</i>); arrangement of sections as an intrinsic aid.',
			facts: 'The tax-delinquent lots of the Aquinos and of Torrado were sold at public auction. Respondents argued that the Sec. 65 notice of delinquency (P.D. 464) belonged only to distraint of personal property (Secs. 68–72), so for a sale only Sec. 73 had to be followed.',
			issue: 'Is the Sec. 65 notice of delinquency a prerequisite to every collection remedy, including the sale of real property?',
			applied: 'The Court traced the chapter: Sec. 65 (notice) comes before Sec. 67 (remedies cumulative), which dispenses with formal demand before "any of such remedies" because "notice of delinquency as required in Section sixty-five" suffices. Read together, Sec. 65 serves all remedies; respondents "mistakenly lumped" it with distraint.',
			ruling: 'Yes, the notice of delinquency is required for every remedy. But because a tax sale is <i>in personam</i>, notice mailed directly to the owner suffices (posting and publication are not indispensable), and Sec. 73 requires only that the notice of sale be <i>sent</i>, not received. Both sales were upheld.',
			lesson: 'Placement and cross-references reveal a section\'s reach. But reading the whole statute does not license adding a requirement (actual receipt) the text omits.',
			examUse: 'Compare with <i>Catiis</i>: both apply the whole-statute rule, but <i>Catiis</i> reads one sentence and <i>Aquino</i> reads a whole chapter.'
		},
		{
			caseId: 'manila-lodge',
			strength: 'Direct — the Court applied it',
			doctrine: 'Intent from the four corners of the statute read as a whole; effect must be given to every word (no surplusage).',
			facts: 'Act No. 1360, as amended by Act No. 1657, declared the reclaimed Luneta extension "shall be the property of the City of Manila" and "hereby authorized" the City to lease or sell only a hotel-site tract at the <i>north</i> end. The City sold a <i>southern</i> portion to the Elks in 1911; the Elks sold it to Tarlac Development Corp. in 1963.',
			issue: 'Was the reclaimed land patrimonial property the City could freely sell, or property of public dominion?',
			applied: 'The Court read Secs. 1, 3, 5, 6 and 7 together. If the land were patrimonial, the City could already sell all of it, making "hereby authorized ... to sell" superfluous, contrary to the rule that "effect must be given to every word, clause, and sentence."',
			ruling: 'Public dominion. The sale of the southern portion was void, and TDC\'s good faith could not create title the vendor never had. Petitions denied.',
			lesson: 'Ask why the legislature needed to say something. If a word would be useless under one reading, that reading is probably wrong.',
			examUse: 'Rule against surplusage (Ch. VI) and strict construction of public grants (Ch. VII, §7.16) in one case.'
		},
		{
			caseId: 'corona',
			strength: 'Direct — the Court applied it',
			doctrine: 'Special law prevails over general law; statutes <i>in pari materia</i> harmonized; presumption that the legislature knows prior laws.',
			facts: 'DOTC\'s Administrative Action Board heard graft cases against PPA port managers Bungubung and Dinopol, one filed by the DOTC Secretary himself. Sec. 37(b), P.D. 807 (Civil Service Law, Oct. 6, 1975) gives "heads of departments" disciplinary jurisdiction; Sec. 8, P.D. 857 (PPA Charter, Dec. 23, 1975) lets the PPA General Manager "appoint and remove personnel below the rank of Assistant General Manager."',
			issue: 'Which law governs who may initiate and hear disciplinary cases against PPA personnel below Assistant General Manager?',
			applied: 'The PPA Charter is special (only PPA personnel) and later; a later special law inconsistent with a prior general law impliedly repeals it to that extent or is grafted onto it as an exception. Being <i>in pari materia</i>, the laws were harmonized: original jurisdiction in the PPA GM, appellate jurisdiction in the DOTC Secretary or the CSC. The legislature being presumed to know prior laws, the Charter "delimited" rather than abolished the Secretary\'s power.',
			ruling: 'The AAB had no jurisdiction; its decisions against Dinopol were void; all cases were remanded to the PPA GM.',
			lesson: 'A special law can prevail without wiping out the general law. The general law keeps operating outside the special field (here, at the appellate stage).',
			examUse: 'Pair with <i>Magtajas</i> on timing: in <i>Corona</i> the special law was later; in <i>Magtajas</i> it was earlier. The special law won both times.'
		},
		{
			caseId: 'magtajas',
			strength: 'Direct — the Court applied it',
			doctrine: 'Harmonization (<i>interpretare et concordare</i>); a general law does not repeal a special law absent clear intent (<i>Lichauco</i>).',
			facts: 'Cagayan de Oro enacted ordinances banning casinos, invoking LGC Sec. 458 (power to suppress "gambling and other prohibited games of chance"). PAGCOR operated under P.D. 1869, a special law on gambling.',
			issue: 'Did the LGC (general and later) repeal or modify P.D. 1869 so LGUs could prohibit PAGCOR casinos?',
			applied: '"Instead of pitting one statute against another in an inevitably destructive confrontation, courts must exert every effort to reconcile them." The Court read into the Code the exception reserved by statutes like P.D. 1869: LGUs may suppress all gambling except gambling authorized by statute. The general–special relation itself defeated the inference of repeal.',
			ruling: 'No repeal; the ordinances were ultra vires and void.',
			lesson: 'An earlier special law survives a later general law. Harmonize before declaring a repeal.',
			examUse: 'Ask: "Does the later law always prevail?" <i>Magtajas</i> is your answer.'
		}
	],

	traps: [
		{ wrong: 'Treating "statute construed as a whole" and "statutes in pari materia" as the same rule.', right: 'One statute vs. several statutes. The fallback tools differ.', example: '<i>Catiis</i> is a whole-statute case; <i>Corona</i> is an <i>in pari materia</i> case.' },
		{ wrong: '"The later law always prevails."', right: 'Harmonize first. Special prevails over general whichever is later; the later law prevails only over an irreconcilable law on the same footing.', example: '<i>Magtajas</i>: the later general LGC did not repeal the earlier special P.D. 1869.' },
		{ wrong: '"The special law always prevails."', right: 'Not if (1) clear intent to repeal, (2) the special law states only a general rule, or (3) roles are reversed (§6.22).', example: 'A charter saying only "may be disciplined in accordance with law" yields to the Civil Service Law\'s detailed procedure.' },
		{ wrong: 'Starting with "last in position prevails."', right: 'It is the last of three steps: reconcile, then best fit with the general plan, then last in position.', example: 'A later section that contradicts the statute\'s structure loses at step 2.' },
		{ wrong: 'Using the constitutional-harmony rule to rewrite a clear statute.', right: 'The text must be fairly susceptible of the saving reading; otherwise the statute is void.', example: 'A law that clearly bans all criticism of officials cannot be "read" to ban only libel.' },
		{ wrong: 'Applying the reenactment rule to any amendment.', right: 'It needs reenactment in substantially the same words; changed words suggest a changed meaning.', example: 'Deleting an exception in an amendment withdraws it (§10.06); no prior construction is carried over.' },
		{ wrong: 'Quoting <i>surplusagium non nocet</i> to mean "every word must be given meaning."', right: 'It means surplus words do not invalidate the statute. The anti-surplusage rule is the one about giving meaning.', example: '<i>Manila Lodge</i> used the anti-surplusage rule, not <i>surplusagium non nocet</i>.' },
		{ wrong: 'Requiring the later statute to mention the earlier one before treating them as in pari materia.', right: 'It is enough that they share the same person or thing, purpose, or specific subject.', example: '<i>C & C Commercial</i>: R.A. 912 was read with the Flag Law though it did not refer to it.' }
	],

	practice: [
		// C — definitions & short answers
		{
			cat: 'C',
			level: 1,
			topic: 'Statute as a whole',
			q: 'What is meant by the rule that a statute must be construed as a whole? Give its rationale.',
			short: 'The intent of a statute is drawn from the statute as a whole, not from an isolated word, phrase or section; every part is read in context because one part may qualify another (<i>Aisporna v. CA</i>; <i>Catiis v. CA</i>). Rationale: the legislature enacts a statute as one coherent scheme, so its parts are presumed to fit together.',
			keys: 'intent from the whole; not an isolated part; context; one portion qualified by another'
		},
		{
			cat: 'C',
			level: 1,
			topic: 'In pari materia',
			q: 'When are statutes said to be in pari materia, and how are they construed?',
			short: 'When they relate to the same person or thing, have the same purpose or object, or cover the same specific subject matter. They are construed together and harmonized into one consistent system (<i>interpretare et concordare leges legibus est optimus interpretandi modus</i>). The later law need not refer to the earlier.',
			keys: 'same person or thing / purpose or object / specific subject; construed together; harmonized'
		},
		{
			cat: 'C',
			level: 1,
			topic: 'General & special laws',
			q: 'Translate and explain <i>generalia specialibus non derogant</i>.',
			short: '"General things do not derogate from special things." Where a general law and a special law on the same subject conflict, the special law prevails as an exception to the general law, whichever was enacted first; the general law governs the cases outside the special law.',
			keys: 'special prevails; exception; regardless of date'
		},
		{
			cat: 'C',
			level: 2,
			topic: 'Related statutes',
			q: 'What is a reference statute? As of what time is the law it refers to taken?',
			short: 'A statute that refers to another law and makes it applicable to its own subject. The referred law becomes part of the referring law as if incorporated in full, and is taken as it stood at the time of adoption; later amendments are not included unless the referring law expressly says so.',
			keys: 'refers to another law; incorporated as if in full; as of adoption'
		},
		{
			cat: 'C',
			level: 2,
			topic: 'Related statutes',
			q: 'What is the effect of reenacting a statute that the Supreme Court has already construed?',
			short: 'The legislature is presumed to have adopted the settled judicial construction together with the language, so that construction becomes part of the reenacted law with the force of legislative command (<i>Montelibano v. Ferrer</i>). This applies only if the statute can bear the construction and it had become a settled rule of conduct.',
			keys: 'presumed to adopt the construction; same or substantially same words; settled'
		},
		{
			cat: 'C',
			level: 2,
			topic: 'In pari materia',
			q: 'What does <i>distingue tempora et concordabis jura</i> mean, and when is it used?',
			short: '"Distinguish the times and you will harmonize the laws." Laws made at different times, under different conditions, are read in light of the conditions when each was enacted; seen that way, apparent conflicts often disappear. It is used when harmonizing statutes <i>in pari materia</i>.',
			keys: 'different times; conditions of enactment; harmonize'
		},
		{
			cat: 'C',
			level: 2,
			topic: 'General & special laws',
			q: 'Why is a special law presumed to prevail over a general law on the same subject?',
			short: 'Because in passing the special law the legislature had its attention on the particular facts and circumstances, and it is not presumed to have intended to undo that focused judgment by a general law that does not mention those facts (§6.21).',
			keys: 'attention on particular facts; not presumed to undo by general act'
		},
		// A — enumerations
		{
			cat: 'A',
			level: 1,
			topic: 'Conflicting provisions',
			q: 'Enumerate, in order, the steps a court follows when two provisions of the same statute appear to conflict. Discuss each briefly.',
			short: '(1) <b>Reconcile and harmonize</b> them so each is given effect (<i>ut res magis valeat quam pereat</i>). (2) If irreconcilable, prefer the provision that <b>best fits the general plan and purpose</b> of the statute. (3) If there is no ground to choose, the provision <b>last in position</b> prevails as the latest expression of the legislative will, unless a contrary intent clearly appears.',
			a: 'Step 1 is mandatory because the legislature is presumed to enact consistent provisions; a broad provision may be limited by conditions or exceptions in another. Step 2 looks to the statute\'s design and declared policy. Step 3 is a last resort and yields to clear contrary intent.',
			keys: 'reconcile; general plan and purpose; last in position; latest expression of legislative will'
		},
		{
			cat: 'A',
			level: 2,
			topic: 'General & special laws',
			q: 'The special law generally prevails over the general law. Enumerate the exceptions and discuss each.',
			short: 'The special law does not prevail (1) when the legislature <b>clearly intended</b> the later general law to cover the whole subject and repeal all inconsistent laws; (2) when the special law <b>only sets a general rule</b> while the general law sets a specific rule on the point; and (3) when the <b>roles are reversed</b>: the general law treats the subject in particular and the special law treats it in general (§6.22).',
			a: 'Exception 1 needs clear intent; a general repealing clause is not enough (<i>Magtajas</i>, LGC Sec. 534(f)). Exceptions 2 and 3 show that labels do not control: the rule exists because the special law speaks particularly. Where the "general" law is the one that speaks particularly on the disputed point, it prevails.',
			keys: 'clearly intended; general rule vs. specific rule; treats the subject in particular'
		},
		{
			cat: 'A',
			level: 2,
			topic: 'Related statutes',
			q: 'Enumerate and briefly discuss the kinds of statutes that are related to other statutes, stating the rule of construction for each.',
			short: '(1) <b>Reference statute</b>: adopts another law by reference; that law is read in as if set out in full, as it stood at adoption. (2) <b>Supplemental statute</b>: fills gaps in an existing law without changing its text; read together with it. (3) <b>Reenacted statute</b>: repeats an earlier law in substantially the same words; carries its settled construction. (4) <b>Adopted statute</b>: copied from a foreign law; carries the foreign courts\' construction made before adoption, while later foreign rulings are only persuasive.',
			keys: 'as of adoption; without changing its text; settled construction; before adoption'
		},
		{
			cat: 'A',
			level: 2,
			topic: 'In pari materia',
			q: 'Give the reasons why statutes on the same subject must be reconciled whenever possible.',
			short: '(1) The legislature is presumed to know the existing laws when it enacts a new one. (2) It cannot be presumed to want two hostile systems on one subject. (3) Otherwise lawmaking would be a "useless and idle ceremony" and the law uncertain. Hence courts must try to harmonize before declaring a law repealed or invalid, producing "a uniform system of jurisprudence" (<i>Corona</i>).',
			keys: 'presumed to know existing laws; no hostile systems; idle ceremony; uniform system'
		},
		// D — true or false
		{
			cat: 'D',
			level: 2,
			topic: 'In pari materia',
			q: 'Two statutes are in pari materia only when the later statute expressly refers to the earlier one.',
			tf: false,
			a: 'It is enough that they relate to the same person or thing, have the same purpose or object, or cover the same specific subject. The later law need not mention the earlier, since the legislature is presumed to know existing laws (§§6.15–6.17; <i>C & C Commercial v. NAWASA</i>).',
			keys: 'Agpalo §§6.15–6.17',
			tag: 'requisites'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'General & special laws',
			q: 'A special law prevails over a general law on the same subject only if the special law was enacted later.',
			tf: false,
			a: 'The special law prevails whichever was passed first. In <i>Magtajas</i> the special law (P.D. 1869) was earlier and survived the later general LGC; in <i>Corona</i> the special law (PPA Charter) was later.',
			keys: 'Generalia specialibus non derogant; Agpalo §6.20; Magtajas; Corona',
			tag: 'jurisprudence'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'Conflicting provisions',
			q: 'When two provisions of the same statute seem to conflict, the court immediately applies the rule that the provision last in position prevails.',
			tf: false,
			a: 'The court must first try to reconcile them, then prefer the provision that best fits the general plan and purpose. Last in position is a last resort and yields to clear contrary intent.',
			keys: 'Agpalo §6.05',
			tag: 'exceptions'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'Constitutional harmony',
			q: 'Where a statute is fairly susceptible of two constructions, one of which would render it unconstitutional, the court must adopt the construction that upholds its validity.',
			tf: true,
			a: 'A statute is construed in harmony with the Constitution, and the legislature is presumed to have intended a valid law (§6.14; <i>Garcia v. COMELEC</i>). Limit: the text must be fairly open to the saving reading; a court cannot rewrite a clear statute.',
			keys: 'Agpalo §6.14; Garcia v. COMELEC',
			tag: 'memorization'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'Related statutes',
			q: 'The rule that a reenacted statute carries its prior judicial construction applies whenever a statute is amended.',
			tf: false,
			a: 'The rule requires reenactment in the same or substantially the same words. An amendment that changes the operative words suggests a change in meaning, so no prior construction is presumed carried over.',
			keys: 'Agpalo §§6.25–6.27; §10.06',
			tag: 'requisites'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'Related statutes',
			q: 'A statute that adopts another law by reference generally takes that law as it existed at the time of adoption, not as later amended.',
			tf: true,
			a: 'The referred law is read in as it stood when adopted; later changes are not included unless the adopting law expressly provides (§6.23).',
			keys: 'Agpalo §6.23',
			tag: 'effects'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'Related statutes',
			q: 'Decisions of foreign courts construing a foreign statute, rendered after the Philippines adopted it, are binding on Philippine courts.',
			tf: false,
			a: 'Only the construction made before adoption is presumed adopted. Foreign rulings after adoption are merely persuasive (§6.28).',
			keys: 'Agpalo §6.28',
			tag: 'effects'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'Conflicting provisions',
			q: 'Within one statute, a general provision controls a special provision on the same matter because the general provision states the broader policy.',
			tf: false,
			a: 'The special provision is read as an exception to the general provision, which then governs the remaining cases. This gives effect to both (§6.06).',
			keys: 'Agpalo §6.06',
			tag: 'exceptions'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'Surplusage',
			q: '"Surplusagium non nocet" means that every word of a statute must be given a distinct meaning.',
			tf: false,
			a: 'It means "surplusage does not harm": truly redundant words are disregarded and do not invalidate the statute. The rule that every word should be given effect is the separate rule against surplusage (applied in <i>Manila Lodge</i>).',
			keys: 'Agpalo §§6.10–6.11',
			tag: 'memorization'
		},
		{
			cat: 'D',
			level: 2,
			topic: 'General & special laws',
			q: 'In Corona v. CA, the Court held that the PPA Charter entirely stripped the DOTC Secretary of control over disciplinary matters involving PPA personnel.',
			tf: false,
			a: 'The Court called the CA\'s statement "less than accurate." The PPA Charter merely delimited the Secretary\'s general power: the PPA General Manager has original jurisdiction, but the Secretary keeps appellate jurisdiction.',
			keys: 'Corona v. CA, G.R. No. 97356 (1992)',
			tag: 'jurisprudence'
		},
		// B — compare
		{
			cat: 'B',
			level: 3,
			topic: 'Whole vs. pari materia',
			q: 'Distinguish construing a statute as a whole from construing statutes in pari materia. Illustrate each with one of your assigned cases.',
			short: 'Construing as a whole reads every part of <b>one</b> statute in light of the whole (<i>Catiis</i>: "any person or persons" read with the syndicate clause of Sec. 1, P.D. 1689). <i>In pari materia</i> reads <b>two or more</b> statutes on the same subject together as one system (<i>Corona</i>: the PPA Charter read with the Civil Service Law).',
			a: 'Decisive difference: the number of enactments. It matters because the fallbacks differ: within one statute, an irreconcilable clash goes to the general plan and then last-in-position; between statutes, to <i>generalia specialibus</i> and the implied-repeal rules (Ch. X).',
			keys: 'one statute vs. several; internal vs. external context; Catiis; Corona'
		},
		{
			cat: 'B',
			level: 3,
			topic: 'General & special laws',
			q: 'Distinguish <i>generalia specialibus non derogant</i> from <i>leges posteriores priores contrarias abrogant</i>. Which prevails when a later general law conflicts with an earlier special law?',
			short: '<i>Generalia specialibus</i> measures <b>specificity</b>: the special law prevails regardless of date. <i>Leges posteriores</i> measures <b>time</b>: the later law repeals an earlier irreconcilable law. When a later general law meets an earlier special law, the special law prevails unless the legislature clearly intended the general law to repeal it (<i>Magtajas</i>; <i>Lichauco</i>).',
			a: 'Implied repeal is disfavored and requires irreconcilable conflict. The general–special relation itself defeats the inference of repeal. <i>Leges posteriores</i> governs only when neither law is special relative to the other and harmonization fails.',
			keys: 'specificity vs. time; regardless of date; clear intent; Magtajas'
		},
		{
			cat: 'B',
			level: 3,
			topic: 'Related statutes',
			q: 'Distinguish a reenacted statute from an adopted statute.',
			short: 'A reenacted statute repeats an earlier <b>Philippine</b> law in substantially the same words and carries its settled Philippine construction. An adopted statute is copied from a <b>foreign</b> law and carries the foreign courts\' construction made <b>before</b> adoption; foreign rulings after adoption are only persuasive.',
			keys: 'domestic vs. foreign source; settled construction; before adoption'
		},
		// F — case-based
		{
			cat: 'F',
			level: 2,
			topic: 'Catiis',
			q: 'In <i>Catiis v. CA</i>, how did the Court answer the argument that "any person" in Sec. 1, P.D. 1689 means that even one person may commit syndicated estafa?',
			short: 'It rejected the argument because the law must be read as a whole: "any person or persons" is the subject of a sentence whose penalty is conditioned on commission "by a syndicate consisting of five or more persons," and the next paragraph refers to a syndicate "as above defined." One part of a section may be qualified by another, and the statutory definition controls. Four accused cannot constitute a syndicate.',
			keys: 'read as a whole; dangerous to construe a part; syndicate = five or more; as above defined'
		},
		{
			cat: 'F',
			level: 3,
			topic: 'Corona & Magtajas',
			q: '<i>Corona</i> and <i>Magtajas</i> both reconciled a general and a special law. How did the timing of the laws differ, and why did the special law prevail in both?',
			short: 'In <i>Corona</i> the special law (PPA Charter, Dec. 23, 1975) was <b>later</b> than the general law (Civil Service Law, Oct. 6, 1975); in <i>Magtajas</i> the special law (P.D. 1869) was <b>earlier</b> than the general law (LGC, 1991). The special law prevailed in both because <i>generalia specialibus non derogant</i> applies whichever law came first.',
			a: 'In <i>Corona</i>, the later special law was treated as a partial implied repeal of, or exception to, the prior general law, and the two were harmonized into original and appellate stages. In <i>Magtajas</i>, the later general law was presumed not to repeal the earlier special law absent clear intent (<i>Lichauco</i>), and the exception for statute-authorized gambling was read into the Code. In both, the Court refused to let one law wipe out the other.',
			keys: 'later special (Corona) vs. earlier special (Magtajas); regardless of date; harmonized'
		},
		{
			cat: 'F',
			level: 4,
			topic: 'Aquino',
			q: 'In <i>Aquino v. Quezon City</i>, the Court read Sec. 65 of P.D. 464 purposively with the whole chapter, yet refused to require actual receipt of the notice of sale under Sec. 73. Are these two moves consistent? Explain.',
			short: 'Yes. Reading a statute as a whole is used to find the reach of what the law <i>says</i>; it is not a license to add what the law does <i>not</i> say. Sec. 67\'s reference to the notice "as required in Section sixty-five" showed that the notice applies to all remedies. Sec. 73, read plainly, gives the treasurer the option to send the notice to the tax-record address or the known residence, and nothing in it requires actual receipt.',
			a: 'Both moves follow the text. The first finds meaning in the structure and cross-references of the chapter; the second refuses to read into the statute a requirement absent from its words. The spirit of the chapter (protect the taxpayer before enforcement) was served by direct notice to the registered owner at the address he supplied.',
			keys: 'whole-statute reading clarifies; does not add requirements; option to send; no actual receipt'
		},
		// E — application (ALAC)
		{
			cat: 'E',
			level: 4,
			topic: 'Special provision',
			title: 'Ch. VI — The barangay health worker honorarium',
			facts: 'R.A. No. 12345 (hypothetical), the "Barangay Health Workers Benefits Act," provides in Section 3: "All accredited barangay health workers shall receive a monthly honorarium of ₱3,000." Section 9 of the same Act provides: "Barangay health workers who concurrently hold an elective barangay position shall not receive the honorarium under this Act, without prejudice to the compensation attached to their elective office." Lorna, an accredited barangay health worker, was elected barangay kagawad. She claims the honorarium, arguing that Section 3 says "all" health workers and is the main grant of the law.',
			q: 'Is Lorna entitled to the honorarium? Answer using ALAC.',
			alac: {
				answer: 'No. Section 9 operates as an exception to Section 3, and Lorna falls within it.',
				legalBasis: 'A statute is construed as a whole, and apparently conflicting provisions are harmonized so that each is given effect (Agpalo §§6.01–6.05; <i>Aisporna v. CA</i>). Where a general and a special provision of the same statute cover the same matter, the special provision is read as an exception to the general provision, which then governs only the cases the special provision does not reach (§6.06). No provision may be read so as to destroy another (<i>ut res magis valeat quam pereat</i>).',
				application: 'Section 3 states the general rule for "all" accredited health workers; Section 9 deals specifically with health workers who also hold elective barangay posts. Reading "all" literally would leave Section 9 with nothing to do, which the whole-statute rule forbids. Harmonized, Section 3 covers health workers generally and Section 9 carves out those holding elective office. Lorna, a kagawad, falls squarely within Section 9.',
				conclusion: 'Lorna is not entitled to the honorarium under the Act, though she keeps the compensation attached to her elective office.'
			},
			weaker: 'Lorna\'s reading lifts one word ("all") out of the statute, the approach rejected in <i>Catiis</i>, and would make Section 9 nugatory.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'General & special laws',
			title: 'Ch. VI — Relief goods after the typhoon',
			facts: 'Act A (hypothetical, 2010), the "Calamity Relief Procurement Act," provides that during a declared state of calamity, government agencies "may procure relief goods by direct negotiation, without public bidding." Act B (hypothetical, 2024), the "Government Procurement Transparency Act," provides that "all procurement of goods by any government agency shall be through competitive public bidding published in two newspapers of general circulation," and ends with: "All laws inconsistent with this Act are hereby repealed or modified accordingly." Act B does not mention Act A. In 2026, after a typhoon and a declared state of calamity, the DSWD buys rice by direct negotiation. A losing supplier sues, arguing that Act B, being later, repealed Act A.',
			q: 'Was the procurement valid? Answer using ALAC.',
			alac: {
				answer: 'Yes. Act A, a special law, survives as an exception to the later general law, Act B.',
				legalBasis: 'Under <i>generalia specialibus non derogant</i>, where a general and a special law on the same subject conflict, the special law prevails as an exception to the general law, whichever was enacted first (Agpalo §§6.20–6.21). A later general law does not repeal an earlier special law unless the legislature clearly intended it to cover the whole subject and repeal all inconsistent laws (§6.22; <i>Lichauco & Co. v. Apostol</i>, applied in <i>Magtajas v. Pryce</i>). A general repealing clause is not an express repeal (<i>Mecano v. COA</i>; <i>Magtajas</i>).',
				application: 'Both acts deal with government procurement of goods, so they are <i>in pari materia</i> and must first be harmonized. Act B governs procurement in general; Act A governs a particular situation, relief goods during a declared calamity. Harmonized, Act B is the rule and Act A the exception. The supplier relies only on Act B being later and on its general repealing clause, but that clause does not identify Act A and shows no clear intent to abolish the calamity exception. As in <i>Magtajas</i>, the earlier special law is not repealed by the later general law.',
				conclusion: 'The direct-negotiation purchase made during the declared calamity is valid.'
			},
			weaker: '"Later law prevails" applies only to irreconcilable laws on the same footing. Here the laws can be reconciled, and the special–general relation itself defeats the inference of repeal.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Constitutional harmony',
			title: 'Ch. VI — The rally permit',
			facts: 'R.A. No. 12400 (hypothetical) provides: "The city or municipal mayor may deny a permit for a public assembly in a public place when the assembly may disturb public order." A mayor denies a permit for a peaceful rally of 200 tricycle drivers, reasoning that any rally "may" cause traffic and therefore "may disturb public order." Assume that under the Constitution, as interpreted by the Supreme Court, a permit for a public assembly may be denied only on a showing of a clear and present danger of a serious evil to public order. The statute can reasonably be read either way: as allowing denial whenever any disturbance is possible, or only when there is a clear and present danger of serious public disorder.',
			q: 'How should the court construe the statute, and was the denial valid? Answer using ALAC.',
			alac: {
				answer: 'The court should adopt the narrower reading, which keeps the statute constitutional. Under that reading, the denial was invalid.',
				legalBasis: 'A statute must be construed in harmony with, not in violation of, the Constitution. Where a statute is fairly susceptible of two constructions, one of which would make it unconstitutional, the court adopts the construction that sustains its validity (Agpalo §6.14; <i>Garcia v. COMELEC</i>). The legislature is presumed to have intended a constitutional law. The rule applies only where the text is fairly open to the saving reading.',
				application: '"May disturb public order" is open to both readings. The broad reading lets a mayor bar almost any assembly and conflicts with the clear-and-present-danger standard given in the facts. The narrow reading fits the words and keeps the statute valid, so the court must adopt it. A peaceful rally whose only expected effect is traffic does not present a clear and present danger of serious disorder.',
				conclusion: 'The statute stands as construed, but the denial is invalid; the permit should be granted, subject to reasonable regulation.'
			},
			weaker: 'Striking the statute down ignores the duty to adopt a saving construction; reading it broadly ignores the presumption that Congress intended a constitutional law.'
		},
		// G — challenging
		{
			cat: 'G',
			level: 5,
			topic: 'General & special laws',
			title: 'Ch. VI — The river basin authority\'s summary dismissal',
			facts: 'R.A. No. 9001 (hypothetical, 2018), the charter of the "Mindanao River Basin Authority" (MRBA), states in one sentence: "Officers and employees of the Authority may be disciplined for cause in accordance with law." The Civil Service Law, a general law enacted earlier, contains detailed rules on who investigates, the grounds, the procedure, the penalties and the appeal route. Citing its charter as a "special law," the MRBA Board adopts its own summary procedure allowing dismissal without formal investigation and dismisses Engr. Dela Cruz under it.',
			q: 'Does the MRBA charter, as a special law, displace the Civil Service Law\'s detailed disciplinary procedure? Discuss using ALAC, and contrast <i>Corona v. CA</i>.',
			alac: {
				answer: 'No. On the disputed point the charter states only a general rule, so the Civil Service Law\'s specific procedure governs.',
				legalBasis: '<i>Generalia specialibus non derogant</i> applies only when the general law treats the subject in general and the special law treats it in particular. The special law does not prevail where it merely establishes a general rule while the general law creates a specific rule (Agpalo §6.22). Statutes <i>in pari materia</i> are read together, and the legislature is presumed to legislate with existing laws in mind (§6.17; <i>Corona</i>).',
				application: 'The charter\'s one sentence ("may be disciplined for cause in accordance with law") lays down only a general rule and itself points back to existing law. On the specific point in dispute, the procedure for discipline, it is the Civil Service Law that speaks in particular. The two laws are complementary, not conflicting: the charter makes MRBA personnel subject to discipline; the Civil Service Law supplies how. Contrast <i>Corona</i>: there the PPA Charter <i>specifically</i> lodged the power to "appoint and remove" in the PPA General Manager, a particular rule on the point, so it prevailed at the original stage.',
				conclusion: 'The summary dismissal under the Board\'s self-made procedure is invalid; the Civil Service Law\'s procedure must be followed.'
			},
			weaker: 'Calling a statute "special" does not make every sentence of it special on every point. What matters is which law treats the disputed point in particular.'
		},
		{
			cat: 'G',
			level: 5,
			topic: 'Conflicting provisions',
			title: 'Ch. VI — One year or three?',
			facts: 'The (hypothetical) "Small Food Stall Licensing Act" declares in Section 1 a policy of "annual review of food stalls for public health." Section 4 says a stall license "shall be valid for one (1) year." Section 10 requires the city health office to inspect each licensed stall "before each yearly renewal," and Section 11 fixes an "annual license fee." Section 15, the last operative section, says a license "shall be valid for three (3) years." Nothing else explains the discrepancy, and the legislative record is silent. Mang Ben\'s license was issued in January 2025. In February 2026 he is cited for operating without a renewed license. He invokes Section 15.',
			q: 'Which provision governs? Explain the steps the court should follow, using ALAC.',
			alac: {
				answer: 'Section 4 governs: the license is valid for one year, so Mang Ben\'s license had expired in January 2026.',
				legalBasis: 'Apparently conflicting provisions of the same statute are first reconciled. If irreconcilable, the court prefers the provision that best fits the general plan and purpose of the statute; only if there is no ground to choose does the provision last in position prevail (Agpalo §6.05; §10.12). A statute is read as a whole, and a construction that leaves other provisions idle is avoided.',
				application: 'Step 1: the provisions cannot be reconciled. Both fix the validity of the same license (one year vs. three), and nothing suggests they cover different classes of license. Step 2: the statute\'s plan points clearly to one year. The declared policy of annual review (Sec. 1), yearly inspection before renewal (Sec. 10) and the annual fee (Sec. 11) all presuppose a one-year license, and Section 15 would leave Sections 10 and 11 largely without work. Step 3 (last in position) is never reached, because there is a clear ground for choice.',
				conclusion: 'Section 4 prevails. Mang Ben was operating without a valid license in February 2026.'
			},
			weaker: 'Mang Ben jumps straight to the last-resort rule. "Last in position" applies only when the statute gives no basis to choose.'
		}
	],

	memoryAids: [
		['Conflicting provisions (same statute)', '<b>R-P-L</b>: Reconcile → Purpose (general plan) → Last in position.'],
		['Tests for in pari materia', '<b>Same WHO, same WHY, same WHAT</b> (person/thing, purpose/object, specific subject). Any one suffices.'],
		['§6.22 exceptions', '<b>C-V-R</b>: Clear intent to repeal · Vague special law (only a general rule) · Roles reversed.'],
		['Related statutes', '<b>R-S-R-A</b>: Refers · Supplies · Repeats · Abroad.'],
		['Generalia vs. leges posteriores', '"Specific beats general at any age; later beats earlier only between equals."'],
		['Whole statute vs. in pari materia', '"One law → whole. Two laws → pari materia."'],
		['The five cases in Ch. VI', '<b>CAM</b> read one law (Catiis, Aquino, Manila Lodge); <b>CM</b> read two laws (Corona, Magtajas).']
	],
	flashcards: [
		['Where is legislative intent found under the whole-statute rule?', 'In the statute as a whole, not in an isolated word, phrase or section; every part is read in context.'],
		['Which of the five cases rejected reading "any person" in isolation?', '<i>Catiis v. CA</i> (2006), on Sec. 1, P.D. 1689 (syndicated estafa).'],
		['First step when two provisions of one statute clash?', 'Reconcile and harmonize them so each is given effect.'],
		['Last-resort rule for irreconcilable provisions of one statute?', 'The provision last in position prevails, as the latest expression of legislative will, unless a contrary intent clearly appears.'],
		['Special vs. general provision in the same statute?', 'The special provision is an exception to the general provision (§6.06).'],
		['Three tests for statutes in pari materia?', 'Same person or thing; same purpose or object; same specific subject matter (alternative).'],
		['Must a later law refer to an earlier law to be in pari materia with it?', 'No.'],
		['Meaning of <i>interpretare et concordare leges legibus est optimus interpretandi modus</i>?', 'To interpret and harmonize laws with laws is the best method of interpretation.'],
		['Does a special law prevail over a later general law?', 'Yes, generally (<i>Magtajas</i>), unless the legislature clearly intended the general law to repeal it.'],
		['Three exceptions to <i>generalia specialibus</i>?', '(1) Clear intent of the later general law to cover the whole subject and repeal; (2) special law sets only a general rule while general law sets a specific rule; (3) roles reversed.'],
		['Saving construction: when allowed?', 'When the statute is fairly susceptible of two readings, one unconstitutional; adopt the valid one. Not to rewrite a clear text.'],
		['Reference statute takes the borrowed law as of when?', 'As of the time of adoption, unless the adopting law expressly includes later changes.'],
		['Supplemental statute?', 'Fills gaps in an existing law without changing its text; read together with it (<i>Manila Jockey Club</i>).'],
		['Reenacted statute carries what?', 'The settled judicial or practical construction of the earlier law (<i>Montelibano v. Ferrer</i>).'],
		['Adopted statute: which foreign rulings count?', 'Those made before adoption; later ones are only persuasive.'],
		['<i>Surplusagium non nocet</i> means?', 'Surplusage does not vitiate a statute; truly redundant words are disregarded.'],
		['Which case used "hereby authorized ... to sell" to show the land was not patrimonial?', '<i>Manila Lodge No. 761 v. CA</i> (1976).']
	],
	recall: [
		['State, in order, the three steps for conflicting provisions of one statute.', 'Reconcile; prefer the provision that best fits the general plan and purpose; if no basis to choose, last in position prevails (unless a contrary intent clearly appears).'],
		['Give the three tests for statutes in pari materia. Are they cumulative?', 'Same person or thing; same purpose or object; same specific subject. Alternative: any one suffices.'],
		['Why are laws on the same subject reconciled? (3)', 'Legislature presumed to know existing laws; no two hostile systems; otherwise lawmaking would be an idle ceremony and the law uncertain.'],
		['Enumerate the exceptions to generalia specialibus.', 'Clear intent of the later general law to cover the whole subject and repeal; special law merely a general rule while general law is specific; general law treats the subject in particular and special law in general.'],
		['Name the four kinds of related statutes and the rule for each.', 'Reference (as of adoption); supplemental (read together, text unchanged); reenacted (carries settled construction); adopted (foreign construction before adoption).'],
		['In Corona, which law was special and which was later?', 'The PPA Charter (P.D. 857) was both special and later (Dec. 23, 1975) than the Civil Service Law (P.D. 807, Oct. 6, 1975).'],
		['In Magtajas, which law was special and which was later?', 'P.D. 1869 was special and earlier; the LGC (1991) was general and later. The special law survived.'],
		['What limit applies to construing a statute in harmony with the Constitution?', 'The text must be fairly susceptible of the saving reading; courts cannot rewrite a clear statute.'],
		['Which case shows that whole-statute reading cannot add a requirement the text omits?', '<i>Aquino v. Quezon City</i>: no "actual receipt" requirement read into Sec. 73, P.D. 464.'],
		['Translate <i>distingue tempora et concordabis jura</i>.', 'Distinguish the times and you will harmonize the laws.']
	],
	summary: {
		rules: [
			'Intent comes from the statute as a whole; one part may qualify another.',
			'Harmonize first; then best fit with the general plan; then last in position.',
			'Special provisions and special laws are exceptions to general ones, whichever came first, except as provided in §6.22.',
			'Adopt the reading that keeps a statute constitutional, if the text fairly allows it.',
			'Statutes <i>in pari materia</i> are read as one system; the legislature is presumed to know existing laws.',
			'Reference = as of adoption; supplemental = read together; reenacted = carries settled construction; adopted = foreign construction before adoption.'
		],
		distinctions: [
			'Whole statute (one law) vs. <i>in pari materia</i> (several laws).',
			'Special provision (same statute) vs. special law (different statutes, with §6.22 exceptions).',
			'<i>Generalia specialibus</i> (specificity) vs. <i>leges posteriores</i> (time).',
			'Rule against surplusage (meaning) vs. <i>surplusagium non nocet</i> (validity).',
			'Reenacted (domestic) vs. adopted (foreign) statutes.'
		],
		cases: [
			'<i>Catiis</i>: "any person" qualified by the syndicate definition.',
			'<i>Aquino</i>: Sec. 65 notice serves all remedies; no actual-receipt requirement in Sec. 73.',
			'<i>Manila Lodge</i>: "hereby authorized ... to sell" would be surplusage if the land were patrimonial.',
			'<i>Corona</i>: later special law delimits, not abolishes, the general law; two-stage harmony.',
			'<i>Magtajas</i>: earlier special law survives later general law; harmonize.'
		],
		traps: ['"Later law always prevails."', '"Special law always prevails."', 'Jumping to "last in position."', 'Saving construction that rewrites a clear text.', 'Reenactment rule for mere amendments.']
	},
	checklist: [
		'I can state the whole-statute rule and explain how <i>Catiis</i> applied it.',
		'I can list the three steps for conflicting provisions in the correct order.',
		'I can give the three tests for <i>in pari materia</i> and say they are alternative.',
		'I can explain why the special law won in both <i>Corona</i> and <i>Magtajas</i> despite opposite timing.',
		'I can recite the three §6.22 exceptions and apply them to a fact pattern.',
		'I can explain the saving-construction rule and its limit.',
		'I can distinguish reference, supplemental, reenacted and adopted statutes without notes.',
		'I can solve an ALAC problem on special v. general laws in under 15 minutes.'
	],
	watchFor: `<strong>Watch for: which rule fits how many statutes.</strong>
<ul>
<li>One statute → construe as a whole; harmonize; then general plan; then last in position.</li>
<li>Two statutes → <i>in pari materia</i>; special beats general <b>whichever is later</b> (<i>Magtajas</i>; <i>Corona</i>), subject to §6.22.</li>
<li>A saving construction needs a text fairly open to it; it never rewrites a clear provision.</li>
</ul>`
};
