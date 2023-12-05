// 2.Create a function called “stringModifier”. 
// This function allows a user to provide a string, and then provide the position they want to modify,
//  and a character to replace the modified one from the string. This function will receive 3 arguments 
//  the first argument will be a string, the second will be the position of a specific.
function stringModifier(string,position,character){
    var array = string.split('');
    array[position] = character;
    return array.join('')
    
}
console.log(stringModifier('yello',0,'H'))