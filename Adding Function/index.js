function addNumbers(number) {
    let sum = 0;
    let a = 1;
  
    while (a <= number) {
      sum = sum + a;
      a = a + 1;
    }
    if (number < 0){
        return 0;
    }
  
    return sum;
  }
  
  console.log(addNumbers(3))