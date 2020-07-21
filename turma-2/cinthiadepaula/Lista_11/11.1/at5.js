const rs = require('readline-sync');


const usuario = {
    nome: 'Mayara',
    idade: 25
};

const mostrarIdade = ({idade}) => idade;
console.log(mostrarIdade(usuario));