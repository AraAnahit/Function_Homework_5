function toMinus (arr){
    let minus =arr[0]
    for (let i = 1; i < arr.length; i++){
        minus-= arr[i];
}
return minus;
}
console.log(toMinus([469,2,3,467]))

