const heapSort = (arr) => {
  const lastParent = Math.floor(arr.length / 2) - 1;
  for (let i = lastParent; i >= 0; i -= 1) {
    heapify(arr, i, arr.length);
  }

  for (let i = arr.length - 1; i > 0; i -= 1) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }

  return arr
}

const heapify = (arr, currIdx, len) => {
  let leftIdx = 2 * currIdx + 1;
  let rightIdx = 2 * currIdx + 2;
  let currBiggestIdx = currIdx;

  if (leftIdx < len && arr[leftIdx] > arr[currBiggestIdx]) {
    currBiggestIdx = leftIdx;
  }
  
  if (rightIdx < len && arr[rightIdx] > arr[currBiggestIdx]) {
    currBiggestIdx = rightIdx;
  }

  if (currBiggestIdx !== currIdx) {
    [arr[currIdx], arr[currBiggestIdx]] = [arr[currBiggestIdx], arr[currIdx]];
    heapify(arr, currBiggestIdx, len)
  }
}

const arr = [1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10, 12];

console.log(heapSort(arr));

// node heapSort.js