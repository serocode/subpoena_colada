/*
 * Five-case mastery section. Facts, issues and rulings are digested from the full texts summarized in
 * "StatCon_Case_Digests_october.pdf" (LawPhil copies). Nothing here adds facts beyond those digests.
 */
import type { CaseDigest, McqQuestion } from '$lib/types';
import { badge, box, CASE_NAMES, dl, h3, h4, ol, p, plain, renderQuestionWithReveal, table, ul, type CaseId, type Practice } from './model';

export interface CaseStudy {
	id: CaseId;
	short: string;
	title: string;
	gr: string;
	date: string;
	court: string;
	parties: string;
	nature: string;
	chapters: string;
	doctrine: string;
	question: string;
	principle: string;
	timeline: [string, string, string][];
	facts: string;
	args: string;
	issues: { q: string; v: 'YES' | 'NO'; a: string }[];
	disposition: string;
	extra?: string;
	ratio: { doctrine: string; plain: string; wording: string; why: string; rejected: string; lesson: string };
	beginner: { oneLine: string; issue: string; answer: string; analogy: string; memorize: string; misconception: string };
	card: { facts: string; issues: string; ruling: string };
	recitation: [string, string][];
	exam: Practice[];
	quick: { facts: string; issue: string; ruling: string; doctrine: string; reasoning: string; cue: string };
	matrix: { central: string; rule: string; reasoning: string; distinguishing: string };
}

export const cases: CaseStudy[] = [
	/* ------------------------------------------------------------------ CATIIS */
	{
		id: 'catiis',
		short: 'Catiis',
		title: 'Regino Sy Catiis v. Court of Appeals, et al.',
		gr: 'G.R. No. 153979',
		date: 'February 6, 2006',
		court: 'First Division · Austria-Martinez, J. (Panganiban, C.J., Ynares-Santiago, Chico-Nazario, JJ., concur; Callejo, Sr., J., took no part)',
		parties: 'Regino Sy Catiis (complainant, petitioner) v. Court of Appeals (17th Division); Reynaldo A. Patacsil, Enrico D. Lopez, Luzviminda A. Portuguez (accused, private respondents); BJMP-NCR Makati City Jail Warden.',
		nature: 'Petition for review on certiorari (Rule 45) of a CA decision that dismissed a Rule 65 petition against orders granting bail and approving surety bonds.',
		chapters: 'Ch. VI (direct: statute as a whole) · Ch. VII (strict construction of penal laws — not invoked) · Ch. VIII (Rule 110 states its own consequence — supporting) · Ch. XI (bail — light)',
		doctrine: 'A statute is read as a whole; one portion may be qualified by another; a statutory definition controls (verba legis).',
		question: 'May fewer than five persons be charged with syndicated estafa under Sec. 1, P.D. 1689 (life imprisonment to death), so that the offense is non-bailable?',
		principle: '"Any person or persons" in Sec. 1 is qualified by the definition of "syndicate" (five or more persons) in the same sentence; four accused cannot commit syndicated estafa.',
		timeline: [
			['1 · May 28, 2001', 'Catiis files a letter-complaint for syndicated estafa (Art. 315(2)(a), RPC, in relation to P.D. 1689) against Patacsil, Lopez, Portuguez and Tafalla.', 'Begins prosecution under the heavier, syndicate-based penalty.'],
			['2 · Oct. 10, 2001', 'Assistant City Prosecutor finds probable cause and recommends no bail. The Information, filed the same day, names only four accused but alleges they acted "in a syndicated manner consisting of five (5) or more persons." No aggravating circumstance is alleged.', 'The Court later measured these allegations against the statutory definition.'],
			['3 · Nov. 7, 2001', 'Judge Bersamin (RTC Quezon City, Br. 96) finds probable cause, approves the no-bail recommendation, issues warrants.', 'The offense is first treated as non-bailable.'],
			['4 · Nov. 12 & 20, 2001', 'Accused move to fix bail; they plead not guilty; the prosecution opposes.', 'The bail issue is joined.'],
			['5 · Dec. 18, 2001', 'Judge Bersamin reconsiders: four persons cannot be a syndicate; the second paragraph of Sec. 1 applies; with no aggravating circumstance, only reclusion temporal is imposable. Bail fixed at ₱150,000 each.', 'The construction the Supreme Court later affirmed.'],
			['6 · Dec. 21, 2001', 'Executive Judge Zenarosa approves the surety bonds; the accused are released.', 'Raises the Rule 114, Sec. 17(a) question.'],
			['7 · Dec. 26, 2001 – Jan. 14, 2002', 'Catiis files a Rule 65 petition in the CA; Justice Callejo, Sr. issues a TRO; a supplemental petition attacks the Executive Judge\'s authority.', 'Both orders are challenged.'],
			['8 · June 14, 2002', 'The CA dismisses the petition: no grave abuse of discretion by either judge.', 'Leads to the Rule 45 petition.'],
			['9 · Feb. 6, 2006', 'The Supreme Court denies the petition and affirms the CA.', 'Doctrine settled.']
		],
		facts: `<p>Regino Sy Catiis complained that Reynaldo Patacsil, Enrico Lopez, Luzviminda Portuguez and Margielyn Tafalla induced him and others to deliver at least <b>US$123,461.14</b> by falsely representing that they were engaged in legitimate foreign-exchange trading through Asia Profits Philippines, Inc., Winggold Management Philippines, Inc., Belkin Management Consultancy, Inc. and/or Belkin Profits Limited. The prosecutor charged them with syndicated estafa under Art. 315(2)(a) of the RPC in relation to P.D. 1689 and recommended no bail.</p>
<p>The Information named <b>only four accused</b> but alleged that they conspired "in a syndicated manner consisting of five (5) or more persons." It alleged <b>no aggravating circumstance</b>. Under Sec. 1 of P.D. 1689, estafa committed by "a syndicate consisting of five or more persons" is punished by life imprisonment to death; when "not committed by a syndicate as above defined," the penalty is reclusion temporal to reclusion perpetua if the fraud exceeds ₱100,000.</p>
<p>Judge Bersamin first denied bail, then reconsidered and fixed bail. The accused (except Tafalla, who was at large) posted surety bonds before Executive Judge Zenarosa and were released the same day. The CA found no grave abuse of discretion, and Catiis came to the Supreme Court.</p>`,
		args: `<b>Petitioner (Catiis) argued:</b>${ul([
			'"Any person" in Sec. 1 should be read in the singular, so even one person may be indicted for syndicated estafa (citing <i>People v. Romero</i>).',
			'Bailability depends on the penalty <i>prescribed</i> by law, not the penalty that may be imposed; the judge prejudged the case by computing the imposable penalty.',
			'Bail was improperly filed with the Executive Judge, since Branch 96 and its judge were available.'
		])}`,
		issues: [
			{ q: 'Does "any person or persons" in Sec. 1, P.D. 1689 permit the prosecution of fewer than five persons, even one, for syndicated estafa punishable by life imprisonment to death?', v: 'NO', a: 'The phrase cannot be read apart from the definition of "syndicate" in the same sentence. Syndicated estafa requires five or more persons; reading "any person" alone to mean one person may be charged with it "is contrary to the provision of the law."' },
			{ q: 'Does an Information naming only four accused, but alleging that they acted "in a syndicated manner consisting of five (5) or more persons," sufficiently charge estafa by a syndicate?', v: 'NO', a: 'The allegation does not comply with the statutory definition. The accusatory portion charged only four persons and named no other participant; "if the government has chosen to indict only four persons, without more, the obvious reason is that only the persons actually charged were involved." The first paragraph does not apply.' },
			{ q: 'Is estafa under the second paragraph of Sec. 1 (reclusion temporal to reclusion perpetua) bailable as a matter of right where no aggravating circumstance is alleged?', v: 'YES', a: 'Under Rule 110, Secs. 8–9, aggravating circumstances must be specifically alleged or they cannot be considered even if proved (<i>People v. Casitas</i>; <i>People v. Bragat</i>). Only reclusion temporal is imposable, so bail is a matter of right (Art. III, Sec. 13; Rule 114, Sec. 4). The order did not prejudge the case; it rested only on the face of the Information.' },
			{ q: 'Did the Executive Judge validly approve the bail bonds under Rule 114, Sec. 17(a) although Branch 96 was open?', v: 'YES', a: 'The rule speaks of the judge\'s "absence or unavailability," not the branch\'s. That the branch was open does not show the judge was available "at that precise moment." The petitioner\'s unsworn, imprecise allegation did not rebut the presumption of regularity (Rule 131, Sec. 3(m)).' }
		],
		disposition: 'Petition DENIED. The CA decision of June 14, 2002 is AFFIRMED. Costs against petitioner.',
		ratio: {
			doctrine: 'A statute must be read as a whole, and a single word cannot be construed apart from the sentence that qualifies it; where the law itself defines a term, the definition controls and is simply applied.',
			plain: 'The law says a syndicate means five or more people, in the very sentence that begins "any person or persons." So "any person" cannot mean one person. Four accused are not a syndicate, whatever label the Information uses.',
			wording: 'Sec. 1, P.D. 1689: "...life imprisonment to death if the swindling (estafa) is committed by a syndicate consisting of five or more persons..." and "When not committed by a syndicate as above defined, the penalty imposable shall be reclusion temporal to reclusion perpetua if the amount of the fraud exceeds 100,000 pesos."',
			why: 'The law is "clear and free from any doubt or ambiguity," so it needs no construction; where a requirement is explicit, no discretion is left to the courts (<i>Luzon Surety v. De Garcia</i>). "It is a dangerous practice to base construction upon only a part of a section since one portion may be qualified by the other portion." The "as above defined" clause in the second paragraph confirms the definition is the operative test.',
			rejected: 'The singular reading of "any person" would erase the condition attached to the penalty and leave the second paragraph with little room to operate. <i>People v. Romero</i> did not help the petitioner: the one-person question was not in issue there, and the Court in <i>Romero</i> itself refused the heavier penalty for failure to prove a syndicate. The argument that bail depends only on the prescribed penalty was not adopted.',
			lesson: 'Read the whole sentence and the whole section; apply a statutory definition as written; labels in a pleading yield to the statute\'s elements; and read the penal law together with the procedural rules (Rules 110 and 114) to reach the practical result.'
		},
		beginner: {
			oneLine: 'The complainant wanted four accused held without bail for "syndicated" estafa, but the law defines a syndicate as five or more, so the heavier, non-bailable charge could not stand.',
			issue: 'Can the words "any person" in the syndicated-estafa law mean that one to four people can commit syndicated estafa?',
			answer: 'No. Read the whole sentence: the heavier penalty applies only to a syndicate of five or more.',
			analogy: 'A rule says, "Any student who joins a relay team of five or more runners may enter the race." Four students cannot enter as a "team of five" just by writing "five" on the form.',
			memorize: 'A statute is read as a whole; one part may be qualified by another; a statutory definition controls.',
			misconception: 'That the Court relied on "penal laws are strictly construed against the State." It did not cite that rule; it rested on the text and the definition.'
		},
		card: {
			facts: 'Catiis filed a complaint for syndicated estafa under Art. 315, par. 2(a) of the RPC in relation to P.D. No. 1689 against Patacsil, Lopez, Portuguez and Tafalla for defrauding him of at least US$123,461.14 through a fake foreign-exchange trading business. The Information named only four accused, although it alleged that they acted "in a syndicated manner consisting of five (5) or more persons," and alleged no aggravating circumstance. Judge Bersamin first approved the no-bail recommendation but later ruled that four accused cannot constitute a syndicate, so the offense was bailable; the accused posted bail before the Executive Judge. The CA found no grave abuse of discretion, and Catiis argued before the Supreme Court that "any person" in Sec. 1 means even one person may commit syndicated estafa.',
			issues: '(1) Whether the phrase "any person or persons" in Sec. 1 of P.D. No. 1689 allows fewer than five persons to be charged with syndicated estafa. (2) Whether the accused are entitled to bail as a matter of right.',
			ruling: '(1) No. The law must be read as a whole, since one part of a section may be qualified by another, and "any person" is qualified by the same sentence, which defines a syndicate as five or more persons. The definition is clear and controlling, so courts simply apply it. Since only four were charged, the second paragraph applies (reclusion temporal to reclusion perpetua). (2) Yes. Aggravating circumstances must be alleged in the Information under Rule 110, Secs. 8 and 9; none was alleged, so only reclusion temporal may be imposed, and bail is a matter of right. Petition denied.'
		},
		recitation: [
			['What are the material facts?', 'Four accused were charged with syndicated estafa under P.D. 1689 for a fake forex scheme. The Information alleged they acted "in a syndicated manner consisting of five or more persons" but named only four and alleged no aggravating circumstance. The trial judge granted bail; the CA upheld him.'],
			['What is the legal issue?', 'Whether "any person or persons" in Sec. 1, P.D. 1689 allows fewer than five persons to be charged with syndicated estafa, punishable by life imprisonment to death, and consequently whether the accused were entitled to bail as a matter of right.'],
			['What did the Supreme Court rule?', 'No to the first; yes to the second. Four accused cannot be a syndicate, so the second paragraph applies; with no aggravating circumstance alleged, only reclusion temporal is imposable, and bail is a matter of right. The Executive Judge validly approved the bonds. Petition denied.'],
			['What doctrine of statutory construction was applied?', 'The statute must be read as a whole; one portion may be qualified by another; a clear statutory definition controls and is simply applied (verba legis).'],
			['Why did the Court interpret the provision that way?', 'Because "any person or persons" is the subject of a sentence whose penalty is expressly conditioned on commission "by a syndicate consisting of five or more persons," and the second paragraph refers to a syndicate "as above defined." Reading "any person" alone would erase that condition.'],
			['How would the result change if five persons had been named and an aggravating circumstance alleged?', 'With five named persons satisfying the definition, the first paragraph could apply (life imprisonment to death), and bail would no longer be a matter of right; it would depend on whether evidence of guilt is strong. Even under the second paragraph, an alleged aggravating circumstance could support the maximum, reclusion perpetua, again making bail discretionary.'],
			['How did the Court deal with People v. Romero?', 'It held petitioner\'s reliance misleading: <i>Romero</i> did not decide whether one person could be indicted for syndicated estafa, and it actually refused the heavier penalty because no syndicate was proved. A precedent is authority only for the issue it decided.']
		],
		exam: [
			{ cat: 'F', level: 1, topic: 'Catiis — recall', q: 'What penalty does Sec. 1, P.D. 1689 impose on estafa committed by a syndicate, and how does it define a syndicate?', short: 'Life imprisonment to death. A syndicate is one "consisting of five or more persons formed with the intention of carrying out the unlawful or illegal act, transaction, enterprise or scheme." When not committed by a syndicate as so defined, the penalty is reclusion temporal to reclusion perpetua if the fraud exceeds ₱100,000.', keys: 'life imprisonment to death; five or more; second paragraph' },
			{ cat: 'F', level: 1, topic: 'Catiis — recall', q: 'How many accused did the Information name, and what did it allege about a syndicate and aggravating circumstances?', short: 'Four. It alleged they acted "in a syndicated manner consisting of five (5) or more persons" through registered and unregistered entities, but named no fifth participant and alleged no aggravating circumstance.', keys: 'four; "five or more" allegation; no aggravating circumstance' },
			{ cat: 'F', level: 2, topic: 'Catiis — recall', q: 'Why was bail a matter of right in Catiis?', short: 'Because the crime charged fell under the second paragraph of Sec. 1 (reclusion temporal to reclusion perpetua), and since no aggravating circumstance was alleged, it could not be considered under Rule 110, Secs. 8–9. Only reclusion temporal was imposable, and an offense not punishable by reclusion perpetua is bailable as a matter of right (Art. III, Sec. 13; Rule 114, Sec. 4).', keys: 'second paragraph; no aggravating; reclusion temporal; bail as of right' },
			{ cat: 'F', level: 2, topic: 'Catiis — discussion', q: 'Explain how the Court in Catiis applied the rule that a statute must be construed as a whole.', short: 'It refused to read "any person or persons" in isolation. Those words are the subject of a sentence whose penalty applies only to estafa committed "by a syndicate consisting of five or more persons," and the next paragraph refers to a syndicate "as above defined." Reading the sentence and section as a whole, the five-person definition qualifies "any person," so four accused cannot commit syndicated estafa. "It is a dangerous practice to base construction upon only a part of a section."', keys: 'sentence in its entirety; one portion qualified by another; as above defined' },
			{ cat: 'F', level: 3, topic: 'Catiis — discussion', q: 'How did the Court treat People v. Romero, and what principle about precedents does this show?', short: 'It found the reliance misleading: whether one person could be indicted for syndicated estafa was not an issue in <i>Romero</i>, and there the Court actually refused the heavier penalty because a syndicate was not proved. A precedent is authority only for the issue it actually raised and decided.', keys: 'not in issue; refused heavier penalty; authority only for issue decided' },
			{ cat: 'F', level: 3, topic: 'Catiis — comparison', q: 'Compare Catiis and Magtajas as cases that rejected a reading built on a single word.', short: 'In <i>Catiis</i>, "any person" was controlled by a definition in the same sentence (five or more persons) and by the second paragraph\'s "as above defined": the whole-statute rule and the statutory definition. In <i>Magtajas</i>, "gambling" was controlled by its companion words "and other prohibited games of chance" (<i>noscitur a sociis</i>). Both refused to give one word a meaning its context denies; <i>Catiis</i> used structure and definition, <i>Magtajas</i> used associated words.', keys: 'any person vs. gambling; definition vs. noscitur a sociis; context' },
			{
				cat: 'F',
				level: 4,
				topic: 'Catiis — application',
				title: 'Case — The rice cartel',
				facts: 'R.A. No. 12950 (hypothetical) provides: "Any person or persons who shall hoard rice shall suffer reclusion perpetua if the hoarding is committed by a cartel consisting of three or more traders acting in concert. When not committed by a cartel as above defined, the penalty shall be prision mayor." An Information charges only two named traders, Ka Berto and Ka Nonoy, alleging that they hoarded rice "as a cartel of three or more traders." No other participant is named. They move to be admitted to bail as a matter of right.',
				q: 'Are they entitled to bail as a matter of right? Answer using ALAC.',
				alac: {
					answer: 'Yes. The Information charges, at most, hoarding not committed by a cartel, punishable by prision mayor, which is bailable as a matter of right.',
					legalBasis: 'A statute is read as a whole; one portion may be qualified by another; a statutory definition controls (Agpalo Ch. VI; <i>Catiis v. CA</i>). An allegation that merely uses the statutory label does not satisfy the statutory definition where the persons actually charged do not meet it (<i>Catiis</i>). All persons are bailable as a matter of right before conviction except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong (Art. III, Sec. 13).',
					application: 'The words "any person or persons" are qualified by the definition in the same sentence: a cartel requires three or more traders, and the second sentence refers to a cartel "as above defined." The Information names only two traders and no third participant. As in <i>Catiis</i>, labelling them "a cartel of three or more" does not change the number actually charged. The heavier penalty does not apply, leaving prision mayor, which is not reclusion perpetua.',
					conclusion: 'Ka Berto and Ka Nonoy are entitled to bail as a matter of right.'
				},
				weaker: 'The prosecution\'s reliance on the word "cartel" in the Information repeats the error rejected in <i>Catiis</i>: substance, not labels, satisfies the statute.'
			}
		],
		quick: {
			facts: 'Four accused charged with syndicated estafa (P.D. 1689); Information alleged "five or more" but named four; no aggravating circumstance.',
			issue: 'Can fewer than five be charged with syndicated estafa (life to death)? Is bail a matter of right?',
			ruling: 'No syndicate; second paragraph applies; only reclusion temporal imposable; bail as of right; Executive Judge validly approved bonds.',
			doctrine: 'Statute read as a whole; statutory definition controls.',
			reasoning: '"Any person or persons" is qualified by "syndicate consisting of five or more persons" and "as above defined."',
			cue: '"Four is not five."'
		},
		matrix: {
			central: 'Statute read as a whole; statutory definition controls',
			rule: 'Verba legis; a part of a section may be qualified by another part',
			reasoning: '"Any person" qualified by the five-person syndicate clause and the "as above defined" paragraph; labels in the Information yield to the definition',
			distinguishing: 'One sentence of a penal statute, read with procedural rules, decides bail'
		}
	},

	/* ------------------------------------------------------------------ AQUINO */
	{
		id: 'aquino',
		short: 'Aquino',
		title: 'Efren and Angelica Aquino v. Quezon City, et al. / Heirs of Solomon Torrado v. Veronica Baluyot, et al.',
		gr: 'G.R. Nos. 137534 and 138624 (consolidated)',
		date: 'August 3, 2006',
		court: 'Second Division · Azcuna, J. (Puno, Sandoval-Gutierrez, Corona, Garcia, JJ., concur)',
		parties: 'G.R. No. 137534: Spouses Aquino v. Quezon City, the City Treasurer, the Acting Register of Deeds, and Aida Linao (auction buyer). G.R. No. 138624: Heirs of Solomon Torrado v. Spouses Baluyot (auction buyer), Spouses Uy (mortgagees), DNX Development Corp. (later buyer), the City Treasurer and Register of Deeds, and the CA.',
		nature: 'Two petitions for review on certiorari, consolidated on Oct. 18, 2000, from CA decisions upholding tax-delinquency auction sales.',
		chapters: 'Ch. VI (direct: statute as a whole; arrangement of sections) · Ch. VIII (direct: mandatory notice; public auction procedure)',
		doctrine: 'A statute is construed as a whole and each part in its context; but courts will not read into a clear provision a requirement it does not contain.',
		question: 'Is the Sec. 65 notice of delinquency (P.D. 464) a prerequisite to a tax sale, and does Sec. 73 require actual receipt of the notice of sale?',
		principle: 'Read with Sec. 67 and the whole chapter, the notice of delinquency is a prerequisite to every collection remedy; but direct mailed notice suffices, and Sec. 73 requires the notice of sale to be sent, not received.',
		timeline: [
			['1 · 1975–1982', 'The Aquinos withhold real property taxes on their Diliman lot as a protest against the Marcos government.', 'Creates the delinquency.'],
			['2 · 1959 onward', 'Torrado moves to Quezon City but keeps "Butuan City" as his address in the tax register and title for Lot 8.', 'Sets up the "if known" issue under Sec. 73.'],
			['3 · Oct. 6 & Dec. 10, 1982', 'Torrado: a Notice of Intent to Sell and a Notice of Sale are mailed to "Butuan City" and returned ("Insufficient Address"); notices of sale are posted, published, announced by crier, and the barangay captain informed.', 'Whether mailing to the tax-record address suffices.'],
			['4 · Feb. 23, 1983', 'Lot 8 sold at auction to Veronica Baluyot; later Final Bill of Sale (May 29, 1985), new title, mortgage to the Uys, foreclosure, sale to DNX.', 'Third parties acquire interests.'],
			['5 · Feb. 29, 1984', 'Aquino lot sold at auction to Aida Linao. Only a Notice of Intent to Sell by registered mail was sent; no posting or publication of the notice of delinquency.', 'Whether Sec. 65 posting and publication are indispensable.'],
			['6 · Sept. 25, 1985', 'RTC grants Linao\'s petition to consolidate ownership; new title issued.', 'Title passes to the buyer.'],
			['7 · 1987–1999', 'Aquinos learn of the sale in April 1987 and sue; RTC dismisses (Feb. 25, 1995); CA affirms (Feb. 3, 1999).', 'Lower courts uphold the sale.'],
			['8 · 1989–1998', 'Torrado sues (Jan. 13, 1989); RTC dismisses (Mar. 12, 1992); CA dismisses appeal (Mar. 24, 1998).', 'Lower courts uphold the sale.'],
			['9 · Oct. 18, 2000', 'Supreme Court consolidates the two petitions.', 'Common questions on P.D. 464 notices.'],
			['10 · Aug. 3, 2006', 'Supreme Court denies both petitions; sales upheld.', 'Doctrine settled.']
		],
		facts: `<p><b>Aquino (G.R. No. 137534).</b> The spouses Aquino owned a 612-square-meter lot in East Avenue Subdivision, Diliman. By their own admission they withheld real property taxes from 1975 to 1982 to protest the Marcos government. The City Treasurer sold the lot at public auction on February 29, 1984 to Aida Linao, who later consolidated ownership. The only compliance with Sec. 65 of P.D. 464 was a Notice of Intent to Sell sent by registered mail to the Aquinos' last known address (which they said they had abandoned); the notice of delinquency was not posted or published. The Aquinos sued to annul the sale for lack of notice.</p>
<p><b>Torrado (G.R. No. 138624).</b> Solomon Torrado owned Lot 8 in Cubao. He paid taxes on the improvements but not on the lot itself. His address in the tax register and title for Lot 8 was simply "Butuan City," though he had moved to Quezon City in 1959 and a fuller Cubao address appeared in other tax records. Notices mailed to "Butuan City" were returned for insufficient address; the notice of sale was also posted, published and announced. Lot 8 was sold to Veronica Baluyot in 1983 and passed through a mortgage and foreclosure to DNX Development Corp.</p>
<p><b>Competing readings of P.D. 464.</b> Petitioners said two notices are required before a tax sale: the Sec. 65 notice of delinquency (with posting, publication and announcement) and the Sec. 73 notice of sale, and that notice must be actually received. Respondents said P.D. 464 provides three distinct remedies (distraint, sale, judicial action), that Sec. 65 belongs only to distraint, and that only Sec. 73 applies to sales.</p>`,
		args: `<b>Petitioners:</b> two notices are required (delinquency and sale); Sec. 65 requires posting, publication and announcement; notice must be actual, especially where mailed notices are returned. <b>Respondents:</b> Sec. 65 relates only to distraint of personal property (Secs. 65, 68, 70–72); for a sale (Secs. 73–81) only Sec. 73 applies, and it was complied with.`,
		issues: [
			{ q: 'Is the Sec. 65 notice of delinquency a prerequisite to every collection remedy, including the sale of real property, and not only to distraint?', v: 'YES', a: 'Read with Sec. 67 and the whole chapter, the notice of delinquency is a prerequisite to all three remedies. The Court agreed with respondents that there are three methods of enforcement, but with petitioners that two notices (delinquency and sale) must be given.' },
			{ q: 'Are the posting and publication of the Sec. 65 notice indispensable where the notice was sent directly to the taxpayer by registered mail?', v: 'NO', a: 'A tax sale is <i>in personam</i>, so what protects the taxpayer is notice sent directly to him (<i>Talusan v. Tayag</i>). Personal notice by registered mail suffices; posting and publication are not indispensable. The Aquinos admitted the notice was mailed.' },
			{ q: 'Does a "Notice of Intent to Sell" that informs the owner of the deficiency satisfy the Sec. 65 notice of delinquency (Torrado)?', v: 'YES', a: 'Whether a notice was prepared and sent is generally a question of fact not reviewed under Rule 45. In any event the October 6, 1982 Notice of Intent to Sell sufficiently informed the recipient of the deficiency; its contents, not its caption, matter.' },
			{ q: 'Does the last paragraph of Sec. 73 require that the notice of sale be actually received?', v: 'NO', a: 'Sec. 73 gives the treasurer the option to send the notice to the address in the tax rolls or record cards, or to the residence if known to the treasurer or barrio captain. Nothing requires actual receipt; compliance is measured by strictly following the statute.' },
			{ q: 'Was the treasurer bound to send Torrado\'s notices to the Cubao address appearing in other tax records?', v: 'NO', a: 'The residence option applies only if the residence is "known to said treasurer or barrio captain," and actual knowledge was not shown. The fault lay with Torrado, who kept a bare "Butuan City" address for over 25 years.' }
		],
		disposition: 'Both petitions DENIED; CA decisions AFFIRMED. No costs.',
		extra: box('neutral', 'Reading note', p('The decision says Sec. 65 "is to be construed together with Sections 66 and 78." The discussion turns on Sec. 67, so "78" appears to be a slip; recite it as Secs. 65, 66 and 67 read together.')),
		ratio: {
			doctrine: 'A statute is construed as a whole; its meaning is drawn from a general view of the act, every part interpreted with reference to its context (<i>Aisporna v. CA</i>). Courts will not read into a statute a requirement it does not contain.',
			plain: 'Read the whole tax-collection chapter and you see that the notice of delinquency is the "starting gun" for every collection remedy, including auction. But the notice only has to be sent the way the law says: to the address in the tax records, or to the residence if the treasurer actually knows it. The law does not promise you will receive it.',
			wording: 'Sec. 67, P.D. 464: formal demand need not be made before "any of such remedies"; "notice of delinquency as required in Section sixty-five hereof shall be sufficient for the purpose." Sec. 73: the notice "shall forthwith be sent ... to the delinquent taxpayer, at his address as shown in the tax rolls or property tax record cards ... or at his residence, if known to said treasurer or barrio captain."',
			why: 'Sec. 65 sits before the general-remedies provision (Sec. 67) and before all three remedies; Sec. 67 makes the Sec. 65 notice the substitute for formal demand before "any of such remedies," which shows it is a prerequisite to all of them; and "as required in Section sixty-five" underscores its mandatory nature. On Sec. 73, the disjunctive "or" gives the treasurer an option, and nothing in the words requires receipt.',
			rejected: 'Respondents "mistakenly lumped Section 65 exclusively with Sections 68 to 72." Petitioners\' demand for actual receipt would add a requirement the statute does not contain. The Cubao-address argument failed because the "if known" qualifier was not satisfied.',
			lesson: 'Placement and cross-references reveal a section\'s reach; whole-statute reading clarifies but does not add requirements. The Court partly agreed with both sides.'
		},
		beginner: {
			oneLine: 'Two owners lost land at tax auctions and said they were not properly notified; the Court said notice was required before any auction, but it only had to be sent properly, not received.',
			issue: 'Does the notice of delinquency apply to auction sales, and must the owner actually receive the notice of sale?',
			answer: 'Yes, a notice of delinquency is required before any collection remedy; no, the notice of sale only has to be sent to the right address, not received.',
			analogy: 'A school must send report cards to the address on file. If you moved and never updated it, you cannot complain that you did not get your card.',
			memorize: 'A statute is construed as a whole and in context (<i>Aisporna</i>); courts do not read into a statute a requirement it does not contain.',
			misconception: 'That the Court required posting and publication in every case. It held them not indispensable where direct notice was mailed.'
		},
		card: {
			facts: 'The spouses Aquino stopped paying real property taxes on their Diliman lot from 1975 to 1982 to protest the Marcos government, and Quezon City sold the lot at public auction after only mailing them a Notice of Intent to Sell, without posting or publishing the notice of delinquency under Sec. 65 of P.D. No. 464. In the consolidated case, Torrado\'s tax address for his Cubao lot was simply "Butuan City," though he had moved to Quezon City in 1959; the mailed notices were returned, and the lot was auctioned and later resold. Both owners sued to annul the sales for lack of notice, while the City argued that the Sec. 65 notice applies only to distraint of personal property. The lower courts upheld the sales.',
			issues: '(1) Whether the notice of delinquency under Sec. 65 of P.D. No. 464 is required before tax-delinquent property may be sold at auction. (2) Whether Sec. 73 requires that the notice of sale be actually received by the delinquent taxpayer.',
			ruling: '(1) Yes. A statute is construed as a whole and each part in context; Sec. 65 is followed by Sec. 67, which makes the notice of delinquency the substitute for formal demand before "any of such remedies," so it is a prerequisite to distraint, sale and judicial action alike. But since a tax sale is in personam, notice mailed directly to the owner suffices, and posting and publication are not indispensable. (2) No. Sec. 73 plainly gives the treasurer the option to send the notice to the tax-record address or to the residence if known to him, and nothing requires actual receipt. Torrado bore the fault for keeping an insufficient address for over 25 years. Petitions denied; sales upheld.'
		},
		recitation: [
			['What are the material facts?', 'Two delinquent lots were auctioned in Quezon City. The Aquinos got only a mailed Notice of Intent to Sell, with no posting or publication of the notice of delinquency. Torrado\'s notices went to his tax-record address, "Butuan City," and were returned. Both sued to annul the sales.'],
			['What were the issues?', 'Whether the Sec. 65 notice of delinquency is a prerequisite to sale (not only distraint); whether its posting and publication are indispensable; whether a Notice of Intent to Sell can serve as notice of delinquency; whether Sec. 73 requires actual receipt; and whether notice had to go to Torrado\'s Cubao address.'],
			['What did the Court rule?', 'The notice of delinquency is required for every remedy, but direct mailed notice suffices; a Notice of Intent to Sell can serve; Sec. 73 needs sending, not receipt; and the treasurer was not bound to use an address he did not actually know. Both sales upheld.'],
			['What construction doctrine was applied?', 'A statute is construed as a whole and each part in its context (<i>Aisporna</i>), using the arrangement of sections as an intrinsic aid; and courts will not read into a clear provision a requirement it does not contain.'],
			['Why did the Court say the notice of delinquency applies to sales?', 'Because Sec. 65 precedes Sec. 67 and all three remedies, and Sec. 67 makes the notice of delinquency "as required in Section sixty-five" the substitute for formal demand before "any of such remedies."'],
			['How would the result change if the treasurer had sent no notice at all to the Aquinos?', 'The sale would be vulnerable: the notice of delinquency is a mandatory prerequisite, and in an <i>in personam</i> tax sale, direct notice to the owner is what is indispensable.'],
			['Why did the Court refuse to require actual receipt?', 'Sec. 73\'s words give the treasurer an option of addresses and say nothing about receipt; compliance "is limited to strictly following the provisions of the statute." Adding a receipt requirement would rewrite the law.']
		],
		exam: [
			{ cat: 'F', level: 1, topic: 'Aquino — recall', q: 'What was the only notice the Aquinos received before their lot was sold, and what was missing?', short: 'A Notice of Intent to Sell sent by registered mail to their last known address. The notice of delinquency was not posted or published under Sec. 65.', keys: 'registered mail; no posting; no publication' },
			{ cat: 'F', level: 1, topic: 'Aquino — recall', q: 'What address did Torrado keep in the tax records, and what happened to the mailed notices?', short: '"Butuan City," though he had moved to Quezon City in 1959. The Notice of Intent to Sell and the Notice of Sale were returned for "Insufficient Address."', keys: 'Butuan City; returned; insufficient address' },
			{ cat: 'F', level: 2, topic: 'Aquino — recall', q: 'What two options does Sec. 73 of P.D. 464 give the treasurer for sending the notice of sale?', short: 'To send it to the taxpayer\'s address as shown in the tax rolls or property tax record cards, or to his residence if known to the treasurer or barrio captain.', keys: 'tax-roll address; or residence if known' },
			{ cat: 'F', level: 2, topic: 'Aquino — discussion', q: 'Explain how the arrangement of sections in P.D. 464 helped the Court decide that the notice of delinquency applies to sales.', short: 'Sec. 65 (notice) comes before Sec. 66 (penalty) and Sec. 67 (remedies cumulative), and all three remedies (distraint, sale, judicial action) come after it. Its placement shows it serves the remedies in general. Sec. 67 also dispenses with formal demand before "any of such remedies" because the "notice of delinquency as required in Section sixty-five" suffices, confirming its role as a prerequisite to all of them.', keys: 'placement before Sec. 67; any of such remedies; substitute for demand' },
			{ cat: 'F', level: 3, topic: 'Aquino — discussion', q: 'Why were posting and publication of the notice of delinquency not indispensable in Aquino?', short: 'Because a tax sale is a proceeding <i>in personam</i>: what protects the taxpayer is notice sent directly to him (<i>Talusan v. Tayag</i>). Since the Aquinos admitted that notice was mailed to them, the purpose of Sec. 65 was served, and the absence of posting and publication did not void the sale.', keys: 'in personam; direct notice; Talusan v. Tayag' },
			{ cat: 'F', level: 3, topic: 'Aquino — comparison', q: 'Compare Aquino and Catiis as applications of the rule that a statute is read as a whole.', short: 'Both refused to read a provision in isolation. <i>Catiis</i> read one sentence and the next paragraph of Sec. 1, P.D. 1689 to show that "any person" is qualified by the syndicate definition. <i>Aquino</i> read a whole chapter (Secs. 65–82, P.D. 464) to show that Sec. 65 serves all remedies. <i>Aquino</i> also shows the rule\'s limit: having read the chapter purposively, the Court still refused to add an "actual receipt" requirement to Sec. 73.', keys: 'one sentence vs. whole chapter; limit: no added requirements' },
			{
				cat: 'F',
				level: 4,
				topic: 'Aquino — application',
				title: 'Case — The wrong street',
				facts: 'Under a municipal tax code identical to Secs. 65, 67 and 73 of P.D. 464, Mila\'s address in the tax rolls and property record card is "123 Mabini St., Malolos." The treasurer, using an address taken from an old barangay clearance in another office, mails both the notice of delinquency and the notice of sale to "45 Rizal Ave., Malolos," where Mila has never lived and which the treasurer has no reason to believe is her residence. The notices are posted and published. Mila\'s lot is auctioned. She sues to annul the sale.',
				q: 'Is the sale valid? Answer using ALAC.',
				alac: {
					answer: 'No. The sale is void because the notices were not sent to either address the law allows.',
					legalBasis: 'The notice of delinquency is a mandatory prerequisite to every collection remedy, including sale (<i>Aquino v. Quezon City</i>, reading Secs. 65 and 67 together). A tax sale is <i>in personam</i>, so what is indispensable is notice sent directly to the taxpayer (<i>Talusan v. Tayag</i>, as applied in <i>Aquino</i>). Sec. 73 requires the notice of sale to be sent to the address in the tax rolls or record cards, or to the residence if known to the treasurer. Non-compliance is notice sent to an address other than the tax-record address that is not the known residence (<i>Aquino</i>). Public auction procedures are mandatory (Agpalo §8.19).',
				application: 'Mila\'s tax-record address is 123 Mabini St. The treasurer used neither that address nor a residence he knew; he used an unrelated address from another office. That is exactly what <i>Aquino</i> described as non-compliance. Posting and publication cannot cure the defect, because in an <i>in personam</i> proceeding the indispensable protection is direct notice, which Mila never received at a lawful address.',
				conclusion: 'The auction sale should be annulled, subject to Mila\'s payment of the delinquent taxes.'
			},
				weaker: 'The treasurer may argue that posting and publication gave constructive notice. <i>Aquino</i> treated those modes as dispensable only because direct notice had been properly sent.'
			}
		],
		quick: {
			facts: 'Two delinquent lots auctioned; Aquinos got only mailed notice (no posting/publication); Torrado\'s notices went to his tax-record "Butuan City" address and were returned.',
			issue: 'Is the Sec. 65 notice of delinquency needed for a sale? Must the Sec. 73 notice be actually received?',
			ruling: 'Notice of delinquency required for all remedies, but direct mailed notice suffices; no actual receipt required; sales upheld.',
			doctrine: 'Statute construed as a whole and in context; no requirement read into a clear text.',
			reasoning: 'Sec. 65 precedes Sec. 67, which makes the notice the substitute for demand before "any of such remedies"; Sec. 73 gives an option of addresses.',
			cue: '"Starting gun for every remedy; sent, not received."'
		},
		matrix: {
			central: 'Statute construed as a whole and in context; no requirement read into a clear text',
			rule: 'Arrangement of sections as intrinsic aid; plain meaning of a disjunctive option',
			reasoning: 'Sec. 65 read with Sec. 67 governs all remedies; Sec. 73 requires sending, not receipt; "if known" not shown',
			distinguishing: 'Reads a whole chapter, then stops short of adding a requirement; partly agrees with both sides'
		}
	},

	/* ------------------------------------------------------------------ MANILA LODGE */
	{
		id: 'manila-lodge',
		short: 'Manila Lodge',
		title: 'Manila Lodge No. 761, Benevolent and Protective Order of the Elks, Inc. v. Court of Appeals / Tarlac Development Corporation v. Court of Appeals',
		gr: 'G.R. Nos. L-41001 and L-41012',
		date: 'September 30, 1976',
		court: 'First Division · Castro, C.J. (Makasiar, Muñoz Palma, Martin, JJ., concur; Teehankee, J., concurs in the result)',
		parties: 'Manila Lodge No. 761, BPOE (vendor; petitioner in L-41001) and Tarlac Development Corporation, "TDC" (buyer; petitioner in L-41012) v. Court of Appeals and the City of Manila.',
		nature: 'Petitions for review on certiorari of the CA decision of June 30, 1975 (CA-G.R. No. 51590-R), affirming the CFI of Manila (Civil Case No. 83009).',
		chapters: 'Ch. VI (direct: four corners; whole statute; no surplusage) · Ch. VII (direct: public grants strictly construed, §7.16) · also expressio unius (Ch. V) and contemporaneous construction (Ch. III)',
		doctrine: 'Legislative intent is found within the four corners of the statute read as a whole; a public grant to a political subdivision is strictly construed against the grantee; every word must be given effect.',
		question: 'Was the reclaimed Luneta extension, declared by Act No. 1360 to "be the property of the City of Manila," patrimonial property the City could sell, or property of public dominion?',
		principle: 'Because Act No. 1360 had to expressly authorize the City to lease or sell only the north-end hotel site, the rest of the reclaimed land was granted for public use; the City\'s sale of the southern portion was void.',
		timeline: [
			['1 · June 26, 1905', 'Act No. 1360 authorizes reclamation of an extension of the Luneta; declares the reclaimed land "the property of the City of Manila"; authorizes lease of a north-end hotel site.', 'The grant to be construed.'],
			['2 · May 18, 1907', 'Act No. 1657 amends it to allow the City to lease <i>or sell</i> the north-end hotel site.', 'Authority to dispose limited to one portion.'],
			['3 · Dec. 29, 1908 & Jan. 16, 1909', 'Contracts of sale to the Army and Navy Club and to Manila Lodge No. 761.', 'Origin of the Elks\' claim.'],
			['4 · Jan. 20, 1911', 'O.C.T. No. 1909 issued to the City for the "Luneta Extension," subject to Act No. 1360 and the contracts.', 'Title in the City.'],
			['5 · July 13, 1911', 'City conveys 5,543.07 sq. m. to Manila Lodge (TCT No. 2195), with the City\'s right to repurchase for public purposes after 50 years annotated.', 'The sale later held void.'],
			['6 · Jan.–Feb. 15, 1963', 'BPOE obtains cancellation of the repurchase annotation.', 'Clears the way for resale.'],
			['7 · Nov. 19 & Dec. 12, 1963', 'BPOE sells the land and improvements to TDC for ₱4,700,000; TCT No. 73444 issues, still describing the land as "part of the Luneta Extension."', 'TDC claims as a buyer in good faith.'],
			['8 · 1964–July 31, 1968', 'City obtains reannotation of its repurchase right (Nov. 19, 1964); affirmed by the Supreme Court (July 31, 1968), reserving TDC\'s right to sue.', 'Prior litigation.'],
			['9 · Apr. 28, 1971', 'TDC sues the City and BPOE (Civil Case No. 83009).', 'Present case begins.'],
			['10 · July 14, 1972', 'CFI: the land is a public park, part of the public domain; the City\'s sale to BPOE void; TDC may recover from BPOE; BPOE from the City.', 'Trial court\'s ruling.'],
			['11 · June 30, 1975', 'CA affirms.', 'Leads to the petitions.'],
			['12 · Sept. 30, 1976', 'Supreme Court denies both petitions.', 'Doctrine settled.']
		],
		facts: `<p>Act No. 1360 (1905) authorized the City of Manila to reclaim part of Manila Bay "for the making of an extension to the Luneta," declared that the reclaimed land "shall be the property of the City of Manila," and "hereby authorized" the City to set aside a tract "at the north end" for a hotel site and lease it; Act No. 1657 (1907) allowed the City to lease <i>or sell</i> that tract. The bulkheads were paid with City funds, but the area was filled "without cost to the City of Manila" at the Insular Government's expense.</p>
<p>In 1911 the City conveyed 5,543.07 square meters, at the <b>south</b> end of the reclaimed area, to Manila Lodge No. 761 (the Elks), with a right to repurchase for public purposes after 50 years. In 1963 the Elks had the repurchase annotation cancelled and sold the land to Tarlac Development Corporation for ₱4.7 million. When the City obtained reannotation of its repurchase right, TDC sued to be declared a buyer in good faith. The trial court and the CA held the land a public park and the City's sale void.</p>`,
		args: `<b>BPOE:</b> "shall be the property of the City" was an express grant of ownership, so the land was patrimonial; under Art. 344 of the Spanish Civil Code a park is public only when actually laid out; the land was converted to patrimonial property; it was excluded from later park plans and proclamations; nullity now would impair contracts. <b>TDC:</b> the City paid for the reclamation (citing <i>Government v. Cabangis</i>); the authority to lease or sell the north end merely <i>limited</i> an existing power; the south end lies outside the old Luneta; later plans, proclamations and titles show the land was treated as private; the City is estopped; TDC is an innocent purchaser relying on a Torrens title.`,
		issues: [
			{ q: 'Was the reclaimed area declared to "be the property of the City of Manila" granted as patrimonial property, freely disposable?', v: 'NO', a: 'It is property of public dominion intended for public use; at most only the north-end hotel site, expressly authorized to be leased or sold, may be considered patrimonial.' },
			{ q: 'Does the express authority to lease or sell the north-end hotel site imply authority to sell the south end?', v: 'NO', a: 'Under <i>expressio unius est exclusio alterius</i>, the express authority over the north end excludes the rest. TDC\'s "limitation" theory "begs the question," because the City had no power to dispose to begin with.' },
			{ q: 'Under Art. 344 of the Spanish Civil Code, does a park become public only when actually laid out?', v: 'NO', a: 'An intention to devote the property to public use suffices (cf. Art. 420, New Civil Code); Act No. 1360 showed that intent.' },
			{ q: 'Was the land later converted into patrimonial property?', v: 'NO', a: 'Conversion requires a declaration by the executive (and possibly the legislative) department that the land is no longer needed for public use; none was made.' },
			{ q: 'May later plans, proclamations, survey plans and O.C.T. No. 7333 be used to show the 1905 intent?', v: 'NO', a: 'They were not contemporaneous with the enactment and were probably influenced by the earlier invalid sale and titles.' },
			{ q: 'Is the City estopped from questioning its 1911 sale?', v: 'NO', a: 'The Government is never estopped by its agents\' mistakes, and estoppel cannot validate a contract prohibited by law.' },
			{ q: 'Did TDC, as a buyer in good faith relying on a Torrens title, acquire valid rights; does nullity impair contracts?', v: 'NO', a: 'The sale was void and inexistent for lack of a lawful object (Arts. 1409, 1458); good faith cannot create title where the vendor had none; there is no impairment because in law there was no contract. Restitution is in order.' },
			{ q: 'Did the CA err by merely adopting the trial court\'s findings?', v: 'NO', a: 'The trial court\'s decision being in accordance with law, its affirmance is likewise in accordance with law.' }
		],
		disposition: 'Both petitions DENIED for lack of merit; CA decision AFFIRMED, at petitioners\' cost.',
		ratio: {
			doctrine: 'Courts give effect to the legislative intent found in the four corners of the statute read as a whole; a public grant is strictly construed against the grantee and in favor of the public; effect must be given to every word; express authority over one part excludes the rest.',
			plain: 'If the land were the City\'s private property, it would not have needed the legislature\'s permission to sell any of it. The law had to specifically allow the City to sell only the north-end hotel site, which proves the rest was public park land the City could not sell.',
			wording: 'Sec. 3: "the land thereby reclaimed shall be the property of the City of Manila." Sec. 5: "the City of Manila is hereby authorized to set aside a tract of the reclaimed land ... at the north end ... for a hotel site, and to lease [and, as amended, to sell] the same." Sec. 6: filled "without cost to the City of Manila." Sec. 1: "an extension to the Luneta."',
			why: 'Five reasons: (1) "hereby authorized" would be superfluous if the land were patrimonial (rule against surplusage; presumption that the legislature knows existing law); (2) an extension shares the nature of the thing extended, and the Luneta is a public park; (3) the land came from Manila Bay, which is public, and reclaimed foreshore keeps its public character (<i>Cabangis</i>); (4) <i>expressio unius</i>, made "more imperative" by strict construction of public grants and municipal powers; (5) intention to devote to public use suffices under Art. 344.',
			rejected: 'TDC\'s "limitation" theory begged the question; its reading of "extension" was "strained"; its exhibits were not contemporaneous; estoppel cannot validate a prohibited contract; good faith cannot create title.',
			lesson: 'Identify the character of the statute (a public grant) to choose the mode of construction (strict). Then ask why the legislature needed to say what it said.'
		},
		beginner: {
			oneLine: 'The City of Manila sold part of the reclaimed Luneta extension to a private club; the Court held it was public park land the City could never sell.',
			issue: 'When a law says reclaimed land "shall be the property of the City," can the City sell any part of it?',
			answer: 'No, except the north-end hotel site the law expressly allowed it to lease or sell.',
			analogy: 'Your parents give you the family car "as your car," but add, "you are hereby allowed to lend the back seat to friends." Why would they need to allow that if you could already sell the whole car?',
			memorize: 'Public grants are strictly construed against the grantee; effect must be given to every word; express authority over one part excludes the rest.',
			misconception: 'That TDC\'s good faith saved its title. A void sale passes nothing.'
		},
		card: {
			facts: 'Act No. 1360, as amended by Act No. 1657, authorized Manila to reclaim part of Manila Bay as an extension of the Luneta, declared that the reclaimed land "shall be the property of the City of Manila," and authorized the City to lease or sell only a tract at the north end as a hotel site. In 1911 the City sold 5,543.07 square meters at the south end to Manila Lodge No. 761 (Elks), which in 1963 sold the land to Tarlac Development Corporation for ₱4.7 million. When the City sought to enforce its annotated right to repurchase, TDC sued to be declared a buyer in good faith. The trial court and the CA held that the land is a public park and the City\'s sale void.',
			issues: 'Whether the reclaimed land granted as "property of the City of Manila" under Act No. 1360 is patrimonial property that the City could sell, or property of public dominion for public use.',
			ruling: 'It is property of public dominion. Legislative intent is drawn from the four corners of the whole statute, and a public grant is strictly construed against the grantee, especially since the land was filled at the Insular Government\'s expense. If the land were patrimonial, the City could sell it without authority, making "hereby authorized" useless, contrary to the rule that every word must be given effect. Under expressio unius est exclusio alterius, the express authority to sell the north end excludes the south end, and an "extension" of a public park, reclaimed from a public bay, is likewise for public use. The sale was void, the City is not estopped by its agents\' mistakes, and TDC\'s good faith cannot create a title the vendor never had. Petitions denied.'
		},
		recitation: [
			['What are the material facts?', 'Act No. 1360 granted Manila the reclaimed Luneta extension "as property of the City" and authorized it to lease or sell only a north-end hotel site. In 1911 the City sold a south-end portion to the Elks, who sold it to TDC in 1963. TDC sued to be declared a buyer in good faith.'],
			['What is the legal issue?', 'Whether the land was patrimonial (and so could be sold) or property of public dominion, and consequently whether the sale and TDC\'s title were valid.'],
			['What did the Court rule?', 'Public dominion; the south-end sale was void; the City was not estopped; TDC\'s good faith could not create title. Petitions denied.'],
			['What construction doctrines were applied?', 'Intent from the four corners of the statute; the whole statute considered; public grants strictly construed against the grantee; effect to every word (no surplusage); expressio unius; presumption that the legislature knows existing law; non-contemporaneous extrinsic aids discounted.'],
			['Why did "hereby authorized" matter so much?', 'Ownership includes the right to dispose. If the land were patrimonial, the City could sell it without authority, so the authorization to lease or sell the north end would be superfluous. It was given precisely because the land was not intended to be patrimonial.'],
			['How would the result change if the City had sold part of the north-end hotel site?', 'That portion was expressly authorized to be leased or sold for hotel purposes, so a sale within the statute\'s terms (and its hotel-use condition) could be valid.'],
			['Why were TDC\'s later plans and proclamations rejected as aids?', 'They were far removed in time from 1905, so they were not contemporaneous construction, and they were probably influenced by the earlier invalid sale and titles.']
		],
		exam: [
			{ cat: 'F', level: 1, topic: 'Manila Lodge — recall', q: 'What did Act No. 1360, as amended, authorize the City of Manila to do with the north end of the reclaimed area?', short: 'To set aside a tract not exceeding 500 by 600 feet at the north end as a hotel site, and to lease it (for up to 99 years) or, as amended by Act No. 1657, to sell it, for hotel purposes only.', keys: 'north end; hotel site; lease or sell; hotel use only' },
			{ cat: 'F', level: 1, topic: 'Manila Lodge — recall', q: 'Who paid for the reclamation in Manila Lodge, and why did it matter?', short: 'The City paid for the bulkheads, but the area was filled "without cost to the City" at the Insular Government\'s expense. That made the grant a gratuitous public grant, which is strictly construed against the grantee.', keys: 'Insular Government expense; public grant; strictly construed' },
			{ cat: 'F', level: 2, topic: 'Manila Lodge — recall', q: 'Why could TDC not invoke its status as an innocent purchaser for value?', short: 'Because the 1911 sale was void and inexistent for lack of a lawful object (land of public dominion). The bona fide purchaser doctrine does not apply where the vendor had no title at all; good faith cannot create title where none exists.', keys: 'void sale; no title in vendor; good faith cannot create title' },
			{ cat: 'F', level: 2, topic: 'Manila Lodge — discussion', q: 'Explain how the rule against surplusage led the Court to hold that the land was public dominion.', short: 'Ownership includes the right to dispose. If the land were the City\'s patrimonial property, the City could already sell it, and the repeated grant of authority ("hereby authorized ... to lease ... to sell") would be meaningless. Since effect must be given to every word, the authority shows the legislature did not intend the land to be patrimonial. The Court added the presumption that the legislature knows existing law: no prior law let the City dispose of it.', keys: 'jus disponendi; hereby authorized superfluous; every word given effect; legislature knows existing law' },
			{ cat: 'F', level: 3, topic: 'Manila Lodge — discussion', q: 'Why did the Court say the expressio unius inference was "the more imperative" in Manila Lodge?', short: 'Because (a) the statute was a public grant, strictly construed against the City, and (b) the powers of a municipal corporation are strictly limited to those expressly or impliedly granted or necessarily incidental. Both rules reinforce reading the express authority over the north end as excluding the south end.', keys: 'public grant strict; municipal powers strict; reinforce expressio unius' },
			{ cat: 'F', level: 3, topic: 'Manila Lodge — comparison', q: 'Compare Manila Lodge and Magtajas as cases on the powers of local governments.', short: 'Both limit a local government by a national statute. <i>Manila Lodge</i> strictly construes a legislative grant of <i>property</i> to a city (express authority to sell one portion excludes the rest). <i>Magtajas</i> limits local <i>police power</i> by a national statute the city cannot override (P.D. 1869), after reading "gambling" with its companion words. Note the time difference: since the LGC (1991), grants of <i>powers</i> to LGUs are liberally construed (Sec. 5(a)), but grants of property remain strictly construed.', keys: 'property vs. power; strict grant; statute supremacy; Sec. 5(a)' },
			{
				cat: 'F',
				level: 4,
				topic: 'Manila Lodge — application',
				title: 'Case — The marine sanctuary island',
				facts: 'R.A. No. 13001 (hypothetical) grants to the Province of Isla Verde a 20-hectare islet, previously part of the national public domain and developed at national government expense, "to be the property of the Province, for use as a marine sanctuary." It adds: "The Province is hereby authorized to lease a portion not exceeding one hectare for a marine research station." The Provincial Board leases five hectares to a resort developer for 25 years, arguing that the islet is provincial property and that the one-hectare clause merely limits research leases.',
				q: 'Is the lease valid? Answer using ALAC.',
				alac: {
					answer: 'No. The lease is void.',
					legalBasis: 'Legislative intent is drawn from the four corners of the statute read as a whole, and effect must be given to every word (<i>Manila Lodge No. 761 v. CA</i>). Legislative grants of public property to political subdivisions are strictly construed against the grantee and in favor of the public (Agpalo §7.16; <i>Manila Lodge</i>). Express authority to dispose of one portion excludes authority over the rest (<i>expressio unius</i>, applied in <i>Manila Lodge</i>).',
				application: 'The islet was public domain developed at national expense and granted "for use as a marine sanctuary," so the grant is construed strictly against the Province. If the Province could already lease the islet freely, "hereby authorized to lease a portion not exceeding one hectare" would be surplusage. The Province\'s "limitation" theory begs the question, as TDC\'s did in <i>Manila Lodge</i>: a limit presupposes an existing power, and here the statute itself is the source of the power. The resort lease exceeds the area (five hectares, not one) and the purpose (resort, not research) of the only authority granted.',
				conclusion: 'The lease is void; the islet remains devoted to the public use stated in the grant.'
			},
				weaker: 'Calling the islet "provincial property" proves too much, exactly as "property of the City" did in <i>Manila Lodge</i>. The rest of the statute shows what kind of property was granted.'
			}
		],
		quick: {
			facts: 'Act No. 1360 granted Manila the reclaimed Luneta extension "as property of the City" and authorized lease or sale only of a north-end hotel site; the City sold a south-end portion to the Elks (1911), who sold to TDC (1963).',
			issue: 'Was the land patrimonial (sellable) or public dominion?',
			ruling: 'Public dominion; south-end sale void; no estoppel; TDC\'s good faith cannot create title.',
			doctrine: 'Four corners/whole statute; public grants strictly construed; no surplusage; expressio unius.',
			reasoning: '"Hereby authorized ... to sell" would be useless if the land were already disposable; the land was filled at Insular expense; an "extension" of a public park is public.',
			cue: '"Why ask permission to sell what you already own?"'
		},
		matrix: {
			central: 'Intent from the four corners; public grants strictly construed against the grantee',
			rule: 'No surplusage; expressio unius; legislature presumed to know existing law',
			reasoning: 'Express authority to sell the north end proves the rest was not disposable; extension of a public park is public',
			distinguishing: 'The character of the statute (a public grant) dictates strict construction; later acts rejected as non-contemporaneous'
		}
	},

	/* ------------------------------------------------------------------ CORONA */
	{
		id: 'corona',
		short: 'Corona',
		title: 'Hon. Arturo C. Corona, et al. v. Court of Appeals, Leopoldo F. Bungubung and Cristeto E. Dinopol',
		gr: 'G.R. No. 97356',
		date: 'September 30, 1992',
		court: 'Third Division · Romero, J. (Bidin, Davide, Jr., Melo, JJ., concur; Gutierrez, Jr., J., on leave)',
		parties: 'Petitioners: Arturo C. Corona (Acting DOTC Secretary), Commodore Rogelio A. Dayan (PPA General Manager), Eufracio Segundo C. Pagunuran (Chairman, DOTC Administrative Action Board). Respondents: the CA; Leopoldo F. Bungubung (District Manager, Port of Manila); Cristeto E. Dinopol (Port Manager, Davao).',
		nature: 'Petition for review on certiorari of the CA decision of Dec. 17, 1990 (CA-G.R. SP No. 17195), which held that the DOTC Secretary and the AAB had no jurisdiction over the administrative cases.',
		chapters: 'Ch. VI (direct: special v. general law; in pari materia) · Ch. X (direct: partial implied repeal) · Ch. VII (removal statutes — not invoked) · Ch. VIII (forum fixed by law — not invoked)',
		doctrine: 'A later special law inconsistent with a prior general law on the same subject partially repeals it to the extent of the inconsistency, or is grafted onto it as an exception; laws in pari materia are harmonized.',
		question: 'Who has jurisdiction to initiate and hear disciplinary cases against PPA personnel below the rank of Assistant General Manager: the DOTC Secretary (Civil Service Law, Sec. 37(b)) or the PPA General Manager (PPA Charter, Sec. 8)?',
		principle: 'The PPA General Manager has original jurisdiction (with Board approval of the penalty); the DOTC Secretary has only appellate jurisdiction. The PPA Charter delimits, but does not abolish, the Secretary\'s general power.',
		timeline: [
			['1 · Oct. 6, 1975', 'P.D. 807 (Civil Service Law): heads of departments have jurisdiction over disciplinary actions against officers and employees under them (Sec. 37(b)).', 'The general law.'],
			['2 · Dec. 23, 1975', 'P.D. 857 (PPA Charter): the General Manager, with Board approval, appoints and removes personnel below Assistant General Manager (Sec. 8).', 'The special, later law.'],
			['3 · May 15, 1987', 'A.O. No. 25 makes each Department Secretary responsible for eradicating graft in the department and attached agencies.', 'Policy basis for the AAB.'],
			['4 · 1988', 'DOTC Office Order No. 88-318 creates the Administrative Action Board (AAB).', 'The forum later held to lack jurisdiction.'],
			['5 · Aug. 26, 1988', 'Complaints filed with the AAB against Bungubung (by PPA police officers) and Dinopol (by Secretary Reyes himself); the PPA GM files second cases, indorsing them to the AAB.', 'Secretary as complainant.'],
			['6 · Oct. 27 & Nov. 23, 1988', 'AAB finds Dinopol guilty in both cases; he is dismissed.', 'Decisions later declared void.'],
			['7 · 1988–1989', 'RTC Pasig enjoins the AAB and orders Dinopol reinstated; DOTC officials and Bungubung go to the Supreme Court (G.R. Nos. 86646 and 86468-69), which issues restraining orders, consolidates the cases and refers them to the CA.', 'Litigation over jurisdiction.'],
			['8 · Nov. 21, 1990', 'Court En Banc (G.R. No. 92358) resolves the reinstatement-pendente-lite issue in favor of the DOTC officials.', 'Side dispute.'],
			['9 · Dec. 17, 1990', 'CA: the DOTC Secretary has no jurisdiction; the PPA Charter, a special and later law, prevails; P.D. 1409 repealed the OP\'s review power under P.D. 807.', 'Decision under review.'],
			['10 · Mar. 31, 1992', '<i>Beja, Sr. v. CA</i> decided: power to remove implies power to investigate; GM has original jurisdiction.', 'Precedent the Court followed.'],
			['11 · Sept. 30, 1992', 'Supreme Court denies the petition; AAB decisions against Dinopol void; all cases remanded to the PPA GM.', 'Doctrine settled.']
		],
		facts: `<p>Under A.O. No. 25, DOTC Secretary Rainerio Reyes created the Administrative Action Board to act on graft cases in the Department. On August 26, 1988, two PPA police officers filed with the AAB a complaint against Leopoldo Bungubung, District Manager of the Port of Manila. On the same day, Secretary Reyes himself filed a complaint with the AAB against Cristeto Dinopol, Port Manager of Davao. The PPA General Manager also filed charges against both and indorsed them to the AAB. The AAB found Dinopol guilty and dismissed him.</p>
<p>Both officials objected that, under Sec. 8 of the PPA Charter (P.D. 857), the PPA General Manager has the power to remove personnel below the rank of Assistant General Manager. The DOTC relied on Sec. 37(b) of the Civil Service Law (P.D. 807), which gives "heads of departments" jurisdiction over disciplinary matters. The CA held that the DOTC Secretary had no jurisdiction.</p>`,
		args: `<b>Petitioners (DOTC officials):</b> the CA deprived the Secretary, as alter ego of the President, of control and supervision over personnel actions in the PPA; Dinopol submitted to the AAB\'s jurisdiction (<i>Tijam v. Sibonghanoy</i>); respondents failed to exhaust administrative remedies.`,
		issues: [
			{ q: 'Does the DOTC Secretary, as alter ego of the President, or the AAB have jurisdiction to initiate and hear administrative cases against PPA personnel below the rank of Assistant General Manager?', v: 'NO', a: 'Following <i>Beja, Sr. v. CA</i>, complaints must be filed with and investigated by the PPA General Manager, whose penalty requires PPA Board approval. The Secretary has only appellate jurisdiction (the employee may appeal to him or directly to the CSC). He cannot initiate the case, or he would be reviewing his own complaint on appeal.' },
			{ q: 'Does Sec. 8 of the PPA Charter, a special law, prevail over Sec. 37(b) of the Civil Service Law, a general law, on this point?', v: 'YES', a: 'A later special law inconsistent with a prior general law on the same subject impliedly repeals it to the extent of the inconsistency, or grafts an exception onto it. The laws, being <i>in pari materia</i>, are harmonized: the PPA Charter delimits, but does not abolish, the Secretary\'s general power over attached agencies.' },
			{ q: 'Has the DOTC Secretary completely lost control and supervision over disciplinary matters involving these employees, as the CA said?', v: 'NO', a: 'The CA\'s statement was "less than accurate." The Secretary is excluded only at the initial stage; on appeal, the Secretary, with the AAB, has "the ultimate say before recourse to the courts."' },
			{ q: 'Are respondents estopped from questioning the AAB\'s jurisdiction because they participated in its proceedings?', v: 'NO', a: 'Estoppel applies only where lack of jurisdiction was not raised early. Both moved to dismiss for lack of jurisdiction. Without laches, <i>Tijam</i> does not apply; it is only an exception to the rule that lack of jurisdiction may be raised at any stage.' },
			{ q: 'Does respondents\' failure to exhaust administrative remedies bar their challenge?', v: 'NO', a: 'The AAB was patently without jurisdiction, and only questions of law were raised, both recognized exceptions to exhaustion (<i>Quisumbing v. Gumban</i>).' }
		],
		disposition: 'Petition DENIED. The AAB decisions against Dinopol (AAB-006-88 and AAB-016-88) are declared NULL AND VOID. These and the cases against Bungubung (AAB-031-88 and Adm. Case No. 11-01-88) are REMANDED to the PPA General Manager for immediate reinvestigation.',
		ratio: {
			doctrine: 'Where a later special law on a particular subject is inconsistent with a prior general law on the same subject, the special law prevails, operating as a partial implied repeal to the extent of the inconsistency or as an exception grafted onto the general law; laws <i>in pari materia</i> are harmonized (<i>interpretare et concordare leges legibus est optimus interpretandi modus</i>).',
			plain: 'The Civil Service Law says department heads discipline their employees. The PPA Charter says the PPA General Manager removes PPA personnel below Assistant GM. The specific PPA law wins at the start: the case must begin with the GM. But both laws still work, because the employee can appeal to the DOTC Secretary afterward. The Secretary just cannot be the one who files the case and then judges it on appeal.',
			wording: 'Sec. 8(d), P.D. 857: "The General Manager shall, subject to the approval by the Board, appoint and remove personnel below the rank of Assistant General Manager." Sec. 37(b), P.D. 807: heads of departments "shall have jurisdiction to investigate and decide matters involving disciplinary action against officers and employees under their jurisdiction."',
			why: 'The PPA Charter is special (only PPA personnel) and later (Dec. 23 vs. Oct. 6, 1975). The power to remove implies the power to investigate (<i>Beja</i>). The legislature is presumed to have had the prior statute in mind, so the Charter "delimited" the general power. The Administrative Code defines attachment as a "lateral relationship" for policy coordination, and a department may not act directly where a function is entrusted by law to a subordinate. Letting the Secretary initiate cases would produce the "absurd spectacle" of the complainant reviewing his own complaint (<i>nemo potest esse simul actor et judex</i>).',
			rejected: 'The CA\'s "sweeping statement" that the Secretary lost all control was corrected. The A.O. No. 25 "shortcut," though laudable, could not override the forum fixed by statute. Estoppel (<i>Tijam</i>) and non-exhaustion did not apply.',
			lesson: 'A special law can prevail without wiping out the general law; carve out the special field and keep the general law operating elsewhere (here, at the appellate stage).'
		},
		beginner: {
			oneLine: 'The DOTC Secretary\'s board tried port officials; the Court said the PPA\'s own General Manager must hear these cases first, with the Secretary reviewing only on appeal.',
			issue: 'Who hears disciplinary cases against PPA port managers first: the DOTC Secretary under the general Civil Service Law, or the PPA General Manager under the PPA\'s special charter?',
			answer: 'The PPA General Manager first; the Secretary only on appeal.',
			analogy: 'The school handbook says the principal disciplines all students; the varsity rules say the coach disciplines varsity players. The coach handles it first; the principal can review on appeal, but cannot both file the complaint and decide the appeal.',
			memorize: 'A later special law prevails over a prior general law to the extent of the inconsistency; laws <i>in pari materia</i> are harmonized; no one can be both litigant and judge.',
			misconception: 'That the Secretary completely lost control. The Court called that "less than accurate."'
		},
		card: {
			facts: 'Pursuant to A.O. No. 25, DOTC Secretary Reyes created the Administrative Action Board (AAB) to hear graft and corruption cases in the department. Complaints against Bungubung, PPA District Manager of the Port of Manila, and Dinopol, PPA Port Manager of Davao, were filed directly with the AAB, one of them by Secretary Reyes himself, and the AAB found Dinopol guilty and dismissed him. Both challenged the AAB\'s jurisdiction, arguing that under Sec. 8 of the PPA Charter (P.D. No. 857) the PPA General Manager has the power to remove personnel below the rank of Assistant General Manager. The CA held that the DOTC Secretary had no jurisdiction because the PPA Charter, a special and later law, prevails over the Civil Service Law (P.D. No. 807).',
			issues: '(1) Whether the DOTC Secretary or the AAB may initiate and hear administrative cases against PPA personnel below the rank of Assistant General Manager. (2) Whether Sec. 8 of the PPA Charter prevails over Sec. 37(b) of the Civil Service Law.',
			ruling: '(1) No. Following Beja v. CA, complaints must be filed with the PPA General Manager, who investigates and, with Board approval, imposes the penalty; the DOTC Secretary has only appellate jurisdiction, since otherwise he would be both complainant and reviewer, and no one can be at once a litigant and judge. (2) Yes. A later special law inconsistent with a prior general law on the same subject impliedly repeals it to that extent or grafts an exception onto it; since the two laws are in pari materia, they are harmonized: the PPA Charter merely delimits the Secretary\'s general power. Petition denied; AAB decisions against Dinopol void; cases remanded to the PPA GM.'
		},
		recitation: [
			['What are the material facts?', 'The DOTC\'s Administrative Action Board heard graft cases against two PPA port officials below Assistant GM; one complaint was filed by the DOTC Secretary himself. The officials argued that under the PPA Charter only the PPA General Manager could hear such cases.'],
			['What is the legal issue?', 'Whether the DOTC Secretary (and the AAB) under Sec. 37(b) of the Civil Service Law, or the PPA General Manager under Sec. 8 of the PPA Charter, has jurisdiction to initiate and hear the cases.'],
			['What did the Supreme Court rule?', 'The PPA GM has original jurisdiction, with Board approval of the penalty; the DOTC Secretary has only appellate jurisdiction. The AAB decisions against Dinopol were void, and all cases were remanded to the PPA GM.'],
			['What doctrines of statutory construction were applied?', 'A later special law prevails over a prior general law, by partial implied repeal or as an exception; statutes <i>in pari materia</i> are harmonized; the legislature is presumed to know prior statutes; the power to remove implies the power to investigate; avoid absurd results.'],
			['Why couldn\'t the Secretary initiate the cases?', 'Because he would then review his own complaint on appeal, the "absurd spectacle" of one person being complainant and judge (<i>nemo potest esse simul actor et judex</i>).'],
			['How would the result change if the PPA Charter had said only that personnel "may be disciplined in accordance with law"?', 'Then the Charter would state only a general rule on the point, and the Civil Service Law\'s specific grant to department heads could govern (§6.22 exception). The Charter prevailed because it specifically lodged the power to remove in the GM.'],
			['Why were the respondents not estopped?', 'They raised lack of jurisdiction early (motions to dismiss); <i>Tijam</i> estoppel requires laches and is only an exception to the rule that lack of jurisdiction may be raised at any stage.']
		],
		exam: [
			{ cat: 'F', level: 1, topic: 'Corona — recall', q: 'What do Sec. 8 of the PPA Charter and Sec. 37(b) of the Civil Service Law each provide?', short: 'Sec. 8 (P.D. 857): the PPA General Manager, subject to Board approval, appoints and removes personnel below the rank of Assistant General Manager. Sec. 37(b) (P.D. 807): heads of departments have jurisdiction to investigate and decide disciplinary matters against officers and employees under their jurisdiction.', keys: 'GM appoints and removes; heads of departments' },
			{ cat: 'F', level: 1, topic: 'Corona — recall', q: 'Which of the two laws in Corona was enacted later, and which is special?', short: 'The PPA Charter (P.D. 857, Dec. 23, 1975) is both the later law and the special law; the Civil Service Law (P.D. 807, Oct. 6, 1975) is the earlier, general law.', keys: 'PPA Charter later and special' },
			{ cat: 'F', level: 2, topic: 'Corona — recall', q: 'What did the Court hold on the DOTC Secretary\'s jurisdiction, and what was the disposition?', short: 'The Secretary has only appellate jurisdiction; the PPA GM has original jurisdiction. The AAB decisions against Dinopol were declared void, and all cases were remanded to the PPA GM for reinvestigation.', keys: 'appellate only; AAB decisions void; remanded' },
			{ cat: 'F', level: 2, topic: 'Corona — discussion', q: 'Explain how the Court in Corona harmonized the PPA Charter and the Civil Service Law.', short: 'Being <i>in pari materia</i>, the laws were read together to form one system: the PPA Charter governs the original stage (complaint filed with and investigated by the PPA GM, penalty approved by the Board), and the Civil Service Law governs the appellate stage (appeal to the DOTC Secretary, where the AAB plays its role, or directly to the CSC). The Charter "delimited" the Secretary\'s general power rather than abolishing it.', keys: 'in pari materia; original vs. appellate; delimited not abolished' },
			{ cat: 'F', level: 3, topic: 'Corona — discussion', q: 'What absurd result did the Court avoid in Corona, and what maxim did it invoke?', short: 'Letting the DOTC Secretary initiate cases would mean the complainant (as in AAB-006-88, filed by Secretary Reyes) later reviewing his own complaint on appeal. The Court invoked <i>nemo potest esse simul actor et judex</i>: no one can be at once a litigant and a judge, unless he inhibits or waives review at the outset.', keys: 'complainant reviewing own complaint; nemo potest esse simul actor et judex' },
			{ cat: 'F', level: 3, topic: 'Corona — comparison', q: 'Compare Corona and Magtajas on the relationship between special and general laws.', short: 'Both used <i>interpretare et concordare leges legibus</i> and refused to let one law wipe out the other. In <i>Corona</i>, the special law (PPA Charter) was <b>later</b> and carved an exception out of the earlier general law. In <i>Magtajas</i>, the special law (P.D. 1869) was <b>earlier</b> and survived the later general law (LGC). The special law prevailed in both, whichever came first.', keys: 'later special vs. earlier special; harmonization; special prevails regardless of date' },
			{
				cat: 'F',
				level: 4,
				topic: 'Corona — application',
				title: 'Case — The fisheries port authority',
				facts: 'R.A. No. 13050 (hypothetical, 2020), the charter of the Philippine Fishing Ports Authority (PFPA), an agency attached to the Department of Agriculture, provides: "The Executive Director shall, with the approval of the Board, appoint, discipline and remove all personnel below the rank of Deputy Executive Director." The Secretary of Agriculture personally files a dishonesty complaint against a PFPA port supervisor with the Department\'s own investigating committee, which recommends dismissal; the Secretary approves it. The supervisor challenges the dismissal, and the Secretary invokes Sec. 37(b) of the Civil Service Law.',
				q: 'Is the dismissal valid? Answer using ALAC.',
				alac: {
					answer: 'No. The Department\'s committee and the Secretary lacked original jurisdiction; the dismissal is void.',
					legalBasis: 'A later special law inconsistent with a prior general law on the same subject impliedly repeals it to the extent of the inconsistency, or is grafted onto it as an exception; laws <i>in pari materia</i> are harmonized (<i>Corona v. CA</i>; Agpalo §§6.20–6.22). The power to remove implies the power to investigate (<i>Beja, Sr. v. CA</i>). No one can be at once a litigant and a judge (<i>Corona</i>).',
				application: 'The PFPA charter is special (it covers only PFPA personnel) and later than the Civil Service Law, and it specifically lodges discipline and removal of personnel below Deputy Executive Director in the Executive Director, with Board approval. As in <i>Corona</i>, the Civil Service Law\'s general grant to department heads yields at the original stage, but survives at the appellate stage. The Secretary also filed the complaint himself, so his deciding it would make him complainant and judge.',
				conclusion: 'The dismissal is void; the case should be filed with and heard by the PFPA Executive Director, with the Secretary reviewing only on appeal (and inhibiting himself, since he is the complainant).'
			},
				weaker: 'The Secretary\'s reading would turn a special charter into a dead letter and reproduce the "absurd spectacle" condemned in <i>Corona</i>.'
			}
		],
		quick: {
			facts: 'DOTC\'s AAB tried two PPA port managers (one complaint filed by the Secretary himself); PPA Charter gives the PPA GM power to remove personnel below Assistant GM.',
			issue: 'DOTC Secretary (Civil Service Law) or PPA GM (PPA Charter): who has original jurisdiction?',
			ruling: 'PPA GM originally; Secretary only on appeal; AAB decisions void; remanded.',
			doctrine: 'Later special law partially repeals / is an exception to prior general law; in pari materia harmonized.',
			reasoning: 'Power to remove implies power to investigate; legislature knows prior laws; Secretary cannot be complainant and judge.',
			cue: '"Coach first, principal on appeal."'
		},
		matrix: {
			central: 'Special law prevails over general law; statutes in pari materia harmonized',
			rule: 'Generalia specialibus; partial implied repeal; presumption legislature knows prior laws; necessary implication',
			reasoning: 'PPA Charter (special, later) controls the original stage; Civil Service Law survives at the appellate stage',
			distinguishing: 'Special law is later; result is a two-stage scheme; nemo potest esse simul actor et judex'
		}
	},

	/* ------------------------------------------------------------------ MAGTAJAS */
	{
		id: 'magtajas',
		short: 'Magtajas',
		title: 'Mayor Pablo P. Magtajas and the City of Cagayan de Oro v. Pryce Properties Corporation, Inc. and Philippine Amusement and Gaming Corporation',
		gr: 'G.R. No. 111097',
		date: 'July 20, 1994',
		court: 'En Banc · Cruz, J. (unanimous; Padilla, J. and Davide, Jr., J. filed separate concurring opinions)',
		parties: 'Mayor Pablo P. Magtajas and the City of Cagayan de Oro (petitioners) v. Pryce Properties Corporation, Inc. (lessor of the casino premises; dropped as respondent on June 13, 1994) and PAGCOR.',
		nature: 'Petition for review under Rule 45 of the CA decision of March 31, 1993 declaring two city ordinances invalid and prohibiting their enforcement (reconsideration denied July 13, 1993).',
		chapters: 'Ch. VI (direct: harmonization; general v. special) · Ch. X (direct: implied repeal; general repealing clause) · Ch. VII (Sec. 5 LGC — exam point) · Ch. VIII ("shall" — supporting) · Ch. XI (local autonomy — supporting) · also noscitur a sociis (Ch. V)',
		doctrine: 'Under noscitur a sociis, "gambling" in LGC Sec. 458(a)(1)(v) means illegal gambling; implied repeals are disfavored and laws must be harmonized; an ordinance cannot contravene a statute.',
		question: 'Could Cagayan de Oro, under the LGC, prohibit casinos operated by PAGCOR under P.D. 1869?',
		principle: 'LGUs may (and must) suppress all gambling except gambling authorized by statutes like P.D. 1869; the LGC did not repeal P.D. 1869; ordinances contrary to it are ultra vires and void.',
		timeline: [
			['1 · 1983', 'P.D. 1869 (PAGCOR Charter) centralizes and regulates games of chance, including casinos.', 'The special law.'],
			['2 · 1991', '<i>Basco v. PAGCOR</i> (197 SCRA 52) upholds P.D. 1869. The Local Government Code (R.A. 7160) is enacted.', 'Validity of the special law; the later general law.'],
			['3 · 1992', 'PAGCOR leases part of a building owned by Pryce Properties to open a casino in Cagayan de Oro; civic and religious groups protest.', 'The controversy begins.'],
			['4 · Dec. 7, 1992', 'Ordinance No. 3353: no business permits for (and cancellation of permits of) establishments allowing casino use of their premises.', 'First ordinance.'],
			['5 · Jan. 4, 1993', 'Ordinance No. 3375-93: "The operation of gambling CASINO in the City of Cagayan de Oro is hereby prohibited," with penalties.', 'The "sterner" ordinance.'],
			['6 · 1993', 'Pryce sues in the CA; PAGCOR intervenes. CA declares the ordinances invalid and prohibits their enforcement (Mar. 31, 1993); reconsideration denied (July 13, 1993).', 'Decision under review.'],
			['7 · June 13, 1994', 'Pryce dropped as respondent.', 'PAGCOR remains.'],
			['8 · July 20, 1994', 'Supreme Court en banc denies the petition; ordinances ultra vires and void.', 'Doctrine settled.']
		],
		facts: `<p>In 1992 PAGCOR decided to expand to Cagayan de Oro City. It leased part of a building owned by Pryce Properties and prepared to open a casino. Civic organizations, religious groups and the city's officials opposed it. The Sangguniang Panlungsod enacted Ordinance No. 3353 (no business permits for casino premises) and Ordinance No. 3375-93 (prohibiting the operation of casinos), invoking Sec. 458 of the Local Government Code, which empowers the sanggunian to enact ordinances to "prevent, suppress and impose appropriate penalties for ... gambling and other prohibited games of chance."</p>
<p>PAGCOR operates casinos under P.D. 1869, which centralizes and regulates games of chance and was upheld in <i>Basco v. PAGCOR</i>. Pryce, joined by PAGCOR, challenged the ordinances, and the CA declared them invalid.</p>`,
		args: `<b>Petitioners (the City):</b>${ul([
			'Secs. 16 and 458 of the LGC empower the city to prohibit all gambling; gambling is not allowed by general law or the Constitution.',
			'<i>Ubi lex non distinguit, nec nos distinguere debemos</i>: the Code says "gambling" without distinction; had Congress meant to exclude legal gambling, it would have said so.',
			'Later law prevails: the LGC, enacted after P.D. 1869, modified it "pro tanto," and Sec. 534(f) repeals or modifies inconsistent decrees.',
			'Liberal construction (Sec. 5) and local autonomy favor the city.',
			'Gambling is intrinsically harmful, and P.D. 1869 is "a martial law instrument."'
		])}`,
		issues: [
			{ q: '(Preliminary) Is the morality or wisdom of legalized gambling a justiciable issue?', v: 'NO', a: 'Gambling is not illegal per se, and the Constitution does not prohibit or even mention it. Whether to prohibit, allow or partly allow it is for Congress; the only question is the legal validity of the ordinances.' },
			{ q: 'Does "gambling" in LGC Sec. 458(a)(1)(v) include gambling authorized by law, such as PAGCOR casinos?', v: 'NO', a: 'Under <i>noscitur a sociis</i>, "gambling," associated with "and other prohibited games of chance," refers only to illegal gambling. Contrary to petitioners, the Code <i>does</i> make the distinction.' },
			{ q: 'Did the LGC, through Sec. 458 and the general repealing clause in Sec. 534(f), impliedly repeal or modify P.D. 1869?', v: 'NO', a: 'P.D. 1869 is not among the laws specifically repealed in Sec. 534(a)–(e); implied repeals are not presumed absent a clear showing of intent; later laws (R.A. 7309, R.A. 7648) tap PAGCOR revenues; and the two laws can be harmonized. PAGCOR\'s power "remains unimpaired."' },
			{ q: 'Are Ordinances 3353 and 3375-93 valid exercises of police power?', v: 'NO', a: 'An ordinance must not contravene the Constitution or any statute. These contravene P.D. 1869 and the public policy it expresses; a mere ordinance cannot amend or nullify a statute. They are ultra vires and void.' }
		],
		disposition: 'Petition DENIED; CA decision AFFIRMED, with costs against petitioners. Ordinance No. 3353 and Ordinance No. 3375-93 are ultra vires and void.',
		extra: box(
			'neutral',
			'Separate opinions (not the ruling of the Court)',
			ul([
				'<b>Padilla, J. (concurring):</b> agreed that ordinances cannot modify or repeal P.D. 1869, but reiterated that gambling erodes moral character ("what is legal is not always moral") and urged the national government to re-examine imposing a casino on an unwilling city.',
				'<b>Davide, Jr., J. (concurring in part):</b> Pryce\'s action was really for declaratory relief, outside the CA\'s jurisdiction; agreed the ordinances cannot repeal P.D. 1869; but the CA should not have declared them <i>unconstitutional</i>, since they could be reconciled with P.D. 1869 by construing them as not applying to PAGCOR. This is itself a harmonization move, but it is not the ruling.'
			])
		),
		ratio: {
			doctrine: 'A word takes its meaning from its companions (<i>noscitur a sociis</i>); implied repeals are disfavored, and courts must reconcile statutes rather than pit them against each other (<i>interpretare et concordare leges legibus</i>); a general law does not repeal a special law absent clear intent (<i>Lichauco</i>); an ordinance cannot contravene a statute, since the delegate cannot be superior to the principal.',
			plain: 'The LGC lets cities stamp out "gambling and other prohibited games of chance." The words "other prohibited" tell you the "gambling" meant is the illegal kind. PAGCOR casinos are legal under a national law the LGC did not repeal. A city ordinance cannot cancel a national law, so the casino ban was void.',
			wording: 'LGC Sec. 458(a)(1)(v): the sanggunian "shall ... enact ordinances intended to prevent, suppress and impose appropriate penalties for ... gambling and other prohibited games of chance..." Sec. 534(f): "All general and special laws ... decrees ... inconsistent with any of the provisions of this Code are hereby repealed or modified accordingly."',
			why: 'The word "other" links "gambling" to the class of "prohibited" games; the surrounding list (prostitution, drug addiction, fraudulent devices) is a list of unlawful activities. "Shall" is mandatory, so petitioners\' reading would require every LGU to ban legal gambling, leaving PAGCOR "a toothless tiger or a white elephant" and letting cities stop the PCSO lottery or the San Lazaro races. The specific list in Sec. 534(a)–(e) omits P.D. 1869. Later laws treat P.D. 1869 as alive. LGUs are "mere tenants at will of the legislature" (Dillon\'s rule language from <i>Clinton v. Cedar Rapids</i>), and local autonomy reduced but did not remove Congress\'s control.',
			rejected: '<i>Ubi lex non distinguit</i> did not apply because the law does distinguish ("prohibited"). The "modified pro tanto" theory was in substance a total repeal. Reliance on Sec. 534(f) alone ignored the rest of the provision.',
			lesson: 'Read a word with its neighbors; read a repealing clause as a whole; reconcile statutes before declaring one repealed; and remember the hierarchy of laws.'
		},
		beginner: {
			oneLine: 'Cagayan de Oro banned casinos to stop a PAGCOR casino; the Court said a city ordinance cannot ban what a national law allows.',
			issue: 'Does the LGC\'s power to suppress "gambling and other prohibited games of chance" cover legal, PAGCOR-run casinos?',
			answer: 'No. "Gambling" there means illegal gambling, and the LGC did not repeal the PAGCOR law.',
			analogy: 'A dorm rule lets the resident adviser confiscate "firecrackers and other prohibited items." It does not let the adviser confiscate a student\'s school-approved science-fair kit.',
			memorize: 'Noscitur a sociis; implied repeals disfavored; harmonize statutes; an ordinance cannot contravene a statute.',
			misconception: 'That the Court said gambling is good or moral. It said the morality of gambling is for Congress, not the courts.'
		},
		card: {
			facts: 'PAGCOR, created by P.D. No. 1869 to centralize and regulate all games of chance, leased part of a building owned by Pryce Properties to open a casino in Cagayan de Oro City. Amid public protests, the Sangguniang Panlungsod enacted Ordinance No. 3353, prohibiting business permits for casinos, and Ordinance No. 3375-93, prohibiting the operation of casinos, invoking its power under Sec. 458 of the Local Government Code to suppress "gambling and other prohibited games of chance." The CA declared both ordinances invalid. The City argued that the Code, a later law, had repealed or modified P.D. No. 1869 and allowed it to ban all forms of gambling.',
			issues: '(1) Whether "gambling" in Sec. 458 of the Local Government Code includes gambling authorized by law, such as PAGCOR casinos. (2) Whether the Code impliedly repealed P.D. No. 1869, making the ordinances valid.',
			ruling: '(1) No. Under noscitur a sociis, "gambling" is read with the words associated with it, "and other prohibited games of chance," so it refers only to illegal gambling. (2) No. P.D. No. 1869 is not among the laws specifically repealed by the Code, implied repeals are not favored, and later laws even draw funds from PAGCOR. Courts must harmonize statutes, so LGUs may suppress all gambling except that allowed by statutes like P.D. No. 1869. Since an ordinance cannot prevail over a statute and the delegate cannot be superior to its principal, the ordinances are ultra vires and void. Petition denied.'
		},
		recitation: [
			['What are the material facts?', 'PAGCOR, under P.D. 1869, prepared to open a casino in Cagayan de Oro. The city passed two ordinances banning casinos, citing LGC Sec. 458\'s power to suppress "gambling and other prohibited games of chance." The CA declared them invalid.'],
			['What are the legal issues?', 'Whether "gambling" in Sec. 458 includes legal gambling like PAGCOR casinos; whether the LGC impliedly repealed or modified P.D. 1869; and whether the ordinances were valid exercises of police power.'],
			['What did the Supreme Court rule?', '"Gambling" means illegal gambling; the LGC did not repeal P.D. 1869; the ordinances contravene a statute and are ultra vires and void. Petition denied.'],
			['What construction doctrines were applied?', '<i>Noscitur a sociis</i>; <i>ubi lex non distinguit</i> held inapplicable; implied repeals disfavored; general law does not repeal special law (<i>Lichauco</i>); read the repealing clause as a whole; harmonize statutes; avoid absurd consequences; "shall" is mandatory; subsequent legislation as an extrinsic aid; hierarchy of laws.'],
			['Why did the Court say petitioners were "playing with words"?', 'They conceded an ordinance cannot prevail over a statute, but argued the LGC itself modified P.D. 1869. Since Sec. 458 says "shall," their reading would require every LGU to ban legal gambling, which is in substance a total repeal of P.D. 1869, not a mere modification.'],
			['How would the result change if Congress had listed P.D. 1869 in Sec. 534(a)–(e)?', 'Then there would be an express repeal (or modification) of P.D. 1869 to the extent stated, and the city\'s power over casinos would have to be measured against what remained of it.'],
			['What did Justice Davide say, and why is it not the ruling?', 'He would have construed the ordinances as not applying to PAGCOR instead of voiding them, and said the CA had no jurisdiction over what was really declaratory relief. It is a concurring opinion; the majority harmonized the two <i>statutes</i> and voided the ordinances.']
		],
		exam: [
			{ cat: 'F', level: 1, topic: 'Magtajas — recall', q: 'What did the two Cagayan de Oro ordinances in Magtajas provide?', short: 'Ordinance No. 3353 prohibited the issuance of business permits for, and cancelled existing permits of, establishments allowing their premises to be used for a casino. Ordinance No. 3375-93 prohibited "the operation of gambling CASINO" in the city, with fines, closure and imprisonment.', keys: 'no permits for casino premises; casino operation prohibited' },
			{ cat: 'F', level: 1, topic: 'Magtajas — recall', q: 'Which later laws did the Court cite as showing that Congress regarded P.D. 1869 as still in force?', short: 'R.A. 7309 (creating a Board of Claims for victims of unjust imprisonment or violent crimes) and R.A. 7648 (measures to address the power crisis), both of which tap PAGCOR revenues.', keys: 'R.A. 7309; R.A. 7648; PAGCOR revenues' },
			{ cat: 'F', level: 2, topic: 'Magtajas — recall', q: 'State the six requisites of a valid ordinance cited in Magtajas. Which one decided the case?', short: 'An ordinance (1) must not contravene the Constitution or any statute; (2) must not be unfair or oppressive; (3) must not be partial or discriminatory; (4) may regulate but not prohibit trade; (5) must be general and consistent with public policy; (6) must not be unreasonable. The first decided the case: the ordinances contravened P.D. 1869.', keys: 'six requisites; first one decisive; contravenes statute' },
			{ cat: 'F', level: 2, topic: 'Magtajas — discussion', q: 'Explain how the Court applied noscitur a sociis to the word "gambling" in Sec. 458.', short: 'Sec. 458 speaks of "gambling and other prohibited games of chance." The word "other" makes gambling one member of the class of "prohibited" games of chance, so "gambling" takes the meaning of its companion words: illegal gambling. The surrounding list (prostitution, houses of ill repute, drug addiction, fraudulent devices) likewise names unlawful activities. The Court called the language "clear and unmistakable."', keys: 'other prohibited; same class; illegal gambling; surrounding list' },
			{ cat: 'F', level: 3, topic: 'Magtajas — discussion', q: 'Why did the Court reject the argument that the LGC repealed or modified P.D. 1869 through Sec. 534(f)?', short: 'Because petitioners cited only paragraph (f), a general repealing clause, while paragraphs (a)–(e) painstakingly list the specific laws repealed, and P.D. 1869 is not among them. That left only implied repeal, which is not presumed without a clear and unmistakable showing of intent, especially where the laws relate as general (LGC) to special (P.D. 1869) (<i>Lichauco</i>). Later laws tapping PAGCOR revenues confirmed P.D. 1869 was alive, and the laws could be harmonized.', keys: 'Sec. 534 as a whole; specific list; implied repeal disfavored; general vs. special; harmonize' },
			{ cat: 'F', level: 3, topic: 'Magtajas — comparison', q: 'Compare Magtajas and Manila Lodge as cases limiting local governments.', short: 'Both hold a local government to the limits set by national legislation. <i>Manila Lodge</i> strictly construed a legislative grant of property to Manila: express authority to sell one portion excluded the rest. <i>Magtajas</i> held that local police power cannot override a national statute: an ordinance banning PAGCOR casinos was void, and local autonomy did not change that. One concerns what the city owns; the other, what the city may regulate.', keys: 'property grant vs. police power; statute supremacy; local autonomy' },
			{
				cat: 'F',
				level: 4,
				topic: 'Magtajas — application',
				title: 'Case — The charity lottery outlets',
				facts: 'The (hypothetical) National Charity Sweepstakes Act authorizes a government corporation to operate lottery outlets nationwide, with proceeds going to hospitals. San Roque City, citing LGC Sec. 458 and its general welfare power, passes an ordinance "prohibiting all gambling outlets, including lottery outlets of any kind," and orders the closure of the corporation\'s outlets. The city argues that "gambling" in Sec. 458 includes all gambling and that local autonomy allows it to protect public morals.',
				q: 'Is the ordinance valid as applied to the sweepstakes outlets? Answer using ALAC.',
				alac: {
					answer: 'No. As applied to the sweepstakes outlets, the ordinance is ultra vires and void.',
					legalBasis: 'Under <i>noscitur a sociis</i>, "gambling" in LGC Sec. 458, associated with "other prohibited games of chance," refers only to illegal gambling; LGUs may suppress all gambling except that authorized by statute (<i>Magtajas v. Pryce</i>). Implied repeals are disfavored, and a general law (the LGC) does not repeal a special law absent clear intent. An ordinance must not contravene a statute; the delegate cannot be superior to the principal, and local autonomy does not alter this (<i>Magtajas</i>).',
				application: 'The sweepstakes outlets are authorized by a special national statute, so they are not "prohibited games of chance" within Sec. 458. The LGC did not repeal that statute; as in <i>Magtajas</i>, the exception for statute-authorized gambling is read into the Code. The city\'s ordinance, by closing outlets the statute authorizes, contravenes the statute. The city\'s appeal to public morals and local autonomy cannot overcome the hierarchy of laws; the wisdom of a national lottery is for Congress.',
				conclusion: 'The ordinance cannot be enforced against the sweepstakes outlets, though it remains valid as to illegal gambling.'
			},
				weaker: 'The city\'s position is the <i>Magtajas</i> petitioners\' argument in new clothes, and the Court specifically warned that it would let a city stop national lotteries by ordinance.'
			}
		],
		quick: {
			facts: 'Cagayan de Oro ordinances banned casinos to stop a PAGCOR casino, invoking LGC Sec. 458 ("gambling and other prohibited games of chance").',
			issue: 'Does "gambling" include legal gambling? Did the LGC repeal P.D. 1869?',
			ruling: '"Gambling" = illegal gambling; no repeal; ordinances ultra vires and void.',
			doctrine: 'Noscitur a sociis; implied repeals disfavored; harmonize; ordinance cannot contravene statute.',
			reasoning: '"Other prohibited" defines the class; P.D. 1869 not in Sec. 534(a)–(e); later laws rely on PAGCOR; delegate not superior to principal.',
			cue: '"Gambling keeps bad company."'
		},
		matrix: {
			central: 'Noscitur a sociis; implied repeals disfavored; harmonization',
			rule: 'Word read with companions; general law does not repeal special law; repealing clause read as a whole; hierarchy of laws',
			reasoning: '"Gambling" is one of the "prohibited games of chance"; P.D. 1869 not specifically repealed; exception for statute-authorized gambling read into the LGC',
			distinguishing: 'Special law is earlier and survives a later general law; also answers ubi lex non distinguit'
		}
	}
];

/* ------------------------------------------------------------------ recall drill */

export const recallDrill: [string, CaseId][] = [
	['Four accused, one Information alleging "five (5) or more persons."', 'catiis'],
	['A tax address of "Butuan City" kept for more than 25 years.', 'aquino'],
	['"Hereby authorized ... to lease ... to sell" a tract at the north end.', 'manila-lodge'],
	['Port managers tried by a department\'s Administrative Action Board.', 'corona'],
	['"A toothless tiger or a white elephant."', 'magtajas'],
	['Notice of delinquency as the substitute for formal demand before "any of such remedies."', 'aquino'],
	['<i>Nemo potest esse simul actor et judex.</i>', 'corona'],
	['Reclaimed land filled "without cost to the City."', 'manila-lodge'],
	['<i>Noscitur a sociis</i> applied to "gambling."', 'magtajas'],
	['<i>People v. Romero</i> distinguished as not deciding the one-person question.', 'catiis'],
	['<i>Talusan v. Tayag</i>: a tax sale is <i>in personam</i>.', 'aquino'],
	['The Government is never estopped by the mistakes of its agents.', 'manila-lodge'],
	['A general repealing clause (Sec. 534(f)) read with the specific list in paragraphs (a)–(e).', 'magtajas'],
	['<i>Beja, Sr. v. CA</i>: the power to remove implies the power to investigate.', 'corona'],
	['An Executive Judge approved bail bonds though the branch was open.', 'catiis'],
	['A right to repurchase "for public purposes" annotated on a 1911 title.', 'manila-lodge'],
	['<i>Tijam v. Sibonghanoy</i> held inapplicable because the objection was raised early.', 'corona'],
	['R.A. 7309 and R.A. 7648 tap the revenues of the challenged entity.', 'magtajas'],
	['The treasurer\'s option: tax-roll address, or residence "if known."', 'aquino'],
	['"When not committed by a syndicate as above defined..."', 'catiis']
];

const CASE_ORDER: CaseId[] = ['catiis', 'aquino', 'manila-lodge', 'corona', 'magtajas'];

/* ------------------------------------------------------------------ render */

function renderCase(c: CaseStudy, k: number) {
	const out: string[] = [];
	out.push(h3(`case-${c.id}`, `Case ${k} · ${CASE_NAMES[c.id]}`));
	out.push(`<p class="rv-meta">${c.chapters.split(' · ').map((x) => badge(x, x.includes('direct') ? 'red' : 'neutral')).join('')}</p>`);

	out.push(h4('A. Case identification'));
	out.push(
		table(
			['Item', 'Details'],
			[
				['Title', `<b>${c.title}</b>`],
				['G.R. number · date', `${c.gr} · ${c.date}`],
				['Court', c.court],
				['Parties', c.parties],
				['Nature', c.nature],
				['Central doctrine', c.doctrine],
				['Principal legal question', c.question],
				['Main principle', c.principle]
			]
		)
	);

	out.push(h4('B. Timeline of material events'));
	out.push(table(['Stage', 'Event', 'Legal significance'], c.timeline.map(([s, e, g]) => [`<b>${s}</b>`, e, g])));

	out.push(h4('C. Digest: facts, issues and ruling'));
	out.push(`<div class="rv-card"><p class="rv-card-title">Facts</p>${c.facts}</div>`);
	out.push(box('neutral', 'Arguments of the parties (not the ruling)', p(c.args)));
	out.push(
		`<div class="rv-card"><p class="rv-card-title">Issues and ruling</p>${ol(
			c.issues.map((i) => `<p class="rv-question">${i.q}</p><p><span class="rv-badge ${i.v === 'YES' ? 'rv-green' : 'rv-red'}">${i.v}</span> ${i.a}</p>`)
		)}</div>`
	);
	out.push(box('green', 'Disposition', p(c.disposition)));
	if (c.extra) out.push(c.extra);

	out.push(h4('D. Doctrine and ratio decidendi'));
	out.push(box('red', 'Doctrine (one sentence)', p(c.ratio.doctrine)));
	out.push(
		`<div class="rv-card">${dl([
			['Ratio in plain English', c.ratio.plain],
			['Statutory wording at issue', c.ratio.wording],
			['Why the Court read it that way', c.ratio.why],
			['Why the competing reading lost', c.ratio.rejected],
			['Lesson for statutory interpretation', c.ratio.lesson]
		])}</div>`
	);

	out.push(h4('E. Beginner-friendly explanation'));
	out.push(
		`<div class="rv-card">${dl([
			['The whole case in one sentence', c.beginner.oneLine],
			['The issue in plain English', c.beginner.issue],
			['The Court\'s answer', c.beginner.answer],
			['Analogy', c.beginner.analogy],
			['Doctrine to memorize', `<b>${c.beginner.memorize}</b>`],
			['Misconception to avoid', c.beginner.misconception]
		])}</div>`
	);

	out.push(h4('Index card — handwritten version (Facts · Issue/s · Ruling)'));
	out.push(`<div class="rv-card">${dl([
		['Facts', c.card.facts],
		['Issue/s', c.card.issues],
		['Ruling', c.card.ruling]
	])}</div>`);

	out.push(h4('F. Recitation practice'));
	out.push(
		ol(
			c.recitation.map(([q, a]) => `<p class="rv-question">${q}</p><details class="rv-reveal"><summary>Suggested answer</summary><div>${p(a)}</div></details>`),
			'rv-recall'
		)
	);

	out.push(h4('G. Case-based examination practice'));
	out.push(`<p class="sg-intro">Three recall questions, two discussion questions, one comparison and one ALAC hypothetical.</p>`);
	out.push(...c.exam.map((x, i) => renderQuestionWithReveal(`K${k}.${i + 1}`, x)));
	return out.join('\n');
}

export function renderCases() {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="five-cases">Five-Case Mastery</h2>`);
	out.push(
		`<p class="sg-intro">The five assigned cases, each in the same order: identification, timeline, digest (facts, issues, ruling), doctrine and ratio, a beginner-friendly explanation, an index card, recitation practice, and exam practice. Then the comparison matrix and a recall drill.</p>`
	);
	out.push(...cases.map((c, i) => renderCase(c, i + 1)));

	out.push(h3('five-case-matrix', 'Five-case comparison matrix'));
	out.push(
		table(
			['Case', 'Central doctrine', 'Interpretive rule', 'Key reasoning', 'Distinguishing point'],
			cases.map((c) => [`<a href="#case-${c.id}"><b>${c.short}</b></a><br><span class="rv-cite">${c.gr}, ${c.date}</span>`, c.matrix.central, c.matrix.rule, c.matrix.reasoning, c.matrix.distinguishing])
		)
	);
	out.push(h4('How the five cases relate'));
	out.push(
		ul([
			'<b>Catiis and Magtajas</b> both reject a reading built on a single word. In <i>Catiis</i>, "any person" is controlled by the definition later in the sentence; in <i>Magtajas</i>, "gambling" is controlled by "other prohibited games of chance" beside it.',
			'<b>Catiis and Aquino</b> both read a statute as a whole: <i>Catiis</i> one sentence and the next paragraph; <i>Aquino</i> a whole chapter. <i>Aquino</i> adds the limit: no requirement may be read into a clear text.',
			'<b>Manila Lodge and Magtajas</b> both limit a local government by national legislation: one strictly construes a grant of <i>property</i>; the other subordinates local <i>police power</i> to a statute.',
			'<b>Corona and Magtajas</b> both reconcile two laws with <i>interpretare et concordare leges legibus</i>. The special law wins in both, whether later (<i>Corona</i>) or earlier (<i>Magtajas</i>).',
			'<b>Aquino and Corona</b> both read a provision in light of the structure around it: Sec. 65 with Sec. 67 and the collection chapter; the PPA Charter with the Civil Service Law and the Administrative Code\'s definition of "attachment."',
			'<b>Manila Lodge and Aquino</b> both involve property lost through a government act; in one the buyer loses (void sale of public dominion), in the other the owner loses (valid tax sale after proper notice).'
		])
	);
	out.push(
		table(
			['Canon or principle', 'Catiis', 'Aquino', 'Manila Lodge', 'Corona', 'Magtajas'],
			(
				[
					['Statute construed as a whole / in context', 1, 1, 1, 1, 1],
					['Verba legis / clear text applied', 1, 1, 0, 0, 1],
					['Statutory definition controls', 1, 0, 0, 0, 0],
					['No requirement read into a clear text', 0, 1, 0, 0, 0],
					['Arrangement of sections as intrinsic aid', 1, 1, 1, 0, 1],
					['Effect to every word; no surplusage', 0, 0, 1, 0, 0],
					['Public grants / municipal powers strictly construed', 0, 0, 1, 0, 0],
					['Special v. general law; implied repeal disfavored', 0, 0, 0, 1, 1],
					['Harmonization of laws (in pari materia)', 0, 0, 0, 1, 1],
					['Avoid absurd or nugatory results', 1, 0, 1, 1, 1],
					['Presumption that legislature knows existing law', 0, 0, 1, 1, 0],
					['Extrinsic aids: later acts weighed', 0, 0, 1, 0, 1],
					['Precedent read in light of the issue decided', 1, 1, 1, 0, 0],
					['Substance over label or caption', 1, 1, 0, 0, 0],
					['Hierarchy: ordinance or act cannot override statute', 0, 0, 0, 1, 1]
				] as [string, ...number[]][]
			).map(([k, ...v]) => [`<b>${k}</b>`, ...v.map((x) => (x ? '●' : ''))])
		)
	);
	out.push(
		`<p class="sg-intro">Matrix note: in <i>Catiis</i>, "avoid nugatory results" refers to the two-paragraph structure of Sec. 1; in <i>Aquino</i> and <i>Manila Lodge</i>, "precedent read in light of the issue" refers to the extension of <i>Talusan v. Tayag</i> and the use of <i>Government v. Cabangis</i> against TDC. In <i>Corona</i>, the hierarchy point is that an administrative order (A.O. No. 25) cannot override the forum fixed by statute.</p>`
	);

	out.push(h3('five-case-drill', 'Case recall drill'));
	out.push(
		ol(
			recallDrill.map(([clue, id]) => `${clue}<details class="rv-reveal"><summary>Answer</summary><div><p>${CASE_NAMES[id]}</p></div></details>`),
			'rv-recall'
		)
	);
	return out.join('\n');
}

/* ------------------------------------------------------------------ exports to the engines */

export function caseDrillMcqs(moduleId: string): McqQuestion[] {
	const options = CASE_ORDER.map((id) => CASE_NAMES[id]);
	return recallDrill.map(([clue, id], i) => ({
		id: `${moduleId}:cases:drill${i + 1}`,
		topicId: 'cases',
		topic: 'Five Cases',
		tag: 'jurisprudence' as const,
		question: `Which case? ${plain(clue)}`,
		options,
		correctIndex: CASE_ORDER.indexOf(id),
		explanation: `${CASE_NAMES[id]}. ${plain(cases.find((c) => c.id === id)!.quick.doctrine)}`,
		legalBasis: `${cases.find((c) => c.id === id)!.gr}, ${cases.find((c) => c.id === id)!.date}`
	}));
}

export function caseDigests(moduleId: string): CaseDigest[] {
	return cases.map((c, i) => ({
		id: `${moduleId}:case${i + 1}`,
		title: CASE_NAMES[c.id],
		citation: `${c.gr} (${c.date})`,
		topic: c.matrix.central,
		part: 'Appendix — Five-case quick cards',
		keyRule: plain(c.doctrine),
		summary: `${plain(c.doctrine)} ${plain(c.quick.ruling)} Memory cue: ${plain(c.quick.cue)}`
	}));
}
