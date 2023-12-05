
    function stringModifier(inputStr, position, replacementChar) {
        if (position >= 0 && position < inputStr.length) {
          
          let stringArray = inputStr.split('');
         
          stringArray[position] = replacementChar;
          
          let modifiedString = stringArray.join('');
          return modifiedString;
        } else {
          console.log("The position is not correct");
          return inputStr;
        }
      }

      let originalString = "Umugabe";
      let modifiedString = stringModifier(originalString, 2, "b");
      
      console.log("Original String: " + originalString);
      console.log("Modified String: " + modifiedString);
