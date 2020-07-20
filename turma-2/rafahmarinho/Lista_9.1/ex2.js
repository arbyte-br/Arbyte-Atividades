// (Obrigatório) Use o spread operator para transformar o array [' a ', ' b ', ' c '] em
// [' a ', ' b ', ' c ', ' a ', ' b ', ' c ']

let array = ['a','b','c']
let arrayDois = [...array,...array]

console.log(arrayDois)