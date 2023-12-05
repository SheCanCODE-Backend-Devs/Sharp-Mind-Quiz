function stringModifier(word,a,b){
    var c= word.split('');
    c[a] = b;
    c[b] = a;
    return c.join(''); 
}
console.log(stringModifier("aline",4,'a'));