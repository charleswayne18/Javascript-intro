// function  addOddNumber(number) {
//     if (number < 0) {
//         return 0;
//     }    

//     let sum = 0;
//     let cycle = number;

//     while (cycle > 0) {
       
//         if (cycle % 2 == 0) {
//             number = number -1;
//         }
//         else if (cycle % 2 !== 0) {
//             sum = sum + cycle;
//         }

//         cycle = cycle - 2;
        
//     }      
//     return sum;
// }    

// console.log(addOddNumber(7))


function addOddNumber(number) {
    if (number < 0) {
        return 0;
    }    

    let sum = 0;
    let cycle = number;

    while (cycle > 0) {
        if (cycle % 2 !== 0) {
            sum = sum + cycle;
        }
        
        cycle = cycle - 1;
    }      
    return sum;
}    

console.log(addOddNumber(9));
