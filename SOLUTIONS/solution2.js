function generateArray(start, end) {
    // Calculate the length of the array
    const length = Math.abs(end - start) + 1;
    
    // Determine the direction of the array (ascending or descending)
    const direction = start < end ? 1 : -1;
    
    // Use Array.from to generate the array of numbers
    return Array.from({ length }, (_, index) => start + index * direction);
}

console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]