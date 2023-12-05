function findKey(obj, key){
    if (key in obj) {
        return obj[key];
        
    }else{
        console.log("key not found");
    }
}
let object ={
    name: "umugabe",
    age: 20,
    gender: "female"
};
let answer = findKey(object, "gender");
console.log(answer);