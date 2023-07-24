function customRange(start, end, step = 1) {
  let arrRange = [];
  for (let i = start; i <= end; i += step) {
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

console.log(customSum(customRange(1,10,2)));