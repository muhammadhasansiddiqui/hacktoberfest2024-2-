// Array Utility Functions

// Function to calculate the sum of an array
function calculateSum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Function to find the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Example usage
const numbers = [10, 20, 30, 40, 50];

console.log("Array:", numbers);
console.log("Sum of the array:", calculateSum(numbers));
console.log("Maximum value in the array:", findMax(numbers));

// Export the functions (for Node.js environment or use in other files)
module.exports = { calculateSum, findMax };
