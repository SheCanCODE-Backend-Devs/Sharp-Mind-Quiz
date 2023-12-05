const stringModifier=(str,position,value)=>{
    var name;str.split('');
    name[position]=value;
    return name.join('');
 };
 
 console.log(stringModifier("alle",4,"n"));