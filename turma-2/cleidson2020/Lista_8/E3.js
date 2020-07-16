let fs = require ('fs');

let lerArquivo = fs.readFileSync ('carro.json');

let objeto = JSON.parse(lerArquivo);

console.log (objeto);