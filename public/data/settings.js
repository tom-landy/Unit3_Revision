/*
 * Site settings. Content lives in the unit files next to this one,
 * one file per section of the spec. See README.md for the format.
 */
window.TLV_CONTENT = {
  settings: {
    siteName: "Unit 3 Revision",
    brandMark: "U3",                 // the coloured badge in the header
    brandText: "Revision",           // the words after the badge
    tagline: "Unit 3 revision, quizzes and exam practice",
    organisation: "",
    defaultPassMark: 80,
    certificateSignatory: "Teaching Team",
    // What each top-level group is called. Section titles must start with this,
    // e.g. groupLabel "Learning aim" + title "Learning aim A: ..." gives a jump button "LAA".
    groupLabel: "Element",
    groupShort: "E",
    // Max questions per quiz attempt, drawn at random from the topic's bank.
    questionsPerQuiz: 10,
    // Progress is saved under this key. Changing it wipes everyone's progress.
    storageKey: "unit3-revision-v1",
    certPrefix: "U3",
    // Anonymous usage counts with GoatCounter (no cookies, no names sent).
    // Sign up free at goatcounter.com and put your code here. Empty = off.
    goatcounter: ""
  },
  subjects: []
};
