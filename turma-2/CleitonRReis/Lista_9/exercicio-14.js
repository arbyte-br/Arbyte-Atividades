/*
14 - Desestruture um objeto que contém os atributos 
{ a: 'a', b: 'b', c: 'c', d: 'd' } em trêsvariáveis A = 'a', B = 'b' e C = 'c';
*/

let meuObjeto = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
};

let { a: A, b: B, c: C } = meuObjeto;

console.log(A, B, C);