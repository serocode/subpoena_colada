/*
 * Part V — the deadlines matrix. Every row comes from a Rule chapter's own `deadlines` list (or the prescription
 * module), so the matrix and the chapters cannot disagree. This file adds the computation rules, a numbers-to-memorize
 * index and date drills.
 */
import { box, deadlineTable, dl, flashcards, h3, h4, ruleLink, table, ul, type Deadline, type RuleChapter } from './model';
import { prescriptionDeadlines } from './prescription';

/** Numbers that recur across Rules 110–127, with what each one measures. */
const numbers: [string, string[]][] = [
	['3', ['Raffle and transmittal of records for a detained accused (Rule 116, Sec. 1[e])', 'Notice to the prosecutor before conditional examination of a defense witness (Rule 119, Sec. 13)']],
	['5', ['Investigating prosecutor forwards the record to the head of office (Rule 112, Sec. 4)', 'Additional evidence when the judge doubts probable cause (Rule 112, Sec. 5[a])', 'Ask for PI after learning that an inquest information was filed (Rule 112, Sec. 6)', 'Clarificatory hearing must end within 5 days (Rule 112, Sec. 3[e])', 'Motion for leave to file demurrer, and opposition (Rule 119, Sec. 23)', 'MR of a meritorious motion, comment and resolution (2017 Guidelines)']],
	['10', ['Dismiss or subpoena; counter-affidavit; resolve PI (Rule 112, Sec. 3)', 'Head of office acts on the resolution (Rule 112, Sec. 4)', 'Judge evaluates probable cause (Rule 112, Sec. 5[a])', 'Sec. 8 cases: prosecutor or MTC judge acts (Rule 112, Sec. 8)', 'Execute warrant; report after (Rule 113, Sec. 4)', 'Annotate property bond (Rule 114, Sec. 11)', 'Arraign a detained accused after raffle; pre-trial after arraignment (Rule 116, Sec. 1[e])', 'Demurrer and opposition after leave (Rule 119, Sec. 23)', 'Pre-trial order (A.M. No. 03-1-09-SC)', 'Comment on and resolution of meritorious motions; MR of judgment resolved (2017 Guidelines)', 'Search warrant valid from its date (Rule 126, Sec. 10)', 'Issuing judge checks the return after issuance (Rule 126, Sec. 12[b])', 'Non-confined appellant asks for counsel de oficio (Rule 124, Sec. 2)', 'Resolve MR or motion for new trial (2017 Guidelines)']],
	['15', ['Time to prepare for trial after not-guilty plea (Rule 119, Sec. 1; RA 8493)', 'PI after Art. 125 waiver must end (Rule 112, Sec. 6)', 'Petition for review to the Secretary of Justice (DC 70)', 'Surrender and motion for leave after promulgation in absentia (Rule 120, Sec. 6)', 'Appeal from judgment (Rule 122, Sec. 6)', 'Motion for new trial or reconsideration (Rule 121, Sec. 1)', 'Fresh period to appeal after denial of MR or new trial (Yu v. Samson-Tatad)', 'Rule 42 and Rule 45 petitions (Rule 122, Sec. 3)', 'MR of a CA decision (Rule 124, Sec. 16)', 'Memoranda in appeals from the MTC (Rule 122, Sec. 9[c])']],
	['20', ['Reply brief in the CA (Rule 124, Sec. 4)', 'Death cases: records forwarded not earlier than 15 nor later than 20 days (Rule 122, Sec. 10 — dormant)']],
	['30', ['Arraignment from acquisition of jurisdiction (Rule 116, Sec. 1[g])', 'Pre-trial within 30 days (Rule 118, Sec. 1)', 'Trial from receipt of pre-trial order (Rule 119, Sec. 1)', 'Retrial after new-trial order (Rule 119, Sec. 5)', 'Reopened proceedings end (Rule 119, Sec. 24)', 'Judge resolves doubtful probable cause from filing (Rule 112, Sec. 5[a])', 'Bondsmen produce the accused after forfeiture (Rule 114, Sec. 21)', 'Destierro — release after 30 days of preventive imprisonment (Rule 114, Sec. 16)', 'Substitution of heirs from notice (Rule 111, Sec. 4)', 'Resolve a petition for bail from first hearing (2017 Guidelines)', 'Mediation of the civil aspect (2017 Guidelines)', 'Appeal to the Office of the President (MC 58)', 'Appellant\'s brief, then appellee\'s brief, in the CA (Rule 124, Secs. 3–4)']],
	['60', ['Maximum suspension of arraignment for a pending DOJ/OP petition (Rule 116, Sec. 11[c])', 'Maximum interruption of prescription by barangay complaint (LGC Sec. 410[c])', 'DO 153: PI of non-capital offenses resolved (verify under DC 015)', 'Rule 65 certiorari against an acquittal', 'Criminal complaint after an IP search warrant (A.M. No. 10-3-10-SC)']],
	['90', ['Promulgation after submission (2017 Guidelines)', 'DO 153: PI of capital offenses resolved (verify under DC 015)', '3 months (≈90 days) to decide — lower courts (Const., Art. VIII, Sec. 15)']],
	['180', ['Maximum trial period from first day of trial (Rule 119, Sec. 2)', 'Maximum extension of retrial after new trial (Rule 119, Sec. 5)']],
	['1 yr / 2 yrs', ['Provisional dismissal becomes permanent: ≤6 years\' imprisonment or fine / >6 years (Rule 117, Sec. 8)']],
	['12 / 18 / 36 hours', ['Delivery of a person arrested without warrant — light / correctional / afflictive or capital penalties (RPC Art. 125)']]
];

const drills: [string, string][] = [
	['Respondent receives a subpoena with the complaint on Monday, June 1, 2026. Last day for the counter-affidavit?', 'Thursday, June 11 (exclude June 1, count 10 days). If June 11 were a Saturday, Sunday or holiday, the period would run to the next working day — a procedural period (Rule 22, Sec. 1, applied suppletorily).'],
	['An information is filed in the RTC on March 2. The judge doubts probable cause and orders additional evidence. By when must the issue be resolved?', 'Within 30 days from the filing of the information: by April 1 (Rule 112, Sec. 5[a]).'],
	['A petition for review is filed with the DOJ on January 10; arraignment is suspended on motion. Until when may the suspension last?', 'Sixty days from filing of the petition: until March 11 in a non-leap year (21 days left in January + 28 in February + 11 in March; March 10 in a leap year). After that, the court may arraign (Rule 116, Sec. 11[c]).'],
	['A person is arrested without a warrant at 10:00 p.m. on Friday for robbery (afflictive penalty). Deadline for delivery to judicial authorities?', '36 hours: 10:00 a.m. on Sunday. Art. 125 periods are stated in hours and run from the start of detention; unlike procedural periods, they do not stop for weekends or holidays.'],
	['A theft case (prision correccional) is provisionally dismissed on September 15, 2025 with the accused\'s written consent and notice to the complainant. Last day to revive?', 'One year from issuance of the order: September 15, 2026 (Rule 117, Sec. 8; A.M. No. 12-11-2-SC, Sec. 14).'],
	['A judgment of conviction is promulgated in absentia on Monday, April 6. Last day for the accused to surrender and move for leave?', 'April 21 (15 days from promulgation) — and the remedies themselves within 15 days from notice of the order granting leave (Rule 120, Sec. 6).'],
	['The prosecution rests on Thursday, July 2. Last day to move for leave to file a demurrer?', 'July 7 (5 days, non-extendible). If the last day falls on a weekend or holiday, it moves to the next working day — still a procedural period. Under the 2017 Guidelines the motion is made orally right after the prosecution rests.'],
	['A property bond is approved on October 1. Last day to annotate and report compliance?', 'October 11 (Rule 114, Sec. 11). Failure is ground for cancellation and re-arrest.'],
	['The accused is detained for an offense whose maximum penalty is destierro. When must he be released?', 'After 30 days of preventive imprisonment (Rule 114, Sec. 16).'],
	['An inquest information is filed on May 3; the accused learns of it on May 5. Last day to ask for preliminary investigation?', 'May 10 (5 days from learning of the filing — Rule 112, Sec. 6). A later motion is prohibited (2017 Guidelines).'],
	['The accused files an MR of his conviction on day 10 of the 15-day appeal period; it is denied, and he receives the denial on August 1. Until when may he appeal?', 'Under the fresh-period rule applied to criminal cases (<a href="#case-yu-samson-tatad">Yu v. Samson-Tatad, 2011</a>; Rule 122, Sec. 6), a fresh 15 days from receipt of the denial: August 16.'],
	['A felony prescribing in 10 years is discovered on March 1, 2016; a complaint is filed with the prosecutor on March 1, 2020; dismissed without jeopardy on March 1, 2021. Last day to refile?', '4 years used; 6 years remain from March 1, 2021: March 1, 2027. More prescription drills are in the prescription module.']
];

export function renderDeadlines(rules: RuleChapter[]) {
	const out: string[] = [];
	out.push(`<h2 class="sg-h2" id="deadlines">Deadlines Matrix — Rules 110–127</h2>`);
	out.push(
		`<p class="sg-intro">Every period in Rules 110–127 and the issuances that supplement them, grouped by Rule. Columns follow your brief: Rule/Section, act, responsible person, period, starting point, exceptions, consequence. The colored tag on each row says what kind of period it is.</p>`
	);

	out.push(h3('deadlines-kinds', 'Four kinds of periods — do not mix them'));
	out.push(
		table(
			['Kind', 'What it measures', 'Effect of lapse', 'Weekends and holidays'],
			[
				['<b>Procedural</b>', 'Acts inside a case (counter-affidavit, motion for leave, appeal).', 'Act barred, waived, or merely directory (officer may be sanctioned).', 'Last day on a Saturday, Sunday or holiday → next working day (Rule 22, Sec. 1, applied suppletorily). The 2017 Guidelines count "calendar days" and make many periods non-extendible.'],
				['<b>Prescriptive</b>', 'Time for the State to institute proceedings.', 'Criminal liability extinguished; ground to quash at any time.', 'Not extended (Yapdiangco v. Buencamino). See the <a href="#prescription">prescription module</a>.'],
				['<b>Detention limit</b>', 'Hours a person may be held without judicial action (Art. 125) or detained pending trial.', 'Release; criminal liability of the officer.', 'Counted by the hour; weekends do not stop the clock.'],
				['<b>Constitutional / speedy-trial</b>', 'Time to decide (Const., Art. VIII, Sec. 15) and speedy-trial limits (RA 8493; Rules 116, 119).', 'Dismissal on motion before trial (= acquittal); administrative liability for judges.', 'Computed with exclusions (Rule 119, Sec. 3).']
			]
		)
	);
	out.push(
		dl([
			['Computing', 'Exclude the first day, include the last (Civil Code Art. 13; Rule 22, Sec. 1). A "year" is twelve calendar months and a "month" thirty days (Administrative Code of 1987, Sec. 31) — but prescription cases have counted months both ways; see the prescription drills.'],
			['Extension', 'Non-extendible: demurrer periods (Rule 119, Sec. 23); most 2017 Guidelines periods; MR of the Secretary\'s resolution (DC 70). Extendible for cause: counter-affidavit (DO 153 — up to 10 days, verify under DC 015); retrial after new trial (up to 180 days).'],
			['Waiver', 'Periods for the accused\'s benefit may be waived (e.g., Art. 125 — only in writing with counsel; the 15 days to prepare for trial). The right to dismiss for speedy-trial violation under Rule 119, Sec. 9 is waived if not raised before trial.'],
			['Interruption', 'Prescription: interrupted by institution of proceedings. DOJ petition-for-review period: interrupted by a timely MR (DC 70). Appeal period: a timely MR or motion for new trial gives a fresh period (Yu v. Samson-Tatad — verify).'],
			['Procedural ≠ prescriptive', 'A prosecutor who resolves late does not make the offense prescribe; the remedy is speedy disposition (Cagang). A court that decides late does not lose jurisdiction; the remedy is administrative.']
		])
	);

	out.push(h3('deadlines-numbers', 'Numbers to memorize'));
	out.push(table(['Days', 'Where the number appears'], numbers.map(([n, xs]) => [`<b>${n}</b>`, ul(xs)])));

	out.push(h3('deadlines-matrix', 'The matrix, Rule by Rule'));
	for (const r of rules) {
		if (!r.deadlines.length) continue;
		out.push(h4(`${ruleLink(r.id, undefined, `Rule ${r.n} — ${r.title}`)}`));
		out.push(deadlineTable(r.deadlines));
	}
	out.push(h4(`<a href="#prescription">Prescriptive periods (Rule 110, Sec. 1; RPC Arts. 90–91; Act 3326)</a>`));
	out.push(deadlineTable(prescriptionDeadlines as Deadline[]));

	out.push(h3('deadlines-drills', 'Date-calculation drills'));
	out.push(`<p class="sg-intro">Work each one on paper, then open it. Calendar years are used only to make the dates concrete.</p>`);
	out.push(flashcards(drills));
	out.push(box('orange', 'Common computation mistakes', ul([
		'Counting the first day.',
		'Moving a prescriptive deadline to Monday because the last day is a Sunday.',
		'Counting the provisional-dismissal period from the prosecutor\'s receipt instead of issuance of the order.',
		'Counting the 60-day arraignment suspension from the court\'s order instead of the filing of the petition.',
		'Treating the 10-day period to execute a warrant as its expiry date.',
		'Forgetting excluded delays in speedy-trial computations.'
	])));
	return out.join('\n');
}
