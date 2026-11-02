/*
 * Part VIII — case law review, organized by Rule and cross-referenced. Each row links to the full digest in its
 * Rule chapter (or the prescription module); nothing is digested twice.
 */
import { badge, h3, plain, ruleLink, table, type CaseStudy, type RuleChapter } from './model';
import { prescriptionCases } from './prescription';

const firstSentence = (html: string) => {
	const t = plain(html);
	const m = t.match(/^(.+?[.;])(\s|$)/);
	return m ? m[1] : t;
};

function caseRows(cases: CaseStudy[]) {
	return cases.map((c) => [
		`<a href="#case-${c.id}"><b>${c.name}</b></a><br><span class="rv-cite">${c.cite}</span>`,
		firstSentence(c.doctrine),
		c.also?.length ? c.also.map((id) => ruleLink(id)).join(', ') : '—',
		c.verify ? badge('Verify', 'orange') : c.from === 'Tiu' ? badge('Tiu', 'neutral') : badge('Checked', 'blue')
	]);
}

/** All case cards in the module, for counts and the start-page inventory. */
export function allCases(rules: RuleChapter[]) {
	return [...rules.flatMap((r) => r.cases.map((c) => ({ rule: r, c }))), ...prescriptionCases.map((c) => ({ rule: undefined, c }))];
}

export function renderCaseReview(rules: RuleChapter[]) {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="case-review">Case Law Review — by Rule</h2>`);
	out.push(
		`<p class="sg-intro">Every case digested in the Rule chapters, grouped by the Rule where its full digest sits, with its core doctrine in one line and the other Rules it bears on. Each links to its full digest (facts, issue, ruling, doctrine, reasoning, arguments not adopted, hypothetical and likely exam question). "Tiu" = digested from the notes; "Checked" = read against the decision or a reliable summary; "Verify" = a citation or fact still to be confirmed.</p>`
	);
	const head = ['Case', 'Core doctrine', 'Also relevant to', 'Source'];
	for (const r of rules) {
		if (!r.cases.length) continue;
		out.push(h3(`case-review-${r.id}`, `Rule ${r.n} — ${r.title}`));
		out.push(table(head, caseRows(r.cases)));
		if (r.id === 'r110') {
			out.push(h3('case-review-prescription', 'Prescription module (Rule 110, Sec. 1)'));
			out.push(table(head, caseRows(prescriptionCases)));
		}
	}
	out.push(h3('case-review-timeline', 'Cases decided after Tiu\'s notes (2017) that change the answer'));
	out.push(
		table(
			['Year', 'Case', 'What changed'],
			[
				['2018', '<a href="#case-cagang">Cagang v. Sandiganbayan</a>', 'Speedy disposition: delay counted from the formal complaint; fact-finding excluded; timely assertion required.'],
				['2018', '<a href="#case-gatchalian">Gatchalian v. Ombudsman</a>', 'Ombudsman criminal probable-cause findings reviewed by Rule 65 in the Supreme Court.'],
				['2019', '<a href="#case-solar">People v. Solar</a>', 'Qualifying circumstances must be alleged with ultimate facts; bare labels waivable.'],
				['2019', '<a href="#case-lee">People v. Lee</a>', 'Ombudsman complaint tolls special-law prescription; Jadewell limited to ordinances.'],
				['2020', '<a href="#case-villa-gomez">Villa Gomez v. People</a>', 'Lack of authority of the filing officer is not jurisdictional; waivable.'],
				['2022', '<a href="#case-montierro">People v. Montierro</a>', 'Courts may overrule prosecution objections to drug plea bargains based solely on inconsistent DOJ circulars.'],
				['2023', '<a href="#case-corpus">Corpus v. People</a>', 'No conviction for a lesser offense prescribed when the information was filed.'],
				['2023 / 2026', '<a href="#case-causing">Causing v. People</a>', 'Cyber libel prescribes in one year.'],
				['2025', '<a href="#case-consebido">People v. Consebido</a>', 'Filing with the DOJ tolls prescription even for Expedited-Rules offenses, prospectively; Desierto and Corpus abandoned on that point.']
			]
		)
	);
	out.push(`<p class="rv-source">Also after 2017 but before the cut-off of most reviewers: <a href="#case-estipona">Estipona v. Lobrigo</a> (August 2017) — RA 9165, Sec. 23 struck down.</p>`);
	return out.join('\n');
}
