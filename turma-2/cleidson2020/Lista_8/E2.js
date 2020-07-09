let fs = require('fs');
let rs = require('readline-sync');


let carro = {
    marca: rs. question("Marca: "),
    modelo: rs.question("Modelo: "),
    ano: rs.question("Ano: ")
};


let carroJsonCamingo = "carro.json";
let carroString = JSON.stringify(carro);
fs.writeFileSync(carroJsonCamingo, carroString);

console.log(carroString);
//console.log(carroJsonCamingo);

