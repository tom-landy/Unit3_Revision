/* Learning aim F: Statements of comprehensive income and financial position, and ratio analysis (sole traders only). Written from the Unit 3 specification and Pearson mark schemes. Formulas are not given in the exam. */
(function () {
  var SOCI_OWN = [
    ["Sam's Sports, year ended 31 December", "£"],
    ["Revenue", "60,000"],
    ["Opening inventory", "4,000"],
    ["Purchases", "25,000"],
    ["Closing inventory", "5,000"],
    ["Commission received", "800"],
    ["Rent paid (includes £1,000 prepaid for next year)", "9,000"],
    ["Electricity paid (£300 still owing at year end)", "2,400"],
    ["Wages", "14,000"],
    ["Equipment at cost (depreciate 10% straight-line)", "15,000"]
  ];

  var FARIDA_SOCI = [
    ["Farida's business", "2022 £", "2023 £"],
    ["Sales revenue", "38,267", "(iv)"],
    ["Opening inventory", "2,853", "3,791"],
    ["Purchases", "18,523", "47,913"],
    ["Closing inventory", "(i)", "8,326"],
    ["Cost of goods sold", "17,585", "43,378"],
    ["Gross profit", "(ii)", "12,547"],
    ["Wages", "9,737", "20,631"],
    ["Depreciation of delivery van", "(iii)", "1,565"],
    ["Telephone", "2,700", "6,398"],
    ["Utilities", "4,902", "10,263"],
    ["Total expenses", "18,904", "38,857"],
    ["Profit/loss for the year", "1,778", "(v)"]
  ];

  var SOFP_OWN = [
    ["Sam's Sports at 31 December", "Cost £", "Acc. dep. £", "NBV £"],
    ["Equipment", "20,000", "6,000", "?"],
    ["Van", "12,000", "4,800", "?"],
    ["Inventory", "", "", "3,500"],
    ["Trade receivables", "", "", "2,800"],
    ["Prepayments", "", "", "400"],
    ["Bank", "", "", "1,900"],
    ["Trade payables", "", "", "3,100"],
    ["Accruals", "", "", "500"],
    ["Bank loan (repayable in 5 years)", "", "", "8,000"],
    ["Opening capital", "", "", "15,000"],
    ["Profit for the year", "", "", "9,200"],
    ["Drawings", "", "", "6,000"]
  ];

  var GABRIELLA_SOFP = [
    ["Gabriella's Garden Services at 31 Dec 2025", "Cost £", "Acc. dep. £", "NBV £"],
    ["Vehicles", "54,000", "5,400", "(i)"],
    ["Machinery", "10,500", "1,050", "9,450"],
    ["Inventory", "", "", "900"],
    ["Trade receivables", "", "", "10,500"],
    ["Prepayments", "", "", "4,600"],
    ["Cash", "", "", "(ii)"],
    ["Total current assets", "", "", "16,700"],
    ["Trade payables", "", "", "1,200"],
    ["Short-term loan", "", "", "2,000"],
    ["Overdraft", "", "", "4,700"],
    ["Total current liabilities", "", "", "7,900"],
    ["Net current assets", "", "", "(iii)"],
    ["Long-term borrowing", "", "", "(iv)"],
    ["Net assets", "", "", "18,300"],
    ["Capital", "", "", "14,800"],
    ["Retained profit", "", "", "(v)"],
    ["Capital employed", "", "", "18,300"]
  ];

  window.TLV_CONTENT.subjects.push({
    id: "aim-f",
    title: "Learning aim F: Final accounts and ratio analysis",
    colour: "#9a6700",
    topics: [
      {
        id: "F1",
        title: "F1 Statement of comprehensive income",
        summary: "Purpose, cost of goods sold, gross profit, other income, expenses, profit for the year, depreciation, accruals and prepayments.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Unit 3 only covers sole traders.\n\nPurpose: the statement of comprehensive income (SOCI) shows whether a business made a profit or loss over a period, usually a year. It's used by the owner (to judge performance and decide drawings), HMRC (tax on profit), lenders and potential buyers.\n\nLayout\nRevenue (sales)\nLess cost of goods sold (cost of sales):\n  Opening inventory\n  + Purchases\n  − Closing inventory\n= Gross profit\n+ Other income (rent received, commission received, interest received, discount received)\n− Expenses (wages, rent, rates, utilities, insurance, telephone, marketing, depreciation, interest paid, discount allowed, etc.)\n= Profit (or loss) for the year\n\nFormulas (learn these)\n- Cost of goods sold = opening inventory + purchases − closing inventory\n- Gross profit = revenue − cost of goods sold\n- Profit for the year = gross profit + other income − expenses\n\nAdjustments\n- Depreciation: the year's charge (straight-line: cost × %; reducing balance: (cost − depreciation to date) × %) is added as an expense.\n- Accrual: an expense used this year but not yet paid (e.g. an electricity bill still owing). ADD it to the expense. It's also a current liability in the SOFP.\n- Prepayment: an expense paid this year that belongs to next year (e.g. rent paid in advance). SUBTRACT it from the expense. It's also a current asset in the SOFP.\n\nWorked example (Sam's Sports)\n- Cost of goods sold: £4,000 + £25,000 − £5,000 = £24,000\n- Gross profit: £60,000 − £24,000 = £36,000\n- Rent: £9,000 − £1,000 prepaid = £8,000\n- Electricity: £2,400 + £300 accrued = £2,700\n- Depreciation: £15,000 × 10% = £1,500\n- Expenses: £8,000 + £2,700 + £14,000 + £1,500 = £26,200\n- Profit: £36,000 + £800 commission − £26,200 = £10,600\n\nInterpreting: compare with previous years and competitors. Did revenue rise? Did cost of sales rise faster than revenue (squeezing gross profit)? Which expenses grew? Use ratios (F3) to support the analysis.\n\nLosses are shown in brackets, e.g. (26,310)."
          }
        ],
        cards: [
          ["Cost of goods sold", "Opening inventory + purchases − closing inventory."],
          ["Gross profit", "Revenue − cost of goods sold."],
          ["Profit for the year", "Gross profit + other income − expenses."],
          ["Accrual", "Expense owed but not paid. Add to the expense; current liability."],
          ["Prepayment", "Expense paid in advance. Subtract from the expense; current asset."],
          ["Other income", "Rent, commission, interest and discount received."],
          ["Purpose of the SOCI", "Shows profit or loss over a period."]
        ],
        questions: [
          { type: "order", q: "Put the lines of a statement of comprehensive income in order.", items: ["Revenue", "Cost of goods sold", "Gross profit", "Other income", "Expenses", "Profit for the year"], explanation: "" },
          { type: "type", q: "Using Sam's Sports' figures, what is the cost of goods sold, in £?", table: SOCI_OWN, accept: ["24000"], explanation: "£4,000 + £25,000 − £5,000 = £24,000." },
          { type: "type", q: "Using Sam's Sports' figures, what is the gross profit, in £?", table: SOCI_OWN, accept: ["36000"], explanation: "£60,000 − £24,000 = £36,000." },
          { type: "type", q: "Sam's Sports paid £9,000 rent, including £1,000 prepaid for next year. What rent expense goes in this year's SOCI, in £?", table: SOCI_OWN, accept: ["8000"], explanation: "A prepayment is subtracted: £9,000 − £1,000 = £8,000." },
          { type: "type", q: "Sam's Sports paid £2,400 for electricity and still owes £300. What electricity expense goes in the SOCI, in £?", table: SOCI_OWN, accept: ["2700"], explanation: "An accrual is added: £2,400 + £300 = £2,700." },
          { type: "type", q: "Using all of Sam's Sports' figures and adjustments, what is the profit for the year, in £?", table: SOCI_OWN, accept: ["10600"], explanation: "Expenses: £8,000 + £2,700 + £14,000 + £1,500 depreciation = £26,200. Profit = £36,000 + £800 − £26,200 = £10,600." },
          { q: "How is an accrued expense treated in the SOCI?", options: ["Added to the expense", "Subtracted from the expense", "Added to revenue", "Ignored"], answer: 0, explanation: "It was used this year, so it's a cost of this year even though it's unpaid." },
          { q: "Where does discount received go in the SOCI?", options: ["Added as other income after gross profit", "In cost of goods sold", "As an expense", "In the SOFP only"], answer: 0, explanation: "It's revenue income." },
          { q: "What is the main purpose of a statement of comprehensive income?", options: ["To show the profit or loss over a period", "To show what the business owns at a date", "To forecast cash", "To list the owner's personal spending"], answer: 0, explanation: "The SOFP shows assets and liabilities at a date." },
          { type: "multi", q: "Select all the items that are expenses in a SOCI.", options: ["Depreciation", "Wages", "Discount allowed", "Commission received", "Purchases of a new van"], answers: [0, 1, 2], explanation: "Commission received is income; a van is capital expenditure." },
          { type: "type", q: "Farida's gross profit in 2022 is £20,682 and total expenses are £18,904. If sales revenue had been £3,000 higher, what would the profit for the year have been, in £?", accept: ["4778"], explanation: "New gross profit £23,682. Profit = £23,682 − £18,904 = £4,778." }
        ],
        practice: [
          { id: "F1-p1", q: "Complete Farida's statement of comprehensive income by calculating (i) to (v). (Past paper, January 2024. Figures from the mark scheme.)", table: FARIDA_SOCI, marks: 5, answer: "1 mark each:\n(i) Closing inventory 2022: £3,791 (it is the opening inventory for 2023)\n(ii) Gross profit 2022: £20,682\n(iii) Depreciation 2022: £1,565\n(iv) Sales revenue 2023: £55,925\n(v) Loss for 2023: (£26,310) — must show it is negative" },
          { id: "F1-p2", q: "Farida's sales revenue in 2022 was £3,000 higher than shown. Calculate her new profit for the year in 2022. (Past paper, January 2024)", table: FARIDA_SOCI, marks: 2, answer: "2 marks for £4,778.\n\nOtherwise 1 mark for any of:\n- Formula in words: profit = gross profit − expenses\n- £23,682 − £18,904\n- New sales revenue £41,267\n- New gross profit £23,682" },
          { id: "F1-p3", q: "A business has sales revenue of £91,250, opening inventory of £1,700, purchases of £36,100 and closing inventory of £1,300. Calculate (i) cost of goods sold and (ii) gross profit. (Past paper, January 2025. Figures from the mark scheme.)", marks: 2, answer: "1 mark each:\n(i) Cost of goods sold: £36,500\n(ii) Gross profit: £54,750 (own figure carried forward)" },
          { id: "F1-p4", q: "Explain how a prepayment is treated in the final accounts.", marks: 2, suggested: true, answer: "It is subtracted from the expense in the statement of comprehensive income because it belongs to next year (1), and shown as a current asset in the statement of financial position (1)." },
          { id: "F1-p5", q: "Using Farida's figures, analyse how her financial performance changed from 2022 to 2023 and how she could improve her profit. (Past paper, January 2024. Wording summarised from the mark scheme.)", table: FARIDA_SOCI, marks: 8, answer: "Possible figures:\n- Sales revenue up £17,658 (46%)\n- Cost of goods sold up £25,793 (146%)\n- Gross profit down £8,135 (40%)\n- Expenses up £19,953 (105%)\n- Profit fell by £28,088, from £1,778 to a loss of (£26,310)\n- Gross profit margin fell from 54% to 22.4%\n\nWays to improve:\n- Increase sales revenue or mark-up; increase or reduce selling price\n- Reduce cost of sales: spend less on purchases, hold less inventory, buy cheaper materials, bulk buy\n- Reduce expenses: sell the delivery van, reduce wages, telephone or utility bills\n\nLevels: 7 to 8 thorough application with balanced analysis linking the figures; 4 to 6 some linkages; 1 to 3 isolated knowledge, basic description." }
        ]
      },
      {
        id: "F2",
        title: "F2 Statement of financial position",
        summary: "Purpose, vertical layout, non-current and current assets, liabilities, net assets, capital and drawings, and adjustments.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Purpose: the statement of financial position (SOFP) is a snapshot of what a business owns (assets) and owes (liabilities) on one date, and how it's financed. It shows the net worth of the business. Used by the owner, lenders and potential buyers.\n\nVertical layout\nNon-current assets (cost − accumulated depreciation = net book value)\n  Tangible: land, buildings, machinery, vehicles, fixtures and fittings\n  Intangible: goodwill, patents, trademarks (amortisation instead of depreciation)\nCurrent assets: inventories, trade receivables, prepayments, bank, cash\nCurrent liabilities (due within a year): bank overdraft, accruals, trade payables\nNet current assets (or liabilities) = current assets − current liabilities\nNon-current liabilities (due after a year): bank loan, mortgage\nNet assets = non-current assets + net current assets − non-current liabilities\n\nFinanced by (total equity)\nOpening capital\n+ Profit for the year (or − loss)\n− Drawings (money or goods the owner takes out for personal use)\n= Closing capital\n\nNet assets must equal closing capital. If they don't, something is wrong.\n\nAdjustments\n- Depreciation: add the year's charge to accumulated depreciation, so net book value falls. Straight-line: cost × %. Reducing balance: (cost − depreciation to date) × %.\n- Prepayment: a current asset.\n- Accrual: a current liability.\n\nWorked example (Sam's Sports)\n- NBV: equipment £20,000 − £6,000 = £14,000; van £12,000 − £4,800 = £7,200. Total £21,200.\n- Current assets: £3,500 + £2,800 + £400 + £1,900 = £8,600.\n- Current liabilities: £3,100 + £500 = £3,600.\n- Net current assets: £8,600 − £3,600 = £5,000.\n- Net assets: £21,200 + £5,000 − £8,000 loan = £18,200.\n- Closing capital: £15,000 + £9,200 − £6,000 = £18,200. It balances.\n\nCapital employed = total assets − current liabilities, or non-current liabilities + total equity. For Sam's Sports: £8,000 + £18,200 = £26,200.\n\nInterpreting: is the business able to pay its short-term debts (net current assets positive)? How much is borrowed long-term? Is the owner taking out more in drawings than the business earns? Limitations: historic; assets at book value, not market value; doesn't value reputation or staff."
          }
        ],
        cards: [
          ["Net current assets", "Current assets − current liabilities."],
          ["Net assets", "Non-current assets + net current assets − non-current liabilities."],
          ["Closing capital", "Opening capital + profit − drawings."],
          ["Drawings", "Money or goods the owner takes out for personal use."],
          ["Current liabilities", "Due within a year: overdraft, accruals, trade payables."],
          ["Non-current liabilities", "Due after a year: bank loan, mortgage."],
          ["Capital employed", "Total assets − current liabilities, or non-current liabilities + total equity."],
          ["Purpose of the SOFP", "A snapshot of assets, liabilities and capital at one date."]
        ],
        questions: [
          { type: "sort", q: "Sort each item into the right section of the SOFP.", categories: ["Non-current asset", "Current asset", "Current liability", "Non-current liability"], items: [["Machinery", 0], ["Goodwill", 0], ["Inventory", 1], ["Prepayments", 1], ["Trade payables", 2], ["Accruals", 2], ["Bank overdraft", 2], ["Mortgage", 3]], explanation: "" },
          { type: "type", q: "Using Sam's Sports' figures, what is the total net book value of non-current assets, in £?", table: SOFP_OWN, accept: ["21200"], explanation: "(£20,000 − £6,000) + (£12,000 − £4,800) = £14,000 + £7,200 = £21,200." },
          { type: "type", q: "Using Sam's Sports' figures, what are net current assets, in £?", table: SOFP_OWN, accept: ["5000"], explanation: "Current assets £8,600 − current liabilities £3,600 = £5,000." },
          { type: "type", q: "Using Sam's Sports' figures, what are net assets, in £?", table: SOFP_OWN, accept: ["18200"], explanation: "£21,200 + £5,000 − £8,000 = £18,200." },
          { type: "type", q: "Using Sam's Sports' figures, what is closing capital, in £?", table: SOFP_OWN, accept: ["18200"], explanation: "£15,000 + £9,200 − £6,000 = £18,200. It matches net assets." },
          { q: "What are drawings?", options: ["Money or goods the owner takes out for personal use", "Depreciation on vehicles", "A type of loan", "Money owed by customers"], answer: 0, explanation: "Drawings reduce the owner's capital." },
          { q: "Where is an accrual shown in the SOFP?", options: ["Current liabilities", "Current assets", "Non-current assets", "Capital"], answer: 0, explanation: "It's an amount owed." },
          { q: "Which list is in the correct order of liquidity used in the specification (least liquid first)?", options: ["Inventories, trade receivables, prepayments, bank, cash", "Cash, bank, inventories, trade receivables", "Bank, cash, prepayments, inventory", "Trade receivables, cash, inventory"], answer: 0, explanation: "Current assets run from inventories (hardest to turn into cash) to cash." },
          { q: "What is the main purpose of a statement of financial position?", options: ["To show assets, liabilities and capital at a point in time", "To show profit over a year", "To predict cash flow", "To calculate break-even"], answer: 0, explanation: "It's a snapshot on a specific date." },
          { type: "match", q: "Match each formula to what it calculates.", pairs: [["Current assets − current liabilities", "Net current assets"], ["Opening capital + profit − drawings", "Closing capital"], ["Cost − accumulated depreciation", "Net book value"], ["Non-current liabilities + total equity", "Capital employed"]], explanation: "" }
        ],
        practice: [
          { id: "F2-p1", q: "Complete the statement of financial position for Gabriella's Garden Services by calculating (i) to (v). (Past paper, January 2026. Figures from the mark scheme.)", table: GABRIELLA_SOFP, marks: 5, answer: "1 mark each:\n(i) Vehicles NBV: £48,600\n(ii) Cash: £700\n(iii) Net current assets: £8,800\n(iv) Long-term borrowing: £48,550\n(v) Retained profit: £3,500\n\nCheck: non-current assets £48,600 + £9,450 = £58,050. £58,050 + £8,800 − £48,550 = £18,300 net assets. £14,800 + £3,500 = £18,300." },
          { id: "F2-p2", q: "Explain one purpose of a statement of financial position.", marks: 2, suggested: true, answer: "It shows what the business owns and owes at a particular date (1), so the owner or a lender can see its net worth and whether it can pay its debts (1)." },
          { id: "F2-p3", q: "Explain how drawings affect a sole trader's capital.", marks: 2, suggested: true, answer: "Drawings are money or goods the owner takes out for personal use (1), so they are subtracted from opening capital plus profit, reducing closing capital (1)." },
          { id: "F2-p4", q: "Gabriella has run her business for one year and has £92,000 of credit sales. She plans to expand. Analyse how a statement of financial position may be used by Gabriella to help plan the expansion of her business. (Past paper, January 2026. Scenario summarised from the mark scheme.)", table: GABRIELLA_SOFP, marks: 8, answer: "Context:\n- Inventory may be misvalued as plants are perishable and affected by the weather.\n- The £92,000 credit sales may not all be paid.\n- The business is new, so there's no prior SOFP to compare with.\n- External factors such as the weather will affect future performance.\n\nHow it helps:\n- Figures can be used to calculate liquidity and efficiency ratios, identifying what needs to change.\n- She can see the overdraft and trade receivables and consider their impact.\n- Shows the net worth of the business, useful to get finance or sell.\n- Balances what the business owns against what it owes.\n- Useful for comparing with future years or industry averages.\n\nHow it may not help:\n- Historic data that may not reflect current market value.\n- Doesn't include intangibles such as reputation, so may undervalue the business.\n- Distorted by external factors such as inflation.\n- Hard to compare with businesses using different accounting methods.\n- Ignores non-financial factors.\n\nLevels: 7 to 8 thorough application with balanced analysis; 4 to 6 some linkages; 1 to 3 basic description." }
        ]
      },
      {
        id: "F3",
        title: "F3 Measuring profitability",
        summary: "Gross profit margin, mark-up, profit margin and return on capital employed: calculating, interpreting and improving them.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Formulas (not given in the exam)\n- Gross profit margin = (gross profit ÷ revenue) × 100\n- Mark-up = (gross profit ÷ cost of sales) × 100\n- Profit margin = (profit for the year ÷ revenue) × 100\n- Return on capital employed (ROCE) = (profit for the year ÷ capital employed) × 100\n  - Profit for the year = revenue − cost of sales − expenses\n  - Capital employed = total assets − current liabilities, or non-current liabilities + total equity\n\nExam method: write the formula in words (1 mark), then the numbers (2 marks), then the answer (full marks). Give percentages to 2 decimal places unless told otherwise.\n\nWorked example: revenue £80,000, cost of sales £50,000, expenses £18,000, capital employed £60,000.\n- Gross profit £30,000. GPM = 30,000 ÷ 80,000 × 100 = 37.5%\n- Mark-up = 30,000 ÷ 50,000 × 100 = 60%\n- Profit £12,000. Profit margin = 12,000 ÷ 80,000 × 100 = 15%\n- ROCE = 12,000 ÷ 60,000 × 100 = 20%\n\nInterpreting\n- Gross profit margin: how much of each £1 of sales is left after the cost of the goods. Higher is better. A fall means cost of sales has risen faster than revenue, or prices were cut.\n- Mark-up: how much is added to the cost of goods. It is always higher than the gross profit margin for the same figures.\n- Profit margin: how much of each £1 of sales is profit after all expenses. A big gap between GPM and profit margin means high expenses.\n- ROCE: how well the capital invested is used to make profit. Compare it with what the owner could earn in a savings account: if ROCE is lower, the owner might be better off saving.\n\nImproving profitability\n- Raise selling prices (customers may buy less).\n- Cut cost of sales: cheaper suppliers, bulk buying, less waste (quality may suffer).\n- Cut expenses: cheaper premises, fewer staff hours, lower energy use.\n- Increase sales volume through marketing (costs money first).\n\nAlways compare ratios with previous years, targets, competitors or industry averages. A ratio on its own means little."
          }
        ],
        cards: [
          ["Gross profit margin", "(Gross profit ÷ revenue) × 100"],
          ["Mark-up", "(Gross profit ÷ cost of sales) × 100"],
          ["Profit margin", "(Profit for the year ÷ revenue) × 100"],
          ["ROCE", "(Profit for the year ÷ capital employed) × 100"],
          ["Capital employed", "Total assets − current liabilities (or non-current liabilities + total equity)"],
          ["Gap between GPM and profit margin", "Shows how much expenses take from gross profit."],
          ["Low ROCE", "Compare with savings rates: the owner might earn more elsewhere."]
        ],
        questions: [
          { type: "match", q: "Match each ratio to its formula.", pairs: [["Gross profit margin", "(Gross profit ÷ revenue) × 100"], ["Mark-up", "(Gross profit ÷ cost of sales) × 100"], ["Profit margin", "(Profit for the year ÷ revenue) × 100"], ["ROCE", "(Profit for the year ÷ capital employed) × 100"]], explanation: "" },
          { type: "type", q: "Revenue is £80,000 and cost of sales is £50,000. What is the gross profit margin, in %?", accept: ["37.5", "37.50"], explanation: "Gross profit £30,000. (30,000 ÷ 80,000) × 100 = 37.5%." },
          { type: "type", q: "Gross profit is £30,000 and cost of sales is £50,000. What is the mark-up, in %?", accept: ["60"], explanation: "(30,000 ÷ 50,000) × 100 = 60%." },
          { type: "type", q: "Revenue is £80,000 and profit for the year is £12,000. What is the profit margin, in %?", accept: ["15"], explanation: "(12,000 ÷ 80,000) × 100 = 15%." },
          { type: "type", q: "Profit for the year is £12,000 and capital employed is £60,000. What is the ROCE, in %?", accept: ["20"], explanation: "(12,000 ÷ 60,000) × 100 = 20%." },
          { type: "type", q: "Candy's revenue is £175,000 and her gross profit is £112,000. What is her gross profit margin, in %?", accept: ["64"], explanation: "(112,000 ÷ 175,000) × 100 = 64%." },
          { type: "type", q: "Candy's revenue is £175,000 and her profit for the year is £67,000. What is her profit margin, in %? (to 2 decimal places)", accept: ["38.29", "38.3", "38"], explanation: "(67,000 ÷ 175,000) × 100 = 38.29%." },
          { q: "A business's gross profit margin is 60% but its profit margin is only 5%. What does this suggest?", options: ["Expenses are very high", "Cost of sales is very high", "Revenue is too high", "It has no expenses"], answer: 0, explanation: "Most of the gross profit is being used up by expenses." },
          { q: "Which action would most directly improve the gross profit margin?", options: ["Finding a cheaper supplier for the same goods", "Cutting advertising spending", "Reducing the owner's drawings", "Paying off a loan"], answer: 0, explanation: "Cost of sales falls, so gross profit rises for the same revenue." },
          { q: "An owner's ROCE is 3% and a savings account pays 4.5%. What might this suggest?", options: ["The capital might earn more in a savings account", "The business is very efficient", "The business has no capital", "ROCE should be higher than 100%"], answer: 0, explanation: "ROCE is often compared with the return from a risk-free alternative." },
          { q: "For the same figures, which is always higher?", options: ["Mark-up", "Gross profit margin", "They are always equal", "It depends on expenses"], answer: 0, explanation: "Cost of sales is smaller than revenue, so dividing gross profit by it gives a bigger percentage." },
          { type: "type", q: "Total assets are £75,000 and current liabilities are £15,000. What is capital employed, in £?", accept: ["60000"], explanation: "£75,000 − £15,000 = £60,000." }
        ],
        practice: [
          { id: "F3-p1", q: "Identify two figures which must be known to calculate the return on capital employed (ROCE). (Past paper, January 2026)", marks: 2, answer: "1 mark each, up to 2: profit for the year; capital employed; revenue; cost of sales; expenses; total assets; current liabilities; non-current liabilities; total equity." },
          { id: "F3-p2", q: "Candy's revenue is £175,000 and her cost of sales is £63,000. Calculate the gross profit margin. (Past paper, June 2024. Figures from the mark scheme.)", marks: 3, answer: "3 marks for 64%.\n\nOtherwise:\n- 2 marks for the formula in numbers: 112,000 ÷ 175,000 × 100\n- 1 mark for the formula in words: gross profit margin = gross profit ÷ revenue × 100\n- OR 1 mark for gross profit of £112,000" },
          { id: "F3-p3", q: "Candy's revenue in 2023 is £175,000, gross profit is £112,000 and expenses are £45,000. Calculate Candy's profit margin in 2023. (Past paper, June 2024. Figures from the mark scheme.)", marks: 3, answer: "3 marks for 38.29% (accept 38, 38.2 or 38.3).\n\nOtherwise:\n- 2 marks for the formula in numbers: 67,000 ÷ 175,000 × 100\n- 1 mark for the formula in words: profit margin = profit ÷ revenue × 100\n- OR 1 mark for profit of £67,000" },
          { id: "F3-p4", q: "Farida's 2023 gross profit is £12,547 and cost of goods sold is £43,378. Calculate her mark-up. (Past paper, January 2024)", marks: 3, answer: "3 marks for 28.9% (accept more decimal places, e.g. 28.92%).\n\nOtherwise:\n- 2 marks for the formula in numbers: (£12,547 ÷ £43,378) × 100\n- 1 mark for the formula in words: mark-up = (gross profit ÷ cost of sales) × 100" },
          { id: "F3-p5", q: "A business has gross profit of £54,750 and sales revenue of £91,250. Calculate the gross profit margin. (Past paper, January 2025)", marks: 2, answer: "2 marks for 60%.\n\nOtherwise 1 mark for the formula in words (gross profit ÷ revenue × 100) or in numbers (£54,750 ÷ £91,250 × 100)." },
          { id: "F3-p6", q: "A sole trader runs one mobile milkshake van. In 2024 revenue was £91,250 and profit was £13,000. He wants to buy two more vans at £7,500 each, to be placed near local sports and concert venues. Analyse whether he should buy the two vans. (Past paper, January 2025. Scenario summarised from the mark scheme.)", marks: 8, answer: "For buying:\n- If the new vans perform like the first, revenue could rise by £182,500.\n- Sports and concert venues may bring higher revenue, depending on how popular the events are.\n- Profit could rise by about £26,000 if both vans are as successful.\n- Bulk buying could lower cost per unit, lowering the break-even point and raising profit per unit.\n\nAgainst:\n- The vans cost £15,000; he only made £13,000 profit, so he'd use all of it and borrow £2,000, adding debt and interest.\n- Extra expenses: wages, road tax, insurance for two more vehicles.\n- Depreciation would be three times as high.\n- Profit may fall in the short term until the vans get regular customers.\n- May need a loan, HP or leasing, all of which cost money and reduce profit.\n\nLevels: 7 to 8 thorough application with balanced analysis using the figures; 4 to 6 some linkages; 1 to 3 basic description." }
        ]
      },
      {
        id: "F4",
        title: "F4 Measuring liquidity",
        summary: "Current ratio and liquid capital ratio: calculating, interpreting and improving a business's ability to pay short-term debts.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Liquidity: the ability of a business to pay its short-term debts (current liabilities) when they are due.\n\nFormulas (not given in the exam)\n- Current ratio = current assets ÷ current liabilities\n- Liquid capital ratio = (current assets − inventory) ÷ current liabilities\nBoth are written as a ratio to 1, e.g. 1.5:1.\n\nWhy take inventory out? Inventory is the hardest current asset to turn into cash quickly, so the liquid capital ratio (also called the acid test) is a stricter test.\n\nWorked example: current assets £18,000 (including inventory £7,200), current liabilities £12,000.\n- Current ratio = 18,000 ÷ 12,000 = 1.5:1\n- Liquid capital ratio = (18,000 − 7,200) ÷ 12,000 = 10,800 ÷ 12,000 = 0.9:1\n\nInterpreting\n- Current ratio: around 1.5:1 to 2:1 is often seen as comfortable. Below 1:1 the business may struggle to pay its bills. Very high may mean too much cash or inventory sitting idle.\n- Liquid capital ratio: around 1:1 is often seen as comfortable. Below 1:1 means the business relies on selling inventory to pay its debts.\n- What's 'right' depends on the industry: a supermarket sells inventory fast and can run with low ratios.\n\nImproving liquidity\n- Bring in more cash: owner introduces capital, sell unused assets, sale and leaseback.\n- Collect money from customers faster (lower trade receivables, more cash).\n- Replace short-term borrowing (overdraft) with a long-term loan.\n- Reduce inventory levels (improves the liquid capital ratio if sold for cash).\n- Cut drawings."
          }
        ],
        cards: [
          ["Liquidity", "Ability to pay short-term debts when due."],
          ["Current ratio", "Current assets ÷ current liabilities"],
          ["Liquid capital ratio", "(Current assets − inventory) ÷ current liabilities"],
          ["Why remove inventory?", "It's the hardest current asset to turn into cash quickly."],
          ["Comfortable current ratio", "Around 1.5:1 to 2:1."],
          ["Comfortable liquid capital ratio", "Around 1:1."]
        ],
        questions: [
          { type: "type", q: "Current assets are £18,000 and current liabilities are £12,000. What is the current ratio? (Give the number before :1)", accept: ["1.5"], explanation: "18,000 ÷ 12,000 = 1.5:1." },
          { type: "type", q: "Current assets are £18,000, including inventory of £7,200. Current liabilities are £12,000. What is the liquid capital ratio? (Give the number before :1)", accept: ["0.9"], explanation: "(18,000 − 7,200) ÷ 12,000 = 0.9:1." },
          { type: "type", q: "Candy's current assets are £12,000 and current liabilities are £10,000. What is her current ratio? (Give the number before :1)", accept: ["1.2"], explanation: "12,000 ÷ 10,000 = 1.2:1." },
          { type: "type", q: "Gabriella's current assets are £16,700, including inventory of £900. Current liabilities are £7,900. What is her liquid capital ratio? (Give the number before :1)", accept: ["2"], explanation: "(16,700 − 900) ÷ 7,900 = 15,800 ÷ 7,900 = 2:1." },
          { q: "Why is inventory left out of the liquid capital ratio?", options: ["It's the hardest current asset to turn into cash quickly", "It isn't an asset", "It's a liability", "It's already counted twice"], answer: 0, explanation: "The liquid capital ratio tests whether debts can be paid without selling inventory." },
          { q: "A business has a current ratio of 0.7:1. What does this suggest?", options: ["It may struggle to pay its short-term debts", "It is very profitable", "It has too much cash", "It has no liabilities"], answer: 0, explanation: "Current liabilities are bigger than current assets." },
          { q: "Which action would improve a business's current ratio?", options: ["Replacing an overdraft with a five-year loan", "Taking more drawings", "Buying a new machine with cash", "Increasing the overdraft"], answer: 0, explanation: "The overdraft (a current liability) becomes a non-current liability, so current liabilities fall." },
          { q: "A very high current ratio, e.g. 5:1, might suggest:", options: ["Too much cash or inventory is sitting idle", "The business can't pay its debts", "The business is making a loss", "Trade payables are too high"], answer: 0, explanation: "Money tied up in idle assets could be used better." },
          { type: "match", q: "Match each liquidity ratio to its formula.", pairs: [["Current ratio", "Current assets ÷ current liabilities"], ["Liquid capital ratio", "(Current assets − inventory) ÷ current liabilities"]], explanation: "" }
        ],
        practice: [
          { id: "F4-p1", q: "Candy's current assets are £12,000 and her current liabilities are £10,000. Calculate the current ratio. (Past paper, June 2024. Figures from the mark scheme.)", marks: 2, answer: "2 marks for 1.2:1 (accept 1.2).\n\nOtherwise 1 mark for the formula in words (current ratio = current assets ÷ current liabilities) or in numbers (12,000 ÷ 10,000)." },
          { id: "F4-p2", q: "Using the figures in Gabriella's statement of financial position, calculate the liquid capital ratio. (Past paper, January 2026. Figures from the mark scheme.)", table: [["Gabriella's Garden Services", "£"], ["Inventory", "900"], ["Trade receivables", "10,500"], ["Prepayments", "4,600"], ["Cash", "700"], ["Total current assets", "16,700"], ["Total current liabilities", "7,900"]], marks: 3, answer: "3 marks for 2:1 (accept with or without :1).\n\nOtherwise:\n- 2 marks for the formula in numbers: £15,800 ÷ £7,900\n- 1 mark for current assets − inventory = £15,800\n- OR 1 mark for the formula in words: (current assets − inventory) ÷ current liabilities" },
          { id: "F4-p3", q: "Explain two ways a sole trader could improve the liquidity of their business.", marks: 4, suggested: true, answer: "Up to 4 marks, e.g.:\n- Introduce more capital (1), which increases cash, a current asset (1).\n- Chase customers to pay sooner (1), turning trade receivables into cash (1).\n- Replace the overdraft with a long-term loan (1), reducing current liabilities (1).\n- Sell unused non-current assets (1) to bring in cash (1).\n- Reduce drawings (1) so more cash stays in the business (1)." },
          { id: "F4-p4", q: "Explain why the liquid capital ratio may be a better measure of liquidity than the current ratio for a business that sells fashion clothing.", marks: 4, suggested: true, answer: "Up to 4 marks, e.g.:\n- The liquid capital ratio leaves out inventory (1), because it can't always be turned into cash quickly (1).\n- Fashion goes out of style quickly (1), so inventory may have to be sold at a discount or not at all (1).\n- So the current ratio may overstate how easily the business can pay its debts (1), while the liquid capital ratio gives a more cautious picture (1)." }
        ]
      },
      {
        id: "F5",
        title: "F5 Measuring efficiency",
        summary: "Trade receivable days, trade payable days and inventory turnover: calculating, interpreting and improving them.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Efficiency ratios show how well a business manages its working capital: money owed to it, money it owes, and inventory.\n\nFormulas (not given in the exam)\n- Trade receivable days = (trade receivables ÷ credit sales) × 365\n- Trade payable days = (trade payables ÷ credit purchases) × 365\n- Inventory turnover (days) = (average inventory ÷ cost of sales) × 365\n  - Average inventory = (opening inventory + closing inventory) ÷ 2\nAnswers are in days. Round to the nearest day unless told otherwise.\n\nWorked examples\n- Trade receivables £6,000, credit sales £48,000: (6,000 ÷ 48,000) × 365 = 45.6, about 46 days.\n- Trade payables £4,000, credit purchases £36,500: (4,000 ÷ 36,500) × 365 = 40 days.\n- Opening inventory £3,000, closing £5,000, cost of sales £73,000: average £4,000. (4,000 ÷ 73,000) × 365 = 20 days.\n\nInterpreting\n- Trade receivable days: how long customers take to pay on average. Lower is better for cash flow. Compare with the credit terms given (e.g. 30 days). Much longer suggests poor credit control and risk of bad debts.\n- Trade payable days: how long the business takes to pay suppliers. Higher helps cash flow, but too high can damage supplier relationships and the business's credit rating, and lose prompt payment discounts.\n- Ideally receivable days are lower than payable days: money comes in before it has to go out.\n- Inventory turnover: how many days inventory is held before it's sold. Lower usually means efficient, fresh stock and less cash tied up. Too low risks running out. What's normal depends on the product: a florist turns stock over in days, a furniture shop in months.\n\nImproving efficiency\n- Receivables: shorter credit terms, discounts for early payment, chase late payers, credit checks, debt factoring (but customers may go elsewhere).\n- Payables: negotiate longer credit with suppliers (but keep good relationships).\n- Inventory: order smaller amounts more often (just in time), discount slow-moving stock, better stock control."
          }
        ],
        cards: [
          ["Trade receivable days", "(Trade receivables ÷ credit sales) × 365"],
          ["Trade payable days", "(Trade payables ÷ credit purchases) × 365"],
          ["Inventory turnover", "(Average inventory ÷ cost of sales) × 365"],
          ["Average inventory", "(Opening inventory + closing inventory) ÷ 2"],
          ["Ideal receivables vs payables", "Collect from customers faster than you pay suppliers."],
          ["High receivable days", "Customers pay slowly; poor cash flow; risk of bad debts."]
        ],
        questions: [
          { type: "match", q: "Match each efficiency ratio to its formula.", pairs: [["Trade receivable days", "(Trade receivables ÷ credit sales) × 365"], ["Trade payable days", "(Trade payables ÷ credit purchases) × 365"], ["Inventory turnover", "(Average inventory ÷ cost of sales) × 365"]], explanation: "" },
          { type: "type", q: "Trade receivables are £6,000 and credit sales are £48,000. What are trade receivable days? (to the nearest day)", accept: ["46", "45.6", "45.63"], explanation: "(6,000 ÷ 48,000) × 365 = 45.6, so 46 days." },
          { type: "type", q: "Trade payables are £4,000 and credit purchases are £36,500. What are trade payable days?", accept: ["40"], explanation: "(4,000 ÷ 36,500) × 365 = 40 days." },
          { type: "type", q: "Opening inventory is £3,000 and closing inventory is £5,000. What is average inventory, in £?", accept: ["4000"], explanation: "(£3,000 + £5,000) ÷ 2 = £4,000." },
          { type: "type", q: "Average inventory is £4,000 and cost of sales is £73,000. What is inventory turnover in days?", accept: ["20"], explanation: "(4,000 ÷ 73,000) × 365 = 20 days." },
          { type: "type", q: "Candy's trade receivables are £19,200 and credit sales are £32,000. What are her trade receivable days?", accept: ["219"], explanation: "(19,200 ÷ 32,000) × 365 = 219 days." },
          { q: "A business gives customers 30 days' credit but its trade receivable days are 75. What does this suggest?", options: ["Customers are paying late, so credit control is poor", "Customers are paying early", "Inventory is too high", "Suppliers are being paid late"], answer: 0, explanation: "On average customers take far longer than the agreed terms." },
          { q: "Which is the best position for cash flow?", options: ["Receivable days of 25 and payable days of 45", "Receivable days of 60 and payable days of 20", "Receivable days of 90 and payable days of 90", "Receivable days of 45 and payable days of 10"], answer: 0, explanation: "Money comes in from customers before it has to be paid to suppliers." },
          { q: "What is a risk of very high trade payable days?", options: ["Damaged supplier relationships and lost discounts", "Customers paying late", "Inventory going out of date", "Lower gross profit margin"], answer: 0, explanation: "Suppliers may refuse credit or stop supplying." },
          { q: "Which action would reduce inventory turnover days?", options: ["Ordering smaller amounts more often", "Bulk buying a year's stock", "Giving customers longer credit", "Taking more drawings"], answer: 0, explanation: "Less stock is held at any time." },
          { q: "For which business would you expect the lowest inventory turnover in days?", options: ["A florist", "A furniture shop", "A jeweller", "A car dealer"], answer: 0, explanation: "Flowers are perishable, so stock must be sold within days." }
        ],
        practice: [
          { id: "F5-p1", q: "Candy's trade receivables are £19,200 and her credit sales are £32,000. Calculate the trade receivable days. (Past paper, June 2024. Figures from the mark scheme.)", marks: 2, answer: "2 marks for 219 days.\n\nOtherwise 1 mark for the formula in numbers (19,200 ÷ 32,000 × 365) or in words (trade receivable days = trade receivables ÷ credit sales × 365)." },
          { id: "F5-p2", q: "A business has opening inventory of £1,700, closing inventory of £1,300 and cost of goods sold of £36,500. Calculate the inventory turnover. (Past paper, January 2025. Figures from the mark scheme.)", marks: 3, answer: "3 marks for 15 days (accept 14.99).\n\nOtherwise:\n- 2 marks for the formula in numbers: (1,500 ÷ 36,500) × 365\n- 1 mark for the formula in words: (average inventory ÷ cost of sales) × 365\n- OR 1 mark for average inventory of £1,500" },
          { id: "F5-p3", q: "Gabriella's trade payables are £1,200 and her credit purchases for 2025 were £6,000. Calculate her trade payable days. (Past paper, January 2026. Figures from the mark scheme.)", marks: 2, answer: "2 marks for 73 days.\n\nOtherwise 1 mark for the formula in numbers ((1,200 ÷ 6,000) × 365) or in words ((trade payables ÷ credit purchases) × 365)." },
          { id: "F5-p4", q: "Candy runs a design studio and gives her customers 60 days' credit. Her credit sales are £32,000 and her trade receivable days are 219. She is moving to a new studio where rent is 40% higher. She has an agreed overdraft of £10,000 at 17% APR. Large software corporations could bring in £15,000 a month of new sales, but they expect long credit periods. Evaluate whether Candy should reduce her customers' credit period from 60 days to 30 days or continue to use her overdraft to manage her cash flow. (Past paper, June 2024. Scenario summarised from the mark scheme.)", marks: 12, answer: "Benefits of reducing the credit period:\n- Less risk of bad debts, as she waits less time.\n- Cash arrives 30 days sooner, so possibly 30 days less overdraft interest at 17% APR.\n- Less risk of being late with payments, e.g. rent, now 40% higher.\n\nDrawbacks of reducing the credit period:\n- May lose sales if 60 days' credit is a USP.\n- Large software corporations may not use her, losing up to £15,000 a month, leaving her struggling with the higher rent.\n- 30 days' credit still hurts cash flow.\n- May still need the overdraft, as credit sales are £32,000.\n- Existing customers used to 60 days may leave, making cash flow worse.\n\nBenefits of the overdraft:\n- Only pays interest on the amount overdrawn.\n- Flexible, used only when needed.\n- Keeps the 60-day USP, keeping customers and attracting large clients worth a potential £15,000 in inflows.\n- May be cheaper than other short-term finance such as a credit card or emergency loan.\n\nDrawbacks of the overdraft:\n- £10,000 may not be enough: new sales could be £15,000 and existing credit sales £32,000.\n- Repayable on demand.\n- 17% APR is expensive.\n\nA strong answer uses the ratios and figures (219 days is far above her 60-day terms) and reaches a supported judgement.\n\nLevels: 10 to 12 thorough, balanced evaluation with a supported conclusion; 7 to 9 balanced with some support; 4 to 6 some application and judgement; 1 to 3 basic description." }
        ]
      },
      {
        id: "F6",
        title: "F6 Limitations of ratios",
        summary: "Why ratios alone can mislead when judging a business's performance.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Ratios are useful for comparing performance over time, against targets and against competitors, and for spotting problems early. But they have limits:\n\n- Historic data: ratios use past figures, which may not reflect what happens next.\n- External factors are ignored: a recession, new competitors, changes in costs, supply chain problems, new laws or changes in customer tastes aren't shown.\n- Non-financial factors are ignored: staff morale and skills, reputation, customer satisfaction, product quality, location.\n- A snapshot: the SOFP is one date; seasonal businesses may look very different at another time of year.\n- Comparisons must be like for like: businesses of different sizes, in different industries, or using different accounting methods (e.g. depreciation) can't be compared fairly.\n- Ratios in isolation mislead: one ratio alone gives a partial picture. Look at several together and at trends.\n- Actual figures can matter more than percentages: a high profit margin on a small revenue may still be a small profit in pounds.\n- They show symptoms, not causes or solutions: a falling GPM tells you there's a problem, not what caused it or how to fix it.\n- Inflation distorts comparisons over several years.\n- Data quality: ratios are only as accurate as the accounts; figures can be 'window dressed' at year end.\n- A new business has no previous years to compare with.\n\nIn the exam, link limitations to the scenario: e.g. 'Candy's ratios are based on last year, but her new studio rent is 40% higher, so her future profit margin is likely to be lower than 38%.'"
          }
        ],
        cards: [
          ["Historic data", "Ratios use past figures, which may not predict the future."],
          ["Non-financial factors", "Morale, reputation and quality aren't shown in ratios."],
          ["Like-for-like comparison", "Compare with similar businesses, sizes and accounting methods."],
          ["Ratios in isolation", "One ratio gives a partial picture; use several and look at trends."],
          ["Symptoms not causes", "Ratios show a problem exists, not why or how to fix it."],
          ["Window dressing", "Making year-end figures look better than usual."]
        ],
        questions: [
          { type: "multi", q: "Select all the limitations of ratio analysis.", options: ["Based on historic data", "Ignores non-financial factors", "Doesn't explain the causes of problems", "Allows comparison with previous years", "Affected by different accounting methods"], answers: [0, 1, 2, 4], explanation: "Comparing with previous years is a benefit." },
          { q: "Why might comparing a small café's ratios with a national chain's be misleading?", options: ["They are very different sizes and may use different accounting methods", "Ratios can't be calculated for cafés", "Chains don't publish accounts", "Ratios only work for manufacturers"], answer: 0, explanation: "Comparisons need to be like for like." },
          { q: "Which of these would ratio analysis NOT show?", options: ["Staff morale is low", "Profit margin has fallen", "Customers are paying more slowly", "Current ratio is below 1:1"], answer: 0, explanation: "Non-financial factors aren't in the accounts." },
          { q: "A business has a profit margin of 40% but revenue of only £10,000. What limitation does this show?", options: ["Actual figures can matter more than percentages", "Ratios use future data", "Ratios include morale", "Ratios always overstate losses"], answer: 0, explanation: "40% of £10,000 is only £4,000 profit." },
          { q: "A new business wants to use ratio analysis to judge its first year. What is the main problem?", options: ["There are no previous years to compare with", "It can't calculate ratios", "Ratios are only for limited companies", "Its ratios will always be 100%"], answer: 0, explanation: "Trends need more than one year." },
          { q: "A toy shop's statement of financial position is drawn up on 20 December. Why might its ratios be misleading?", options: ["Seasonal trade means inventory and cash look very different at other times of year", "Ratios can't be calculated in December", "Toy shops have no inventory", "December figures are always zero"], answer: 0, explanation: "The SOFP is a snapshot of one date." },
          { type: "match", q: "Match each limitation to an example.", pairs: [["Historic data", "Last year's figures don't show this year's 40% rent rise"], ["Ignores external factors", "A recession isn't reflected in the ratios"], ["Non-financial factors ignored", "The business has an excellent reputation that isn't shown"], ["Different accounting methods", "Two firms depreciate their vans differently"]], explanation: "" }
        ],
        practice: [
          { id: "F6-p1", q: "Explain two limitations of using ratios to assess a business's performance.", marks: 4, suggested: true, answer: "Up to 4 marks, e.g.:\n- Ratios use historic data (1), so they may not reflect future performance (1).\n- They ignore non-financial factors such as staff morale or reputation (1), so give an incomplete picture (1).\n- Comparisons may not be like for like (1), as businesses use different accounting methods or are different sizes (1).\n- They show symptoms but not causes (1), so further investigation is needed (1)." },
          { id: "F6-p2", q: "Candy is deciding whether she can afford to expand. Her ratios are: gross profit margin 64%, profit margin 38%, current ratio 1.2:1, trade receivable days 219. Analyse the limitations of ratio analysis to Candy in deciding whether she can afford to expand. (Past paper, June 2024. Scenario summarised from the mark scheme.)", marks: 8, answer: "Learners may analyse benefits and drawbacks of individual ratios or of ratio analysis overall.\n\nBenefits:\n- Compare current with past performance, useful for predicting whether expansion will succeed.\n- Compare with competitors to see what they may be doing better.\n- Monitor and identify issues to avoid past mistakes and improve performance.\n\nDrawbacks:\n- Information is historic and may not be relevant in future.\n- Ignores factors such as recession, economic, social or political change, supply chains, competitors and customers, which could lead Candy to the wrong decision.\n- Single ratios used alone prevent the right conclusions about overall performance.\n- Actual figures may matter more than percentages: £67,000 profit may be low even though 38% looks high.\n- Ratios may show likely performance and areas to improve, but don't create solutions.\n\nAllow analysis of the learner's own calculated figures.\n\nLevels: 7 to 8 thorough application with balanced analysis; 4 to 6 some linkages; 1 to 3 basic description." }
        ]
      }
    ]
  });
})();
