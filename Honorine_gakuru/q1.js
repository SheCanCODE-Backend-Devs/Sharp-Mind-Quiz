function convertUpperCase(arr){
    const uppercasedArray=[];
    for(let i=0; i<arr.length; i++){
        uppercasedArray.push(arr[i].toUpperCase());
    }
    return uppercasedArray;
}
console.log(convertUpperCase(["muhire","tomato","kelly","dianah"]));


