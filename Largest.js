//  Find the second largest number in an array.
let numbers = [2, 55, 99, 22, 111, 1111, 3333];
let uniqueNumbers = [...new Set(numbers)];
uniqueNumbers.sort((a, b) => b - a);
let secondLargest = uniqueNumbers[1];
console.log("Second Largest Number is", secondLargest);
