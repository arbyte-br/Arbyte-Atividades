// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }var x = toCelsius(77);
// var text = "The temperature is " + x + " Celsius";

const toCelsius = (fahrenheit) => (5/9) * (fahrenheit-32);
console.log(`The temperature is ${toCelsius(77)} Celsius`);