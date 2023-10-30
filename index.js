const a = 823;
const b = 7482;
const c = 54156;
const d = 516;
const e = 546;
const f = 98;
const g = 7491;
const h = 3541;
const i = 8423;
const j = 1561;

const sum = a + b + c + d + e + f + g + h + i + j;
const numbersLength = 10;

const average = sum / numbersLength;

console.log(average);

const variance = ((a - average)**2 + (b - average)**2 + (c + average)**2 + (d + average)**2 + (e - average)**2 + (f - average)**2 + (g - average)**2 + (h - average)**2 
+ (i - average)**2 + (j - average)**2) / (numbersLength - 1);

console.log(variance);
