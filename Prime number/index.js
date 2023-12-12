
let number = prompt('Input a number');
let answer = allPrimeNumbers(number);

function allPrimeNumbers(number) {
    let value = [];
    let cycle = number;

    while (cycle > 1) {
        if (isPrime(cycle)) {
            value.push(cycle);
        }

        cycle = cycle - 1;
    }

    return value;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    let a = 2;
    while (a * a <= number) {
        if (number % a === 0) {
            return false;
        }
        a = a + 1;
    }

    return true;
}

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

alert('Prime numbers from the number to zero: ' + answer);

document.write('Prime numbers from the number to zero: ' + answer)
