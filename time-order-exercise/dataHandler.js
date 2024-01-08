const heavyComputation = require("./heavyComputation");

function handleData() {
  console.log("Handling data...");
  const data = Array(1000)
    .fill(0)
    .map((_, i) => i * 2);
  data.forEach((num) => heavyComputation.performHeavyTask(num));
}

module.exports = { handleData };
