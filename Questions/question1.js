function arrayUpperCase(arr) 
{
    return arr.map(str => str.toUpperCase());
}
const stringArray = ["Mutoni", "jacky", "mutesi", "jolly"];
const uppercase = arrayUpperCase(stringArray);
console.log(uppercase); 
