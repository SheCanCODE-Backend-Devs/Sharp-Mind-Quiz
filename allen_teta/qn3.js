var  str;
function reverseFunction(str){
  
  var arrayOfCharacters= str.split("");
  var reversedCharacter = arrayOfCharacters.reverse();
  var reversedString= reversedCharacter.join("");
  console.log(reversedString);
}
str=" my name";
reverseFunction( str);