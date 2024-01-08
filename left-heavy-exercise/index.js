const analytics = require("./analytics");
const sorting = require("./sorting");
const calculations = require("./calculations");
const dataManipulation = require("./dataManipulation");

function main() {
  console.log("Starting intensive tasks...");
  analytics.runAnalytics();
  sorting.performSorting();
  calculations.runCalculations();
  dataManipulation.manipulateData();
  console.log("Tasks completed.");
}

main();
