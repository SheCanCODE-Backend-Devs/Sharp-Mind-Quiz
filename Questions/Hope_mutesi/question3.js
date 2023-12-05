function reverseString(inputString) {
    var reversedString = inputString.split('').reverse().join('');
    return reversedString;
  }
  
  var originalString = "hello";
  var reversedString = reverseString(originalString);
  console.log(reversedString);