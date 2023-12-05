function converter(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i].toUpperCase());
    }
    return result.join('');

}
console.log('converter');
  