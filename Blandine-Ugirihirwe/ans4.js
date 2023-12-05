//Implement a function that searches for a specific key in an object.

function searchForKey(obj, key) {
    // Check if the object is null or undefined
    if (obj === null || obj === undefined) {
      console.log("Invalid object. Please provide a valid object.");
      return null;
    }
  
    // Check if the key exists in the object
    if (key in obj) {
      return obj[key];
    } else {
      console.log(`Key '${key}' not found in the object.`);
      return null;
    }
  }
  
 
  let sampleObject = {
    name: "Blandine",
    age: 24,
    city: "Kigali City",
  };
  
  let keyToSearch = "age";
  let result = searchForKey(sampleObject, keyToSearch);
  
  if (result !== null) {
    console.log(`The value for key '${keyToSearch}' is: ${result}`);
  } else {
    console.log("Key not found.");
  }
  