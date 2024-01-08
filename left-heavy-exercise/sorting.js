function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function performSorting() {
  const arr = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 1000)
  );
  bubbleSort(arr);
}

module.exports = { performSorting };
