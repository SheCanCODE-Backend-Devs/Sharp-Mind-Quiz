// 1.Write a function that converts an array of strings to uppercase.

function uppercase(string){
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toUpperCase();
    }
    return string;
}
const string = ['m','i','g','n','o','n','n','e'];
console.log(uppercase(string));
