const food={
    foodname:'shushi rice ',
    price:8900,
    quantiy:'full'
};


const searchKey =(key)=>{

 if (food.hasOwnProperty(key)) {
    return `the key ${key} is found with value ${food[key]}`;
 } else {
    return `the key ${key} is not found `;
 }

};

console.log(searchKey("price"));
console.log(searchKey("foodname"));