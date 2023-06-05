const binaryToDecimal = (binaryNum) => {
  let res = 0;
  const startIndex = binaryNum.length - 1;
  
  for (let i = startIndex, j = 0; i >= 0; i -= 1,  j += 1) {
    res += binaryNum[i] * 2 ** j;
  }

  return res;
}

console.log(binaryToDecimal('10001001')); // should be 137
console.log(binaryToDecimal('1111')); // should be 15
console.log(binaryToDecimal('0110')); // should be 6

// node binaryToDecimal.js