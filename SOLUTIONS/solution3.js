function isPrime(num) {
    // Prime numbers are greater than 1
    if (num <= 1) return false;
    // Check for divisibility by numbers up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If num is divisible, it's not prime
    }
    return true; // If no divisors found, num is prime
}

function filterPrimes(arr) {
    return arr.filter(num => isPrime(num)); // Filter prime numbers from input array
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPrimes(inputArray)); // Output: [2, 3, 5, 7]