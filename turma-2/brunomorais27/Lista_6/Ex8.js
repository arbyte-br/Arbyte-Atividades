let rs = require('readline-sync');
let palavra = rs.question("Digite uma palavra: ").toLowerCase()
let Vogal = false;
let vogais = ['a','e','i','o','u']
for (let i = 0; i < vogais.length;i++){
    if (palavra.indexOf(vogais[i]) !== -1) {
        Vogal = true;
    }
}

Vogal ? console.log('Existem vogais nesta palavra.') : console.log('Não existem vogais nesta palavra.');