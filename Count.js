// Count occurrences of a character in a string.
let str = "My name is Barsha Gc. I am from pyuthan municipality 1 khaira";
let charToCount = "a";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === charToCount) {
    count++;
  }
}
console.log(`'${charToCount}' appears ${count} times.`);
