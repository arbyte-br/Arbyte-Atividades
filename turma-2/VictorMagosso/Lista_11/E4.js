//ES6
rs = require('readline-sync')
const toCelsius = fahrenheit => ((5/9) * (fahrenheit - 32)).toFixed(2)

let insertTemp = rs.questionFloat('Type a temperature: ')
console.log(`The temperature is ${toCelsius(insertTemp)} Celsius.`)