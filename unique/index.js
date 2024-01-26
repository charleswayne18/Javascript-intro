function returnUniqueNums(numberArray) {

    // Create an empty object to store the frequency of each number
    let frequency = {};

   // Create an empty array to store unique elements 
    let uniqueElements = [];

    // Loop through each element in the input array
    for (let x of numberArray) {

// If the element is already in the frequency object, increment its count        
        if (frequency[x]) {
            frequency[x] += 1;

 // If the element is not in the frequency dictionary, add it with a count of 1           
        } else {
            frequency[x] = 1;
        }
    }

    // Loop through each key-value pair in the frequency object (for in is for object)
    for (let a in frequency) {

    // if the count is equal to 1, add it to unique elements array
        if (frequency[a] === 1) {
            uniqueElements.push(a);
        }
    }

// Return the array containing unique elements    
    return uniqueElements;
}

let myArray = [54, 45, 4555, 23, 45, 4555, 12];
console.log(returnUniqueNums(myArray));
