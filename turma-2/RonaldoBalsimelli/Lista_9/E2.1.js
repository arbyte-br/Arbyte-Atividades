/*2 - (Obrigatório) Use o spread operator para transformar o array ['a', 'b', 'c'] em
['a', 'b', 'c', 'a', 'b', 'c']*/


const letras = ["a", "b", "c"]
const resultado = [...letras, ...letras]
console.log(resultado)