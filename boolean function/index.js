function evenOrOdd(number,boolean) {
    if (boolean === true) {
        return addOddNumber(number)
    }
    else if (boolean === false) {
        return addEvenNumber(number)
    }
}

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

function addEvenNumber(number) {
    if (number < 0) {
        return 0;
    }    

    let sum = 0;
    let cycle = number;

    while (cycle > 0) {
        if (cycle % 2 == 0) {
            sum = sum + cycle;
        }
        
        cycle = cycle - 1;
    }      
    return sum;
}    



