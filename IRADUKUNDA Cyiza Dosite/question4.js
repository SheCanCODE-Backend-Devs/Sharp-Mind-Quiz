/*
Implement a function that searches for a specific key in an object. */

function findKey(object,key) {
 // for (key in object){

 //}
 //
    fruits = {
        apple: "red",
        banana: "yellow",
        cherry: "purple"
    }
    if(fruits.hasOwnProperty(key)){
        return fruits[key]
    }
    
}

console.log(findKey("fruits","banana"));


