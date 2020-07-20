/*
15 - Escreva uma função que multiplica um número pelo outro. 
Se o segundo parâmetro não for passado, a função deve supor que o primeiro número deve ser multiplicado por um.
*/

function multiplica(num1, num2 = 1) {
    return num1 * num2;
}

let res = multiplica(2, 5);
console.log(res);