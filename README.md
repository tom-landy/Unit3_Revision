# Unit 3 Revision

A static revision site for **Pearson BTEC Level 3 Nationals in Business, Unit 3: Personal and Business Finance**: key points per topic, quizzes, flashcards, written exam practice with mark schemes, progress tracking and printable certificates.

Built on the same engine as [TLV Revision](https://github.com/tom-landy/TLV-Revision). No build step, no server, no database. Plain HTML, CSS and JavaScript in `public/`.

## Content

24 topics following the specification (Issue 15, April 2023): learning aims A to F plus an exam skills topic. 255 quiz questions, 187 flashcards and 99 exam practice questions (418 marks).

| File | Topics |
|---|---|
| `aim-a-personal-finance.js` | A1 Functions and role of money, A2 Ways to pay, A3 Current accounts, A4.1 Borrowing, A4.2 Saving and investing, A4.3 Insurance |
| `aim-b-finance-sector.js` | B1 Financial institutions, B2 Communicating with customers, B3 Consumer protection, B4 Information, guidance and advice |
| `aim-c-accounting.js` | C1 Purpose of accounting, C2 Types of income, C3 Types of expenditure and depreciation |
| `aim-d-sources-of-finance.js` | D1.1 Internal sources and choosing finance, D1.2 External sources |
| `aim-e-cash-flow-break-even.js` | E1 Cash flow forecasts, E2 Break-even |
| `aim-f-final-accounts-ratios.js` | F1 SOCI, F2 SOFP, F3 Profitability, F4 Liquidity, F5 Efficiency, F6 Limitations of ratios |
| `exam-skills.js` | X1 Exam technique and command words |

### Where the exam practice comes from

- **Past paper** items use questions from the January 2024, June 2024, January 2025 and January 2026 papers, with condensed Pearson mark schemes. Only the mark schemes were available, so question wording is taken from the mark scheme. Where a question needs scenario data (tables of savings accounts, insurance policies, accounts), the data is **rebuilt from the figures in the mark scheme** and labelled as such. A few figures the mark scheme doesn't state are filled in and flagged in the question (the Royal pet insurance premium, June 2024 Q6; the home insurance excesses, January 2025 Q6).
- Items marked `suggested: true` were written for this site, with our own mark schemes. Students see "Suggested answer, written for this site. Not from a Pearson mark scheme."
- Calculation quiz questions use our own figures, all checked by script.

### Things staff should check

- **FSCS limit (B3).** The January 2025 mark scheme says £85,000. The limit rose to £120,000 per person per banking licence on 1 December 2025. The site teaches £120,000 and notes the old figure.
- **ISA allowance (A4.2).** The site says £20,000 and warns that a lower cash ISA limit for under-65s has been announced from April 2027. Update when it takes effect.
- **Interest calculations in the mark schemes are not consistent.** January 2025 treats "25% interest over 4 years" as 25% in total; January 2024 treats 15% as a yearly rate. Site questions say "flat rate of X% a year" or "25% total interest" to avoid ambiguity.
- **Other figures that date:** contactless limit £100, payday loan caps, credit union cap 42.6% APR, pension access age 55 (57 from 2028), auto-enrolment minimums.

## What students get

- **Topics** with key points and resource links.
- **Quizzes**: 10 questions per attempt, mixing multiple choice, match-up, put in order, sort into groups, select all that apply and type the answer. Marked at the end, then reviewed.
- **Flashcards** per topic, with missed cards coming back round.
- **Section tests**: 20 mixed questions across a whole section, with weak topics flagged.
- **Practise my mistakes**: wrong answers come back until answered right.
- **Exam practice**: written questions, self-marked against a mark scheme.
- **Progress**, **certificates** (per topic and per section) and a **backup code** to move between devices.

## Limits

Progress is stored in the student's browser (`localStorage`). Teachers cannot see it, clearing browser data loses it (unless the student used the backup code), and certificates are not verifiable.

## Run locally

```bash
cd public
```

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy on Render

`render.yaml` is included. In Render choose **New > Blueprint**, pick this repo, and it creates a static site called `unit3-revision`. Every push to the default branch redeploys.

## Settings

`public/data/settings.js` holds the site name, header badge, pass mark, certificate signatory, GoatCounter code and:

- `groupLabel` / `groupShort`: what a top-level section is called. Set to "Learning aim" / "", so "Learning aim A: ..." gets a jump button "A" and buttons read "Learning aim test". A section can override this with its own `label` (the exam skills section uses `label: "Exam skills"`).
- `suggestedNote`: the line shown on site-written practice questions.
- `storageKey`: where progress is saved. Changing it wipes everyone's progress.

## Adding content

One file per section in `public/data/`, each pushing to `window.TLV_CONTENT.subjects`, with a `<script>` line in `public/index.html`. The global names (`TLV_CONTENT`, `TLV_PODCASTS`) are kept from TLV Revision on purpose so engine fixes can be copied between the two repos unchanged.

```js
window.TLV_CONTENT.subjects.push({
  id: "element-1",                // unique, never change once live
  title: "Element 1: Section name",  // must start with groupLabel
  colour: "#1f4e79",
  topics: [ /* topic objects, below */ ]
});
```

Questions and practice items can carry a data table (cash flow forecasts, accounts) shown under the question:

```js
table: [["", "Jan £", "Feb £"], ["Cash sales", "4,200", "3,800"], ["Closing balance", "800", "?"]]
```

Typed answers accept Pearson number formats: `1 375`, `(2 480)` for negatives, `2:1` for ratios, and ignore £, % and units ("46 days").

Topic format:

```js
{
  id: "1.1",                      // unique, never change once live
  title: "1.1 Types of organisation",
  summary: "One line shown on the topic card.",
  passMark: 80,                   // optional, % needed to pass
  resources: [
    { type: "notes", title: "Key points", body: "Paragraph one.\n\nParagraph two." },
    { type: "link",  title: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize" },
    { type: "docx",  title: "Worksheet", url: "files/worksheet.docx" }
  ],
  cards: [                        // flashcards: [front, back]
    ["Public sector", "Owned and funded by the government..."]
  ],
  questions: [                    // auto-marked quiz
    {
      q: "Which of the following is an example of a public sector organisation?",
      options: ["Tesco", "NHS", "Oxfam", "Barclays Bank"],
      answer: 1,                  // index of the correct option, counting from 0
      explanation: "Shown in the review at the end."
    },
    { q: "True or false: ...", options: ["True", "False"], answer: 0, explanation: "..." },
    { type: "multi", q: "Select all...", options: ["A", "B", "C", "D"], answers: [0, 2] },
    { type: "type", q: "What does GDP stand for?", accept: ["gross domestic product"] },
    { type: "match", q: "Match each...", pairs: [["Term", "Its description"], ["Term 2", "Description 2"], ["Term 3", "Description 3"]] },
    { type: "order", q: "Put these in order.", items: ["First", "Second", "Third"] },
    { type: "sort", q: "Fixed or variable?", categories: ["Fixed", "Variable"], items: [["Rent", 0], ["Raw materials", 1]] }
  ],
  practice: [                     // written exam practice, self-marked
    {
      q: "State two features of a voluntary sector organisation.",
      marks: 2,
      answer: "Any two from:\n- not-for-profit\n- surplus reinvested",
      suggested: true             // optional: shows settings.suggestedNote
    }
  ]
}
```

Rules:

- **Do not change a topic `id` once students have used it.** Progress is saved against the id.
- **Do not reorder `practice` items once live.** Saved written answers are matched by position. To be safe, give an item its own `id`.
- `answer` and `answers` count from 0. The first option is 0.
- Question wording must be unique within a topic: the mistakes list finds questions by their text. Editing a question's wording drops it from students' mistakes lists, which is harmless.
- Typed answers ignore capitals, £, commas, % and apostrophes, and accept a number followed by a unit ("48 hours"). List every acceptable wording in `accept`; the first is shown as the correct answer.
- Each quiz includes up to 4 non-multiple-choice questions, so topics with many of them still get a mix.
- Options are shuffled each attempt, except two-option questions (True/False) and any question with `shuffle: false`.
- Mark schemes: a blank line starts a new paragraph; lines starting `- ` become a bullet list.
- Practice items have an `id`, so their order can change without losing students' saved answers.
- Each quiz draws up to `questionsPerQuiz` questions (default 10) at random.
- Put PDFs or other files in `public/files/` and link to them as `files/name.pdf`.

## Podcasts

List episodes in `public/data/podcasts.js` and put the files in `public/audio/` with exactly the listed names. Each appears once its file is uploaded.
