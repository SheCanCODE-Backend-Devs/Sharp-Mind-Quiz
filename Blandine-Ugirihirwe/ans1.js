//Write a function that converts an array of strings to uppercase

function convertToUppercase(stringArray) {
    // Use map to create a new array where each string is converted to uppercase
    return stringArray.map(function (str) {
      return str.toUpperCase();
    });
  }

  let inputStrings = ["hello", "joy", "blandine"];
  let result = convertToUppercase(inputStrings);
  console.log(result);
  
