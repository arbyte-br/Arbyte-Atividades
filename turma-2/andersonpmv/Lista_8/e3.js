let fileSystem = require('fs');

let readJson = fileSystem.readFileSync('carro.json');

let obj = JSON.parse(readJson);

console.log(obj);