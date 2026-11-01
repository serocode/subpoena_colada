/** App-wide interface state that isn't saved: the search palette, the mobile navigator, toasts, focus mode. */

export interface Toast {
	id: number;
	message: string;
	tone: 'default' | 'error';
	action?: { label: string; run: () => void };
}

class UiStore {
	searchOpen = $state(false);
	/** Text to start the palette with (from "/" or a "Search Rule 110" button). */
	searchSeed = $state('');
	/** Scope the palette opens with: a subject id, `subject:part`, or '' for everything. */
	searchScope = $state('');
	navOpen = $state(false);
	/** An exam in progress hides the navigator so nothing competes with the questions. */
	focusMode = $state(false);
	toasts = $state<Toast[]>([]);
	#next = 1;

	openSearch(seed = '', scope = '') {
		this.searchSeed = seed;
		this.searchScope = scope;
		this.searchOpen = true;
	}

	toast(message: string, opts: { tone?: Toast['tone']; action?: Toast['action']; ms?: number } = {}) {
		const id = this.#next++;
		this.toasts = [...this.toasts, { id, message, tone: opts.tone ?? 'default', action: opts.action }];
		setTimeout(() => this.dismiss(id), opts.ms ?? 4500);
	}

	dismiss(id: number) {
		this.toasts = this.toasts.filter((t) => t.id !== id);
	}
}

export const ui = new UiStore();
