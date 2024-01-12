let x = [1,50, 60, 4]

function DetHighestNum(num) {
    if(num.length === 0) {
        return null;
    }
    
    return Math.max(...num)
}

let highestNum = DetHighestNum(x)
console.log(highestNum);

let roundedValue = Math.ceil(x);
