// 3.Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".
function reversedString(str){
    return str.split('').reverse("").join("")
}
console.log(reversedString("hello"))