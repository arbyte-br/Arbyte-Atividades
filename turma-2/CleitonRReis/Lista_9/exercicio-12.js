/*
12 - Desestruture um array qualquer de três elementos em duas variáveis. 
A primeira deve conter o primeiro valor do array e a segunda o último valor do array.
*/

let arr = ['Cleiton', 'Reis', '23 anos'];

let [part1, , ...part2] = arr;

console.log(part1, part2);