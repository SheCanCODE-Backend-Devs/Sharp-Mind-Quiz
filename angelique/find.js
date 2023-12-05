//4.Implement a function that searches for a specific key in an object.

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Engineer'
};

const findProperty = (obj, property) => {
    if (property in obj) {
        return `The property ${property} is found with value ${obj[property]}`;
    } else {
        return `The property ${property} is not found`;
    }
};

console.log(findProperty(person, "age"));
console.log(findProperty(person, "gender"));
