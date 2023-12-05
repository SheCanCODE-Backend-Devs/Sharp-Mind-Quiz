//4.Implement a function that searches for a specific key in an object.
function searchForKey(obj, key) {
    for (let k in obj) {
      if (k === key) {
        return obj[k];
      } else if (typeof obj[k] === 'object') {
        const result = searchForKey(obj[k], key);
        if (result !== undefined) {
          return result;
        }
      }
    }
    return undefined;
  }
  
  // Example object
  const myObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      street: '123 Main St',
      zip: '10001'
    },
    hobbies: ['reading', 'traveling']
  };
  
  // Searching for a key in the object
  const keyToFind = 'city';
  const result = searchForKey(myObject, keyToFind);
  
  if (result !== undefined) {
    console.log(`Found key '${keyToFind}' with value:`, result);
  } else {
    console.log(`Key '${keyToFind}' not found in the object)
  }
}

  
