'use client';
import { useEffect, useState, useMemo } from 'react';

// --- Professional SVG Icon Components --- //
function IconDailyWorkout() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconAccounting() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.314 0-6 1.79-6 4s2.686 4 6 4 6-1.79 6-4-2.686-4-6-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 14v1" />
    </svg>
  );
}
function IconValuation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l3-3 4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11l3-3" />
    </svg>
  );
}
function IconDCF() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h2m16 0h2M12 2v2m0 16v2" />
    </svg>
  );
}
function IconMA() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l3 6-3 6-3-6 3-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12" />
    </svg>
  );
}
function IconLBO() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}
function IconBrainTeaser() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2h2v2H7a2 2 0 00-2 2v2a2 2 0 002 2h2v2" />
    </svg>
  );
}
function IconPerformance() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m-3-9a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
  );
}
function IconNotifications() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
    </svg>
  );
}
function IconMore() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zM10 4a2 2 0 100 4 2 2 0 000-4zm0 12a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

// Modules Data using professional icons.
const modulesData = [
  { name: 'Daily Workout', color: 'bg-[#FFA500]', icon: <IconDailyWorkout /> },
  { name: 'Accounting', color: 'bg-[#17848E]', icon: <IconAccounting /> },
  { name: 'Valuation', color: 'bg-[#2D2E82]', icon: <IconValuation /> },
  { name: 'Discounted Cash Flow', color: 'bg-[#FF5733]', icon: <IconDCF /> },
  { name: 'M&A', color: 'bg-[#7D1E6A]', icon: <IconMA /> },
  { name: 'LBO', color: 'bg-[#F4A300]', icon: <IconLBO /> },
  { name: 'Brain Teaser', color: 'bg-[#4CAF50]', icon: <IconBrainTeaser /> }
];

// QUESTIONS OBJECT – (Same as before; omitted here for brevity)
const questions = {
  Accounting: {
    Basic: [
      { question: "Which of the following correctly lists the three major financial statements?", choices: ["Income Statement, Cash Flow Statement, Equity Statement", "Balance Sheet, Cash Flow Statement, Statement of Capital", "Income Statement, Balance Sheet, Cash Flow Statement", "Income Statement, Profit & Loss Statement, Balance Sheet"], answer: 2 },
      { question: "Which of these is NOT a line item on an Income Statement?", choices: ["Cost of Goods Sold", "Inventory", "Revenue", "Net Income"], answer: 1 },
      { question: "On which statement does Net Income directly appear as the starting point?", choices: ["Balance Sheet", "Cash Flow Statement", "Equity Statement", "Statement of Capital"], answer: 1 },
      { question: "If you could only use one financial statement to assess a company’s health, which should it be and why?", choices: ["Income Statement, because it shows net profit.", "Balance Sheet, because it lists all assets and liabilities.", "Cash Flow Statement, because it shows actual cash generated.", "Equity Statement, because it details ownership changes."], answer: 2 },
      { question: "Depreciation increasing by $10 affects the Income Statement by:", choices: ["Decreasing Operating Income by $10", "Increasing Net Income by $10", "Decreasing Operating Income by $4", "Increasing Operating Income by $6"], answer: 0 },
      { question: "An increase in Accrued Compensation by $10 results in:", choices: ["Cash Flow from Operations increasing by $10", "Assets decreasing by $4", "Net Income increasing by $6", "Shareholders' Equity increasing by $10"], answer: 0 },
      { question: "If Inventory goes up by $10 (paid with cash), what happens to cash flow?", choices: ["Increases by $10", "Decreases by $10", "No change", "Decreases by $6"], answer: 1 },
      { question: "When Apple buys $100 of factories with debt at the start of Year 1, what changes immediately?", choices: ["Cash decreases by $100", "Debt decreases by $100", "PP&E increases by $100", "Net Income decreases by $100"], answer: 2 },
      { question: "After one year with 10% depreciation and interest on $100 debt, assuming a 40% tax rate, Net Income decreases by:", choices: ["$10", "$20", "$12", "$8"], answer: 2 },
      { question: "Negative shareholders’ equity might indicate:", choices: ["Immediate bankruptcy", "Consistent losses or dividend recapitalizations", "Increase in cash flow", "Higher profitability"], answer: 1 }
    ],
    Advanced: [
      { question: "GAAP accounting differs from tax accounting primarily because:", choices: ["GAAP is cash-based and tax accounting is accrual-based.", "GAAP uses accelerated depreciation methods, while tax accounting uses straight-line.", "GAAP is accrual-based and tax accounting is cash-based.", "Tax accounting more accurately tracks long-term liabilities."], answer: 2 },
      { question: "Deferred Tax Liabilities typically arise when:", choices: ["You have already paid taxes in cash but haven't expensed them yet.", "There are temporary differences causing taxes expensed but not yet paid.", "You pay fewer taxes due to immediate cash payments.", "Asset values are written down during M&A transactions."], answer: 1 },
      { question: "When creating a revenue model, the more reliable method generally considered is:", choices: ["Top-down approach", "Market-driven approach", "Bottom-up approach", "Competitor-based approach"], answer: 2 },
      { question: "A bottom-up expense model typically starts with:", choices: ["Overall revenue projections.", "Number of departments and employees.", "Cost of capital expenditures.", "Future market trends."], answer: 1 },
      { question: "What is NOT commonly included in Shareholders' Equity?", choices: ["Retained Earnings", "Common Stock", "Treasury Stock", "Interest Payable"], answer: 3 },
      { question: "Retained Earnings is calculated as:", choices: ["Revenue – Expenses + Dividends", "Last year's balance + Net Income – Dividends", "Common stock + Additional Paid-in Capital", "Net Income + Dividends"], answer: 1 },
      { question: "What would increase Additional Paid-In Capital (APIC)?", choices: ["Dividend Payments", "Treasury stock repurchases", "Stock-based compensation and option exercises", "Depreciation of assets"], answer: 2 },
      { question: "An example of a non-recurring charge that should be added back to EBITDA is:", choices: ["Depreciation", "Stock-based compensation", "Restructuring charges", "Regular annual bonuses"], answer: 2 },
      { question: "To project Accounts Receivable in a financial model, one typically uses:", choices: ["% of Revenue", "% of Operating Expenses", "% of Cost of Goods Sold", "% of Capital Expenditures"], answer: 0 },
      { question: "Net Operating Losses (NOLs) primarily affect financial statements by:", choices: ["Increasing cash taxes immediately", "Decreasing taxable income, reducing cash taxes, and increasing Deferred Tax Liabilities", "Reducing revenue in future periods", "Increasing current operating expenses"], answer: 1 }
    ]
  },
  Valuation: {
    Basic: [
      { question: "Why do analysts consider both Enterprise Value and Equity Value?", choices: ["Equity Value shows market value, while Enterprise Value shows book value.", "Enterprise Value includes debt, whereas Equity Value does not.", "Equity Value is for creditors, Enterprise Value is for shareholders.", "Enterprise Value always equals Equity Value."], answer: 1 },
      { question: "Which of these correctly represents the Enterprise Value formula?", choices: ["Equity Value + Cash – Debt + Minority Interest", "Equity Value + Debt – Cash + Preferred Stock + Minority Interest", "Equity Value – Debt + Cash + Preferred Stock", "Equity Value – Minority Interest – Debt + Cash"], answer: 1 },
      { question: "You subtract cash in calculating Enterprise Value because:", choices: ["It reduces the price an acquirer effectively pays.", "Cash represents future revenue.", "Debt is always greater than cash.", "Cash increases liabilities."], answer: 0 },
      { question: "Which of the following securities uses the Treasury Stock Method when calculating diluted shares?", choices: ["Convertible bonds", "Preferred Stock", "Warrants and options", "Debt"], answer: 2 },
      { question: "What could result in a negative Enterprise Value?", choices: ["Extremely low debt levels", "High equity valuation", "Extremely high cash balances", "High preferred stock values"], answer: 2 },
      { question: "Why do we add Preferred Stock to Enterprise Value?", choices: ["It's more similar to common stock.", "It pays fixed dividends and is similar to debt.", "It lowers total Enterprise Value.", "It's a mandatory cash balance."], answer: 1 },
      { question: "Convertible bonds are treated as debt when:", choices: ["Their conversion price is below the current share price.", "Their conversion price is equal to the current share price.", "Their conversion price is above the current share price.", "The bonds are newly issued."], answer: 2 },
      { question: "Shareholders’ Equity is different from Equity Value because:", choices: ["Shareholders' Equity represents market value.", "Equity Value reflects book value.", "Shareholders' Equity is a market valuation metric.", "Equity Value represents market value; Shareholders’ Equity represents book value."], answer: 3 },
      { question: "A higher dilution percentage in Equity Value calculations (greater than 10%) is considered:", choices: ["Typical and expected", "Unusual and may require additional review", "Impossible", "Beneficial to shareholders"], answer: 1 },
      { question: "When valuing a company for acquisition, analysts primarily consider:", choices: ["Equity Value, since it reflects market value.", "Enterprise Value, as it includes debt repayment obligations.", "Shareholders' Equity, for accounting accuracy.", "Market capitalization alone."], answer: 1 }
    ],
    Advanced: [
      { question: "When valuing banks and financial institutions, analysts typically use:", choices: ["EV/EBITDA multiples", "Dividend Discount Models (DDM) and P/E multiples", "Price-to-sales ratios", "Standard DCF models"], answer: 1 },
      { question: "The correct formula for calendarizing financial statements to Trailing Twelve Months (TTM) is:", choices: ["TTM = Most Recent Quarter - Old Partial Period", "TTM = Most Recent Fiscal Year + New Partial Period – Old Partial Period", "TTM = Most Recent Fiscal Year + Most Recent Quarter", "TTM = Old Partial Period + New Partial Period"], answer: 1 },
      { question: "What is unique about IPO valuations compared to standard valuations?", choices: ["They always use precedent transactions.", "Only public company comparables are typically used.", "They rely primarily on DCF analysis.", "IPO proceeds are ignored."], answer: 1 },
      { question: "An M&A premiums analysis specifically requires that the sellers must be:", choices: ["Private companies", "Public companies", "International companies", "Subsidiaries of larger corporations"], answer: 1 },
      { question: "Future share price analysis involves:", choices: ["Projecting dividends and discounting them to present value.", "Using historical P/E multiples on projected EPS and discounting to present value.", "Using EV/EBITDA multiples exclusively.", "Valuing only private companies."], answer: 1 },
      { question: "A Sum-of-the-Parts (SOTP) analysis is most useful when a company:", choices: ["Has a single major revenue stream", "Operates in one geographic location", "Has multiple, diverse business units", "Is newly formed and private"], answer: 2 },
      { question: "In valuations, Net Operating Losses (NOLs) are typically:", choices: ["Added directly to Enterprise Value", "Valued based on future tax savings and discounted to present value", "Completely ignored", "Considered as part of debt obligations"], answer: 1 },
      { question: "How do you handle missing EBITDA figures in precedent transactions?", choices: ["Only use transactions with complete financial data.", "Estimate from press releases, equity research, or financial databases.", "Omit EBITDA from analysis entirely.", "Substitute EBIT for EBITDA."], answer: 1 },
      { question: "Which of the following multiples would you primarily use to value an oil & gas company?", choices: ["EV / Revenue", "P / MCFE and P / NAV", "Price-to-Earnings", "EV / EBITDA"], answer: 1 },
      { question: "For valuing a Real Estate Investment Trust (REIT), analysts typically use:", choices: ["Price / FFO and NAV", "EV / EBITDA exclusively", "Price-to-Sales", "Dividend Discount Model (DDM)"], answer: 0 }
    ]
  },
  "Discounted Cash Flow": {
    Basic: [
      { question: "A Discounted Cash Flow (DCF) valuation primarily relies on:", choices: ["Historical earnings", "Present Value of future cash flows and Terminal Value", "Book value of equity", "Dividend payments only"], answer: 1 },
      { question: "What is typically used as the discount rate in a DCF model?", choices: ["Cost of Equity only", "Weighted Average Cost of Capital (WACC)", "Cost of Debt only", "Risk-Free Rate"], answer: 1 },
      { question: "The standard formula to calculate the Weighted Average Cost of Capital (WACC) includes:", choices: ["Equity, Debt, Preferred Stock proportions, and their respective costs", "Equity and Debt proportions only", "Equity Risk Premium alone", "Tax Rate and Equity Cost only"], answer: 0 },
      { question: "To calculate Cost of Equity using the Capital Asset Pricing Model (CAPM), the correct formula is:", choices: ["Risk-Free Rate + Debt Premium", "Risk-Free Rate + Beta × Equity Risk Premium", "Beta × Risk-Free Rate", "Equity Risk Premium – Beta"], answer: 1 },
      { question: "Unlevering and re-levering Beta is necessary because:", choices: ["It simplifies the DCF calculation.", "Each company has a different capital structure, affecting Beta.", "Levered Beta is irrelevant to Cost of Equity.", "It removes all market risk."], answer: 1 },
      { question: "Levered Free Cash Flow provides valuation for:", choices: ["Enterprise Value", "Debt Holders Only", "Equity Value", "Preferred Stock Holders Only"], answer: 2 },
      { question: "Which method is generally preferred for calculating Terminal Value in banking?", choices: ["Gordon Growth Model", "Multiples Method", "Dividend Discount Model", "Cost of Equity Method"], answer: 1 },
      { question: "In calculating Terminal Value using Gordon Growth, an appropriate growth rate typically would be:", choices: ["Significantly higher than GDP growth", "Equivalent to historical stock market returns", "The country’s long-term GDP growth or inflation rate", "Zero percent"], answer: 2 },
      { question: "Which change typically has the larger impact on a DCF valuation?", choices: ["10% change in projected revenue", "1% change in discount rate", "1% increase in tax rate", "5% increase in depreciation"], answer: 0 },
      { question: "Dividend yield is already reflected in:", choices: ["WACC calculation", "Beta within the CAPM formula", "Terminal value calculation", "Risk-free rate"], answer: 1 }
    ],
    Advanced: [
      { question: "Why is the mid-year convention used in a DCF?", choices: ["To simplify calculations", "Because cash flows arrive evenly throughout the year", "To inflate valuations artificially", "To ignore discounting completely"], answer: 1 },
      { question: "With the mid-year convention, the discount period for Year 2 cash flow is:", choices: ["0.5", "1", "1.5", "2"], answer: 2 },
      { question: "When using mid-year convention, how does the discount period change for Terminal Value calculated using the Multiples Method?", choices: ["It remains the same", "You subtract 0.5 from the final year", "You add 0.5 to the final year", "You double the final year"], answer: 2 },
      { question: "How is a public company's per-share value calculated after determining Enterprise Value in a DCF?", choices: ["Subtract debt and cash from Enterprise Value, ignoring dilution", "Add cash, subtract debt, preferred stock, minority interest, and calculate dilution iteratively", "Use Enterprise Value divided by basic shares outstanding directly", "Only subtract debt from Enterprise Value"], answer: 1 },
      { question: "In a Dividend Discount Model (DDM), the discount rate typically used is:", choices: ["WACC", "Cost of Debt", "Cost of Equity", "Risk-Free Rate"], answer: 2 },
      { question: "Convertible debt should be considered equity (rather than debt) in WACC calculations when:", choices: ["It is out-of-the-money", "It has recently been issued", "It is in-the-money", "The company has high overall debt"], answer: 2 },
      { question: "If a company plans significant CapEx in Year 4, how does this affect the DCF valuation?", choices: ["No effect on Enterprise Value", "Enterprise Value increases immediately", "Enterprise Value decreases by the present value of the CapEx", "Enterprise Value doubles"], answer: 2 },
      { question: "Why might iterative calculations be necessary in Excel when calculating per-share value in a DCF for a public company?", choices: ["To correctly account for dilution from convertible securities and options", "Because WACC changes each year", "To include taxes on dividends", "Due to fluctuating market values"], answer: 0 },
      { question: "In the Gordon Growth Method for terminal value calculation with mid-year convention, the final year discount period is:", choices: ["Reduced by 0.5", "Increased by 0.5", "Used as is without adjustment", "Doubled"], answer: 2 },
      { question: "How is a stub period discount period handled in a mid-year convention DCF model?", choices: ["It is ignored completely", "Use the full stub period without adjustment", "Divide the stub period by two", "Add a full year to the stub period"], answer: 2 }
    ]
  },
  "M&A": {
    Basic: [
      { question: "A merger model primarily helps determine:", choices: ["The tax benefits of a merger", "If the buyer’s EPS increases or decreases post-acquisition", "The impact on debt covenants", "Management compensation"], answer: 1 },
      { question: "In a merger, typically the buyer and seller:", choices: ["Are drastically different sizes", "Are similar in size", "Must both be private companies", "Always have different industries"], answer: 1 },
      { question: "Which of these is NOT a typical reason for an acquisition?", choices: ["To acquire critical technology or IP", "To gain market share", "To decrease revenue and increase expenses", "To acquire new customers"], answer: 2 },
      { question: "An acquisition is dilutive when:", choices: ["The seller’s net income outweighs the costs of financing", "The buyer issues fewer shares than expected", "Additional net income from the seller does not offset acquisition costs", "The seller has higher EBITDA margins than the buyer"], answer: 2 },
      { question: "Which is true for an all-stock deal regarding accretion and dilution?", choices: ["If the buyer's P/E is lower than the seller's, it's accretive.", "If the buyer’s P/E is higher than the seller's, it's accretive.", "P/E ratios don't matter for stock deals.", "Accretion or dilution is unaffected by P/E ratios."], answer: 1 },
      { question: "Which of the following are typical acquisition effects?", choices: ["Decreased interest payments", "Fewer shares outstanding", "Creation of Goodwill & Other Intangibles", "Decreased debt"], answer: 2 },
      { question: "Why might a company with ample cash still choose not to pay cash in an acquisition?", choices: ["Cash always increases the transaction cost", "Debt financing is always cheaper", "To preserve liquidity for future uncertainty", "To increase immediate tax liabilities"], answer: 2 },
      { question: "Strategic acquirers typically pay more than private equity firms due to:", choices: ["Lower valuations required by shareholders", "Lack of competitive pressure", "Ability to realize revenue and cost synergies", "Preference for cash transactions"], answer: 2 },
      { question: "The primary difference between Goodwill and Other Intangible Assets is that:", choices: ["Goodwill is amortized, Other Intangibles are not", "Goodwill remains stable unless impaired; Other Intangibles are amortized", "Both are amortized over the same period", "Goodwill always represents physical assets"], answer: 1 },
      { question: "Which type of synergy is typically considered more realistic in mergers and acquisitions?", choices: ["Revenue synergies", "Cost synergies", "Technological synergies", "Geographic synergies"], answer: 1 }
    ],
    Advanced: [
      { question: "In an M&A deal using purchase accounting:", choices: ["Shareholders' equity numbers combine directly", "The seller's equity is wiped out and Goodwill is recorded", "Only tangible assets combine", "Intangible assets are ignored"], answer: 1 },
      { question: "Revenue synergies are typically calculated by:", choices: ["Estimating incremental revenue from improved business performance", "Multiplying the total number of employees by average salary", "Ignoring potential future benefits completely", "Reducing costs related to redundant processes"], answer: 0 },
      { question: "Allowable NOL usage in an acquisition under Section 382 is calculated as:", choices: ["Seller’s NOL balance multiplied by tax rate", "Seller’s total assets divided by purchase price", "Equity Purchase Price multiplied by the highest past 3-month adjusted long-term rate", "Debt issued multiplied by tax rate"], answer: 2 },
      { question: "Deferred Tax Liabilities (DTLs) in M&A deals are created when:", choices: ["Assets are written down", "Assets are written up", "NOLs are fully used", "Debt is repaid"], answer: 1 },
      { question: "What happens to Deferred Tax Assets (DTAs) and Deferred Tax Liabilities (DTLs) in an asset purchase?", choices: ["Both are significantly increased", "Neither are created, since book and tax bases align", "DTLs increase, DTAs decrease", "DTAs increase, DTLs decrease"], answer: 1 },
      { question: "The complete formula for calculating Goodwill in an M&A deal is:", choices: ["Equity Purchase Price – Seller Book Value", "Equity Purchase Price + Seller Book Value + Existing Goodwill", "Equity Purchase Price – Seller Book Value + Existing Goodwill – Asset Write-Ups – Existing DTL + DTA Write-Down + New DTL", "Purchase Price – Debt"], answer: 2 },
      { question: "Section 338(h)(10) elections in M&A deals are advantageous because they:", choices: ["Avoid taxation completely for the seller", "Provide the buyer with a step-up tax basis for depreciating assets", "Treat the transaction purely as stock for accounting purposes", "Eliminate all goodwill"], answer: 1 },
      { question: "An exchange ratio in an all-stock M&A deal defines:", choices: ["A fixed dollar amount the seller receives", "The number of buyer’s shares the seller receives per share owned", "The total cash value exchanged in the transaction", "The debt issued by the buyer"], answer: 1 },
      { question: "An Earnout in M&A transactions primarily serves to:", choices: ["Immediately reduce the purchase price", "Guarantee future revenue synergies", "Incentivize sellers to achieve future financial goals", "Transfer tax liabilities to the buyer"], answer: 2 },
      { question: "In accounting for transaction and financing fees under current rules:", choices: ["Both are fully capitalized and amortized", "Transaction fees are expensed immediately; financing fees are capitalized and amortized", "Both are expensed immediately", "Both are ignored"], answer: 1 }
    ]
  },
  LBO: {
    Basic: [
      { question: "What is the first step in an LBO model?", choices: ["Calculate interest payments", "Adjust balance sheet items", "Make assumptions about Purchase Price, Debt/Equity, and Interest Rate", "Determine the exit strategy"], answer: 2 },
      { question: "The primary reason a private equity firm uses leverage (debt) in an LBO is to:", choices: ["Reduce operational risk", "Boost returns by reducing equity contribution", "Increase cash holdings", "Avoid taxation"], answer: 1 },
      { question: "Which variables typically impact LBO returns the most?", choices: ["Capital expenditure levels", "Purchase and exit multiples", "Revenue growth alone", "Operating margin alone"], answer: 1 },
      { question: "An ideal candidate for an LBO would typically have:", choices: ["Highly cyclical revenue streams", "High ongoing capital expenditures", "Stable and predictable cash flows", "High operational risks"], answer: 2 },
      { question: "An LBO model sets the \"floor valuation\" because:", choices: ["It always produces the highest valuation", "It calculates the maximum strategic value", "PE firms typically pay less than strategic buyers", "It ignores cash flow projections"], answer: 2 },
      { question: "Goodwill and Other Intangible Assets in an LBO primarily serve as:", choices: ["Assets to be depreciated immediately", "Liabilities on the Balance Sheet", "A plug to balance the adjustments in the Balance Sheet", "Additional cash flow"], answer: 2 },
      { question: "Why might a PE firm prefer debt financing even if it seems more expensive than cash financing?", choices: ["Debt is owned by the PE firm, increasing their control", "Debt increases taxation significantly", "Debt allows them to use less of their own capital upfront", "Debt immediately improves the target’s credit rating"], answer: 2 },
      { question: "Which statement about debt used in LBOs is correct?", choices: ["High-yield debt has lower interest rates than bank debt.", "Bank debt usually has fixed interest rates.", "High-yield debt often has incurrence covenants.", "Bank debt principal is always paid entirely at the end."], answer: 2 },
      { question: "A dividend recapitalization is best described as:", choices: ["A company buying back shares with cash", "Issuing new debt specifically to pay dividends to PE investors", "Reducing dividends to reinvest in business growth", "Refinancing existing debt without dividend distributions"], answer: 1 },
      { question: "How does a dividend recapitalization impact financial statements in an LBO?", choices: ["Decreases net income immediately", "Increases both cash flow and net income", "Increases debt, reduces shareholders' equity, no net cash change", "Increases cash from operations"], answer: 2 }
    ],
    Advanced: [
      { question: "In terms of seniority in a bankruptcy scenario, which debt holder typically gets paid first?", choices: ["Senior unsecured", "Senior secured", "Senior subordinated", "Equity investors"], answer: 1 },
      { question: "\"Floating\" interest rates in LBO debt are usually tied to:", choices: ["LIBOR", "Prime rate", "Fixed at issuance", "U.S. Treasury rate"], answer: 0 },
      { question: "How does Payment In Kind (PIK) debt typically affect the financial statements?", choices: ["Interest is paid in cash and reduces EBITDA", "Interest accrues to the principal; interest expense is non-cash", "No interest expense is recognized", "Principal repayments begin immediately"], answer: 1 },
      { question: "Which of these is an example of a maintenance covenant?", choices: ["Company cannot take on more than $2 billion of total debt", "EBITDA / Interest Expense cannot fall below 5.0x", "Proceeds from asset sales must repay debt", "Company cannot acquire assets above $200 million"], answer: 1 },
      { question: "Section 338(h)(10) elections in an LBO are typically not possible because:", choices: ["The buyer must be an LLC", "The buyer must be a C corporation, and PE firms often use LLCs", "The seller must be a private company", "The purchase must be all-stock"], answer: 1 },
      { question: "How do you typically calculate IRR for debt investors in an LBO?", choices: ["Only initial principal repayment matters", "Consider both principal and interest payments as cash flows", "Only interest payments are included", "Debt IRR is always fixed and not calculated"], answer: 1 },
      { question: "A revolver in an LBO model is typically used when:", choices: ["The cash required for mandatory debt repayments exceeds available cash flow", "Optional debt repayments are too high", "Interest payments are too low", "Cash flow exceeds mandatory repayments significantly"], answer: 0 },
      { question: "In an LBO model, management equity option pools are primarily used to:", choices: ["Reduce the purchase price", "Decrease interest expenses", "Incentivize management performance", "Increase leverage"], answer: 2 },
      { question: "Which adjustment on the Income Statement in an LBO model typically impacts Pre-Tax Income directly?", choices: ["Depreciation from PP&E write-ups", "Amortization from capitalized financing fees", "Interest Expense on LBO Debt", "Cost Savings from layoffs"], answer: 2 },
      { question: "Increasing leverage in an LBO can occasionally reduce IRR if:", choices: ["The purchase multiple is very low", "Cash flow growth is very high", "Interest and principal repayments become excessively high relative to cash flow", "Exit multiples significantly increase"], answer: 2 }
    ]
  },
  "Brain Teaser": [
    { question: "A car drives 60 miles at an average speed of 30 miles per hour. To travel the same 60 miles in the same amount of time at an average speed of 60 mph, how fast must the car drive?", choices: ["90 mph", "120 mph", "It's impossible", "60 mph"], answer: 2 },
    { question: "What is the angle formed by the hands of a clock at 1:45?", choices: ["120 degrees", "142.5 degrees", "135 degrees", "90 degrees"], answer: 1 },
    { question: "What is the greatest dollar value in coins you can hold without being able to make change for exactly $1.00 using quarters, dimes, nickels, and pennies?", choices: ["$1.25", "$1.19", "$0.99", "$1.24"], answer: 1 },
    { question: "Using a 3-liter bucket and a 5-liter bucket, how do you measure exactly 4 liters of water?", choices: ["Fill the 3-liter bucket twice", "Fill the 5-liter bucket halfway", "Fill the 3-liter bucket, transfer to the 5-liter bucket, refill the 3-liter bucket, and transfer until the 5-liter bucket is full, leaving 1 liter in the 3-liter bucket. Empty the 5-liter bucket, transfer the remaining 1 liter, then refill the 3-liter bucket and add it to the 5-liter bucket.", "It's impossible with these buckets"], answer: 2 }
  ]
};

// Daily Workout: aggregate 4 random questions from the Basic category of each subject (excluding Brain Teaser)
const dailyWorkoutSubjects = ["Accounting", "Valuation", "Discounted Cash Flow", "M&A", "LBO"];
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// PERFORMANCE TRACKING
function updateSubjectPerformance(subject, score, total, setPerformanceData) {
  let perf = JSON.parse(localStorage.getItem("subjectPerformance") || "{}");
  if (!perf[subject]) {
    perf[subject] = { quizzes: 0, totalQuestions: 0, totalCorrect: 0 };
  }
  perf[subject].quizzes += 1;
  perf[subject].totalQuestions += total;
  perf[subject].totalCorrect += score;
  localStorage.setItem("subjectPerformance", JSON.stringify(perf));
  setPerformanceData(perf);
}

function PerformanceTracer({ performanceData }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2 text-gray-800">Performance Tracker</h2>
      {Object.keys(performanceData).length === 0 ? (
        <p className="text-gray-600">No performance data yet.</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Subject</th>
              <th className="py-2">Quizzes</th>
              <th className="py-2">Total Qs</th>
              <th className="py-2">Correct</th>
              <th className="py-2">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(performanceData).map((subject) => {
              const data = performanceData[subject];
              const accuracy = ((data.totalCorrect / data.totalQuestions) * 100).toFixed(1);
              return (
                <tr key={subject} className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">{subject}</td>
                  <td className="py-2 text-gray-700">{data.quizzes}</td>
                  <td className="py-2 text-gray-700">{data.totalQuestions}</td>
                  <td className="py-2 text-gray-700">{data.totalCorrect}</td>
                  <td className="py-2 text-gray-700">{accuracy}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default function FinancePrepApp() {
  // Active Tab: "Training", "Performance", "News", "Notifications", "More"
  const [activeTab, setActiveTab] = useState("Training");
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [xpBoost, setXpBoost] = useState(false);
  const [performanceData, setPerformanceData] = useState({});
  const [performanceRecorded, setPerformanceRecorded] = useState(false);
  const [news, setNews] = useState([]);
  const today = new Date().toDateString();

  // Load performance data on mount
  useEffect(() => {
    const storedPerf = JSON.parse(localStorage.getItem("subjectPerformance") || "{}");
    setPerformanceData(storedPerf);
  }, []);

  // Load streak and XP from localStorage
  useEffect(() => {
    const lastLogin = localStorage.getItem('lastWorkoutDate');
    if (lastLogin !== today) {
      localStorage.setItem('lastWorkoutDate', today);
      setStreak((prev) => (lastLogin ? prev + 1 : 1));
    } else {
      const savedStreak = localStorage.getItem('streak');
      if (savedStreak) setStreak(Number(savedStreak));
    }
    const savedXp = localStorage.getItem('xp');
    if (savedXp) setXp(Number(savedXp));
  }, [today]);

  useEffect(() => {
    localStorage.setItem('streak', streak.toString());
    localStorage.setItem('xp', xp.toString());
  }, [streak, xp]);

  // Memoize aggregated Daily Workout quiz so it's stable
  const aggregatedDailyWorkout = useMemo(() => {
    if (selectedModule && selectedModule.name === "Daily Workout") {
      let agg = [];
      dailyWorkoutSubjects.forEach((sub) => {
        const basicQuestions = questions[sub]?.Basic;
        if (basicQuestions && basicQuestions.length >= 4) {
          const shuffled = shuffleArray([...basicQuestions]);
          agg = agg.concat(shuffled.slice(0, 4));
        }
      });
      return shuffleArray(agg);
    }
    return null;
  }, [selectedModule]);

  // Memoize subjectQuestions based on selected module
  const subjectQuestionsMemo = useMemo(() => {
    if (selectedModule) {
      if (selectedModule.name === "Daily Workout") {
        return aggregatedDailyWorkout;
      } else {
        return questions[selectedModule.name];
      }
    }
    return null;
  }, [selectedModule, aggregatedDailyWorkout]);

  const hasCategories =
    subjectQuestionsMemo &&
    typeof subjectQuestionsMemo === "object" &&
    !Array.isArray(subjectQuestionsMemo);

  // Memoize currentQuiz to avoid unnecessary recomputations
  const currentQuiz = useMemo(() => {
    if (hasCategories && selectedCategory) {
      return subjectQuestionsMemo[selectedCategory];
    } else if (!hasCategories && subjectQuestionsMemo) {
      return subjectQuestionsMemo;
    }
    return [];
  }, [hasCategories, selectedCategory, subjectQuestionsMemo]);

  const currentQ = currentQuiz[qIndex];

  // Simulate fetching news headlines (in a real app, use an API)
  useEffect(() => {
    if (activeTab === "News") {
      setNews([
        "Tech stocks soar amid market rally",
        "Federal Reserve hints at interest rate changes",
        "Oil prices spike as geopolitical tensions rise",
        "Major merger shakes up the financial sector"
      ]);
    }
  }, [activeTab]);

  const handleChoice = (choiceIndex) => {
    setSelectedChoice(choiceIndex);
    setShowResult(true);
    if (choiceIndex === currentQ.answer) {
      setScore((prev) => prev + 1);
      setXp((prev) => prev + 10);
      setXpBoost(true);
      setTimeout(() => setXpBoost(false), 700);
    }
    setTimeout(() => {
      setShowResult(false);
      setSelectedChoice(null);
      setQIndex((q) => (q + 1 < currentQuiz.length ? q + 1 : -1));
    }, 1200);
  };

  // Update performance when quiz completes for non-Daily Workout and non-Brain Teaser subjects.
  useEffect(() => {
    if (
      selectedModule &&
      qIndex === -1 &&
      !performanceRecorded &&
      selectedModule.name !== "Daily Workout" &&
      selectedModule.name !== "Brain Teaser"
    ) {
      updateSubjectPerformance(selectedModule.name, score, currentQuiz.length, setPerformanceData);
      setPerformanceRecorded(true);
    }
  }, [qIndex, performanceRecorded, selectedModule, score, currentQuiz]);

  const reset = () => {
    setSelectedModule(null);
    setSelectedCategory(null);
    setQIndex(0);
    setSelectedChoice(null);
    setShowResult(false);
    setScore(0);
    setPerformanceRecorded(false);
  };

  const StreakDots = () => (
    <div className="flex justify-start gap-1 mt-1">
      {[...Array(7)].map((_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full ${i < streak ? 'bg-gray-800' : 'bg-gray-300'}`} />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      {/* Main Container */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex items-center p-6 border-b border-gray-200">
          <div
            className="w-14 h-14 flex items-center justify-center text-white rounded-full"
            style={{
              backgroundColor: '#2D2E82',
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v2H7v4h2v2h6v-2h2v-4h-2v-2c0-1.657-1.343-3-3-3z" />
            </svg>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl text-gray-800">TechnicalPrep</h1>
            <p className="text-sm text-gray-500">{streak} days streak • {xp} XP</p>
            <StreakDots />
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 pb-12 flex-1 overflow-y-auto">
          {activeTab === "Training" && (
            <>
              {/* Module Selection */}
              {!selectedModule && (
                <div className="space-y-6">
                  {modulesData.map((mod, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedModule(mod);
                        setQIndex(0);
                      }}
                      className="flex items-center p-5 border border-gray-300 rounded-lg shadow transition transform hover:scale-105 cursor-pointer bg-gray-50"
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center text-white rounded"
                        style={{
                          backgroundColor: mod.color.slice(4, -1),
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        {mod.icon}
                      </div>
                      <div className="ml-4">
                        <h2 className="text-xl text-gray-700">{mod.name}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Category Selection for subjects with categories */}
              {selectedModule && hasCategories && !selectedCategory && (
                <div className="space-y-6">
                  <h2 className="text-xl text-gray-700 font-medium mb-4">Select Category</h2>
                  {Object.keys(subjectQuestionsMemo).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setQIndex(0);
                      }}
                      className="w-full py-4 px-5 border border-gray-300 rounded-lg text-lg text-gray-700 shadow transition transform hover:scale-105 bg-gray-50"
                    >
                      {cat}
                    </button>
                  ))}
                  <button onClick={reset} className="mt-2 text-sm text-gray-500 underline">← Back to Home</button>
                </div>
              )}

              {/* Quiz Area */}
              {selectedModule && (!hasCategories || selectedCategory) && qIndex !== -1 && (
                <div className="space-y-8 flex flex-col items-center justify-center">
                  <div className="text-lg text-gray-600">
                    {selectedModule.name}{hasCategories && selectedCategory ? ` - ${selectedCategory}` : ''} · Question {qIndex + 1}/{currentQuiz.length}
                  </div>
                  <div className="text-lg bg-gray-100 px-6 py-4 rounded-lg w-full text-center shadow">
                    {currentQ.question}
                  </div>
                  <div className="space-y-4 w-full">
                    {currentQ.choices.map((choice, i) => {
                      let btnStyle = 'bg-white text-gray-800 hover:bg-gray-50';
                      if (showResult) {
                        if (i === currentQ.answer) {
                          btnStyle = 'bg-green-200 text-gray-800';
                        } else if (selectedChoice === i) {
                          btnStyle = 'bg-red-200 text-gray-800';
                        }
                      } else if (selectedChoice === i) {
                        btnStyle = i === currentQ.answer ? 'bg-green-200 text-gray-800' : 'bg-red-200 text-gray-800';
                      }
                      return (
                        <button
                          key={i}
                          onClick={() => handleChoice(i)}
                          className={`w-full py-3 rounded-full text-lg transition duration-200 shadow-sm ${btnStyle}`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                  {showResult && (
                    <div className={`text-center text-lg font-medium ${selectedChoice === currentQ.answer ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedChoice === currentQ.answer ? 'Correct!' : 'Incorrect'}
                    </div>
                  )}
                  {xpBoost && (
                    <div className="text-center text-sm animate-bounce text-yellow-600">+10 XP</div>
                  )}
                  <button className="mt-6 text-sm text-gray-500 underline" onClick={reset}>← Back to Home</button>
                </div>
              )}

              {/* Quiz Completion */}
              {selectedModule && (!hasCategories || selectedCategory) && qIndex === -1 && (
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                  <div className="text-5xl text-gray-800">🎉</div>
                  <h2 className="text-2xl text-gray-700 font-medium">Workout Complete!</h2>
                  <p className="text-lg text-gray-600">You got {score} out of {currentQuiz.length} correct</p>
                  <p className="text-sm text-gray-500">{streak} days streak • {xp} XP</p>
                  {selectedModule.name !== "Daily Workout" && selectedModule.name !== "Brain Teaser" && (
                    <p className="text-sm text-gray-500">Your performance has been recorded.</p>
                  )}
                  <button className="bg-gray-800 text-white text-lg px-6 py-2 rounded-full shadow" onClick={reset}>Back to Home</button>
                </div>
              )}
            </>
          )}
          {activeTab === "Performance" && (
            <PerformanceTracer performanceData={performanceData} />
          )}
          {activeTab === "News" && (
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Finance News Today</h2>
              {news.length === 0 ? (
                <p className="text-gray-600">Fetching news headlines...</p>
              ) : (
                <ul className="space-y-2">
                  {news.map((headline, i) => (
                    <li key={i} className="text-lg text-gray-700 border-b border-gray-200 pb-2">
                      {headline}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {activeTab === "Notifications" && <div className="p-6 text-gray-600">Notifications placeholder</div>}
          {activeTab === "More" && (
            <div className="p-6 text-gray-600 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">More</h2>
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-700">Internship Tracker</h3>
                <p className="text-lg text-gray-700">[Internship tracker content placeholder]</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <nav className="bg-white border-t border-gray-200 flex justify-around py-4">
          <NavItem icon={<IconDailyWorkout />} label="Training" active={activeTab==="Training"} onClick={()=> setActiveTab("Training")} />
          <NavItem icon={<IconPerformance />} label="Performance" active={activeTab==="Performance"} onClick={()=> setActiveTab("Performance")} />
          <NavItem icon={<IconValuation />} label="News" active={activeTab==="News"} onClick={()=> setActiveTab("News")} />
          <NavItem icon={<IconNotifications />} label="Notifications" active={activeTab==="Notifications"} onClick={()=> setActiveTab("Notifications")} />
          <NavItem icon={<IconMore />} label="More" active={activeTab==="More"} onClick={()=> setActiveTab("More")} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer">
      <span className={`h-7 w-7 ${active ? "text-blue-600" : "text-gray-500"}`}>{icon}</span>
      <span className={`text-sm ${active ? "text-blue-600" : "text-gray-500"}`}>{label}</span>
    </div>
  );
}
