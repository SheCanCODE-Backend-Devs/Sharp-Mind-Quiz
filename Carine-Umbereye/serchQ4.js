const student={
    id:1,
    Name : 'UMBEREYE Carine',
    age : 22,
    gender :'Female',
    address : '123456789',
    city : 'Cali',
    state : 'California'
};


const searchKey =(key)=>{

 if (student.hasOwnProperty(key)) {
    return `The key ${key} is found with value ${student[key]}`;
 } else {
    return `The key ${key} is not found `;
 }

};

console.log(searchKey("Name"));
console.log(searchKey("city"));