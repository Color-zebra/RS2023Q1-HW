const decimalToBinary = (decimalNum) => {
  let currNum = decimalNum;
  let res = '';

  while (currNum > 0) {
    res = currNum % 2 + res;
    currNum  = Math.floor(currNum / 2);
  } 

  return res;
}

console.log(decimalToBinary(137)); // should be 10001001
console.log(decimalToBinary(15)); // should be 1111
console.log(decimalToBinary(6)); // should be 110


// node decimalToBinary.js