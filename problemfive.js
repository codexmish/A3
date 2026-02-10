function analyzeText(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  if (str.trim() === "") {
    return "Invalid";
  }

  const words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  const totalChars = str.split(" ").join("").length;
  console.log({
    longwords: longestWord,
    token: totalChars
  })

  return {
    longwords: longestWord,
    token: totalChars
  };
}
