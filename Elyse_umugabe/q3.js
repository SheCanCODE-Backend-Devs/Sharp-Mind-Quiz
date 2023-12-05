function reverseString(string){
    let str = string.split("").reverse("").join("");
    return str;

}

console.log(reverseString("Hello"));