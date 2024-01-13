// Lowest Number

let x = [1,50, 60, 4]

function lowestNumber(num) {
    if(num.length === 0) {
        return null;
    }
    
    return Math.min(...num)
}

let lowestNum = lowestNumber(x)
console.log(lowestNum);


