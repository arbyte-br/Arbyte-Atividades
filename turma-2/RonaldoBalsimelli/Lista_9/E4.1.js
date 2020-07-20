/* 4 - (Obrigatório) Use o spread operator para transformar as três variáveis abaixo em um só
objeto igual a
{ a: 'a', b: 'b', c: 'c', d: 'd', e: 'e' }
const obj = {
a: 'a',
b: 'b',
c: 'c',
}
const d = 'd';
const e = 'e' */

const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
}

const d = 'd';
const e = 'e'

console.log({...obj, d, e})
