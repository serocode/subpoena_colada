import { ul, type Chapter } from './model';

export const ch10: Chapter = {
	id: 'ch10',
	n: 10,
	roman: 'X',
	title: 'Amendment, Revision, Codification and Repeal',
	short: 'Ch. X — Amendment, Revision & Repeal',
	sections: '§§10.01–10.41',

	plain: `Laws change in three ways. They are <b>amended</b> (some words changed), <b>revised or codified</b> (a whole body of law rewritten into one statute), or <b>repealed</b> (ended). Courts do not presume that the legislature changed or ended a law silently, so amendments and repeals by implication are disfavored. And when a law is repealed, what was validly done under it is generally not undone.`,
	overview: `<p><b>Part A (§§10.01–10.10)</b>: how amendments are made, how an amended statute is read, and their effect. <b>Part B (§§10.11–10.15)</b>: revision and codification, and the rule that omitted provisions are deemed repealed, but only when the new code is meant to replace the whole subject (<i>Mecano v. COA</i>). <b>Part C (§§10.16–10.29)</b>: express and implied repeal, the two kinds of implied repeal and their requisites, and the presumption against them. <b>Part D (§§10.30–10.41)</b>: the effects of repeal on jurisdiction, actions, vested rights, contracts, taxes and penal liability, and what happens when a repealing law is itself repealed or annulled.</p>
<p>The chapter is the other side of Chapter VI. Chapter VI says <b>harmonize</b>; Chapter X says what happens when harmony is impossible, and insists that conclusion be reached only on a clear showing. <i>Magtajas</i> and <i>Corona</i> are your case anchors.</p>`,
	questions: [
		'How is a statute amended, and how is an amended statute read?',
		'What happens to provisions left out of a revision or code?',
		'What distinguishes express from implied repeal? Is a general repealing clause an express repeal?',
		'What are the two kinds of implied repeal, and what must be shown?',
		'Can a later general law repeal an earlier special law?',
		'What are the effects of repeal on rights, contracts, pending cases, taxes and penal liability?',
		'What happens when a repealing law is itself repealed or declared void?'
	],
	keyPoints: [
		'Amendments and repeals by implication are neither presumed nor favored.',
		'An amended statute is read with the original; the amendment is treated as if it had always been there; omitted parts of the amended section are repealed; amendments are prospective.',
		'Omitted provisions of a revised code are deemed repealed only if the code was meant to cover the whole subject and replace the old law (<i>Mecano</i>).',
		'An express repeal names the law repealed; "all inconsistent laws are repealed" is not an express repeal (<i>Mecano</i>; <i>Magtajas</i>).',
		'Implied repeal: (1) irreconcilable conflict, or (2) the later law covers the whole subject as a substitute. Same subject, irreconcilable, cannot both be given effect, same object.',
		'Repeal is prospective: vested rights survive; taxes already assessed remain collectible; total repeal of a penal law ends pending prosecutions unless the offense is reenacted or there is a saving clause.'
	],
	connects: `Chapter X completes Chapter VI (harmonization, general and special laws) and applies Chapter IX (prospectivity, vested rights, favorable penal laws) to amendments and repeals. Art. 7 of the Civil Code supplies the codal base. <i>Magtajas</i> (general repealing clause; implied repeal disfavored) and <i>Corona</i> (partial implied repeal by a later special law) are the case links.`,
	objectives: [
		'Explain how amendments are made and read, and their temporal effect.',
		'Apply the rule on omitted provisions in a revision, including the <i>Mecano</i> limit.',
		'Distinguish express from implied repeal and explain why a general repealing clause is not an express repeal.',
		'State the two kinds of implied repeal and the requisites of implied repeal by irreconcilable inconsistency.',
		'Enumerate the effects of repeal, especially of penal and tax laws.',
		'State the rules on repeal or annulment of a repealing law.',
		'Explain how <i>Magtajas</i> and <i>Corona</i> treated repeal.'
	],

	concepts: [
		{
			term: 'Amendment',
			plain: 'A change in the wording of an existing law.',
			legal: 'An alteration of an existing statute, usually done expressly: the amendatory act names the sections amended and reproduces them, commonly "to read as follows." Amendment by implication is neither presumed nor favored (§§10.01–10.04).',
			why: 'Express amendment gives clear notice of what changed.',
			example: 'An act amending a law\'s effectivity period from two years to four.',
			confuse: 'Repeal, which ends a law or provision rather than changing its terms.'
		},
		{
			term: 'Revision and codification',
			plain: 'Rewriting a whole body of law on a subject into one statute.',
			legal: 'The legislature restates existing laws on a subject into a single statute, simplifying, adding, omitting, rephrasing or rearranging provisions. Provisions omitted are deemed repealed, unless the code provides otherwise, but only when the revision was meant to cover the whole subject and substitute for the old law (§§10.11–10.15; <i>Mecano v. COA</i>).',
			why: 'A code is meant to be a complete and coherent system on its subject.',
			example: 'The Agricultural Land Reform Code revised the Agricultural Tenancy Act, impliedly repealing the parts it replaced.',
			confuse: 'A partial code. If the new code covers only part of the subject, omissions are not repeals.'
		},
		{
			term: 'Express repeal',
			plain: 'The new law names the law it cancels.',
			legal: 'A declaration in a statute, usually in its repealing clause, that a particular and specific law, identified by number or title, is repealed. All other repeals are implied (§10.17).',
			why: 'It removes doubt about legislative intent.',
			example: 'R.A. 7636 (1992) repealed R.A. 1700, the Anti-Subversion Act.',
			confuse: 'A general repealing clause ("all laws inconsistent herewith are repealed"), which does not identify the law and is not an express repeal.'
		},
		{
			term: 'General repealing clause',
			plain: 'The catch-all "inconsistent laws are repealed" sentence at the end of many statutes.',
			legal: 'A clause repealing "all laws or parts thereof inconsistent with this Act." It is not an express repeal; it merely expresses the intent to repeal what is irreconcilable, so any repeal under it must still be shown to be implied (<i>Mecano</i>; <i>Magtajas</i>).',
			why: 'Without naming a law, the clause does not show which law the legislature meant to end.',
			example: 'LGC Sec. 534(f) did not repeal P.D. 1869, which was not among the laws specifically listed in Sec. 534(a)–(e) (<i>Magtajas</i>).',
			confuse: 'An express repeal.'
		},
		{
			term: 'Implied repeal',
			plain: 'A repeal that is not stated but follows because two laws cannot both stand.',
			legal: 'Two categories: (1) where provisions of two acts on the same subject are irreconcilable, the later act, to the extent of the conflict, repeals the earlier; (2) where the later act covers the whole subject of the earlier and is clearly intended as a substitute (<i>Mecano</i>; §10.19). <i>Leges posteriores priores contrarias abrogant</i>.',
			why: 'The later law is the latest expression of the legislative will.',
			example: 'A later law fixing a different penalty for exactly the same act, with no way to apply both.',
			confuse: 'Different wording or overlapping subject matter, neither of which alone is repeal.'
		},
		{
			term: 'Saving clause',
			plain: 'A clause keeping pending cases or existing rights alive after a repeal.',
			legal: 'A provision in the repealing law preserving rights, liabilities or pending proceedings under the repealed law. With it, a total repeal of a penal law does not end pending prosecutions (§10.38).',
			why: 'To prevent the repeal from giving amnesty-like effect to pending cases.',
			example: '"Cases pending at the effectivity of this Act shall continue to be governed by the repealed law."',
			confuse: 'A reenactment, which keeps the offense alive by restating it.'
		},
		{
			term: 'Repeal and reenactment',
			plain: 'Ending a law and putting the same rule back at the same time.',
			legal: 'Where a statute is repealed and its provisions are simultaneously reenacted, rights and liabilities that accrued are not affected and pending prosecutions continue, because the reenactment neutralizes the repeal. If continuity is broken, the repeal deprives the court of authority to try and sentence under the old law (§10.37).',
			why: 'There was never a moment when the act ceased to be an offense.',
			example: 'A new code repeals the old penal law but restates the same offense with a lighter penalty: pending cases continue, with the lighter penalty applied.',
			confuse: 'A total repeal without reenactment, which ends pending prosecutions.'
		},
		{
			term: 'Repeal vs. expiration',
			plain: 'A law can end because it is repealed or because its time runs out.',
			legal: 'Expiration of a temporary law during pending proceedings does not divest the tribunal of jurisdiction or make an illegal act legal (§10.39).',
			why: 'A temporary law was always meant to govern acts during its life.',
			example: 'Expiration of a law declaring certain imports illegal did not stop a forfeiture case already begun.',
			confuse: 'Total repeal of a penal law, which does end pending prosecutions (absent reenactment or a saving clause).'
		},
		{
			term: 'Revival of a repealed law',
			plain: 'Does an old law come back if the law that repealed it is itself repealed?',
			legal: 'If the repealing law is declared unconstitutional, it never took effect, so the earlier law was never repealed. If a law that <b>expressly</b> repealed an earlier law is itself repealed, the earlier law is not revived unless expressly provided. If the repeal was <b>implied</b>, the earlier law is generally revived when the repealing law is repealed, unless otherwise provided (§§10.40–10.41).',
			why: 'An express repeal shows a deliberate decision to end the first law; an implied repeal existed only because of the conflict.',
			example: 'Act B expressly repealed Act A; Act C repeals Act B without mentioning A: Act A stays dead.',
			confuse: 'Reenactment, where the legislature deliberately restates the old rule.'
		}
	],

	principles: [
		{
			name: 'Amendments: how made, how read, and their effect',
			rule: 'Amendments are usually express ("to read as follows"); amendment by implication is not favored. The statute and its amendment are read together as a whole; the amended act is treated as if the original had been repealed and a new law in the amended form adopted, so the amendment becomes part of the original as if it had always been there. Unchanged parts keep the same meaning; parts of the amended section omitted in the amendment are deemed repealed; retained portions are a continuation of the old law. A change in language suggests a change in meaning.',
			basis: 'Agpalo §§10.01–10.06.',
			why: 'To fit the amendment into the original scheme without disturbing what was not changed.',
			when: 'Any question about the reach or meaning of an amended provision.',
			limits: 'Amendments operate prospectively and do not impair vested rights (§10.07). Statutes altering a court\'s jurisdiction do not apply to pending cases unless they so provide (§10.08). If the amendatory act is declared unconstitutional, the original remains in force (§10.10). An amendatory act complete in itself is treated as an independent act.',
			differs: 'A repeal ends the law or provision; an amendment changes it but keeps the law\'s identity.',
			example: 'A law to be effective for two years from approval is amended to four years: the four years run from the original approval, not from the amendment (§10.05).'
		},
		{
			name: 'Revision and codification: omitted provisions are deemed repealed — if the code replaces the whole subject',
			rule: 'In a revision or codification, provisions are harmonized as one statute from a consistent philosophy. Provisions of the old law omitted from the revision are deemed repealed, unless the code provides otherwise. Rearrangement or a change of phraseology does not change the law unless the intent to change is clear; restated provisions are a continuation.',
			basis: 'Agpalo §§10.11–10.15; <i>Mecano v. COA</i>, 216 SCRA 500 (1992).',
			why: 'A revision is meant to be a complete and perfect system on its subject.',
			when: 'A new code or revised law omits a provision of the old law.',
			limits: '<b>Only if the revision was clearly intended to cover the whole subject and substitute for the old law.</b> In <i>Mecano</i>, the 1987 Administrative Code covered only administration, organization and procedure, not everything in the 1917 Code, so its omission of Sec. 699 (reimbursement of medical expenses) was not a repeal.',
			differs: 'Implied repeal by substitution (Ch. X, Part C) uses the same "whole subject" test.',
			example: 'Sec. 18 of the old Rule 41 was not reproduced in the 1997 Rules and was held repealed, because the 1997 Rules revised the same subject.'
		},
		{
			name: 'Repeal: express or implied; a general repealing clause is not express; disuse never repeals',
			rule: 'Repeal may be total or partial, express or implied. An express repeal identifies the specific law repealed; all others are implied. A general repealing clause is not an express repeal. Laws are repealed only by subsequent ones; their violation is not excused by disuse, custom or contrary practice.',
			basis: 'Art. 7, Civil Code; Agpalo §§10.16–10.18; <i>Mecano v. COA</i>; <i>Magtajas v. Pryce</i>.',
			why: 'Only the legislature can end a law, and it must do so clearly enough to be known.',
			when: 'A party claims a law is no longer in force.',
			limits: 'The legislature\'s power to repeal is plenary, subject only to constitutional limits; there are no irrepealable laws. But a change in conditions or the mere fact that a later law deals with the same subject is not a repeal.',
			differs: 'Repeal must come from a statute; courts may declare a law void for unconstitutionality, but that is not a repeal (Art. 7, par. 2).',
			example: '<i>Magtajas</i>: Sec. 534(a)–(e) listed specific laws repealed; P.D. 1869 was not among them, and Sec. 534(f) (general clause) could support only an implied repeal, which was not shown.'
		},
		{
			name: 'Implied repeal: two categories, strict requisites, and a presumption against it',
			rule: 'Implied repeal occurs (1) where two acts on the same subject are irreconcilable, the later repealing the earlier to the extent of the conflict, or (2) where the later act covers the whole subject of the earlier and is clearly intended as a substitute. For the first: same subject matter; clear inconsistency such that they cannot be harmonized; both cannot be given effect; and the same object or purpose. The inconsistency must be clear and convincing.',
			basis: 'Agpalo §§10.19–10.22; <i>Mecano v. COA</i>; <i>Magtajas</i>; <i>Ty v. Trampe</i>, 250 SCRA 500 (1995); <i>Hagad v. Gozo-Dadole</i>, 251 SCRA 242 (1995).',
			why: 'The legislature is presumed to know existing laws and not to enact conflicting ones; doubts are resolved in favor of harmonizing.',
			when: 'A later law appears to clash with an earlier one and neither names the other.',
			limits: 'Different wording alone is not repugnance. If the laws have different objects, both stand even on the same subject. Courts must try to harmonize first (Ch. VI).',
			differs: 'Express repeal needs no showing of conflict; implied repeal needs a clear one.',
			example: '<i>Hagad</i>: the LGC and the Ombudsman Act both give disciplinary authority over elective local officials; neither repeals the other, and they operate concurrently.'
		},
		{
			name: 'Other instances of implied repeal',
			rule: 'Besides irreconcilable conflict and substitution, implied repeal also results where the later act nullifies the reason or purpose of the earlier act; where the later law is in negative terms (prohibiting a thing, or requiring it be done in a certain manner and not otherwise); where the express repeal of a provision from which an official derives authority implies repeal of the provision he enforces; and where a revision, codification or reenactment covers the whole subject.',
			basis: 'Agpalo §§10.19–10.22.',
			why: 'In each case the earlier law has lost its function or been displaced.',
			when: 'A later law, without contradicting the earlier one word for word, removes its reason or its machinery.',
			limits: 'Still subject to the presumption against implied repeal; the effect must be clear.',
			differs: 'These are particular forms of the two Mecano categories, not separate theories.',
			example: 'If the law creating an office is expressly repealed, provisions empowering that office to collect a fee are impliedly repealed.'
		},
		{
			name: 'General and special laws in repeal',
			rule: 'A later general law does not repeal an earlier special law on the same subject unless the legislature clearly intended it or an irreconcilable conflict compels it. A later special law inconsistent with a prior general law repeals it only to the extent of the inconsistency, or is grafted onto it as an exception.',
			basis: 'Agpalo §§6.20–6.22 and Ch. X; <i>Magtajas</i> (citing <i>Lichauco & Co. v. Apostol</i>); <i>Corona v. CA</i> (citing <i>NAPOCOR v. Presiding Judge</i>; <i>Lagman v. City of Manila</i>).',
			why: 'The special–general relation itself shows the two were meant to coexist.',
			when: 'One of two conflicting laws is special.',
			limits: 'Clear legislative intent can make the later general law repeal the special law (§6.22).',
			differs: 'A partial repeal (Corona) leaves the general law operating outside the special field.',
			example: '<i>Corona</i>: the PPA Charter partially repealed, or carved an exception out of, Sec. 37(b) of the Civil Service Law, but only at the original stage; the Secretary kept appellate jurisdiction.'
		},
		{
			name: 'Effects of repeal on rights, actions, contracts and taxes',
			rule: 'A repeal makes the statute inoperative from the date the repealing act takes effect. It is not a declaration that the old law was invalid from the start; acts done under it remain valid, and the repeal does not undo consequences while the law was in force. Vested rights survive. Contracts made on the basis of the law then in force are not changed. Taxes assessed before the repeal of a tax law remain collectible unless the repealing law provides otherwise. As a rule, repeal defeats pending actions founded on the repealed statute, except as to vested rights or where there is a saving clause. Jurisdiction acquired over a pending case is not lost by repeal or expiration of the law under which it was acquired.',
			basis: 'Agpalo §§10.30–10.36.',
			why: 'Repeal is prospective (Ch. IX), and the Constitution protects vested rights and contracts.',
			when: 'A dispute arises over acts, rights or cases connected with a law that has since been repealed.',
			limits: 'Rights not yet vested may be defeated by repeal.',
			differs: 'Repeal of a penal law has a special rule (next principle).',
			example: 'A tax law is repealed in 2026; a deficiency assessment issued in 2025 can still be collected.'
		},
		{
			name: 'Repeal of penal laws',
			rule: 'A total and absolute repeal of a penal law deprives the courts of authority to punish persons charged under it: the act is no longer a crime, and pending cases must be dismissed. Exceptions: (a) the repealing act reenacts the offense and penalizes the same act, so pending cases continue (and the penalty more favorable to the accused applies); or (b) the repealing act has a saving clause providing that pending actions continue.',
			basis: 'Agpalo §§10.37–10.38; R.A. 7636 (1992), repealing R.A. 1700.',
			why: 'Once the State no longer considers the act criminal, punishing it serves no purpose; this matches the favorable-retroactivity rule of Art. 22, RPC.',
			when: 'A penal law is repealed while prosecutions or appeals under it are pending.',
			limits: 'If the repeal and reenactment are not simultaneous and continuity is broken, the repeal deprives the court of authority to try, convict and sentence under the old law (§10.37). A temporary penal law\'s expiration, unlike a repeal, does not end pending cases (§10.39).',
			differs: 'Repeal of a tax law: assessed taxes remain collectible.',
			example: 'The total repeal of the Anti-Subversion Act (R.A. 1700) by R.A. 7636 entitled persons charged under it to dismissal.'
		},
		{
			name: 'When the repealing law is itself repealed or annulled',
			rule: 'If the repealing law is declared unconstitutional or void, it never took effect, and the earlier law was never repealed. If a law that expressly repealed an earlier law is itself repealed, the earlier law is not revived unless expressly provided. If the earlier law was only impliedly repealed, the repeal of the repealing law generally revives it, unless otherwise provided.',
			basis: 'Agpalo §§10.40–10.41; Art. 7, par. 2, Civil Code; <i>U.S. v. Soliman</i> (implied repeal), as commonly cited.',
			why: 'A void law has no effect; an express repeal reflects a deliberate decision that survives the later repeal.',
			when: 'A chain of laws: A repealed by B, B later repealed or struck down.',
			limits: 'The legislature can always provide expressly for revival or non-revival.',
			differs: 'Unconstitutionality is a judicial declaration of nullity; repeal is a legislative act.',
			example: 'An amendatory act declared unconstitutional leaves the original law standing as it was (§10.10).'
		}
	],

	enums: [
		{
			id: 'E10.1',
			name: 'Rules on how an amended statute is construed',
			source: 'Agpalo §10.05.',
			kind: 'book',
			memorize: true,
			lead: 'An amended statute is construed as follows',
			items: [
				{ t: 'The statute and its amendment are read together as a whole', d: 'They form one law.', s: 'the statute and its amendment are read together as one' },
				{ t: 'The amended act is treated as if the original were repealed and a new law in the amended form adopted', d: 'The amendment becomes part of the original as if it had always been there.', s: 'the amendment is part of the original as if always there' },
				{ t: 'Parts not changed remain in force with the same meaning and effect', d: 'An amendment does not disturb provisions it does not touch.', s: 'unchanged parts keep their meaning and effect' },
				{ t: 'Parts of the amended section omitted in the amendment are deemed repealed', d: 'If the amendatory act restates a section without part of it, that part is gone.', s: 'omitted parts of the amended section are repealed' },
				{ t: 'Retained portions are a continuation of the old law, not a new enactment', d: 'Rights and periods under them continue uninterrupted.', s: 'retained portions continue the old law' }
			],
			memory: '<b>Together · As if always · Untouched stays · Omitted goes · Retained continues.</b>',
			tip: 'Pair with §10.06: a change in language suggests a change in meaning (deleting an exception withdraws it).',
			question: 'How is an amended statute construed?'
		},
		{
			id: 'E10.2',
			name: 'Effects of an amendment',
			source: 'Agpalo §§10.07–10.10.',
			kind: 'book',
			lead: 'As to its effects',
			items: [
				{ t: 'An amendatory act operates prospectively', d: 'No retroactive effect unless intended and permitted; vested rights are not impaired.', s: 'it is prospective and does not impair vested rights' },
				{ t: 'Statutes altering jurisdiction do not apply to pending cases', d: 'Unless they so provide.', s: 'jurisdictional amendments do not reach pending cases unless they so provide' },
				{ t: 'If the amendatory act is declared unconstitutional, the original law remains in force', d: 'As if the amendment never existed.', s: 'an unconstitutional amendment leaves the original in force' },
				{ t: 'An amendatory act complete in itself is treated as an original, independent act', d: 'It is read on its own terms.', s: 'a self-contained amendatory act is treated as an independent act' }
			],
			memory: '<b>Forward · Pending cases kept · Void amendment = old law stands · Complete = independent.</b>',
			tip: 'Item 3 is a favorite trap: an unconstitutional amendment does not take the original down with it.',
			question: 'What are the effects of an amendatory act?'
		},
		{
			id: 'E10.3',
			name: 'Two categories of implied repeal',
			source: '<i>Mecano v. COA</i>, 216 SCRA 500 (1992); Agpalo §10.19.',
			kind: 'case',
			memorize: true,
			lead: 'There are two categories of repeal by implication',
			items: [
				{ t: 'Irreconcilable conflict', d: 'Provisions of two acts on the same subject are irreconcilable; the later act, to the extent of the conflict, constitutes an implied repeal of the earlier.', s: 'where provisions of two acts on the same subject are in irreconcilable conflict, the later repeals the earlier to the extent of the conflict' },
				{ t: 'Later act covers the whole subject and is clearly intended as a substitute', d: 'The later act replaces the earlier as the complete law on the subject; it operates as a repeal of the earlier even without specific conflict on every point.', s: 'where the later act covers the whole subject of the earlier and is clearly intended as a substitute' }
			],
			memory: '<b>Clash or Replace.</b>',
			tip: 'Cite <i>Mecano</i>. Add that implied repeals are not favored and the conflict must be clear and convincing.',
			question: 'What are the two categories of implied repeal?'
		},
		{
			id: 'E10.4',
			name: 'Requisites of implied repeal by irreconcilable inconsistency',
			source: 'Agpalo §10.20.',
			kind: 'book',
			memorize: true,
			lead: 'For an implied repeal by irreconcilable inconsistency, it must be shown that',
			items: [
				{ t: 'The two statutes cover the same subject matter', d: 'They must be <i>in pari materia</i>.', s: 'the two laws cover the same subject matter' },
				{ t: 'They are so clearly inconsistent and incompatible that they cannot be reconciled or harmonized', d: 'Mere difference in wording is not enough.', s: 'they are clearly inconsistent and cannot be harmonized' },
				{ t: 'Both cannot be given effect', d: 'Enforcing one necessarily nullifies the other.', s: 'one cannot be enforced without nullifying the other' },
				{ t: 'They have the same object or purpose', d: 'If their objects differ, both may stand even on the same subject.', s: 'they have the same object or purpose' }
			],
			memory: '<b>Same subject · Can\'t harmonize · Can\'t both work · Same goal.</b>',
			tip: 'Cumulative. Close with "inconsistency is never presumed; it must be clear and convincing."',
			question: 'What are the requisites of an implied repeal by irreconcilable inconsistency?'
		},
		{
			id: 'E10.5',
			name: 'What does NOT repeal a law',
			source: 'Art. 7, Civil Code; Agpalo §§10.16–10.20; <i>Mecano</i>; <i>Magtajas</i>.',
			kind: 'teaching',
			lead: 'The following do not repeal a law',
			items: [
				{ t: 'Disuse, custom or practice to the contrary', d: 'Art. 7: violation or non-observance is not excused by disuse, custom or contrary practice.', s: 'disuse, custom or contrary practice (Art. 7)' },
				{ t: 'A change in conditions', d: 'Changed circumstances may make a new law necessary, but do not end the old one.', s: 'a change in the conditions that prompted the law' },
				{ t: 'The mere fact that a later law deals with the same subject', d: 'It may be cumulative or a continuation.', s: 'a later law on the same subject, without more' },
				{ t: 'A general repealing clause, by itself', d: 'It does not identify the law; at most it signals an intent to repeal what is irreconcilable.', s: 'a general repealing clause standing alone' },
				{ t: 'A mere difference in wording', d: 'Different wording is not repugnance.', s: 'mere difference in wording' }
			],
			memory: '<b>Dust (disuse) · Drift (conditions) · Duplicates (same subject) · Dragnet clause · Different words.</b>',
			tip: 'Use this list for true-or-false items. Art. 7 is the anchor provision.',
			question: 'May a law be repealed by disuse or by a contrary practice? What else does not amount to a repeal?'
		},
		{
			id: 'E10.6',
			name: 'Other instances where implied repeal results',
			source: 'Agpalo §§10.19–10.22.',
			kind: 'book',
			lead: 'Implied repeal also results where',
			items: [
				{ t: 'The later act nullifies the reason or purpose of the earlier act', d: 'The reason for the earlier law is "beyond peradventure removed," so it loses all meaning.', s: 'the later act removes the reason or purpose of the earlier' },
				{ t: 'The later law is in negative terms', d: 'It prohibits a thing, or requires it be done in a certain manner and not otherwise.', s: 'the later law is negative or exclusive in terms' },
				{ t: 'The express repeal of a provision from which an official derives authority', d: 'It implies repeal of the provision the official was enforcing under that authority.', s: 'the source of an official\'s authority is expressly repealed' },
				{ t: 'A later revision or codification covers the whole subject', d: 'Omitted provisions are deemed repealed.', s: 'a revision or codification covers the whole subject' },
				{ t: 'A later reenactment of the whole subject substitutes for the earlier law', d: 'The old law disappears; what is omitted is repealed.', s: 'a reenactment of the whole subject substitutes for the earlier law' }
			],
			memory: '<b>Reason gone · Negative words · Authority gone · Code replaces · Reenactment replaces.</b>',
			tip: 'Each is still subject to the presumption against implied repeal.',
			question: 'Aside from irreconcilable inconsistency, when does an implied repeal result?'
		},
		{
			id: 'E10.7',
			name: 'Effects of repeal',
			source: 'Agpalo §§10.30–10.39.',
			kind: 'teaching',
			memorize: true,
			lead: 'The effects of repeal are',
			items: [
				{ t: 'The law becomes inoperative from the effectivity of the repealing act', d: 'Repeal is prospective; it does not declare the old law void from the start.', s: 'the law becomes inoperative from the date the repeal takes effect' },
				{ t: 'Acts done under the old law remain valid', d: 'Repeal does not make legal what was illegal, or illegal what was legal.', s: 'acts done under the law while in force remain valid' },
				{ t: 'Vested rights survive', d: 'Including contract rights and rights of action for damages.', s: 'rights that vested under the law survive' },
				{ t: 'Contracts are not affected', d: 'Contracts made on the basis of the law then in force keep their terms, even if the government is a party.', s: 'existing contracts keep their terms' },
				{ t: 'Pending actions founded on the repealed law are defeated', d: 'Unless vested rights are involved or there is a saving clause.', s: 'pending actions on the repealed law are defeated, save vested rights or a saving clause' },
				{ t: 'Jurisdiction already acquired is not lost', d: 'Repeal or expiration of the law under which jurisdiction was acquired does not void a later decision.', s: 'jurisdiction already acquired over a pending case continues' },
				{ t: 'Taxes assessed under a repealed tax law remain collectible', d: 'Unless the repealing law provides otherwise.', s: 'taxes assessed before repeal remain collectible' },
				{ t: 'Total repeal of a penal law ends pending prosecutions', d: 'Unless the offense is reenacted or there is a saving clause.', s: 'total repeal of a penal law ends pending prosecutions, save reenactment or saving clause' }
			],
			memory: '<b>"Stops, Stays, Survives, Sticks, Sinks, Sits, Still owed, Set free."</b>',
			tip: 'Examiners love the contrast between items 7 and 8 (tax vs. penal).',
			question: 'What are the effects of the repeal of a statute?'
		},
		{
			id: 'E10.8',
			name: 'When total repeal of a penal law does NOT end pending cases',
			source: 'Agpalo §§10.37–10.38.',
			kind: 'book',
			memorize: true,
			lead: 'Pending prosecutions continue despite the repeal of the penal law',
			items: [
				{ t: 'When the repealing act reenacts the offense', d: 'It penalizes the same act; pending cases are not affected, and the penalty more favorable to the accused applies.', s: 'where the repealing act reenacts and penalizes the same offense (the more favorable penalty applying)' },
				{ t: 'When the repealing act contains a saving clause', d: 'It expressly provides that pending actions shall continue.', s: 'where the repealing act has a saving clause for pending actions' }
			],
			memory: '<b>Reenacted or Saved.</b>',
			tip: 'Add the continuity point: repeal and reenactment must be simultaneous; if continuity is broken, the court loses authority under the old law (§10.37).',
			question: 'What is the effect of the total repeal of a penal law on pending prosecutions? Are there exceptions?'
		},
		{
			id: 'E10.9',
			name: 'Rules when a repealing law is itself repealed or annulled',
			source: 'Agpalo §§10.40–10.41; Art. 7, par. 2, Civil Code.',
			kind: 'book',
			lead: 'When the repealing law is itself repealed or annulled',
			items: [
				{ t: 'If the repealing law is declared unconstitutional, the earlier law was never repealed', d: 'A void law produces no effect; the earlier law continues.', s: 'an unconstitutional repealing law leaves the earlier law unrepealed' },
				{ t: 'If an express repealing law is itself repealed, the first law is not revived unless expressly provided', d: 'The express repeal was a deliberate act that survives.', s: 'repeal of an express repealing law does not revive the first law unless expressly provided' },
				{ t: 'If an implied repealing law is itself repealed, the first law is revived unless otherwise provided', d: 'The first law was displaced only by the conflict, which no longer exists.', s: 'repeal of an implied repealing law revives the first law unless otherwise provided' }
			],
			memory: '<b>Void → never repealed · Express → stays dead · Implied → comes back.</b>',
			tip: 'The express/implied distinction is the standard formulation; confirm it in §§10.40–10.41.',
			question: 'What is the effect on the original law when the law that repealed it is (a) declared unconstitutional, or (b) itself repealed?',
			verify: 'The express/implied distinction is stated in Philippine commentaries (citing the Revised Administrative Code and <i>U.S. v. Soliman</i>); not checked against the official text.'
		}
	],

	reqs: [
		{
			name: 'Implied repeal by irreconcilable inconsistency',
			source: 'Agpalo §10.20; <i>Mecano</i>.',
			what: ul(['Same subject matter.', 'Clear inconsistency; cannot be harmonized.', 'Both cannot be given effect.', 'Same object or purpose.']),
			why: 'Only a real, unavoidable clash justifies inferring that the legislature silently ended a law.',
			mode: 'Cumulative — all must concur',
			absent: 'If any is missing, both laws stand and are harmonized.',
			interacts: 'Overridden by the special–general rule: a later general law does not impliedly repeal an earlier special law absent clear intent (<i>Magtajas</i>).',
			hypo: 'Law A (2015) penalizes an act with ₱5,000; Law B (2024), on the same act and for the same purpose, penalizes it with ₱50,000. They cannot both apply; Law B prevails to the extent of the conflict.'
		},
		{
			name: 'Implied repeal by substitution (whole subject)',
			source: '<i>Mecano</i>; Agpalo §§10.13, 10.19, 10.22.',
			what: ul(['The later law covers the <b>whole subject</b> of the earlier law.', 'It is <b>clearly intended</b> as a substitute (a complete system in itself).']),
			why: 'A complete replacement shows the legislature meant the old law to disappear.',
			mode: 'Cumulative — all must concur',
			absent: 'If the later law covers only part of the subject, provisions it omits are not repealed (<i>Mecano</i>).',
			interacts: 'Same test governs omitted provisions in revisions and codifications.',
			hypo: 'A new Barangay Code covering only "organization and procedure" omits an old hazard-pay provision: not repealed.'
		},
		{
			name: 'Pending penal case survives total repeal',
			source: 'Agpalo §§10.37–10.38.',
			what: ul(['The repealing act <b>reenacts</b> the same offense (simultaneously); <b>or</b>', 'The repealing act has a <b>saving clause</b> for pending actions.']),
			why: 'In either case the legislature showed it did not mean to free those already charged.',
			mode: 'Alternative — any one suffices',
			absent: 'Pending cases must be dismissed; the act is no longer a crime.',
			interacts: 'If reenacted with a lighter penalty, the more favorable penalty applies (Art. 22, RPC).',
			hypo: 'A new code repeals the old Anti-Loitering Act but restates loitering with a lower fine: pending cases continue; the lower fine applies.'
		},
		{
			name: 'Revival of a repealed law',
			source: 'Agpalo §§10.40–10.41.',
			what: ul(['The repealing law is declared void (no repeal ever happened); <b>or</b>', 'The first law was <b>impliedly</b> repealed and the repealing law is itself repealed, with no contrary provision; <b>or</b>', 'The legislature <b>expressly</b> provides for revival.']),
			why: 'To track whether the first law\'s end was deliberate.',
			mode: 'Alternative — any one suffices',
			modeNote: 'Any one of these leads to the first law being in force; otherwise (express repeal later repealed, silent) it stays repealed.',
			absent: 'If the first law was expressly repealed and the repealing law is repealed without an express revival, the first law stays repealed.',
			interacts: 'An unconstitutional amendment likewise leaves the original standing (§10.10).',
			hypo: 'Act B expressly repealed Act A; Act C repeals Act B and says nothing about A. A is not revived.'
		}
	],

	comparisons: [
		{
			id: 'C10.1',
			title: 'Amendment vs. repeal',
			a: 'Amendment',
			b: 'Repeal',
			def: ['Alteration of the terms of an existing law.', 'Abrogation of a law or part of it.'],
			purpose: ['Change the rule while keeping the law.', 'End the rule.'],
			basis: ['§§10.01–10.10.', '§§10.16–10.41; Art. 7, Civil Code.'],
			when: ['The legislature wants a different rule on the same point.', 'The legislature wants no rule (or a wholly new law).'],
			key: ['The law continues in amended form; the amendment is part of it as if always there.', 'The law (or part) ceases to operate from the repeal.'],
			limits: ['Prospective; by implication disfavored; void amendment leaves original.', 'Prospective; by implication disfavored; vested rights survive.'],
			example: ['Effectivity period changed from two to four years.', 'R.A. 7636 repealing R.A. 1700.'],
			trap: ['Thinking an amended section\'s omitted parts survive (they are repealed).', 'Thinking repeal voids past acts.'],
			decisive: 'Whether the law survives in changed form or ceases to operate.',
			matters: 'It determines whether periods, rights and pending matters continue under the same law.',
			recognize: '"Is hereby amended to read as follows" vs. "is hereby repealed."',
			mistake: 'Treating an amendment that deletes part of a section as leaving that part alive.'
		},
		{
			id: 'C10.2',
			title: 'Express repeal vs. implied repeal',
			a: 'Express repeal',
			b: 'Implied repeal',
			def: ['A statement that a specific law, identified by number or title, is repealed.', 'Repeal inferred from irreconcilable conflict or substitution.'],
			purpose: ['Clear notice of what is ended.', 'Give effect to the latest legislative will when two laws cannot coexist.'],
			basis: ['§10.17; <i>Mecano</i>.', '§§10.19–10.22; <i>Mecano</i>; <i>Magtajas</i>.'],
			when: ['The repealing law names the law.', 'No law is named, but conflict or substitution is shown.'],
			key: ['No need to show conflict.', 'Must show clear and convincing conflict or substitution.'],
			limits: ['—', 'Not favored; harmonize first; general–special rule.'],
			example: ['R.A. 7636 repealing R.A. 1700.', 'Two laws fixing different penalties for the same act.'],
			trap: ['Calling a general repealing clause an express repeal.', 'Inferring repeal from different wording.'],
			decisive: 'Whether the repealing law identifies the repealed law.',
			matters: 'Express repeal ends the inquiry; implied repeal requires proof against a presumption.',
			recognize: 'Look for a law number or title in the repealing clause.',
			mistake: 'The <i>Magtajas</i> petitioners\' reliance on Sec. 534(f) alone.'
		},
		{
			id: 'C10.3',
			title: 'Implied repeal by irreconcilable conflict vs. by substitution',
			a: 'Irreconcilable conflict',
			b: 'Substitution (whole subject)',
			def: ['Two laws on the same subject cannot both be given effect.', 'The later law covers the whole subject and is meant to replace the earlier.'],
			purpose: ['Resolve a specific clash.', 'Replace an entire scheme.'],
			basis: ['<i>Mecano</i>; §10.20.', '<i>Mecano</i>; §§10.13, 10.22.'],
			when: ['A particular provision clashes.', 'A new code or reenactment covers the field.'],
			key: ['Repeal only <b>to the extent of the conflict</b>.', 'Repeal of the <b>whole</b> earlier law, including omitted parts.'],
			limits: ['Four requisites; clear and convincing.', 'Clear intent to substitute; partial codes do not qualify (<i>Mecano</i>).'],
			example: ['Different penalties for the same act.', 'A complete new tenancy code replacing the old one.'],
			trap: ['Treating any overlap as conflict.', 'Treating any new code as a total substitute.'],
			decisive: 'Scope: a partial repeal of what clashes vs. a total repeal of what was replaced.',
			matters: 'It decides whether provisions not in conflict survive.',
			recognize: 'Does the later law aim to be the complete law on the subject?',
			mistake: 'COA\'s position in <i>Mecano</i>: treating the 1987 Administrative Code as a complete substitute for the 1917 Code.'
		},
		{
			id: 'C10.4',
			title: 'Repeal of a penal law vs. repeal of a tax law',
			a: 'Penal law repealed',
			b: 'Tax law repealed',
			def: ['A law defining and punishing a crime is totally repealed.', 'A law imposing a tax is repealed.'],
			purpose: ['The State no longer wishes to punish the act.', 'The State no longer wishes to impose the tax going forward.'],
			basis: ['§10.38.', '§10.36.'],
			when: ['Prosecutions are pending.', 'Assessments were made before the repeal.'],
			key: ['Pending cases are <b>dismissed</b> (no jurisdiction to punish).', 'Taxes already assessed <b>remain collectible</b>.'],
			limits: ['Unless the offense is reenacted or there is a saving clause.', 'Unless the repealing law provides otherwise.'],
			example: ['R.A. 1700 repealed by R.A. 7636: cases dismissed.', 'A 2025 assessment is collected after the 2026 repeal.'],
			trap: ['Applying the penal rule to taxes.', 'Applying the tax rule to crimes.'],
			decisive: 'Penal liability ends with the law (absent reenactment or saving clause); tax liability already assessed does not.',
			matters: 'The direction of fairness differs: liberty vs. revenue already accrued.',
			recognize: 'Is the liability a punishment or an accrued obligation?',
			mistake: 'Forgetting the reenactment and saving-clause exceptions for penal laws.'
		},
		{
			id: 'C10.5',
			title: 'Repeal vs. expiration of a temporary law',
			a: 'Repeal',
			b: 'Expiration',
			def: ['The legislature ends the law by a later law.', 'A temporary law ends by its own terms.'],
			purpose: ['A new legislative judgment.', 'The law\'s purpose was always time-bound.'],
			basis: ['§§10.30–10.38.', '§10.39.'],
			when: ['A later statute repeals the earlier.', 'The fixed period or event arrives.'],
			key: ['Total repeal of a penal law ends pending prosecutions (absent reenactment or saving clause).', 'Expiration does not divest jurisdiction or make illegal acts legal.'],
			limits: ['Vested rights survive; taxes still collectible.', '—'],
			example: ['Anti-Subversion Act repealed: cases dismissed.', 'A temporary import ban expires: forfeiture case already begun continues.'],
			trap: ['Treating expiration like a total repeal of a penal law.', 'Assuming expiration revives anything.'],
			decisive: 'Expiration was built into the law; repeal is a new decision against it.',
			matters: 'Acts done during a temporary law\'s life remain punishable after it expires.',
			recognize: 'Does the law carry its own end date or event?',
			mistake: 'Moving to dismiss a pending case solely because a temporary law has expired.'
		},
		{
			id: 'C10.6',
			title: 'Complete code vs. partial code (omitted provisions)',
			a: 'Complete code (substitute)',
			b: 'Partial code (Mecano)',
			def: ['A revision intended to cover the whole subject and replace the old law.', 'A revision covering only part of the subject of the old law.'],
			purpose: ['Provide a complete and perfect system.', 'Restate part of the field.'],
			basis: ['§10.13.', '<i>Mecano v. COA</i>.'],
			when: ['The code\'s scope matches the old law\'s scope.', 'The old law covered matters the new code does not.'],
			key: ['Omitted provisions are <b>deemed repealed</b>.', 'Omitted provisions are <b>not repealed</b>.'],
			limits: ['Unless the code provides otherwise.', 'Still subject to repeal by irreconcilable conflict on specific points.'],
			example: ['1997 Rules of Civil Procedure omitting old Rule 41, Sec. 18.', '1987 Administrative Code not repealing Sec. 699 of the 1917 Code.'],
			trap: ['Assuming every omission is a repeal.', 'Ignoring the whereas clauses that limit a code\'s scope.'],
			decisive: 'Whether the new code was intended to cover the whole subject.',
			matters: 'In <i>Mecano</i>, it decided whether an official could be reimbursed for medical expenses.',
			recognize: 'Compare the subjects of the old and new laws; read the whereas clauses.',
			mistake: 'Reading a general repealing clause as proof that the code is a complete substitute.'
		}
	],

	authorities: [
		{ kind: 'provision', name: 'Art. 7, Civil Code', text: '"Laws are repealed only by subsequent ones, and their violation or non-observance shall not be excused by disuse, or custom or practice to the contrary. When the courts declare a law to be inconsistent with the Constitution, the former shall be void and the latter shall govern. Administrative or executive acts, orders and regulations shall be valid only when they are not contrary to the laws or the Constitution."' },
		{
			kind: 'provision',
			name: 'Sec. 534(f), Local Government Code (as quoted in Magtajas)',
			text: '"All general and special laws, acts, city charters, decrees, executive orders, proclamations and administrative regulations, or part or parts thereof which are inconsistent with any of the provisions of this Code are hereby repealed or modified accordingly." Paragraphs (a)–(e) list specific laws repealed; P.D. 1869 is not among them.'
		},
		{ kind: 'case', name: 'Mecano v. Commission on Audit', cite: '216 SCRA 500 (1992)', text: 'Sec. 699 of the Revised Administrative Code of 1917 (reimbursement of medical expenses of officials injured or sickened in the performance of duty) was not repealed by the 1987 Administrative Code. Its repealing clause is not an express repeal, there is no irreconcilable conflict, and the new Code does not cover the whole subject of the old one; its whereas clause limits it to administration, organization and procedure. Claim granted.' },
		{ kind: 'case', name: 'Magtajas v. Pryce Properties', cite: 'G.R. No. 111097, July 20, 1994', text: 'The LGC did not repeal P.D. 1869: it is not among the laws specifically repealed in Sec. 534(a)–(e); implied repeals are not presumed; later laws (R.A. 7309, R.A. 7648) tap PAGCOR revenues; and the two laws can be harmonized.' },
		{ kind: 'case', name: 'Corona v. Court of Appeals', cite: 'G.R. No. 97356, Sept. 30, 1992', text: 'A later special law repugnant to a prior general law on the same subject partially repeals it to the extent of the inconsistency, or is grafted as an exception onto it.' },
		{ kind: 'case', name: 'Ty v. Trampe', cite: '250 SCRA 500 (1995)', text: 'The LGC did not impliedly repeal P.D. 921 on real estate tax; the two laws must be absolutely incompatible, clearly shown, before implied repeal is inferred.', verify: 'Facts not summarized here.' },
		{ kind: 'case', name: 'Hagad v. Gozo-Dadole', cite: '251 SCRA 242 (1995)', text: 'The LGC did not repeal the Ombudsman Act\'s disciplinary provisions over elective local officials; both are given concurrent effect.', verify: 'Holding as commonly summarized; not confirmed against the full decision.' },
		{ kind: 'case', name: 'R.A. 7636 (1992) repealing R.A. 1700', text: 'Total repeal of the Anti-Subversion Act; persons charged under R.A. 1700 were entitled to dismissal.' }
	],

	caseNote: '<i>Magtajas</i> is the Chapter X case on general repealing clauses and implied repeal. <i>Corona</i> shows a partial implied repeal by a later special law that leaves the general law working outside the special field. The other three cases do not turn on repeal.',
	caseLinks: [
		{
			caseId: 'magtajas',
			strength: 'Direct — the Court applied it',
			doctrine: 'Implied repeals are not favored; a general repealing clause is not an express repeal; a general law does not repeal a special law absent clear intent.',
			facts: 'The city argued that the LGC, being later, modified P.D. 1869 "pro tanto," relying on Sec. 534(f): "all ... decrees ... inconsistent with any of the provisions of this Code are hereby repealed or modified accordingly."',
			issue: 'Did the LGC repeal or modify P.D. 1869?',
			applied: 'The Court read Sec. 534 as a whole. Paragraphs (a)–(e) "painstakingly" list specific laws repealed, and P.D. 1869 is not among them, so the petitioners could rely only on an implied repeal under (f). "Implied repeals are not lightly presumed in the absence of a clear and unmistakable showing of such intention," and the intent to repeal is not imputed where the statutes relate as general to special (<i>Lichauco</i>). Later laws (R.A. 7309, R.A. 7648) tapping PAGCOR revenues showed Congress treated P.D. 1869 as alive. The two laws could be harmonized.',
			ruling: 'No repeal; the ordinances were void.',
			lesson: 'A "modification pro tanto" that would leave PAGCOR "a toothless tiger" is in substance a total repeal, and must meet the same strict test.',
			examUse: '"Is a general repealing clause an express repeal? Cite a case." (<i>Mecano</i>; <i>Magtajas</i>.)'
		},
		{
			caseId: 'corona',
			strength: 'Direct — the Court applied it',
			doctrine: 'A later special law inconsistent with a prior general law impliedly repeals it to the extent of the inconsistency, or is grafted onto it as an exception.',
			facts: 'Sec. 37(b), P.D. 807 (Oct. 6, 1975) vests disciplinary jurisdiction in department heads; Sec. 8, P.D. 857 (Dec. 23, 1975) vests removal of PPA personnel below Assistant GM in the PPA General Manager.',
			issue: 'To what extent, if any, did the PPA Charter repeal the Civil Service Law\'s grant to the DOTC Secretary?',
			applied: 'Only to the extent of the inconsistency: the original stage. The Court presumed the legislature knew the prior law, so the Charter "delimited" the Secretary\'s general power rather than abolishing it; the Secretary retained appellate jurisdiction.',
			ruling: 'AAB lacked jurisdiction; cases remanded to the PPA GM.',
			lesson: 'Implied repeal is surgical: only the inconsistent part goes.',
			examUse: '"Distinguish a partial implied repeal from a total repeal, using an assigned case."'
		}
	],

	traps: [
		{ wrong: '"All laws inconsistent herewith are repealed" is an express repeal.', right: 'It is not; it does not identify the law. Any repeal under it must be shown as implied (<i>Mecano</i>; <i>Magtajas</i>).', example: 'LGC Sec. 534(f) and P.D. 1869.' },
		{ wrong: 'Every provision omitted from a revised code is repealed.', right: 'Only if the code was meant to cover the whole subject and replace the old law (<i>Mecano</i>).', example: 'Sec. 699 of the 1917 Administrative Code survived.' },
		{ wrong: 'A law that is no longer enforced is repealed.', right: 'Laws are repealed only by subsequent laws; disuse, custom or contrary practice does not repeal (Art. 7).', example: 'An old ordinance no one enforces is still in force.' },
		{ wrong: 'Repeal makes the old law void from the start.', right: 'Repeal is prospective; acts done under the old law remain valid; vested rights survive.', example: 'Contracts made under the repealed law keep their terms.' },
		{ wrong: 'Total repeal of a penal law never affects pending cases.', right: 'It ends them, unless the offense is reenacted or there is a saving clause.', example: 'R.A. 1700 cases dismissed after R.A. 7636.' },
		{ wrong: 'Repeal of a tax law wipes out assessed taxes.', right: 'Taxes assessed before repeal remain collectible unless the repealing law provides otherwise.', example: 'A 2025 assessment collected after a 2026 repeal.' },
		{ wrong: 'Repealing the repealing law always revives the first law.', right: 'Not if the first repeal was express (unless revival is expressly provided).', example: 'Act B expressly repealed A; C repeals B: A stays repealed.' },
		{ wrong: 'An unconstitutional amendment destroys the original law too.', right: 'The original remains in force as if the amendment never existed (§10.10).', example: 'A void amendment to a tax rate leaves the old rate.' }
	],

	practice: [
		// C
		{ cat: 'C', level: 1, topic: 'Express repeal', q: 'What is an express repeal? Is a clause repealing "all laws inconsistent with this Act" an express repeal?', short: 'An express repeal is a declaration, usually in a repealing clause, that a particular and specific law, identified by number or title, is repealed. A clause repealing "all laws inconsistent with this Act" is <b>not</b> an express repeal because it does not identify the law; it only expresses an intent to repeal what is irreconcilable (<i>Mecano v. COA</i>; <i>Magtajas</i>).', keys: 'identifies law by number or title; general clause not express; Mecano' },
		{ cat: 'C', level: 1, topic: 'Implied repeal', q: 'What are the two categories of implied repeal?', short: '(1) Where provisions of two acts on the same subject are in irreconcilable conflict, the later act repeals the earlier to the extent of the conflict; (2) where the later act covers the whole subject of the earlier and is clearly intended as a substitute (<i>Mecano</i>).', keys: 'irreconcilable conflict; whole subject/substitute; Mecano' },
		{ cat: 'C', level: 1, topic: 'Art. 7', q: 'Can a law be repealed by disuse or by a contrary custom or practice?', short: 'No. Laws are repealed only by subsequent ones, and their violation or non-observance is not excused by disuse, custom or contrary practice (Art. 7, Civil Code).', keys: 'Art. 7; only by subsequent laws' },
		{ cat: 'C', level: 2, topic: 'Penal laws', q: 'What is the effect of the total repeal of a penal law on prosecutions pending under it?', short: 'The courts lose authority to punish persons charged under it, so pending cases must be dismissed, unless the repealing act reenacts the offense (in which case pending cases continue and the more favorable penalty applies) or contains a saving clause (§10.38).', keys: 'dismissal; reenactment; saving clause; more favorable penalty' },
		{ cat: 'C', level: 2, topic: 'Saving clause', q: 'What is a saving clause, and what is its effect on a repealed penal law?', short: 'A provision in a repealing law preserving rights, liabilities or pending proceedings under the repealed law. With it, the total repeal of a penal law does not end pending prosecutions (§10.38).', keys: 'preserves pending proceedings; exception to dismissal' },
		{ cat: 'C', level: 2, topic: 'Tax laws', q: 'May taxes assessed under a tax law be collected after the law is repealed?', short: 'Yes. Repeal of a tax law does not prevent collection of taxes assessed under it before the repeal, unless the repealing law provides otherwise (§10.36).', keys: 'still collectible; unless repealing law provides otherwise' },
		{ cat: 'C', level: 2, topic: 'Amendment', q: 'What happens to the original law if the amendatory act is declared unconstitutional?', short: 'The original law remains in force, as if the amendment had never been enacted (§10.10).', keys: 'original remains; as if no amendment' },
		// A
		{ cat: 'A', level: 1, topic: 'Implied repeal', q: 'Enumerate the requisites of an implied repeal by irreconcilable inconsistency.', short: '(1) The two statutes cover the same subject matter; (2) they are so clearly inconsistent and incompatible that they cannot be reconciled or harmonized; (3) both cannot be given effect, as one cannot be enforced without nullifying the other; and (4) they have the same object or purpose. The inconsistency must be clear and convincing; it is never presumed (§10.20).', keys: 'same subject; irreconcilable; cannot both be given effect; same object; never presumed' },
		{ cat: 'A', level: 1, topic: 'Amendment', q: 'How is an amended statute construed? Enumerate the rules.', short: '(1) The statute and its amendment are read together as a whole; (2) the amendment becomes part of the original as if it had always been there; (3) unchanged parts keep their meaning and effect; (4) parts of the amended section omitted in the amendment are deemed repealed; (5) retained portions are a continuation of the old law, not a new enactment (§10.05).', keys: 'together; as if always; unchanged stays; omitted repealed; continuation' },
		{ cat: 'A', level: 2, topic: 'Implied repeal', q: 'Aside from irreconcilable inconsistency, enumerate the instances in which an implied repeal results.', short: '(1) The later act nullifies the reason or purpose of the earlier; (2) the later law is in negative terms; (3) the express repeal of the provision from which an official derives authority implies repeal of the provision he enforces; (4) a revision or codification covers the whole subject; (5) a reenactment of the whole subject substitutes for the earlier law.', keys: 'reason removed; negative terms; authority repealed; codification; reenactment' },
		{ cat: 'A', level: 2, topic: 'Effects', q: 'Enumerate the effects of the repeal of a statute.', short: '(1) The law becomes inoperative from the effectivity of the repealing act; (2) acts done under it remain valid; (3) vested rights survive; (4) existing contracts keep their terms; (5) pending actions founded on it are defeated, save vested rights or a saving clause; (6) jurisdiction already acquired is not lost; (7) taxes already assessed remain collectible; (8) total repeal of a penal law ends pending prosecutions, save reenactment or a saving clause (§§10.30–10.38).', keys: 'prospective; acts valid; vested rights; contracts; pending actions; jurisdiction; taxes; penal' },
		{ cat: 'A', level: 2, topic: 'Revival', q: 'What is the effect on the original law when the law that repealed it is (a) declared unconstitutional, or (b) itself repealed?', short: '(a) It never took effect, so the original law was never repealed. (b) If the original was <i>expressly</i> repealed, it is not revived unless expressly provided; if it was only <i>impliedly</i> repealed, it is generally revived unless otherwise provided.', keys: 'void → never repealed; express → no revival; implied → revival' },
		// D
		{ cat: 'D', level: 2, topic: 'Express repeal', q: 'A clause stating "all laws inconsistent herewith are hereby repealed" is an express repeal.', tf: false, a: 'It does not identify any particular law, so it is not an express repeal; it merely expresses an intent to repeal what is irreconcilable (<i>Mecano</i>; <i>Magtajas</i>).', keys: 'Mecano v. COA; Magtajas', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Art. 7', q: 'A law cannot be repealed by disuse or by a custom or practice to the contrary.', tf: true, a: 'Art. 7, Civil Code.', keys: 'Art. 7, Civil Code', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Codification', q: 'Whenever a revised code omits a provision of the old code, that provision is deemed repealed.', tf: false, a: 'Omission works as a repeal only where the revised code was intended to cover the whole subject and substitute for the old law. In <i>Mecano</i>, the 1987 Administrative Code did not, so Sec. 699 of the 1917 Code survived.', keys: 'Mecano v. COA; Agpalo §10.13', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Tax laws', q: 'The repeal of a tax law does not prevent the collection of taxes assessed before the repeal, unless the repealing law provides otherwise.', tf: true, a: 'Agpalo §10.36.', keys: 'Agpalo §10.36', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Penal laws', q: 'The total repeal of a penal law has no effect on criminal cases already pending under it.', tf: false, a: 'A total repeal deprives the courts of authority to punish, so pending cases are dismissed, unless the offense is reenacted or there is a saving clause (§10.38).', keys: 'Agpalo §10.38; R.A. 7636', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Amendment', q: 'If an amendatory act is declared unconstitutional, the original law remains in force.', tf: true, a: 'It is as if the amendment never existed (§10.10).', keys: 'Agpalo §10.10', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Implied repeal', q: 'A difference in wording between two statutes on the same subject is enough to establish an implied repeal.', tf: false, a: 'Different wording alone is not repugnance; the laws must be irreconcilable, incapable of both being given effect, with the same object (§10.20).', keys: 'Agpalo §10.20', tag: 'requisites' },
		{ cat: 'D', level: 2, topic: 'Vested rights', q: 'Rights that vested under a statute survive its repeal.', tf: true, a: 'Including contract rights and rights of action for damages; the Constitution forbids impairing them (§10.34).', keys: 'Agpalo §10.34', tag: 'effects' },
		{ cat: 'D', level: 2, topic: 'Magtajas', q: 'In Magtajas v. Pryce, the Court held that Sec. 534(f) of the LGC expressly repealed P.D. 1869 to the extent of any inconsistency.', tf: false, a: 'The Court held that P.D. 1869 was not repealed. It was not among the laws specifically repealed in Sec. 534(a)–(e), Sec. 534(f) is only a general clause, and no implied repeal was shown.', keys: 'Magtajas v. Pryce (1994)', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'Reenactment', q: 'The simultaneous repeal and reenactment of a penal provision does not affect prosecutions pending for the offense reenacted.', tf: true, a: 'The reenactment neutralizes the repeal, so pending prosecutions continue (§10.37), with the more favorable penalty applying to the accused.', keys: 'Agpalo §10.37', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Effects', q: 'A repeal makes the repealed law void from its enactment, so acts done under it become illegal.', tf: false, a: 'Repeal is prospective; it is not a declaration of invalidity from the start, and acts done under the old law remain valid (§10.30).', keys: 'Agpalo §10.30', tag: 'effects' },
		// B
		{ cat: 'B', level: 3, topic: 'Express vs. implied', q: 'Distinguish express repeal from implied repeal. Why is a general repealing clause not an express repeal?', short: 'An <b>express</b> repeal names the specific law repealed by number or title; no conflict need be shown. An <b>implied</b> repeal is inferred from irreconcilable conflict or substitution and must be shown clearly against a presumption that the legislature did not intend it. A general repealing clause names no law; it only says that inconsistent laws are repealed, so the question of which laws are inconsistent, and whether they truly are, remains a question of implied repeal (<i>Mecano</i>; <i>Magtajas</i>).', keys: 'names law vs. inferred; presumption against implied; general clause' },
		{ cat: 'B', level: 3, topic: 'Penal vs. tax', q: 'Distinguish the effects of the repeal of a penal law from the repeal of a tax law.', short: 'Total repeal of a <b>penal</b> law ends pending prosecutions because the act is no longer a crime, unless the offense is reenacted or there is a saving clause (§10.38). Repeal of a <b>tax</b> law does not prevent collection of taxes already assessed, unless the repealing law provides otherwise (§10.36).', keys: 'dismissal vs. still collectible; exceptions' },
		{ cat: 'B', level: 3, topic: 'Repeal vs. expiration', q: 'Distinguish the repeal of a penal law from the expiration of a temporary law, as to pending cases.', short: 'A total repeal of a penal law deprives the courts of authority to punish, so pending cases are dismissed (absent reenactment or a saving clause). The expiration of a temporary law does not divest the tribunal of jurisdiction or make an illegal act legal; pending proceedings continue (§§10.38–10.39).', keys: 'repeal ends; expiration does not; temporary law' },
		// F
		{ cat: 'F', level: 3, topic: 'Magtajas', q: 'In Magtajas, the petitioners argued that the LGC had "modified pro tanto" P.D. 1869 through Sec. 534(f). How did the Court answer?', short: 'It held that P.D. 1869 was not among the laws specifically repealed in Sec. 534(a)–(e), so the petitioners could rely only on an implied repeal under the general clause in (f). Implied repeals are not presumed without a clear and unmistakable showing of intent, and intent to repeal is not imputed where the laws relate as general to special (<i>Lichauco</i>). Later laws tapping PAGCOR revenues confirmed that P.D. 1869 was alive. What petitioners called a modification would in substance be a total repeal.', keys: 'specific list; general clause; implied repeal disfavored; general-special; later laws' },
		{ cat: 'F', level: 3, topic: 'Corona', q: 'In Corona, what exactly did the PPA Charter repeal, and what survived?', short: 'It repealed (or carved an exception out of) Sec. 37(b) of the Civil Service Law only to the extent of the inconsistency: the original power to investigate and decide cases against PPA personnel below Assistant GM passed to the PPA General Manager. The DOTC Secretary\'s appellate jurisdiction survived, because the Charter "delimited" rather than abolished his general power.', keys: 'partial repeal; to the extent of inconsistency; original vs. appellate' },
		{ cat: 'F', level: 3, topic: 'Mecano', q: 'Why did the Court in Mecano v. COA hold that Sec. 699 of the 1917 Revised Administrative Code was not repealed by the 1987 Administrative Code?', short: '(1) The 1987 Code\'s repealing clause ("all laws ... inconsistent with this Code are repealed or modified accordingly") is not an express repeal; (2) there was no irreconcilable conflict, since non-restatement is not conflict; (3) the 1987 Code did not cover the whole subject of the 1917 Code; its whereas clause limited it to administration, organization and procedure, and the old Code covered other matters. Repeals by implication are disfavored, so the claim was granted.', keys: 'general clause; no conflict; not whole subject; whereas clause' },
		// E
		{
			cat: 'E',
			level: 4,
			topic: 'Codification',
			title: 'Ch. X — The missing hazard allowance',
			facts: 'The (hypothetical) Barangay Administration Code of 1995 contained Sec. 40, granting barangay health workers a monthly hazard allowance, and many provisions on barangay organization. In 2025 Congress enacted the (hypothetical) Revised Barangay Code, whose whereas clause states that it aims "to restate the laws on the organization, administration and procedures of barangays." It does not reproduce Sec. 40, and ends: "All laws, decrees and orders inconsistent with this Code are repealed or modified accordingly." Nothing in the 2025 Code deals with allowances of health workers. A municipality stops paying the hazard allowance, claiming Sec. 40 was repealed.',
			q: 'Was Sec. 40 repealed? Answer using ALAC.',
			alac: {
				answer: 'No. Sec. 40 was not repealed and the allowance must still be paid.',
				legalBasis: 'A general repealing clause is not an express repeal (<i>Mecano v. COA</i>). Implied repeal occurs only (1) where two laws are irreconcilable, or (2) where the later law covers the whole subject and is clearly intended as a substitute. Omitted provisions of a revised code are deemed repealed only if the code covers the whole subject of the old law (Agpalo §10.13; <i>Mecano</i>). Implied repeals are not favored.',
				application: 'The 2025 Code\'s repealing clause does not name Sec. 40, so there is no express repeal. There is no irreconcilable conflict either: the 2025 Code says nothing about health-worker allowances, and silence is not conflict. Nor is the 2025 Code a complete substitute: its whereas clause limits it to organization, administration and procedure, while the 1995 Code also dealt with benefits. As in <i>Mecano</i>, the omission of a provision on a subject the new code does not cover is not a repeal.',
				conclusion: 'Sec. 40 remains in force; the municipality must continue paying the hazard allowance.'
			},
			weaker: 'The municipality treats non-reproduction plus a general repealing clause as a repeal, the precise argument rejected in <i>Mecano</i>.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Penal laws',
			title: 'Ch. X — The repealed loitering law',
			facts: 'Juan and Pedro were separately charged in 2025 under the (hypothetical) Anti-Loitering Act of 2010, which punished loitering in any public place with imprisonment of up to six months. Juan loitered in a public park; Pedro loitered just outside a school gate. In 2026, Congress passed Act A, which totally repealed the Anti-Loitering Act, without a saving clause. On the same day, Congress enacted Act B, the (hypothetical) Safe Schools Act, which penalizes loitering within 100 meters of a school with a fine of ₱1,000 only. Both cases are pending.',
			q: 'What happens to Juan\'s and Pedro\'s cases? Answer using ALAC.',
			alac: {
				answer: 'Juan\'s case must be dismissed. Pedro\'s case continues, but only the ₱1,000 fine may be imposed.',
				legalBasis: 'A total and absolute repeal of a penal law deprives the courts of authority to punish persons charged under it, and pending cases must be dismissed, unless the repealing legislation reenacts the offense or contains a saving clause (Agpalo §10.38). Where repeal and reenactment are simultaneous, pending prosecutions for the reenacted offense continue, and the penalty more favorable to the accused applies (§§10.37–10.38; Art. 22, RPC).',
				application: '<b>Juan:</b> Act A totally repealed the Anti-Loitering Act without a saving clause, and loitering in a park was not reenacted anywhere. It is no longer punishable, so the court lost authority to punish him, just as R.A. 7636\'s repeal of R.A. 1700 ended pending subversion cases. <b>Pedro:</b> loitering within 100 meters of a school was reenacted by Act B on the same day the old law was repealed, so for his act there was no break in continuity and the prosecution survives. Because Act B\'s fine is lighter than the old imprisonment, the more favorable penalty applies.',
				conclusion: 'Dismiss Juan\'s case; proceed with Pedro\'s, and if he is convicted, impose only the ₱1,000 fine.'
			},
			weaker: 'Continuing Juan\'s prosecution would punish an act the State no longer considers a crime.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Implied repeal',
			title: 'Ch. X — The teacher reassignment',
			facts: 'Act 1 (hypothetical, 2015) provides: "Public school teachers shall be assigned only to schools within 25 kilometers of their residence." Act 2 (hypothetical, 2024) provides: "The Secretary of Education may reassign teachers to any school within the region when required by the exigencies of the service, such as calamities and sudden enrollment surges." Act 2 has a general repealing clause. Teacher Ana, living in Tarlac City, is reassigned to a school 90 km away for "efficiency." There is no calamity or enrollment surge. She claims Act 1 still protects her; the Department claims Act 2 impliedly repealed Act 1.',
			q: 'Did Act 2 impliedly repeal Act 1, and was Ana\'s reassignment valid? Answer using ALAC.',
			alac: {
				answer: 'No implied repeal; the two acts are harmonized, and Ana\'s reassignment is invalid.',
				legalBasis: 'Implied repeal by irreconcilable inconsistency requires the same subject, clear inconsistency that cannot be harmonized, impossibility of giving effect to both, and the same object (Agpalo §10.20). Repeals by implication are not favored, and laws on the same subject must be harmonized if possible (§§6.15–6.17; <i>Magtajas</i>). A general repealing clause is not an express repeal (<i>Mecano</i>).',
				application: 'Both acts deal with the assignment of teachers, but they can be harmonized: Act 1 states the general rule (assignment within 25 km), and Act 2 creates an exception for "exigencies of the service," illustrated by calamities and enrollment surges. Both operate: Act 1 governs ordinary assignments; Act 2 governs emergencies. Ana\'s reassignment rests on "efficiency," not on an exigency like those Act 2 describes, so Act 2 does not cover it, and Act 1 protects her.',
				conclusion: 'Act 1 is not repealed. Ana\'s reassignment beyond 25 km without an exigency of the service is invalid.'
			},
			weaker: 'The Department treats any later law on the same subject as a repeal; the presumption runs the other way.'
		},
		// G
		{
			cat: 'G',
			level: 5,
			topic: 'Revival',
			title: 'Ch. X — Three laws on a terminal fee',
			facts: 'Act A (hypothetical, 2000) imposed a ₱50 terminal fee on bus passengers. Act B (2010) provided: "Act A is hereby repealed." Act C (2020) provided: "Act B is hereby repealed," and said nothing more. In 2026 a city collects the ₱50 fee, citing Act A. Separately, Act D (2005) imposed a ₱20 jeepney terminal fee; Act E (2012), without naming Act D, imposed a ₱5 jeepney terminal fee for the same purpose, so the two could not both apply; Act F (2022) repealed Act E. The city also collects ₱20 under Act D.',
			q: 'Are the ₱50 and ₱20 collections valid? Discuss using ALAC.',
			alac: {
				answer: 'The ₱50 bus fee is not collectible; the ₱20 jeepney fee is collectible, subject to verifying the rule on revival.',
				legalBasis: 'If a law that expressly repealed an earlier law is itself repealed, the earlier law is not revived unless the later law expressly so provides. If the earlier law was only impliedly repealed, the repeal of the repealing law generally revives it unless otherwise provided (Agpalo §§10.40–10.41). Implied repeal by irreconcilable inconsistency requires the same subject, clear conflict, impossibility of both operating, and the same object (§10.20).',
				application: '<b>Bus fee:</b> Act B expressly repealed Act A. Act C repealed Act B but did not provide for Act A\'s revival. Act A therefore stays repealed, and the city has no basis to collect. <b>Jeepney fee:</b> Act E did not name Act D; it repealed it only by implication, because the two fees for the same purpose could not both be collected. When Act F repealed Act E, the conflict disappeared, and under the rule for implied repeals Act D revives, since Act F does not provide otherwise.',
				conclusion: 'Refund the ₱50 bus fees; the ₱20 jeepney fee may be collected under the revived Act D.'
			},
			weaker: 'Treating both chains the same way ignores why each first law ended: by deliberate express repeal, or only because of a conflict that no longer exists.'
		},
		{
			cat: 'G',
			level: 5,
			topic: 'Amendment',
			title: 'Ch. X — The deleted exemption',
			facts: 'A (hypothetical) 2018 land registration law required a publication fee for every application "except for land with an assessed value below ₱100,000." A 2025 amendment, effective July 1, 2025, reproduced the section "to read as follows" but omitted the exception. Lito filed his application for land valued at ₱80,000 in March 2025 without paying the fee, as the law then allowed; his case is still pending. Rosa filed for land valued at ₱70,000 in August 2025. The registry now requires both to pay the fee.',
			q: 'Must Lito and Rosa pay the fee? Discuss using ALAC.',
			alac: {
				answer: 'Rosa must pay; Lito need not.',
				legalBasis: 'Parts of an amended section omitted in the amendment are deemed repealed, and a change in language suggests a change in meaning: dropping an exception withdraws it (Agpalo §§10.05–10.06). An amendatory act operates prospectively and does not impair rights or undo acts validly done under the law before it (§10.07; Art. 4, Civil Code). A repeal or amendment does not undo consequences while the old law was in force (§10.30).',
				application: 'The 2025 amendment restated the section without the exception, so from July 1, 2025 the exception is gone. Rosa filed in August 2025, after the amendment, so she is governed by the amended section and must pay. Lito filed in March 2025, when the exception applied, and validly filed without paying. Requiring him to pay now would apply the amendment retroactively to an act completed under the old law, which the amendment does not clearly provide and which the presumption of prospectivity forbids.',
				conclusion: 'The registry may require Rosa to pay the fee but not Lito.'
			},
			weaker: 'Requiring Lito to pay treats the amendment as if it had always been the law for acts already done, confusing the rule that an amendment is read "as if always there" (for construing the statute going forward) with retroactive application.'
		}
	],

	memoryAids: [
		['Amended statute', '<b>Together · As if always · Untouched stays · Omitted goes · Retained continues.</b>'],
		['Two kinds of implied repeal', '<b>Clash or Replace</b> (<i>Mecano</i>).'],
		['Requisites (irreconcilable conflict)', '<b>Same subject · Can\'t harmonize · Can\'t both work · Same goal.</b>'],
		['Not a repeal', '<b>Dust · Drift · Duplicates · Dragnet clause · Different words.</b>'],
		['Penal vs. tax repeal', '"<b>Crime repealed → case dismissed. Tax repealed → assessment still owed.</b>"'],
		['Revival', '<b>Void → never repealed · Express → stays dead · Implied → comes back.</b>']
	],
	flashcards: [
		['Art. 7, Civil Code, first sentence?', 'Laws are repealed only by subsequent ones; disuse, custom or contrary practice does not excuse their violation.'],
		['Express repeal?', 'A repealing clause identifying a specific law by number or title.'],
		['Is a general repealing clause an express repeal?', 'No (<i>Mecano</i>; <i>Magtajas</i>).'],
		['Two categories of implied repeal?', 'Irreconcilable conflict; later law covering the whole subject as a substitute.'],
		['Four requisites of implied repeal by inconsistency?', 'Same subject; cannot be harmonized; both cannot be given effect; same object.'],
		['Omitted provisions of a revised code?', 'Deemed repealed only if the code covers the whole subject and replaces the old law (<i>Mecano</i>).'],
		['What survived in <i>Mecano</i>?', 'Sec. 699 of the 1917 Revised Administrative Code (medical reimbursement).'],
		['Effect of an unconstitutional amendment?', 'The original law remains in force.'],
		['Effect of total repeal of a penal law on pending cases?', 'Dismissal, unless reenacted or there is a saving clause.'],
		['Effect of repeal of a tax law on assessed taxes?', 'Still collectible unless the repealing law says otherwise.'],
		['Expiration of a temporary law during a pending case?', 'Does not divest jurisdiction or make the act legal.'],
		['Simultaneous repeal and reenactment?', 'Pending prosecutions continue; more favorable penalty applies.'],
		['Express repealing law repealed: first law revived?', 'No, unless expressly provided.'],
		['Implied repealing law repealed: first law revived?', 'Generally yes, unless otherwise provided (verify).'],
		['Does repeal invalidate acts done under the old law?', 'No; repeal is prospective.'],
		['How much of the Civil Service Law did the PPA Charter repeal in <i>Corona</i>?', 'Only the inconsistent part (original stage); appellate jurisdiction survived.']
	],
	recall: [
		['State the five rules on construing an amended statute.', 'Read together; amendment as if always there; unchanged parts stay; omitted parts repealed; retained parts continue the old law.'],
		['What are the two categories of implied repeal?', 'Irreconcilable conflict; whole-subject substitution.'],
		['List the four requisites of implied repeal by inconsistency.', 'Same subject; cannot be harmonized; both cannot be given effect; same object.'],
		['Why was the LGC\'s Sec. 534(f) not enough in Magtajas?', 'It is a general clause, not an express repeal; P.D. 1869 was not in the specific list; implied repeal was not shown.'],
		['Why did Sec. 699 survive in Mecano?', 'General repealing clause; no conflict; the 1987 Code did not cover the whole subject.'],
		['Name five things that do not repeal a law.', 'Disuse/custom; changed conditions; same subject alone; general repealing clause alone; different wording.'],
		['Contrast repeal of penal and tax laws.', 'Penal: pending cases dismissed (save reenactment/saving clause). Tax: assessed taxes still collectible.'],
		['What is the effect of simultaneous repeal and reenactment?', 'Pending prosecutions continue.'],
		['When is a repealed law revived?', 'If the repealing law is void; if the first repeal was implied and the repealing law is repealed; or if expressly provided.'],
		['Is repeal retroactive?', 'No; acts done under the old law remain valid and vested rights survive.']
	],
	summary: {
		rules: [
			'Amendments and repeals by implication are disfavored.',
			'Amended statutes are read with the original; omitted parts of amended sections are repealed; amendments are prospective.',
			'Omissions from a code repeal only if the code replaces the whole subject (<i>Mecano</i>).',
			'Express repeal names the law; a general repealing clause does not (<i>Mecano</i>; <i>Magtajas</i>).',
			'Implied repeal: conflict (four requisites) or substitution.',
			'Repeal is prospective; vested rights survive; tax assessments survive; penal prosecutions end unless reenacted or saved.',
			'Void repealing law: no repeal. Repeal of express repealer: no revival. Repeal of implied repealer: revival.'
		],
		distinctions: ['Amendment vs. repeal.', 'Express vs. implied repeal.', 'Conflict vs. substitution.', 'Penal vs. tax repeal.', 'Repeal vs. expiration.', 'Complete vs. partial code.'],
		cases: ['<i>Magtajas</i>: general repealing clause; implied repeal disfavored.', '<i>Corona</i>: partial implied repeal by a later special law.', '<i>Mecano</i>: omitted provision survives a partial code.', '<i>Hagad</i>; <i>Ty v. Trampe</i>: no implied repeal.'],
		traps: ['"General clause = express repeal."', '"Every omission = repeal."', '"Disuse repeals."', '"Repeal voids past acts."', '"Repealing the repealer always revives."']
	},
	checklist: [
		'I can state the rules for construing an amended statute and its effects.',
		'I can explain when omitted provisions in a code are repealed, using <i>Mecano</i>.',
		'I can distinguish express from implied repeal and explain why a general repealing clause is not express.',
		'I can state the two categories and four requisites of implied repeal.',
		'I can list the effects of repeal and contrast penal and tax laws.',
		'I can state the revival rules.',
		'I can explain how <i>Magtajas</i> and <i>Corona</i> treated repeal.'
	],
	watchFor: `<strong>Watch for: was it really a repeal?</strong>
<ul>
<li>A general repealing clause is not an express repeal; implied repeal needs a clear, irreconcilable conflict or a whole-subject substitute (<i>Mecano</i>; <i>Magtajas</i>).</li>
<li>Omissions from a code repeal only if the code replaces the whole subject.</li>
<li>Penal law repealed → pending cases dismissed (unless reenacted or saved); tax law repealed → assessed taxes still collectible.</li>
</ul>`
};
