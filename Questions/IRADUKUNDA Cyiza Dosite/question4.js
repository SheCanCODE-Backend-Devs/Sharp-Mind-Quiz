/*
Implement a function that searches for a specific key in an object. */

function findKeyInObject(key, object) {
    fruits={
        name:"apple",
        amount:2,
        color:"red"
    }
    for (let key in object) {
        if (object[key] === key) {
            return true;
        }
    }
    return false;
}
findKeyInObject("color", "fruits")
