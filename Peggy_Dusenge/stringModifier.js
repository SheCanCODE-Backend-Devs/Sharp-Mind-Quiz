const stringModifier=(str,index,value)=>{
   var a=str.split('');
   a[index]=value;
   return a.join('');
};

console.log(stringModifier("Happi",4,"y"));
