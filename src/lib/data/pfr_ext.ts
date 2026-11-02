/*
 * Persons & Family Relations — the Family, the Family Home, and Paternity and Filiation (Family Code, Titles V and VI,
 * Arts. 149–182). From the reviewer "PFR · Family Code Title V and Title VI · Arts. 149–182": for each article, the
 * codal text, what it means, and color-tagged notes. Codal text follows the Rabuya and Tiu reprints and the E.O. 209
 * text on Lawphil, as the reviewer states.
 *
 * Inserted into the PFR guide after Part VII, with its review tools at the end of the guide. The parts and topics
 * here are new ids, so nothing already in the guide (or highlighted in it) moves.
 */

type Color = 'yellow' | 'green' | 'blue' | 'orange' | 'red' | 'purple' | 'neutral';

const badge = (color: Color, label: string) => `<span class="rv-badge rv-${color}">${label}</span>`;
/** Tag colors as in the reviewer: memorize yellow, requisites green, exceptions blue, effects purple, jurisprudence red, trap orange. */
const notes = (rows: [Color, string, string][]) =>
	`<dl class="rv-dl">${rows.map(([c, label, html]) => `<dt>${badge(c, label)}</dt><dd>${html}</dd>`).join('')}</dl>`;
const codal = (html: string) => `<div class="rv-box rv-neutral">${html}</div>`;
const gist = (html: string) => `<p>${html}</p>`;
const h3 = (id: string, num: string, title: string) => `<h3 class="sg-h3" id="${id}">${num} — ${title}</h3>`;
const part = (id: string, title: string, intro: string) => `<h2 class="sg-h2" id="${id}">${title}</h2>\n<p class="sg-intro">${intro}</p>`;
const table = (head: string[], rows: string[][]) =>
	`<div class="table-scroll"><table class="sg-table">\n  <tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr>\n${rows
		.map((r) => `  <tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`)
		.join('\n')}\n</table></div>`;
const ol = (items: string[]) => `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
const ul = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

/* ------------------------------------------------------------------ *
 * Part VIII · Arts. 149–151 — The family as an institution
 * ------------------------------------------------------------------ */
const familyInstitution = `
${part('part-viii-the-family-as-an-institution-arts-149-151', 'Part VIII — The Family as an Institution (Family Code, Arts. 149–151)', 'Three short articles. Art. 151 gets the most recitation time because it is a condition for suing a relative.')}

${h3('fc-art-149', 'Art. 149', 'Family as a basic social institution')}
${codal('<p>The family, being the foundation of the nation, is a basic social institution which public policy cherishes and protects. Consequently, family relations are governed by law and no custom, practice or agreement destructive of the family shall be recognized or given effect.</p>')}
${gist('The State, not the family members, sets the rules for family relations. Private agreements that undermine the family have no effect.')}
${notes([
	['yellow', 'Memorize', 'Two consequences: (1) family relations are governed by law; (2) no custom, practice or agreement destructive of the family is recognized.'],
	['purple', 'Effect', 'Tolentino (via Rabuya): the rule reaches only the <strong>external</strong> aspect of family relations, where third persons and public interest are involved. The internal, spiritual and moral side is outside the law unless it affects social order.'],
	['purple', 'Basis', '1987 Constitution: the family is the foundation of the nation (Art. XV, Sec. 1); the State strengthens the family as a basic autonomous social institution (Art. II, Sec. 12); marriage is an inviolable social institution (Art. XV, Sec. 2).']
])}

${h3('fc-art-150', 'Art. 150', 'Who are members of the family')}
${codal(`<p>Family relations include those:</p>${ol(['Between husband and wife;', 'Between parents and children;', 'Among other ascendants and descendants; and', 'Among brothers and sisters, whether of the full or half-blood.'])}`)}
${notes([
	['yellow', 'Memorize', 'The enumeration is <strong>exclusive</strong>. It defines who is covered by Art. 151.'],
	['orange', 'Trap', 'Not included: in-laws (relatives by affinity), uncles and aunts, nephews and nieces, cousins. Ascendants and descendants are covered in any degree; collaterals stop at brothers and sisters.']
])}

${h3('fc-art-151', 'Art. 151', 'Earnest efforts toward a compromise')}
${codal('<p>No suit between members of the same family shall prosper unless it should appear from the verified complaint or petition that earnest efforts toward a compromise have been made, but that the same have failed. If it is shown that no such efforts were in fact made, the case must be dismissed.</p><p>This rule shall not apply to cases which may not be the subject of compromise under the Civil Code.</p>')}
${gist('Before suing a family member, you must try to settle, and the verified complaint must say that you tried and failed. The purpose is to protect family solidarity by avoiding litigation between relatives.')}
${notes([
	['green', 'Requisites', ol(['The suit is between members of the same family under Art. 150;', 'the verified complaint or petition alleges that earnest efforts toward a compromise were made;', 'those efforts failed.'])],
	['blue', 'Exceptions', '<p><strong>Matters that cannot be compromised</strong> (Civil Code Art. 2035): civil status of persons; validity of a marriage or a legal separation; any ground for legal separation; future support; jurisdiction of courts; future legitime.</p><p><strong>Special proceedings</strong> such as settlement of estate, guardianship, custody and habeas corpus are not "suits" (<em>Manalo v. CA</em>, 2000).</p>'],
	['red', 'Cases', ul([
		'<em>Gayon v. Gayon</em> (1970): a sister-in-law is not a member of the family.',
		'<em>Guerrero v. RTC of Ilocos Norte</em>, G.R. No. 109068, Jan. 10, 1994: brothers-in-law are not covered; the list in Art. 150 is exclusive.',
		'<em>Magbaleta v. Gonong</em> (1977): when a <strong>stranger</strong> to the family is a party, the requirement does not apply. A stranger should not be made to suffer the delay of a family settlement.'
	])],
	['orange', 'Trap', 'Saying the requirement is jurisdictional. It is a condition precedent; non-compliance must be raised by the defendant, or it is waived.']
])}
`;

/* ------------------------------------------------------------------ *
 * Part IX · Arts. 152–162 — The family home
 * ------------------------------------------------------------------ */
const familyHome = `
${part('part-ix-the-family-home-arts-152-162', 'Part IX — The Family Home (Family Code, Arts. 152–162)', 'One question runs through this chapter: when is the home protected from creditors, up to how much, and against whom? Work through the articles in that order.')}

${h3('fc-arts-152-153', 'Arts. 152–153', 'What it is and when it is constituted')}
${codal('<p><strong>Art. 152.</strong> The family home, constituted jointly by the husband and the wife or by an unmarried head of a family, is the dwelling house where they and their family reside, and the land on which it is situated.</p><p><strong>Art. 153.</strong> The family home is deemed constituted on a house and lot from the time it is occupied as a family residence. From the time of its constitution and so long as any of its beneficiaries actually resides therein, the family home continues to be such and is exempt from execution, forced sale or attachment except as hereinafter provided and to the extent of the value allowed by law.</p>')}
${gist('A family home is the house and the land under it. It becomes a family home automatically once the family moves in. No judicial or extrajudicial constitution is needed under the Family Code.')}
${notes([
	['green', 'Requisites', ol(['It is <strong>actually occupied</strong> as the family residence by the persons who constituted it or by the beneficiaries;', 'it is <strong>owned</strong> by the person constituting it (Art. 156);', 'its value at the time of constitution is <strong>within the ceiling</strong> in Art. 157.'])],
	['purple', 'Effect', 'From constitution, and for as long as a beneficiary actually lives there, it is exempt from execution, forced sale or attachment, subject to the exceptions in Art. 155 and only up to the value allowed in Art. 157.'],
	['red', 'Case', '<em>Modequillo v. Breva</em>, G.R. No. 86355, May 31, 1990: residences existing when the Family Code took effect (Aug. 3, 1988) became family homes by operation of law (Art. 162). But the Code is not <strong>retroactive</strong>: a debt incurred before Aug. 3, 1988 is not covered by the exemption.'],
	['orange', 'Trap', 'Under the Civil Code, a family home had to be judicially or extrajudicially constituted. Do not carry that requirement into the Family Code (<em>Taneo v. CA</em>, 1999, discussed the Civil Code system).']
])}

${h3('fc-art-154', 'Art. 154', 'Beneficiaries')}
${codal(`<p>The beneficiaries of a family home are:</p>${ol(['The husband and wife, or an unmarried person who is the head of a family; and', 'Their parents, ascendants, descendants, brothers and sisters, whether the relationship be legitimate or illegitimate, who are living in the family home and who depend upon the head of the family for legal support.'])}`)}
${notes([
	['green', 'Requisites', 'For the relatives in item 2, all three must concur: (a) the relationship listed; (b) <strong>living in the family home</strong>; (c) <strong>dependent on the head of the family for legal support</strong>.'],
	['red', 'Case', '<em>Manacop v. CA</em> (1997): occupancy by an <strong>overseer or maid</strong> is not occupancy by a beneficiary, so the house is not a family home. In-laws may be included when the home is constituted jointly by the spouses.']
])}

${h3('fc-art-155', 'Art. 155', 'Exemption and its exceptions')}
${codal(`<p>The family home shall be exempt from execution, forced sale or attachment except:</p>${ol(['For nonpayment of taxes;', 'For debts incurred prior to the constitution of the family home;', 'For debts secured by mortgages on the premises before or after such constitution; and', 'For debts due to laborers, mechanics, architects, builders, materialmen and others who have rendered service or furnished material for the construction of the building.'])}`)}
${notes([
	['yellow', 'Memorize', 'Mnemonic: <strong>T-P-M-B</strong>, which stands for Taxes, Prior debts, Mortgages, Builders.'],
	['purple', 'Why', 'Each exception is a creditor the family cannot fairly hide from: the State\'s taxes; creditors who lent before the home existed; creditors the owner voluntarily gave the house as security; and the people who built the house.'],
	['orange', 'Trap', 'Item 3 covers mortgages "before <strong>or after</strong>" constitution. Item 2 is about debts incurred <strong>before</strong> constitution, so date the debt, not the judgment.']
])}

${h3('fc-arts-156-157', 'Arts. 156–157', 'On what property, and up to what value')}
${codal('<p><strong>Art. 156.</strong> The family home must be part of the properties of the absolute community or the conjugal partnership, or of the exclusive properties of either spouse with the latter\'s consent. It may also be constituted by an unmarried head of a family on his or her own property. Nevertheless, property that is the subject of a conditional sale on installments where ownership is reserved by the vendor only to guarantee payment of the purchase price may be constituted as a family home.</p><p><strong>Art. 157.</strong> The actual value of the family home shall not exceed, at the time of its constitution, the amount of three hundred thousand pesos in urban areas, and two hundred thousand pesos in rural areas, or such amounts as may hereafter be fixed by law. In any event, if the value of the currency changes after the adoption of this Code, the value most favorable for the constitution of a family home shall be the basis of evaluation. For purposes of this Article, urban areas are deemed to include chartered cities and municipalities whose annual income at least equals that legally required for chartered cities. All others are deemed to be rural areas.</p>')}
${table(['Area', 'Ceiling at constitution', 'Includes'], [
	['Urban', '<strong>₱300,000</strong>', 'Chartered cities; municipalities whose annual income at least equals that required for chartered cities'],
	['Rural', '<strong>₱200,000</strong>', 'All others']
])}
${notes([
	['green', 'Requisites', 'The property must be (a) ACP or CPG property, (b) the exclusive property of a spouse <strong>with that spouse\'s consent</strong>, or (c) the own property of an unmarried head of a family. A conditional sale on installments counts, as long as the seller reserved ownership only to secure payment.'],
	['orange', 'Trap', 'The ceiling is measured at <strong>the time of constitution</strong>, not today. Land co-owned with third persons, such as siblings, does not fit any category in Art. 156.']
])}

${h3('fc-art-158', 'Art. 158', 'Sale or encumbrance')}
${codal('<p>The family home may be sold, alienated, donated, assigned or encumbered by the owner or owners thereof with the written consent of the person constituting the same, the latter\'s spouse, and a majority of the beneficiaries of legal age. In case of conflict, the court shall decide.</p>')}
${notes([
	['green', 'Requisites', '<strong>Written</strong> consent of three: (1) the person who constituted it; (2) that person\'s spouse; (3) a <strong>majority</strong> of the beneficiaries <strong>of legal age</strong>. If they disagree, the court decides.'],
	['purple', 'Effect', 'The Code does not say what happens without the consent. Rabuya submits the sale is valid as to the value in <strong>excess</strong> of the Art. 157 ceiling. If the home is ACP or CPG property, a sale without the other spouse\'s consent during the marriage is void anyway under Art. 96 or 124.']
])}

${h3('fc-art-159', 'Art. 159', 'After the death of the person who constituted it')}
${codal('<p>The family home shall continue despite the death of one or both spouses or of the unmarried head of the family for a period of ten years or for as long as there is a minor beneficiary, and the heirs cannot partition the same unless the court finds compelling reasons therefor. This rule shall apply regardless of whoever owns the property or constituted the family home.</p>')}
${notes([
	['purple', 'Effect', `Rabuya reads Arts. 153 and 159 together:${ol(['The home continues for as long as a <strong>minor beneficiary</strong> actually lives there.', 'If there is no minor beneficiary, it continues for <strong>ten years</strong>, provided a beneficiary of legal age lives there.', 'During that time the heirs <strong>cannot partition</strong> it unless the court finds compelling reasons.'])}`],
	['red', 'Case', '<em>Arriola v. Arriola</em>, G.R. No. 177703, Jan. 28, 2008: the house of the decedent, occupied by his widow and child, was a family home; partition was barred within ten years from his death.'],
	['orange', 'Trap', 'Saying the home ends when the owner dies, or that it lasts forever. It is ten years or as long as there is a minor beneficiary.']
])}

${h3('fc-art-160', 'Art. 160', 'Execution sale when the home is worth more than the ceiling')}
${codal('<p>When a creditor whose claim is not among those mentioned in Article 155 obtains a judgment in his favor, and he has reasonable grounds to believe that the family home is actually worth more than the maximum amount fixed in Article 157, he may apply to the court which rendered the judgment for an order directing the sale of the property under execution. The court shall so order if it finds that the actual value of the family home exceeds the maximum amount allowed by law as of the time of its constitution. If the increased actual value exceeds the maximum allowed in Article 157 and results from subsequent voluntary improvements introduced by the person or persons constituting the family home, by the owner or owners of the property, or by any of the beneficiaries, the same rule and procedure shall apply.</p><p>At the execution sale, no bid below the value allowed for a family home shall be considered. The proceeds shall be applied first to the amount mentioned in Article 157, and then to the liabilities under the judgment and the costs. The excess, if any, shall be delivered to the judgment debtor.</p>')}
${ol([
	'A creditor <strong>not listed in Art. 155</strong> obtains a judgment.',
	'The creditor applies to <strong>the court that rendered the judgment</strong>, showing reasonable grounds that the home is worth more than the Art. 157 ceiling.',
	'The court orders the sale if the actual value exceeded the ceiling as of <strong>the time of constitution</strong>, or now exceeds it because of later <strong>voluntary improvements</strong> by the constitutor, owner, or beneficiaries.',
	'At the sale, no <strong>bid below the protected value</strong> is considered.',
	'Proceeds go first to the protected amount (to the family), then to the judgment and costs; any <strong>excess</strong> goes to the judgment debtor.'
])}
${notes([['orange', 'Trap', 'An increase from market appreciation alone does not trigger the rule. The text covers value at constitution, or an increase from voluntary improvements.']])}

${h3('fc-arts-161-162', 'Arts. 161–162', 'Only one family home; existing residences')}
${codal('<p><strong>Art. 161.</strong> For purposes of availing of the benefits of a family home as provided for in this Chapter, a person may constitute, or be the beneficiary of, only one family home.</p><p><strong>Art. 162.</strong> The provisions in this Chapter shall also govern existing family residences insofar as said provisions are applicable.</p>')}
${notes([['red', 'Case', 'Art. 162 is the basis of <em>Modequillo</em>: existing residences became family homes on Aug. 3, 1988, but prospectively only.']])}
`;

/* ------------------------------------------------------------------ *
 * Part X · Arts. 163–165, 167–169 — Kinds of filiation, legitimate children
 * ------------------------------------------------------------------ */
const legitimateChildren = `
${part('part-x-kinds-of-filiation-and-legitimate-children-arts-163-169', 'Part X — Kinds of Filiation &amp; Legitimate Children (Family Code, Arts. 163–165, 167–169)', 'Filiation is fixed by law, not by what the parents declare. Start from the presumption of legitimacy and ask what it takes to overcome it.')}

${h3('fc-arts-163-165', 'Arts. 163–165', 'Kinds of filiation')}
${codal('<p><strong>Art. 163.</strong> The filiation of children may be by nature or by adoption. Natural filiation may be legitimate or illegitimate.</p><p><strong>Art. 164.</strong> Children conceived or born during the marriage of the parents are legitimate.</p><p>Children conceived as a result of artificial insemination of the wife with the sperm of the husband or that of a donor or both are likewise legitimate children of the husband and his wife, provided, that both of them authorized or ratified such insemination in a written instrument executed and signed by them before the birth of the child. The instrument shall be recorded in the civil registry together with the birth certificate of the child.</p><p><strong>Art. 165.</strong> Children conceived and born outside a valid marriage are illegitimate, unless otherwise provided in this Code.</p>')}
${notes([
	['yellow', 'Memorize', 'Art. 164 says <strong>conceived or born</strong>. A child conceived before the wedding and born after it is legitimate. Art. 165 says conceived <strong>and</strong> born outside a valid marriage.'],
	['green', 'Requisites', 'For a child conceived by <strong>artificial insemination</strong> to be legitimate: (1) the insemination is of the wife, with sperm of the husband, a donor, or both; (2) <strong>both</strong> spouses authorized or ratified it; (3) in a <strong>written instrument</strong>; (4) executed and signed <strong>before the birth</strong>. The instrument is then recorded with the birth certificate.'],
	['blue', 'Exceptions', '"Unless otherwise provided" in Art. 165 refers to Art. 54: children conceived or <strong>born before the judgment</strong> of annulment, or of absolute nullity under <strong>Art. 36</strong>, has become final are legitimate. So are children conceived or born of a subsequent marriage under <strong>Art. 53</strong>.']
])}

${h3('fc-art-167', 'Art. 167', 'The mother cannot make her child illegitimate')}
${codal('<p>The child shall be considered legitimate although the mother may have declared against its legitimacy or may have been sentenced as an adulteress.</p>')}
${notes([
	['purple', 'Effect', 'A child conceived or born during the marriage is presumed legitimate. That presumption is not defeated by the mother\'s statement that the child is another man\'s, or by her conviction for adultery.'],
	['red', 'Cases', ul([
		'<em>Macadangdang v. CA</em>, G.R. No. L-49542, Sept. 12, 1980: the mother\'s claim of an affair did not overcome the presumption, and she had no standing to bastardize her own child.',
		'<em>Concepcion v. CA</em>, G.R. No. 123450, Aug. 31, 2005: a child born to a woman validly married to her first husband is presumed his legitimate child, even if she was living with a second man under a bigamous marriage. The mother\'s declaration cannot change that.'
	])],
	['orange', 'Trap', 'Art. 167 covers a mother saying "this is my child, but not my husband\'s." It does not cover a claim that the child is not hers at all. That is a different action (see Part XI, <em>Benitez-Badua</em>).']
])}

${h3('fc-arts-168-169', 'Arts. 168–169', 'Two marriages within 300 days')}
${codal(`<p><strong>Art. 168.</strong> If the marriage is terminated and the mother contracted another marriage within three hundred days after such termination of the former marriage, these rules shall govern in the absence of proof to the contrary:</p>${ol(['A child born before one hundred eighty days after the solemnization of the subsequent marriage is considered to have been conceived during the former marriage, provided it be born within three hundred days after the termination of the former marriage;', 'A child born after one hundred eighty days following the celebration of the subsequent marriage is considered to have been conceived during such marriage, even though it be born within the three hundred days after the termination of the former marriage.'])}<p><strong>Art. 169.</strong> The legitimacy or illegitimacy of a child born after three hundred days following the termination of the marriage shall be proved by whoever alleges such legitimacy or illegitimacy.</p>`)}
${table(['Worked example', 'Date', 'Result'], [
	['First husband dies', 'Jan. 10, 2025', '300 days later: Nov. 6, 2025'],
	['Widow remarries', 'Mar. 1, 2025', '180 days later: Aug. 28, 2025'],
	['Child A born', 'July 15, 2025', 'Before 180 days, within 300: <strong>first marriage</strong>'],
	['Child B born', 'Oct. 1, 2025', 'After 180 days, within 300: <strong>second marriage</strong>'],
	['Child C born', 'Dec. 1, 2025', 'After 300 days: Art. 168 no longer applies; born during the second marriage, so presumed its child (Art. 164)']
])}
${notes([['orange', 'Trap', 'Both rules assume the child is born <strong>within 300 days</strong> after the first marriage ended, and they apply only "in the absence of proof to the contrary."']])}
`;

/* ------------------------------------------------------------------ *
 * Part XI · Arts. 166, 170–171 — Impugning legitimacy
 * ------------------------------------------------------------------ */
const impugning = `
${part('part-xi-impugning-legitimacy-arts-166-170-171', 'Part XI — Impugning Legitimacy (Family Code, Arts. 166, 170–171)', 'Who may attack the child\'s legitimacy, on what grounds, and how soon. Each of the three questions has a strict answer.')}

${h3('fc-art-166', 'Art. 166', 'Grounds')}
${codal(`<p>Legitimacy of a child may be impugned only on the following grounds:</p>${ol([
	'That it was physically impossible for the husband to have sexual intercourse with his wife within the first 120 days of the 300 days which immediately preceded the birth of the child because of:<br>(a) the physical incapacity of the husband to have sexual intercourse with his wife;<br>(b) the fact that the husband and wife were living separately in such a way that sexual intercourse was not possible; or<br>(c) serious illness of the husband, which absolutely prevented sexual intercourse;',
	'That it is proved that for biological or other scientific reasons, the child could not have been that of the husband, except in the instance provided in the second paragraph of Article 164; or',
	'That in case of children conceived through artificial insemination, the written authorization or ratification of either parent was obtained through mistake, fraud, violence, intimidation, or undue influence.'
])}`)}
<p class="rv-h4">The conception window for ground (1)</p>
<div style="display:flex;border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;font-family:var(--font-sans);font-size:0.8rem;font-weight:600;text-align:center"><div style="flex:120;padding:0.55rem 0.4rem;background:color-mix(in oklab, var(--red) 14%, transparent);color:var(--red)">First 120 days: no access possible</div><div style="flex:180;padding:0.55rem 0.4rem;background:var(--muted);color:var(--muted-foreground)">Last 180 days before birth</div></div>
<div style="display:flex;justify-content:space-between;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:0.72rem;color:var(--muted-foreground);margin:0.25rem 0 0.8rem"><span>Day 300 before birth</span><span>Day 181</span><span>Birth</span></div>
${gist('The law treats 300 days as the longest possible pregnancy and 180 days as the shortest viable one, so conception must fall in the first 120 days of the 300. Example: for a birth on Mar. 1, 2026, the window runs <strong>May 5 to Sept. 1, 2025</strong>. If the husband was abroad until Aug. 16, 2025 and home after that, ground (1) fails, because he had access within the window.')}
${notes([
	['orange', 'Trap', 'The illness must have <strong>absolutely prevented</strong> intercourse, and living apart must have made it <strong>not possible</strong>. Separate residences or an ordinary illness are not enough (<em>Andal v. Macaraig</em>, 1951: a husband with tuberculosis was not shown to be incapable of intercourse).'],
	['blue', 'Exception', 'Ground (2) excludes the case under Art. 164, par. 2. If the spouses validly consented to insemination with donor sperm, the husband cannot use the fact that the sperm was not his.'],
	['red', 'Evidence', 'DNA evidence is admissible to prove or disprove paternity (<em>Herrera v. Alba</em>, G.R. No. 148220, June 15, 2005; Rule on DNA Evidence, A.M. No. 06-11-5-SC, 2007).']
])}

${h3('fc-arts-170-171', 'Arts. 170–171', 'When to file, and when the heirs may')}
${codal(`<p><strong>Art. 170.</strong> The action to impugn the legitimacy of the child shall be brought within one year from the knowledge of the birth or its recording in the civil register, if the husband or, in a proper case, any of his heirs, should reside in the city or municipality where the birth took place or was recorded.</p><p>If the husband or, in his default, all of his heirs do not reside at the place of birth as defined in the first paragraph or where it was recorded, the period shall be two years if they should reside in the Philippines; and three years if abroad. If the birth of the child has been concealed from or was unknown to the husband or his heirs, the period shall be counted from the discovery or knowledge of the birth of the child or of the fact of registration of said birth, whichever is earlier.</p><p><strong>Art. 171.</strong> The heirs of the husband may impugn the filiation of the child within the period prescribed in the preceding article only in the following cases:</p>${ol(['If the husband should die before the expiration of the period fixed for bringing his action;', 'If he should die after the filing of the complaint without having desisted therefrom; or', 'If the child was born after the death of the husband.'])}`)}
${table(['Husband (or heirs) lives', 'Period'], [
	['In the city or municipality of birth or recording', '<strong>1 year</strong>'],
	['Elsewhere in the Philippines', '<strong>2 years</strong>'],
	['Abroad', '<strong>3 years</strong>']
])}
${notes([
	['yellow', 'Reckoning', 'From <strong>knowledge of the birth or its recording</strong>. If the birth was concealed: from discovery of the birth or of its registration, <strong>whichever is earlier</strong>.'],
	['red', 'Cases', ul([
		'<em>Liyao v. Tanhoti-Liyao</em>, G.R. No. 138961, Mar. 7, 2002: impugning legitimacy is a strictly personal right of the husband, or his heirs in the cases of Art. 171. The child cannot choose his filiation, and legitimacy cannot be attacked collaterally; it needs a direct action within the period.',
		'<em>Benitez-Badua v. CA</em>, G.R. No. 105625, Jan. 24, 1994, and <em>Babiera v. Catotal</em> (2000): Arts. 166, 170 and 171 do not apply when the claim is that the person is <strong>not the couple\'s child at all</strong>, as with a simulated birth. That claim is not bound by the Art. 170 periods.'
	])],
	['purple', 'Why only the husband', 'He is the one directly confronted with the scandal of the wife\'s infidelity, so the law lets him decide whether to conceal it or expose it, given the moral and economic interests involved.'],
	['orange', 'Trap', 'If the husband\'s own period had already run before he died, his heirs cannot sue. Art. 171(1) requires that he die <strong>before</strong> the period expired.']
])}
`;

/* ------------------------------------------------------------------ *
 * Part XII · Arts. 172–174 — Proof of filiation, action to claim legitimacy
 * ------------------------------------------------------------------ */
const proof = `
${part('part-xii-proof-of-filiation-and-the-action-to-claim-legitimacy-arts-172-174', 'Part XII — Proof of Filiation &amp; the Action to Claim Legitimacy (Family Code, Arts. 172–174)', 'The evidence decides the deadline. Primary evidence keeps the action open for the child\'s lifetime. Secondary evidence, for illegitimate children, must be used while the parent is alive.')}

${h3('fc-art-172', 'Art. 172', 'How filiation is proved')}
${codal(`<p>The filiation of legitimate children is established by any of the following:</p>${ol(['The record of birth appearing in the civil register or a final judgment; or', 'An admission of legitimate filiation in a public document or a private handwritten instrument and signed by the parent concerned.'])}<p>In the absence of the foregoing evidence, the legitimate filiation shall be proved by:</p>${ol(['The open and continuous possession of the status of a legitimate child; or', 'Any other means allowed by the Rules of Court and special laws.'])}`)}
${table(['Primary (par. 1)', 'Secondary (par. 2), only if no primary'], [
	['Record of birth in the civil register', 'Open and continuous possession of the status of a child'],
	['Final judgment', 'Other means under the Rules of Court and special laws: baptismal certificate, family pictures, witnesses, pedigree declarations (Rule 130), DNA'],
	['Admission in a public document', ''],
	['Admission in a private handwritten instrument signed by the parent', '']
])}
${notes([
	['red', 'Cases', ul([
		'<em>Jison v. CA</em>, G.R. No. 124853, Feb. 24, 1998: open and continuous possession requires the father\'s conduct to show a permanent intention to treat the child as his, continuously, not by occasional acts.',
		'<em>Dela Cruz v. Gracia</em>, G.R. No. 177728, July 31, 2009: a private handwritten instrument may be unsigned if it is in the father\'s handwriting and corroborated by other evidence. When it is the only evidence, it must be signed.',
		'<em>Cabatania v. CA</em> (2004): physical resemblance is too subjective to prove filiation; at most it corroborates.'
	])],
	['orange', 'Trap', 'A baptismal certificate is not a record in the civil register. At most it is secondary evidence.']
])}

${h3('fc-art-173', 'Art. 173', 'Action to claim legitimacy')}
${codal('<p>The action to claim legitimacy may be brought by the child during his or her lifetime and shall be transmitted to the heirs should the child die during minority or in a state of insanity. In these cases, the heirs shall have a period of five years within which to institute the action.</p><p>The action already commenced by the child shall survive notwithstanding the death of either or both of the parties.</p>')}
${notes([
	['yellow', 'Memorize', 'The child: <strong>lifetime</strong>. The heirs: only if the child died during <strong>minority</strong> or <strong>insanity</strong>, within <strong>five years</strong>. A case already filed by the child survives anyone\'s death.'],
	['purple', 'When needed', 'Usually it is not needed, because the presumption of legitimacy already fixes the status. Tiu gives the cases where it is: a child choosing between two successive marriages (Art. 168), and children with no fixed status, such as one born after the 300 days in Art. 169.']
])}

${h3('fc-art-174', 'Art. 174', 'Rights of legitimate children')}
${codal(`<p>Legitimate children shall have the right:</p>${ol(['To bear the surnames of the father and the mother, in conformity with the provisions of the Civil Code on Surnames;', 'To receive support from their parents, their ascendants, and in proper cases, their brothers and sisters, in conformity with the provisions of this Code on Support; and', 'To be entitled to the legitime and other successional rights granted to them by the Civil Code.'])}`)}
`;

/* ------------------------------------------------------------------ *
 * Part XIII · Arts. 175–176 — Illegitimate children
 * ------------------------------------------------------------------ */
const illegitimate = `
${part('part-xiii-illegitimate-children-arts-175-176', 'Part XIII — Illegitimate Children (Family Code, Arts. 175–176)', 'The same proof as legitimate children, with one difference in the deadline. Know the R.A. 9255 amendment and <em>Grande v. Antonio</em>.')}

${h3('fc-art-175', 'Art. 175', 'Establishing illegitimate filiation')}
${codal('<p>Illegitimate children may establish their illegitimate filiation in the same way and on the same evidence as legitimate children.</p><p>The action must be brought within the same period specified in Article 173, except when the action is based on the second paragraph of Article 172, in which case the action may be brought during the lifetime of the alleged parent.</p>')}
${table(['Evidence relied on', 'Deadline'], [
	['Primary (Art. 172, par. 1)', 'Child\'s <strong>lifetime</strong> (heirs: 5 years if the child died in minority or insanity)'],
	['Secondary (Art. 172, par. 2)', 'Lifetime of the <strong>alleged parent</strong>']
])}
${notes([
	['purple', 'Why', 'The alleged parent should have the chance to affirm or deny. Only the parent can reveal the facts of conception, and illegitimate children are often raised without the legitimate family knowing.'],
	['red', 'Cases', ul([
		'<em>Bernabe v. Alejo</em>, G.R. No. 140500, Jan. 21, 2002: a child who was a minor when the Family Code took effect kept the vested right under the Civil Code to sue up to four years after reaching majority.',
		'<em>De Jesus v. Estate of Dizon</em>, G.R. No. 142877, Oct. 2, 2001: children born during their mother\'s marriage are presumed legitimate children of her husband. They cannot claim to be the illegitimate children of another man without first having that legitimacy impugned in a proper action.'
	])]
])}

${h3('fc-art-176', 'Art. 176', 'Surname, parental authority, support, legitime')}
${codal('<p>Illegitimate children shall use the surname and shall be under the parental authority of their mother, and shall be entitled to support in conformity with this Code. However, illegitimate children may use the surname of their father if their filiation has been expressly recognized by the father through the record of birth appearing in the civil register, or when an admission in a public document or private handwritten instrument is made by the father. Provided, the father has the right to institute an action before the regular courts to prove non-filiation during his lifetime. The legitime of each illegitimate child shall consist of one-half of the legitime of a legitimate child. <em>(As amended by R.A. 9255)</em></p>')}
${notes([
	['yellow', 'Memorize', `<p><strong>Surname:</strong> the mother's, as a rule. The father's only if he <strong>expressly recognized</strong> the child through the record of birth, a public document, or a private handwritten instrument.</p><p><strong>Parental authority:</strong> the mother's.</p><p><strong>Support:</strong> under the Code. It comes from the parent's separate property; if that is insufficient, the ACP or CPG advances it, charged to that parent at liquidation (Arts. 94, 121–122, 197).</p><p><strong>Legitime:</strong> one-half of a legitimate child's.</p>`],
	['red', 'Case', '<em>Grande v. Antonio</em>, G.R. No. 206248, Feb. 18, 2014: "may" is permissive. The choice to use the father\'s surname belongs to the child; the father cannot compel it. Recognition does not give the father parental authority. The rules of the civil registrar\'s administrative order making the father\'s surname mandatory were struck down.'],
	['orange', 'Trap', 'If filiation is proved only by secondary evidence, such as open and continuous possession, the exception for the father\'s surname does not apply. It requires express recognition through one of the listed documents.']
])}
${table(['Right', 'Legitimate (Art. 174)', 'Illegitimate (Art. 176)'], [
	['Surname', 'Father\'s and mother\'s', 'Mother\'s; may use father\'s if expressly recognized, at the child\'s choice'],
	['Parental authority', 'Both parents jointly', 'Mother'],
	['Support', 'From parents, ascendants, and in proper cases siblings', 'From parents; out of the obligor\'s separate property first'],
	['Legitime', 'Full legitime', 'One-half of a legitimate child\'s']
])}
`;

/* ------------------------------------------------------------------ *
 * Part XIV · Arts. 177–182 — Legitimation
 * ------------------------------------------------------------------ */
const legitimation = `
${part('part-xiv-legitimation-arts-177-182', 'Part XIV — Legitimation (Family Code, Arts. 177–182)', 'Legitimation turns an illegitimate child into a legitimate one when the parents later marry. Everything depends on whether the parents could have married each other when the child was conceived.')}

${h3('fc-arts-177-178', 'Arts. 177–178', 'Who may be legitimated, and how')}
${codal('<p><strong>Art. 177</strong> <em>(as amended by R.A. 9858)</em>. Children conceived and born outside of wedlock of parents who, at the time of conception of the former, were not disqualified by any impediment to marry each other, or were so disqualified only because either or both of them were below eighteen (18) years of age, may be legitimated.</p><p><strong>Art. 178.</strong> Legitimation shall take place by a subsequent valid marriage between parents. The annulment of a voidable marriage shall not affect the legitimation.</p>')}
${notes([
	['green', 'Requisites', ol(['The child was conceived and born outside of wedlock;', 'at the <strong>time of conception</strong>, the parents had no impediment to marry each other, or the only impediment was that one or both were below 18;', 'the parents later contract a <strong>valid</strong> marriage with each other.'])],
	['blue', 'Exception', 'R.A. 9858 (2009) added the below-18 exception. Before it, a child of parents who were minors at conception could not be legitimated.'],
	['orange', 'Trap', 'The test is capacity at the time of conception, not birth or the later wedding. If the father was married to someone else at conception, the child cannot be legitimated even if he was widowed before the birth.'],
	['purple', 'Effect', 'Annulment of the parents\' later voidable marriage does not undo the legitimation. A void subsequent marriage cannot legitimate, because the article requires a valid marriage.']
])}

${h3('fc-arts-179-182', 'Arts. 179–182', 'Effects and challenge')}
${codal('<p><strong>Art. 179.</strong> Legitimated children shall enjoy the same rights as legitimate children.</p><p><strong>Art. 180.</strong> The effects of legitimation shall retroact to the time of the child\'s birth.</p><p><strong>Art. 181.</strong> The legitimation of children who died before the celebration of the marriage shall benefit their descendants.</p><p><strong>Art. 182.</strong> Legitimation may be impugned only by those who are prejudiced in their rights, within five years from the time their cause of action accrues.</p>')}
${notes([
	['yellow', 'Memorize', 'Same rights as legitimate children · retroacts to <strong>birth</strong> · benefits the descendants of a child who already died · impugned only by <strong>those prejudiced</strong>, within <strong>five years</strong> from accrual.'],
	['purple', 'Why Art. 181', 'So the deceased child\'s own children can inherit from their grandparents as legitimate descendants, by right of representation.'],
	['orange', 'Trap', 'Saying legitimation takes effect from the parents\' marriage. It retroacts to the child\'s birth.']
])}
`;

/** Parts VIII–XIV, inserted after Part VII of the PFR guide. */
export const familyFiliationHtml = [familyInstitution, familyHome, legitimateChildren, impugning, proof, illegitimate, legitimation].join('\n');

/** Quick recall for Arts. 149–182, appended at the end of the PFR guide with the other review tools. */
export const familyFiliationReview = `
${part('family-filiation-review-tools-arts-149-182', 'Review Tools — Family, Family Home &amp; Filiation (Arts. 149–182)', 'The figures and periods to recite, and a recall checklist.')}

${h3('fc-figures', 'Quick recall', 'Numbers and periods')}
${table(['Figure', 'Rule', 'Article'], [
	['<strong>₱300,000 / ₱200,000</strong>', 'Family home ceiling, urban / rural, at the time of constitution', '157'],
	['<strong>10 years</strong>', 'Family home continues after the constitutor\'s death, if no minor beneficiary', '159'],
	['<strong>Aug. 3, 1988</strong>', 'Existing residences became family homes, prospectively', '162; <em>Modequillo</em>'],
	['<strong>300 / 120 / 180 days</strong>', 'Longest pregnancy / conception window / shortest viable pregnancy', '166, 168'],
	['<strong>1 / 2 / 3 years</strong>', 'Impugn legitimacy: same city or municipality / elsewhere in the Philippines / abroad', '170'],
	['<strong>5 years</strong>', 'Heirs\' action to claim legitimacy, if the child died in minority or insanity', '173'],
	['<strong>Parent\'s lifetime</strong>', 'Illegitimate filiation proved by secondary evidence', '175'],
	['<strong>½</strong>', 'Legitime of an illegitimate child relative to a legitimate child', '176'],
	['<strong>Below 18</strong>', 'The only impediment at conception that still allows legitimation', '177 (R.A. 9858)'],
	['<strong>5 years</strong>', 'Impugning legitimation, from accrual of the cause of action', '182']
])}

${h3('fc-checklist', 'Quick recall', 'Recall checklist')}
${ol([
	'Recite Art. 150 and name three relatives it excludes',
	'State the Art. 2035 matters that cannot be compromised',
	'Explain when the family home is constituted under the Family Code, and <em>Modequillo</em>',
	'List the Art. 154 beneficiaries and the two conditions for relatives',
	'Recite the four Art. 155 exceptions (T-P-M-B)',
	'Give the Art. 157 ceilings and the time they are measured',
	'Name the three persons whose consent Art. 158 requires',
	'Explain how Arts. 153 and 159 work together after death',
	'Walk through the Art. 160 execution sale in order',
	'State the four requisites for a legitimate child by artificial insemination',
	'Recite the Art. 166 grounds, including the three causes of physical impossibility',
	'Compute the 120-day window for a given birth date',
	'Apply Art. 168 to two births after a remarriage',
	'Give the Art. 170 periods and the reckoning point',
	'Name the three Art. 171 cases where heirs may impugn',
	'Distinguish primary and secondary evidence under Art. 172',
	'State the deadline difference in Art. 175 and its reason',
	'Explain Art. 176 as amended by R.A. 9255 and <em>Grande v. Antonio</em>',
	'State the Art. 177 requisites, including the R.A. 9858 amendment',
	'Recite the effects of legitimation and who may impugn it'
])}
<p class="rv-source">Codal text follows the Rabuya and Tiu reprints and the E.O. 209 text on Lawphil.</p>
`;
