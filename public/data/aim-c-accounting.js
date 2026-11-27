/* Learning aim C: Understand the purpose of accounting. Written from the Unit 3 specification and Pearson mark schemes. */
(function () {
  window.U3_AIM("business", "Learning aim C: The purpose of accounting", [
      {
        id: "C1",
        title: "C1 Purpose of accounting",
        summary: "Recording transactions, planning, monitoring and controlling, compliance, preventing fraud and measuring performance.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Why businesses keep accounts:\n\nRecording transactions\n- An accurate record of every sale, purchase, receipt and payment.\n- Needed to work out profit, pay the right tax (sole traders complete a Self Assessment tax return; VAT-registered businesses submit VAT returns) and answer questions from HMRC. Records must be kept for several years.\n\nManagement of the business\n- Planning: budgets and forecasts (e.g. cash flow forecasts) set out what should happen.\n- Monitoring: compare actual results with the plan to spot differences (variances).\n- Controlling: take action when results are off target, e.g. cut costs or chase customers.\n\nCompliance\n- With the law and regulations: tax rules, VAT, employment law (payroll records), and for companies the Companies Act.\n- Preventing fraud: clear records, checks, separating duties and audits make theft and false entries harder to hide.\n\nMeasuring performance\n- Profit, and ratios such as profit margin and ROCE, show how well the business is doing.\n- Compare with previous years, targets and competitors.\n- Stakeholders use the accounts: the owner, lenders (before giving a loan), investors, HMRC, suppliers (before giving credit).\n\nControl of trade receivables and trade payables\n- Trade receivables: customers who owe the business money for credit sales. Keeping records shows who owes what and how late they are, so debts can be chased and bad debts avoided.\n- Trade payables: suppliers the business owes. Records make sure suppliers are paid on time, protecting the business's credit rating and relationships, and allowing it to take any prompt payment discounts."
          }
        ],
        cards: [
          ["Recording transactions", "Keeping an accurate record of all sales, purchases, receipts and payments."],
          ["Planning", "Setting budgets and forecasts for the future."],
          ["Monitoring", "Comparing actual results with the plan."],
          ["Controlling", "Taking action when results are off target."],
          ["Compliance", "Following tax law and other regulations."],
          ["Trade receivables", "Customers who owe the business money for credit sales."],
          ["Trade payables", "Suppliers the business owes money to."],
          ["Variance", "The difference between planned and actual figures."]
        ],
        questions: [
          { type: "match", q: "Match each purpose of accounting to an example.", pairs: [["Recording transactions", "Entering every sale and purchase in the books"], ["Planning", "Preparing next year's cash flow forecast"], ["Monitoring", "Comparing actual sales with the forecast each month"], ["Controlling", "Cutting spending after costs went over budget"], ["Compliance", "Submitting a correct VAT return on time"]], explanation: "" },
          { type: "multi", q: "Select all the purposes of accounting.", options: ["Recording transactions", "Measuring performance", "Preventing fraud", "Setting the Bank Rate", "Compliance with law and regulations"], answers: [0, 1, 2, 4], explanation: "The Bank of England sets the Bank Rate." },
          { q: "What are trade receivables?", options: ["Money customers owe the business", "Money the business owes suppliers", "Cash in the bank", "Profit for the year"], answer: 0, explanation: "They come from credit sales." },
          { q: "What are trade payables?", options: ["Money the business owes its suppliers", "Money customers owe the business", "Loans from the bank", "The owner's capital"], answer: 0, explanation: "They come from credit purchases." },
          { q: "How do accounting records help prevent fraud?", options: ["Clear records and checks make false entries and theft easier to spot", "They let staff pay themselves", "They hide information from HMRC", "They replace the need for a bank account"], answer: 0, explanation: "Audits and separating duties make fraud harder to hide." },
          { q: "A bank manager asks to see a sole trader's accounts before agreeing a loan. Which purpose of accounting does this show?", options: ["Measuring performance for stakeholders", "Recording transactions only", "Preventing fraud", "Setting prices"], answer: 0, explanation: "Lenders use accounts to judge whether the business can repay." },
          { type: "order", q: "Put the management cycle in order.", items: ["Plan with a budget or forecast", "Monitor actual results against the plan", "Control by taking action on differences"], explanation: "" },
          { q: "Why should a business keep track of trade payables?", options: ["To pay suppliers on time and keep good relationships", "To chase customers for payment", "To calculate depreciation", "To set interest rates"], answer: 0, explanation: "Late payment damages credit ratings and supplier relationships." }
        ],
        practice: [
          { id: "C1-p1", q: "Give two purposes of accounting. (Past paper, June 2024)", marks: 2, answer: "1 mark each, up to 2: recording transactions; planning; monitoring; controlling; compliance with law and regulations; preventing fraud; measuring performance." },
          { id: "C1-p2", q: "Explain one way accounting helps a business prevent fraud.", marks: 2, suggested: true, answer: "Accurate records of every transaction (1) mean any missing money or false entries can be spotted when the accounts are checked or audited (1)." },
          { id: "C1-p3", q: "Explain two reasons why a sole trader should keep accurate records of trade receivables.", marks: 4, suggested: true, answer: "Up to 4 marks, e.g.:\n- To know which customers owe money and how much (1), so late payers can be chased (1).\n- To reduce bad debts (1), as action is taken before debts become too old to collect (1).\n- To improve cash flow (1), because money comes in sooner (1).\n- To decide whether to keep giving credit to a customer (1) based on how quickly they pay (1)." }
        ]
      },
      {
        id: "C2",
        title: "C2 Types of income",
        summary: "Capital income (loans, mortgages, shares, owner's capital, debentures) and revenue income (sales, rent, commission, interest and discount received).",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Capital income: money put into the business to fund it, usually for the long term. It doesn't come from trading.\n- Loan: borrowed from a bank and repaid with interest.\n- Mortgage: a long-term loan secured on property.\n- Shares: money from selling part-ownership (limited companies only, not sole traders).\n- Owner's capital: the owner's own money invested in the business.\n- Debentures: long-term loans to a company, usually at a fixed rate of interest and often secured on assets.\nCapital income appears in the statement of financial position (as a liability or as capital), not in the statement of comprehensive income.\n\nRevenue income: money earned from the day-to-day running of the business.\n- Cash sales: paid for straight away.\n- Credit sales: goods sold now and paid for later (creates trade receivables).\n- Rent received: from letting out part of the business's property.\n- Commission received: earned for selling something on someone else's behalf.\n- Interest received: earned on money in the business's bank account.\n- Discount received: a reduction given by a supplier, e.g. for paying early.\nSales go at the top of the statement of comprehensive income. Other revenue income (rent, commission, interest, discount received) is added after gross profit as 'other income'.\n\nTip: ask 'did this come from trading or running the business?' If yes, it's revenue income. If it was money put in or borrowed to fund the business, it's capital income."
          }
        ],
        cards: [
          ["Capital income", "Money put into or borrowed by the business, not from trading."],
          ["Revenue income", "Money earned from the day-to-day running of the business."],
          ["Debenture", "Long-term loan to a company at a fixed interest rate."],
          ["Owner's capital", "The owner's own money invested in the business."],
          ["Discount received", "A reduction from a supplier, e.g. for paying early. Revenue income."],
          ["Commission received", "Earned for selling on someone else's behalf. Revenue income."],
          ["Credit sales", "Sold now, paid for later. Creates trade receivables."]
        ],
        questions: [
          { type: "sort", q: "Sort each item into capital income or revenue income.", categories: ["Capital income", "Revenue income"], items: [["Bank loan", 0], ["Owner's capital", 0], ["Debentures", 0], ["Mortgage", 0], ["Cash sales", 1], ["Rent received", 1], ["Commission received", 1], ["Discount received", 1]], explanation: "Capital income funds the business. Revenue income comes from running it." },
          { q: "Which of these is revenue income?", options: ["Interest received", "A bank loan", "Shares issued", "Owner's capital"], answer: 0, explanation: "Interest received is earned from the business's day-to-day activity." },
          { q: "A sole trader puts £10,000 of savings into her business. What type of income is this?", options: ["Capital income: owner's capital", "Revenue income: cash sales", "Revenue income: interest received", "Capital expenditure"], answer: 0, explanation: "It's the owner's money invested, not income from trading." },
          { q: "Which type of business can raise capital income by selling shares?", options: ["A limited company", "A sole trader", "Any business", "Only charities"], answer: 0, explanation: "Sole traders have no shares to sell." },
          { q: "What is a debenture?", options: ["A long-term loan to a company, usually at fixed interest", "A discount from a supplier", "Money from cash sales", "A type of depreciation"], answer: 0, explanation: "Debentures are capital income." },
          { q: "Where does capital income appear in the final accounts?", options: ["Statement of financial position", "As sales in the statement of comprehensive income", "As an expense", "It doesn't appear"], answer: 0, explanation: "Loans appear as liabilities; owner's capital as capital." },
          { type: "multi", q: "Select all the items that are added as 'other income' in a statement of comprehensive income.", options: ["Rent received", "Commission received", "Discount received", "Bank loan", "Owner's capital"], answers: [0, 1, 2], explanation: "Loans and capital are capital income, shown in the statement of financial position." },
          { q: "A shop lets out the flat above it for £600 a month. How is this classified?", options: ["Revenue income: rent received", "Capital income: mortgage", "Revenue expenditure: rent", "Capital expenditure"], answer: 0, explanation: "It's income from the business's ongoing activities." }
        ],
        practice: [
          { id: "C2-p1", q: "Identify two types of capital income.", marks: 2, suggested: true, answer: "1 mark each, up to 2: loan; mortgage; shares; owner's capital; debentures." },
          { id: "C2-p2", q: "Explain the difference between capital income and revenue income, using an example of each.", marks: 4, suggested: true, answer: "Capital income is money put into or borrowed by the business to fund it, not from trading (1), e.g. a bank loan or owner's capital (1).\n\nRevenue income is money earned from day-to-day trading or running the business (1), e.g. cash sales or rent received (1)." }
        ]
      },
      {
        id: "C3",
        title: "C3 Types of expenditure and depreciation",
        summary: "Capital expenditure on tangible and intangible non-current assets, revenue expenditure, and straight-line and reducing balance depreciation.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Capital expenditure: buying non-current assets, which the business keeps and uses for more than a year.\n- Tangible (physical): land, buildings and premises, machinery and equipment, vehicles, fixtures and fittings.\n- Intangible (not physical): goodwill (the value of a business's reputation and customer base above its assets), patents, trademarks, brand names.\nCapital expenditure appears in the statement of financial position as non-current assets.\n\nRevenue expenditure: day-to-day running costs used up within the year: inventory (purchases), rent, rates, heating and lighting, water, insurance, administration, telephone, postage, stationery, salaries, wages, marketing, bank charges, interest paid, depreciation (straight-line and reducing balance) and discount allowed (a reduction given to customers, e.g. for paying early).\nRevenue expenditure appears in the statement of comprehensive income as cost of sales or expenses.\n\nDepreciation: the fall in value of a non-current asset over time, through wear and tear or becoming out of date. It is an expense in the statement of comprehensive income, and accumulated depreciation is taken off the asset's cost in the statement of financial position to give the net book value (NBV). For intangible assets this is called amortisation.\n\nStraight-line depreciation: the same amount every year.\n- Formula used in Unit 3: cost × %.\n- Example: van cost £12,000, 15% straight-line. Depreciation = £1,800 every year. After 3 years, accumulated depreciation £5,400, NBV £6,600.\n\nReducing balance depreciation: a percentage of the net book value each year, so the charge gets smaller.\n- Formula: (cost − depreciation to date) × %.\n- Example: machine cost £40,000, 20% reducing balance. Year 1: £40,000 × 20% = £8,000, NBV £32,000. Year 2: £32,000 × 20% = £6,400, NBV £25,600.\n- Suits assets that lose most value early, such as vehicles and computers.\n\nNet book value = cost − accumulated depreciation."
          }
        ],
        cards: [
          ["Capital expenditure", "Buying non-current assets kept for more than a year."],
          ["Revenue expenditure", "Day-to-day running costs used up within the year."],
          ["Tangible asset", "A physical non-current asset, e.g. machinery or vehicles."],
          ["Intangible asset", "A non-physical asset, e.g. goodwill, patents, brand names."],
          ["Goodwill", "Value of a business's reputation and customers above its assets."],
          ["Straight-line depreciation", "Cost × %. The same charge every year."],
          ["Reducing balance depreciation", "(Cost − depreciation to date) × %. Charge falls each year."],
          ["Net book value", "Cost − accumulated depreciation."],
          ["Discount allowed", "A reduction given to customers. Revenue expenditure."]
        ],
        questions: [
          { type: "sort", q: "Sort each item into capital or revenue expenditure.", categories: ["Capital expenditure", "Revenue expenditure"], items: [["Delivery van", 0], ["New machinery", 0], ["Buying a patent", 0], ["Shop fittings", 0], ["Wages", 1], ["Electricity", 1], ["Stationery", 1], ["Interest paid", 1]], explanation: "Non-current assets are capital expenditure. Running costs are revenue expenditure." },
          { type: "sort", q: "Sort these non-current assets into tangible and intangible.", categories: ["Tangible", "Intangible"], items: [["Land", 0], ["Vehicles", 0], ["Fixtures and fittings", 0], ["Goodwill", 1], ["Trademark", 1], ["Brand name", 1]], explanation: "Intangible assets have no physical form." },
          { type: "type", q: "A van costs £12,000 and is depreciated at 15% a year using the straight-line method. What is the annual depreciation charge, in £?", accept: ["1800"], explanation: "£12,000 × 15% = £1,800." },
          { type: "type", q: "Using the straight-line method, the £12,000 van loses £1,800 a year. What is its net book value after 3 years, in £?", accept: ["6600"], explanation: "Accumulated depreciation £1,800 × 3 = £5,400. NBV = £12,000 − £5,400 = £6,600." },
          { type: "type", q: "A machine costs £40,000 and is depreciated at 20% a year using reducing balance. What is the depreciation charge in year 2, in £?", accept: ["6400"], explanation: "Year 1: £8,000, NBV £32,000. Year 2: £32,000 × 20% = £6,400." },
          { type: "type", q: "What is the net book value of the £40,000 machine at the end of year 2 (20% reducing balance), in £?", accept: ["25600"], explanation: "£32,000 − £6,400 = £25,600." },
          { q: "Which depreciation method gives a smaller charge each year?", options: ["Reducing balance", "Straight-line", "Both give the same charge", "Neither"], answer: 0, explanation: "Reducing balance takes a % of a falling net book value." },
          { q: "Where is depreciation for the year shown?", options: ["As an expense in the statement of comprehensive income", "As revenue income", "As a current asset", "It isn't shown"], answer: 0, explanation: "The year's charge is an expense; accumulated depreciation reduces the asset's value in the statement of financial position." },
          { q: "Which is NOT an example of a non-current asset?", options: ["Inventory", "Buildings", "Patents", "Machinery"], answer: 0, explanation: "Inventory is a current asset because it is sold within the year." },
          { q: "What is 'discount allowed'?", options: ["A reduction given to customers, treated as an expense", "A reduction from suppliers, treated as income", "Depreciation on vehicles", "A type of loan"], answer: 0, explanation: "Discount allowed is revenue expenditure. Discount received is revenue income." },
          { type: "match", q: "Match each term to its formula or meaning.", pairs: [["Straight-line depreciation", "Cost × %"], ["Reducing balance depreciation", "(Cost − depreciation to date) × %"], ["Net book value", "Cost − accumulated depreciation"], ["Amortisation", "Depreciation of an intangible asset"]], explanation: "" }
        ],
        practice: [
          { id: "C3-p1", q: "Give two examples of non-current assets. (Past paper, June 2024)", marks: 2, answer: "1 mark each, up to 2: land; buildings and premises; machinery and equipment; vehicles; fixtures and fittings; goodwill; patents; trademarks; brand names.\n\n'Tangible' and 'intangible' are not examples, so get no marks." },
          { id: "C3-p2", q: "A van was bought on 1 January 2023 for £25,500. It is depreciated at 10% a year using the reducing balance method. Calculate the net book value of the van at the end of 2024. (Past paper, January 2025. Figures from the mark scheme.)", marks: 4, answer: "4 marks for £20,655.\n\nOtherwise:\n- 3 marks for depreciation at the end of 2024 of £2,295\n- 2 marks for net book value at the end of 2023 of £22,950\n- 1 mark for depreciation at the end of 2023 of £2,550\nAND 1 mark for the formula in words: cost − depreciation to date × %.\n\nWorking: 2023: £25,500 × 10% = £2,550, NBV £22,950. 2024: £22,950 × 10% = £2,295, NBV £20,655." },
          { id: "C3-p3", q: "Explain one difference between straight-line and reducing balance depreciation.", marks: 2, suggested: true, answer: "Straight-line charges the same amount every year (cost × %) (1), whereas reducing balance charges a percentage of the net book value, so the charge falls each year (1)." },
          { id: "C3-p4", q: "Explain the difference between capital expenditure and revenue expenditure, using an example of each.", marks: 4, suggested: true, answer: "Capital expenditure is spending on non-current assets kept for more than a year (1), e.g. buying a delivery van (1).\n\nRevenue expenditure is spending on day-to-day running costs used up within the year (1), e.g. paying wages or rent (1)." }
        ]
      }
  ]);
})();
