const calculations = require("./calculations");

function analyzeData(data) {
  return data.map(calculations.complexCalculation);
}

function runAnalytics() {
  const sampleData = Array.from({ length: 1000 }, (_, i) => i);
  analyzeData(sampleData);
}

module.exports = { runAnalytics };
