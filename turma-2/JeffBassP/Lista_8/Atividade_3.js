let fs = require('fs');

let arquivoJson = fs.readFileSync('carro.json');
 
let obj = JSON.parse(arquivoJson);

console.log(obj);
