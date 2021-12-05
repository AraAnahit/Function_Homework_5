function toDivide (arr){
    let divide = arr[0]
    for (let i = 1; i < arr.length; i++){
        divide/= arr[i];
}
return divide;
}
console.log(toDivide([100,2,5]))