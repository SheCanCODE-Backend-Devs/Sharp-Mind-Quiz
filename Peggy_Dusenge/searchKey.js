const book={
    title:'The Hobbit',
    author:'Glitter',
    pages:1000
};


const searchKey =(key)=>{

 if (book.hasOwnProperty(key)) {
    return `the key ${key} is found with value ${book[key]}`;
 } else {
    return `the key ${key} is not found `;
 }

};

console.log(searchKey("author"));
console.log(searchKey("year"));