import { ul, type Chapter } from './model';

export const ch11: Chapter = {
	id: 'ch11',
	n: 11,
	roman: 'XI',
	title: 'Constitutional Construction',
	short: 'Ch. XI — Constitutional Construction',
	sections: '§§11.01–11.19',

	plain: `The Constitution is the highest law, so everything else must fit it. To read it, start with the <b>words</b> in their ordinary meaning. If the words are unclear, look to the <b>reason</b>: what the framers intended and why. And read the <b>whole</b> document together. Its provisions are presumed <b>mandatory</b> and <b>self-executing</b>, so they work even without a law implementing them.`,
	overview: `<p>Chapter XI applies the tools of statutory construction to the fundamental law, with adjustments. The Constitution is written by the sovereign people, meant to last, and addressed to every branch of government. So its words are read in their ordinary sense (it is "not primarily a lawyer\'s document"), its purpose is to realize the intent of the framers <i>and the people who ratified it</i>, and its provisions are presumed mandatory and self-executing, the reverse of the cautious presumptions for some statutes.</p>
<p>Learn the <b>three maxims in order</b> (<i>Francisco v. House</i>): <b>verba legis</b> → <b>ratio legis est anima</b> → <b>ut magis valeat quam pereat</b>. Words first; if ambiguous, the reason; and always the whole.</p>`,
	questions: [
		'What is a constitution, and what is the primary purpose of constitutional construction?',
		'How is constitutional language read?',
		'What aids may be used when the language is unclear, and how much weight do convention debates carry?',
		'Why must the Constitution be read as a whole?',
		'Are constitutional provisions mandatory? Are they self-executing?',
		'What are the three maxims of constitutional construction, and in what order are they applied?'
	],
	keyPoints: [
		'Purpose: ascertain the intent of the framers and the people as expressed in the text, and assure its realization.',
		'Verba legis first: ordinary meaning (technical terms excepted), used broadly; plain text is applied as written (<i>J.M. Tuason</i>).',
		'If ambiguous: ratio legis est anima, using history, the evils to be remedied, convention debates (persuasive, not controlling), prior laws and rulings, changes in wording, and consequences.',
		'Read as a whole: no provision is considered alone; a specific provision qualifies a general one (<i>Civil Liberties Union</i>).',
		'Presumed mandatory, and presumed self-executing (<i>Manila Prince Hotel</i>); Congress may still legislate to enforce.',
		'A provision that is clearly a policy guideline or leaves the matter "as may be provided by law" is not self-executing.'
	],
	connects: `Chapter XI is Chapters III–VI applied to the Constitution: verba legis (Ch. IV), extrinsic aids (Ch. III), construction as a whole (Ch. VI). It also bounds every other chapter, since every statute must be read in harmony with the Constitution (§6.14). It connects to Chapter VIII on the constitutional periods to decide, and to <i>Magtajas</i> on local autonomy and the limits of local power.`,
	objectives: [
		'Define a constitution and state the primary purpose of constitutional construction.',
		'Apply the three maxims in order to an unfamiliar provision.',
		'Enumerate the aids to constitutional construction and state the weight of convention debates.',
		'Explain the presumptions that constitutional provisions are mandatory and self-executing.',
		'Distinguish self-executing from non-self-executing provisions using textual indicators.',
		'Explain <i>Manila Prince Hotel</i>, <i>Civil Liberties Union</i>, <i>Francisco</i>, <i>Nitafan</i> and <i>J.M. Tuason</i>.',
		'Explain why local autonomy did not save the ordinances in <i>Magtajas</i>.'
	],

	concepts: [
		{
			term: 'Constitution',
			plain: 'The basic written law that creates the government, gives it powers, limits those powers, and protects people\'s rights.',
			legal: 'The written instrument by which the fundamental powers of government are established, limited and defined, and by which those powers are distributed among the several departments for their safe and useful exercise for the benefit of the people (§11.01).',
			why: 'All other laws derive their validity from it; it is the supreme law.',
			example: 'The 1987 Constitution.',
			confuse: 'An ordinary statute, which must conform to the Constitution.'
		},
		{
			term: 'Primary purpose of constitutional construction',
			plain: 'Find out what the framers and the people meant, and make it happen.',
			legal: 'To ascertain and give effect to the intent of the framers and of the people who adopted the Constitution, as expressed in its language, and thereafter to assure the realization of that intent. The people in ratifying are presumed guided mainly by the framers\' explanation (§§11.02–11.03; <i>Nitafan v. CIR</i>).',
			why: 'The Constitution\'s authority comes from the people\'s ratification.',
			example: '<i>Nitafan</i>: the framers\' deliberations showed no intent to exempt judges\' salaries from income tax.',
			confuse: 'Finding what a court thinks would be the best policy.'
		},
		{
			term: 'A living (enduring) Constitution',
			plain: 'The Constitution is written in broad words so it can handle new situations.',
			legal: 'Constitutional provisions are "not mathematical formulas" but "organic living institutions"; the Constitution is a continuously operative charter of government, read in a way consistent with reason, justice and the public interest, and not as demanding the impossible, impractical or absurd (§11.04).',
			why: 'A constitution is meant to last for generations.',
			example: 'Broad terms such as "due process" apply to technologies the framers never imagined.',
			confuse: 'Judicial amendment. A living reading still starts from, and cannot contradict, the text.'
		},
		{
			term: 'Verba legis (in constitutional construction)',
			plain: 'Start with what the words say.',
			legal: 'Wherever possible, the words of the Constitution are given their ordinary meaning, except where technical terms are employed; where the language is plain, clear and unambiguous, it is applied as written (§§11.05, 11.18; <i>J.M. Tuason & Co. v. LTA</i>; <i>Francisco</i>).',
			why: 'The Constitution is "not primarily a lawyer\'s document"; the people ratified the words in their ordinary sense.',
			example: '<i>Manila Prince Hotel</i>: "patrimony" in its ordinary meaning refers to heritage, so it covers cultural heritage, not only natural resources.',
			confuse: 'Literalism that defeats the evident purpose. Verba legis is where you begin, not always where you end.'
		},
		{
			term: '<i>Ratio legis est anima</i>',
			plain: 'The reason of the law is its soul.',
			legal: 'Where there is ambiguity, the words are interpreted in accordance with the intent of the framers, as shown by the circumstances, history and debates surrounding the provision (§11.18; <i>Francisco</i>).',
			why: 'When words admit two meanings, the purpose decides.',
			example: '<i>Francisco</i>: the Court looked to the framers\' deliberations to settle what "initiate" means in the one-year bar on impeachment proceedings.',
			confuse: 'Overriding a clear text with the reason; ratio legis is used when the text is ambiguous.'
		},
		{
			term: '<i>Ut magis valeat quam pereat</i>',
			plain: 'Read the whole Constitution so every part works.',
			legal: 'The Constitution is interpreted as a whole; no one provision is separated from the others and considered alone; all provisions on a subject are brought into view and interpreted to effectuate the great purposes of the instrument (§11.13; <i>Civil Liberties Union</i>; <i>Francisco</i>).',
			why: 'The framers wrote one coherent document.',
			example: '<i>Civil Liberties Union</i>: Art. IX-B, Sec. 7, par. 2 (general rule for civil servants) was read with Art. VII, Sec. 13 (stricter rule for the President, Vice-President, Cabinet and their deputies).',
			confuse: 'The statutory rule of the same name (Ch. VI). Same idea, applied to the fundamental law.'
		},
		{
			term: 'Self-executing provision',
			plain: 'A provision that works by itself; no law is needed to enforce it in court.',
			legal: 'A provision complete in itself, which supplies a sufficient rule by which the right it grants may be enjoyed or protected, or the duty it imposes enforced, without need of supplementary legislation. Constitutional provisions are presumed self-executing unless the contrary is clearly intended (§11.17; <i>Manila Prince Hotel v. GSIS</i>).',
			why: 'Otherwise Congress could nullify the Constitution simply by not legislating. <i>Ubi jus ibi remedium</i>.',
			example: 'Art. XII, Sec. 10, par. 2 (preference to qualified Filipinos) was enforced without an implementing law in <i>Manila Prince Hotel</i>.',
			confuse: 'A provision Congress cannot legislate on. Congress may still pass laws to enforce, penalize violations, and supply details.'
		},
		{
			term: 'Non-self-executing provision',
			plain: 'A provision that needs a law from Congress before it can be enforced in court.',
			legal: 'A provision that lays down a principle or policy, or expressly leaves implementation to legislation ("as may be provided by law," "Congress shall provide"), and does not itself supply a judicially enforceable rule. The Declaration of Principles and State Policies (Art. II) is generally of this kind, though some provisions have been enforced (e.g., <i>Oposa v. Factoran</i> on the right to a balanced and healthful ecology).',
			why: 'Some provisions are guidelines for legislation, not rules courts can apply directly.',
			example: '<i>Tañada v. Angara</i> treated Art. II provisions on the economy as guidelines rather than judicially enforceable rights.',
			confuse: 'A self-executing provision that Congress chooses to implement anyway.'
		},
		{
			term: 'Presumption that constitutional provisions are mandatory',
			plain: 'In the Constitution, "shall" really means "shall."',
			legal: 'Constitutional provisions are presumed mandatory unless, by express provision or necessary implication, a different intention is manifest; they are directory only where that is unmistakably shown. The rules on mandatory and directory statutes are of little use here (§11.14).',
			why: 'In a constitution the sovereign itself speaks and binds all departments; calling provisions directory invites disregard.',
			example: 'The constitutional periods to decide cases are called "mandatory" (Art. VIII, Sec. 15), though Sec. 15(4) itself says late decisions are still to be rendered.',
			confuse: 'Statutes, where directory readings are common.'
		},
		{
			term: 'Proceedings of the Constitutional Convention or Commission',
			plain: 'The framers\' debates help show what they meant, but they are not the Constitution.',
			legal: 'The debates and proceedings may be consulted to ascertain intent, but they are persuasive, not controlling. They show the views of individual members, and the proper interpretation depends more on how the people who ratified the text understood it (<i>Civil Liberties Union</i>; §11.08).',
			why: 'The people ratified the final text, not the speeches.',
			example: '<i>Nitafan</i> used the 1986 Commission\'s deliberations to read the salary-diminution clause.',
			confuse: 'The text itself, which always controls.'
		}
	],

	principles: [
		{
			name: 'The purpose is to realize the intent of the framers and the people',
			rule: 'The primary task in constitutional construction is to ascertain and assure the realization of the purpose of the framers and of the people in adopting the Constitution. The people, in ratifying, are presumed to have been guided mainly by the framers\' explanation.',
			basis: 'Agpalo §§11.02–11.03; <i>Nitafan v. CIR</i>, 152 SCRA 284 (1987).',
			why: 'The Constitution draws its authority from the people\'s ratification.',
			when: 'Every question of constitutional meaning.',
			limits: 'Intent is sought first in the words; extrinsic aids come in only when the words are unclear. The text ratified by the people controls over individual framers\' views.',
			differs: 'In statutory construction the intent sought is the legislature\'s; here it is the framers\' and the people\'s.',
			example: '<i>Nitafan</i>: judges argued that withholding income tax from their salaries diminished their compensation. The Court found the framers did not intend to exempt judges from general taxes.'
		},
		{
			name: 'An enduring, living document read for reason, justice and public interest',
			rule: 'The Constitution is not to be read like a mathematical formula. Its broad words accommodate new conditions; it is construed as a continuously operative charter and never as requiring the impossible, the impractical or the absurd.',
			basis: 'Agpalo §11.04.',
			why: 'It must govern generations its framers could not foresee.',
			when: 'Applying constitutional words to situations the framers did not specifically anticipate.',
			limits: 'Flexibility operates within the text; it cannot be used to contradict a clear provision.',
			differs: 'Contrast the more literal approach often taken with technical statutes.',
			example: 'Privacy and search guarantees applied to electronic communications.'
		},
		{
			name: 'Start with the language: verba legis',
			rule: 'The language of the Constitution is the primary source of its meaning. Words are given their ordinary meaning (technical terms excepted), in a broad rather than a constricted sense. Where the language is plain, clear and unambiguous, it is applied as written and there is no room for construction.',
			basis: 'Agpalo §11.05; <i>J.M. Tuason & Co. v. Land Tenure Administration</i>, 31 SCRA 413 (1970): "We look to the language of the document itself in our search for its meaning. We do not of course stop there, but that is where we begin."',
			why: 'The people ratified the words as ordinary people understand them.',
			when: 'Always first.',
			limits: 'Technical terms carry their technical meaning. If the words are ambiguous, move to ratio legis.',
			differs: 'Same as verba legis in statutory construction, but with a stronger presumption of ordinary meaning.',
			example: '<i>Manila Prince Hotel</i>: "patrimony" read in its ordinary sense of heritage.'
		},
		{
			name: 'Aids when the language is unclear',
			rule: 'A doubtful provision is examined in light of the history of the times and the conditions under which the Constitution was framed, the object sought and the evils to be remedied; the proceedings of the convention or commission; contemporaneous construction and writings; prior laws and judicial rulings; changes in phraseology from earlier constitutions; and the consequences of alternative constructions.',
			basis: 'Agpalo §§11.06–11.12; <i>Civil Liberties Union v. Executive Secretary</i>, 194 SCRA 317 (1991).',
			why: 'To find the reason that moved the framers, then read the words consistently with it.',
			when: 'Ambiguity in the text.',
			limits: 'Convention debates are persuasive, not controlling; they are less conclusive than the instrument itself, since the people ratified the text, not the debates (<i>Civil Liberties Union</i>).',
			differs: 'Same family as the extrinsic aids for statutes (Ch. III).',
			example: 'A change of wording from the 1973 to the 1987 Constitution suggests a change of meaning or policy (§11.11).'
		},
		{
			name: 'Read the Constitution as a whole',
			rule: 'No provision is separated from the others and considered alone. All provisions on a subject are brought into view and interpreted together to effectuate the great purposes of the instrument; a specific provision qualifies a general one on the same subject.',
			basis: 'Agpalo §11.13; <i>Civil Liberties Union</i>; <i>Francisco v. House</i> (<i>ut magis valeat quam pereat</i>).',
			why: 'The Constitution is one integrated document.',
			when: 'Two provisions seem to point different ways.',
			limits: 'Harmonize before concluding that one provision prevails.',
			differs: 'Compare Ch. VI (statute as a whole).',
			example: '<i>Civil Liberties Union</i>: E.O. 284 relied on Art. IX-B, Sec. 7, par. 2, which allows civil servants to hold other posts "if allowed by law or by the primary functions." Read with Art. VII, Sec. 13, the stricter rule for the President, Vice-President, Cabinet and their deputies, the E.O. was unconstitutional.'
		},
		{
			name: 'Constitutional provisions are presumed mandatory',
			rule: 'Constitutional provisions are presumed mandatory unless a different intention is shown by express provision or necessary implication; they are directory only when that is unmistakably manifest. The legislature\'s failure to implement a provision does not make it directory.',
			basis: 'Agpalo §11.14.',
			why: 'In a constitution the sovereign speaks and binds all departments.',
			when: 'A party argues a constitutional requirement can be disregarded without consequence.',
			limits: 'The Constitution may itself prescribe the consequence of non-compliance. Art. VIII, Sec. 15(4) keeps late decisions valid while preserving the judge\'s responsibility.',
			differs: 'For statutes there is no such presumption; the consequences test governs (Ch. VIII).',
			example: 'The one-year bar on initiating impeachment proceedings against the same official (Art. XI, Sec. 3(5)) was enforced in <i>Francisco</i>.'
		},
		{
			name: 'Constitutional provisions are presumed self-executing',
			rule: 'Unless the contrary is clearly intended, provisions of the Constitution are self-executing: complete in themselves and judicially enforceable without implementing legislation. Even then, Congress may pass laws to enforce them, penalize violations, and supply details.',
			basis: 'Agpalo §11.17; <i>Manila Prince Hotel v. GSIS</i>, 267 SCRA 408 (1997).',
			why: 'Otherwise the legislature could decide whether, or when, the Constitution takes effect. <i>Ubi jus ibi remedium</i>.',
			when: 'A party invokes a constitutional right or duty in court without an implementing statute.',
			limits: 'Not self-executing where the provision is a mere statement of principle or policy, or expressly leaves implementation to law ("as may be provided by law"). Art. II principles are generally not self-executing (<i>Tañada v. Angara</i>; <i>Kilosbayan v. Morato</i>), though some have been enforced (<i>Oposa v. Factoran</i>).',
			differs: 'Self-executing provisions bind courts directly; non-self-executing ones bind the legislature to act.',
			example: '<i>Manila Prince Hotel</i>: the Filipino preference in Art. XII, Sec. 10, par. 2 is "mandatory, positive" and self-executing; the qualified Filipino bidder could match the foreign winning bid.'
		},
		{
			name: 'The three maxims, applied in order',
			rule: '(1) <b>Verba legis</b>: wherever possible, words are given their ordinary meaning, except technical terms. (2) <b>Ratio legis est anima</b>: where there is ambiguity, the words are interpreted according to the intent of the framers. (3) <b>Ut magis valeat quam pereat</b>: the Constitution is interpreted as a whole.',
			basis: 'Agpalo §11.18; <i>Francisco, Jr. v. House of Representatives</i>, G.R. No. 160261, Nov. 10, 2003.',
			why: 'Text first, purpose when needed, coherence always.',
			when: 'Any question of constitutional meaning.',
			limits: 'Ratio legis does not override a clear text.',
			differs: 'The same three ideas appear in statutory construction (Chs. IV and VI), but <i>Francisco</i> fixed this sequence for the Constitution.',
			example: '<i>Francisco</i>: the Court read "initiate" in Art. XI, Sec. 3(5) through the text, the framers\' deliberations, and the impeachment provisions as a whole, and held the second impeachment complaint against the Chief Justice barred by the one-year rule.'
		},
		{
			name: 'Other rules: prospective operation, statutory rules where appropriate, adopted provisions',
			rule: 'A constitution operates prospectively unless it clearly provides otherwise. The rules of statutory construction apply where appropriate, always remembering that the Constitution is the fundamental law. Where a provision is taken from the U.S. Constitution, the American construction before adoption is presumed adopted; later U.S. rulings are persuasive.',
			basis: 'Agpalo §§11.15, 11.16, 11.19.',
			why: 'Consistency with the general principles of construction, adjusted for the Constitution\'s supremacy.',
			when: 'Temporal questions; borrowed provisions.',
			limits: 'Check the exact wording of these sections in Agpalo.',
			differs: 'Same logic as "adopted statutes" (§6.28).',
			example: 'The Bill of Rights\' due process and equal protection clauses, drawn from the U.S. Constitution.'
		}
	],

	enums: [
		{
			id: 'E11.1',
			name: 'The three maxims of constitutional construction',
			source: '<i>Francisco, Jr. v. House of Representatives</i>, G.R. No. 160261, Nov. 10, 2003; Agpalo §11.18.',
			kind: 'case',
			ordered: true,
			memorize: true,
			lead: 'Constitutional construction follows three principles, in this order',
			items: [
				{ t: 'Verba legis', d: 'Wherever possible, the words of the Constitution are given their ordinary meaning, except where technical terms are employed.', s: 'words are given their ordinary meaning, except technical terms' },
				{ t: 'Ratio legis est anima', d: 'Where there is ambiguity, the words are interpreted in accordance with the intent of the framers ("the reason of the law is its soul").', s: 'where ambiguous, interpret according to the framers\' intent' },
				{ t: 'Ut magis valeat quam pereat', d: 'The Constitution is interpreted as a whole, so that every part is given effect.', s: 'the Constitution is read as a whole so every part has effect' }
			],
			memory: '<b>WORDS → REASON → WHOLE.</b>',
			tip: 'Order matters: text first; reason only if ambiguous; whole always. Cite <i>Francisco</i> (and <i>Manila Prince Hotel</i>).',
			question: 'What are the three principles of constitutional construction laid down in Francisco v. House of Representatives? Explain each.'
		},
		{
			id: 'E11.2',
			name: 'Rules on reading constitutional language',
			source: 'Agpalo §11.05; <i>J.M. Tuason & Co. v. LTA</i>.',
			kind: 'book',
			ordered: true,
			lead: 'The language of the Constitution is read as follows',
			items: [
				{ t: 'The language itself is the primary source of meaning', d: 'The words are presumed to express the objective sought.', s: 'the text is the primary source of its meaning' },
				{ t: 'Words are given their ordinary, common meaning', d: 'Because the Constitution is not primarily a lawyer\'s document. Exception: technical terms take their technical meaning.', s: 'words take their ordinary meaning, technical terms excepted' },
				{ t: 'Words are used in a broad sense', d: 'To cover all contingencies, not in a narrow or constricted sense.', s: 'words are read broadly, to cover contingencies' },
				{ t: 'Plain language is applied as written', d: 'If the text is plain, clear and unambiguous, no construction is needed and courts cannot alter it.', s: 'plain, clear and unambiguous language is applied without construction' }
			],
			memory: '<b>Text first · Ordinary meaning · Broad sense · Plain = apply.</b>',
			tip: 'Quote <i>J.M. Tuason</i>: "We look to the language of the document itself... that is where we begin."',
			question: 'How is the language of the Constitution to be read?'
		},
		{
			id: 'E11.3',
			name: 'Aids to constitutional construction',
			source: 'Agpalo §§11.06–11.12.',
			kind: 'book',
			memorize: true,
			lead: 'When the language is doubtful, the following aids may be used',
			items: [
				{ t: 'The realities at the time of adoption and the object to be accomplished', d: 'The history of the times, the conditions under which the Constitution was framed, and the evils it sought to remedy (§11.07).', s: 'history, conditions and the evils to be remedied' },
				{ t: 'The proceedings of the convention or commission', d: 'Persuasive, not controlling; they reflect individual members\' views, while the people ratified the text (§11.08; <i>Civil Liberties Union</i>).', s: 'the convention or commission proceedings (persuasive only)' },
				{ t: 'Contemporaneous construction and writings', d: 'Early practical construction by officials and contemporary writings (§11.09).', s: 'contemporaneous construction and writings' },
				{ t: 'Previous laws and judicial rulings', d: 'They show what the framers had in mind when they used certain terms (§11.10).', s: 'prior laws and judicial decisions on the subject' },
				{ t: 'Changes in phraseology', d: 'A change in wording from an earlier constitution suggests a change in meaning or policy (§11.11).', s: 'changes in wording from earlier constitutions' },
				{ t: 'Consequences of alternative constructions', d: 'Prefer the reading that avoids absurd, unjust or mischievous results (§11.12).', s: 'the consequences of alternative readings' }
			],
			memory: '<b>History · Debates · Contemporaries · Precedents · Phrasing changes · Consequences.</b>',
			tip: 'Always add the weight point for debates: persuasive, never controlling over the ratified text.',
			question: 'What aids may be resorted to in construing an ambiguous constitutional provision? What weight do the debates of the Constitutional Commission carry?'
		},
		{
			id: 'E11.4',
			name: 'Rules of general application in constitutional construction',
			source: 'Agpalo §§11.13–11.16.',
			kind: 'book',
			lead: 'Generally applicable rules are',
			items: [
				{ t: 'The Constitution is construed as a whole', d: 'No provision is considered alone (§11.13).', s: 'construe it as a whole' },
				{ t: 'Its provisions are presumed mandatory', d: 'Directory only when unmistakably manifest (§11.14).', s: 'its provisions are presumed mandatory' },
				{ t: 'It operates prospectively', d: 'Unless it clearly provides otherwise (§11.15).', s: 'it operates prospectively unless it clearly provides otherwise' },
				{ t: 'Rules of statutory construction apply where appropriate', d: 'Subject to the Constitution\'s supremacy and the primacy of the framers\' and people\'s intent (§11.16).', s: 'statutory-construction rules apply where appropriate' }
			],
			memory: '<b>Whole · Mandatory · Forward · Statcon rules (adapted).</b>',
			tip: 'Add the fifth presumption from §11.17: provisions are self-executing.',
			question: 'Enumerate the rules of general application in constitutional construction.',
			verify: 'Check the exact wording of §§11.15–11.16.'
		},
		{
			id: 'E11.5',
			name: 'Textual signs that a provision is (or is not) self-executing',
			source: 'Agpalo §11.17; <i>Manila Prince Hotel</i>; <i>Tañada v. Angara</i>; <i>Kilosbayan v. Morato</i>.',
			kind: 'teaching',
			lead: 'In deciding whether a provision is self-executing, look at whether',
			items: [
				{ t: 'It is complete in itself', d: 'It states the right or duty fully, without blanks for Congress to fill.', s: 'it is complete in itself' },
				{ t: 'It supplies a sufficient rule for enjoying the right or enforcing the duty', d: 'A court can apply it to facts.', s: 'it supplies a rule a court can apply' },
				{ t: 'It does not expressly defer to legislation', d: 'Phrases like "as may be provided by law" or "Congress shall provide" point to non-self-executing provisions.', s: 'it does not say "as may be provided by law"' },
				{ t: 'It is phrased as a command, not merely a principle or policy', d: '"The State shall give preference..." (<i>Manila Prince</i>) vs. broad State policies in Art. II.', s: 'it is a positive command rather than a general policy' }
			],
			memory: '<b>Complete · Applicable · No deferral · Command.</b> All four → self-executing.',
			tip: 'Start from the presumption (self-executing) and show what, if anything, rebuts it.',
			question: 'When is a constitutional provision self-executing? Give the indicators.'
		},
		{
			id: 'E11.6',
			name: 'What Congress may still do even if a provision is self-executing',
			source: 'Agpalo §11.17 (and §1.07).',
			kind: 'book',
			lead: 'Even if a provision is self-executing, Congress may',
			items: [
				{ t: 'Enact laws to enforce it', d: 'Providing machinery that makes enforcement easier.', s: 'enact laws to enforce it' },
				{ t: 'Impose penalties for its violation', d: 'Adding sanctions the Constitution itself does not state.', s: 'penalize its violation' },
				{ t: 'Supply minor details', d: 'Filling procedural or operational details, without contradicting the provision.', s: 'supply details for its implementation' }
			],
			memory: '<b>Enforce · Penalize · Detail.</b>',
			tip: 'Such legislation must be consistent with the provision; it cannot curtail the right.',
			question: 'If a constitutional provision is self-executing, may Congress still legislate on it? Explain.'
		},
		{
			id: 'E11.7',
			name: 'Philippine constitutions',
			source: 'Agpalo §11.01; standard constitutional history.',
			kind: 'teaching',
			ordered: true,
			lead: 'The Philippines has had the following constitutions',
			items: [
				{ t: 'The 1899 Malolos Constitution', d: 'Of the First Philippine Republic.', s: 'the 1899 Malolos Constitution' },
				{ t: 'The 1935 Constitution', d: 'Commonwealth and post-war Republic.', s: 'the 1935 Constitution' },
				{ t: 'The 1943 Constitution', d: 'Japanese-sponsored, during the occupation.', s: 'the 1943 Constitution' },
				{ t: 'The 1973 Constitution', d: 'Martial-law era, as amended.', s: 'the 1973 Constitution' },
				{ t: 'The 1986 Freedom Constitution', d: 'Proclamation No. 3, provisional.', s: 'the 1986 Freedom Constitution' },
				{ t: 'The 1987 Constitution', d: 'In force.', s: 'the 1987 Constitution' }
			],
			memory: '<b>1899 · 1935 · 1943 · 1973 · 1986 · 1987.</b>',
			tip: 'Many lists include the 1943 (Japanese-sponsored) Constitution; others omit it.',
			question: 'Enumerate the constitutions the Philippines has had.',
			verify: 'Confirm whether your course counts the 1943 Constitution.'
		}
	],

	reqs: [
		{
			name: 'A self-executing provision',
			source: 'Agpalo §11.17; <i>Manila Prince Hotel</i>.',
			what: ul(['Complete in itself.', 'Supplies a sufficient rule for enjoying the right or enforcing the duty.', 'Does not expressly defer to legislation.', 'Phrased as a command rather than a mere policy.']),
			why: 'To keep the Constitution from depending on legislative action.',
			mode: 'Cumulative — all must concur',
			modeNote: 'All four characterize a self-executing provision, but the presumption already favors self-execution; the party arguing otherwise must show the contrary intent.',
			absent: 'If the provision defers to law or states only a policy, it is not judicially enforceable until Congress acts.',
			interacts: 'Congress may still legislate to enforce, penalize and supply details.',
			hypo: '"The State shall give preference to qualified Filipinos" in the grant of rights over the national patrimony: self-executing (<i>Manila Prince</i>).'
		},
		{
			name: 'Treating a constitutional provision as directory',
			source: 'Agpalo §11.14.',
			what: ul(['A different intention is shown by express provision or necessary implication.', 'That intention is unmistakably manifest.']),
			why: 'In the Constitution the sovereign speaks; disregard should not be invited.',
			mode: 'Cumulative — all must concur',
			absent: 'The provision is mandatory.',
			interacts: 'The Constitution may itself fix the effect of non-compliance (Art. VIII, Sec. 15(4)).',
			hypo: 'A party says the 60-day period for a Constitutional Commission to decide is "merely directory." The period is mandatory as a duty; whether a late decision is void depends on what the Constitution provides and how the Court has applied it.'
		},
		{
			name: 'Using convention or commission debates',
			source: 'Agpalo §11.08; <i>Civil Liberties Union</i>; <i>Nitafan</i>.',
			what: ul(['The text is ambiguous.', 'The debates are used to find the framers\' intent.', 'They are weighed as persuasive, subordinate to the ratified text and the people\'s understanding.']),
			why: 'They help show intent, but the people ratified the text.',
			mode: 'Cumulative — all must concur',
			absent: 'If the text is clear, debates cannot change it; if they conflict with the text, the text controls.',
			interacts: 'Second maxim (ratio legis) in <i>Francisco</i>.',
			hypo: 'A commissioner\'s speech suggests a broader meaning than the plain words. The plain words control.'
		}
	],

	comparisons: [
		{
			id: 'C11.1',
			title: 'Self-executing vs. non-self-executing provisions',
			a: 'Self-executing',
			b: 'Non-self-executing',
			def: ['Complete in itself; judicially enforceable without legislation.', 'Requires implementing legislation before courts can enforce it.'],
			purpose: ['Make the right or duty effective at once.', 'Guide the legislature.'],
			basis: ['§11.17; <i>Manila Prince Hotel</i>.', '<i>Tañada v. Angara</i>; <i>Kilosbayan v. Morato</i>.'],
			when: ['A right or command stated fully.', 'A principle, policy, or "as may be provided by law."'],
			key: ['Presumed.', 'Must be clearly intended.'],
			limits: ['Congress may still enforce, penalize, supply details.', 'Some Art. II provisions have been enforced (<i>Oposa v. Factoran</i>).'],
			example: ['Art. XII, Sec. 10, par. 2 (Filipino preference).', 'General economic policies in Art. II.'],
			trap: ['Saying Congress can no longer legislate on a self-executing provision.', 'Saying every Art. II provision is unenforceable.'],
			decisive: 'Whether a court can apply the provision to facts without a statute.',
			matters: 'It decides whether a litigant can sue on the provision now.',
			recognize: 'Look for completeness and command language versus deferral words.',
			mistake: 'Forgetting the presumption favors self-execution.'
		},
		{
			id: 'C11.2',
			title: 'Constitutional construction vs. statutory construction',
			a: 'Constitutional construction',
			b: 'Statutory construction',
			def: ['Interpreting the fundamental law.', 'Interpreting legislative acts.'],
			purpose: ['Realize the intent of the framers and the people.', 'Realize the intent of the legislature.'],
			basis: ['Agpalo Ch. XI; <i>Francisco</i>.', 'Agpalo Chs. I–X.'],
			when: ['The Constitution\'s meaning is in issue.', 'A statute\'s meaning is in issue.'],
			key: ['Provisions presumed mandatory and self-executing; words read broadly; living document.', 'No general presumption of mandatory character; strict or liberal depending on the statute.'],
			limits: ['Statutory rules apply only where appropriate.', 'Must be read in harmony with the Constitution (§6.14).'],
			example: ['"Patrimony" read broadly (<i>Manila Prince</i>).', '"Gambling" read narrowly with its associated words (<i>Magtajas</i>).'],
			trap: ['Applying the statutory consequences test to say a constitutional provision is directory.', 'Ignoring the Constitution when reading a statute.'],
			decisive: 'Whose intent is sought and which presumptions apply.',
			matters: 'The same word may be read more broadly in the Constitution than in a statute.',
			recognize: 'Is the provision in the Constitution or in a statute?',
			mistake: 'Treating convention debates as having the same weight as legislative deliberations on a statute.'
		},
		{
			id: 'C11.3',
			title: 'Verba legis vs. ratio legis est anima',
			a: 'Verba legis',
			b: 'Ratio legis est anima',
			def: ['Give the words their ordinary meaning.', 'Interpret ambiguous words according to the framers\' intent.'],
			purpose: ['Respect what the people ratified.', 'Resolve ambiguity by purpose.'],
			basis: ['<i>Francisco</i>; <i>J.M. Tuason</i>.', '<i>Francisco</i>.'],
			when: ['Always first.', 'Only when the text is ambiguous.'],
			key: ['Text controls if clear.', 'Purpose controls if the text is unclear.'],
			limits: ['Technical terms take technical meaning.', 'Cannot override clear text.'],
			example: ['"Patrimony" = heritage.', '"Initiate" in the impeachment one-year bar.'],
			trap: ['Going straight to the debates.', 'Treating the reason as superior to clear words.'],
			decisive: 'Sequence: words first, reason only for ambiguity.',
			matters: 'Skipping the first step is a methodological error examiners penalize.',
			recognize: 'Is the word reasonably capable of more than one meaning?',
			mistake: 'Citing <i>ratio legis</i> to defeat an unambiguous provision.'
		},
		{
			id: 'C11.4',
			title: 'Framers\' intent (debates) vs. people\'s understanding (ratified text)',
			a: 'Framers\' intent / debates',
			b: 'People\'s understanding / text',
			def: ['What the members of the Commission said and meant.', 'What the people understood the text to mean when they ratified it.'],
			purpose: ['Shed light on ambiguous provisions.', 'Ground the Constitution\'s authority.'],
			basis: ['§11.08; <i>Nitafan</i>.', '<i>Civil Liberties Union</i>.'],
			when: ['Ambiguity.', 'Always.'],
			key: ['Persuasive.', 'Controlling.'],
			limits: ['Individual views may differ from the collective intent.', 'The people are presumed guided mainly by the framers\' explanation.'],
			example: ['<i>Nitafan</i>: deliberations on judges\' salaries.', 'Ordinary meaning of "patrimony" in <i>Manila Prince</i>.'],
			trap: ['Calling debates "controlling."', 'Ignoring the debates entirely when the text is ambiguous.'],
			decisive: 'The ratified text, as the people understood it, prevails over individual statements in the debates.',
			matters: 'It decides which source wins when they diverge.',
			recognize: 'Is the argument based on a speech or on the words of the Constitution?',
			mistake: 'Quoting one commissioner as if it settled the meaning.'
		},
		{
			id: 'C11.5',
			title: 'Mandatory presumption: constitutional provisions vs. statutory provisions',
			a: 'Constitutional provisions',
			b: 'Statutory provisions',
			def: ['Presumed mandatory unless a directory intent is unmistakably manifest.', 'Mandatory or directory depending on intent and consequences.'],
			purpose: ['Prevent disregard of the fundamental law.', 'Avoid voiding acts for harmless lapses.'],
			basis: ['§11.14.', '§§8.03–8.04.'],
			when: ['Any constitutional requirement.', 'Any statutory requirement.'],
			key: ['Strong presumption of mandatory character.', 'No universal presumption; consequences test.'],
			limits: ['The Constitution may itself prescribe the effect of non-compliance (Art. VIII, Sec. 15(4)).', 'Safety valve against injustice to the innocent public.'],
			example: ['The one-year bar on impeachment complaints.', 'A deadline for a judge to decide under a statute.'],
			trap: ['Applying the statutory consequences test to the Constitution.', 'Assuming every statutory "shall" is mandatory.'],
			decisive: 'The Constitution starts from "mandatory"; statutes start from "it depends."',
			matters: 'It changes who bears the burden of argument.',
			recognize: 'Where is the requirement found?',
			mistake: 'Reading Art. VIII, Sec. 15(1)\'s "must" as making late decisions void, ignoring Sec. 15(4).'
		}
	],

	authorities: [
		{ kind: 'provision', name: 'Art. XII, Sec. 10, par. 2, 1987 Constitution', text: '"In the grant of rights, privileges, and concessions covering the national economy and patrimony, the State shall give preference to qualified Filipinos." Held self-executing in <i>Manila Prince Hotel</i>.' },
		{ kind: 'provision', name: 'Art. VII, Sec. 13 and Art. IX-B, Sec. 7, par. 2, 1987 Constitution', text: 'Art. VII, Sec. 13 bars the President, Vice-President, Cabinet members and their deputies or assistants from holding any other office or employment during their tenure, unless otherwise provided in the Constitution. Art. IX-B, Sec. 7, par. 2 allows appointive officials to hold other government posts if allowed by law or by the primary functions of their position. Read together in <i>Civil Liberties Union</i>.' },
		{ kind: 'provision', name: 'Art. XI, Sec. 3(5), 1987 Constitution', text: '"No impeachment proceedings shall be initiated against the same official more than once within a period of one year." Construed in <i>Francisco</i>.' },
		{ kind: 'provision', name: 'Art. II, Sec. 25 and Art. X, Sec. 5, 1987 Constitution', text: 'Art. II, Sec. 25: "The State shall ensure the autonomy of local governments." Art. X, Sec. 5: each LGU shall have the power to create its own sources of revenue and to levy taxes, fees and charges, subject to such guidelines and limitations as Congress may provide, consistent with local autonomy. Discussed in <i>Magtajas</i>.' },
		{ kind: 'case', name: 'Francisco, Jr. v. House of Representatives', cite: 'G.R. No. 160261, Nov. 10, 2003', text: 'Laid down the three principles: verba legis; ratio legis est anima; ut magis valeat quam pereat. Held that impeachment proceedings are "initiated" by the filing of a verified complaint and its referral to the House Committee on Justice; since a first complaint against the Chief Justice had been so initiated within the year, the second complaint was barred by Art. XI, Sec. 3(5).' },
		{ kind: 'case', name: 'Manila Prince Hotel v. GSIS', cite: 'G.R. No. 122156, Feb. 3, 1997, 267 SCRA 408', text: 'Art. XII, Sec. 10, par. 2 is a mandatory, positive, self-executing command; "patrimony" includes cultural heritage, and the Manila Hotel is part of it. The qualified Filipino bidder could match the winning foreign bid. Provisions are presumed self-executing; otherwise Congress could ignore and nullify the Constitution by inaction.' },
		{ kind: 'case', name: 'Civil Liberties Union v. Executive Secretary', cite: 'G.R. No. 83896, Feb. 22, 1991, 194 SCRA 317', text: 'E.O. 284, which allowed Cabinet members and their deputies to hold multiple government posts, was unconstitutional. Art. VII, Sec. 13 is a stricter, specific rule for the Executive that qualifies Art. IX-B, Sec. 7, par. 2. Provisions on a subject are read together; convention debates are of value but less conclusive than the instrument and the people\'s understanding.' },
		{ kind: 'case', name: 'Nitafan v. Commissioner of Internal Revenue', cite: '152 SCRA 284 (1987)', text: 'The framers did not intend to exempt members of the Judiciary from income tax; withholding tax on judges\' salaries does not violate the non-diminution clause. The primary task is to ascertain and realize the framers\' and people\'s intent.' },
		{ kind: 'case', name: 'J.M. Tuason & Co. v. Land Tenure Administration', cite: '31 SCRA 413 (1970)', text: 'Verba legis in constitutional construction: begin with the language; ordinary meaning except technical terms; "that is where we begin."' },
		{ kind: 'case', name: 'Tañada v. Angara; Kilosbayan v. Morato', cite: '272 SCRA 18 (1997); 246 SCRA 540 (1995)', text: 'Provisions of Art. II (Declaration of Principles and State Policies) are generally not self-executing; they are guidelines for legislation rather than sources of judicially enforceable rights.', verify: 'Standard citations; not checked against the full texts.' },
		{ kind: 'case', name: 'Oposa v. Factoran', cite: '224 SCRA 792 (1993)', text: 'The right to a balanced and healthful ecology (Art. II, Sec. 16) was treated as enforceable without implementing legislation, an exception to the general character of Art. II.', verify: 'Standard citation; not checked against the full text.' }
	],

	caseNote: 'None of the five cases is a constitutional-construction case, but <i>Magtajas</i> touches Chapter XI directly: it rejected local autonomy as a ground for an ordinance defying a statute, and noted that the Constitution does not prohibit gambling. <i>Catiis</i> applies the constitutional right to bail directly.',
	caseLinks: [
		{
			caseId: 'magtajas',
			strength: 'Supporting — consistent, partly relied on',
			doctrine: 'Local autonomy does not remove Congress\'s control over LGUs, except where the Constitution itself grants power directly (e.g., Art. X, Sec. 5 on taxing power); courts do not pass on the wisdom of statutes; the Constitution does not prohibit gambling.',
			facts: 'Cagayan de Oro invoked local autonomy (Art. II, Sec. 25; Art. X) and the evils of gambling to justify banning PAGCOR casinos.',
			issue: 'Did the constitutional policy of local autonomy allow an ordinance contrary to P.D. 1869?',
			applied: 'The Court held that LGUs exercise only delegated legislative power; "the delegate cannot be superior to the principal." The 1987 policy of local autonomy reduced but did not remove Congress\'s control, except for direct constitutional grants like the taxing power in Art. X, Sec. 5, which cannot be withdrawn by statute. And since the Constitution "does not prohibit or even mention" gambling, its morality was for Congress to decide.',
			ruling: 'The ordinances were ultra vires and void.',
			lesson: 'Read constitutional policies (local autonomy) together with the structure of the whole Constitution (Congress\'s legislative power). A policy does not override the hierarchy of laws.',
			examUse: '"Does the constitutional policy of local autonomy allow an LGU to prohibit what a statute allows?" (No; <i>Magtajas</i>.)'
		},
		{
			caseId: 'catiis',
			strength: 'Not invoked — exam point only',
			doctrine: 'A self-executing constitutional right applies directly.',
			facts: 'The accused sought bail; the offense charged, as alleged, was punishable only by reclusion temporal.',
			issue: 'Were the accused entitled to bail as a matter of right?',
			applied: 'The Court applied Art. III, Sec. 13 (all persons are bailable before conviction except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong), read with Rule 114, Sec. 4. No construction issue arose under Chapter XI.',
			ruling: 'Bail as a matter of right.',
			lesson: 'Bill of Rights guarantees are self-executing; no statute is needed to claim bail.',
			examUse: 'A light example of a self-executing provision, if asked.'
		}
	],

	traps: [
		{ wrong: 'Constitutional provisions are presumed directory unless expressly mandatory.', right: 'They are presumed mandatory; directory only if unmistakably manifest (§11.14).', example: 'One-year bar on impeachment (<i>Francisco</i>).' },
		{ wrong: 'A provision without an implementing law cannot be enforced.', right: 'Provisions are presumed self-executing (<i>Manila Prince Hotel</i>).', example: 'Filipino preference enforced without a statute.' },
		{ wrong: 'Every constitutional provision is self-executing.', right: 'Policies and provisions deferring to law are generally not (<i>Tañada</i>; <i>Kilosbayan</i>).', example: 'Art. II economic policies.' },
		{ wrong: 'Convention debates control the meaning of the Constitution.', right: 'They are persuasive only; the ratified text, as the people understood it, controls (<i>Civil Liberties Union</i>).', example: 'A commissioner\'s speech cannot change clear words.' },
		{ wrong: 'Start with the framers\' intent.', right: 'Start with the words (verba legis); go to intent only if ambiguous (<i>Francisco</i>).', example: '"Patrimony" read in its ordinary sense first.' },
		{ wrong: 'Read each provision on its own.', right: 'Read the Constitution as a whole; a specific provision qualifies a general one.', example: '<i>Civil Liberties Union</i>: Art. VII, Sec. 13 over Art. IX-B, Sec. 7.' },
		{ wrong: 'Self-executing means Congress cannot legislate on the subject.', right: 'Congress may still enforce, penalize and supply details.', example: 'A law penalizing violation of the Filipino preference.' },
		{ wrong: 'Local autonomy lets LGUs override national statutes.', right: 'The delegate cannot be superior to the principal (<i>Magtajas</i>).', example: 'Casino ban void.' }
	],

	practice: [
		// C
		{ cat: 'C', level: 1, topic: 'Definitions', q: 'Define a constitution.', short: 'The written instrument by which the fundamental powers of government are established, limited and defined, and by which those powers are distributed among the several departments for their safe and useful exercise for the benefit of the people (§11.01).', keys: 'fundamental powers; established, limited, defined; distributed among departments' },
		{ cat: 'C', level: 1, topic: 'Purpose', q: 'What is the primary purpose of constitutional construction?', short: 'To ascertain the intent of the framers, and of the people who adopted the Constitution, as expressed in its language, and thereafter to assure the realization of that intent. The people are presumed guided mainly by the framers\' explanation (<i>Nitafan</i>; §§11.02–11.03).', keys: 'intent of framers and people; as expressed; realization' },
		{ cat: 'C', level: 1, topic: 'Self-executing', q: 'What is a self-executing provision? What is the presumption?', short: 'One complete in itself, needing no further legislation, and judicially enforceable by itself. Constitutional provisions are presumed self-executing unless the contrary is clearly intended (<i>Manila Prince Hotel</i>).', keys: 'complete in itself; no legislation needed; presumed self-executing' },
		{ cat: 'C', level: 2, topic: 'Language', q: 'Why are words of the Constitution given their ordinary meaning? Is there an exception?', short: 'Because the Constitution is not primarily a lawyer\'s document; it was ratified by the people, who understood its words in their ordinary sense. Exception: technical terms take their technical meaning (§11.05; <i>J.M. Tuason</i>).', keys: 'not a lawyer\'s document; people ratified; technical terms' },
		{ cat: 'C', level: 2, topic: 'Aids', q: 'What weight do the debates of the Constitutional Commission carry?', short: 'They are persuasive, not controlling. They show the views of individual members, while the proper interpretation depends more on how the people who ratified the text understood it (<i>Civil Liberties Union</i>; §11.08).', keys: 'persuasive; not controlling; people\'s understanding' },
		{ cat: 'C', level: 2, topic: 'Mandatory', q: 'Are constitutional provisions mandatory or directory? Why?', short: 'Presumed mandatory, unless a different intention is shown by express provision or necessary implication, and directory only when that is unmistakably manifest. Reason: in a constitution the sovereign itself speaks and lays down rules binding all departments (§11.14).', keys: 'presumed mandatory; unmistakably manifest; sovereign speaks' },
		{ cat: 'C', level: 2, topic: 'Living document', q: 'What is meant by saying the Constitution is a "living" document?', short: 'Its provisions are "not mathematical formulas" but "organic living institutions"; its broad words accommodate new conditions, and it is read as a continuously operative charter, consistent with reason, justice and public interest, never as requiring the impossible or absurd (§11.04). Flexibility operates within the text, not against it.', keys: 'organic living institutions; new conditions; within the text' },
		// A
		{ cat: 'A', level: 1, topic: 'Maxims', q: 'Enumerate and explain, in order, the three principles of constitutional construction laid down in Francisco v. House of Representatives.', short: '(1) <b>Verba legis</b>: wherever possible, words are given their ordinary meaning, except technical terms. (2) <b>Ratio legis est anima</b>: where there is ambiguity, the words are interpreted according to the framers\' intent. (3) <b>Ut magis valeat quam pereat</b>: the Constitution is interpreted as a whole, so every part is given effect.', keys: 'verba legis; ratio legis est anima; ut magis valeat; order' },
		{ cat: 'A', level: 1, topic: 'Aids', q: 'Enumerate the aids to the construction of an ambiguous constitutional provision.', short: '(1) The realities at the time of adoption and the object to be accomplished (history, conditions, evils remedied); (2) the proceedings of the convention or commission (persuasive only); (3) contemporaneous construction and writings; (4) previous laws and judicial rulings; (5) changes in phraseology from earlier constitutions; (6) the consequences of alternative constructions (§§11.06–11.12).', keys: 'history; debates; contemporaneous; prior laws; phraseology; consequences' },
		{ cat: 'A', level: 2, topic: 'General rules', q: 'Enumerate the rules of general application in constitutional construction.', short: '(1) The Constitution is construed as a whole; (2) its provisions are presumed mandatory; (3) it operates prospectively unless it clearly provides otherwise; (4) the rules of statutory construction apply where appropriate (§§11.13–11.16). Add: its provisions are presumed self-executing (§11.17).', keys: 'whole; mandatory; prospective; statcon rules; self-executing' },
		{ cat: 'A', level: 2, topic: 'Self-executing', q: 'If a constitutional provision is self-executing, may Congress still legislate on it? Enumerate what Congress may do.', short: 'Yes. Congress may (1) enact laws to enforce it, (2) impose penalties for its violation, and (3) supply details for its implementation, as long as the legislation is consistent with the provision and does not curtail it.', keys: 'enforce; penalize; supply details; consistent' },
		{ cat: 'A', level: 2, topic: 'Self-executing', q: 'Give the indicators that a constitutional provision is self-executing, and those that it is not.', short: 'Self-executing: complete in itself; supplies a rule a court can apply; does not defer to legislation; phrased as a positive command. Not self-executing: a statement of principle or policy (generally Art. II), or language like "as may be provided by law" or "Congress shall provide," showing that implementation awaits legislation (<i>Tañada</i>; <i>Kilosbayan</i>).', keys: 'complete; applicable; no deferral; command vs. policy; "as may be provided by law"' },
		// D
		{ cat: 'D', level: 2, topic: 'Mandatory', q: 'Constitutional provisions are presumed directory unless expressly declared mandatory.', tf: false, a: 'They are presumed mandatory; they are directory only when a different intention is unmistakably manifest (§11.14).', keys: 'Agpalo §11.14', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Self-executing', q: 'Constitutional provisions are presumed self-executing.', tf: true, a: 'Unless the contrary is clearly intended (<i>Manila Prince Hotel</i>; §11.17).', keys: 'Manila Prince Hotel; Agpalo §11.17', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Aids', q: 'The debates of the Constitutional Commission are controlling in determining the meaning of a constitutional provision.', tf: false, a: 'They are persuasive only; the ratified text, as understood by the people, controls (<i>Civil Liberties Union</i>).', keys: 'Civil Liberties Union v. Executive Secretary', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Language', q: 'Words of the Constitution are generally given their ordinary meaning, except where technical terms are used.', tf: true, a: 'Verba legis (§11.05; <i>Francisco</i>; <i>J.M. Tuason</i>).', keys: 'Agpalo §11.05', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Self-executing', q: 'Once a constitutional provision is held self-executing, Congress can no longer pass any law on its subject.', tf: false, a: 'Congress may still enact laws to enforce it, penalize violations, and supply details, consistent with the provision.', keys: 'Agpalo §11.17', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Whole', q: 'Each provision of the Constitution is construed independently of the others.', tf: false, a: 'No provision is to be separated from all the others and considered alone; all provisions on a subject are read together (§11.13; <i>Civil Liberties Union</i>).', keys: 'Agpalo §11.13', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Manila Prince', q: 'In Manila Prince Hotel v. GSIS, "national patrimony" was held to include cultural heritage and not only natural resources.', tf: true, a: 'The Court gave "patrimony" its ordinary meaning of heritage and treated the Manila Hotel as part of the national patrimony.', keys: 'Manila Prince Hotel (1997)', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'Maxims', q: 'Under Francisco v. House, the Court first looks to the framers\' intent before examining the text.', tf: false, a: 'The order is verba legis (text) first; ratio legis (intent) applies only where there is ambiguity; and the whole is read together.', keys: 'Francisco v. House (2003)', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'CLU', q: 'In Civil Liberties Union v. Executive Secretary, Art. VII, Sec. 13 was treated as a stricter rule that qualifies the general rule in Art. IX-B, Sec. 7, par. 2.', tf: true, a: 'The Court read the provisions together; the specific prohibition for the President, Vice-President, Cabinet and their deputies prevailed, and E.O. 284 was unconstitutional.', keys: 'Civil Liberties Union (1991)', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'Self-executing', q: 'All the provisions in the Declaration of Principles and State Policies (Art. II) are self-executing and judicially enforceable.', tf: false, a: 'Art. II provisions are generally guidelines for legislation and not self-executing (<i>Tañada v. Angara</i>; <i>Kilosbayan v. Morato</i>), though some have been enforced (<i>Oposa v. Factoran</i>).', keys: 'Tañada v. Angara; Kilosbayan; Oposa', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Magtajas', q: 'The constitutional policy of local autonomy allows an LGU to prohibit by ordinance an activity that a national statute authorizes.', tf: false, a: 'LGUs exercise delegated power; the delegate cannot be superior to the principal, and local autonomy does not remove Congress\'s control (<i>Magtajas</i>).', keys: 'Magtajas v. Pryce (1994)', tag: 'jurisprudence' },
		// B
		{ cat: 'B', level: 3, topic: 'Self-executing', q: 'Distinguish self-executing from non-self-executing constitutional provisions. Which is presumed? Give an example of each.', short: 'A <b>self-executing</b> provision is complete in itself and judicially enforceable without legislation (e.g., Art. XII, Sec. 10, par. 2, <i>Manila Prince Hotel</i>). A <b>non-self-executing</b> provision states a principle or policy, or leaves implementation to law, and needs legislation before courts can enforce it (e.g., general economic policies in Art. II, <i>Tañada v. Angara</i>). Self-execution is presumed unless the contrary is clearly intended.', keys: 'complete vs. needs legislation; presumption; Manila Prince; Tañada' },
		{ cat: 'B', level: 3, topic: 'Maxims', q: 'Distinguish verba legis from ratio legis est anima in constitutional construction. When does each apply?', short: '<b>Verba legis</b> gives the words their ordinary meaning (technical terms excepted) and always applies first; if the text is plain, it is applied as written. <b>Ratio legis est anima</b> interprets the words according to the framers\' intent, and applies only when the text is ambiguous (<i>Francisco</i>).', keys: 'words first; reason only when ambiguous; Francisco' },
		{ cat: 'B', level: 3, topic: 'Mandatory', q: 'Compare the presumption on mandatory character for constitutional provisions and for statutes.', short: 'Constitutional provisions are presumed mandatory; they are directory only where that intent is unmistakably manifest, because the sovereign speaks in them (§11.14). Statutes carry no general presumption; whether a provision is mandatory depends on legislative intent read through its consequences (§§8.03–8.04).', keys: 'presumed mandatory vs. consequences test' },
		// F
		{ cat: 'F', level: 3, topic: 'Magtajas', q: 'In Magtajas, how did the Court treat the city\'s reliance on the constitutional policy of local autonomy?', short: 'It held that local governments exercise only delegated legislative power, so the delegate cannot be superior to the principal; an ordinance cannot nullify a statute. Local autonomy reduced but did not remove Congress\'s control over LGUs, except for powers granted directly by the Constitution, such as the taxing power under Art. X, Sec. 5. And since the Constitution does not prohibit gambling, whether to allow it was for Congress.', keys: 'delegated power; delegate not superior; Art. X, Sec. 5 exception; gambling not unconstitutional' },
		{ cat: 'F', level: 3, topic: 'Manila Prince', q: 'Why did the Court in Manila Prince Hotel hold that Art. XII, Sec. 10, par. 2 is self-executing?', short: 'Because it is a "mandatory, positive" command, complete in itself, that needs no legislation to determine how the preference is applied; constitutional provisions are presumed self-executing, since otherwise Congress could nullify them by inaction. Where there is a right there is a remedy, so the qualified Filipino bidder could match the foreign winning bid.', keys: 'mandatory positive command; complete; presumption; ubi jus ibi remedium' },
		{ cat: 'F', level: 4, topic: 'CLU', q: 'Using Civil Liberties Union v. Executive Secretary, explain how reading the Constitution "as a whole" resolved the conflict between Art. VII, Sec. 13 and Art. IX-B, Sec. 7, par. 2.', short: 'E.O. 284 relied on Art. IX-B, Sec. 7, par. 2, which lets appointive officials hold other posts if allowed by law or by their primary functions. But Art. VII, Sec. 13 specifically bars the President, Vice-President, Cabinet members and their deputies from holding other offices "unless otherwise provided in this Constitution." Read together, Sec. 13 is the stricter, specific rule for the Executive and an exception to the general rule, so a statute or E.O. cannot authorize what Sec. 13 forbids. E.O. 284 was unconstitutional.', keys: 'specific over general; stricter rule; read together; E.O. 284' },
		// E
		{
			cat: 'E',
			level: 4,
			topic: 'Self-executing',
			title: 'Ch. XI — The heritage station',
			facts: 'The national government decides to sell, through public bidding, a controlling stake in a corporation that owns a century-old railway station complex declared a national cultural treasure. A foreign consortium submits the highest bid. A qualified Filipino corporation, the only other bidder, offers to match the winning bid and invokes Art. XII, Sec. 10, par. 2 of the Constitution. The government refuses, arguing that no law has yet been passed implementing the Filipino-preference clause.',
			q: 'May the Filipino corporation enforce the preference? Answer using ALAC.',
			alac: {
				answer: 'Yes. It may match the winning bid and enforce the constitutional preference.',
				legalBasis: 'Art. XII, Sec. 10, par. 2: "In the grant of rights, privileges, and concessions covering the national economy and patrimony, the State shall give preference to qualified Filipinos." Constitutional provisions are presumed self-executing unless the contrary is clearly intended; otherwise Congress could nullify them by inaction (Agpalo §11.17). In <i>Manila Prince Hotel v. GSIS</i>, the Court held this provision self-executing and gave "patrimony" its ordinary meaning, including cultural heritage.',
				application: 'The preference clause is a positive command ("shall give preference") that a court can apply without further legislation; nothing in it says "as may be provided by law." The station complex, a national cultural treasure, is part of the national patrimony in the ordinary sense of heritage. The Filipino corporation is qualified and offered to match the highest bid, which is exactly the situation in <i>Manila Prince Hotel</i>. The absence of an implementing law does not defeat a self-executing right.',
				conclusion: 'The government must award the stake to the Filipino corporation upon its matching of the winning bid.'
			},
			weaker: 'The "no implementing law" argument would let the State postpone the Constitution indefinitely, which the presumption of self-execution prevents.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Whole document',
			title: 'Ch. XI — The undersecretary\'s second job',
			facts: 'By executive order, the Undersecretary of Finance is also appointed full-time president of an unrelated government-owned hotel corporation, with a separate salary. The order cites Art. IX-B, Sec. 7, par. 2 of the Constitution, which allows appointive officials to hold other government offices if allowed by law or by the primary functions of their position, and a statute allowing the President to designate officials to GOCC posts. A taxpayer challenges the appointment.',
			q: 'Is the appointment valid? Answer using ALAC.',
			alac: {
				answer: 'No. The appointment violates Art. VII, Sec. 13.',
				legalBasis: 'The Constitution is construed as a whole; no provision is considered alone, and a specific provision qualifies a general one (Agpalo §11.13). Art. VII, Sec. 13 bars the President, Vice-President, Cabinet members and their deputies or assistants from holding any other office or employment during their tenure, "unless otherwise provided in this Constitution." In <i>Civil Liberties Union v. Executive Secretary</i>, the Court held this a stricter rule that qualifies the general allowance in Art. IX-B, Sec. 7, par. 2, permitting only ex officio positions required by the primary functions of the office, without additional compensation.',
				application: 'An Undersecretary is a deputy of a Cabinet member, so Art. VII, Sec. 13 applies to him. The order relies on Art. IX-B, Sec. 7, par. 2 and on a statute, but read with Art. VII, Sec. 13 that general provision cannot authorize what the specific provision forbids for members of the Executive. The hotel presidency is unrelated to the functions of the Department of Finance and carries a separate salary, so it is not an ex officio post required by his primary functions.',
				conclusion: 'The appointment is unconstitutional, and the executive order is void insofar as it authorizes it.'
			},
			weaker: 'Reading Art. IX-B, Sec. 7 alone ignores the rule that the Constitution is read as a whole, which is exactly the error in E.O. 284.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Verba legis',
			title: 'Ch. XI — The commissioner who teaches',
			facts: 'Art. IX-A, Sec. 2 of the Constitution provides that "No Member of a Constitutional Commission shall, during his tenure, hold any other office or employment." A Commissioner accepts a paid part-time teaching position at a state university, arguing that part-time teaching is not really "employment" and that a framer once remarked that commissioners should be free to share their knowledge.',
			q: 'May the Commissioner accept the teaching post? Answer using ALAC.',
			alac: {
				answer: 'No. A paid teaching post at a state university is "other ... employment" within the prohibition.',
				legalBasis: 'Under <i>verba legis</i>, the words of the Constitution are given their ordinary meaning, and plain language is applied as written; resort to the framers\' intent (<i>ratio legis</i>) is proper only where there is ambiguity (<i>Francisco v. House</i>; <i>J.M. Tuason</i>). Convention debates are persuasive, not controlling, and cannot override the text (<i>Civil Liberties Union</i>). Constitutional provisions are presumed mandatory (§11.14).',
				application: 'In ordinary usage, "employment" includes any paid work for another, full-time or part-time. A salaried teaching position at a state university is employment in the plain sense, and in government at that. The text uses the broad phrase "any other office or employment" and makes no exception for part-time work, so there is no ambiguity requiring resort to the framers\' intent. A single framer\'s remark cannot change the plain meaning the people ratified.',
				conclusion: 'The Commissioner may not hold the teaching post during his tenure.'
			},
			weaker: 'The Commissioner skips to framers\' intent without first showing an ambiguity in the text, reversing the order in <i>Francisco</i>.'
		},
		// G
		{
			cat: 'G',
			level: 5,
			topic: 'Self-executing',
			title: 'Ch. XI — The legal-aid clause',
			facts: 'Suppose a constitutional amendment adds: "The State shall establish a system of free legal assistance for indigent litigants in civil cases, under such terms and conditions as may be provided by law." Congress has not passed any implementing law. Lina, an indigent defendant in a civil case, petitions the court to order the State to provide her a free lawyer, citing the amendment and the presumption that constitutional provisions are self-executing. She also cites <i>Manila Prince Hotel</i>.',
			q: 'Should the court grant Lina\'s petition? Discuss using ALAC.',
			alac: {
				answer: 'No. On these terms the provision is not self-executing, so the court cannot compel the State to provide counsel in civil cases until Congress acts.',
				legalBasis: 'Constitutional provisions are presumed self-executing unless the contrary is clearly intended (Agpalo §11.17; <i>Manila Prince Hotel</i>). A provision is not self-executing where it lays down a policy or expressly leaves its implementation to legislation, as by "as may be provided by law" (<i>Tañada v. Angara</i>; <i>Kilosbayan v. Morato</i>). The words of the Constitution are read in their ordinary meaning (<i>verba legis</i>).',
				application: 'The presumption is overcome by the text itself. The clause directs the State to "establish a system" and expressly leaves its "terms and conditions" to be "provided by law": who qualifies as indigent, which civil cases are covered, and how lawyers are assigned and paid. Without those terms there is no rule a court can apply. <i>Manila Prince Hotel</i> is distinguishable: there, "the State shall give preference to qualified Filipinos" was complete in itself and contained no deferral to legislation.',
				conclusion: 'The petition should be denied, without prejudice to remedies under existing legal-aid laws and rules; the amendment binds Congress to legislate.'
			},
			weaker: 'Lina\'s reading would ignore the words "as may be provided by law," contrary to verba legis and to the rule that every part of the Constitution be given effect.'
		},
		{
			cat: 'G',
			level: 5,
			topic: 'Mandatory & whole',
			title: 'Ch. XI — The late appellate decision',
			facts: 'The Court of Appeals decided an appeal 15 months after it was submitted for decision, beyond the 12-month period in Art. VIII, Sec. 15(1). The losing party moves to annul the decision, arguing that (1) constitutional provisions are presumed mandatory; (2) Sec. 15(1) says cases "must be decided" within the period; and (3) "mandatory" provisions are those whose violation voids the act.',
			q: 'Is the Court of Appeals\' decision void? Discuss using ALAC, applying the rules of constitutional construction.',
			alac: {
				answer: 'No. The decision is valid, though the justices concerned may answer administratively for the delay.',
				legalBasis: 'Constitutional provisions are presumed mandatory (Agpalo §11.14), but the Constitution is read as a whole, and every part must be given effect (<i>ut magis valeat quam pereat</i>; §11.13; <i>Francisco</i>). Art. VIII, Sec. 15(4) provides: "Despite the expiration of the applicable mandatory period, the court, without prejudice to such responsibility as may have been incurred in consequence thereof, shall decide or resolve the case ... without further delay."',
				application: 'The movant reads Sec. 15(1) alone and imports the statutory idea that "mandatory" always means "void if violated." Read with Sec. 15(4), the Constitution itself prescribes the consequence of missing the period: the court must still decide, and the delay may create responsibility for the justices. The period is mandatory in the sense that it imposes a binding duty, not in the sense that it ends the court\'s jurisdiction. Voiding the decision would contradict Sec. 15(4) and leave it without effect.',
				conclusion: 'The motion to annul should be denied; the delay may be raised administratively.'
			},
			weaker: 'The movant\'s argument violates the whole-document rule. It also borrows the statutory consequences test, which is of little use in constitutional construction where the Constitution itself states the consequence.'
		}
	],

	memoryAids: [
		['Three maxims (Francisco)', '<b>WORDS → REASON → WHOLE.</b>'],
		['Aids', '<b>History · Debates · Contemporaries · Precedents · Phrasing changes · Consequences.</b>'],
		['Presumptions', '<b>Mandatory · Self-executing · Prospective.</b>'],
		['Self-executing test', '<b>Complete · Applicable · No deferral · Command.</b>'],
		['Debates', '"<b>Persuasive, never controlling.</b>" The people ratified the text, not the speeches.'],
		['Constitutions', '<b>1899 · 1935 · 1943 · 1973 · 1986 · 1987.</b>']
	],
	flashcards: [
		['Primary purpose of constitutional construction?', 'Ascertain and realize the intent of the framers and the people as expressed in the text.'],
		['The three maxims, in order?', 'Verba legis; ratio legis est anima; ut magis valeat quam pereat (<i>Francisco</i>).'],
		['Ordinary or technical meaning?', 'Ordinary, except technical terms.'],
		['"That is where we begin." Which case?', '<i>J.M. Tuason & Co. v. LTA</i> (1970).'],
		['Weight of convention debates?', 'Persuasive, not controlling (<i>Civil Liberties Union</i>).'],
		['Presumption: mandatory or directory?', 'Mandatory; directory only when unmistakably manifest.'],
		['Presumption: self-executing or not?', 'Self-executing unless the contrary is clearly intended.'],
		['Which case held the Filipino-preference clause self-executing?', '<i>Manila Prince Hotel v. GSIS</i> (1997).'],
		['"Patrimony" includes?', 'Cultural heritage, not only natural resources (<i>Manila Prince</i>).'],
		['Are Art. II principles self-executing?', 'Generally not (<i>Tañada</i>; <i>Kilosbayan</i>), with exceptions (<i>Oposa</i>).'],
		['What may Congress do with a self-executing provision?', 'Enforce, penalize, supply details.'],
		['<i>Civil Liberties Union</i> held?', 'E.O. 284 unconstitutional; Art. VII, Sec. 13 is a stricter rule qualifying Art. IX-B, Sec. 7.'],
		['<i>Nitafan</i> held?', 'Judges\' salaries are subject to income tax; framers did not intend an exemption.'],
		['<i>Francisco</i>: when are impeachment proceedings "initiated"?', 'Upon filing of the verified complaint and its referral to the House Committee on Justice.'],
		['<i>Ratio legis est anima</i> means?', 'The reason of the law is its soul.'],
		['<i>Ubi jus ibi remedium</i> means?', 'Where there is a right, there is a remedy.']
	],
	recall: [
		['State the three maxims and their order.', 'Verba legis (ordinary meaning); ratio legis est anima (framers\' intent if ambiguous); ut magis valeat quam pereat (read as a whole).'],
		['List the six aids to constitutional construction.', 'History/evils; convention proceedings; contemporaneous construction; prior laws and rulings; changes in phraseology; consequences.'],
		['Why are constitutional provisions presumed self-executing?', 'Otherwise Congress could nullify them by not legislating.'],
		['What indicates a provision is not self-executing?', 'Policy language or deferral ("as may be provided by law").'],
		['Why are debates only persuasive?', 'They reflect individual views; the people ratified the text.'],
		['How did CLU reconcile Art. VII, Sec. 13 and Art. IX-B, Sec. 7?', 'The specific, stricter rule for the Executive qualifies the general rule.'],
		['What did Francisco decide about "initiate"?', 'Filing plus referral to the House Committee on Justice; the second complaint within a year was barred.'],
		['How does Art. VIII, Sec. 15(4) affect the mandatory presumption?', 'The Constitution itself makes late decisions valid while preserving responsibility.'],
		['Why did local autonomy not help in Magtajas?', 'LGUs exercise delegated power and cannot override statutes; autonomy reduced but did not remove Congress\'s control.'],
		['Define a constitution.', 'The written instrument establishing, limiting and defining the fundamental powers of government and distributing them among departments for the people\'s benefit.']
	],
	summary: {
		rules: [
			'Purpose: framers\' and people\'s intent, as expressed in the text.',
			'Words first (ordinary meaning, broad sense); reason if ambiguous; whole always (<i>Francisco</i>).',
			'Aids: history, debates (persuasive), contemporaneous construction, prior law, phrasing changes, consequences.',
			'Presumed mandatory; presumed self-executing; prospective.',
			'Non-self-executing: policies and provisions deferring to law.',
			'Congress may enforce, penalize and supply details for self-executing provisions.'
		],
		distinctions: ['Self-executing vs. non-self-executing.', 'Constitutional vs. statutory construction.', 'Verba legis vs. ratio legis.', 'Debates vs. ratified text.', 'Mandatory presumption: Constitution vs. statutes.'],
		cases: ['<i>Francisco</i>: three maxims; "initiate."', '<i>Manila Prince</i>: self-executing; patrimony.', '<i>CLU</i>: whole document; debates persuasive.', '<i>Nitafan</i>: framers\' intent.', '<i>J.M. Tuason</i>: verba legis.', '<i>Magtajas</i>: local autonomy limited (supporting).'],
		traps: ['"Presumed directory."', '"Debates control."', '"Start with intent."', '"Every provision self-executing."', '"Self-executing bars legislation."']
	},
	checklist: [
		'I can state the three maxims in order and apply them to a new provision.',
		'I can enumerate the six aids and say how much weight debates carry.',
		'I can explain the presumptions (mandatory, self-executing) and their limits.',
		'I can tell a self-executing provision from a non-self-executing one by its wording.',
		'I can explain <i>Manila Prince</i>, <i>CLU</i>, <i>Francisco</i> and <i>Nitafan</i>.',
		'I can explain why local autonomy did not save the ordinances in <i>Magtajas</i>.'
	],
	watchFor: `<strong>Watch for: words, then reason, then the whole.</strong>
<ul>
<li>Verba legis first; ratio legis only if ambiguous; ut magis valeat always (<i>Francisco</i>).</li>
<li>Presumed mandatory and self-executing, unless the text shows a policy or defers to law.</li>
<li>Debates are persuasive only; the ratified text controls.</li>
</ul>`
};
