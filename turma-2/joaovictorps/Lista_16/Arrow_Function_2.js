const cars = require('./cars.json');

let japoneseCars = 0
cars.forEach(car => {
    car.Origin == "Japan";
    japoneseCars++
});
console.log(`Japonese cars: ${japoneseCars}`)

/* const carsJapan = cars.map(carro => {
    carro.Origin == "Japan"; 
    return carro;
});

carsJapan.forEach(carro => console.log(carro.Car))

console.log(`Carros do Japão: ${carsJapan.length}`) */

/* const japoneseCars = (cars) => {
    let carsJapan = 0
    cars.forEach(car => {
        car.Origin == "Japan"
        carsJapan++
    });
    console.log(carsJapan)
}

japoneseCars(cars) */
