let remainingChances = 10;
const answer = 45;

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}    

while (remainingChances > 0) {
    let guess;
    guess = prompt('Guess a number between 1 and 100');

    if (isNumber(guess)) {
        guess = parseFloat(guess);

        if (guess === answer) {
            document.write("Congratulations, you guessed it right!");
            break;
        } 
        else if (guess < answer) {
            guess = prompt("Too low, try again.");
        } else {
            guess = prompt("Too high, try again.");
        }

        remainingChances -= 2;

        if (remainingChances === 0) {
            document.write("You ran out of chances. The correct answer was 45.");
        }
    } else {
        prompt("Invalid input. Please enter a valid number.");
    }
}

