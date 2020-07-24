// 4 - (Obrigatório) Use o spread operator para transformar 
//as três variáveis abaixo em um só objeto igual a
// { a: ' a ', b: ' b ', c: ' c ', d: ' d ', e: ' e ' }
// const obj = {
// a : ' a ',
// b : ' b ',
// c : ' c ',
// }
// const d = ' d ';
// const e = ' e '


const obj = {
a: ' a ',
b: ' b ',
c : ' c ',

}

const d = ' d ';
const e = ' e ';

const obj2 = {
d: ' d ',
e: ' e '
}

const x=[obj]
const y=[...x, obj2]
console.log('y: ', y);


// const n = [{ a : ' a ',  b : ' b ', c : ' c ', d: ' d ', e: ' e '}]
// console.log('n: ', n);



























// const usuario = {
//     id: 1,
//     apelido: 'acarrara',
//     nomeCompleto: {
//         nome: 'Agostinho',
//         sobrenome: 'Carrara'
//     }
// }
// const {apelido, nomeCompleto: {nome} } = usuario
// console.log('Apelido:', apelido)
// console.log('Primeiro nome:', nome)