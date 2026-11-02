/*
 * Integrated comprehensive examination (Chapters VI–XI). Kept separate from the chapter practice sets:
 * every item here needs doctrines from more than one chapter (or one of the five cases read across chapters).
 */
import { h3, h4, renderAnswer, renderQuestion, type Practice } from './model';

interface Part {
	title: string;
	note: string;
	items: Practice[];
}

export const examParts: Part[] = [
	{
		title: 'Part I — Enumeration with brief discussion',
		note: 'Give the complete list, then one or two sentences on each item.',
		items: [
			{
				cat: 'A',
				level: 3,
				topic: 'Pari materia & implied repeal',
				chapters: 'Chs. VI & X',
				q: 'Enumerate (a) the tests for statutes in pari materia and (b) the requisites of implied repeal by irreconcilable inconsistency. Explain how the first list relates to the second.',
				short: '(a) Same person or thing; same purpose or object; same specific subject matter (alternative tests, §6.15). (b) Same subject matter; clear inconsistency that cannot be harmonized; both cannot be given effect; same object or purpose (cumulative, §10.20). Relation: being <i>in pari materia</i> is the gateway to both harmonization and implied repeal. Laws on the same subject must first be read together and harmonized (Ch. VI); only if harmonization fails, and the remaining requisites are met, is there an implied repeal (Ch. X).',
				keys: 'alternative vs. cumulative; same subject is common; harmonize first'
			},
			{
				cat: 'A',
				level: 3,
				topic: 'Favoring the accused',
				chapters: 'Chs. VII & IX',
				q: 'Enumerate the rules under which statutes are construed or applied in favor of the accused, stating for each whether the technique is strict construction, liberal construction or retroactive application.',
				short: '(1) Penal statutes: <b>strictly</b> construed against the State and for the accused (§7.07). (2) Amnesty proclamations: <b>liberally</b> construed for those claiming amnesty (§7.33). (3) Statutes on prescription of crimes: <b>liberally</b> construed for the accused (§7.34; <i>People v. Moran</i>). (4) Penal laws favorable to the accused: <b>retroactive</b>, even after final judgment, except to habitual criminals (Art. 22, RPC; §9.09). (5) Unfavorable penal laws: <b>prospective only</b> (ex post facto clause, Art. III, Sec. 22).',
				keys: 'strict (penal); liberal (amnesty, prescription); retroactive (favorable, Art. 22); prospective (unfavorable)'
			},
			{
				cat: 'A',
				level: 3,
				topic: 'Periods to decide',
				chapters: 'Chs. VIII & XI',
				q: 'Enumerate the constitutional periods for deciding cases, and explain whether they are mandatory or directory.',
				short: 'Supreme Court: 24 months; lower collegiate courts: 12 months unless reduced by the Supreme Court; other lower courts: 3 months (Art. VIII, Sec. 15(1)); Constitutional Commissions: 60 days (Art. IX-A, Sec. 7). Constitutional provisions are presumed mandatory (§11.14), and Sec. 15 itself calls the periods "mandatory." But Sec. 15(4) commands the court to decide even after the period, without prejudice to responsibility. So the periods are mandatory as to the duty and possible sanctions, but directory as to the validity of a late decision (§§8.22–8.23).',
				keys: '24/12/3; 60 days; presumed mandatory; Sec. 15(4); late decision valid'
			},
			{
				cat: 'A',
				level: 3,
				topic: 'Effects of repeal',
				chapters: 'Chs. IX & X',
				q: 'Enumerate the effects of the repeal of a statute, and identify which of them express the rule that laws operate prospectively.',
				short: '(1) Inoperative from the repeal\'s effectivity; (2) acts done under the old law remain valid; (3) vested rights survive; (4) contracts keep their terms; (5) pending actions founded on the law are defeated, save vested rights or a saving clause; (6) jurisdiction already acquired continues; (7) assessed taxes remain collectible; (8) total repeal of a penal law ends prosecutions, save reenactment or saving clause. Items 1–4, 6 and 7 express prospectivity (Art. 4, Civil Code; §9.10): the repeal does not reach back to undo what was done or acquired. Item 8 reflects the favorable-retroactivity principle for penal laws (Art. 22, RPC).',
				keys: 'list of effects; prospective items; Art. 22 link for penal repeal'
			},
			{
				cat: 'A',
				level: 3,
				topic: 'Maxims',
				chapters: 'Chs. VI & XI',
				q: 'Enumerate the three maxims of constitutional construction and match each with its counterpart rule of statutory construction.',
				short: '(1) <b>Verba legis</b>: ordinary meaning of the words (counterpart: the plain-meaning rule, Ch. IV). (2) <b>Ratio legis est anima</b>: framers\' intent where ambiguous (counterpart: construction according to legislative intent and spirit, Chs. III–IV). (3) <b>Ut magis valeat quam pereat</b>: the Constitution read as a whole (counterpart: statute construed as a whole and <i>interpretatio fienda est ut res magis valeat quam pereat</i>, Ch. VI).',
				keys: 'verba legis / plain meaning; ratio legis / intent; ut magis valeat / whole statute'
			}
		]
	},
	{
		title: 'Part II — Compare and contrast',
		note: 'Identify the decisive difference and why it matters.',
		items: [
			{
				cat: 'B',
				level: 3,
				topic: 'Harmonization vs. implied repeal',
				chapters: 'Chs. VI & X',
				q: 'Distinguish the harmonization of statutes in pari materia from implied repeal. Use Corona or Magtajas.',
				short: '<b>Harmonization</b> reads two laws on the same subject so that <i>both</i> operate (Ch. VI). <b>Implied repeal</b> concludes that one law has ended to the extent it cannot be reconciled with the other (Ch. X). Harmonization comes first, because the legislature is presumed to know existing laws and implied repeals are disfavored. In <i>Magtajas</i>, the LGC and P.D. 1869 were harmonized: LGUs may suppress gambling except gambling authorized by statute. In <i>Corona</i>, the Court described the PPA Charter\'s effect as a partial implied repeal <i>or</i> an exception grafted onto the Civil Service Law, and then harmonized the two into original and appellate stages.',
				keys: 'both operate vs. one ends; harmonize first; Magtajas; Corona'
			},
			{
				cat: 'B',
				level: 3,
				topic: 'Penal statutes',
				chapters: 'Chs. VII & IX',
				q: 'Distinguish the strict construction of penal statutes from the retroactive application of penal laws favorable to the accused.',
				short: '<b>Strict construction</b> (Ch. VII) concerns the <i>scope</i> of a penal law: doubt about whether conduct or persons are covered is resolved for the accused, within the limits of the law\'s purpose (<i>Purisima</i>). <b>Favorable retroactivity</b> (Ch. IX, Art. 22, RPC) concerns <i>time</i>: a later penal law that helps the accused applies to acts before it, even after final judgment, except to habitual criminals. One narrows the reach of the law; the other extends a benefit backward in time.',
				keys: 'scope vs. time; Purisima; Art. 22; habitual criminals'
			},
			{
				cat: 'B',
				level: 3,
				topic: 'Mandatory provisions',
				chapters: 'Chs. VIII & XI',
				q: 'Compare how courts decide whether a statutory provision is mandatory with how they treat constitutional provisions.',
				short: 'For <b>statutes</b>, there is no presumption: the test is legislative intent read through the consequences of each reading (§§8.03–8.04), and "shall" may become "may." For the <b>Constitution</b>, provisions are presumed mandatory and are directory only when that is unmistakably manifest (§11.14), because the sovereign speaks in it. Even so, the Constitution may itself fix the effect of non-compliance, as Art. VIII, Sec. 15(4) does for late decisions.',
				keys: 'no presumption vs. presumed mandatory; consequences test; Sec. 15(4)'
			},
			{
				cat: 'B',
				level: 4,
				topic: 'LGU powers',
				chapters: 'Chs. VII & XI',
				q: 'Compare the liberal construction of LGU powers under Sec. 5 of the LGC with the constitutional policy of local autonomy. Can either save an ordinance that conflicts with a national statute?',
				short: 'Sec. 5(a) LGC (Ch. VII) is a <b>rule of construction</b>: fair and reasonable doubt as to the existence of an LGU power is resolved in the LGU\'s favor. Local autonomy (Art. II, Sec. 25; Art. X) is a <b>constitutional policy</b> that reduces, but does not remove, Congress\'s control over LGUs (Ch. XI). Neither saves an ordinance that contravenes a statute: Sec. 5 needs doubt, and a clear statute leaves none; and LGUs exercise delegated power, so the delegate cannot be superior to the principal (<i>Magtajas</i>).',
				keys: 'rule of construction vs. constitutional policy; doubt; delegate not superior; Magtajas'
			}
		]
	},
	{
		title: 'Part III — Definitions and short answers',
		note: 'Two to four sentences each.',
		items: [
			{ cat: 'C', level: 2, topic: 'Repealing clause', chapters: 'Chs. VI & X', q: 'Why is a general repealing clause not an express repeal, and how does that relate to the duty to harmonize?', short: 'Because it does not identify any particular law; it only declares that whatever is inconsistent is repealed, leaving open which laws are inconsistent (<i>Mecano</i>; <i>Magtajas</i>). Any repeal under it must therefore be shown as an implied repeal, which is disfavored, so the court must first try to harmonize the laws (Ch. VI) and find a repeal only if they are irreconcilable.', keys: 'does not identify law; implied repeal; harmonize first' },
			{ cat: 'C', level: 2, topic: 'Penal repeal', chapters: 'Chs. IX & X', q: 'What is the effect of the total repeal of a penal law on a pending prosecution, and how is that consistent with Art. 22 of the RPC?', short: 'The prosecution must be dismissed, unless the offense is reenacted or there is a saving clause (§10.38). This is consistent with Art. 22, which gives retroactive effect to penal laws favorable to the accused: decriminalization is the most favorable change possible, so the accused benefits from it.', keys: 'dismissal; reenactment/saving clause; Art. 22 favorable retroactivity' },
			{ cat: 'C', level: 2, topic: 'Strict vs. mandatory', chapters: 'Chs. VII & VIII', q: 'Is a statute that is strictly construed necessarily mandatory? Explain.', short: 'Not necessarily. Strict construction concerns how far a statute reaches (Ch. VII); mandatory character concerns the effect of non-compliance (Ch. VIII). They often coincide, since conditions of privileges are strictly construed and the steps to avail of a benefit are mandatory (§§7.15, 8.11), but a strictly construed penal statute may contain directory provisions on how officers proceed.', keys: 'reach vs. effect of non-compliance; often coincide; privileges; benefits' },
			{ cat: 'C', level: 2, topic: 'Saving construction', chapters: 'Chs. VI & XI', q: 'What is the "saving construction" rule, and how does it reflect the supremacy of the Constitution?', short: 'If a statute is fairly susceptible of two readings, one making it unconstitutional, the court adopts the reading that keeps it valid (§6.14; <i>Garcia v. COMELEC</i>). It reflects constitutional supremacy (Art. 7, par. 2, Civil Code; Ch. XI): the legislature is presumed to have legislated within the Constitution, so the reading consistent with the fundamental law is presumed intended. But a clear unconstitutional text cannot be rewritten; it is void.', keys: 'two readings; adopt valid; presumption of constitutionality; cannot rewrite' },
			{ cat: 'C', level: 2, topic: 'Procedure & deadlines', chapters: 'Chs. VIII & IX', q: 'Deadlines for litigants are mandatory, and new procedural rules apply to pending cases. Can a new rule shortening a filing period apply to a period already running?', short: 'Generally not if it would work injustice. Procedural laws apply to pending cases (§9.19), but not where application would be unfeasible or work injustice (§9.20). Because litigant deadlines are mandatory and fatal if missed (§8.13), shortening a period already running, without fair notice, would cause a party to lose a right through no fault of his own; the old period should govern that filing.', keys: 'procedural laws retroactive; injustice exception; mandatory deadlines' }
		]
	},
	{
		title: 'Part IV — True or false with justification',
		note: 'State TRUE or FALSE, give the governing rule, and correct the statement if false.',
		items: [
			{ cat: 'D', level: 3, topic: 'General & special laws', chapters: 'Chs. VI & X', q: 'A later general law always repeals an earlier special law on the same subject, because the later law expresses the latest legislative will.', tf: false, a: 'A special law prevails over a general law whichever is later; a later general law does not repeal an earlier special law unless the legislature clearly intended it (§§6.20–6.22; <i>Magtajas</i>). <i>Leges posteriores</i> applies only to irreconcilable laws on the same footing.', keys: 'generalia specialibus; Magtajas; §6.22', tag: 'exceptions' },
			{ cat: 'D', level: 3, topic: 'Penal laws', chapters: 'Ch. IX', q: 'A penal law reducing the penalty may benefit a convict already serving sentence, while a law increasing the penalty cannot apply to crimes committed before it.', tf: true, a: 'Art. 22, RPC (favorable retroactivity, even after final judgment, except habitual criminals); Art. III, Sec. 22 (no ex post facto law).', keys: 'Art. 22 RPC; Art. III, Sec. 22', tag: 'effects' },
			{ cat: 'D', level: 3, topic: 'Tax laws', chapters: 'Chs. VII & X', q: 'Because tax exemptions are construed strictly against the taxpayer, the repeal of a tax law also wipes out taxes already assessed under it.', tf: false, a: 'The two rules are unrelated. Strict construction of exemptions (Ch. VII) concerns claims of exemption; the repeal of a tax law does not prevent collection of taxes assessed before the repeal unless the repealing law provides otherwise (§10.36).', keys: 'Agpalo §§7.20, 10.36', tag: 'effects' },
			{ cat: 'D', level: 3, topic: 'Same subject', chapters: 'Chs. VI & X', q: 'Statutes in pari materia need not refer to each other, and "same subject matter" is also the first requisite of implied repeal by irreconcilable inconsistency.', tf: true, a: 'The tests for <i>in pari materia</i> do not require cross-reference (§6.15), and same subject matter is the first of the four requisites in §10.20.', keys: 'Agpalo §§6.15, 10.20', tag: 'requisites' },
			{ cat: 'D', level: 3, topic: 'Self-executing', chapters: 'Ch. XI', q: 'Because constitutional provisions are presumed self-executing, the State policies in Article II can be enforced in court without legislation.', tf: false, a: 'The presumption yields where a provision is a statement of principle or policy. Art. II provisions are generally not self-executing (<i>Tañada v. Angara</i>; <i>Kilosbayan v. Morato</i>), though some have been enforced (<i>Oposa v. Factoran</i>).', keys: 'Tañada; Kilosbayan; Oposa', tag: 'exceptions' },
			{ cat: 'D', level: 3, topic: 'Docket fees', chapters: 'Chs. VII & VIII', q: 'Since the Rules of Court are liberally construed, the late payment of appellate docket fees may be excused as a matter of course.', tf: false, a: 'Liberal construction of the Rules (§7.37) does not excuse a mandatory and jurisdictional requirement; payment within the appeal period is mandatory for perfecting an appeal (§8.13; <i>Enriquez</i>). Relaxation is exceptional, for compelling reasons.', keys: 'Rule 1, Sec. 6; Rule 41, Sec. 4; Enriquez', tag: 'exceptions' },
			{ cat: 'D', level: 3, topic: 'Retroactive laws', chapters: 'Ch. IX', q: 'Curative and procedural statutes may be given retroactive effect, but as a rule neither may impair vested rights.', tf: true, a: 'Both may be retroactive (§§9.19, 9.21) and both are limited by vested rights (§§9.20, 9.21), subject to the police-power qualification for remedial or curative statutes with clearly retrospective intent (§§9.22–9.23).', keys: 'Agpalo §§9.19–9.23', tag: 'effects' },
			{ cat: 'D', level: 3, topic: 'Ordinances', chapters: 'Chs. VII & XI', q: 'An ordinance enacted under the general welfare clause prevails over a national statute because of the constitutional policy of local autonomy.', tf: false, a: 'An ordinance must not contravene a statute; the delegate cannot be superior to the principal, and local autonomy does not remove Congress\'s control (<i>Magtajas</i>).', keys: 'Magtajas v. Pryce', tag: 'jurisprudence' },
			{ cat: 'D', level: 3, topic: 'Codification', chapters: 'Ch. X', q: 'Omitted provisions of a revised code are deemed repealed only when the revision covers the whole subject, which mirrors the second category of implied repeal.', tf: true, a: 'Both the codification rule (§10.13) and implied repeal by substitution (<i>Mecano</i>) require that the new law cover the whole subject and be intended as a substitute.', keys: 'Mecano; §10.13', tag: 'requisites' },
			{ cat: 'D', level: 3, topic: 'Overruling', chapters: 'Ch. IX', q: 'When the Supreme Court overrules a doctrine, the new doctrine applies to acts done before it, because judicial interpretations form part of the law from the date of enactment.', tf: false, a: 'That rule (Art. 8, Civil Code; <i>legis interpretatio legis vim obtinet</i>) covers a first interpretation. An overruling is a change and applies prospectively, protecting good-faith reliance on the old doctrine (<i>Jabinal</i>; <i>Co v. CA</i>).', keys: 'Jabinal; Co v. CA; Art. 8', tag: 'jurisprudence' }
		]
	},
	{
		title: 'Part V — Hypothetical problems (ALAC)',
		note: 'Answer each using ALAC. Each problem needs rules from more than one chapter.',
		items: [
			{
				cat: 'E',
				level: 4,
				topic: 'Special v. general; repeal',
				chapters: 'Chs. VI & X',
				title: 'Integrated — The irrigation district permits',
				facts: 'R.A. No. 13100 (hypothetical, 2012) created the Ilocos Irrigation District and authorized its Board to issue water-extraction permits "within the District." In 2024, Congress enacted the (hypothetical) Water Resources Code, a general law providing that "all water-extraction permits shall be issued by the National Water Board," with a final clause: "All laws inconsistent herewith are repealed or modified accordingly." The Code does not mention R.A. No. 13100. In 2026 a farmer obtains a permit from the District Board. The National Water Board declares it void.',
				q: 'Is the District Board\'s permit valid? Answer using ALAC.',
				alac: {
					answer: 'Yes. R.A. No. 13100, a special law, was not repealed by the later general Code and remains an exception to it.',
					legalBasis: 'Where a special and a general law on the same subject conflict, the special law prevails as an exception, whichever is later (<i>generalia specialibus non derogant</i>; Agpalo §§6.20–6.21). A later general law does not repeal an earlier special law absent clear legislative intent (§6.22; <i>Magtajas</i>, citing <i>Lichauco</i>). A general repealing clause is not an express repeal (<i>Mecano v. COA</i>), and implied repeals are disfavored (§10.20).',
					application: 'Both laws govern water-extraction permits, so they are <i>in pari materia</i> and must be harmonized. The Code treats permits generally for the whole country; R.A. No. 13100 treats them particularly for one district. The Code\'s repealing clause names no law and shows no clear intent to abolish the District\'s authority. Harmonized, the National Water Board issues permits generally, and the District Board issues permits within the District.',
					conclusion: 'The farmer\'s permit is valid.'
				},
				weaker: '"Later law prevails" would reverse <i>Magtajas</i>; it applies only where the laws are on the same footing and irreconcilable.'
			},
			{
				cat: 'E',
				level: 4,
				topic: 'Procedure & time',
				chapters: 'Chs. VIII & IX',
				title: 'Integrated — The shortened brief period',
				facts: 'On March 1, Atty. Cruz received notice to file the appellant\'s brief within 45 days under the rules then in force. On March 20, new rules took effect shortening the period to 30 days from notice; they are silent on periods already running. Relying on the 45-day period, Atty. Cruz filed on April 10 (day 40). The appellee moves to dismiss the appeal for late filing under the new rules.',
				q: 'Should the appeal be dismissed? Answer using ALAC.',
				alac: {
					answer: 'No. Applying the shortened period to a period already running would work injustice; the brief filed within the original 45 days should be admitted.',
					legalBasis: 'Procedural rules apply to pending cases because no one has a vested right in procedure (Agpalo §9.19), but not where application would be unfeasible or would work injustice (§9.20). Litigant deadlines are mandatory, and missing them is fatal (§8.13). Laws are presumed prospective (Art. 4, Civil Code).',
					application: 'As a procedural rule, the new rule reaches pending cases, so it governs periods that begin after March 20. Atty. Cruz\'s period began on March 1 under a 45-day rule. Applying the 30-day rule would have made the brief due on March 31, eleven days after the new rule took effect, cutting off a right counsel was entitled to rely on. Because a missed litigant deadline is fatal, this is the injustice the §9.20 exception guards against. Applying the 45-day period to this running period respects both the general application of the new rules and fairness.',
					conclusion: 'The motion to dismiss should be denied, and the brief admitted.'
				},
				weaker: 'Applying the new rule mechanically to a period already running ignores the injustice exception in §9.20. Had the rules expressly said they shorten periods already running, the question would be closer, and fair notice and due process would be the argument.'
			},
			{
				cat: 'E',
				level: 4,
				topic: 'Repeal & reenactment',
				chapters: 'Chs. VII, IX & X',
				title: 'Integrated — The reenacted offense with a heavier penalty',
				facts: 'In 2025 Dodong allegedly violated the (hypothetical) Wildlife Trade Act, which punished the sale of protected birds with up to one year of imprisonment. In 2026, while his case was pending, Congress repealed the Act and, in the same law, reenacted the identical offense with a penalty of five to seven years. Dodong moves to dismiss, invoking the repeal; the prosecution asks for the new penalty.',
				q: 'Should the case be dismissed? If not, what penalty applies? Answer using ALAC.',
				alac: {
					answer: 'The case should not be dismissed, but only the old penalty (up to one year) may be imposed.',
					legalBasis: 'Total repeal of a penal law ends pending prosecutions unless the repealing act reenacts the offense or has a saving clause; simultaneous repeal and reenactment keeps pending prosecutions alive (Agpalo §§10.37–10.38). No ex post facto law may be enacted, and a law imposing a greater punishment than the law annexed to the crime when committed is ex post facto (Art. III, Sec. 22; §9.07). Penal statutes are construed strictly against the State (§7.07).',
					application: 'The same law that repealed the Act reenacted the identical offense, so there was no moment when selling protected birds ceased to be a crime; the prosecution survives. But the new five-to-seven-year penalty is heavier than the one-year maximum in force in 2025. Applying it to Dodong\'s 2025 act would inflict a greater punishment than the law annexed when the crime was committed, which is ex post facto. Only the old, lighter penalty applies.',
					conclusion: 'Deny the motion to dismiss; if Dodong is convicted, the penalty may not exceed one year.'
				},
				weaker: 'The prosecution\'s position ignores that the reenactment saves the case but cannot make a heavier penalty retroactive.'
			},
			{
				cat: 'E',
				level: 4,
				topic: 'Constitution v. statute',
				chapters: 'Chs. VI & XI',
				title: 'Integrated — The narrowing statute',
				facts: 'A (hypothetical) law "implementing" Art. XII, Sec. 10, par. 2 of the Constitution provides: "The preference for qualified Filipinos shall apply to bids involving natural resources." The government sells, by public bidding, majority shares in a corporation owning a 19th-century heritage theater. A foreign bidder wins; a qualified Filipino bidder offers to match and invokes the Constitution. The government says the statute limits the preference to natural resources.',
				q: 'May the Filipino bidder invoke the preference? Answer using ALAC.',
				alac: {
					answer: 'Yes. The constitutional preference applies to the national patrimony, which includes cultural heritage, and the statute cannot curtail it.',
					legalBasis: 'Art. XII, Sec. 10, par. 2 is self-executing, and "patrimony" includes cultural heritage (<i>Manila Prince Hotel v. GSIS</i>; Agpalo §11.17). Congress may legislate to enforce a self-executing provision but not to curtail it. A statute is construed in harmony with the Constitution; if fairly susceptible of a reading that avoids unconstitutionality, that reading is adopted (§6.14). A law inconsistent with the Constitution is void (Art. 7, par. 2, Civil Code).',
					application: 'The statute can be read as confirming that the preference applies to natural resources without excluding other patrimony. That reading keeps it constitutional and must be adopted. If instead it is read as confining the preference to natural resources, it curtails a self-executing constitutional command and is void to that extent. Either way, the heritage theater is part of the patrimony, as the Manila Hotel was, and the Filipino bidder who matches the winning bid is entitled to the preference.',
					conclusion: 'The shares should be awarded to the qualified Filipino bidder upon matching the winning bid.'
				},
				weaker: 'The government\'s reading lets a statute shrink a self-executing constitutional right, the result the presumption of self-execution exists to prevent.'
			}
		]
	},
	{
		title: 'Part VI — Case-based questions (across chapters)',
		note: 'Answer from the decision, then name each chapter\'s rule at work.',
		items: [
			{ cat: 'F', level: 3, topic: 'Catiis', chapters: 'Chs. VI & VIII', q: 'Explain Catiis v. CA using a Chapter VI rule and a Chapter VIII rule together.', short: '<b>Ch. VI:</b> Sec. 1, P.D. 1689 is read as a whole; "any person or persons" is qualified by the definition of a syndicate as five or more persons and by the "as above defined" clause, so four accused fall under the second paragraph. <b>Ch. VIII:</b> Rule 110, Secs. 8–9 require aggravating circumstances to be alleged and attach a consequence (they cannot be considered if not alleged), the mark of a mandatory requirement. Together: the second paragraph applies, the maximum cannot be imposed, so only reclusion temporal is possible and bail is a matter of right.', keys: 'whole statute; definition; mandatory pleading rule; bail' },
			{ cat: 'F', level: 3, topic: 'Aquino', chapters: 'Chs. VI & VIII', q: 'Explain how Chapter VI and Chapter VIII rules interacted in Aquino v. Quezon City.', short: '<b>Ch. VI:</b> reading Secs. 65 and 67 and the arrangement of the collection chapter, the notice of delinquency is a prerequisite to every remedy, including sale. <b>Ch. VIII:</b> that notice is mandatory ("as required"), and public auction procedures must be strictly followed; but its purpose, direct notice to the owner in an <i>in personam</i> proceeding, was met by registered mail, so posting and publication were not indispensable. Sec. 73 was applied as written: sending, not receipt.', keys: 'Secs. 65/67; mandatory notice; purpose achieved; no actual receipt' },
			{ cat: 'F', level: 4, topic: 'Manila Lodge', chapters: 'Chs. VI & VII', q: 'How did the rule against surplusage (Ch. VI) and strict construction of public grants (Ch. VII) reinforce each other in Manila Lodge? Would Sec. 5(a) of the 1991 LGC change the result today?', short: 'The anti-surplusage rule showed that "hereby authorized ... to sell" the north end would be pointless if the land were already disposable, so the land was not patrimonial. Strict construction of a public grant (filled at Insular expense) then confined the City\'s authority to what was expressly granted, making the <i>expressio unius</i> inference "more imperative." Sec. 5(a) would not change the result: it liberally construes LGU <i>powers</i> in case of doubt, but this was a grant of <i>property</i>, still strictly construed (§7.16), and the statute\'s words left no doubt.', keys: 'surplusage; strict construction of grant; expressio unius; property vs. power' },
			{ cat: 'F', level: 4, topic: 'Corona', chapters: 'Chs. VI & X', q: 'In Corona, the Court said the PPA Charter operated as a partial implied repeal of, or an exception grafted onto, the Civil Service Law. Which characterization fits better, and does it matter?', short: 'Both describe the same result: the general law no longer governs the specific matter (original jurisdiction over PPA personnel below Assistant GM) but continues to govern everything else, including appeals. "Exception grafted onto the general law" (Ch. VI, <i>generalia specialibus</i>) fits the harmonized two-stage outcome slightly better, because the Civil Service Law keeps operating at the appellate stage; "partial implied repeal" (Ch. X) emphasizes that only the inconsistent part yields. Practically, it does not matter: under either label, the special law controls only to the extent of the inconsistency.', keys: 'exception vs. partial repeal; same result; extent of inconsistency' },
			{ cat: 'F', level: 5, topic: 'Magtajas', chapters: 'Chs. VI, VII, X & XI', q: 'Explain Magtajas v. Pryce using one rule each from Chapters VI, VII, X and XI.', short: '<b>Ch. VI:</b> the LGC (general) and P.D. 1869 (special) are harmonized; LGUs may suppress all gambling except that authorized by statute. <b>Ch. VII:</b> the LGC\'s liberal-construction rule for LGU powers needs doubt, and the clear phrase "prohibited games of chance" left none. <b>Ch. X:</b> Sec. 534(f) is a general repealing clause, not an express repeal; P.D. 1869 is absent from the specific list; implied repeal is disfavored, and later laws treat P.D. 1869 as alive. <b>Ch. XI:</b> local autonomy reduces but does not remove Congress\'s control; the delegate cannot be superior to the principal, and the Constitution does not prohibit gambling. Result: the ordinances are ultra vires and void.', keys: 'harmonization; liberal construction needs doubt; general repealing clause; local autonomy limited' }
		]
	},
	{
		title: 'Part VII — Integrated problems',
		note: 'Longer problems that need several doctrines. Organize your answer issue by issue.',
		items: [
			{
				cat: 'G',
				level: 5,
				topic: 'Tax exemption & repeal',
				chapters: 'Chs. VI, VII, IX & X',
				title: 'Integrated — The cooperative\'s VAT exemption',
				facts: 'R.A. No. 13200 (hypothetical, 2010), a special law on cooperatives, exempts "sales of goods by duly registered cooperatives to their members" from VAT. On January 1, 2025, a general tax reform law took effect providing: "All exemptions from value-added tax granted under special or general laws are hereby withdrawn, except those enumerated in Section 50 of this Act." Cooperative sales are not in Section 50. The law also contains a general repealing clause. Kooperatiba ng Bayan sold goods to its members in December 2024 and in February 2025. The BIR assesses VAT on both. The cooperative argues that (1) the special law prevails over the later general law; (2) tax laws are construed against the government; and (3) even if the exemption was withdrawn, it cannot reach the December 2024 sales.',
				q: 'Resolve each argument and state which sales are taxable. Answer using ALAC.',
				alac: {
					answer: 'The February 2025 sales are subject to VAT; the December 2024 sales are not.',
					legalBasis: 'A special law generally prevails over a later general law, but not where the legislature clearly intended the later general law to cover the whole subject and repeal inconsistent laws (Agpalo §6.22). Implied repeals are disfavored, but an express, specific withdrawal is not an implied repeal (§§10.17–10.20). Tax impositions are construed against the government, but tax exemptions are construed <i>strictissimi juris</i> against the claimant (§§7.19–7.20). Laws operate prospectively (Art. 4, Civil Code); amendments and repeals do not affect acts completed before their effectivity (§§10.07, 10.30).',
					application: '<b>Argument (1):</b> the tax reform law does more than state a general rule or rely on a general repealing clause. It expressly withdraws "all exemptions ... granted under special or general laws," except an enumerated list that does not include cooperatives. That is the clear intent to cover the whole subject and override special laws that §6.22 requires, so <i>generalia specialibus</i> does not save the exemption. <b>Argument (2):</b> the question is not whether a tax is imposed but whether an exemption survives; exemptions are construed against the claimant, and the cooperative points to no surviving grant. <b>Argument (3):</b> correct. The withdrawal took effect on January 1, 2025 and operates prospectively; the December 2024 sales were completed while the exemption was in force.',
					conclusion: 'VAT is due on the February 2025 sales only; the assessment on the December 2024 sales should be cancelled.'
				},
				weaker: 'The cooperative\'s first two arguments would be strong against a mere general repealing clause (as in <i>Magtajas</i>), but not against an express withdrawal that names "special laws" and lists its own exceptions.'
			},
			{
				cat: 'G',
				level: 5,
				topic: 'Constitution & time',
				chapters: 'Chs. VI, VIII, IX & XI',
				title: 'Integrated — The voiding statute',
				facts: 'A (hypothetical) 2026 statute provides: "Any decision of the Court of Appeals rendered beyond twelve months from submission shall be void. This Act shall apply to all decisions, including those already rendered." A party who lost in the CA in 2024, in a decision rendered 14 months after submission and already final, moves to annul it under the statute.',
				q: 'Is the statute valid, and may the 2024 decision be annulled? Discuss using ALAC.',
				alac: {
					answer: 'No. The statute is unconstitutional, and the 2024 decision may not be annulled.',
					legalBasis: 'The Constitution is read as a whole; Art. VIII, Sec. 15(4) provides that despite the expiration of the "mandatory period," the court "shall decide or resolve the case," without prejudice to responsibility (Agpalo §§11.13–11.14). A statute is construed in harmony with the Constitution only if fairly susceptible of a saving reading; a clear statute contrary to the Constitution is void (§6.14; Art. 7, par. 2, Civil Code). Retroactive laws may not divest vested rights, including rights embodied in a final judgment (§§9.05, 9.10).',
					application: 'The statute clearly declares late decisions void, contradicting Sec. 15(4), which commands the court to decide even after the period and preserves the validity of a late decision while leaving the justices accountable. The words leave no room for a saving construction, so the statute is void as inconsistent with the Constitution. Independently, the retroactivity clause would undo a final judgment rendered in 2024, divesting the winning party of a vested right.',
					conclusion: 'The motion to annul should be denied; the statute is void, and the 2024 decision stands.'
				},
				weaker: 'Treating the constitutional periods as jurisdictional ignores Sec. 15(4) and the rule that the Constitution is read as a whole.'
			},
			{
				cat: 'G',
				level: 5,
				topic: 'Ordinance v. special charter',
				chapters: 'Chs. VI, VII, X & XI',
				title: 'Integrated — The harbor vendors',
				facts: 'The (hypothetical) Metro Harbor Authority Charter (2000), a special law, gives the Authority "exclusive power to license and regulate vendors within the port zone." In 2026, Bayside City, invoking the general welfare clause (LGC Sec. 16), Sec. 5(a) of the LGC, and local autonomy, enacts an ordinance banning all vendors within the port zone, which lies inside city limits, and orders the Authority\'s licensed vendors removed. The city argues that the LGC is the controlling later law and that its general repealing clause repealed any inconsistent charter provision.',
				q: 'Is the ordinance valid as applied to the port zone? Discuss using ALAC.',
				alac: {
					answer: 'No. As applied to the port zone, the ordinance is ultra vires and void.',
					legalBasis: 'An ordinance must not contravene a statute; LGUs exercise delegated power, and the delegate cannot be superior to the principal; local autonomy does not remove Congress\'s control (<i>Magtajas</i>; Ch. XI). A special law prevails over a general law on the same subject, and a general law (or general repealing clause) does not repeal a special law absent clear intent (§§6.20–6.22; <i>Mecano</i>; <i>Magtajas</i>). Liberal construction of LGU powers (Sec. 5(a)) resolves doubt only; it does not override a statute (Ch. VII).',
					application: 'The Charter speaks particularly and exclusively to vendor regulation within the port zone; the LGC speaks generally of LGU powers. They are harmonized: the city regulates vendors generally, except in the port zone, where the Authority\'s exclusive power governs. The LGC\'s general repealing clause does not name the Charter and shows no clear intent to repeal it. On the city\'s "later law" point: the LGC (1991) is actually <i>earlier</i> than the Charter (2000), so even <i>leges posteriores</i> favors the Charter; and a later general law would not repeal an earlier special law absent clear intent anyway. Sec. 5(a) and local autonomy cannot authorize an ordinance that contravenes a national statute.',
					conclusion: 'The ordinance cannot be enforced in the port zone; it remains valid elsewhere in the city to the extent consistent with law.'
				},
				weaker: 'The city\'s three arguments (later law, liberal construction, local autonomy) are the three arguments rejected in <i>Magtajas</i>.'
			}
		]
	}
];

export const examItems = (): Practice[] => examParts.flatMap((p) => p.items);

export function renderIntegratedExam() {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="integrated-exam">Integrated Comprehensive Examination — Chapters VI–XI</h2>`);
	out.push(
		`<p class="sg-intro">Every item needs rules from more than one chapter, or a case read across chapters; the chapter tag on each question tells you which. The answer key is a separate section below.</p>`
	);
	let n = 0;
	const numbered = examParts.map((part) => ({ part, items: part.items.map((x) => ({ num: `X.${++n}`, x })) }));
	out.push(h3('integrated-questions', 'Questions'));
	for (const { part, items } of numbered) {
		out.push(h4(part.title), `<p class="sg-intro">${part.note}</p>`);
		out.push(...items.map(({ num, x }) => renderQuestion(num, x)));
	}
	out.push(h3('integrated-answers', 'Answer key and model answers'));
	out.push(`<p class="sg-intro">Each answer names the chapters involved. "Must-have keywords" are what an examiner looks for.</p>`);
	for (const { part, items } of numbered) {
		out.push(h4(part.title));
		out.push(...items.map(({ num, x }) => renderAnswer(num, x)));
	}
	return out.join('\n');
}
