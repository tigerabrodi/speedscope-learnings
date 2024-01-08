function performCalculation(number) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    result += Math.sqrt(i);
  }
  return result;
}

module.exports = { performCalculation };
