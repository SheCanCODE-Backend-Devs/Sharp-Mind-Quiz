
function searchForKey(obj, key) {
    
    if (obj === null || typeof obj !== 'object') {
        console.log("\n data not found");
    }

    for (let currentKey in obj) {
    
        if (currentKey === key) {
            return true; 
        }

        if (typeof obj[currentKey] === 'object' && !Array.isArray(obj[currentKey])) {
            if (searchForKey(obj[currentKey], key)) {
                return true; 
            }
        }
    }

    return false; 
}


const myObject = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'coding']
};

const keyToSearch = 'city';
const isKeyPresent = searchForKey(myObject, keyToSearch);

console.log(isKeyPresent);