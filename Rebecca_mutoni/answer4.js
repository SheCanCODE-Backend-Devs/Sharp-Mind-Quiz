/*4.Implement a function that searches for a specific key in an object.*/
function findKey(obj, key) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && prop === key) {
            return `${key} found in $JSON.Stringfy({obj}).` ;
        }
    }
    return `${key} not found in given object`;
}

let exampleObj = {
    name: "John",
    age: 30,
    city: 'Kigali'
}
console.log(findKey(exampleObj, 'gender'));