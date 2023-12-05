function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const inputStr = "Hellorev";
const reversedStr = reverseString(inputStr);

console.log(`Original String: ${inputStr}`);
console.log(`Reversed String: ${reversedStr}`);