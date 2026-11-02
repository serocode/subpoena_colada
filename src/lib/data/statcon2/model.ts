/*
 * Content model + HTML renderers for the Statutory Construction II reviewer (Agpalo Chapters VI–XI
 * and the five assigned cases). Chapter files hold the content as data; this file turns it into the
 * study-guide HTML, the True/False MCQs and the ALAC essays, so a question and its answer can never
 * drift apart and the master review lists are generated rather than copied.
 *
 * All strings are trusted, first-party HTML (inline <b>, <i>, <em> are fine). Never put "<h2" inside
 * content: the reader (src/lib/content.ts) splits the guide into parts on that tag.
 */
import type { AlacEssay, McqQuestion, McqTag } from '$lib/types';

export type Color = 'yellow' | 'green' | 'blue' | 'orange' | 'red' | 'purple' | 'neutral';
export type Level = 1 | 2 | 3 | 4 | 5;
/** Question categories as specified: A enumeration, B compare, C short answer, D true/false, E application, F case-based, G challenging. */
export type Cat = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type CaseId = 'catiis' | 'aquino' | 'manila-lodge' | 'corona' | 'magtajas';

export interface Concept {
	term: string;
	plain: string;
	legal: string;
	why: string;
	example?: string;
	confuse?: string;
}

export interface Principle {
	name: string;
	rule: string;
	basis: string;
	why: string;
	when: string;
	limits: string;
	differs?: string;
	example?: string;
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

export interface Enumeration {
	id: string;
	name: string;
	source: string;
	/** book = stated in Agpalo; law = a codal/statutory list; case = stated by the Court; teaching = a study grouping, not an official list. */
	kind: 'book' | 'law' | 'case' | 'teaching';
	/** Order of items matters (e.g. steps). */
	ordered?: boolean;
	/** Included in the must-memorize list and the master list's top tier. */
	memorize?: boolean;
	/** Lead-in sentence for the model answer, e.g. "The requisites are". */
	lead: string;
	items: EnumItem[];
	memory?: string;
	/** Essential keywords and common mistakes. */
	tip: string;
	question: string;
	verify?: string;
}

export interface Requisite {
	name: string;
	source: string;
	what: string;
	why: string;
	mode: 'Cumulative — all must concur' | 'Alternative — any one suffices' | 'Exceptions — any one defeats the rule' | 'Mixed' | 'Single condition';
	modeNote?: string;
	absent: string;
	interacts: string;
	hypo: string;
}

/** [Concept A, Concept B] cells for one row. */
type Pair = [string, string];
export interface Comparison {
	id: string;
	title: string;
	a: string;
	b: string;
	def: Pair;
	purpose: Pair;
	basis: Pair;
	when: Pair;
	key: Pair;
	limits: Pair;
	example: Pair;
	trap: Pair;
	decisive: string;
	matters: string;
	recognize: string;
	mistake: string;
}

export interface Authority {
	kind: 'provision' | 'case' | 'book';
	name: string;
	cite?: string;
	text: string;
	/** Present when the item could not be checked against the source. */
	verify?: string;
}

export interface CaseLink {
	caseId: CaseId;
	strength: 'Direct — the Court applied it' | 'Supporting — consistent, partly relied on' | 'Not invoked — exam point only';
	doctrine: string;
	facts: string;
	issue: string;
	applied: string;
	ruling: string;
	lesson: string;
	examUse: string;
}

export interface Trap {
	wrong: string;
	right: string;
	example: string;
}

export interface Alac {
	answer: string;
	legalBasis: string;
	application: string;
	conclusion: string;
}

export interface Practice {
	cat: Cat;
	level: Level;
	topic: string;
	/** The question. For D, the proposition to be judged true or false. */
	q: string;
	/** Fact pattern for application problems. */
	facts?: string;
	/** For D: whether the proposition is true. */
	tf?: boolean;
	/** Model answer (expanded explanation when `short` is given). */
	a?: string;
	/** Short, timed-exam version. */
	short?: string;
	/** ALAC model answer for problems. */
	alac?: Alac;
	/** Why the competing view is weaker. */
	weaker?: string;
	/** Essential keywords an examiner looks for. */
	keys?: string;
	/** Chapters involved (integrated exam only). */
	chapters?: string;
	/** MCQ tag when exported to the practice engine. */
	tag?: McqTag;
	/** Short title when exported as an ALAC essay. */
	title?: string;
}

export interface Chapter {
	id: string;
	n: number;
	roman: string;
	title: string;
	/** Short label for MCQ topics and essay groups. */
	short: string;
	sections: string;
	plain: string;
	overview: string;
	questions: string[];
	keyPoints: string[];
	connects: string;
	objectives: string[];
	concepts: Concept[];
	principles: Principle[];
	enums: Enumeration[];
	reqs: Requisite[];
	comparisons: Comparison[];
	authorities: Authority[];
	caseLinks: CaseLink[];
	caseNote?: string;
	traps: Trap[];
	practice: Practice[];
	memoryAids: [string, string][];
	flashcards: [string, string][];
	recall: [string, string][];
	summary: { rules: string[]; distinctions: string[]; cases: string[]; traps: string[] };
	checklist: string[];
	watchFor: string;
}

/* ------------------------------------------------------------------ *
 * Small HTML helpers
 * ------------------------------------------------------------------ */

const ENTITIES: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ', '&mdash;': '—', '&ndash;': '–', '&sect;': '§' };

/** Strip tags for plain-text fields (MCQ question/explanation, essay fact patterns). */
export function plain(html: string) {
	return html
		.replace(/<br\s*\/?>/g, ' ')
		.replace(/<\/(p|li)>/g, ' ')
		.replace(/<[^>]+>/g, '')
		.replace(/&[a-z#0-9]+;/g, (m) => ENTITIES[m] ?? m)
		.replace(/\s+/g, ' ')
		.trim();
}

export const ul = (xs: string[], cls = '') => `<ul${cls ? ` class="${cls}"` : ''}>${xs.map((x) => `<li>${x}</li>`).join('')}</ul>`;
export const ol = (xs: string[], cls = '') => `<ol${cls ? ` class="${cls}"` : ''}>${xs.map((x) => `<li>${x}</li>`).join('')}</ol>`;
export const box = (color: Color, label: string, body: string) => `<div class="rv-box rv-${color}"><span class="rv-label">${label}</span>${body}</div>`;
export const h3 = (id: string, title: string) => `<h3 class="sg-h3" id="${id}">${title}</h3>`;
export const h4 = (title: string) => `<h4 class="rv-h4">${title}</h4>`;
export const badge = (text: string, color: Color = 'neutral') => `<span class="rv-badge rv-${color}">${text}</span>`;
export function table(head: string[], rows: string[][], cls = '') {
	return `<div class="table-scroll"><table${cls ? ` class="${cls}"` : ''}><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows
		.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`)
		.join('')}</tbody></table></div>`;
}
export const dl = (pairs: [string, string | undefined][]) =>
	`<dl class="rv-dl">${pairs
		.filter((p): p is [string, string] => !!p[1])
		.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`)
		.join('')}</dl>`;
export const p = (s: string) => (s.trim().startsWith("<") ? s : `<p>${s}</p>`);

export const CASE_NAMES: Record<CaseId, string> = {
	catiis: 'Catiis v. Court of Appeals (2006)',
	aquino: 'Aquino v. Quezon City (2006)',
	'manila-lodge': 'Manila Lodge No. 761 v. Court of Appeals (1976)',
	corona: 'Corona v. Court of Appeals (1992)',
	magtajas: 'Magtajas v. Pryce Properties Corp. (1994)'
};
export const caseRef = (id: CaseId) => `<a href="#case-${id}">${CASE_NAMES[id]}</a>`;

export const LEVELS: Record<Level, string> = { 1: 'Recall', 2: 'Explanation', 3: 'Comparison', 4: 'Application', 5: 'Integration' };
export const CATS: Record<Cat, string> = {
	A: 'Enumeration & brief discussion',
	B: 'Compare & contrast',
	C: 'Definitions & short answers',
	D: 'True or false with justification',
	E: 'Application problems (ALAC)',
	F: 'Case-based questions',
	G: 'Challenging questions'
};
/** Easiest to hardest. */
export const CAT_ORDER: Cat[] = ['C', 'A', 'D', 'B', 'F', 'E', 'G'];

const KIND_LABEL: Record<Enumeration['kind'], string> = {
	book: 'List stated in Agpalo',
	law: 'List stated in the law',
	case: 'List stated by the Court',
	teaching: 'Study grouping — not an official list'
};

/* ------------------------------------------------------------------ *
 * Shared block renderers (also used by the cases, exam and review parts)
 * ------------------------------------------------------------------ */

export function renderAlac(x: Alac) {
	const row = (cls: string, letter: string, name: string, body: string) =>
		`<div class="rv-alac-row"><span class="rv-alac-k rv-alac-${cls}">${letter}</span><div><b>${name}.</b> ${body}</div></div>`;
	return `<div class="rv-alac">${row('a', 'A', 'Answer', x.answer)}${row('l', 'L', 'Legal basis', x.legalBasis)}${row('p', 'A', 'Application', x.application)}${row('c', 'C', 'Conclusion', x.conclusion)}</div>`;
}

export function renderEnumeration(e: Enumeration) {
	const items = e.items;
	const skeleton = ol(items.map((i) => i.t), 'rv-skeleton');
	const discussion = ol(items.map((i) => `<b>${i.t}.</b> ${i.d}${i.x ? ` <span class="rv-ex"><i>Example:</i> ${i.x}</span>` : ''}`));
	const model = `<p>${e.lead}: ${items.map((i, k) => `(${k + 1}) <b>${i.t}</b> — ${i.s}`).join('; ')}.</p>`;
	return `<div class="rv-card rv-enum" id="${e.id.toLowerCase().replace(/\./g, '-')}">
<p class="rv-card-title"><span class="rv-num">${e.id}</span> ${e.name}</p>
<p class="rv-meta">${badge(KIND_LABEL[e.kind], e.kind === 'teaching' ? 'neutral' : 'yellow')}${e.ordered ? badge('Order matters', 'green') : ''}${e.memorize ? badge('Must memorize', 'red') : ''}${badge(`${items.length} items`)}</p>
<p class="rv-source"><b>Legal basis / source:</b> ${e.source}</p>
${e.verify ? box('orange', 'Verify', e.verify) : ''}
${h4('Complete list')}${skeleton}
${h4('Brief discussion of each item')}${discussion}
${e.memory ? box('yellow', 'Memory aid', p(e.memory)) : ''}
${box('orange', 'Exam tip', p(e.tip))}
${h4('Sample exam question')}<p class="rv-question">${e.question}</p>
${box('green', 'Model answer', model)}
</div>`;
}

export function renderComparison(c: Comparison) {
	const rows: [string, Pair][] = [
		['Definition', c.def],
		['Purpose', c.purpose],
		['Legal basis', c.basis],
		['When applicable', c.when],
		['Key distinction', c.key],
		['Exceptions or limitations', c.limits],
		['Example', c.example],
		['Examination trap', c.trap]
	];
	return `<div class="rv-cmp" id="${c.id.toLowerCase().replace(/\./g, '-')}">
<p class="rv-card-title"><span class="rv-num">${c.id}</span> ${c.title}</p>
${table(['Point of comparison', c.a, c.b], rows.map(([k, [a, b]]) => [`<span class="aspect">${k}</span>`, a, b]), 'cmp-table')}
${dl([
	['Most important difference', c.decisive],
	['Why it matters', c.matters],
	['How to spot which one applies', c.recognize],
	['Common mistake', c.mistake]
])}
</div>`;
}

function qHead(num: string, x: Practice) {
	return `<div class="rv-qhead"><span class="rv-num">${num}</span>${badge(`Level ${x.level} · ${LEVELS[x.level]}`, x.level >= 4 ? 'purple' : 'neutral')}${badge(x.topic)}${x.chapters ? badge(x.chapters, 'blue') : ''}</div>`;
}

export function renderQuestion(num: string, x: Practice) {
	const body =
		x.cat === 'D'
			? `<p class="rv-question">True or false? Justify your answer.</p><blockquote class="rv-prop">${x.q}</blockquote>`
			: `${x.facts ? `<div class="rv-facts">${p(x.facts)}</div>` : ''}<p class="rv-question">${x.q}</p>`;
	return `<div class="rv-q" id="q-${num.replace(/\./g, '-')}">${qHead(num, x)}${body}</div>`;
}

/** The model answer alone (verdict, short answer, ALAC, expanded explanation, keywords). */
export function answerBody(x: Practice) {
	const parts: string[] = [];
	if (x.cat === 'D' && x.tf !== undefined) parts.push(`<p class="rv-verdict rv-${x.tf ? 'true' : 'false'}">${x.tf ? 'TRUE' : 'FALSE'}</p>`);
	if (x.short) parts.push(box('green', 'Short exam answer', p(x.short)));
	if (x.alac) parts.push(renderAlac(x.alac));
	if (x.a) parts.push(x.short ? `<div class="rv-expanded"><span class="rv-label">Expanded explanation</span>${p(x.a)}</div>` : p(x.a));
	if (x.weaker) parts.push(box('blue', 'Why the competing view is weaker', p(x.weaker)));
	if (x.keys) parts.push(`<p class="rv-keys"><b>Must-have keywords:</b> ${x.keys}</p>`);
	return parts.join('');
}

export function renderAnswer(num: string, x: Practice) {
	const q = x.cat === 'D' ? `<blockquote class="rv-prop">${x.q}</blockquote>` : `<p class="rv-echo">${x.q}</p>`;
	return `<div class="rv-ans">${qHead(num, x)}${q}${answerBody(x)}</div>`;
}

/** Question with its model answer folded underneath (used where answers sit beside questions). */
export function renderQuestionWithReveal(num: string, x: Practice, label = 'Model answer') {
	return `<div class="rv-q" id="q-${num.replace(/\./g, '-')}">${qHead(num, x)}${
		x.cat === 'D'
			? `<p class="rv-question">True or false? Justify your answer.</p><blockquote class="rv-prop">${x.q}</blockquote>`
			: `${x.facts ? `<div class="rv-facts">${p(x.facts)}</div>` : ''}<p class="rv-question">${x.q}</p>`
	}<details class="rv-reveal"><summary>${label}</summary><div>${answerBody(x)}</div></details></div>`;
}

/** Sorts a practice bank easiest-to-hardest and numbers it `<prefix>.<n>`. */
export function numberPractice(prefix: string, items: Practice[]) {
	const sorted = CAT_ORDER.flatMap((cat) => items.filter((x) => x.cat === cat).sort((a, b) => a.level - b.level));
	return sorted.map((x, i) => ({ num: `${prefix}.${i + 1}`, x }));
}

export function renderPracticeSets(prefix: string, items: Practice[]) {
	const numbered = numberPractice(prefix, items);
	const out: string[] = [];
	for (const cat of CAT_ORDER) {
		const inCat = numbered.filter((n) => n.x.cat === cat);
		if (!inCat.length) continue;
		out.push(h4(`Category ${cat} — ${CATS[cat]}`));
		out.push(...inCat.map((n) => renderQuestion(n.num, n.x)));
	}
	return out.join('\n');
}

export function renderAnswerKey(prefix: string, items: Practice[]) {
	const numbered = numberPractice(prefix, items);
	const out: string[] = [];
	for (const cat of CAT_ORDER) {
		const inCat = numbered.filter((n) => n.x.cat === cat);
		if (!inCat.length) continue;
		out.push(h4(`Category ${cat} — ${CATS[cat]}`));
		out.push(...inCat.map((n) => renderAnswer(n.num, n.x)));
	}
	return out.join('\n');
}

export const flashcards = (cards: [string, string][]) =>
	`<div class="rv-flash">${cards.map(([q, a]) => `<details class="rv-flip"><summary>${q}</summary><div>${p(a)}</div></details>`).join('')}</div>`;

/* ------------------------------------------------------------------ *
 * Chapter renderer — the 13-part structure, in the specified order
 * ------------------------------------------------------------------ */

export function renderChapter(ch: Chapter) {
	const id = (s: string) => `${ch.id}-${s}`;
	const P = `${ch.n}`;
	const out: string[] = [];

	out.push(`<h2 class="sg-h2" id="${ch.id}">Chapter ${ch.roman} — ${ch.title}</h2>`);
	out.push(`<p class="sg-intro">Agpalo, <i>Statutory Construction</i> (6th ed.), ${ch.sections}. Thirteen parts: learn (1–9), test yourself (10–11), lock it in (12–13).</p>`);

	// 1. Overview
	out.push(h3(id('overview'), '1 · Overview &amp; learning objectives'));
	out.push(box('neutral', 'In plain English', p(ch.plain)));
	out.push(ch.overview);
	out.push(h4('The questions this chapter answers'), ul(ch.questions));
	out.push(h4('The rules and distinctions that matter most'), ul(ch.keyPoints));
	out.push(h4('How it connects to the rest of the subject'), p(ch.connects));
	out.push(h4('Learning objectives — after this chapter you can'), ul(ch.objectives, 'rv-check'));

	// 2. Concepts
	out.push(h3(id('concepts'), '2 · Key concepts &amp; definitions'));
	out.push(
		...ch.concepts.map(
			(c) =>
				`<div class="rv-card"><p class="rv-card-title">${c.term}</p>${dl([
					['Plain English', c.plain],
					['Legal meaning', c.legal],
					['Why the rule exists', c.why],
					['Example', c.example],
					["Don't confuse with", c.confuse]
				])}</div>`
		)
	);

	// 3. Principles
	out.push(h3(id('rules'), '3 · Rules, principles &amp; doctrines'));
	out.push(
		...ch.principles.map(
			(r, i) =>
				`<div class="rv-card"><p class="rv-card-title"><span class="rv-num">R${P}.${i + 1}</span> ${r.name}</p>${box('yellow', 'The rule', p(r.rule))}${dl([
					['Legal basis', r.basis],
					['Rationale', r.why],
					['When it applies', r.when]
				])}${box('blue', 'Limits, exceptions & qualifications', p(r.limits))}${dl([
					['How it differs from related rules', r.differs],
					['Illustration', r.example]
				])}</div>`
		)
	);

	// 4. Enumerations
	out.push(h3(id('enumerations'), '4 · Enumerations with brief discussion'));
	out.push(
		`<p class="sg-intro">Every list in this chapter. "Study grouping" lists are teaching aids, not official lists.</p>`
	);
	out.push(...ch.enums.map(renderEnumeration));

	// 5. Requisites & exceptions
	out.push(h3(id('requisites'), '5 · Requisites, exceptions &amp; qualifications'));
	out.push(
		...ch.reqs.map(
			(r) =>
				`<div class="rv-card"><p class="rv-card-title">${r.name}</p><p class="rv-meta">${badge(r.mode, r.mode.startsWith('Exceptions') ? 'blue' : 'green')}</p><p class="rv-source"><b>Source:</b> ${r.source}</p>${box('green', 'What must be shown', p(r.what))}${dl([
					['Why it exists', r.why],
					['Cumulative or alternative?', r.modeNote ?? r.mode],
					['If a requirement is missing', r.absent],
					['How it interacts with other rules', r.interacts]
				])}${box('neutral', 'Mini-hypothetical', p(r.hypo))}</div>`
		)
	);

	// 6. Comparisons
	out.push(h3(id('compare'), '6 · Compare &amp; contrast'));
	out.push(...ch.comparisons.map(renderComparison));

	// 7. Provisions & jurisprudence
	out.push(h3(id('authorities'), '7 · Statutory provisions &amp; jurisprudence'));
	const provisions = ch.authorities.filter((a) => a.kind === 'provision');
	const cases = ch.authorities.filter((a) => a.kind !== 'provision');
	if (provisions.length) {
		out.push(h4('Provisions to know'));
		out.push(...provisions.map((a) => `<div class="rv-box rv-blue"><span class="rv-label">${a.name}</span>${p(a.text)}${a.verify ? `<p class="rv-verify">⚠ ${a.verify}</p>` : ''}</div>`));
	}
	if (cases.length) {
		out.push(h4('Jurisprudence and authorities cited for this chapter'));
		out.push(table(['Authority', 'What it stands for'], cases.map((a) => [`<b>${a.name}</b>${a.cite ? `<br><span class="rv-cite">${a.cite}</span>` : ''}`, `${a.text}${a.verify ? `<p class="rv-verify">⚠ ${a.verify}</p>` : ''}`])));
	}

	// 8. Case connections
	out.push(h3(id('cases'), '8 · Connections to the five assigned cases'));
	if (ch.caseNote) out.push(box('neutral', 'How the five cases relate to this chapter', p(ch.caseNote)));
	out.push(
		...ch.caseLinks.map(
			(c) =>
				`<div class="rv-card rv-caselink"><p class="rv-card-title">${caseRef(c.caseId)}</p><p class="rv-meta">${badge(c.strength, c.strength.startsWith('Direct') ? 'red' : c.strength.startsWith('Supporting') ? 'purple' : 'neutral')}</p>${dl([
					['Doctrine involved', c.doctrine],
					['Material facts', c.facts],
					['Legal issue', c.issue],
					['How the Court applied the doctrine', c.applied],
					['Ruling', c.ruling],
					['Lesson for the exam', c.lesson],
					['How it can be asked', c.examUse]
				])}</div>`
		)
	);

	// 9. Traps
	out.push(h3(id('traps'), '9 · Common misconceptions &amp; exam traps'));
	out.push(table(['#', 'Wrong approach', 'Correct principle', 'Illustration'], ch.traps.map((t, i) => [`${i + 1}`, t.wrong, t.right, t.example])));

	// 10. Practice
	out.push(h3(id('practice'), '10 · Practice problems'));
	out.push(
		`<p class="sg-intro">Sets run from easiest to hardest (Level 1 recall → Level 5 integration).</p>`
	);
	out.push(renderPracticeSets(P, ch.practice));

	// 11. Answer key
	out.push(h3(id('answers'), '11 · Answer key &amp; model answers'));
	out.push(`<p class="sg-intro">Numbers match part 10. Where a short exam answer is given, that is what to write under time pressure; the expanded explanation is for understanding.</p>`);
	out.push(renderAnswerKey(P, ch.practice));

	// 12. Memorize
	out.push(h3(id('memorize'), '12 · Memorize: lists, memory aids, flashcards &amp; active recall'));
	const must = ch.enums.filter((e) => e.memorize);
	out.push(h4('Must-memorize enumerations'));
	out.push(table(['List', 'Items (reproduce these without looking)', 'Source'], must.map((e) => [`<b>${e.id}</b> ${e.name}`, ol(e.items.map((i) => i.t)), e.source])));
	out.push(h4('Memory aids'));
	out.push(table(['For', 'Aid'], ch.memoryAids.map(([k, v]) => [`<b>${k}</b>`, v])));
	out.push(h4('Flashcards'), flashcards(ch.flashcards));
	out.push(h4('Active-recall drill — questions'), ol(ch.recall.map(([q]) => q), 'rv-recall'));
	out.push(h4('Active-recall drill — answers'), ol(ch.recall.map(([, a]) => a), 'rv-recall'));

	// 13. Summary
	out.push(h3(id('summary'), '13 · Chapter summary &amp; mastery checklist'));
	out.push(
		`<div class="rv-summary">${dl([
			['Essential rules', ul(ch.summary.rules)],
			['Lists to know', ul(ch.enums.map((e) => `${e.name} (${e.items.length})`))],
			['Key distinctions', ul(ch.summary.distinctions)],
			['Relevant cases', ul(ch.summary.cases)],
			['Exam traps', ul(ch.summary.traps)]
		])}</div>`
	);
	out.push(h4(`Ready for the next chapter? Check each one you can do without notes`), ul(ch.checklist, 'rv-check'));

	return out.join('\n');
}

/* ------------------------------------------------------------------ *
 * Exports into the app's practice engines
 * ------------------------------------------------------------------ */

export function trueFalseMcqs(moduleId: string, topicId: string, topic: string, items: Practice[]): McqQuestion[] {
	return items
		.filter((x) => x.cat === 'D' && x.tf !== undefined)
		.map((x, i) => ({
			id: `${moduleId}:${topicId}:tf${i + 1}`,
			topicId,
			topic,
			tag: x.tag ?? 'memorization',
			question: `True or false? ${plain(x.q)}`,
			options: ['True', 'False'],
			correctIndex: x.tf ? 0 : 1,
			explanation: plain([x.short, x.a].filter(Boolean).join(' ')),
			legalBasis: x.keys ? plain(x.keys) : undefined
		}));
}

export function alacEssays(moduleId: string, key: string, group: string, items: Practice[]): AlacEssay[] {
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
