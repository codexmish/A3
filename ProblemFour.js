function gonoVote(array) {
  if (!Array.isArray(array)) {
    // console.log("Invalid")
    return "Invalid";
  }

  let haCount = 0;
  let naCount = 0;

  for (let vote of array) {
    if (vote === "ha") haCount++;
    if (vote === "na") naCount++;
  }

  if (haCount > naCount) {
    // console.log(true)
    return true;
  } else if (haCount === naCount) {
    return "equal";
  } else {
    // (console.log(false))
    return false;
  }
}

// gonoVote([
//   "ha",
//   "ha",
//   "na",
//   "ha",
//   "ha",
//   "na",
//   "ha",
//   "ha",
//   "na",
//   "ha",
//   "ha",
//   "na",
// ]);
