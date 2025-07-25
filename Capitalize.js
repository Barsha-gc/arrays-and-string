// Capitalize the first letter of each word in a sentence.
let sentence = "hello everyone it me park jimin. a musician,dancer,singer and a world famous member of a kpop";
let capitalized = sentence
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized);
