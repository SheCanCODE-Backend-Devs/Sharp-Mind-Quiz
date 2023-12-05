// 3.Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".


function reverseString(str) {
    var reversedWord= str.split("").reverse().join("");
    return reversedWord;
}
const str="mignonne";
console.log(reverseString(str));