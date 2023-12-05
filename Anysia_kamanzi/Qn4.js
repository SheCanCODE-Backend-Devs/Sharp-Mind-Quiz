function searchKeyInObject(obj, keyToFind) {
  
    if (typeof obj !== 'object' || obj === null) {
      console.log('Invalid object. Please provide a valid object.');
      return false;
    }
  
  
    if (keyToFind in obj) {
      console.log(`Key "${keyToFind}" found with value:`, obj[keyToFind]);
      return true;
    } else {
      console.log(`Key "${keyToFind}" not found in the object.`);
      return false;
    }
  }
  
 
  const sampleObject = {
    name: 'John',
    age: 25,
    city: 'Example City',
  };
  
  searchKeyInObject(sampleObject, 'age');
  searchKeyInObject(sampleObject, 'gender');