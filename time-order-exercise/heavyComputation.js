function performHeavyTask(input) {
  let sum = 0;
  for (let i = 0; i < input * 100; i++) {
    sum += Math.sin(i) * Math.cos(i);
  }
  return sum;
}

module.exports = { performHeavyTask };
