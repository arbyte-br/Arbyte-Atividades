// (Obrigatório) Use o spread operator para transformar as três variáveis abaixo em um só
// objeto igual a
// { a: ' a ', b: ' b ', c: ' c ', d: ' d ', e: ' e ' }

const obj = {
a : ' a ',
b : ' b ',
c : ' c ',
}
const d = ' d ';
const e = ' e '

const tresEmUm = {...obj,d,e}

console.log(tresEmUm)