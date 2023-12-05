/*
Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh". */

function reversedString(string) {
    return string.split("").reverse().join("");
}

console.log(reversedString("hello"));