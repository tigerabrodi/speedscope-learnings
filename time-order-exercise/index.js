const processor = require("./processor");
const dataHandler = require("./dataHandler");

function main() {
  console.log("Starting process...");
  processor.processData();
  dataHandler.handleData();
  console.log("Process completed.");
}

main();
