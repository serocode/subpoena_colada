import type { LawModule, Subject, SubjectCategory } from '$lib/types';
import { pfr } from './pfr';
import { pfrCases } from './pfr_cases';
import { consti1 } from './consti1';
import { crim1 } from './crim1';
import { statcon } from './statcon';
import { statcon2 } from './statcon2';
import { crimpro } from './crimpro';
import { canonicalModuleId } from './aliases';

const single = (m: LawModule): Subject => ({ ...m, sources: [m], legacyIds: [m.id] });

/**
 * Persons & Family Relations with its case-pronouncement digests. The digests keep their ids (`pfr_cases:<n>`), so
 * highlights made on them stay attached.
 */
const personsAndFamily: Subject = {
	...pfr,
	eyebrow: 'Civil Code · Family Code · Case pronouncements',
	description: `${pfr.description} The ${pfrCases.cases?.length ?? 0} case pronouncements follow the syllabus order and sit in the same guide.`,
	legalScope: `${pfr.legalScope} · ${pfrCases.legalScope}`,
	studyGuideHtml: '',
	cases: [...(pfr.cases ?? []), ...(pfrCases.cases ?? [])],
	sources: [pfr, pfrCases],
	legacyIds: [pfr.id, pfrCases.id]
};

/** Agpalo Chapters I–V (statcon) and VI–XI with the five cases (statcon2), read as one book. */
const statutoryConstruction: Subject = {
	...statcon,
	eyebrow: 'Agpalo · Chapters I–XI · Five Cases',
	description:
		'Kinds of statutes, construction and interpretation, aids to construction, literal language, words and phrases; then statutes read as a whole, strict and liberal construction, mandatory and directory statutes, prospective and retroactive laws, amendment and repeal, and constitutional construction, with the five assigned cases.',
	legalScope: 'Agpalo, Statutory Construction, Chapters I–XI; Catiis, Aquino, Manila Lodge, Corona, Magtajas',
	studyGuideIntro:
		'Agpalo in order: Chapters I–V, then Chapters VI–XI (each in the same thirteen parts, from overview to mastery checklist), the five assigned cases, and the review material for both halves.',
	topics: [
		...(statcon.topics ?? []).map((t, i) => ({ ...t, name: `Ch. ${['I', 'II', 'III', 'IV', 'V'][i] ?? i + 1} — ${t.name}` })),
		...(statcon2.topics ?? [])
	],
	studyGuideHtml: '',
	watchFor: { ...statcon.watchFor, ...statcon2.watchFor },
	mcqs: [...statcon.mcqs, ...statcon2.mcqs],
	essays: [...statcon.essays, ...statcon2.essays],
	cases: [...(statcon.cases ?? []), ...(statcon2.cases ?? [])],
	sources: [statcon, statcon2],
	legacyIds: [statcon.id, statcon2.id]
};

/** Master index, in the order shown on the dashboard. A subject's `id` is also its URL slug. */
export const modules: Subject[] = [personsAndFamily, single(consti1), single(crim1), single(crimpro), statutoryConstruction];

/** Looks a subject up by slug, accepting the old slugs of merged subjects (`statcon2`, `pfr_cases`). */
export function getModule(slug: string): Subject | undefined {
	const id = canonicalModuleId(slug);
	return modules.find((m) => m.id === id);
}

/** The subject a saved question, essay, case or highlight id belongs to (`<moduleId>:…`). */
export function subjectForItem(itemId: string): Subject | undefined {
	return getModule(itemId.split(':')[0]);
}

export type CategoryFilter = 'All' | 'Civil Law' | 'Political Law' | 'Criminal Law' | 'Remedial Law' | 'Legal Method';
export const CATEGORY_FILTERS: CategoryFilter[] = ['All', 'Civil Law', 'Political Law', 'Criminal Law', 'Remedial Law', 'Legal Method'];

/** The supplement category is kept in the type for old data; it filters under Civil Law. */
export function matchesCategory(category: SubjectCategory, filter: CategoryFilter) {
	return filter === 'All' || category === filter || (filter === 'Civil Law' && category === 'Civil Law — Supplement');
}

export const totals = {
	modules: modules.length,
	mcqs: modules.reduce((n, m) => n + m.mcqs.length, 0),
	essays: modules.reduce((n, m) => n + m.essays.length, 0),
	cases: modules.reduce((n, m) => n + (m.cases?.length ?? 0), 0)
};

/** Accent color token per category, resolved to CSS variables in app.css. */
export const CATEGORY_ACCENT: Record<SubjectCategory, 'blue' | 'purple' | 'red' | 'orange' | 'green'> = {
	'Civil Law': 'blue',
	'Civil Law — Supplement': 'blue',
	'Political Law': 'purple',
	'Criminal Law': 'red',
	'Remedial Law': 'orange',
	'Legal Method': 'green'
};
