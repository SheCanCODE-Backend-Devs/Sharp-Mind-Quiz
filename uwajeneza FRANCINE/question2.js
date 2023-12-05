//2.Create a function called “stringModifier”. 
//This function allows a user to provide a string, and then provide the position they want to modify, and a character to replace the modified one from the string. This function will receive 3 arguments the first argument will be a string, the second will be the position of a specific.
function stringModifier(str, position, replacementChar) {
    if (position < 0 || position >= str.length) {
        return "Invalid position.";
    }
    let strArray = str.split('');

    strArray[position] = replacementChar;

    let modifiedStr = strArray.join('');
    
    return modifiedStr;
}


let originalString = "Dod is good!";
let modifiedString = stringModifier(originalString, 2, 'g');
console.log(modifiedString); 

