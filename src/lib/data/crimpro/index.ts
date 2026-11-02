import type { LawModule } from '$lib/types';
import { renderRule, situationalEssays, trueFalseMcqs, type RuleChapter } from './model';
import { r110 } from './r110';
import { r111 } from './r111';
import { r112 } from './r112';
import { r113 } from './r113';
import { r114 } from './r114';
import { r115 } from './r115';
import { r116 } from './r116';
import { r117 } from './r117';
import { r118 } from './r118';
import { r119 } from './r119';
import { r120 } from './r120';
import { r121 } from './r121';
import { r122 } from './r122';
import { r123 } from './r123';
import { r124 } from './r124';
import { r125 } from './r125';
import { r126 } from './r126';
import { r127 } from './r127';
import { prescriptionPractice, prescriptionWatchFor, renderPrescription } from './prescription';
import { renderDeadlines } from './deadlines';
import { renderCaseReview } from './cases';
import { renderComparisons } from './comparisons';
import { mockItems, renderMockAnswers, renderMockExam } from './integrated';
import { renderLastMinute, renderPrelim, renderStart } from './review';
import { quizMcqs, quizTopics, quizWatchFor, renderQuizAnswers, renderQuizzes } from './quizzes';

const ID = 'crimpro';

const MOCK_WATCH_FOR = `<strong>Watch for: which Rule?</strong> These items mix Rules and do not say which applies. Find the stage first (filing, investigation, arrest, bail, arraignment, quash, pre-trial, trial, judgment), then ask whether arraignment has happened, who acted, and whether a post-2017 ruling changed the answer.`;

/** Rules 110–127 in order. Each renders as its own h2 section with the same twelve-part structure. */
export const rules: RuleChapter[] = [r110, r111, r112, r113, r114, r115, r116, r117, r118, r119, r120, r121, r122, r123, r124, r125, r126, r127];

/**
 * Criminal Procedure — Rules 110 to 127, built from Tiu's notes (2017) and checked against later rulings.
 * Content lives in the Rule files; this file only assembles the module. True-or-false items become MCQs and
 * situational problems become essay exercises; the four practice quizzes (quizzes.ts) add four-option MCQs by
 * Rule range. IDs come from position within each bank, so append new items at the end of a bank to keep saved
 * progress attached.
 */
export const crimpro: LawModule = {
	id: ID,
	title: 'Criminal Procedure (Rules 110–127)',
	subjectCategory: 'Remedial Law',
	eyebrow: 'Rules 110–127 · Tiu Notes · Situational Reviewer',
	description:
		'Prosecution of offenses through appeal and search and seizure: institution and prescription, the civil action, preliminary investigation, arrest, bail, rights of the accused, arraignment, motion to quash, pre-trial, trial, judgment, new trial, appeal, appellate procedure, search warrants and provisional remedies — Rule by Rule, with deadlines, traps, problem banks, four practice quizzes and a mock exam.',
	legalScope: 'Revised Rules of Criminal Procedure, Rules 110–127; Tiu, Criminal Procedure notes (Ateneo, 2017); later rulings and issuances flagged where they change the notes',
	topics: [
		...quizTopics,
		...rules.map((r) => ({ id: r.id, name: r.short, eyebrow: `RULE ${r.n}`, desc: r.title })),
		{ id: 'prescription', name: 'Prescription (R110 Sec. 1)', eyebrow: 'SPECIAL MODULE', desc: 'Periods, interruption, the DENR case study' },
		{ id: 'mock', name: 'Integrated mock exam', eyebrow: 'RULES 110–120', desc: 'Mixed-Rule questions; identify the Rule yourself' }
	],
	studyGuideIntro:
		'Exam method and updates since Tiu, the topic map, one chapter per Rule (prescription module after Rule 110), the deadlines matrix, case review, consolidated comparisons, the mock exam with its separate answer key, the four practice quizzes with their key, and the last-minute sheet.',
	legend: [
		{ color: 'yellow', label: 'Memorize — rules, plain English & memory aids' },
		{ color: 'green', label: 'Requisites, model answers & waivable defects' },
		{ color: 'blue', label: 'Exceptions, updates since Tiu & curable defects' },
		{ color: 'orange', label: 'Exam traps & items to verify' },
		{ color: 'red', label: 'Case doctrine & jurisdictional defects' },
		{ color: 'purple', label: 'Hypotheticals & Level 4–5 problems' }
	],
	studyGuideHtml: [
		renderStart(rules),
		renderPrelim(rules),
		...rules.flatMap((r) => (r.id === 'r110' ? [renderRule(r), renderPrescription()] : [renderRule(r)])),
		renderDeadlines(rules),
		renderCaseReview(rules),
		renderComparisons(rules),
		renderMockExam(),
		renderMockAnswers(),
		renderQuizzes(),
		renderQuizAnswers(),
		renderLastMinute(rules)
	].join('\n'),
	watchFor: {
		...Object.fromEntries(rules.map((r) => [r.id, r.watchFor])),
		prescription: prescriptionWatchFor,
		mock: MOCK_WATCH_FOR,
		...quizWatchFor
	},
	mcqs: [
		...rules.flatMap((r) => trueFalseMcqs(ID, r.id, r.short, r.practice)),
		...trueFalseMcqs(ID, 'prescription', 'Prescription (R110 Sec. 1)', prescriptionPractice),
		...trueFalseMcqs(ID, 'mock', 'Integrated mock exam', mockItems),
		...quizMcqs(ID)
	],
	essays: [
		...rules.flatMap((r) => situationalEssays(ID, r.id, `Rule ${r.n} — ${r.title}`, r.practice)),
		...situationalEssays(ID, 'prescription', 'Prescription Module', prescriptionPractice),
		...situationalEssays(ID, 'mock', 'Integrated Mock Exam', mockItems)
	]
};

export default crimpro;
