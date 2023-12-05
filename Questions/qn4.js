// Implement a function that searches for a specific key in an object.

function keySearcher(key,Obj){
    for(let key in Obj){
        if(Obj[key] === key){
            return true;
        }else{
            return "key not found"
        }
    }
}

let fruit = {
    name: "apple",
    number: 40
}
let existingFruit = keySearcher("name",fruit)
console.log(existingFruit)
