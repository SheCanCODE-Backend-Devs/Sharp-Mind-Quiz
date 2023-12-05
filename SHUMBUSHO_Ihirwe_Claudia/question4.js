// 4.Implement a function that searches for a specific key in an object.

const user = [
        {
        id: 1,
        name: "John",
        age: 2
    } 
]
function findKey(obj, key){
    for( let key in obj){
        if(obj[key] === key){
            return true;
        }
    }
    return false;
}
console.log(findKey(user, ['name']));