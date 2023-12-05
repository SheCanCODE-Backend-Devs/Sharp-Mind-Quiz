//4.Implement a function that searches for a specific key in an object.
const song={
    title:'He is alive',
    owner:'Ange',
    year:2020
    
};


const searchKey =(key)=>{

 if (song.hasOwnProperty(key)) {
    return `the key ${key} is found ${song[key]}`;
 } else {
    return `the key ${key} is not found `;
 }

};

console.log(searchKey("year"));