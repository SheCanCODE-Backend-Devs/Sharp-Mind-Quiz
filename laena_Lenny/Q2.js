function stringModifier(word,b,c){
    var mod = word.split("");
    mod[b]= c;

    return mod.join("");
}

console.log(stringModifier("yip",1,"u"));