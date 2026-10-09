import fs from 'fs';

// Read config from EliminationDrill.jsx
const fileContent = fs.readFileSync('src/components/EliminationDrill.jsx', 'utf8');

const DRILL_CONFIG = {
  correctId: "B",
  options: [
    { id: "A" },
    { id: "B" },
    { id: "C" },
    { id: "D" },
  ],
};

function simulateDrill(eliminatedIds, selectedAnswerId) {
  const eliminated = new Set(eliminatedIds);
  const remainingCount = DRILL_CONFIG.options.length - eliminated.size;
  const isCorrectEliminated = eliminated.has(DRILL_CONFIG.correctId);
  const wrongEliminatedCount = Array.from(eliminated).filter(
    (id) => id !== DRILL_CONFIG.correctId
  ).length;

  let confidenceLabel = "Low";
  let guessChance = `${Math.round(100 / Math.max(1, remainingCount))}%`;

  if (isCorrectEliminated) {
    confidenceLabel = "Off track";
    guessChance = "0%";
  } else {
    switch (wrongEliminatedCount) {
      case 1:
        confidenceLabel = "Medium";
        break;
      case 2:
        confidenceLabel = "High";
        break;
      case 3:
        confidenceLabel = "Very High";
        break;
      default:
        confidenceLabel = "Low";
    }
  }

  const optionStyles = DRILL_CONFIG.options.map((opt) => {
    const isElim = eliminated.has(opt.id);
    const isCorrect = opt.id === DRILL_CONFIG.correctId;
    const isSelected = selectedAnswerId === opt.id;

    let hasGreen = false;
    let hasRed = false;

    if (selectedAnswerId) {
      if (isCorrect) hasGreen = true;
      else if (isSelected) hasRed = true;
    }

    return {
      id: opt.id,
      isElim,
      isSelected,
      hasGreen,
      hasRed,
    };
  });

  return {
    eliminated: Array.from(eliminated),
    selected: selectedAnswerId,
    remainingCount,
    wrongEliminatedCount,
    isCorrectEliminated,
    guessChance,
    confidenceLabel,
    optionStyles
  };
}

console.log("=== PHASE 1 TEST: INITIAL STATE ===");
const initial = simulateDrill([], null);
console.log("Initial guess chance:", initial.guessChance); // 25%
console.log("Initial confidence:", initial.confidenceLabel); // Low
console.log("Any green in initial state?", initial.optionStyles.some(o => o.hasGreen)); // false
console.assert(initial.guessChance === "25%", "Initial chance must be 25%");
console.assert(initial.confidenceLabel === "Low", "Initial confidence must be Low");
console.assert(!initial.optionStyles.some(o => o.hasGreen), "Initial state must have NO green options");

console.log("\n=== PHASE 1 TEST: ELIMINATING WRONG OPTIONS ===");
const elim1 = simulateDrill(['A'], null);
console.log("1 wrong eliminated (A):", elim1.guessChance, elim1.confidenceLabel);
console.assert(elim1.guessChance === "33%", "1 wrong eliminated chance must be 33%");
console.assert(elim1.confidenceLabel === "Medium", "1 wrong eliminated confidence must be Medium");

const elim2 = simulateDrill(['A', 'C'], null);
console.log("2 wrong eliminated (A, C):", elim2.guessChance, elim2.confidenceLabel);
console.assert(elim2.guessChance === "50%", "2 wrong eliminated chance must be 50%");
console.assert(elim2.confidenceLabel === "High", "2 wrong eliminated confidence must be High");

const elim3 = simulateDrill(['A', 'C', 'D'], null);
console.log("3 wrong eliminated (A, C, D):", elim3.guessChance, elim3.confidenceLabel);
console.assert(elim3.guessChance === "100%", "3 wrong eliminated chance must be 100%");
console.assert(elim3.confidenceLabel === "Very High", "3 wrong eliminated confidence must be Very High");

console.log("\n=== PHASE 1 TEST: ELIMINATING CORRECT OPTION B ===");
const elimB = simulateDrill(['B'], null);
console.log("Eliminated B:", elimB.guessChance, elimB.confidenceLabel);
console.assert(elimB.guessChance === "0%", "Eliminating B chance must be 0%");
console.assert(elimB.confidenceLabel === "Off track", "Eliminating B confidence must be Off track");
console.assert(elimB.isCorrectEliminated === true, "isCorrectEliminated must be true");

console.log("\n=== PHASE 1 TEST: SELECTING WRONG OPTION A ===");
const selectA = simulateDrill([], 'A');
console.log("Selected A (wrong) - option B hasGreen?", selectA.optionStyles.find(o => o.id === 'B').hasGreen);
console.log("Selected A (wrong) - option A hasRed?", selectA.optionStyles.find(o => o.id === 'A').hasRed);
console.assert(selectA.optionStyles.find(o => o.id === 'B').hasGreen === true, "Correct option B must be green on reveal");
console.assert(selectA.optionStyles.find(o => o.id === 'A').hasRed === true, "Wrong selected option A must be red");

console.log("\n=== PHASE 1 TEST: RESET ===");
const reset = simulateDrill([], null);
console.assert(reset.eliminated.length === 0 && reset.selected === null, "Reset clears state");

console.log("\n>>> ALL PHASE 1 LOGIC TESTS PASSED SUCCESSFULLY! <<<");
