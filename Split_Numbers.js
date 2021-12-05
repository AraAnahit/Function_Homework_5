function splitNUMBERS(numbers) {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      } else {
        odd.push(numbers[i]);
      }
    }
 let x = [odd, even]
    return x;
  }
  console.log(splitNUMBERS([45,12,3,6,17,0]))
  console.log (splitNUMBERS([1,3,5,9]))