const utility = require("./utility");

function processData() {
  console.log("Processing data...");
  for (let i = 0; i < 1000; i++) {
    utility.performCalculation(i);
  }
}

module.exports = { processData };
