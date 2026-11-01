import type { UserEssayDraft } from '$lib/types';

export type AlacKey = 'answer' | 'legalBasis' | 'application' | 'conclusion';

export interface AlacField {
	key: AlacKey;
	letter: 'A' | 'L' | 'C';
	name: string;
	/** Text shown above the textarea. */
	prompt: string;
	placeholder: string;
	/** Tailwind classes for the badge / accent (colors come from CSS variables in app.css). */
	badge: string;
	ring: string;
	bar: string;
}

export const ALAC_FIELDS: AlacField[] = [
	{
		key: 'answer',
		letter: 'A',
		name: 'Answer',
		prompt: 'A direct, categorical reply to the question asked.',
		placeholder: 'e.g. "Yes, the action will prosper because…" or "No, the marriage is void."',
		badge: 'bg-alac-a/15 text-alac-a border-alac-a/40',
		ring: 'focus-visible:border-alac-a focus-visible:ring-alac-a/30',
		bar: 'bg-alac-a'
	},
	{
		key: 'legalBasis',
		letter: 'L',
		name: 'Legal Basis',
		prompt: 'The codal provision, statute, or doctrine that governs.',
		placeholder: 'e.g. "Art. 36, Family Code provides that… In Santos v. CA, the Court held…"',
		badge: 'bg-alac-l/15 text-alac-l border-alac-l/40',
		ring: 'focus-visible:border-alac-l focus-visible:ring-alac-l/30',
		bar: 'bg-alac-l'
	},
	{
		key: 'application',
		letter: 'A',
		name: 'Application',
		prompt: 'Tie the facts to each element of the rule.',
		placeholder: 'Here, the facts show that… Since the first element is present because…',
		badge: 'bg-alac-p/15 text-alac-p border-alac-p/40',
		ring: 'focus-visible:border-alac-p focus-visible:ring-alac-p/30',
		bar: 'bg-alac-p'
	},
	{
		key: 'conclusion',
		letter: 'C',
		name: 'Conclusion',
		prompt: 'The final disposition, stated briefly.',
		placeholder: 'Therefore, the marriage is… / the accused should be…',
		badge: 'bg-alac-c/15 text-alac-c border-alac-c/40',
		ring: 'focus-visible:border-alac-c focus-visible:ring-alac-c/30',
		bar: 'bg-alac-c'
	}
];

export function draftWordCount(d: UserEssayDraft | undefined) {
	if (!d) return 0;
	return [d.answer, d.legalBasis, d.application, d.conclusion]
		.join(' ')
		.split(/\s+/)
		.filter(Boolean).length;
}

export function draftHasContent(d: UserEssayDraft | undefined) {
	return draftWordCount(d) > 0;
}

export type EssayStatus = 'mastered' | 'review' | 'drafted' | 'new';

export function essayStatus(d: UserEssayDraft | undefined): EssayStatus {
	if (d?.isMastered) return 'mastered';
	if (d?.needsReview) return 'review';
	if (draftHasContent(d)) return 'drafted';
	return 'new';
}

export const ESSAY_STATUS: Record<EssayStatus, { label: string; dot: string }> = {
	mastered: { label: 'Mastered', dot: 'bg-green' },
	review: { label: 'Needs review', dot: 'bg-orange' },
	drafted: { label: 'In progress', dot: 'bg-blue' },
	new: { label: 'Not started', dot: 'border border-input bg-transparent' }
};
