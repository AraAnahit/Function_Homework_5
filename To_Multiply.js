function toMulti (arr){
    let multi = 1
    for (let i = 0; i < arr.length; i++){
        multi*= arr[i];
}
return multi;
}
console.log(toMulti([1,2,3,3]))

