/*
 * Front and back matter: the exam method with the updates since Tiu and the points to verify, the topic map and
 * reference inventory, and the last-minute sheet. Everything here is assembled from the Rule files, so counts and
 * links stay in step with the content.
 */
import { badge, box, dl, h3, h4, numberPractice, ol, p, slug, table, ul, type Practice, type RuleChapter } from './model';
import { allCases } from './cases';
import { mockItems } from './integrated';
import { quizzes } from './quizzes';
import { prescriptionCases, prescriptionComparisons, prescriptionDeadlines, prescriptionPractice } from './prescription';

/* ------------------------------------------------------------------ *
 * Shared data
 * ------------------------------------------------------------------ */

/** The ten steps for situational problems, with the trap each step most often catches in Rules 110–127. */
const METHOD: [string, string, string][] = [
	['1 · Identify the offense', 'What crime, and what law defines and penalizes it? The penalty drives jurisdiction, the need for preliminary investigation, bail and the prescriptive period.', 'Using the penalty actually imposed instead of the penalty prescribed by law.'],
	['2 · Identify the procedural stage', 'Complaint, preliminary investigation or inquest, arrest, bail, arraignment, motion to quash, pre-trial, trial or judgment?', 'Answering with a remedy that belongs to another stage (e.g., a motion to quash after plea on a waivable ground).'],
	['3 · Identify the actors', 'Who filed, who received, who investigated, who has authority to act?', 'Overlooking that the person who acted had no authority (e.g., a private complainant appealing the criminal aspect).'],
	['4 · Identify the legal requirement', 'What does the Rule, statute or controlling case require?', 'Reciting the general rule when a special Rule or law governs.'],
	['5 · Identify the date and the deadline', 'When did each act happen? Which period applies, and from what starting point?', 'Mixing procedural periods (extended to the next working day) with prescriptive periods (not extended).'],
	['6 · Was the act legally sufficient?', 'Right form, right recipient, right authority, right procedure?', 'Treating any filing as interrupting prescription without checking where it was filed.'],
	['7 · Check exceptions and special laws', 'Does a statute or a later decision change the rule?', 'Answering from Tiu (2017) where Consebido, Villa Gomez, Solar or the 2017 Guidelines changed the answer.'],
	['8 · Determine the consequence', 'Interrupted? Satisfied? Valid, defective, waivable, curable or ineffective?', 'Calling every procedural defect jurisdictional.'],
	['9 · Apply the rule to the facts', 'Explain why each material fact matters.', 'Restating the rule without using the facts.'],
	['10 · Reach a direct conclusion', 'Answer the question asked, with the remedy.', 'Ending with "it depends" without saying on what — and what the answer is on the given facts.']
];

const STAGES: [string, string][] = [
	['r110', 'Complaint or information is filed; prescription is interrupted; the information is drafted, amended or substituted'],
	['r111', 'The civil action rides with (or apart from) the criminal action'],
	['r112', 'Preliminary investigation or inquest; the prosecutor and then the judge find probable cause'],
	['r113', 'Arrest, with or without a warrant'],
	['r114', 'Bail — release pending trial'],
	['r115', 'Rights of the accused throughout'],
	['r116', 'Arraignment and plea; bill of particulars; suspension of arraignment'],
	['r117', 'Motion to quash before plea; double jeopardy; provisional dismissal'],
	['r118', 'Pre-trial'],
	['r119', 'Trial; discharge of a state witness; demurrer to evidence'],
	['r120', 'Judgment and promulgation'],
	['r121', 'Motion for new trial or reconsideration, before the conviction becomes final'],
	['r122', 'Appeal — who, where, how and when'],
	['r123', 'The same procedure in the first-level courts, with their exceptions'],
	['r124', 'The appeal in the Court of Appeals: briefs, dismissal, judgment, certification'],
	['r125', 'Final review in the Supreme Court'],
	['r126', 'Search and seizure — usually before the case, sometimes during it'],
	['r127', 'Provisional remedies securing the civil liability while the case is pending']
];

const STATUTES: [string, string, string][] = [
	['1987 Constitution', 'Art. III, Secs. 2 (warrants; personal determination by the judge), 3(2) (exclusionary rule), 12 (custodial rights), 13 (bail), 14 (rights of the accused; trial in absentia), 16 (speedy disposition), 17 (self-incrimination), 21 (double jeopardy); Art. VIII (rule-making; review of Ombudsman findings; Sec. 5[2][d] — SC review of cases with reclusion perpetua or higher; Sec. 14 — decisions state facts and law)', 'All Rules'],
	['Revised Penal Code', 'Arts. 89–91 (extinction; prescription of crimes; computation and interruption), 100–113 (civil liability), 125 (delay in delivery of detained persons), 266 (rape), 309–310 (penalties for theft, used by PD 705), 344 (private crimes), 360 (venue in libel, as amended by RA 4363), 365 (quasi-offenses)', '110, 111, 112, 113, 117, 120'],
	['Act No. 3326, as amended', 'Prescription of offenses under special laws and ordinances; interruption by proceedings against the offender', '110 · prescription module'],
	['Civil Code', 'Art. 13 (computation of periods); Arts. 29–35 (civil action despite acquittal; independent civil actions); Art. 2034 (compromise does not extinguish the public action); Arts. 2176–2177 (quasi-delict; no double recovery)', '111 · prescription module'],
	['Administrative Code of 1987', 'Book I, Sec. 31 (year = twelve calendar months; month = thirty days)', 'Prescription module · deadlines'],
	['Special penal laws', 'BP 22; RA 9165, Sec. 23 (struck down in Estipona); RA 10175 (cybercrime); PD 705, Secs. 77 and 80 (renumbered by RA 7161); RA 3019, Sec. 11 as amended by RA 10910; RA 7877; RA 8042; RA 8353; RA 10591; RA 9372 and RA 11479; RA 9369 (election offenses)', '110, 111, 116 · prescription module'],
	['Procedure-related statutes', 'RA 7438 (rights during custodial investigation); RA 6036 and RA 10389 (recognizance); RA 8493 (Speedy Trial Act); RA 6981 (witness protection); PD 749 (immunity in bribery cases); RA 6770 (Ombudsman Act); RA 8249 (Sandiganbayan); RA 7160, Secs. 408–410 (barangay conciliation); RA 9346 (no death penalty); PD 968 as amended by RA 10707 (probation); RA 10951 (amounts and fines); PD 1606 as amended by RA 7975, 8249 and 10660 (Sandiganbayan appeals; civil action always joined); RA 10863 (customs searches, formerly the Tariff and Customs Code)', '112–127'],
	['Supreme Court issuances', 'A.M. No. 05-8-26-SC (2005; judges no longer conduct preliminary investigation); A.M. No. 12-11-2-SC (2014; decongesting holding jails); A.M. No. 15-06-10-SC (2017 Revised Guidelines for Continuous Trial); A.M. No. 03-1-09-SC (pre-trial guidelines); A.M. No. 02-2-07-SC (2002; amended Rule 110, Sec. 5 on private prosecutors); A.M. No. 04-1-12-SC (enhanced pre-trial through conciliation and neutral evaluation); A.M. No. 18-03-16-SC and A.M. No. 21-07-16-SC (drug plea bargaining); A.M. No. 08-8-7-SC (2022 Rules on Expedited Procedures); A.M. No. 21-06-08-SC (body-worn cameras); A.M. No. 19-08-15-SC (2019 Rules of Evidence); A.M. No. 19-10-20-SC (2019 civil procedure amendments); A.M. No. 00-5-03-SC (2004; intermediate CA review after People v. Mateo); A.M. No. 99-10-09-SC and A.M. No. 03-8-02-SC, Sec. 12 (search warrants in special criminal cases by the Manila and Quezon City executive judges); A.M. No. 10-3-10-SC (2011 IP rules — writs of search and seizure); A.M. No. 03-03-03-SC (cybercrime courts) and A.M. No. 17-11-03-SC (2018 Rule on Cybercrime Warrants); A.M. No. 18-07-05-SC (2018 precautionary hold departure orders); OCA Circulars No. 39-2002 (who prosecutes in first-level courts when no prosecutor is available) and No. 265-2023 (warrant reporting)', '110–127'],
	['DOJ issuances', 'Department Order No. 153 (1996 Manual for Prosecutors); Department Circular No. 70 (2000 NPS Rule on Appeal); Circular No. 61 (1993 inquest rules); Department Circulars No. 015 and No. 028 (2024)', '110, 112']
];

/* ------------------------------------------------------------------ *
 * Aggregates
 * ------------------------------------------------------------------ */

interface Open {
	where: string;
	what: string;
}

function practiceOpen(prefix: string, items: Practice[]): Open[] {
	return numberPractice(prefix, items)
		.filter((n) => n.x.verify)
		.map((n) => ({ where: `<a href="#a-${slug(n.num)}">Problem ${n.num}</a>`, what: n.x.verify! }));
}

/** Every point in the module still marked "Verify", grouped by where it sits. */
export function openItems(rules: RuleChapter[]) {
	const groups: { group: string; href: string; items: Open[] }[] = rules.map((r) => ({
		group: `Rule ${r.n}`,
		href: r.id,
		items: [
			...r.sections.filter((s) => s.verify).map((s) => ({ where: `<a href="#${r.id}-sec-${slug(s.n)}">Sec. ${s.n}</a>`, what: s.verify! })),
			...r.enums.filter((e) => e.verify).map((e) => ({ where: `<a href="#${slug(e.id)}">${e.id}</a>`, what: e.verify! })),
			...r.cases.filter((c) => c.verify).map((c) => ({ where: `<a href="#case-${c.id}">${c.name}</a>`, what: c.verify! })),
			...r.deadlines.filter((d) => d.verify).map((d) => ({ where: `<a href="#${r.id}-deadlines">${d.ref}</a>`, what: d.verify! })),
			...practiceOpen(`${r.n}`, r.practice)
		]
	}));
	groups.push({
		group: 'Prescription module',
		href: 'prescription',
		items: [
			{ where: '<a href="#prescription-compute">Computing the period</a>', what: 'Whether months are counted as thirty days or as calendar months.' },
			...prescriptionCases.filter((c) => c.verify).map((c) => ({ where: `<a href="#case-${c.id}">${c.name}</a>`, what: c.verify! })),
			...prescriptionDeadlines.filter((d) => d.verify).map((d) => ({ where: `<a href="#prescription-deadlines">${d.ref}</a>`, what: d.verify! })),
			...practiceOpen('PR', prescriptionPractice)
		]
	});
	groups.push({ group: 'Mock examination', href: 'mock-answers', items: practiceOpen('M', mockItems) });
	return groups.filter((g) => g.items.length);
}

/** Counts used on the start page, in the quality-control checklist and in the final report. */
export function stats(rules: RuleChapter[]) {
	const practice = [...rules.flatMap((r) => r.practice), ...prescriptionPractice];
	const tf = (xs: Practice[]) => xs.filter((x) => x.cat === 'C' && x.tf !== undefined).length;
	const essays = (xs: Practice[]) => xs.filter((x) => x.alac && x.facts).length;
	return {
		sections: rules.reduce((n, r) => n + r.sections.length, 0),
		requisites: rules.reduce((n, r) => n + r.reqs.length, 0),
		enums: rules.reduce((n, r) => n + r.enums.length, 0),
		comparisons: rules.reduce((n, r) => n + r.comparisons.length, 0) + prescriptionComparisons.length + 1,
		cases: allCases(rules).length,
		deadlines: rules.reduce((n, r) => n + r.deadlines.length, 0) + prescriptionDeadlines.length,
		practice: practice.length,
		mock: mockItems.length,
		quiz: quizzes.reduce((n, z) => n + z.items.length, 0),
		mcqs: tf(practice) + tf(mockItems),
		essays: essays(practice) + essays(mockItems),
		sectionsWithExceptions: rules.reduce((n, r) => n + r.sections.filter((x) => x.exceptions).length, 0),
		corrections: rules.reduce((n, r) => n + (r.corrections?.length ?? 0), 0),
		open: openItems(rules).reduce((n, g) => n + g.items.length, 0)
	};
}

/* ------------------------------------------------------------------ *
 * Exam method and updates since Tiu
 * ------------------------------------------------------------------ */

export function renderStart(rules: RuleChapter[]) {
	const s = stats(rules);
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="start-here">Exam Method and Updates Since Tiu</h2>`);
	out.push(h3('start-method', 'The ten-step method for situational problems'));
	out.push(
		`<p class="sg-intro">Not every question needs all ten steps. The right-hand column is the trap each step most often catches in Rules 110–127.</p>`
	);
	out.push(table(['Step', 'Ask', 'Trap it catches'], METHOD.map(([a, b, c]) => [`<b>${a}</b>`, b, c])));
	out.push(
		box(
			'green',
			'Writing the answer — ALAC, with the IRAC parts',
			dl([
				['Answer', 'Yes / no / the result, in the first sentence.'],
				['Legal basis', 'The Rule and section, statute or case — with the requisites when the issue turns on them.'],
				['Application', 'Each material fact, matched to each requisite. Say which fact decides the case.'],
				['Conclusion', 'Restate the result and the remedy. If a missing fact would change it, say which one and how.']
			])
		)
	);
	out.push(
		p(
			'Answer keys follow Issue → Answer → Applicable rule → Explanation → Application → Conclusion, which serves both an IRAC and an ALAC answer. Blue box: why the tempting answer is wrong. Grey box: what a missing fact would change. Orange box: why it is a trap. Purple box: the textbook rule versus a later amendment.'
		)
	);

	out.push(h3('start-one-fact', 'One-fact variations — how examiners build traps'));
	out.push(
		table(
			['Change one fact…', '…and check'],
			[
				['Who received the complaint (prosecutor, agency legal officer, officer without authority, court, special-statute body)', 'Whether the filing interrupts prescription — <a href="#prescription-forestry">prescription case study</a>'],
				['The date (before, on, after the last day; a Sunday or holiday)', 'Procedural periods move to the next working day; prescriptive periods do not — <a href="#deadlines-kinds">four kinds of periods</a>'],
				['The penalty (by one degree, or by the amount involved)', 'Preliminary investigation, bail, jurisdiction, prescription, provisional-dismissal period'],
				['Whether the accused has been arraigned', 'Amendment, waiver of quash grounds, double jeopardy, trial in absentia'],
				['Who moved (accused or prosecution) and whether the accused consented', 'Double jeopardy, provisional dismissal, appeal'],
				['Whether a circumstance is alleged with its ultimate facts', 'Variance; qualifying circumstances (Solar); conviction for the offense charged or a lesser one'],
				['Whether the law is the RPC or a special law', 'Art. 90 vs. Act 3326; interruption rules; plea bargaining'],
				['Whether the offender was absent from the Philippines', 'Suspension of the prescriptive period (RPC offenses)']
			]
		)
	);
	out.push(`<p class="rv-source">Each Rule's part 8 has its own traps and one-fact variations; the prescription module has a sixteen-row variation ladder.</p>`);

	out.push(h3('start-labels', 'Source labels'));
	out.push(
		ul([
			`${badge("From Tiu's notes", 'neutral')} digested from the notes; not checked against the full decision.`,
			`${badge('Checked', 'blue')} read against the decision, the issuance or a reliable summary.`,
			`<b>⚠ Verify</b> not confirmed against the decision or the official text; ${s.open} are listed <a href="#start-verify">below</a>.`,
			'"Tiu, p. N" is the page in Tiu\'s notes. Provision text is summarized unless in quotation marks.'
		])
	);

	out.push(h3('start-updates', "What changed after Tiu's notes (2017)"));
	out.push(
		`<p class="sg-intro">All ${s.corrections} corrections from the Rule chapters.</p>`
	);
	out.push(
		table(
			['Rule', "Tiu (2017)", 'Now', 'Source'],
			rules.flatMap((r) => (r.corrections ?? []).map((c) => [`<a href="#${r.id}-traps">Rule ${r.n}</a>`, c.old, c.fix, `<span class="rv-cite">${c.source}</span>`]))
		)
	);

	out.push(h3('start-verify', 'Points to verify'));
	out.push(
		`<p class="sg-intro">Points not confirmed against the decision or the official text of the issuance.</p>`
	);
	for (const g of openItems(rules)) {
		out.push(h4(`<a href="#${g.href}">${g.group}</a> · ${g.items.length}`));
		out.push(table(['Where', 'What to verify'], g.items.map((i) => [i.where, i.what])));
	}
	return out.join('\n');
}

/* ------------------------------------------------------------------ *
 * Part I — preliminary deliverables
 * ------------------------------------------------------------------ */

export function renderPrelim(rules: RuleChapter[]) {
	const byId = new Map(rules.map((r) => [r.id, r]));
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="prelim">Topic Map and Reference Inventory</h2>`);

	out.push(h3('prelim-map', 'Topic map — the life of a criminal case'));
	out.push(
		ol(
			STAGES.map(([id, stage]) => {
				const r = byId.get(id)!;
				return `<a href="#${id}"><b>Rule ${r.n} — ${r.title}</b></a>: ${stage}.`;
			})
		)
	);
	out.push(
		table(
			['Rule', 'Stage', 'Sections'],
			rules.map((r) => [
				`<a href="#${r.id}"><b>Rule ${r.n}</b></a><br>${r.title}`,
				r.stage,
				r.sections.map((s) => `<a href="#${r.id}-sec-${slug(s.n)}">${s.n}</a> ${s.title}`).join('<br>')
			])
		)
	);

	out.push(h3('prelim-doctrines', 'Major doctrines and procedural requirements, Rule by Rule'));
	for (const r of rules) {
		out.push(h4(`<a href="#${r.id}">Rule ${r.n} — ${r.title}</a>`));
		out.push(ul(r.principles));
	}

	out.push(h3('prelim-deadlines', 'Deadlines, periods, exceptions and consequences'));
	out.push(
		`<p class="sg-intro">One line each. The full matrix (responsible person, starting point, exceptions) is in the <a href="#deadlines-matrix">deadlines matrix</a>.</p>`
	);
	for (const r of rules) {
		if (!r.deadlines.length) continue;
		out.push(h4(`<a href="#${r.id}-deadlines">Rule ${r.n}</a>`));
		out.push(ul(r.deadlines.map((d) => `<b>${d.period}</b> — ${d.act} (${d.ref}). <i>Exceptions:</i> ${d.exceptions} <i>If missed:</i> ${d.effect}`)));
	}
	out.push(h4('<a href="#prescription-deadlines">Prescription of offenses</a>'));
	out.push(ul(prescriptionDeadlines.map((d) => `<b>${d.period}</b> — ${d.act} (${d.ref}). <i>If missed:</i> ${d.effect}`)));

	out.push(h3('prelim-confused', 'Most commonly confused concepts'));
	out.push(
		`<p class="sg-intro">Each pair has a full nine-row table in its Rule. The most tested pairs, with their decisive distinctions, are in the <a href="#comparisons">consolidated comparisons</a>.</p>`
	);
	out.push(
		table(
			['Rule', 'Pairs'],
			[
				...rules.map((r) => [`<a href="#${r.id}-compare">Rule ${r.n}</a>`, r.comparisons.map((c) => `<a href="#${slug(c.id)}">${c.title}</a>`).join('<br>')]),
				['<a href="#prescription-compare">Prescription</a>', prescriptionComparisons.map((c) => `<a href="#${slug(c.id)}">${c.title}</a>`).join('<br>')],
				['<a href="#comparisons-formal-substantive">All Rules</a>', '<a href="#cx-1">Formal vs. substantive defect of the information</a>']
			]
		)
	);

	out.push(h3('prelim-cases', 'Cases'));
	const cases = allCases(rules);
	out.push(
		`<p class="sg-intro">${cases.length} cases, each digested once in the Rule where it matters most. The <a href="#case-review">case review</a> gives each one's doctrine in a line.</p>`
	);
	out.push(
		table(
			['Where digested', 'Cases'],
			[
				...rules.map((r) => [`<a href="#${r.id}-cases">Rule ${r.n}</a> · ${r.cases.length}`, r.cases.map((c) => `<a href="#case-${c.id}">${c.name}</a>`).join(' · ')]),
				[`<a href="#prescription-cases">Prescription</a> · ${prescriptionCases.length}`, prescriptionCases.map((c) => `<a href="#case-${c.id}">${c.name}</a>`).join(' · ')]
			]
		)
	);

	out.push(h3('prelim-statutes', 'Statutes, rules and issuances'));
	out.push(table(['Source', 'Provisions used', 'Rules'], STATUTES.map(([a, b, c]) => [`<b>${a}</b>`, b, c])));

	return out.join('\n');
}

/* ------------------------------------------------------------------ *
 * Last-minute sheet and quality control
 * ------------------------------------------------------------------ */

export function renderLastMinute(rules: RuleChapter[]) {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="last-minute">Last-Minute Review Sheet</h2>`);

	out.push(h3('last-rules', 'Each Rule in a few lines'));
	for (const r of rules) {
		out.push(h4(`<a href="#${r.id}">Rule ${r.n} — ${r.title}</a>`));
		out.push(`<div class="rv-summary">${ul(r.sheet)}</div>`);
	}

	out.push(h3('last-traps', 'Two traps per Rule'));
	out.push(
		table(
			['Rule', 'Tempting answer', 'Correct rule'],
			rules.flatMap((r) => r.traps.slice(0, 2).map((t) => [`<a href="#${r.id}-traps">${r.n}</a>`, t.wrong, t.right]))
		)
	);

	out.push(h3('last-reminders', 'Exam-room reminders'));
	out.push(
		ul(
			[
				'Find the stage first. A defect raised at the wrong stage is usually waived.',
				'Before you call a defect fatal, ask: waivable, curable or jurisdictional? Only lack of jurisdiction over the offense, failure to charge an offense, extinction and double jeopardy survive the plea (Rule 117, Sec. 9).',
				'Label every period: procedural (next working day), prescriptive (no extension), detention (hours) or constitutional. Write the start date and the end date.',
				'Prescription: which law (Art. 90 or Act 3326), which date (commission or discovery), which office received the complaint, and when it was filed relative to Consebido (April 2, 2025).',
				'Arraignment is the hinge: amendments, waivers, jeopardy and trial in absentia all turn on it.',
				'Never let a private complainant appeal the criminal aspect — only the civil aspect.',
				'Where Tiu (2017) and a later ruling differ, give the current rule and say what changed.',
				'End every answer with a direct conclusion. If a missing fact would change it, say which one.'
			],
			'rv-check'
		)
	);
	out.push(
		p(
			'Numbers to memorize: <a href="#deadlines-numbers">deadlines matrix</a>. Prescriptive periods: <a href="#prescription-deadlines">prescription module</a>. Post-2017 cases: <a href="#case-review-timeline">case timeline</a>. Updates: <a href="#start-updates">what changed after Tiu</a>.'
		)
	);

	return out.join('\n');
}
