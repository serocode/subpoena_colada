/*
 * Part IX — consolidated high-yield comparisons. Sixteen high-yield pairs are indexed here with their decisive
 * distinction and a link to the full nine-row table in the Rule chapter where each lives. The one pair not covered in a
 * chapter (formal vs. substantive defects of the information) is written out in full here.
 */
import { box, h3, p, renderComparison, table, type Comparison, type RuleChapter } from './model';
import { prescriptionComparisons } from './prescription';

const formalVsSubstantive: Comparison = {
	id: 'CX.1',
	title: 'Formal defect vs. substantive defect of the complaint or information',
	a: 'Formal defect',
	b: 'Substantive defect',
	meaning: [
		'A flaw in form that does not affect the accused\'s ability to understand and meet the charge: e.g., wrong designation or caption, defective oath, misspelled name, approximate date, unspecified section of the law.',
		'A flaw that goes to whether a crime is charged at all or to the court\'s power: e.g., facts alleged do not constitute an offense; missing element; court without jurisdiction over the offense (including venue).'
	],
	basis: ['Rule 110, Secs. 6–12; Rule 117, Sec. 3(e) and (f); Rule 116, Sec. 9', 'Rule 117, Sec. 3(a), (b); Rule 117, Sec. 9; Const., Art. III, Sec. 14(2)'],
	who: ['Accused raises by motion to quash or bill of particulars; prosecution cures by amendment.', 'Accused may raise at any stage; the court may notice lack of jurisdiction over the offense on its own.'],
	when: ['Before plea (arraignment for a bill of particulars).', 'Any time, even on appeal.'],
	reqs: ['Motion specifying the defect.', 'Showing that, hypothetically admitting the facts alleged, no offense is charged, or that the court lacks jurisdiction.'],
	time: ['Waived if not raised before plea.', 'Not waived (Rule 117, Sec. 9).'],
	exceptions: ['Qualifying circumstances alleged without ultimate facts: waived if not raised before arraignment (Solar), but an unalleged circumstance is never appreciated.', 'Even ground (a) first calls for an opportunity to amend before quashal (Rule 117, Sec. 4).'],
	effect: ['Cured by amendment (before plea freely; after plea, formal only with leave) or by evidence at trial.', 'No valid conviction can rest on it; quashal or dismissal; refiling allowed unless (g) or (i).'],
	trap: ['Calling a wrong caption fatal (the body controls).', 'Calling lack of authority of the filing officer "substantive/jurisdictional" (it is waivable — Villa Gomez).'],
	decisive: 'Whether the defect prevents the information from charging an offense within the court\'s jurisdiction (substantive, non-waivable) or only affects how the charge is stated (formal, waivable and curable).',
	hypo: 'An information for theft misstates the date by a week and omits the provision violated (formal — no effect if not objected to). Another fails to allege that the property belonged to another (substantive — no offense charged; quashable even after plea, though the prosecution may first amend).'
};

/** The sixteen high-yield pairs, mapped to the comparison id that covers each. */
const pairs: [string, string][] = [
	['Complaint vs. information', 'C110.1'],
	['Filing (in court) vs. institution', 'C110.4'],
	['Prosecutorial vs. judicial probable cause', 'C112.1'],
	['Preliminary investigation vs. inquest', 'C112.2'],
	['Probable cause to file vs. probable cause for a warrant', 'C112.3'],
	['Warrant vs. warrantless arrest', 'C113.1'],
	['Bail as a right vs. bail as discretion', 'C114.1'],
	['Motion to quash vs. demurrer to evidence', 'C117.2'],
	['Dismissal vs. acquittal', 'C117.4'],
	['Provisional dismissal vs. dismissal on the merits', 'C117.3'],
	['Amendment vs. substitution', 'C110.2'],
	['Formal vs. substantive defects', 'CX.1'],
	['Waivable vs. non-waivable objections', 'C117.5'],
	['Implied (ex delicto) civil action vs. independent civil action', 'C111.1'],
	['Trial in absentia vs. required presence', 'C115.3'],
	['Conviction vs. acquittal', 'C120.1']
];

const anchor = (id: string) => id.toLowerCase().replace(/\./g, '-');

export function renderComparisons(rules: RuleChapter[]) {
	const all = new Map<string, Comparison>();
	for (const c of [...rules.flatMap((r) => r.comparisons), ...prescriptionComparisons, formalVsSubstantive]) all.set(c.id, c);
	const ruleOf = (id: string) => rules.find((r) => r.comparisons.some((c) => c.id === id));

	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="comparisons">High-Yield Comparisons — Consolidated</h2>`);
	out.push(
		`<p class="sg-intro">Sixteen high-yield comparisons, each with its decisive distinction. Each pair links to the full table (meaning, legal basis, who may act, when, requirements, time limits, exceptions, consequences, exam trap, and a hypothetical showing how the difference changes the result).</p>`
	);
	out.push(h3('comparisons-index', 'The sixteen pairs at a glance'));
	out.push(
		table(
			['#', 'Pair', 'Decisive distinction', 'Where'],
			pairs.map(([label, id], i) => {
				const c = all.get(id);
				const r = ruleOf(id);
				return [
					`${i + 1}`,
					`<a href="#${anchor(id)}"><b>${label}</b></a>`,
					c ? c.decisive : '—',
					r ? `Rule ${r.n}` : id === 'CX.1' ? 'Below' : '—'
				];
			})
		)
	);
	out.push(h3('comparisons-more', 'Other comparisons'));
	const listed = new Set(pairs.map(([, id]) => id));
	const others = [...all.values()].filter((c) => !listed.has(c.id));
	out.push(
		table(
			['Comparison', 'Decisive distinction'],
			others.map((c) => [`<a href="#${anchor(c.id)}"><b>${c.id}</b> ${c.title}</a>`, c.decisive])
		)
	);
	out.push(h3('comparisons-formal-substantive', 'Formal vs. substantive defects of the information'));
	out.push(renderComparison(formalVsSubstantive));
	out.push(
		box(
			'yellow',
			'How to answer any compare-and-contrast question',
			p('Define each term in one sentence with its legal basis. Give three or four differences in parallel form (who, when, requirements, effect). End with the decisive distinction and a one-line example showing how the result changes.')
		)
	);
	return out.join('\n');
}
