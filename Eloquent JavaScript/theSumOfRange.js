function customRange(start, end) {
  let arrRange = [];
  for (let i = start; i <= end; i++) {
    arrRange.push(i);
  }
  return arrRange;
}

function customSum(rangeFunc) {
  let arr = rangeFunc;
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

console.log(customSum(customRange(1,10)));