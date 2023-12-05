const info={
    name:'Ines Ikirezi',
    age:12,
    location: 'bumbogo',
    
};


const searchKey =(key)=>{

 if (info.hasOwnProperty(key)) {
    return `the key ${key} is found with value ${info[key]}`;
 } else {
    return `the key ${key} is not found `;
 }

};

console.log(searchKey("name"));
console.log(searchKey("age"));