let rs = require('readline-sync');

let palavra = rs.question("Digite uma palavra: ")

let erros = ["np", "nb"]

let deuErro = false;
for (let i = 0 ; i < erros.length; i++) {
    if (palavra.includes(erros[i])) {
        deuErro = true;
        break;
    };
}
deuErro ? console.log('A palavra está escrita de forma incorreta, antes de "P" e "B" se usa "M".') : console.log("A palavra está correta");

