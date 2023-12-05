// Implement a function that searches for a specific key in an object

function findKey(obj, key) {
  return Object.keys(obj).includes(key);
}

console.log(findKey({ a: 6, b: 7, c: 8 }, "a"));