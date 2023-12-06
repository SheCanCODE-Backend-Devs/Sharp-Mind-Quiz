const modifierString=(string,position,value)=>{
    var splitSring=string.split('');
    splitSring[position]=value;
    return splitSring.join('');
 };
 
 console.log( modifierString("Caline",2,"r"));
 