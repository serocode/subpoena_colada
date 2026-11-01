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
