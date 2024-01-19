function returnUniqueNums(numberArray) {
    let frequency = {};
    let uniqueElements = [];

    for (let x of numberArray) {
        if (frequency[x]) {
            frequency[x] += 1;
        } else {
            frequency[x] = 1;
        }
    }

    for (let a in frequency) {
        if (frequency[a] === 1) {
            uniqueElements.push(a);
        }
    }

    return uniqueElements;
}

let myArray = [54, 45, 4555, 23, 45, 4555, 12];
console.log(returnUniqueNums(myArray));
