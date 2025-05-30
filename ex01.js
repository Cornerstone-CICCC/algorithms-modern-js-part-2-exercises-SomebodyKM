// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. Write the code to sort this array in ascending order.
const numbers = [9, 3, 5, 6, 2, 7]

const sortAsc = (a, b) => a > b ? 1 : -1
console.log(numbers.sort(sortAsc))