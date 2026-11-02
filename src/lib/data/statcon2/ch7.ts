import { ul, type Chapter } from './model';

export const ch7: Chapter = {
	id: 'ch7',
	n: 7,
	roman: 'VII',
	title: 'Strict or Liberal Construction',
	short: 'Ch. VII — Strict or Liberal Construction',
	sections: '§§7.01–7.38',

	plain: `How tightly a court reads a statute depends on what kind of statute it is. Laws that punish people, take their property or money, or give someone a special favor are read <b>strictly</b>: nothing beyond what the words clearly say. Laws meant to protect or help people are read <b>liberally</b>: generously, to reach their purpose. Neither approach lets a court rewrite a clear law.`,
	overview: `<p><b>Part A (§§7.01–7.06)</b> explains what strict and liberal construction mean, what decides which one applies (the statute's nature, its purpose, and the mischief it remedies), and the constitutional mandate of social justice. <b>Part B (§§7.07–7.25)</b> lists the statutes read <b>strictly</b>, and against whom. <b>Part C (§§7.26–7.38)</b> lists the statutes read <b>liberally</b>, and in whose favor.</p>
<p>Two ideas carry the whole chapter. First, <b>strict or liberal construction only matters when there is doubt</b>; a clear statute is applied as written. Second, <b>"strict" is always strict <i>against</i> someone</b>: against the State in penal laws, against the government in tax impositions, against the claimant in tax exemptions, against the grantee in privileges and grants. Learn the direction, not just the label.</p>`,
	questions: [
		'What do strict and liberal construction mean, and what do they <i>not</i> mean?',
		'What decides whether a statute is read strictly or liberally?',
		'Which statutes are read strictly, and against whom?',
		'Which statutes are read liberally, and in whose favor?',
		'How do the rules on tax laws, tax exemptions and local government powers differ?',
		'What are the limits of each approach?'
	],
	keyPoints: [
		'The nature of the statute, the purpose to be served and the mischief to be remedied decide the approach (§7.01).',
		'Both approaches operate only on <b>doubtful</b> language; a clear text is applied as written.',
		'Penal statutes: strictly against the State, liberally for the accused, but not so as to defeat the law\'s evident purpose (<i>People v. Purisima</i>).',
		'Tax impositions are read strictly against the government; tax exemptions are read <i>strictissimi juris</i> against the claimant; exceptions and provisos are read strictly too (<i>CIR v. CA</i>, Cenvoco).',
		'Grants of <b>property</b> to LGUs: strictly against the LGU (<i>Manila Lodge</i>). Grants of <b>powers</b> to LGUs: liberally in its favor (LGC Sec. 5(a)). But local <b>tax ordinances</b>: strictly against the LGU (Sec. 5(b)).',
		'Social legislation, amnesty, prescription of crimes, adoption and the Rules of Court are read liberally.'
	],
	connects: `Chapter VII answers "how far" a court may go once construction is allowed (Chapters II–IV). It overlaps with Chapter VIII: requirements read strictly (jurisdictional steps, conditions of privileges) are usually also mandatory. It overlaps with Chapter IX: favorable penal laws are retroactive, and statutes on prescription of crimes are read for the accused. <i>Manila Lodge</i> is the anchor case.`,
	objectives: [
		'Define strict and liberal construction and state what each is not.',
		'Give the three factors that decide which approach applies.',
		'List the statutes read strictly and liberally, with the party each favors.',
		'Apply the penal-statute rule and its limits (<i>Purisima</i>).',
		'Distinguish tax impositions, tax exemptions and exceptions or provisos in tax laws.',
		'Distinguish grants of property from grants of power to LGUs, and both from local tax ordinances.',
		'Explain how <i>Manila Lodge</i> applied strict construction, and why Sec. 5 of the LGC did not help the petitioners in <i>Magtajas</i>.'
	],

	concepts: [
		{
			term: 'Strict construction',
			plain: 'Read only what the words clearly say; add nothing by implication.',
			legal: 'Construction according to the letter of the statute, which recognizes nothing that is not expressed, takes the words in their exact meaning, and admits no equitable considerations; the statute\'s scope is not extended by implication, intendment or equity (§7.02).',
			why: 'Some laws take liberty, property or money, or give special advantages. Their reach should not grow beyond what the legislature clearly said.',
			example: 'A law punishing one who "assists a claimant" for an excessive fee does not reach a person who merely offered to help (§7.11).',
			confuse: 'The narrowest possible meaning. Strict construction gives words their fair, exact meaning; it does not shrink them below it.'
		},
		{
			term: 'Liberal construction',
			plain: 'Read the words generously to reach the law\'s purpose.',
			legal: 'Equitable construction that enlarges the letter of the statute to accomplish its intended purpose, carry out its intent, or promote justice; words get a fair and reasonable interpretation in light of the law\'s spirit (§§7.03–7.04).',
			why: 'Remedial and protective laws fail if read grudgingly.',
			example: 'Doubtful labor provisions are resolved in favor of labor (Art. 4, Labor Code).',
			confuse: 'Judicial legislation. Liberal construction cannot enlarge a clear provision or force words out of their natural meaning.'
		},
		{
			term: 'Nature–purpose–mischief test',
			plain: 'What kind of law is it, what is it for, and what problem does it fix?',
			legal: 'Whether a statute is strictly or liberally construed depends on its nature, the purpose to be served, and the mischief to be remedied (§7.01).',
			why: 'The same word may deserve a tight reading in a penal law and a generous one in a social-welfare law.',
			example: '"Employer" is read generously in a labor law protecting workers, but a law burdening "employers" does not include the State unless it is named (§7.22).',
			confuse: 'A mechanical list. The lists in Parts B and C are applications of this test, not a substitute for it.'
		},
		{
			term: 'Penal statute (strict against the State)',
			plain: 'If a criminal law is unclear, the doubt goes to the accused.',
			legal: 'Penal statutes are construed strictly against the State and liberally in favor of the accused; no person is brought within a penal law unless clearly within its terms, and no act is criminal unless the statute clearly makes it so (§7.07).',
			why: 'Fair notice: people must be able to know what conduct is forbidden. The purpose is not to let the guilty escape on technicalities.',
			example: 'An order lists one commodity in two classes with two ceiling prices; a seller who charges between them gets the benefit of the ambiguity (§7.11).',
			confuse: 'Statutes of limitation on crimes and amnesty proclamations, which also favor the accused but are <i>liberally</i> construed.'
		},
		{
			term: '<i>Mala in se</i> and <i>mala prohibita</i>',
			plain: 'Some acts are wrong in themselves; others are wrong only because a law forbids them.',
			legal: '<i>Mala in se</i> (felonies under the RPC) require criminal intent: <i>actus non facit reum nisi mens sit rea</i>. In <i>mala prohibita</i> the question is only whether the law was violated; intent is generally not required unless the statute uses words like "willfully" or "knowingly" (§7.10).',
			why: 'Special laws often regulate conduct for public welfare where proof of intent would defeat enforcement.',
			example: 'Illegal possession of an unlicensed firearm (special law) vs. estafa (RPC).',
			confuse: 'Strict construction. Even a <i>malum prohibitum</i> law is strictly construed as to what acts it covers.'
		},
		{
			term: 'Statute in derogation of rights',
			plain: 'A law that cuts down rights people would otherwise have.',
			legal: 'Statutes that curtail common rights, usually under the police power, are strictly construed and confined to cases clearly within their scope or purpose (§7.13). Expropriation statutes are strictly construed against the expropriating authority (§7.14).',
			why: 'Rights should not be lost by implication.',
			example: 'Price-ceiling laws, laws suspending prescription, laws allowing the taking of private property.',
			confuse: 'Social legislation, which also regulates but is construed liberally in favor of the protected class.'
		},
		{
			term: 'Privilege',
			plain: 'A special favor granted by law, such as a franchise.',
			legal: 'Statutes granting privileges are strictly construed; one who claims a privilege must strictly comply with its conditions. <i>Privilegia recipiunt largam interpretationem voluntati consonam concedentis</i>: privileges are interpreted according to the will of the grantor (§7.15).',
			why: 'A privilege departs from equality before the law, so it extends only as far as the grantor clearly intended.',
			example: 'A franchise conditioned on starting operations within a fixed period is forfeited if the grantee fails to start on time.',
			confuse: 'A right. Rights are protected; privileges are confined to their terms.'
		},
		{
			term: 'Public grant to a local government unit',
			plain: 'When the State gives land or money to a city, read the gift narrowly.',
			legal: 'Legislative grants of property or money to political subdivisions are strictly construed against the grantee and in favor of the public (§7.16; <i>Manila Lodge</i>, citing Sutherland).',
			why: 'A public grant is a gratuitous transfer of public resources; anything not clearly given stays with the public.',
			example: '<i>Manila Lodge</i>: authority to lease or sell the north-end hotel site did not imply authority to sell the south end.',
			confuse: 'Grants of <b>powers</b> to LGUs, which are now liberally construed (LGC Sec. 5(a)).'
		},
		{
			term: '<i>Strictissimi juris</i> (tax exemptions)',
			plain: '"Of the strictest law." Whoever claims a tax exemption must point to clear words granting it.',
			legal: 'Tax exemptions are construed strictly against the taxpayer and liberally in favor of the taxing authority; taxation is the rule and exemption the exception; exemptions are never presumed, and the claimant must show a positive grant in the clearest language (§7.20).',
			why: 'Taxes are the lifeblood of government, and exemptions shift the burden to other taxpayers.',
			example: '<i>PLDT v. Province of Laguna</i> (2005): an "equality of treatment" clause did not clearly grant exemption from the local franchise tax.',
			confuse: 'Tax-imposing statutes, which are read strictly <i>against the government</i>.'
		},
		{
			term: 'General welfare clause',
			plain: 'The broad grant that lets local governments act for their people\'s well-being.',
			legal: 'The general welfare clause is liberally construed in favor of LGUs. It has two branches: ordinances necessary to carry out powers and duties conferred by law, and ordinances for health, safety, prosperity, morals, peace, good order, comfort and convenience (§7.27; LGC Sec. 16).',
			why: 'Local governments must respond to local needs without waiting for a specific grant for every problem.',
			example: 'A city ordinance requiring CCTV in 24-hour stores, absent any conflicting statute.',
			confuse: 'Power to defy a statute. An ordinance under the welfare clause is void if it contravenes a statute (<i>Magtajas</i>).'
		},
		{
			term: 'Social legislation and social justice',
			plain: 'Laws for workers, farmers and the poor are read in their favor when unclear.',
			legal: 'Laws implementing social justice and protection to labor are liberally construed, and doubts are resolved in favor of the persons the law intends to benefit (§§7.05, 7.26; Art. 4, Labor Code; Art. 1702, Civil Code). The social justice mandate binds all three branches.',
			why: 'The Constitution commits the State to social justice (Art. II, Sec. 10; Art. XIII).',
			example: 'Holiday pay: every employee not among those expressly excepted is entitled to it.',
			confuse: 'Automatic victory for the worker. A clear law is applied as written even if it does not favor labor.'
		},
		{
			term: 'Amnesty (and pardon)',
			plain: 'The State\'s forgiveness for crimes is read generously.',
			legal: 'Amnesty proclamations are liberally construed to carry out their purpose of encouraging the return of offenders to the fold of the law; doubts are resolved in favor of those claiming amnesty and against the State (§7.33). Statutes of limitation on crimes, being acts of grace, are likewise read in favor of the accused (§7.34).',
			why: 'They are acts of grace whose purpose would be defeated by a grudging reading.',
			example: 'If it is doubtful whether a rebel\'s act falls within the amnesty, resolve it for the rebel.',
			confuse: 'Penal statutes. Both favor the accused, but amnesty is read <i>liberally</i> while penal statutes are read <i>strictly</i>.'
		}
	],

	principles: [
		{
			name: 'The statute\'s nature, purpose and mischief decide the approach — and only for doubtful language',
			rule: 'Whether a statute is construed strictly or liberally depends on its nature, the purpose to be served and the mischief to be remedied. Either approach is used only when the language is doubtful; a clear and unambiguous statute is applied as written.',
			basis: 'Agpalo §§7.01–7.04.',
			why: 'The approach is a tool for carrying out legislative intent, not a license to substitute the court\'s preference.',
			when: 'When a statutory term or provision is genuinely open to more than one reading.',
			limits: 'Liberal construction cannot enlarge a clear provision, force words out of their natural meaning, or engraft what the court thinks ought to be there: that would be judicial legislation. Strict construction does not mean the narrowest possible meaning.',
			differs: 'Chapter IV (verba legis) asks whether construction is needed at all; Chapter VII asks, once it is, how tightly to read.',
			example: '<i>Magtajas</i>: the LGC\'s liberal-construction clause did not help the city, because "gambling and other prohibited games of chance" was clear.'
		},
		{
			name: 'Penal statutes are construed strictly against the State and liberally for the accused',
			rule: 'No person is brought within a penal law unless clearly within its terms; no act is criminal unless the statute clearly makes it so. But strict construction is only one factor: it must not defeat the statute\'s evident intent, policy and purpose, and where the letter leads to absurdity the spirit controls.',
			basis: 'Agpalo §§7.07–7.12; <i>People v. Purisima</i>, 86 SCRA 542 (1978).',
			why: 'Fair notice to the public of what is forbidden; liberty is not taken by implication.',
			when: 'A doubt about whether particular conduct, persons or penalties fall within a penal provision.',
			limits: 'If a penal law has two readings, one exempting the accused and one carrying out its manifest intent, the second is adopted (§7.12). Literal application that produces absurd results is rejected (<i>Purisima</i>: P.D. 9 read with its whereas clauses).',
			differs: 'Statutes on prescription of crimes and amnesty also favor the accused, but by <i>liberal</i> construction (§§7.33–7.34).',
			example: '<i>Purisima</i>: carrying a bladed weapon outside one\'s residence is punishable under P.D. 9 only when linked to subversion, rebellion, lawless violence, criminality or public disorder.'
		},
		{
			name: 'Statutes in derogation of rights and expropriation statutes are strictly construed',
			rule: 'Statutes curtailing common rights are confined to cases clearly within their scope. Statutes authorizing expropriation are construed strictly against the expropriating authority and liberally in favor of the property owner.',
			basis: 'Agpalo §§7.13–7.14.',
			why: 'Rights and property should not be lost by implication or doubtful interpretation.',
			when: 'A law limits property rights, imposes price controls, suspends prescription, or authorizes taking private property.',
			limits: 'Strict construction does not invalidate a valid police-power measure; it only confines it to its clear scope.',
			differs: 'Social legislation also limits some rights (e.g., of employers) but is read liberally for its intended beneficiaries.',
			example: 'A law authorizing a city to expropriate land "for a public market" does not authorize taking land for a parking building leased to a private operator.'
		},
		{
			name: 'Privileges and legislative grants to local governments are strictly construed against the grantee',
			rule: 'One who claims a privilege must strictly comply with its conditions, and the privilege extends only as far as the grantor clearly intended. Legislative grants of public property or money to political subdivisions are strictly construed against the grantee.',
			basis: 'Agpalo §§7.15–7.16; <i>Manila Lodge No. 761 v. CA</i> (1976), citing Sutherland.',
			why: 'A privilege or public grant gives an advantage at the public\'s expense; what is not clearly given remains with the public.',
			when: 'A franchise, a license, a land grant, or any statutory favor is claimed to extend beyond its express terms.',
			limits: 'The rule is about grants of property or privilege. Grants of governmental <i>powers</i> to LGUs are now construed liberally (§7.28; LGC Sec. 5(a)).',
			differs: 'Contrast §7.28: same LGU, opposite rule, depending on whether the question is property or power.',
			example: '<i>Manila Lodge</i>: Act No. 1360 authorized the City to lease or sell only the north-end hotel site; construed strictly, it gave no authority to sell the south end.'
		},
		{
			name: 'Removal of officials and naturalization laws are strictly construed',
			rule: 'Statutes on removal or suspension of public officials are strictly construed: the grounds are limited to those listed, and where a statute prescribes the procedure and the authority, other modes and authorities are excluded. Naturalization laws are strictly construed against the applicant; doubts are resolved against him.',
			basis: 'Agpalo §§7.17–7.18.',
			why: 'Removal affects security of tenure; naturalization is a statutory privilege, not a natural right.',
			when: 'An official is disciplined on a ground or by an authority not clearly provided; an applicant\'s qualifications are doubtful.',
			limits: 'The removal rule does not bar removal on grounds the law clearly provides; it bars expansion by implication.',
			differs: 'Naturalization is strict against the claimant (like privileges and tax exemptions); removal statutes are strict in favor of the official.',
			example: 'If the law vests the power to investigate elective local officials in the provincial board, subject to appeal, the President cannot start the investigation directly (§7.17).'
		},
		{
			name: 'Tax laws: impositions strictly against the government; exemptions strictly against the claimant',
			rule: 'A tax cannot be imposed without clear and express words, and tax laws are not extended by implication. Tax exemptions are construed <i>strictissimi juris</i> against the taxpayer: exemptions are never presumed, and the claimant must show a positive grant in the clearest language.',
			basis: 'Agpalo §§7.19–7.21; <i>PLDT v. Province of Laguna</i>, G.R. No. 151899, Aug. 16, 2005; <i>Maceda v. Macaraeg</i>, 197 SCRA 771 (1991); <i>CIR v. CA</i>, G.R. No. 107135, Feb. 23, 1999 (Cenvoco).',
			why: 'Taxation takes property, so its reach is not enlarged; but taxes are the lifeblood of government, so escapes from them are not enlarged either.',
			when: 'A dispute over whether a tax covers a person or transaction (imposition), or whether a claimed exemption exists (exemption).',
			limits: 'Qualifications (§7.21): a clear exemption is applied as written, without judicial additions; an exemption of a government instrumentality from "all forms of taxes" is construed broadly to cover direct and indirect taxes (<i>Maceda</i>); and exceptions or provisos in tax laws are strictly construed, which can favor the taxpayer (<i>CIR v. CA</i>).',
			differs: 'Imposition: doubt favors the taxpayer. Exemption: doubt favors the government.',
			example: '<i>CIR v. CA</i> (Cenvoco): the proviso barring credit for taxes on "raw materials or supplies used in the milling process" was strictly construed; containers and packaging are not raw materials, so the credit was allowed.'
		},
		{
			name: 'Statutes concerning the sovereign and suits against the government are strictly construed',
			rule: 'A statute that restricts rights or burdens the public treasury does not include the State, however broad its words, unless the State is expressly mentioned. The State\'s consent to be sued is strictly construed and does not extend to garnishment of public funds or execution on government property.',
			basis: 'Agpalo §§7.22–7.23.',
			why: 'Public funds and the sovereign\'s immunities are not given away by implication.',
			when: 'A general law is invoked against the government, or a judgment is enforced against public funds.',
			limits: 'Immunity cannot be evaded by suing an officer if the suit really affects the State\'s property or interests.',
			differs: 'The State is excluded from <i>burdening</i> statutes unless named; it is not excluded from statutes that benefit it.',
			example: 'P.D. 851 required "employers" to pay a 13th-month pay; "employers" was held not to include the Republic, which the decree did not mention (§7.22).'
		},
		{
			name: 'Exceptions and provisos are strictly but reasonably construed',
			rule: 'Exceptions and provisos extend only as far as their language fairly warrants; doubts are resolved in favor of the general rule. Exceptions to the warrant requirement and legal preferences are likewise strictly construed.',
			basis: 'Agpalo §7.25; <i>CIR v. CA</i> (1999): "exceptions, as a general rule, should be strictly but reasonably construed."',
			why: 'The general rule expresses the main legislative policy; exceptions are departures from it.',
			when: 'A party invokes an exception or proviso to escape a general rule.',
			limits: '"Reasonably": the exception is given its fair scope, not an artificially narrow one.',
			differs: 'In a tax law, strictly construing an exception may favor the taxpayer (<i>CIR v. CA</i>), even though exemptions are strict against the taxpayer.',
			example: 'A rule allows warrantless arrests in listed situations; a situation outside the list is governed by the general warrant requirement.'
		},
		{
			name: 'Social legislation and LGU powers are liberally construed',
			rule: 'Laws implementing social justice and protection to labor are liberally construed in favor of their beneficiaries. The general welfare clause and grants of powers to LGUs are liberally construed in favor of the LGU, and any fair and reasonable doubt as to the existence of a power is resolved in the LGU\'s favor. A local tax ordinance, however, is construed strictly against the LGU.',
			basis: 'Agpalo §§7.05, 7.26–7.28; Sec. 5(a)–(c), Local Government Code; Art. 4, Labor Code; Art. 1702, Civil Code; Art. II, Sec. 10, Constitution.',
			why: 'Social justice is a constitutional mandate addressed to all branches; local autonomy requires that LGUs not be hobbled by grudging readings of their powers.',
			when: 'A doubtful provision in a labor, tenancy, agrarian or social-security law; a doubtful question whether an LGU has a particular power.',
			limits: 'Liberal construction needs doubt. It cannot override a clear statute, and an ordinance that contravenes a statute is void even if enacted under the welfare clause (<i>Magtajas</i>). Sec. 5(b) LGC: tax ordinances and revenue measures are construed strictly against the LGU, and tax exemptions granted by LGUs strictly against the claimant.',
			differs: 'Contrast §7.16: grants of <i>property</i> to LGUs are strict against them.',
			example: 'A city ordinance requiring 24-hour stores to install CCTV, where no statute forbids it: any fair doubt about the power is resolved for the city.'
		},
		{
			name: 'Other statutes liberally construed',
			rule: 'Amnesty proclamations (for those claiming amnesty), statutes on prescription of crimes (for the accused), adoption statutes (for the child), election laws (to give effect to the will of the electorate), veteran and pension laws (for beneficiaries), and the Rules of Court (to secure a just, speedy and inexpensive disposition of cases) are liberally construed.',
			basis: 'Agpalo §§7.32–7.37; Rule 1, Sec. 6, Rules of Court; <i>People v. Moran</i>, 44 Phil. 387 (1923) (prescription of crimes as an act of grace).',
			why: 'Each is remedial or beneficial; a grudging reading would defeat its purpose.',
			when: 'Doubt about the coverage of the benefit or relief.',
			limits: 'Liberal construction of the Rules never excuses a mandatory and jurisdictional requirement, such as paying docket fees on time (Ch. VIII).',
			differs: 'Penal statutes favor the accused through <i>strict</i> construction; amnesty and prescription favor him through <i>liberal</i> construction.',
			example: 'If it is doubtful whether an adoption petition meets a residence requirement, the doubt is resolved in favor of the adoption and the child\'s welfare.'
		}
	],

	enums: [
		{
			id: 'E7.1',
			name: 'Factors that determine whether a statute is strictly or liberally construed',
			source: 'Agpalo §7.01.',
			kind: 'book',
			memorize: true,
			lead: 'Whether a statute is construed strictly or liberally depends on',
			items: [
				{ t: 'The nature of the statute', d: 'What kind of law it is: penal, tax, social, remedial, a grant of privilege.', s: 'the kind of law it is (penal, tax, remedial, social, grant)' },
				{ t: 'The purpose to be served', d: 'What the legislature wanted to accomplish. A protective purpose favors liberal reading; a burdening purpose favors strict reading.', s: 'what the legislature sought to accomplish' },
				{ t: 'The mischief to be remedied', d: 'The evil the law was meant to cure. The reading should suppress the mischief and advance the remedy.', s: 'the evil the law was enacted to cure' }
			],
			memory: '<b>N-P-M: Nature · Purpose · Mischief.</b>',
			tip: 'Add the threshold point: either approach applies only if the language is doubtful. Keyword trio: "nature, purpose, mischief."',
			question: 'What factors determine whether a statute should be construed strictly or liberally?'
		},
		{
			id: 'E7.2',
			name: 'Statutes strictly construed, and against whom',
			source: 'Agpalo §§7.07–7.25.',
			kind: 'book',
			memorize: true,
			lead: 'The following statutes are strictly construed',
			items: [
				{ t: 'Penal statutes', d: 'Strictly against the State, liberally for the accused (§7.07), within the limits of §7.12.', s: 'against the State and for the accused' },
				{ t: 'Statutes in derogation of rights', d: 'Confined to cases clearly within their scope (§7.13).', s: 'confined to cases clearly within them' },
				{ t: 'Statutes authorizing expropriation', d: 'Against the expropriating authority, for the owner (§7.14).', s: 'against the expropriating authority' },
				{ t: 'Statutes granting privileges', d: 'Against the grantee, who must strictly comply with the conditions (§7.15).', s: 'against the grantee; conditions strictly complied with' },
				{ t: 'Legislative grants of property or money to LGUs', d: 'Against the grantee LGU, in favor of the public (§7.16; <i>Manila Lodge</i>).', s: 'against the grantee LGU' },
				{ t: 'Statutes on removal or suspension of public officials', d: 'Grounds and procedure limited to those provided (§7.17).', s: 'grounds and modes limited to those provided' },
				{ t: 'Naturalization laws', d: 'Against the applicant; doubts resolved against him (§7.18).', s: 'against the applicant' },
				{ t: 'Statutes imposing taxes and customs duties', d: 'Against the government, for the taxpayer (§7.19).', s: 'against the government' },
				{ t: 'Statutes granting tax exemptions', d: '<i>Strictissimi juris</i> against the claimant (§7.20), with the qualifications in §7.21.', s: 'against the taxpayer claiming exemption' },
				{ t: 'Statutes concerning the sovereign', d: 'Burdensome statutes do not include the State unless it is expressly named (§7.22).', s: 'State not included unless named' },
				{ t: 'Statutes authorizing suits against the government', d: 'Consent to be sued is strictly construed; no garnishment of public funds (§7.23).', s: 'consent to be sued strictly limited' },
				{ t: 'Statutes prescribing formalities of wills', d: 'The formalities must be observed (§7.24), subject to the substantial-compliance rule for the attestation clause in Art. 809, Civil Code.', s: 'formalities must be followed (subject to Art. 809)' },
				{ t: 'Exceptions and provisos', d: 'Strictly but reasonably; doubts favor the general rule (§7.25).', s: 'strictly but reasonably, doubts favoring the general rule' }
			],
			memory: '<b>"PEP-TSNR + wills & provisos"</b>: Penal · Expropriation & derogation · Privileges & grants · Taxes (impose/exempt) · Sovereign & suits · Naturalization · Removal · Wills · Provisos. Or simply: laws that <b>burden you</b> or <b>give someone a special advantage</b>.',
			tip: 'An examiner may ask for "at least five." Always add <b>against whom</b>; a list without directions is half an answer. Do not put "grants of powers to LGUs" here: they are liberally construed.',
			question: 'Enumerate the statutes that are strictly construed, and state against whom each is construed.',
			verify: 'The Art. 809 qualification is codal law; confirm how Agpalo words the rule in §7.24.'
		},
		{
			id: 'E7.3',
			name: 'Statutes liberally construed, and in whose favor',
			source: 'Agpalo §§7.26–7.37; Sec. 5, LGC; Rule 1, Sec. 6, Rules of Court.',
			kind: 'book',
			memorize: true,
			lead: 'The following statutes are liberally construed',
			items: [
				{ t: 'General social legislation', d: 'Labor, tenancy, land reform and social security laws, in favor of the persons they protect (§7.26).', s: 'in favor of the intended beneficiaries' },
				{ t: 'The general welfare clause', d: 'In favor of LGUs, to promote economic uplift and social welfare (§7.27).', s: 'in favor of the LGU' },
				{ t: 'Grants of powers to LGUs', d: 'Any fair and reasonable doubt as to a power is resolved for the LGU (§7.28; LGC Sec. 5(a)).', s: 'doubts on the existence of a power resolved for the LGU' },
				{ t: 'Statutes on the prescriptive period to collect taxes', d: 'They protect taxpayers from indefinite exposure, so they are read in the taxpayer\'s favor (§7.30; <i>Republic v. Ablaza</i>).', s: 'in favor of the taxpayer' },
				{ t: 'Election laws', d: 'To give effect to the will of the electorate (§7.32).', s: 'to give effect to the will of the voters' },
				{ t: 'Amnesty proclamations', d: 'In favor of those claiming amnesty, against the State (§7.33).', s: 'in favor of those claiming amnesty' },
				{ t: 'Statutes on prescription of crimes', d: 'Acts of grace, read in favor of the accused (§7.34).', s: 'in favor of the accused' },
				{ t: 'Adoption statutes', d: 'In favor of the child to be adopted (§7.35).', s: 'in favor of the child' },
				{ t: 'Veteran and pension laws', d: 'In favor of the beneficiaries (§7.36).', s: 'in favor of beneficiaries' },
				{ t: 'The Rules of Court', d: 'To secure a just, speedy and inexpensive disposition of every action (§7.37; Rule 1, Sec. 6).', s: 'to promote just, speedy and inexpensive disposition of cases' }
			],
			memory: '<b>"Social welfare, LGU powers, Tax prescription, Elections, Amnesty, Crime prescription, Adoption, Pensions, Rules"</b>: everything that <b>protects or forgives</b>.',
			tip: 'Each item needs "in favor of whom." Never add local tax ordinances here: Sec. 5(b) LGC construes them strictly against the LGU.',
			question: 'Enumerate the statutes that are liberally construed, and state in whose favor each is construed.',
			verify: 'Some lists also place §7.29 (statutes granting taxing power) and §7.31 (penalties for non-payment of tax) in this group; they are left out here. Keep them separate from LGC Sec. 5(b).'
		},
		{
			id: 'E7.4',
			name: 'Limits of liberal construction',
			source: 'Agpalo §§7.03–7.04; Ch. II (judicial legislation).',
			kind: 'teaching',
			lead: 'Liberal construction may not be used',
			items: [
				{ t: 'To enlarge a clear and unambiguous provision', d: 'If the text is clear, there is nothing to construe; it is applied as written.', s: 'to enlarge a clear and unambiguous provision' },
				{ t: 'To force words out of their natural meaning', d: 'Words get a fair and reasonable meaning, not a strained one.', s: 'to force words out of their natural meaning' },
				{ t: 'To engraft what the court thinks ought to be there', d: 'That is judicial legislation, which the separation of powers forbids.', s: 'to add provisions the court thinks desirable (judicial legislation)' },
				{ t: 'To prevail over the categorical provisions of the law', d: 'A liberal policy yields to an express command or prohibition.', s: 'against categorical provisions of the law' }
			],
			memory: '<b>No ENLARGE, no FORCE, no ADD, no OVERRIDE.</b>',
			tip: 'A good answer ties these limits to <i>Magtajas</i>: the LGC\'s liberal-construction clause could not override the clear phrase "prohibited games of chance."',
			question: 'Is liberal construction of a statute without limits? Explain.'
		},
		{
			id: 'E7.5',
			name: 'Limits of strict construction of penal statutes',
			source: 'Agpalo §7.12; <i>People v. Purisima</i>.',
			kind: 'book',
			lead: 'Strict construction of penal statutes is limited in that',
			items: [
				{ t: 'It does not mean the narrowest possible meaning', d: 'Words keep their fair and full meaning; strictness only refuses extension by implication.', s: 'it does not require the narrowest meaning of the words' },
				{ t: 'It must not defeat the intent, policy and purpose of the law', d: 'Strict construction is only one factor in finding legislative intent.', s: 'it cannot defeat the evident intent and purpose of the statute' },
				{ t: 'The spirit prevails over a letter that leads to absurdity or injustice', d: 'Literal application producing absurd results is avoided (<i>Purisima</i>: the kitchen-knife problem under P.D. 9).', s: 'the spirit controls where the letter would be absurd or unjust' },
				{ t: 'Between two readings, the one carrying out manifest intent prevails', d: 'If one reading exempts the accused and the other gives effect to the manifest intent and object, the latter is adopted.', s: 'a reading giving effect to manifest intent is preferred over one that merely exempts the accused' }
			],
			memory: '<b>Not narrowest · Not against purpose · Not absurd · Intent wins between two.</b>',
			tip: 'Mention <i>Purisima</i> by name: it is the standard illustration. Do not confuse limit 3 (helping the accused out of absurdity) with limit 4 (rejecting a technicality that would defeat the law).',
			question: 'Penal statutes are strictly construed against the State. What are the limits of this rule?'
		},
		{
			id: 'E7.6',
			name: 'Qualifications to the strict construction of tax exemptions',
			source: 'Agpalo §§7.20–7.21; <i>Maceda v. Macaraeg</i>; <i>CIR v. CA</i> (Cenvoco).',
			kind: 'teaching',
			lead: 'The strict rule on tax exemptions is qualified as follows',
			items: [
				{ t: 'A clear exemption is applied as written', d: 'Strictness resolves doubt; it does not let a court subtract from or add conditions to a clearly worded exemption.', s: 'a clear and unambiguous exemption is applied as it is' },
				{ t: 'An exemption of a government instrumentality from "all forms of taxes" is construed broadly', d: '<i>Maceda v. Macaraeg</i>: NPC\'s exemption from "all forms of taxes" covers both direct and indirect taxes.', s: 'a broad exemption of a government instrumentality (e.g., NPC from "all forms of taxes") is read broadly' },
				{ t: 'Exceptions and provisos within a tax law are themselves strictly construed', d: 'This can favor the taxpayer: in <i>CIR v. CA</i>, the proviso denying tax credit for "raw materials ... used in the milling process" did not reach containers and packaging.', s: 'exceptions or provisos in a tax law are strictly construed, which may favor the taxpayer' }
			],
			memory: '<b>Clear → apply · Government "all forms" → broad · Provisos → narrow.</b>',
			tip: 'Item 3 is not strictly a qualification of the exemption rule; it is the general rule on provisos (§7.25) applied to a tax law. Say so if asked.',
			question: 'Is the rule that tax exemptions are construed strictissimi juris absolute? Explain the qualifications.'
		},
		{
			id: 'E7.7',
			name: 'Two branches of the general welfare clause',
			source: 'Agpalo §7.27; LGC Sec. 16.',
			kind: 'book',
			lead: 'The general welfare clause has two branches',
			items: [
				{
					t: 'Ordinances necessary to carry into effect the powers and duties conferred by law',
					d: 'The "general legislative" branch: ordinances implementing specific grants of power.',
					s: 'ordinances necessary and proper to carry out powers and duties conferred by law'
				},
				{
					t: 'Ordinances for health, safety, prosperity, morals, peace, good order, comfort and convenience',
					d: 'The "police power proper" branch: ordinances promoting general welfare independently of any specific grant.',
					s: 'ordinances for the health, safety, prosperity, morals, peace, good order, comfort and convenience of the inhabitants'
				}
			],
			memory: '<b>Carry-out branch</b> and <b>police-power branch</b>.',
			tip: 'Both branches are liberally construed in the LGU\'s favor, but neither allows an ordinance contrary to a statute (<i>Magtajas</i>).',
			question: 'What are the two branches of the general welfare clause, and how is the clause construed?'
		},
		{
			id: 'E7.8',
			name: 'Rules of interpretation in Section 5 of the Local Government Code',
			source: 'R.A. 7160, Sec. 5.',
			kind: 'law',
			lead: 'Under Sec. 5 of the Local Government Code',
			items: [
				{
					t: '(a) Powers of LGUs are liberally interpreted in their favor',
					d: 'In case of doubt, questions are resolved in favor of devolution of powers and of the lower LGU; any fair and reasonable doubt as to the existence of a power is resolved in favor of the LGU.',
					s: 'powers are liberally interpreted; doubts favor devolution and the lower LGU'
				},
				{
					t: '(b) Tax ordinances and revenue measures are construed strictly against the LGU',
					d: 'They are construed liberally in favor of the taxpayer; tax exemptions, incentives or reliefs granted by an LGU are construed strictly against the claimant.',
					s: 'tax ordinances strictly against the LGU and for the taxpayer; LGU-granted exemptions strictly against the claimant'
				},
				{
					t: '(c) General welfare provisions are liberally interpreted',
					d: 'To give LGUs more powers in accelerating economic development and upgrading the quality of life.',
					s: 'general welfare provisions are liberally interpreted to give LGUs more power'
				},
				{
					t: '(d) Existing contractual rights and obligations follow their original terms',
					d: 'Rights and obligations existing when the Code took effect, arising from contracts or other sources involving an LGU, are governed by the original terms or the law in force when they vested.',
					s: 'pre-existing contractual rights follow original terms or the law when they vested'
				},
				{
					t: '(e) Customs and traditions may fill gaps',
					d: 'Where no legal provision or jurisprudence applies, resort may be had to the customs and traditions in the place where the controversy arises.',
					s: 'absent law or jurisprudence, local customs and traditions may be consulted'
				}
			],
			memory: '<b>Powers liberal · Taxes strict · Welfare liberal · Old contracts kept · Customs fill gaps.</b>',
			tip: 'The trap is (b): a doubtful local tax ordinance is construed <b>against</b> the LGU, even though LGU powers are construed in its favor.',
			question: 'What rules of interpretation does Section 5 of the Local Government Code lay down?',
			verify: 'Paragraphs (d) and (e) are paraphrased. Check the exact text of Sec. 5 before quoting it.'
		}
	],

	reqs: [
		{
			name: 'Claiming a tax exemption',
			source: 'Agpalo §7.20; <i>PLDT v. Province of Laguna</i> (2005).',
			what: ul([
				'A <b>positive provision</b> of law (or the Constitution) granting the exemption.',
				'Language that is <b>clear and unambiguous</b>; exemptions are never implied.',
				'Proof by the <b>claimant</b>, who bears the burden.',
				'The claimant falls <b>squarely within</b> the terms of the grant.'
			]),
			why: 'Taxation is the rule and exemption the exception; taxes are the lifeblood of government.',
			mode: 'Cumulative — all must concur',
			absent: 'If any is missing, there is no exemption; doubt is resolved for the taxing authority.',
			interacts: 'Qualified by §7.21 (clear grants applied as written; <i>Maceda</i>). Do not confuse with tax impositions, where doubt favors the taxpayer.',
			hypo: 'A cooperative claims exemption from "all national taxes" under a law covering "duly registered cooperatives," but its registration had lapsed. It is not squarely within the grant, so no exemption.'
		},
		{
			name: 'Liberal construction of social legislation',
			source: 'Agpalo §7.26; Art. 4, Labor Code; Art. 1702, Civil Code.',
			what: ul(['The statute is social legislation (labor, tenancy, land reform, social security).', 'There is <b>genuine doubt</b> as to its meaning or application.']),
			why: 'To carry out the constitutional mandate of social justice and protection to labor.',
			mode: 'Cumulative — all must concur',
			absent: 'Without doubt there is nothing to construe; a clear provision is applied even if it does not favor the worker.',
			interacts: 'Limited by the rule against judicial legislation; does not override categorical provisions.',
			hypo: 'A law gives holiday pay to "all employees" except "managerial employees." A supervisor who is not managerial claims it. Doubt as to classification is resolved for the employee.'
		},
		{
			name: 'Liberal construction of LGU powers (Sec. 5(a), LGC)',
			source: 'LGC Sec. 5(a); Agpalo §7.28; <i>Magtajas</i>.',
			what: ul([
				'The question concerns a <b>power</b> of the LGU (not a grant of property, not a tax ordinance).',
				'There is a <b>fair and reasonable doubt</b> whether the power exists or how far it goes.',
				'Resolving the doubt for the LGU does not make an ordinance <b>contravene a statute</b> or the Constitution.'
			]),
			why: 'Local autonomy and devolution of powers.',
			mode: 'Cumulative — all must concur',
			absent: 'Grants of property: strict (§7.16). Tax ordinances: strict against the LGU (Sec. 5(b)). Clear text or a contrary statute: no doubt to resolve, and the ordinance is void if it conflicts (<i>Magtajas</i>).',
			interacts: 'Must be read with the hierarchy of laws: the delegate cannot be superior to the principal.',
			hypo: 'An ordinance requires 24-hour stores to install CCTV; no statute forbids it, and the welfare clause plausibly covers it. The doubt is resolved for the city.'
		},
		{
			name: 'Enjoying a privilege or franchise',
			source: 'Agpalo §7.15.',
			what: ul(['A grant of the privilege by law.', '<b>Strict compliance</b> with every condition attached.', 'Use within the <b>terms</b> the grantor intended.']),
			why: 'A privilege is a favor; it lasts only on its terms.',
			mode: 'Cumulative — all must concur',
			absent: 'Non-compliance with a condition ordinarily means loss of the privilege; <i>dura lex sed lex</i> may apply.',
			interacts: 'Overlaps with Ch. VIII: conditions for availing of a benefit are mandatory (§8.11).',
			hypo: 'A power franchise requires operations to begin within two years. The grantee begins in year three. The franchise is forfeited.'
		}
	],

	comparisons: [
		{
			id: 'C7.1',
			title: 'Strict construction vs. liberal construction',
			a: 'Strict construction',
			b: 'Liberal construction',
			def: ['Follows the letter; recognizes nothing not expressed; no extension by implication or equity.', 'Enlarges the letter to carry out the law\'s purpose, intent and justice.'],
			purpose: ['Protect people from burdens or favors not clearly imposed or granted.', 'Make protective and remedial laws work.'],
			basis: ['§7.02; §§7.07–7.25.', '§§7.03–7.04; §§7.26–7.38.'],
			when: ['Penal, tax-imposing, derogation, expropriation, privilege, exemption, naturalization, removal statutes; exceptions and provisos.', 'Social legislation, LGU powers, amnesty, prescription of crimes, adoption, election laws, Rules of Court.'],
			key: ['Refuses to extend scope beyond the words.', 'Reads the words generously to reach the purpose.'],
			limits: ['Not the narrowest meaning; cannot defeat the law\'s purpose (§7.12).', 'Cannot enlarge clear text or engraft provisions (judicial legislation).'],
			example: ['"Assisting a claimant" does not cover merely offering to assist.', 'Holiday pay: every employee not expressly excepted is covered.'],
			trap: ['"Strict" means against the accused or taxpayer. No: penal and tax-imposing statutes are strict <i>for</i> them.', '"Liberal" means the beneficiary always wins. No: only on doubtful provisions.'],
			decisive: 'Direction of the doubt: strict construction keeps the statute\'s reach within its words; liberal construction extends its reach toward its purpose.',
			matters: 'The same ambiguous word can produce opposite results depending on the statute\'s nature.',
			recognize: 'Ask: does the statute burden or favor-the-few (strict), or protect or forgive (liberal)?',
			mistake: 'Applying either approach to a clear statute.'
		},
		{
			id: 'C7.2',
			title: 'Statutes imposing taxes vs. statutes granting tax exemptions',
			a: 'Tax-imposing statute',
			b: 'Tax-exemption statute',
			def: ['A law that levies a tax or customs duty.', 'A law that relieves a person or property from a tax.'],
			purpose: ['Raise revenue without taking property beyond what the law clearly authorizes.', 'Grant a specific relief for a policy reason.'],
			basis: ['§7.19.', '§§7.20–7.21; <i>PLDT v. Province of Laguna</i>.'],
			when: ['Doubt whether a person or transaction is taxable.', 'Doubt whether a person or property is exempt.'],
			key: ['Construed <b>against the government</b>, for the taxpayer.', 'Construed <b>against the taxpayer</b> (<i>strictissimi juris</i>), for the government.'],
			limits: ['If the taxpayer is within the letter, he pays.', 'Clear exemptions are applied as written; government-instrumentality exemptions from "all forms of taxes" read broadly (<i>Maceda</i>).'],
			example: ['A tax on "sales of goods" does not reach a pure service unless clearly included.', 'PLDT could not derive a local franchise-tax exemption from an equality-of-treatment clause.'],
			trap: ['Saying both are construed strictly against the taxpayer.', 'Forgetting that the burden of proving an exemption is on the claimant.'],
			decisive: 'Who gets the benefit of the doubt: the taxpayer (imposition) or the government (exemption).',
			matters: 'In one case the same doubt makes the taxpayer pay; in the other it frees him.',
			recognize: 'Is the taxpayer contesting whether the tax applies at all (imposition) or claiming an exception from a tax that otherwise applies (exemption)?',
			mistake: 'Reading a tax exemption liberally because "tax laws are construed against the government."'
		},
		{
			id: 'C7.3',
			title: 'Legislative grants of property to LGUs vs. grants of powers to LGUs',
			a: 'Grant of property or money (§7.16)',
			b: 'Grant of powers (§7.28)',
			def: ['A statute transferring public land, funds or resources to a political subdivision.', 'A statute giving an LGU governmental authority (police, taxing, corporate powers).'],
			purpose: ['Keep public resources public unless clearly given away.', 'Promote local autonomy and devolution.'],
			basis: ['§7.16; <i>Manila Lodge</i>, citing Sutherland.', '§7.28; LGC Sec. 5(a), (c); R.A. 2264, Sec. 12 (earlier rule).'],
			when: ['The LGU claims ownership or a power to dispose of property under a grant.', 'The LGU claims authority to regulate or act.'],
			key: ['Strictly <b>against</b> the LGU.', 'Liberally <b>in favor of</b> the LGU.'],
			limits: ['Applies to the grant\'s scope; a clearly granted power to sell is honored.', 'No power to contravene a statute (<i>Magtajas</i>); tax ordinances strict against the LGU (Sec. 5(b)).'],
			example: ['<i>Manila Lodge</i>: authority to sell only the north-end hotel site.', 'A CCTV ordinance under the welfare clause.'],
			trap: ['Citing Sec. 5(a) to justify selling public land.', 'Citing <i>Manila Lodge</i> (1976) as today\'s rule on LGU <i>powers</i>; since R.A. 2264 and the LGC, the trend is liberal.'],
			decisive: 'What the LGU claims: <b>property</b> (strict against it) or <b>power</b> (liberal for it).',
			matters: 'Same LGU, opposite rule.',
			recognize: 'Is the dispute about owning or selling a thing, or about authority to govern?',
			mistake: 'Treating "local autonomy" as a reason to enlarge a grant of public property.'
		},
		{
			id: 'C7.4',
			title: 'Mala in se vs. mala prohibita',
			a: 'Mala in se',
			b: 'Mala prohibita',
			def: ['Acts wrong in themselves (usually felonies under the RPC).', 'Acts wrong only because a law prohibits them (usually special laws).'],
			purpose: ['Punish moral wrongdoing.', 'Regulate conduct for public welfare and order.'],
			basis: ['§7.10; <i>actus non facit reum nisi mens sit rea</i>.', '§7.10.'],
			when: ['The offense involves inherent moral wrong.', 'The offense is regulatory.'],
			key: ['Criminal intent is an element.', 'Only the question "was the law violated?" Intent is generally not required.'],
			limits: ['Good faith may negate intent.', 'If the statute uses "willfully," "knowingly" or "voluntarily," intent is required.'],
			example: ['Estafa; theft.', 'Possession of an unlicensed firearm; violation of a price-ceiling order.'],
			trap: ['Saying all crimes require criminal intent.', 'Saying strict construction does not apply to mala prohibita. It does, as to what acts are covered.'],
			decisive: 'Whether criminal intent must be proved.',
			matters: 'It determines whether good faith is a defense.',
			recognize: 'Is the act inherently wrong, and does the statute use intent words?',
			mistake: 'Treating "special law" and "malum prohibitum" as identical in every case. Look at the statute\'s words.'
		},
		{
			id: 'C7.5',
			title: 'Strict construction of penal statutes vs. liberal construction of amnesty and prescription of crimes',
			a: 'Penal statutes (strict)',
			b: 'Amnesty & prescription of crimes (liberal)',
			def: ['Statutes defining crimes and penalties.', 'Acts of grace forgiving offenses, or limiting the time to prosecute.'],
			purpose: ['Give fair notice; avoid punishment by implication.', 'Encourage return to the law; protect against stale prosecutions.'],
			basis: ['§§7.07–7.12.', '§§7.33–7.34; <i>People v. Moran</i>.'],
			when: ['Doubt whether conduct is covered or what penalty applies.', 'Doubt whether an offender is covered by amnesty, or whether the crime has prescribed.'],
			key: ['Read <b>narrowly</b>, so as not to reach the accused.', 'Read <b>broadly</b>, so as to reach the accused.'],
			limits: ['Cannot defeat the law\'s evident purpose (<i>Purisima</i>).', 'Cannot extend amnesty to acts clearly outside its terms.'],
			example: ['A doubtful ceiling-price order resolved for the seller.', 'A doubt whether a rebel\'s act is covered by amnesty resolved for the rebel.'],
			trap: ['Saying "strict" construction always hurts the accused.', 'Saying amnesty must be "strictly" construed because it is an exception.'],
			decisive: 'Both favor the accused, but by opposite techniques: narrowing a burden vs. widening a benefit.',
			matters: 'Shows that "strict" and "liberal" describe technique, while "for whom" describes result.',
			recognize: 'Is the law imposing liability (narrow it) or relieving liability (widen it)?',
			mistake: 'Matching "strict" with "pro-State" automatically.'
		},
		{
			id: 'C7.6',
			title: 'Tax exemptions vs. statutes on the prescriptive period to collect taxes',
			a: 'Tax exemption',
			b: 'Prescriptive period to collect taxes',
			def: ['Relief from a tax otherwise due.', 'A time limit on the government\'s power to assess or collect.'],
			purpose: ['Grant targeted relief.', 'Protect taxpayers from indefinite exposure and stale claims.'],
			basis: ['§7.20.', '§7.30; <i>Republic v. Ablaza</i>.'],
			when: ['Taxpayer claims not to owe the tax at all by virtue of a grant.', 'Taxpayer claims the government is too late to assess or collect.'],
			key: ['Strictly against the taxpayer.', 'Liberally in favor of the taxpayer.'],
			limits: ['Clear grants applied as written.', 'Cannot extend the period\'s benefit beyond its terms (e.g., ignore valid interruptions).'],
			example: ['A doubtful exemption claim is denied.', 'A doubt whether a period has run is resolved for the taxpayer.'],
			trap: ['Assuming every tax-related doubt goes to the government.', 'Assuming every tax-related doubt goes to the taxpayer.'],
			decisive: 'Exemptions are privileges (strict); prescription is a protection (liberal).',
			matters: 'Both are "tax" questions with opposite presumptions.',
			recognize: 'Is the taxpayer asking for a favor (exemption) or invoking a shield against delay (prescription)?',
			mistake: 'Lumping all tax rules under one presumption.'
		}
	],

	authorities: [
		{
			kind: 'provision',
			name: 'Sec. 5(a)–(c), Local Government Code (R.A. 7160)',
			text: '(a) Any provision on a power of an LGU shall be liberally interpreted in its favor; in case of doubt, any question shall be resolved in favor of devolution of powers and of the lower LGU; any fair and reasonable doubt as to the existence of the power shall be interpreted in favor of the LGU. (b) In case of doubt, any tax ordinance or revenue measure shall be construed strictly against the LGU enacting it and liberally in favor of the taxpayer; any tax exemption, incentive or relief granted by an LGU shall be construed strictly against the person claiming it. (c) The general welfare provisions shall be liberally interpreted to give more powers to LGUs.',
			verify: 'Paraphrased closely; check exact wording before quoting.'
		},
		{ kind: 'provision', name: 'Rule 1, Sec. 6, Rules of Court', text: '"These Rules shall be liberally construed in order to promote their objective of securing a just, speedy and inexpensive disposition of every action and proceeding."' },
		{ kind: 'provision', name: 'Art. 4, Labor Code', text: '"All doubts in the implementation and interpretation of the provisions of this Code, including its implementing rules and regulations, shall be resolved in favor of labor."' },
		{ kind: 'provision', name: 'Art. 1702, Civil Code', text: '"In case of doubt, all labor legislation and all labor contracts shall be construed in favor of the safety and decent living for the laborer."' },
		{ kind: 'provision', name: 'Art. II, Sec. 10, 1987 Constitution', text: '"The State shall promote social justice in all phases of national development." The mandate is addressed to all three branches (§7.05).' },
		{
			kind: 'provision',
			name: 'Art. 809, Civil Code (formalities of wills)',
			text: 'In the absence of bad faith, forgery, fraud, or undue and improper pressure and influence, defects and imperfections in the form of attestation or in the language used therein do not invalidate the will if it is proved that the will was in fact executed and attested in substantial compliance with Art. 805. This qualifies any statement that will formalities are "strictly" construed.'
		},
		{ kind: 'case', name: 'Manila Lodge No. 761 v. Court of Appeals', cite: 'G.R. Nos. L-41001 & L-41012, Sept. 30, 1976', text: 'Public grants to political subdivisions are strictly construed against the grantee; powers of municipal corporations are limited to those expressly or impliedly granted or necessarily incidental. See the five-case section.' },
		{ kind: 'case', name: 'People v. Purisima', cite: '86 SCRA 542 (1978)', text: 'P.D. 9, par. 3 (carrying bladed weapons outside residence) punishes the act only when linked to subversion, rebellion, lawless violence, criminality or public disorder, as stated in the decree\'s whereas clauses; Informations without that element were defective.' },
		{
			kind: 'case',
			name: 'Commissioner of Internal Revenue v. Court of Appeals (Cenvoco)',
			cite: 'G.R. No. 107135, Feb. 23, 1999 (303 SCRA 508)',
			text: 'Central Vegetable Manufacturing Co., a coconut-oil miller subject to the miller\'s tax, could credit sales taxes paid on containers and packaging materials. The proviso in Sec. 168 of the old Tax Code barring credit for taxes on "raw materials or supplies used in the milling process" is an exception, and "exceptions ... should be strictly but reasonably construed"; containers and packaging are not raw materials.'
		},
		{ kind: 'case', name: 'PLDT v. Province of Laguna', cite: 'G.R. No. 151899, Aug. 16, 2005', text: 'Tax exemptions are strictly construed against the claimant; PLDT could not derive exemption from the local franchise tax from the equality-of-treatment clause (Sec. 23, R.A. 7925). Follows the earlier PLDT cases (Davao, Bacolod).' },
		{ kind: 'case', name: 'Maceda v. Macaraeg', cite: '197 SCRA 771 (1991)', text: 'NPC\'s exemption from "all forms of taxes" covers both direct and indirect taxes: a qualification of the strict rule for exemptions.' },
		{
			kind: 'case',
			name: 'Republic v. Ablaza',
			cite: '108 Phil. 1105 (1960)',
			text: 'The law on prescription of tax assessment and collection, being remedial, is construed liberally to protect the taxpayer.',
			verify: 'Standard citation for this rule; not checked against the full text.'
		},
		{
			kind: 'case',
			name: 'People v. Moran',
			cite: '44 Phil. 387 (1923)',
			text: 'Statutes of limitation on criminal prosecutions are acts of grace, a surrender by the State of its right to prosecute, and are liberally construed in favor of the accused.',
			verify: 'Standard citation; not checked against the full text.'
		},
		{ kind: 'case', name: 'Magtajas v. Pryce Properties', cite: 'G.R. No. 111097, July 20, 1994', text: 'Petitioners invoked the LGC\'s liberal-construction rules; the Court decided on the clear text ("prohibited games of chance") and the supremacy of the statute over the ordinance. See the five-case section.' }
	],

	caseNote: '<i>Manila Lodge</i> is the Chapter VII case: it applied strict construction of a public grant (§7.16) and of municipal powers. In <i>Magtajas</i>, the petitioners invoked the LGC\'s liberal-construction rule, which the Court never needed because the text was clear. <i>Catiis</i> and <i>Corona</i> are consistent with Chapter VII rules (penal statutes; removal of officials), but the Court did not rest on them.',
	caseLinks: [
		{
			caseId: 'manila-lodge',
			strength: 'Direct — the Court applied it',
			doctrine: 'Public grants to political subdivisions are strictly construed against the grantee and in favor of the public (§7.16); powers of municipal corporations are limited to those expressly or impliedly granted or necessarily incidental.',
			facts: 'Act No. 1360 authorized Manila to reclaim the Luneta extension, declared the land "the property of the City," and "hereby authorized" it to lease or sell only a north-end hotel site. The bulkheads were City-funded, but the area was filled "without cost to the City" at the Insular Government\'s expense.',
			issue: 'Did the grant authorize the City to sell the southern portion?',
			applied: 'Because the land was filled at the Insular Government\'s expense, the grant was a public grant, "narrowly restricted in favor of the public." The letter of the statute "should be narrowed to exclude matters which if included would defeat the policy of the legislation." Strict construction made the <i>expressio unius</i> inference "the more imperative."',
			ruling: 'The south-end sale was void; the land is public dominion.',
			lesson: 'Identify the nature of the statute first. Once it is a public grant, read it against the grantee.',
			examUse: '"What statutes are strictly construed? Give an example from jurisprudence." Or a hypothetical grant of reclaimed land to a city.'
		},
		{
			caseId: 'magtajas',
			strength: 'Not invoked — exam point only',
			doctrine: 'Liberal construction of LGU powers (LGC Sec. 5) operates only where there is fair and reasonable doubt, and never to sustain an ordinance that contravenes a statute.',
			facts: 'The city argued that Secs. 5 and 458 of the LGC, liberally construed, let it ban PAGCOR casinos.',
			issue: 'Did the liberal-construction mandate allow the ordinances?',
			applied: 'The Court did not discuss Sec. 5. It found the phrase "gambling and other prohibited games of chance" clear and unmistakable, and held that an ordinance cannot override a statute. With no doubt to resolve, the liberal-construction rule had nothing to act on.',
			ruling: 'Ordinances void.',
			lesson: 'Liberal construction is a tie-breaker for doubt, not a trump card over clear text or a higher law.',
			examUse: '"The LGC requires liberal construction of LGU powers; therefore the city may ban casinos." True or false? (False.)'
		},
		{
			caseId: 'catiis',
			strength: 'Not invoked — exam point only',
			doctrine: 'Penal statutes are strictly construed against the State and liberally for the accused.',
			facts: 'Four accused charged with syndicated estafa under P.D. 1689, whose higher penalty requires five or more persons.',
			issue: 'Could the heavier penalty apply to four accused?',
			applied: 'The Court rested on the plain text and the statutory definition of "syndicate"; it did not cite the rule of strict construction of penal laws.',
			ruling: 'No; bail as a matter of right.',
			lesson: 'Cite strict construction of penal laws only as a supporting point. The ratio is the whole-statute rule and the statutory definition.',
			examUse: 'If asked "What other rule supports the result?", mention strict construction, labeled as not the ratio.'
		},
		{
			caseId: 'corona',
			strength: 'Not invoked — exam point only',
			doctrine: 'Statutes on removal of officials are strictly construed: where a statute prescribes the procedure and the authority, other modes and authorities are excluded (§7.17).',
			facts: 'The DOTC Secretary\'s board heard cases against PPA personnel whom the PPA Charter placed under the PPA General Manager.',
			issue: 'Could the Secretary initiate and hear the cases?',
			applied: 'The Court decided on special-v-general law and harmonization, not on §7.17. But the result matches §7.17: the authority named in the specific law (PPA GM) excluded others at the original stage.',
			ruling: 'AAB decisions void; cases remanded to the PPA GM.',
			lesson: 'Use §7.17 as a supporting rule if asked how a Chapter VII rule would treat the facts.',
			examUse: 'Integrated question: "Apply both Chapter VI and Chapter VII to the facts of Corona."'
		}
	],

	traps: [
		{ wrong: 'Strict construction means the narrowest possible meaning.', right: 'It means no extension beyond the words\' fair, exact meaning; words are not cut down.', example: '"Vehicle" in a penal law still includes motorcycles; it just does not extend to bicycles by "analogy."' },
		{ wrong: 'Liberal construction lets the court grant what the clear text denies.', right: 'Liberal construction applies only to doubtful language; enlarging clear text is judicial legislation.', example: 'A law clearly limiting a benefit to "regular employees" cannot be read to cover contractual ones.' },
		{ wrong: 'Tax exemptions are construed strictly against the government, like tax impositions.', right: 'Impositions: against the government. Exemptions: against the claimant (<i>strictissimi juris</i>).', example: '<i>PLDT v. Province of Laguna</i>.' },
		{ wrong: 'Anything involving an LGU is construed liberally.', right: 'Powers: liberal (Sec. 5(a)). Property grants: strict (§7.16). Tax ordinances: strict against the LGU (Sec. 5(b)).', example: '<i>Manila Lodge</i> vs. a CCTV ordinance.' },
		{ wrong: '"Strict" always means against the accused or the taxpayer.', right: 'The direction depends on the statute: penal and tax-imposing statutes are strict <i>for</i> the accused and taxpayer.', example: 'An ambiguous ceiling-price order favors the seller.' },
		{ wrong: 'Any literal gap in a penal statute frees the accused.', right: 'Strict construction cannot defeat the law\'s evident purpose or produce absurdity (§7.12).', example: '<i>Purisima</i> worked the other way: the spirit narrowed P.D. 9 to avoid absurd convictions.' },
		{ wrong: 'Under social legislation the worker always wins.', right: 'Only doubtful provisions are resolved for labor.', example: 'A clearly excluded managerial employee gets no holiday pay.' },
		{ wrong: 'Sec. 5 of the LGC lets an ordinance prevail over a national statute.', right: 'The delegate cannot be superior to the principal; an ordinance contrary to a statute is void.', example: '<i>Magtajas</i>.' }
	],

	practice: [
		// C
		{ cat: 'C', level: 1, topic: 'Strict construction', q: 'Define strict construction. What is it not?', short: 'Strict construction follows the letter of the statute, recognizes nothing not expressed, takes words in their exact meaning, and admits no equitable considerations; the statute is not extended by implication (§7.02). It is <b>not</b> the narrowest possible meaning and does not cut words down below their full meaning.', keys: 'letter; nothing not expressed; no extension by implication; not narrowest meaning' },
		{ cat: 'C', level: 1, topic: 'Liberal construction', q: 'Define liberal construction and state its main limit.', short: 'Liberal construction is equitable construction that enlarges the letter of a statute to accomplish its purpose, carry out its intent, or promote justice (§7.03). Main limit: it cannot enlarge a clear and unambiguous provision or engraft what the court thinks should be there (judicial legislation).', keys: 'equitable; enlarges letter to purpose; not for clear text; no judicial legislation' },
		{ cat: 'C', level: 1, topic: 'Factors', q: 'What determines whether a statute is construed strictly or liberally?', short: 'The nature of the statute, the purpose to be served, and the mischief to be remedied (§7.01). Either approach applies only when the language is doubtful.', keys: 'nature; purpose; mischief; doubt' },
		{ cat: 'C', level: 2, topic: 'Penal statutes', q: 'Why are penal statutes strictly construed against the State?', short: 'To give a precise definition of forbidden acts so people have fair notice of what is punishable; no one is brought within a penal law unless clearly within its terms. The purpose is not to let the guilty escape on technicalities (§7.08).', keys: 'fair notice; precise definition; clearly within terms' },
		{ cat: 'C', level: 2, topic: 'Tax exemptions', q: 'What is meant by "strictissimi juris" as applied to tax exemptions, and who bears the burden of proof?', short: 'Tax exemptions are construed in the strictest manner against the taxpayer and in favor of the taxing authority; they are never presumed. The claimant bears the burden of pointing to a positive provision granting the exemption in clear and unambiguous language (§7.20).', keys: 'strictest; against taxpayer; never presumed; burden on claimant; clear language' },
		{ cat: 'C', level: 2, topic: 'Amnesty', q: 'How are amnesty proclamations construed, and why?', short: 'Liberally, in favor of those claiming amnesty and against the State, because their purpose is to encourage offenders to return to the fold of the law; doubts are resolved for the claimant (§7.33).', keys: 'liberally; in favor of claimant; return to fold of law' },
		{ cat: 'C', level: 2, topic: 'Sovereign', q: 'Does a statute that burdens "employers" in general include the government as employer? Explain.', short: 'No, unless the government is expressly mentioned. Restrictive statutes that burden the public treasury or reduce the State\'s rights do not include the State, however broad their words (§7.22). For instance, P.D. 851\'s 13th-month pay for "employers" did not include the Republic.', keys: 'not included unless named; burdens public treasury; P.D. 851' },
		// A
		{ cat: 'A', level: 1, topic: 'Strictly construed', q: 'Enumerate at least ten kinds of statutes that are strictly construed, and state against whom each is construed.', short: 'Penal statutes (against the State); statutes in derogation of rights (confined to their clear scope); expropriation statutes (against the expropriator); statutes granting privileges (against the grantee); legislative grants of property to LGUs (against the LGU); statutes on removal of officials (grounds and modes limited); naturalization laws (against the applicant); statutes imposing taxes (against the government); tax exemptions (against the claimant); statutes concerning the sovereign (State not included unless named); statutes authorizing suits against the government (consent strictly limited); formalities of wills (subject to Art. 809); exceptions and provisos (strictly but reasonably).', keys: 'list + "against whom" for each' },
		{ cat: 'A', level: 1, topic: 'Liberally construed', q: 'Enumerate the statutes that are liberally construed and state in whose favor.', short: 'Social legislation (beneficiaries); general welfare clause (LGU); grants of powers to LGUs (LGU); prescriptive period to collect taxes (taxpayer); election laws (will of the electorate); amnesty (claimant); prescription of crimes (accused); adoption statutes (child); veteran and pension laws (beneficiaries); Rules of Court (just, speedy, inexpensive disposition).', keys: 'list + "in whose favor" for each' },
		{ cat: 'A', level: 2, topic: 'Penal statutes', q: 'Penal statutes are strictly construed. Enumerate and discuss the limits of this rule.', short: '(1) It does not mean the narrowest meaning; (2) it must not defeat the intent, policy and purpose of the statute; (3) the spirit prevails where the letter would lead to absurdity or injustice (<i>Purisima</i>); (4) between a reading that merely exempts the accused and one that gives effect to the manifest intent, the latter is adopted (§7.12).', keys: 'not narrowest; purpose; absurdity; manifest intent; Purisima' },
		{ cat: 'A', level: 2, topic: 'Tax exemptions', q: 'Give the qualifications to the rule that tax exemptions are construed strictissimi juris.', short: '(1) A clear exemption is applied as written, without judicial additions or subtractions; (2) an exemption of a government instrumentality from "all forms of taxes" is read broadly to include direct and indirect taxes (<i>Maceda v. Macaraeg</i>); (3) exceptions and provisos in tax laws are themselves strictly construed, which may favor the taxpayer (<i>CIR v. CA</i>, Cenvoco).', keys: 'clear → as written; Maceda; provisos strict; Cenvoco' },
		{ cat: 'A', level: 2, topic: 'LGU powers', q: 'What rules of interpretation does Sec. 5 of the Local Government Code lay down?', short: '(a) LGU powers are liberally interpreted in their favor; doubts favor devolution and the lower LGU; fair and reasonable doubt on a power\'s existence is resolved for the LGU. (b) Tax ordinances and revenue measures are construed strictly against the LGU and for the taxpayer; LGU-granted exemptions strictly against the claimant. (c) General welfare provisions are liberally interpreted. (d) Pre-existing contractual rights follow their original terms or the law when they vested. (e) Absent law or jurisprudence, local customs and traditions may be consulted.', keys: 'powers liberal; taxes strict; welfare liberal; contracts; customs' },
		// D
		{ cat: 'D', level: 2, topic: 'Strict construction', q: 'Strict construction requires a court to give the words of a statute their narrowest possible meaning.', tf: false, a: 'Strict construction gives words their exact, fair meaning and refuses to extend the statute by implication. It does not cut words down below their full meaning (§7.02).', keys: 'Agpalo §7.02', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Penal statutes', q: 'Penal statutes are construed strictly against the State and liberally in favor of the accused.', tf: true, a: 'This is the rule in §7.07, subject to the limit that strict construction must not defeat the law\'s evident purpose (§7.12; <i>Purisima</i>).', keys: 'Agpalo §§7.07, 7.12', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Tax exemptions', q: 'Like statutes imposing taxes, statutes granting tax exemptions are construed strictly against the government.', tf: false, a: 'Tax impositions are construed against the government, but exemptions are construed <i>strictissimi juris</i> against the taxpayer and in favor of the taxing authority (§§7.19–7.20).', keys: 'Agpalo §§7.19–7.20; PLDT v. Province of Laguna', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'LGU powers', q: 'Because the Local Government Code requires liberal interpretation of LGU powers, a doubtful local tax ordinance must be construed in favor of the LGU.', tf: false, a: 'Sec. 5(b) LGC requires that, in case of doubt, a tax ordinance or revenue measure be construed strictly against the LGU and liberally in favor of the taxpayer.', keys: 'LGC Sec. 5(b)', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Grants to LGUs', q: 'Legislative grants of public property to a local government unit are construed strictly against the LGU.', tf: true, a: 'Public grants are strictly construed against the grantee and in favor of the public (§7.16; <i>Manila Lodge No. 761 v. CA</i>).', keys: 'Agpalo §7.16; Manila Lodge', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'Social legislation', q: 'Liberal construction of social legislation allows a court to grant a benefit that the clear text of the law denies.', tf: false, a: 'Liberal construction applies only when the provision is doubtful. A clear provision is applied as written; enlarging it would be judicial legislation.', keys: 'Agpalo §§7.03–7.04, 7.26', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Prescription of crimes', q: 'Statutes of limitation on criminal prosecutions are liberally construed in favor of the accused.', tf: true, a: 'They are acts of grace by which the State surrenders its right to prosecute after a time, so they are read in favor of the accused (§7.34; <i>People v. Moran</i>).', keys: 'Agpalo §7.34; People v. Moran', tag: 'memorization' },
		{ cat: 'D', level: 2, topic: 'Sovereign', q: 'A statute that burdens the public treasury includes the State as long as its words are broad enough to cover it.', tf: false, a: 'Such a statute does not include the State, however broad its words, unless the State is expressly mentioned (§7.22).', keys: 'Agpalo §7.22', tag: 'exceptions' },
		{ cat: 'D', level: 2, topic: 'Mala prohibita', q: 'In an offense that is malum prohibitum, criminal intent is generally not an element.', tf: true, a: 'The only question is whether the law was violated, unless the statute itself requires intent through words like "willfully" or "knowingly" (§7.10).', keys: 'Agpalo §7.10', tag: 'requisites' },
		{ cat: 'D', level: 2, topic: 'Magtajas', q: 'In Magtajas v. Pryce, the Court sustained the city\'s position by applying the LGC\'s rule of liberal construction in favor of local governments.', tf: false, a: 'The Court ruled against the city. It found the text clear ("prohibited games of chance") and held that an ordinance cannot contravene P.D. 1869. The liberal-construction rule, invoked by petitioners, had no doubt to resolve.', keys: 'Magtajas v. Pryce (1994)', tag: 'jurisprudence' },
		{ cat: 'D', level: 2, topic: 'Provisos', q: 'Exceptions and provisos are construed strictly, and doubts are resolved in favor of the general rule.', tf: true, a: 'Exceptions and provisos are construed strictly but reasonably, extending only as far as their language fairly warrants (§7.25; <i>CIR v. CA</i>).', keys: 'Agpalo §7.25; CIR v. CA (1999)', tag: 'exceptions' },
		// B
		{ cat: 'B', level: 3, topic: 'Tax laws', q: 'Distinguish the construction of statutes imposing taxes from that of statutes granting tax exemptions.', short: 'Statutes imposing taxes are construed strictly <b>against the government</b> and liberally for the taxpayer: no tax without clear and express words (§7.19). Statutes granting exemptions are construed <i>strictissimi juris</i> <b>against the taxpayer</b>: exemptions are never presumed, and the claimant must show a clear grant (§7.20). The decisive difference is who gets the benefit of the doubt.', a: 'Both come from the same idea: the government may take property only as clearly authorized, and no one escapes a valid tax except as clearly allowed. Qualifications: clear exemptions are applied as written; <i>Maceda</i>; provisos strictly construed (<i>CIR v. CA</i>).', keys: 'against government vs. against taxpayer; burden; strictissimi juris' },
		{ cat: 'B', level: 3, topic: 'LGUs', q: 'Distinguish legislative grants of property to local governments from grants of powers, as to how each is construed. Cite a case and a provision.', short: 'Grants of <b>property or money</b> are construed strictly against the LGU and in favor of the public (§7.16; <i>Manila Lodge</i>). Grants of <b>powers</b> are liberally construed in favor of the LGU, and fair and reasonable doubt as to a power is resolved for it (§7.28; LGC Sec. 5(a)). But local tax ordinances are construed strictly against the LGU (Sec. 5(b)).', keys: 'property strict; powers liberal; Manila Lodge; Sec. 5(a), (b)' },
		{ cat: 'B', level: 3, topic: 'Mala in se / prohibita', q: 'Distinguish mala in se from mala prohibita. Does strict construction apply to both?', short: '<i>Mala in se</i> are wrong in themselves and require criminal intent (<i>actus non facit reum nisi mens sit rea</i>); <i>mala prohibita</i> are wrong because prohibited, and intent is generally not required unless the statute uses words like "willfully" (§7.10). Yes: both are penal, so both are strictly construed as to what acts and persons they cover.', keys: 'intent required vs. not; both penal; strict construction applies' },
		// F
		{ cat: 'F', level: 2, topic: 'Manila Lodge', q: 'In Manila Lodge No. 761 v. CA, why did the Court construe Act No. 1360 strictly against the City of Manila?', short: 'Because it was a public grant to a political subdivision: the area was filled at the expense of the Insular Government and "without cost to the City." Public grants involve a gratuitous transfer of public resources, so they are "narrowly restricted in favor of the public." The Court therefore narrowed the letter to exclude a power to sell beyond the north-end hotel site.', keys: 'public grant; Insular Government expense; strictly against grantee; north end only' },
		{ cat: 'F', level: 3, topic: 'Magtajas', q: 'The petitioners in Magtajas invoked the LGC\'s rule that LGU powers are liberally construed. Why did it not help them?', short: 'Liberal construction resolves doubt, and there was none: "gambling and other prohibited games of chance" clearly referred only to illegal gambling (noscitur a sociis). Moreover, no construction can let an ordinance contravene a statute; the delegate cannot be superior to the principal.', keys: 'no doubt; clear text; ordinance cannot override statute' },
		{ cat: 'F', level: 4, topic: 'Catiis', q: 'Could the result in Catiis be supported by the rule on strict construction of penal statutes? How should you present this in an exam?', short: 'Yes, as a supporting point: a penal statute is construed strictly against the State, so a heavier penalty conditioned on a "syndicate" cannot apply to four accused. But the Court did not cite it; it rested on the plain text, the whole-statute rule and the statutory definition. Present strict construction as consistent with the ruling, not as its ratio.', keys: 'consistent but not ratio; plain text; statutory definition' },
		// E
		{
			cat: 'E',
			level: 4,
			topic: 'Penal statutes',
			title: 'Ch. VII — The flood-time motorboat',
			facts: 'R.A. No. 12501 (hypothetical) punishes "any person who, without a license from the Lake Authority, operates a motorboat for hire in Laguna Lake." Its declared purpose is to regulate commercial boat services for passenger safety. During a flood, Ramon, who has no license, uses his own motorboat to ferry stranded neighbors to the town hall. He charges nothing. He is prosecuted.',
			q: 'Is Ramon liable? Answer using ALAC.',
			alac: {
				answer: 'No. Ramon\'s act is not clearly within the statute, which punishes only operation "for hire."',
				legalBasis: 'Penal statutes are construed strictly against the State and liberally in favor of the accused; no person is brought within a penal law unless clearly within its terms, and no act is criminal unless the statute clearly makes it so (Agpalo §§7.07–7.08). Strict construction must not defeat the statute\'s evident purpose (§7.12).',
				application: 'The statute requires operation "for hire," meaning operation for compensation. Ramon charged nothing, so an essential element is missing. Reading "for hire" out of the statute, or stretching it to cover free assistance, would extend a penal law by implication. Nor does acquitting Ramon defeat the law\'s purpose, which is to regulate <i>commercial</i> boat services; a neighbor\'s free rescue is not the mischief the law addresses.',
				conclusion: 'Ramon is not liable under R.A. No. 12501.'
			},
			weaker: 'The prosecution\'s argument from passenger safety cannot supply a missing statutory element; that would be punishing by analogy.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'Tax exemptions',
			title: 'Ch. VII — The school building leased to a bank',
			facts: 'R.A. No. 12600 (hypothetical) exempts non-stock, non-profit educational institutions from real property tax on "property actually, directly and exclusively used for educational purposes." Colegio San Lorenzo, a non-stock, non-profit school, leases the ground floor of its building to a bank and uses all the rent for student scholarships. It claims exemption for the whole building, arguing that the income is ultimately used for education.',
			q: 'Is the leased ground floor exempt? Answer using ALAC.',
			alac: {
				answer: 'No. The leased ground floor is not exempt.',
				legalBasis: 'Tax exemptions are construed <i>strictissimi juris</i> against the taxpayer and liberally in favor of the taxing authority; exemptions are never presumed, and the claimant must show that it falls squarely within a clear grant (Agpalo §7.20; <i>PLDT v. Province of Laguna</i>). A clear exemption is applied as written, without judicial additions (§7.21).',
				application: 'The grant turns on the <i>use</i> of the property: "actually, directly and exclusively used for educational purposes." The ground floor is actually and directly used as a bank. The school\'s argument shifts the test from the use of the property to the destination of the income, which the text does not say. Reading "used for educational purposes" to include "income used for education" enlarges the exemption by implication, which strict construction forbids. Any doubt is resolved against the claimant.',
				conclusion: 'Colegio San Lorenzo must pay real property tax on the leased ground floor; the portions used for classes remain exempt.'
			},
			weaker: 'The "destination of income" argument might fit a law worded that way, but this law speaks of the use of the property.'
		},
		{
			cat: 'E',
			level: 4,
			topic: 'LGU powers',
			title: 'Ch. VII — The CCTV ordinance',
			facts: 'San Isidro City (hypothetical) enacts an ordinance requiring all 24-hour convenience stores to install working CCTV cameras at entrances and cash registers, citing a spate of late-night robberies. No national statute regulates CCTV in stores, and nothing in the LGC expressly mentions CCTV. A store chain argues that the city has no power to impose the requirement because the LGC does not expressly grant it.',
			q: 'Is the ordinance within the city\'s powers? Answer using ALAC.',
			alac: {
				answer: 'Yes. The ordinance is within the city\'s powers under the general welfare clause.',
				legalBasis: 'The general welfare clause (LGC Sec. 16) is liberally construed in favor of LGUs and covers ordinances for the health, safety, peace, good order and convenience of inhabitants (Agpalo §7.27). Any provision on a power of an LGU is liberally interpreted in its favor, and any fair and reasonable doubt as to the existence of the power is interpreted in favor of the LGU (LGC Sec. 5(a); Agpalo §7.28). An ordinance must not contravene a statute (<i>Magtajas</i>).',
				application: 'Requiring CCTV in stores open all night is a safety measure aimed at the robberies the city cited, which falls within the police-power branch of the welfare clause. The absence of an express mention of CCTV creates at most a doubt about the power, and Sec. 5(a) resolves that doubt for the city. Unlike in <i>Magtajas</i>, no national statute authorizes what the ordinance forbids, so there is no conflict with a higher law.',
				conclusion: 'The ordinance is a valid exercise of the city\'s powers, assuming it is reasonable and not oppressive in its details.'
			},
			weaker: 'The "express grant only" view is the older rule on municipal powers, as in <i>Manila Lodge</i> (1976). Since R.A. 2264 and the LGC, doubts about LGU powers are resolved in the LGU\'s favor.'
		},
		// G
		{
			cat: 'G',
			level: 5,
			topic: 'Grants vs. powers',
			title: 'Ch. VII — The mall on the reclaimed park',
			facts: 'R.A. No. 12700 (hypothetical, 2026) grants to Bay City a 10-hectare reclaimed area "for a public park and recreation area," filled at national government expense, and provides: "The City is hereby authorized to lease, for not more than 25 years, a portion not exceeding two hectares at the northern end for a public sports complex." The City Council sells one hectare at the southern end to a mall developer for ₱1 billion. It argues that Sec. 5(a) of the LGC requires liberal construction of LGU powers, and that the sale promotes the general welfare by funding schools.',
			q: 'Is the sale valid? Discuss using ALAC, addressing the City\'s Sec. 5(a) argument.',
			alac: {
				answer: 'No. The sale is void.',
				legalBasis: 'Legislative grants of public property to political subdivisions are strictly construed against the grantee and in favor of the public (Agpalo §7.16; <i>Manila Lodge No. 761 v. CA</i>). Effect must be given to every word, and the express authority to lease one portion excludes authority over the rest (<i>Manila Lodge</i>). Sec. 5(a) LGC governs doubts about LGU <i>powers</i>; it does not enlarge a grant of property, and liberal construction never overrides clear text.',
				application: 'This is a public grant: national land filled at national expense, given "for a public park." Read strictly, as <i>Manila Lodge</i> requires, it authorizes only a <i>lease</i> of up to two hectares at the <i>northern</i> end, for a <i>sports complex</i>. The City <i>sold</i> land at the <i>southern</i> end for a <i>mall</i>, outside every limit of the grant. If the City could already dispose of the land freely, "hereby authorized to lease" would be surplusage. The Sec. 5(a) argument confuses property with power and, in any case, finds no doubt to resolve: the text is clear. A worthy use of the proceeds does not cure the lack of authority.',
				conclusion: 'The sale is void, and the area remains devoted to the public use stated in the grant.'
			},
			weaker: 'The City\'s reading would make the lease authority meaningless and turn a park grant into a land bank, the very result <i>Manila Lodge</i> rejected.'
		},
		{
			cat: 'G',
			level: 5,
			topic: 'Penal statutes',
			title: 'Ch. VII — The farmer\'s drone',
			facts: 'R.A. No. 12750 (hypothetical), the "Critical Infrastructure Protection Act," has whereas clauses stating that its purpose is "to prevent terrorist attacks and sabotage against power plants and other critical infrastructure." Section 3 provides: "Any person who flies an unregistered drone within one kilometer of a power plant shall suffer imprisonment of six (6) to twelve (12) years." Mang Isko, a farmer, flies an unregistered toy drone 900 meters from a power plant to check his rice paddies. There is no allegation that he intended any harm to the plant. He is charged under Section 3.',
			q: 'Should Mang Isko be convicted? Discuss the competing arguments and resolve them using ALAC.',
			alac: {
				answer: 'No. Following <i>People v. Purisima</i>, Section 3 should be read with its declared purpose, and the charge fails to allege that link.',
				legalBasis: 'Penal statutes are strictly construed against the State and in favor of the accused (Agpalo §7.07). Strict construction does not require literalism that leads to absurd or unjust results; the spirit and purpose, as shown in the preamble, may be used to find the law\'s true scope (§7.12; Ch. III on the preamble as an aid). In <i>Purisima</i>, the Court read P.D. 9\'s whereas clauses to require that carrying a bladed weapon be linked to subversion, rebellion, lawless violence, criminality or public disorder.',
				application: 'Read literally, Section 3 would send a farmer to prison for six to twelve years for checking his crops with a toy, which is unrelated to the terrorism and sabotage the law targets. The whereas clauses show the mischief: threats to the plant. As in <i>Purisima</i>, the provision is read to reach drone flights connected with that mischief, and an Information that alleges no such connection charges no offense. The prosecution may argue <i>dura lex sed lex</i> and that the text is clear. But the stated purpose and the severity of the penalty create real doubt about the provision\'s intended reach, and in penal law doubt is resolved for the accused.',
				conclusion: 'Mang Isko should not be convicted under Section 3 on these facts, though he may be liable under any separate drone-registration rule.'
			},
			weaker: 'A purely literal conviction ignores <i>Purisima</i> and produces an absurd result. On the other hand, if the statute expressly said "regardless of intent or purpose," the text would be clear and the court would have to apply it, leaving relief to Congress or executive clemency.'
		}
	],

	memoryAids: [
		['Factors (§7.01)', '<b>N-P-M</b>: Nature · Purpose · Mischief.'],
		['Strict list', '"Laws that <b>burden you</b> or <b>favor someone specially</b>": PEP-TSNR + wills & provisos.'],
		['Liberal list', '"Laws that <b>protect</b> or <b>forgive</b>": social, LGU powers, tax prescription, elections, amnesty, crime prescription, adoption, pensions, Rules of Court.'],
		['Tax trio', '<b>Impose → against govt. Exempt → against taxpayer. Proviso → narrow.</b>'],
		['LGU trio', '<b>Power → liberal. Property → strict. Tax ordinance → strict against LGU.</b>'],
		['Accused trio', '<b>Penal → strict. Amnesty → liberal. Prescription → liberal.</b> All favor the accused.']
	],
	flashcards: [
		['Three factors deciding strict or liberal construction?', 'Nature of the statute; purpose to be served; mischief to be remedied.'],
		['Penal statutes are construed strictly against whom?', 'The State; liberally in favor of the accused.'],
		['Leading case on the limits of strict construction of penal laws?', '<i>People v. Purisima</i> (1978), on P.D. 9 and bladed weapons.'],
		['How are tax exemptions construed?', '<i>Strictissimi juris</i> against the taxpayer; liberally for the taxing authority.'],
		['How are tax-imposing statutes construed?', 'Strictly against the government; liberally for the taxpayer.'],
		['NPC exempt from "all forms of taxes": includes indirect taxes?', 'Yes, <i>Maceda v. Macaraeg</i> (1991).'],
		['Cenvoco: were containers and packaging "raw materials"?', 'No; the proviso was strictly construed and the credit allowed (<i>CIR v. CA</i>, 1999).'],
		['Legislative grants of property to LGUs?', 'Strictly against the LGU (§7.16; <i>Manila Lodge</i>).'],
		['Grants of powers to LGUs?', 'Liberally in favor of the LGU (§7.28; LGC Sec. 5(a)).'],
		['Doubtful local tax ordinance?', 'Strictly against the LGU, liberally for the taxpayer (LGC Sec. 5(b)).'],
		['Does a law burdening "employers" include the State?', 'No, unless the State is expressly mentioned (§7.22).'],
		['How is the State\'s consent to be sued construed?', 'Strictly; no garnishment of public funds without appropriation (§7.23).'],
		['Amnesty proclamations?', 'Liberally, for those claiming amnesty.'],
		['Statutes of limitation on crimes?', 'Liberally, for the accused: acts of grace (<i>People v. Moran</i>).'],
		['Adoption statutes?', 'Liberally, for the child.'],
		['Rules of Court?', 'Liberally, to secure a just, speedy and inexpensive disposition (Rule 1, Sec. 6).'],
		['<i>Privilegia recipiunt largam interpretationem voluntati consonam concedentis</i>?', 'Privileges are interpreted according to the will of the grantor.']
	],
	recall: [
		['What are the three factors in §7.01?', 'Nature of the statute, purpose to be served, mischief to be remedied.'],
		['Name ten strictly construed statutes.', 'Penal; derogation of rights; expropriation; privileges; grants to LGUs; removal of officials; naturalization; tax impositions; tax exemptions; sovereign/suits against government; (also wills; exceptions and provisos).'],
		['Name eight liberally construed statutes.', 'Social legislation; general welfare; LGU powers; tax prescription; election laws; amnesty; prescription of crimes; adoption; pensions; Rules of Court.'],
		['State the four limits of strict construction of penal laws.', 'Not narrowest meaning; not to defeat purpose; spirit over absurd letter; intent-giving reading preferred.'],
		['What three qualifications soften the strict rule on tax exemptions?', 'Clear grants applied as written; broad "all forms of taxes" exemptions for government instrumentalities (<i>Maceda</i>); exceptions/provisos strictly construed (<i>CIR v. CA</i>).'],
		['What does Sec. 5(b) LGC say?', 'Doubtful tax ordinances and revenue measures are construed strictly against the LGU and for the taxpayer; LGU-granted exemptions strictly against the claimant.'],
		['Why did Manila Lodge apply strict construction?', 'The land was a public grant filled at the Insular Government\'s expense; public grants are narrowed in favor of the public.'],
		['Why did liberal construction not save the ordinances in Magtajas?', 'No doubt existed, and an ordinance cannot contravene a statute.'],
		['Two branches of the general welfare clause?', 'Ordinances to carry out powers conferred by law; ordinances for health, safety, prosperity, morals, peace, order, comfort and convenience.'],
		['Difference between mala in se and mala prohibita?', 'Intent required (in se) vs. generally not required (prohibita).']
	],
	summary: {
		rules: [
			'Nature, purpose and mischief decide the approach; both approaches need doubt.',
			'Penal: strict against the State, limited by purpose and absurdity (<i>Purisima</i>).',
			'Tax impositions strict against the government; exemptions <i>strictissimi juris</i> against the claimant; provisos strict.',
			'Grants of property and privileges strict against the grantee (<i>Manila Lodge</i>).',
			'LGU powers and general welfare liberal (Sec. 5(a), (c)); tax ordinances strict against the LGU (Sec. 5(b)).',
			'Social legislation, amnesty, prescription of crimes, adoption, elections, pensions and the Rules of Court liberal.'
		],
		distinctions: ['Strict vs. liberal construction.', 'Tax imposition vs. tax exemption.', 'Grant of property vs. grant of power to LGUs.', '<i>Mala in se</i> vs. <i>mala prohibita</i>.', 'Penal (strict) vs. amnesty and prescription (liberal): all for the accused.'],
		cases: ['<i>Manila Lodge</i>: public grant strictly construed (direct).', '<i>Magtajas</i>: liberal construction needs doubt; cannot override a statute (exam point).', '<i>Catiis</i>: strict construction of penal laws consistent, not the ratio.', '<i>Corona</i>: removal statutes strictly construed, consistent, not the ratio.'],
		traps: ['"Strict = narrowest."', '"Strict = against the accused."', '"Anything LGU = liberal."', '"Exemptions read against government."', '"Liberal beats clear text."']
	},
	checklist: [
		'I can define strict and liberal construction and say what each is not.',
		'I can list at least ten strictly construed and eight liberally construed statutes, with the party each favors.',
		'I can state the four limits of strict construction of penal laws and explain <i>Purisima</i>.',
		'I can explain the tax trio (imposition, exemption, proviso) with <i>PLDT</i>, <i>Maceda</i> and <i>Cenvoco</i>.',
		'I can explain the LGU trio (powers, property, tax ordinances) with <i>Manila Lodge</i> and Sec. 5 LGC.',
		'I can explain why liberal construction did not help the city in <i>Magtajas</i>.',
		'I can write an ALAC answer on a tax-exemption claim in under 15 minutes.'
	],
	watchFor: `<strong>Watch for: strict <i>against whom</i>, liberal <i>for whom</i>.</strong>
<ul>
<li>Penal and tax-imposing laws are strict <b>for</b> the accused and the taxpayer; exemptions are strict <b>against</b> the claimant.</li>
<li>LGU powers are liberal (Sec. 5(a)); LGU property grants and tax ordinances are strict against the LGU (§7.16; Sec. 5(b)).</li>
<li>Neither approach applies to clear text; liberal construction never lets an ordinance override a statute (<i>Magtajas</i>).</li>
</ul>`
};
