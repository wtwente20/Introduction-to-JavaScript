let number = 4936;
let ones = number % 10;
let tens = ((number - ones) / 10) % 10;
let hundreds = (((number - ones) / 10) / 10) % 10;
let thousands = ((((number - ones) / 10) / 10) / 10) % 10;

console.log('Number: ' + number);
console.log('Ones: ' + ones);
console.log('Tens: ' + tens);
console.log('Hundreds: ' + hundreds);
console.log('Thousands: ' + thousands);
