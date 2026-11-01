# Subpoena Colada

A study app for Philippine law subjects: color-coded study guides and case digests, situational MCQ practice, and ALAC essay exercises with model answers. There is no account and no server. Everything runs in the browser, and your progress stays in that browser's `localStorage`.

SvelteKit 3 (Svelte 5 runes) · Tailwind v4 · shadcn-svelte.

![Dashboard: overall progress, the ALAC method, and subject cards with completion bars](docs/screenshots/dashboard.png)

## Features

### Finding your way

- **One app shell** on every page: subjects menu, search, theme and settings in the header; on phones they fold into a menu sheet.
- **Subject → Part → Topic.** Each guide is split into parts (a chapter, a Rule, an Article), and each part into topics you can collapse, mark as studied or bookmark. The navigator beside the reader shows the whole subject as a tree with progress dots and a filter; on phones it opens as a sheet.
- **Breadcrumbs, previous/next part, and deep links** to every part and topic (`/module/<subject>/read/<part>#<topic>`). Old `/module/statcon2` and `/module/pfr_cases` links redirect to the merged subjects.
- **Subject overviews** with progress, where you left off, and the parts in order.

### Search

- **Global search** (`⌘K` / `Ctrl+K`, or `/`) across every guide, case digest, MCQ and ALAC problem. Results are ranked with heading matches first, grouped into *Go to* and *In the text*, and open at the match, highlighted.
- Scope a search to **all subjects, this subject or this part**; the full results page (`/search`) adds filters by subject and type and an exact-phrase option, all kept in the URL so a search can be shared.
- Recent searches, recently read places, and a spelling suggestion when nothing matches.

### Study guides and case digests

![A Criminal Procedure study guide with highlights in five colors, the highlights panel, and a note open on a case citation](docs/screenshots/study-guide-highlights.png)

- **Color-coded guides**, with a legend for what each color marks (rules to memorize, requisites, exceptions, jurisprudence and so on).
- **Textbook-style reading**: a comfortable measure, serif or sans body text, and **reading settings** for text size, line height, width and font (kept per browser).
- **On this page** rail with scroll tracking; topics you scroll through are marked visited, and you mark them studied yourself.
- **Case digests** grouped by syllabus part and topic. Digests the source flags as unverified carry an *Unverified* badge.
- **Highlights and notes.** Select any text in a guide or digest and pick one of five colors, each with a label you can rename (defaults: Memorize, Requisites, Exceptions, Jurisprudence, Compare & contrast). Tap a highlight, or use the pencil in the Highlights panel, to:
  - change its color or add a note,
  - **Adjust** it to cover different text, keeping the color and note,
  - remove it, or remove every highlight in a subject at once.

  Highlights are anchored to the text they quote, so they survive re-renders and searches. If the guide's wording changes, the highlight moves to *No longer in the guide* with its note intact, and **Re-attach** lets you point it at the new wording.
- **Print-friendly**: printing opens every flashcard and drops the app's controls.

### MCQ practice engine

![A situational MCQ answered correctly, with the legal basis and explanation shown](docs/screenshots/mcq-practice.png)

- **Practice mode** gives instant feedback: the legal basis and an explanation for every item, optional hints, and a *Watch for* box listing the common traps for the subject or topic.
- **Exam mode** is timed and gives no feedback until you submit. Results are scored overall and by topic, then added to your progress.
- **Filters** for unanswered, incorrect and bookmarked questions, plus a filter per topic.
- **Question map** showing which items are correct, incorrect or bookmarked, so you can jump straight to them.
- **Keyboard**: `←` `→` to move, `A`–`D` or `1`–`4` to answer, `N` for the next question once you've answered.

### ALAC essay exercises

![An ALAC essay with the student's draft beside the revealed model answer](docs/screenshots/alac-essay.png)

- A fact pattern and question for each problem, answered in the four ALAC parts: **A**nswer, **L**egal basis, **A**pplication, **C**onclusion.
- Drafts save as you type, with a word count.
- **Reveal the model ALAC answer** beside your draft once you've tried it yourself.
- Mark problems **Mastered** or **Needs review**, and filter the list by status (not started, in progress, needs review, mastered).

### Progress, settings and devices

<p align="center"><img src="docs/screenshots/mobile-dark.png" width="300" alt="The study guide on a phone in dark mode, with highlights"></p>

- **Home** picks up where you left off: continue reading, continue practice, an essay draft in progress, recent places and bookmarks.
- **Saved** (`/saved`) gathers highlights by part (with any that no longer match the guide), notes you can write and link to a place, and guide and MCQ bookmarks.
- **Dashboard** with totals, accuracy, essays mastered or flagged for review, and completion per subject. Filter subjects by category: Civil, Political, Criminal, Remedial Law, or Legal Method.
- **Light, dark or system theme**, and a **text size** control that the layout adapts to.
- **Phone and tablet layouts**: the navigator, the on-this-page rail and the highlights panel open as sheets, and practice and essay tools stack.
- **Backups**: Settings exports your answers, drafts, bookmarks, highlights, notes and reading progress as a JSON file, and imports it on another browser or device. Before an import replaces anything, it shows what the file contains. Backups from earlier versions still import. *Reset all progress* asks first and clears it all (your theme and reading settings stay).
- Several open tabs stay in sync.

## Subjects

| Subject | Category | Coverage | MCQs | Essays | Case digests |
| --- | --- | --- | ---: | ---: | ---: |
| Persons & Family Relations | Civil Law | Civil Code Arts. 1–18, 37–51 · Family Code Arts. 1–182 (through the family home, and paternity and filiation) · court pronouncements, Part One through Midterms | 134 | 52 | 105 |
| Constitutional Law I | Political Law | 1987 Constitution Arts. I, II, IV–X | 40 | 54 | — |
| Criminal Law 1 | Criminal Law | Revised Penal Code, Book One, Arts. 1–15 | 92 | 23 | — |
| Criminal Procedure | Remedial Law | Rules 110–127, from Tiu's 2017 notes, with later rulings flagged · four practice quizzes (Rules 110–114, 115–119, 120–124, 125–127) | 296 | 124 | — |
| Statutory Construction | Legal Method | Agpalo, Chapters I–XI, and five cases | 177 | 50 | 5 |

Persons & Family Relations and its case pronouncements, and Statutory Construction I and II, are each one subject. The source files stay separate and every question, essay, case and highlight keeps its id, so progress saved before the merge carries over.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run check    # svelte-check
npm run build    # static SPA -> build/ (fallback: 200.html)
```

## Layout

- `src/lib/data/` — one file per data module (`pfr`, `pfr_cases`, `consti1`, `crim1`, `statcon`) plus `modules.ts`, the master index, which combines modules into the subjects the app shows (`pfr` + `pfr_cases`, `statcon` + `statcon2`). `aliases.ts` maps the old ids to the merged ones. These files are the source of truth for questions, essays and guides.
- `src/lib/data/pfr_ext.ts` — Persons & Family Relations, Family Code Arts. 149–182 (the family, the family home, paternity and filiation, legitimation): article-by-article codal text with color-tagged notes, inserted after Part VII, and its quick-recall review tools at the end of the guide.
- `src/lib/data/consti1_ext.ts` — Constitutional Law I, Arts. VIII (addendum), IX and X: the guide sections, topics, *Watch for* notes and bar-style ALAC problems, appended to `consti1`.
- `src/lib/data/statcon2/` — Statutory Construction II (Agpalo Chs. VI–XI and five cases), kept as structured data instead of a hand-written HTML string: one file per chapter (`ch6`–`ch11`), `cases`, `integrated` (comprehensive exam) and `review` (front matter and master sheets), rendered by `model.ts`. True/false items and the case recall drill become MCQs and every ALAC problem becomes an essay, with IDs taken from each item's position in its bank, so add new items at the end of a bank.
- `src/lib/data/crimpro/` — Criminal Procedure, Rules 110–127 (from Tiu's 2017 notes, with later rulings flagged), built on the `statcon2` helpers: one file per Rule (`r110`–`r127`), each rendered by `model.ts` into the same twelve parts; `prescription` (special module after Rule 110); `deadlines`, `cases` and `comparisons` (back matter that indexes the Rule files rather than repeating them); `integrated` (mock exam and its separate key); `quizzes` (four practice quizzes of four-option MCQs by Rule range, shown as "Quiz 1"–"Quiz 4" in the MCQ topic filter and printed in the guide with their own key); and `review` (start page, topic map and inventory, last-minute sheet and quality checklist). The same ID rule applies: append new items at the end of a bank.
- `src/lib/content.ts` — splits each subject's guide into parts (an `h2`) and topics (a top-level `h3`), groups them for the navigator, and builds reader links.
- `src/lib/search.ts` — the local search index (built on first use) and ranking.
- `src/lib/stores/storage.svelte.ts` — reactive `localStorage` store (debounced writes, cross-tab sync, export/import with preview). Reading progress, guide bookmarks, notes and recent searches live under `sc_reading`; the older keys are unchanged.
- `src/lib/stores/prefs.svelte.ts` — reading settings (`sc_prefs`), kept per browser and not part of backups.
- `src/lib/highlights.svelte.ts` — anchors reader highlights to quoted text and paints them with the CSS Custom Highlight API, without touching the guide's DOM.
- `src/lib/components/shell/` — `AppHeader`, `SearchPalette`, `SubjectNav` (the navigator), `Toaster`.
- `src/lib/components/common/` — `Breadcrumbs`, `EmptyState`, `Segmented`, `StudyBar`, `ReadingSettings`.
- `src/lib/components/` — `McqQuizEngine`, `AlacEssayEditor`, `HighlightMenu` (the menu over selected or highlighted text), `HighlightsPanel`, `HighlightEditor`, `AlacBanner`.
- `src/routes/` — `/` home, `/search`, `/saved`, `/settings`, and per subject `/module/<slug>` (overview) with `read/<part>`, `practice` and `essays` under a shared study layout.
- `static/legacy/` — the previous single-file HTML version, still served under `/legacy/`.
- `docs/screenshots/` — the images in this README, taken with demo progress before the redesign; they need retaking.

Question and essay IDs are `<module>:<topic>:<n>` / `<module>:alac:<n>`. Saved progress is keyed by those IDs, so reordering a bank is safe but renaming or renumbering an item detaches its saved answer.

Highlights are anchored inside a guide section's `h2` id or a case digest's id, which is why a part is always a whole `h2` section. Renaming those ids, or rewording highlighted text, moves a highlight to *No longer in the guide*, where the reader can re-attach it.

## Deploy

`vercel.json` builds with `npm run build`, serves `build/`, and rewrites unknown paths to `200.html` so `/module/<slug>/read/<part>` and other deep links work.
