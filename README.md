# Unit 3 Revision

A static revision site for Unit 3: key points per topic, quizzes, flashcards, written exam practice with mark schemes, progress tracking and printable certificates.

Built on the same engine as [TLV Revision](https://github.com/tom-landy/TLV-Revision). No build step, no server, no database. Plain HTML, CSS and JavaScript in `public/`.

**Status: engine only.** `public/data/sample.js` is a placeholder topic showing every question type. Unit 3 content goes in once the spec and scheme of work are added.

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

- `groupLabel` / `groupShort`: what a top-level section is called. Default "Element" / "E". Set to e.g. "Learning aim" / "LA" and title sections "Learning aim A: ...". The label is used on buttons ("Learning aim test", "Learning aim certificate").
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
    { type: "docx",  title: "Workbook", url: "files/unit3-workbook.docx" }
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
      suggested: true             // optional: shows "Suggested answer, not from the workbook"
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
- Each quiz draws up to `questionsPerQuiz` questions (default 10) at random.
- Put PDFs or other files in `public/files/` and link to them as `files/name.pdf`.

## Podcasts

List episodes in `public/data/podcasts.js` and put the files in `public/audio/` with exactly the listed names. Each appears once its file is uploaded.
