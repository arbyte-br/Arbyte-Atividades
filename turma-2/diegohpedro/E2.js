// (Obrigatório) Use o spread operator para transformar o array ['a', 'b', 'c'] em
// ['a', 'b', 'c', 'a', 'b', 'c']

const letras = ['a', 'b', 'c']

const outrasLetras = ['a', 'b', 'c', ...letras]
console.log(outrasLetras)