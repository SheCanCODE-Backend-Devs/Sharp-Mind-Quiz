function searchForKey(obj, key) {
    for (let currentKey in obj) {
        if (currentKey === key) {
            return obj[currentKey];
        }

        if (typeof obj[currentKey] === 'object') {
            const result = searchForKey(obj[currentKey], key);
            if (result !== undefined) {
                return result;
            }
        }
    }

    return undefined; 
}

// Example usage:
const myObject = {
    name: 'Paccy',
    age: 30,
    address: {
        city: 'kigali',
        zip: '10001'
    }
};

const result = searchForKey(myObject, 'city');
console.log(result);
