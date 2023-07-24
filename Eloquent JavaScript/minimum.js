function minimum(a, b) {
  if (isNaN(a) || isNaN(b)){
    return `invalid input`
  } else {
      if (a <= b) return a;
  else return b;
  }
}

console.log(minimum("abc",7));