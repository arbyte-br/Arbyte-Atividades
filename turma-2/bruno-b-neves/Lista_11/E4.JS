const toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit-32);
}
let celsius = toCelsius(77);
console.log(`The temperature is ${celsius} Celsius`);
