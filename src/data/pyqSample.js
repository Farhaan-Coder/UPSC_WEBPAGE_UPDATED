// Single source of truth for all PYQ sample numbers, ranges and shares.
// Illustrative sample data (2,500 sample questions, 25-year window).
export const PYQ_RANGE = "2000-2024";
export const PYQ_TOTAL = 2500;

export const pyqThemes = [
  {
    name: "Polity & Governance",
    shortName: "Polity",
    count: 550,
    trend: "+3% YoY",
    questions: "18-22 Qs",
    highYield: "Rights, Federalism, Judiciary",
    highlight: true,
  },
  {
    name: "Environment & Ecology",
    shortName: "Environment",
    count: 475,
    trend: "High Weight",
    questions: "16-20 Qs",
    highYield: "Protected Areas, Treaties, Species",
    highlight: false,
  },
  {
    name: "Economy & Development",
    shortName: "Economy",
    count: 450,
    trend: "Stable",
    questions: "15-18 Qs",
    highYield: "Monetary Policy, Inflation, BoP",
    highlight: false,
  },
  {
    name: "Modern Indian History",
    shortName: "Modern History",
    count: 375,
    trend: "Moderate",
    questions: "12-15 Qs",
    highYield: "Freedom Movement, Art & Culture",
    highlight: false,
  },
  {
    name: "Geography & Agriculture",
    shortName: "Geography",
    count: 350,
    trend: "Application-based",
    questions: "10-14 Qs",
    highYield: "Monsoons, Soils, Cropping",
    highlight: false,
  },
  {
    name: "Science & Emerging Tech",
    shortName: "Sci & Tech",
    count: 300,
    trend: "Rising",
    questions: "9-12 Qs",
    highYield: "Biotech, AI, Space, Vaccines",
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
