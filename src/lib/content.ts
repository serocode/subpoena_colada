import type { CaseDigest, LegendItem, Subject } from '$lib/types';
import { modules } from '$lib/data/modules';
import { canonicalPartId } from '$lib/data/aliases';

/**
 * The reading structure of a subject, parsed once from the guides' first-party HTML:
 * Subject → Part (each guide's h2, or a group of case digests) → Topic (h3, or a case topic).
 * Nothing in the text is changed; parts and topics are the guide's own headings and ids.
 */

export interface Topic {
	id: string;
	title: string;
}

export interface CaseGroup {
	id: string;
	title: string;
	cases: CaseDigest[];
}

export interface Chunk {
	/** The h3 the chunk starts with, or null for the part's opening text. */
	topic: Topic | null;
	html: string;
}

export interface Part {
	/** The h2 id, `overview` for text before a guide's first h2, or `cases-<n>` for a group of digests. */
	id: string;
	title: string;
	/** A short label for navigation ("Rule 110", "Ch. VI", "Art. VIII"), when the title has one. */
	label: string;
	/** The title without its label. */
	name: string;
	sourceId: string;
	group: string;
	index: number;
	kind: 'guide' | 'cases';
	/** Guide parts: the part's HTML split at its top-level h3s, so topics can collapse. */
	chunks: Chunk[];
	caseGroups: CaseGroup[];
	topics: Topic[];
	/** What "studied" is tracked on: each topic, or the part itself when it has none. */
	units: string[];
	/** Every element id in the part, for resolving old `#anchor` links. */
	anchors: Set<string>;
	/** A wrapper class the source opened before the part's h2 (crim1's `sg-notes`). */
	wrapClass: string;
}

const ENTITIES: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ', '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”', '&mdash;': '—', '&ndash;': '–', '&hellip;': '…', '&sect;': '§' };

/** Plain text of an HTML fragment, whitespace collapsed. */
export function textOf(html: string) {
	return html
		.replace(/<[^>]+>/g, ' ')
		.replace(/&[a-z]+;|&#\d+;/g, (m) => ENTITIES[m] ?? (m.startsWith('&#') ? String.fromCharCode(Number(m.slice(2, -1))) : ' '))
		.replace(/\s+/g, ' ')
		.trim();
}

const BLOCK = /<(\/?)(div|section|details|table|ul|ol|dl|blockquote|aside|article|figure)\b[^>]*>/gi;

/** Block-element nesting depth at the end of `html` (negative if it closes more than it opens). */
function depthAt(html: string) {
	let d = 0;
	for (const m of html.matchAll(BLOCK)) d += m[1] ? -1 : 1;
	return d;
}

/** Splits a part's HTML at the h3s that sit at its top level; nested h3s stay inside their chunk. */
function splitTopics(html: string): Chunk[] {
	const chunks: Chunk[] = [];
	let start = 0;
	let open: Topic | null = null;
	for (const m of html.matchAll(/<h3\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h3>/g)) {
		const at = m.index ?? 0;
		if (depthAt(html.slice(0, at)) > 0) continue;
		if (at > start || open) chunks.push({ topic: open, html: html.slice(start, at) });
		open = { id: m[1], title: textOf(m[2]) };
		start = at;
	}
	chunks.push({ topic: open, html: html.slice(start) });
	return chunks.filter((c) => c.topic || textOf(c.html) || /<(table|img|hr)\b/.test(c.html));
}

/** "Rule 110 — Prosecution of Offenses" → label "Rule 110", name "Prosecution of Offenses". */
export function splitTitle(title: string): { label: string; name: string } {
	let m = title.match(/^Part ([IVXL]+) — Article ([IVXL]+(?:-[A-D])?):\s*(.+)$/);
	if (m) return { label: `Art. ${m[2]}`, name: m[3] };
	m = title.match(/^Chapter ([IVXL]+|\d+) — (.+)$/);
	if (m) return { label: `Ch. ${m[1]}`, name: m[2] };
	m = title.match(/^(Rule \d+|Part [IVXL]+) — (.+)$/);
	if (m) return { label: m[1], name: m[2] };
	return { label: '', name: title };
}

interface Rule {
	title: string;
	test: (p: { id: string; sourceId: string; kind: Part['kind']; title: string }) => boolean;
}

/** How each subject's navigator is grouped. Parts go to the first matching group; groups keep this order. */
const GROUPS: Record<string, Rule[]> = {
	pfr: [
		{ title: 'Study guide', test: (p) => p.sourceId === 'pfr' && !p.id.includes('review-tools') },
		{ title: 'Case pronouncements', test: (p) => p.sourceId === 'pfr_cases' },
		{ title: 'Review', test: () => true }
	],
	consti1: [{ title: '1987 Constitution', test: () => true }],
	crim1: [
		{ title: 'Discussion and principles', test: (p) => !/^part-/.test(p.id) },
		{ title: 'Revised Penal Code, Book One', test: () => true }
	],
	crimpro: [
		{ title: 'Start', test: (p) => p.id === 'start-here' || p.id === 'prelim' },
		{ title: 'Rules 110–127', test: (p) => /^r1\d\d$/.test(p.id) || p.id.startsWith('prescription') },
		{ title: 'Review and testing', test: () => true }
	],
	statcon: [
		{ title: 'Chapters I–V', test: (p) => p.sourceId === 'statcon' && p.id.startsWith('chapter-') },
		{ title: 'Chapters VI–XI', test: (p) => p.sourceId === 'statcon2' && (p.id === 'start-here' || p.id.startsWith('ch')) },
		{ title: 'The five cases', test: (p) => p.id === 'five-cases' || p.kind === 'cases' },
		{ title: 'Review', test: () => true }
	]
};

/** Titles for text that sits before a source's first h2. */
const INTRO_TITLES: Record<string, string> = {
	pfr_cases: 'About the case digests'
};

const cache = new Map<string, Part[]>();

function parse(subject: Subject): Part[] {
	type Raw = Omit<Part, 'group' | 'index' | 'label' | 'name'>;
	const raw: Raw[] = [];

	for (const src of subject.sources) {
		const pieces = src.studyGuideHtml.split(/(?=<h2\b)/);
		const start = raw.length;
		let wrapNext = '';
		pieces.forEach((piece, i) => {
			if (!piece.trim()) return;
			const h2 = piece.match(/^<h2[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/);
			if (!h2) {
				// Text before the first h2. An opening wrapper with nothing in it belongs to the next part.
				const opener = piece.trim().match(/^<div class="([^"]+)">$/);
				if (opener) {
					wrapNext = opener[1];
					return;
				}
				if (!textOf(piece)) return;
				raw.push({ id: 'overview', title: INTRO_TITLES[src.id] ?? 'Introduction', sourceId: src.id, kind: 'guide', chunks: splitTopics(piece), caseGroups: [], topics: [], units: [], anchors: new Set(), wrapClass: '' });
				return;
			}
			const wrapClass = wrapNext && i > 0 && depthAt(piece) < 0 ? wrapNext : '';
			wrapNext = '';
			raw.push({ id: h2[1], title: textOf(h2[2]), sourceId: src.id, kind: 'guide', chunks: splitTopics(piece), caseGroups: [], topics: [], units: [], anchors: new Set(), wrapClass });
		});

		// Case digests, grouped by syllabus part then topic, each part one reader page.
		const parts: { title: string; groups: CaseGroup[] }[] = [];
		for (const c of src.cases ?? []) {
			const title = c.part ?? 'Case digests';
			let part = parts.find((p) => p.title === title);
			if (!part) parts.push((part = { title, groups: [] }));
			let group = part.groups.find((g) => g.title === c.topic);
			if (!group) part.groups.push((group = { id: '', title: c.topic, cases: [] }));
			group.cases.push(c);
		}
		// Digests follow the source's own introduction when it has one, else its last part.
		const intro = raw.findIndex((r, i) => i >= start && r.id === 'overview');
		const casesParts: Raw[] = parts.map((p, pi) => {
			const id = `cases-${pi + 1}`;
			p.groups.forEach((g, gi) => (g.id = `${id}-t${gi + 1}`));
			return { id, title: p.title, sourceId: src.id, kind: 'cases', chunks: [], caseGroups: p.groups, topics: [], units: [], anchors: new Set(), wrapClass: '' };
		});
		raw.splice(intro >= 0 ? intro + 1 : raw.length, 0, ...casesParts);
	}

	const rules = GROUPS[subject.id] ?? [{ title: 'Study guide', test: () => true }];
	const grouped = raw.map((r, order) => ({ r, order, g: Math.max(0, rules.findIndex((rule) => rule.test(r))) }));
	grouped.sort((a, b) => a.g - b.g || a.order - b.order);

	return grouped.map(({ r, g }, index) => {
		const topics = r.kind === 'cases' ? r.caseGroups.map((c) => ({ id: c.id, title: c.title })) : r.chunks.flatMap((c) => (c.topic ? [c.topic] : []));
		const anchors = new Set<string>([r.id]);
		for (const c of r.chunks) for (const m of c.html.matchAll(/\bid="([^"]+)"/g)) anchors.add(m[1]);
		for (const g of r.caseGroups) {
			anchors.add(g.id);
			for (const c of g.cases) anchors.add(caseAnchor(c.id));
		}
		const { label, name } = splitTitle(r.title);
		return { ...r, label, name, group: rules[g]?.title ?? '', index, topics, units: topics.length ? topics.map((t) => t.id) : [r.id], anchors };
	});
}

/** The element id a case digest renders with. */
export const caseAnchor = (caseId: string) => `digest-${caseId.replace(/[^A-Za-z0-9_-]/g, '-')}`;

export function getParts(subject: Subject): Part[] {
	let parts = cache.get(subject.id);
	if (!parts) cache.set(subject.id, (parts = parse(subject)));
	return parts;
}

/** Accepts renamed part ids (PART_ALIASES), so old links still resolve. */
export function getPart(subject: Subject, partId: string) {
	const id = canonicalPartId(subject.id, partId);
	return getParts(subject).find((p) => p.id === id);
}

/** The part that contains an element id: an old `/module/x#anchor` link, a search hit, a saved location. */
export function partForAnchor(subject: Subject, anchor: string) {
	return getParts(subject).find((p) => p.anchors.has(anchor));
}

/** The part a highlight scope (`guide:<h2 id>` or `case:<case id>`) lives in. */
export function partForScope(subject: Subject, scope: string) {
	if (scope.startsWith('case:')) {
		const id = scope.slice(5);
		return getParts(subject).find((p) => p.caseGroups.some((g) => g.cases.some((c) => c.id === id)));
	}
	return getPart(subject, scope.replace(/^guide:/, ''));
}

/** The scopes a part renders, for highlights. */
export function scopesOf(part: Part) {
	return part.kind === 'cases' ? part.caseGroups.flatMap((g) => g.cases.map((c) => `case:${c.id}`)) : [`guide:${part.id}`];
}

/** Every highlight scope in a subject with a readable title, in reading order. */
export function subjectScopes(subject: Subject) {
	return getParts(subject).flatMap((p) =>
		p.kind === 'cases' ? p.caseGroups.flatMap((g) => g.cases.map((c) => ({ id: `case:${c.id}`, title: c.title, partId: p.id }))) : [{ id: `guide:${p.id}`, title: p.title, partId: p.id }]
	);
}

/** The color legend for the guide a part comes from (the two halves of a merged subject use different legends). */
export function legendFor(subject: Subject, part: Part | undefined): LegendItem[] {
	const src = subject.sources.find((s) => s.id === part?.sourceId);
	return src?.legend ?? subject.legend ?? [];
}

export function introFor(subject: Subject, part: Part | undefined) {
	const src = subject.sources.find((s) => s.id === part?.sourceId);
	return src?.studyGuideIntro ?? subject.studyGuideIntro;
}

/** Groups in navigator order, each with its parts. */
export function groupedParts(subject: Subject) {
	const out: { title: string; parts: Part[] }[] = [];
	for (const p of getParts(subject)) {
		const last = out[out.length - 1];
		if (last && last.title === p.group) last.parts.push(p);
		else out.push({ title: p.group, parts: [p] });
	}
	return out;
}

/** Every progress unit in a subject (`<part>/<unit>`), for subject-level reading progress. */
export function subjectUnits(subject: Subject) {
	return getParts(subject).flatMap((p) => p.units.map((u) => unitKey(subject.id, p.id, u)));
}

export const unitKey = (subjectId: string, partId: string, unit: string) => `${subjectId}/${partId}/${unit}`;

export const allSubjects = () => modules;

/** The URL of a place in the reader. */
export function readHref(subjectId: string, partId: string, anchor?: string, query?: string) {
	const q = query ? `?q=${encodeURIComponent(query)}` : '';
	return `/module/${subjectId}/read/${encodeURIComponent(partId)}${q}${anchor ? `#${anchor}` : ''}`;
}
