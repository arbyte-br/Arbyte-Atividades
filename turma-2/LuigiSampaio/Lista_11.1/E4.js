/* function toCelsius(fahrenheit) {
    return(5/9) * (fahrenheit-32);
}

var x = toCelsius(77);
var text = 'The temperature is' + X + ' Celsius';

console.log(text)
*/

const toCelsius = (fahrenheit) => {
    const calc =  ((5/9) * (fahrenheit-32));
    return `The temperature is ${calc} Celsius`
}

console.log(toCelsius(77));


const toFahrenheit = (celsius) => {
    const calc = (celsius * 1.8) + 32
    return `The temperature is ${calc} Fahrenheit`
}

console.log(toFahrenheit(25))
