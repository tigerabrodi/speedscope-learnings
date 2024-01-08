function manipulateData() {
  let data = Array.from({ length: 10000 }, () => Math.random());
  data = data.filter((num) => num > 0.5).map((num) => num * 2);
  data.forEach((num) => Math.sqrt(num));
}

module.exports = { manipulateData };
