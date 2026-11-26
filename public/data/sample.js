/*
 * SAMPLE CONTENT. Placeholder so the site runs and shows every question type.
 * Delete this file and its <script> line in index.html once real Unit 3 content is in.
 */
(function () {
  window.TLV_CONTENT.subjects.push({
    id: "sample",
    title: "Element 0: Sample section",
    colour: "#1f4e79",
    topics: [
      {
        id: "0.1",
        title: "0.1 How the site works",
        summary: "A placeholder topic showing each question type. Replace with Unit 3 content.",
        resources: [
          { type: "notes", title: "Key points", body: "This is a sample topic.\n\nKey points go here as paragraphs. A blank line starts a new paragraph." }
        ],
        cards: [
          ["Flashcard front", "Flashcard back"],
          ["Quiz", "10 questions per attempt, marked at the end"],
          ["Exam practice", "Written questions, self-marked against a mark scheme"]
        ],
        questions: [
          { q: "Which of these is a multiple choice question?", options: ["This one", "Not this", "Nor this", "Nor this either"], answer: 0, explanation: "Shown in the review at the end." },
          { q: "True or false: two-option questions are not shuffled.", options: ["True", "False"], answer: 0, explanation: "True and False stay in order." },
          { type: "multi", q: "Select all the even numbers.", options: ["2", "3", "4", "5"], answers: [0, 2], explanation: "2 and 4." },
          { type: "type", q: "Type the word 'revision'.", accept: ["revision"], explanation: "Capitals are ignored." },
          { type: "match", q: "Match each type to what it does.", pairs: [["Match", "Pair things up"], ["Order", "Put things in sequence"], ["Sort", "Put things into groups"]], explanation: "" },
          { type: "order", q: "Put these numbers in order, smallest first.", items: ["1", "2", "3", "4"], explanation: "" },
          { type: "sort", q: "Odd or even?", categories: ["Odd", "Even"], items: [["1", 0], ["2", 1], ["3", 0], ["4", 1]], explanation: "" }
        ],
        practice: [
          { id: "0.1-p1", q: "State two features of this site.", marks: 2, answer: "Any two from:\n- quizzes\n- flashcards\n- exam practice\n- certificates" }
        ]
      }
    ]
  });
})();
