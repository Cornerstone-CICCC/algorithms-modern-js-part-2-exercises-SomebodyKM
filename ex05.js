// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.
numbers = [3, 53, 65, 4, 7]

const isThereEvenNum = numbers.some(num => num % 2 === 0)
console.log(isThereEvenNum)