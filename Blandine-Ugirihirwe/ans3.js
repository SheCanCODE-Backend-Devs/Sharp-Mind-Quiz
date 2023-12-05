//Reverse the provided string and return the reversed string.
//For example, "hello" should become "olleh".

function reverseString(str) {
    // Use the split, reverse, and join methods to reverse the string
    return str.split('').reverse().join('');
  }
  

  let originalString = "hello";
  let reversedString = reverseString(originalString);
  
  console.log(reversedString);
  