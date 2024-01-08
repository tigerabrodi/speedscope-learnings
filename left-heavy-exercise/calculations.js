function complexCalculation(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += Math.pow(num, i) / i;
  }
  return result;
}

function runCalculations() {
  for (let i = 0; i < 1000; i++) {
    complexCalculation(i);
  }
}

module.exports = { complexCalculation, runCalculations };
