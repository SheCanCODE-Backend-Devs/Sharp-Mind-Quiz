// Write a function that converts an array of strings to uppercase.

function toUpperCase(arr) {
  return arr.map(function(item) {
    return item.toUpperCase();
  });
}

console.log(toUpperCase(["a", "b", "c"]));