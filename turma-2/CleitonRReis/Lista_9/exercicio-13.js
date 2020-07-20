/*
13 - Desestruture um objeto que contém os atributos 
{ a: 'a', b: 'b', c: 'c', d: 'd' } em três variáveis a, b e c;
*/

let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
};

let { a: part1, b: part2, ...part3 } = obj;

console.log(part1, part2);
console.log(part3);