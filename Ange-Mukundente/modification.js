// Create a function called “stringModifier”. 
// This function allows a user to provide a string, and then provide the position they want to modify, and a character to replace the modified one from the string. This function will receive 3 arguments the first argument will be a string, the second will be the position of a specific.

const stringModifier=(str,index,value)=>{
    var text=str.split('');
    text[index]=value;
    return text.join('');
 };
 
 console.log(stringModifier("congratulatio",13,"n"));