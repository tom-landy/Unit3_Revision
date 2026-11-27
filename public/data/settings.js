/*
 * Site settings. Content lives in the unit files next to this one,
 * one file per section of the spec. See README.md for the format.
 */
window.TLV_CONTENT = {
  settings: {
    siteName: "Unit 3 Revision",
    brandMark: "U3",                 // the coloured badge in the header
    brandText: "Revision",           // the words after the badge
    tagline: "BTEC Level 3 Business, Unit 3: Personal and Business Finance",
    organisation: "",
    defaultPassMark: 80,
    certificateSignatory: "Teaching Team",
    // What each top-level group is called: used on "Section test" and "Section certificate".
    groupLabel: "Section",
    groupShort: "",
    // Max questions per quiz attempt, drawn at random from the topic's bank.
    questionsPerQuiz: 10,
    // Progress is saved under this key. Changing it wipes everyone's progress.
    storageKey: "unit3-revision-v1",
    certPrefix: "U3",
    // Shown on exam practice questions marked suggested: true.
    suggestedNote: "Suggested answer, written for this site. Not from a Pearson mark scheme.",
    // Anonymous usage counts with GoatCounter (no cookies, no names sent).
    // Sign up free at goatcounter.com and put your code here. Empty = off.
    goatcounter: ""
  },
  // The two sections of the exam paper. Learning aim files add their topics with U3_AIM.
  subjects: [
    { id: "personal", title: "Section A: Personal finance", colour: "#0f766e", topics: [] },
    { id: "business", title: "Section B: Business finance", colour: "#166534", topics: [] }
  ]
};

// U3_AIM(sectionId, learningAimTitle, topics): adds topics to a section under a learning aim heading.
window.U3_AIM = function (sectionId, aim, topics) {
  var s = window.TLV_CONTENT.subjects.filter(function (x) { return x.id === sectionId; })[0];
  if (!s) throw new Error("Unknown section: " + sectionId);
  topics.forEach(function (t) { t.aim = aim; s.topics.push(t); });
};
