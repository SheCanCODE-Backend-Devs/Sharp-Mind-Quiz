/*Write a function that converts an array of strings to uppercase. */
function convertsString (arr){

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;

}

console.log(convertsString(["backend", "class","cohort 9"]));