import type { HighlightColor, UserEssayDraft, UserHighlight, UserMcqAttempt } from '$lib/types';
import { COLOR_NAMES, DEFAULT_HIGHLIGHT_LABELS, HIGHLIGHT_COLORS } from '$lib/highlights.svelte';
import { canonicalModuleId } from '$lib/data/aliases';

const KEYS = {
	mcq: 'law_mcq_attempts',
	essay: 'law_essay_drafts',
	bookmarks: 'law_bookmarks',
	highlights: 'law_highlights',
	highlightLabels: 'law_highlight_labels',
	/** Added with the reader: last location, visited/studied topics, guide bookmarks, notes, recent searches. */
	reading: 'sc_reading'
} as const;

/** Where the reader was, or what a guide bookmark points at. */
export interface ReadingLocation {
	subjectId: string;
	partId: string;
	/** An element id inside the part (a topic heading, a section, a case). */
	anchor?: string;
	/** What to call it in lists, e.g. "Rule 110 · 2 · Section-by-section discussion". */
	title: string;
	at: number;
}

export interface GuideBookmark extends ReadingLocation {
	id: string;
}

export interface UserNote {
	id: string;
	title: string;
	body: string;
	/** Optional link to a place in a guide. */
	link?: Omit<ReadingLocation, 'at'>;
	createdAt: number;
	updatedAt: number;
}

export interface ReadingData {
	v: 1;
	last?: ReadingLocation;
	lastBySubject: Record<string, ReadingLocation>;
	/** Most recent first, one per part. */
	recent: ReadingLocation[];
	/** `<subject>/<part>/<unit>` → when it was first scrolled through. Visited is never counted as studied. */
	visited: Record<string, number>;
	/** `<subject>/<part>/<unit>` → when the reader marked it studied. */
	studied: Record<string, number>;
	bookmarks: GuideBookmark[];
	notes: UserNote[];
	recentSearches: { q: string; at: number }[];
}

const emptyReading = (): ReadingData => ({ v: 1, lastBySubject: {}, recent: [], visited: {}, studied: {}, bookmarks: [], notes: [], recentSearches: [] });

const isLocation = (v: unknown): v is ReadingLocation =>
	isRecord(v) && typeof v.subjectId === 'string' && typeof v.partId === 'string' && typeof v.title === 'string' && typeof v.at === 'number';

/** Keeps whatever parts of a stored reading blob are well formed. */
function cleanReading(v: unknown): ReadingData {
	const out = emptyReading();
	if (!isRecord(v)) return out;
	if (isLocation(v.last)) out.last = v.last;
	if (isRecord(v.lastBySubject)) out.lastBySubject = Object.fromEntries(Object.entries(v.lastBySubject).filter((e): e is [string, ReadingLocation] => isLocation(e[1])));
	if (Array.isArray(v.recent)) out.recent = v.recent.filter(isLocation).slice(0, 20);
	const stamps = (x: unknown) => (isRecord(x) ? Object.fromEntries(Object.entries(x).filter((e): e is [string, number] => typeof e[1] === 'number')) : {});
	out.visited = stamps(v.visited);
	out.studied = stamps(v.studied);
	if (Array.isArray(v.bookmarks)) out.bookmarks = v.bookmarks.filter((b): b is GuideBookmark => isLocation(b) && typeof (b as GuideBookmark).id === 'string');
	if (Array.isArray(v.notes))
		out.notes = v.notes.filter(
			(n): n is UserNote => isRecord(n) && typeof n.id === 'string' && typeof n.title === 'string' && typeof n.body === 'string' && typeof n.createdAt === 'number' && typeof n.updatedAt === 'number'
		);
	if (Array.isArray(v.recentSearches)) out.recentSearches = v.recentSearches.filter((r): r is { q: string; at: number } => isRecord(r) && typeof r.q === 'string' && typeof r.at === 'number').slice(0, 10);
	return out;
}

const PERSIST_DELAY_MS = 300;

function isRecord(v: unknown): v is Record<string, unknown> {
	return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function isHighlight(v: unknown): v is UserHighlight {
	return (
		isRecord(v) &&
		typeof v.id === 'string' &&
		typeof v.moduleId === 'string' &&
		typeof v.scope === 'string' &&
		typeof v.quote === 'string' &&
		v.quote.length > 0 &&
		typeof v.prefix === 'string' &&
		typeof v.suffix === 'string' &&
		typeof v.start === 'number' &&
		HIGHLIGHT_COLORS.includes(v.color as HighlightColor) &&
		(v.note === undefined || typeof v.note === 'string')
	);
}

/**
 * Drops malformed entries one by one, so a single bad highlight doesn't cost the reader all the others. Highlights made
 * in a subject that has since been merged into another (`statcon2`, `pfr_cases`) move to that subject; their ids,
 * scopes and anchors are unchanged, so they land on the same text.
 */
function cleanHighlights(v: Record<string, unknown>): Record<string, UserHighlight> {
	return Object.fromEntries(
		Object.entries(v)
			.filter((e): e is [string, UserHighlight] => isHighlight(e[1]))
			.map(([k, h]) => [k, h.moduleId === canonicalModuleId(h.moduleId) ? h : { ...h, moduleId: canonicalModuleId(h.moduleId) }])
	);
}

/** Missing or blank-typed labels fall back to the defaults. */
function cleanLabels(v: Record<string, unknown>): Record<HighlightColor, string> {
	return Object.fromEntries(HIGHLIGHT_COLORS.map((c) => [c, typeof v[c] === 'string' ? v[c] : DEFAULT_HIGHLIGHT_LABELS[c]])) as Record<HighlightColor, string>;
}

/** Parses a stored JSON blob, returning `fallback` if it is missing or the wrong shape. */
function readJson<T>(key: string, valid: (v: unknown) => v is T, fallback: T): T {
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return fallback;
		const parsed: unknown = JSON.parse(raw);
		return valid(parsed) ? parsed : fallback;
	} catch (e) {
		console.error(`Failed to read ${key} from localStorage`, e);
		return fallback;
	}
}

export interface ProgressStats {
	attempted: number;
	correct: number;
	accuracy: number;
	essaysStarted: number;
	mastered: number;
	needsReview: number;
}

class StorageStore {
	mcqAttempts = $state<Record<string, UserMcqAttempt>>({});
	essayDrafts = $state<Record<string, UserEssayDraft>>({});
	bookmarks = $state<string[]>([]);
	highlights = $state<Record<string, UserHighlight>>({});
	highlightLabels = $state<Record<HighlightColor, string>>({ ...DEFAULT_HIGHLIGHT_LABELS });
	reading = $state<ReadingData>(emptyReading());
	isLoaded = $state(false);
	/** Set when the browser refuses a write (private mode, quota). Progress then lives only in memory. */
	persistError = $state(false);

	private timer: ReturnType<typeof setTimeout> | undefined;
	private pending: Record<string, string> = {};
	/** Set while applying data that came *from* storage, so we don't echo it straight back (cross-tab ping-pong). */
	private skipPersist = false;

	constructor() {
		if (typeof window === 'undefined') return;
		this.loadFromStorage();

		$effect.root(() => {
			$effect(() => {
				if (!this.isLoaded) return;
				// Reading everything here is what subscribes the effect to deep changes.
				this.pending[KEYS.mcq] = JSON.stringify(this.mcqAttempts);
				this.pending[KEYS.essay] = JSON.stringify(this.essayDrafts);
				this.pending[KEYS.bookmarks] = JSON.stringify(this.bookmarks);
				this.pending[KEYS.highlights] = JSON.stringify(this.highlights);
				this.pending[KEYS.highlightLabels] = JSON.stringify(this.highlightLabels);
				this.pending[KEYS.reading] = JSON.stringify(this.reading);
				if (this.skipPersist) {
					this.skipPersist = false;
					this.pending = {};
					return;
				}
				clearTimeout(this.timer);
				this.timer = setTimeout(() => this.flush(), PERSIST_DELAY_MS);
			});
		});

		// Don't lose the last keystrokes when the tab closes or is backgrounded on mobile.
		window.addEventListener('pagehide', () => this.flush());
		document.addEventListener('visibilitychange', () => {
			if (document.visibilityState === 'hidden') this.flush();
		});
		// Keep several open tabs consistent.
		window.addEventListener('storage', (e) => {
			if (e.key === null || Object.values(KEYS).includes(e.key as (typeof KEYS)[keyof typeof KEYS])) {
				clearTimeout(this.timer);
				this.pending = {};
				this.skipPersist = true;
				this.loadFromStorage();
			}
		});
	}

	private loadFromStorage() {
		this.mcqAttempts = readJson(KEYS.mcq, isRecord as (v: unknown) => v is Record<string, UserMcqAttempt>, {});
		this.essayDrafts = readJson(KEYS.essay, isRecord as (v: unknown) => v is Record<string, UserEssayDraft>, {});
		this.bookmarks = readJson(KEYS.bookmarks, (v): v is string[] => Array.isArray(v) && v.every((x) => typeof x === 'string'), []);
		this.highlights = cleanHighlights(readJson(KEYS.highlights, isRecord, {}));
		this.highlightLabels = cleanLabels(readJson(KEYS.highlightLabels, isRecord, {}));
		this.reading = cleanReading(readJson(KEYS.reading, isRecord, {}));
		this.isLoaded = true;
	}

	private flush() {
		clearTimeout(this.timer);
		const entries = Object.entries(this.pending);
		if (!entries.length) return;
		this.pending = {};
		try {
			for (const [k, v] of entries) localStorage.setItem(k, v);
			this.persistError = false;
		} catch (e) {
			console.error('Failed to save to localStorage', e);
			this.persistError = true;
		}
	}

	recordMcqAttempt(questionId: string, selectedIndex: number, isCorrect: boolean) {
		this.mcqAttempts[questionId] = { questionId, selectedIndex, isCorrect, timestamp: Date.now() };
	}

	clearMcqAttempt(questionId: string) {
		delete this.mcqAttempts[questionId];
	}

	saveEssayDraft(essayId: string, draft: Partial<UserEssayDraft>) {
		const existing = this.essayDrafts[essayId] ?? {
			essayId,
			answer: '',
			legalBasis: '',
			application: '',
			conclusion: '',
			isMastered: false,
			updatedAt: Date.now()
		};
		this.essayDrafts[essayId] = { ...existing, ...draft, essayId, updatedAt: Date.now() };
	}

	clearEssayDraft(essayId: string) {
		delete this.essayDrafts[essayId];
	}

	isBookmarked(id: string) {
		return this.bookmarks.includes(id);
	}

	toggleBookmark(id: string) {
		this.bookmarks = this.bookmarks.includes(id) ? this.bookmarks.filter((b) => b !== id) : [...this.bookmarks, id];
	}

	highlightsFor(moduleId: string) {
		const id = canonicalModuleId(moduleId);
		return Object.values(this.highlights).filter((h) => h.moduleId === id);
	}

	addHighlight(h: Omit<UserHighlight, 'createdAt' | 'updatedAt'>) {
		const now = Date.now();
		this.highlights[h.id] = { ...h, createdAt: now, updatedAt: now };
	}

	/** Recolors, re-notes, or (with a new scope and anchor) moves a highlight to different text. */
	updateHighlight(id: string, patch: Partial<Omit<UserHighlight, 'id' | 'moduleId' | 'createdAt' | 'updatedAt'>>) {
		const h = this.highlights[id];
		if (h) this.highlights[id] = { ...h, ...patch, updatedAt: Date.now() };
	}

	removeHighlight(id: string) {
		delete this.highlights[id];
	}

	removeHighlightsFor(moduleId: string) {
		const id = canonicalModuleId(moduleId);
		this.highlights = Object.fromEntries(Object.entries(this.highlights).filter(([, h]) => h.moduleId !== id));
	}

	// ---- reading: position, progress, guide bookmarks, notes, recent searches ----

	/** Remembers where the reader is. Called as they scroll, so it only writes when the place changes. */
	setLocation(loc: Omit<ReadingLocation, 'at'>) {
		const r = this.reading;
		const same = (a?: ReadingLocation) => a && a.subjectId === loc.subjectId && a.partId === loc.partId && a.anchor === loc.anchor && a.title === loc.title;
		if (same(r.last)) return;
		const at = Date.now();
		const next = { ...loc, at };
		r.last = next;
		r.lastBySubject[loc.subjectId] = next;
		r.recent = [next, ...r.recent.filter((x) => !(x.subjectId === loc.subjectId && x.partId === loc.partId))].slice(0, 20);
	}

	markVisited(key: string) {
		if (!this.reading.visited[key]) this.reading.visited[key] = Date.now();
	}

	isStudied(key: string) {
		return !!this.reading.studied[key];
	}

	setStudied(keys: string[], studied: boolean) {
		const at = Date.now();
		for (const k of keys) {
			if (studied) this.reading.studied[k] ||= at;
			else delete this.reading.studied[k];
		}
	}

	/** Studied, visited-only and total counts for a set of unit keys. */
	readingProgress(keys: string[]) {
		let studied = 0;
		let visited = 0;
		for (const k of keys) {
			if (this.reading.studied[k]) studied++;
			else if (this.reading.visited[k]) visited++;
		}
		return { studied, visited, total: keys.length };
	}

	guideBookmark(subjectId: string, partId: string, anchor?: string) {
		return this.reading.bookmarks.find((b) => b.subjectId === subjectId && b.partId === partId && (b.anchor ?? '') === (anchor ?? ''));
	}

	toggleGuideBookmark(loc: Omit<ReadingLocation, 'at'>) {
		const existing = this.guideBookmark(loc.subjectId, loc.partId, loc.anchor);
		if (existing) this.reading.bookmarks = this.reading.bookmarks.filter((b) => b !== existing);
		else this.reading.bookmarks = [{ ...loc, at: Date.now(), id: `bm:${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}` }, ...this.reading.bookmarks];
		return !existing;
	}

	removeGuideBookmark(id: string) {
		this.reading.bookmarks = this.reading.bookmarks.filter((b) => b.id !== id);
	}

	addNote(note: Partial<Pick<UserNote, 'title' | 'body' | 'link'>> = {}) {
		const now = Date.now();
		const n: UserNote = { id: `note:${now.toString(36)}${Math.random().toString(36).slice(2, 6)}`, title: note.title ?? '', body: note.body ?? '', link: note.link, createdAt: now, updatedAt: now };
		this.reading.notes = [n, ...this.reading.notes];
		return n.id;
	}

	updateNote(id: string, patch: Partial<Pick<UserNote, 'title' | 'body' | 'link'>>) {
		const i = this.reading.notes.findIndex((n) => n.id === id);
		if (i >= 0) this.reading.notes[i] = { ...this.reading.notes[i], ...patch, updatedAt: Date.now() };
	}

	removeNote(id: string) {
		this.reading.notes = this.reading.notes.filter((n) => n.id !== id);
	}

	addRecentSearch(q: string) {
		const query = q.trim();
		if (query.length < 2) return;
		this.reading.recentSearches = [{ q: query, at: Date.now() }, ...this.reading.recentSearches.filter((r) => r.q.toLowerCase() !== query.toLowerCase())].slice(0, 8);
	}

	clearRecentSearches() {
		this.reading.recentSearches = [];
	}

	/** The reader's name for a color, or the color itself if they cleared it. */
	highlightLabel(color: HighlightColor) {
		return this.highlightLabels[color]?.trim() || COLOR_NAMES[color];
	}

	setHighlightLabel(color: HighlightColor, label: string) {
		this.highlightLabels[color] = label;
	}

	/**
	 * Totals for a subject, or for everything when no ids are given. Saved ids are `<moduleId>:…`, so a merged subject
	 * passes every module id it is built from (its `legacyIds`).
	 */
	stats(moduleIds?: string | string[]): ProgressStats {
		const prefixes = moduleIds === undefined ? [''] : (Array.isArray(moduleIds) ? moduleIds : [moduleIds]).map((m) => `${m}:`);
		const owns = (id: string) => prefixes.some((p) => id.startsWith(p));
		let attempted = 0;
		let correct = 0;
		for (const [id, a] of Object.entries(this.mcqAttempts)) {
			if (!owns(id)) continue;
			attempted++;
			if (a.isCorrect) correct++;
		}
		let essaysStarted = 0;
		let mastered = 0;
		let needsReview = 0;
		for (const [id, d] of Object.entries(this.essayDrafts)) {
			if (!owns(id)) continue;
			if (d.isMastered) mastered++;
			else if (d.needsReview) needsReview++;
			if (d.answer || d.legalBasis || d.application || d.conclusion || d.isMastered) essaysStarted++;
		}
		return { attempted, correct, accuracy: attempted ? Math.round((correct / attempted) * 100) : 0, essaysStarted, mastered, needsReview };
	}

	exportJson() {
		return JSON.stringify(
			{
				app: 'subpoena-colada',
				version: 3,
				exportedAt: new Date().toISOString(),
				mcqAttempts: this.mcqAttempts,
				essayDrafts: this.essayDrafts,
				bookmarks: this.bookmarks,
				highlights: this.highlights,
				highlightLabels: this.highlightLabels,
				reading: this.reading
			},
			null,
			2
		);
	}

	/** What an export file holds, without applying it. Throws if the file is not a valid export. */
	inspectImport(text: string) {
		let data: unknown;
		try {
			data = JSON.parse(text);
		} catch {
			throw new Error('That file is not valid JSON.');
		}
		if (!isRecord(data) || (data.app !== 'subpoena-colada' && data.app !== 'law-reviewer') || !isRecord(data.mcqAttempts) || !isRecord(data.essayDrafts) || !Array.isArray(data.bookmarks)) {
			throw new Error('This file is not a Subpoena Colada progress export.');
		}
		const reading = isRecord(data.reading) ? cleanReading(data.reading) : null;
		return {
			version: typeof data.version === 'number' ? data.version : 1,
			exportedAt: typeof data.exportedAt === 'string' ? data.exportedAt : '',
			answers: Object.keys(data.mcqAttempts).length,
			drafts: Object.keys(data.essayDrafts).length,
			bookmarks: data.bookmarks.length + (reading?.bookmarks.length ?? 0),
			highlights: isRecord(data.highlights) ? Object.keys(cleanHighlights(data.highlights)).length : 0,
			notes: reading?.notes.length ?? 0,
			hasReading: !!reading
		};
	}

	/**
	 * Replaces current progress with an exported file. Throws if the file is not a valid export. Older exports (v1, v2)
	 * have no reading data or highlights; importing one leaves those as they are.
	 */
	importJson(text: string) {
		this.inspectImport(text);
		const data = JSON.parse(text) as Record<string, unknown> & { mcqAttempts: Record<string, unknown>; essayDrafts: Record<string, unknown>; bookmarks: unknown[] };
		this.mcqAttempts = data.mcqAttempts as Record<string, UserMcqAttempt>;
		this.essayDrafts = data.essayDrafts as Record<string, UserEssayDraft>;
		this.bookmarks = data.bookmarks.filter((b): b is string => typeof b === 'string');
		// Version 1 exports predate highlights; importing one leaves the reader's highlights alone.
		if (isRecord(data.highlights)) this.highlights = cleanHighlights(data.highlights);
		if (isRecord(data.highlightLabels)) this.highlightLabels = cleanLabels(data.highlightLabels);
		if (isRecord(data.reading)) this.reading = cleanReading(data.reading);
	}

	resetAllProgress() {
		this.mcqAttempts = {};
		this.essayDrafts = {};
		this.bookmarks = [];
		this.highlights = {};
		this.reading = emptyReading();
		if (typeof window !== 'undefined') {
			// Only our own keys — localStorage.clear() would also wipe the theme and any other app on this origin.
			// Highlight labels are a preference, like the theme, so they stay.
			clearTimeout(this.timer);
			this.pending = {};
			try {
				Object.values(KEYS)
					.filter((k) => k !== KEYS.highlightLabels)
					.forEach((k) => localStorage.removeItem(k));
			} catch (e) {
				console.error('Failed to clear localStorage', e);
			}
		}
	}
}

export const userStorage = new StorageStore();
