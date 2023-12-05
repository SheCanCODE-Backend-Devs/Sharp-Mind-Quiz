function stringModifier(inputString, position, replacementChar) {
    if (position < 0 || position >= inputString.length) {
      console.log('Invalid position. Please provide a valid position.');
      return inputString;
    }
  
    const stringArray = inputString.split('');
    
    stringArray[position] = replacementChar;
  
    const modifiedString = stringArray.join('');
  
    return modifiedString;
  }
  
  const originalString = 'example';
  const modifiedString = stringModifier(originalString, 2, 'X');
  
  console.log(modifiedString);