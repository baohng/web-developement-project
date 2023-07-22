(function chessboard() {
   const width = 8, height = 8;
   for (let iter = 1; iter <= height; iter++) {
    if ((iter + 2) % 2 != 0) {
      let hashtag = ` `;
      for (let iter2 = 1; iter2 <= width; iter2++) {
        if ((iter2 + 2) % 2 == 0) {
          hashtag += `#`;
        } else {
          hashtag += ` `;
        }
      }
      console.log(hashtag);
    } else {
      let hashtag = ` `;
      for (let iter2 = 1; iter2 <= width; iter2++) {
        if ((iter2 + 2) % 2 == 0) {
          hashtag += ` `;
        } else {
          hashtag += `#`;
        }
      }
      console.log(hashtag);
    }
   }
})();