const userInput = prompt('Please enter a string:')

if (userInput) {

    let reversedString = '';
    let cycle = userInput.length - 1;

    while (cycle >= 0) {
        reversedString = reversedString + userInput[cycle];
        cycle = cycle - 1;
    }

    console.log('Reversed string: ' + reversedString);
} else {
    console.log('No input received.');
}
