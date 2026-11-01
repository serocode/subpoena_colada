import type { Subject } from '$lib/types';
import { modules } from '$lib/data/modules';
import { caseAnchor, getParts, readHref, textOf, type Part } from '$lib/content';

/**
 * Local full-text search over every subject. The index is built from the same data the app already ships, once, the
 * first time someone searches (about a few thousand small documents), and kept in memory. No service, no dependency.
 */

export type DocKind = 'guide' | 'case' | 'mcq' | 'essay';

export const KIND_LABEL: Record<DocKind, string> = { guide: 'Study guide', case: 'Case digest', mcq: 'MCQ', essay: 'ALAC essay' };

export interface SearchDoc {
	id: string;
	kind: DocKind;
	subjectId: string;
	subjectTitle: string;
	partId: string;
	/** Where it lives, outermost first: part title, then topic title. */
	path: string[];
	/** The heading the hit sits under (a section, a case name, a question's topic). */
	title: string;
	text: string;
	href: string;
	/** Lower-cased copies for matching. */
	lt: string;
	lp: string;
	lx: string;
}

export interface SearchOptions {
	subjects?: string[];
	part?: string;
	kinds?: DocKind[];
	exact?: boolean;
	limit?: number;
}

export interface SearchHit {
	doc: SearchDoc;
	score: number;
	/** The hit is in a heading, part or topic title rather than only in the text. */
	headingMatch: boolean;
	/** Escaped HTML with the matching words wrapped in <mark>. */
	excerpt: string;
	titleHtml: string;
}

let index: SearchDoc[] | null = null;
let vocabulary: Map<string, number> | null = null;

/** Element ids worth jumping to: sections, cases, comparisons, questions. Tiny inline anchors are skipped. */
const HEADING_IN_SEGMENT = /<(h[2-4])\b[^>]*>([\s\S]*?)<\/\1>|<(?:div|p|span)\b[^>]*class="[^"]*\b(?:rv-card-title|cname)\b[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p|span)>/;

function guideDocs(subject: Subject, part: Part): SearchDoc[] {
	const out: SearchDoc[] = [];
	for (const chunk of part.chunks) {
		const topicTitle = chunk.topic?.title ?? '';
		const html = chunk.html;
		// Segments run from one id to the next, so a hit can open at the nearest anchor.
		const marks = [...html.matchAll(/<([a-z0-9]+)\b[^>]*\bid="([^"]+)"[^>]*>/gi)].map((m) => ({ at: m.index ?? 0, id: m[2] }));
		if (!marks.length || marks[0].at > 0) marks.unshift({ at: 0, id: chunk.topic?.id ?? part.id });
		for (let i = 0; i < marks.length; i++) {
			const seg = html.slice(marks[i].at, marks[i + 1]?.at ?? html.length);
			const text = textOf(seg);
			if (!text) continue;
			const head = seg.match(HEADING_IN_SEGMENT);
			let title = head ? textOf(head[2] ?? head[3] ?? '') : '';
			if (!title || title.length > 140) title = topicTitle || part.title;
			const path = [part.title, topicTitle].filter((p, j, a) => p && p !== title && a.indexOf(p) === j);
			out.push(makeDoc({ id: `${subject.id}/${part.id}/${marks[i].id}/${i}`, kind: 'guide', subject, partId: part.id, path, title, text, href: readHref(subject.id, part.id, marks[i].id) }));
		}
	}
	return out;
}

function makeDoc(d: Omit<SearchDoc, 'subjectId' | 'subjectTitle' | 'lt' | 'lp' | 'lx'> & { subject: Subject }): SearchDoc {
	const { subject, ...rest } = d;
	return {
		...rest,
		subjectId: subject.id,
		subjectTitle: subject.title,
		// A question's text is not a heading, so it never earns the heading bonus.
		lt: rest.kind === 'mcq' ? '' : rest.title.toLowerCase(),
		lp: rest.path.join(' · ').toLowerCase(),
		lx: rest.text.toLowerCase()
	};
}

export function buildIndex(): SearchDoc[] {
	if (index) return index;
	const docs: SearchDoc[] = [];
	for (const subject of modules) {
		for (const part of getParts(subject)) {
			if (part.kind === 'guide') docs.push(...guideDocs(subject, part));
			else
				for (const g of part.caseGroups)
					for (const c of g.cases)
						docs.push(
							makeDoc({
								id: c.id,
								kind: 'case',
								subject,
								partId: part.id,
								path: [part.title, g.title],
								title: c.title,
								text: [c.citation, c.keyRule, c.summary.startsWith(c.keyRule) ? c.summary.slice(c.keyRule.length) : c.summary].join(' · '),
								href: readHref(subject.id, part.id, caseAnchor(c.id))
							})
						);
		}
		for (const q of subject.mcqs)
			docs.push(
				makeDoc({
					id: q.id,
					kind: 'mcq',
					subject,
					partId: q.topicId ?? '',
					path: [q.topic],
					title: q.question.length > 120 ? `${q.question.slice(0, 117)}…` : q.question,
					text: [q.question, ...q.options, q.legalBasis ?? '', q.explanation].join(' · '),
					href: `/module/${subject.id}/practice?topic=${encodeURIComponent(q.topicId ?? 'all')}&question=${encodeURIComponent(q.id)}`
				})
			);
		for (const e of subject.essays)
			docs.push(
				makeDoc({
					id: e.id,
					kind: 'essay',
					subject,
					partId: '',
					path: [e.topic],
					title: e.title,
					text: textOf([e.factPattern, e.question ?? '', e.modelAnswer.answer, e.modelAnswer.legalBasis, e.modelAnswer.application, e.modelAnswer.conclusion].join(' · ')),
					href: `/module/${subject.id}/essays?essay=${encodeURIComponent(e.id)}`
				})
			);
	}
	index = docs;
	return docs;
}

/** Lower-cased words of a query. Very common words are dropped unless they are all there is. */
const STOP = new Set(['the', 'a', 'an', 'of', 'and', 'or', 'in', 'on', 'to', 'is', 'for', 'by', 'v', 'vs']);
export function terms(q: string) {
	const words = q
		.toLowerCase()
		.replace(/[“”"]/g, ' ')
		.split(/[^\p{L}\p{N}§.-]+/u)
		.map((w) => w.replace(/^[.-]+|[.-]+$/g, ''))
		.filter(Boolean);
	const kept = words.filter((w) => !STOP.has(w));
	return kept.length ? kept : words;
}

const escapeHtml = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * The pattern for one word or phrase. Numbers match whole ("36" is not "360"); short words match at the start of a word
 * ("sec" is not in "prosecution"); longer words match anywhere, so a stem finds its endings.
 */
function termSource(t: string) {
	let src = escapeRe(t);
	if (/^[\p{L}\p{N}]/u.test(t) && (t.length <= 3 || /^\p{N}/u.test(t))) src = `(?<![\\p{L}\\p{N}])${src}`;
	if (/\p{N}$/u.test(t)) src = `${src}(?!\\p{N})`;
	return src;
}

const matcher = (t: string) => new RegExp(termSource(t), 'u');

/** A global, case-insensitive pattern for marking a query's words in rendered text (the reader's match marks). */
export function markRegex(q: string, exact = false) {
	const phrase = q.trim().toLowerCase().replace(/\s+/g, ' ');
	const ts = (exact ? [phrase] : [phrase, ...terms(q)]).filter((t, i, a) => t && t.length >= 2 && a.indexOf(t) === i);
	if (!ts.length) return null;
	return new RegExp(`(${ts.sort((a, b) => b.length - a.length).map(termSource).join('|')})`, 'giu');
}

/** Wraps every occurrence of the phrase (or, without one, of each word) in <mark>. Input is plain text. */
export function markText(text: string, q: string, exact = false) {
	const phrase = q.trim().toLowerCase().replace(/\s+/g, ' ');
	const ts = (exact ? [phrase] : [phrase, ...terms(q)]).filter((t, i, a) => t && a.indexOf(t) === i);
	if (!ts.length) return escapeHtml(text);
	const re = new RegExp(`(${ts.sort((a, b) => b.length - a.length).map(termSource).join('|')})`, 'giu');
	return text
		.split(re)
		.map((piece, i) => (i % 2 ? `<mark>${escapeHtml(piece)}</mark>` : escapeHtml(piece)))
		.join('');
}

function excerpt(doc: SearchDoc, phraseRe: RegExp, tRes: RegExp[], q: string, exact: boolean) {
	let at = doc.lx.search(phraseRe);
	if (at < 0) at = Math.min(...tRes.map((r) => doc.lx.search(r)).filter((i) => i >= 0), Infinity);
	if (!Number.isFinite(at) || at < 0) at = 0;
	const from = Math.max(0, at - 90);
	const to = Math.min(doc.text.length, at + 190);
	let s = doc.text.slice(from, to);
	if (from > 0) s = '…' + s.slice(s.indexOf(' ') + 1);
	if (to < doc.text.length) s = s.slice(0, s.lastIndexOf(' ')) + '…';
	return markText(s, q, exact);
}

/**
 * Ranks documents for a query. Every word must appear somewhere in the document (title, path or text). Headings
 * outrank body text, and an exact phrase outranks scattered words.
 */
export function search(q: string, opts: SearchOptions = {}): SearchHit[] {
	const phrase = q.trim().toLowerCase().replace(/\s+/g, ' ');
	if (phrase.length < 2) return [];
	const ts = opts.exact ? [phrase] : terms(phrase);
	if (!ts.length) return [];
	const tRes = ts.map(matcher);
	const phraseRe = matcher(phrase);
	const phraseG = new RegExp(termSource(phrase), 'gu');
	const docs = buildIndex();
	const hits: SearchHit[] = [];
	for (const doc of docs) {
		if (opts.subjects?.length && !opts.subjects.includes(doc.subjectId)) continue;
		if (opts.part && doc.partId !== opts.part) continue;
		if (opts.kinds?.length && !opts.kinds.includes(doc.kind)) continue;
		if (!tRes.every((r) => r.test(doc.lt) || r.test(doc.lp) || r.test(doc.lx))) continue;

		let score = 0;
		const inTitle = !!doc.lt && phraseRe.test(doc.lt);
		const inPath = phraseRe.test(doc.lp);
		const allInTitle = !!doc.lt && tRes.every((r) => r.test(doc.lt));
		const allInHead = tRes.every((r) => r.test(doc.lt) || r.test(doc.lp));
		if (inTitle) score += doc.lt === phrase ? 140 : doc.lt.startsWith(phrase) ? 120 : 100;
		else if (allInTitle) score += 60;
		else if (allInHead) score += 25;
		if (inPath) score += 35;
		const n = Math.min(10, doc.lx.match(phraseG)?.length ?? 0);
		if (n) score += 30 + n * 3;
		else if (ts.length > 1) score += 4;
		if (doc.kind === 'mcq' || doc.kind === 'essay') score -= 8;
		if (opts.exact && !n && !inTitle && !inPath) continue;

		hits.push({
			doc,
			score,
			headingMatch: inTitle || inPath || allInHead,
			excerpt: excerpt(doc, phraseRe, tRes, phrase, !!opts.exact),
			titleHtml: markText(doc.title, phrase, !!opts.exact)
		});
	}
	hits.sort((a, b) => b.score - a.score);
	return opts.limit ? hits.slice(0, opts.limit) : hits;
}

/** Counts per subject and per kind for a query, ignoring the filter being counted (so facets never read zero by accident). */
export function facets(q: string, opts: SearchOptions) {
	const bySubject = new Map<string, number>();
	const byKind = new Map<DocKind, number>();
	for (const h of search(q, { ...opts, subjects: undefined, limit: undefined })) bySubject.set(h.doc.subjectId, (bySubject.get(h.doc.subjectId) ?? 0) + 1);
	for (const h of search(q, { ...opts, kinds: undefined, limit: undefined })) byKind.set(h.doc.kind, (byKind.get(h.doc.kind) ?? 0) + 1);
	return { bySubject, byKind };
}

function buildVocabulary() {
	if (vocabulary) return vocabulary;
	vocabulary = new Map();
	for (const d of buildIndex()) for (const w of `${d.lt} ${d.lx}`.split(/[^\p{L}]+/u)) if (w.length >= 4) vocabulary.set(w, (vocabulary.get(w) ?? 0) + 1);
	return vocabulary;
}

function distance(a: string, b: string, max: number) {
	if (Math.abs(a.length - b.length) > max) return max + 1;
	let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
	for (let i = 1; i <= a.length; i++) {
		const cur = [i];
		let best = i;
		for (let j = 1; j <= b.length; j++) {
			cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
			best = Math.min(best, cur[j]);
		}
		if (best > max) return max + 1;
		prev = cur;
	}
	return prev[b.length];
}

/** A corrected query when a word looks misspelled ("prescripton" → "prescription"), or null. */
export function suggest(q: string): string | null {
	const vocab = buildVocabulary();
	let changed = false;
	const fixed = terms(q).map((t) => {
		if (t.length < 4 || vocab.has(t)) return t;
		let best = t;
		let bestD = t.length > 7 ? 3 : 2;
		let bestN = 0;
		for (const [w, n] of vocab) {
			if (w[0] !== t[0]) continue;
			const d = distance(t, w, bestD);
			if (d < bestD || (d === bestD && n > bestN && best !== t)) {
				best = w;
				bestD = d;
				bestN = n;
			}
		}
		if (best !== t) changed = true;
		return best;
	});
	return changed ? fixed.join(' ') : null;
}
