
function stringModifier(inputString, position, replacementChar) {
    
    if (position < 0 || position >= inputString.length) {
      console.log("Invalid position.");
      return inputString;
    }
    var modifiedArray = inputString.split('');
    
    modifiedArray[position] = replacementChar;
  
    var modifiedString = modifiedArray.join('');
  
    return modifiedString;
  }
  var originalString = "example";
  var modifiedString = stringModifier(originalString, 2, "x");
  
  console.log(modifiedString);