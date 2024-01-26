// // Highest Number

// let x = [1,50, 60, 4]

// function highestNumber(num) {
//     if(num.length === 0) {
//         return null;
//     }
    
//     return Math.max(...num)
// }

// let highestNum = highestNumber(x)
// console.log(highestNum);

function getHighest(numArray) {
    let holder = 0;

    for (let x of numArray) {
        if (holder > x) {
            holder = x
        }
    }

    return holder;
}




