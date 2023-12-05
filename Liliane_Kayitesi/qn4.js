// Implement a function that searches for a specific key in an object.

function keySearcher(key){
    
    
        if(fruit.hasOwnProperty(key)){
            return true;
        }else{
            return "key not found"
        }
    }
    

let fruit = {
    name: "apple",
    number: 40
}
console.log(keySearcher("name"
     ))

