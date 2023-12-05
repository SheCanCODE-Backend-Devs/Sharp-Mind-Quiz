
function searchKey(obj, key) {
    if (key in obj) {
      return obj[key];
    } else {
      return "Key not found";
    }
  }
  var myObject = {
    name: "hope",
    age: 10,
    city: "kigali"
  };
  
  var keyToSearch = "age";
  var result = searchKey(myObject, keyToSearch);
  
  console.log(result);
  