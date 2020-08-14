/*modulo do exercicio 4*/
const mediana = require(`median`);
const alunos = []

function media(alunos) {
     
    return mediana(alunos)
}

module.exports = {
    media,
    alunos
}
