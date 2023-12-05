/*
Implement a function that searches for a specific key in an object. */

function findKey(object,key) {
    fruits = {
        apple: "red",
        banana: "yellow",
        cherry: "purple"
    }
    for (let key in object) {
        if (object[key] === key) {
            return true;
        }
    }
    return false;
}
findKey("fruits", "apple")


