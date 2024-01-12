  const myArray = [1, 2, 3, 4, 2, 5, 5, 5, 2, 6];
  const variableToCount = 5;
 
  function countOccurrences(num, x) {
    let count = 0;
  
    for (let i = 0; i < num.length; i++){
      if (num[i] === x) {
        count++;
      }
    }
  
    return count;
  }
  
  const result = countOccurrences(myArray, variableToCount);
  console.log(`The variable ${variableToCount} occurs ${result} times in the array.`);