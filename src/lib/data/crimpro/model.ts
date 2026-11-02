/*
 * Content model + HTML renderers for the Criminal Procedure reviewer (Rules 110–127). Each Rule file holds
 * its content as data; this file turns it into the study-guide HTML, the true-or-false MCQs and the
 * situational essays, so a question and its answer can never drift apart and the master matrices
 * (deadlines, cases, comparisons) are generated from the same data the Rule chapters show.
 *
 * All strings are trusted, first-party HTML (inline <b>, <i>, <em> are fine). Never put "<h2" inside
 * content: the reader (src/lib/content.ts) splits the guide into parts on that tag.
 */
import type { AlacEssay, McqQuestion, McqTag } from '$lib/types';
import { badge, box, dl, flashcards, h3, h4, ol, p, plain, table, ul, type Alac, type Color, type Level } from '$lib/data/statcon2/model';

export { badge, box, dl, flashcards, h3, h4, ol, p, plain, table, ul };
export type { Alac, Color, Level };

/** Question categories. */
export type Cat = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export const CATS: Record<Cat, string> = {
	A: 'Enumeration and brief discussion',
	B: 'Compare and contrast',
	C: 'True or false with justification',
	D: 'Short situational problems',
	E: 'Tricky hypothetical problems',
	F: 'Case-based questions',
	G: 'Integrated problems within the Rule'
};
export const CAT_ORDER: Cat[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
export const LEVELS: Record<Level, string> = { 1: 'Recall', 2: 'Explanation', 3: 'Distinguishing', 4: 'Application', 5: 'Tricky' };

/* ------------------------------------------------------------------ *
 * Content types
 * ------------------------------------------------------------------ */

/** One section of the Rule, discussed in ten parts. */
export interface Section {
	/** Section number as printed, e.g. "1", "5", "13". */
	n: string;
	title: string;
	/** What the section provides. A summary in plain terms unless the text says it is quoted; quoted words come from the Rules as reproduced in Tiu's notes. */
	text: string;
	plain: string;
	reqs?: string;
	who?: string;
	when?: string;
	exceptions?: string;
	effect?: string;
	cases?: string;
	hypo?: string;
	trap?: string;
	/** Amendment or later development that changes what Tiu (2017) says. */
	update?: string;
	verify?: string;
}

export type Defect = 'Waivable' | 'Curable' | 'Waivable and curable' | 'Not waivable' | 'Jurisdictional' | 'Depends on the defect';
const DEFECT_COLOR: Record<Defect, Color> = {
	Waivable: 'green',
	Curable: 'blue',
	'Waivable and curable': 'green',
	'Not waivable': 'orange',
	Jurisdictional: 'red',
	'Depends on the defect': 'purple'
};

/** Requisites analysis: what, who, when, where, form, if missing, and the nature of the defect. */
export interface Requisite {
	name: string;
	source: string;
	what: string;
	who: string;
	when: string;
	where?: string;
	form?: string;
	missing: string;
	defect: Defect;
	defectNote: string;
}

export interface EnumItem {
	/** The item as you would write it in the list. */
	t: string;
	/** Brief discussion: 1–3 sentences. */
	d: string;
	/** One-line exam phrasing used in the model answer. */
	s: string;
	/** Optional short example. */
	x?: string;
}

/** rule = express list in the Rules of Court; issuance = list in a Supreme Court or DOJ issuance (A.M., circular); law = statute or Constitution; case = stated by the Court; notes = list as organized in Tiu's notes; teaching = a study grouping, not an official list. */
export type EnumKind = 'rule' | 'issuance' | 'law' | 'case' | 'notes' | 'teaching';
const KIND_LABEL: Record<EnumKind, string> = {
	rule: 'Express list in the Rules of Court',
	issuance: 'Express list in a Supreme Court or DOJ issuance',
	law: 'Express list in a statute or the Constitution',
	case: 'List stated by the Supreme Court',
	notes: "List as organized in Tiu's notes",
	teaching: 'Teaching list — not an official enumeration'
};

export interface Enumeration {
	id: string;
	name: string;
	source: string;
	kind: EnumKind;
	ordered?: boolean;
	memorize?: boolean;
	/** Lead-in sentence for the model answer, e.g. "The requisites are". */
	lead: string;
	items: EnumItem[];
	exceptions?: string;
	memory?: string;
	tip?: string;
	question: string;
	verify?: string;
}

type Pair = [string, string];
/** Comparison table with nine rows, then the decisive distinction and a hypothetical. */
export interface Comparison {
	id: string;
	title: string;
	a: string;
	b: string;
	meaning: Pair;
	basis: Pair;
	who: Pair;
	when: Pair;
	reqs: Pair;
	time: Pair;
	exceptions: Pair;
	effect: Pair;
	trap: Pair;
	decisive: string;
	/** Hypothetical showing how the difference changes the result. */
	hypo: string;
}

export interface CaseStudy {
	/** Anchor id without the "case-" prefix. */
	id: string;
	name: string;
	cite: string;
	/** Where the digest comes from: Tiu's notes, or a decision text / summary it was checked against. */
	from: 'Tiu' | 'Checked' | 'Tiu + checked';
	facts: string;
	issue: string;
	ruling: string;
	doctrine: string;
	reasoning: string;
	/** Procedural rule involved. */
	rule: string;
	/** Arguments raised by a party that the Court did not adopt — keep these apart from the holding. */
	args?: string;
	hypo: string;
	examQ: string;
	/** Other Rules where the case matters (ids like "r117"), for the cross-referenced case review. */
	also?: string[];
	verify?: string;
}

export interface Deadline {
	ref: string;
	act: string;
	who: string;
	period: string;
	start: string;
	exceptions: string;
	effect: string;
	/** procedural = a period inside the case; prescriptive = extinguishes the State's right to prosecute; custodial = limits on detention; constitutional = from the Constitution or a law on speedy trial. */
	kind: 'procedural' | 'prescriptive' | 'custodial' | 'constitutional';
	/** Calendar days unless stated. */
	days?: string;
	verify?: string;
}

export interface Trap {
	wrong: string;
	right: string;
	example: string;
}

export interface Correction {
	old: string;
	fix: string;
	source: string;
}

export interface Practice {
	cat: Cat;
	level: Level;
	topic: string;
	/** The question. For C, the proposition to be judged true or false. */
	q: string;
	facts?: string;
	/** For C: whether the proposition is true. */
	tf?: boolean;
	/** Short, timed-exam version. */
	short?: string;
	issue?: string;
	/** Answer, applicable rule (legal basis), application, conclusion. */
	alac?: Alac;
	/** Explanation (the "E" of the answer key), or the full model answer for list and comparison items. */
	a?: string;
	/** Why the tempting answer is wrong. */
	tempting?: string;
	/** Missing facts that would change the answer. */
	missing?: string;
	/** Why this is a trap. */
	trap?: string;
	/** Textbook rule versus later amendment or ruling. */
	update?: string;
	keys?: string;
	/** Rules involved — shown in the answer key only (integrated exam). */
	rules?: string;
	/** A point in the answer that could not be checked against the source. */
	verify?: string;
	tag?: McqTag;
	/** Short title when exported as an essay. */
	title?: string;
}

export interface RuleChapter {
	id: string;
	n: number;
	title: string;
	short: string;
	/** Where the Rule sits in Tiu's notes. */
	tiu: string;
	plain: string;
	purpose: string;
	stage: string;
	questions: string[];
	relations: string;
	principles: string[];
	sections: Section[];
	reqs: Requisite[];
	enums: Enumeration[];
	comparisons: Comparison[];
	cases: CaseStudy[];
	deadlines: Deadline[];
	traps: Trap[];
	corrections?: Correction[];
	practice: Practice[];
	memorize: string[];
	flashcards: [string, string][];
	oral: [string, string][];
	checklist: string[];
	/** Five to eight lines for the review sheet. */
	sheet: string[];
	watchFor: string;
}

/* ------------------------------------------------------------------ *
 * Small helpers
 * ------------------------------------------------------------------ */

export const slug = (id: string) => id.toLowerCase().replace(/\./g, '-').replace(/[()]/g, '');
export const ruleLink = (id: string, part?: string, label?: string) => `<a href="#${part ? `${id}-${part}` : id}">${label ?? `Rule ${id.slice(1)}`}</a>`;
export const caseLink = (id: string, name: string) => `<a href="#case-${id}">${name}</a>`;
export const verifyNote = (s?: string) => (s ? `<p class="rv-verify">⚠ Verify: ${s}</p>` : '');

const DEADLINE_KIND: Record<Deadline['kind'], [string, Color]> = {
	procedural: ['Procedural period', 'blue'],
	prescriptive: ['Prescriptive period', 'red'],
	custodial: ['Detention limit', 'orange'],
	constitutional: ['Constitutional / speedy-trial', 'purple']
};
export const deadlineKind = (d: Deadline) => badge(...DEADLINE_KIND[d.kind]);

/* ------------------------------------------------------------------ *
 * Block renderers
 * ------------------------------------------------------------------ */

/** Issue, Answer, Applicable rule, Explanation, Application, Conclusion — the IRAC and ALAC formats in one block. */
export function renderAnswerBlock(x: Practice) {
	const row = (cls: string, letter: string, name: string, body?: string) =>
		body ? `<div class="rv-alac-row"><span class="rv-alac-k rv-alac-${cls}">${letter}</span><div><b>${name}.</b> ${body}</div></div>` : '';
	const a = x.alac;
	if (!a) return '';
	return `<div class="rv-alac">${row('i', 'I', 'Issue', x.issue)}${row('a', 'A', 'Answer', a.answer)}${row('l', 'L', 'Applicable rule (legal basis)', a.legalBasis)}${row('e', 'E', 'Explanation', x.a)}${row('p', 'A', 'Application', a.application)}${row('c', 'C', 'Conclusion', a.conclusion)}</div>`;
}

export function renderSection(ruleId: string, s: Section) {
	return `<div class="rv-card rv-section" id="${ruleId}-sec-${slug(s.n)}">
<p class="rv-card-title"><span class="rv-num">Sec. ${s.n}</span> ${s.title}</p>
${box('neutral', '1 · What the section provides', p(s.text))}
${box('yellow', '2 · In plain English', p(s.plain))}
${dl([
	['3 · Requirements', s.reqs],
	['4 · Persons involved', s.who],
	['5 · Deadlines and time limits', s.when],
	['6 · Exceptions', s.exceptions],
	['7 · Consequences', s.effect],
	['8 · Jurisprudence', s.cases]
])}
${s.hypo ? box('purple', '9 · Hypothetical', p(s.hypo)) : ''}
${s.trap ? box('orange', '10 · Exam trap', p(s.trap)) : ''}
${s.update ? box('blue', 'Update since Tiu (2017)', p(s.update)) : ''}
${verifyNote(s.verify)}
</div>`;
}

export function renderRequisite(r: Requisite) {
	return `<div class="rv-card"><p class="rv-card-title">${r.name}</p><p class="rv-meta">${badge(`Defect: ${r.defect}`, DEFECT_COLOR[r.defect])}</p><p class="rv-source"><b>Source:</b> ${r.source}</p>${dl([
		['What must be done', r.what],
		['Who must do it', r.who],
		['When', r.when],
		['Where', r.where],
		['Form', r.form],
		['If it is missing', r.missing]
	])}${box(DEFECT_COLOR[r.defect], `Waivable, curable or jurisdictional?`, p(r.defectNote))}</div>`;
}

export function renderEnumeration(e: Enumeration) {
	const items = e.items;
	const skeleton = ol(items.map((i) => i.t), 'rv-skeleton');
	const discussion = ol(items.map((i) => `<b>${i.t}.</b> ${i.d}${i.x ? ` <span class="rv-ex"><i>Example:</i> ${i.x}</span>` : ''}`));
	const model = `<p>${e.lead}: ${items.map((i, k) => `(${k + 1}) <b>${i.t}</b> — ${i.s}`).join('; ')}.</p>`;
	return `<div class="rv-card rv-enum" id="${slug(e.id)}">
<p class="rv-card-title"><span class="rv-num">${e.id}</span> ${e.name}</p>
<p class="rv-meta">${badge(KIND_LABEL[e.kind], e.kind === 'teaching' ? 'neutral' : e.kind === 'notes' ? 'blue' : 'yellow')}${e.ordered ? badge('Order matters', 'green') : ''}${e.memorize ? badge('Must memorize', 'red') : ''}${badge(`${items.length} items`)}</p>
<p class="rv-source"><b>Source:</b> ${e.source}</p>
${verifyNote(e.verify)}
${h4('Complete list')}${skeleton}
${h4('Brief discussion of each item')}${discussion}
${e.exceptions ? box('blue', 'Exceptions and qualifications', p(e.exceptions)) : ''}
${e.memory ? box('yellow', 'Memory aid', p(e.memory)) : ''}
${e.tip ? box('orange', 'Exam tip', p(e.tip)) : ''}
${h4('Sample exam question')}<p class="rv-question">${e.question}</p>
${box('green', 'Model answer', model)}
</div>`;
}

export function renderComparison(c: Comparison) {
	const rows: [string, Pair][] = [
		['Meaning', c.meaning],
		['Legal basis', c.basis],
		['Who may act', c.who],
		['When applicable', c.when],
		['Requirements', c.reqs],
		['Time limits', c.time],
		['Exceptions', c.exceptions],
		['Consequences', c.effect],
		['Examination trap', c.trap]
	];
	return `<div class="rv-cmp" id="${slug(c.id)}">
<p class="rv-card-title"><span class="rv-num">${c.id}</span> ${c.title}</p>
${table(['Point of comparison', c.a, c.b], rows.map(([k, [a, b]]) => [`<span class="aspect">${k}</span>`, a, b]), 'cmp-table')}
${box('yellow', 'The decisive distinction', p(c.decisive))}
${box('purple', 'How the difference changes the result', p(c.hypo))}
</div>`;
}

export function renderCase(c: CaseStudy) {
	return `<div class="rv-card rv-caselink" id="case-${c.id}">
<p class="rv-card-title">${c.name}</p>
<p class="rv-meta"><span class="rv-cite">${c.cite}</span>${badge(c.from === 'Tiu' ? "From Tiu's notes" : c.from === 'Checked' ? 'Checked' : "Tiu's notes + checked", c.from === 'Tiu' ? 'neutral' : 'blue')}</p>
${verifyNote(c.verify)}
${dl([
	['Facts', c.facts],
	['Issue', c.issue],
	['Ruling', c.ruling]
])}
${box('red', 'Doctrine', p(c.doctrine))}
${dl([
	['Reasoning', c.reasoning],
	['Procedural rule involved', c.rule],
	["Parties' arguments the Court did not adopt", c.args]
])}
${box('purple', 'Hypothetical application', p(c.hypo))}
<p class="rv-question"><b>Likely exam question:</b> ${c.examQ}</p>
</div>`;
}

export function deadlineTable(ds: Deadline[]) {
	return table(
		['Rule / Section', 'Act', 'Responsible', 'Period', 'Starting point', 'Exceptions', 'Consequence'],
		ds.map((d) => [
			`<b>${d.ref}</b><br>${deadlineKind(d)}`,
			d.act,
			d.who,
			`<b>${d.period}</b>${d.days ? `<br><span class="rv-cite">${d.days}</span>` : ''}`,
			d.start,
			d.exceptions,
			`${d.effect}${verifyNote(d.verify)}`
		])
	);
}

/* ------------------------------------------------------------------ *
 * Practice questions and answers
 * ------------------------------------------------------------------ */

function qHead(num: string, x: Practice, showRules = false) {
	return `<div class="rv-qhead"><span class="rv-num">${num}</span>${badge(`Level ${x.level} · ${LEVELS[x.level]}`, x.level >= 4 ? 'purple' : 'neutral')}${badge(x.topic)}${showRules && x.rules ? badge(x.rules, 'blue') : ''}</div>`;
}

const qid = (num: string) => `q-${slug(num)}`;
const aid = (num: string) => `a-${slug(num)}`;

function questionBody(x: Practice) {
	return x.cat === 'C'
		? `<p class="rv-question">True or false? Justify your answer.</p><blockquote class="rv-prop">${x.q}</blockquote>`
		: `${x.facts ? `<div class="rv-facts">${p(x.facts)}</div>` : ''}<p class="rv-question">${x.q}</p>`;
}

export function renderQuestion(num: string, x: Practice) {
	return `<div class="rv-q" id="${qid(num)}">${qHead(num, x)}${questionBody(x)}<p class="rv-jump"><a href="#${aid(num)}">Answer ↓</a></p></div>`;
}

/** The model answer alone. */
export function answerBody(x: Practice) {
	const parts: string[] = [];
	if (x.cat === 'C' && x.tf !== undefined) parts.push(`<p class="rv-verdict rv-${x.tf ? 'true' : 'false'}">${x.tf ? 'TRUE' : 'FALSE'}</p>`);
	if (x.short) parts.push(box('green', 'Short exam answer', p(x.short)));
	if (x.alac) parts.push(renderAnswerBlock(x));
	else if (x.a) parts.push(x.short ? `<div class="rv-expanded"><span class="rv-label">Explanation</span>${p(x.a)}</div>` : p(x.a));
	if (x.tempting) parts.push(box('blue', 'Why the tempting answer is wrong', p(x.tempting)));
	if (x.missing) parts.push(box('neutral', 'Missing facts that would change the answer', p(x.missing)));
	if (x.trap) parts.push(box('orange', 'Why this is a trap', p(x.trap)));
	if (x.update) parts.push(box('purple', 'Textbook rule vs. later amendment', p(x.update)));
	if (x.keys) parts.push(`<p class="rv-keys"><b>Must-have keywords:</b> ${x.keys}</p>`);
	if (x.verify) parts.push(verifyNote(x.verify));
	return parts.join('');
}

export function renderAnswer(num: string, x: Practice, showRules = false) {
	const echo = x.cat === 'C' ? `<blockquote class="rv-prop">${x.q}</blockquote>` : `<p class="rv-echo">${x.q}</p>`;
	return `<div class="rv-ans" id="${aid(num)}">${qHead(num, x, showRules)}${echo}${answerBody(x)}<p class="rv-jump"><a href="#${qid(num)}">↑ Back to question</a></p></div>`;
}

/** Sorts a bank by category (A–G) then level, and numbers it `<prefix>.<n>`. Numbering is for display only; saved progress uses separate IDs. */
export function numberPractice(prefix: string, items: Practice[]) {
	const sorted = CAT_ORDER.flatMap((cat) => items.filter((x) => x.cat === cat).sort((a, b) => a.level - b.level));
	return sorted.map((x, i) => ({ num: `${prefix}.${i + 1}`, x }));
}

export function renderPracticeSets(prefix: string, items: Practice[], labels: Partial<Record<Cat, string>> = {}) {
	const numbered = numberPractice(prefix, items);
	const out: string[] = [];
	for (const cat of CAT_ORDER) {
		const inCat = numbered.filter((n) => n.x.cat === cat);
		if (!inCat.length) continue;
		out.push(h4(`Category ${cat} — ${labels[cat] ?? CATS[cat]}`));
		out.push(...inCat.map((n) => renderQuestion(n.num, n.x)));
	}
	return out.join('\n');
}

export function renderAnswerKey(prefix: string, items: Practice[], showRules = false, labels: Partial<Record<Cat, string>> = {}) {
	const numbered = numberPractice(prefix, items);
	const out: string[] = [];
	for (const cat of CAT_ORDER) {
		const inCat = numbered.filter((n) => n.x.cat === cat);
		if (!inCat.length) continue;
		out.push(h4(`Category ${cat} — ${labels[cat] ?? CATS[cat]}`));
		out.push(...inCat.map((n) => renderAnswer(n.num, n.x, showRules)));
	}
	return out.join('\n');
}

/** Three timed sets drawn from the bank, by item number. */
/* ------------------------------------------------------------------ *
 * Rule chapter renderer
 * ------------------------------------------------------------------ */

export function renderRule(r: RuleChapter) {
	const id = (s: string) => `${r.id}-${s}`;
	const P = `${r.n}`;
	const out: string[] = [];

	out.push(`<h2 class="sg-h2" id="${r.id}">Rule ${r.n} — ${r.title}</h2>`);
	out.push(
		`<p class="sg-intro">Tiu's notes, ${r.tiu}.</p>`
	);

	// 1 · Overview
	out.push(h3(id('overview'), '1 · Overview'));
	out.push(box('neutral', 'In plain English', p(r.plain)));
	out.push(dl([
		['Purpose of the Rule', r.purpose],
		['Stage of the criminal process', r.stage]
	]));
	out.push(h4('Questions this Rule answers'), ul(r.questions));
	out.push(h4('Relationship with the other Rules'), p(r.relations));
	out.push(h4('Key principles'), ul(r.principles));

	// 2 · Sections
	out.push(h3(id('sections'), '2 · Section-by-section discussion'));
	out.push(
		`<p class="sg-intro">Each section in ten parts: what it provides, plain English, requirements, persons, deadlines, exceptions, consequences, jurisprudence, a hypothetical and the exam trap. Provision text is summarized unless quotation marks show otherwise.</p>`
	);
	out.push(`<p class="rv-source">${r.sections.map((s) => `<a href="#${r.id}-sec-${slug(s.n)}">Sec. ${s.n}</a>`).join(' · ')}</p>`);
	out.push(...r.sections.map((s) => renderSection(r.id, s)));

	// 3 · Requisites
	out.push(h3(id('requisites'), '3 · Requisites — and what happens if one is missing'));
	out.push(
		`<p class="sg-intro">Not every procedural defect is jurisdictional. Each card says whether the defect can be waived by not objecting in time, cured by amendment or later compliance, or goes to jurisdiction.</p>`
	);
	out.push(...r.reqs.map(renderRequisite));

	// 4 · Enumerations
	out.push(h3(id('enumerations'), '4 · Enumerations with brief discussion'));
	out.push(
		`<p class="sg-intro">Every list in Rule ${r.n}. Each card says whether it is an express list in the Rules or a law, a list stated by the Court, or a teaching list.</p>`
	);
	out.push(...r.enums.map(renderEnumeration));

	// 5 · Comparisons
	out.push(h3(id('compare'), '5 · Comparison tables'));
	out.push(...r.comparisons.map(renderComparison));

	// 6 · Cases
	out.push(h3(id('cases'), '6 · Case integration'));
	out.push(
		`<p class="sg-intro">Holding and doctrine are kept apart from what the parties argued. Cases marked "From Tiu's notes" are digested from the notes; cases marked "Checked" were read against the decision or a reliable summary.</p>`
	);
	out.push(...(r.cases.length ? r.cases.map(renderCase) : [p(`No case is digested under Rule ${r.n} in Tiu's notes; the doctrines that apply are cited in the section cards and linked to their digests in other Rules.`)]));

	// 7 · Deadlines
	out.push(h3(id('deadlines'), '7 · Deadlines and periods in this Rule'));
	if (r.deadlines.length) {
		out.push(`<p class="sg-intro">All of these also appear in the <a href="#deadlines">master deadlines matrix</a>.</p>`);
		out.push(deadlineTable(r.deadlines));
	} else {
		out.push(p(`Rule ${r.n} sets no periods of its own; the periods that apply come from the Rules it incorporates (see the <a href="#deadlines">master deadlines matrix</a>).`));
	}

	// 8 · Traps
	out.push(h3(id('traps'), '8 · Exam traps and one-fact variations'));
	out.push(table(['#', 'Tempting answer', 'Correct rule', 'Illustration'], r.traps.map((t, i) => [`${i + 1}`, t.wrong, t.right, t.example])));
	if (r.corrections?.length) {
		out.push(
			box(
				'blue',
				`What changed after Tiu's notes (2017)`,
				ul(r.corrections.map((c) => `<b>Tiu (2017):</b> ${c.old}<br><b>Now:</b> ${c.fix}<br><span class="rv-cite">${c.source}</span>`))
			)
		);
	}

	// 9 · Problem bank
	out.push(h3(id('practice'), '9 · Problem bank'));
	out.push(
		`<p class="sg-intro">Categories A–G; within each category, Level 1 (recall) to Level 5 (tricky).</p>`
	);
	out.push(renderPracticeSets(P, r.practice));

	// 10 · Answer key
	out.push(h3(id('answers'), '10 · Answer key'));
	out.push(
		`<p class="sg-intro">Numbers match part 9. Situational answers use Issue → Answer → Applicable rule → Explanation → Application → Conclusion, which covers both IRAC and ALAC. The short exam answer is what to write under time pressure.</p>`
	);
	out.push(renderAnswerKey(P, r.practice));

	// 11 · Review tools
	out.push(h3(id('review'), '11 · Review tools'));
	out.push(h4('Must-memorize'), ul(r.memorize, 'rv-check'));
	out.push(
		h4('Must-memorize lists'),
		table(['List', 'Items', 'Source'], r.enums.filter((e) => e.memorize).map((e) => [`<a href="#${slug(e.id)}"><b>${e.id}</b></a> ${e.name}`, ol(e.items.map((i) => i.t)), e.source]))
	);
	out.push(h4('Flashcards'), flashcards(r.flashcards));
	out.push(h4('Oral recitation drill'), flashcards(r.oral));

	// 12 · Review sheet
	out.push(h3(id('sheet'), '12 · Review sheet and mastery checklist'));
	out.push(`<div class="rv-summary">${ul(r.sheet)}</div>`);
	out.push(
		h4(`Ready for ${r.n < 127 ? `Rule ${r.n + 1}` : 'the practice quizzes'}? Tick each one you can do without notes`),
		ul(
			[
				`State the governing rules of Rule ${r.n} accurately (parts 1–2).`,
				`Enumerate and briefly discuss every must-memorize list (part 11).`,
				'Identify the applicable exceptions.',
				`Distinguish the commonly confused doctrines in <a href="#${id('compare')}">part 5</a>.`,
				'Recognize the controlling issue in a hypothetical.',
				'Apply the rule and reach a supported conclusion.',
				...r.checklist
			],
			'rv-check'
		)
	);

	return out.join('\n');
}

/* ------------------------------------------------------------------ *
 * Exports into the app's practice engines
 * ------------------------------------------------------------------ */

export function trueFalseMcqs(moduleId: string, topicId: string, topic: string, items: Practice[]): McqQuestion[] {
	return items
		.filter((x) => x.cat === 'C' && x.tf !== undefined)
		.map((x, i) => ({
			id: `${moduleId}:${topicId}:tf${i + 1}`,
			topicId,
			topic,
			tag: x.tag ?? 'memorization',
			question: `True or false? ${plain(x.q)}`,
			options: ['True', 'False'],
			correctIndex: x.tf ? 0 : 1,
			explanation: plain([x.short, x.a, x.trap ? `Trap: ${x.trap}` : ''].filter(Boolean).join(' ')),
			legalBasis: x.keys ? plain(x.keys) : undefined
		}));
}

export function situationalEssays(moduleId: string, key: string, group: string, items: Practice[]): AlacEssay[] {
	return items
		.filter((x) => x.alac && x.facts)
		.map((x, i) => ({
			id: `${moduleId}:alac:${key}-${i + 1}`,
			title: x.title ?? `${group} — Problem ${i + 1}`,
			topic: group,
			factPattern: plain(x.facts!),
			question: plain(x.q),
			modelAnswer: x.alac!
		}));
}
