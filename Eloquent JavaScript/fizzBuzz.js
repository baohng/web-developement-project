(function fizzBuzz() {
  const rangeLimit = 100;
  for (let iter = 0; iter <= rangeLimit; iter++) {
    if (iter < 3) {
      console.log(iter);
    } else if (iter % 3 == 0 && iter % 5 == 0) {
      console.log(`FizzBuzz`);
    } else if (iter % 3 == 0) {
      console.log("Fizz");
    } else if (iter % 5 == 0) {
      console.log(`Buzz`);
    } else {
      console.log(iter);
    }
  }
})();
