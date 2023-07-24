function countBs (stringChain, charac) {
  let count = 0;
  let s = String(stringChain);
  for (let i = 0; i <=s.length - 1; i++) {
    if (s[i] == charac) {
      count++;
    }
  }
  return count;
}

function countChar(inString, neededChar) {
  console.log(countBs(inString, neededChar));
}

countChar(`Bao iz da Best of beast`, `b`);
