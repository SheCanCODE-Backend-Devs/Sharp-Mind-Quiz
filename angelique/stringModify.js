

function modifyString(inputString, targetSubstring, replacement) {
    // Use the replace method to replace the targetSubstring with the replacement
    const modifiedString = inputString.replace(targetSubstring, replacement);
    
    return modifiedString;
}

// Example usage:
const originalString = "Hello, world! This is an example.";
const modifiedString = modifyString(originalString, "world", "angelique");
console.log(modifiedString);
