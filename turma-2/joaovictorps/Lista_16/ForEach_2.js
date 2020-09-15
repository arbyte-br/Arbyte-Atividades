const cars = require('./cars.json');

let total = 0;

cars.forEach(car => {
    if(car.Origin == "US") {
        total+= car.Horsepower
    }
})
console.log(total)