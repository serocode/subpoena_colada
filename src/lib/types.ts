export interface McqOption {
	id: number;
	text: string;
}

export type McqTag = 'memorization' | 'requisites' | 'exceptions' | 'effects' | 'jurisprudence';

export interface McqQuestion {
	/** Globally unique and stable: `<moduleId>:<topicId>:<n>`. Used as the localStorage key. */
	id: string;
	topic: string;
	topicId?: string;
	tag?: McqTag;
	question: string;
	options: string[];
	correctIndex: number;
	explanation: string;
	/** Codal provision / jurisprudence cited for the item. */
	legalBasis?: string;
	hint?: string;
}

export interface AlacEssay {
	id: string;
	title: string;
	topic: string;
	factPattern: string;
	/** The question the examiner asks, e.g. "Is Juan liable? Discuss, using the ALAC method." */
	question?: string;
	modelAnswer: {
		answer: string; // Categorical affirmative/negative
		legalBasis: string; // Codal provision, statute, or doctrine
		application: string; // Intertwining facts with law elements
		conclusion: string; // Final disposition
	};
}

export interface CaseDigest {
	id: string;
	title: string;
	citation: string;
	topic: string;
	/** Syllabus part the digest sits under. */
	part?: string;
	keyRule: string;
	summary: string;
	/** Flagged in the source as not independently verified. */
	unverified?: boolean;
}

export type SubjectCategory =
	| 'Civil Law'
	| 'Civil Law — Supplement'
	| 'Political Law'
	| 'Criminal Law'
	| 'Remedial Law'
	| 'Legal Method';

export interface ModuleTopic {
	id: string;
	name: string;
	eyebrow: string;
	desc: string;
}

export interface LegendItem {
	/** Name of a CSS color variable: yellow | green | blue | orange | red | purple */
	color: string;
	label: string;
}

export interface LawModule {
	id: string; // 'pfr' | 'pfr_cases' | 'consti1' | 'crim1' | 'statcon' | 'statcon2' | 'crimpro'
	title: string;
	subjectCategory: SubjectCategory;
	eyebrow?: string;
	description: string;
	legalScope: string;
	topics?: ModuleTopic[];
	studyGuideIntro?: string;
	legend?: LegendItem[];
	/** Trusted, first-party HTML (headings carry ids for the outline). */
	studyGuideHtml: string;
	/** "Watch for" callouts (HTML) keyed by topic id. */
	watchFor?: Record<string, string>;
	mcqs: McqQuestion[];
	essays: AlacEssay[];
	cases?: CaseDigest[];
}

/**
 * What the app shows as one subject. Most subjects are a single data module; Statutory Construction and Persons &
 * Family Relations each combine two. The source modules are untouched, so every question, essay, case and highlight
 * keeps the id it was saved under.
 */
export interface Subject extends LawModule {
	/** The data modules this subject is built from, in reading order. */
	sources: LawModule[];
	/** Every module id whose saved progress belongs to this subject (the ids are `<moduleId>:…`). */
	legacyIds: string[];
}

export interface UserMcqAttempt {
	questionId: string;
	selectedIndex: number;
	isCorrect: boolean;
	timestamp: number;
}

export interface UserEssayDraft {
	essayId: string;
	answer: string;
	legalBasis: string;
	application: string;
	conclusion: string;
	isMastered: boolean;
	needsReview?: boolean;
	updatedAt: number;
}

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'purple';

/**
 * A reader's highlight in the study guide or a case digest. It is anchored by its text rather than by DOM position,
 * so it survives re-renders and small edits to the guide elsewhere in the section.
 */
export interface UserHighlight {
	/** `<moduleId>:<random>`. */
	id: string;
	moduleId: string;
	/** The element the quote is looked up in: `guide:<h2 id>` or `case:<case id>`. */
	scope: string;
	/** The highlighted text, whitespace-collapsed. */
	quote: string;
	/** Up to 32 characters either side, to tell repeated phrases apart. */
	prefix: string;
	suffix: string;
	/** Offset of the quote in the scope's collapsed text when it was made — a tie-breaker, not a position. */
	start: number;
	color: HighlightColor;
	note?: string;
	createdAt: number;
	updatedAt: number;
}

export interface UserModuleProgress {
	mcqAttempts: Record<string, UserMcqAttempt>; // questionId -> attempt
	essayDrafts: Record<string, UserEssayDraft>; // essayId -> draft
	bookmarkedMcqs: string[]; // questionIds
}
