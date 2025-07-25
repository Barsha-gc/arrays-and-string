// Sort an arrays in ascending order.

let numbers = [31, 44, 55, 32, 55, 66, 1];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
