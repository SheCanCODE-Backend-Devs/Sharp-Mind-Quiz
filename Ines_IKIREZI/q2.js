function stringModifier(){
    var a=str.split('');
    a[index]=value;
    return a.join('');
 };
 
 console.log(stringModifier("Ines",2,"y"));