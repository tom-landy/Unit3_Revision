/* Exam skills for the Unit 3 written exam. Based on the specification's assessment information and the structure of recent Pearson mark schemes. */
(function () {
  window.TLV_CONTENT.subjects.push({
    id: "exam",
    title: "Exam skills",
    label: "Exam skills",
    colour: "#57606a",
    topics: [
      {
        id: "X1",
        title: "X1 Exam technique and command words",
        summary: "Paper structure, command words, how each question type is marked, and how to write 6, 8 and 12-mark answers.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "The paper\n- 2 hours, 80 marks. About 1.5 minutes per mark.\n- Section A: personal finance (learning aims A and B), about a third of the marks.\n- Section B: business finance (learning aims C to F), about two thirds of the marks.\n- Recent papers follow a pattern: Questions 1 to 4 short answers (2 to 4 marks), Question 5 a 6-mark discuss, Question 6 a 12-mark evaluate on personal finance. Then Questions 7 to 9 short answers, and Questions 10 and 11 longer business scenarios with calculations, a 6 or 8-mark question and a 12-mark evaluate.\n- Formulas are NOT given. Learn every formula in learning aims E and F.\n\nCommand words\n- Identify / State / Give: a short answer, no explanation needed. 1 mark each.\n- Outline: a brief summary.\n- Describe: give an account or the features, linked in a logical order. No justification needed.\n- Explain: a point plus a reason or development. Use 'so', 'therefore', 'which means', 'because'.\n- Calculate: work out the answer. Show the formula in words, then the numbers, then the answer.\n- Analyse: break down the information, use the data, show chains of reasoning and how factors link.\n- Discuss: consider different aspects, both sides, and how important they are. A conclusion isn't required.\n- Assess: weigh up the factors and decide which matter most, with a conclusion.\n- Evaluate: weigh up strengths and weaknesses or options, using the information, and reach a supported judgement, usually in a conclusion.\n\nHow short questions are marked\n- 'Give two...' (2 marks): 1 mark each. Don't explain; just give two different points.\n- 'Explain one...' (2 marks): 1 mark for the point and 1 for a linked development. 'Quick', 'easy' or 'convenient' on their own get nothing.\n- 'Explain two...' (4 marks): two separate point + development pairs.\n\nCalculations\n- Write the formula in words first: it earns a mark even if your answer is wrong.\n- Then the numbers in the formula, then the answer with units (£, %, days, units, :1).\n- Use brackets or a minus sign for negative figures. A missing bracket loses the mark.\n- Own figure rule: if you get an early part wrong and use your answer later, you can still get the later marks.\n- Round a break-even point up. Give percentages to 2 decimal places unless told otherwise.\n\nLevels-marked questions (6, 8 and 12 marks)\n- Marked as a whole on the level that best fits, not by counting points.\n- To reach the top level you need: accurate knowledge, use of the scenario throughout, balance (both sides), technical terms, and for 12 marks a supported conclusion.\n- 6-mark discuss: advantages AND disadvantages, each applied to the person or business. Aim for 2 or 3 developed points each side.\n- 8-mark analyse: use the figures. Calculate changes (e.g. % change in revenue), explain what caused them and what they mean.\n- 12-mark evaluate: work through each option using the figures (calculate totals, monthly costs, differences), give points for and against, then a conclusion that makes a clear choice, explains why, and says what it depends on.\n\nA simple 12-mark structure\n1. Option 1: for, with figures and context. Against, with figures and context.\n2. Option 2: the same.\n3. Conclusion: 'Overall X is better because... However, this depends on...'\n\nCommon ways to lose marks\n- Generic answers that would fit any scenario.\n- One-sided discuss or evaluate answers.\n- No conclusion on an evaluate question.\n- Not showing working on calculations.\n- Mixing up gross profit margin and mark-up, or current ratio and liquid capital ratio."
          }
        ],
        cards: [
          ["Identify / State / Give", "Short answer. No explanation needed."],
          ["Explain", "Point plus development: 'so', 'therefore', 'which means'."],
          ["Analyse", "Break down the data and show chains of reasoning."],
          ["Discuss", "Both sides and how important they are. No conclusion needed."],
          ["Evaluate", "Weigh up options using the information and reach a supported judgement."],
          ["Assess", "Weigh up factors, decide which matter most, conclude."],
          ["Calculation method", "Formula in words, then numbers, then answer with units."],
          ["Paper length", "2 hours, 80 marks. Section A personal, Section B business."],
          ["Own figure rule", "Using your own earlier wrong answer correctly still earns later marks."],
          ["Time per mark", "About 1.5 minutes."]
        ],
        questions: [
          { type: "match", q: "Match each command word to what it asks you to do.", pairs: [["Identify", "Give a short answer with no explanation"], ["Explain", "Give a point and develop it with a reason"], ["Analyse", "Break down information and show how factors link"], ["Discuss", "Consider both sides and how important they are"], ["Evaluate", "Weigh up and reach a supported judgement"]], explanation: "" },
          { q: "Which command word requires a conclusion with a supported judgement?", options: ["Evaluate", "Identify", "Describe", "Discuss"], answer: 0, explanation: "The specification says a discuss answer doesn't need a conclusion; an evaluate answer usually does." },
          { q: "How long is the Unit 3 exam?", options: ["2 hours", "1 hour 30 minutes", "1 hour", "3 hours"], answer: 0, explanation: "2 hours for 80 marks." },
          { type: "type", q: "How many marks is the Unit 3 exam out of?", accept: ["80"], explanation: "80 marks." },
          { q: "Roughly what share of the marks is in Section A (personal finance)?", options: ["About one third", "About half", "About two thirds", "About a quarter"], answer: 0, explanation: "Section B, business finance, has about two thirds." },
          { q: "In a calculation question, what should you write first?", options: ["The formula in words", "The final answer only", "A conclusion", "An advantage"], answer: 0, explanation: "The formula in words often earns a mark on its own." },
          { q: "An 'Explain one advantage' question is worth 2 marks. What gets both marks?", options: ["An advantage plus a linked development", "Two different advantages", "One word such as 'convenient'", "An advantage and a disadvantage"], answer: 0, explanation: "1 mark for the point, 1 for developing it." },
          { q: "Which answer to 'Explain one advantage of electronic transfer' would get 2 marks?", options: ["It's available 24/7, so payments can be made at any time", "It's quick and easy", "It's convenient", "Electronic transfer"], answer: 0, explanation: "'Quick and easy' or 'convenient' alone get no marks in the mark scheme." },
          { type: "order", q: "Put the parts of a strong 12-mark evaluate answer in order.", items: ["Arguments for and against option 1, using the figures", "Arguments for and against option 2, using the figures", "A conclusion choosing one option and explaining why", "What the decision depends on"], explanation: "" },
          { q: "Are formulas given in the Unit 3 exam?", options: ["No, you must learn them", "Yes, on a formula sheet", "Only for break-even", "Only for ratios"], answer: 0, explanation: "The specification says formulas for learning aims E and F won't be given." },
          { q: "How are 6, 8 and 12-mark questions marked?", options: ["Holistically, using levels", "1 mark per point", "Only the conclusion is marked", "By word count"], answer: 0, explanation: "The examiner places the answer in the level it best fits." },
          { q: "A student writes a 12-mark answer listing advantages of one option only. What is the main problem?", options: ["It isn't balanced, so it can't reach the top levels", "It's too long", "It uses technical terms", "It mentions the scenario"], answer: 0, explanation: "Higher levels need balance and a supported conclusion." },
          { type: "match", q: "Match each formula to the ratio or figure it calculates.", pairs: [["FC ÷ (SP − VC)", "Break-even point"], ["Opening balance + net cash flow", "Closing balance"], ["(GP ÷ revenue) × 100", "Gross profit margin"], ["(CA − inventory) ÷ CL", "Liquid capital ratio"], ["(Trade receivables ÷ credit sales) × 365", "Trade receivable days"]], explanation: "" }
        ],
        practice: [
          { id: "X1-p1", q: "Write down the formula, in words, for each of these: break-even point, margin of safety, closing balance, gross profit margin, mark-up, profit margin, ROCE, current ratio, liquid capital ratio, trade receivable days, trade payable days, inventory turnover.", marks: 12, suggested: true, answer: "1 mark each:\n- Break-even point = fixed costs ÷ (selling price − variable cost per unit)\n- Margin of safety = actual or forecast sales − break-even point\n- Closing balance = opening balance + net cash flow (net cash flow = inflows − outflows)\n- Gross profit margin = (gross profit ÷ revenue) × 100\n- Mark-up = (gross profit ÷ cost of sales) × 100\n- Profit margin = (profit for the year ÷ revenue) × 100\n- ROCE = (profit for the year ÷ capital employed) × 100\n- Current ratio = current assets ÷ current liabilities\n- Liquid capital ratio = (current assets − inventory) ÷ current liabilities\n- Trade receivable days = (trade receivables ÷ credit sales) × 365\n- Trade payable days = (trade payables ÷ credit purchases) × 365\n- Inventory turnover = (average inventory ÷ cost of sales) × 365" },
          { id: "X1-p2", q: "Rewrite this answer so it would get 2 marks: 'Question: Explain one advantage of a debit card. Answer: It's convenient.'", marks: 2, suggested: true, answer: "Needs a specific advantage plus a linked development, e.g.:\n- Money comes straight from your current account (1), so you don't build up interest-bearing debt as with a credit card (1).\n- It can be used online and in most shops (1), so you don't need to carry cash (1)." }
        ]
      }
    ]
  });
})();
