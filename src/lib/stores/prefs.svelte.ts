/**
 * Reading and interface preferences. Like the theme and text size, these are preferences rather than progress: they
 * live under their own key, survive "Reset all progress", and are not part of backups.
 */
export type LineWidth = 'narrow' | 'normal' | 'wide';
export type LineSpacing = 'compact' | 'normal' | 'relaxed';
export type SectionsOpen = 'all' | 'first' | 'none';

export interface Prefs {
	lineWidth: LineWidth;
	lineSpacing: LineSpacing;
	sectionsOpen: SectionsOpen;
	rememberPosition: boolean;
	keepRecentSearches: boolean;
	navCollapsed: boolean;
}

const KEY = 'sc_prefs';

const DEFAULTS: Prefs = {
	lineWidth: 'normal',
	lineSpacing: 'normal',
	sectionsOpen: 'all',
	rememberPosition: true,
	keepRecentSearches: true,
	navCollapsed: false
};

const OPTIONS = {
	lineWidth: ['narrow', 'normal', 'wide'],
	lineSpacing: ['compact', 'normal', 'relaxed'],
	sectionsOpen: ['all', 'first', 'none']
} as const;

function read(): Prefs {
	try {
		const raw = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<Record<keyof Prefs, unknown>>;
		const out = { ...DEFAULTS };
		for (const k of Object.keys(OPTIONS) as (keyof typeof OPTIONS)[]) {
			const v = raw[k];
			if (typeof v === 'string' && (OPTIONS[k] as readonly string[]).includes(v)) (out as Record<string, unknown>)[k] = v;
		}
		for (const k of ['rememberPosition', 'keepRecentSearches', 'navCollapsed'] as const) if (typeof raw[k] === 'boolean') out[k] = raw[k] as boolean;
		return out;
	} catch {
		return { ...DEFAULTS };
	}
}

/** Reading measure in rem, matching the design system (600 / 720 / 880 px at the default text size). */
export const LINE_WIDTH_REM: Record<LineWidth, number> = { narrow: 37.5, normal: 45, wide: 55 };
export const LINE_HEIGHT: Record<LineSpacing, number> = { compact: 1.55, normal: 1.7, relaxed: 1.9 };

class PrefsStore {
	value = $state<Prefs>({ ...DEFAULTS });

	constructor() {
		if (typeof window === 'undefined') return;
		this.value = read();
		window.addEventListener('storage', (e) => {
			if (e.key === KEY || e.key === null) this.value = read();
		});
	}

	set<K extends keyof Prefs>(key: K, v: Prefs[K]) {
		this.value[key] = v;
		try {
			localStorage.setItem(KEY, JSON.stringify(this.value));
		} catch {
			/* storage unavailable: the preference still applies for this visit */
		}
	}
}

export const prefs = new PrefsStore();
