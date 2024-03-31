function swapCase(str) {
    // Split the input string into an array of characters
    return str.split('').map(char => {
        // For each character, check if it's uppercase
        if (char === char.toUpperCase()) {
            // If uppercase, return the lowercase version
            return char.toLowerCase();
        } else {
            // If lowercase, return the uppercase version
            return char.toUpperCase();
        }
    }).join(''); // Join the modified characters back into a string
}

console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'