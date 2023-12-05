/* 3.Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".*/

function reverseString(str){
    let reversedStr =  str.split('').reverse().join('');
    return reversedStr;
}

let exampleStr = "Hello"
console.log(`The reverse of ${exampleStr} is: ${reverseString(exampleStr)}`);