const book={
    title:'The monkey',
    author:'aline',
    pages:30
};


const searchKey =(key)=>{

 if (book.hasOwnProperty(key)) {
    return `the key ${key} is found with value ${book[key]}`;
 } else {
    return `the key ${key} is not found `;
 }

};

console.log(searchKey("author"));
console.log(searchKey("page"));