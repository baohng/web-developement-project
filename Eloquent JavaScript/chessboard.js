(function chessboard() {
  const width = 8, height = 8;
  for (let row = 1; row <= height; row++) {
    let hashtag = ``;
    for (let col = 1; col <= width; col++) {
      if ((row + col) % 2 == 0) {
        hashtag += ` `;
      } else {
        hashtag += `#`;
      }
    }
    console.log(hashtag);
  }
})();