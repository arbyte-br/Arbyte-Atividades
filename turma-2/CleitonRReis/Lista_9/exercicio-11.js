/*
11 - Desestruture um array qualquer de 5 elementos em três variáveis. 
As duas primeiras devem conter os dois primeiros elementos do array e o terceiro os outros 3 elementos que sobraram.
*/

let arr = ['Cleiton', 'Reis', '23 anos', 'Rita', '25 anos'];

let [part1, part2, ...part3] = arr;  

console.log(part1, part2, part3)