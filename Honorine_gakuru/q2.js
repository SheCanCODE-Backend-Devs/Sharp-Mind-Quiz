function stringModifier(string,position,character){
const arr=string.split('');
arr[position]=character;
return arr.join('');
}
console.log(stringModifier("Honorine",7,'i'));


