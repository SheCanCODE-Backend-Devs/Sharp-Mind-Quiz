function reverseString(string) {
    var reversedString = string.split('').reverse().join('');
    return reversedString;
}

let newString = "hello world";
let result = reverseString(newString);

console.log(result);
