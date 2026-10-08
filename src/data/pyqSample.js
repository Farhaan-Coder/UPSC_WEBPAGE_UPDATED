// Single source of truth for all PYQ sample numbers, ranges and shares.
// Illustrative sample data (2,500 sample questions, 25-year window).
export const PYQ_RANGE = "2000-2024";
export const PYQ_TOTAL = 2500;

export const pyqThemes = [
  {
    name: "Polity & Governance",
    count: 550,
    trend: "+3% YoY",
    questions: "18-22 Qs",
    highYield: "Fundamental Rights, Federalism, Judiciary",
    highlight: true,
  },
  {
    name: "Environment & Ecology",
    count: 475,
    trend: "High Weight",
    questions: "16-20 Qs",
    highYield: "Protected Areas, Climate Treaties, Species",
    highlight: false,
  },
  {
    name: "Economy & Development",
    count: 450,
    trend: "Stable",
    questions: "15-18 Qs",
    highYield: "Monetary Policy, Inflation, Balance of Payments",
    highlight: false,
  },
  {
    name: "Modern Indian History",
    count: 375,
    trend: "Moderate",
    questions: "12-15 Qs",
    highYield: "Freedom Movement, Art & Architecture",
    highlight: false,
  },
  {
    name: "Geography & Agriculture",
    count: 350,
    trend: "Application-based",
    questions: "10-14 Qs",
    highYield: "Monsoon Patterns, Soil, Cropping Systems",
    highlight: false,
  },
  {
    name: "Science & Emerging Tech",
    count: 300,
    trend: "Rising",
    questions: "9-12 Qs",
    highYield: "Biotech, AI, Space Missions, Vaccines",
    highlight: false,
  },
].map((item) => {
  const share = Math.round((item.count / PYQ_TOTAL) * 100);
  return {
    ...item,
    share,
    weight: `${share}%`,
  };
});
