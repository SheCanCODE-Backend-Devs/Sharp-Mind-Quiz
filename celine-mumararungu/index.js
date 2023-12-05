// 1.Write a function that converts an array of strings to uppercase.
function UpperCase(arr) {
    return arr.map(str => str.toUpperCase());
  }
  
 
  const strings = ['mumararungu','celine'];
  const uppercaseStrings = UpperCase(strings);
  console.log(uppercaseStrings); 

//   3.Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  var reversed = reverseString("hello");
  console.log(reversed); 
//   4.Implement a function that searches for a specific key in an object.
const student={
    name:'celine',
    school:'kacyiru',
    ages:20
};


const searchKey =(key)=>{

 if (student.hasOwnProperty(key)) {
    return `the key ${key} is found with value ${student[key]}`;
 } else {
    return `the key ${key} is not found `;
 }

};

console.log(searchKey("school"));
console.log(searchKey("ages"));




  
  



