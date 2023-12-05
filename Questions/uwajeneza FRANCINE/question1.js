//1.Write a function that converts an array of strings to uppercase.
function convertToUpperCase(arr) {
    return arr.map(str => str.toUpperCase());
  }
  

  const stringsArray = ["my", "name", " is fanny"];
  const upperCaseArray = convertToUpperCase(stringsArray);
  console.log(upperCaseArray);
  