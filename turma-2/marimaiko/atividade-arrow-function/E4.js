// Converta o código abaixo para ecmascript 6
// function toCelsius(fahrenheit) {
// return (5/9) * (fahrenheit-32);
// }
// var x = toCelsius(77);
// var text = "The temperature is " + x + " Celsius";
// console.log(text)

const toCelsius = fahrenheit =>
{
    Celsius =(5/9)*(fahrenheit-32);
    return Celsius;
}

console.log(`The temperature is ${toCelsius(77)} Celsius`);