import type { AlacEssay, ModuleTopic } from '$lib/types';

/*
 * Constitutional Law I — Article VIII in depth, Article IX (Constitutional Commissions) and Article X (Local
 * Government), with bar-level ALAC problems. Provision summaries follow the 1987 Constitution; quotation marks show
 * the Constitution's own words. Cases are cited for the doctrine they are known for; read the full decisions for
 * recitation.
 *
 * IDs: essays continue the consti1 bank (consti1:alac:32 onward). Append new items at the end to keep saved drafts
 * attached.
 */

const row = (dot: string, art: string, rule: string, exoex = false) =>
	`  <tr${exoex ? ' class="sg-row-exoex"' : ''}><td class="art"><span class="sg-dot" style="background:var(--${dot})"></span>${art}</td><td>${rule}</td></tr>`;
const table = (head: [string, string], rows: string[]) =>
	`<div class="table-scroll"><table class="sg-table">\n  <tr><th>${head[0]}</th><th>${head[1]}</th></tr>\n${rows.join('\n')}\n</table></div>`;
const caseCard = (name: string, doctrine: string) => `<div class="case-card"><div class="cname">${name}</div><div class="cdoc">${doctrine}</div></div>`;
const box = (label: string, body: string) => `<div class="exoex-box"><span class="exoex-label">${label}</span>${body}</div>`;

/* ------------------------------------------------------------------ *
 * Article VIII — appended after the existing summary table, so the
 * original text (and any highlights on it) stays exactly as it was.
 * ------------------------------------------------------------------ */
export const artVIIIAddendum = `
<h3 class="sg-h3" id="art8-judicial-power">Judicial power and judicial review (Secs. 1–2)</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', 'Sec. 1', 'Judicial power is vested in one Supreme Court and in such lower courts as may be established by law. It includes the duty to settle actual controversies involving rights that are legally demandable and enforceable, <strong>and</strong> to determine whether there has been a grave abuse of discretion amounting to lack or excess of jurisdiction on the part of <em>any</em> branch or instrumentality of the Government.'),
	row('green', 'Judicial review', 'Requisites: (1) an actual case or controversy ripe for adjudication; (2) standing (locus standi) — a personal and substantial interest; (3) the question raised at the earliest opportunity; (4) the constitutional question is the very lis mota of the case.'),
	row('blue', 'Standing relaxed', 'Taxpayers (illegal disbursement of public funds), voters, concerned citizens and legislators may sue when the issue is of transcendental importance (<em>David v. Macapagal-Arroyo</em>, 2006).'),
	row('orange', 'Moot cases', 'A moot case is generally dismissed — <strong>except</strong> when there is a grave violation of the Constitution; the situation is of exceptional character and paramount public interest; the case calls for controlling principles to guide the bench, bar and public; or the case is capable of repetition yet evading review (<em>David v. Macapagal-Arroyo</em>).', true),
	row('yellow', 'Sec. 2', 'Congress defines, prescribes and apportions the jurisdiction of the courts, but may <strong>not</strong> deprive the Supreme Court of its jurisdiction over the cases enumerated in Sec. 5. No law reorganizing the Judiciary may undermine the security of tenure of its Members.'),
	row('blue', 'Art. VI, Sec. 30', 'No law shall increase the appellate jurisdiction of the Supreme Court without its advice and concurrence.')
])}
${caseCard('Francisco v. House of Representatives (2003)', 'The expanded certiorari jurisdiction lets the Court review even acts of a co-equal branch (there, the House\'s impeachment rules) for grave abuse of discretion; the political question doctrine is no bar where the Constitution itself sets the limit.')}
${caseCard('Tañada v. Cuenco (1957)', 'Political questions are those which, under the Constitution, are to be decided by the people in their sovereign capacity, or in regard to which full discretionary authority has been delegated to the legislative or executive branch.')}

<h3 class="sg-h3" id="art8-independence">Independence of the Judiciary (Secs. 3, 10, 11, 12)</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', 'Sec. 3', 'Fiscal autonomy. Appropriations for the Judiciary may not be reduced by the legislature below the amount appropriated for the previous year and, after approval, shall be automatically and regularly released.'),
	row('yellow', 'Sec. 10', 'Salaries of Justices and judges are fixed by law and may not be decreased during their continuance in office.'),
	row('blue', 'Income tax', 'Collecting income tax on judicial salaries is not a prohibited decrease (<em>Nitafan v. Commissioner of Internal Revenue</em>, 1987).'),
	row('yellow', 'Sec. 11', 'Justices and judges hold office during good behavior until age <strong>70</strong> or until they become incapacitated to discharge their duties. The Supreme Court en banc may discipline lower-court judges or order their dismissal by a majority of the Members who actually took part in the deliberations and voted.'),
	row('red', 'Sec. 12', 'Members of the Supreme Court and of other courts shall <strong>not</strong> be designated to any agency performing quasi-judicial or administrative functions (<em>In re Designation of Judge Manzano</em>, 1988).')
])}
${caseCard('Bengzon v. Drilon (1992)', 'Fiscal autonomy contemplates a guarantee of full flexibility to allocate and utilize resources with the wisdom and dispatch that needs require; it is a recognition that the independence of the Judiciary cannot survive outside control over its funds.')}
${caseCard('In re Designation of Judge Manzano (1988)', 'A judge may not sit on a provincial committee on justice, a body performing administrative functions, even as an ex officio member. The prohibition protects the Judiciary from entanglement in executive work.')}

<h3 class="sg-h3" id="art8-supreme-court">The Supreme Court: composition and voting (Sec. 4)</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', '4(1)', 'A Chief Justice and fourteen Associate Justices. The Court may sit en banc or, in its discretion, in divisions of three, five or seven Members. Any vacancy shall be filled within <strong>ninety days</strong> from its occurrence.'),
	row('green', '4(2) — en banc', 'All cases involving the constitutionality of a treaty, international or executive agreement, or law are heard by the Court <strong>en banc</strong> and decided by a majority of the Members who actually took part in the deliberations and voted. So are cases on the constitutionality, application or operation of presidential decrees, proclamations, orders, instructions, ordinances and other regulations, and cases required by the Rules of Court to be heard en banc.'),
	row('green', '4(3) — divisions', 'Cases heard by a division are decided by a majority of the Members who actually took part and voted — in no case without the concurrence of at least <strong>three</strong> such Members. When the required number is not obtained, the case is decided en banc.'),
	row('orange', '4(3) — doctrine', 'No doctrine or principle of law laid down by the Court in a decision rendered en banc or in division may be modified or reversed except by the Court sitting <strong>en banc</strong>.', true)
])}
${caseCard('De Castro v. Judicial and Bar Council (2010)', 'The ban on appointments two months before a presidential election (Art. VII, Sec. 15) does not apply to appointments to the Supreme Court, which Art. VIII, Sec. 4(1) requires to be filled within ninety days of the vacancy.')}

<h3 class="sg-h3" id="art8-powers">Powers of the Supreme Court (Secs. 5–6)</h3>
${table(['Sec. 5', 'Power'], [
	row('yellow', '(1) Original', 'Over cases affecting ambassadors, other public ministers and consuls, and over petitions for certiorari, prohibition, mandamus, quo warranto and habeas corpus.'),
	row('yellow', '(2) Appellate', 'Review, revise, reverse, modify or affirm, on appeal or certiorari, final judgments of lower courts in: (a) cases involving the constitutionality or validity of any treaty, international or executive agreement, law, presidential decree, proclamation, order, instruction, ordinance or regulation; (b) the legality of any tax, impost, assessment or toll, or any penalty imposed in relation to it; (c) cases where the jurisdiction of a lower court is in issue; (d) criminal cases where the penalty imposed is reclusion perpetua or higher; (e) cases where only an error or question of law is involved.'),
	row('green', '(3) Assignment', 'Assign lower-court judges temporarily to other stations as public interest may require; an assignment shall not exceed six months without the judge\'s consent.'),
	row('green', '(4) Venue', 'Order a change of venue or place of trial to avoid a miscarriage of justice.'),
	row('yellow', '(5) Rule-making', 'Promulgate rules on the protection and enforcement of constitutional rights, pleading, practice and procedure in all courts, admission to the practice of law, the Integrated Bar, and legal assistance to the underprivileged. The rules must be simplified and inexpensive, uniform for courts of the same grade, and must <strong>not diminish, increase or modify substantive rights</strong>. Rules of procedure of special courts and quasi-judicial bodies remain effective unless disapproved by the Court.'),
	row('green', '(6) Personnel', 'Appoint all officials and employees of the Judiciary in accordance with the Civil Service Law.'),
	row('yellow', 'Sec. 6', 'Administrative supervision over all courts and their personnel belongs to the Supreme Court alone.')
])}
${box('Exception of the exception — rule-making', 'Congress may enact substantive law, and the Court\'s rules may not alter substantive rights. But the 1987 Constitution took away Congress\'s former power to repeal, alter or supplement the Rules of Court. A statute that regulates a <em>procedural</em> matter (plea bargaining, legal fees, the mode of appeal) intrudes on the Court\'s exclusive rule-making power, even if Congress calls it policy.')}
${caseCard('Estipona v. Lobrigo (2017)', 'Sec. 23 of R.A. 9165, which barred plea bargaining in drug cases, is unconstitutional: plea bargaining is a rule of procedure, and the power to promulgate it belongs exclusively to the Supreme Court.')}
${caseCard('Echegaray v. Secretary of Justice (1999)', 'The Court\'s power to control the execution of its decisions is an essential aspect of judicial power; it may suspend the execution of a final judgment when circumstances warrant.')}

<h3 class="sg-h3" id="art8-appointments">Qualifications, the JBC and appointments (Secs. 7–9)</h3>
${table(['Sec.', 'Rule'], [
	row('green', 'Sec. 7(1)', 'Members of the Supreme Court and of any lower collegiate court must be natural-born citizens. A Member of the Supreme Court must also be at least <strong>40</strong> years of age and must have been, for <strong>15</strong> years or more, a judge of a lower court or engaged in the practice of law in the Philippines.'),
	row('green', 'Sec. 7(2)', 'Congress prescribes the qualifications of judges of lower courts, but no person may be appointed judge unless a citizen of the Philippines and a member of the Philippine Bar.'),
	row('green', 'Sec. 7(3)', 'A Member of the Judiciary must be of proven competence, integrity, probity and independence.'),
	row('yellow', 'Sec. 8 — JBC', 'Under the Court\'s supervision. Ex officio: the Chief Justice (Chairman), the Secretary of Justice, and <strong>a representative of the Congress</strong>. Regular members: a representative of the Integrated Bar, a professor of law, a retired Member of the Supreme Court, and a representative of the private sector — appointed by the President with the consent of the Commission on Appointments for four years (staggered at the start). The Clerk of the Supreme Court is ex officio Secretary. Principal function: recommend appointees to the Judiciary.'),
	row('yellow', 'Sec. 9', 'The President appoints Members of the Supreme Court and judges of lower courts from a list of at least <strong>three</strong> nominees prepared by the JBC for every vacancy. No confirmation by the Commission on Appointments. For lower courts, the appointment is issued within ninety days from submission of the list.')
])}
${caseCard('Chavez v. Judicial and Bar Council (2012)', '"A representative of the Congress" means one representative with one vote. The practice of seating one Senator and one Representative, each with a full vote, is unconstitutional.')}

<h3 class="sg-h3" id="art8-decisions">Deciding cases (Secs. 13–16)</h3>
${table(['Sec.', 'Rule'], [
	row('green', 'Sec. 13', 'Conclusions of the Supreme Court in any case submitted for decision en banc or in division are reached in consultation before the case is assigned for writing. The Chief Justice issues a certification to that effect. A Member who took no part, dissented or abstained must state the reason.'),
	row('yellow', 'Sec. 14', 'No decision shall be rendered without expressing clearly and distinctly the facts and the law on which it is based. No petition for review or motion for reconsideration shall be refused due course or denied without stating the legal basis.'),
	row('blue', 'Memorandum decisions', 'Allowed when the appellate court adopts the lower court\'s findings by reference, provided the decision being adopted is accessible and the memorandum decision is used sparingly (<em>Francisco v. Permskul</em>, 1989).'),
	row('yellow', 'Sec. 15', 'Periods to decide from submission: Supreme Court — <strong>24 months</strong>; lower collegiate courts — <strong>12 months</strong> unless reduced by the Supreme Court; all other lower courts — <strong>3 months</strong>. A case is submitted upon the filing of the last pleading, brief or memorandum required. Even after the period lapses, the court must decide without further delay.'),
	row('green', 'Sec. 16', 'The Supreme Court submits an annual report on the Judiciary to the President and Congress within thirty days from the opening of each regular session.')
])}
`;

/* ------------------------------------------------------------------ *
 * Article IX — Constitutional Commissions
 * ------------------------------------------------------------------ */
export const artIXHtml = `

<h2 class="sg-h2" id="part-viii-article-ix-constitutional-commissions">Part VIII — Article IX: Constitutional Commissions</h2>
<p class="sg-intro">The Civil Service Commission, the Commission on Elections and the Commission on Audit. Article IX-A sets the rules common to all three; IX-B, IX-C and IX-D set each one's composition and powers.</p>

<h3 class="sg-h3" id="art9-common">A. Common provisions</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', 'Sec. 1', 'The Constitutional Commissions — CSC, COMELEC and COA — are <strong>independent</strong>.'),
	row('green', 'Sec. 2', 'No Member shall, during his tenure: hold any other office or employment; engage in the practice of any profession or in the active management or control of any business that may be affected by the functions of his office; or be financially interested, directly or indirectly, in any contract with, or franchise or privilege granted by, the Government or its instrumentalities, including GOCCs.'),
	row('yellow', 'Sec. 3', 'Salaries fixed by law; not decreased during tenure.'),
	row('green', 'Secs. 4–5', 'Each Commission appoints its own officials and employees in accordance with law, and enjoys fiscal autonomy: approved annual appropriations are automatically and regularly released.'),
	row('green', 'Sec. 6', 'Each Commission en banc may promulgate its own rules of procedure, which shall not diminish, increase or modify substantive rights.'),
	row('yellow', 'Sec. 7', 'Each Commission decides by a majority vote of <strong>all its Members</strong> any case or matter brought before it within <strong>60 days</strong> from submission. Unless otherwise provided by the Constitution or by law, a decision, order or ruling may be brought to the Supreme Court on <strong>certiorari</strong> by the aggrieved party within <strong>30 days</strong> from receipt of a copy.'),
	row('orange', 'Sec. 7 — whose ruling', 'Certiorari lies only against a final order of the Commission <strong>en banc</strong>. A ruling of a COMELEC division must first be brought to the en banc on a motion for reconsideration (<em>Ambil v. COMELEC</em>, 2000).', true)
])}
${table(['Feature', 'Rule for all three Commissions'], [
	row('yellow', 'Term', 'Seven years, <strong>without reappointment</strong>. First appointees staggered so that one seat (or set of seats) falls vacant at a time.'),
	row('green', 'Vacancy', 'An appointment to a vacancy is only for the <strong>unexpired portion</strong> of the predecessor\'s term.'),
	row('red', 'No acting members', 'No Member may be appointed or designated in a <strong>temporary or acting</strong> capacity.'),
	row('green', 'Appointment', 'By the President with the consent of the Commission on Appointments.'),
	row('green', 'Disqualification', 'Must not have been a candidate for any elective position in the elections immediately preceding the appointment.')
])}
${caseCard('Brillantes v. Yorac (1990)', 'The President cannot designate an Acting Chairman of the COMELEC. The independence of the Commission means that choosing a temporary presiding officer in the absence of the Chairman is for the Commission itself to decide.')}
${caseCard('Matibag v. Benipayo (2002)', 'An ad interim appointment is permanent, not temporary; it takes effect at once and can be cut short only by disapproval of the Commission on Appointments or adjournment of Congress. Renewing an ad interim appointment that was bypassed (not disapproved) is not a prohibited reappointment.')}
${caseCard('Gaminde v. COA (2000)', 'The seven-year terms run on a fixed cycle that began on February 2, 1987. A Member appointed late, or to a vacancy, serves only until the end of the cycle for that seat.')}
${caseCard('Funa v. Villar (2012)', 'A sitting Commissioner may be "promoted" to Chairman only if the Chairman\'s seat is vacant by death, resignation, disability or impeachment (so the appointment is for the unexpired term), and the Member\'s total service in the Commission does not exceed seven years. When the Chairman\'s term simply expired, the new Chairman must be given a full seven-year term — impossible for a Commissioner who has already served, so such an appointment is void.')}
${caseCard('Funa v. Duque (2014)', 'The CSC Chairman\'s designation as an ex officio member of the boards of GSIS, PhilHealth, ECC and Pag-IBIG violated Art. IX-A, Sec. 2: those board seats are not part of the CSC\'s functions, so they are "other office" the Constitution forbids.')}

<h3 class="sg-h3" id="art9-csc">B. Civil Service Commission</h3>
${table(['Sec.', 'Rule'], [
	row('green', 'Sec. 1', 'A Chairman and <strong>two</strong> Commissioners: natural-born citizens, at least <strong>35</strong> at appointment, with proven capacity for public administration. First appointees: Chairman 7 years, one Commissioner 5, the other 3.'),
	row('yellow', 'Sec. 2(1)', 'The civil service embraces all branches, subdivisions, instrumentalities and agencies of the Government, including <strong>GOCCs with original charters</strong>. GOCCs incorporated under the general corporation law are governed by the Labor Code.'),
	row('green', 'Sec. 2(2)', 'Appointments are made only according to merit and fitness, determined as far as practicable by competitive examination — <strong>except</strong> positions that are policy-determining, primarily confidential, or highly technical.'),
	row('yellow', 'Sec. 2(3)', 'No officer or employee of the civil service shall be removed or suspended except for cause provided by law.'),
	row('red', 'Sec. 2(4)', 'No officer or employee in the civil service shall engage, directly or indirectly, in any electioneering or partisan political campaign.'),
	row('blue', 'Sec. 2(5)', 'The right to self-organization shall not be denied to government employees — but it does not include the right to strike (<em>SSS Employees Association v. Court of Appeals</em>, 1989).'),
	row('green', 'Sec. 2(6)', 'Temporary employees are given such protection as may be provided by law.'),
	row('green', 'Secs. 3–5', 'The CSC is the central personnel agency; all public officers take an oath to uphold the Constitution; Congress standardizes compensation.'),
	row('red', 'Sec. 6', 'No candidate who has <strong>lost</strong> in any election shall, within <strong>one year</strong> after that election, be appointed to any office in the Government or any GOCC or its subsidiaries.'),
	row('red', 'Sec. 7, par. 1', 'No <strong>elective</strong> official shall be eligible for appointment or designation in any capacity to any public office or position during his tenure.'),
	row('orange', 'Sec. 7, par. 2', 'Unless otherwise allowed by law or by the primary functions of his position, no <strong>appointive</strong> official shall hold any other office or employment in the Government. (Cabinet members are under the stricter Art. VII, Sec. 13 — <em>Civil Liberties Union v. Executive Secretary</em>, 1991.)', true),
	row('green', 'Sec. 8', 'No public officer shall receive additional, double or indirect compensation unless specifically authorized by law, nor accept, without the consent of Congress, any present, emolument, office or title from a foreign government. Pensions and gratuities are not additional, double or indirect compensation.')
])}
${caseCard('Flores v. Drilon (1993)', 'A law making the Mayor of Olongapo the Chairman and CEO of the Subic Bay Metropolitan Authority violated Art. IX-B, Sec. 7: an elective official may not be appointed to another public office during his tenure. The law also intruded on the President\'s power to choose the appointee.')}
${caseCard('De los Santos v. Mallare (1950)', 'Whether a position is primarily confidential, policy-determining or highly technical depends on the nature of its functions, not on what the appointing authority or a statute calls it.')}

<h3 class="sg-h3" id="art9-comelec">C. Commission on Elections</h3>
${table(['Sec.', 'Rule'], [
	row('green', 'Sec. 1', 'A Chairman and <strong>six</strong> Commissioners: natural-born citizens, at least <strong>35</strong> at appointment, holders of a college degree. A majority, including the Chairman, must be members of the Philippine Bar who have been engaged in the practice of law for at least <strong>ten years</strong>. First appointees: three for 7 years, two for 5, the last members for 3.'),
	row('yellow', 'Sec. 2(1)', 'Enforce and administer all laws relative to the conduct of an election, plebiscite, initiative, referendum and recall.'),
	row('yellow', 'Sec. 2(2)', '<strong>Exclusive original</strong> jurisdiction over all contests relating to the elections, returns and qualifications of elective <strong>regional, provincial and city</strong> officials; <strong>appellate</strong> jurisdiction over contests involving elective <strong>municipal</strong> officials decided by trial courts of general jurisdiction, and elective <strong>barangay</strong> officials decided by trial courts of limited jurisdiction. Its decisions in municipal and barangay contests are final, executory and not appealable.'),
	row('orange', 'Not appealable ≠ unreviewable', '"Final and not appealable" bars an appeal, not the Supreme Court\'s certiorari jurisdiction over grave abuse of discretion under Art. IX-A, Sec. 7 and Art. VIII, Sec. 1.', true),
	row('blue', 'Sec. 2(3)', 'Decide all questions affecting elections — number and location of polling places, appointment of election officials, registration of voters — <strong>except</strong> those involving the right to vote, which belong to the courts.'),
	row('green', 'Sec. 2(4)–(9)', 'Deputize law enforcement agencies (with the President\'s concurrence); register political parties (never religious denominations or sects, nor groups that seek their goals through violence or unlawful means, refuse to uphold the Constitution, or are supported by a foreign government); file inclusion and exclusion petitions and prosecute election offenses; recommend measures against election spending; recommend removal of erring officials; report to the President and Congress.'),
	row('yellow', 'Sec. 3', 'The COMELEC sits en banc or in two divisions. All election cases, including pre-proclamation controversies, are heard and decided <strong>in division</strong>; motions for reconsideration are decided <strong>en banc</strong>.'),
	row('green', 'Sec. 4', 'During the election period, the COMELEC may supervise or regulate the use of franchises and permits for media and transportation to ensure equal opportunity, time and space, and the right to reply, among candidates.'),
	row('red', 'Sec. 5', 'No pardon, amnesty, parole or suspension of sentence for violation of election laws without the COMELEC\'s favorable recommendation.'),
	row('green', 'Secs. 6–8', 'A free and open party system; no votes for a party valid except under the party-list system; parties are not represented on boards of election inspectors or canvassers but may appoint poll watchers.'),
	row('yellow', 'Sec. 9', 'The election period begins <strong>ninety days before</strong> the day of election and ends <strong>thirty days after</strong>, unless the COMELEC fixes otherwise in special cases.'),
	row('green', 'Secs. 10–11', 'Bona fide candidates are protected from harassment and discrimination; funds certified by the COMELEC as necessary for elections are automatically and regularly released.')
])}
${caseCard('Cayetano v. Monsod (1991)', '"Practice of law" means any activity, in or out of court, that requires the application of law, legal procedure, knowledge, training and experience. Monsod\'s work as a lawyer-economist, manager and negotiator counted toward the ten years.')}
${caseCard('Sarmiento v. COMELEC (1992)', 'The COMELEC en banc has no authority to hear and decide election cases, including pre-proclamation controversies, at the first instance; they must first be decided by a division. A decision of the en banc in the first instance is void.')}
${caseCard('Reyes v. COMELEC (2013)', 'The COMELEC loses jurisdiction over a candidate for the House, and the HRET\'s jurisdiction begins, only when there is a valid proclamation, a proper oath, and assumption of office — and the term of Members of the House begins at noon of June 30 after the election.')}
${caseCard('Social Weather Stations v. COMELEC (2001)', 'A law banning the publication of election surveys shortly before election day is an unconstitutional prior restraint on speech; the COMELEC\'s Sec. 4 power over media does not reach that far.')}

<h3 class="sg-h3" id="art9-coa">D. Commission on Audit</h3>
${table(['Sec.', 'Rule'], [
	row('green', 'Sec. 1', 'A Chairman and <strong>two</strong> Commissioners: natural-born citizens, at least <strong>35</strong> at appointment, and either CPAs with not less than <strong>ten years</strong> of auditing experience or members of the Bar who have practiced law for at least <strong>ten years</strong>. At no time may all Members belong to the same profession. First appointees: Chairman 7 years, one Commissioner 5, the other 3.'),
	row('yellow', 'Sec. 2(1)', 'Examine, audit and settle all accounts on the revenue, receipts, expenditures and uses of funds and property owned or held in trust by the Government, its subdivisions, agencies and instrumentalities, including GOCCs with original charters. On a <strong>post-audit</strong> basis: (a) constitutional bodies with fiscal autonomy; (b) autonomous state colleges and universities; (c) other GOCCs and their subsidiaries; (d) non-governmental entities receiving subsidy or equity from the Government that are required by law or the granting institution to submit to audit.'),
	row('blue', 'Pre-audit', 'Where internal control is inadequate, the COA may adopt temporary or special pre-audit measures. Pre-audit is a tool the COA may use, not a constitutional duty (<em>Dela Llana v. COA</em>, 2012).'),
	row('yellow', 'Sec. 2(2)', 'Exclusive authority to define the scope of its audit, set its methods, and promulgate accounting and auditing rules, including rules for the prevention and disallowance of irregular, unnecessary, excessive, extravagant or unconscionable expenditures.'),
	row('red', 'Sec. 3', 'No law shall be passed <strong>exempting</strong> any entity of the Government or its subsidiary, or any investment of public funds, from the COA\'s jurisdiction.'),
	row('green', 'Sec. 4', 'Annual report to the President and Congress.')
])}
${caseCard('Boy Scouts of the Philippines v. COA (2011)', 'The BSP, created by a special law to serve a public purpose and attached to a government department, is a public corporation whose funds are subject to COA audit.')}

<h3 class="sg-h3" id="art9-compare">Comparison — the three Commissions</h3>
<div class="table-scroll"><table class="cmp-table">
  <tr><th>Aspect</th><th>CSC</th><th>COMELEC</th><th>COA</th></tr>
  <tr><td class="aspect">Members</td><td>Chairman + 2</td><td>Chairman + 6</td><td>Chairman + 2</td></tr>
  <tr><td class="aspect">Age / citizenship</td><td>35, natural-born</td><td>35, natural-born</td><td>35, natural-born</td></tr>
  <tr><td class="aspect">Profession</td><td>Proven capacity for public administration</td><td>College degree; majority incl. Chairman: lawyers, 10 years' practice</td><td>CPAs (10 years' auditing) or lawyers (10 years' practice); not all of one profession</td></tr>
  <tr><td class="aspect">Term</td><td colspan="3">7 years, no reappointment; vacancy only for the unexpired term; no temporary or acting appointment</td></tr>
  <tr><td class="aspect">Decides</td><td colspan="3">By majority of all Members, within 60 days of submission; certiorari to the Supreme Court within 30 days</td></tr>
</table></div>
`;

/* ------------------------------------------------------------------ *
 * Article X — Local Government
 * ------------------------------------------------------------------ */
export const artXHtml = `

<h2 class="sg-h2" id="part-ix-article-x-local-government">Part IX — Article X: Local Government</h2>
<p class="sg-intro">Local autonomy is the decentralization of administration, not of sovereignty: local governments remain creatures of Congress, subject to the President's general supervision.</p>

<h3 class="sg-h3" id="art10-general">General provisions (Secs. 1–7)</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', 'Sec. 1', 'The territorial and political subdivisions are the provinces, cities, municipalities and barangays. There shall be autonomous regions in Muslim Mindanao and the Cordilleras.'),
	row('yellow', 'Sec. 2', 'The territorial and political subdivisions enjoy local autonomy.'),
	row('green', 'Sec. 3', 'Congress enacts a local government code providing for a more responsive and accountable structure through decentralization, with effective mechanisms of recall, initiative and referendum, and allocating powers, responsibilities and resources.'),
	row('yellow', 'Sec. 4', 'The President exercises <strong>general supervision</strong> over local governments. Provinces supervise component cities and municipalities; cities and municipalities supervise component barangays — to ensure that their acts are within their prescribed powers.'),
	row('red', 'Supervision vs. control', 'Supervision is overseeing that subordinates perform their duties according to law; control is the power to alter, modify or set aside what they did and substitute one\'s own judgment. The President has only supervision (<em>Drilon v. Lim</em>, 1994).'),
	row('green', 'Sec. 5', 'Each local government may create its own sources of revenue and levy taxes, fees and charges, subject to guidelines and limitations Congress provides consistent with local autonomy. These accrue exclusively to the local governments.'),
	row('yellow', 'Sec. 6', 'Local governments have a just share, as determined by law, in the <strong>national taxes</strong>, which shall be <strong>automatically released</strong> to them.'),
	row('green', 'Sec. 7', 'An equitable share in the proceeds of the utilization and development of the national wealth within their areas, including sharing with the inhabitants by way of direct benefits.')
])}
${caseCard('Drilon v. Lim (1994)', 'The Secretary of Justice\'s power to review a tax ordinance for legality (Local Government Code, Sec. 187) is supervision, not control: he may declare an ordinance illegal for not following the law, but may not substitute his own judgment on its wisdom.')}
${caseCard('Pimentel v. Aguirre (2000)', 'An administrative order withholding ten percent of local governments\' internal revenue allotment violated Art. X, Sec. 6: the just share must be automatically released, and the President\'s supervision does not include the power to withhold it.')}
${caseCard('Mandanas v. Ochoa (2018)', 'The just share is computed on all national taxes, not only national internal revenue taxes. The Local Government Code\'s narrower base (Sec. 284) was unconstitutional to that extent. Congress fixes the share, but not by excluding national taxes the Constitution includes.')}

<h3 class="sg-h3" id="art10-term-limits">Term of office and the three-term limit (Secs. 8–9)</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', 'Sec. 8', 'The term of elective local officials, except barangay officials (whose term is fixed by law), is <strong>three years</strong>, and no such official shall serve for more than <strong>three consecutive terms</strong>. Voluntary renunciation of the office for any length of time is not an interruption of the continuity of service for the full term.'),
	row('green', 'Two conditions', 'The limit applies only if the official (1) was <strong>elected</strong> to the same office three consecutive times and (2) <strong>fully served</strong> three consecutive terms (<em>Borja v. COMELEC</em>, 1998).'),
	row('blue', 'Not counted', 'A term reached by succession by operation of law (e.g., vice-mayor becoming mayor) is not a term the official was elected to (<em>Borja</em>). A term the official did not serve because his proclamation was later annulled in an election protest is not fully served (<em>Lonzanida v. COMELEC</em>, 1999).'),
	row('orange', 'Not an interruption', 'Preventive suspension is not an interruption: the official remains in office and is only barred from exercising its functions (<em>Aldovino v. COMELEC</em>, 2009). Converting a municipality into a city with the same territory and inhabitants does not break the chain (<em>Latasa v. COMELEC</em>, 2003). Voluntary renunciation is never an interruption (Sec. 8).', true),
	row('blue', 'Recall', 'What the limit bars is immediate re-election for a fourth consecutive term. An official who sat out the regular election after his third term may run in a later recall election (<em>Socrates v. COMELEC</em>, 2002).'),
	row('green', 'Sec. 9', 'Local legislative bodies have sectoral representation as prescribed by law.')
])}

<h3 class="sg-h3" id="art10-creation">Creating and changing local governments (Secs. 10–14)</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', 'Sec. 10', 'No province, city, municipality or barangay may be created, divided, merged, abolished, or its boundary substantially altered, except in accordance with the criteria in the local government code and subject to approval by a majority of the votes cast in a <strong>plebiscite in the political units directly affected</strong>.'),
	row('red', 'Units directly affected', 'Converting a component city into a highly urbanized city substantially alters the province\'s territory and resources, so all the voters of the province — not only the city\'s — must take part in the plebiscite (<em>Umali v. COMELEC</em>, 2014).'),
	row('green', 'Sec. 11', 'Congress may create special metropolitan political subdivisions, subject to a plebiscite. The component cities and municipalities keep their basic autonomy and their own executives and legislatures; the metropolitan authority\'s jurisdiction is limited to basic services requiring coordination.'),
	row('yellow', 'Sec. 12', 'Highly urbanized cities, and component cities whose charters bar their voters from voting for provincial officials, are independent of the province. Voters of other component cities may not be deprived of their right to vote for provincial elective officials.'),
	row('green', 'Secs. 13–14', 'Local governments may group together and pool resources; the President provides for regional development councils.')
])}
${caseCard('MMDA v. Bel-Air Village Association (2000)', 'The MMDA is a development authority, not a political subdivision. It has no police power and no legislative power, so it cannot order a private subdivision road opened to the public.')}
${caseCard('League of Cities of the Philippines v. COMELEC (2011)', 'After several reversals, the Court finally upheld the sixteen cityhood laws that exempted the municipalities concerned from the increased income requirement.')}

<h3 class="sg-h3" id="art10-autonomous">Autonomous regions (Secs. 15–21)</h3>
${table(['Sec.', 'Rule'], [
	row('yellow', 'Sec. 15', 'Autonomous regions in Muslim Mindanao and the Cordilleras consist of provinces, cities, municipalities and geographical areas sharing common and distinctive historical and cultural heritage, economic and social structures — within the framework of the Constitution and the national sovereignty and territorial integrity of the Republic.'),
	row('yellow', 'Sec. 16', 'The President exercises general supervision over autonomous regions to ensure that laws are faithfully executed.'),
	row('green', 'Sec. 17', 'All powers, functions and responsibilities not granted by the Constitution or by law to the autonomous regions are vested in the National Government.'),
	row('green', 'Sec. 18', 'Congress enacts an organic act for each region, with a regional consultative commission. It provides an elective executive department and legislative assembly, and special courts with jurisdiction over personal, family and property law. The region takes effect when approved by a majority of the votes cast by the constituent units in a plebiscite — and <strong>only provinces, cities and geographic areas voting favorably</strong> are included.'),
	row('green', 'Sec. 20', 'Within its territory and subject to the Constitution and national laws, the organic act gives legislative powers over: administrative organization; sources of revenue; ancestral domain and natural resources; personal, family and property relations; regional urban and rural planning; economic, social and tourism development; educational policies; cultural heritage; and other matters authorized by law.'),
	row('green', 'Sec. 21', 'Peace and order in the regions is the responsibility of the local police agencies; defense and security are the responsibility of the National Government.')
])}
${caseCard('Ordillo v. COMELEC (1990)', 'A single province (Ifugao, the only one that voted yes) cannot by itself constitute the Cordillera Autonomous Region; "region" contemplates more than one constituent unit.')}
${caseCard('Sema v. COMELEC (2008)', 'The ARMM Regional Assembly cannot create a province: creating a province creates a legislative district, and only Congress may create or apportion legislative districts (Art. VI, Sec. 5).')}
${caseCard('Province of North Cotabato v. GRP Peace Panel (2008)', 'The MOA-AD\'s "associative relationship" contemplated a juridical entity approaching a separate state; the Constitution does not allow it, and the Executive cannot guarantee constitutional amendments.')}
${caseCard('Province of Sulu v. Medialdea (2024)', 'The Bangsamoro Organic Law is constitutional, but Sulu is not part of the BARMM: it rejected the law in the plebiscite, and Sec. 18 includes only the units that vote favorably.')}

<h3 class="sg-h3" id="art10-ordinances">Limits of local power</h3>
${table(['Rule', 'Statement'], [
	row('yellow', 'Valid ordinance', 'An ordinance must not contravene the Constitution or any statute, must not be unfair or oppressive, partial or discriminatory, must not prohibit but may regulate trade, must be general and consistent with public policy, and must not be unreasonable.'),
	row('red', 'Creatures of Congress', 'Local governments cannot prohibit what a national law allows: a city cannot ban a casino operated under PAGCOR\'s charter (<em>Magtajas v. Pryce Properties</em>, 1994), nor lotto authorized by law (<em>Lina v. Paño</em>, 2001).')
])}
`;

export const extTopics: ModuleTopic[] = [
	{ id: 'commissions', name: 'Constitutional Commissions', eyebrow: 'ART. IX', desc: 'Common provisions, CSC, COMELEC and COA: independence, terms, jurisdiction, review by certiorari.' },
	{ id: 'local_government', name: 'Local Government', eyebrow: 'ART. X', desc: 'Local autonomy, supervision vs. control, just share, three-term limit, plebiscites, autonomous regions.' }
];

export const extWatchFor: Record<string, string> = {
	commissions: `<strong>Watch for: the strict rules that admit no exception.</strong>
    <ul>
      <li>No temporary or acting appointment — not even by the President "pending" a regular one (<i>Brillantes v. Yorac</i>).</li>
      <li>A vacancy is filled only for the unexpired term; a Commissioner promoted to Chairman cannot exceed seven years in total (<i>Funa v. Villar</i>).</li>
      <li>"Final and not appealable" (COMELEC in municipal and barangay contests) still leaves certiorari open.</li>
      <li>Election cases go to a division first; the en banc decides only motions for reconsideration (<i>Sarmiento</i>).</li>
    </ul>`,
	local_government: `<strong>Watch for: what counts as a term, and who votes in the plebiscite.</strong>
    <ul>
      <li>Succession by operation of law and an annulled proclamation are not counted terms; preventive suspension and voluntary renunciation are not interruptions.</li>
      <li>"Political units directly affected" can mean the whole province (<i>Umali</i>).</li>
      <li>Supervision lets the President check legality, never substitute judgment or withhold the just share.</li>
    </ul>`
};

const J = 'The Judicial Department (Art. VIII)';
const C = 'Constitutional Commissions (Art. IX)';
const L = 'Local Government (Art. X)';

export const extEssays: AlacEssay[] = [
	// ---------------- Article VIII ----------------
	{
		id: 'consti1:alac:32',
		title: 'The Judicial Department — Problem 4',
		topic: J,
		factPattern:
			'Congress passes R.A. 13001, creating a Special Appellate Court on Agrarian Cases. Sec. 12 of the law provides that the court\'s decisions "shall be final and executory and shall not be subject to review by any other court, including the Supreme Court." A farmer whose land was awarded to another by the Special Appellate Court asks the Supreme Court to review the decision on a pure question of law.',
		question: 'Is Sec. 12 of R.A. 13001 valid? May the Supreme Court review the decision? Discuss.',
		modelAnswer: {
			answer: 'No, Sec. 12 is invalid insofar as it bars review by the Supreme Court, and the Court may review the decision.',
			legalBasis:
				'The Constitution provides that Congress may define, prescribe and apportion the jurisdiction of the courts, but may not deprive the Supreme Court of its jurisdiction over the cases enumerated in Art. VIII, Sec. 5 (Art. VIII, Sec. 2). Sec. 5(2)(e) gives the Supreme Court power to review, on appeal or certiorari, final judgments of lower courts in all cases in which only an error or question of law is involved. The judicial power also includes the duty to determine grave abuse of discretion by any branch or instrumentality of the Government (Art. VIII, Sec. 1).',
			application:
				'The Special Appellate Court is a lower court created by law, so its final judgments fall within Sec. 5(2). Making its decisions unreviewable "by any court, including the Supreme Court" strips the Court of appellate jurisdiction the Constitution itself grants — precisely what Sec. 2 forbids Congress to do. The farmer raises a pure question of law, which is squarely within Sec. 5(2)(e). Even apart from appeal, a law cannot place an instrumentality beyond the Court\'s certiorari power over grave abuse of discretion.',
			conclusion: 'Sec. 12 is unconstitutional to the extent it bars Supreme Court review. The Court may review the decision on the question of law.'
		}
	},
	{
		id: 'consti1:alac:33',
		title: 'The Judicial Department — Problem 5',
		topic: J,
		factPattern:
			'Facing a revenue shortfall, the Department of Budget and Management issues a circular placing ten percent of the Judiciary\'s approved appropriations "on reserve," to be released only if collections improve. In the next General Appropriations Act, Congress also appropriates for the Judiciary an amount lower than the previous year\'s, explaining that all agencies must share in austerity.',
		question: 'Are the DBM circular and the reduced appropriation valid? Discuss.',
		modelAnswer: {
			answer: 'No. Both the withholding and the reduction violate the Judiciary\'s fiscal autonomy.',
			legalBasis:
				'The Constitution provides that the Judiciary shall enjoy fiscal autonomy; appropriations for the Judiciary may not be reduced by the legislature below the amount appropriated for the previous year and, after approval, shall be automatically and regularly released (Art. VIII, Sec. 3). Fiscal autonomy contemplates a guarantee of full flexibility to allocate and utilize resources with the wisdom and dispatch that needs require (Bengzon v. Drilon, 1992).',
			application:
				'The DBM circular conditions the release of approved appropriations on revenue collections. That is the opposite of "automatically and regularly released" — it gives the Executive a hold over the Judiciary\'s funds that Sec. 3 was written to prevent. The reduced appropriation runs into the express floor in the same section: Congress may not appropriate less than the previous year\'s amount for the Judiciary, whatever the reason. A general policy of austerity does not create an exception the Constitution does not make.',
			conclusion: 'The circular is void as applied to the Judiciary, and the appropriation cannot go below the previous year\'s level; the Judiciary is entitled to the full amount, released automatically.'
		}
	},
	{
		id: 'consti1:alac:34',
		title: 'The Judicial Department — Problem 6',
		topic: J,
		factPattern:
			'In a criminal appeal, a Division of five Justices votes 3–2 to declare a provision of the Revised Penal Code unconstitutional and acquits the accused. In the same decision, the Division expressly abandons a doctrine that the Court en banc had laid down ten years earlier on the same provision. The People moves to set aside the decision.',
		question: 'Is the Division\'s decision valid? Discuss.',
		modelAnswer: {
			answer: 'No. The Division had no authority to declare the law unconstitutional or to abandon an en banc doctrine.',
			legalBasis:
				'The Constitution provides that all cases involving the constitutionality of a treaty, international or executive agreement, or law shall be heard by the Supreme Court en banc and decided with the concurrence of a majority of the Members who actually took part in the deliberations and voted (Art. VIII, Sec. 4(2)). It further provides that no doctrine or principle of law laid down by the Court in a decision rendered en banc or in division may be modified or reversed except by the Court sitting en banc (Art. VIII, Sec. 4(3)).',
			application:
				'The constitutionality of a provision of the Revised Penal Code is a case "involving the constitutionality of a law," which must be heard and decided en banc. A three-Justice majority of a five-member Division is not the en banc Court, however the vote is counted. The Division also went further and abandoned a doctrine laid down en banc — something only the Court sitting en banc may do. Both rulings were made by a body without the constitutional authority to make them.',
			conclusion: 'The Division\'s decision is invalid; the case must be referred to and decided by the Court en banc.'
		}
	},
	{
		id: 'consti1:alac:35',
		title: 'The Judicial Department — Problem 7',
		topic: J,
		factPattern:
			'Since 2001, the Judicial and Bar Council has seated two representatives of Congress — the chair of the Senate Committee on Justice and the chair of the House Committee on Justice — each casting a full vote. A lawyer applying to the Supreme Court, who missed the shortlist by one vote, challenges the practice.',
		question: 'Is the practice constitutional? Discuss.',
		modelAnswer: {
			answer: 'No. Congress is entitled to only one representative in the JBC, with one vote.',
			legalBasis:
				'The Constitution provides that the JBC is composed of the Chief Justice as ex officio Chairman, the Secretary of Justice, and "a representative of the Congress" as ex officio members, plus four regular members (Art. VIII, Sec. 8(1)). Jurisprudence holds that the use of the singular means one representative with one vote; seating two representatives of Congress with a full vote each is unconstitutional (Chavez v. Judicial and Bar Council, 2012).',
			application:
				'The Constitution fixes the JBC at seven members, with Congress as a body given one seat. Giving each House its own voting representative enlarges Congress\'s share of the Council\'s votes beyond what the Constitution allows, and creates an eight-member body the framers did not design. That the practice has gone on for years does not validate it: long usage cannot amend the Constitution.',
			conclusion: 'The practice is unconstitutional. Congress may have only one representative in the JBC, casting one vote.'
		}
	},
	{
		id: 'consti1:alac:36',
		title: 'The Judicial Department — Problem 8',
		topic: J,
		factPattern:
			'The Chief Justice retires on April 1. The presidential election is on May 11 of the same year. The JBC submits its shortlist on April 20, and on May 3 the outgoing President appoints a new Chief Justice. A group of lawyers argues that the appointment violates the ban on "midnight appointments."',
		question: 'Is the appointment valid? Discuss.',
		modelAnswer: {
			answer: 'Yes. The appointment is valid.',
			legalBasis:
				'Art. VII, Sec. 15 bars the President, two months before the next presidential election and until the end of his term, from making appointments except temporary appointments to executive positions when continued vacancies will prejudice public service or endanger public safety. Art. VIII, Sec. 4(1) requires that any vacancy in the Supreme Court be filled within ninety days from its occurrence, and Sec. 9 provides that the President appoints from the JBC list. Jurisprudence holds that the prohibition in Art. VII, Sec. 15 does not apply to appointments to the Supreme Court (De Castro v. Judicial and Bar Council, 2010).',
			application:
				'The appointment was made within two months of the election, which would ordinarily trigger the Art. VII ban. But the ban is located in the Article on the Executive and concerns executive appointments; the framers dealt separately with the Supreme Court, commanding in Art. VIII that its vacancies be filled within ninety days. The Chief Justice retired on April 1, so the ninety days ran well past the election. The President appointed from the JBC\'s list, as Sec. 9 requires, and acted within the period the Constitution itself mandates.',
			conclusion: 'The ban on midnight appointments does not apply; the appointment of the Chief Justice is valid.'
		}
	},
	{
		id: 'consti1:alac:37',
		title: 'The Judicial Department — Problem 9',
		topic: J,
		factPattern:
			'The Governor of a province issues an executive order creating a Provincial Peace and Order Council to coordinate police operations and review complaints against barangay officials. The order designates the Executive Judge of the local Regional Trial Court as an ex officio member. The judge accepts, reasoning that the post is unpaid and that his presence will improve coordination with the courts.',
		question: 'May the judge validly serve on the Council? Discuss.',
		modelAnswer: {
			answer: 'No. The judge may not serve on the Council.',
			legalBasis:
				'The Constitution provides that the Members of the Supreme Court and of other courts established by law shall not be designated to any agency performing quasi-judicial or administrative functions (Art. VIII, Sec. 12). Jurisprudence applied this to bar a judge from sitting, even ex officio, on a provincial committee on justice, a body performing administrative functions (In re Designation of Judge Manzano, 1988).',
			application:
				'The Council coordinates police operations and reviews complaints against barangay officials — administrative and, in the second respect, quasi-judicial work belonging to the Executive. That the designation is ex officio and unpaid does not matter: Sec. 12 forbids the designation itself, to keep judges out of executive work they may later have to rule on. The judge\'s good intentions about coordination cannot override a prohibition the Constitution states without exception.',
			conclusion: 'The designation is unconstitutional; the judge should decline or withdraw from the Council.'
		}
	},
	{
		id: 'consti1:alac:38',
		title: 'The Judicial Department — Problem 10',
		topic: J,
		factPattern:
			'Congress amends a special penal law to provide that "no plea bargaining shall be allowed in prosecutions under this Act, regardless of the imposable penalty." Charged under the law, Dario offers to plead guilty to a lesser offense. The prosecutor objects, citing the amendment, and the trial court denies the plea on that ground.',
		question: 'Is the trial court correct? Discuss.',
		modelAnswer: {
			answer: 'No. The prohibition is unconstitutional, and the court may not deny the plea on that ground.',
			legalBasis:
				'The Constitution gives the Supreme Court the power to promulgate rules concerning pleading, practice and procedure in all courts (Art. VIII, Sec. 5(5)). Unlike the 1935 and 1973 Constitutions, it no longer gives Congress the power to repeal, alter or supplement those rules. Jurisprudence holds that plea bargaining is a rule of procedure, so a statute prohibiting it encroaches on the Supreme Court\'s exclusive rule-making power (Estipona v. Lobrigo, 2017).',
			application:
				'The amendment does not define a crime or fix a penalty, which would be substantive; it regulates how a criminal case may be disposed of before trial — a matter of procedure. Under the 1987 Constitution, that power belongs exclusively to the Supreme Court, which has its own rules on plea bargaining. By denying the plea solely because of the amendment, the court gave effect to a law Congress had no power to enact. Whether Dario\'s plea should be accepted remains for the court to decide under the Rules, including the prosecutor\'s consent.',
			conclusion: 'The statutory prohibition is void; the court should evaluate Dario\'s offer under the Rules of Court rather than reject it on the strength of the amendment.'
		}
	},

	// ---------------- Article IX ----------------
	{
		id: 'consti1:alac:39',
		title: 'Constitutional Commissions — Problem 1',
		topic: C,
		factPattern:
			'The COMELEC Chairman resigns in February of an election year. Until a regular Chairman can be appointed and confirmed, the President designates Commissioner Ana, the most senior Commissioner, as "Acting Chairman," explaining that the Commission cannot be left without a head during election preparations.',
		question: 'Is the designation valid? Discuss.',
		modelAnswer: {
			answer: 'No. The President may not designate an Acting Chairman of the COMELEC.',
			legalBasis:
				'The Constitution provides that the Constitutional Commissions are independent (Art. IX-A, Sec. 1) and that no Member of the COMELEC shall be appointed or designated in a temporary or acting capacity (Art. IX-C, Sec. 1(2)). Jurisprudence holds that the choice of a temporary presiding officer in the absence of the Chairman belongs to the Commission itself, not to the President (Brillantes v. Yorac, 1990).',
			application:
				'Designating Commissioner Ana as Acting Chairman is a designation "in an acting capacity," which the Constitution flatly prohibits. It also lets the President choose who leads an independent Commission, and keep that person on a footing he can end at will — exactly the dependence the prohibition guards against. The need for a head during election preparations is real, but the Constitution answers it differently: the Commission may choose from among its Members who will preside until the President appoints a regular Chairman.',
			conclusion: 'The designation is unconstitutional. The COMELEC itself may choose its temporary presiding officer until a regular Chairman is appointed.'
		}
	},
	{
		id: 'consti1:alac:40',
		title: 'Constitutional Commissions — Problem 2',
		topic: C,
		factPattern:
			'While Congress is in recess, the President extends ad interim appointments to a COMELEC Chairman and two Commissioners, who take their oaths and assume office. The Commission on Appointments does not act on the appointments before Congress adjourns. The President renews the same appointments, and the appointees continue to serve. A COMELEC employee they reassigned argues that the appointees are merely temporary and that the renewal is a prohibited reappointment.',
		question: 'Are the employee\'s arguments correct? Discuss.',
		modelAnswer: {
			answer: 'No. The ad interim appointments are permanent, and their renewal is not a prohibited reappointment.',
			legalBasis:
				'The Constitution provides that COMELEC Members are appointed for seven years without reappointment, and that no Member shall be appointed or designated in a temporary or acting capacity (Art. IX-C, Sec. 1(2)). Ad interim appointments made during a recess are effective only until disapproval by the Commission on Appointments or until the next adjournment of Congress (Art. VII, Sec. 16). Jurisprudence holds that an ad interim appointment is a permanent appointment, and that renewing an ad interim appointment that was bypassed — neither confirmed nor disapproved — is not a prohibited reappointment (Matibag v. Benipayo, 2002).',
			application:
				'The appointees took office at once and could be removed only by disapproval or adjournment, not at the President\'s pleasure — the mark of a permanent, not an acting, appointment. The Commission on Appointments never disapproved them; it simply did not act before adjournment. Renewing a bypassed appointment does not give anyone a second term after serving a first; the prohibition on reappointment aims at a Member who has already served, which is not this case. The terms, in any event, run only to the end of the seven-year cycle for each seat.',
			conclusion: 'The appointees validly hold office; the ad interim appointments and their renewal are constitutional.'
		}
	},
	{
		id: 'consti1:alac:41',
		title: 'Constitutional Commissions — Problem 3',
		topic: C,
		factPattern:
			'Benjie was appointed COA Commissioner in 2020 for a term ending in 2027. In 2023, the COA Chairman\'s seven-year term expires. The President appoints Benjie as COA Chairman "for a term of seven years." A taxpayer challenges the appointment.',
		question: 'Is Benjie\'s appointment as Chairman valid? Would your answer be different if the Chairman had instead resigned in 2023, midway through his term? Discuss.',
		modelAnswer: {
			answer: 'No, the appointment is void. It could have been valid had the Chairman resigned, if Benjie served only the unexpired term and his total service did not exceed seven years.',
			legalBasis:
				'The Constitution provides that COA Members serve seven years without reappointment, that appointment to a vacancy is only for the unexpired portion of the predecessor\'s term, and that no Member may be appointed in a temporary or acting capacity (Art. IX-D, Sec. 1(2)). Jurisprudence holds that a Commissioner may be "promoted" to Chairman only if the Chairman\'s seat is vacant by death, resignation, disability or impeachment, the appointment is for the unexpired term, and the Member\'s total service in the Commission does not exceed seven years (Funa v. Villar, 2012).',
			application:
				'The Chairman\'s term expired, so the new Chairman must receive a full seven-year term. Benjie has already served three years as Commissioner; seven more would give him ten years in the Commission, beyond the seven-year limit — and a shorter term would violate the requirement of a full term for a vacancy by expiration. Either way, his appointment cannot be valid. Had the Chairman resigned, the vacancy would have been for an unexpired portion of the term; Benjie could then be promoted to serve only that remainder, provided his three years as Commissioner plus the remainder did not exceed seven years.',
			conclusion: 'Benjie\'s appointment as Chairman is unconstitutional. A promotion would be valid only for a vacancy by resignation (or death, disability or impeachment), for the unexpired term, and within seven years of total service.'
		}
	},
	{
		id: 'consti1:alac:42',
		title: 'Constitutional Commissions — Problem 4',
		topic: C,
		factPattern:
			'An election protest involving the mayor of a municipality is decided by the Regional Trial Court. The loser appeals to the COMELEC. Instead of referring the appeal to a division, the COMELEC en banc decides it directly and affirms the RTC. The loser goes to the Supreme Court. The winner moves to dismiss, invoking the Constitution\'s statement that COMELEC decisions in municipal election contests are "final, executory, and not appealable."',
		question: '(a) Was the COMELEC en banc\'s decision valid? (b) May the Supreme Court take cognizance of the loser\'s petition? Discuss.',
		modelAnswer: {
			answer: '(a) No, the en banc decision is void. (b) Yes, the Supreme Court may take cognizance, but only on certiorari for grave abuse of discretion.',
			legalBasis:
				'The Constitution provides that all election cases, including pre-proclamation controversies, shall be heard and decided by the COMELEC in division, and motions for reconsideration shall be decided by the Commission en banc (Art. IX-C, Sec. 3). Jurisprudence holds that an election case decided by the en banc at the first instance is void (Sarmiento v. COMELEC, 1992). The COMELEC\'s decisions in contests involving elective municipal and barangay officials are final, executory and not appealable (Art. IX-C, Sec. 2(2)), but any decision of a Constitutional Commission may be brought to the Supreme Court on certiorari within thirty days (Art. IX-A, Sec. 7), and the judicial power includes the review of grave abuse of discretion (Art. VIII, Sec. 1).',
			application:
				'The appeal from the RTC is an election case. By deciding it directly, the en banc skipped the division the Constitution requires and acted without authority; its decision is void and the case must go to a division. On the second issue, "final and not appealable" removes the remedy of appeal, but not the Supreme Court\'s certiorari jurisdiction, which the Constitution grants separately. The loser\'s petition is proper if filed as a petition for certiorari within thirty days and grounded on grave abuse of discretion — and a decision rendered by a body without authority to render it is exactly that.',
			conclusion: '(a) The en banc decision is void; the appeal must be decided by a division. (b) The Supreme Court may review the decision on certiorari, though not on appeal.'
		}
	},
	{
		id: 'consti1:alac:43',
		title: 'Constitutional Commissions — Problem 5',
		topic: C,
		factPattern:
			'The COMELEC cancels Rina\'s certificate of candidacy for Representative on the ground that she misrepresented her citizenship. The cancellation becomes final on May 14. Despite it, the provincial board of canvassers proclaims her on May 18, and on June 5 she takes her oath before the Speaker. She argues that, having been proclaimed and having taken her oath, she is now a Member of the House, so only the House of Representatives Electoral Tribunal may rule on her qualifications.',
		question: 'Is Rina correct? Discuss.',
		modelAnswer: {
			answer: 'No. The COMELEC retained jurisdiction, and Rina\'s qualifications are not yet a matter for the HRET.',
			legalBasis:
				'The Constitution makes the HRET the sole judge of all contests relating to the election, returns and qualifications of the Members of the House (Art. VI, Sec. 17). Jurisprudence holds that a candidate becomes a Member, and the HRET\'s jurisdiction begins, only upon (1) a valid proclamation, (2) a proper oath, and (3) assumption of office; the term of Representatives begins at noon of June 30 after the election (Art. VI, Sec. 7; Reyes v. COMELEC, 2013).',
			application:
				'Rina\'s proclamation came after the cancellation of her certificate of candidacy had become final, so it was not a valid proclamation. Even setting that aside, she could not have assumed office on June 5: the term of a Representative begins on June 30, and before then she is not yet a Member of the House. With no valid proclamation and no assumption of office, none of the conditions for HRET jurisdiction is met, and the COMELEC\'s jurisdiction over her case continues.',
			conclusion: 'Rina is not correct; the COMELEC retains jurisdiction, and its final cancellation of her candidacy stands.'
		}
	},
	{
		id: 'consti1:alac:44',
		title: 'Constitutional Commissions — Problem 6',
		topic: C,
		factPattern:
			'Two groups of employees go on strike over unpaid benefits: (1) employees of the Government Service Insurance System, a GOCC created by its own charter; and (2) employees of Pinoy Agri-Bank, a corporation organized under the Revised Corporation Code whose shares are wholly owned by a government bank. Both employers file administrative charges against the strikers before the Civil Service Commission.',
		question: 'Does the CSC have jurisdiction over each group? Was each strike lawful? Discuss.',
		modelAnswer: {
			answer: 'The CSC has jurisdiction over the GSIS employees, whose strike was unlawful; it has no jurisdiction over the Pinoy Agri-Bank employees, whose strike is governed by the Labor Code.',
			legalBasis:
				'The Constitution provides that the civil service embraces all branches, subdivisions, instrumentalities and agencies of the Government, including government-owned or controlled corporations with original charters (Art. IX-B, Sec. 2(1)). The right to self-organization shall not be denied to government employees (Sec. 2(5)), but jurisprudence holds that this right does not include the right to strike, which employees in the civil service may not exercise (SSS Employees Association v. Court of Appeals, 1989). GOCCs organized under the general corporation law are outside the civil service and are governed by the Labor Code.',
			application:
				'GSIS was created by a special law, so it is a GOCC with an original charter and its employees are in the civil service. They may organize, but may not strike; the CSC has jurisdiction over the administrative charges. Pinoy Agri-Bank, although wholly government-owned, was organized under the Revised Corporation Code — it has no original charter, so its employees are not in the civil service. Their strike is governed by the Labor Code and the labor tribunals, not the CSC.',
			conclusion: 'The CSC may proceed against the GSIS strikers, whose strike was unlawful; it has no jurisdiction over the Pinoy Agri-Bank employees, whose case belongs under the Labor Code.'
		}
	},
	{
		id: 'consti1:alac:45',
		title: 'Constitutional Commissions — Problem 7',
		topic: C,
		factPattern:
			'Three months after losing a senatorial race, Toni is appointed Undersecretary of Justice. Separately, Congress passes a law providing that "the Mayor of San Rafael shall be the Chairman of the San Rafael Ecozone Authority," and the incumbent mayor assumes the chairmanship.',
		question: 'Are Toni\'s appointment and the mayor\'s chairmanship valid? Discuss.',
		modelAnswer: {
			answer: 'No. Both violate Article IX-B.',
			legalBasis:
				'The Constitution provides that no candidate who has lost in any election shall, within one year after such election, be appointed to any office in the Government or any GOCC or its subsidiaries (Art. IX-B, Sec. 6). It further provides that no elective official shall be eligible for appointment or designation in any capacity to any public office or position during his tenure (Art. IX-B, Sec. 7, par. 1). Jurisprudence struck down a law making the Mayor of Olongapo the chairman of the Subic Bay Metropolitan Authority on this ground (Flores v. Drilon, 1993).',
			application:
				'Toni lost an election three months before her appointment, within the one-year period, so she cannot be appointed to any government office — and an undersecretaryship is plainly one. The mayor is an elective official during his tenure, and the chairmanship of the Ecozone Authority is another public office. The law making him chairman is a designation "in any capacity" that Sec. 7 prohibits. Unlike the rule for appointive officials, the rule for elective officials admits no exception by law or by the primary functions of the office.',
			conclusion: 'Toni\'s appointment is void, and the law making the mayor chairman is unconstitutional; the mayor cannot hold the chairmanship while he is mayor.'
		}
	},
	{
		id: 'consti1:alac:46',
		title: 'Constitutional Commissions — Problem 8',
		topic: C,
		factPattern:
			'The COA issues a circular ending the pre-audit of most government transactions and relying on post-audit instead. A taxpayer argues that the Constitution requires pre-audit. Meanwhile, Congress passes a law exempting the newly created National Sovereign Investment Fund from "examination and audit by the Commission on Audit, to protect the confidentiality of its investments."',
		question: 'Is the taxpayer correct? Is the exemption valid? Discuss.',
		modelAnswer: {
			answer: 'The taxpayer is not correct; the exemption is invalid.',
			legalBasis:
				'The Constitution gives the COA the power to examine, audit and settle all accounts pertaining to government funds and property, on a post-audit basis for specified entities, and allows temporary or special pre-audit where internal control is inadequate (Art. IX-D, Sec. 2(1)). It gives the COA exclusive authority to define the scope of its audit and its methods (Sec. 2(2)). Jurisprudence holds that pre-audit is not a constitutional mandate but a tool the COA may use in its discretion (Dela Llana v. COA, 2012). The Constitution also provides that no law shall be passed exempting any entity of the Government or its subsidiary, or any investment of public funds, from the COA\'s jurisdiction (Art. IX-D, Sec. 3).',
			application:
				'The Constitution mentions pre-audit only as a measure the COA "may adopt" when internal control is weak; deciding when to use it falls within the COA\'s exclusive authority to set the scope and methods of audit. Ending routine pre-audit is therefore within its power. The exemption is a different matter: the Fund is a government entity investing public funds, and Sec. 3 forbids any law that removes such an entity or investment from the COA\'s jurisdiction. Confidentiality concerns may shape how an audit is done, but cannot exempt the Fund from audit altogether.',
			conclusion: 'The COA circular is valid. The exemption is unconstitutional, and the Fund remains subject to COA audit.'
		}
	},

	// ---------------- Article X ----------------
	{
		id: 'consti1:alac:47',
		title: 'Local Government — Problem 1',
		topic: L,
		factPattern:
			'Mayor Lito was elected mayor of the Municipality of Dalisay in 2016, 2019 and 2022. In 2020 he was preventively suspended for six months while an administrative case was pending; the case was later dismissed. In 2024, Dalisay was converted into a city with the same territory and inhabitants, and Lito continued as city mayor. He files a certificate of candidacy for city mayor in the 2025 elections.',
		question: 'Is Lito qualified to run? Discuss.',
		modelAnswer: {
			answer: 'No. Lito is disqualified by the three-term limit.',
			legalBasis:
				'The Constitution provides that the term of elective local officials is three years and that no such official shall serve for more than three consecutive terms (Art. X, Sec. 8). Jurisprudence holds that preventive suspension is not an interruption of service, since the official is not removed from office but only barred from exercising its functions (Aldovino v. COMELEC, 2009). It also holds that converting a municipality into a city with the same territory and inhabitants does not interrupt the official\'s terms (Latasa v. COMELEC, 2003).',
			application:
				'Lito was elected to the same office three consecutive times. His six-month preventive suspension did not take him out of office; it only kept him from exercising its powers, so his 2019–2022 term counts as fully served. The 2024 conversion did not create a new office for purposes of Sec. 8: the city has the same territory and the same inhabitants, and Lito exercised authority over the same people throughout. Running in 2025 would give him a fourth consecutive term over the same constituency.',
			conclusion: 'Lito has served three consecutive full terms and is disqualified from running for city mayor in 2025.'
		}
	},
	{
		id: 'consti1:alac:48',
		title: 'Local Government — Problem 2',
		topic: L,
		factPattern:
			'Vice-Mayor Carmen became mayor of San Isidro in 2017 when the elected mayor died, and served the rest of that term until 2019. She was then elected mayor in 2019 and 2022. In 2025, she files a certificate of candidacy for mayor. Her opponent petitions to disqualify her for having "served as mayor for three consecutive terms."',
		question: 'Should the petition be granted? Discuss.',
		modelAnswer: {
			answer: 'No. Carmen may run for mayor in 2025.',
			legalBasis:
				'The Constitution provides that no elective local official shall serve for more than three consecutive terms (Art. X, Sec. 8). Jurisprudence holds that the limit applies only when the official was elected to the same office for three consecutive terms and fully served them; a term reached by succession by operation of law is not a term the official was elected to (Borja v. COMELEC, 1998).',
			application:
				'Carmen became mayor in 2017 by operation of law, as the vice-mayor succeeding the deceased mayor; she was not elected mayor for that term. That period does not count toward the limit. She was elected mayor only in 2019 and 2022 — two terms. A 2025 victory would be her third elected term as mayor, which the Constitution allows.',
			conclusion: 'The petition should be denied; Carmen is not barred by the three-term limit.'
		}
	},
	{
		id: 'consti1:alac:49',
		title: 'Local Government — Problem 3',
		topic: L,
		factPattern:
			'Mayor Dante served three consecutive terms ending June 30, 2022, and did not run in the May 2022 elections. In 2023, a recall election is called against his successor, and Dante files his candidacy for the recall election. Separately, Mayor Eva, in her third consecutive term, resigned in 2023 "to rest," and now wants to run for mayor in 2025.',
		question: 'May Dante run in the recall election? May Eva run in 2025? Discuss.',
		modelAnswer: {
			answer: 'Dante may run in the recall election. Eva may not run in 2025.',
			legalBasis:
				'The Constitution provides that no elective local official shall serve for more than three consecutive terms, and that voluntary renunciation of the office for any length of time shall not be considered an interruption in the continuity of service for the full term (Art. X, Sec. 8). Jurisprudence holds that what the limit prohibits is immediate re-election for a fourth consecutive term; an official who did not run in the regular election after his third term may run in a later recall election (Socrates v. COMELEC, 2002).',
			application:
				'Dante\'s three terms ended in 2022, and he sat out the regular election that year; someone else served as mayor. That break is an interruption in the continuity of his service, so a recall election in 2023 would not give him a fourth consecutive term. Eva\'s case is the opposite: she left office in the middle of her third term by her own choice. The Constitution treats voluntary renunciation as no interruption at all, so her third term is counted as fully served, and running in 2025 would be a fourth consecutive term.',
			conclusion: 'Dante is qualified to run in the recall election; Eva is disqualified from running for mayor in 2025.'
		}
	},
	{
		id: 'consti1:alac:50',
		title: 'Local Government — Problem 4',
		topic: L,
		factPattern:
			'The President proclaims the component City of Santa Cruz a highly urbanized city, after it meets the income and population requirements. The COMELEC schedules a plebiscite in which only the registered voters of Santa Cruz may vote. The Governor of the province, which stands to lose a large part of its tax base, asks the Supreme Court to require that all voters of the province take part.',
		question: 'Is the Governor correct? Discuss.',
		modelAnswer: {
			answer: 'Yes. All the voters of the province must take part in the plebiscite.',
			legalBasis:
				'The Constitution provides that no province, city, municipality or barangay may be created, divided, merged, abolished, or its boundary substantially altered, except in accordance with the criteria in the local government code and subject to approval by a majority of the votes cast in a plebiscite in the political units directly affected (Art. X, Sec. 10). Jurisprudence holds that converting a component city into a highly urbanized city substantially alters the territory and resources of the province, so the voters of the entire province are among those directly affected (Umali v. COMELEC, 2014).',
			application:
				'Once Santa Cruz becomes highly urbanized, it becomes independent of the province (Art. X, Sec. 12): the province loses the city\'s territory, inhabitants and share of revenues, and its own voters lose the city\'s participation in provincial affairs. The province is therefore a political unit directly affected, not a bystander. A plebiscite limited to the city\'s voters would let one unit decide a change that materially alters another without its consent.',
			conclusion: 'The plebiscite must include all the qualified voters of the province, not only those of Santa Cruz.'
		}
	},
	{
		id: 'consti1:alac:51',
		title: 'Local Government — Problem 5',
		topic: L,
		factPattern:
			'(1) The Secretary of Justice, on review of a city tax ordinance, declares it void because the city council did not hold the public hearings the Local Government Code requires, and further "reduces the tax rate to a more reasonable level." (2) Separately, the President issues an administrative order withholding fifteen percent of all local governments\' share in national taxes until revenue targets are met.',
		question: 'Are the Secretary\'s actions and the administrative order valid? Discuss.',
		modelAnswer: {
			answer: 'The Secretary validly declared the ordinance void for non-compliance with the law, but could not rewrite the tax rate. The administrative order is invalid.',
			legalBasis:
				'The Constitution gives the President only general supervision over local governments (Art. X, Sec. 4), and entitles local governments to a just share in the national taxes, which shall be automatically released to them (Art. X, Sec. 6). Jurisprudence holds that the Secretary of Justice\'s review of tax ordinances is supervision: he may set aside an ordinance for illegality, but may not substitute his own judgment (Drilon v. Lim, 1994). It also holds that withholding a portion of the local governments\' share violates the requirement of automatic release (Pimentel v. Aguirre, 2000).',
			application:
				'Declaring the ordinance void because the council skipped the hearings the Code requires is a check on legality — whether the council acted within the law — and is within supervision. Reducing the tax rate is different: it replaces the council\'s choice with the Secretary\'s, which is control, a power the President and his alter ego do not have over local governments. The administrative order withholds fifteen percent of the just share on a condition the Constitution does not allow; "automatically released" means released without such conditions, and supervision gives no power to hold the share back.',
			conclusion: 'The declaration of nullity stands, but the reduction of the tax rate is void. The administrative order is unconstitutional, and the withheld shares must be released.'
		}
	},
	{
		id: 'consti1:alac:52',
		title: 'Local Government — Problem 6',
		topic: L,
		factPattern:
			'(1) The Regional Assembly of an autonomous region passes a regional law dividing one of its provinces into two and creating the new Province of Maharlika. (2) In the plebiscite on the region\'s new organic act, the voters of the Province of Tagum vote against inclusion, but the region\'s other provinces vote in favor. The organic act\'s implementing rules treat the old region as a single unit and include Tagum in the new region.',
		question: 'Is the creation of Maharlika valid? Is Tagum part of the new region? Discuss.',
		modelAnswer: {
			answer: 'The creation of Maharlika is invalid, and Tagum is not part of the new region.',
			legalBasis:
				'The Constitution provides that legislative districts are apportioned by law, and that each province shall have at least one Representative (Art. VI, Sec. 5). Jurisprudence holds that a regional assembly cannot create a province, because creating a province creates a legislative district, and only Congress may do that (Sema v. COMELEC, 2008). The Constitution further provides that only provinces, cities and geographic areas voting favorably in the plebiscite shall be included in an autonomous region (Art. X, Sec. 18). Applying this, the Supreme Court held that Sulu, which rejected the Bangsamoro Organic Law, is not part of the BARMM (Province of Sulu v. Medialdea, 2024).',
			application:
				'Creating Maharlika would automatically entitle it to a Representative, so the Regional Assembly would be creating a legislative district — a power reserved to Congress. The autonomous region\'s legislative powers under Art. X, Sec. 20 do not include it. As for Tagum, inclusion in an autonomous region depends on each constituent unit\'s own vote, not on the vote of the region as a whole. Tagum voted no, so treating the region as a single unit to sweep Tagum in contradicts the express wording of Sec. 18.',
			conclusion: 'The regional law creating Maharlika is void, and Tagum, having voted against inclusion, is not part of the new autonomous region.'
		}
	},
	{
		id: 'consti1:alac:53',
		title: 'Local Government — Problem 7',
		topic: L,
		factPattern:
			'Invoking local autonomy and the general welfare clause, the City of Bayanihan passes an ordinance prohibiting "any form of gambling, including casinos and lotto outlets," within the city. A casino operating under a franchise granted by PAGCOR\'s charter and a lotto outlet authorized by the PCSO challenge the ordinance.',
		question: 'Is the ordinance valid as applied to them? Discuss.',
		modelAnswer: {
			answer: 'No. The ordinance cannot prohibit gambling activities that national law authorizes.',
			legalBasis:
				'The Constitution grants local governments local autonomy (Art. X, Sec. 2), but autonomy is exercised within the framework of law: local governments are creatures of Congress, and an ordinance must not contravene the Constitution or any statute. Jurisprudence holds that a city cannot prohibit a casino operated under PAGCOR\'s charter, since Congress authorized it (Magtajas v. Pryce Properties, 1994), nor lotto authorized by law (Lina v. Paño, 2001).',
			application:
				'The casino operates under PAGCOR\'s charter and the lotto outlet under the PCSO\'s authority — both conferred by national statutes. By banning them outright, the ordinance contradicts what Congress has expressly allowed. Local autonomy is a decentralization of administration, not a grant of power to override national policy; the general welfare clause lets the city regulate, for instance through zoning and permits, but not prohibit what a statute permits.',
			conclusion: 'The ordinance is void as applied to the casino and the lotto outlet.'
		}
	},
	{
		id: 'consti1:alac:54',
		title: 'Local Government — Problem 8',
		topic: L,
		factPattern:
			'Congress amends the Local Government Code to provide that the local governments\' share is "forty percent of national internal revenue taxes, excluding taxes collected by the Bureau of Customs." Several provinces challenge the amendment, arguing that the Constitution entitles them to a share in all national taxes.',
		question: 'Is the amendment valid? Discuss.',
		modelAnswer: {
			answer: 'No. The amendment is unconstitutional insofar as it excludes national taxes from the base of the just share.',
			legalBasis:
				'The Constitution provides that local governments shall have a just share, as determined by law, in the national taxes, which shall be automatically released to them (Art. X, Sec. 6). Jurisprudence holds that the base of the just share is all national taxes, not only national internal revenue taxes; Congress may fix the share, but may not exclude national taxes from the base (Mandanas v. Ochoa, 2018).',
			application:
				'Congress has the power to determine how large the just share is — forty percent is a matter for its judgment. But it must be a share "in the national taxes." Customs duties collected by the Bureau of Customs are national taxes, so excluding them from the base takes away part of what the Constitution entitles local governments to share in. The phrase "as determined by law" refers to the share, not to which national taxes count.',
			conclusion: 'The amendment is void to the extent it excludes customs and other national taxes from the base; the share must be computed on all national taxes.'
		}
	}
];
