/**
 * Modules that used to be subjects of their own and are now shown inside another subject. Kept in a file with no
 * data imports so the storage layer can migrate saved highlights without pulling in the question banks.
 */
export const MODULE_ALIASES: Readonly<Record<string, string>> = {
	statcon2: 'statcon',
	pfr_cases: 'pfr'
};

/** The subject a module id belongs to now (old links and saved highlights use the old ids). */
export const canonicalModuleId = (id: string) => MODULE_ALIASES[id] ?? id;

/**
 * Guide parts whose id changed, per subject (old id → new id). Saved highlights, reading progress, bookmarks and old
 * links that use an old id are moved to the new one.
 */
export const PART_ALIASES: Readonly<Record<string, Readonly<Record<string, string>>>> = {
	crim1: { 'class-discussion-judge-merlas': 'class-discussion' }
};

/** The current id of a guide part (old links and saved data may use a renamed id). */
export const canonicalPartId = (subjectId: string, partId: string) => PART_ALIASES[canonicalModuleId(subjectId)]?.[partId] ?? partId;

/** A highlight scope (`guide:<part id>` or `case:<id>`) with any renamed part id replaced. */
export function canonicalScope(subjectId: string, scope: string) {
	if (!scope.startsWith('guide:')) return scope;
	const id = scope.slice(6);
	const next = canonicalPartId(subjectId, id);
	return next === id ? scope : `guide:${next}`;
}

/** A reading-progress key (`<subject>/<part>/<unit>`) with any renamed part id replaced. */
export function canonicalUnitKey(key: string) {
	const [subject, part, ...rest] = key.split('/');
	if (!subject || !part) return key;
	const next = canonicalPartId(subject, part);
	// A part without topics uses its own id as the unit.
	const unit = rest.join('/');
	return [subject, next, ...(unit ? [unit === part ? next : unit] : [])].join('/');
}
