// Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".
function reverseString(inputString) {

    const reversedString = inputString.split('').reverse().join('');
  
    return reversedString;
  }
  
  const originalString = 'hello';
  const reversedString = reverseString(originalString);
  
  console.log(reversedString);