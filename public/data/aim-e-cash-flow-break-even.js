/* Learning aim E: Break-even and cash flow forecasts. Written from the Unit 3 specification and Pearson mark schemes. Formulas are not given in the exam. */
(function () {
  var CF_TABLE = [
    ["Kerry's Kitchen", "Jan £", "Feb £", "Mar £"],
    ["Cash sales", "4,200", "3,800", "5,100"],
    ["Credit sales", "1,500", "1,900", "2,000"],
    ["Bank loan", "", "5,000", ""],
    ["Total inflows", "5,700", "10,700", "7,100"],
    ["Purchases", "2,600", "2,400", "3,100"],
    ["Rent", "1,200", "1,200", "1,200"],
    ["Wages", "1,800", "1,800", "2,000"],
    ["Purchase of assets", "", "7,500", ""],
    ["Utilities", "300", "280", "260"],
    ["Total outflows", "5,900", "?", "6,560"],
    ["Net cash flow", "(200)", "?", "540"],
    ["Opening balance", "1,000", "800", "?"],
    ["Closing balance", "800", "?", "?"]
  ];

  window.TLV_CONTENT.subjects.push({
    id: "aim-e",
    title: "Learning aim E: Break-even and cash flow forecasts",
    colour: "#cf222e",
    topics: [
      {
        id: "E1",
        title: "E1 Cash flow forecasts",
        summary: "Inflows and outflows, completing and revising a forecast, using it to plan and control, benefits, limitations and ways to improve cash flow.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "A cash flow forecast predicts the money coming into and going out of a business over the coming months.\n\nInflows (receipts): cash sales, credit sales (when the customer actually pays), loans, capital introduced, sale of assets, bank interest received.\n\nOutflows (payments): cash purchases, credit purchases (when the supplier is paid), rent, rates, salaries, wages, utilities, purchase of assets, VAT, bank interest paid.\n\nLayout and formulas (not given in the exam, so learn them):\n- Total inflows − total outflows = net cash flow\n- Closing balance = opening balance + net cash flow\n- The closing balance of one month is the opening balance of the next month.\n- Negative figures are shown in brackets, e.g. (2,480). A negative closing balance means the business is overdrawn.\n\nAlways say whether a figure is positive or negative. In the exam a missing bracket loses the mark.\n\nRevising a forecast: if a figure changes (e.g. wages fall by 25%), recalculate that figure, then total outflows, net cash flow, and every closing balance after it.\n\nUses: planning (see when money will be short and arrange an overdraft in advance), monitoring (compare actual with forecast), control (act on differences), target setting (set targets for sales or spending), securing finance (banks want to see one in a business plan).\n\nBenefits: shows all inflows and outflows; good for planning and budgeting; shows when the business may go overdrawn so action can be taken; helps secure finance.\nLimitations: it's a prediction so may be inaccurate; external changes (economy, competitors, costs) can't be predicted; only as good as the person who makes it; decisions may be based on wrong figures; takes time to prepare.\n\nImproving cash flow:\n- Increase inflows: raise prices (customers may buy less), promotions (cost money now), reduce the credit period given to customers (they may go elsewhere), sell unused assets, encourage cash sales.\n- Reduce or delay outflows: delay buying assets, or use leasing or HP to spread the cost; negotiate longer credit from suppliers; find cheaper suppliers or premises; cut costs.\n- Arrange an overdraft to cover short gaps.\n\nCash is not the same as profit: a profitable business can run out of cash if customers pay late or it buys expensive assets."
          }
        ],
        cards: [
          ["Net cash flow", "Total inflows − total outflows."],
          ["Closing balance", "Opening balance + net cash flow."],
          ["Opening balance", "Last month's closing balance."],
          ["Brackets in a forecast", "Show a negative figure, e.g. (500) means −£500."],
          ["Inflows", "Cash sales, credit sales, loans, capital introduced, sale of assets, interest received."],
          ["Outflows", "Purchases, rent, rates, wages, salaries, utilities, assets, VAT, interest paid."],
          ["Uses of a cash flow forecast", "Planning, monitoring, control, target setting, securing finance."],
          ["Limitation of a forecast", "It's a prediction, so it may be inaccurate."]
        ],
        questions: [
          { type: "sort", q: "Sort each item into inflow or outflow.", categories: ["Inflow", "Outflow"], items: [["Cash sales", 0], ["Capital introduced", 0], ["Sale of assets", 0], ["Bank interest received", 0], ["Rent", 1], ["VAT", 1], ["Purchase of assets", 1], ["Bank interest paid", 1]], explanation: "" },
          { type: "type", q: "In Kerry's Kitchen's forecast, what are total outflows in February, in £?", table: CF_TABLE, accept: ["13180"], explanation: "£2,400 + £1,200 + £1,800 + £7,500 + £280 = £13,180." },
          { type: "type", q: "What is Kerry's Kitchen's net cash flow in February, in £? (Use a minus sign or brackets if negative.)", table: CF_TABLE, accept: ["-2480"], explanation: "£10,700 − £13,180 = (£2,480)." },
          { type: "type", q: "What is Kerry's Kitchen's closing balance in February, in £? (Use a minus sign or brackets if negative.)", table: CF_TABLE, accept: ["-1680"], explanation: "Opening £800 + net cash flow (£2,480) = (£1,680)." },
          { type: "type", q: "What is Kerry's Kitchen's closing balance in March, in £? (Use a minus sign or brackets if negative.)", table: CF_TABLE, accept: ["-1140"], explanation: "Opening (£1,680) + net cash flow £540 = (£1,140)." },
          { type: "type", q: "Kerry cuts March wages by 25%. What is the new closing balance for March, in £? (Use a minus sign or brackets if negative.)", table: CF_TABLE, accept: ["-640"], explanation: "Wages £2,000 × 75% = £1,500. Outflows £6,060. Net cash flow £7,100 − £6,060 = £1,040. Closing (£1,680) + £1,040 = (£640)." },
          { q: "What is the formula for closing balance?", options: ["Opening balance + net cash flow", "Inflows + outflows", "Opening balance − inflows", "Net cash flow − outflows"], answer: 0, explanation: "Closing balance = opening balance + net cash flow." },
          { q: "In a cash flow forecast, what does (3,200) mean?", options: ["−£3,200", "£3,200 profit", "£3,200 of assets", "A missing figure"], answer: 0, explanation: "Brackets show a negative number." },
          { type: "multi", q: "Select all the uses of a cash flow forecast.", options: ["Planning", "Monitoring", "Target setting", "Calculating depreciation", "Control"], answers: [0, 1, 2, 4], explanation: "" },
          { q: "Which would improve a business's closing balance in the short term?", options: ["Delaying the purchase of a new machine", "Giving customers longer to pay", "Paying suppliers earlier", "Buying more inventory"], answer: 0, explanation: "Delaying a big outflow keeps cash in the business for now." },
          { q: "A rise in VAT on the goods a business buys will most likely:", options: ["Increase outflows and lower the closing balance", "Increase inflows only", "Have no effect", "Increase the opening balance"], answer: 0, explanation: "Higher VAT on purchases means more cash going out." },
          { q: "Why might a profitable business run out of cash?", options: ["Customers pay late or it spends heavily on assets", "Profit and cash are always the same", "It has too many cash sales", "It has no expenses"], answer: 0, explanation: "Profit isn't the same as cash in the bank." },
          { type: "order", q: "Put the steps for calculating a month's closing balance in order.", items: ["Add up total inflows", "Add up total outflows", "Take outflows from inflows to get net cash flow", "Add net cash flow to the opening balance"], explanation: "" }
        ],
        practice: [
          { id: "E1-p1", q: "Explain one impact of a rise in Value Added Tax on a cash flow forecast. (Past paper, January 2024)", marks: 2, answer: "1 mark for the impact and 1 for development, e.g.:\n- Outflows increase (1), leading to lower net cash flow or closing balance (1).\n- Lower inflows (e.g. fewer sales) (1), leading to lower net cash flow or closing balance (1).\n- Higher inflows (VAT collected on sales) (1), leading to a higher net cash flow or closing balance (1)." },
          { id: "E1-p2", q: "Identify two uses of a cash flow forecast. (Past paper, January 2026)", marks: 2, answer: "1 mark each, up to 2: planning; monitoring; control; target setting; more aware of inflows, outflows, net cash flow or closing balance; helps avoid debt or deficit." },
          { id: "E1-p3", q: "Give one benefit and one limitation of using a cash flow forecast. (Past paper, January 2024)", marks: 2, answer: "1 mark for a benefit and 1 for a limitation.\n\nBenefits: aware of all inflows and outflows; good for planning and budgeting; shows if the business will go overdrawn; can take action to avoid deficits; can be used to get finance.\n\nLimitations: it's a prediction so not always accurate; can't predict inflows and outflows exactly; owners may lack experience to interpret it; decisions may be based on inaccurate information.\n\n'Time could be spent doing other things' gets no mark." },
          { id: "E1-p4", q: "Complete Kerry's Kitchen's cash flow forecast by calculating February's total outflows, net cash flow and closing balance, and March's opening and closing balance.", table: CF_TABLE, marks: 5, suggested: true, answer: "1 mark each. Figures must show brackets or a minus sign where negative.\n- February total outflows: £13,180\n- February net cash flow: (£2,480)\n- February closing balance: (£1,680)\n- March opening balance: (£1,680)\n- March closing balance: (£1,140)" },
          { id: "E1-p5", q: "Using Kerry's Kitchen's forecast, discuss actions Kerry could take to improve her closing balances over the three months.", table: CF_TABLE, marks: 6, suggested: true, answer: "Indicative content:\n- Delay or don't buy the £7,500 asset in February: closing balances would stay positive, but she loses whatever benefit the asset would bring.\n- Use leasing or HP for the asset to spread the cost: smaller monthly outflows but higher total cost.\n- Borrow more or arrange an overdraft for February and March: covers the gap but adds interest.\n- Reduce the credit period for customers: credit sales arrive sooner, but customers may go elsewhere.\n- Raise prices or run promotions: may increase inflows, but customers may buy less or the promotion costs money first.\n- Cut costs, e.g. cheaper suppliers or fewer staff hours: lowers outflows but may affect quality or service.\n\nLevels: 5 to 6 well-developed, balanced discussion using the forecast; 3 to 4 partially developed; 1 to 2 basic description." },
          { id: "E1-p6", q: "Lucky Unlimited sells goods in a shop and online. Its cash flow forecast shows the closing balance falling from £5,000 to (£1,510) over three months. Discuss the benefits and limitations for the owner of using a cash flow forecast. (Past paper, January 2025. Scenario summarised from the mark scheme.)", marks: 6, answer: "Benefits:\n- Gives an insight into inflows and outflows.\n- As a forecast it allows changes to be made if inflows are too low or outflows too high.\n- Pinpoints times of cash shortage so adjustments can be made (increase inflows, decrease outflows).\n- Can track actual spending so differences can be dealt with.\n- Can be used in a business plan to get finance.\n\nLimitations:\n- Based on predictions, so can be unreliable.\n- Doesn't account for external changes such as the economy.\n- Only as reliable as the person who creates it; lack of experience affects it.\n- Decisions may be based on inaccurate information.\n\nLevels: 5 to 6 well-developed, balanced discussion in context; 3 to 4 partially developed, imbalanced; 1 to 2 basic description." }
        ]
      },
      {
        id: "E2",
        title: "E2 Break-even analysis",
        summary: "Fixed, variable and semi-variable costs, contribution, break-even point, margin of safety, break-even charts, and uses and limitations.",
        resources: [
          {
            type: "notes",
            title: "Key points",
            body: "Costs\n- Fixed costs: don't change with output in the short term, e.g. rent, insurance, salaries, loan interest.\n- Variable costs: change directly with output, e.g. raw materials, packaging, piece-rate wages.\n- Semi-variable costs: a fixed part plus a variable part, e.g. telephone, electricity and other utilities, vehicle costs, internet, wages with overtime.\n- Total costs = fixed costs + total variable costs. Total variable costs = variable cost per unit × units.\n\nSales\n- Total revenue (total sales) = selling price per unit × units sold.\n- Sales can be measured in units or in value (£).\n\nFormulas (not given in the exam)\n- Contribution per unit = selling price − variable cost per unit\n- Total contribution = contribution per unit × units sold (or total revenue − total variable costs)\n- Break-even point (units) = fixed costs ÷ contribution per unit\n- Break-even point (sales value) = break-even units × selling price\n- Margin of safety (units) = actual or forecast sales − break-even point\n- Margin of safety (value) = margin of safety in units × selling price\n- Profit = total contribution − fixed costs (or total revenue − total costs)\n- Units needed for a target profit = (fixed costs + target profit) ÷ contribution per unit\n\nAlways round a break-even point UP to the next whole unit: 1,666.7 units means 1,667, because selling 1,666 still makes a loss.\n\nIn the exam, write the formula in words first, then the numbers, then the answer. Each can earn marks even if the final answer is wrong.\n\nBreak-even chart\n- x-axis: output or sales (units). y-axis: costs and revenue (£).\n- Fixed costs: a horizontal line.\n- Total costs: starts where fixed costs meet the y-axis and rises.\n- Total revenue: starts at zero and rises more steeply.\n- Break-even point: where total revenue crosses total costs.\n- Area of loss: left of the break-even point, between the lines. Area of profit: to the right.\n- Margin of safety: the distance between actual sales and the break-even point.\n\nWhat changes the break-even point?\n- Higher selling price → higher contribution → lower BEP (but customers may buy less).\n- Lower variable costs → higher contribution → lower BEP (but quality may suffer).\n- Lower fixed costs → lower BEP (e.g. cheaper premises, but fewer customers or less marketing).\n\nUses: planning (is the idea viable?), what-if modelling of price or cost changes, setting sales targets, monitoring and controlling costs, supporting a loan application.\nLimitations: assumes everything made is sold; assumes selling price and variable costs stay the same (no bulk discounts or price cuts); only works for one product; based on estimates; ignores external factors such as competitors; fixed costs can change (e.g. a rent rise)."
          }
        ],
        cards: [
          ["Fixed costs", "Don't change with output, e.g. rent, insurance."],
          ["Variable costs", "Change directly with output, e.g. raw materials."],
          ["Semi-variable costs", "Fixed part plus variable part, e.g. telephone, utilities."],
          ["Contribution per unit", "Selling price − variable cost per unit."],
          ["Break-even point (units)", "Fixed costs ÷ contribution per unit."],
          ["Break-even point (value)", "Break-even units × selling price."],
          ["Margin of safety", "Actual or forecast sales − break-even point."],
          ["Profit using contribution", "Total contribution − fixed costs."],
          ["Target profit output", "(Fixed costs + target profit) ÷ contribution per unit."],
          ["Rounding the BEP", "Always round up to the next whole unit."]
        ],
        questions: [
          { type: "sort", q: "Sort each cost into fixed, variable or semi-variable.", categories: ["Fixed", "Variable", "Semi-variable"], items: [["Rent", 0], ["Insurance", 0], ["Raw materials", 1], ["Packaging", 1], ["Telephone", 2], ["Electricity", 2]], explanation: "Semi-variable costs have a fixed standing charge plus usage." },
          { type: "type", q: "A product sells for £12 and has variable costs of £5 per unit. What is the contribution per unit, in £?", accept: ["7"], explanation: "£12 − £5 = £7." },
          { type: "type", q: "Fixed costs are £8,400. The product sells for £12 with variable costs of £5 per unit. What is the break-even point in units?", accept: ["1200"], explanation: "Contribution = £7. BEP = £8,400 ÷ £7 = 1,200 units." },
          { type: "type", q: "The break-even point is 1,200 units and the selling price is £12. What is the break-even point in sales value, in £?", accept: ["14400"], explanation: "1,200 × £12 = £14,400." },
          { type: "type", q: "Forecast sales are 1,500 units and the break-even point is 1,200 units. What is the margin of safety in units?", accept: ["300"], explanation: "1,500 − 1,200 = 300 units." },
          { type: "type", q: "Contribution is £7 per unit and fixed costs are £8,400. What profit is made from selling 1,500 units, in £?", accept: ["2100"], explanation: "Total contribution 1,500 × £7 = £10,500. Profit = £10,500 − £8,400 = £2,100." },
          { type: "type", q: "Contribution is £7 per unit and fixed costs are £8,400. How many units must be sold to make a profit of £3,500?", accept: ["1700"], explanation: "(£8,400 + £3,500) ÷ £7 = 1,700 units." },
          { type: "type", q: "Fixed costs are £5,000, the selling price is £8 and variable costs are £5 per unit. What is the break-even point in units?", accept: ["1667"], explanation: "£5,000 ÷ £3 = 1,666.67, rounded UP to 1,667 units." },
          { q: "What happens to the break-even point if variable costs per unit rise?", options: ["It rises", "It falls", "It stays the same", "It becomes zero"], answer: 0, explanation: "Contribution per unit falls, so more units are needed to cover fixed costs." },
          { q: "What happens to the break-even point if the selling price rises?", options: ["It falls", "It rises", "It stays the same", "Fixed costs rise"], answer: 0, explanation: "Each unit contributes more, so fewer are needed." },
          { q: "On a break-even chart, where does the total cost line start?", options: ["At the level of fixed costs on the y-axis", "At zero", "At the break-even point", "At the margin of safety"], answer: 0, explanation: "Even at zero output the business has fixed costs." },
          { type: "multi", q: "Select all the limitations of break-even analysis.", options: ["Assumes all output is sold", "Assumes selling price stays the same", "Only works for one product", "Shows fixed and variable costs", "Based on estimates"], answers: [0, 1, 2, 4], explanation: "Showing the costs clearly is a benefit." },
          { type: "match", q: "Match each break-even term to its formula.", pairs: [["Contribution per unit", "Selling price − variable cost per unit"], ["Break-even point", "Fixed costs ÷ contribution per unit"], ["Margin of safety", "Actual sales − break-even sales"], ["Total revenue", "Selling price × units sold"]], explanation: "" }
        ],
        practice: [
          { id: "E2-p1", q: "Identify two semi-variable costs. (Past paper, January 2025)", marks: 2, answer: "1 mark each, up to 2: telephone; electricity, gas, water or other utilities; vehicle expenses; internet fees; wages or salaries (with overtime)." },
          { id: "E2-p2", q: "Identify two figures that could be used to calculate the break-even point. (Past paper, January 2025)", marks: 2, answer: "1 mark each, up to 2: fixed costs; selling price; variable costs; contribution; total revenue; total cost; quantity or output sold." },
          { id: "E2-p3", q: "A new business sells boxes of cakes for £6 each. Variable costs are £2 per box and fixed costs are £5,500 per month. Calculate the break-even point. (Past paper, June 2024. Figures from the mark scheme.)", marks: 4, answer: "4 marks for 1,375 boxes per month.\n\nOtherwise:\n- 3 marks for the formula in numbers: BEP = £5,500 ÷ (£6 − £2) or £5,500 ÷ £4\n- OR 1 mark for the contribution of £4 AND 1 mark for the formula in words: break-even point = fixed costs ÷ (selling price − variable costs), or FC ÷ contribution per unit." },
          { id: "E2-p4", q: "The cake business forecasts sales of 1,500 boxes in November. Using your break-even point, calculate the margin of safety in November. (Past paper, June 2024. Figures from the mark scheme.)", marks: 2, answer: "2 marks for 125 boxes (accept your own break-even figure carried forward).\n\nOtherwise 1 mark for the formula in words (margin of safety = estimated sales − break-even point) or in numbers (1,500 − 1,375)." },
          { id: "E2-p5", q: "The cake business forecasts monthly sales of between 500 and 1,500 boxes from June to November, below the break-even point of 1,375 boxes in most months. Discuss actions the owner could take to improve the break-even point of her new business. (Past paper, June 2024. Scenario summarised from the mark scheme.)", marks: 6, answer: "Indicative content:\n- Increase the selling price, so contribution per unit is higher. But customers may not buy at the higher price.\n- Reduce variable costs, e.g. cheaper ingredients or packaging, increasing contribution. But quality may suffer, harming reputation and sales.\n- Reduce fixed costs, e.g. not locating in the city centre. But there may be fewer customers, staff or less advertising, harming long-term success.\n- A new business may struggle to cut costs early because start-up costs are high.\n- Estimated sales from June to October are below the 1,375 break-even point.\n- It may be unwise to try to lower the BEP straight away; new businesses often aim to break even in the longer term.\n\nLevels: 5 to 6 well-developed, balanced discussion in context; 3 to 4 partially developed, imbalanced; 1 to 2 basic description." },
          { id: "E2-p6", q: "Quality Threads Ltd makes carpets. Each carpet sells for £2,600 with variable costs of £570. Fixed costs are £6,090. Calculate the break-even point. (Past paper, January 2026. Figures from the mark scheme.)", marks: 4, answer: "4 marks for 3 carpets.\n\nOtherwise:\n- 3 marks for the formula in numbers: £6,090 ÷ (£2,600 − £570) or £6,090 ÷ £2,030\n- OR 1 mark for fixed costs of £6,090 AND 1 mark for contribution of £2,030\n- OR 1 mark for the formula in words: BEP = fixed costs ÷ (selling price − variable costs)." },
          { id: "E2-p7", q: "Quality Threads Ltd is thinking of launching a premium carpet range using high-quality raw materials, selling at £5,000 per roll. Discuss the advantages and disadvantages of break-even analysis for Quality Threads Ltd. (Past paper, January 2026. Scenario summarised from the mark scheme.)", marks: 6, answer: "Advantages:\n- Shows fixed and variable costs, so the impact of the premium range and higher variable costs can be analysed.\n- Allows 'what if' modelling, e.g. the £5,000 selling price.\n- Useful for planning different prices and variable costs.\n- Helps set targets and judge whether the premium range will improve profit.\n- Can help secure finance.\n- Helps monitor and control costs and revenue.\n\nDisadvantages:\n- Based on predictions; customers may not pay £5,000 per roll.\n- Assumes all carpets are sold.\n- Ignores future changes in the cost of high-quality raw materials.\n- Ignores external factors, e.g. competitors launching their own premium range.\n- Only as reliable as the person who creates it.\n- Only applies to one product.\n\nLevels: 5 to 6 well-developed, balanced discussion in context; 3 to 4 partially developed, imbalanced; 1 to 2 basic description." }
        ]
      }
    ]
  });
})();
