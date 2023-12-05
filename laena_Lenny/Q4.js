const find =(id)=>{
    var found={};
    found = booksDatabase.find(ele=>ele.id===id);
    if (!found) {
        console.log("\n Book not Found\n");
    }
    else{
        console.log("\nFound Book:\n");
        console.log(found);
    }
 
}

let booksDatabase=[
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925 
    },
    { 
        id: 2, 
        title: 'To Kill a Mockingbird', 
        author: 'Harper Lee', 
        year: 1960 
    },
         
    { id: 3,
         title: '1984', 
        author: 'George Orwell', 
        year: 1949 
    },
];

find(1);