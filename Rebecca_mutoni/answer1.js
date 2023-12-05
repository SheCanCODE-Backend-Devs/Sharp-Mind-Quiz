// 1.Write a function that converts an array of strings to uppercase.

function upperCase(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}

// function test
let arr1 = ["becky", "jane", "dada"]
console.log(upperCase(arr1));